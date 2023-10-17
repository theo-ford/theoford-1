exports.id = 904;
exports.ids = [904];
exports.modules = {

/***/ 2431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useOnScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function useOnScreen(ref){// console.log("useOnSCreen");
const{0:isOnScreen,1:setIsOnScreen}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);const observerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{observerRef.current=new IntersectionObserver(([entry])=>setIsOnScreen(entry.isIntersecting));},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{observerRef.current.observe(ref.current);return()=>{observerRef.current.disconnect();};},[ref]);return isOnScreen;}

/***/ }),

/***/ 7000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function useMediaQuery(query){const{0:matches,1:setMatches}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const media=window.matchMedia(query);if(media.matches!==matches){setMatches(media.matches);}const listener=()=>{setMatches(media.matches);};media.addListener(listener);return()=>media.removeListener(listener);},[matches,query]);return matches;}

/***/ }),

/***/ 753:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ NavGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1650);
/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7000);
/* harmony import */ var _assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(664);
/* harmony import */ var _assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7076);
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5329);
/* BOTH */const LogoGridCon=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"nav__LogoGridCon",componentId:"exljff-0"})(["width:calc(100% - 25px);margin-left:12.5px;position:sticky;top:12.5px;z-index:300000;mix-blend-mode:exclusion;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:12.5px;@media (max-width:666px){width:calc(100% - 20px);margin-left:10px;top:10px;}"]);/* DESKTOP */const LogoConCon=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"nav__LogoConCon",componentId:"exljff-1"})(["grid-column:span 1;mix-blend-mode:exclusion;"]);const MenuCon=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"nav__MenuCon",componentId:"exljff-2"})(["grid-column:3 / span 2;mix-blend-mode:exclusion;"]);const LogoCon=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"nav__LogoCon",componentId:"exljff-3"})(["mix-blend-mode:exclusion;width:calc(100%);vertical-align:top;transition:all 2s;vertical-align:top;"]);const DesktopNavP=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({displayName:"nav__DesktopNavP",componentId:"exljff-4"})(["color:#878787;mix-blend-mode:exclusion;a.selected{color:white;}@media (max-width:666px){display:none;}"]);/* MOBILE */const MobileLeftCol=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"nav__MobileLeftCol",componentId:"exljff-5"})(["grid-column:span 2;mix-blend-mode:exclusion;"]);const MobileRightCol=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"nav__MobileRightCol",componentId:"exljff-6"})(["grid-column:span 2;mix-blend-mode:exclusion;"]);const MobileNavP=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({displayName:"nav__MobileNavP",componentId:"exljff-7"})(["display:none;color:#878787;mix-blend-mode:exclusion;&.selected{color:white;}@media (max-width:666px){display:block;}"]);const NavGrid=()=>{let isPageWide=(0,_media_query__WEBPACK_IMPORTED_MODULE_1__/* .useMediaQuery */ .a)("(min-width: 667px)");var{0:currentPage,1:setCurrentPage}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const LogoConRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{var inputString=window.location.href;var outputString=inputString.replace(/.*\//,"");if(outputString=="project_index"){setCurrentPage(outputString);}else if(outputString=="office"){setCurrentPage(outputString);}else{setCurrentPage(null);}},[setCurrentPage]);if(isPageWide){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogoGridCon,{style:{opacity:_page_load__WEBPACK_IMPORTED_MODULE_4__/* .PageLoad */ .N?1:0}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogoConCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogoCon,{ref:LogoConRef},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_2___default()),null)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DesktopNavP,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:"/"},"Select, "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:"/project_index",className:currentPage=="project_index"?"selected":""},"Index,"," "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:"/office",className:currentPage=="office"?"selected":""},"Office")))));}if(!isPageWide){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogoGridCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileLeftCol,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileNavP,null,"Selected")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:"/project_index"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileNavP,{className:currentPage=="project_index"?"selected":""},"Index"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileRightCol,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:"/office"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileNavP,{className:currentPage=="office"?"selected":""},"Office")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileNavP,null,"Instagram"))));}};

/***/ }),

/***/ 5329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ PageLoad)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function PageLoad(query){const{0:pageLoad,1:setPageLoad}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// callback function to call when event triggers
const onPageLoad=()=>{console.log("page loaded");setPageLoad(true);// do something else
};// Check if the page has already loaded
if(document.readyState==="complete"){onPageLoad();}else{window.addEventListener("load",onPageLoad,false);// Remove the event listener when component unmounts
return()=>window.removeEventListener("load",onPageLoad);}},[]);}

