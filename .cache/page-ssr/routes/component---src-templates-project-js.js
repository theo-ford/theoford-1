exports.id = "component---src-templates-project-js";
exports.ids = ["component---src-templates-project-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GatsbyImage: () => (/* binding */ X),
/* harmony export */   MainImage: () => (/* binding */ D),
/* harmony export */   Placeholder: () => (/* binding */ C),
/* harmony export */   StaticImage: () => (/* binding */ Z),
/* harmony export */   generateImageData: () => (/* binding */ b),
/* harmony export */   getImage: () => (/* binding */ I),
/* harmony export */   getImageData: () => (/* binding */ R),
/* harmony export */   getLowResolutionImageURL: () => (/* binding */ y),
/* harmony export */   getSrc: () => (/* binding */ W),
/* harmony export */   getSrcSet: () => (/* binding */ j),
/* harmony export */   withArtDirection: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 800,
  c = 800,
  h = 4 / 3,
  g = function (e) {
    return console.warn(e);
  },
  p = function (e, t) {
    return e - t;
  },
  m = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  },
  f = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function v(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function w(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    g = void 0 === d ? ["auto", "webp"] : d;
  return g = g.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: g,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || h))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / h) : c), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: g
  }));
}
function y(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = w(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function b(e) {
  var t,
    a = (e = w(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    p = e.height,
    y = e.filename,
    b = e.reporter,
    S = void 0 === b ? {
      warn: g
    } : b,
    N = e.backgroundColor,
    x = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = v(y)) : i = {
    width: h,
    height: p,
    format: (null == (t = i) ? void 0 : t.format) || v(y) || "auto"
  };
  var I = new Set(e.formats);
  (0 === I.size || I.has("auto") || I.has("")) && (I.delete("auto"), I.delete(""), I.add(i.format)), I.has("jpg") && I.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), I.delete("jpg" === i.format ? "png" : "jpg"));
  var W = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: g
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        p = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (p.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + p.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: g
          } : u,
          h = a.width / a.height,
          p = k(void 0 === l ? s : l);
        if (i && r) {
          var m = M(a, {
            width: i,
            height: r,
            fit: o
          });
          i = m.width, r = m.height, h = m.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : c;
        var f = i;
        if (a.width < i || a.height < r) {
          var v = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + v + ' "' + ("width" === v ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + v + " of " + a[v] + "px. If possible, replace the current image with a larger one."), "width" === v ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: p.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: f,
          presentationHeight: Math.round(f / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? E(e) : "fullWidth" === i ? E(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    j = {
      sources: []
    },
    R = e.sizes;
  R || (R = m(W.presentationWidth, o)), I.forEach(function (e) {
    var t = W.sizes.map(function (t) {
      var i = r(y, t, Math.round(t / W.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === W.unscaledWidth;
      }) || t[0];
      i && (j.fallback = {
        src: i.src,
        srcSet: f(t),
        sizes: R
      });
    } else {
      var n;
      null == (n = j.sources) || n.push({
        srcSet: f(t),
        sizes: R,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: j,
    layout: o,
    backgroundColor: N
  };
  switch (x && (_.placeholder = {
    fallback: x
  }), o) {
    case "fixed":
      _.width = W.presentationWidth, _.height = W.presentationHeight;
      break;
    case "fullWidth":
      _.width = 1, _.height = 1 / W.aspectRatio;
      break;
    case "constrained":
      _.width = e.width || W.presentationWidth || 1, _.height = (_.width || 1) / W.aspectRatio;
  }
  return _;
}
var k = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};
function E(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    c = e.layout,
    h = a.width / a.height,
    g = k(void 0 === l ? s : l);
  if (i && r) {
    var m = M(a, {
      width: i,
      height: r,
      fit: o
    });
    i = m.width, r = m.height, h = m.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(d, a.width)) / h), i || (i = r * h);
  var f = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== c || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: h,
    presentationWidth: f,
    presentationHeight: Math.round(f / h),
    unscaledWidth: i
  };
}
function M(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var S = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  N = ["images", "placeholder"];
function x() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var I = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  W = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  j = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function R(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, S);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), b(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function _(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, N), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var A,
  O = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  T = ["fallback", "sources", "shouldLoad"],
  z = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, O);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  L = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, T),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
z.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, L.displayName = "Picture", L.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var q = ["fallback"],
  C = function (t) {
    var a = t.fallback,
      i = o(t, q);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (A = L.propTypes) ? void 0 : A.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var D = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t, {
    shouldLoad: !0
  }))));
};
D.displayName = "MainImage", D.propTypes = L.propTypes;
var P = ["children"],
  H = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  F = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  B = function (a) {
    var i = a.children,
      r = o(a, P);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, null));
  },
  G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  V = ["style", "className"],
  U = function (e) {
    return e.replace(/\n/g, "");
  },
  X = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, G);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      M = u.backgroundColor,
      S = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return x() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (x() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      N = S.style,
      I = S.className,
      W = o(S, V),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? U(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: U(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, N, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return x() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, M, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), x() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  Y = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  Z = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, Y);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(X),
  J = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  K = new Set(["fixed", "fullWidth", "constrained"]),
  Q = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: J,
    height: J,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !K.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
Z.displayName = "StaticImage", Z.propTypes = Q;


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getComponentDisplayName: () => (/* binding */ getComponentDisplayName)
/* harmony export */ });
const getComponentDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || "Component";


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getDocument.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getDocument.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDocument: () => (/* binding */ getDocument)
/* harmony export */ });
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../usePrismicPreviewStore.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/usePrismicPreviewStore.js");

