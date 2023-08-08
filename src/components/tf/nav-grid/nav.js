import React, { useEffect, useState, useRef } from "react";
import { withPreview } from "gatsby-source-prismic";
import styled, { createGlobalStyle } from "styled-components";
import { useMediaQuery } from "../media-query";
import Icon from "../../../../assets/WhiteLogo.svg";
import { graphql, Link } from "gatsby";
import { PageLoad } from "../page-load";

/* DESKTOP */
const DesktopLogoGridCon = styled.div`
  width: calc(100% - 25px);
  margin-left: 12.5px;
  position: sticky;
  top: 12.5px;
  z-index: 300000;
  mix-blend-mode: exclusion;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 12.5px;

  @media (max-width: 666px) {
    display: none;

    /* grid-column-gap: 10px;
    width: calc(100% - 20px);
    margin-left: 10px; */
  }
`;
const LogoConCon = styled.div`
  grid-column: span 1;
`;
const MenuCon = styled.div`
  grid-column: 3 / span 2;
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
  &.selected {
    color: white;
  }
`;

/* MOBILE */
const MobileLogoGridCon = styled.div`
  display: none;
  width: calc(100% - 20px);
  margin-left: 10px;
  position: sticky;
  top: 10px;
  z-index: 300000;
  mix-blend-mode: exclusion;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  @media (max-width: 666px) {
    display: block;
  }
`;
const MobileLeftCol = styled.div`
  grid-column: span 1;
`;
const MobileRightCol = styled.div`
  grid-column: span 1;
`;
const MobileNavP = styled.p`
  color: #878787;
  &.selected {
    color: white;
  }
`;

export const NavGrid = () => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  const LogoConRef = useRef(null);

  if (isPageWide) {
    return (
      <>
        <DesktopLogoGridCon style={{ opacity: PageLoad ? 1 : 0 }}>
          <LogoConCon>
            <LogoCon ref={LogoConRef}>
              <Icon />
            </LogoCon>
          </LogoConCon>
          <MenuCon>
            <DesktopNavP>
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
            </DesktopNavP>
          </MenuCon>
        </DesktopLogoGridCon>
      </>
    );
  }
  if (!isPageWide) {
    return (
      <>
        <MobileLogoGridCon>
          <MobileLeftCol>
            <Link to="/">
              <MobileNavP className="selected">Selected</MobileNavP>
            </Link>
            <Link to="/project_index">
              <MobileNavP>
                <span className="navItem">Index</span>{" "}
              </MobileNavP>
            </Link>
          </MobileLeftCol>

          <MobileRightCol>
            <Link to="/about17">
              <MobileNavP>Office</MobileNavP>
            </Link>
            <MobileNavP>Instagram</MobileNavP>
          </MobileRightCol>
        </MobileLogoGridCon>
      </>
    );
  }
};
