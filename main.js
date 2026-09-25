/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    font-family: Arial, Helvetica, sans-serif;\n}\n\nheader {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1%;\n}\n\n.project-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 1%;\n    /* include a background color and invert */\n}\n\nh2 {\n    /* font-size:1%; */\n}\n\n#project-dialog {\n    padding: 1%;\n}\n\n#project-form {\n    position: relative;\n    padding-top: 40px;\n    padding-inline: 24px;\n    padding-bottom: 24px;\n    border-radius: 8px;\n}\n\n.cancel-x {\n    position: absolute;\n    top: 4px;\n    right: 8px;\n    width: 40px;\n    height: 40px;\n    background: transparent;\n    border: none;\n    font-size: 20px;\n    cursor: pointer;\n    line-height: 1;\n    color: #666;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 4px;\n    transition: background-color 0.2s;\n}\n\n.project-fields {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n}\n\n.label {\n    display:flex;\n    flex-direction: column;\n    gap: 6px;\n    font-weight: bold;\n}\n\n.todo-dialog {\n    padding: 1%;\n}\n\n.todo-form {\n    position: relative;\n    padding-top: 40px;\n    padding-inline: 24px;\n    padding-bottom: 24px;\n    border-radius: 8px;\n}\n\n.todo-fields {\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n}\n\n.todo {\n    height: 50%;\n}\n\n.todo-card {\n    border: 1px solid black;\n    margin: 10px;\n    border-radius: 10px;\n    padding: 10px;\n    display: flex;\n    /* flex-direction: row; */\n}\n\n.todo-card .extra-fields {\n    max-height: 0;\n    overflow: hidden;\n    opacity: 0;\n    transition: max-height 0.3s ease-out, opacity 0.2s ease-out;\n}\n\n.todo-card.expanded .extra-fields {\n    max-height: 150px;\n    opacity: 1;\n}\n\n.todo-card > label {\n    position: relative;\n    padding-top: 15px;\n}\n\nh3 {\n    margin: 1%;\n}\n\np {\n    margin: 1%;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _project_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-controller.js */ \"./src/project-controller.js\");\n/* harmony import */ var _todo_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-controller.js */ \"./src/todo-controller.js\");\n/* harmony import */ var _todo_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-component.js */ \"./src/todo-component.js\");\n/* harmony import */ var _todo_DOM_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-DOM.js */ \"./src/todo-DOM.js\");\n// Index file that will form the page.\n\n\n\n\n\n\n\n\n(0,_project_controller_js__WEBPACK_IMPORTED_MODULE_1__.clickingNewProject)();\n(0,_todo_controller_js__WEBPACK_IMPORTED_MODULE_2__.clickingNewTodo)();\n\n// Re-render everything from storage on app boot up\nfunction initializeApp() {\n    // 1. Loop through all your saved project profiles\n    mainProjects.forEach((project) => {\n        // 2. Generate the project card DOM wrapper\n        const projectCard = renderSavedProject(project.id, project.name);\n        \n        // 3. Populate that specific card container with its saved to-dos\n        if (projectCard && _todo_component_js__WEBPACK_IMPORTED_MODULE_3__.mainTodo[project.id]) {\n            (0,_todo_DOM_js__WEBPACK_IMPORTED_MODULE_4__.renderAllTodos)(projectCard, project.id);\n        }\n    });\n}\n\n// 4. Run the initial layout loader\ninitializeApp();\n\n//# sourceURL=webpack://todo-list/./src/index.js?\n}");

/***/ },

