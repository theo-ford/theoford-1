import React, { useEffect, useState, useRef } from "react";
import { graphql, Link } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { Helmet } from "react-helmet";
import { ImageOrientation } from "../components/utils/image-orientation";
import styled, { createGlobalStyle } from "styled-components";
import ReactPlayer from "react-player";
import { useMediaQuery } from "../components/tf/media-query";
import Icon from "../../assets/WhiteLogo.svg";
import { VideoProjectPage } from "../components/tf/project/video-project-page";
import { NavGrid } from "../components/tf/nav-grid/nav";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { AutoPlayVideo } from "../components/tf/autoplay-video";

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
const PageConCon = styled.div`
  width: calc(100% - 25px);
  margin: 12.5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr /* 1 */ 1fr 1fr 1fr 1fr /* 2 */ 1fr 1fr 1fr 1fr /* 3 */ 1fr 1fr 1fr 1fr /* 4 */;
  grid-gap: 12.5px;
`;
const PageCon = styled.div`
  /* width: calc(50% - 12.5px);
  margin-left: 25%; */
  grid-column: 5 / span 8;
  margin-top: 20vh;
  @media (max-width: 666px) {
    /* display: none; */
    /* width: calc(100% - 20px);
    margin-left: 10px; */
    grid-column: span 16;
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
    margin-top: 10px;
  }
  @media (max-width: 666px) {
  }
`;
const SquareImage = styled.div`
  width: calc(100%);
  margin-bottom: 12.5px;

  @media (max-width: 666px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;
const ProjectPageAutoPlayVideoCon = styled.div`
  margin-bottom: 12.5px;
  @media (max-width: 666px) {
    margin-bottom: 10px;
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
const RelatedProjectsCon = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
`;
const RelatedProjectsTitle = styled.p`
  margin-bottom: 10px;
`;
const RelatedProjectsProjectCon = styled.div`
  grid-column: span 4;
`;
const RelatedProjectProjectTitle = styled.p`
  color: grey;
  margin-top: 10px;
`;
const RelatedProjectsImg = styled.div`
  width: 100%;
  /* filter: grayscale(100%);
  &:hover {
    filter: none;
  } */
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
                <p>Office</p>
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
      // console.log(content);
      // console.log(content.primary.video_thumbnail.fluid.srcSetWebp);
      if (isPageWide) {
        return (
          <>
            <VideoProjectPage
              pageColour={"black"}
              srcProps={content.primary.video_with_play_button.url}
              posterProps={content.primary.video_thumbnail}
              img={content.primary.video_thumbnail}
            ></VideoProjectPage>
          </>
        );
      } else {
        return (
          <>
            <VideoProjectPage
              pageColour={"black"}
              srcProps={content.primary.small_video_with_play_button.url}
              posterProps={content.primary.video_thumbnail}
              img={content.primary.video_thumbnail}
            ></VideoProjectPage>
          </>
        );
      }
    } else if (content.slice_type == "text") {
      return (
        <BodyTextCon>
          <div
            dangerouslySetInnerHTML={{
              __html: content.primary.text.html,
            }}
          />
        </BodyTextCon>
      );
    } else if (content.slice_type == "image") {
      const image = getImage(content.primary.image);
      return (
        <>
          {/* <Img src={content.primary.image.fluid.src} /> */}
          <SquareImage>
            <GatsbyImage image={image} />
          </SquareImage>
        </>
      );
    } else if (content.slice_type == "video") {
      if (isPageWide) {
        const posterImgProps = content.primary.index_image;
        return (
          <ProjectPageAutoPlayVideoCon>
            <AutoPlayVideo
              srcProps={content.primary.video.url}
              posterProps={posterImgProps}
            />
          </ProjectPageAutoPlayVideoCon>
        );
      } else {
        const posterImgProps = content.primary.index_image;
        console.log("SMALL VIDEO");
        console.log(content.primary.sml_video.url);
        return (
          <ProjectPageAutoPlayVideoCon>
            <AutoPlayVideo
              srcProps={content.primary.sml_video.url}
              posterProps={posterImgProps}
            />
          </ProjectPageAutoPlayVideoCon>
        );
      }
    }
  });
  var RelatedProjects = data.prismicFilmLeadProject.data.related_projects_group.map(
    (content, index) => {
      if (content.related_projects.document.type == "project") {
        console.log("square project");
        // const project = content.related_projects.document.data.map(
        //   (content3, index) => {
        //     return (
        //       //test
        //       { content3 }
        //     );
        //   }
        // );
        const image = getImage(
          content.related_projects.document.data.index_preview_img
        );

        return (
          <>
            <RelatedProjectsProjectCon>
              <Link to={`/${content.related_projects.document.uid}`}>
                <RelatedProjectsImg>
                  <GatsbyImage image={image} />
                </RelatedProjectsImg>
                <RelatedProjectProjectTitle>
                  {content.related_projects.document.data.project_title.text}
                </RelatedProjectProjectTitle>
              </Link>
            </RelatedProjectsProjectCon>

            {/* {content.related_projects} */}
          </>
        );
      } else if (
        content.related_projects.document.type == "film_lead_project"
      ) {
        console.log("film project");
        const image = getImage(
          content.related_projects.document.data.index_preview_img
        );

        return (
          <>
            <RelatedProjectsProjectCon>
              <Link to={`/${content.related_projects.document.uid}`}>
                <RelatedProjectsImg>
                  <GatsbyImage image={image} />
                </RelatedProjectsImg>
                <RelatedProjectProjectTitle>
                  {content.related_projects.document.data.project_title.text}
                </RelatedProjectProjectTitle>
              </Link>
            </RelatedProjectsProjectCon>

            {/* {content.related_projects} */}
          </>
        );
      }
      // return (
      //   // test
      //   // test
      //   { content }
      // );
    }
  );

  const RelatedProjects2 = () => {
    return (
      <Grid8>
        {RelatedProjects[0]}
        {RelatedProjects[1]}
      </Grid8>
    );
  };
  return (
    <>
      <GlobalStyle />
      {/* <LogoNav></LogoNav> */}
      <NavGrid></NavGrid>
      <PageConCon>
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
          <RelatedProjectsCon>
            <RelatedProjectsTitle>Related Projects</RelatedProjectsTitle>
            <RelatedProjects2 />
          </RelatedProjectsCon>
          {/* <Footer></Footer> */}
        </PageCon>
      </PageConCon>
    </>
  );
};

export default withPrismicPreview(FilmLeadProject);

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
          ... on PrismicFilmLeadProjectDataBody1VideoWithPlayButton {
            id
            slice_type
            primary {
              video_thumbnail {
                gatsbyImageData
                dimensions {
                  width
                  height
                }
              }
              video_with_play_button {
                url
              }
              small_video_with_play_button {
                url
              }
            }
          }
          ... on PrismicFilmLeadProjectDataBody1Image {
            id
            slice_type
            primary {
              image {
                gatsbyImageData
              }
            }
          }
          ... on PrismicFilmLeadProjectDataBody1Text {
            id
            slice_type
            primary {
              text {
                html
                text
              }
            }
          }
          ... on PrismicFilmLeadProjectDataBody1Video {
            id
            slice_type
            primary {
              index_image {
                gatsbyImageData
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
        related_projects_group {
          related_projects {
            uid
            document {
              ... on PrismicProject {
                uid
                id
                type
                data {
                  project_title {
                    text
                  }
                  index_preview_img {
                    gatsbyImageData
                  }
                }
              }
              ... on PrismicFilmLeadProject {
                uid
                id
                type
                data {
                  project_title {
                    text
                  }
                  index_preview_img {
                    gatsbyImageData
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
