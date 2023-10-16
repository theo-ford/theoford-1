exports.id = 769;
exports.ids = [769];
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

/***/ 2434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ AutoPlayVideo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1650);
/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2431);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3040);
const AutoplayVideoCon=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"autoplay-video__AutoplayVideoCon",componentId:"sc-13dfdxw-0"})(["position:relative;width:calc(100%);@media (max-width:666px){width:100%;}"]);const AutoplayVideoImg=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"autoplay-video__AutoplayVideoImg",componentId:"sc-13dfdxw-1"})(["width:100%;height:100%;"]);const AutoplayVideoVideo=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].video.withConfig({displayName:"autoplay-video__AutoplayVideoVideo",componentId:"sc-13dfdxw-2"})(["width:100%;height:100%;"]);const AutoplayVideoImgCon=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"autoplay-video__AutoplayVideoImgCon",componentId:"sc-13dfdxw-3"})([""]);const breatheAnimation=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes)(["0%{opacity:0}50%{opacity:1}100%{opacity:0}"]);const AutoplayVideoTextCon=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"autoplay-video__AutoplayVideoTextCon",componentId:"sc-13dfdxw-4"})(["position:absolute;z-index:10000;width:100%;height:100%;display:grid;align-items:center;justify-items:center;p{color:black;padding-right:10px;padding-top:10px;padding-bottom:10px;padding-left:10px;background-color:white;margin-top:-1px;animation-name:",";animation-duration:2s;animation-iteration-count:infinite;}"],breatheAnimation);const AutoPlayVideo=({srcProps,posterProps,changedSlide})=>{// https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks
// https://frontend-digest.com/responsive-and-progressive-video-loading-in-react-e8753315af51
const autoplayVideoRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);const isOnScreen=(0,_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__/* .useOnScreen */ .R)(autoplayVideoRef);const{0:videoSrcState,1:setVideoSrcState}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");const[isVideoLoaded,setIsVideoLoaded]=react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);// console.log("autoplay Video Ref");
// console.log(autoplayVideoRef);
const onLoadedData=()=>{setIsVideoLoaded(true);};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(isOnScreen==true){// console.log(srcProps);
// console.log("on screen");
setVideoSrcState(srcProps);autoplayVideoRef.current.load();autoplayVideoRef.current.play();}else if(isOnScreen===false){// console.log(srcProps);
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
setIsVideoLoaded(false);setVideoSrcState("");}},[isOnScreen]);const getPosterImage=(0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__/* .getImage */ .gJ)(posterProps);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutoplayVideoCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutoplayVideoImgCon,{style:{opacity:isVideoLoaded?0:1,position:isVideoLoaded?"absolute":"relative"// opacity: 1,
// position: "relative",
}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutoplayVideoTextCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Video Loading")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutoplayVideoImg,{srcSet:posterProps,style:{opacity:isVideoLoaded?0:1,position:isVideoLoaded?"absolute":"relative"// opacity: 1,
// position: "relative",
}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__/* .GatsbyImage */ .HN,{image:getPosterImage}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutoplayVideoVideo,{playsInline:true,autoPlay:true,muted:true,loop:true,ref:autoplayVideoRef// onCanPlayThrough={onLoadedData}
,onLoadedData:onLoadedData,style:{opacity:isVideoLoaded?1:0,position:isVideoLoaded?"relative":"absolute"// display: isOnScreen ? "block" : "none",
// opacity: 0,
// position: "absolute",
}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source",{type:"video/mp4",src:videoSrcState}))));};// export function autoplayVideo(query) {
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

/***/ 2093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6400);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7076);
/* harmony import */ var gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9656);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4593);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1650);
/* harmony import */ var _components_tf_media_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7000);
/* harmony import */ var _assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(664);
/* harmony import */ var _assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_tf_autoplay_video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2434);
/* harmony import */ var _components_tf_nav_grid_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(753);
/* harmony import */ var _components_tf_page_load__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5329);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3040);
const LogoGridCon=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__LogoGridCon",componentId:"sc-13te2yc-0"})(["width:calc(100% - 25px);margin-left:12.5px;position:sticky;top:12.5px;z-index:300000;mix-blend-mode:exclusion;@media (max-width:666px){display:grid;grid-template-columns:1fr 1fr;grid-column-gap:10px;width:calc(100% - 20px);margin-left:10px;}"]);const Grid2B=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__Grid2B",componentId:"sc-13te2yc-1"})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr;grid-column-gap:12.5px;grid-row-gap:0;width:calc(100% - 20px);z-index:20000;"]);const Col1=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__Col1",componentId:"sc-13te2yc-2"})(["grid-column:span 1;"]);const Col2=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__Col2",componentId:"sc-13te2yc-3"})(["grid-column:span 1;"]);const LogoCon=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__LogoCon",componentId:"sc-13te2yc-4"})(["top:12.5px;mix-blend-mode:exclusion;width:calc(50% - 6.25px);display:inline-block;vertical-align:top;transition:all 2s;vertical-align:top;.shrink{width:calc(37.5% - 6.25px);}@media (max-width:666px){width:calc(75% - 6.25px);margin-top:14vh;margin-left:10px;.shrink{width:calc(75% - 6.25px);}}"]);const NavCon1=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__NavCon1",componentId:"sc-13te2yc-5"})(["display:inline-block;position:sticky;top:12.5px;z-index:300000;margin-left:11px;margin-top:-3px;vertical-align:top;mix-blend-mode:exclusion;p{color:#878787;}span.selected{color:white;}span.navItem{}@media (max-width:666px){margin-left:0px;grid-column:span 1;}"]);const NavCon2=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__NavCon2",componentId:"sc-13te2yc-6"})(["display:inline-block;position:sticky;top:12.5px;margin-left:12.5px;margin-top:-3px;mix-blend-mode:exclusion;z-index:300000;p{color:#878787;}p.selected{color:white;}@media (max-width:666px){margin-left:0px;grid-column:span 1;}"]);const Grid8=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__Grid8",componentId:"sc-13te2yc-7"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-column-gap:12.5px;grid-row-gap:0;width:calc(100%);"]);const Table=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__Table",componentId:"sc-13te2yc-8"})(["margin-bottom:20px;border-bottom:1px solid black;"]);const TableRow=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__TableRow",componentId:"sc-13te2yc-9"})(["border-top:1px solid black;padding-top:5px;padding-bottom:5px;"]);const TableTitle=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__TableTitle",componentId:"sc-13te2yc-10"})(["grid-column:span 2;p{font-weight:bold;}"]);const TableContent=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__TableContent",componentId:"sc-13te2yc-11"})(["grid-column:span 6;"]);const PageConCon=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__PageConCon",componentId:"sc-13te2yc-12"})(["width:calc(100% - 25px);margin:12.5px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr;grid-gap:12.5px;"]);const PageCon=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__PageCon",componentId:"sc-13te2yc-13"})(["grid-column:5 / span 8;margin-top:20vh;@media (max-width:666px){grid-column:span 16;margin-top:10vh;}"]);const BodyTextCon=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__BodyTextCon",componentId:"sc-13te2yc-14"})(["margin-bottom:20px;p{line-height:125%;}@media (max-width:666px){}"]);const SquareImage=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__SquareImage",componentId:"sc-13te2yc-15"})(["width:calc(100%);margin-bottom:12.5px;@media (max-width:666px){width:100%;margin-bottom:10px;}"]);const ProjectPageAutoPlayVideoCon=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__ProjectPageAutoPlayVideoCon",componentId:"sc-13te2yc-16"})(["margin-bottom:12.5px;@media (max-width:666px){margin-bottom:10px;}"]);const CategoryName=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].span.withConfig({displayName:"project__CategoryName",componentId:"sc-13te2yc-17"})(["text-transform:capitalize;"]);const RelatedProjectsCon=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__RelatedProjectsCon",componentId:"sc-13te2yc-18"})(["margin-top:100px;margin-bottom:100px;"]);const RelatedProjectsTitle=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({displayName:"project__RelatedProjectsTitle",componentId:"sc-13te2yc-19"})(["margin-bottom:10px;"]);const RelatedProjectsProjectCon=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__RelatedProjectsProjectCon",componentId:"sc-13te2yc-20"})(["grid-column:span 4;"]);const RelatedProjectProjectTitle=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].p.withConfig({displayName:"project__RelatedProjectProjectTitle",componentId:"sc-13te2yc-21"})(["color:grey;margin-top:10px;"]);const RelatedProjectsImg=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"project__RelatedProjectsImg",componentId:"sc-13te2yc-22"})(["width:100%;"]);const Project=({data})=>{let isPageWide=(0,_components_tf_media_query__WEBPACK_IMPORTED_MODULE_3__/* .useMediaQuery */ .a)("(min-width: 667px)");// PageLoad;
const LogoConRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);// const LogoNav = scrollPosition => {
//   if (isPageWide) {
//     return (
//       <>
//         <LogoGridCon>
//           <Grid2B>
//             <Col1>
//               <LogoCon ref={LogoConRef}>
//                 <Icon />
//               </LogoCon>
//             </Col1>
//             <Col2>
//               <NavCon1>
//                 <p>
//                   <Link to="/">
//                     <span className="selected">Select,</span>{" "}
//                   </Link>
//                   <Link to="/project_index">
//                     <span className="navItem">Index,</span>{" "}
//                   </Link>
//                   <Link to="/about17">
//                     <span className="navItem">Office</span>
//                   </Link>
//                   {/* <br></br>Instagram, Twitter */}
//                 </p>
//               </NavCon1>
//             </Col2>
//           </Grid2B>
//         </LogoGridCon>
//       </>
//     );
//   }
//   if (!isPageWide) {
//     return (
//       <>
//         <LogoGridCon>
//           <NavCon1>
//             <Link to="/">
//               <p className="selected">Selected</p>
//             </Link>
//             <Link to="/project_index">
//               <p>
//                 <span className="navItem">Index</span>{" "}
//               </p>
//             </Link>
//           </NavCon1>
//           <NavCon2>
//             <Link to="/about17">
//               <p>Office</p>
//             </Link>
//             <p>Instagram</p>
//           </NavCon2>
//         </LogoGridCon>
//         {/* <LogoCon ref={LogoConRef}>
//           <Icon />
//         </LogoCon> */}
//       </>
//     );
//   }
// };
const ImgComponent=({srcProps,videoLoad})=>{// console.log(srcProps);
var x=srcProps;// console.log("x");
// console.log(x);
var y=x.replace(/\?auto=&w=(800|1400|1600|2400|3600)&h=(800|1400|1600|2400|3600)/g,"");// console.log("y");
// console.log(y);
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SquareImage,{srcSet:y});//return <SquareImage src={srcProps} />;
};const projectBody=data.prismicProject.data.body1.map((content,index)=>{if(content.slice_type=="image"){const image=(0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_9__/* .getImage */ .gJ)(content.primary.image);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SquareImage,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_9__/* .GatsbyImage */ .HN,{image:image})));}if(content.slice_type=="text"){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BodyTextCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,content.primary.text.text)));}if(content.slice_type=="video"){if(isPageWide){const posterImgProps=content.primary.index_image;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectPageAutoPlayVideoCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_autoplay_video__WEBPACK_IMPORTED_MODULE_5__/* .AutoPlayVideo */ .$,{srcProps:content.primary.video.url,posterProps:posterImgProps}));}else{const posterImgProps=content.primary.index_image;console.log("SMALL VIDEO");console.log(content.primary.sml_video.url);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectPageAutoPlayVideoCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_autoplay_video__WEBPACK_IMPORTED_MODULE_5__/* .AutoPlayVideo */ .$,{srcProps:content.primary.sml_video.url,posterProps:posterImgProps}));}}});// var testArray = ["a", "b", "c", "d"];
// var testArrayMap = testArray.map((content, index) => {
//   return content;
// });
// console.log(testArrayMap[1]);
var RelatedProjects=data.prismicProject.data.related_projects_group.map((content,index)=>{if(content.related_projects.document.type=="project"){console.log("square project");// const project = content.related_projects.document.data.map(
//   (content3, index) => {
//     return (
//       //test
//       { content3 }
//     );
//   }
// );
const image=(0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_9__/* .getImage */ .gJ)(content.related_projects.document.data.index_preview_img);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsProjectCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:`/${content.related_projects.document.uid}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsImg,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_9__/* .GatsbyImage */ .HN,{image:image})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectProjectTitle,null,content.related_projects.document.data.project_title.text))));}else if(content.related_projects.document.type=="film_lead_project"){const image=(0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_9__/* .getImage */ .gJ)(content.related_projects.document.data.index_preview_img);console.log("film project");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsProjectCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:`/${content.related_projects.document.uid}`},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsImg,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_9__/* .GatsbyImage */ .HN,{image:image})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectProjectTitle,null,content.related_projects.document.data.project_title.text))));}// return (
//   // test
//   // test
//   { content }
// );
});const RelatedProjects2=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8,null,RelatedProjects[0],RelatedProjects[1]);};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_nav_grid_nav__WEBPACK_IMPORTED_MODULE_6__/* .NavGrid */ .F,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageConCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Table,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableRow,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableTitle,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Project")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableContent,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,data.prismicProject.data.project_title.text)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableRow,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableTitle,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Location")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableContent,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,data.prismicProject.data.location.text)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableRow,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableTitle,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Category")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableContent,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,data.prismicProject.data.categories.map((category,index)=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CategoryName,{key:index},(index?", ":"")+category.category.slug);}))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableRow,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableTitle,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Client")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableContent,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null," ",data.prismicProject.data.client.text)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableRow,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableTitle,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,"Team")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableContent,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",null,data.prismicProject.data.team.text))))),projectBody,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsCon,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsTitle,null,"Related Projects"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjects2,null)))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_10__/* .withPrismicPreview */ .O)(Project));const query="1782781380";

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


/***/ })

};
;
//# sourceMappingURL=component---src-templates-project-js.js.map