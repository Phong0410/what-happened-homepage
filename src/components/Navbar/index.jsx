import React from "react";
import { CContainer } from "@coreui/bootstrap-react";

// use <Link> instead of <a> in real project with router

const Navbar = () => {
  return (
    <CContainer>
      <a href="" className="text-sm text-center line leading-7 text-white px-9">
        INTRODUCTION
      </a>
      <a href="" className="text-sm text-center line leading-7 text-white px-9">
        SOLUTION
      </a>
      <a href="" className="text-sm text-center line leading-7 text-white px-9">
        RATE PLAN
      </a>
      <a href="" className="text-sm text-center line leading-7 text-white px-9">
        LOGIN
      </a>
      <a href="" className="text-sm text-center line leading-7 text-white px-9">
        APPLY FOR FREE USE
      </a>
    </CContainer>
  );
};

export default Navbar;
