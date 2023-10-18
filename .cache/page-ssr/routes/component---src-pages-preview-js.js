"use strict";
exports.id = "component---src-pages-preview-js";
exports.ids = ["component---src-pages-preview-js"];
exports.modules = {

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActiveRepositoryName: () => (/* binding */ getActiveRepositoryName)
/* harmony export */ });
/* harmony import */ var _getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPreviewCookie.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getPreviewCookie.js");

const getActiveRepositoryName = () => {
  const [, repositoryName] = decodeURIComponent((0,_getPreviewCookie_js__WEBPACK_IMPORTED_MODULE_0__.getPreviewCookie)() || "").match(/"([a-zA-Z0-9][-a-zA-Z0-9]{2,}[a-zA-Z0-9]).prismic.io"/) || [];
  return repositoryName;
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getComponentDisplayName.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getComponentDisplayName.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComponentDisplayName: () => (/* binding */ getComponentDisplayName)
/* harmony export */ });
const getComponentDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || "Component";


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getPreviewCookie.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getPreviewCookie.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPreviewCookie: () => (/* binding */ getPreviewCookie)
/* harmony export */ });
const readValue = value => {
  return value.replace(/%3B/g, ";");
};
const getPreviewCookie = () => {
  const cookies = document.cookie.split("; ");
  for (const cookie of cookies) {
    const parts = cookie.split("=");
    const thisName = readValue(parts[0]).replace(/%3D/g, "=");
    if (thisName === "io.prismic.preview") {
      const value = parts.slice(1).join("=");
      return readValue(value);
    }
  }
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreviewResolver.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreviewResolver.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withPrismicPreviewResolver: () => (/* binding */ withPrismicPreviewResolver)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_getActiveRepositoryName_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/getActiveRepositoryName.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js");
/* harmony import */ var _lib_getComponentDisplayName_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/getComponentDisplayName.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getComponentDisplayName.js");




const withPrismicPreviewResolver = WrappedComponent => {
  const WithPrismicPreviewResolver = props => {
    const [isPrismicPreview, setIsPrismicPreview] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
      const abortController = new AbortController();
      const repositoryName = (0,_lib_getActiveRepositoryName_js__WEBPACK_IMPORTED_MODULE_2__.getActiveRepositoryName)();
      setIsPrismicPreview(!!repositoryName);
      if (repositoryName) {
        __webpack_require__.e(/*! import() */ "node_modules_gatsby-plugin-prismic-previews_dist_lib_resolvePrismicPreview_js").then(__webpack_require__.bind(__webpack_require__, /*! ./lib/resolvePrismicPreview.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/resolvePrismicPreview.js")).then(mod => mod.default(repositoryName, abortController));
      }
      return () => abortController.abort();
    }, []);
    return /* @__PURE__ */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent, {
      ...props,
      isPrismicPreview
    });
  };
  if (true) {
    const wrappedComponentName = (0,_lib_getComponentDisplayName_js__WEBPACK_IMPORTED_MODULE_3__.getComponentDisplayName)(WrappedComponent);
    WithPrismicPreviewResolver.displayName = `withPrismicPreviewResolver(${wrappedComponentName})`;
  }
  return WithPrismicPreviewResolver;
};


/***/ }),

/***/ "./src/pages/preview.js?export=default":
/*!*********************************************!*\
  !*** ./src/pages/preview.js?export=default ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-plugin-prismic-previews */ "./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreviewResolver.js");


const PreviewPage = ({
  isPreview,
  isLoading
}) => {
  if (isPreview === false) return "Not a preview!";
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Loading"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_1__.withPrismicPreviewResolver)(PreviewPage, {
  repositoryName: `Martinez-2`
  // linkResolver: ({ node, key, value }) => (post) => `/${post.uid}`,
}));

/***/ })

};
;
//# sourceMappingURL=component---src-pages-preview-js.js.map