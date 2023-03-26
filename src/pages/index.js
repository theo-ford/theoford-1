import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { withPreview } from "gatsby-source-prismic";
import { ImageOrientation } from "../components/utils/image-orientation";
import { Helmet } from "react-helmet";
import "../components/styles/index.css";
import { useMediaQuery } from "../components/tf/media-query";
import Icon from "../../assets/WhiteLogo.svg";
import Slider from "react-slick";
import "../components/slick/slick.css";
import "../components/slick/slick-theme.css";
import { useOnScreen } from "../components/hooks/useOnScreen";
import ReactPlayer from "react-player";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: white;
  }
  body {
    background-color: white;
  }
`;
const NavSpacer = styled.div`
  height: 24vh;
  width: 100%;
`;

const LogoGridCon = styled.div`
  width: 100%;
  position: sticky;
  top: 12.5px;
  z-index: 300000;
  mix-blend-mode: exclusion;
`;

const LogoCon = styled.div`
  top: 12.5px;
  mix-blend-mode: exclusion;
  grid-column: span 6;
`;
const NavCon1 = styled.div`
  grid-column: span 1;
  p {
    color: #878787;
  }
  p.selected {
    color: white;
  }
`;
const NavCon2 = styled.div`
  grid-column: span 1;
  p {
    color: #878787;
  }
  p.selected {
    color: white;
  }
`;
const PageCon = styled.div`
  margin-top: 24vh;
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
  /* margin-bottom: 200px; */
  margin-bottom: 200px;
  @media (max-width: 666px) {
    margin-bottom: 200px;
  }
`;
const VideoCarouselCon = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  margin-bottom: 200px;
  @media (max-width: 666px) {
    margin-bottom: 200px;
  }
  /* margin-bottom: 200px; */
`;
const FilmLeadCarouselConCon = styled.div`
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  margin-left: 10px;
  grid-row-gap: 0;
  width: calc(100% - 20px);
  z-index: 20000;
  align-items: center;
  height: 100vh;
`;
const FilmLeadCarouselCon = styled.div`
  grid-column: span 2;
`;
const DesktopFilmLeadCarouselConCon = styled.div`
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  margin-left: 12.5px;
  grid-row-gap: 0;
  width: calc(100% - 25px);
  z-index: 20000;
  align-items: center;
  height: 100%;
`;
const DesktopFilmLeadCarouselCon = styled.div`
  grid-column: 5 / span 8;
  align-self: center;
`;
const VideoWithContolsSC = styled.video`
  grid-column: 5 / span 8;
  width: 100%;
`;
const AutoplayVideoCon = styled.div`
  position: relative;
  width: calc(100% - 12.5px);
  @media (max-width: 666px) {
    width: 100%;
  }
`;

const AutoplayVideoImg = styled.img`
  /* position: absolute; */
  width: 100%;
  height: 100%;
`;
const AutoplayVideoVideo = styled.video`
  /* position: absolute; */
  width: 100%;
  height: 100%;
`;
const AutoplayVideoImgCon = styled.div``;
const breatheAnimation = keyframes`
0% {opacity: 0} 
50% {opacity: 1}
100% {opacity:0}
`;
const AutoplayVideoTextCon = styled.div`
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  p {
    color: black;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    background-color: white;
    margin-top: -1px;
    animation-name: ${breatheAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;

const SquareImage = styled.img`
  width: calc(100% - 12.5px);
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
  margin-top: 8px;
  @media (max-width: 666px) {
    margin-top: 4px;
  }
