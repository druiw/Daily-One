import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import DailyQuestion from "../DailyQuestion/DailyQuestion.jsx";
import UserEntry from "../UserEntry/UserEntry.jsx";
import SaveEntry from "../SaveEntry/SaveEntry.jsx";
import StreakCounter from "../StreakCounter/StreakCounter.jsx";

const HomePage = () => {
  const [entry, setEntry] = useState("");
  const [prompt, setPrompt] = useState("");

  // get random prompt from api
  useEffect(() => {
    async function getPrompts() {
      try {
        const response = await fetch("http://localhost:5000/api/prompts");

        if (!response.ok) {
          console.log("Could not fetch resource.");
          return;
        }

        const data = await response.json();
        const prompts = data.map((p) => p.text);
        setPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
      } catch (error) {
        console.log(error);
      }
    }

    getPrompts();
  }, []);

  const handleSubmit = async () => {
    const userId = localStorage.getItem("userId");

    if (!entry.trim()) {
      return;
    }

    console.log("userId:", userId);
    console.log("prompt:", prompt);
    console.log("entry:", entry);

    try {
      const response = await fetch("http://localhost:5000/api/entries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: entry,
          prompt: prompt,
          userId: userId,
        }),
      });

      const text = await response.text();
      console.log("Raw server response:", text);
    } catch (err) {
      console.error("Error saving entry:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-6 bg-[rgb(249,249,249)]">
      <NavBar />
      <StreakCounter />
      <DailyQuestion prompt={prompt} setPrompt={setPrompt} />
      <UserEntry entry={entry} setEntry={setEntry} prompt={prompt} />
      <SaveEntry onSave={handleSubmit} />
    </div>
  );
};

export default HomePage;
