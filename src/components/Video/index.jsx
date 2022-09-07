import { CContainer, CImage } from "@coreui/bootstrap-react";
import React from "react";
import SeeMoreButton from "../SeeMoreButton";

import video from "../../assets/pngs/video.png";
import videoObject01 from "../../assets/pngs/video-object-01.png";
import videoObject02 from "../../assets/pngs/video-object-02.png";
import videoObject03 from "../../assets/pngs/video-object-03.png";
import videoObject04 from "../../assets/pngs/video-object-04.png";
import videoObject05 from "../../assets/pngs/video-object-05.png";
import videoObject06 from "../../assets/pngs/video-object-06.png";
import videoObject07 from "../../assets/pngs/video-object-07.png";
import videoObject08 from "../../assets/pngs/video-object-08.png";
import videoObject09 from "../../assets/pngs/video-object-09.png";

const Video = () => {
  return (
    <CContainer fluid className="py-40 px-0 relative overflow-hidden">
      <div>
        <h3 className="text-style-32 text-center"> WHAT HAPPENDED</h3>
        <p className="text-style-16 max-w-2xl mx-auto mt-12">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </p>
        <div className="flex justify-center mt-12">
          <SeeMoreButton />
        </div>
        <CImage src={video} className="mt-14 mb-96 mx-auto" />
      </div>
      <CImage
        src={videoObject01}
        className="absolute bottom-72 left-96 -translate-x-8 hidden xl:block"
      />
      <CImage
        src={videoObject02}
        className="absolute bottom-96 right-96 -translate-x-64 hidden xl:block"
      />
      <CImage
        src={videoObject03}
        className="absolute bottom-96 left-60 -translate-y-20 -z-10 hidden xl:block"
      />
      <CImage
        src={videoObject04}
        className="absolute top-20 -left-10 -translate-x-1/2 translate-y-1/2 -z-10 hidden xl:block"
      />
      <CImage
        src={videoObject05}
        className="absolute top-0 left-60 hidden xl:block"
      />
      <CImage
        src={videoObject07}
        className="absolute top-52 right-32 hidden xl:block"
      />
      <CImage
        src={videoObject06}
        className="absolute top-80 right-60 hidden xl:block"
      />
      <CImage
        src={videoObject08}
        className="absolute bottom-80 -right-48 -z-10 hidden xl:block"
      />
      <CImage
        src={videoObject09}
        className="absolute bottom-1/3 -right-40 -z-20 -translate-y-28 hidden xl:block"
      />
    </CContainer>
  );
};

export default Video;
