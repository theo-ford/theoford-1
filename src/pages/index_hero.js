import React, { useRef, useState, useEffect } from "react";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { ImageOrientation } from "../components/utils/image-orientation";
import { Helmet } from "react-helmet";
import "../components/styles/index.css";
import { useMediaQuery } from "../components/tf/media-query";
import Icon from "../../assets/WhiteLogo.svg";
import { AutoPlayVideo } from "../components/tf/autoplay-video";
// import { IntroHeroSizzle } from "../components/tf/index/intro-hero-sizzle";
import { ProjectInfo2NoButtons } from "../components/tf/index/project-info2-noButtons";
import { TwoUpProjectCarouselSwiperOf1 } from "../components/tf/index/two-up-carousels/two-up-carousel-swiper-of-1-bigArrows";
import { OneUpProjectCarouselSwiperOf1 } from "../components/tf/index/one-up-carousel/one-up-carousel-swiper-of-1";
import { ProjectCarousel } from "../components/tf/index/one-up-carousel";
import { SingleAssetProject } from "../components/tf/index/single-asset-project1";
// import { FilmLeadCarousel2 } from "../components/tf/index/film-carousel";
import { FilmLeadCarousel2 } from "../components/tf/index/film-carousel-originalAuto";
import { AutoPlayVideoOriginalAuto } from "../components/tf/autoplay-video-OriginalAuto";
import { VideoWithControlsImg2 } from "../components/tf/index/video";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperIndexContext from "../components/tf/index/two-up-carousels/swiper-index-context";
import {
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const GlobalStyle = createGlobalStyle`
  html {
    background-color: white;
    overflow-x: clip;
    max-width: 100vw;
  }
  body {
    // https://stackoverflow.com/questions/47095596/body-overflow-x-hidden-breaks-position-sticky
    background-color: white;
    overflow-x: clip;
    max-width: 100vw;
    @media (min-width: 666px) {
      /* position: fixed; */
    }    
  }
`;

/* - - - - - INTRO  - - - - -  */
const IntroConCon = styled.div`
  top: 12.5px;
`;

/* NAV */
/* BOTH */
const LogoGridCon = styled.div`
  width: calc(100% - 25px);
  margin-left: 12.5px;
  position: sticky;
  top: 12.5px;
  z-index: 300000;
  mix-blend-mode: exclusion;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 12.5px;
  /* background-color: green; */
  @media (max-width: 666px) {
    /* width: calc(100% - 25px);
    margin-left: 12.5px;
    top: 10px; */
    width: calc(100% - 20px);
    margin-left: 10px;
    top: 10px;
  }
`;
/* DESKTOP */
const LogoConCon = styled.div`
  /* grid-column: span 2; */

  mix-blend-mode: exclusion;
  width: calc(50vw - 18.75px);
  /* background-color: red; */
  position: sticky;
  top: 12.5px;
  margin-left: 12.5px;
  float: left;
  z-index: 200000;
`;
const MenuCon = styled.div`
  mix-blend-mode: exclusion;
  width: 200px;
  float: left;
  /* margin-left: calc(50vw - 18.75px); */
  /* background-color: orange; */
  position: sticky;
  top: 12.5px;
  margin-top: -2px;
  margin-left: 12.5px;
  z-index: 200000;
`;
const LogoCon = styled.div`
  mix-blend-mode: exclusion;
  width: calc(100%);
  vertical-align: top;
  transition: all 2s;
  vertical-align: top;
`;
const DesktopNavP = styled.p`
  color: #878787;
  mix-blend-mode: exclusion;
  a.selected {
    color: white;
  }
  @media (max-width: 666px) {
    display: none;
  }
`;

/* MOBILE */

const MobileLeftCol = styled.div`
  grid-column: span 2;
  mix-blend-mode: exclusion;
`;
const MobileRightCol = styled.div`
  grid-column: span 2;
  mix-blend-mode: exclusion;
`;
const MobileNavP = styled.p`
  display: none;
  color: #878787;
  mix-blend-mode: exclusion;
  &.selected {
    color: white;
  }
  @media (max-width: 666px) {
    display: block;
  }
`;
const LogoConMobile = styled.div`
  display: none;
  mix-blend-mode: exclusion;
  @media (max-width: 666px) {
    display: block;
    width: calc(75% - 6.25px);
    margin-top: 28vh;
    margin-left: 10px;
    .shrink {
      width: calc(75% - 6.25px);
    }
  }
`;

const NavSpacer = styled.div`
  height: 32vh;
  width: 100%;
  @media (max-width: 666px) {
    display: none;
  }
`;

/* - - - - - PAGE  - - - - - */
const PageCon = styled.div`
  margin-top: 48vh;
  @media (max-width: 666px) {
    margin-top: 38vh;
  }
`;

const ProjectCon = styled.div`
  margin-bottom: 100px;
  @media (max-width: 666px) {
    margin-bottom: 200px;
  }
`;

/* - - - - - INDEX AUTOPLAT VIDEO FORMATTING - - - - - */
/* - - perhaps in the autoplay video component you put a conditional saying if page index apply this  - - */
const IndexAutoPlayVideoCon = styled.div`
  position: relative;
  width: calc(100% - 12.5px) !important;
  @media (max-width: 666px) {
    width: 100%;
  }
`;

/* - - - - - - IMAGE - - - - - - - */
const SquareImg = styled.div`
  width: calc(100% - 12.5px) !important;
  @media (max-width: 666px) {
    /* width: 100% !important; */
  }
`;

const Counter = styled.p`
  margin-bottom: 5px;
`;

/* - - - - SIZZLE - - - - */

const SizzleCon = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-color: red; */
  overflow: hidden;
`;
const SizzleTextCon = styled.div`
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  margin-left: 12.5px;
  grid-row-gap: 0;
  width: calc(100% - 25px);
  z-index: 20000;
  position: absolute;
  top: 12.5px;
  mix-blend-mode: exclusion;
`;
const SizzleIntroCon = styled.div`
  grid-column: span 8;
  mix-blend-mode: exclusion;
  p {
    color: white;
    span.bold {
      font-weight: 900;
    }
  }
`;
const SizzleCountDownCon = styled.div`
  grid-column: 16 / span 1;
  mix-blend-mode: exclusion;
  p {
    color: white;
    text-align: right;
    span.bold {
      font-weight: 900;
    }
  }
`;
const SizzleVidCon = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;

  align-items: center;
`;
const Nav2 = styled.div`
  position: fixed;
  top: 10px;
  left: calc(50vw + 6.25px);
  z-index: 50000;
  mix-blend-mode: exclusion;
`;

/* - - - - -INTRO HERO - - - - - */

const IntroCon = styled.div`
  padding-top: 10px;
  /* transition: 1s ease; */
  span.grey {
    color: #878787;
  }
  span.bold {
    font-weight: 900;
  }
  @media (max-width: 666px) {
    display: none;
  }
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
const AboutCon = styled.div`
  grid-column: span 7;
  /* p,
  span {
    font-size: 22px;
  } */
`;
const LocationCon = styled.div`
  grid-column: 11 / span 4;
  span.grey {
    color: #878787;
  }
`;
const ContactCon = styled.div`
  grid-column: 15 / span 2;
`;

const Index = ({ data }) => {
  console.log("2023/12/04 16:59");
  const [pageLoad, setPageLoad] = useState(null);
  let isPageWide = useMediaQuery("(min-width: 667px)");
  const LogoConRef2 = useRef(null);
  const intro = useRef();

  // page load useEffect
  // https://stackoverflow.com/questions/57729504/is-there-a-way-to-tell-when-your-react-app-page-is-done-loading-the-page-asset
  useEffect(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      setPageLoad(true);
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  // https://www.npmjs.com/package/react-scroll
  const reactScroll = () => {
    const options = {
      duration: 2500,
      smoother: "easeInQuad",
    };
    scroll.scrollTo(intro.current.offsetTop, options);
  };

  setTimeout(reactScroll, 20000);

  const NavIndexGridIndex = () => {
    let isPageWide = useMediaQuery("(min-width: 667px)");
    var [currentPage, setCurrentPage] = useState(null);
    const LogoConRef = useRef(null);

    const handleScroll = () => {
      const position = window.pageYOffset;
      // console.log(position);
      if (position > 1100) {
        // console.log("greater than 100");
        LogoConRef.current.classList.add("shrink");
      } else if (position < 1100) {
        // console.log("less than 100");
        LogoConRef.current.classList.remove("shrink");
      }
    };
    // scroll use effect
    useEffect(() => {
      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    if (isPageWide) {
      return (
        <>
          <LogoConCon style={{ opacity: pageLoad ? 1 : 0 }}>
            <LogoCon ref={LogoConRef}>
              <Link to="/">
                <Icon />
              </Link>
            </LogoCon>
          </LogoConCon>
          {/* <MenuCon style={{ opacity: pageLoad ? 1 : 0 }}>
            <DesktopNavP>
              <Link to="/" className="selected">
                Select,{" "}
              </Link>
              <Link to="/project_index">Index, </Link>
              <Link to="/about">About</Link>
            </DesktopNavP>
          </MenuCon> */}
        </>
      );
    }
    if (!isPageWide) {
      return (
        <>
          <LogoGridCon>
            <MobileLeftCol>
              <Link to="/">
                <MobileNavP className="selected">Selected</MobileNavP>
              </Link>
              <Link to="/project_index">
                <MobileNavP>Index</MobileNavP>
              </Link>
            </MobileLeftCol>

            <MobileRightCol>
              <Link to="/about">
                <MobileNavP>About</MobileNavP>
              </Link>
              <MobileNavP>Instagram</MobileNavP>
            </MobileRightCol>
          </LogoGridCon>
          <LogoConMobile ref={LogoConRef}>
            <Icon />
          </LogoConMobile>
        </>
      );
    }
  };

  const Countdown = () => {
    const [seconds, setSeconds] = React.useState(20);

    React.useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds(0);
      }
    });

    return <p>{seconds}</p>;
  };

  const IntroHeroSizzle = () => {
    // https://stackoverflow.com/questions/71201160/how-to-update-a-clock-every-second-in-react-js-recursively
    const [time, setTime] = React.useState(date());

    function date() {
      let nwDate = new Date();
      var year = nwDate.getFullYear();
      var month = nwDate.getMonth() + 1;
      var monthString = month.toString();
      var day = nwDate.getDate();
      var hours = nwDate.getHours();
      var minutes = nwDate.getMinutes();
      var seconds = nwDate.getSeconds();
      var dateTimeString =
        year +
        "/" +
        ("0" + monthString).slice(-2) +
        "/" +
        ("0" + day).slice(-2) +
        " " +
        ("0" + hours).slice(-2) +
        ":" +
        ("0" + minutes).slice(-2) +
        ":" +
        ("0" + seconds).slice(-2);
      return dateTimeString;
    }

    // console.log(date());

    useEffect(() => {
      setInterval(() => {
        setTime(date());
      }, 1000);
    }, []);

    return (
      <IntroCon ref={intro}>
        <Grid16>
          <AboutCon>
            <p>
              <span class="bold">Theo Ford's</span> practice centers on graphic
              design, art direction, moving-image and web development. <br></br>
              Recent commissions and collaborations include identities for the
              head of energy at <span className="grey">Tesla</span>,
              art-direction <br></br> for{" "}
              <span className="grey">American Apparel</span>, and printed matter
              for <span className="grey">COS</span>.
            </p>
          </AboutCon>
          <LocationCon>
            <p>
              Current and previous locations:
              <span className="grey"> London, </span> New York,
              <span className="grey">
                {" "}
                Los Angeles, Beijing, Stockholm, Gothenburg, Glasgow, Falmouth,
                Philadelphia.
              </span>{" "}
              {/* 2023/03/23 21:32.  */}
              {time.toString()}.
            </p>
          </LocationCon>
          <ContactCon>
            <p class="">
              <span>
                info@theoford.com
                <br />
                +44 7599 759 527
                <br /> &nbsp;
                <Link target="_blank" to="https://www.instagram.com/tf.public/">
                  @tf.public
                </Link>
              </span>
            </p>
          </ContactCon>
        </Grid16>
      </IntroCon>
    );
  };

  const overview = data.prismicFeaturedProjects.data.project_relationship_group.map(
    (content, index) => {
      if (
        content.project_relationship_field.document.type == "film_lead_project"
      ) {
        const filmLeadProject = content.project_relationship_field.document.data.body.map(
          (content_three, index) => {
            if (content_three.slice_type == "video_with_play_button") {
              const posterImage = content_three.primary.video_thumbnail;
              if (isPageWide) {
                return (
                  <AutoPlayVideoOriginalAuto
                    srcProps={content_three.primary.video_with_play_button.url}
                    posterProps={posterImage}
                    img={posterImage}
                  ></AutoPlayVideoOriginalAuto>
                );
              } else {
                return (
                  <AutoPlayVideoOriginalAuto
                    srcProps={
                      content_three.primary.small_video_with_play_button.url
                    }
                    posterProps={posterImage}
                    img={posterImage}
                  ></AutoPlayVideoOriginalAuto>
                );
              }
            }
          }
        );
        return (
          <>
            <ProjectCon>
              <FilmLeadCarousel2>
                {React.Children.map(filmLeadProject, child =>
                  React.cloneElement(child, {})
                )}
              </FilmLeadCarousel2>
              <ProjectInfo2NoButtons
                data2={content.project_relationship_field.document.data}
                uid={content.project_relationship_field.document.uid}
              ></ProjectInfo2NoButtons>
            </ProjectCon>
          </>
        );
      }
      if (content.project_relationship_field.document.type == "project") {
        const projectLength =
          content.project_relationship_field.document.data.body.length;
        const project = content.project_relationship_field.document.data.body.map(
          (content_four, index) => {
            if (content_four.slice_type == "image") {
              const image = getImage(content_four.primary.image);
              return (
                <SwiperSlide>
                  {/* {console.log(swiperSlideIndex)} */}
                  <SwiperIndexContext.Provider value={index}>
                    {/* <p>
                      {index + 1} of {projectLength}
                    </p> */}
                    <SquareImg>
                      <GatsbyImage image={image} />
                    </SquareImg>
                  </SwiperIndexContext.Provider>
                </SwiperSlide>
              );
            }
            if (content_four.slice_type == "video") {
              if (isPageWide) {
                const posterImg = content_four.primary.index_image;
                return (
                  <SwiperIndexContext.Provider value={index}>
                    <SwiperSlide>
                      <IndexAutoPlayVideoCon>
                        <AutoPlayVideo
                          srcProps={content_four.primary.video.url}
                          posterProps={posterImg}
                        />
                      </IndexAutoPlayVideoCon>
                    </SwiperSlide>
                  </SwiperIndexContext.Provider>
                );
              } else {
                const posterImg = content_four.primary.index_image;
                return (
                  <SwiperSlide>
                    <IndexAutoPlayVideoCon>
                      <AutoPlayVideo
                        srcProps={content_four.primary.sml_video.url}
                        posterProps={posterImg}
                      />
                    </IndexAutoPlayVideoCon>
                  </SwiperSlide>
                );
              }
            }
          }
        );
        if (isPageWide && projectLength > 1) {
          return (
            <ProjectCon>
              <TwoUpProjectCarouselSwiperOf1
                projectLength={
                  content.project_relationship_field.document.data.body.length
                }
              >
                {React.Children.map(project, child =>
                  React.cloneElement(child, {
                    changedSlide: false,
                  })
                )}
              </TwoUpProjectCarouselSwiperOf1>
              <ProjectInfo2NoButtons
                data2={content.project_relationship_field.document.data}
                uid={content.project_relationship_field.document.uid}
              ></ProjectInfo2NoButtons>
            </ProjectCon>
          );
        } else if (isPageWide && projectLength <= 1) {
          return (
            <>
              <ProjectCon>
                <SingleAssetProject>{project}</SingleAssetProject>
                <ProjectInfo2NoButtons
                  data2={content.project_relationship_field.document.data}
                  uid={content.project_relationship_field.document.uid}
                ></ProjectInfo2NoButtons>
              </ProjectCon>
            </>
          );
        } else if (!isPageWide && projectLength <= 1) {
          return (
            <>
              <ProjectCon>
                <SingleAssetProject>{project}</SingleAssetProject>
                <ProjectInfo2NoButtons
                  data2={content.project_relationship_field.document.data}
                  uid={content.project_relationship_field.document.uid}
                ></ProjectInfo2NoButtons>
              </ProjectCon>
            </>
          );
        } else if (isPageWide == false) {
          return (
            <ProjectCon>
              <OneUpProjectCarouselSwiperOf1 projectLength={projectLength}>
                {React.Children.map(project, child =>
                  React.cloneElement(child, {
                    changedSlide: false,
                  })
                )}
              </OneUpProjectCarouselSwiperOf1>
              <ProjectInfo2NoButtons
                data2={content.project_relationship_field.document.data}
                uid={content.project_relationship_field.document.uid}
              ></ProjectInfo2NoButtons>
            </ProjectCon>
          );
        }
      }
    }
  );

  return (
    <>
      <GlobalStyle />
      <Helmet>
        <title>Theo Ford</title>
      </Helmet>
      <Nav2>
        <div style={{ opacity: pageLoad ? 1 : 0 }}>
          <DesktopNavP>
            <Link to="/" className="selected">
              Select,{" "}
            </Link>
            <Link to="/project_index">Index, </Link>
            <Link to="/about">About</Link>
          </DesktopNavP>
        </div>
      </Nav2>
      <SizzleCon>
        <SizzleTextCon>
          <SizzleIntroCon>
            <p>
              <span class="bold">Theo Ford</span> is an American, Indian &
              British art-director, designer & developer
              <br></br> working between New York & London.
            </p>
          </SizzleIntroCon>
          <SizzleCountDownCon>
            <Countdown></Countdown>
          </SizzleCountDownCon>
        </SizzleTextCon>
        <SizzleVidCon>
          <AutoPlayVideo
            srcProps={data.prismicAbout.data.sizzle.url}
            posterProps={data.prismicAbout.data.landing_sizzle_first_frame.url}
          />
        </SizzleVidCon>
      </SizzleCon>

      <IntroConCon style={{ opacity: pageLoad ? 1 : 0 }}>
        <IntroHeroSizzle></IntroHeroSizzle>
      </IntroConCon>

      <NavSpacer></NavSpacer>
      <NavIndexGridIndex></NavIndexGridIndex>

      <PageCon style={{ opacity: pageLoad ? 1 : 0 }}>{overview}</PageCon>
    </>
  );
};

export default withPrismicPreview(Index);

export const query = graphql`
  query IndexQuery97 {
    prismicAbout {
      data {
        sizzle {
          url
        }
        landing_sizzle_first_frame {
          gatsbyImageData
        }
      }
    }
    prismicFeaturedProjects {
      data {
        project_relationship_group {
          project_relationship_field {
            document {
              ... on PrismicProject {
                id
                type
                uid
                data {
                  project_title {
                    html
                    text
                  }
                  location {
                    html
                    text
                  }
                  year {
                    html
                    text
                  }
                  homepage_intro {
                    text
                  }
                  client {
                    text
                  }
                  show_client_on_index
                  body {
                    ... on PrismicProjectDataBodyImage {
                      id
                      slice_type
                      primary {
                        image {
                          gatsbyImageData(
                            placeholder: NONE
                            backgroundColor: "#D6D6D6"
                          )
                        }
                      }
                    }
                    ... on PrismicProjectDataBodyVideo {
                      id
                      slice_type
                      primary {
                        video {
                          url
                        }
                        sml_video {
                          url
                        }
                        index_image {
                          gatsbyImageData(
                            placeholder: NONE
                            backgroundColor: "#D6D6D6"
                          )
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicFilmLeadProject {
                id
                type
                uid
                data {
                  project_title {
                    html
                    text
                  }
                  location {
                    html
                    text
                  }
                  year {
                    html
                    text
                  }
                  client {
                    html
                    text
                  }
                  show_client_on_index
                  homepage_intro {
                    text
                  }
                  body {
                    ... on PrismicFilmLeadProjectDataBodyVideoWithPlayButton {
                      id
                      slice_type
                      primary {
                        video_with_play_button {
                          url
                        }
                        small_video_with_play_button {
                          url
                        }
                        video_thumbnail {
                          gatsbyImageData(
                            placeholder: NONE
                            backgroundColor: "#D6D6D6"
                          )
                          dimensions {
                            height
                            width
                          }
                        }
                      }
                    }
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
