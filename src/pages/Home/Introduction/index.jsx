import React from "react";

import introductionBg from "../../../assets/pngs/introduction-bg.png";

const Introduction = () => {
  return (
    <div
      style={{ backgroundImage: `url(${introductionBg})` }}
      className="text-white py-44"
    >
      <h3 className="xl:ml-44 md:text-style-32 text-style-24 ml-4">
        WHAT HAPPENDED!
      </h3>
      <p className="text-style-6 text-white mt-14 max-w-2xl xl:ml-44 ml-4">
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first step to your
        brand's success. How to create mobile-optimized videos in minutes.
      </p>
    </div>
  );
};

export default Introduction;
