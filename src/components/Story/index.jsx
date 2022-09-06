import { CContainer, CImage } from "@coreui/bootstrap-react";
import React from "react";
import Content from "./Content";
import object01 from "../../assets/pngs/object-01.png";
import object02 from "../../assets/pngs/object-02.png";
import object03 from "../../assets/pngs/object-03.png";
import object04 from "../../assets/pngs/object-04.png";
import object05 from "../../assets/pngs/object-05.png";
import object06 from "../../assets/pngs/object-06.png";
import object07 from "../../assets/pngs/object-07.png";

const Story = () => {
  return (
    <CContainer fluid className="bg-cerulean py-36 px-0 overflow-hidden">
      <div className="relative">
        <h3 className="text-style-3 text-center text-sunYellow">BRAND STORY</h3>
        <p className="text-style-10 max-w-2xl mx-auto text-sunYellow mt-10">
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
          걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <Content />
        <CImage src={object01} className="absolute top-20 left-52" />
        <CImage src={object02} className="absolute -top-20 right-64" />
        <CImage src={object03} className="absolute -top-12 right-44" />
        <CImage
          src={object04}
          className="absolute top-1/4 right-0 translate-x-1/4"
        />
        <CImage src={object05} className="absolute bottom-2 right-0" />
        <div className="w-36 h-1 bg-blackTwo absolute bottom-12 left-48"></div>
        <CImage src={object06} className="absolute bottom-8 left-0" />
        <CImage src={object07} className="absolute bottom-8 left-48" />
      </div>
    </CContainer>
  );
};

export default Story;