/***/ "./src/project-component.js"
/*!**********************************!*\
  !*** ./src/project-component.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getProjectName: () => (/* binding */ getProjectName),\n/* harmony export */   newProject: () => (/* binding */ newProject)\n/* harmony export */ });\n// This will manage the visual structure (DOM)\n// And data extraction\n\nfunction newProject() {\n    const project = document.createElement('div');\n    project.classList.add('project-card');\n    project.innerHTML = `\n        <dialog id=\"project-dialog\">\n            <form id=\"project-form\">\n                <button type=\"button\" class=\"cancel-x\">x</button>\n                <div class=\"project-fields\">\n                    <div class=\"label\">\n                        <label for=\"project-name\">Project Name:</label>\n                        <input type=\"text\" name=\"project-name\" id=\"project-name\">\n                    </div>\n                    <div class=\"dialog-buttons\">\n                        <button type=\"submit\">Submit</button>\n                        <button type=\"button\" class=\"cancel\">Cancel</button>\n                    </div>\n                </div>\n            </form>\n        </dialog>\n        <div class=\"project-header\">\n            <h2></h2>\n            <button class=\"todo\">New To-Do</button>\n        </div>\n    `;\n    return project;\n}\n\n\n// Form information handler/data extraction\nfunction getProjectName(formElement) {\n    const formData = new FormData(formElement);\n    return formData.get(\"project-name\");\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/project-component.js?\n}");

/***/ },

/***/ "./src/project-controller.js"
/*!***********************************!*\
  !*** ./src/project-controller.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clickingNewProject: () => (/* binding */ clickingNewProject),\n/* harmony export */   renderSavedProject: () => (/* binding */ renderSavedProject)\n/* harmony export */ });\n/* harmony import */ var _project_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-component.js */ \"./src/project-component.js\");\n/* harmony import */ var _todo_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-component.js */ \"./src/todo-component.js\");\n// This will be for coordinating rendering, workflow,\n// and modal event interactions.\n\n\n\n\n// This will handle the modal info and form actions\nfunction formSubmit(projectElement) {\n    const form = projectElement.querySelector(\"#project-form\");\n    const heading = projectElement.querySelector('h2');\n    const dialog = projectElement.querySelector('#project-dialog');\n    const cancelButton = projectElement.querySelector('.cancel');\n    const cancelXButton = projectElement.querySelector('.cancel-x');\n\n    dialog.showModal();\n\n    form.addEventListener('submit', (event) => {\n        event.preventDefault();\n        \n        const projectName = (0,_project_component_js__WEBPACK_IMPORTED_MODULE_0__.getProjectName)(form);\n        const projectId = crypto.randomUUID(); \n        \n        heading.textContent = projectName;\n        projectElement.dataset.projectId = projectId; \n        \n        (0,_todo_component_js__WEBPACK_IMPORTED_MODULE_1__.addProjectToData)(projectId, projectName);\n        \n        dialog.close();\n        dialog.remove();\n    });\n\n    cancelButton.addEventListener('click', () => {\n        dialog.close();\n        projectElement.remove();\n    });\n\n    cancelXButton.addEventListener('click', () => {\n        dialog.close();\n        projectElement.remove();\n    }); \n}\n\n\n// This will handle adding the new project to the UI\nfunction renderNewProject() {\n    const projectContainer = document.querySelector(\".container\");\n    const appendNewProject = (0,_project_component_js__WEBPACK_IMPORTED_MODULE_0__.newProject)();\n    projectContainer.appendChild(appendNewProject); // adds the newProject logic (adding DOM elements) to the container\n    formSubmit(appendNewProject); // adds DOM to the formSubmit function and fills in the \"projectElement\", also adds the form data\n}\n\n// Initializing clicks\nfunction clickingNewProject() {\n    const button = document.querySelector(\".project\");\n    if (button) {\n        button.addEventListener(\"click\",() => {\n            renderNewProject();\n            console.log(\"Adding new project.\");\n        });\n    }\n}\n\nfunction renderSavedProject(id, name) {\n    const projectContainer = document.querySelector(\".container\");\n    const projectElement = (0,_project_component_js__WEBPACK_IMPORTED_MODULE_0__.newProject)();\n    \n    // Set the data directly instead of showing a modal form\n    projectElement.dataset.projectId = id;\n    projectElement.querySelector('h2').textContent = name;\n    \n    // Remove the dialog setup completely since it's an existing project\n    const dialog = projectElement.querySelector('#project-dialog');\n    if (dialog) dialog.remove();\n    \n    projectContainer.appendChild(projectElement);\n    return projectElement; // return this so index.js can pass it to renderAllTodos\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/project-controller.js?\n}");

