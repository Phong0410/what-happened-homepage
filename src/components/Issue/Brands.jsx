import { CCol, CContainer, CImage, CRow } from "@coreui/bootstrap-react";
import React from "react";

import newsImg01 from "../../assets/pngs/news-img-01.png";
import newsImg03 from "../../assets/pngs/news-img-03.png";
import newsImg04 from "../../assets/pngs/news-img-04.png";
import newsImg05 from "../../assets/pngs/news-img-05.png";
import newsObject04 from "../../assets/pngs/news-object-04.png";
import newsObject03 from "../../assets/pngs/news-object-03.png";
import newsObject05 from "../../assets/pngs/news-object-05.png";

const Brands = () => {
  return (
    <CContainer fluid className="p-0">
      <CRow xs={{ cols: 2, gutter: 0 }} lg={{ cols: 5, gutter: 0 }}>
        <CCol>
          <div className="relative bg-brightOrangeTwo border-blackTwo border-2 h-full flex flex-col items-center justify-evenly">
            <p className="text-style-25 text-darkBrown w-52 break-words">
              WHPNISSUE
            </p>
            <CImage src={newsImg01} />
            <CImage
              src={newsObject03}
              className="absolute hidden xl:block bottom-0 translate-y-1/2 -right-6 z-10 "
            />
          </div>
        </CCol>
        <CCol>
          <div className="bg-darkBrown flex flex-col items-center justify-between relative">
            <p className="text-style-24 text-white my-2">B BRAND</p>
            <CImage src={newsImg04} />
            <CImage
              src={newsObject04}
              className="absolute hidden xl:block top-0 -translate-y-1/2 left-6"
            />
          </div>
        </CCol>
        <CCol>
          <div className="bg-darkBrown flex flex-col items-center justify-between">
            <p className="text-style-24 text-white my-2">C BRAND</p>
            <CImage src={newsImg03} />
          </div>
        </CCol>
        <CCol>
          <div className="relative bg-brightOrangeTwo flex flex-col items-center justify-between border-blackTwo border-2">
            <p className="text-style-24 text-white my-2">D BRAND</p>
            <CImage src={newsImg04} />
            <CImage
              src={newsObject05}
              className="absolute hidden xl:block -bottom-2 translate-y-1/2 -right-8 z-10"
            />
          </div>
        </CCol>
        <CCol>
          <div className="bg-darkBrown flex flex-col items-center justify-between">
            <p className="text-style-24 text-white my-2">E BRAND</p>
            <CImage src={newsImg05} />
          </div>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default Brands;
