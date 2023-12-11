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

const PageConCon = styled.div`
  width: calc(100% - 25px);
  margin: 12.5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr /* 1 */ 1fr 1fr 1fr 1fr /* 2 */ 1fr 1fr 1fr 1fr /* 3 */ 1fr 1fr 1fr 1fr /* 4 */;
  grid-gap: 12.5px;
  @media (max-width: 666px) {
    /* width: calc(100% - 25px);
    margin-left: 12.5px;
    top: 10px; */
    width: calc(100% - 20px);
    margin-left: 10px;
    top: 10px;
    grid-gap: 10px;
  }
`;
const PageCon = styled.div`
  grid-column: 5 / span 8;
  margin-top: 20vh;
  @media (max-width: 666px) {
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
  @media (max-width: 666px) {
    grid-gap: 10px;
  }
`;
const Table = styled.div`
  /* margin-bottom: 20px; */
  /* margin-bottom: 12.5px; */
  position: relative;
  float: left;
  width: 100%;
  border-bottom: 1px solid white;
  @media (max-width: 666px) {
    /* margin-bottom: 10px; */
  }
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
    font-family: "HelveticaNowText";
    line-height: 110%;
    letter-spacing: -0.5px;
  }
`;
const TableContent = styled.div`
  grid-column: span 6;
  p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;
const BodyTextCon = styled.div`
  /* margin-bottom: 12.5px; */
  /* margin-top: 7.5px;
  margin-bottom: 7.5px; */
  position: relative;
  float: left;

  p {
    line-height: 125%;
    /* margin-top: 10px; */
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media (max-width: 666px) {
    /* margin-top: 7.5px;
    margin-bottom: 7.5px; */
    /* margin-top: 5px;
    margin-bottom: 5px; */
  }
`;
const SquareImage = styled.div`
  width: calc(100%);
  margin-top: 6.25px;
  margin-bottom: 6.25px;
  position: relative;
  float: left;

  @media (max-width: 666px) {
    width: 100%;
    margin-top: 5;
    margin-bottom: 5;
  }
`;
const ProjectPageAutoPlayVideoCon = styled.div`
  margin-top: 6.25px;
  margin-bottom: 6.25px;
  position: relative;
  float: left;
  @media (max-width: 666px) {
    margin-top: 5;
    margin-bottom: 5;
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
  position: relative;
  float: left;
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
  let isPageWide = useMediaQuery("(min-width: 667px)");

  const work = data.prismicFilmLeadProject.data.body1.map((content, index) => {
    if (content.slice_type == "video_with_play_button") {
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
          </>
        );
      } else if (
        content.related_projects.document.type == "film_lead_project"
      ) {
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
          </>
        );
      }
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
      <Helmet>
        <title>
          Theo Ford – {data.prismicFilmLeadProject.data.project_title.text}
        </title>
      </Helmet>
      <GlobalStyle />
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
                  <p>Year</p>
                </TableTitle>
                <TableContent>
                  <p> {data.prismicFilmLeadProject.data.year.text}</p>
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