/***/ }),

/***/ 1428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ ImageOrientation2)
/* harmony export */ });
const ImageOrientation2=image=>{var x=image.dimensions.height/image.dimensions.width;const isImageSmlPortrait=x>1.2;const isImageLrgPortrait=x>1.7;const isImageLandscape=image.dimensions.width>image.dimensions.height;const isImageSquare=image.dimensions.width===image.dimensions.height;if(isImageLrgPortrait===true){return"lrg-portrait";}else if(isImageSmlPortrait===true){return"sml-portrait";}else if(isImageSquare===true){// console.log("square");
return"square";}else{// console.log("portrait");
return"landscape";}};

/***/ }),

/***/ 3138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ film_lead_project)
});

// EXTERNAL MODULE: external "/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/theoford-1/node_modules/react/index.js"
var index_js_ = __webpack_require__(6400);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js + 1 modules
var withPrismicPreview = __webpack_require__(9656);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(1650);
// EXTERNAL MODULE: ./node_modules/react-player/lib/index.js
var lib = __webpack_require__(2004);
// EXTERNAL MODULE: ./src/components/tf/media-query.js
var media_query = __webpack_require__(7000);
// EXTERNAL MODULE: ./assets/WhiteLogo.svg
var WhiteLogo = __webpack_require__(664);
var WhiteLogo_default = /*#__PURE__*/__webpack_require__.n(WhiteLogo);
// EXTERNAL MODULE: ./src/components/hooks/useOnScreen.js
var useOnScreen = __webpack_require__(2431);
// EXTERNAL MODULE: ./src/components/utils/image-orientation2.js
var image_orientation2 = __webpack_require__(1428);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(3040);
;// CONCATENATED MODULE: ./src/components/tf/project/video-project-page.js
const VideoCon=styled_components_esm["default"].div.withConfig({displayName:"video-project-page__VideoCon",componentId:"sc-2hv73k-0"})(["margin-bottom:200px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-gap:12.5px;width:100%;"]);const VideoConInner=styled_components_esm["default"].div.withConfig({displayName:"video-project-page__VideoConInner",componentId:"sc-2hv73k-1"})(["&.lrg-portrait{grid-column:5 / span 4;}&.sml-portrait{grid-column:4 / span 6;}&.square{grid-column:3 / span 8;}&.landscape{grid-column:span 12;}@media (max-width:666px){&.sml-portrait{grid-column:3 / span 8;}&.lrg-portrait{grid-column:4 / span 6;}&.square{grid-column:3 / span 8;}&.landscape{grid-column:span 12;}}"]);const ControlsCon=styled_components_esm["default"].div.withConfig({displayName:"video-project-page__ControlsCon",componentId:"sc-2hv73k-2"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:12.5px;width:100%;margin-top:5px;"]);const LengthCon=styled_components_esm["default"].div.withConfig({displayName:"video-project-page__LengthCon",componentId:"sc-2hv73k-3"})(["grid-column:span 1;p{font-size:12px;color:#545454;}"]);const PlayCon=styled_components_esm["default"].div.withConfig({displayName:"video-project-page__PlayCon",componentId:"sc-2hv73k-4"})(["grid-column:span 1;p{font-size:12px;color:white;}"]);const PauseButtonImg=styled_components_esm["default"].div.withConfig({displayName:"video-project-page__PauseButtonImg",componentId:"sc-2hv73k-5"})(["width:8px;display:inline-block !important;margin-right:5px;"]);const PlayButtonImg=styled_components_esm["default"].div.withConfig({displayName:"video-project-page__PlayButtonImg",componentId:"sc-2hv73k-6"})(["width:8px;display:inline-block !important;"]);const Poster=styled_components_esm["default"].div.withConfig({displayName:"video-project-page__Poster",componentId:"sc-2hv73k-7"})(["width:100%;height:100%;"]);const VideoProjectPage=({srcProps,posterProps,img})=>{const VideoRef=(0,index_js_.useRef)(null);const imgRef=(0,index_js_.useRef)(null);const{0:isPlaying,1:setPlayingStatus}=(0,index_js_.useState)(false);const{0:hasStartedPlaying,1:setHasStartedPlaying}=(0,index_js_.useState)(false);const{0:imgOrientation,1:setOrientationState}=(0,index_js_.useState)("");const{0:vidDuration,1:setVidDuration}=(0,index_js_.useState)("");// useEffect(() => {
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
function format(time){// Hours, minutes and seconds
var hrs=~~(time/3600);var mins=~~(time%3600/60);var secs=~~time%60;// Output like "1:01" or "4:03:59" or "123:03:59"
var ret="";if(hrs>0){ret+=""+hrs+":"+(mins<10?"0":"");}ret+=""+String(mins).padStart(2,"0")+":"+(secs<10?"0":"");ret+=""+secs;return ret;}// console.log(format(VideoRef.current.duration));
const handleLoadedMetadata=()=>{console.log(VideoRef.current.duration);console.log(format(VideoRef.current.duration));setVidDuration(format(VideoRef.current.duration));};const playVideo=()=>{VideoRef.current.play();setPlayingStatus(true);setHasStartedPlaying(true);};const pauseVideo=()=>{VideoRef.current.pause();setPlayingStatus(false);};const getImageVal=(0,gatsby_image_module/* getImage */.gJ)(posterProps);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(VideoCon,null,/*#__PURE__*/index_js_default().createElement(VideoConInner,{className:(0,image_orientation2/* ImageOrientation2 */.I)(img)},/*#__PURE__*/index_js_default().createElement(Poster,{ref:imgRef,style:{opacity:hasStartedPlaying?0:1,position:hasStartedPlaying?"absolute":"relative",zIndex:hasStartedPlaying?-100:0,display:hasStartedPlaying?"none":"block"}},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* GatsbyImage */.HN,{image:getImageVal})),/*#__PURE__*/index_js_default().createElement("video",{playsInline:true,loop:true,ref:VideoRef,style:{zIndex:0,opacity:hasStartedPlaying?1:0,position:hasStartedPlaying?"relative":"absolute",display:hasStartedPlaying?"block":"none",// https://stackoverflow.com/questions/3680429/click-through-div-to-underlying-elements
// click through video to controls
pointerEvents:"none"},onLoadedMetadata:handleLoadedMetadata},/*#__PURE__*/index_js_default().createElement("source",{src:srcProps})),/*#__PURE__*/index_js_default().createElement(ControlsCon,null,/*#__PURE__*/index_js_default().createElement(LengthCon,null,/*#__PURE__*/index_js_default().createElement("p",null,vidDuration)),/*#__PURE__*/index_js_default().createElement(PlayCon,null,isPlaying?/*#__PURE__*/index_js_default().createElement("p",{onClick:pauseVideo},/*#__PURE__*/index_js_default().createElement(PauseButtonImg,null,/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../../img/pause.png",__imageData:__webpack_require__(4230)})),"Pause"):/*#__PURE__*/index_js_default().createElement("p",{onClick:playVideo},/*#__PURE__*/index_js_default().createElement(PlayButtonImg,null,/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../../img/play.png",__imageData:__webpack_require__(6186)})),"Play"))))));};
// EXTERNAL MODULE: ./src/components/tf/nav-grid/nav.js
var nav = __webpack_require__(753);
;// CONCATENATED MODULE: ./src/templates/film_lead_project.js
const GlobalStyle=(0,styled_components_esm.createGlobalStyle)`
  html {
    background-color: black;
  }
  body {
    background-color: black;
    /* overflow-y: clip; */
  }
  p {
    color: white;
  }
`;const LogoGridCon=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__LogoGridCon",componentId:"sc-1fijeg5-0"})(["width:calc(100% - 25px);margin-left:12.5px;position:sticky;top:12.5px;z-index:300000;mix-blend-mode:exclusion;@media (max-width:666px){display:grid;grid-template-columns:1fr 1fr;grid-column-gap:10px;width:calc(100% - 20px);margin-left:10px;}"]);const Grid2B=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__Grid2B",componentId:"sc-1fijeg5-1"})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr;grid-column-gap:12.5px;grid-row-gap:0;width:calc(100% - 20px);z-index:20000;"]);const Col1=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__Col1",componentId:"sc-1fijeg5-2"})(["grid-column:span 1;"]);const Col2=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__Col2",componentId:"sc-1fijeg5-3"})(["grid-column:span 1;"]);const LogoCon=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__LogoCon",componentId:"sc-1fijeg5-4"})(["top:12.5px;mix-blend-mode:exclusion;width:calc(50% - 6.25px);display:inline-block;vertical-align:top;transition:all 2s;vertical-align:top;.shrink{width:calc(37.5% - 6.25px);}@media (max-width:666px){width:calc(75% - 6.25px);margin-top:14vh;margin-left:10px;.shrink{width:calc(75% - 6.25px);}}"]);const NavCon1=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__NavCon1",componentId:"sc-1fijeg5-5"})(["display:inline-block;position:sticky;top:12.5px;z-index:300000;margin-left:11px;margin-top:-3px;vertical-align:top;mix-blend-mode:exclusion;p{color:#878787;}span.selected{color:white;}span.navItem{}@media (max-width:666px){margin-left:0px;grid-column:span 1;}"]);const NavCon2=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__NavCon2",componentId:"sc-1fijeg5-6"})(["display:inline-block;position:sticky;top:12.5px;margin-left:12.5px;margin-top:-3px;mix-blend-mode:exclusion;z-index:300000;p{color:#878787;}p.selected{color:white;}@media (max-width:666px){margin-left:0px;grid-column:span 1;}"]);const PageConCon=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__PageConCon",componentId:"sc-1fijeg5-7"})(["width:calc(100% - 25px);margin:12.5px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr;grid-gap:12.5px;"]);const PageCon=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__PageCon",componentId:"sc-1fijeg5-8"})(["grid-column:5 / span 8;margin-top:20vh;@media (max-width:666px){grid-column:span 16;margin-top:10vh;}"]);const Grid8=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__Grid8",componentId:"sc-1fijeg5-9"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-column-gap:12.5px;grid-row-gap:0;width:calc(100%);"]);const Table=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__Table",componentId:"sc-1fijeg5-10"})(["margin-bottom:20px;border-bottom:1px solid white;"]);const TableRow=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__TableRow",componentId:"sc-1fijeg5-11"})(["border-top:1px solid white;padding-top:5px;padding-bottom:5px;"]);const TableTitle=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__TableTitle",componentId:"sc-1fijeg5-12"})(["grid-column:span 2;p{font-weight:bold;}"]);const TableContent=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__TableContent",componentId:"sc-1fijeg5-13"})(["grid-column:span 6;"]);const BodyTextCon=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__BodyTextCon",componentId:"sc-1fijeg5-14"})(["margin-bottom:20px;p{line-height:125%;}@media (max-width:666px){}"]);const Footer=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__Footer",componentId:"sc-1fijeg5-15"})(["width:100%;background-color:white;height:400px;"]);const CategoryName=styled_components_esm["default"].span.withConfig({displayName:"film_lead_project__CategoryName",componentId:"sc-1fijeg5-16"})(["text-transform:capitalize;"]);const RelatedProjectsCon=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__RelatedProjectsCon",componentId:"sc-1fijeg5-17"})(["margin-top:100px;margin-bottom:100px;"]);const RelatedProjectsTitle=styled_components_esm["default"].p.withConfig({displayName:"film_lead_project__RelatedProjectsTitle",componentId:"sc-1fijeg5-18"})(["margin-bottom:10px;"]);const RelatedProjectsProjectCon=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__RelatedProjectsProjectCon",componentId:"sc-1fijeg5-19"})(["grid-column:span 4;"]);const RelatedProjectProjectTitle=styled_components_esm["default"].p.withConfig({displayName:"film_lead_project__RelatedProjectProjectTitle",componentId:"sc-1fijeg5-20"})(["color:grey;margin-top:10px;"]);const RelatedProjectsImg=styled_components_esm["default"].div.withConfig({displayName:"film_lead_project__RelatedProjectsImg",componentId:"sc-1fijeg5-21"})(["width:100%;"]);const FilmLeadProject=({data})=>{// test
let isPageWide=(0,media_query/* useMediaQuery */.a)("(min-width: 667px)");const LogoConRef=(0,index_js_.useRef)(null);const LogoNav=scrollPosition=>{if(isPageWide){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(LogoGridCon,null,/*#__PURE__*/index_js_default().createElement(Grid2B,null,/*#__PURE__*/index_js_default().createElement(Col1,null,/*#__PURE__*/index_js_default().createElement(LogoCon,{ref:LogoConRef},/*#__PURE__*/index_js_default().createElement((WhiteLogo_default()),null))),/*#__PURE__*/index_js_default().createElement(Col2,null,/*#__PURE__*/index_js_default().createElement(NavCon1,null,/*#__PURE__*/index_js_default().createElement("p",null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement("span",{className:"selected"},"Select,")," "),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/project_index"},/*#__PURE__*/index_js_default().createElement("span",{className:"navItem"},"Index,")," "),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/about17"},/*#__PURE__*/index_js_default().createElement("span",{className:"navItem"},"Office"))))))));}if(!isPageWide){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(LogoGridCon,null,/*#__PURE__*/index_js_default().createElement(NavCon1,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement("p",{className:"selected"},"Selected")),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/project_index"},/*#__PURE__*/index_js_default().createElement("p",null,/*#__PURE__*/index_js_default().createElement("span",{className:"navItem"},"Index")))),/*#__PURE__*/index_js_default().createElement(NavCon2,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/about17"},/*#__PURE__*/index_js_default().createElement("p",null,"Office")),/*#__PURE__*/index_js_default().createElement("p",null,"Instagram"))));}};const work=data.prismicFilmLeadProject.data.body1.map((content,index)=>{if(content.slice_type=="video_with_play_button"){// console.log(content);
// console.log(content.primary.video_thumbnail.fluid.srcSetWebp);
return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(VideoProjectPage,{srcProps:content.primary.video_with_play_button.url,posterProps:content.primary.video_thumbnail,img:content.primary.video_thumbnail}));}if(content.slice_type=="text"){return/*#__PURE__*/index_js_default().createElement(BodyTextCon,null,/*#__PURE__*/index_js_default().createElement("p",null,content.primary.text.text));}});var RelatedProjects=data.prismicFilmLeadProject.data.related_projects_group.map((content,index)=>{if(content.related_projects.document.type=="project"){console.log("square project");// const project = content.related_projects.document.data.map(
//   (content3, index) => {
//     return (
//       //test
//       { content3 }
//     );
//   }
// );
const image=(0,gatsby_image_module/* getImage */.gJ)(content.related_projects.document.data.index_preview_img);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(RelatedProjectsProjectCon,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:`/${content.related_projects.document.uid}`},/*#__PURE__*/index_js_default().createElement(RelatedProjectsImg,null,/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* GatsbyImage */.HN,{image:image})),/*#__PURE__*/index_js_default().createElement(RelatedProjectProjectTitle,null,content.related_projects.document.data.project_title.text))));}else if(content.related_projects.document.type=="film_lead_project"){console.log("film project");const image=(0,gatsby_image_module/* getImage */.gJ)(content.related_projects.document.data.index_preview_img);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(RelatedProjectsProjectCon,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:`/${content.related_projects.document.uid}`},/*#__PURE__*/index_js_default().createElement(RelatedProjectsImg,null,/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* GatsbyImage */.HN,{image:image})),/*#__PURE__*/index_js_default().createElement(RelatedProjectProjectTitle,null,content.related_projects.document.data.project_title.text))));}// return (
//   // test
//   // test
//   { content }
// );
});const RelatedProjects2=()=>{return/*#__PURE__*/index_js_default().createElement(Grid8,null,RelatedProjects[0],RelatedProjects[1]);};return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(GlobalStyle,null),/*#__PURE__*/index_js_default().createElement(nav/* NavGrid */.F,null),/*#__PURE__*/index_js_default().createElement(PageConCon,null,/*#__PURE__*/index_js_default().createElement(PageCon,null,/*#__PURE__*/index_js_default().createElement(Table,null,/*#__PURE__*/index_js_default().createElement(TableRow,null,/*#__PURE__*/index_js_default().createElement(Grid8,null,/*#__PURE__*/index_js_default().createElement(TableTitle,null,/*#__PURE__*/index_js_default().createElement("p",null,"Project")),/*#__PURE__*/index_js_default().createElement(TableContent,null,/*#__PURE__*/index_js_default().createElement("p",null,data.prismicFilmLeadProject.data.project_title.text)))),/*#__PURE__*/index_js_default().createElement(TableRow,null,/*#__PURE__*/index_js_default().createElement(Grid8,null,/*#__PURE__*/index_js_default().createElement(TableTitle,null,/*#__PURE__*/index_js_default().createElement("p",null,"Location")),/*#__PURE__*/index_js_default().createElement(TableContent,null,/*#__PURE__*/index_js_default().createElement("p",null,data.prismicFilmLeadProject.data.location.text)))),/*#__PURE__*/index_js_default().createElement(TableRow,null,/*#__PURE__*/index_js_default().createElement(Grid8,null,/*#__PURE__*/index_js_default().createElement(TableTitle,null,/*#__PURE__*/index_js_default().createElement("p",null,"Categories")),/*#__PURE__*/index_js_default().createElement(TableContent,null,/*#__PURE__*/index_js_default().createElement("p",null,data.prismicFilmLeadProject.data.categories.map((category,index)=>{return/*#__PURE__*/index_js_default().createElement(CategoryName,{key:index},(index?", ":"")+category.category.slug);}))))),/*#__PURE__*/index_js_default().createElement(TableRow,null,/*#__PURE__*/index_js_default().createElement(Grid8,null,/*#__PURE__*/index_js_default().createElement(TableTitle,null,/*#__PURE__*/index_js_default().createElement("p",null,"Client")),/*#__PURE__*/index_js_default().createElement(TableContent,null,/*#__PURE__*/index_js_default().createElement("p",null," ",data.prismicFilmLeadProject.data.client.text)))),/*#__PURE__*/index_js_default().createElement(TableRow,null,/*#__PURE__*/index_js_default().createElement(Grid8,null,/*#__PURE__*/index_js_default().createElement(TableTitle,null,/*#__PURE__*/index_js_default().createElement("p",null,"Team")),/*#__PURE__*/index_js_default().createElement(TableContent,null,/*#__PURE__*/index_js_default().createElement("p",null,data.prismicFilmLeadProject.data.team.text))))),work,/*#__PURE__*/index_js_default().createElement(RelatedProjectsCon,null,/*#__PURE__*/index_js_default().createElement(RelatedProjectsTitle,null,"Related Projects"),/*#__PURE__*/index_js_default().createElement(RelatedProjects2,null)))));};/* harmony default export */ const film_lead_project = ((0,withPrismicPreview/* withPrismicPreview */.O)(FilmLeadProject));const query="1588410685";

