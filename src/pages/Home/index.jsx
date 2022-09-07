import React from "react";
import { CContainer } from "@coreui/bootstrap-react";

import Header from "../../components/Header";
import MainBanner from "../../components/MainBanner";
import Introduction from "../../components/Introduction";
import Best from "../../components/Best";
import Products from "../../components/Products";
import Story from "../../components/Story";
import Issue from "../../components/Issue";
import Video from "../../components/Video";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
      <CContainer fluid className="p-0 bg-blackTwo">
        <Header />
      </CContainer>
      <CContainer fluid className="p-0">
        <CContainer className="p-0 xxl:max-w-xxl 2xl:max-w-screen-2xl xl:max-w-screen-xl">
          <MainBanner />
          <Introduction />
          <Best />
          <Products />
          <Story />
          <Issue />
          <Video />
          <Footer />
        </CContainer>
      </CContainer>
    </>
  );
};

export default Home;