const getDocument = prismicId => {
  const state = _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_0__.usePrismicPreviewStore.getState();
  return state.documents[prismicId];
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getPreviewCookie.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/getPreviewCookie.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/hasOwnProperty.js":
/*!********************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/lib/hasOwnProperty.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasOwnProperty: () => (/* binding */ hasOwnProperty)
/* harmony export */ });
const hasOwnProperty = (obj, prop) => {
  return obj.hasOwnProperty(prop);
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/useMergePrismicPreviewData.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/useMergePrismicPreviewData.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMergePrismicPreviewData: () => (/* binding */ useMergePrismicPreviewData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_getDocument_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/getDocument.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getDocument.js");
/* harmony import */ var _lib_hasOwnProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/hasOwnProperty.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/hasOwnProperty.js");
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usePrismicPreviewStore.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/usePrismicPreviewStore.js");




const mergePreviewData = ({
  staticDataNode,
  publishedDocumentIDs
}) => {
  const castedData = staticDataNode;
  if (typeof castedData === "object" && castedData !== null && !Array.isArray(castedData)) {
    if ((0,_lib_hasOwnProperty_js__WEBPACK_IMPORTED_MODULE_1__.hasOwnProperty)(castedData, "_previewable")) {
      const replacement = (0,_lib_getDocument_js__WEBPACK_IMPORTED_MODULE_2__.getDocument)(castedData._previewable);
      if (replacement) {
        return replacement;
      } else {
        if (publishedDocumentIDs.length > 0 && !publishedDocumentIDs.includes(castedData._previewable)) {
          return null;
        } else {
          return staticDataNode;
        }
      }
    } else {
      const newNode = {};
      for (const key in castedData) {
        newNode[key] = mergePreviewData({
          staticDataNode: castedData[key],
          publishedDocumentIDs
        });
      }
      return newNode;
    }
  } else if (Array.isArray(staticDataNode)) {
    return staticDataNode.map(element => {
      return mergePreviewData({
        staticDataNode: element,
        publishedDocumentIDs
      });
    });
  } else {
    return staticDataNode;
  }
};
const useMergePrismicPreviewData = staticData => {
  const isBootstrapped = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__.usePrismicPreviewStore)(state => state.isBootstrapped);
  const publishedDocumentIDs = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__.usePrismicPreviewStore)(state => state.publishedDocumentIDs);
  const documents = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_3__.usePrismicPreviewStore)(state => state.documents);
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (staticData) {
      const hasPreviewData = publishedDocumentIDs.length > 0 || Object.keys(documents).length > 0;
      if (isBootstrapped && hasPreviewData) {
        return mergePreviewData({
          staticDataNode: staticData,
          publishedDocumentIDs
        });
      } else {
        return staticData;
      }
    }
  }, [documents, publishedDocumentIDs, isBootstrapped, staticData]);
};


