import { CImage } from "@coreui/bootstrap-react";
import React from "react";
import producticonBg from "../../../assets/pngs/producticon-bg.png";

const BestItem = ({ src, no }) => {
  return (
    <div className="relative w-fit mx-auto">
      <CImage src={src} />
      <div className="absolute top-0 left-0 w-2/12 -translate-y-1/2">
        <CImage src={producticonBg} />
        <span className="text-style-17 underline absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {no + 1}
        </span>
      </div>
      <div className="absolute w-9/12 bg-white bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 px-4 py-2 border-darkmaroon border-2 flex items-center justify-between">
        <p className="text-style text-blackThree w-48">
          How to create mobile-optimized
        </p>
        <button className="bg-blackThree hover:bg-cerulean text-white text-style flex justify-center items-center rounded-full w-16 h-16 cursor-pointer">
          GO
        </button>
      </div>
    </div>
  );
};

export default BestItem;
