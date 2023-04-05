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
import "../components/styles/index.css";
import { useMediaQuery } from "../components/tf/media-query";
// import Icon from "../../assets/White Logo No TF.svg";
import Slider from "react-slick";
import "../components/slick/slick.css";
import "../components/slick/slick-theme.css";
import { useOnScreen } from "../components/hooks/useOnScreen";
import ReactPlayer from "react-player";
import Icon from "../../assets/WhiteLogo.svg";
import PauseButton from "../../public/icons/Pause.png";
import PlayButton from "../../public/icons/Play.png";

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
const NavSpacer = styled.div`
  height: 24vh;
  width: 100%;
  @media (max-width: 666px) {
    display: none;
  }
`;
const LogoGridCon = styled.div`
  width: calc(100% - 25px);
  margin-left: 12.5px;
  position: sticky;
  top: 12.5px;
  margin-top: 10px;
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
  /* width: calc(50% - 6.25px); */
  width: calc(37.5% - 6.25px);
  /* width: calc(72.5% - 6.25px); */
  display: inline-block;
  vertical-align: top;
  transition: all 1s;

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
const RectangleCon = styled.div`
  grid-column: 13 / span 3;

  /* padding-left: 12.5px; */
  /* position: absolute; */
  height: 250px;
  /* margin-top: -80px; */
  /* background-image: linear-gradient(black 80%, white 50%);
  background-position: left;
  background-size: 1px 3px;
  background-repeat: repeat-y;
  padding-left: 12.5px; */
  margin-bottom: 100px;
`;
const Rectangle = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  /* left: calc(76vw - 6.25px); */
  position: absolute;
  /* top: 15vh; */
  border-radius: 50%;
`;
const Rectangle4 = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  left: calc(76vw - 6.25px);
  /* position: absolute; */
  /* margin-top: 4vh; */
  margin-top: 10px;
  border-radius: 50%;
`;
const Rectangle7 = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  left: calc(76vw - 6.25px);
  /* position: absolute; */
  /* margin-top: 4vh; */
  margin-top: 10px;
  border-radius: 50%;
`;

const Rectangle5 = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  /* left: calc(76vw - 6.25px); */
  /* position: absolute; */
  /* top: 15vh; */
  border-radius: 50%;
  margin-left: 30px;
  opacity: 0;
`;
const Rectangle6 = styled.div`
  width: 20px;
  height: 20px;
  background-color: #b4b4b4;
  left: calc(76vw - 10.25px);
  position: absolute;
  margin-top: 14vh;
  border-radius: 50%;
`;
const Rectangle2 = styled.div`
  width: 20px;
  height: 20px;
  background-color: #b4b4b4;
  /* left: calc(76vw - 6.25px);
  position: absolute; */
  margin-top: 22vh;
  border-radius: 50%;
`;
const Rectangle3 = styled.div`
  width: 20px;
  height: 20px;
  background-color: #b4b4b4;
  /* left: calc(76vw - 6.25px);
  position: absolute; */
  margin-top: 32vh;
  border-radius: 50%;
`;
const PageCon = styled.div`
  /* margin-top: 34vh; */
  /* margin-top: 25px; */
  /* overflow-x: hidden;
  max-width: 100vw; */
  margin-bottom: 100px;
  margin-top: 250px;
`;
const Grid2 = styled.div`
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  margin-left: 10px;
  grid-row-gap: 0;
  width: calc(100% - 20px);
  z-index: 20000;
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

const AboutTextCon = styled.div`
  grid-column: span 12;
  /* margin-top: 27vh; */
  /* p {
    font-size: 42px;
    line-height: 110%;
    color: white;
    font-family: "Times Now";
    font-weight: 300;
    font-style: normal;
    letter-spacing: -5.3% !important;
  } */

  @media (max-width: 666px) {
    /* display: none; */
    margin-left: 0px;
    grid-column: span 16;
  }
`;
const AboutP = styled.p`
  font-size: 46px;

  line-height: 110%;
  color: white;
  font-family: "Times Now";

  font-weight: 300;
  font-style: normal;
  text-indent: 50px;
  letter-spacing: -1.3px !important;
  @media (max-width: 666px) {
    /* display: none; */
    font-size: 28px;
  }
`;
const ContactCon = styled.div`
  /* margin-top: 27vh; */
  /* margin-top: 7vh; */
  /* margin-top: 20px; */

  grid-column: 13 / span 3;
  /* background-image: linear-gradient(black 80%, white 50%);
  background-position: left;
  background-size: 1px 3px;
  background-repeat: repeat-y;
  padding-left: 12.5px; */
  p {
    color: white;
  }
  a {
    color: white;
  }
`;
const BorderCon = styled.div`
  background-image: linear-gradient(black 80%, white 50%);
  background-position: left;
  background-size: 1px 3px;
  background-repeat: repeat-y;
  padding-left: 12.5px;
`;
const ClickableContactCon = styled.div`
  p {
    color: #b4b4b4;
  }
  a {
    color: #b4b4b4;
  }
  @media (max-width: 666px) {
    /* display: none; */
    grid-column: span 8;
    margin-top: 50px;
  }
`;