/***/ }),

/***/ 664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(6400);

function WhiteLogo (props) {
    return React.createElement("svg",props,[React.createElement("defs",{"key":0},React.createElement("style",null,".cls-1{fill:#fff;}")),React.createElement("path",{"className":"cls-1","d":"m-.62,1h254.56v52.03h-98.04v254.13h-58.48V53.03H-.62V1Z","key":1}),React.createElement("path",{"className":"cls-1","d":"m382.51,80.12c24.08,0,43.07,6.95,56.98,20.85,13.9,13.91,20.85,33.61,20.85,59.12v147.06h-54.18v-138.03c0-28.09-13.91-42.14-41.71-42.14-13.76,0-25.44,4.94-35.04,14.83-9.61,9.89-14.41,23.58-14.41,41.07v124.27h-54.18V1h54.18v113.95c16.91-23.22,39.41-34.83,67.51-34.83Z","key":2}),React.createElement("path",{"className":"cls-1","d":"m687.81,200.09v12.9h-165.98c2,18.92,7.96,33.18,17.85,42.79,9.89,9.61,23.15,14.4,39.77,14.4,24.65,0,41.56-10.6,50.74-31.82h52.03c-5.74,22.65-17.78,40.63-36.12,53.96-18.35,13.33-40.71,20-67.08,20-32.97,0-59.63-10.6-79.98-31.82-20.36-21.21-30.53-49.3-30.53-84.28s10.03-63.06,30.1-84.28c20.35-21.21,46.87-31.82,79.55-31.82s60.2,11.04,79.98,33.11c19.78,22.08,29.67,51.03,29.67,86.86Zm-110.08-77.83c-31.82,0-50.31,17.63-55.47,52.89h111.37c-2.3-16.34-8.32-29.24-18.06-38.7-9.75-9.46-22.36-14.19-37.84-14.19Z","key":3}),React.createElement("path",{"className":"cls-1","d":"m890.34,280.5c-20.64,21.22-47.88,31.82-81.7,31.82s-61.06-10.6-81.7-31.82c-20.93-20.92-31.39-49.02-31.39-84.28s10.46-63.35,31.39-84.28c20.64-21.21,47.87-31.82,81.7-31.82s61.06,10.47,81.7,31.39c20.64,20.93,30.96,49.17,30.96,84.71s-10.32,63.07-30.96,84.28Zm-124.05-31.39c10.17,12.33,24.29,18.49,42.35,18.49s32.18-6.24,42.36-18.71c10.17-12.47,15.26-30.03,15.26-52.68s-5.09-40.2-15.26-52.67c-10.18-12.47-24.29-18.7-42.36-18.7s-32.18,6.17-42.35,18.49c-10.18,12.33-15.27,29.96-15.27,52.89s5.09,40.57,15.27,52.89Z","key":4}),React.createElement("path",{"className":"cls-1","d":"m1233.04,1v52.03h-158.24v72.24h144.05v49.88h-144.05v132.01h-58.05V1h216.29Z","key":5}),React.createElement("path",{"className":"cls-1","d":"m1423.96,280.5c-20.64,21.22-47.88,31.82-81.7,31.82s-61.06-10.6-81.7-31.82c-20.93-20.92-31.39-49.02-31.39-84.28s10.46-63.35,31.39-84.28c20.64-21.21,47.87-31.82,81.7-31.82s61.06,10.47,81.7,31.39c20.64,20.93,30.96,49.17,30.96,84.71s-10.32,63.07-30.96,84.28Zm-124.05-31.39c10.17,12.33,24.29,18.49,42.35,18.49s32.18-6.24,42.36-18.71c10.17-12.47,15.26-30.03,15.26-52.68s-5.09-40.2-15.26-52.67c-10.18-12.47-24.29-18.7-42.36-18.7s-32.18,6.17-42.35,18.49c-10.18,12.33-15.27,29.96-15.27,52.89s5.09,40.57,15.27,52.89Z","key":6}),React.createElement("path",{"className":"cls-1","d":"m1581.77,81.84c4.87,0,9.31.29,13.33.86v49.88h-13.76c-20.64,0-36.48,5.23-47.51,15.7-11.04,10.47-16.55,25.87-16.55,46.22v112.66h-54.18V85.28h52.46v39.56c12.32-28.66,34.4-43,66.22-43Z","key":7}),React.createElement("path",{"className":"cls-1","d":"m1755.49,114.09V1h54.18v306.16h-52.46v-30.96c-16.34,24.08-39.71,36.12-70.09,36.12s-54.9-10.6-72.67-31.82c-18.06-21.21-27.09-49.3-27.09-84.28s9.03-63.78,27.09-84.71c17.48-20.92,41.71-31.39,72.67-31.39s52.6,11.33,68.37,33.97Zm-112.66,83.85c0,22.94,5.01,40.28,15.05,52.03,10.03,11.76,23.93,17.63,41.71,17.63s31.82-6.16,42.14-18.49c10.03-12.32,15.05-29.95,15.05-52.89s-5.02-40.56-15.05-52.89c-10.04-12.32-24.08-18.49-42.14-18.49s-31.32,6.45-41.49,19.35c-10.18,12.9-15.27,30.82-15.27,53.75Z","key":8})]);
}