`;
const ProjectTitleCon = styled.div`
  grid-column: span 4;

  @media (max-width: 666px) {
    grid-column: span 1;
    p {
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

const Index = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");

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
              <p>{title}</p>
            </ProjectTitleCon>
            <ProjectLocationYearCon>
              <p>{location}</p>
              <p>{year}</p>
            </ProjectLocationYearCon>
            <ProjectIndexAbout>
              <p>{homepage_intro}</p>
            </ProjectIndexAbout>
            <ProjectLink>
              <a>More Info</a>
            </ProjectLink>
          </Grid16>
        </ProjectInfoCon>
      );
    } else {
      return (
        <ProjectInfoCon>
          <Grid2>
            <ProjectTitleCon>
              <p>{title}</p>
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
    return <SquareImage src={srcProps} />;
  };

  const VideoWithControls = ({ srcProps, posterProps }) => {
    const videoWithControlsRef = useRef(null);
    // const height = videoWithControlsRef.current.dimensions.height;

    const isOnScreen = useOnScreen(videoWithControlsRef);
    const [videoSrcState, setVideoSrcState] = useState("");
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

    console.log("video with controls ref");
    console.log(videoWithControlsRef);

    const onLoadedData = () => {
      setIsVideoLoaded(true);
    };

    if (isVideoLoaded) {
      console.log("video has loaded");
      const height = videoWithControlsRef.current.clientHeight;
      console.log(height);
      const width = videoWithControlsRef.current.clientWidth;
      console.log(width);
    }

    useEffect(() => {
      if (isOnScreen == true) {
        // console.log(srcProps);
        // console.log("on screen");
        setVideoSrcState(srcProps);
        videoWithControlsRef.current.load();
        // videoWithControlsRef.current.play();
      } else if (isOnScreen === false) {
        // console.log(srcProps);
        // console.log("off screen");
        setIsVideoLoaded(false);
        setVideoSrcState("");
      }
    }, [isOnScreen]);

    return (
      <VideoWithContolsSC
        playsInline
        muted
        loop
        controls
        preload="none"
        poster={posterProps}
        ref={videoWithControlsRef}
        onLoadedData={onLoadedData}
      >
        <source type="video/mp4" src={videoSrcState} />
      </VideoWithContolsSC>
    );
  };

  const AutoPlayVideo = ({ srcProps, posterProps, changedSlide }) => {
    // https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks
    // https://frontend-digest.com/responsive-and-progressive-video-loading-in-react-e8753315af51
    const autoplayVideoRef = useRef(null);
    const isOnScreen = useOnScreen(autoplayVideoRef);
    const [videoSrcState, setVideoSrcState] = useState("");
    const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

    console.log("autoplay Video Ref");
    console.log(autoplayVideoRef);

    const onLoadedData = () => {
      setIsVideoLoaded(true);
    };

    useEffect(() => {
      if (isOnScreen == true) {
        // console.log(srcProps);
        // console.log("on screen");
        setVideoSrcState(srcProps);
        autoplayVideoRef.current.load();
        autoplayVideoRef.current.play();
      } else if (isOnScreen === false) {
        // console.log(srcProps);
        // console.log("off screen");
        setIsVideoLoaded(false);
        setVideoSrcState("");
      }
    }, [isOnScreen]);

    return (
      <>
        <AutoplayVideoCon>
          <AutoplayVideoImgCon
            style={{
              opacity: isVideoLoaded ? 0 : 1,
              position: isVideoLoaded ? "absolute" : "relative",
              // opacity: 1,
              // position: "relative",
            }}
          >
            <AutoplayVideoTextCon>
              <p>Video Loading</p>
            </AutoplayVideoTextCon>

            <AutoplayVideoImg
              src={posterProps}
              style={{
                opacity: isVideoLoaded ? 0 : 1,
                position: isVideoLoaded ? "absolute" : "relative",
                // opacity: 1,
                // position: "relative",
              }}
            />
          </AutoplayVideoImgCon>

          <AutoplayVideoVideo
            playsInline
            autoPlay
            muted
            loop
            ref={autoplayVideoRef}
            // onCanPlayThrough={onLoadedData}
            onLoadedData={onLoadedData}
            style={{
              opacity: isVideoLoaded ? 1 : 0,
              position: isVideoLoaded ? "relative" : "absolute",
              // opacity: 0,
              // position: "absolute",
            }}
          >
            <source type="video/mp4" src={videoSrcState} />
          </AutoplayVideoVideo>
        </AutoplayVideoCon>
      </>
    );
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
  const FilmLeadCarousel = ({ children }) => {
    const FilmsLeadCarouselRef = React.useRef(null);
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
    };
    return (
      <>
        <NextButtonCon>
          <p onClick={filmsLeadCarouselNextImg}>Next</p>
        </NextButtonCon>
        <Slider {...settings} ref={FilmsLeadCarouselRef}>
          {children}
        </Slider>
      </>
    );
  };
  const overview = data.prismicFeaturedProjects.data.project_relationship_group.map(
    (content, index) => {
      if (
        content.project_relationship_field.document.type == "film_lead_project"
      ) {
        const filmLeadProject = content.project_relationship_field.document.data.body.map(
          (content_three, index) => {
            if (content_three.slice_type == "video_with_play_button") {
              return (
                <VideoWithControls
                  srcProps={content_three.primary.video_with_play_button.url}
                  posterProps={content_three.primary.video_thumbnail.fluid.src}
                ></VideoWithControls>
              );
            }
          }
        );
        if (isPageWide) {
          return (
            <>
              <VideoCarouselCon>
                <DesktopFilmLeadCarouselConCon>
                  <DesktopFilmLeadCarouselCon>
                    <FilmLeadCarousel>{filmLeadProject}</FilmLeadCarousel>
                  </DesktopFilmLeadCarouselCon>
                </DesktopFilmLeadCarouselConCon>
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
                ></ProjectInfo>
              </VideoCarouselCon>
            </>
          );
        }
        if (!isPageWide) {
          return (
            <>
              <VideoCarouselCon>
                <FilmLeadCarouselConCon>
                  <FilmLeadCarouselCon>
                    <FilmLeadCarousel>{filmLeadProject}</FilmLeadCarousel>
                  </FilmLeadCarouselCon>
                </FilmLeadCarouselConCon>
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
                ></ProjectInfo>
              </VideoCarouselCon>
            </>
          );
        }
      }
      if (content.project_relationship_field.document.type == "project") {
        const projectLength =
          content.project_relationship_field.document.data.body.length;
        const project = content.project_relationship_field.document.data.body.map(
          (content_four, index) => {
            if (content_four.slice_type == "image") {
              return (
                <ImgComponent
                  srcProps={content_four.primary.image.fluid.srcWebp}
                />
              );
            }
            if (content_four.slice_type == "video") {
              return (
                <AutoPlayVideo
                  srcProps={content_four.primary.video.url}
                  posterProps={content_four.primary.index_image.fluid.src}
                />
              );
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
              ></ProjectInfo>
            </ProjectCon>
          );
        }
      }
    }
  );

  return (
    <>
      <Helmet>
        <title>sml logo, info below, no intro</title>
      </Helmet>
      <GlobalStyle />
      <NavSpacer></NavSpacer>
      <LogoGridCon>
        <Grid16>
          <LogoCon>
            <Icon />
          </LogoCon>
          <NavCon1>
            <p className="selected">Selected</p>
            <p>Index</p>
          </NavCon1>
          <NavCon2>
            <p>About</p>
            <p>Instagram</p>
          </NavCon2>
        </Grid16>
      </LogoGridCon>
      <PageCon>{overview}</PageCon>
    </>
  );
};

export default withPreview(Index);

export const query = graphql`
  query MyQuery {
    prismicFeaturedProjects {
      data {
        project_relationship_group {
          project_relationship_field {
            document {
              ... on PrismicProject {
                id
                type
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
                          fluid {
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
                        index_image {
                          fluid {
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
