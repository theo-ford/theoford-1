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

import Lunar_Brand_Book_Colour from "../img/Lunar_Brand_Book_Colour.jpg";
import Lunar_Brand_Book_Cover from "../img/Lunar_Brand_Book_Cover.jpg";
import Lunar_Brand_Book_Photography from "../img/Lunar_Brand_Book_Photography.jpg";
import Lunar_Business_Card from "../img/Lunar_Business_Card.jpg";
import Lunar_Letterhead from "../img/Lunar_Letterhead.jpg";
import Lunar_Logo_Blue from "../img/Lunar_Logo_Blue.jpg";
import Lunar_Logo_White from "../img/Lunar_Logo_White.jpg";
import Lunar_Mobile_Img from "../img/Lunar_Mobile.jpg";
import Lunar_Mobile_Vid from "../img/Lunar_Mobile.mp4";
import Lunar_OOH from "../img/Lunar_OOH.jpg";
import Lunar_Sundial_Square_Img from "../img/Lunar_Sundial_Square.jpg";
import Lunar_Sundial_Square_Vid from "../img/Lunar_Sundial_Square.mp4";
import Lunar_Web_Img from "../img/Lunar_Web.jpg";
import Lunar_Web_Vid from "../img/Lunar_Web.mp4";

import AA_Denim_1_Img from "../img/AA_Denim_1.jpg";
import AA_Denim_1_Vid from "../img/AA_Denim_1.mp4";
import AA_Liana_Img from "../img/AA_Liana.jpg";
import AA_Liana_Vid from "../img/AA_Liana.mp4";
import AA_PB_A3_Img from "../img/AA_PB_A3.jpg";
import AA_PB_A3_Vid from "../img/AA_PB_A3.mp4";
import AA_PB_Square_Img from "../img/AA_PB_Square.jpg";
import AA_PB_Square_Vid from "../img/AA_PB_Square.mp4";

import FD_Business from "../img/FD_Business.jpg";
import FD_Letterhead from "../img/FD_Letterhead.jpg";
import FD_Mobile_Img from "../img/FD_Mobile.jpg";
import FD_Mobile_Vid from "../img/FD_Mobile.mp4";
import FD_Web_Img from "../img/FD_Web.jpg";
import FD_Web_Vid from "../img/FD_Web.mp4";

import RS_Business_Card from "../img/RS_Business_Card.jpg";
import RS_Letterhead from "../img/RS_Letterhead.jpg";
import RS_Logo from "../img/RS_Logo.jpg";
import RS_Menu from "../img/RS_Menu.jpg";
import RS_Poster_Blue from "../img/RS_Poster_Blue.jpg";
import RS_Poster_Red from "../img/RS_Poster_Red.jpg";
import RS_Poster_Yellow from "../img/RS_Poster_Yellow.jpg";
import RS_Web_Img from "../img/RS_Web.jpg";
import RS_Web_Vid from "../img/RS_Web.mp4";

import Mayku_Billboard from "../img/Mayku_Billboard.jpg";
import Mayku_Business_Card from "../img/Mayku_Business_Card.jpg";
import Mayku_Logo from "../img/Mayku_Logo.jpg";
import Mayku_Machine from "../img/Mayku_Machine.jpg";
import Mayku_Manual from "../img/Mayku_Manual.jpg";
import Mayku_Posters from "../img/Mayku_Posters.jpg";

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
      <ProjectCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={Lunar_Mobile_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={Lunar_Sundial_Square_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={Lunar_Web_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <img src={Lunar_Brand_Book_Colour} />
        </AssetCon>
        <AssetCon>
          <img src={Lunar_Brand_Book_Cover} />
        </AssetCon>
        <AssetCon>
          <img src={Lunar_Brand_Book_Photography} />
        </AssetCon>
        <AssetCon>
          <img src={Lunar_Business_Card} />
        </AssetCon>
        <AssetCon>
          <img src={Lunar_Letterhead} />
        </AssetCon>
        <AssetCon>
          <img src={Lunar_Logo_Blue} />
        </AssetCon>
        <AssetCon>
          <img src={Lunar_Logo_White} />
        </AssetCon>
        <AssetCon>
          <img src={Lunar_OOH} />
        </AssetCon>
      </ProjectCon>
      <ProjectCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={AA_Denim_1_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={AA_Liana_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={AA_PB_A3_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={AA_PB_Square_Vid}></source>
          </video>
        </AssetCon>
      </ProjectCon>
      <ProjectCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={FD_Web_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={FD_Mobile_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <img src={FD_Business} />
        </AssetCon>
        <AssetCon>
          <img src={FD_Letterhead} />
        </AssetCon>
      </ProjectCon>
      <ProjectCon>
        <AssetCon>
          <video muted loop autoPlay playsInlin>
            <source type="video/mp4" src={RS_Web_Vid}></source>
          </video>
        </AssetCon>
        <AssetCon>
          <img src={RS_Business_Card} />
        </AssetCon>
        <AssetCon>
          <img src={RS_Letterhead} />
        </AssetCon>
        <AssetCon>
          <img src={RS_Logo} />
        </AssetCon>
        <AssetCon>
          <img src={RS_Menu} />
        </AssetCon>
        <AssetCon>
          <img src={RS_Poster_Blue} />
        </AssetCon>
        <AssetCon>
          <img src={RS_Poster_Red} />
        </AssetCon>
        <AssetCon>
          <img src={RS_Poster_Yellow} />
        </AssetCon>
      </ProjectCon>
      <ProjectCon>
        <AssetCon>
          <img src={Mayku_Billboard} />
        </AssetCon>
        <AssetCon>
          <img src={Mayku_Business_Card} />
        </AssetCon>
        <AssetCon>
          <img src={Mayku_Logo} />
        </AssetCon>
        <AssetCon>
          <img src={Mayku_Machine} />
        </AssetCon>
        <AssetCon>
          <img src={Mayku_Manual} />
        </AssetCon>
        <AssetCon>
          <img src={Mayku_Posters} />
        </AssetCon>
      </ProjectCon>
    </>
  );
};

export default withPrismicPreview(Index);
