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
import { withPreview } from "gatsby-source-prismic";
import { ImageOrientation } from "../components/utils/image-orientation";
import { Helmet } from "react-helmet";
import "../components/styles/index.css";
import { useMediaQuery } from "../components/tf/media-query";
// import Icon from "../../assets/White Logo No TF.svg";
import Slider from "react-slick";
import "../components/slick/slick.css";
import "../components/slick/slick-theme.css";
import { useOnScreen } from "../components/hooks/useOnScreen";
import ReactPlayer from "react-player";
import Icon from "../../assets/WhiteLogo.svg";
import PauseButton from "../../public/icons/Pause.png";
import PlayButton from "../../public/icons/Play.png";
import TestVideo from "../../assets/G4C Web Desk 1500.mp4";
import { AutoPlayVideo } from "../components/tf/autoplay-video";
import { ImageOrientation2 } from "../components/utils/image-orientation2";
import { NavIndexGrid } from "../components/tf/nav-grid/nav-index";
import { PageLoad } from "../components/tf/page-load";
import { Intro } from "../components/tf/index/intro";
import { ProjectInfo } from "../components/tf/index/project-info";
import { ImgComponent } from "../components/tf/img-component";
import { TwoUpProjectCarousel } from "../components/tf/index/two-up-carousel";
import { ProjectCarousel } from "../components/tf/index/one-up-carousel";

// import * as prismicH from "@prismicio/helpers";
// import * as prismic from "@prismicio/client";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: white;
    overflow-x: clip;
    max-width: 100vw;
  }
  body {
    // https://stackoverflow.com/questions/47095596/body-overflow-x-hidden-breaks-position-sticky
    background-color: white;
    overflow-x: clip;
    max-width: 100vw;
    @media (min-width: 666px) {
      position: fixed;
    }    
  }
`;

const IntroConCon = styled.div``;

/* NAV */
/* BOTH */
const LogoGridCon = styled.div`
  width: calc(100% - 25px);
  margin-left: 12.5px;
  position: sticky;
  top: 12.5px;
  z-index: 300000;
  mix-blend-mode: exclusion;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 12.5px;

  @media (max-width: 666px) {
    width: calc(100% - 20px);
    margin-left: 10px;
    top: 10px;
  }
`;
/* DESKTOP */
const LogoConCon = styled.div`
  grid-column: span 2;
  mix-blend-mode: exclusion;
`;
const MenuCon = styled.div`
  grid-column: 3 / span 2;
  mix-blend-mode: exclusion;
`;
const LogoCon = styled.div`
  mix-blend-mode: exclusion;
  width: calc(100%);
  vertical-align: top;
  transition: all 2s;
  vertical-align: top;
`;
const DesktopNavP = styled.p`
  color: #878787;
  mix-blend-mode: exclusion;
  a.selected {
    color: white;
  }
  /* a:[aria-current] : {
    color: white;
  } */

  @media (max-width: 666px) {
    display: none;
  }
`;

/* MOBILE */

const MobileLeftCol = styled.div`
  grid-column: span 2;
  mix-blend-mode: exclusion;
`;
const MobileRightCol = styled.div`
  grid-column: span 2;
  mix-blend-mode: exclusion;
`;
const MobileNavP = styled.p`
  display: none;
  color: #878787;
  mix-blend-mode: exclusion;
  &.selected {
    color: white;
  }
  @media (max-width: 666px) {
    display: block;
  }
`;
const LogoConMobile = styled.div`
  display: none;
  mix-blend-mode: exclusion;
  @media (max-width: 666px) {
    /* display: none; */
    display: block;
    width: calc(75% - 6.25px);
    margin-top: 14vh;
    margin-left: 10px;
    .shrink {
      width: calc(75% - 6.25px);
    }
  }
`;

const NavSpacer = styled.div`
  height: 25vh;
  width: 100%;
  @media (max-width: 666px) {
    display: none;
  }
  /* background-color: green; */
