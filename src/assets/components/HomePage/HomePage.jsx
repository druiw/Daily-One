import React from "react";
import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar.jsx";

const HomePage = () => {
  const url = "http://localhost:5000/api/prompts";

  // Get all prompts from database and store in an array called prompts
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
      } catch (error) {
        console.log(error);
      }
    }

    getPrompts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col gap-2 bg-[rgb(249,249,249)]">
      <NavBar />
    </div>
  );
};

export default HomePage;