/***/ },

/***/ "./src/todo-DOM.js"
/*!*************************!*\
  !*** ./src/todo-DOM.js ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   newTodo: () => (/* binding */ newTodo),\n/* harmony export */   renderAllTodos: () => (/* binding */ renderAllTodos)\n/* harmony export */ });\n/* harmony import */ var _todo_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-component.js */ \"./src/todo-component.js\");\n/* harmony import */ var _todo_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-controller.js */ \"./src/todo-controller.js\");\n// This will manage the visual structure and rendering\n\n\n\n\nfunction newTodo() {\n    const toDo = document.createElement('div');\n    toDo.classList.add('todo-container');\n    toDo.innerHTML = `\n        <dialog class=\"todo-dialog\">\n            <form class=\"todo-form\">\n                <button type=\"button\" class=\"cancel-x\">x</button>\n                <div class=\"todo-fields\">\n                    <div class=\"label\">\n                        <label for=\"title\">Title:</label>\n                        <input type=\"text\" name=\"title\" id=\"title\">\n                    </div>\n                    <div class=\"label\">\n                        <label for=\"due-date\">Due Date:</label>\n                        <input type=\"date\" name=\"due-date\" id=\"due-date\">\n                    </div>\n                    <div class=\"label\">\n                        <label for=\"description\">Description:</label>\n                        <input type=\"text\" name=\"description\" id=\"description\">\n                    </div>\n                    <div class=\"label\">\n                        <label for=\"priority\">Priority:</label>\n                        <select name=\"priority\">\n                            <option value=\"low\">Low</option>\n                            <option value=\"medium\">Medium</option>\n                            <option value=\"high\">High</option>\n                        </select>\n                    </div>\n                    <div class=\"dialog-buttons\">\n                        <button type=\"submit\">Submit</button>\n                        <button type=\"button\" class=\"cancel\">Cancel</button>\n                    </div>\n                </div>\n            </form>\n        </dialog>\n    `;\n    return toDo;\n}\n\nfunction renderAllTodos(projectCard,projectId){\n    if (!projectCard) return;\n    \n    const existingCards = projectCard.querySelectorAll(\".todo-card\");\n    existingCards.forEach(card => card.remove());\n\n    const specificTodos = _todo_component_js__WEBPACK_IMPORTED_MODULE_0__.mainTodo[projectId] || [];\n\n    specificTodos.forEach((todo) => {\n        const todoCard = document.createElement(\"div\");\n        todoCard.classList.add(\"todo-card\");\n        todoCard.dataset.id = todo.id;\n        todoCard.innerHTML = `\n            <label>\n                <input type=\"checkbox\" name=\"done\" value=\"done\">\n            </label>\n            <div class=\"todo-fields\">\n                <div class=\"main-fields\">\n                    <h3>To-do: ${todo.title}</h3>\n                    <p>Due: ${todo.dueDate}</small>\n                </div>\n                <div class=\"extra-fields\">\n                    <p>Description: ${todo.description}</p>\n                    <p class=\"priority-${todo.priority.toLowerCase()}\">Priority Level: ${todo.priority}</p>\n                </div>\n                <div class=\"buttons\">\n                    <button class=\"edit\">Edit</button>\n                    <button class=\"delete\">Delete</button>\n                    <button class=\"toggle\">Show More</button>\n                </div>\n            </div>\n        `;\n      \n    const deleteButton = todoCard.querySelector(\".delete\");\n    deleteButton.addEventListener(\"click\", () => {\n        (0,_todo_component_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodoFromArray)(projectId, todo.id);\n        todoCard.remove();\n    });\n\n    const toggleButton = todoCard.querySelector(\".toggle\");\n    toggleButton.addEventListener(\"click\", () => {\n      todoCard.classList.toggle(\"expanded\");\n      \n      if (todoCard.classList.contains(\"expanded\")) {\n        toggleButton.textContent = \"Show Less\";\n      } else {\n        toggleButton.textContent = \"Show More\";\n      }\n    });\n\n    const editButton = todoCard.querySelector(\".edit\");\n    editButton.addEventListener(\"click\", () => {\n    (0,_todo_controller_js__WEBPACK_IMPORTED_MODULE_1__.renderEditTodo)(projectCard, projectId, todo);\n    });\n    \n    projectCard.appendChild(todoCard);\n  });\n};\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo-DOM.js?\n}");

