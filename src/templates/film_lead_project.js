import React, { useEffect, useState, useRef } from "react";
import { graphql, Link } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import { Helmet } from "react-helmet";
import { ImageOrientation } from "../components/utils/image-orientation";
import styled, { createGlobalStyle } from "styled-components";
import ReactPlayer from "react-player";
// import { VideoComponent } from "../components/tf/video_component";
import { VideoComponentNoControls } from "../components/tf/video-component-no-controls";
import { useMediaQuery } from "../components/tf/media-query";
import Icon from "../../assets/WhiteLogo.svg";
import { VideoProjectPage } from "../components/tf/video-project-page";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: black;
  }
  body {
    background-color: black;
    /* overflow-y: clip; */
  }
  p {
    color: white;
  }
`;

const LogoGridCon = styled.div`
  width: calc(100% - 25px);
  margin-left: 12.5px;
  position: sticky;
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
  width: calc(50% - 6.25px);
  display: inline-block;
  vertical-align: top;
  transition: all 2s;
  vertical-align: top;
  .shrink {
    width: calc(37.5% - 6.25px);
  }
  @media (max-width: 666px) {
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
  margin-left: 11px;
  margin-top: -3px;
  vertical-align: top;
  mix-blend-mode: exclusion;
  p {
    color: #878787;
  }
  span.selected {
    color: white;
  }
  span.navItem {
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
  }
  p.selected {
    color: white;
  }
  @media (max-width: 666px) {
    margin-left: 0px;
    grid-column: span 1;
  }
`;
const PageCon = styled.div`
  width: 50%;
  margin-left: 25%;
  margin-top: 20vh;

  @media (max-width: 666px) {
    /* display: none; */
    width: calc(100% - 20px);
    margin-left: 10px;

    margin-top: 10vh;
  }
`;
const Grid8 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  grid-row-gap: 0;
  width: calc(100%);
`;
const Table = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid white;
`;
const TableRow = styled.div`
  border-top: 1px solid white;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const TableTitle = styled.div`
  grid-column: span 2;
  p {
    font-weight: bold;
  }
`;
const TableContent = styled.div`
  grid-column: span 6;
`;
const BodyTextCon = styled.div`
  margin-bottom: 20px;
  p {
    line-height: 125%;
  }
  @media (max-width: 666px) {
  }
`;
const Footer = styled.div`
  width: 100%;
  background-color: white;
  height: 400px;
`;
const CategoryName = styled.span`
  text-transform: capitalize;
`;
const FilmLeadProject = ({ data }) => {
  // test
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
                    <Link to="/project_index">
                      <span className="navItem">Index,</span>{" "}
                    </Link>
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
              <Link to="/project_index">
                <p>
                  <span className="navItem">Index</span>
                </p>
              </Link>
            </NavCon1>
            <NavCon2>
              <Link to="/about17">
                <p>About</p>
              </Link>
              <p>Instagram</p>
            </NavCon2>
          </LogoGridCon>
          {/* <LogoCon ref={LogoConRef}>
            <Icon />
          </LogoCon> */}
        </>
      );
    }
  };

  const work = data.prismicFilmLeadProject.data.body1.map((content, index) => {
    if (content.slice_type == "video_with_play_button") {
      console.log(content);
      console.log(content.primary.video_thumbnail.fluid.srcSetWebp);
      return (
        <>
          <VideoProjectPage
            srcProps={content.primary.video_with_play_button.url}
            posterProps={content.primary.video_thumbnail.fluid.srcSetWebp}
          ></VideoProjectPage>
        </>
      );
    }
    if (content.slice_type == "text") {
      return (
        <BodyTextCon>
          <p>{content.primary.text.text}</p>
        </BodyTextCon>
      );
    }
  });

  return (
    <>
      <GlobalStyle />
      <LogoNav></LogoNav>
      <PageCon>
        <Table>
          <TableRow>
            <Grid8>
              <TableTitle>
                <p>Project</p>
              </TableTitle>
              <TableContent>
                <p>{data.prismicFilmLeadProject.data.project_title.text}</p>
              </TableContent>
            </Grid8>
          </TableRow>
          <TableRow>
            <Grid8>
              <TableTitle>
                <p>Location</p>
              </TableTitle>
              <TableContent>
                <p>{data.prismicFilmLeadProject.data.location.text}</p>
              </TableContent>
            </Grid8>
          </TableRow>
          <TableRow>
            <Grid8>
              <TableTitle>
                <p>Categories</p>
              </TableTitle>
              <TableContent>
                <p>
                  {data.prismicFilmLeadProject.data.categories.map(
                    (category, index) => {
                      return (
                        <CategoryName key={index}>
                          {(index ? ", " : "") + category.category.slug}
                        </CategoryName>
                      );
                    }
                  )}
                </p>
              </TableContent>
            </Grid8>
          </TableRow>
          <TableRow>
            <Grid8>
              <TableTitle>
                <p>Client</p>
              </TableTitle>
              <TableContent>
                <p> {data.prismicFilmLeadProject.data.client.text}</p>
              </TableContent>
            </Grid8>
          </TableRow>
          <TableRow>
            <Grid8>
              <TableTitle>
                <p>Team</p>
              </TableTitle>
              <TableContent>
                <p>{data.prismicFilmLeadProject.data.team.text}</p>
              </TableContent>
            </Grid8>
          </TableRow>
        </Table>
        {work}
        {/* <Footer></Footer> */}
      </PageCon>
    </>
  );
};

export default withPreview(FilmLeadProject);

export const query = graphql`
  query FilmLeadArtists($uid: String!) {
    prismicFilmLeadProject(uid: { eq: $uid }) {
      uid
      id
      data {
        project_title {
          html
          text
        }
        client {
          html
          text
        }
        location {
          html
          text
        }
        project_title {
          html
          text
        }
        team {
          html
          text
        }
        year {
          html
          text
        }
        categories {
          category {
            slug
            id
          }
        }
        body1 {
          ... on PrismicFilmLeadProjectBody1VideoWithPlayButton {
            id
            slice_type
            primary {
              video_thumbnail {
                fluid {
                  srcSetWebp
                  srcWebp
                  src
                }
              }
              video_with_play_button {
                url
              }
            }
          }
          ... on PrismicFilmLeadProjectBody1Image {
            id
            slice_type
            primary {
              image {
                fluid {
                  src
                  srcSet
                  srcSetWebp
                }
              }
            }
          }
          ... on PrismicFilmLeadProjectBody1Text {
            id
            slice_type
            primary {
              text {
                html
                text
              }
            }
          }
          ... on PrismicFilmLeadProjectBody1Video {
            id
            slice_type
            primary {
              index_image {
                fluid {
                  srcSetWebp
                  srcWebp
                }
              }
              sml_video {
                url
              }
              video {
                url
              }
            }
          }
        }
      }
    }
  }
`;
