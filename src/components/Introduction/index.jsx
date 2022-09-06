import { CImage } from "@coreui/bootstrap-react";
import React from "react";

import introductionBg from "../../assets/pngs/introduction-bg.png";

const Introduction = () => {
  return (
    <div className="relative">
      <CImage fluid src={introductionBg} />
      <div className="text-white absolute top-40 left-40 max-w-2xl">
        <h3 className="text-style-32">WHAT HAPPENDED!</h3>
        <p className="text-style-6 text-white mt-14">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first step
          to your brand's success. How to create mobile-optimized videos in
          minutes.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
