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
// import PlayButton from "../../assets/Logo.jpg";
// import PlayButton from "../../public/icons/logo.jpg";
const GlobalStyle = createGlobalStyle`
  html {
    background-color: ${props =>
      props.pageColour == "text" ? "black" : "white"};
    overflow-x: clip;
    max-width: 100vw;
  }
  body {
    // https://stackoverflow.com/questions/47095596/body-overflow-x-hidden-breaks-position-sticky
    background-color: ${props =>
      props.pageColour == "text" ? "black" : "white"};
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  grid-row-gap: 0;
  width: calc(100%);
  z-index: 20000;
`;
const Col1 = styled.div`
  grid-column: span 8;
`;
const Col2 = styled.div`
  grid-column: span 3;
`;
const Col3 = styled.div`
  grid-column: span 1;
  p {
    color: #878787;
  }
`;
const Col4 = styled.div`
  grid-column: span 4;
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
const TableCon = styled.div`
  margin-top: 20px;
`;
const Grid16 = styled.div`
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  margin-left: 12.5px;
  grid-row-gap: 0;
  width: calc(100% - 25px);
  z-index: 20000;
`;

const ImageBorderCon = styled.div`
  height: 10px;
`;

const IndexImgCon = styled.div`
  grid-column: span 2;
  @media (max-width: 666px) {
    display: none;
  }
`;
const IndexImg = styled.img`
  width: 100%;
  opacity: 0;
  /* position: absolute; */
  /* &:first-child {
    opacity: 1;
  } */
`;
const ProjectCon = styled.div`
  &:hover ${IndexImg} {
    opacity: 1;
  }
  /* &:nth-child(1) .index_img {
    opacity: 1;
  } */
`;
const Border = styled.div`
  grid-column: span 14;
  border-top: 1px solid white;
  @media (max-width: 666px) {
    grid-column: span 16;
  }
`;
const InformationCon = styled.div`
  height: 20px;
`;
const ImgSpacer = styled.div`
  grid-column: span 2;
  @media (max-width: 666px) {
    display: none;
  }
`;
const ProjectTitleCon = styled.div`
  grid-column: span 2;
  @media (max-width: 666px) {
    grid-column: span 8;
  }
`;
const ClientCon = styled.div`
  grid-column: span 2;
  @media (max-width: 666px) {
    display: none;
  }
`;
const SectorCon = styled.div`
  grid-column: span 2;
  @media (max-width: 666px) {
    display: none;
  }
`;
const CategoryCon = styled.div`
  grid-column: span 4;
  @media (max-width: 666px) {
    grid-column: span 8;
  }
`;
const YearCon = styled.div`
  grid-column: span 2;
  @media (max-width: 666px) {
    display: none;
  }
`;
const LocationCon = styled.div`
  grid-column: span 2;
  @media (max-width: 666px) {
    display: none;
  }
`;
const IndexBodyP = styled.p`
  color: white;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const TableHeaderCon = styled.div`
  margin-top: 150px;
  margin-bottom: 20px;
`;

const IndexTitleP = styled.p`
  font-size: 16px;
  color: white;
`;
const CategoryMenuCon = styled.div`
  width: 25%;
  margin-left: 75%;
  margin-top: 10px;
  position: absolute;
  z-index: 1000000;
`;

const CategoryItem = styled.span`
  font-size: 16px;
  color: #878787;
  &.active {
    color: white;
  }
`;
const TextImgToggleP = styled.p`
  color: #878787;
  span.active {
    color: white;
  }
`;
const CategoryName = styled.span`
  text-transform: capitalize;
  font-size: 12px;
`;
const ImageGridCon = styled.div`
  margin-top: 150px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  width: calc(100vw - 25px);
  grid-column-gap: 12.5px;
  grid-row-gap: 12.5px;
  margin-left: 12.5px;
`;
const IndexImgGridImgCon = styled.div`
  grid-column: span 2;
`;
const IndexImgGridImg = styled.img`
  width: 100%;
`;