/***/ },

/***/ "./src/todo-component.js"
/*!*******************************!*\
  !*** ./src/todo-component.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProjectToData: () => (/* binding */ addProjectToData),\n/* harmony export */   addTodoToArray: () => (/* binding */ addTodoToArray),\n/* harmony export */   deleteTodoFromArray: () => (/* binding */ deleteTodoFromArray),\n/* harmony export */   getTodoName: () => (/* binding */ getTodoName),\n/* harmony export */   mainProjects: () => (/* binding */ mainProjects),\n/* harmony export */   mainTodo: () => (/* binding */ mainTodo),\n/* harmony export */   updateTodoInArray: () => (/* binding */ updateTodoInArray)\n/* harmony export */ });\n// This will manage the data and parts for controller\n// and DOM\n\nconst mainTodo = {};\nconst mainProjects = [];\n\nclass Todo {\n    constructor(title,description,dueDate,priority) {\n        this.id = crypto.randomUUID(); \n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    };\n};\n\nfunction saveToLocalStorage() {\n    localStorage.setItem(\"mainTodo\", JSON.stringify(mainTodo));\n    localStorage.setItem(\"mainProjects\", JSON.stringify(mainProjects));\n}\n\nfunction loadFromLocalStorage() {\n    const savedData = localStorage.getItem(\"mainTodo\");\n    const savedProjects = localStorage.getItem(\"mainProjects\");\n     if (savedData) {\n        // Mutate the existing object rather than reassigning the variable reference\n        Object.assign(mainTodo, JSON.parse(savedData));\n    }\n    if (savedProjects) {\n        // Mutate the existing array safely\n        mainProjects.push(...JSON.parse(savedProjects));\n    }\n} \nloadFromLocalStorage();\n\nfunction addProjectToData(id, name) {\n    mainProjects.push({ id, name });\n    saveToLocalStorage();\n}\n\nfunction addTodoToArray(projectId,title,description,dueDate,priority) {\n    const newTodo = new Todo(title,description,dueDate,priority);\n    if (!mainTodo[projectId]) {\n        mainTodo[projectId] = [];\n    }\n    mainTodo[projectId].push(newTodo);\n    saveToLocalStorage();\n    return newTodo;\n}\n\nfunction getTodoName(formElement, projectId) {\n    const formData = new FormData(formElement);\n    return addTodoToArray(\n        projectId,\n        formData.get(\"title\"),\n        formData.get(\"description\"),\n        formData.get(\"due-date\"),\n        formData.get(\"priority\")\n    );\n};\n\nfunction deleteTodoFromArray(projectId,id) {\n    if (!mainTodo[projectId]) return;\n    const index = mainTodo[projectId].findIndex(todo => todo.id === id);\n    if (index !== -1) {\n        mainTodo[projectId].splice(index,1);\n        saveToLocalStorage();\n    };\n};\n\nfunction updateTodoInArray(projectId, id, title, description, dueDate, priority) {\n  if (!mainTodo[projectId]) return null;\n  const todo = mainTodo[projectId].find(t => t.id === id);\n  if (todo) {\n    todo.title = title;\n    todo.description = description;\n    todo.dueDate = dueDate;\n    todo.priority = priority;\n\n    saveToLocalStorage();\n  }\n  return todo;\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo-component.js?\n}");

/***/ },

