/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./public/st.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./public/st.css ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\nul[class],\\r\\nol[class] {\\r\\n    padding: 0;\\r\\n}\\r\\nbody,\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nh4,\\r\\np,\\r\\nul[class],\\r\\nol[class],\\r\\nli,\\r\\nfigure,\\r\\nfigcaption,\\r\\nblockquote,\\r\\ndl,\\r\\ndd {\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    min-height: 100vh;\\r\\n    scroll-behavior: smooth;\\r\\n    text-rendering: optimizeSpeed;\\r\\n    line-height: 1.5;\\r\\n}\\r\\nul[class],\\r\\nol[class] {\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\na:not([class]) {\\r\\n    text-decoration-skip-ink: auto;\\r\\n}\\r\\nimg {\\r\\n    max-width: 100%;\\r\\n    display: block;\\r\\n}\\r\\n\\r\\narticle > * + * {\\r\\n    margin-top: 1em;\\r\\n}\\r\\n\\r\\ninput,\\r\\nbutton,\\r\\ntextarea,\\r\\nselect {\\r\\n    font: inherit;\\r\\n}\\r\\n\\r\\n@media (prefers-reduced-motion: reduce) {\\r\\n    * {\\r\\n        animation-duration: 0.01ms !important;\\r\\n        animation-iteration-count: 1 !important;\\r\\n        transition-duration: 0.01ms !important;\\r\\n        scroll-behavior: auto !important;\\r\\n    }\\r\\n}\\r\\n.main{\\r\\n    margin: 30px auto;\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    max-width: 1400px;\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.movie-gallery {\\r\\n    padding-left: 30px;\\r\\n    display: flex;\\r\\n    width: 75%;\\r\\n    flex-wrap: wrap;\\r\\n}\\r\\n.header{\\r\\n    display: flex;\\r\\n    width: 100%;\\r\\n    justify-content: space-evenly;\\r\\n}\\r\\n\\r\\n.gallery{\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    flex-direction: column;\\r\\n    position: relative;\\r\\n    margin:1%;\\r\\n    width: 22%;\\r\\n    min-width: 200px;\\r\\n    height: 300px;\\r\\n    border:3px solid grey;\\r\\n    border-radius: 20px;\\r\\n}\\r\\n.poster{\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    flex-grow: 1;\\r\\n    height: 210px;\\r\\n    padding: 10px;\\r\\n}\\r\\n.poster img{\\r\\n    width: 100%;\\r\\n    max-height: 100%;\\r\\n    min-width: 100%;\\r\\n    object-fit: cover;\\r\\n}\\r\\n.film-name{\\r\\n    text-align: center;\\r\\n}\\r\\n.film-year{\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.favorite-list{\\r\\n    position: fixed;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    padding: 30px 10px;\\r\\n    width: 25%;\\r\\n    background-color: #e5d7d7;\\r\\n    right: 20px;\\r\\n    top: 20px;\\r\\n}\\r\\n.list-body{\\r\\n    /*min-height: 10%;*/\\r\\n    /*display: flex;*/\\r\\n    /*align-items: center;*/\\r\\n    /*justify-content: center;*/\\r\\n    /*padding: 30px 10px;*/\\r\\n}\\r\\n.list-block{\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\n.modal-window{\\r\\n    z-index: 100;\\r\\n    position: fixed;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    background-color: rgba(0, 0, 0 ,0.8);\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n}\\r\\n.modal-body{\\r\\n    min-height: 100%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n    padding: 30px 10px;\\r\\n}\\r\\n.modal-content{\\r\\n    margin: 0 auto;\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    background-color: azure;\\r\\n    color: black;\\r\\n    max-width: 80%;\\r\\n    width: 100%;\\r\\n    padding: 30px;\\r\\n}\\r\\n.close-modal{\\r\\n    position: absolute;\\r\\n    right: 10px;\\r\\n    top: 10px;\\r\\n    font-size: 30px;\\r\\n    color: black;\\r\\n}\\r\\n.modal-poster{\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    flex-grow: 1;\\r\\n    height: 210px;\\r\\n    padding: 10px;\\r\\n}\\r\\n.modal-poster img {\\r\\n    max-height: 100%;\\r\\n    min-width: 100%;\\r\\n    object-fit: cover;\\r\\n}\\r\\n\\r\\n.star {\\r\\n    unicode-bidi: bidi-override;\\r\\n    direction: rtl;\\r\\n}\\r\\n.star > span {\\r\\n    display: inline-block;\\r\\n    z-index: 100;\\r\\n    width: 1.4em;\\r\\n}\\r\\n.star > span:before {\\r\\n    top: -15px;\\r\\n    right: 0px;\\r\\n    content: \\\"\\\\2605\\\";\\r\\n    position: absolute;\\r\\n    z-index: 6;\\r\\n    color: grey;\\r\\n    font-size: 45px;\\r\\n}\\r\\n\\r\\n/*.sp-white  {*/\\r\\n/*    unicode-bidi: bidi-override;*/\\r\\n/*    direction: rtl;*/\\r\\n/*}*/\\r\\n/*.sp-white  > span {*/\\r\\n/*    display: inline-block;*/\\r\\n/*    z-index: 100;*/\\r\\n/*    width: 1.4em;*/\\r\\n/*}*/\\r\\n/*.sp-white > span:before {*/\\r\\n/*    top: -15px;*/\\r\\n/*    right: 0px;*/\\r\\n/*    content: \\\"\\\\2605\\\";*/\\r\\n/*    position: absolute;*/\\r\\n/*    z-index: 6;*/\\r\\n/*    color: white;*/\\r\\n/*    font-size: 45px;*/\\r\\n/*    }*/\\r\\n\\r\\n/*.active-sp-white {*/\\r\\n/*    display: none;*/\\r\\n/*    background-color: darkgray;*/\\r\\n/*    z-index: 11;*/\\r\\n/*    right: 15px;*/\\r\\n/*    top: 15px;*/\\r\\n/*    max-width: 10%;*/\\r\\n/*    position: absolute;*/\\r\\n/*}*/\\r\\n.modal-star {\\r\\n    unicode-bidi: bidi-override;\\r\\n    direction: rtl;\\r\\n}\\r\\n.modal-star > span {\\r\\n    display: inline-block;\\r\\n    width: 1.4em;\\r\\n}\\r\\n.modal-star > span:before {\\r\\n    left: 100px;\\r\\n    bottom: 80px;\\r\\n    content: \\\"\\\\2605\\\";\\r\\n    position: absolute;\\r\\n    z-index: 6;\\r\\n    color: grey;\\r\\n    font-size: 45px;\\r\\n}\\r\\n.active-modal-star{\\r\\n    display: none;\\r\\n    background-color: darkgray;\\r\\n    z-index: 11;\\r\\n    right: 15px;\\r\\n    top: 15px;\\r\\n    max-width: 10%;\\r\\n    position: absolute;\\r\\n}\\r\\n\\r\\n.left-block{\\r\\n    display: flex;\\r\\n    width: 30%;\\r\\n    justify-content: center;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n}\\r\\n.right-block{\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n    max-width: 60%;\\r\\n    flex-direction: column;\\r\\n}\\r\\n.modal-name{\\r\\n    font-style: oblique;\\r\\n    font-size: 1.5em;\\r\\n}\\r\\n.modal-bottom-text{\\r\\n    margin-bottom: 25px;\\r\\n}\\r\\n\\r\\n.genres-list{\\r\\n    flex-wrap: wrap;\\r\\n    width: 100%;\\r\\n    position: relative;\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n    color: black;\\r\\n    max-width: 179px;\\r\\n}\\r\\n.genre{\\r\\n\\r\\n    background-color: white;\\r\\n    border: 1px solid grey;\\r\\n    border-radius: 10px;\\r\\n    width: 45%;\\r\\n    color: black;\\r\\n    margin: 4px;\\r\\n    display: flex;\\r\\n    justify-content: space-around;\\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://proj/./public/st.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://proj/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./public/st.css":
/*!***********************!*\
  !*** ./public/st.css ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_st_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./st.css */ \"./node_modules/css-loader/dist/cjs.js!./public/st.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_st_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_st_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://proj/./public/st.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://proj/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! export createFavoriteList [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFavoriteList\": () => /* binding */ createFavoriteList\n/* harmony export */ });\n/* harmony import */ var _public_st_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/st.css */ \"./public/st.css\");\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/view */ \"./src/modules/view.js\");\n/* harmony import */ var _modules_localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/localStorage */ \"./src/modules/localStorage.js\");\n\r\n\r\n\r\n\r\nlet info = document.getElementById('info');\r\n\r\nlet film_data=[];\r\nconst gettingFilm =  async () => {\r\n    const data = await fetch(\"http://my-json-server.typicode.com/moviedb-tech/movies/list\");\r\n     film_data = await data.json();\r\n    createDisplayFilmList(film_data);\r\n    addOnClickToFilm();\r\n    createFavoriteList();\r\n    (0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__.removeFavoriteMovieFromLocalStorage)();\r\n    (0,_modules_view__WEBPACK_IMPORTED_MODULE_1__.changeView)();\r\n};\r\n\r\nconst gettingFilmId =  async (id) => {\r\n    let data_id;\r\n    const data = await fetch(`http://my-json-server.typicode.com/moviedb-tech/movies/list/${id}`);\r\n    data_id = await data.json();\r\n    createModalPage(data_id);\r\n};\r\n\r\nfunction createDisplayFilmList(film_data) {\r\n    let key;\r\n    for (key in film_data) {\r\n        let id = film_data[key].id;\r\n        let name = film_data[key].name;\r\n        info.innerHTML += `\r\n     <div class=\"gallery\" id=\"${id}\" >\r\n         <div class=\"poster\"><img src =\"${film_data[key].img}\"></div>\r\n         <div class=\"film-name\">${film_data[key].name}</div>\r\n         <div class=\"film-year\">${film_data[key].year}</div>\r\n         <div class=\"star\" movieId=\"${id}\"  name=\"${name}\"><span  class=\"span-star\"></span></div>\r\n     </div> `\r\n    }\r\n}\r\n\r\nfunction addOnClickToFilm() {\r\n    let gallery = document.querySelectorAll('.gallery');\r\n    for (let i = 0; i < gallery.length; i++) {\r\n        gallery[i].onclick = function (e) {\r\n            if (e.target.tagName.toUpperCase() !== 'SPAN') {\r\n                let id = gallery[i].id;\r\n                gettingFilmId(id);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nfunction createModalPage (film_data){\r\n    document.querySelectorAll('.modal-body').forEach(e => e.remove());\r\n    let modal = document.getElementById('modal');\r\n            modal.innerHTML += `\r\n        <div class=\"modal-body\" id=\"modal-body\">\r\n            <div class=\"modal-content\" id=\"modal-content\">\r\n               <div class=\"left-block\">\r\n                    <div class=\"modal-poster\"><img  src =\"${film_data.img}\"/></div>\r\n                    <div class=\"modal-star\"  name=\"${film_data.name}\"><span  class=\"span-modal-star\"></span></div>\r\n                    <div>${film_data.year}</div>\r\n                    <div class=\"genres-list\">${film_data.genres.map((genre)=>{\r\n                        return ` <div class=\"genre\">${genre}</div>`\r\n                        }).join(' ')}\r\n                    </div>\r\n               </div>\r\n               <div class=\"right-block\">\r\n                    <div class=\"modal-name\">${film_data.name}</div>\r\n                    <div class=\"modal-text\">${film_data.description}</div>\r\n                    <div class=\"modal-bottom-text\">\r\n                        <div class=\"modal-dir\">Director: ${film_data.director}</div>\r\n                        <div class=\"modal-staring\">Starring: ${film_data.starring}</div>\r\n                    </div>               \r\n                    <button class=\"close-modal\" id=\"close\" > X </button> \r\n                </div>\r\n            </div>\r\n        </div>\r\n         ` ;\r\n            modal.style.display = \"inline-block\";\r\n            let closeBtn = document.getElementById('close');\r\n            closeBtn.onclick = function () {\r\n                modal.style.display = \"none\";\r\n            };\r\n}\r\n\r\nfunction createFavoriteList() {\r\n    const star = document.querySelectorAll('.star');\r\n    let list_content = document.querySelector(\".list-content\");\r\n        for (let i = 0; i < star.length; i++) {\r\n            let name = star[i].getAttribute(\"name\");\r\n            let id = star[i].getAttribute(\"movieId\");\r\n            star[i].onclick = function () {\r\n                (0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__.addFavoriteMovieToLocalStorage)(name, id, list_content);\r\n            }\r\n        }\r\n        (0,_modules_localStorage__WEBPACK_IMPORTED_MODULE_2__.deleteMovieFromFavList)();\r\n}\r\n\r\n// function changeStarColor () {\r\n//     let sp = document.querySelector(\".span-star\");\r\n//     sp.addEventListener(\"click\", () => {\r\n//         sp.classList.toggle(\"sp-white\");\r\n//         //sp.classList.remove(\"span-star\");\r\n//         console.log( sp.classList);\r\n//         addFavoriteMovieToLocalStorage()\r\n//     });\r\n// }\r\n\r\ngettingFilm();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://proj/./src/index.js?");

/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/*! namespace exports */
/*! export addFavoriteMovieToLocalStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! export deleteMovieFromFavList [provided] [no usage info] [missing usage info prevents renaming] */
/*! export removeFavoriteMovieFromLocalStorage [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addFavoriteMovieToLocalStorage\": () => /* binding */ addFavoriteMovieToLocalStorage,\n/* harmony export */   \"removeFavoriteMovieFromLocalStorage\": () => /* binding */ removeFavoriteMovieFromLocalStorage,\n/* harmony export */   \"deleteMovieFromFavList\": () => /* binding */ deleteMovieFromFavList\n/* harmony export */ });\n\r\nfunction addFavoriteMovieToLocalStorage(name, id, list_content) {\r\n    let favoriteMovies = JSON.parse(localStorage.getItem(\"favoriteMovies\")) || [];\r\n    const isAlreadyLiked = !!favoriteMovies.filter((o) => (o.id === id)).length;\r\n    console.log(isAlreadyLiked);\r\n    if (isAlreadyLiked) {\r\n        removeFavoriteMovieFromLocalStorage(id);\r\n        document.getElementById(\"favoriteMovieId\" + id).remove();\r\n    } else {\r\n        list_content.innerHTML+=`\r\n                <div class=\"list-block\" id=\"favoriteMovieId${id}\">\r\n                    <div class=\"list-item\">${name}</div>\r\n                    <button class=\"del-item-film\">x</button> \r\n                </div>\r\n                `;\r\n        favoriteMovies.push({name, id});\r\n        localStorage.setItem(\"favoriteMovies\", JSON.stringify(favoriteMovies));\r\n        deleteMovieFromFavList();\r\n    }\r\n\r\n}\r\n\r\nfunction removeFavoriteMovieFromLocalStorage(id) {\r\n    let favoriteMovies = JSON.parse(localStorage.getItem(\"favoriteMovies\")) || [];\r\n    localStorage.setItem(\"favoriteMovies\", JSON.stringify(favoriteMovies.filter((o, i) => (o.id !== id))));\r\n}\r\n\r\nfunction deleteMovieFromFavList () {\r\n    let deleteMovie = document.querySelectorAll(\".del-item-film\");\r\n    let listItem = document.querySelectorAll(\".list-block\");\r\n    for (let j = 0; j <deleteMovie.length; j++ ) {\r\n        deleteMovie[j].onclick = () => {\r\n            listItem[j].remove();\r\n        }\r\n    }\r\n}\r\n\r\nwindow.onload = function () {\r\n    console.log(localStorage.getItem(\"favoriteMovies\"));\r\n    let favoriteMovies = JSON.parse(localStorage.getItem(\"favoriteMovies\")) || [];\r\n    let favoriteMoviesContainer = document.querySelector(\".list-content\");\r\n    favoriteMoviesContainer.innerHTML=`\r\n        ${favoriteMovies.map((o, i) => {\r\n            return `\r\n                <div class=\"list-block\" id=\"favoriteMovieId${o.id}\">\r\n                    <div class=\"list-item\">${o.name}</div>\r\n                    <button class=\"del-item-film\">x</button>\r\n                </div>\r\n                `\r\n        }).join('')}\r\n    `\r\n    deleteMovieFromFavList()\r\n};\r\n\r\n\n\n//# sourceURL=webpack://proj/./src/modules/localStorage.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/*! namespace exports */
/*! export changeView [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeView\": () => /* binding */ changeView\n/* harmony export */ });\n\r\n\r\nfunction changeView() {\r\n    let f = document.getElementById(\"1\");\r\n    let s = document.getElementById(\"2\");\r\n    f.onclick = function () {\r\n        document.body.style.backgroundColor = \"red\";\r\n    };\r\n    s.onclick = function () {\r\n        document.body.style.backgroundColor = \"blue\";\r\n    }\r\n}\r\n\r\n//\r\n// const styles = {\r\n//     wrapper: {\r\n//         backgroundColor: 'black'\r\n//     },\r\n//     title: {\r\n//         backgroundColor: 'white'\r\n//     }\r\n// };\r\n//     <div className={classes.wrapper}>\r\n//     <h1 className={classes.title}>\r\n//     Hello JSS-React!\r\n// </h1>\r\n// </div>\n\n//# sourceURL=webpack://proj/./src/modules/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;