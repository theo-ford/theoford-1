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

const GlobalStyle = createGlobalStyle`
  html {
    background-color: white;
  }
  body {
    background-color: white;
  }
`;
const Img = styled.img`
  width: 20%;
`;
const Video = styled.video`
  width: 40%;
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

const Index = ({ data }) => {
  console.log("testing 20230313");
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
              console.log(content_four.primary.image.fluid.srcWebp);
              console.log(true);
              return (
                <>
                  <Img src={content_four.primary.image.fluid.srcWebp} />
                </>
              );
            }
            if (content_four.slice_type == "video") {
              console.log(content_four.primary.video.url);
              console.log(true);
              return (
                <>
                  <Video playsInline autoPlay muted loop>
                    <source
                      type="video/mp4"
                      src={content_four.primary.video.url}
                    />
                  </Video>
                </>
              );
            }
          }
        );
        return <>{project}</>;
      }
    }
  );

  // const projects = data.prismicFeaturedProjects.data.project_relationship_group.map(
  //   (content, index) => {
  //     const singleProject = content.project_relationship_field.document.data.body.map(
  //       (content_four, index) => {
  //         if (content.project_relationship_field.document.type == "project") {
  //           console.log("hello");
  //         }
  //       }
  //     );
  //   }
  // );
  return (
    <>
      <GlobalStyle />

      <LogoGrid16>
        <LogoCon>
          <Icon className="logo_styles" />
        </LogoCon>
        <NavCon1>
          <p>Selected</p>
          <p>Index</p>
        </NavCon1>
      </LogoGrid16>

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