`;

/* - - - - - PAGE  - - - - - */
const PageCon = styled.div`
  margin-top: 30vh;
`;
const Grid16 = styled.div`
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  margin-left: 12.5px;
  grid-row-gap: 0;
  width: calc(100% - 25px);
  z-index: 20000;
`;
const Grid2 = styled.div`
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  margin-left: 10px;
  grid-row-gap: 0;
  width: calc(100% - 20px);
  z-index: 20000;
`;

/* - - - -  UNKOWN- - - - */

/* - - - - - 1 UP CAROUSEL - - - - - */

const NextButtonCon = styled.div`
  grid-column: span 1;
  p {
    color: #cfcfcfcf;
  }
`;
const CounterCon = styled.div`
  grid-column: span 1;
  margin-bottom: 5px;
`;
const SquareCarouselCon = styled.div`
  grid-column: span 2;
`;

/* - - - - - 1 UP CAROUSEL: ABOVE - - - - - */

const ProjectCon = styled.div`
  /* margin-top: 100px; */
  margin-bottom: 100px;
  /* padding-top: 200px;
  @media (max-width: 666px) {
    padding-top: 200px;
  } */
  @media (max-width: 666px) {
    /* display: none; */
    margin-bottom: 200px;
  }
`;
const VideoProjectCon = styled.div`
  /* margin-bottom: 200px; */
  /* padding-top: 200px; */
`;

const IndexAutoPlayVideoCon = styled.div`
  position: relative;
  width: calc(100% - 12.5px) !important;
  @media (max-width: 666px) {
    width: 100%;
  }
`;

const SingleImgProjectAssetCon = styled.div`
  grid-column: span 8;
`;

/* - - - - - VIDEO CAROUSEL - - - - - */
const VideoCarouselCon = styled.div`
  width: 100%;
  height: 110vh;
  background-color: black;
  /* padding-top: 200px; */
  @media (max-width: 666px) {
    /* padding-top: 200px; */
  }
