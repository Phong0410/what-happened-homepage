import { CCol, CImage } from "@coreui/bootstrap-react";
import React from "react";
import heartIcon from "../../assets/pngs/hearticon.png";

const numberFormat = new Intl.NumberFormat();

const ProductItem = ({ src, title, price, heart }) => {
  return (
    <CCol>
      <div className="w-fit mx-auto cursor-pointer hover:-translate-y-2 transition-all">
        <CImage src={src} />
        <p className="text-style-14 pt-3">{title}</p>
        <div className="flex justify-between">
          <span className="text-style-20">
            {numberFormat.format(price)} won
          </span>
          <span className="text-style-20 flex items-center">
            <img src={heartIcon} alt="icon" className="w-5 h-5 mr-1" />
            {numberFormat.format(heart)}
          </span>
        </div>
      </div>
    </CCol>
  );
};

export default ProductItem;
