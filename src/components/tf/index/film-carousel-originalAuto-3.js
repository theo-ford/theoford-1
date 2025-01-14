import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import Slider from "@ant-design/react-slick";
// import "../../../slick/slick.css";
// import "../../../slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageOrientation2 } from "../../utils/image-orientation2";
import { useOnScreen } from "../../hooks/useOnScreen";
import CarouselLengthContext from "./length-context";
import CarouselIndexClicked from "./slick-functions-context.js";
import NextSml from "../../../img/next@1x.png";

import PrevSml from "../../../img/prev@1x.png";

/* - - - - - FILM LEAD CAROUSEL - - - - - */
const VideoProjectCon = styled.div``;
const VideoCarouselCon = styled.div`
  width: calc(100%);
  /* margin-left: 12.5px; */
  /* border-radius: 10px; */
  overflow: hidden;
  /* height: auto; */
  height: 110vh;
  /* box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.13); */
  background-color: black;
  margin-bottom: 8px;
  @media (max-width: 666px) {
    width: calc(100%);
    margin-left: 0px;
    border-radius: 0px;
  }
`;
const PaginationControlP = styled.p`
  display: inline-block;
  color: #545454;
  font-size: 12px;
  &.active {
    color: white;
  }
`;
const VideoCarouselHeader = styled.div`
  margin-bottom: 8px;
`;
const Grid16 = styled.div`
  display: grid;
  /* top: 12.5px; */
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  margin-left: 12.5px;
  grid-row-gap: 0;
  width: calc(100% - 25px);
  z-index: 20000;
  @media (max-width: 666px) {
    width: calc(100% - 20px);
    margin-left: 10px;
    margin-bottom: 10px;
  }
`;
const PaginationCon = styled.div`
  grid-column: span 8;
`;
const VolumeCon = styled.div`
  grid-column: 9 / span 6;
  p {
    color: #878787 !important;
  }
`;
const NextCon = styled.div`
  grid-column: 15 / span 2;
  p {
    color: #878787 !important;
  }
`;
const ButtonCon = styled.div`
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* background-color: blue; */
  position: absolute;
  z-index: 200;
`;
const PrevButton = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: orange; */
  float: left;
  float: left;
  cursor: url(${NextSml}) 0 0, pointer;
  cursor: -webkit-image-set(url(${PrevSml}) 1x, url(${PrevSml}) 2x) 0 0, pointer !important;
`;
const NextButton = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: pink; */
  float: right;
  cursor: url(${NextSml}) 0 0, pointer;
  cursor: -webkit-image-set(url(${NextSml}) 1x, url(${NextSml}) 2x) 0 0, pointer !important;
`;

/* - - - - - VIDEO WITH CONTROLS IMG - - - - - */

export const FilmLeadCarousel3 = ({ children }) => {
  const FilmsLeadCarouselRef = React.useRef(null);
  const FilmsLeadCarouselRefCon = React.useRef(null);
  const [carouselLength, setCarouselLength] = useState(children.length);
  const [slideGoTo, setSlideGoTo] = useState(0);
  const value = useMemo(() => ({ slideGoTo, setSlideGoTo }), [slideGoTo]);

  const settings = {
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
    dots: false,
    arrows: false,
    swipe: false,
    swipeToSlide: false,
    className: "films-slider",
  };

  useEffect(() => {
    FilmsLeadCarouselRef.current.slickGoTo(slideGoTo);
  }, [slideGoTo]);

  function forwardFunc() {
    FilmsLeadCarouselRef.current.slickNext();
  }
  function prevFunc() {
    FilmsLeadCarouselRef.current.slickPrev();
  }
  return (
    <>
      <CarouselLengthContext.Provider value={carouselLength}>
        <CarouselIndexClicked.Provider value={value}>
          {useMemo(
            () => (
              <>
                <VideoProjectCon ref={FilmsLeadCarouselRefCon}>
                  <VideoCarouselHeader>
                    <Grid16>
                      <PaginationCon>
                        <p>1 of 3</p>
                      </PaginationCon>
                      <VolumeCon>
                        <p>Unmute</p>
                      </VolumeCon>
                      <NextCon onClick={forwardFunc}>
                        <p>Next</p>
                      </NextCon>
                    </Grid16>
                  </VideoCarouselHeader>
                  <VideoCarouselCon>
                    <ButtonCon>
                      <PrevButton onClick={prevFunc}></PrevButton>
                      <NextButton onClick={forwardFunc}></NextButton>
                    </ButtonCon>
                    <Slider {...settings} ref={FilmsLeadCarouselRef}>
                      {children}
                    </Slider>
                  </VideoCarouselCon>
                </VideoProjectCon>
              </>
            ),
            []
          )}
        </CarouselIndexClicked.Provider>
      </CarouselLengthContext.Provider>
    </>
  );
};
