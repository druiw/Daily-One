// Seed prompts into MongoDB
const Prompt = require("../models/Prompt");
const mongoose = require("mongoose");
require("dotenv").config();

const dns = require("node:dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

// Prompts/Questions to send to the database.
// This is the main function of the app.
// Presenting these prompts to the user.
const prompts = [
  { text: "What are you avoiding right now, and why?", category: "reflection" },
  { text: "What made you feel proud today?", category: "confidence" },
  { text: "What do you need more of in your life?", category: "growth" },
  { text: "What drained your energy today?", category: "wellbeing" },
];

const MONGO_URI = process.env.MONGO_URI;

async function seedPrompts() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    let inserted = 0;
    for (const p of prompts) {
      try {
        await Prompt.create(p);
        inserted++;
      } catch (error) {
        if (error.code === 11000) {
          console.log("Duplicate prompt found: Skipping prompt...");
          continue;
        }
        throw error;
      }
    }

    console.log(`Seeding complete. Inserted ${inserted} prompts`);
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error("Seeding error: ", error);
    process.exit(1);
  }
}

seedPrompts();
