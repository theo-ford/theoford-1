import React, { useRef, useState, useEffect, useMemo } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { ImageOrientation } from "../components/utils/image-orientation";
import { Helmet } from "react-helmet";
import "../components/styles/index.css";
import { useMediaQuery } from "../components/tf/media-query";
import { useOnScreen } from "../components/hooks/useOnScreen";
import G4C_Business_Card from "../img/G4C_Business_Card.jpg";
import G4C_Letterhead from "../img/G4C_Letterhead.jpg";
import G4C_Logo_Film_Img from "../img/G4C_Logo_Film.jpg";
import G4C_Logo_Film_Vid from "../img/G4C_Logo_Film.mp4";
import G4C_Logo_Yellow from "../img/G4C_Logo_Yellow.jpg";
import G4C_Mobile_Img from "../img/G4C_Mobile.jpg";
import G4C_Mobile_Vid from "../img/G4C_Mobile.mp4";
import G4C_Poster from "../img/G4C_Poster.jpg";
import G4C_Web_Img from "../img/G4C_Web.jpg";
import G4C_Web_Vid from "../img/G4C_Web.mp4";
const ProjectCon = styled.div`
  width: 100vw;
  height: auto;
  /* background-color: red; */
  float: left;
  position: relative;
  display: block;
  margin-bottom: 200px;
`;
const AssetCon = styled.div`
  width: 50vw;
  img {
    width: 100%;
  }
  video {
    width: 100%;
  }
`;
const Index = ({ data }) => {
  const swiperRef = useRef(null);
  function forwardFunc() {
    swiperRef.current.swiper.slideNext();
  }
  return (
    <>
      <p>Figma</p>
      <ProjectCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={G4C_Logo_Film_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={G4C_Mobile_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={G4C_Web_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <img src={G4C_Logo_Yellow} />
        </AssetCon>
        <AssetCon>
          <img src={G4C_Business_Card} />
        </AssetCon>
        <AssetCon>
          <img src={G4C_Letterhead} />
        </AssetCon>
        <AssetCon>
          <img src={G4C_Poster} />
        </AssetCon>
      </ProjectCon>
    </>
  );
};

export default withPrismicPreview(Index);
