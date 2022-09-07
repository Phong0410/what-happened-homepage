import React, { useState } from "react";
import {
  CContainer,
  COffcanvas,
  COffcanvasBody,
} from "@coreui/bootstrap-react";

import { ReactComponent as MenuIcon } from "../../assets/svg/list.svg";

// use <Link> instead of <a> in real project with router

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CContainer className="lg:hidden p-0">
        <MenuIcon
          className="text-white w-10 h-10"
          onClick={() => setVisible(true)}
        />
        <COffcanvas
          placement="end"
          visible={visible}
          onHide={() => setVisible(false)}
          className="xl:hidden"
        >
          <COffcanvasBody>
            <ul>
              <li
                className="text-sm text-center leading-7 text-dark "
                onClick={() => setVisible(false)}
              >
                INTRODUCTION
              </li>
              <li
                className="text-sm text-center leading-7 text-dark "
                onClick={() => setVisible(false)}
              >
                SOLUTION
              </li>
              <li
                className="text-sm text-center leading-7 text-dark "
                onClick={() => setVisible(false)}
              >
                RATE PLAN
              </li>
              <li
                className="text-sm text-center leading-7 text-dark "
                onClick={() => setVisible(false)}
              >
                LOGIN
              </li>
              <li
                className="text-sm text-center leading-7 text-dark "
                onClick={() => setVisible(false)}
              >
                APPLY FOR FREE USE
              </li>
            </ul>
          </COffcanvasBody>
        </COffcanvas>
      </CContainer>
      <CContainer className="p-0 xl:block lg:block md:hidden sm:hidden hidden">
        <ul>
          <li className="text-sm inline-block text-center leading-7 cursor-pointer text-white xl:px-9 lg:px-4">
            INTRODUCTION
          </li>
          <li className="text-sm inline-block text-center leading-7 cursor-pointer text-white xl:px-9 lg:px-4">
            SOLUTION
          </li>
          <li className="text-sm inline-block text-center leading-7 cursor-pointer text-white xl:px-9 lg:px-4">
            RATE PLAN
          </li>
          <li className="text-sm inline-block text-center leading-7 cursor-pointer text-white xl:px-9 lg:px-4 border-l-2">
            LOGIN
          </li>
          <li className="text-sm inline-block text-center leading-7 cursor-pointer text-white pl-9 lg:px-4">
            APPLY FOR FREE USE
          </li>
        </ul>
      </CContainer>
    </>
  );
};

export default Navbar;
