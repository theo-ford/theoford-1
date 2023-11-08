import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { useOnScreen } from "../../hooks/useOnScreen";
import { ImageOrientation } from "../../utils/image-orientation";
import { ImageOrientation2 } from "../../utils/image-orientation2";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

const VideoCon = styled.div`
  margin-bottom: 200px;
  /* margin-top: 100px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 8 */ 1fr 1fr 1fr 1fr /* 12 */ 1fr 1fr 1fr 1fr /* 16 */ 1fr 1fr 1fr 1fr /* 20 */ 1fr 1fr 1fr 1fr /* 24 */;
  grid-gap: 12.5px;
  width: 100%;
  /* background-color: red; */
  @media (max-width: 666px) {
    grid-column-gap: 10px;
  }
`;
const VideoConInner = styled.div`
  /* &.portrait {
    grid-column: 4 / span 6;
  } */
  &.sml-portrait {
    grid-column: 8 / span 10;
  }
  &.lrg-portrait {
    grid-column: 8 / span 10;
  }
  &.square {
    grid-column: 7 / span 12;
  }
  &.landscape {
    grid-column: 1 / span 24;
  }
  /* @media (max-width: 666px) {
    &.sml-portrait {
      grid-column: 6 / span 16;
    }
    &.lrg-portrait {
      grid-column: 6 / span 16;
    }
    &.square {
      grid-column: 5 / span 18;
    }
    &.landscape {
      grid-column: span 25;
    }
  } */
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
const PauseButtonImg = styled.div`
  width: 8px;
  display: inline-block !important;
  margin-right: 5px;
`;
const PlayButtonImg = styled.div`
  width: 8px;
  display: inline-block !important;
`;
const Poster = styled.div`
  width: 100%;
  height: 100%;
`;
export const VideoProjectPage = ({ srcProps, posterProps, img }) => {
  const VideoRef = useRef(null);
  const imgRef = useRef(null);
  const [isPlaying, setPlayingStatus] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const [imgOrientation, setOrientationState] = useState("");
  const [vidDuration, setVidDuration] = useState("");

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   console.log(VideoRef.current.duration);
  //   console.log(format(VideoRef.current.duration));
  //   setVidDuration(format(VideoRef.current.duration));
  // }, [VideoRef, vidDuration]);
  // function y(seconds) {
  //   const minutes = Math.floor(time / 60);
  //   const seconds = time - minutes * 60;

  //   function str_pad_left(string, pad, length) {
  //     return (new Array(length + 1).join(pad) + string).slice(-length);
  //   }

  //   const finalTime =
  //     str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
  //   return finalTime;
  // }

  // console.log(y(VideoRef.current.duration));

  function format(time) {
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
      ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + String(mins).padStart(2, "0") + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }

  // console.log(format(VideoRef.current.duration));

  const handleLoadedMetadata = () => {
    console.log(VideoRef.current.duration);
    console.log(format(VideoRef.current.duration));
    setVidDuration(format(VideoRef.current.duration));
  };
  const playVideo = () => {
    VideoRef.current.play();
    setPlayingStatus(true);
    setHasStartedPlaying(true);
  };
  const pauseVideo = () => {
    VideoRef.current.pause();
    setPlayingStatus(false);
  };
  const getImageVal = getImage(posterProps);
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
          >
            <GatsbyImage image={getImageVal} />
          </Poster>
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
            onLoadedMetadata={handleLoadedMetadata}
          >
            <source src={srcProps}></source>
          </video>
          <ControlsCon>
            <LengthCon>
              <p>{vidDuration}</p>
              {/* <p>TEST</p> */}
            </LengthCon>
            <PlayCon>
              {isPlaying ? (
                <p onClick={pauseVideo}>
                  {/* <PauseButtonImg src={PauseButton} /> */}
                  <PauseButtonImg>
                    <StaticImage src={"../../../img/pause.png"} />
                  </PauseButtonImg>
                  Pause
                </p>
              ) : (
                <p onClick={playVideo}>
                  <PlayButtonImg>
                    <StaticImage src={"../../../img/play.png"} />
                  </PlayButtonImg>
                  Play
                </p>
              )}
            </PlayCon>
          </ControlsCon>
        </VideoConInner>
      </VideoCon>
    </>
  );
};