/***/ }),

/***/ "./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js":
/*!********************************************************************************!*\
  !*** ./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withPrismicPreview: () => (/* binding */ withPrismicPreview)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_getActiveRepositoryName_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/getActiveRepositoryName.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getActiveRepositoryName.js");
/* harmony import */ var _lib_getComponentDisplayName_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/getComponentDisplayName.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/getComponentDisplayName.js");
/* harmony import */ var _useMergePrismicPreviewData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useMergePrismicPreviewData.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/useMergePrismicPreviewData.js");
/* harmony import */ var _usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usePrismicPreviewStore.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/usePrismicPreviewStore.js");






const withPrismicPreview = WrappedComponent => {
  const WithPrismicPreview = props => {
    const isBootstrapped = (0,_usePrismicPreviewStore_js__WEBPACK_IMPORTED_MODULE_2__.usePrismicPreviewStore)(state => state.isBootstrapped);
    const [isPrismicPreview, setIsPrismicPreview] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const mergedData = (0,_useMergePrismicPreviewData_js__WEBPACK_IMPORTED_MODULE_3__.useMergePrismicPreviewData)(props.data);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(() => {
      const abortController = new AbortController();
      if (!isBootstrapped) {
        const repositoryName = (0,_lib_getActiveRepositoryName_js__WEBPACK_IMPORTED_MODULE_4__.getActiveRepositoryName)();
        setIsPrismicPreview(!!repositoryName);
        if (repositoryName) {
          __webpack_require__.e(/*! import() */ "node_modules_gatsby-plugin-prismic-previews_dist_lib_bootstrapPrismicPreview_js-_496f0").then(__webpack_require__.bind(__webpack_require__, /*! ./lib/bootstrapPrismicPreview.js */ "./node_modules/gatsby-plugin-prismic-previews/dist/lib/bootstrapPrismicPreview.js")).then(mod => mod.default(repositoryName, abortController));
        }
      }
      return () => abortController.abort();
    }, [isBootstrapped]);
    return /* @__PURE__ */(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WrappedComponent, {
      ...props,
      data: mergedData,
      originalData: props.data,
      isPrismicPreview
    });
  };
  if (true) {
    const wrappedComponentName = (0,_lib_getComponentDisplayName_js__WEBPACK_IMPORTED_MODULE_5__.getComponentDisplayName)(WrappedComponent);
    WithPrismicPreview.displayName = `withPrismicPreview(${wrappedComponentName})`;
  }
  return WithPrismicPreview;
};


/***/ }),

/***/ "./src/components/hooks/useOnScreen.js":
/*!*********************************************!*\
  !*** ./src/components/hooks/useOnScreen.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOnScreen: () => (/* binding */ useOnScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useOnScreen(ref) {
  // console.log("useOnSCreen");
  const {
    0: isOnScreen,
    1: setIsOnScreen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const observerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    observerRef.current = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    observerRef.current.observe(ref.current);
    return () => {
      observerRef.current.disconnect();
    };
  }, [ref]);
  return isOnScreen;
}

/***/ }),

/***/ "./src/components/tf/autoplay-video.js":
/*!*********************************************!*\
  !*** ./src/components/tf/autoplay-video.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AutoPlayVideo: () => (/* binding */ AutoPlayVideo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useOnScreen */ "./src/components/hooks/useOnScreen.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");




