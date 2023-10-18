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

/* - - - - - FILM LEAD CAROUSEL - - - - - */
const VideoProjectCon = styled.div``;
const VideoCarouselCon = styled.div`
  width: 100%;
  height: 110vh;
  background-color: black;
  @media (max-width: 666px) {
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

/* - - - - - VIDEO WITH CONTROLS IMG - - - - - */

export const FilmLeadCarousel2 = ({ children }) => {
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

  return (
    <>
      <CarouselLengthContext.Provider value={carouselLength}>
        <CarouselIndexClicked.Provider value={value}>
          {useMemo(
            () => (
              <>
                <VideoProjectCon ref={FilmsLeadCarouselRefCon}>
                  <VideoCarouselCon>
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
