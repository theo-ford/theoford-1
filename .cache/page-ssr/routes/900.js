exports.id = 900;
exports.ids = [900];
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

/***/ 6900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/theoford-1/node_modules/react/index.js"
var index_js_ = __webpack_require__(6400);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(7076);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(1650);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(3040);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js + 1 modules
var withPrismicPreview = __webpack_require__(9656);
// EXTERNAL MODULE: ./node_modules/react-helmet/es/Helmet.js
var Helmet = __webpack_require__(4593);
// EXTERNAL MODULE: ./src/components/tf/media-query.js
var media_query = __webpack_require__(7000);
// EXTERNAL MODULE: ./node_modules/react-slick/lib/index.js
var lib = __webpack_require__(6066);
// EXTERNAL MODULE: ./src/components/hooks/useOnScreen.js
var useOnScreen = __webpack_require__(2431);
// EXTERNAL MODULE: ./assets/WhiteLogo.svg
var WhiteLogo = __webpack_require__(664);
var WhiteLogo_default = /*#__PURE__*/__webpack_require__.n(WhiteLogo);
// EXTERNAL MODULE: ./src/components/tf/autoplay-video.js
var autoplay_video = __webpack_require__(2434);
// EXTERNAL MODULE: ./src/components/tf/page-load.js
var page_load = __webpack_require__(5329);
;// CONCATENATED MODULE: ./src/components/tf/index/intro.js
const IntroCon=styled_components_esm["default"].div.withConfig({displayName:"intro__IntroCon",componentId:"sc-1uxwoz8-0"})(["margin-top:10px;span.grey{color:#878787;}@media (max-width:666px){display:none;}"]);const Grid16=styled_components_esm["default"].div.withConfig({displayName:"intro__Grid16",componentId:"sc-1uxwoz8-1"})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-column-gap:12.5px;margin-left:12.5px;grid-row-gap:0;width:calc(100% - 25px);z-index:20000;"]);const AboutCon=styled_components_esm["default"].div.withConfig({displayName:"intro__AboutCon",componentId:"sc-1uxwoz8-2"})(["grid-column:span 6;"]);const LocationCon=styled_components_esm["default"].div.withConfig({displayName:"intro__LocationCon",componentId:"sc-1uxwoz8-3"})(["grid-column:9 / span 5;span.grey{color:#878787;}"]);const ContactCon=styled_components_esm["default"].div.withConfig({displayName:"intro__ContactCon",componentId:"sc-1uxwoz8-4"})(["grid-column:15 / span 2;"]);const Intro=()=>{return/*#__PURE__*/index_js_default().createElement(IntroCon,null,/*#__PURE__*/index_js_default().createElement(Grid16,null,/*#__PURE__*/index_js_default().createElement(AboutCon,null,/*#__PURE__*/index_js_default().createElement("p",null,"The design office of Theo Ford. Specialising in\xA0graphic design, art direction, moving-image and web development. Recent commisions and collaborations include identites for"," ",/*#__PURE__*/index_js_default().createElement("span",{className:"grey"},"Tesla"),", adverts for"," ",/*#__PURE__*/index_js_default().createElement("span",{className:"grey"},"American Apparel"),", and printed matter for ",/*#__PURE__*/index_js_default().createElement("span",{className:"grey"},"COS"),".",/*#__PURE__*/index_js_default().createElement("br",null))),/*#__PURE__*/index_js_default().createElement(LocationCon,null,/*#__PURE__*/index_js_default().createElement("p",null,"Current Location: ",/*#__PURE__*/index_js_default().createElement("span",{className:"grey"},"New York,")," London,",/*#__PURE__*/index_js_default().createElement("span",{className:"grey"}," ","Los Angeles, Beijing, Stockholm, Gothenburg, Glasgow, Falmouth, Philadelphia.")," ","2023/03/23 21:32.")),/*#__PURE__*/index_js_default().createElement(ContactCon,null,/*#__PURE__*/index_js_default().createElement("p",{class:""},/*#__PURE__*/index_js_default().createElement("span",null,"info@theoford.com",/*#__PURE__*/index_js_default().createElement("br",null),"+44 7599 759 529",/*#__PURE__*/index_js_default().createElement("br",null),"@tf.public")))));};
;// CONCATENATED MODULE: ./src/components/tf/index/project-info.js
/* - - - - - PROJECT INFO - - - - - */const project_info_Grid16=styled_components_esm["default"].div.withConfig({displayName:"project-info__Grid16",componentId:"sc-18kunds-0"})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-column-gap:12.5px;margin-left:12.5px;grid-row-gap:0;width:calc(100% - 25px);z-index:20000;"]);const Grid2=styled_components_esm["default"].div.withConfig({displayName:"project-info__Grid2",componentId:"sc-18kunds-1"})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr;grid-column-gap:10px;margin-left:10px;grid-row-gap:0;width:calc(100% - 20px);z-index:20000;"]);const ProjectInfoCon=styled_components_esm["default"].div.withConfig({displayName:"project-info__ProjectInfoCon",componentId:"sc-18kunds-2"})(["height:80px;margin-top:8px;@media (max-width:666px){margin-top:4px;}"]);const ProjectTitleCon=styled_components_esm["default"].div.withConfig({displayName:"project-info__ProjectTitleCon",componentId:"sc-18kunds-3"})(["grid-column:span 4;@media (max-width:666px){grid-column:span 1;a{color:#d4d4d4;}}"]);const ProjectLocationYearCon=styled_components_esm["default"].div.withConfig({displayName:"project-info__ProjectLocationYearCon",componentId:"sc-18kunds-4"})(["grid-column:span 4;@media (max-width:666px){grid-column:span 1;}"]);const ProjectIndexAbout=styled_components_esm["default"].div.withConfig({displayName:"project-info__ProjectIndexAbout",componentId:"sc-18kunds-5"})(["grid-column:span 4;p{font-size:12px;}@media (max-width:666px){display:none;}"]);const ProjectLink=styled_components_esm["default"].div.withConfig({displayName:"project-info__ProjectLink",componentId:"sc-18kunds-6"})(["grid-column:15 / span 2;a{color:#d4d4d4;}@media (max-width:666px){display:none;}"]);const ProjectInfo=({title,year,location,uid,homepage_intro,client})=>{let isPageWide=useMediaQuery("(min-width: 667px)");if(isPageWide){return/*#__PURE__*/React.createElement(ProjectInfoCon,null,/*#__PURE__*/React.createElement(project_info_Grid16,null,/*#__PURE__*/React.createElement(ProjectTitleCon,null,/*#__PURE__*/React.createElement(Link,{to:uid},title)),/*#__PURE__*/React.createElement(ProjectLocationYearCon,null,/*#__PURE__*/React.createElement("p",null,location),/*#__PURE__*/React.createElement("p",null,year)),/*#__PURE__*/React.createElement(ProjectIndexAbout,null,/*#__PURE__*/React.createElement("p",null,homepage_intro)),/*#__PURE__*/React.createElement(ProjectLink,null,/*#__PURE__*/React.createElement(Link,{to:uid},"More Info"))));}else{return/*#__PURE__*/React.createElement(ProjectInfoCon,null,/*#__PURE__*/React.createElement(Grid2,null,/*#__PURE__*/React.createElement(ProjectTitleCon,null,/*#__PURE__*/React.createElement(Link,{to:uid},title)),/*#__PURE__*/React.createElement(ProjectLocationYearCon,null,/*#__PURE__*/React.createElement("p",null,location),/*#__PURE__*/React.createElement("p",null,year))));}};
;// CONCATENATED MODULE: ./src/components/tf/index/project-info2.js
/* - - - - - PROJECT INFO - - - - - */const project_info2_Grid16=styled_components_esm["default"].div.withConfig({displayName:"project-info2__Grid16",componentId:"sc-6mnadd-0"})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-column-gap:12.5px;margin-left:12.5px;grid-row-gap:0;width:calc(100% - 25px);z-index:20000;"]);const project_info2_Grid2=styled_components_esm["default"].div.withConfig({displayName:"project-info2__Grid2",componentId:"sc-6mnadd-1"})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr;grid-column-gap:10px;margin-left:10px;grid-row-gap:0;width:calc(100% - 20px);z-index:20000;"]);const project_info2_ProjectInfoCon=styled_components_esm["default"].div.withConfig({displayName:"project-info2__ProjectInfoCon",componentId:"sc-6mnadd-2"})(["height:80px;margin-top:8px;@media (max-width:666px){margin-top:4px;}"]);const project_info2_ProjectTitleCon=styled_components_esm["default"].div.withConfig({displayName:"project-info2__ProjectTitleCon",componentId:"sc-6mnadd-3"})(["grid-column:span 4;@media (max-width:666px){grid-column:span 1;a{color:#d4d4d4;}}"]);const project_info2_ProjectLocationYearCon=styled_components_esm["default"].div.withConfig({displayName:"project-info2__ProjectLocationYearCon",componentId:"sc-6mnadd-4"})(["grid-column:span 4;@media (max-width:666px){grid-column:span 1;}"]);const project_info2_ProjectIndexAbout=styled_components_esm["default"].div.withConfig({displayName:"project-info2__ProjectIndexAbout",componentId:"sc-6mnadd-5"})(["grid-column:span 4;p{font-size:12px;}@media (max-width:666px){display:none;}"]);const project_info2_ProjectLink=styled_components_esm["default"].div.withConfig({displayName:"project-info2__ProjectLink",componentId:"sc-6mnadd-6"})(["grid-column:15 / span 2;a{color:#d4d4d4;}@media (max-width:666px){display:none;}"]);const ProjectInfo2=({data2,uid})=>{let isPageWide=(0,media_query/* useMediaQuery */.a)("(min-width: 667px)");if(isPageWide){return/*#__PURE__*/index_js_default().createElement(project_info2_ProjectInfoCon,null,/*#__PURE__*/index_js_default().createElement(project_info2_Grid16,null,/*#__PURE__*/index_js_default().createElement(project_info2_ProjectTitleCon,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:uid},data2.project_title.text)),/*#__PURE__*/index_js_default().createElement(project_info2_ProjectLocationYearCon,null,/*#__PURE__*/index_js_default().createElement("p",null,data2.location.text),/*#__PURE__*/index_js_default().createElement("p",null,data2.year.text)),/*#__PURE__*/index_js_default().createElement(project_info2_ProjectIndexAbout,null,/*#__PURE__*/index_js_default().createElement("p",null,data2.homepage_intro.text)),/*#__PURE__*/index_js_default().createElement(project_info2_ProjectLink,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:uid},"More Info"))));}else{return/*#__PURE__*/index_js_default().createElement(project_info2_ProjectInfoCon,null,/*#__PURE__*/index_js_default().createElement(project_info2_Grid2,null,/*#__PURE__*/index_js_default().createElement(project_info2_ProjectTitleCon,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:uid},data2.project_title.text)),/*#__PURE__*/index_js_default().createElement(project_info2_ProjectLocationYearCon,null,/*#__PURE__*/index_js_default().createElement("p",null,data2.location.text),/*#__PURE__*/index_js_default().createElement("p",null,data2.year.text))));}};
;// CONCATENATED MODULE: ./src/components/tf/img-component.js
const SquareImage=styled_components_esm["default"].img.withConfig({displayName:"img-component__SquareImage",componentId:"b25yux-0"})(["width:calc(100% - 12.5px);@media (max-width:666px){width:100%;}"]);const ImgComponent=({srcProps,videoLoad})=>{// console.log(srcProps);
var x=srcProps;// console.log("x");
// console.log(x);
var y=x.replace(/\?auto=&w=(800|1400|1600|2400|3600)&h=(800|1400|1600|2400|3600)/g,"");// console.log("y");
// console.log(y);
return/*#__PURE__*/React.createElement(SquareImage,{srcSet:y});//return <SquareImage src={srcProps} />;
};
;// CONCATENATED MODULE: ./src/components/tf/index/two-up-carousel.js
const two_up_carousel_Grid16=styled_components_esm["default"].div.withConfig({displayName:"two-up-carousel__Grid16",componentId:"sc-1rmaink-0"})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-column-gap:12.5px;margin-left:12.5px;grid-row-gap:0;width:calc(100% - 25px);z-index:20000;"]);const TwoUpCarouselCounterNextCon=styled_components_esm["default"].div.withConfig({displayName:"two-up-carousel__TwoUpCarouselCounterNextCon",componentId:"sc-1rmaink-1"})(["margin-bottom:8px;"]);const TwoUpCarouselCon=styled_components_esm["default"].div.withConfig({displayName:"two-up-carousel__TwoUpCarouselCon",componentId:"sc-1rmaink-2"})(["margin-left:12.5px;cursor:e-resize;"]);const TwoUpCarouselCounterOneCon=styled_components_esm["default"].div.withConfig({displayName:"two-up-carousel__TwoUpCarouselCounterOneCon",componentId:"sc-1rmaink-3"})(["grid-column:span 8;"]);const TwoUpCarouselCounterTwoCon=styled_components_esm["default"].div.withConfig({displayName:"two-up-carousel__TwoUpCarouselCounterTwoCon",componentId:"sc-1rmaink-4"})(["grid-column:span 6;"]);const TwoUpCarouselNextButtonCon=styled_components_esm["default"].div.withConfig({displayName:"two-up-carousel__TwoUpCarouselNextButtonCon",componentId:"sc-1rmaink-5"})(["grid-column:span 2;p{color:#cfcfcf;}"]);const TwoUpProjectCarousel=({children,projectLength})=>{// COUNTER
const{0:currentSlide,1:setCurrentSlide}=(0,index_js_.useState)(0);const{0:totalSlides,1:setTotalSlides}=(0,index_js_.useState)(null);(0,index_js_.useEffect)(()=>{setCurrentSlide(0);},[]);(0,index_js_.useEffect)(()=>{setTotalSlides(projectLength);},[]);const updateCurrentSlide=index=>{if(currentSlide!==index){setCurrentSlide(index);}};// SLIDER SETTINGS
const settings={infinite:true,// speed: 200,
slidesToShow:2,slidesToScroll:1,accessibility:true,dots:false,arrows:false,swipe:false,swipeToSlide:false,adaptiveHeight:false};// SLIDESHOW FUNCTION
const ProjectCarouselRef=index_js_default().useRef(null);const{0:changedSlide,1:setChangedSlide}=(0,index_js_.useState)(false);function projectCarouselNextImg(){ProjectCarouselRef.current.slickNext();setChangedSlide(true);}return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(TwoUpCarouselCounterNextCon,null,/*#__PURE__*/index_js_default().createElement(two_up_carousel_Grid16,null,/*#__PURE__*/index_js_default().createElement(TwoUpCarouselCounterOneCon,null,/*#__PURE__*/index_js_default().createElement("p",null,("0"+(currentSlide+1)).slice(-2))),/*#__PURE__*/index_js_default().createElement(TwoUpCarouselCounterTwoCon,null,/*#__PURE__*/index_js_default().createElement("p",null,("0"+(currentSlide+2)).slice(-2))),/*#__PURE__*/index_js_default().createElement(TwoUpCarouselNextButtonCon,null,projectLength>1?/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("p",{onClick:projectCarouselNextImg,style:{display:"inline-block"}},"Next")):""))),/*#__PURE__*/index_js_default().createElement(TwoUpCarouselCon,{onClick:projectCarouselNextImg},/*#__PURE__*/index_js_default().createElement(lib/* default */.Z,Object.assign({},settings,{ref:ProjectCarouselRef,afterChange:index=>updateCurrentSlide(index)}),index_js_default().Children.map(children,child=>/*#__PURE__*/index_js_default().cloneElement(child,{changedSlide:changedSlide})))));};
;// CONCATENATED MODULE: ./src/components/tf/index/one-up-carousel.js
const one_up_carousel_Grid2=styled_components_esm["default"].div.withConfig({displayName:"one-up-carousel__Grid2",componentId:"y1zibh-0"})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr;grid-column-gap:10px;margin-left:10px;grid-row-gap:0;width:calc(100% - 20px);z-index:20000;"]);const CounterCon=styled_components_esm["default"].div.withConfig({displayName:"one-up-carousel__CounterCon",componentId:"y1zibh-1"})(["grid-column:span 1;margin-bottom:5px;"]);const NextButtonCon=styled_components_esm["default"].div.withConfig({displayName:"one-up-carousel__NextButtonCon",componentId:"y1zibh-2"})(["grid-column:span 1;p{color:#cfcfcfcf;}"]);const SquareCarouselCon=styled_components_esm["default"].div.withConfig({displayName:"one-up-carousel__SquareCarouselCon",componentId:"y1zibh-3"})(["grid-column:span 2;"]);const ProjectCarousel=({children,projectLength,videoLoad})=>{// SWIPE GESTURE
const{0:touchStart,1:setTouchStart}=(0,index_js_.useState)(null);const{0:touchEnd,1:setTouchEnd}=(0,index_js_.useState)(null);// the required distance between touchStart and touchEnd to be detected as a swipe
const minSwipeDistance=50;const onTouchStart=e=>{setTouchEnd(null);// otherwise the swipe is fired even with usual touch events
setTouchStart(e.targetTouches[0].clientX);};const onTouchMove=e=>setTouchEnd(e.targetTouches[0].clientX);const onTouchEnd=()=>{if(!touchStart||!touchEnd)return;const distance=touchStart-touchEnd;const isLeftSwipe=distance>minSwipeDistance;const isRightSwipe=distance<-minSwipeDistance;if(isLeftSwipe||isRightSwipe)// console.log("swipe", isLeftSwipe ? "left" : "right");
// add your conditional logic here
ProjectCarouselRef.current.slickNext();};// COUNTER
const{0:currentSlide,1:setCurrentSlide}=(0,index_js_.useState)(0);const{0:totalSlides,1:setTotalSlides}=(0,index_js_.useState)(null);(0,index_js_.useEffect)(()=>{setCurrentSlide(0);},[]);(0,index_js_.useEffect)(()=>{setTotalSlides(projectLength);},[]);const updateCurrentSlide=index=>{if(currentSlide!==index){setCurrentSlide(index);}};// SLIDER SETTINGS
const settings={infinite:true,speed:0,slidesToShow:1,slidesToScroll:1,accessibility:true,dots:false,arrows:false,swipe:false,swipeToSlide:false};// SLIDESHOW FUNCTION
const ProjectCarouselRef=index_js_default().useRef(null);const{0:changedSlide,1:setChangedSlide}=(0,index_js_.useState)(false);function projectCarouselNextImg(){ProjectCarouselRef.current.slickNext();setChangedSlide(true);}return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(one_up_carousel_Grid2,null,/*#__PURE__*/index_js_default().createElement(CounterCon,null,/*#__PURE__*/index_js_default().createElement("p",null,("0"+(currentSlide+1)).slice(-2))),/*#__PURE__*/index_js_default().createElement(NextButtonCon,null,projectLength>1?/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement("p",{onClick:projectCarouselNextImg,style:{display:"inline-block"}},"Next")):"")),/*#__PURE__*/index_js_default().createElement(one_up_carousel_Grid2,null,/*#__PURE__*/index_js_default().createElement(SquareCarouselCon,{onClick:projectCarouselNextImg,onTouchStart:onTouchStart,onTouchMove:onTouchMove,onTouchEnd:onTouchEnd},/*#__PURE__*/index_js_default().createElement(lib/* default */.Z,Object.assign({},settings,{ref:ProjectCarouselRef,afterChange:index=>updateCurrentSlide(index)}),index_js_default().Children.map(children,child=>/*#__PURE__*/index_js_default().cloneElement(child,{changedSlide:changedSlide}))))));};
;// CONCATENATED MODULE: ./src/components/tf/index/single-asset-project1.js
const single_asset_project1_Grid16=styled_components_esm["default"].div.withConfig({displayName:"single-asset-project1__Grid16",componentId:"qxz8j8-0"})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-column-gap:12.5px;margin-left:12.5px;grid-row-gap:0;width:calc(100% - 25px);z-index:20000;"]);const SingleImgProjectAssetCon=styled_components_esm["default"].div.withConfig({displayName:"single-asset-project1__SingleImgProjectAssetCon",componentId:"qxz8j8-1"})(["grid-column:span 8;"]);const SingleAssetProject=({children})=>{return/*#__PURE__*/index_js_default().createElement(single_asset_project1_Grid16,null,/*#__PURE__*/index_js_default().createElement(SingleImgProjectAssetCon,null,children));};
;// CONCATENATED MODULE: ./src/components/tf/index/length-context.js
const CarouselLengthContext=/*#__PURE__*/(0,index_js_.createContext)();/* harmony default export */ const length_context = (CarouselLengthContext);
;// CONCATENATED MODULE: ./src/components/tf/index/slick-functions-context.js
const CarouselIndexClicked=/*#__PURE__*/(0,index_js_.createContext)({slideGoTo:0,setSlideGoTo:()=>{}});/* harmony default export */ const slick_functions_context = (CarouselIndexClicked);
;// CONCATENATED MODULE: ./src/components/tf/index/film-carousel.js
/* - - - - - FILM LEAD CAROUSEL - - - - - */const VideoProjectCon=styled_components_esm["default"].div.withConfig({displayName:"film-carousel__VideoProjectCon",componentId:"vi0fsq-0"})([""]);const VideoCarouselCon=styled_components_esm["default"].div.withConfig({displayName:"film-carousel__VideoCarouselCon",componentId:"vi0fsq-1"})(["width:100%;height:110vh;background-color:black;@media (max-width:666px){}"]);const PaginationControlP=styled_components_esm["default"].p.withConfig({displayName:"film-carousel__PaginationControlP",componentId:"vi0fsq-2"})(["display:inline-block;color:#545454;font-size:12px;&.active{color:white;}"]);/* - - - - - VIDEO WITH CONTROLS IMG - - - - - */const FilmLeadCarousel2=({children})=>{const FilmsLeadCarouselRef=index_js_default().useRef(null);const FilmsLeadCarouselRefCon=index_js_default().useRef(null);const{0:carouselLength,1:setCarouselLength}=(0,index_js_.useState)(children.length);const{0:slideGoTo,1:setSlideGoTo}=(0,index_js_.useState)(0);const value=(0,index_js_.useMemo)(()=>({slideGoTo,setSlideGoTo}),[slideGoTo]);const settings={infinite:true,speed:0,slidesToShow:1,slidesToScroll:1,accessibility:true,dots:false,arrows:false,swipe:false,swipeToSlide:false,className:"films-slider"};(0,index_js_.useEffect)(()=>{FilmsLeadCarouselRef.current.slickGoTo(slideGoTo);},[slideGoTo]);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(length_context.Provider,{value:carouselLength},/*#__PURE__*/index_js_default().createElement(slick_functions_context.Provider,{value:value},(0,index_js_.useMemo)(()=>/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(VideoProjectCon,{ref:FilmsLeadCarouselRefCon},/*#__PURE__*/index_js_default().createElement(VideoCarouselCon,null,/*#__PURE__*/index_js_default().createElement(lib/* default */.Z,Object.assign({},settings,{ref:FilmsLeadCarouselRef}),children)))),[]))));};
// EXTERNAL MODULE: ./src/components/utils/image-orientation2.js
var image_orientation2 = __webpack_require__(1428);
;// CONCATENATED MODULE: ./src/components/tf/index/video.js
// import PauseButton from "../../../../public/icons/Pause.png";
// import PlayButton from "../../../../public/icons/Play.png";
// import PauseButton from "../../../../Pause.png";
// import PlayButton from "../../../../Play.png";
// import PauseButton from "../../../../Pause.png";
/* - - - - - VIDEO WITH CONTROLS IMG - - - - - */const VideoCon=styled_components_esm["default"].div.withConfig({displayName:"video__VideoCon",componentId:"sc-1vlnw8w-0"})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-column-gap:12.5px;margin-left:12.5px;grid-row-gap:0;width:calc(100% - 25px);z-index:20000;align-items:center;height:110vh;@media (max-width:666px){grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-column-gap:10px;margin-left:10px;grid-row-gap:0;width:calc(100% - 20px);z-index:20000;align-items:center;height:110vh;}"]);const VideoConInner=styled_components_esm["default"].div.withConfig({displayName:"video__VideoConInner",componentId:"sc-1vlnw8w-1"})(["&.sml-portrait{grid-column:10 / span 6;}&.lrg-portrait{grid-column:10 / span 6;}&.square{grid-column:9 / span 8;}&.landscape{grid-column:7 / span 12;}@media (max-width:666px){&.sml-portrait{grid-column:5 / span 16;}&.lrg-portrait{grid-column:6 / span 14;}&.square{grid-column:4 / span 18;}&.landscape{grid-column:span 24;}}"]);const VideoWithContolsSC=styled_components_esm["default"].video.withConfig({displayName:"video__VideoWithContolsSC",componentId:"sc-1vlnw8w-2"})(["width:100%;"]);const ControlsCon=styled_components_esm["default"].div.withConfig({displayName:"video__ControlsCon",componentId:"sc-1vlnw8w-3"})(["z-index:1;&.landscape{width:50%;}"]);const PlayButtonCon=styled_components_esm["default"].div.withConfig({displayName:"video__PlayButtonCon",componentId:"sc-1vlnw8w-4"})(["margin-top:5px;width:calc(50%);display:inline-block;p{color:#d4d4d4;font-size:12px;}"]);const PaginationCon=styled_components_esm["default"].div.withConfig({displayName:"video__PaginationCon",componentId:"sc-1vlnw8w-5"})(["margin-top:5px;width:calc(50%);display:inline-block;"]);const video_PaginationControlP=styled_components_esm["default"].p.withConfig({displayName:"video__PaginationControlP",componentId:"sc-1vlnw8w-6"})(["display:inline-block;color:#545454;font-size:12px;&.active{color:white;}"]);const PauseButtonImg=styled_components_esm["default"].div.withConfig({displayName:"video__PauseButtonImg",componentId:"sc-1vlnw8w-7"})(["width:8px;display:inline-block !important;margin-right:5px;"]);const PlayButtonImg=styled_components_esm["default"].div.withConfig({displayName:"video__PlayButtonImg",componentId:"sc-1vlnw8w-8"})(["width:8px;margin-right:5px;display:inline-block !important;"]);const VideoControlsImgCon=styled_components_esm["default"].div.withConfig({displayName:"video__VideoControlsImgCon",componentId:"sc-1vlnw8w-9"})([""]);const VideoControlsImg=styled_components_esm["default"].div.withConfig({displayName:"video__VideoControlsImg",componentId:"sc-1vlnw8w-10"})(["width:100%;height:100%;"]);const VideoWithControlsImg2=({srcProps,posterProps,img})=>{const videoWithControlsRef=(0,index_js_.useRef)(null);const imgRef=(0,index_js_.useRef)(null);const isOnScreen=(0,useOnScreen/* useOnScreen */.R)(videoWithControlsRef);const{0:videoSrcState,1:setVideoSrcState}=(0,index_js_.useState)("");const[isVideoLoaded,setIsVideoLoaded]=index_js_default().useState(false);const{0:isPlaying,1:setPlayingStatus}=(0,index_js_.useState)(false);const{0:hasStartedPlaying,1:setHasStartedPlaying}=(0,index_js_.useState)(false);const carouselLength=(0,index_js_.useContext)(length_context);// const carouselLength = 4;
const{slideGoTo,setSlideGoTo}=(0,index_js_.useContext)(slick_functions_context);const value=(0,index_js_.useMemo)(()=>({slideGoTo,setSlideGoTo}),[slideGoTo]);const onLoadedData=()=>{setIsVideoLoaded(true);};const Pagination=({carouselLength})=>{const array=[...Array(carouselLength)];const handleClick=index=>{setSlideGoTo(index);};const items=array.map((child,index)=>{return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(length_context.Provider,{value:carouselLength},/*#__PURE__*/index_js_default().createElement(slick_functions_context.Provider,{value:value},/*#__PURE__*/index_js_default().createElement(video_PaginationControlP,{className:slideGoTo==index?"active":"",onClick:()=>handleClick(index)},("0"+(index+1)).slice(-2)),"    ")));});return/*#__PURE__*/index_js_default().createElement("div",null,items);};(0,index_js_.useEffect)(()=>{if(isOnScreen==true){// console.log(srcProps);
// console.log("on screen");
// to load the video on scroll
// comment out below two lines to make it load on click, test hosted
setVideoSrcState(srcProps);videoWithControlsRef.current.load();}else if(isOnScreen===false){setIsVideoLoaded(false);setVideoSrcState("");}},[isOnScreen,videoSrcState]);const playVideo=()=>{// to load the video on play
// setVideoSrcState(srcProps);
// videoWithControlsRef.current.load();
videoWithControlsRef.current.play();setPlayingStatus(true);setHasStartedPlaying(true);};const pauseVideo=()=>{videoWithControlsRef.current.pause();setPlayingStatus(false);};// console.log("POSTER PROPS");
// console.log(posterProps);
const getPosterImg=(0,gatsby_image_module/* getImage */.gJ)(posterProps);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(VideoCon,null,/*#__PURE__*/index_js_default().createElement(VideoConInner,{className:(0,image_orientation2/* ImageOrientation2 */.I)(img)},/*#__PURE__*/index_js_default().createElement(VideoControlsImgCon,{style:{opacity:hasStartedPlaying?0:1,position:hasStartedPlaying?"absolute":"relative"}},/*#__PURE__*/index_js_default().createElement(VideoControlsImg,{ref:imgRef,style:{opacity:hasStartedPlaying?0:1,position:hasStartedPlaying?"absolute":"relative"}},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* GatsbyImage */.HN,{image:getPosterImg}))),/*#__PURE__*/index_js_default().createElement(VideoWithContolsSC,{playsInline:true,muted:true,loop:true,preload:"auto",ref:videoWithControlsRef,onLoadedData:onLoadedData,style:{zIndex:0,opacity:hasStartedPlaying?1:0,position:hasStartedPlaying?"relative":"absolute",// https://stackoverflow.com/questions/3680429/click-through-div-to-underlying-elements
// click through video to controls
pointerEvents:"none"}},/*#__PURE__*/index_js_default().createElement("source",{type:"video/mp4",src:videoSrcState})),/*#__PURE__*/index_js_default().createElement(ControlsCon,null,/*#__PURE__*/index_js_default().createElement(PaginationCon,null,/*#__PURE__*/index_js_default().createElement(Pagination,{carouselLength:carouselLength})),/*#__PURE__*/index_js_default().createElement(PlayButtonCon,{style:{zIndex:1}},isPlaying?/*#__PURE__*/index_js_default().createElement("p",{onClick:pauseVideo},/*#__PURE__*/index_js_default().createElement(PauseButtonImg,null,/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../../img/pause.png",__imageData:__webpack_require__(3922)})),"Pause"):/*#__PURE__*/index_js_default().createElement("p",{onClick:playVideo},/*#__PURE__*/index_js_default().createElement(PlayButtonImg,null,/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.Jv,{src:"../../../img/play.png",__imageData:__webpack_require__(141)})),"Play"))))));};
;// CONCATENATED MODULE: ./src/pages/index.js
// import Icon from "../../assets/White Logo No TF.svg";
// import { SingleAssetProject2 } from "../components/tf/index/single-asset-project2";
const GlobalStyle=(0,styled_components_esm.createGlobalStyle)`
  html {
    background-color: white;
    overflow-x: clip;
    max-width: 100vw;
  }
  body {
    // https://stackoverflow.com/questions/47095596/body-overflow-x-hidden-breaks-position-sticky
    background-color: white;
    overflow-x: clip;
    max-width: 100vw;
    @media (min-width: 666px) {
      position: fixed;
    }    
  }
`;/* - - - - - INTRO  - - - - -  */const IntroConCon=styled_components_esm["default"].div.withConfig({displayName:"pages__IntroConCon",componentId:"mndyzf-0"})([""]);/* NAV */ /* BOTH */const LogoGridCon=styled_components_esm["default"].div.withConfig({displayName:"pages__LogoGridCon",componentId:"mndyzf-1"})(["width:calc(100% - 25px);margin-left:12.5px;position:sticky;top:12.5px;z-index:300000;mix-blend-mode:exclusion;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:12.5px;@media (max-width:666px){width:calc(100% - 20px);margin-left:10px;top:10px;}"]);/* DESKTOP */const LogoConCon=styled_components_esm["default"].div.withConfig({displayName:"pages__LogoConCon",componentId:"mndyzf-2"})(["grid-column:span 2;mix-blend-mode:exclusion;"]);const MenuCon=styled_components_esm["default"].div.withConfig({displayName:"pages__MenuCon",componentId:"mndyzf-3"})(["grid-column:3 / span 2;mix-blend-mode:exclusion;"]);const LogoCon=styled_components_esm["default"].div.withConfig({displayName:"pages__LogoCon",componentId:"mndyzf-4"})(["mix-blend-mode:exclusion;width:calc(100%);vertical-align:top;transition:all 2s;vertical-align:top;"]);const DesktopNavP=styled_components_esm["default"].p.withConfig({displayName:"pages__DesktopNavP",componentId:"mndyzf-5"})(["color:#878787;mix-blend-mode:exclusion;a.selected{color:white;}@media (max-width:666px){display:none;}"]);/* MOBILE */const MobileLeftCol=styled_components_esm["default"].div.withConfig({displayName:"pages__MobileLeftCol",componentId:"mndyzf-6"})(["grid-column:span 2;mix-blend-mode:exclusion;"]);const MobileRightCol=styled_components_esm["default"].div.withConfig({displayName:"pages__MobileRightCol",componentId:"mndyzf-7"})(["grid-column:span 2;mix-blend-mode:exclusion;"]);const MobileNavP=styled_components_esm["default"].p.withConfig({displayName:"pages__MobileNavP",componentId:"mndyzf-8"})(["display:none;color:#878787;mix-blend-mode:exclusion;&.selected{color:white;}@media (max-width:666px){display:block;}"]);const LogoConMobile=styled_components_esm["default"].div.withConfig({displayName:"pages__LogoConMobile",componentId:"mndyzf-9"})(["display:none;mix-blend-mode:exclusion;@media (max-width:666px){display:block;width:calc(75% - 6.25px);margin-top:14vh;margin-left:10px;.shrink{width:calc(75% - 6.25px);}}"]);const NavSpacer=styled_components_esm["default"].div.withConfig({displayName:"pages__NavSpacer",componentId:"mndyzf-10"})(["height:25vh;width:100%;@media (max-width:666px){display:none;}"]);/* - - - - - PAGE  - - - - - */const PageCon=styled_components_esm["default"].div.withConfig({displayName:"pages__PageCon",componentId:"mndyzf-11"})(["margin-top:30vh;"]);const ProjectCon=styled_components_esm["default"].div.withConfig({displayName:"pages__ProjectCon",componentId:"mndyzf-12"})(["margin-bottom:100px;@media (max-width:666px){margin-bottom:200px;}"]);/* - - - - - INDEX AUTOPLAT VIDEO FORMATTING - - - - - */ /* - - perhaps in the autoplay video component you put a conditional saying if page index apply this  - - */const IndexAutoPlayVideoCon=styled_components_esm["default"].div.withConfig({displayName:"pages__IndexAutoPlayVideoCon",componentId:"mndyzf-13"})(["position:relative;width:calc(100% - 12.5px) !important;@media (max-width:666px){width:100%;}"]);/* - - - - - - IMAGE - - - - - - - */const SquareImg=styled_components_esm["default"].div.withConfig({displayName:"pages__SquareImg",componentId:"mndyzf-14"})(["width:calc(100% - 12.5px) !important;@media (max-width:666px){width:100%;}"]);const Index=({data})=>{const{0:pageLoad,1:setPageLoad}=(0,index_js_.useState)(null);let isPageWide=(0,media_query/* useMediaQuery */.a)("(min-width: 667px)");const LogoConRef2=(0,index_js_.useRef)(null);// page load useEffect
// https://stackoverflow.com/questions/57729504/is-there-a-way-to-tell-when-your-react-app-page-is-done-loading-the-page-asset
(0,index_js_.useEffect)(()=>{// callback function to call when event triggers
const onPageLoad=()=>{console.log("page loaded");setPageLoad(true);// do something else
};// Check if the page has already loaded
if(document.readyState==="complete"){onPageLoad();}else{window.addEventListener("load",onPageLoad,false);// Remove the event listener when component unmounts
return()=>window.removeEventListener("load",onPageLoad);}},[]);const FourSeconds=setTimeout(overflowAllow,4000);function overflowAllow(){document.body.style.position="relative";}const NavIndexGridIndex=()=>{let isPageWide=(0,media_query/* useMediaQuery */.a)("(min-width: 667px)");var{0:currentPage,1:setCurrentPage}=(0,index_js_.useState)(null);const LogoConRef=(0,index_js_.useRef)(null);const handleScroll=()=>{const position=window.pageYOffset;// console.log(position);
if(position>25){// console.log("greater than 100");
LogoConRef.current.classList.add("shrink");}else if(position<25){// console.log("less than 100");
LogoConRef.current.classList.remove("shrink");}};// scroll use effect
(0,index_js_.useEffect)(()=>{window.addEventListener("scroll",handleScroll,{passive:true});return()=>{window.removeEventListener("scroll",handleScroll);};},[]);if(isPageWide){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(LogoGridCon,{style:{opacity:pageLoad?1:0}},/*#__PURE__*/index_js_default().createElement(LogoConCon,null,/*#__PURE__*/index_js_default().createElement(LogoCon,{ref:LogoConRef},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement((WhiteLogo_default()),null)))),/*#__PURE__*/index_js_default().createElement(MenuCon,{style:{opacity:pageLoad?1:0}},/*#__PURE__*/index_js_default().createElement(DesktopNavP,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/",className:"selected"},"Select,"," "),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/project_index"},"Index, "),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/office"},"Office")))));}if(!isPageWide){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(LogoGridCon,null,/*#__PURE__*/index_js_default().createElement(MobileLeftCol,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement(MobileNavP,{className:"selected"},"Selected")),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/project_index"},/*#__PURE__*/index_js_default().createElement(MobileNavP,null,"Index"))),/*#__PURE__*/index_js_default().createElement(MobileRightCol,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/office"},/*#__PURE__*/index_js_default().createElement(MobileNavP,null,"Office")),/*#__PURE__*/index_js_default().createElement(MobileNavP,null,"Instagram"))),/*#__PURE__*/index_js_default().createElement(LogoConMobile,{ref:LogoConRef},/*#__PURE__*/index_js_default().createElement((WhiteLogo_default()),null)));}};const overview=data.prismicFeaturedProjects.data.project_relationship_group.map((content,index)=>{if(content.project_relationship_field.document.type=="film_lead_project"){const filmLeadProject=content.project_relationship_field.document.data.body.map((content_three,index)=>{if(content_three.slice_type=="video_with_play_button"){const posterImage=content_three.primary.video_thumbnail;return/*#__PURE__*/index_js_default().createElement(VideoWithControlsImg2,{srcProps:content_three.primary.video_with_play_button.url,posterProps:posterImage,img:posterImage});}});return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(ProjectCon,null,/*#__PURE__*/index_js_default().createElement(FilmLeadCarousel2,null,index_js_default().Children.map(filmLeadProject,child=>/*#__PURE__*/index_js_default().cloneElement(child,{}))),/*#__PURE__*/index_js_default().createElement(ProjectInfo2,{data2:content.project_relationship_field.document.data,uid:content.project_relationship_field.document.uid})));}if(content.project_relationship_field.document.type=="project"){const projectLength=content.project_relationship_field.document.data.body.length;const project=content.project_relationship_field.document.data.body.map((content_four,index)=>{if(content_four.slice_type=="image"){// console.log("SQUARE IMAGE");
const image=(0,gatsby_image_module/* getImage */.gJ)(content_four.primary.image);// console.log(image);
return/*#__PURE__*/ (// <ImgComponent
//   srcProps={content_four.primary.image.gatsbyImageData.images.sources.srcSet}
// />
index_js_default().createElement(SquareImg,null,/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* GatsbyImage */.HN,{image:image})));}if(content_four.slice_type=="video"){if(isPageWide){// postImage = getImage(content_four.primary.index_image)
const posterImg=content_four.primary.index_image;return/*#__PURE__*/index_js_default().createElement(IndexAutoPlayVideoCon,null,/*#__PURE__*/index_js_default().createElement(autoplay_video/* AutoPlayVideo */.$,{srcProps:content_four.primary.video.url,posterProps:posterImg}));}else{const posterImg=content_four.primary.index_image;return/*#__PURE__*/index_js_default().createElement(autoplay_video/* AutoPlayVideo */.$,{srcProps:content_four.primary.sml_video.url,posterProps:posterImg});}}});if(isPageWide&&projectLength>1){return/*#__PURE__*/index_js_default().createElement(ProjectCon,null,/*#__PURE__*/index_js_default().createElement(TwoUpProjectCarousel,{projectLength:content.project_relationship_field.document.data.body.length},index_js_default().Children.map(project,child=>/*#__PURE__*/index_js_default().cloneElement(child,{changedSlide:false}))),/*#__PURE__*/index_js_default().createElement(ProjectInfo2,{data2:content.project_relationship_field.document.data,uid:content.project_relationship_field.document.uid}));}else if(isPageWide&&projectLength<=1){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(ProjectCon,null,/*#__PURE__*/index_js_default().createElement(SingleAssetProject,null,project),/*#__PURE__*/index_js_default().createElement(ProjectInfo2,{data2:content.project_relationship_field.document.data,uid:content.project_relationship_field.document.uid})));}else if(isPageWide==false){return/*#__PURE__*/index_js_default().createElement(ProjectCon,null,/*#__PURE__*/index_js_default().createElement(ProjectCarousel,{projectLength:projectLength},index_js_default().Children.map(project,child=>/*#__PURE__*/index_js_default().cloneElement(child,{changedSlide:false}))),/*#__PURE__*/index_js_default().createElement(ProjectInfo2,{data2:content.project_relationship_field.document.data,uid:content.project_relationship_field.document.uid}));}}});return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(GlobalStyle,null),/*#__PURE__*/index_js_default().createElement(Helmet.Helmet,null,/*#__PURE__*/index_js_default().createElement("head",null),/*#__PURE__*/index_js_default().createElement("title",null,"(10) Pagination 1")),/*#__PURE__*/index_js_default().createElement(IntroConCon,{style:{opacity:pageLoad?1:0}},/*#__PURE__*/index_js_default().createElement(Intro,null)),/*#__PURE__*/index_js_default().createElement(NavSpacer,null),/*#__PURE__*/index_js_default().createElement(NavIndexGridIndex,null),/*#__PURE__*/index_js_default().createElement(PageCon,{style:{opacity:pageLoad?1:0}},overview));};/* harmony default export */ const pages = ((0,withPrismicPreview/* withPrismicPreview */.O)(Index));const query="1267050292";

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

