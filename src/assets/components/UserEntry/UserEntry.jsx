import React from "react";
import { useState } from "react";

const UserEntry = ({ entry, setEntry }) => {
  const maxChars = 500;
  return (
    <div className="flex flex-col justify-between gap-5 w-full max-w-xl mx-auto bg-white rounded-2xl shadow p-8 min-h-[320px]">
      {/* user input field */}
      <textarea
        value={entry}
        onChange={(e) => {
          if (e.target.value.length <= maxChars) {
            setEntry(e.target.value);
          }
        }}
        placeholder="Write your thoughts here..."
        className="w-full h-64 bg-transparent text-neutral-800 placeholder:text-neutral-400 focus:outline-none resize-none"
      />

      {/* Chacter Counter + Progress Bar */}
      <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
        <span className="text-xs text-neutral-400">
          {entry.length} / {maxChars}
        </span>
        <div className="w-20 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300"
            style={{ width: `${(entry.length / maxChars) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default UserEntry;
