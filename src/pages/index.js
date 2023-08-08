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
      /* height: 100vh;
      overflow: hidden; */
      position: fixed;
  }    
  }
`;
const TestVideoCon = styled.div`
  width: 500px;
`;
// const LoadingBlock = styled.div`
//   height: 5px;
//   width: 100vw;
//   background-color: black;
//   position: fixed;
//   /* z-index: -1000; */
//   @media (max-width: 666px) {
//     display: none;
//   }
//   @media (min-width: 666px) {
//     animation-name: widthAni;
//     animation-duration: 1s;
//     animation-fill-mode: forwards;

//     @keyframes widthAni {
//       /* 0% {
//         width: 100vw;
//       }
//       100% {
//         width: 0vw;
//       } */
//       0% {
//         margin-left: 0vw;
//       }
//       100% {
//         margin-left: 100vw;
//       }
//     }
//   }
// `;
// const FadeInCon = styled.div`
//   background-color: white;
//   position: relative;
//   @media (min-width: 666px) {
//     opacity: 0;
//     animation-name: opacityAni;
//     animation-duration: 1s;
//     animation-delay: 3s;
//     animation-fill-mode: forwards;

//     @keyframes opacityAni {
//       0% {
//         opacity: 0;
//       }
//       100% {
//         opacity: 1;
//       }
//     }
//   }
// `;
const IntroCon = styled.div`
  margin-top: 10px;
  transition: 1s ease;
  span.grey {
    color: #878787;
  }
  @media (max-width: 666px) {
    display: none;
  }
`;
const AboutCon = styled.div`
  grid-column: span 6;
`;
const LocationCon = styled.div`
  grid-column: 9 / span 5;
  span.grey {
    color: #878787;
  }
`;
const ContactCon = styled.div`
  grid-column: 15 / span 2;
`;
const NavSpacer = styled.div`
  height: 25vh;
  width: 100%;
  @media (max-width: 666px) {
    display: none;
  }
  /* background-color: green; */
`;
const LogoGridCon = styled.div`
  width: calc(100% - 25px);
  margin-left: 12.5px;
  position: sticky;
  top: 12.5px;
  z-index: 300000;
  mix-blend-mode: exclusion;
  /* background-color: yellow; */
  float: left;
`;
const LogoGridConMobile = styled.div`
  display: none;
  @media (max-width: 666px) {
    /* display: none; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    width: calc(100% - 20px);
    margin-left: 10px;
    margin-top: 10px;
  }
`;
const Col1 = styled.div`
  width: calc(50% - 6.26px);
  display: inline-block;
  /* background-color: red; */
  float: left;
`;
const Col2 = styled.div`
  width: calc(50% - 6.25px);
  display: inline-block;
  /* background-color: blue; */
  float: left;
  margin-left: 2.25px;
`;
const LogoCon = styled.div`
  top: 12.5px;
  mix-blend-mode: exclusion;
  width: calc(100%);
  display: inline-block;
  vertical-align: top;
  transition: all 2s;
  vertical-align: top;

  .shrink {
    width: calc(37.5% - 6.25px);
  }
  @media (max-width: 666px) {
    /* display: none; */
    width: calc(75% - 6.25px);
    margin-top: 14vh;
    margin-left: 10px;
    .shrink {
      width: calc(75% - 6.25px);
    }
  }
`;
const NavCon1 = styled.div`
  display: inline-block;
  position: sticky;
  top: 12.5px;
  z-index: 300000;
  /* margin-left: 10px; */
  margin-left: 11px;
  /* margin-left: calc(50vw + 7px); */
  /* margin-left: calc(25vw + 6.25px); */
  /* margin-top: -118px; */
  margin-top: -3px;
  vertical-align: top;
  mix-blend-mode: exclusion;
  p {
    color: #878787;
    /* font-size: 12px; */
  }
  span.selected {
    color: white;
  }
  span.navItem {
    /* margin-left: 5px; */
  }
  @media (max-width: 666px) {
    /* display: none; */
    margin-left: 0px;
    grid-column: span 1;
  }
`;
const NavCon2 = styled.div`
  display: inline-block;
  position: sticky;
  top: 12.5px;
  margin-left: 12.5px;
  margin-top: -3px;
  mix-blend-mode: exclusion;
  z-index: 300000;
  p {
    color: #878787;
    /* font-size: 12px; */
  }
  p.selected {
    color: white;
  }
  @media (max-width: 666px) {
    /* display: none; */
    margin-left: 0px;
    grid-column: span 1;
  }
`;
const PageCon = styled.div`
  margin-top: 30vh;
  transition: 1s ease;
  /* overflow-x: hidden;
  max-width: 100vw; */
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
const CounterCon = styled.div`
  grid-column: span 1;
  margin-bottom: 5px;
