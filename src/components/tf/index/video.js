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
import CarouselLengthContext from "./length-context";
import CarouselIndexClicked from "./slick-functions-context.js";
import PauseButton from "../../../../public/icons/Pause.png";
import PlayButton from "../../../../public/icons/Play.png";
import { useOnScreen } from "../../hooks/useOnScreen";
import { ImageOrientation2 } from "../../utils/image-orientation2";

/* - - - - - VIDEO WITH CONTROLS IMG - - - - - */

const VideoCon = styled.div`
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  margin-left: 12.5px;
  grid-row-gap: 0;
  width: calc(100% - 25px);
  z-index: 20000;
  align-items: center;
  height: 110vh;
  @media (max-width: 666px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    margin-left: 10px;
    grid-row-gap: 0;
    width: calc(100% - 20px);
    z-index: 20000;
    align-items: center;
    height: 110vh;
  }
`;
const VideoConInner = styled.div`
  &.sml-portrait {
    grid-column: 10 / span 6;
  }
  &.lrg-portrait {
    grid-column: 10 / span 6;
  }
  &.square {
    grid-column: 9 / span 8;
  }
  &.landscape {
    grid-column: 7 / span 12;
  }
  @media (max-width: 666px) {
    &.sml-portrait {
      grid-column: 5 / span 16;
    }
    &.lrg-portrait {
      grid-column: 6 / span 14;
    }
    &.square {
      grid-column: 4 / span 18;
    }
    &.landscape {
      grid-column: span 24;
    }
  }
`;
const VideoWithContolsSC = styled.video`
  width: 100%;
`;
const ControlsCon = styled.div`
  z-index: 1;
  &.landscape {
    width: 50%;
  }
`;
const PlayButtonCon = styled.div`
  margin-top: 5px;
  width: calc(50%);
  display: inline-block;
  p {
    color: #d4d4d4;
    font-size: 12px;
  }
`;
const PaginationCon = styled.div`
  margin-top: 5px;
  width: calc(50%);
  display: inline-block;
`;
const PaginationControlP = styled.p`
  display: inline-block;
  color: #545454;
  font-size: 12px;
  &.active {
    color: white;
  }
`;
const PauseButtonImg = styled.img`
  width: 8px;
  display: inline-block !important;
  margin-right: 5px;
`;
const PlayButtonImg = styled.img`
  width: 8px;
  display: inline-block !important;
`;
const VideoControlsImgCon = styled.div``;
const VideoControlsImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const VideoWithControlsImg2 = ({ srcProps, posterProps, img }) => {
  const videoWithControlsRef = useRef(null);
  const imgRef = useRef(null);
  const isOnScreen = useOnScreen(videoWithControlsRef);
  const [videoSrcState, setVideoSrcState] = useState("");
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
  const [isPlaying, setPlayingStatus] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const carouselLength = useContext(CarouselLengthContext);
  // const carouselLength = 4;
  const { slideGoTo, setSlideGoTo } = useContext(CarouselIndexClicked);
  const value = useMemo(() => ({ slideGoTo, setSlideGoTo }), [slideGoTo]);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  const Pagination = ({ carouselLength }) => {
    const array = [...Array(carouselLength)];
    const handleClick = index => {
      setSlideGoTo(index);
    };
    const items = array.map((child, index) => {
      return (
        <>
          <CarouselLengthContext.Provider value={carouselLength}>
            <CarouselIndexClicked.Provider value={value}>
              <PaginationControlP
                className={slideGoTo == index ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                {("0" + (index + 1)).slice(-2)}
              </PaginationControlP>
              {"    "}
            </CarouselIndexClicked.Provider>
          </CarouselLengthContext.Provider>
        </>
      );
    });
    return <div>{items}</div>;
  };

  useEffect(() => {
    if (isOnScreen == true) {
      // console.log(srcProps);
      // console.log("on screen");
      // to load the video on scroll
      // comment out below two lines to make it load on click, test hosted
      setVideoSrcState(srcProps);
      videoWithControlsRef.current.load();
    } else if (isOnScreen === false) {
      setIsVideoLoaded(false);
      setVideoSrcState("");
    }
  }, [isOnScreen, videoSrcState]);

  const playVideo = () => {
    // to load the video on play
    // setVideoSrcState(srcProps);
    // videoWithControlsRef.current.load();
    videoWithControlsRef.current.play();

    setPlayingStatus(true);
    setHasStartedPlaying(true);
  };
  const pauseVideo = () => {
    videoWithControlsRef.current.pause();
    setPlayingStatus(false);
  };

  return (
    <>
      {/* <CarouselLengthContext.Provider> */}
      <VideoCon>
        <VideoConInner className={ImageOrientation2(img)}>
          <VideoControlsImgCon
            style={{
              opacity: hasStartedPlaying ? 0 : 1,
              position: hasStartedPlaying ? "absolute" : "relative",
            }}
          >
            <VideoControlsImg
              ref={imgRef}
              srcSet={posterProps}
              style={{
                opacity: hasStartedPlaying ? 0 : 1,
                position: hasStartedPlaying ? "absolute" : "relative",
              }}
            ></VideoControlsImg>
          </VideoControlsImgCon>
          <VideoWithContolsSC
            playsInline
            muted
            loop
            preload="auto"
            ref={videoWithControlsRef}
            onLoadedData={onLoadedData}
            style={{
              zIndex: 0,
              opacity: hasStartedPlaying ? 1 : 0,
              position: hasStartedPlaying ? "relative" : "absolute",
              // https://stackoverflow.com/questions/3680429/click-through-div-to-underlying-elements
              // click through video to controls
              pointerEvents: "none",
            }}
          >
            <source type="video/mp4" src={videoSrcState} />
          </VideoWithContolsSC>
          <ControlsCon>
            <PaginationCon>
              <Pagination carouselLength={carouselLength}></Pagination>
            </PaginationCon>
            <PlayButtonCon
              style={{
                zIndex: 1,
              }}
            >
              {isPlaying ? (
                <p onClick={pauseVideo}>
                  <PauseButtonImg src={PauseButton} />
                  Pause
                </p>
              ) : (
                <p onClick={playVideo}>
                  <PlayButtonImg src={PlayButton} /> Play
                </p>
              )}
            </PlayButtonCon>
          </ControlsCon>
        </VideoConInner>
      </VideoCon>
      {/* </CarouselLengthContext.Provider> */}
    </>
  );
};
