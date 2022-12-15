import React, { useRef, useState } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled from "styled-components";
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

const Index = ({ data }) => {
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
    <p>
      featured projects
      {overview}
    </p>
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
