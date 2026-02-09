import React from "react";
import NavBar from "../NavBar/NavBar.jsx";
import DailyQuestion from "../DailyQuestion/DailyQuestion.jsx";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2 bg-[rgb(249,249,249)]">
      <NavBar />
      <DailyQuestion />
    </div>
  );
};

export default HomePage;
