import { CCol, CContainer, CImage, CRow } from "@coreui/bootstrap-react";
import React from "react";

import snsIcon01 from "../../assets/pngs/snsicon-01.png";
import snsIcon02 from "../../assets/pngs/snsicon-02.png";
import snsIcon03 from "../../assets/pngs/snsicon-03.png";

const Footer = () => {
  return (
    <CContainer fluid className="md:px-24">
      <CContainer fluid className="flex flex-col md:flex-row ">
        <CContainer fluid>
          <span className="text-style-15 text-blackTwo">What happened</span>
          <ul>
            <li className="text-style-26 w-60 pt-2 cursor-pointer">
              [공지] 개인 정보 처리 방침 변경 사전 안내
            </li>
            <li className="text-style-26 w-60 pt-2 cursor-pointer">
              [공지] 29CM 강남 스토어 영업 종료
            </li>
            <li className="text-style-26 w-60 pt-2 cursor-pointer">
              [공지] iOS 10 이하 버전 지원 중단 안내
            </li>
            <li className="text-style-26 w-60 pt-2 cursor-pointer">
              [공지] 개인 정보 처리 방침 변경 사전 안내
            </li>
          </ul>
        </CContainer>
        <CContainer fluid>
          <CRow xs={{ cols: 2, gutter: 4 }} md={{ cols: 4 }}>
            <CCol>
              <span className="text-style-15 text-blackTwo">About us</span>
              <ul>
                <li className="text-style-26 pt-2 cursor-pointer">회사 소개</li>
                <li className="text-style-26 pt-2 cursor-pointer">인재 채용</li>
                <li className="text-style-26 pt-2 cursor-pointer">
                  상시 할인 혜택
                </li>
              </ul>
            </CCol>
            <CCol>
              <span className="text-style-15 text-blackTwo">My order</span>
              <ul>
                <li className="text-style-26 pt-2 cursor-pointer">내 주문</li>
                <li className="text-style-26 pt-2 cursor-pointer">주문 배송</li>
                <li className="text-style-26 pt-2 cursor-pointer">
                  취소 / 교환 / 반품 내역
                </li>
                <li className="text-style-26 pt-2 cursor-pointer">
                  상품 리뷰 내역
                </li>
                <li className="text-style-26 pt-2 cursor-pointer">
                  증빙 서류 발급
                </li>
              </ul>
            </CCol>
            <CCol>
              <span className="text-style-15 text-blackTwo">My account</span>
              <ul>
                <li className="text-style-26 pt-2 cursor-pointer">
                  회원 정보 수정
                </li>
                <li className="text-style-26 pt-2 cursor-pointer">회원 등급</li>
                <li className="text-style-26 pt-2 cursor-pointer">
                  마일리지 현황
                </li>
                <li className="text-style-26 pt-2 cursor-pointer">쿠폰</li>
              </ul>
            </CCol>
            <CCol>
              <span className="text-style-15 text-blackTwo">Help</span>
              <ul>
                <li className="text-style-26 pt-2 cursor-pointer">
                  1 : 1 상담 내역
                </li>
                <li className="text-style-26 pt-2 cursor-pointer">
                  상품 Q & A 내역
                </li>
                <li className="text-style-26 pt-2 cursor-pointer">공지 사항</li>
                <li className="text-style-26 pt-2 cursor-pointer">
                  자주하는 질문
                </li>
                <li className="text-style-26 pt-2 cursor-pointer">
                  고객의 소리
                </li>
              </ul>
            </CCol>
          </CRow>
        </CContainer>
      </CContainer>
      <div className="w-full h-1 bg-whiteThree"></div>
      <CContainer
        fluid
        className="flex flex-col items-center justify-between lg:flex-row"
      >
        <div className="mt-2">
          <p className="text-style-27 text-greyish">
            © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
            사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
          </p>
          <p className="text-style-27 text-greyish">
            서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
            이용약관 l 개인정보처리방침
          </p>
        </div>
        <div className="flex items-center mt-2">
          <img src={snsIcon01} alt="icon" className="w-6 h-6 cursor-pointer" />
          <img src={snsIcon02} alt="icon" className="w-6 h-6 cursor-pointer" />
          <img src={snsIcon03} alt="icon" className="w-6 h-6 cursor-pointer" />
        </div>
      </CContainer>
    </CContainer>
  );
};

export default Footer;
