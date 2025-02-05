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
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { ImageOrientation } from "../components/utils/image-orientation";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "../components/tf/media-query";
import Icon from "../../assets/WhiteLogo.svg";
// import PlayButton from "../../assets/Logo.jpg";
// import PlayButton from "../../public/icons/logo.jpg";
import { NavGrid } from "../components/tf/nav-grid/nav";
import Baby from "../img/baby_portrait.jpg";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: black !important;
    overflow-x: clip;
    max-width: 100vw;
  }
  body {
    // https://stackoverflow.com/questions/47095596/body-overflow-x-hidden-breaks-position-sticky
    background-color: black !important;
    overflow-x: clip;
    max-width: 100vw;
  }
  p {
    letter-spacing: -0.2px;
  }

    
  
`;

/* BOTH */
const LogoGridCon = styled.div`
  width: calc(100% - 25px);
  margin-left: 12.5px;
  position: fixed;
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
    /* width: calc(100% - 2px);
    margin-left: 12.5px;
    top: 12.5px; */
  }
`;
/* DESKTOP */

const TitleCon = styled.div`
  margin: 10px;
  mix-blend-mode: exclusion;
  /* p {
    font-family:;
  } */
  color: white;
  position: fixed;
  p {
    font-size: 24px;
    line-height: 80%;
    font-weight: bold;
    font-family: "HelveticaNowDisplay";
  }
`;
const PageCon = styled.div`
  margin: 10px;
  margin-top: calc(25vh - 10px);
  p {
    color: white;

    span.body {
      font-family: "Times New Roman";
    }
    span.link {
      font-family: "Times New Roman";
      color: blue;
      text-decoration: underline;
      line-height: 160%;
      font-size: 16px;
    }
  }
`;
const ProjectIndex = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>Theo Ford – Office</title>
      </Helmet>
      <TitleCon>
        <p>
          {/* Interdisciplinary <span style={{ color: "red" }}>Research</span>{" "}
          <span style={{ color: "blue" }}>Unit</span> */}
          Interdisciplinary<br></br>Research<br></br>Unit
        </p>
      </TitleCon>
      <PageCon>
        <p>
          Who we are?<br></br>
          <br></br>
          <span className="body">
            We are a conglomeration of companies with a singular purpose – to
            generate $13.5 billion in wealth. <br></br>
          </span>
          <br></br>
          <br></br>
          Why so specific?<br></br>
          <br></br>
          <span className="body">
            Because that is the yearly city budget for Bakersfield, California
            x4 x10.<br></br>
            <br></br>
            <br></br>
          </span>
          Why do you want the yearly city budget for Bakersfield x4 x10?
          <br></br>
          <br></br>
          <span className="body">
            Right now Bakersfield is an archetypical American town that has been
            left behind by globalisation over the last 5 decades. Devastated by
            the opioid crisis, with poor public services and loss of industry. 
            <br></br>
            <br></br>
            It may surprise you to find out that that only 25m of America’s 330m
            strong population live in major metropolitan areas with a population
            of above 1m such as New York, Los Angeles, San Francisco and
            Chicago. The vast majority live in small towns between the two
            coasts with a population of roughly 400,000.
            <br></br>
            <br></br>
            What we want to achieve is figure out how much we need to invest
            beyond the current city budget, of our own money in order to turn
            places like this into a vibe–healthcare when needed, good education
            available, affordable housing of a decent stock, a decent way for
            people to spend there time that provides meaning, purpose and
            engagement and those little perks that make life worth loving. 
            <br></br>
            <br></br>
            Our hope in doing so, is to create a prototype of a city using one
            of one of these archetypal American urban dwellings, in which it’s
            inhabitants have a good quality of life equitable to middle class
            coastal elites, and aren’t susceptible to populism that preys on
            cultural and racial division, because shit’s just soo good. 
            <br></br>
            <br></br>
            13.5 billion would give the current annual budget of Bakersfield,
            times four for a period of ten years – a rough estimation of the
            amount of money and time it would requite to create a meaningful
            prototype, and then if successful we would aim to scale it, working
            back from concrete data on the financial resources required to
            develop the case study on a national level, and devise an adequate
            system of taxation to cover it and lobby government.
            <br></br>
            <br></br>
            So… if you want to help... buy our shit.
          </span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Current and previous projects and companies:<br></br>
          <span className="link">
            Figma/Adobe – Software for designers <br></br>
            Indian American Apparel – Basics<br></br>
            Indian COS – Scandi Minimalism for Indian Staples<br></br>
            Artyfacts – Remixing modern and historical design <br></br>
            Bath Bomb/Typeface – Immediate audience<br></br>
            Union – Workwear brand 20% profits go to labour unions<br></br>
            Indian Supreme – Skate Clothing<br></br>
          </span>
          <br></br>
        </p>
      </PageCon>
    </>
  );
};

export default withPrismicPreview(ProjectIndex);

// export const query = graphql`

// `;
