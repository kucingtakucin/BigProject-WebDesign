module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("FcXd");


/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "CSOn":
/***/ (function(module, exports) {

module.exports = require("react-transition-group");

/***/ }),

/***/ "FcXd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppAside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Zdas");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("RXBc");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class StrukOrg extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx("title", null, "Laboratorium Komputasi FMIPA UNS | Profil | Struktur Organisasi"), __jsx("link", {
      rel: "icon",
      href: "/favicon.ico"
    })), __jsx(_index__WEBPACK_IMPORTED_MODULE_5__["AppHeader"], null, __jsx(_index__WEBPACK_IMPORTED_MODULE_5__["AppNavbar"], null)), __jsx("main", {
      className: "App-main"
    }, __jsx("section", {
      id: "StrukOrg",
      className: "p-3"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      className: "themed-container"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/"
    }, __jsx("a", null, "Beranda"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
      active: true
    }, "Profil"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbItem"], {
      active: true
    }, "Struktur Organisasi")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "9"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: "12"
    }, __jsx("h1", {
      className: "border-bottom font-weight-bold pl-4 pr-4 mb-4"
    }, "Struktur Organisasi"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: "12",
      className: "d-flex align-items-center justify-content-center"
    }, __jsx("img", {
      src: erd,
      alt: "ERD",
      className: "img-thumbnail"
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "3",
      className: "border-left"
    }, __jsx(_components_AppAside__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null)))))), __jsx(_index__WEBPACK_IMPORTED_MODULE_5__["AppFooter"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (StrukOrg);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ pages_Home; });