`;

const VideoCon = styled.div`
  // grid-column: ${props => (props.portrait ? "7 / span 4;" : "5 / span 8;")};
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  margin-left: 12.5px;
  grid-row-gap: 0;
  width: calc(100% - 25px);
  z-index: 20000;
  align-items: center;
  height: 110vh;
  @media (max-width: 666px) {
    grid-template-columns: 1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
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
  /* grid-column: ${props =>
    props.portrait ? "7 / span 4;" : "5 / span 8;"}; */
 
  &.sml-portrait {
    grid-column:  10 / span 6;
  }
  &.lrg-portrait {
    grid-column:  10 / span 6;
  }  
  &.square {
    grid-column:  9 / span 8;
  }
  &.landscape {
    grid-column: 7 / span 12;
  }
  
  
  @media (max-width: 666px) {
    
    
    &.sml-portrait {
    grid-column:  5 / span 16;
    }
    &.lrg-portrait {
      grid-column:  6 / span 14;
    }  
    &.square {
      grid-column:  4 / span 18;
    }
    &.landscape {
      grid-column: span 24;
    }    
  }

`;
const VideoWithContolsSC = styled.video`
  // grid-column: 5 / span 8;
  // grid-column: ${props => (props.portrait ? "7 / span 4;" : "5 / span 8;")};
  width: 100%;
`;
const ControlsCon = styled.div`
  z-index: 1;
  /* position: absolute; */
  /* background-color: blue; */

  &.landscape {
    width: 50%;
  }
`;
const PlayButtonCon = styled.div`
  /* background-color: red; */
  margin-top: 5px;
  /* grid-column: 5 / span 1; */
  /* height: 10px; */
  width: calc(50%);
  /* margin-left: calc(6.25px); */
  display: inline-block;

  /* background-color: green; */
  p {
    color: #d4d4d4;
    font-size: 12px;
  }
`;
const PaginationCon = styled.div`
  /* background-color: red; */
  margin-top: 5px;
  width: calc(50%);
  /* grid-column: 5 / span 1; */
  /* height: 10px; */
  /* width: calc(50%); */
  display: inline-block;
  /* background-color: red; */
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
const PaginationControlP = styled.p`
  display: inline-block;
  color: #545454;
  font-size: 12px;
  &.active {
    color: white;
  }
`;
const VideoControlsImgCon = styled.div``;
const VideoControlsImg = styled.img`
  width: 100%;
  height: 100%;
`;

const Index = ({ data }) => {
  const [pageLoad, setPageLoad] = useState(null);
  let isPageWide = useMediaQuery("(min-width: 667px)");
  const LogoConRef2 = useRef(null);

  // page load useEffect
  // https://stackoverflow.com/questions/57729504/is-there-a-way-to-tell-when-your-react-app-page-is-done-loading-the-page-asset
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      setPageLoad(true);
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const FourSeconds = setTimeout(overflowAllow, 4000);

  function overflowAllow() {
    document.body.style.position = "relative";
  }

  const CarouselLengthContext = createContext();
  const CarouselIndexClicked = createContext({
    slideGoTo: 0,
    setSlideGoTo: () => {},
  });

  const NavIndexGridIndex = () => {
    let isPageWide = useMediaQuery("(min-width: 667px)");
    var [currentPage, setCurrentPage] = useState(null);
    const LogoConRef = useRef(null);

    const handleScroll = () => {
      const position = window.pageYOffset;
      // console.log(position);
      if (position > 25) {
        // console.log("greater than 100");
        LogoConRef.current.classList.add("shrink");
      } else if (position < 25) {
        // console.log("less than 100");
        LogoConRef.current.classList.remove("shrink");
      }
    };
    // scroll use effect
    useEffect(() => {
      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    if (isPageWide) {
      return (
        <>
          <LogoGridCon style={{ opacity: pageLoad ? 1 : 0 }}>
            <LogoConCon>
              <LogoCon ref={LogoConRef}>
                <Link to="/">
                  <Icon />
                </Link>
              </LogoCon>
            </LogoConCon>
            <MenuCon style={{ opacity: pageLoad ? 1 : 0 }}>
              <DesktopNavP>
                <Link to="/" className="selected">
                  Select,{" "}
                </Link>
                <Link to="/project_index">Index, </Link>
                <Link to="/office">Office</Link>
                {/* <br></br>Instagram, Twitter */}
              </DesktopNavP>
            </MenuCon>
          </LogoGridCon>
        </>
      );
    }
    if (!isPageWide) {
      return (
        <>
          <LogoGridCon>
            <MobileLeftCol>
              <Link to="/">
                <MobileNavP className="selected">Selected</MobileNavP>
              </Link>
              <Link to="/project_index">
                <MobileNavP>Index</MobileNavP>
              </Link>
            </MobileLeftCol>

            <MobileRightCol>
              <Link to="/office">
                <MobileNavP>Office</MobileNavP>
              </Link>
              <MobileNavP>Instagram</MobileNavP>
            </MobileRightCol>
          </LogoGridCon>
          <LogoConMobile ref={LogoConRef}>
            <Icon />
          </LogoConMobile>
        </>
      );
    }
  };

  // const ProjectCarousel = ({
  //   children,

  //   projectLength,
  //   videoLoad,
  // }) => {
  //   // SWIPE GESTURE
  //   const [touchStart, setTouchStart] = useState(null);
  //   const [touchEnd, setTouchEnd] = useState(null);
  //   // the required distance between touchStart and touchEnd to be detected as a swipe
  //   const minSwipeDistance = 50;
  //   const onTouchStart = e => {
  //     setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
  //     setTouchStart(e.targetTouches[0].clientX);
  //   };
  //   const onTouchMove = e => setTouchEnd(e.targetTouches[0].clientX);
  //   const onTouchEnd = () => {
  //     if (!touchStart || !touchEnd) return;
  //     const distance = touchStart - touchEnd;
  //     const isLeftSwipe = distance > minSwipeDistance;
  //     const isRightSwipe = distance < -minSwipeDistance;
  //     if (isLeftSwipe || isRightSwipe)
  //       // console.log("swipe", isLeftSwipe ? "left" : "right");
  //       // add your conditional logic here
  //       ProjectCarouselRef.current.slickNext();
  //   };

  //   // COUNTER
  //   const [currentSlide, setCurrentSlide] = useState(0);
  //   const [totalSlides, setTotalSlides] = useState(null);
  //   useEffect(() => {
  //     setCurrentSlide(0);
  //   }, []);
  //   useEffect(() => {
  //     setTotalSlides(projectLength);
  //   }, []);
  //   const updateCurrentSlide = index => {
  //     if (currentSlide !== index) {
  //       setCurrentSlide(index);
  //     }
  //   };

  //   // SLIDER SETTINGS
  //   const settings = {
  //     infinite: true,
  //     speed: 0,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     accessibility: true,
  //     dots: false,
  //     arrows: false,
  //     swipe: false,
  //     swipeToSlide: false,
  //   };

  //   // SLIDESHOW FUNCTION
  //   const ProjectCarouselRef = React.useRef(null);

  //   const [changedSlide, setChangedSlide] = useState(false);

  //   function projectCarouselNextImg() {
  //     ProjectCarouselRef.current.slickNext();
  //     setChangedSlide(true);
  //   }
  //   return (
  //     <>
  //       <Grid2>
  //         <CounterCon>
  //           <p>{("0" + (currentSlide + 1)).slice(-2)}</p>
  //         </CounterCon>
  //         <NextButtonCon>
  //           {projectLength > 1 ? (
  //             <>
  //               <p
  //                 onClick={projectCarouselNextImg}
  //                 style={{ display: "inline-block" }}
  //               >
  //                 Next
  //               </p>
  //               {/* <PVideoLoadingNext>&nbsp; (Video Loading)</PVideoLoadingNext> */}
  //             </>
  //           ) : (
  //             ""
  //           )}
  //         </NextButtonCon>
  //       </Grid2>
  //       <Grid2>
  //         <SquareCarouselCon
  //           onClick={projectCarouselNextImg}
  //           onTouchStart={onTouchStart}
  //           onTouchMove={onTouchMove}
  //           onTouchEnd={onTouchEnd}
  //         >
  //           <Slider
  //             {...settings}
  //             ref={ProjectCarouselRef}
  //             afterChange={index => updateCurrentSlide(index)}
  //           >
  //             {React.Children.map(children, child =>
  //               React.cloneElement(child, {
  //                 changedSlide: changedSlide,
  //               })
  //             )}
  //           </Slider>
  //         </SquareCarouselCon>
  //       </Grid2>
  //     </>
  //   );
  // };

  // const AutoPlayVideo = ({ srcProps, posterProps, changedSlide }) => {
  //   // https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks
  //   // https://frontend-digest.com/responsive-and-progressive-video-loading-in-react-e8753315af51
  //   const autoplayVideoRef = useRef(null);
  //   const isOnScreen = useOnScreen(autoplayVideoRef);
  //   const [videoSrcState, setVideoSrcState] = useState("");
  //   const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  //   // console.log("autoplay Video Ref");
  //   // console.log(autoplayVideoRef);

  //   const onLoadedData = () => {
  //     setIsVideoLoaded(true);
  //   };

  //   useEffect(() => {
  //     if (isOnScreen == true) {
  //       // console.log(srcProps);
  //       // console.log("on screen");
  //       setVideoSrcState(srcProps);
  //       autoplayVideoRef.current.load();
  //       autoplayVideoRef.current.play();
  //     } else if (isOnScreen === false) {
  //       // console.log(srcProps);
  //       // console.log("off screen");
  //       // caches.delete();
  //       // var x = srcProps;
  //       // var y = x.replace("https://theoford-1.cdn.prismic.io/theoford-1/", "");
  //       // console.log(y);
  //       // caches.delete(y);
  //       // console.log(caches.keys());
  //       // caches.keys().then(function(names) {
  //       //   for (let name of names) caches.delete(name);
  //       // });
  //       setIsVideoLoaded(false);
  //       setVideoSrcState("");
  //     }
  //   }, [isOnScreen]);

  //   return (
  //     <>
  //       <AutoplayVideoCon>
  //         <AutoplayVideoImgCon
  //           style={{
  //             opacity: isVideoLoaded ? 0 : 1,
  //             position: isVideoLoaded ? "absolute" : "relative",
  //             // opacity: 1,
  //             // position: "relative",
  //           }}
  //         >
  //           <AutoplayVideoTextCon>
  //             <p>Video Loading</p>
  //           </AutoplayVideoTextCon>

  //           <AutoplayVideoImg
  //             srcSet={posterProps}
  //             style={{
  //               opacity: isVideoLoaded ? 0 : 1,
  //               position: isVideoLoaded ? "absolute" : "relative",
  //               // opacity: 1,
  //               // position: "relative",
  //             }}
  //           />
  //         </AutoplayVideoImgCon>

  //         <AutoplayVideoVideo
  //           playsInline
  //           autoPlay
  //           muted
  //           loop
  //           ref={autoplayVideoRef}
  //           // onCanPlayThrough={onLoadedData}
  //           onLoadedData={onLoadedData}
  //           style={{
  //             opacity: isVideoLoaded ? 1 : 0,
  //             position: isVideoLoaded ? "relative" : "absolute",
  //             // display: isOnScreen ? "block" : "none",
  //             // opacity: 0,
  //             // position: "absolute",
  //           }}
  //         >
  //           <source type="video/mp4" src={videoSrcState} />
  //         </AutoplayVideoVideo>
  //       </AutoplayVideoCon>
  //     </>
  //   );
  // };

  const VideoWithControlsImg = ({
    srcProps,
    posterProps,
    img,
    // filmsLeadCarouselNextImg,
    // test,
    // onChild2Event,
  }) => {
    const videoWithControlsRef = useRef(null);
    // const height = videoWithControlsRef.current.dimensions.height;
    const imgRef = useRef(null);
    const isOnScreen = useOnScreen(videoWithControlsRef);
    const [videoSrcState, setVideoSrcState] = useState("");
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);
    const [imgOrientation, setOrientationState] = useState("");
    const [isPlaying, setPlayingStatus] = useState(false);
    const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
    const VideoConInnerRef = useRef(null);
    const carouselLength = useContext(CarouselLengthContext);
    const { slideGoTo, setSlideGoTo } = useContext(CarouselIndexClicked);
    // console.log(carouselLength);
    // console.log(CarouselLengthContext);

    // console.log(imgRef);
    // useEffect(() => {
    //   console.log(imgRef);
    // }, [imgRef]);
    const onLoadedData = () => {
      setIsVideoLoaded(true);
    };

    const Pagination = ({ carouselLength }) => {
      // console.log(carouselLength);
      const array = [...Array(carouselLength)];
      // console.log(array);
      const handleClick = index => {
        // console.log(index);
        setSlideGoTo(index);
      };
      const items = array.map((child, index) => {
        // console.log(index);
        return (
          <>
            <PaginationControlP
              className={slideGoTo == index ? "active" : ""}
              onClick={() => handleClick(index)}
            >
              {/* {index + 1} */}
              {("0" + (index + 1)).slice(-2)}
            </PaginationControlP>
            {"    "}
          </>
        );
      });
      return <div>{items}</div>;
    };

    // useEffect(() => {
    //   // console.log(imgRef.current.height);
    //   // console.log(imgRef.current.width);
    //   var width = imgRef.current.width;
    //   var height = imgRef.current.height;
    //   // var smlPortrait = width * 1.25;
    //   // var lrgPortrait = width * 1.777;
    //   var x = height / width;
    //   // console.log(srcProps);
    //   // console.log(x);
    //   if (x > 1.7) {
    //     setOrientationState("lrg-portrait");
    //     // VideoConInnerRef.current.classList.add("lrg-portrait");
    //   } else if (x > 1.2) {
    //     setOrientationState("sml-portrait");
    //   } else if (height >= width) {
    //     setOrientationState("square");
    //     // VideoConInnerRef.current.classList.add("square");
    //   } else if (width > height) {
    //     setOrientationState("landscape");
    //     // VideoConInnerRef.current.classList.add("landscape");
    //   }
    // }, [imgRef, srcProps]);
    // console.log(imgRef);

    useEffect(() => {
      if (isOnScreen == true) {
        console.log(srcProps);
        console.log("on screen");
        // to load the video on scroll
        // comment out below two lines to make it load on click, test hosted
        setVideoSrcState(srcProps);
        videoWithControlsRef.current.load();
        // videoWithControlsRef.current.play();
      } else if (isOnScreen === false) {
        // console.log(srcProps);
        // console.log("off screen");
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
    const handleClick = event => {
      // console.log("pagination clicked");
    };
    return (
      <>
        <CarouselLengthContext.Provider>
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
                  {/* <p onClick={handleClick}>
                    <span className="active">01</span> 02 03
                  </p> */}
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
        </CarouselLengthContext.Provider>
      </>
    );
  };

  const FilmLeadCarousel = ({ children }) => {
    const FilmsLeadCarouselRef = React.useRef(null);
    const FilmsLeadCarouselRefCon = React.useRef(null);
    const divIsOnScreen = useOnScreen(FilmsLeadCarouselRefCon);
    const [carouselLength, setCarouselLength] = useState(children.length);
    const [slideGoTo, setSlideGoTo] = useState(0);
    const value = useMemo(() => ({ slideGoTo, setSlideGoTo }), [slideGoTo]);
    useEffect(() => {
      if (divIsOnScreen == true) {
        // console.log("div on screen");
      } else if (divIsOnScreen == false) {
        // console.log("div is not on screen");
      }
    }, [divIsOnScreen]);

    function filmsLeadCarouselNextImg() {
      FilmsLeadCarouselRef.current.slickNext();
    }
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

    // console.log(slideGoTo);
    useEffect(() => {
      FilmsLeadCarouselRef.current.slickGoTo(slideGoTo);
    }, [slideGoTo]);

    const Pagination = ({ children }) => {
      // console.log("hello");
      // console.log(children.length);
      const handleClick = index => {
        // console.log("hello");
        // console.log(index);
        FilmsLeadCarouselRef.current.slickGoTo(index);
      };
      const items = children.map((child, index) => {
        return (
          <>
            <PaginationControlP onClick={() => handleClick(index)}>
              {index + 1}
            </PaginationControlP>
            {"    "}
          </>
        );
      });
      return <div>{items}</div>;
    };
    return (
      <>
        <CarouselLengthContext.Provider value={carouselLength}>
          <CarouselIndexClicked.Provider value={value}>
            {useMemo(
              () => (
                <>
                  <VideoProjectCon ref={FilmsLeadCarouselRefCon}>
                    <VideoCarouselCon>
                      {/* <NextButtonCon>
                        <p onClick={filmsLeadCarouselNextImg}>Next</p>
                      </NextButtonCon>
                      <Pagination>{children}</Pagination> */}

                      <Slider
                        {...settings}
                        ref={FilmsLeadCarouselRef}
                        // onChild1Event={handleEvent}
                      >
                        {/* {React.Children.map(children, child =>
                            React.cloneElement(child, {
                              // onChild1Event: onChild1Event,
                              // fct: filmsLeadCarouselNextImg,
                              // test: false,
                            })
                          )} */}
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

  const overview = data.prismicFeaturedProjects.data.project_relationship_group.map(
    (content, index) => {
      if (
        content.project_relationship_field.document.type == "film_lead_project"
      ) {
        const filmLeadProject = content.project_relationship_field.document.data.body.map(
          (content_three, index, onChild1Event) => {
            // const handleEvent = event => {
            //   console.log("handled");
            //   onChild1Event(event);
            // };
            if (content_three.slice_type == "video_with_play_button") {
              return (
                <VideoWithControlsImg
                  srcProps={content_three.primary.video_with_play_button.url}
                  posterProps={
                    content_three.primary.video_thumbnail.fluid.srcSetWebp
                  }
                  img={content_three.primary.video_thumbnail}
                  // fct={filmsLeadCarouselNextImg}
                  // onChild2Event={handleEvent}
                ></VideoWithControlsImg>
              );
            }
          }
        );
        // console.log(test);
        // const handleEvent = event => {
        //   console.log("handled2");
        //   // onChild1Event(event);
        // };
        return (
          <>
            <ProjectCon>
              <FilmLeadCarousel>
                {/* {React.Children.map(filmLeadProject, child =>
                    React.cloneElement(child, {
                      divIsInView: false,
                    })
                  )} */}
                {React.Children.map(filmLeadProject, child =>
                  React.cloneElement(child, {
                    // onChild1Event: onChild1Event,
                    // onChild1Event: handleEvent
                    // fct: filmsLeadCarouselNextImg,
                  })
                )}
              </FilmLeadCarousel>

              <ProjectInfo
                title={
                  content.project_relationship_field.document.data.project_title
                    .text
                }
                client={
                  content.project_relationship_field.document.data.client.text
                }
                year={
                  content.project_relationship_field.document.data.year.text
                }
                location={
                  content.project_relationship_field.document.data.location.text
                }
                homepage_intro={
                  content.project_relationship_field.document.data
                    .homepage_intro.text
                }
                uid={content.project_relationship_field.document.uid}
              ></ProjectInfo>
            </ProjectCon>
          </>
        );
      }
      if (content.project_relationship_field.document.type == "project") {
        const projectLength =
          content.project_relationship_field.document.data.body.length;
        const project = content.project_relationship_field.document.data.body.map(
          (content_four, index) => {
            if (content_four.slice_type == "image") {
              return (
                <ImgComponent
                  srcProps={content_four.primary.image.fluid.srcSetWebp}
                  // srcProps={content_four.primary.image.fluid.srcWebp}
                />
              );
            }
            if (content_four.slice_type == "video") {
              if (isPageWide) {
                return (
                  <IndexAutoPlayVideoCon>
                    <AutoPlayVideo
                      srcProps={content_four.primary.video.url}
                      posterProps={
                        content_four.primary.index_image.fluid.srcSetWebp
                      }
                    />
                  </IndexAutoPlayVideoCon>
                );
              } else {
                return (
                  <AutoPlayVideo
                    srcProps={content_four.primary.sml_video.url}
                    posterProps={
                      content_four.primary.index_image.fluid.srcSetWebp
                    }
                  />
                );
              }
            }
          }
        );
        if (isPageWide && projectLength > 1) {
          return (
            <ProjectCon>
              <TwoUpProjectCarousel
                projectLength={
                  content.project_relationship_field.document.data.body.length
                }
              >
                {React.Children.map(project, child =>
                  React.cloneElement(child, {
                    changedSlide: false,
                  })
                )}
                {/* {project} */}
              </TwoUpProjectCarousel>
              <ProjectInfo
                title={
                  content.project_relationship_field.document.data.project_title
                    .text
                }
                client={
                  content.project_relationship_field.document.data.client.text
                }
                year={
                  content.project_relationship_field.document.data.year.text
                }
                location={
                  content.project_relationship_field.document.data.location.text
                }
                homepage_intro={
                  content.project_relationship_field.document.data
                    .homepage_intro.text
                }
                uid={content.project_relationship_field.document.uid}
              ></ProjectInfo>
            </ProjectCon>
          );
        } else if (isPageWide && projectLength <= 1) {
          return (
            <>
              <ProjectCon>
                <Grid16>
                  <SingleImgProjectAssetCon>{project}</SingleImgProjectAssetCon>
                </Grid16>
                <ProjectInfo
                  title={
                    content.project_relationship_field.document.data
                      .project_title.text
                  }
                  client={
                    content.project_relationship_field.document.data.client.text
                  }
                  year={
                    content.project_relationship_field.document.data.year.text
                  }
                  location={
                    content.project_relationship_field.document.data.location
                      .text
                  }
                  homepage_intro={
                    content.project_relationship_field.document.data
                      .homepage_intro.text
                  }
                  uid={content.project_relationship_field.document.uid}
                ></ProjectInfo>
              </ProjectCon>
            </>
          );
        } else if (isPageWide == false) {
          return (
            <ProjectCon>
              <ProjectCarousel projectLength={projectLength}>
                {React.Children.map(project, child =>
                  React.cloneElement(child, {
                    changedSlide: false,
                  })
                )}
                {/* {project} */}
              </ProjectCarousel>
              <ProjectInfo
                title={
                  content.project_relationship_field.document.data.project_title
                    .text
                }
                client={
                  content.project_relationship_field.document.data.client.text
                }
                year={
                  content.project_relationship_field.document.data.year.text
                }
                location={
                  content.project_relationship_field.document.data.location.text
                }
                homepage_intro={
                  content.project_relationship_field.document.data
                    .homepage_intro.text
                }
                uid={content.project_relationship_field.document.uid}
              ></ProjectInfo>
            </ProjectCon>
          );
        }
      }
    }
  );

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <head></head>
        <title>(10) Pagination 1</title>
      </Helmet>
      <IntroConCon style={{ opacity: pageLoad ? 1 : 0 }}>
        <Intro></Intro>
      </IntroConCon>

      <NavSpacer></NavSpacer>
      <NavIndexGridIndex></NavIndexGridIndex>

      <PageCon style={{ opacity: pageLoad ? 1 : 0 }}>{overview}</PageCon>
    </>
  );
};

export default withPreview(Index);

export const query = graphql`
  query IndexQuery40 {
    prismicFeaturedProjects {
      data {
        project_relationship_group {
          project_relationship_field {
            document {
              ... on PrismicProject {
                id
                type
                uid
                data {
                  project_title {
                    html
                    text
                  }
                  location {
                    html
                    text
                  }
                  year {
                    html
                    text
                  }
                  homepage_intro {
                    text
                  }
                  client {
                    text
                  }
                  body {
                    ... on PrismicProjectBodyImage {
                      id
                      slice_type
                      primary {
                        image {
                          fluid(
                            srcSetBreakpoints: [1400, 1600, 2400, 3600]
                            imgixParams: { auto: "" }
                          ) {
                            srcWebp
                            srcSetWebp
                          }
                        }
                      }
                    }
                    ... on PrismicProjectBodyVideo {
                      id
                      slice_type
                      primary {
                        video {
                          url
                        }
                        sml_video {
                          url
                        }
                        index_image {
                          fluid(
                            srcSetBreakpoints: [1400, 1600, 2400, 3600]
                            imgixParams: { auto: "" }
                          ) {
                            src
                            srcSetWebp
                            srcWebp
                          }
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicFilmLeadProject {
                id
                type
                uid
                data {
                  project_title {
                    html
                    text
                  }
                  location {
                    html
                    text
                  }
                  year {
                    html
                    text
                  }
                  client {
                    html
                    text
                  }
                  homepage_intro {
                    text
                  }
                  body {
                    ... on PrismicFilmLeadProjectBodyVideoWithPlayButton {
                      id
                      slice_type
                      primary {
                        video_with_play_button {
                          url
                        }
                        video_thumbnail {
                          fluid {
                            src
                            srcSetWebp
                            srcWebp
                          }
                          dimensions {
                            height
                            width
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
