import React, { useRef, useState, useEffect } from "react";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { ImageOrientation } from "../components/utils/image-orientation";
import { Helmet } from "react-helmet";
import "../components/styles/index.css";
import { useMediaQuery } from "../components/tf/media-query";
import Icon from "../../assets/WhiteLogo.svg";
import { AutoPlayVideo } from "../components/tf/autoplay-video";
import { AutoPlayVideoAltDes } from "../components/tf/autoplay-video-altDes";
import { Intro } from "../components/tf/index/intro";
import { ProjectInfo2 } from "../components/tf/index/project-info2-altDes_16Buttons";

import { TwoUpProjectCarouselSwiperOf1 } from "../components/tf/index/two-up-carousels/two-up-carousel-swiper-of-1-altDes_16Buttons";
import { OneUpProjectCarouselSwiperOf1 } from "../components/tf/index/one-up-carousel/one-up-carousel-swiper-of-1-altDes_16Buttons";
import { ProjectCarousel } from "../components/tf/index/one-up-carousel";
import { SingleAssetProject } from "../components/tf/index/single-asset-project1";
import { FilmLeadCarousel2 } from "../components/tf/index/film-carousel-altDes";
import { VideoWithControlsImg3 } from "../components/tf/index/video-auto";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperIndexContext from "../components/tf/index/two-up-carousels/swiper-index-context";

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
      /* position: fixed; */
    }    
  }
`;

const NavCon = styled.div`
  position: fixed;
  z-index: 400000;
  margin-top: 12.5px;
  width: calc(100% - 25px);
  margin-left: 12.5px;
  display: grid;
  grid-gap: 12.5px;
  grid-template-columns: 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 4 */;
  @media (max-width: 666px) {
    width: calc(100% - 20px);
    margin-left: 10px;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr /* 4 */;
  }
`;
const NavConBlur = styled.div`
  position: fixed;
  z-index: 300000;
  margin-top: 12.5px;
  width: calc(100% - 25px);
  margin-left: 12.5px;
  grid-gap: 12.5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 4 */;
  @media (max-width: 666px) {
    width: calc(100% - 20px);
    margin-left: 10px;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr /* 4 */;
  }
`;
const NavButtonBlur = styled.div`
  grid-column: span 1;
  background-color: #c0baba;
  border-radius: 6px;
  opacity: 0.5;
  filter: blur(5px);
  p {
    color: white;
    font-size: 16px;
    padding: 2px;
    padding-left: 4px;
  }
  &.theo {
    grid-column: span 2;
    background-color: black;
  }
  &.select {
    grid-column: 9 / span 1;
    background-color: black;
  }
  &.instagram {
    grid-column: 15 / span 1;
  }
  @media (max-width: 666px) {
    &.select {
      grid-column: span 1;
    }
    &.theo {
      display: none;
    }
    &.instagram {
      display: none;
    }
    &.twitter {
      display: none;
    }
    grid-column: span 1;
  }
`;
const NavButton = styled.div`
  grid-column: span 1;
  background-color: #c0baba;
  border-radius: 6px;
  opacity: 0.5;
  p {
    color: white;
    font-size: 16px;
    padding: 2px;
    padding-left: 4px;
  }
  &.theo {
    grid-column: span 2;
    background-color: black;
  }
  &.select {
    grid-column: 9 / span 1;
    background-color: black;
  }
  &.instagram {
    grid-column: 15 / span 1;
  }
  @media (max-width: 666px) {
    &.select {
      grid-column: span 1;
    }
    &.theo {
      display: none;
    }
    &.instagram {
      display: none;
    }
    &.twitter {
      display: none;
    }
    grid-column: span 1;
  }
