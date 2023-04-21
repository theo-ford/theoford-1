import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import { Helmet } from "react-helmet";
import { ImageOrientation } from "../components/utils/image-orientation";
import styled, { createGlobalStyle } from "styled-components";
import ReactPlayer from "react-player";
// import { VideoComponent } from "../components/tf/video_component";
import { VideoComponentNoControls } from "../components/tf/video-component-no-controls";
import { useMediaQuery } from "../components/tf/media-query";

const FilmLeadProject = ({ data }) => {
  return (
    <p>
      Film Lead Project <br></br>
      {data.prismicFilmLeadProject.data.project_title.text}
    </p>
  );
};

export default withPreview(FilmLeadProject);

export const query = graphql`
  query FilmLeadArtists($uid: String!) {
    prismicFilmLeadProject(uid: { eq: $uid }) {
      uid
      id
      data {
        project_title {
          html
          text
        }
      }
    }
  }
`;
