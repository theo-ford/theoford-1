"use strict";
exports.id = 570;
exports.ids = [570];
exports.modules = {

/***/ 8259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ getActiveRepositoryName)
/* harmony export */ });
/* harmony import */ var _getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9248);
const getActiveRepositoryName=()=>{const[,repositoryName]=decodeURIComponent((0,_getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__/* .getPreviewCookie */ .k)()||"").match(/"([a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]).prismic.io"/)||[];return repositoryName;};

/***/ }),

/***/ 9248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ getPreviewCookie)
/* harmony export */ });
const readValue=value=>{return value.replace(/%3B/g,";");};const getPreviewCookie=()=>{const cookies=document.cookie.split("; ");for(const cookie of cookies){const parts=cookie.split("=");const thisName=readValue(parts[0]).replace(/%3D/g,"=");if(thisName==="io.prismic.preview"){const value=parts.slice(1).join("=");return readValue(value);}}};

/***/ }),

/***/ 8125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ preview)
});

// EXTERNAL MODULE: external "/Users/theoford/Documents/03 Code Projects (Cloned from GitHub)/theoford-1/node_modules/react/index.js"
var index_js_ = __webpack_require__(6400);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js
var getActiveRepositoryName = __webpack_require__(8259);
;// CONCATENATED MODULE: ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreviewResolver.js
const withPrismicPreviewResolver=WrappedComponent=>{const WithPrismicPreviewResolver=props=>{const[isPrismicPreview,setIsPrismicPreview]=index_js_.useState(null);index_js_.useEffect(()=>{const abortController=new AbortController();const repositoryName=(0,getActiveRepositoryName/* getActiveRepositoryName */.G)();setIsPrismicPreview(!!repositoryName);if(repositoryName){Promise.all(/* import() */[__webpack_require__.e(81), __webpack_require__.e(528)]).then(__webpack_require__.bind(__webpack_require__, 8528)).then(mod=>mod.default(repositoryName,abortController));}return()=>abortController.abort();},[]);return/* @__PURE__ */(0,jsx_runtime.jsx)(WrappedComponent,{...props,isPrismicPreview});};if(false){}return WithPrismicPreviewResolver;};
;// CONCATENATED MODULE: ./src/pages/preview.js
const PreviewPage=({isPreview,isLoading})=>{if(isPreview===false)return"Not a preview!";return/*#__PURE__*/index_js_.createElement(index_js_.Fragment,null,/*#__PURE__*/index_js_.createElement("p",null,"Loading"));};/* harmony default export */ const preview = (withPrismicPreviewResolver(PreviewPage,{repositoryName:`Martinez-2`// linkResolver: ({ node, key, value }) => (post) => `/${post.uid}`,
}));

/***/ })

};
;
//# sourceMappingURL=component---src-pages-preview-js.js.map