WhiteLogo.defaultProps = {"id":"Layer_1","viewBox":"0 0 1810 322.5"};

module.exports = WhiteLogo;

WhiteLogo.default = WhiteLogo;


/***/ }),

/***/ 6186:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/e6d25dfb351a14bc3293f6781ae60ac1/d8fb1/play.png","srcSet":"/static/e6d25dfb351a14bc3293f6781ae60ac1/41a0e/play.png 19w,\\n/static/e6d25dfb351a14bc3293f6781ae60ac1/feb95/play.png 38w,\\n/static/e6d25dfb351a14bc3293f6781ae60ac1/d8fb1/play.png 75w","sizes":"(min-width: 75px) 75px, 100vw"},"sources":[{"srcSet":"/static/e6d25dfb351a14bc3293f6781ae60ac1/7e3aa/play.webp 19w,\\n/static/e6d25dfb351a14bc3293f6781ae60ac1/4a448/play.webp 38w,\\n/static/e6d25dfb351a14bc3293f6781ae60ac1/7e57b/play.webp 75w","type":"image/webp","sizes":"(min-width: 75px) 75px, 100vw"}]},"width":75,"height":88}');

/***/ }),

/***/ 4230:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/91ab03a9dc193bcda8775456e507d55c/e86db/pause.png","srcSet":"/static/91ab03a9dc193bcda8775456e507d55c/37755/pause.png 24w,\\n/static/91ab03a9dc193bcda8775456e507d55c/2eb73/pause.png 47w,\\n/static/91ab03a9dc193bcda8775456e507d55c/e86db/pause.png 94w","sizes":"(min-width: 94px) 94px, 100vw"},"sources":[{"srcSet":"/static/91ab03a9dc193bcda8775456e507d55c/d256c/pause.webp 24w,\\n/static/91ab03a9dc193bcda8775456e507d55c/d53f8/pause.webp 47w,\\n/static/91ab03a9dc193bcda8775456e507d55c/4c001/pause.webp 94w","type":"image/webp","sizes":"(min-width: 94px) 94px, 100vw"}]},"width":94,"height":101}');

/***/ })

};
;
//# sourceMappingURL=component---src-templates-film-lead-project-js.js.map