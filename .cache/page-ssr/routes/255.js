"use strict";
exports.id = 255;
exports.ids = [255];
exports.modules = {

/***/ 3173:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   l: () => (/* binding */ fmtLog)
/* harmony export */ });
const fmtLog=(repositoryName,text)=>{return`gatsby-plugin-prismic-previews(${repositoryName}) - ${text}`;};

/***/ }),

/***/ 7604:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ getRepositoryConfig)
/* harmony export */ });
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(836);
const getRepositoryConfig=repositoryName=>{const state=_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__/* .usePrismicPreviewStore */ .K.getState();return state.repositoryConfigs.find(config=>config.repositoryName===repositoryName);};

/***/ }),

/***/ 2255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ resolveUnpublishedPrismicPreview)
/* harmony export */ });
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(836);
/* harmony import */ var _fmtLog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3173);
/* harmony import */ var _getRepositoryConfig_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7604);
const resolveUnpublishedPrismicPreview=(repositoryName,abortController,setUnpublishedData,pathname)=>{if(pathname){const repositoryConfig=(0,_getRepositoryConfig_js__WEBPACK_IMPORTED_MODULE_0__/* .getRepositoryConfig */ .H)(repositoryName);if(!repositoryConfig){console.error((0,_fmtLog_js__WEBPACK_IMPORTED_MODULE_1__/* .fmtLog */ .l)(repositoryName,'Repository configuration could not be found. Did you add <PrismicPreviewProvider> to your "gatsby-browser.js" and "gatsby-ssr.js"? It must contain a repository configuration object for this repository.'));return;}if(repositoryConfig.componentResolver){const state=_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_2__/* .usePrismicPreviewStore */ .K.getState();const documentsForPage=Object.values(state.documents).filter(doc=>doc.url===pathname);if(documentsForPage.length>0){const firstDocument=documentsForPage[0];const typename=firstDocument.__typename;const dataKey=typename.charAt(0).toLowerCase()+typename.slice(1);const componentResolver=repositoryConfig.componentResolver;const ResolvedComponent=typeof componentResolver==="function"?componentResolver(documentsForPage):componentResolver[firstDocument.type];if(ResolvedComponent){if(!abortController.signal.aborted){setUnpublishedData({data:{[dataKey]:firstDocument},component:ResolvedComponent});}}else{console.warn((0,_fmtLog_js__WEBPACK_IMPORTED_MODULE_1__/* .fmtLog */ .l)(repositoryName,`A component for this unpublished document preview was not found. The app's default 404 page will be displayed instead.

If this was unintentional, you can fix the issue by ensuring the componentResolver option for this repository in <PrismicPreviewProvider> returns a value for "${firstDocument.type}" documents.`));}}}else{console.warn((0,_fmtLog_js__WEBPACK_IMPORTED_MODULE_1__/* .fmtLog */ .l)(repositoryName,"A componentResolver object or function for this repository was not provided to <PrismicPreviewProvider>. The app's default 404 page will be displayed instead of the previewed document.\n\nYou can fix this warning by adding a componentResolver value to this repository's configuration object in <PrismicPreviewProvider>."));}}};

/***/ })

};
;
//# sourceMappingURL=255.js.map