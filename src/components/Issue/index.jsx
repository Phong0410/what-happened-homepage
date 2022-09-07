import { CContainer, CImage } from "@coreui/bootstrap-react";
import React from "react";
import SeeMoreButton from "../SeeMoreButton";
import Brands from "./Brands";

import newsObject03_2 from "../../assets/pngs/news-object-03_2.png";
import newsObject02 from "../../assets/pngs/news-object-02.png";

const Issue = () => {
  return (
    <CContainer fluid className="bg-goldenrod py-40 px-0 relative">
      <div>
        <h3 className="sm:text-style-23 text-darkBrown text-center text-style-24">
          HAPPENED'S ISSUE
        </h3>
        <p className="text-style-9 max-w-2xl mx-auto mt-10">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <div className="flex justify-center mt-14">
          <SeeMoreButton />
        </div>
      </div>
      <div className="mt-32">
        <Brands />
      </div>
      <CImage
        src={newsObject03_2}
        className="absolute top-11 right-16 hidden lg:block"
      />
      <CImage
        src={newsObject02}
        className="absolute top-40 right-16 hidden lg:block"
      />
    </CContainer>
  );
};

export default Issue;
