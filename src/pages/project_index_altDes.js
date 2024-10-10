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
  p {
    letter-spacing: -0.2px;
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
  border-radius: 10px;
  opacity: 0.5;
  filter: blur(5px);
  p {
    color: black;
    font-size: 16px;
    padding: 2px;
    padding-left: 4px;
  }
  &.theo {
    grid-column: span 2;
    /* background-color: white; */
  }
  &.select {
    grid-column: 9 / span 1;
    /* background-color: black; */
  }
  &.index {
    background-color: white;
    opacity: 0.8;
  }
  &.instagram {
    grid-column: 15 / span 1;
    display: none;
  }

  &.twitter {
    display: none;
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
  border-radius: 10px;
  opacity: 0.5;
  p {
    color: black;
    font-size: 16px;
    padding: 2px;
    padding-left: 6px;
  }
  &.theo {
    grid-column: span 2;
    /* background-color: white; */
  }
  &.select {
    grid-column: 9 / span 1;
    /* background-color: black; */
  }
  &.index {
    background-color: white;
  }
  &.instagram {
    grid-column: 15 / span 1;
    display: none;
  }
  &.twitter {
    display: none;
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

const PageCon = styled.div`
  background-color: black;
  min-height: 100vh;
  /* min-height: 100vh; */
  /* overflow: hidden; */
  padding-bottom: 18vh;
  /* margin-top: 400px; */
  @media (max-width: 666px) {
    padding-bottom: 0vh;
  }
`;
const WhiteText = styled.p`
  color: white;
`;
const TableCon = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  /* background-color: blue; */
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
  @media (max-width: 666px) {
    width: calc(100% - 20px);
    margin-left: 10px;
    grid-gap: 10px;
  }
`;

const ImageBorderCon = styled.div`
  height: 2px;
`;

const IndexImgCon = styled.div`
  grid-column: span 2;
  @media (max-width: 666px) {
    display: none;
  }
`;
const IndexImg = styled.div`
  width: 100%;
  opacity: 0;
  border-radius: 10px;
  overflow: hidden;
  /* position: absolute; */
  /* &:first-child {
    opacity: 1;
  } */
`;
const IndexBodyP = styled.p`
  color: white;
  font-size: 16px;
  opacity: 0.5;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  letter-spacing: -0.2px;
`;
const ProjectCon = styled.div`
  &:hover ${IndexImg} {
    opacity: 1;
  }
  &:hover ${IndexBodyP} {
    opacity: 1;
  }
  /* &:nth-child(1) .index_img {
    opacity: 1;
  } */
`;
const Border = styled.div`
  grid-column: span 14;
  /* border-top: 1px solid white; */
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

const TableHeaderCon = styled.div`
  margin-top: 140px;
`;

const IndexTitleP = styled.p`
  font-size: 12px;
  opacity: 0.5;
  color: white;
  letter-spacing: -0.3px;
`;
const CategoryMenuConCon = styled.div`
  width: calc(25% - 12.5px);
  margin-left: calc(75% + 12.5px);
  top: 12.5px;
  /* top: 100px; */
  position: absolute;
  z-index: 1000000;

  @media (max-width: 666px) {
    margin-top: 70px;
    width: calc(100% - 20px);
    margin-left: calc(10px);

    /* display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px; */
  }
`;
const CategoryMenuCon = styled.div`
  /* grid-column: 2 / span 1; */
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
  font-size: 16px;
  letter-spacing: -0.3px;
`;
const ProjectIndex = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  const LogoConRef = useRef(null);
  const [activeCategory, setCategory] = useState(null);
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const projectIndexSelectArray = data.prismicProjectIndexSelect.data.project_relationship_group.map(
    (content, index) => {
      return { content };
    }
  );

  const organisedArray = projectIndexSelectArray.sort(function(a, b) {
    return (
      b.content.project_relationship_field.document.data.year.text -
      a.content.project_relationship_field.document.data.year.text
    );
  });

  const organisedArrayMap = organisedArray
    .filter(project => {
      if (activeCategory === null) {
        return project;
      } else {
        return project.content.project_relationship_field.document.data.categories
          .map(category => textTransfrom(category.category.slug))
          .includes(activeCategory);
      }
    })
    .map((content, index) => {
      var index_image = getImage(
        content.content.project_relationship_field.document.data
          .index_preview_img
      );
      return (
        <>
          <Link
            to={`/${content.content.project_relationship_field.document.uid}`}
          >
            <ProjectCon>
              <ImageBorderCon>
                <Grid16>
                  <IndexImgCon>
                    <IndexImg className="index_img">
                      <GatsbyImage image={index_image} />
                    </IndexImg>
                  </IndexImgCon>
                  <Border></Border>
                </Grid16>
              </ImageBorderCon>

              <InformationCon>
                <Grid16>
                  <ImgSpacer></ImgSpacer>
                  <ProjectTitleCon>
                    <IndexBodyP>
                      {
                        content.content.project_relationship_field.document.data
                          .project_title.text
                      }
                    </IndexBodyP>
                  </ProjectTitleCon>
                  <ClientCon>
                    <IndexBodyP>
                      {
                        content.content.project_relationship_field.document.data
                          .client.text
                      }
                    </IndexBodyP>
                  </ClientCon>
                  <SectorCon>
                    <IndexBodyP>
                      {
                        content.content.project_relationship_field.document.data
                          .sector.text
                      }
                    </IndexBodyP>
                  </SectorCon>
                  <CategoryCon>
                    <IndexBodyP>
                      {" "}
                      {content.content.project_relationship_field.document.data.categories.map(
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
                      {
                        content.content.project_relationship_field.document.data
                          .year.text
                      }
                    </IndexBodyP>
                  </YearCon>
                  <LocationCon>
                    <IndexBodyP>
                      {
                        content.content.project_relationship_field.document.data
                          .location.text
                      }
                    </IndexBodyP>
                  </LocationCon>
                </Grid16>
              </InformationCon>
            </ProjectCon>
          </Link>
        </>
      );
    });

  function textTransfrom(y) {
    return y.replace("-", " ").replace(/(?:^|\s)\S/g, a => a.toUpperCase());
  }

  const Categories = () => {
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
    return (
      <>
        <CategoryItem>{index ? ", " : ""}</CategoryItem>

        <CategoryItem
          className={activeCategory === content.node.data.name ? `active` : ``}
          key={index}
          onClick={() => {
            setCategory(content.node.data.name);
          }}
        >
          {content.node.data.name}
        </CategoryItem>
      </>
    );
  });

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>Theo Ford – Index</title>
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
          <p>About</p>
        </NavButtonBlur>
        {/* <NavButtonBlur className="contact">
          <p>Contact</p>
        </NavButtonBlur> */}
        <NavButtonBlur className="instagram">
          <p>Instagram</p>
        </NavButtonBlur>
        <NavButtonBlur className="twitter">
          <p>Twitter</p>
        </NavButtonBlur>
      </NavConBlur>
      <NavCon>
        <NavButton className="theo">
          <Link to="/altDes_01_16Buttons">
            <p>Theo Ford</p>
          </Link>
        </NavButton>

        <NavButton className="select">
          <Link to="/altDes_01_16Buttons_ArrowsBig">
            <p>Select</p>
          </Link>
        </NavButton>

        <NavButton className="index">
          <Link to="/project_index_altDes">
            <p>Index</p>
          </Link>
        </NavButton>
        <NavButton className="bio">
          <Link to="/about_altDes">
            <p>About</p>
          </Link>
        </NavButton>
        {/* <NavButton className="contact">
          <p>Contact</p>
        </NavButton> */}
        <NavButton className="instagram">
          <p>Instagram</p>
        </NavButton>
        <NavButton className="twitter">
          <p>Twitter</p>
        </NavButton>
      </NavCon>
      <PageCon>
        <CategoryMenuConCon>
          <CategoryMenuCon>
            <Categories></Categories>
          </CategoryMenuCon>
        </CategoryMenuConCon>

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
        <TableCon>{organisedArrayMap}</TableCon>
      </PageCon>
    </>
  );
};

export default withPrismicPreview(ProjectIndex);

export const query = graphql`
  query ProjectIndexSelectQuery2 {
    prismicProjectIndexSelect {
      data {
        project_relationship_group {
          project_relationship_field {
            document {
              ... on PrismicProject {
                id
                type
                uid
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
                    gatsbyImageData
                  }
                }
              }
              ... on PrismicFilmLeadProject {
                id
                type
                uid
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
                    gatsbyImageData
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