const ProjectIndex = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  const LogoConRef = useRef(null);
  const [activeCategory, setCategory] = useState(null);
  const [categoriesVisible, setCategoriesVisible] = useState(false);
  const [indexType, setIndexType] = useState("text");

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
              <Col3>
                <p>{/* <span>Type:</span> */}</p>
                {/* <TextImgToggleP>
                  <span
                    class="active"
                    onClick={() => setIndexType("text")}
                    className={indexType === "text" ? `active` : ``}
                  >
                    Text
                  </span>
                  ,{" "}
                  <span
                    onClick={() => setIndexType("img")}
                    className={indexType === "img" ? `active` : ``}
                  >
                    Img
                  </span>
                </TextImgToggleP> */}
              </Col3>
              <Col4>
                <Categories></Categories>
              </Col4>
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
      // console.log(content.node.data.year.text);
      // console.log(content);
      return (
        // <WhiteText>
        //   {content.node.data.project_title.text}, {content.node.data.year.text}
        // </WhiteText>
        { content }
      );
    }
  );
  // console.log("SQUARE PROJECTS");
  // console.log(squareProjects);

  // console.log("FILMS PROJECTS");
  // console.log(filmsProjects);

  const mergedArray = squareProjects.concat(filmsProjects);
  // console.log("MERGED ARRAY");
  // console.log(mergedArray);

  const organisedArray = mergedArray.sort(function(a, b) {
    // console.log(a.content);
    // console.log(a.content.node.data.year.text);
    return b.content.node.data.year.text - a.content.node.data.year.text;
  });
  // console.log("ORGANISED ARRAY");
  // console.log(organisedArray);

  const organisedArrayMap = organisedArray
    .filter(project => {
      if (activeCategory === null) {
        return project;
      } else {
        // console.log(project.content.node.data.categories);
        return project.content.node.data.categories
          .map(category =>
            // console.log(category.category.slug);
            x(category.category.slug)
          )
          .includes(activeCategory);
      }
    })
    .map((content, index) => {
      // console.log(content);
      // console.log(content.content.node.data.year.text);
      return (
        <>
          <Link to={`/${content.content.node.uid}`}>
            <ProjectCon>
              <ImageBorderCon>
                <Grid16>
                  <IndexImgCon>
                    <IndexImg
                      className="index_img"
                      srcSet={
                        content.content.node.data.index_preview_img.fluid
                          .srcSetWebp
                      }
                    />
                    {/* <IndexImg src={PlayButton}></IndexImg> */}
                  </IndexImgCon>
                  <Border></Border>
                </Grid16>
              </ImageBorderCon>

              <InformationCon>
                <Grid16>
                  <ImgSpacer></ImgSpacer>
                  <ProjectTitleCon>
                    <IndexBodyP>
                      {content.content.node.data.project_title.text}
                    </IndexBodyP>
                  </ProjectTitleCon>
                  <ClientCon>
                    <IndexBodyP>
                      {content.content.node.data.client.text}
                    </IndexBodyP>
                  </ClientCon>
                  <SectorCon>
                    <IndexBodyP>
                      {content.content.node.data.sector.text}
                    </IndexBodyP>
                  </SectorCon>
                  <CategoryCon>
                    <IndexBodyP>
                      {" "}
                      {content.content.node.data.categories.map(
                        (category, index) => {
                          return (
                            <CategoryName key={index}>
                              {(index ? ", " : "") + category.category.slug}
                            </CategoryName>
                          );
                        }
                      )}
                    </IndexBodyP>
                  </CategoryCon>
                  <YearCon>
                    <IndexBodyP>
                      {" "}
                      {content.content.node.data.year.text}
                    </IndexBodyP>
                  </YearCon>
                  <LocationCon>
                    <IndexBodyP>
                      {content.content.node.data.location.text}
                    </IndexBodyP>
                  </LocationCon>
                </Grid16>
              </InformationCon>
            </ProjectCon>
          </Link>
        </>
      );
    });
  // console.log("ORGANISED ARRAY MAP");
  // console.log(organisedArrayMap);

  const imageArray = organisedArray
    .filter(project => {
      if (activeCategory === null) {
        return project;
      } else {
        // console.log(project.content.node.data.categories);
        return project.content.node.data.categories
          .map(category =>
            // console.log(category.category.slug);
            x(category.category.slug)
          )
          .includes(activeCategory);
      }
    })
    .map((content, index) => {
      if (content.content.node.type == "project") {
        // console.log("project");
        console.log(content.content.node.data.project_title.text);
        const project = content.content.node.data.body1.map(
          (content2, index) => {
            if (content2.slice_type == "image") {
              return (
                <IndexImgGridImgCon>
                  <Link to={`/${content.content.node.uid}`}>
                    <IndexImgGridImg
                      srcSet={content2.primary.index_image.fluid.srcSetWebp}
                    ></IndexImgGridImg>
                  </Link>
                </IndexImgGridImgCon>
              );
            }
            if (content2.slice_type == "video") {
              return (
                <IndexImgGridImgCon>
                  <Link to={`/${content.content.node.uid}`}>
                    <IndexImgGridImg
                      srcSet={content2.primary.index_image.fluid.srcSetWebp}
                    ></IndexImgGridImg>
                  </Link>
                </IndexImgGridImgCon>
              );
            }
          }
        );
        return project;
      }
      if (content.content.node.type == "film_lead_project") {
        // console.log("project");
        console.log(content.content.node.data.project_title.text);
        const filmLeadProject = content.content.node.data.body1.map(
          (content2, index) => {
            if (content2.slice_type == "video_with_play_button") {
              return (
                <IndexImgGridImgCon>
                  <Link to={`/${content.content.node.uid}`}>
                    <IndexImgGridImg
                      srcSet={content2.primary.index_image.fluid.srcSetWebp}
                    ></IndexImgGridImg>
                  </Link>
                </IndexImgGridImgCon>
              );
            }
            if (content2.slice_type == "video") {
              return (
                <IndexImgGridImgCon>
                  <Link to={`/${content.content.node.uid}`}>
                    <IndexImgGridImg
                      srcSet={content2.primary.index_image.fluid.srcSetWebp}
                    ></IndexImgGridImg>
                  </Link>
                </IndexImgGridImgCon>
              );
            }
          }
        );
        return filmLeadProject;
      }
    });

  function x(y) {
    return y.replace("-", " ").replace(/(?:^|\s)\S/g, a => a.toUpperCase());
  }

  const Categories = () => {
    console.log(activeCategory);
    return (
      <>
        <CategoryItem
          onClick={() => setCategory(null)}
          className={activeCategory === null ? `active` : ``}
        >
          All,{" "}
        </CategoryItem>

        {categoriesList}
      </>
    );
  };

  const categoriesList = data.allPrismicCategory.edges.map((content, index) => {
    // console.log(content.node.data.name.length);
    // console.log(index);
    return (
      <>
        <CategoryItem>{index ? ", " : ""}</CategoryItem>

        <CategoryItem
          className={activeCategory === content.node.data.name ? `active` : ``}
          key={index}
          onClick={() => {
            // console.log("testing");
            setCategory(content.node.data.name);
          }}
        >
          {content.node.data.name}
        </CategoryItem>
      </>
    );
  });
  const TextTable = () => {
    return (
      <>
        <TableHeaderCon>
          <Grid16>
            <ImgSpacer></ImgSpacer>
            <ProjectTitleCon>
              <IndexTitleP>Project</IndexTitleP>
            </ProjectTitleCon>
            <ClientCon>
              <IndexTitleP>Client</IndexTitleP>
            </ClientCon>
            <SectorCon>
              <IndexTitleP>Sector</IndexTitleP>
            </SectorCon>
            <CategoryCon>
              <IndexTitleP>Category</IndexTitleP>
            </CategoryCon>
            <YearCon>
              <IndexTitleP>Year</IndexTitleP>
            </YearCon>
            <LocationCon>
              <IndexTitleP>Location</IndexTitleP>
            </LocationCon>
          </Grid16>
        </TableHeaderCon>
        {organisedArrayMap}
      </>
    );
  };

  const ImageTable = () => {
    return (
      <>
        <ImageGridCon>{imageArray}</ImageGridCon>
      </>
    );
  };
  return (
    <>
      <GlobalStyle pageColour={indexType} />
      <Helmet>
        <title>(10) Pagination 1</title>
      </Helmet>

      <LogoNav></LogoNav>
      <CategoryMenuCon></CategoryMenuCon>

      <TableCon>
        {indexType == "text" ? <TextTable /> : <ImageTable />}
      </TableCon>
    </>
  );
};