`;

const HeroCon = styled.div`
  p {
    color: black;
    opacity: 0.8;
    margin-left: 12.5px;
    margin-top: 30vh;
    margin-bottom: 30vh;
    width: 1100px;
    font-size: 48px;
    line-height: 110%;
    letter-spacing: -1.1px !important;
    font-family: "Helvetica Now Var Roman", helvetica, sans-serif;
    font-variation-settings: "wght" 375;
    span.brands {
      color: #878787;
      margin-top: 30vh;
      margin-bottom: 30vh;
      width: 1059px;
      font-size: 48px;
      line-height: 110%;
      letter-spacing: -2.064px;
    }

  }
  @media (max-width: 666px) {
    p {
      font-size: 18px;
      width: calc(100% - 20px);
      letter-spacing: -0.6px !important;
      span.brands {
        color: #878787;
        font-size: 18px;
        letter-spacing: -0.6px !important;
      }
    }
`;

const IndexAutoPlayVideoCon = styled.div`
  position: relative;
  border-radius: 10px !important;
  overflow: hidden;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.13);
  width: calc(100% - 12.5px);
  margin-left: 6.25px;
  margin-right: 6.25px;
  margin-top: 12.5px;
  margin-bottom: 12.5px;
  @media (max-width: 666px) {
    /* width: 100% !important; */
    width: calc(100% - 20px);
    margin-left: 10px;
  }
`;

const ProjectCon = styled.div`
  margin-bottom: 100px;
  @media (max-width: 666px) {
    margin-bottom: 200px;
  }
`;

const SquareImg = styled.div`
  /* width: calc(100% - 12.5px) !important; */
  border-radius: 10px !important;
  overflow: hidden;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.13);
  width: calc(100% - 12.5px);
  margin-left: 6.25px;
  margin-right: 6.25px;
  margin-top: 12.5px;
  margin-bottom: 12.5px;
  @media (max-width: 666px) {
    /* width: 100% !important; */
    width: calc(100% - 20px);
    margin-left: 10px;
  }
