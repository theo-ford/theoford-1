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
import { useMediaQuery } from "../components/tf/media-query";
import Icon from "../../assets/WhiteLogo.svg";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: black;
    overflow-x: clip;
    max-width: 100vw;
  }
  body {
    // https://stackoverflow.com/questions/47095596/body-overflow-x-hidden-breaks-position-sticky
    background-color: black;
    overflow-x: clip;
    max-width: 100vw;
  }
`;

const LogoGridCon = styled.div`
  width: calc(100% - 25px);
  margin-left: 12.5px;
  position: fixed;
  top: 12.5px;
  z-index: 300000;
  mix-blend-mode: exclusion;

  @media (max-width: 666px) {
    /* display: none; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    width: calc(100% - 20px);
    margin-left: 10px;
  }
`;
const Grid2B = styled.div`
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12.5px;
  grid-row-gap: 0;
  width: calc(100% - 20px);
  z-index: 20000;
`;
const Col1 = styled.div`
  grid-column: span 1;
`;
const Col2 = styled.div`
  grid-column: span 1;
`;
const LogoCon = styled.div`
  top: 12.5px;
  mix-blend-mode: exclusion;
  /* grid-column: span 6; */
  /* width: calc(50% - 6.25px); // (8col) */
  // width: calc(37.5% - 6.25px); // (6col)
  // width: calc(25% - 6.25px); // (4col)
  /* width: calc(62.5% - 6.25px); // (10col) */
  /* width: calc(75% - 6.25px); // (12col) */
  width: calc(50% - 6.25px);
  /* width: calc(100%); */
  display: inline-block;
  vertical-align: top;
  transition: all 2s;
  vertical-align: top;
  /* background-color: blue; */

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
const WhiteText = styled.p`
  color: white;
`;

const ProjectIndex = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  const LogoConRef = useRef(null);

  const LogoNav = scrollPosition => {
    if (isPageWide) {
      return (
        <>
          <LogoGridCon>
            <Grid2B>
              <Col1>
                <LogoCon ref={LogoConRef}>
                  <Icon />
                </LogoCon>
              </Col1>
              <Col2>
                <NavCon1>
                  <p>
                    <Link to="/">
                      <span className="selected">Select,</span>{" "}
                    </Link>
                    <span className="navItem">Index,</span>{" "}
                    <Link to="/about17">
                      <span className="navItem">Office</span>
                    </Link>
                    {/* <br></br>Instagram, Twitter */}
                  </p>
                </NavCon1>
              </Col2>
            </Grid2B>
          </LogoGridCon>
        </>
      );
    }
    if (!isPageWide) {
      return (
        <>
          <LogoGridCon>
            <NavCon1>
              <Link to="/">
                <p className="selected">Selected</p>
              </Link>
              <p>Index</p>
            </NavCon1>
            <NavCon2>
              <Link to="/about17">
                <p>About</p>
              </Link>
              <p>Instagram</p>
            </NavCon2>
          </LogoGridCon>
          <LogoCon ref={LogoConRef}>
            <Icon />
          </LogoCon>
        </>
      );
    }
  };
  const squareProjects = data.allPrismicProject.edges.map((content, index) => {
    return (
      // <WhiteText>
      //   {content.node.data.project_title.text}, {content.node.data.year.text}
      // </WhiteText>
      { content }
    );
  });
  const filmsProjects = data.allPrismicFilmLeadProject.edges.map(
    (content, index) => {
      console.log(content.node.data.year.text);
      console.log(content);
      return (
        // <WhiteText>
        //   {content.node.data.project_title.text}, {content.node.data.year.text}
        // </WhiteText>
        { content }
      );
    }
  );
  // console.log(typeof squareProjects);
  // console.log(squareProjects);
  console.log("SQUARE PROJECTS");
  console.log(squareProjects);

  console.log("FILMS PROJECTS");
  console.log(filmsProjects);

  const mergedArray = squareProjects.concat(filmsProjects);
  console.log("MERGED ARRAY");
  console.log(mergedArray);

  const organisedArray = mergedArray.sort(function(a, b) {
    console.log(a.content);
    console.log(a.content.node.data.year.text);
    return b.content.node.data.year.text - a.content.node.data.year.text;
  });
  console.log("ORGANISED ARRAY");
  console.log(organisedArray);

  const organisedArrayMap = organisedArray.map((content, index) => {
    console.log(content);
    console.log(content.content.node.data.year.text);
    return (
      <WhiteText>
        {content.content.node.data.project_title.text},{" "}
        {content.content.node.data.year.text}
      </WhiteText>
    );
  });
  console.log("ORGANISED ARRAY MAP");
  console.log(organisedArrayMap);

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>(10) Pagination 1</title>
      </Helmet>

      <LogoNav></LogoNav>
      {/* {squareProjects}
      {filmsProjects} */}

      {/* {dateSortArray} */}
      {/* {organisedArray2} */}
      {organisedArrayMap}
    </>
  );
};

export default withPreview(ProjectIndex);

export const query = graphql`
  query IndexQuery37 {
    allPrismicProject {
      edges {
        node {
          data {
            project_title {
              text
            }
            year {
              text
            }
          }
        }
      }
    }
    allPrismicFilmLeadProject {
      edges {
        node {
          data {
            project_title {
              text
            }
            year {
              text
            }
          }
        }
      }
    }
  }
`;