__webpack_require__.d(__webpack_exports__, "AppNavbar", function() { return /* binding */ AppNavbar; });
__webpack_require__.d(__webpack_exports__, "AppHeader", function() { return /* binding */ pages_AppHeader; });
__webpack_require__.d(__webpack_exports__, "AppMain", function() { return /* binding */ pages_AppMain; });
__webpack_require__.d(__webpack_exports__, "AppFooter", function() { return /* binding */ pages_AppFooter; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "react-transition-group"
var external_react_transition_group_ = __webpack_require__("CSOn");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./src/components/Beranda/CarouselLab/CarouselLab.js
var __jsx = external_react_default.a.createElement;



const CarouselLab = () => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = Object(external_react_["useState"])(0);
  const {
    0: animating,
    1: setAnimating
  } = Object(external_react_["useState"])(false);
  const items = [{
    src: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/1000/400`,
    altText: 'Slide 1',
    caption: 'Slide 1'
  }, {
    src: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/1000/400`,
    altText: 'Slide 2',
    caption: 'Slide 2'
  }, {
    src: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/1000/400`,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }];

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return __jsx(external_reactstrap_["CarouselItem"], {
      onExiting: () => setAnimating(true),
      onExited: () => setAnimating(false),
      key: item.src
    }, __jsx("img", {
      src: item.src,
      alt: item.altText,
      className: "img-fluid"
    }), __jsx(external_reactstrap_["CarouselCaption"], {
      captionText: item.caption,
      captionHeader: item.caption
    }));
  });
  return __jsx("section", {
    id: "CarouselLab",
    className: "p-3 d-flex text-center flex-row align-items-center justify-content-center"
  }, __jsx(external_reactstrap_["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: previous
  }, __jsx(external_reactstrap_["CarouselIndicators"], {
    items: items,
    activeIndex: activeIndex,
    onClickHandler: goToIndex
  }), slides, __jsx(external_reactstrap_["CarouselControl"], {
    direction: "prev",
    directionText: "Previous",
    onClickHandler: previous
  }), __jsx(external_reactstrap_["CarouselControl"], {
    direction: "next",
    directionText: "Next",
    onClickHandler: next
  })));
};

/* harmony default export */ var CarouselLab_CarouselLab = (CarouselLab);
// EXTERNAL MODULE: ./src/components/AppAside.js
var AppAside = __webpack_require__("Zdas");

// CONCATENATED MODULE: ./src/components/Beranda/Berita/Berita.js
var Berita_jsx = external_react_default.a.createElement;




class Berita_Berita extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      gambar1: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/400/200`,
      gambar2: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/400/200`,
      gambar3: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/400/200`,
      gambar4: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/300/150`,
      gambar5: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/300/150`,
      gambar6: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/300/150`
    };
  }

  render() {
    return Berita_jsx("section", {
      id: "Berita",
      className: "p-3"
    }, Berita_jsx(external_reactstrap_["Container"], {
      className: "themed-container"
    }, Berita_jsx(external_reactstrap_["Row"], null, Berita_jsx(external_reactstrap_["Col"], {
      md: "12"
    }, Berita_jsx("h1", {
      className: "border-bottom font-weight-bold pl-4 pr-4 mb-4"
    }, "Berita"))), Berita_jsx(external_reactstrap_["Row"], null, Berita_jsx(external_reactstrap_["Col"], {
      lg: "5"
    }, Berita_jsx(external_reactstrap_["Card"], {
      className: "mb-2"
    }, Berita_jsx(external_reactstrap_["CardBody"], null, Berita_jsx(external_reactstrap_["CardImg"], {
      top: true,
      src: this.state.gambar1,
      alt: "React",
      className: "img-fluid"
    }), Berita_jsx(external_reactstrap_["CardTitle"], null, Berita_jsx("h1", {
      className: "mt-1"
    }, "React : A Javascript library for building user interfaces")), Berita_jsx(external_reactstrap_["CardText"], {
      className: "mb-2"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dicta ea ipsum maiores optio repellendus similique tenetur ut veniam!?..."), Berita_jsx(external_reactstrap_["CardText"], null, Berita_jsx("small", {
      className: "text-muted"
    }, "Last updated 3 mins ago")), Berita_jsx(external_reactstrap_["Button"], {
      color: "info"
    }, "Selengkapnya ..."))), Berita_jsx(external_reactstrap_["Card"], {
      className: "mb-2"
    }, Berita_jsx(external_reactstrap_["CardBody"], null, Berita_jsx(external_reactstrap_["CardImg"], {
      top: true,
      src: this.state.gambar2,
      alt: "React",
      className: "img-fluid"
    }), Berita_jsx(external_reactstrap_["CardTitle"], null, Berita_jsx("h1", {
      className: "mt-1"
    }, "Reactstrap : React Bootstrap 4 Components")), Berita_jsx(external_reactstrap_["CardText"], {
      className: "mb-2"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dicta ea ipsum maiores optio repellendus similique tenetur ut veniam!?..."), Berita_jsx(external_reactstrap_["CardText"], null, Berita_jsx("small", {
      className: "text-muted"
    }, "Last updated 3 mins ago")), Berita_jsx(external_reactstrap_["Button"], {
      color: "info"
    }, "Selengkapnya ..."))), Berita_jsx(external_reactstrap_["Card"], {
      className: "mb-2"
    }, Berita_jsx(external_reactstrap_["CardBody"], null, Berita_jsx(external_reactstrap_["CardImg"], {
      top: true,
      src: this.state.gambar3,
      alt: "React",
      className: "img-fluid"
    }), Berita_jsx(external_reactstrap_["CardTitle"], null, Berita_jsx("h1", {
      className: "mt-1"
    }, "SASS : CSS with superpowers")), Berita_jsx(external_reactstrap_["CardText"], {
      className: "mb-2"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi dicta ea ipsum maiores optio repellendus similique tenetur ut veniam!?..."), Berita_jsx(external_reactstrap_["CardText"], null, Berita_jsx("small", {
      className: "text-muted"
    }, "Last updated 3 mins ago")), Berita_jsx(external_reactstrap_["Button"], {
      color: "info"
    }, "Selengkapnya ...")))), Berita_jsx(external_reactstrap_["Col"], {
      lg: "4",
      className: "d-flex flex-column border-right"
    }, Berita_jsx(external_reactstrap_["Card"], {
      className: "mb-2"
    }, Berita_jsx(external_reactstrap_["CardBody"], null, Berita_jsx(external_reactstrap_["CardImg"], {
      top: true,
      src: this.state.gambar4,
      alt: "Ruby on Rails",
      className: "img-fluid"
    }), Berita_jsx(external_reactstrap_["CardTitle"], null, Berita_jsx("h2", {
      className: "mt-1"
    }, "Ruby on Rails : Web Development that's doesn't hurt")), Berita_jsx(external_reactstrap_["CardText"], {
      className: "mb-2"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus consectetur harum in, possimus sunt tempora....."), Berita_jsx(external_reactstrap_["CardText"], null, Berita_jsx("small", {
      className: "text-muted"
    }, "Last updated 3 mins ago")), Berita_jsx(external_reactstrap_["Button"], {
      color: "info"
    }, "Selengkapnya ..."))), Berita_jsx(external_reactstrap_["Card"], {
      className: "mb-2"
    }, Berita_jsx(external_reactstrap_["CardBody"], null, Berita_jsx(external_reactstrap_["CardImg"], {
      top: true,
      src: this.state.gambar5,
      alt: "Ruby on Rails",
      className: "img-fluid"
    }), Berita_jsx(external_reactstrap_["CardTitle"], null, Berita_jsx("h2", {
      className: "mt-1"
    }, "Django : The Web framework for perfectionists with deadlines")), Berita_jsx(external_reactstrap_["CardText"], {
      className: "mb-2"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti dolor, illum mollitia natus porro sint!...."), Berita_jsx(external_reactstrap_["CardText"], null, Berita_jsx("small", {
      className: "text-muted"
    }, "Last updated 3 mins ago")), Berita_jsx(external_reactstrap_["Button"], {
      color: "info"
    }, "Selengkapnya ..."))), Berita_jsx(external_reactstrap_["Card"], {
      className: "mb-2"
    }, Berita_jsx(external_reactstrap_["CardBody"], null, Berita_jsx(external_reactstrap_["CardImg"], {
      top: true,
      src: this.state.gambar6,
      alt: "Laravel",
      className: "img-fluid"
    }), Berita_jsx(external_reactstrap_["CardTitle"], null, Berita_jsx("h2", {
      className: "mt-1"
    }, "Laravel : The Php Framework for web artisans")), Berita_jsx(external_reactstrap_["CardText"], {
      className: "mb-2"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid architecto iste nulla sed sint?...."), Berita_jsx(external_reactstrap_["CardText"], null, Berita_jsx("small", {
      className: "text-muted"
    }, "Last updated 3 mins ago")), Berita_jsx(external_reactstrap_["Button"], {
      color: "info"
    }, "Selengkapnya ...")))), Berita_jsx(external_reactstrap_["Col"], {
      lg: "3"
    }, Berita_jsx(AppAside["a" /* default */], null))), Berita_jsx(external_reactstrap_["Row"], null, Berita_jsx(external_reactstrap_["Col"], {
      md: "12",
      className: "mt-4 d-flex flex-row justify-content-center"
    }, Berita_jsx(external_reactstrap_["Pagination"], {
      "aria-label": "Labkom Page navigation"
    }, Berita_jsx(external_reactstrap_["PaginationItem"], {
      disabled: true
    }, Berita_jsx(external_reactstrap_["PaginationLink"], {
      first: true,
      href: "#"
    })), Berita_jsx(external_reactstrap_["PaginationItem"], {
      disabled: true
    }, Berita_jsx(external_reactstrap_["PaginationLink"], {
      previous: true,
      href: "#"
    })), Berita_jsx(external_reactstrap_["PaginationItem"], {
      active: true
    }, Berita_jsx(external_reactstrap_["PaginationLink"], {
      href: "#"
    }, "1")), Berita_jsx(external_reactstrap_["PaginationItem"], null, Berita_jsx(external_reactstrap_["PaginationLink"], {
      href: "#"
    }, "2")), Berita_jsx(external_reactstrap_["PaginationItem"], null, Berita_jsx(external_reactstrap_["PaginationLink"], {
      href: "#"
    }, "3")), Berita_jsx(external_reactstrap_["PaginationItem"], null, Berita_jsx(external_reactstrap_["PaginationLink"], {
      next: true,
      href: "#"
    })), Berita_jsx(external_reactstrap_["PaginationItem"], null, Berita_jsx(external_reactstrap_["PaginationLink"], {
      last: true,
      href: "#"
    })))))));
  }

}

/* harmony default export */ var Beranda_Berita_Berita = (Berita_Berita);
// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./src/components/Beranda/SOP/SOP.js
var SOP_jsx = external_react_default.a.createElement;





class SOP_SOP extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      ruang: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/200/150`,
      alat: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/200/150`,
      studio: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/200/150`
    };
  }

  componentDidMount() {
    external_isomorphic_unfetch_default()(`https://picsum.photos/v2/list?page=${Math.floor(Math.random() * 5 + 1)}&limit=100`).then(response => response.json()).then(results => {
      this.setState({
        ruang: results[Math.floor(Math.random() * 100 + 1)].download_url,
        alat: results[Math.floor(Math.random() * 100 + 1)].download_url,
        studio: results[Math.floor(Math.random() * 100 + 1)].download_url
      });
    }).catch(errors => console.log('Error:', errors));
  }

  render() {
    return SOP_jsx("section", {
      id: "SOP",
      className: "p-3"
    }, SOP_jsx(external_reactstrap_["Container"], {
      className: "themed-container"
    }, SOP_jsx(external_reactstrap_["Row"], null, SOP_jsx(external_reactstrap_["Col"], {
      md: "12"
    }, SOP_jsx("h1", {
      className: "border-bottom font-weight-bold pl-4 pr-4 mb-4"
    }, "Standar Operasional Prosedur"))), SOP_jsx(external_reactstrap_["Row"], null, SOP_jsx(external_reactstrap_["Col"], {
      md: "12"
    }, SOP_jsx(external_reactstrap_["Media"], {
      className: "border rounded"
    }, SOP_jsx(external_reactstrap_["Media"], {
      left: true,
      top: true,
      href: "#"
    }, SOP_jsx("img", {
      src: this.state.ruang,
      alt: "cat1",
      width: "200px",
      className: "img-fluid m-3"
    })), SOP_jsx(external_reactstrap_["Media"], {
      body: true,
      className: "mt-auto mb-auto"
    }, SOP_jsx(external_reactstrap_["Media"], {
      heading: true
    }, "SOP Peminjaman Ruang"), SOP_jsx("p", null, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ..."), SOP_jsx(link_default.a, {
      href: "/Layanan/PeminjamanRuang"
    }, SOP_jsx("a", {
      className: "btn btn-info"
    }, "Selengkapnya ...")))), SOP_jsx(external_reactstrap_["Media"], {
      className: "mt-2 border rounded"
    }, SOP_jsx(external_reactstrap_["Media"], {
      left: true,
      middle: true,
      href: "#"
    }, SOP_jsx("img", {
      src: this.state.alat,
      alt: "cat2",
      width: "200px",
      className: "img-fluid m-3"
    })), SOP_jsx(external_reactstrap_["Media"], {
      body: true,
      className: "mt-auto mb-auto"
    }, SOP_jsx(external_reactstrap_["Media"], {
      heading: true
    }, "SOP Peminjaman Alat"), SOP_jsx("p", null, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ..."), SOP_jsx(link_default.a, {
      href: "/Layanan/Peminjaman-Alat"
    }, SOP_jsx("a", {
      className: "btn btn-info"
    }, "Selengkapnya ...")))), SOP_jsx(external_reactstrap_["Media"], {
      className: "mt-2 border rounded"
    }, SOP_jsx(external_reactstrap_["Media"], {
      left: true,
      bottom: true,
      href: "#"
    }, SOP_jsx("img", {
      src: this.state.studio,
      alt: "cat3",
      width: "200px",
      className: "img-fluid m-3"
    })), SOP_jsx(external_reactstrap_["Media"], {
      body: true,
      className: "mt-auto mb-auto"
    }, SOP_jsx(external_reactstrap_["Media"], {
      heading: true
    }, "SOP Peminjaman Studio"), SOP_jsx("p", null, "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus ..."), SOP_jsx(link_default.a, {
      href: "/Layanan/Peminjaman-Studio"
    }, SOP_jsx("a", {
      className: "btn btn-info"
    }, "Selengkapnya ..."))))))));
  }

}

