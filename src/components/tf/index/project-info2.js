import styled, { createGlobalStyle, keyframes } from "styled-components";
import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from "react";
import { graphql, Link, useScrollRestoration } from "gatsby";
import { useMediaQuery } from "../media-query";

/* - - - - - PROJECT INFO - - - - - */
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
    margin-bottom: 10px;
  }
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
  margin-bottom: 8px;
`;

const ProjectInfoCon = styled.div`
  height: 80px;
  margin-top: 8px;
  @media (max-width: 666px) {
    margin-top: 4px;
  }
`;
const ProjectTitleCon = styled.div`
  grid-column: span 4;

  @media (max-width: 666px) {
    grid-column: span 1;
    a {
      color: #878787;
    }
  }
`;
const ProjectLocationYearCon = styled.div`
  grid-column: span 4;
  @media (max-width: 666px) {
    grid-column: span 1;
  }
`;

const ProjectIndexAbout = styled.div`
  grid-column: span 4;
  p {
    font-size: 12px;
  }
  @media (max-width: 666px) {
    display: none;
  }
`;
const ProjectLink = styled.div`
  grid-column: 15 / span 2;
  a {
    color: #878787;
  }
  @media (max-width: 666px) {
    display: none;
  }
`;

// const Client = data2 => {
//   if (data2.project_title.text == data2.client.text) {
//     return <p>""</p>;
//   } else if (data2.project_title.text != data2.client.text) {
//     return <p>data2.client.text</p>;
//   }
// };
export const ProjectInfo2 = ({ data2, uid }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  if (isPageWide) {
    return (
      <ProjectInfoCon>
        <Grid16>
          <ProjectTitleCon>
            <Link to={uid}>{data2.project_title.text}</Link>
            {/* <Client data2={data2} /> */}

            {/* {data2.project_title.text == data2.client.text ? (
              ""
            ) : (
              <p>{data2.client.text}</p>
            )} */}
            {data2.show_client_on_index ? <p>{data2.client.text}</p> : ""}
          </ProjectTitleCon>
          <ProjectLocationYearCon>
            <p>{data2.location.text}</p>
            <p>{data2.year.text}</p>
          </ProjectLocationYearCon>
          <ProjectIndexAbout>
            <p>{data2.homepage_intro.text}</p>
          </ProjectIndexAbout>
          <ProjectLink>
            <Link to={uid}>More Info</Link>
          </ProjectLink>
        </Grid16>
      </ProjectInfoCon>
    );
  } else {
    return (
      <ProjectInfoCon>
        <Grid2>
          <ProjectTitleCon>
            <Link to={uid}>{data2.project_title.text}</Link>
          </ProjectTitleCon>
          <ProjectLocationYearCon>
            <p>{data2.location.text}</p>
            <p>{data2.year.text}</p>
          </ProjectLocationYearCon>
        </Grid2>
      </ProjectInfoCon>
    );
  }
};
