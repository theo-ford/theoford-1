import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
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
const Img = styled.img`
  width: 100%;
`;
const Video = styled.video`
  width: 100%;
`;

const Logo = styled.img`
  width: 400px;
  position: fixed;
  top: 0;
  left: 0;
`;
const IconStyled = styled.svg`
  width: 400px;
  position: fixed;
  top: 200;
  left: 0;
`;
const LogoGrid16 = styled.div`
  display: grid;
  position: sticky;
  top: 12.5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  margin-left: 12.5px;
  grid-row-gap: 0;
  width: calc(100% - 25px);
  z-index: 20000;
  mix-blend-mode: exclusion;
`;

const LogoCon = styled.div`
  grid-column: span 5;
  mix-blend-mode: exclusion;
`;
const NavCon1 = styled.div`
  grid-column: span 1;
  mix-blend-mode: exclusion;
  p {
    color: white;
  }
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
const ProjectTitleCon = styled.div`
  grid-column: span 1;
  p {
    color: #cfcfcfcf;
  }
`;
const ProjectLocationYearCon = styled.div`
  grid-column: span 1;
  margin-bottom: 5px;
`;

const ProjectCon = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;
const VideoCarouselCon = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
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

const Index = ({ data }) => {
  const AutoPlayVideo = ({ srcProps, posterProps }) => {
    // https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks
    const autoplayVideoRef = useRef(null);

    const isOnScreen = useOnScreen(autoplayVideoRef);

    const [videoSrcState, setVideoSrcState] = useState("");

    console.log(srcProps);
    console.log({ isOnScreen });
    // if (isOnScreen == true) {
    //   setVideoSrcState(srcProps);
    // }
    useEffect(() => {
      if (isOnScreen == true) {
        console.log("testing true");
        setVideoSrcState(srcProps);
        autoplayVideoRef.current.load();
        autoplayVideoRef.current.play();
      }
    }, [isOnScreen]);

    return (
      <video
        playsInline
        autoPlay
        muted
        loop
        ref={autoplayVideoRef}
        poster={posterProps}
      >
        <source
          type="video/mp4"
          // data-src={srcProps}
          src={videoSrcState}
        />
      </video>
    );
  };

  const ReactPlayerAutoPlay = ({ srcProps, posterProps }) => {
    const reactPlayerAutoplayVideoRef = useRef();
    const divReactPlayerAutoplayVideoRef = useRef();
    const isOnScreen = useOnScreen(divReactPlayerAutoplayVideoRef);
    const [videoSrcState, setVideoSrcState] = useState("");

    console.log(srcProps);
    console.log({ isOnScreen });

    useEffect(() => {
      if (isOnScreen == true) {
        console.log("testing true");
        setVideoSrcState(srcProps);
        // autoplayVideoRef.current.load();
        // autoplayVideoRef.current.play();
      }
    }, [isOnScreen]);

    return (
      <div ref={divReactPlayerAutoplayVideoRef}>
        <ReactPlayer
          url={srcProps}
          config={{
            file: {
              attributes: {
                preload: "none",
              },
            },
          }}
          // ref={reactPlayerAutoplayVideoRef}
          playing={true}
          muted={true}
          loop={true}
          controls={false}
          width="100%"
          playsinline={true}
          height="auto"
          // className="player"

          // light={posterProps}
        ></ReactPlayer>
      </div>
    );
  };

  const ProjectCarousel = ({
    children,
    title,
    year,
    location,
    projectLength,
  }) => {
    // console.log(title);
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
    const ProjectCarouselRef = React.useRef(null);
    function projectCarouselNextImg() {
      // console.log("Next");
      ProjectCarouselRef.current.slickNext();
    }

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
        <Grid2>
          <CounterCon>
            {/* <p>{currentSlide + 1}</p> */}
            <p>{("0" + (currentSlide + 1)).slice(-2)}</p>
          </CounterCon>
          <NextButtonCon>
            {projectLength > 1 ? (
              <p onClick={projectCarouselNextImg}>Next</p>
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
            // onSwipeLeft={projectCarouselNextImg}
          >
            <Slider
              {...settings}
              ref={ProjectCarouselRef}
              afterChange={index => updateCurrentSlide(index)}
            >
              {children}
            </Slider>
          </SquareCarouselCon>
        </Grid2>
        <Grid2>
          <ProjectTitleCon>
            <p>{title}</p>
            {/* <p>Title</p> */}
          </ProjectTitleCon>
          <ProjectLocationYearCon>
            <p>{location}</p>
            <p>{year}</p>
          </ProjectLocationYearCon>
        </Grid2>
      </>
    );
  };
  const FilmLeadCarousel = ({ children }) => {
    const FilmsLeadCarouselRef = React.useRef(null);
    function filmsLeadCarouselNextImg() {
      // console.log("Next");
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
      // console.log(
      //   content.project_relationship_field.document.data.project_title.text
      // );
      if (
        content.project_relationship_field.document.type == "film_lead_project"
      ) {
        // console.log("film lead project");

        const filmLeadProject = content.project_relationship_field.document.data.body.map(
          (content_three, index) => {
            // console.log(content_three.video.url);
            // console.log("test");
            // console.log(content_three.primary.video_thumbnail.fluid.src);
            // console.log(content_three.slice_type);

            if (content_three.slice_type == "video_with_play_button") {
              return (
                <video
                  playsInline
                  muted
                  loop
                  controls
                  preload="none"
                  poster={content_three.primary.video_thumbnail.fluid.src}
                >
                  <source
                    type="video/mp4"
                    src={content_three.primary.video_with_play_button.url}
                  />
                </video>
              );
            }
          }
        );
        return (
          <>
            <VideoCarouselCon>
              <FilmLeadCarouselConCon>
                <FilmLeadCarouselCon>
                  <FilmLeadCarousel>{filmLeadProject}</FilmLeadCarousel>
                </FilmLeadCarouselCon>
              </FilmLeadCarouselConCon>
            </VideoCarouselCon>
            <Grid2>
              <ProjectTitleCon>
                <p>
                  {
                    content.project_relationship_field.document.data
                      .project_title.text
                  }
                </p>
                <p>
                  {content.project_relationship_field.document.data.client.text}
                </p>
              </ProjectTitleCon>
              <ProjectLocationYearCon>
                <p>
                  {
                    content.project_relationship_field.document.data.location
                      .text
                  }
                </p>
                <p>
                  {content.project_relationship_field.document.data.year.text}
                </p>
              </ProjectLocationYearCon>
            </Grid2>
          </>
        );
      }
      if (content.project_relationship_field.document.type == "project") {
        // console.log(
        //   content.project_relationship_field.document.data.project_title.text
        // );
        const project = content.project_relationship_field.document.data.body.map(
          (content_four, index) => {
            const projectLength =
              content.project_relationship_field.document.data.body.length;
            // console.log(projectLength);
            if (content_four.slice_type == "image") {
              return <img src={content_four.primary.image.fluid.srcWebp} />;
            }
            if (content_four.slice_type == "video") {
              return (
                // <video playsInline autoPlay muted loop ref={autoplayVideoRef}>
                //   <source
                //     type="video/mp4"
                //     src={content_four.primary.video.url}
                //   />
                // </video>
                // <AutoPlayVideo
                //   srcProps={content_four.primary.video.url}
                //   posterProps={content_four.primary.index_image.fluid.src}
                // />
                <ReactPlayerAutoPlay
                  srcProps={content_four.primary.video.url}
                  posterProps={content_four.primary.index_image.fluid.src}
                />
              );
            }
          }
        );
        // console.log(project);
        return (
          <>
            <ProjectCon>
              <ProjectCarousel
                projectLength={
                  content.project_relationship_field.document.data.body.length
                }
                title={
                  content.project_relationship_field.document.data.project_title
                    .text
                }
                year={
                  content.project_relationship_field.document.data.year.text
                }
                location={
                  content.project_relationship_field.document.data.location.text
                }
              >
                {project}
              </ProjectCarousel>
            </ProjectCon>
          </>
        );
      }
    }
  );

  return (
    <>
      <GlobalStyle />

      {overview}
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
