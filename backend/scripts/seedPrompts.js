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
  {
    text: "What truth have you been avoiding about yourself?",
    category: "reflection",
  },
  {
    text: "What emotion did you feel most strongly today, and why?",
    category: "reflection",
  },
  {
    text: "What part of your life feels out of alignment right now?",
    category: "reflection",
  },
  {
    text: "What do you keep postponing because it feels uncomfortable?",
    category: "reflection",
  },
  {
    text: "When was the last time you felt truly present?",
    category: "reflection",
  },

  {
    text: "What made you feel proud of yourself today?",
    category: "confidence",
  },
  {
    text: "What have you accomplished that you rarely give yourself credit for?",
    category: "confidence",
  },
  {
    text: "What strength do others see in you that you sometimes forget?",
    category: "confidence",
  },
  {
    text: "What challenge have you survived that proves your resilience?",
    category: "confidence",
  },
  {
    text: "What would you do if you trusted yourself more?",
    category: "confidence",
  },

  {
    text: "What belief about yourself is holding you back?",
    category: "growth",
  },
  {
    text: "What habit would most improve your life if you committed to it?",
    category: "growth",
  },
  { text: "What lesson keeps showing up in your life?", category: "growth" },
  {
    text: "Who are you becoming through your current struggles?",
    category: "growth",
  },
  { text: "What does growth look like for you right now?", category: "growth" },

  { text: "What drained your energy today?", category: "wellbeing" },
  {
    text: "What gave you even a small sense of peace today?",
    category: "wellbeing",
  },
  {
    text: "How did your body feel today, and what might it be telling you?",
    category: "wellbeing",
  },
  { text: "What do you need more rest from?", category: "wellbeing" },
  {
    text: "What do you need more care around right now?",
    category: "wellbeing",
  },

  {
    text: "What are you afraid would happen if you slowed down?",
    category: "reflection",
  },
  {
    text: "What feeling have you been distracting yourself from?",
    category: "reflection",
  },
  {
    text: "What memory has been resurfacing lately, and why?",
    category: "reflection",
  },
  {
    text: "What are you holding onto that you no longer need?",
    category: "reflection",
  },
  {
    text: "What would you say if you were being completely honest with yourself?",
    category: "reflection",
  },

  { text: "When do you feel most like yourself?", category: "identity" },
  {
    text: "What parts of yourself do you hide from others?",
    category: "identity",
  },
  {
    text: "How has your definition of success changed over time?",
    category: "identity",
  },
  { text: "Who are you when no one is watching?", category: "identity" },
  {
    text: "What version of yourself are you outgrowing?",
    category: "identity",
  },

  {
    text: "What relationship in your life needs more attention?",
    category: "relationships",
  },
  {
    text: "Where do you struggle to set boundaries?",
    category: "relationships",
  },
  {
    text: "What do you need to forgive — yourself or someone else?",
    category: "relationships",
  },
  {
    text: "What pattern do you notice in your relationships?",
    category: "relationships",
  },
  {
    text: "What does feeling truly understood mean to you?",
    category: "relationships",
  },

  {
    text: "What fear has been quietly influencing your decisions?",
    category: "reflection",
  },
  {
    text: "What are you trying to control that you need to let go of?",
    category: "reflection",
  },
  {
    text: "What does your inner critic sound like lately?",
    category: "reflection",
  },
  {
    text: "What would change if you believed you were enough?",
    category: "reflection",
  },
  {
    text: "What does your intuition keep nudging you toward?",
    category: "reflection",
  },

  {
    text: "What does balance look like in your life right now?",
    category: "wellbeing",
  },
  {
    text: "What drains you that you keep saying yes to?",
    category: "wellbeing",
  },
  {
    text: "What nourishes you that you’ve been neglecting?",
    category: "wellbeing",
  },
  { text: "How do you typically respond to stress?", category: "wellbeing" },
  {
    text: "What would rest look like if you allowed yourself to take it?",
    category: "wellbeing",
  },

  { text: "What risk feels worth taking right now?", category: "growth" },
  {
    text: "What would your future self thank you for starting today?",
    category: "growth",
  },
  {
    text: "What comfort zone are you ready to step out of?",
    category: "growth",
  },
  {
    text: "What does progress mean to you at this stage of life?",
    category: "growth",
  },
  {
    text: "What small change could make a big difference?",
    category: "growth",
  },

  { text: "What does home feel like to you?", category: "identity" },
  { text: "What values matter most to you right now?", category: "identity" },
  {
    text: "What are you learning about yourself lately?",
    category: "identity",
  },
  {
    text: "What version of yourself do you feel most proud of?",
    category: "identity",
  },
  {
    text: "What parts of your identity are still evolving?",
    category: "identity",
  },

  {
    text: "What are you grateful for that you usually overlook?",
    category: "reflection",
  },
  {
    text: "What moment from today would you want to remember?",
    category: "reflection",
  },
  {
    text: "What does your life need more honesty around?",
    category: "reflection",
  },
  {
    text: "What would you do differently if fear wasn’t a factor?",
    category: "reflection",
  },
  {
    text: "What question do you wish someone would ask you?",
    category: "reflection",
  },
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
