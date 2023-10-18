import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
const SwiperCarouselCon = styled.div`
  margin-left: 12.5px;
  width: calc(100%-12.5px);
  /* background-color: red; */
  position: relative;
  /* cursor: e-resize; */
  /* .swiper-slide-active {
    cursor: w-resize;
  }
  .swiper-slide-next {
    cursor: e-resize;
  } */
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
  cursor: w-resize;
`;
const NextButton = styled.div`
  width: 50%;
  height: 100%;
  /* background-color: pink; */
  float: right;
  cursor: e-resize;
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
  position: absolute;
`;
const NextButtonConP = styled.div`
  grid-column: 9 / span 2;
  cursor: pointer;
  p {
    color: #878787;
  }
`;
export const OneUpProjectCarouselSwiper = ({
  children,

  projectLength,
}) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  // the required distance between touchStart and touchEnd to be detected as a swipe

  const minSwipeDistance = 50;

  const onTouchStart = e => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      if (isLeftSwipe) {
        // console.log("swipe", isLeftSwipe ? "left" : "right");
        // add your conditional logic here
        swiperRef.current.swiper.slideNext();
      } else if (isRightSwipe) {
        swiperRef.current.swiper.slidePrev();
      }
  };

  const swiperRef = useRef(null);
  function forwardFunc() {
    swiperRef.current.swiper.slideNext();
  }
  function prevFunc() {
    swiperRef.current.swiper.slidePrev();
  }
  return (
    <>
      <Grid16>
        <NextButtonConP>
          <p onClick={forwardFunc}>Next</p>
        </NextButtonConP>
      </Grid16>
      <SwiperCarouselCon
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <ButtonCon>
          <PrevButton onClick={prevFunc}></PrevButton>
          <NextButton onClick={forwardFunc}></NextButton>
        </ButtonCon>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={1.5}
          loop={true}
          speed={1}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={{
          //   prevEl: ".swiper-slide-active",
          //   nextEl: ".swiper-slide-next",
          // }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {children}
        </Swiper>
      </SwiperCarouselCon>
    </>
  );
};
