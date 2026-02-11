import React from "react";

const SaveEntry = ({ onSave }) => {
  return (
    <button
      onClick={onSave}
      className="bg-green-600 rounded-2xl max-w-xl mx-auto w-full py-3 text-white"
    >
      Save Entry
    </button>
  );
};

export default SaveEntry;
