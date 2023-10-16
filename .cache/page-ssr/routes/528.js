"use strict";
exports.id = 528;
exports.ids = [528];
exports.modules = {

/***/ 8528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ resolvePrismicPreview)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7076);
/* harmony import */ var _fmtLog_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3173);
/* harmony import */ var _getClient_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2381);
/* harmony import */ var _getPluginOptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91);
/* harmony import */ var _getRepositoryConfig_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7604);
const resolvePrismicPreview=async(repositoryName,abortController)=>{const pluginOptions=(0,_getPluginOptions_js__WEBPACK_IMPORTED_MODULE_1__/* .getPluginOptions */ .l)(repositoryName);if(!pluginOptions){console.error((0,_fmtLog_js__WEBPACK_IMPORTED_MODULE_2__/* .fmtLog */ .l)(repositoryName,`Plugin options could not be found. Did you add "gatsby-plugin-prismic-previews" for this repository to your app's "gatsby-config.js" file?`));return;}const repositoryConfig=(0,_getRepositoryConfig_js__WEBPACK_IMPORTED_MODULE_3__/* .getRepositoryConfig */ .H)(repositoryName);if(!repositoryConfig){console.error((0,_fmtLog_js__WEBPACK_IMPORTED_MODULE_2__/* .fmtLog */ .l)(repositoryName,'Repository configuration could not be found. Did you add <PrismicPreviewProvider> to your "gatsby-browser.js" and "gatsby-ssr.js"? It must contain a repository configuration object for this repository.'));return;}const client=(0,_getClient_js__WEBPACK_IMPORTED_MODULE_4__/* .getClient */ .s)(pluginOptions);try{const path=await client.resolvePreviewURL({linkResolver:repositoryConfig.linkResolver,defaultURL:"/",signal:abortController.signal});if(!abortController.signal.aborted){(0,gatsby__WEBPACK_IMPORTED_MODULE_0__.navigate)(path);}}catch(error){if(!(error instanceof Error&&error.name==="AbortError")){throw error;}}};

/***/ })

};
;
//# sourceMappingURL=528.js.map