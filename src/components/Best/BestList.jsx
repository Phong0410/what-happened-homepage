import React from "react";
import { CCol, CRow } from "@coreui/bootstrap-react";
import BestItem from "./BestItem";

import bestImg01 from "../../assets/pngs/best-image-01.png";
import bestImg02 from "../../assets/pngs/best-image-02.png";
import bestImg03 from "../../assets/pngs/best-image-03.png";

const bestImgs = [bestImg01, bestImg02, bestImg03];

const BestList = () => {
  return (
    <CRow>
      {bestImgs.map((src, index) => (
        <CCol key={index} className="p-0">
          <BestItem src={src} no={index} />
        </CCol>
      ))}
    </CRow>
  );
};

export default BestList;