/* harmony default export */ var Beranda_SOP_SOP = (SOP_SOP);
// CONCATENATED MODULE: ./src/components/Beranda/Asisten/Asisten.js
var Asisten_jsx = external_react_default.a.createElement;



class Asisten_Asisten extends external_react_["Component"] {
  render() {
    return Asisten_jsx("section", {
      id: "Asisten",
      className: "p-3"
    }, Asisten_jsx(external_reactstrap_["Container"], {
      className: "themed-container"
    }, Asisten_jsx(external_reactstrap_["Row"], null, Asisten_jsx(external_reactstrap_["Col"], {
      md: "12"
    }, Asisten_jsx("h1", {
      className: "border-bottom font-weight-bold pl-4 pr-4 mb-4"
    }, "Asisten"))), Asisten_jsx(external_reactstrap_["Row"], null, Asisten_jsx(external_reactstrap_["Col"], {
      md: "4"
    }, Asisten_jsx(external_reactstrap_["Card"], {
      className: "mb-2"
    }, Asisten_jsx(external_reactstrap_["CardBody"], {
      className: "text-center"
    }, Asisten_jsx(external_reactstrap_["CardImg"], {
      top: true,
      src: "/img/p_cat2.png",
      alt: "Ruby on Rails",
      className: "img-thumbnail"
    }), Asisten_jsx(external_reactstrap_["CardTitle"], null, Asisten_jsx("h3", {
      className: "mt-1"
    }, "Ruby on Rails")), Asisten_jsx(external_reactstrap_["CardText"], {
      className: "mb-2"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, magnam."), Asisten_jsx(external_reactstrap_["Button"], {
      color: "secondary"
    }, "Koordinator")))), Asisten_jsx(external_reactstrap_["Col"], {
      md: "4"
    }, Asisten_jsx(external_reactstrap_["Card"], {
      className: "mb-2"
    }, Asisten_jsx(external_reactstrap_["CardBody"], {
      className: "text-center"
    }, Asisten_jsx(external_reactstrap_["CardImg"], {
      top: true,
      src: "/img/p_cat1.png",
      alt: "Ruby on Rails",
      className: "img-thumbnail"
    }), Asisten_jsx(external_reactstrap_["CardTitle"], null, Asisten_jsx("h3", {
      className: "mt-1"
    }, "Django")), Asisten_jsx(external_reactstrap_["CardText"], {
      className: "mb-2"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, reiciendis."), Asisten_jsx(external_reactstrap_["Button"], {
      color: "secondary"
    }, "Sekretaris")))), Asisten_jsx(external_reactstrap_["Col"], {
      md: "4"
    }, Asisten_jsx(external_reactstrap_["Card"], {
      className: "mb-2"
    }, Asisten_jsx(external_reactstrap_["CardBody"], {
      className: "text-center"
    }, Asisten_jsx(external_reactstrap_["CardImg"], {
      top: true,
      src: "/img/p_cat2.png",
      alt: "Laravel",
      className: "img-thumbnail"
    }), Asisten_jsx(external_reactstrap_["CardTitle"], null, Asisten_jsx("h3", {
      className: "mt-1"
    }, "Laravel")), Asisten_jsx(external_reactstrap_["CardText"], {
      className: "mb-2"
    }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, et?"), Asisten_jsx(external_reactstrap_["Button"], {
      color: "secondary"
    }, "Bendahara"))))), Asisten_jsx(external_reactstrap_["Row"], null, Asisten_jsx(external_reactstrap_["Col"], {
      md: "12",
      className: "mt-4 d-flex flex-row justify-content-center"
    }, Asisten_jsx(external_reactstrap_["Pagination"], {
      "aria-label": "Labkom Page navigation"
    }, Asisten_jsx(external_reactstrap_["PaginationItem"], {
      disabled: true
    }, Asisten_jsx(external_reactstrap_["PaginationLink"], {
      first: true,
      href: "#"
    })), Asisten_jsx(external_reactstrap_["PaginationItem"], {
      disabled: true
    }, Asisten_jsx(external_reactstrap_["PaginationLink"], {
      previous: true,
      href: "#"
    })), Asisten_jsx(external_reactstrap_["PaginationItem"], {
      active: true
    }, Asisten_jsx(external_reactstrap_["PaginationLink"], {
      href: "#"
    }, "1")), Asisten_jsx(external_reactstrap_["PaginationItem"], null, Asisten_jsx(external_reactstrap_["PaginationLink"], {
      href: "#"
    }, "2")), Asisten_jsx(external_reactstrap_["PaginationItem"], null, Asisten_jsx(external_reactstrap_["PaginationLink"], {
      href: "#"
    }, "3")), Asisten_jsx(external_reactstrap_["PaginationItem"], null, Asisten_jsx(external_reactstrap_["PaginationLink"], {
      next: true,
      href: "#"
    })), Asisten_jsx(external_reactstrap_["PaginationItem"], null, Asisten_jsx(external_reactstrap_["PaginationLink"], {
      last: true,
      href: "#"
    })))))));
  }

}