const AddressCon = styled.div`
  @media (max-width: 666px) {
    /* display: none; */
    grid-column: span 8;
    margin-top: 50px;
    p {
      color: white;
    }
    a {
      color: white;
    }
  }
`;

const CopyrightSpan = styled.span`
  font-family: "Helvetica Now Var Roman";
  font-variation-settings: "wght" 390;
  color: white;
  font-size: 12px;
  margin: 0;
  padding: 0;
  line-height: 110%;
  letter-spacing: -0.5px;
  display: inline-block;
  text-indent: 0px;
`;

const ClientCon = styled.div`
  grid-column: span 3;
  h5 {
    font-family: "HelveticaNowText";
    font-weight: bold;
    color: white;
  }
  ul {
  }
  li {
    color: white;
  }
  @media (max-width: 666px) {
    /* display: none; */
    grid-column: span 8;
  }
`;

const PreviousEmployersCon = styled.div`
  grid-column: span 3;
  h5 {
    font-family: "HelveticaNowText";
    font-weight: bold;
    color: white;
  }
  ul {
  }
  li {
    color: white;
  }
  @media (max-width: 666px) {
    /* display: none; */
    grid-column: span 8;
  }
`;

const ServicesCon = styled.div`
  grid-column: span 3;
  h5 {
    font-family: "HelveticaNowText";
    font-weight: bold;
    color: white;
  }
  ul {
  }
  li {
    color: white;
    font-family: "Helvetica Now Var Roman";
    font-variation-settings: "wght" 390;
    color: white;
    font-size: 16px;
    margin: 0;
    padding: 0;
    line-height: 110%;
    letter-spacing: -0.5px;
  }
  @media (max-width: 666px) {
    /* display: none; */
    grid-column: span 8;
    margin-top: 50px;
  }
`;
const CollaboratorsCon = styled.div`
  grid-column: span 3;
  h5 {
    font-family: "HelveticaNowText";
    font-weight: bold;
    color: white;
  }
  ul {
  }
  li {
    color: white;
    font-family: "Helvetica Now Var Roman";
    font-variation-settings: "wght" 390;
    color: white;
    font-size: 16px;
    margin: 0;
    padding: 0;
    line-height: 110%;
    letter-spacing: -0.5px;
  }
  @media (max-width: 666px) {
    /* display: none; */
    grid-column: span 8;
    margin-top: 50px;
  }
`;

const LocationCon = styled.div`
  grid-column: span 3;
  h5 {
    font-family: "HelveticaNowText";
    font-weight: bold;
    color: white;
  }
  p {
    color: white;
    font-family: "Helvetica Now Var Roman";
    font-variation-settings: "wght" 390;
    color: #b4b4b4;
    font-size: 16px;
    margin: 0;
    padding: 0;
    line-height: 110%;
    letter-spacing: -0.5px;
  }
  span.active {
    color: white;
  }
  @media (max-width: 666px) {
    /* display: none; */
    grid-column: span 8;
    margin-top: 50px;
  }
`;