`;
const NextButtonCon = styled.div`
  grid-column: span 1;
  p {
    color: #cfcfcfcf;
  }
`;
const SquareCarouselCon = styled.div`
  grid-column: span 2;
`;
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

const SquareImage = styled.img`
  width: calc(100% - 12.5px);
  @media (max-width: 666px) {
    width: 100%;
  }
`;
const IndexAutoPlayVideoCon = styled.div`
  position: relative;
  width: calc(100% - 12.5px) !important;
  @media (max-width: 666px) {
    width: 100%;
  }
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
const TwoUpCarouselCounterNextCon = styled.div`
  margin-bottom: 8px;
`;
const TwoUpCarouselCon = styled.div`
  margin-left: 12.5px;
  cursor: e-resize;
`;
const TwoUpCarouselCounterOneCon = styled.div`
  grid-column: span 8;
`;
const TwoUpCarouselCounterTwoCon = styled.div`
  grid-column: span 6;
`;
const TwoUpCarouselNextButtonCon = styled.div`
  grid-column: span 2;
  p {
    color: #cfcfcf;
  }
`;
const SingleImgProjectAssetCon = styled.div`
  grid-column: span 8;
`;
const ProjectInfoCon = styled.div`
  height: 80px;
  margin-top: 8px;
  @media (max-width: 666px) {
    margin-top: 4px;
  }
`;
const ProjectTitleCon = styled.div`
  grid-column: span 4;

  @media (max-width: 666px) {
    grid-column: span 1;
    a {
      color: #d4d4d4;
    }
  }
`;
const ProjectLocationYearCon = styled.div`
  grid-column: span 4;
  @media (max-width: 666px) {
    grid-column: span 1;
  }
`;