/* harmony default export */ var Beranda_Asisten_Asisten = (Asisten_Asisten);
// CONCATENATED MODULE: ./src/pages/index.js
var pages_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











class pages_Home extends external_react_["Component"] {
  render() {
    return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", null, "Laboratorium Komputasi FMIPA UNS"), pages_jsx("link", {
      rel: "icon",
      href: "/favicon.ico"
    })), pages_jsx(pages_AppHeader, null, pages_jsx(AppNavbar, null)), pages_jsx(pages_AppMain, null), pages_jsx(pages_AppFooter, null));
  }

}
function AppNavbar() {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return pages_jsx(external_reactstrap_["Navbar"], {
    color: "info",
    dark: true,
    fixed: "top",
    expand: "md",
    className: "App-nav shadow"
  }, pages_jsx(external_reactstrap_["Container"], {
    fluid: true,
    className: "text-center"
  }, pages_jsx(external_reactstrap_["NavbarBrand"], {
    href: "/",
    className: "font-weight-bold"
  }, pages_jsx("img", {
    src: "/img/logo.svg",
    alt: "Labkom",
    width: "30",
    height: "30",
    className: "d-inline-block align-top mr-1"
  })), pages_jsx(external_reactstrap_["NavbarToggler"], {
    onClick: toggle
  }), pages_jsx(external_reactstrap_["Collapse"], {
    isOpen: isOpen,
    navbar: true
  }, pages_jsx(external_reactstrap_["Nav"], {
    className: "mr-auto",
    navbar: true
  }, pages_jsx(external_reactstrap_["NavItem"], null, pages_jsx(link_default.a, {
    href: "/"
  }, pages_jsx("a", {
    className: "nav-link active"
  }, "Beranda"))), pages_jsx(external_reactstrap_["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true
  }, pages_jsx(external_reactstrap_["DropdownToggle"], {
    nav: true,
    caret: true
  }, "Profil"), pages_jsx(external_reactstrap_["DropdownMenu"], {
    right: true
  }, pages_jsx(external_reactstrap_["DropdownItem"], {
    className: "d-flex flex-column text-center pr-0 pl-0"
  }, pages_jsx(link_default.a, {
    href: "/Profil/VisiMisi"
  }, pages_jsx("a", null, "Visi & Misi"))), pages_jsx(external_reactstrap_["DropdownItem"], {
    className: "d-flex flex-column text-center pr-0 pl-0"
  }, pages_jsx(link_default.a, {
    href: "/Profil/Sejarah"
  }, pages_jsx("a", null, "Sejarah"))), pages_jsx(external_reactstrap_["DropdownItem"], {
    className: "d-flex flex-column text-center pr-0 pl-0"
  }, pages_jsx(link_default.a, {
    href: "/Profil/StrukturOrganisasi"
  }, pages_jsx("a", null, "Struktur Organisasi"))))), pages_jsx(external_reactstrap_["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true
  }, pages_jsx(external_reactstrap_["DropdownToggle"], {
    nav: true,
    caret: true
  }, "Fasilitas"), pages_jsx(external_reactstrap_["DropdownMenu"], {
    right: true
  }, pages_jsx(external_reactstrap_["DropdownItem"], {
    className: "d-flex flex-column text-center pr-0 pl-0"
  }, pages_jsx(link_default.a, {
    href: "/Fasilitas/LabDataScience"
  }, pages_jsx("a", null, "Lab Data Science"))), pages_jsx(external_reactstrap_["DropdownItem"], {
    className: "d-flex flex-column text-center pr-0 pl-0"
  }, pages_jsx(link_default.a, {
    href: "/Fasilitas/LabMikrokontroller"
  }, pages_jsx("a", null, "Lab Mikrokontroller"))), pages_jsx(external_reactstrap_["DropdownItem"], {
    className: "d-flex flex-column text-center pr-0 pl-0"
  }, pages_jsx(link_default.a, {
    href: "/Fasilitas/LabMultimedia"
  }, pages_jsx("a", null, "Lab Multimedia"))), pages_jsx(external_reactstrap_["DropdownItem"], {
    className: "d-flex flex-column text-center pr-0 pl-0"
  }, pages_jsx(link_default.a, {
    href: "/Fasilitas/LabPemrograman"
  }, pages_jsx("a", null, "Lab Pemrograman"))), pages_jsx(external_reactstrap_["DropdownItem"], {
    className: "d-flex flex-column text-center pr-0 pl-0"
  }, pages_jsx(link_default.a, {
    href: "/Fasilitas/LabRPL"
  }, pages_jsx("a", null, "Lab RPL"))))), pages_jsx(external_reactstrap_["UncontrolledDropdown"], {
    nav: true,
    inNavbar: true
  }, pages_jsx(external_reactstrap_["DropdownToggle"], {
    nav: true,
    caret: true
  }, "Layanan"), pages_jsx(external_reactstrap_["DropdownMenu"], {
    right: true
  }, pages_jsx(external_reactstrap_["DropdownItem"], {
    className: "d-flex flex-column text-center pr-0 pl-0"
  }, pages_jsx(link_default.a, {
    href: "/Layanan/PeminjamanAlat"
  }, pages_jsx("a", null, "Peminjaman Alat"))), pages_jsx(external_reactstrap_["DropdownItem"], {
    className: "d-flex flex-column text-center pr-0 pl-0"
  }, pages_jsx(link_default.a, {
    href: "/Layanan/PeminjamanRuang"
  }, pages_jsx("a", null, "Peminjaman Ruang"))), pages_jsx(external_reactstrap_["DropdownItem"], {
    className: "d-flex flex-column text-center pr-0 pl-0"
  }, pages_jsx(link_default.a, {
    href: "/Layanan/PeminjamanStudio"
  }, pages_jsx("a", null, "Peminjaman Studio"))))), pages_jsx(external_reactstrap_["NavItem"], null, pages_jsx(link_default.a, {
    href: "/Contact"
  }, pages_jsx("a", {
    className: "nav-link"
  }, "Contact")))), pages_jsx(external_reactstrap_["NavbarText"], null, "React Js version : ", external_react_default.a.version))));
}
class pages_AppHeader extends external_react_["Component"] {
  render() {
    return pages_jsx("header", {
      className: "App-header"
    }, this.props.children, pages_jsx(external_reactstrap_["Jumbotron"], {
      className: "d-flex flex-column align-items-center justify-content-center m-0"
    }, pages_jsx("h1", {
      className: "display-3 font-weight-bold text-light mt-4 mb-0"
    }, "Laboratorium ", pages_jsx("span", {
      className: "labkom"
    }, "Komputasi"), " FMIPA"), pages_jsx("h1", {
      className: "display-4 text-light m-0"
    }, "Universitas Sebelas Maret")));
  }

}
class pages_AppMain extends external_react_["Component"] {
  render() {
    return pages_jsx("main", {
      className: "App-main"
    }, pages_jsx(CarouselLab_CarouselLab, null), pages_jsx(Beranda_Berita_Berita, null), pages_jsx(Beranda_SOP_SOP, null), pages_jsx(Beranda_Asisten_Asisten, null));
  }

}
class pages_AppFooter extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }

  componentDidMount() {
    this.now = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.now);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return pages_jsx("footer", {
      className: "App-footer d-flex flex-column align-items-center justify-content-center"
    }, pages_jsx(external_reactstrap_["Row"], null, pages_jsx(external_reactstrap_["Col"], {
      md: "12",
      className: "p-0"
    }, pages_jsx("p", {
      className: "text-white m-0"
    }, "Copyright \xA9 ", this.state.date.getFullYear(), ". Laboratorium Komputasi FMIPA UNS. All Rights Reserved."))));
  }

} // Prop-Types