const AutoplayVideoCon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "autoplay-video__AutoplayVideoCon"
})(["position:relative;width:calc(100%);@media (max-width:666px){width:100%;}"]);
const AutoplayVideoImg = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "autoplay-video__AutoplayVideoImg"
})(["width:100%;height:100%;"]);
const AutoplayVideoVideo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].video.withConfig({
  displayName: "autoplay-video__AutoplayVideoVideo"
})(["width:100%;height:100%;"]);
const AutoplayVideoImgCon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "autoplay-video__AutoplayVideoImgCon"
})([""]);
const breatheAnimation = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.keyframes)(["0%{opacity:0}50%{opacity:1}100%{opacity:0}"]);
const AutoplayVideoTextCon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "autoplay-video__AutoplayVideoTextCon"
})(["position:absolute;z-index:10000;width:100%;height:100%;display:grid;align-items:center;justify-items:center;p{color:black;padding-right:10px;padding-top:10px;padding-bottom:10px;padding-left:10px;background-color:white;margin-top:-1px;animation-name:", ";animation-duration:2s;animation-iteration-count:infinite;}"], breatheAnimation);
const AutoPlayVideo = ({
  srcProps,
  posterProps,
  changedSlide
}) => {
  // https://stackoverflow.com/questions/58341787/intersectionobserver-with-react-hooks
  // https://frontend-digest.com/responsive-and-progressive-video-loading-in-react-e8753315af51
  const autoplayVideoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const isOnScreen = (0,_hooks_useOnScreen__WEBPACK_IMPORTED_MODULE_1__.useOnScreen)(autoplayVideoRef);
  const {
    0: videoSrcState,
    1: setVideoSrcState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [isVideoLoaded, setIsVideoLoaded] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);

  // console.log("autoplay Video Ref");
  // console.log(autoplayVideoRef);

  const onLoadedData = () => {
    setIsVideoLoaded(true);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOnScreen == true) {
      // console.log(srcProps);
      // console.log("on screen");
      setVideoSrcState(srcProps);
      autoplayVideoRef.current.load();
      autoplayVideoRef.current.play();
    } else if (isOnScreen === false) {
      // console.log(srcProps);
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
      setIsVideoLoaded(false);
      setVideoSrcState("");
    }
  }, [isOnScreen]);
  const getPosterImage = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.getImage)(posterProps);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutoplayVideoCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutoplayVideoImgCon, {
    style: {
      opacity: isVideoLoaded ? 0 : 1,
      position: isVideoLoaded ? "absolute" : "relative"
      // opacity: 1,
      // position: "relative",
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutoplayVideoTextCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Video Loading")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutoplayVideoImg, {
    srcSet: posterProps,
    style: {
      opacity: isVideoLoaded ? 0 : 1,
      position: isVideoLoaded ? "absolute" : "relative"
      // opacity: 1,
      // position: "relative",
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_3__.GatsbyImage, {
    image: getPosterImage
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AutoplayVideoVideo, {
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true,
    ref: autoplayVideoRef
    // onCanPlayThrough={onLoadedData}
    ,
    onLoadedData: onLoadedData,
    style: {
      opacity: isVideoLoaded ? 1 : 0,
      position: isVideoLoaded ? "relative" : "absolute"
      // display: isOnScreen ? "block" : "none",
      // opacity: 0,
      // position: "absolute",
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
    type: "video/mp4",
    src: videoSrcState
  }))));
};

// export function autoplayVideo(query) {
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

/***/ "./src/components/tf/media-query.js":
/*!******************************************!*\
  !*** ./src/components/tf/media-query.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useMediaQuery: () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useMediaQuery(query) {
  const {
    0: matches,
    1: setMatches
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);
  return matches;
}

/***/ }),

/***/ "./src/components/tf/nav-grid/nav.js":
/*!*******************************************!*\
  !*** ./src/components/tf/nav-grid/nav.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavGrid: () => (/* binding */ NavGrid)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _media_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media-query */ "./src/components/tf/media-query.js");
/* harmony import */ var _assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/WhiteLogo.svg */ "./assets/WhiteLogo.svg");
/* harmony import */ var _assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _page_load__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page-load */ "./src/components/tf/page-load.js");








/* BOTH */
const LogoGridCon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "nav__LogoGridCon"
})(["width:calc(100% - 25px);margin-left:12.5px;position:sticky;top:12.5px;z-index:300000;mix-blend-mode:exclusion;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:12.5px;@media (max-width:666px){width:calc(100% - 20px);margin-left:10px;top:10px;}"]);
/* DESKTOP */
const LogoConCon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "nav__LogoConCon"
})(["grid-column:span 1;mix-blend-mode:exclusion;"]);
const MenuCon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "nav__MenuCon"
})(["grid-column:3 / span 2;mix-blend-mode:exclusion;"]);
const LogoCon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "nav__LogoCon"
})(["mix-blend-mode:exclusion;width:calc(100%);vertical-align:top;transition:all 2s;vertical-align:top;"]);
const DesktopNavP = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "nav__DesktopNavP"
})(["color:#878787;mix-blend-mode:exclusion;a.selected{color:white;}@media (max-width:666px){display:none;}"]);

