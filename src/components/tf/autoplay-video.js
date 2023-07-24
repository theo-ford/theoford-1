import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { useOnScreen } from "../hooks/useOnScreen";

const AutoplayVideoCon = styled.div`
  position: relative;
  width: calc(100%);
  @media (max-width: 666px) {
    width: 100%;
  }
`;
const AutoplayVideoImg = styled.img`
  /* position: absolute; */
  width: 100%;
  height: 100%;
`;
const AutoplayVideoVideo = styled.video`
  /* position: absolute; */
  width: 100%;
  height: 100%;
`;
const AutoplayVideoImgCon = styled.div``;
const breatheAnimation = keyframes`
  0% {opacity: 0} 
  50% {opacity: 1}
  100% {opacity:0}
`;
const AutoplayVideoTextCon = styled.div`
  position: absolute;
  z-index: 10000;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  p {
    color: black;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    background-color: white;
    margin-top: -1px;
    animation-name: ${breatheAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
`;

export const AutoPlayVideo = ({ srcProps, posterProps, changedSlide }) => {
  // https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks
  // https://frontend-digest.com/responsive-and-progressive-video-loading-in-react-e8753315af51
  const autoplayVideoRef = useRef(null);
  const isOnScreen = useOnScreen(autoplayVideoRef);
  const [videoSrcState, setVideoSrcState] = useState("");
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  // console.log("autoplay Video Ref");
  // console.log(autoplayVideoRef);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };

  useEffect(() => {
    if (isOnScreen == true) {
      // console.log(srcProps);
      // console.log("on screen");
      setVideoSrcState(srcProps);
      autoplayVideoRef.current.load();
      autoplayVideoRef.current.play();
    } else if (isOnScreen === false) {
      // console.log(srcProps);
      // console.log("off screen");
      // caches.delete();
      // var x = srcProps;
      // var y = x.replace("https://theoford-1.cdn.prismic.io/theoford-1/", "");
      // console.log(y);
      // caches.delete(y);
      // console.log(caches.keys());
      // caches.keys().then(function(names) {
      //   for (let name of names) caches.delete(name);
      // });
      setIsVideoLoaded(false);
      setVideoSrcState("");
    }
  }, [isOnScreen]);

  return (
    <>
      <AutoplayVideoCon>
        <AutoplayVideoImgCon
          style={{
            opacity: isVideoLoaded ? 0 : 1,
            position: isVideoLoaded ? "absolute" : "relative",
            // opacity: 1,
            // position: "relative",
          }}
        >
          <AutoplayVideoTextCon>
            <p>Video Loading</p>
          </AutoplayVideoTextCon>

          <AutoplayVideoImg
            srcSet={posterProps}
            style={{
              opacity: isVideoLoaded ? 0 : 1,
              position: isVideoLoaded ? "absolute" : "relative",
              // opacity: 1,
              // position: "relative",
            }}
          />
        </AutoplayVideoImgCon>

        <AutoplayVideoVideo
          playsInline
          autoPlay
          muted
          loop
          ref={autoplayVideoRef}
          // onCanPlayThrough={onLoadedData}
          onLoadedData={onLoadedData}
          style={{
            opacity: isVideoLoaded ? 1 : 0,
            position: isVideoLoaded ? "relative" : "absolute",
            // display: isOnScreen ? "block" : "none",
            // opacity: 0,
            // position: "absolute",
          }}
        >
          <source type="video/mp4" src={videoSrcState} />
        </AutoplayVideoVideo>
      </AutoplayVideoCon>
    </>
  );
};

// export function autoplayVideo(query) {
//   const [matches, setMatches] = useState(false);

//   useEffect(() => {
//     const media = window.matchMedia(query);
//     if (media.matches !== matches) {
//       setMatches(media.matches);
//     }
//     const listener = () => {
//       setMatches(media.matches);
//     };
//     media.addListener(listener);
//     return () => media.removeListener(listener);
//   }, [matches, query]);

//   return matches;
// }