external_reactstrap_["Navbar"].propTypes = {
  light: external_prop_types_default.a.bool,
  dark: external_prop_types_default.a.bool,
  fixed: external_prop_types_default.a.string,
  color: external_prop_types_default.a.string,
  role: external_prop_types_default.a.string,
  expand: external_prop_types_default.a.oneOfType([external_prop_types_default.a.bool, external_prop_types_default.a.string]),
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]) // pass in custom element to use

};
external_reactstrap_["NavbarBrand"].propTypes = {
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]) // pass in custom element to use

};
external_reactstrap_["NavbarText"].propTypes = {
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]) // pass in custom element to use

};
external_reactstrap_["Container"].propTypes = {
  fluid: external_prop_types_default.a.oneOfType([external_prop_types_default.a.bool, external_prop_types_default.a.string]) // applies .container-fluid class if bool or .container-{breakpoint} if string

};
external_reactstrap_["Row"].propTypes = {
  noGutters: external_prop_types_default.a.bool,
  // see https://reactstrap.github.io/components/form Form Grid with Form Row
  form: external_prop_types_default.a.bool,
  xs: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string]),
  sm: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string]),
  md: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string]),
  lg: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string]),
  xl: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string])
};
const stringOrNumberProp = external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string]);
const columnProps = external_prop_types_default.a.oneOfType([external_prop_types_default.a.string, external_prop_types_default.a.number, external_prop_types_default.a.bool, external_prop_types_default.a.shape({
  size: external_prop_types_default.a.oneOfType([external_prop_types_default.a.bool, external_prop_types_default.a.number, external_prop_types_default.a.string]),
  // example size values:
  // 12 || "12" => col-12 or col-`width`-12
  // auto => col-auto or col-`width`-auto
  // true => col or col-`width`
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
external_reactstrap_["Col"].propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: external_prop_types_default.a.array
};
external_reactstrap_["Jumbotron"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  fluid: external_prop_types_default.a.bool,
  className: external_prop_types_default.a.string
};
external_reactstrap_["Card"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  inverse: external_prop_types_default.a.bool,
  color: external_prop_types_default.a.string,
  body: external_prop_types_default.a.bool,
  className: external_prop_types_default.a.string
};
external_reactstrap_["CardBody"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string
};
external_reactstrap_["CardColumns"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string
};
external_reactstrap_["CardDeck"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string
};
external_reactstrap_["CardFooter"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string
};
external_reactstrap_["CardGroup"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string
};
external_reactstrap_["CardHeader"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string
};
external_reactstrap_["CardImg"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: external_prop_types_default.a.bool,
  bottom: external_prop_types_default.a.bool
};
external_reactstrap_["CardImgOverlay"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string
};
external_reactstrap_["CardLink"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string,
  // ref will only get you a reference to the CardLink component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string])
};
external_reactstrap_["CardSubtitle"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string
};
external_reactstrap_["CardText"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string
};
external_reactstrap_["CardTitle"].propTypes = {
  // Pass in a Component to override default element
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string
};
external_reactstrap_["Button"].propTypes = {
  active: external_prop_types_default.a.bool,
  'aria-label': external_prop_types_default.a.string,
  block: external_prop_types_default.a.bool,
  color: external_prop_types_default.a.string,
  // default: 'secondary'
  disabled: external_prop_types_default.a.bool,
  outline: external_prop_types_default.a.bool,
  // Pass in a Component to override default button element
  // example: react-router Link
  // default: 'button'
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string, external_prop_types_default.a.shape({
    $$typeof: external_prop_types_default.a.symbol,
    render: external_prop_types_default.a.func
  }), external_prop_types_default.a.arrayOf(external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string, external_prop_types_default.a.shape({
    $$typeof: external_prop_types_default.a.symbol,
    render: external_prop_types_default.a.func
  })]))]),
  // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
  innerRef: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.func, external_prop_types_default.a.string]),
  onClick: external_prop_types_default.a.func,
  size: external_prop_types_default.a.string,
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  cssModule: external_prop_types_default.a.object,
  // use close prop for BS4 close icon utility
  close: external_prop_types_default.a.bool
};
external_reactstrap_["Button"].defaultProps = {
  color: 'secondary',
  tag: 'button'
};
external_reactstrap_["Pagination"].propTypes = {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  listClassName: external_prop_types_default.a.string,
  cssModule: external_prop_types_default.a.object,
  size: external_prop_types_default.a.string,
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  listTag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  'aria-label': external_prop_types_default.a.string
};
external_reactstrap_["PaginationItem"].propTypes = {
  active: external_prop_types_default.a.bool,
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  cssModule: external_prop_types_default.a.object,
  disabled: external_prop_types_default.a.bool,
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string])
};
external_reactstrap_["PaginationLink"].propTypes = {
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  cssModule: external_prop_types_default.a.object,
  next: external_prop_types_default.a.bool,
  previous: external_prop_types_default.a.bool,
  first: external_prop_types_default.a.bool,
  last: external_prop_types_default.a.bool,
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  'aria-label': external_prop_types_default.a.string
};
external_reactstrap_["Media"].propTypes = {
  body: external_prop_types_default.a.bool,
  bottom: external_prop_types_default.a.bool,
  children: external_prop_types_default.a.node,
  className: external_prop_types_default.a.string,
  heading: external_prop_types_default.a.bool,
  left: external_prop_types_default.a.bool,
  list: external_prop_types_default.a.bool,
  middle: external_prop_types_default.a.bool,
  object: external_prop_types_default.a.bool,
  right: external_prop_types_default.a.bool,
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  top: external_prop_types_default.a.bool
};
external_reactstrap_["Carousel"].propTypes = {
  // the current active slide of the carousel
  activeIndex: external_prop_types_default.a.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: external_prop_types_default.a.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: external_prop_types_default.a.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: external_prop_types_default.a.bool,

  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: external_prop_types_default.a.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: external_prop_types_default.a.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // If set to false, carousel will not Autoplay (i.e. will not automatically cycle).
  interval: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.string, external_prop_types_default.a.bool]),
  children: external_prop_types_default.a.array,
  // called when the mouse enters the Carousel
  mouseEnter: external_prop_types_default.a.func,
  // called when the mouse exits the Carousel
  mouseLeave: external_prop_types_default.a.func,
  // controls whether the slide animation on the Carousel works or not
  slide: external_prop_types_default.a.bool,
  cssModule: external_prop_types_default.a.object,
  // controls whether the touch gestures on the Carousel works or not (default: true)
  enableTouch: external_prop_types_default.a.bool
};
external_reactstrap_["CarouselItem"].propTypes = _objectSpread(_objectSpread({}, external_react_transition_group_["Transition"].propTypes), {}, {
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  in: external_prop_types_default.a.bool,
  cssModule: external_prop_types_default.a.object,
  children: external_prop_types_default.a.node,
  slide: external_prop_types_default.a.bool
});
external_reactstrap_["CarouselControl"].propTypes = {
  direction: external_prop_types_default.a.oneOf(['prev', 'next']).isRequired,
  onClickHandler: external_prop_types_default.a.func.isRequired,
  cssModule: external_prop_types_default.a.object,
  directionText: external_prop_types_default.a.string
};
external_reactstrap_["CarouselIndicators"].propTypes = {
  items: external_prop_types_default.a.array.isRequired,
  activeIndex: external_prop_types_default.a.number.isRequired,
  cssModule: external_prop_types_default.a.object,
  onClickHandler: external_prop_types_default.a.func.isRequired
};
external_reactstrap_["CarouselCaption"].propTypes = {
  captionHeader: external_prop_types_default.a.node,
  captionText: external_prop_types_default.a.node.isRequired,
  cssModule: external_prop_types_default.a.object
};
external_reactstrap_["Dropdown"].propTypes = {
  a11y: external_prop_types_default.a.bool,
  // defaults to true. Set to false to enable more bootstrap like tabbing behavior
  disabled: external_prop_types_default.a.bool,
  direction: external_prop_types_default.a.oneOf(['up', 'down', 'left', 'right']),
  group: external_prop_types_default.a.bool,
  isOpen: external_prop_types_default.a.bool,
  // For Dropdown usage inside a Nav
  nav: external_prop_types_default.a.bool,
  active: external_prop_types_default.a.bool,
  // For Dropdown usage inside a Navbar (disables popper)
  inNavbar: external_prop_types_default.a.bool,
  tag: external_prop_types_default.a.string,
  // default: 'div' unless nav=true, then 'li'
  toggle: external_prop_types_default.a.func,
  setActiveFromChild: external_prop_types_default.a.bool
};
external_reactstrap_["DropdownToggle"].propTypes = {
  caret: external_prop_types_default.a.bool,
  color: external_prop_types_default.a.string,
  className: external_prop_types_default.a.string,
  disabled: external_prop_types_default.a.bool,
  onClick: external_prop_types_default.a.func,
  'data-toggle': external_prop_types_default.a.string,
  'aria-haspopup': external_prop_types_default.a.bool,
  // For DropdownToggle usage inside a Nav
  nav: external_prop_types_default.a.bool,
  // Defaults to Button component
  tag: external_prop_types_default.a.any
};
external_reactstrap_["DropdownMenu"].propTypes = {
  tag: external_prop_types_default.a.string,
  children: external_prop_types_default.a.node.isRequired,
  right: external_prop_types_default.a.bool,
  flip: external_prop_types_default.a.bool,
  // default: true,
  className: external_prop_types_default.a.string,
  cssModule: external_prop_types_default.a.object,
  // Custom modifiers that are passed to DropdownMenu.js, see https://popper.js.org/popper-documentation.html#modifiers
  modifiers: external_prop_types_default.a.object,
  persist: external_prop_types_default.a.bool,
  // presist the popper, even when closed. See #779 for reasoning
  // passed to popper, see https://popper.js.org/popper-documentation.html#Popper.Defaults.positionFixed
  positionFixed: external_prop_types_default.a.bool
};
external_reactstrap_["DropdownItem"].propTypes = {
  children: external_prop_types_default.a.node,
  active: external_prop_types_default.a.bool,
  disabled: external_prop_types_default.a.bool,
  divider: external_prop_types_default.a.bool,
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  header: external_prop_types_default.a.bool,
  onClick: external_prop_types_default.a.func,
  className: external_prop_types_default.a.string,
  cssModule: external_prop_types_default.a.object,
  toggle: external_prop_types_default.a.bool // default: true

};
external_reactstrap_["Breadcrumb"].propTypes = {
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  listTag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  className: external_prop_types_default.a.string,
  listClassName: external_prop_types_default.a.string,
  cssModule: external_prop_types_default.a.object,
  children: external_prop_types_default.a.node,
  'aria-label': external_prop_types_default.a.string
};
external_reactstrap_["BreadcrumbItem"].propTypes = {
  tag: external_prop_types_default.a.oneOfType([external_prop_types_default.a.func, external_prop_types_default.a.string]),
  active: external_prop_types_default.a.bool,
  className: external_prop_types_default.a.string,
  cssModule: external_prop_types_default.a.object
};

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "Zdas":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class AppAside extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      gambar1: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
      gambar2: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
      gambar3: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
      gambar4: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
      gambar5: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
      gambar6: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
      gambar7: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`,
      gambar8: `https://picsum.photos/id/${Math.floor(Math.random() * 1000 + 1)}/80/40`
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: "12"
    }, __jsx("h3", {
      className: "border-bottom font-weight-bold pl-2 pr-2 mb-2"
    }, "Most Popular"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "12"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      className: "mb-2"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      left: true,
      href: "#"
    }, __jsx("img", {
      src: this.state.gambar1,
      alt: "Kucing"
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      body: true,
      className: "m-auto"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      heading: true,
      className: "m-auto"
    }, __jsx("h6", {
      className: "pl-1 m-auto"
    }, "Lorem ipsum dolor sit amet.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      className: "mb-2"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      left: true,
      href: "#"
    }, __jsx("img", {
      src: this.state.gambar2,
      alt: "Kucing"
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      body: true,
      className: "m-auto"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      heading: true,
      className: "m-auto"
    }, __jsx("h6", {
      className: "pl-1 m-auto"
    }, "Lorem ipsum dolor sit amet.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      className: "mb-2"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      left: true,
      href: "#"
    }, __jsx("img", {
      src: this.state.gambar3,
      alt: "Kucing"
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      body: true,
      className: "m-auto"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      heading: true,
      className: "m-auto"
    }, __jsx("h6", {
      className: "pl-1 m-auto"
    }, "Lorem ipsum dolor sit amet.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      className: "mb-2"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      left: true,
      href: "#"
    }, __jsx("img", {
      src: this.state.gambar4,
      alt: "Kucing"
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      body: true,
      className: "m-auto"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      heading: true,
      className: "m-auto"
    }, __jsx("h6", {
      className: "pl-1 m-auto"
    }, "Lorem ipsum dolor sit amet.")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: "12"
    }, __jsx("h3", {
      className: "border-bottom font-weight-bold pl-2 pr-2 mb-2"
    }, "Hot News"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "12"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      className: "mb-2"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      left: true,
      href: "#"
    }, __jsx("img", {
      src: this.state.gambar5,
      alt: "Kucing"
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      body: true,
      className: "m-auto"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      heading: true,
      className: "m-auto"
    }, __jsx("h6", {
      className: "pl-1 m-auto"
    }, "Lorem ipsum dolor sit amet.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      className: "mb-2"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      left: true,
      href: "#"
    }, __jsx("img", {
      src: this.state.gambar6,
      alt: "Kucing"
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      body: true,
      className: "m-auto"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      heading: true,
      className: "m-auto"
    }, __jsx("h6", {
      className: "pl-1 m-auto"
    }, "Lorem ipsum dolor sit amet.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      className: "mb-2"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      left: true,
      href: "#"
    }, __jsx("img", {
      src: this.state.gambar7,
      alt: "Kucing"
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      body: true,
      className: "m-auto"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      heading: true,
      className: "m-auto"
    }, __jsx("h6", {
      className: "pl-1 m-auto"
    }, "Lorem ipsum dolor sit amet.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      className: "mb-2"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      left: true,
      href: "#"
    }, __jsx("img", {
      src: this.state.gambar8,
      alt: "Kucing"
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      body: true,
      className: "m-auto"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Media"], {
      heading: true,
      className: "m-auto"
    }, __jsx("h6", {
      className: "pl-1 m-auto"
    }, "Lorem ipsum dolor sit amet.")))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (AppAside);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });