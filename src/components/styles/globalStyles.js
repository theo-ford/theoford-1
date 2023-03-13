import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

// html {
//   main{
//     opacity: 0;
//     transition: 250ms opacity ease;
//   }
//   // .artist-list {
//   //   opacity: 0;
//   //   transition: 250ms opacity ease;    
//   // }
// }

// html.wf-active,
// html.wf-inactive {
//   main{
//     opacity: 1;
//   }
//   // .artist-list {
//   //   opacity: 1;    
//   // }
// }

body {
  font-family: "Helvetica Neue", sans-serif;
  font-weight: normal;
  font-style: normal;

  font-size: 18px;
  line-height: 1.2;
  letter-spacing: 0px;

  text-shadow: 1px 1px 1px rgba(0, 0, 0, .004);
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  -webkit-tap-highlight-color: transparent;

  color: #000;
  margin: 0;
  background-color: white;

  word-break: break-word;
}

input {
  border-radius: 0;
}

h1,h2,h3,h4,h5, p{
  font-family: "Helvetica Neue", sans-serif;
  font-weight: normal;

  margin: 0;
}


/* Title 1 */
h1{
  font-size: 50px;
  line-height: 50px;
  letter-spacing: 0.3px;
}

/* Title 2 */
h2 {
  font-size: 30px;
  line-height: 32px;
  letter-spacing: 0.2px;
}

/* Heading 1 */
h3 {
  font-size: 30px;
  line-height: 32px;
  letter-spacing: 0.2px;
}

/* Heading 2 */
h4 {
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.2px;
}

/* Heading 3 */
h5 {
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.3px;
}
p {
  font-size: 16px;
  margin: 0;
  padding: 0;
}


/*--------------------------------------------------------------
  ## Media
  --------------------------------------------------------------*/

video,
img {
  width: 100%;
  margin: 0;

  display: block;
}

/*--------------------------------------------------------------
  ## Buttons
  --------------------------------------------------------------*/

  button{
    background-color: transparent;

    &:focus,
    &:hover{
      outline: none;
    }
  }

/*--------------------------------------------------------------
  ## Links
  --------------------------------------------------------------*/
a {
  color: inherit;
  text-decoration: none;

  position: relative;
}

a:visited {
  color: inherit;
}

a:hover,
a:focus,
a:active {
  color: inherit;
}

a:hover,
a:active,
a:focus {
  outline: 0;
}

/*--------------------------------------------------------------
  ## Text
  --------------------------------------------------------------*/

/* p {
  margin: 1em 0;
} */

ul, li{
  list-style: none;
  padding: 0;
  margin: 0;
}



/* video {
  padding-top: 56.25%; // Percentage ratio for 16:9
  position: relative;  
}

.react-player > div {
  position: absolute; // Scaling will occur since parent is relative now
} */

.player {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;  
}


// NAV

h1.navTextStyle {
  font-size: 30px; 
  mix-blend-mode: exclusion;
  color: white;  
}

h1.navLeft {
  position: fixed;
  bottom: 14px;
  z-index: 20000;
  left: 28px;  
}

h1.navCenter {
  position: fixed; 
  bottom: 14px;
  z-index: 40000; 
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0%);    
}

h1.navRight {
  position: fixed;
  bottom: 14px;
  z-index: 30000;
  right: 28px;  
}
@media (max-width: 640px) {
  h1.navTextStyle {
    font-size: 16px;  
  }
  h1.navLeft {
    bottom: 0px;
    left: 15px;  
  } 
  h1.navCenter {
    bottom: 0px;
    
  }
  h1.navRight {
    bottom: 0px;
    right: 15px;  
  } 
}



/* theo ford */

.logo_styles {
  mix-blend-mode: exclusion;
  width: 100%;
  /* position: fixed; */
}

`;

export default GlobalStyle;
