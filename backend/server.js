const dns = require("node:dns");
// Workaround: some networks block MongoDB SRV DNS lookups
dns.setServers(["1.1.1.1", "8.8.8.8"]);

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const promptsRoutes = require("./routes/prompts");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/prompts", promptsRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Daily One API is running");
});

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.log("Missing URI in config.env");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });

// user schema model
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    passwordHash: { type: String, required: true },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

// API Routes
app.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and Password are required." });
    }

    // check if user exists
    const existing = await User.findOne({ email });
    if (existing) {
      console.log("User tried to sign up but email already in use.");
      return res.status(409).json({ message: "Email already in use." });
    }

    // hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // create user
    const newUser = await User.create({ email, passwordHash });
    console.log("User Created:", newUser.email);

    res.status(201).json({
      message: "User Created",
      user: { id: newUser._id, email: newUser.email },
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
});
