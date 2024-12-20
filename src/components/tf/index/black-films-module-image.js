import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ImageOrientation2 } from "../../utils/image-orientation2";

const AutoplayVideoCon = styled.div`
  width: calc(100%);
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 8 */ 1fr 1fr 1fr 1fr /* 12 */ 1fr 1fr 1fr 1fr /* 16 */ 1fr 1fr 1fr 1fr /* 20 */ 1fr 1fr 1fr 1fr /* 24 */ 1fr 1fr 1fr 1fr /* 28 */ 1fr 1fr 1fr 1fr /* 32 */ 1fr 1fr 1fr 1fr /* 36 */ 1fr 1fr 1fr 1fr /* 40 */ 1fr 1fr 1fr 1fr /* 44 */ 1fr 1fr 1fr 1fr /* 48 */;
  grid-column-gap: 12.5px;
  margin-left: 12.5px;
  grid-row-gap: 0;
  width: calc(100% - 25px);
  z-index: 20000;
  align-items: center;
  height: 110vh;
  @media (max-width: 666px) {
    grid-template-columns: 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 8 */ 1fr 1fr 1fr 1fr /* 12 */ 1fr 1fr 1fr 1fr /* 16 */ 1fr 1fr 1fr 1fr /* 20 */ 1fr 1fr 1fr 1fr /* 24 */ 1fr 1fr 1fr 1fr /* 28 */ 1fr 1fr 1fr 1fr /* 32 */ 1fr 1fr 1fr 1fr /* 36 */;
    grid-column-gap: 10px;
    margin-left: 10px;
    grid-row-gap: 0;
    width: calc(100% - 20px);
    z-index: 20000;
    align-items: center;
    height: 100vh;
  }
`;
const AutoPlayVideoConInner = styled.div`
  &.sml-portrait {
    grid-column: 19 / span 12;
  }
  &.lrg-portrait {
    grid-column: 20 / span 10;
  }
  &.square {
    grid-column: 18 / span 14;
  }
  &.landscape {
    grid-column: 13 / span 24;
  }
  @media (max-width: 666px) {
    &.sml-portrait {
      grid-column: 6 / span 26;
    }
    &.lrg-portrait {
      grid-column: 7 / span 24;
    }
    &.square {
      grid-column: 5 / span 28;
    }
    &.landscape {
      grid-column: span 36;
    }
  }
`;
const AutoplayVideoImg = styled.div`
  width: 100%;
  height: 100%;
`;

export const BlackFilmsModuleImage = ({ image }) => {
  const getPosterImage = getImage(image);
  return (
    <>
      <AutoplayVideoCon className={ImageOrientation2(posterProps)}>
        <AutoPlayVideoConInner className={ImageOrientation2(posterProps)}>
          <GatsbyImage image={getPosterImage} />
        </AutoPlayVideoConInner>
      </AutoplayVideoCon>
    </>
  );
};
