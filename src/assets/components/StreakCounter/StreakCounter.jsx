import React from "react";
import { useState } from "react";

const StreakCounter = () => {
  const [streak, setStreak] = useState(0);

  return (
    <div className="container text-center mx-auto md:max-w-36 px-4 rounded-xl bg-orange-400 opacity-75">
      {streak} Day Streak
    </div>
  );
};

export default StreakCounter;
