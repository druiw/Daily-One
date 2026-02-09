import React from "react";
import { useEffect, useState } from "react";

const DailyQuestion = () => {
  const [prompt, setPrompt] = useState("");
  const [promptsArray, setPromptsArray] = useState([]);
  const url = "http://localhost:5000/api/prompts";

  // Get a random prompt from our array of prompts
  const getRandomPrompt = () => {
    if (!promptsArray.length) {
      console.log("No prompts found.");
      return null;
    }
    return promptsArray[Math.floor(Math.random() * promptsArray.length)];
  };

  // Get all prompts from database and store in an array of prompts
  useEffect(() => {
    async function getPrompts() {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          console.log(`Could not fetch resource.`);
        }

        const data = await response.json();
        const prompts = data.map((p) => p.text);
        console.log(prompts);
        setPrompt(prompts[Math.floor(Math.random() * prompts.length)]);
      } catch (error) {
        console.log(error);
      }
    }

    getPrompts();
  }, []);

  return (
    <div className="flex text-center justify-center gap-5 w-full max-w-md mx-auto bg-white rounded-2xl shadow p-8">
      {prompt}
    </div>
  );
};

export default DailyQuestion;
