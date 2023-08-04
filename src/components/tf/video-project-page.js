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
import PauseButton from "../../../public/icons/Pause.png";
import PlayButton from "../../../public/icons/Play.png";
import { ImageOrientation } from "../utils/image-orientation";
import { ImageOrientation2 } from "../utils/image-orientation2";

const VideoCon = styled.div`
  margin-bottom: 200px;
  /* margin-top: 100px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 12.5px;
  width: 100%;
`;
const VideoConInner = styled.div`
  /* &.portrait {
    grid-column: 4 / span 6;
  } */
  &.lrg-portrait {
    grid-column: 5 / span 4;
  }
  &.sml-portrait {
    grid-column: 4 / span 6;
  }

  &.square {
    grid-column: 3 / span 8;
  }
  &.landscape {
    grid-column: span 12;
  }

  @media (max-width: 666px) {
    &.sml-portrait {
      grid-column: 3 / span 8;
    }
    &.lrg-portrait {
      grid-column: 4 / span 6;
    }
    &.square {
      grid-column: 3 / span 8;
    }
    &.landscape {
      grid-column: span 12;
    }
  }
`;
const ControlsCon = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12.5px;
  width: 100%;
  margin-top: 5px;
`;
const LengthCon = styled.div`
  grid-column: span 1;
  p {
    font-size: 12px;
    color: #545454;
  }
`;
const PlayCon = styled.div`
  grid-column: span 1;
  p {
    font-size: 12px;
    color: white;
  }
`;
const PauseButtonImg = styled.img`
  width: 8px;
  display: inline-block !important;
  margin-right: 5px;
`;
const PlayButtonImg = styled.img`
  width: 8px;
  display: inline-block !important;
`;
const Poster = styled.img`
  width: 100%;
  height: 100%;
`;
export const VideoProjectPage = ({ srcProps, posterProps, img }) => {
  const VideoRef = useRef(null);
  const imgRef = useRef(null);
  const [isPlaying, setPlayingStatus] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [imgOrientation, setOrientationState] = useState("");
  console.log(img);
  console.log(ImageOrientation(img));
  useEffect(() => {
    console.log(imgRef.current.height);
    console.log(imgRef.current.width);
    var width = imgRef.current.width;
    var height = imgRef.current.height;
    // var smlPortrait = width * 1.25;
    // var lrgPortrait = width * 1.777;
    var x = height / width;
    // console.log(srcProps);
    // console.log(x);
    if (x > 1.7) {
      setOrientationState("lrg-portrait");
      // VideoConInnerRef.current.classList.add("lrg-portrait");
    } else if (x > 1.2) {
      setOrientationState("sml-portrait");
    } else if (height >= width) {
      setOrientationState("square");
      // VideoConInnerRef.current.classList.add("square");
    } else if (width > height) {
      setOrientationState("landscape");
      // VideoConInnerRef.current.classList.add("landscape");
    }
    // setOrientationState(ImageOrientation(img));
  }, [imgRef, srcProps, img]);

  const playVideo = () => {
    VideoRef.current.play();
    setPlayingStatus(true);
    setHasStartedPlaying(true);
  };
  const pauseVideo = () => {
    VideoRef.current.pause();
    setPlayingStatus(false);
  };
  return (
    <>
      <VideoCon>
        <VideoConInner className={ImageOrientation2(img)}>
          <Poster
            ref={imgRef}
            style={{
              opacity: hasStartedPlaying ? 0 : 1,
              position: hasStartedPlaying ? "absolute" : "relative",
              zIndex: hasStartedPlaying ? -100 : 0,
              display: hasStartedPlaying ? "none" : "block",
            }}
            srcSet={posterProps}
          ></Poster>
          <video
            playsInline
            loop
            ref={VideoRef}
            style={{
              zIndex: 0,

              opacity: hasStartedPlaying ? 1 : 0,
              position: hasStartedPlaying ? "relative" : "absolute",
              display: hasStartedPlaying ? "block" : "none",
              // https://stackoverflow.com/questions/3680429/click-through-div-to-underlying-elements
              // click through video to controls
              pointerEvents: "none",
            }}
          >
            <source src={srcProps}></source>
          </video>
          <ControlsCon>
            <LengthCon>
              <p>12:23</p>
            </LengthCon>
            <PlayCon>
              {isPlaying ? (
                <p onClick={pauseVideo}>
                  <PauseButtonImg src={PauseButton} />
                  Pause
                </p>
              ) : (
                <p onClick={playVideo}>
                  <PlayButtonImg src={PlayButton} /> Play
                </p>
              )}
            </PlayCon>
          </ControlsCon>
        </VideoConInner>
      </VideoCon>
    </>
  );
};
