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
    /* background-color: white; */
  }
  &.bio {
    background-color: white;
    opacity: 0.8;
  }
  &.instagram {
    grid-column: 15 / span 1;
    /* display: none; */
  }

  &.twitter {
    /* display: none; */
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
    /* background-color: white; */
  }
  &.bio {
    background-color: white;
  }
  &.instagram {
    grid-column: 15 / span 1;
    /* display: none; */
  }
  &.twitter {
    /* display: none; */
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
  /* padding-bottom: 18vh; */
  /* margin-top: 400px; */
  @media (max-width: 666px) {
    padding-bottom: 0vh;
  }
`;
const IntroCon = styled.div`
  width: calc(50% - 12.5px);
  margin-left: 12.5px;
  margin-top: 160px;
  margin-bottom: 6px;
  p {
    color: white;
    letter-spacing: -0.2px;
    font-size: 16px;
    span {
      font-variation-settings: "wght" 600;
    }
  }
`;
const ImgCon = styled.div`
  width: calc(50% - 12.5px);
  margin-left: 12.5px;
  border-radius: 10px;
  overflow: hidden;
`;
const ImgCaptionCon = styled.div`
  width: calc(50% - 12.5px);
  margin-left: 12.5px;
  margin-top: 6px;
  p {
    color: white;
    letter-spacing: -0.2px;
    font-size: 12px;
  }
`;

const BodyTextCon = styled.div`
  width: calc(50% - 12.5px);
  margin-left: 12.5px;
  margin-top: 100px;
  margin-bottom: 12.5px;
  p {
    color: white;
    letter-spacing: -0.2px;
    font-size: 16px;
    span {
      font-variation-settings: "wght" 600;
    }
  }
`;
const ProjectIndex = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  const LogoConRef = useRef(null);
  const [activeCategory, setCategory] = useState(null);
  const [categoriesVisible, setCategoriesVisible] = useState(false);

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
          <Link to="/altDes_01_16Buttons">
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
        <IntroCon>
          <p>
            <span>Theo Ford</span> is an Indian/British art-director &
            programmer currently in New York.
          </p>
        </IntroCon>
        <ImgCon>
          <img src={Baby} />
        </ImgCon>
        <ImgCaptionCon>
          <p>
            This is an A0 photo of me in Philadelphia when I was two. Mutaji
            (Grandma) had it hanging in her living room next to a portrait of
            her other great love Guru Nanak. When she passed, it was the only
            thing I received in the inheritance. At the time I was bitter
            because my sister got money, but with age this feels priceless.
          </p>
        </ImgCaptionCon>
        <BodyTextCon>
          <p>
            <span>Theo Ford</span> can...<br></br>
            <br></br>
            build websites using HTML, CSS, Javascript, Gatsby & NextJS<br></br>
            design websites and digital products using Figma<br></br>
            edit and colour grade film using Premiere Pro and Davinci<br></br>
            direct and shoot film using an iPhone or Canon 5D<br></br>
            animate typography and graphics using After Effects<br></br>
            edit photography using Adobe Photoshop<br></br>
            create graphic design for printed matter using Adobe Indesign
            <br></br>
            make type design and illustration using Adobe Illustrator<br></br>
            devise product, marketing and brand strategies<br></br>
            come up with original ideas<br></br>
          </p>
        </BodyTextCon>
        <BodyTextCon>
          <p>
            <span>Theo Ford's</span> experience...<br></br>
            <br></br>
            Self-Employed<br></br>
            Designer, Developer & Art Director<br></br>
            London/Los Angeles<br></br>
            2018–2024<br></br>
            <br></br>
            Select Clients: Lunar Energy, Mayku, Jan Hendzel Studio, <br></br>
            G4C, Nowness, Dazed, Martinez Gallery, Merchant Gallery, <br></br>
            Alice Bucknell, Uma Termas, Studio Lyons, Josh Kopeika<br></br>
            <br></br>
            American Apparel <br></br>
            Art Director & Videographer<br></br>
            Los Angeles<br></br>
            2017–2018<br></br>
            <br></br>
            EdenSpiekermann<br></br>
            Product Designer & Developer<br></br>
            Los Angeles<br></br>
            2016–2017<br></br>
            <br></br>
            Safe Place for Youth<br></br>
            Teacher<br></br>
            Los Angeles<br></br>
            2016-2018<br></br>
            <br></br>
            COS <br></br>
            Middle-Weight Designer <br></br>
            London<br></br>
            2015<br></br>
            <br></br>
            Graphic Thought Facility<br></br>
            Internship <br></br>
            London<br></br>
            2015<br></br>
            <br></br>
            Research & Development<br></br>
            Internship<br></br>
            Stockholm<br></br>
            2014<br></br>
            <br></br>
            Lundgren+Lindqvist<br></br>
            Internship<br></br>
            Gothenberg<br></br>
            2014<br></br>
            <br></br>
            Daniel Eatock <br></br>
            Internship<br></br>
            Remote<br></br>
            2014<br></br>
            <br></br>
            Glasgow School of Art<br></br>
            BA Hons in Graphic Design <br></br>
            Glasgow<br></br>
            2010 – 2014<br></br>
            <br></br>
            Falmouth University <br></br>
            Art Foundation <br></br>
            Falmouth<br></br>
            2009–2010<br></br>
          </p>
        </BodyTextCon>
        <BodyTextCon>
          <p>To discuss a project please email info@theoford.com</p>
        </BodyTextCon>
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