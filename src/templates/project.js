import React, { useEffect, useState } from "react";
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
const LogoCon = styled.div`
  top: 12.5px;
  mix-blend-mode: exclusion;
  /* grid-column: span 6; */
  width: calc(37.5% - 6.25px);
  display: inline-block;
  vertical-align: top;
  transition: all 1s;

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
  margin-left: 12.5px;
  p {
    color: #878787;
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
const NavCon2 = styled.div`
  display: inline-block;
  margin-left: 12.5px;
  p {
    color: #878787;
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
const Grid8 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  grid-row-gap: 0;
  width: calc(100%);
`;
const Table = styled.div`
  margin-bottom: 60px;
  border-bottom: 1px solid black;
`;
const TableRow = styled.div`
  border-top: 1px solid black;
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
const PageCon = styled.div`
  width: 50%;
  margin-left: 25%;
  margin-top: 20vh;
  @media (max-width: 666px) {
    /* display: none; */
    width: calc(100% - 20px);
    margin-left: 10px;

    margin-top: 14vh;
  }
`;
const Img = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;
const BodyTextCon = styled.div`
  margin-bottom: 40px;
  p {
    line-height: 125%;
  }
`;

const Project = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  const LogoNav = () => {
    if (isPageWide) {
      return (
        <>
          <LogoGridCon>
            <LogoCon>
              <Icon />
            </LogoCon>
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
        </>
      );
    }
  };
  const projectBody = data.prismicProject.data.body1.map((content, index) => {
    if (content.slice_type == "image") {
      return (
        <>
          <Img src={content.primary.image.fluid.src} />
        </>
      );
    }
    if (content.slice_type == "text") {
      return (
        <>
          <BodyTextCon>
            <p>{content.primary.text.text}</p>
          </BodyTextCon>
        </>
      );
    }
  });
  return (
    <>
      <LogoNav></LogoNav>
      <PageCon>
        <Table>
          <TableRow>
            <Grid8>
              <TableTitle>
                <p>Project</p>
              </TableTitle>
              <TableContent>
                <p>{data.prismicProject.data.project_title.text}</p>
              </TableContent>
            </Grid8>
          </TableRow>
          <TableRow>
            <Grid8>
              <TableTitle>
                <p>Location</p>
              </TableTitle>
              <TableContent>
                <p>{data.prismicProject.data.location.text}</p>
              </TableContent>
            </Grid8>
          </TableRow>
          <TableRow>
            <Grid8>
              <TableTitle>
                <p>Category</p>
              </TableTitle>
              <TableContent>
                <p>TBD</p>
              </TableContent>
            </Grid8>
          </TableRow>
          <TableRow>
            <Grid8>
              <TableTitle>
                <p>Client</p>
              </TableTitle>
              <TableContent>
                <p> {data.prismicProject.data.client.text}</p>
              </TableContent>
            </Grid8>
          </TableRow>
          <TableRow>
            <Grid8>
              <TableTitle>
                <p>Team</p>
              </TableTitle>
              <TableContent>
                <p>{data.prismicProject.data.team.text}</p>
              </TableContent>
            </Grid8>
          </TableRow>
        </Table>
        {projectBody}
      </PageCon>
    </>
  );
};

export default withPreview(Project);

export const query = graphql`
  query Artists($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
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
        body1 {
          ... on PrismicProjectBody1Image {
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
          ... on PrismicProjectBody1Text {
            id
            slice_type
            primary {
              text {
                html
                text
              }
            }
          }
        }
      }
    }
  }
`;