/* MOBILE */
const MobileLeftCol = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "nav__MobileLeftCol"
})(["grid-column:span 2;mix-blend-mode:exclusion;"]);
const MobileRightCol = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({
  displayName: "nav__MobileRightCol"
})(["grid-column:span 2;mix-blend-mode:exclusion;"]);
const MobileNavP = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({
  displayName: "nav__MobileNavP"
})(["display:none;color:#878787;mix-blend-mode:exclusion;&.selected{color:white;}@media (max-width:666px){display:block;}"]);
const NavGrid = () => {
  let isPageWide = (0,_media_query__WEBPACK_IMPORTED_MODULE_1__.useMediaQuery)("(min-width: 667px)");
  var {
    0: currentPage,
    1: setCurrentPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const LogoConRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var inputString = window.location.href;
    var outputString = inputString.replace(/.*\//, "");
    if (outputString == "project_index") {
      setCurrentPage(outputString);
    } else if (outputString == "office") {
      setCurrentPage(outputString);
    } else {
      setCurrentPage(null);
    }
  }, [setCurrentPage]);
  if (isPageWide) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogoGridCon, {
      style: {
        opacity: _page_load__WEBPACK_IMPORTED_MODULE_4__.PageLoad ? 1 : 0
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogoConCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogoCon, {
      ref: LogoConRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_2___default()), null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DesktopNavP, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/"
    }, "Select, "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/project_index",
      className: currentPage == "project_index" ? "selected" : ""
    }, "Index,", " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/office",
      className: currentPage == "office" ? "selected" : ""
    }, "Office")))));
  }
  if (!isPageWide) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LogoGridCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileLeftCol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileNavP, null, "Selected")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/project_index"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileNavP, {
      className: currentPage == "project_index" ? "selected" : ""
    }, "Index"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileRightCol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link, {
      to: "/office"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileNavP, {
      className: currentPage == "office" ? "selected" : ""
    }, "Office")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MobileNavP, null, "Instagram"))));
  }
};

/***/ }),

/***/ "./src/components/tf/page-load.js":
/*!****************************************!*\
  !*** ./src/components/tf/page-load.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageLoad: () => (/* binding */ PageLoad)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function PageLoad(query) {
  const {
    0: pageLoad,
    1: setPageLoad
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // callback function to call when event triggers
    const onPageLoad = () => {
      console.log("page loaded");
      setPageLoad(true);
      // do something else
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
}

/***/ }),

/***/ "./src/components/utils/image-orientation.js":
/*!***************************************************!*\
  !*** ./src/components/utils/image-orientation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageOrientation: () => (/* binding */ ImageOrientation)
/* harmony export */ });
const ImageOrientation = image => {
  const isImageLandscape = image.dimensions.width > image.dimensions.height;
  const isImageSquare = image.dimensions.width === image.dimensions.height;
  if (isImageLandscape === true) {
    // console.log("landscape");
    return "landscape";
  } else if (isImageSquare === true) {
    // console.log("square");
    return "square";
  } else {
    // console.log("portrait");
    return "portrait";
  }
};

/***/ }),

/***/ "./src/templates/project.js?export=default":
/*!*************************************************!*\
  !*** ./src/templates/project.js?export=default ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gatsby-plugin-prismic-previews */ "./node_modules/gatsby-plugin-prismic-previews/dist/withPrismicPreview.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
/* harmony import */ var _components_utils_image_orientation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/utils/image-orientation */ "./src/components/utils/image-orientation.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _components_tf_media_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/tf/media-query */ "./src/components/tf/media-query.js");
/* harmony import */ var _assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/WhiteLogo.svg */ "./assets/WhiteLogo.svg");
/* harmony import */ var _assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_WhiteLogo_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_tf_autoplay_video__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/tf/autoplay-video */ "./src/components/tf/autoplay-video.js");
/* harmony import */ var _components_tf_nav_grid_nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/tf/nav-grid/nav */ "./src/components/tf/nav-grid/nav.js");
/* harmony import */ var _components_tf_page_load__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/tf/page-load */ "./src/components/tf/page-load.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");












