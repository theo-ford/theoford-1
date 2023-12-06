import styled, { createGlobalStyle, keyframes } from "styled-components";
import React, {
  useRef,
  useState,
  useEffect,
  createContext,
  useContext,
  useMemo,
} from "react";

const IntroCon = styled.div`
  margin-top: 10px;
  /* transition: 1s ease; */
  span.grey {
    color: #878787;
  }
  @media (max-width: 666px) {
    display: none;
  }
`;
const Grid16 = styled.div`
  display: grid;
  top: 12.5px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 12.5px;
  margin-left: 12.5px;
  grid-row-gap: 0;
  width: calc(100% - 25px);
  z-index: 20000;
`;
const AboutCon = styled.div`
  grid-column: span 6;
`;
const LocationCon = styled.div`
  grid-column: 9 / span 5;
  span.grey {
    color: #878787;
  }
`;
const ContactCon = styled.div`
  grid-column: 15 / span 2;
`;

export const Intro = () => {
  // https://stackoverflow.com/questions/71201160/how-to-update-a-clock-every-second-in-react-js-recursively
  const [time, setTime] = React.useState("");

  useEffect(() => {
    setInterval(() => {
      let nwDate = new Date();
      var year = nwDate.getFullYear();
      var month = nwDate.getMonth();
      var day = nwDate.getDate();
      var hours = nwDate.getHours();
      var minutes = nwDate.getMinutes();
      var seconds = nwDate.getSeconds();
      var dateTimeString =
        year +
        "/" +
        month +
        "/" +
        day +
        " " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
      setTime(dateTimeString);
    }, 1000);
  }, []);

  return (
    <IntroCon>
      <Grid16>
        <AboutCon>
          <p>
            The design office of Theo Ford. Specialising in graphic design, art
            direction, moving-image and web development. Recent commisions and
            collaborations include identites for{" "}
            <span className="grey">Tesla</span>, adverts for{" "}
            <span className="grey">American Apparel</span>, and printed matter
            for <span className="grey">COS</span>.<br />
          </p>
        </AboutCon>
        <LocationCon>
          <p>
            Current Location: <span className="grey">New York,</span> London,
            <span className="grey">
              {" "}
              Los Angeles, Beijing, Stockholm, Gothenburg, Glasgow, Falmouth,
              Philadelphia.
            </span>{" "}
            {/* 2023/03/23 21:32.  */}
            {time.toString()}.
          </p>
        </LocationCon>
        <ContactCon>
          <p class="">
            <span>
              info@theoford.com
              <br />
              +44 7599 759 529
              <br />
              @tf.public
            </span>
          </p>
        </ContactCon>
      </Grid16>
    </IntroCon>
  );
};
