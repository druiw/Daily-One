import React from "react";

const DailyQuestion = ({ prompt }) => {
  return (
    <div className="flex flex-col text-center md:text-left justify-center gap-5 w-full max-w-xl mx-auto bg-green-200 opacity-85 rounded-2xl shadow p-8">
      <p className="font-medium text-sm text-green-600">TODAY'S QUESTION</p>
      <div className="text-3xl">{prompt}</div>
    </div>
  );
};

export default DailyQuestion;
