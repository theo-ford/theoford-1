import React, { useRef, useState } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { keyframes } from "styled-components";
import { withPreview } from "gatsby-source-prismic";
import { ImageOrientation } from "../components/utils/image-orientation";
import { useMediaQuery } from "../components/tf/media-query";
import Div100vh from "react-div-100vh";
import "../components/styles/index.css";
import { NavStudio } from "../components/tf/nav-studio";

// Utils
import kebabCase from "lodash.kebabcase";

const Index = ({ data }) => {
  // let isMobile = useMediaQuery("(max-width: 640px)");

  return <p>Index</p>;
};

export default withPreview(Index);

// export const query = graphql``;
