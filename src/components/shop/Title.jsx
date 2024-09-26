import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-xl font-Poppins uppercase lg:text-4xl">
        <span className="text-gray-800 dark:text-white">{text1}</span>{" "}
        <span className="text-primary/90 font-bold">{text2}</span>
      </p>
    </div>
  );
};

export default Title;
