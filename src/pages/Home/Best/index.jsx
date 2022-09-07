import React from "react";

import bestbg from "../../../assets/pngs/bes-bg.png";
import BestList from "./BestList";

const Best = () => {
  return (
    <div style={{ backgroundImage: `url(${bestbg})` }} className="h-max">
      <div className=" w-full h-full top-0 left-0">
        <h3 className="text-style-5 text-brightOrange pt-32">BEST PRODUCT</h3>
        <p className="text-style-16 text-brightOrange pt-12 max-w-2xl mx-auto">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </p>
        <div className="w-3/4 mx-auto mt-16">
          <BestList />
        </div>
      </div>
    </div>
  );
};

export default Best;