`;
const Index = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  const overview = data.prismicFeaturedProjects.data.project_relationship_group.map(
    (content, index) => {
      if (
        content.project_relationship_field.document.type == "film_lead_project"
      ) {
        const filmLeadProject = content.project_relationship_field.document.data.body.map(
          (content_three, index) => {
            if (content_three.slice_type == "video_with_play_button") {
              const posterImage = content_three.primary.video_thumbnail;
              if (isPageWide) {
                return (
                  // <VideoWithControlsImg3
                  //   srcProps={content_three.primary.video_with_play_button.url}
                  //   posterProps={posterImage}
                  //   img={posterImage}
                  // ></VideoWithControlsImg3>
                  <AutoPlayVideoAltDes
                    srcProps={content_three.primary.video_with_play_button.url}
                    posterProps={posterImage}
                  />
                );
              } else {
                return (
                  // <VideoWithControlsImg3
                  //   srcProps={
                  //     content_three.primary.small_video_with_play_button.url
                  //   }
                  //   posterProps={posterImage}
                  //   img={posterImage}
                  // ></VideoWithControlsImg3>
                  <AutoPlayVideoAltDes
                    srcProps={content_three.primary.video_with_play_button.url}
                    posterProps={posterImage}
                  />
                );
              }
            }
          }
        );
        return (
          <>
            <ProjectCon>
              <FilmLeadCarousel2>
                {React.Children.map(filmLeadProject, child =>
                  React.cloneElement(child, {})
                )}
              </FilmLeadCarousel2>
              <ProjectInfo2
                // style={{ marginTop: "40px" }}
                data2={content.project_relationship_field.document.data}
                uid={content.project_relationship_field.document.uid}
              ></ProjectInfo2>
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
              const image = getImage(content_four.primary.image);
              return (
                <SwiperSlide>
                  {/* {console.log(swiperSlideIndex)} */}
                  <SwiperIndexContext.Provider value={index}>
                    {/* <p>
                          {index + 1} of {projectLength}
                        </p> */}
                    <SquareImg>
                      <GatsbyImage image={image} />
                    </SquareImg>
                  </SwiperIndexContext.Provider>
                </SwiperSlide>
              );
            }
            if (content_four.slice_type == "video") {
              if (isPageWide) {
                const posterImg = content_four.primary.index_image;
                return (
                  <SwiperIndexContext.Provider value={index}>
                    <SwiperSlide>
                      <IndexAutoPlayVideoCon>
                        <AutoPlayVideo
                          srcProps={content_four.primary.video.url}
                          posterProps={posterImg}
                        />
                      </IndexAutoPlayVideoCon>
                    </SwiperSlide>
                  </SwiperIndexContext.Provider>
                );
              } else {
                const posterImg = content_four.primary.index_image;
                return (
                  <SwiperSlide>
                    <IndexAutoPlayVideoCon>
                      <AutoPlayVideo
                        srcProps={content_four.primary.sml_video.url}
                        posterProps={posterImg}
                      />
                    </IndexAutoPlayVideoCon>
                  </SwiperSlide>
                );
              }
            }
          }
        );
        if (isPageWide) {
          return (
            <ProjectCon>
              <TwoUpProjectCarouselSwiperOf1
                projectLength={
                  content.project_relationship_field.document.data.body.length
                }
              >
                {project}
              </TwoUpProjectCarouselSwiperOf1>
              <ProjectInfo2
                data2={content.project_relationship_field.document.data}
                uid={content.project_relationship_field.document.uid}
              ></ProjectInfo2>
            </ProjectCon>
          );
        } else if (isPageWide == false) {
          return (
            <ProjectCon>
              <OneUpProjectCarouselSwiperOf1 projectLength={projectLength}>
                {project}
              </OneUpProjectCarouselSwiperOf1>
              <ProjectInfo2
                data2={content.project_relationship_field.document.data}
                uid={content.project_relationship_field.document.uid}
              ></ProjectInfo2>
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
        <title>Theo Ford</title>
      </Helmet>
      <NavConBlur>
        <NavButtonBlur className="theo">
          <p>Theo Ford</p>
        </NavButtonBlur>
        <NavButtonBlur className="select">
          <p>Select</p>
        </NavButtonBlur>
        <NavButtonBlur className="index">
          <p>Index</p>
        </NavButtonBlur>
        <NavButtonBlur className="bio">
          <p>Bio</p>
        </NavButtonBlur>
        <NavButtonBlur className="contact">
          <p>Contact</p>
        </NavButtonBlur>
        <NavButtonBlur className="instagram">
          <p>Instagram</p>
        </NavButtonBlur>
        <NavButtonBlur className="twitter">
          <p>Twitter</p>
        </NavButtonBlur>
      </NavConBlur>
      <NavCon>
        <NavButton className="theo">
          <p>Theo Ford</p>
        </NavButton>
        <NavButton className="select">
          <p>Select</p>
        </NavButton>
        <NavButton className="index">
          <p>Index</p>
        </NavButton>
        <NavButton className="bio">
          <p>Bio</p>
        </NavButton>
        <NavButton className="contact">
          <p>Contact</p>
        </NavButton>
        <NavButton className="instagram">
          <p>Instagram</p>
        </NavButton>
        <NavButton className="twitter">
          <p>Twitter</p>
        </NavButton>
      </NavCon>

      <HeroCon>
        <p>
          The design office of Theo Ford. Specialising in graphic design,
          art-direction, moving-image and web development. Recent commissions
          and collaborations include identities for{" "}
          <span className="brands">Lunar Energy</span>, creative direction for{" "}
          <span className="brands">American Apparel</span> and printed matter
          for <span className="brands">Cos</span> .
        </p>
      </HeroCon>

      {overview}
    </>
  );
};

export default withPrismicPreview(Index);

export const query = graphql`
  query IndexQuery72 {
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
                  show_client_on_index
                  body {
                    ... on PrismicProjectDataBodyImage {
                      id
                      slice_type
                      primary {
                        image {
                          gatsbyImageData(
                            placeholder: NONE
                            backgroundColor: "#D6D6D6"
                          )
                        }
                      }
                    }
                    ... on PrismicProjectDataBodyVideo {
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
                          gatsbyImageData(
                            placeholder: NONE
                            backgroundColor: "#D6D6D6"
                          )
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
                  show_client_on_index
                  homepage_intro {
                    text
                  }
                  body {
                    ... on PrismicFilmLeadProjectDataBodyVideoWithPlayButton {
                      id
                      slice_type
                      primary {
                        video_with_play_button {
                          url
                        }
                        small_video_with_play_button {
                          url
                        }
                        video_thumbnail {
                          gatsbyImageData(
                            placeholder: NONE
                            backgroundColor: "#D6D6D6"
                          )
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
