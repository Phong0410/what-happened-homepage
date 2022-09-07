import React from "react";
import { CContainer } from "@coreui/bootstrap-react";

import Navbar from "../Navbar";

import logo from "../../assets/pngs/logo.png";

const Header = () => {
  return (
    <CContainer className=" sm:h-20 h-12 flex items-center justify-between sm:px-5 xxl:max-w-xxl 2xl:max-w-screen-2xl xl:max-w-screen-xl">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <Navbar />
      </div>
    </CContainer>
  );
};

export default Header;
