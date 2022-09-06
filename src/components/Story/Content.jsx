import { CImage } from "@coreui/bootstrap-react";
import React from "react";
import colaboration from "../../assets/pngs/colaboration.png";
import SeeMoreButton from "../SeeMoreButton";

const Content = () => {
  return (
    <div className="relative max-w-fit mx-auto mt-20 flex z-50">
      <CImage src={colaboration} />
      <div className="max-w-2xl bg-white border-blackTwo border-t-4 border-r-4 border-b-4 p-4">
        <h3 className="text-style-22 mt-4">WHAT HAPPENDED'S BRAND STORY</h3>
        <p className="text-style-8 max-w-lg mt-3">
          청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이
          옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며,
          듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도
          피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한
          희망의 못할 것은 목숨을 수 그들을 아름답고 고행을 끝에 설산에서
          황금시대를 이상을 운다.
        </p>
        <div className="mt-10">
          <SeeMoreButton />
        </div>
      </div>
      <div className="absolute top-0 w-full h-6 bg-blackTwo px-3 flex flex-col justify-evenly">
        <div className="w-full h-1 bg-cerulean"></div>
        <div className="w-full h-1 bg-cerulean"></div>
      </div>
    </div>
  );
};

export default Content;
