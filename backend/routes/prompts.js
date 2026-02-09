// Get prompts from database
const express = require("express");
const router = express.Router();
const Prompt = require("../models/Prompt");

router.get("/", async (req, res) => {
  try {
    const prompts = await Prompt.find({ active: true });
    res.json(prompts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch prompts." });
  }
});

module.exports = router;
