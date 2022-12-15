import React from "react";
import { graphql, Link } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import styled, { createGlobalStyle } from "styled-components";
import { NavSelected } from "../components/tf/nav-selected";

const About = ({ data }) => {
  return <p>about</p>;
};
export default withPreview(About);

// export const query = graphql``;
