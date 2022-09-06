import React from "react";
import { CContainer } from "@coreui/bootstrap-react";

import Navbar from "../Navbar";

import logo from "../../assets/pngs/logo.png";

const Header = () => {
  return (
    <CContainer fluid className="h-20 flex items-center justify-between px-5">
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
