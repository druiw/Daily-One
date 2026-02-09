// Prompt Schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

const promptSchema = new Schema(
  {
    text: { type: String, required: true, trim: true },
    category: { type: String, default: "general" },
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
);

// Prevent duplicate questions if we choose to add more later and re-run the script
promptSchema.index({ text: 1 }, { unique: true });

module.exports = mongoose.model("Prompt", promptSchema);