const ProjectIndexAbout = styled.div`
  grid-column: span 4;
  p {
    font-size: 12px;
  }
  @media (max-width: 666px) {
    display: none;
  }
`;
const ProjectLink = styled.div`
  grid-column: 15 / span 2;
  a {
    color: #d4d4d4;
  }
  @media (max-width: 666px) {
    display: none;
  }
`;
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
const PortraitVideo = styled.video`
   grid-column: 7 / span 4;
  // grid-column: ${props => (props.portrait ? "7 / span 4;" : "5 / span 8;")};
  width: 100%;
`;
const LandscapeVideo = styled.video`
   grid-column: 5 / span 8;
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
  const LogoConRef2 = useRef(null);
  // https://stackoverflow.com/questions/57729504/is-there-a-way-to-tell-when-your-react-app-page-is-done-loading-the-page-asset
  // This will run one time after the component mounts

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

  const CarouselLengthContext = createContext();
  const CarouselIndexClicked = createContext({
    slideGoTo: 0,
    setSlideGoTo: () => {},
  });

  let isPageWide = useMediaQuery("(min-width: 667px)");
  const LogoConRef = useRef(null);

  const FourSeconds = setTimeout(overflowAllow, 4000);

  function overflowAllow() {
    document.body.style.position = "relative";
  }

  // const LogoNav = scrollPosition => {
  //   if (isPageWide) {
  //     return (
  //       <>
  //         <NavSpacer></NavSpacer>
  //         <LogoGridCon>
  //           <Col1>
  //             <LogoCon ref={LogoConRef2}>
  //               <Icon style={{ opacity: pageLoad ? 1 : 0 }} />
  //             </LogoCon>
  //           </Col1>
  //           <Col2>
  //             <NavCon1 style={{ opacity: pageLoad ? 1 : 0 }}>
  //               <p>
  //                 <Link to="/">
  //                   <span className="selected">Select,</span>{" "}
  //                 </Link>
  //                 <Link to="/project_index">
  //                   <span className="navItem">Index,</span>{" "}
  //                 </Link>

  //                 <Link to="/about17">
  //                   <span className="navItem">Office</span>
  //                 </Link>
  //                 {/* <br></br>Instagram, Twitter */}
  //               </p>
  //             </NavCon1>
  //           </Col2>
  //         </LogoGridCon>
  //       </>
  //     );
  //   }
  //   if (!isPageWide) {
  //     return (
  //       <>
  //         <LogoGridConMobile>
  //           <NavCon1>
  //             <Link to="/">
  //               <p className="selected">Selected</p>
  //             </Link>
  //             <Link to="/project_index">
  //               <p>
  //                 <span className="navItem">Index</span>
  //               </p>
  //             </Link>
  //           </NavCon1>
  //           <NavCon2>
  //             <Link to="/about17">
  //               <p>Office</p>
  //             </Link>
  //             <p>Instagram</p>
  //           </NavCon2>
  //         </LogoGridConMobile>
  //         <LogoCon ref={LogoConRef}>
  //           <Icon style={{ opacity: pageLoad ? 1 : 0 }} />
  //         </LogoCon>
  //       </>
  //     );
  //   }
  // };
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   // console.log(position);
  //   if (position > 25) {
  //     // console.log("greater than 100");
  //     LogoConRef2.current.classList.add("shrink");
  //   } else if (position < 25) {
  //     // console.log("less than 100");
  //     LogoConRef2.current.classList.remove("shrink");
  //   }
  // };
  // scroll use effect
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, {
  //     passive: true,
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const ProjectInfo = ({
    title,
    year,
    location,
    uid,
    homepage_intro,
    client,
  }) => {
    if (isPageWide) {
      return (
        <ProjectInfoCon>
          <Grid16>
            <ProjectTitleCon>
              <Link to={uid}>{title}</Link>
            </ProjectTitleCon>
            <ProjectLocationYearCon>
              <p>{location}</p>
              <p>{year}</p>
            </ProjectLocationYearCon>
            <ProjectIndexAbout>
              <p>{homepage_intro}</p>
            </ProjectIndexAbout>
            <ProjectLink>
              <Link to={uid}>More Info</Link>
            </ProjectLink>
          </Grid16>
        </ProjectInfoCon>
      );
    } else {
      return (
        <ProjectInfoCon>
          <Grid2>
            <ProjectTitleCon>
              <Link to={uid}>{title}</Link>
            </ProjectTitleCon>
            <ProjectLocationYearCon>
              <p>{location}</p>
              <p>{year}</p>
            </ProjectLocationYearCon>
          </Grid2>
        </ProjectInfoCon>
      );
    }
  };

  const ImgComponent = ({ srcProps, videoLoad }) => {
    // console.log(srcProps);
    var x = srcProps;
    // console.log("x");
    // console.log(x);
    var y = x.replace(
      /\?auto=&w=(800|1400|1600|2400|3600)&h=(800|1400|1600|2400|3600)/g,
      ""
    );
    // console.log("y");
    // console.log(y);
    return <SquareImage srcSet={y} />;
    //return <SquareImage src={srcProps} />;
  };

  const TwoUpProjectCarousel = ({
    children,

    projectLength,
  }) => {
    // COUNTER
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(null);
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
    useEffect(() => {
      setTotalSlides(projectLength);
    }, []);
    const updateCurrentSlide = index => {
      if (currentSlide !== index) {
        setCurrentSlide(index);
      }
    };

    // SLIDER SETTINGS
    const settings = {
      infinite: true,
      // speed: 200,
      slidesToShow: 2,
      slidesToScroll: 1,
      accessibility: true,
      dots: false,
      arrows: false,
      swipe: false,
      swipeToSlide: false,
    };

    // SLIDESHOW FUNCTION
    const ProjectCarouselRef = React.useRef(null);

    const [changedSlide, setChangedSlide] = useState(false);

    function projectCarouselNextImg() {
      ProjectCarouselRef.current.slickNext();
      setChangedSlide(true);
    }
    return (
      <>
        <TwoUpCarouselCounterNextCon>
          <Grid16>
            <TwoUpCarouselCounterOneCon>
              {/* <p>{("0" + (currentSlide + 1)).slice(-2)}</p> */}
              <p>{("0" + (currentSlide + 1)).slice(-2)}</p>
            </TwoUpCarouselCounterOneCon>
            <TwoUpCarouselCounterTwoCon>
              {/* <p>{("0" + (currentSlide + 1)).slice(-2)}</p> */}
              <p>{("0" + (currentSlide + 2)).slice(-2)}</p>
            </TwoUpCarouselCounterTwoCon>
            <TwoUpCarouselNextButtonCon>
              {projectLength > 1 ? (
                <>
                  <p
                    onClick={projectCarouselNextImg}
                    style={{ display: "inline-block" }}
                  >
                    Next
                  </p>
                  {/* <PVideoLoadingNext>&nbsp; (Video Loading)</PVideoLoadingNext> */}
                </>
              ) : (
                ""
              )}
            </TwoUpCarouselNextButtonCon>
          </Grid16>
        </TwoUpCarouselCounterNextCon>

        <TwoUpCarouselCon onClick={projectCarouselNextImg}>
          <Slider
            {...settings}
            ref={ProjectCarouselRef}
            afterChange={index => updateCurrentSlide(index)}
          >
            {React.Children.map(children, child =>
              React.cloneElement(child, {
                changedSlide: changedSlide,
              })
            )}
          </Slider>
        </TwoUpCarouselCon>
      </>
    );
  };
  const ProjectCarousel = ({
    children,

    projectLength,
    videoLoad,
  }) => {
    // SWIPE GESTURE
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
        // console.log("swipe", isLeftSwipe ? "left" : "right");
        // add your conditional logic here
        ProjectCarouselRef.current.slickNext();
    };

    // COUNTER
    const [currentSlide, setCurrentSlide] = useState(0);
    const [totalSlides, setTotalSlides] = useState(null);
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
    useEffect(() => {
      setTotalSlides(projectLength);
    }, []);
    const updateCurrentSlide = index => {
      if (currentSlide !== index) {
        setCurrentSlide(index);
      }
    };

    // SLIDER SETTINGS
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
    };

    // SLIDESHOW FUNCTION
    const ProjectCarouselRef = React.useRef(null);

    const [changedSlide, setChangedSlide] = useState(false);

    function projectCarouselNextImg() {
      ProjectCarouselRef.current.slickNext();
      setChangedSlide(true);
    }
    return (
      <>
        <Grid2>
          <CounterCon>
            <p>{("0" + (currentSlide + 1)).slice(-2)}</p>
          </CounterCon>
          <NextButtonCon>
            {projectLength > 1 ? (
              <>
                <p
                  onClick={projectCarouselNextImg}
                  style={{ display: "inline-block" }}
                >
                  Next
                </p>
                {/* <PVideoLoadingNext>&nbsp; (Video Loading)</PVideoLoadingNext> */}
              </>
            ) : (
              ""
            )}
          </NextButtonCon>
        </Grid2>
        <Grid2>
          <SquareCarouselCon
            onClick={projectCarouselNextImg}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Slider
              {...settings}
              ref={ProjectCarouselRef}
              afterChange={index => updateCurrentSlide(index)}
            >
              {React.Children.map(children, child =>
                React.cloneElement(child, {
                  changedSlide: changedSlide,
                })
              )}
            </Slider>
          </SquareCarouselCon>
        </Grid2>
      </>
    );
  };

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
                  <TwoUpCarouselCounterOneCon>
                    {/* <p>{("0" + (currentSlide + 1)).slice(-2)}</p> */}
                    <p> 01</p>
                  </TwoUpCarouselCounterOneCon>
                  <TwoUpCarouselCounterTwoCon>
                    {/* <p>{("0" + (currentSlide + 1)).slice(-2)}</p> */}
                    <p> 01</p>
                  </TwoUpCarouselCounterTwoCon>
                  <TwoUpCarouselNextButtonCon>
                    <p>Next</p>
                  </TwoUpCarouselNextButtonCon>
                </Grid16>
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
      {/* <Helmet htmlAttributes={{ ref: htmlRef }}> */}
      <Helmet>
        <head></head>
        <title>(10) Pagination 1</title>
      </Helmet>
      {/* <LoadingBlock></LoadingBlock> */}
      {/* <FadeInCon> */}
      {/* <TestVideoCon>
          <video autplay muted>
            <source src={TestVideo}></source>
          </video>
        </TestVideoCon> */}
      <IntroCon style={{ opacity: pageLoad ? 1 : 0 }}>
        {/* <IntroCon> */}
        <Grid16>
          <AboutCon>
            <p>
              The design office of Theo Ford. Specialising in graphic design,
              art direction, moving-image and web development. Recent commisions
              and collaborations include identites for{" "}
              <span className="grey">Tesla</span>, adverts for{" "}
              <span className="grey">American Apparel</span>, and printed matter
              for <span className="grey">COS</span>.<br />
            </p>
          </AboutCon>
          <LocationCon>
            <p>
              Current Location: <span className="grey">New York,</span> London,
              <span className="grey">
                {" "}
                Los Angeles, Beijing, Stockholm, Gothenburg, Glasgow, Falmouth,
                Philadelphia.
              </span>{" "}
              2023/03/23 21:32.
            </p>
          </LocationCon>
          <ContactCon>
            <p class="">
              <span>
                info@theoford.com
                <br />
                +44 7599 759 529
                <br />
                @tf.public
              </span>
            </p>
          </ContactCon>
        </Grid16>
      </IntroCon>
      <NavSpacer></NavSpacer>
      <NavIndexGrid></NavIndexGrid>
      {/* <LogoNav></LogoNav> */}
      <PageCon style={{ opacity: pageLoad ? 1 : 0 }}>{overview}</PageCon>
      {/* </FadeInCon> */}
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