/***/ 3922:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/91ab03a9dc193bcda8775456e507d55c/e86db/pause.png","srcSet":"/static/91ab03a9dc193bcda8775456e507d55c/37755/pause.png 24w,\\n/static/91ab03a9dc193bcda8775456e507d55c/2eb73/pause.png 47w,\\n/static/91ab03a9dc193bcda8775456e507d55c/e86db/pause.png 94w","sizes":"(min-width: 94px) 94px, 100vw"},"sources":[{"srcSet":"/static/91ab03a9dc193bcda8775456e507d55c/d256c/pause.webp 24w,\\n/static/91ab03a9dc193bcda8775456e507d55c/d53f8/pause.webp 47w,\\n/static/91ab03a9dc193bcda8775456e507d55c/4c001/pause.webp 94w","type":"image/webp","sizes":"(min-width: 94px) 94px, 100vw"}]},"width":94,"height":101}');

/***/ }),

/***/ 141:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/e6d25dfb351a14bc3293f6781ae60ac1/d8fb1/play.png","srcSet":"/static/e6d25dfb351a14bc3293f6781ae60ac1/41a0e/play.png 19w,\\n/static/e6d25dfb351a14bc3293f6781ae60ac1/feb95/play.png 38w,\\n/static/e6d25dfb351a14bc3293f6781ae60ac1/d8fb1/play.png 75w","sizes":"(min-width: 75px) 75px, 100vw"},"sources":[{"srcSet":"/static/e6d25dfb351a14bc3293f6781ae60ac1/7e3aa/play.webp 19w,\\n/static/e6d25dfb351a14bc3293f6781ae60ac1/4a448/play.webp 38w,\\n/static/e6d25dfb351a14bc3293f6781ae60ac1/7e57b/play.webp 75w","type":"image/webp","sizes":"(min-width: 75px) 75px, 100vw"}]},"width":75,"height":88}');

/***/ })

};
;
//# sourceMappingURL=900.js.map