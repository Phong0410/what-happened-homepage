import React from "react";
import { CContainer, CRow } from "@coreui/bootstrap-react";
import ProductItem from "./ProductItem";
import SeeMoreButton from "../../../components/SeeMoreButton";

import { imgs } from "./productImgs";

const Products = () => {
  return (
    <CContainer fluid className="px-0 py-44 max-w-fit">
      <CRow
        xxl={{ cols: 5, gutter: 3 }}
        xl={{ cols: 3, gutter: 3 }}
        md={{ cols: 2, gutter: 3 }}
        xs={{ cols: 1, gutter: 3 }}
        className="w-5/6 mx-auto"
      >
        {imgs.map((img, index) => (
          <ProductItem
            src={img}
            title="[What happen] How to create "
            price={2500}
            heart={236}
            key={index}
          />
        ))}
      </CRow>
      <div className="flex justify-center pt-28">
        <SeeMoreButton />
      </div>
    </CContainer>
  );
};

export default Products;
