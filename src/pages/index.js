import React, { useRef, useState } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle } from "styled-components";
import { withPreview } from "gatsby-source-prismic";
import { ImageOrientation } from "../components/utils/image-orientation";
import { Helmet } from "react-helmet";
import Div100vh from "react-div-100vh";
import "../components/styles/index.css";
import Scrollspy from "react-scrollspy";
import burgerBlack from "../../public/icons/burger-black.png";
import exitBlack from "../../public/icons/exit-black.png";
import exitWhite from "../../public/icons/exit-white.png";
import { NavStudio } from "../components/tf/nav-studio";
import { useMediaQuery } from "../components/tf/media-query";
// import logo from "../../public/icons/WhiteLogo.svg";
// import Logo2 from "../components/svg/logo";
import Icon from "../../assets/WhiteLogo.svg";
import Slider from "react-slick";
import "../components/slick/slick.css";
import "../components/slick/slick-theme.css";

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
const VideoCarouselCon = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
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
const ProjectCon = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Index = ({ data }) => {
  const ProjectCarousel = ({ children }) => {
    const ProjectCarouselRef = React.useRef(null);
    function projectCarouselNextImg() {
      console.log("Next");
      ProjectCarouselRef.current.slickNext();
    }
    const settings = {
      infinite: true,
      speed: 0,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: true,
      dots: false,
      arrows: false,
      useCSS: false,
      // these two disable it completely
      // touchMove: false,
      // swipe: false,

      // these two do nothing
      // draggable: false,
      // swipeToSlide: true,

      // useTransform: true,

      // touchThreshold: 5,
    };
    return (
      <>
        <p onClick={projectCarouselNextImg}>Next</p>
        <div onClick={projectCarouselNextImg}>
          <Slider {...settings} ref={ProjectCarouselRef}>
            {children}
          </Slider>
        </div>
      </>
    );
  };
  const overview = data.prismicFeaturedProjects.data.project_relationship_group.map(
    (content, index) => {
      if (
        content.project_relationship_field.document.type == "film_lead_project"
      ) {
        const filmLeadProject = content.project_relationship_field.document.data.video_carousel.map(
          (content_three, index) => {
            console.log(content_three.video.url);
            return (
              <Video playsInline muted loop controls>
                <source type="video/mp4" src={content_three.video.url} />
              </Video>
            );
          }
        );
        return (
          <>
            <VideoCarouselCon>{filmLeadProject}</VideoCarouselCon>
          </>
        );
      }
      if (content.project_relationship_field.document.type == "project") {
        const project = content.project_relationship_field.document.data.body.map(
          (content_four, index) => {
            if (content_four.slice_type == "image") {
              return <img src={content_four.primary.image.fluid.srcWebp} />;
            }
            if (content_four.slice_type == "video") {
              return (
                <video playsInline autoPlay muted loop>
                  <source
                    type="video/mp4"
                    src={content_four.primary.video.url}
                  />
                </video>
              );
            }
          }
        );
        console.log(project);
        return (
          <>
            <ProjectCon>
              <ProjectCarousel>{project}</ProjectCarousel>
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
                  body {
                    ... on PrismicProjectBodyVideo {
                      id
                      slice_type
                      primary {
                        video {
                          url
                        }
                      }
                    }
                    ... on PrismicProjectBodyImage {
                      id
                      slice_type
                      primary {
                        image {
                          fluid {
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
                  video_carousel {
                    video {
                      url
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
