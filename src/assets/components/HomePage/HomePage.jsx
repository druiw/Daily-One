import React from "react";
import { useState } from "react";
import NavBar from "../NavBar/NavBar.jsx";
import DailyQuestion from "../DailyQuestion/DailyQuestion.jsx";
import UserEntry from "../UserEntry/UserEntry.jsx";
import SaveEntry from "../SaveEntry/SaveEntry.jsx";
import StreakCounter from "../StreakCounter/StreakCounter.jsx";

const HomePage = () => {
  const [entry, setEntry] = useState("");
  const handleSave = () => {
    if (entry.trim()) {
      alert("Entry Saved");
      setEntry("");
    }
  };
  return (
    <div className="min-h-screen flex flex-col gap-6 bg-[rgb(249,249,249)]">
      <NavBar />
      <StreakCounter />
      <DailyQuestion />
      <UserEntry entry={entry} setEntry={setEntry} />
      <SaveEntry onSave={handleSave} />
    </div>
  );
};

export default HomePage;
