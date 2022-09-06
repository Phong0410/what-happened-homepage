import React from "react";
import { CContainer } from "@coreui/bootstrap-react";

import Header from "../../components/Header";
import MainBanner from "../../components/MainBanner";
import Introduction from "../../components/Introduction";
import Best from "../../components/Best";
import Products from "../../components/Products";
import Story from "../../components/Story";
import Issue from "../../components/Issue";

const Home = () => {
  return (
    <>
      <CContainer fluid className="bg-blackTwo">
        <Header />
      </CContainer>
      <CContainer className="p-0 max-w-fit">
        <MainBanner />
        <Introduction />
        <Best />
        <Products />
        <Story />
        <Issue />
      </CContainer>
    </>
  );
};

export default Home;
