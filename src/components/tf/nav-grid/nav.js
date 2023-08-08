import React, { useEffect, useState, useRef } from "react";
import { withPreview } from "gatsby-source-prismic";
import styled, { createGlobalStyle } from "styled-components";
import { useMediaQuery } from "../media-query";
import Icon from "../../../../assets/WhiteLogo.svg";
import { graphql, Link } from "gatsby";

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

  @media (max-width: 666px) {
    /* display: none; */

    grid-column-gap: 10px;
    width: calc(100% - 20px);
    margin-left: 10px;
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
  /* background-color: blue; */

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
  /* margin-left: 10px; */
  margin-left: 11px;
  /* margin-left: calc(50vw + 7px); */
  /* margin-left: calc(25vw + 6.25px); */
  /* margin-top: -118px; */
  margin-top: -3px;
  vertical-align: top;
  mix-blend-mode: exclusion;
  p {
    color: #878787;
    /* font-size: 12px; */
  }
  span.selected {
    color: white;
  }
  span.navItem {
    /* margin-left: 5px; */
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

export const NavGrid = () => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  const LogoConRef = useRef(null);
  if (isPageWide) {
    return (
      <>
        <LogoGridCon>
          <LogoConCon>
            <LogoCon ref={LogoConRef}>
              <Icon />
            </LogoCon>
          </LogoConCon>
          <MenuCon>
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
          </MenuCon>
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
                <span className="navItem">Index</span>{" "}
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