const About = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  const LogoConRef = useRef(null);

  const LogoNav = scrollPosition => {
    if (isPageWide) {
      return (
        <>
          {/* <NavSpacer></NavSpacer> */}
          <LogoGridCon>
            <LogoCon ref={LogoConRef}>
              <Icon />
            </LogoCon>
            <NavCon1>
              <Link to="/">
                <p className="selected">Selected</p>
              </Link>
              <p>Index</p>
            </NavCon1>
            <NavCon2>
              <Link to="/about">
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
              <Link to="/about">
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
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   // console.log(position);
  //   if (position > 25) {
  //     // console.log("greater than 100");
  //     LogoConRef.current.classList.add("shrink");
  //   } else if (position < 25) {
  //     // console.log("less than 100");
  //     LogoConRef.current.classList.remove("shrink");
  //   }
  // };
  // // scroll use effect
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, {
  //     passive: true,
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>(10) Pagination 1</title>
      </Helmet>
      <LogoNav></LogoNav>
      <Grid16 style={{ position: "fixed" }}>
        <RectangleCon>
          <Rectangle></Rectangle>
          <Rectangle5></Rectangle5>
          <Rectangle4></Rectangle4>
          <Rectangle7></Rectangle7>
        </RectangleCon>
      </Grid16>

      <Rectangle6></Rectangle6>
      <PageCon>
        <Grid16>
          <AboutTextCon>
            {/* <div
              dangerouslySetInnerHTML={{
                __html: data.prismicAbout.data.about_page_intro.html,
              }}
            /> */}
            <AboutP>
              {data.prismicAbout.data.about_page_intro.text}
              {"  "}
              <CopyrightSpan>
                &copy; All rights reserved by Theo Ford
              </CopyrightSpan>
            </AboutP>
          </AboutTextCon>
          {isPageWide ? (
            <ContactCon>
              <ClickableContactCon>
                <a href={data.prismicAbout.data.email.url}>info@theoford.com</a>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.prismicAbout.data.phone_number.html,
                  }}
                />
                <a href={data.prismicAbout.data.website_url.text}>
                  theoford.com
                </a>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.prismicAbout.data.instagram.html,
                  }}
                />
                <br></br>
              </ClickableContactCon>

              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicAbout.data.address.html,
                }}
              />
              <Rectangle2></Rectangle2>
              <Rectangle2></Rectangle2>
            </ContactCon>
          ) : (
            <>
              <ClickableContactCon>
                <a href={data.prismicAbout.data.email.url}>info@theoford.com</a>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.prismicAbout.data.phone_number.html,
                  }}
                />
                <a href={data.prismicAbout.data.website_url.text}>
                  theoford.com
                </a>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.prismicAbout.data.instagram.html,
                  }}
                />
                <br></br>
              </ClickableContactCon>
              <AddressCon>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.prismicAbout.data.address.html,
                  }}
                />
              </AddressCon>
            </>
          )}
        </Grid16>
        <Grid16 style={{ marginTop: "100px" }}>
          <ClientCon>
            <>
              <h5>Clients</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicAbout.data.clients.html,
                }}
              />
            </>
          </ClientCon>
          <PreviousEmployersCon>
            <>
              <h5>Previous Employeres</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicAbout.data.previous_employers.html,
                }}
              />
            </>
          </PreviousEmployersCon>
          <ServicesCon>
            <>
              <h5>Services</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicAbout.data.services.html,
                }}
              />
            </>
          </ServicesCon>
          <CollaboratorsCon>
            <>
              <h5>Collaborators</h5>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicAbout.data.collaborators.html,
                }}
              />
            </>
          </CollaboratorsCon>
          <LocationCon>
            <>
              <h5>Location</h5>
              <p>
                <span className="active">London</span> <br></br>
                Los Angeles<br></br>
                Stockholm<br></br>
                Gothenburg<br></br>
                Glasgow<br></br>
                Falmouth<br></br>
                Beijing<br></br>
                Philadelphia
              </p>
            </>

            <Rectangle3></Rectangle3>
          </LocationCon>
        </Grid16>
      </PageCon>
    </>
  );
};

export default withPreview(About);

export const query = graphql`
  query aboutQuery7 {
    prismicAbout {
      data {
        website_url {
          html
          text
        }
        upcoming_locations {
          html
          text
        }
        services {
          html
          text
        }
        previous_locations {
          html
          text
        }
        previous_employers {
          html
          text
        }
        phone_number {
          html
          text
        }
        instagram {
          html
          text
        }
        homepage_intro {
          html
          text
        }
        email {
          url
        }
        current_location {
          html
          text
        }
        collaborators {
          html
          text
        }
        clients {
          html
          text
        }
        address {
          html
          text
        }
        about_page_intro {
          html
          text
        }
      }
    }
  }
`;