export default withPreview(ProjectIndex);

export const query = graphql`
  query IndexQuery38 {
    allPrismicProject {
      edges {
        node {
          uid
          type
          data {
            categories {
              category {
                slug
                id
              }
            }
            project_title {
              text
            }
            year {
              text
            }
            client {
              text
            }
            location {
              text
            }
            index_preview_img {
              fluid {
                srcSetWebp
                srcWebp
              }
            }
            sector {
              text
            }
            body1 {
              ... on PrismicProjectBody1Image {
                id
                slice_type
                primary {
                  index_image {
                    fluid {
                      src
                      srcSet
                      srcSetWebp
                    }
                  }
                }
              }
              ... on PrismicProjectBody1Video {
                id
                slice_type
                primary {
                  index_image {
                    fluid {
                      srcSetWebp
                      srcWebp
                    }
                  }
                }
              }
              ... on PrismicProjectBody1VideoWithPlayButton {
                id
                slice_type
                primary {
                  index_image {
                    fluid {
                      srcSet
                      srcSetWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    allPrismicFilmLeadProject {
      edges {
        node {
          uid
          type
          data {
            categories {
              category {
                slug
                id
              }
            }
            project_title {
              text
            }
            year {
              text
            }
            client {
              text
            }
            location {
              text
            }
            sector {
              text
            }
            index_preview_img {
              fluid {
                srcSetWebp
                srcWebp
              }
            }

            body1 {
              ... on PrismicFilmLeadProjectBody1Image {
                id
                primary {
                  index_image {
                    fluid {
                      srcSetWebp
                      srcWebp
                    }
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
                }
              }
              ... on PrismicFilmLeadProjectBody1VideoWithPlayButton {
                id
                slice_type
                primary {
                  index_image {
                    fluid {
                      srcSetWebp
                      srcWebp
                    }
                  }
                }
              }
              ... on PrismicFilmLeadProjectBody1NonSquareImage {
                id
                slice_type
                primary {
                  index_image {
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
      }
    }
    allPrismicCategory {
      edges {
        node {
          data {
            name
          }
        }
      }
    }
  }
`;