const LogoGridCon = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__LogoGridCon"
})(["width:calc(100% - 25px);margin-left:12.5px;position:sticky;top:12.5px;z-index:300000;mix-blend-mode:exclusion;@media (max-width:666px){display:grid;grid-template-columns:1fr 1fr;grid-column-gap:10px;width:calc(100% - 20px);margin-left:10px;}"]);
const Grid2B = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__Grid2B"
})(["display:grid;top:12.5px;grid-template-columns:1fr 1fr;grid-column-gap:12.5px;grid-row-gap:0;width:calc(100% - 20px);z-index:20000;"]);
const Col1 = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__Col1"
})(["grid-column:span 1;"]);
const Col2 = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__Col2"
})(["grid-column:span 1;"]);
const LogoCon = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__LogoCon"
})(["top:12.5px;mix-blend-mode:exclusion;width:calc(50% - 6.25px);display:inline-block;vertical-align:top;transition:all 2s;vertical-align:top;.shrink{width:calc(37.5% - 6.25px);}@media (max-width:666px){width:calc(75% - 6.25px);margin-top:14vh;margin-left:10px;.shrink{width:calc(75% - 6.25px);}}"]);
const NavCon1 = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__NavCon1"
})(["display:inline-block;position:sticky;top:12.5px;z-index:300000;margin-left:11px;margin-top:-3px;vertical-align:top;mix-blend-mode:exclusion;p{color:#878787;}span.selected{color:white;}span.navItem{}@media (max-width:666px){margin-left:0px;grid-column:span 1;}"]);
const NavCon2 = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__NavCon2"
})(["display:inline-block;position:sticky;top:12.5px;margin-left:12.5px;margin-top:-3px;mix-blend-mode:exclusion;z-index:300000;p{color:#878787;}p.selected{color:white;}@media (max-width:666px){margin-left:0px;grid-column:span 1;}"]);
const Grid8 = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__Grid8"
})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;grid-column-gap:12.5px;grid-row-gap:0;width:calc(100%);"]);
const Table = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__Table"
})(["margin-bottom:20px;border-bottom:1px solid black;"]);
const TableRow = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__TableRow"
})(["border-top:1px solid black;padding-top:5px;padding-bottom:5px;"]);
const TableTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__TableTitle"
})(["grid-column:span 2;p{font-weight:bold;}"]);
const TableContent = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__TableContent"
})(["grid-column:span 6;"]);
const PageConCon = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__PageConCon"
})(["width:calc(100% - 25px);margin:12.5px;display:grid;grid-template-columns:1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr  1fr 1fr 1fr 1fr;grid-gap:12.5px;"]);
const PageCon = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__PageCon"
})(["grid-column:5 / span 8;margin-top:20vh;@media (max-width:666px){grid-column:span 16;margin-top:10vh;}"]);
const BodyTextCon = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__BodyTextCon"
})(["margin-bottom:20px;p{line-height:125%;}@media (max-width:666px){}"]);
const SquareImage = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__SquareImage"
})(["width:calc(100%);margin-bottom:12.5px;@media (max-width:666px){width:100%;margin-bottom:10px;}"]);
const ProjectPageAutoPlayVideoCon = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__ProjectPageAutoPlayVideoCon"
})(["margin-bottom:12.5px;@media (max-width:666px){margin-bottom:10px;}"]);
const CategoryName = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].span.withConfig({
  displayName: "project__CategoryName"
})(["text-transform:capitalize;"]);
const RelatedProjectsCon = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__RelatedProjectsCon"
})(["margin-top:100px;margin-bottom:100px;"]);
const RelatedProjectsTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "project__RelatedProjectsTitle"
})(["margin-bottom:10px;"]);
const RelatedProjectsProjectCon = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__RelatedProjectsProjectCon"
})(["grid-column:span 4;"]);
const RelatedProjectProjectTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].p.withConfig({
  displayName: "project__RelatedProjectProjectTitle"
})(["color:grey;margin-top:10px;"]);
const RelatedProjectsImg = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div.withConfig({
  displayName: "project__RelatedProjectsImg"
})(["width:100%;"]);
const Project = ({
  data
}) => {
  let isPageWide = (0,_components_tf_media_query__WEBPACK_IMPORTED_MODULE_4__.useMediaQuery)("(min-width: 667px)");
  // PageLoad;
  const LogoConRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  // const LogoNav = scrollPosition => {
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
  const ImgComponent = ({
    srcProps,
    videoLoad
  }) => {
    // console.log(srcProps);
    var x = srcProps;
    // console.log("x");
    // console.log(x);
    var y = x.replace(/\?auto=&w=(800|1400|1600|2400|3600)&h=(800|1400|1600|2400|3600)/g, "");
    // console.log("y");
    // console.log(y);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SquareImage, {
      srcSet: y
    });
    //return <SquareImage src={srcProps} />;
  };

  const projectBody = data.prismicProject.data.body1.map((content, index) => {
    if (content.slice_type == "image") {
      const image = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.getImage)(content.primary.image);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SquareImage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.GatsbyImage, {
        image: image
      })));
    }
    if (content.slice_type == "text") {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BodyTextCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, content.primary.text.text)));
    }
    if (content.slice_type == "video") {
      if (isPageWide) {
        const posterImgProps = content.primary.index_image;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectPageAutoPlayVideoCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_autoplay_video__WEBPACK_IMPORTED_MODULE_6__.AutoPlayVideo, {
          srcProps: content.primary.video.url,
          posterProps: posterImgProps
        }));
      } else {
        const posterImgProps = content.primary.index_image;
        console.log("SMALL VIDEO");
        console.log(content.primary.sml_video.url);
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ProjectPageAutoPlayVideoCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_autoplay_video__WEBPACK_IMPORTED_MODULE_6__.AutoPlayVideo, {
          srcProps: content.primary.sml_video.url,
          posterProps: posterImgProps
        }));
      }
    }
  });

  // var testArray = ["a", "b", "c", "d"];
  // var testArrayMap = testArray.map((content, index) => {
  //   return content;
  // });

  // console.log(testArrayMap[1]);

  var RelatedProjects = data.prismicProject.data.related_projects_group.map((content, index) => {
    if (content.related_projects.document.type == "project") {
      console.log("square project");
      // const project = content.related_projects.document.data.map(
      //   (content3, index) => {
      //     return (
      //       //test
      //       { content3 }
      //     );
      //   }
      // );
      const image = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.getImage)(content.related_projects.document.data.index_preview_img);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsProjectCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: `/${content.related_projects.document.uid}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsImg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.GatsbyImage, {
        image: image
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectProjectTitle, null, content.related_projects.document.data.project_title.text))));
    } else if (content.related_projects.document.type == "film_lead_project") {
      const image = (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.getImage)(content.related_projects.document.data.index_preview_img);
      console.log("film project");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsProjectCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
        to: `/${content.related_projects.document.uid}`
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsImg, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_10__.GatsbyImage, {
        image: image
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectProjectTitle, null, content.related_projects.document.data.project_title.text))));
    }
    // return (
    //   // test
    //   // test
    //   { content }
    // );
  });

  const RelatedProjects2 = () => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8, null, RelatedProjects[0], RelatedProjects[1]);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_tf_nav_grid_nav__WEBPACK_IMPORTED_MODULE_7__.NavGrid, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageConCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PageCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Table, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Project")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, data.prismicProject.data.project_title.text)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Location")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, data.prismicProject.data.location.text)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Category")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, data.prismicProject.data.categories.map((category, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CategoryName, {
      key: index
    }, (index ? ", " : "") + category.category.slug);
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Client")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " ", data.prismicProject.data.client.text)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableRow, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Grid8, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TableContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, data.prismicProject.data.team.text))))), projectBody, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsCon, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjectsTitle, null, "Related Projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(RelatedProjects2, null)))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,gatsby_plugin_prismic_previews__WEBPACK_IMPORTED_MODULE_11__.withPrismicPreview)(Project));
const query = "1782781380";

/***/ }),

/***/ "./assets/WhiteLogo.svg":
/*!******************************!*\
  !*** ./assets/WhiteLogo.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var React = __webpack_require__(/*! react */ "react");

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