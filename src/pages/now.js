import React, { useRef, useState } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled from "styled-components";
import { withPreview } from "gatsby-source-prismic";

import "../components/styles/index.css";

const Now = ({ data }) => {
  return <p> Now</p>;
};

export default withPreview(Now);

// export const query = graphql``;