/***/ "./src/todo-controller.js"
/*!********************************!*\
  !*** ./src/todo-controller.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clickingNewTodo: () => (/* binding */ clickingNewTodo),\n/* harmony export */   renderEditTodo: () => (/* binding */ renderEditTodo),\n/* harmony export */   renderNewTodo: () => (/* binding */ renderNewTodo),\n/* harmony export */   todoSubmit: () => (/* binding */ todoSubmit)\n/* harmony export */ });\n/* harmony import */ var _todo_component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-component.js */ \"./src/todo-component.js\");\n/* harmony import */ var _todo_DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-DOM.js */ \"./src/todo-DOM.js\");\n// This will handle coordinating and modal event\n// interactions\n\n\n\n\nfunction todoSubmit(todoElement, projectCard, projectId) {\n    const form = todoElement.querySelector(\".todo-form\");\n    const dialog = todoElement.querySelector('.todo-dialog');\n    const cancelButton = todoElement.querySelector('.cancel');\n    const cancelXButton = todoElement.querySelector('.cancel-x');\n\n    dialog.showModal();\n\n    form.addEventListener('submit', (event) => {\n        event.preventDefault();\n        (0,_todo_component_js__WEBPACK_IMPORTED_MODULE_0__.getTodoName)(form, projectId);\n        (0,_todo_DOM_js__WEBPACK_IMPORTED_MODULE_1__.renderAllTodos)(projectCard, projectId);\n        dialog.close();\n        dialog.remove();\n        todoElement.remove();\n    });\n\n    cancelButton.addEventListener('click', () => {\n        dialog.close();\n        todoElement.remove();\n    });\n\n    cancelXButton.addEventListener('click', () => {\n        dialog.close();\n        todoElement.remove();\n    }); \n\n}\n\nfunction renderNewTodo(projectCard, projectId) {\n    if (!projectCard) return;\n    const appendNewTodo = (0,_todo_DOM_js__WEBPACK_IMPORTED_MODULE_1__.newTodo)();\n    projectCard.appendChild(appendNewTodo);\n    todoSubmit(appendNewTodo, projectCard, projectId);\n}\n\nfunction clickingNewTodo() {\n    document.body.addEventListener(\"click\", (event) => {\n        const todoButton = event.target.closest(\".todo\");\n        if (todoButton) {\n            const projectCard = todoButton.closest(\".project-card\")\n            if (projectCard) {\n                const projectId = projectCard.dataset.projectId;\n                renderNewTodo(projectCard, projectId);\n            };\n            }\n        });\n}\n\nfunction renderEditTodo(projectCard, projectId, todo) {\n    if (!projectCard) return;\n    \n    const editTodoElement = (0,_todo_DOM_js__WEBPACK_IMPORTED_MODULE_1__.newTodo)();\n    projectCard.appendChild(editTodoElement);\n    \n    const form = editTodoElement.querySelector(\".todo-form\");\n    const dialog = editTodoElement.querySelector('.todo-dialog');\n    const cancelButton = editTodoElement.querySelector('.cancel');\n    const cancelXButton = editTodoElement.querySelector('.cancel-x');\n    \n    form.querySelector('#title').value = todo.title;\n    form.querySelector('#description').value = todo.description;\n    form.querySelector('#due-date').value = todo.dueDate;\n    form.querySelector('[name=\"priority\"]').value = todo.priority.toLowerCase();\n    \n    dialog.showModal();\n    \n    form.addEventListener('submit', (event) => {\n        event.preventDefault();\n        const formData = new FormData(form);\n        \n        (0,_todo_component_js__WEBPACK_IMPORTED_MODULE_0__.updateTodoInArray)(\n            projectId,\n            todo.id,\n            formData.get(\"title\"),\n            formData.get(\"description\"),\n            formData.get(\"due-date\"),\n            formData.get(\"priority\")\n        );\n        \n        (0,_todo_DOM_js__WEBPACK_IMPORTED_MODULE_1__.renderAllTodos)(projectCard, projectId);\n        dialog.close();\n        editTodoElement.remove();\n    });\n    \n    const closeForm = () => { dialog.close(); editTodoElement.remove(); };\n    cancelButton.addEventListener('click', closeForm);\n    cancelXButton.addEventListener('click', closeForm);\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/todo-controller.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;