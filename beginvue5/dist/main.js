/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + "3d546393b129adb97d16" + "." + ({"common":"common"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.vue":
/*!*****************!*\
  !*** ./app.vue ***!
  \*****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_vue_vue_type_template_id_381730fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.vue?vue&type=template&id=381730fa& */ \"./app.vue?vue&type=template&id=381730fa&\");\n/* harmony import */ var _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue?vue&type=script&lang=js& */ \"./app.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.vue?vue&type=style&index=0&lang=css& */ \"./app.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _app_vue_vue_type_template_id_381730fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _app_vue_vue_type_template_id_381730fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"app.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./app.vue?");

/***/ }),

/***/ "./app.vue?vue&type=script&lang=js&":
/*!******************************************!*\
  !*** ./app.vue?vue&type=script&lang=js& ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_cacheDirectory_true_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib?cacheDirectory=true!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_cacheDirectory_true_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./app.vue?");

/***/ }),

/***/ "./app.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************!*\
  !*** ./app.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=style&index=0&lang=css&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack:///./app.vue?");

/***/ }),

/***/ "./app.vue?vue&type=template&id=381730fa&":
/*!************************************************!*\
  !*** ./app.vue?vue&type=template&id=381730fa& ***!
  \************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_381730fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=381730fa& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=template&id=381730fa&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_381730fa___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_app_vue_vue_type_template_id_381730fa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./app.vue?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _app_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.vue */ \"./app.vue\");\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n/* harmony import */ var _route_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./route/route.js */ \"./route/route.js\");\n/* harmony import */ var _store_store_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/store.js */ \"./store/store.js\");\n\n\n\nvue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(vue_router__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nif ([1, 2, 3].includes(1)) {\n  console.log(\"1\");\n}\n\nnew vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  data() {\n    return {\n      text: 123\n    };\n  },\n\n  router: _route_route_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  store: _store_store_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  el: \"#app\",\n  render: c => c(\"App\"),\n  components: {\n    App: _app_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"] //template:\"<h1>123123</h1>\"\n\n  }\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?cacheDirectory=true!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib?cacheDirectory=true!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data() {\n    return {};\n  }\n\n});\n\n//# sourceURL=webpack:///./app.vue?./node_modules/babel-loader/lib?cacheDirectory=true!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\\nh1{\\n    font-size: 100px;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./app.vue?./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=template&id=381730fa&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=template&id=381730fa& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [_c(\"p\", [_vm._v(\"1234\")]), _vm._v(\" \"), _c(\"Router-View\")],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./app.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************************************************!*\
  !*** delegated ./node_modules/vue-router/dist/vue-router.esm.js from dll-reference vendor ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(6);\n\n//# sourceURL=webpack:///delegated_./node_modules/vue-router/dist/vue-router.esm.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options!./app.vue?vue&type=style&index=0&lang=css& */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib/index.js?!./app.vue?vue&type=style&index=0&lang=css&\");\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ./node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"6752f470\", content, false, {});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack:///./app.vue?./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addStylesClient; });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ \"./node_modules/vue-style-loader/lib/listToStyles.js\");\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== 'undefined'\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    'vue-style-loader cannot be used in a non-browser environment. ' +\n    \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName('head')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = 'data-vue-ssr-id'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement('style')\n  styleElement.type = 'text/css'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector('style[' + ssrIdKey + '~=\"' + obj.id + '\"]')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join('\\n')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute('media', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */'\n    // http://stackoverflow.com/a/26603875\n    css += '\\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/addStylesClient.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listToStyles; });\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles(parentId, list) {\n  var styles = [];\n  var newStyles = {};\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = item[0];\n    var css = item[1];\n    var media = item[2];\n    var sourceMap = item[3];\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    };\n\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = {\n        id: id,\n        parts: [part]\n      });\n    } else {\n      newStyles[id].parts.push(part);\n    }\n  }\n\n  return styles;\n}\n\n//# sourceURL=webpack:///./node_modules/vue-style-loader/lib/listToStyles.js?");

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************************************************!*\
  !*** delegated ./node_modules/vue/dist/vue.runtime.esm.js from dll-reference vendor ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference vendor */ \"dll-reference vendor\"))(2);\n\n//# sourceURL=webpack:///delegated_./node_modules/vue/dist/vue.runtime.esm.js_from_dll-reference_vendor?");

/***/ }),

/***/ "./node_modules/vuex/dist/vuex.esm.js":
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapState\", function() { return mapState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapMutations\", function() { return mapMutations; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapGetters\", function() { return mapGetters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapActions\", function() { return mapActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNamespacedHelpers\", function() { return createNamespacedHelpers; });\n/**\n * vuex v3.1.0\n * (c) 2019 Evan You\n * @license MIT\n */\nfunction applyMixin(Vue) {\n  var version = Number(Vue.version.split('.')[0]);\n\n  if (version >= 2) {\n    Vue.mixin({\n      beforeCreate: vuexInit\n    });\n  } else {\n    // override init and inject vuex init procedure\n    // for 1.x backwards compatibility.\n    var _init = Vue.prototype._init;\n\n    Vue.prototype._init = function (options) {\n      if (options === void 0) options = {};\n      options.init = options.init ? [vuexInit].concat(options.init) : vuexInit;\n\n      _init.call(this, options);\n    };\n  }\n  /**\n   * Vuex init hook, injected into each instances init hooks list.\n   */\n\n\n  function vuexInit() {\n    var options = this.$options; // store injection\n\n    if (options.store) {\n      this.$store = typeof options.store === 'function' ? options.store() : options.store;\n    } else if (options.parent && options.parent.$store) {\n      this.$store = options.parent.$store;\n    }\n  }\n}\n\nvar devtoolHook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;\n\nfunction devtoolPlugin(store) {\n  if (!devtoolHook) {\n    return;\n  }\n\n  store._devtoolHook = devtoolHook;\n  devtoolHook.emit('vuex:init', store);\n  devtoolHook.on('vuex:travel-to-state', function (targetState) {\n    store.replaceState(targetState);\n  });\n  store.subscribe(function (mutation, state) {\n    devtoolHook.emit('vuex:mutation', mutation, state);\n  });\n}\n/**\n * Get the first item that pass the test\n * by second argument function\n *\n * @param {Array} list\n * @param {Function} f\n * @return {*}\n */\n\n/**\n * forEach for object\n */\n\n\nfunction forEachValue(obj, fn) {\n  Object.keys(obj).forEach(function (key) {\n    return fn(obj[key], key);\n  });\n}\n\nfunction isObject(obj) {\n  return obj !== null && typeof obj === 'object';\n}\n\nfunction isPromise(val) {\n  return val && typeof val.then === 'function';\n}\n\nfunction assert(condition, msg) {\n  if (!condition) {\n    throw new Error(\"[vuex] \" + msg);\n  }\n} // Base data struct for store's module, package with some attribute and method\n\n\nvar Module = function Module(rawModule, runtime) {\n  this.runtime = runtime; // Store some children item\n\n  this._children = Object.create(null); // Store the origin module object which passed by programmer\n\n  this._rawModule = rawModule;\n  var rawState = rawModule.state; // Store the origin module's state\n\n  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};\n};\n\nvar prototypeAccessors = {\n  namespaced: {\n    configurable: true\n  }\n};\n\nprototypeAccessors.namespaced.get = function () {\n  return !!this._rawModule.namespaced;\n};\n\nModule.prototype.addChild = function addChild(key, module) {\n  this._children[key] = module;\n};\n\nModule.prototype.removeChild = function removeChild(key) {\n  delete this._children[key];\n};\n\nModule.prototype.getChild = function getChild(key) {\n  return this._children[key];\n};\n\nModule.prototype.update = function update(rawModule) {\n  this._rawModule.namespaced = rawModule.namespaced;\n\n  if (rawModule.actions) {\n    this._rawModule.actions = rawModule.actions;\n  }\n\n  if (rawModule.mutations) {\n    this._rawModule.mutations = rawModule.mutations;\n  }\n\n  if (rawModule.getters) {\n    this._rawModule.getters = rawModule.getters;\n  }\n};\n\nModule.prototype.forEachChild = function forEachChild(fn) {\n  forEachValue(this._children, fn);\n};\n\nModule.prototype.forEachGetter = function forEachGetter(fn) {\n  if (this._rawModule.getters) {\n    forEachValue(this._rawModule.getters, fn);\n  }\n};\n\nModule.prototype.forEachAction = function forEachAction(fn) {\n  if (this._rawModule.actions) {\n    forEachValue(this._rawModule.actions, fn);\n  }\n};\n\nModule.prototype.forEachMutation = function forEachMutation(fn) {\n  if (this._rawModule.mutations) {\n    forEachValue(this._rawModule.mutations, fn);\n  }\n};\n\nObject.defineProperties(Module.prototype, prototypeAccessors);\n\nvar ModuleCollection = function ModuleCollection(rawRootModule) {\n  // register root module (Vuex.Store options)\n  this.register([], rawRootModule, false);\n};\n\nModuleCollection.prototype.get = function get(path) {\n  return path.reduce(function (module, key) {\n    return module.getChild(key);\n  }, this.root);\n};\n\nModuleCollection.prototype.getNamespace = function getNamespace(path) {\n  var module = this.root;\n  return path.reduce(function (namespace, key) {\n    module = module.getChild(key);\n    return namespace + (module.namespaced ? key + '/' : '');\n  }, '');\n};\n\nModuleCollection.prototype.update = function update$1(rawRootModule) {\n  update([], this.root, rawRootModule);\n};\n\nModuleCollection.prototype.register = function register(path, rawModule, runtime) {\n  var this$1 = this;\n  if (runtime === void 0) runtime = true;\n\n  if (true) {\n    assertRawModule(path, rawModule);\n  }\n\n  var newModule = new Module(rawModule, runtime);\n\n  if (path.length === 0) {\n    this.root = newModule;\n  } else {\n    var parent = this.get(path.slice(0, -1));\n    parent.addChild(path[path.length - 1], newModule);\n  } // register nested modules\n\n\n  if (rawModule.modules) {\n    forEachValue(rawModule.modules, function (rawChildModule, key) {\n      this$1.register(path.concat(key), rawChildModule, runtime);\n    });\n  }\n};\n\nModuleCollection.prototype.unregister = function unregister(path) {\n  var parent = this.get(path.slice(0, -1));\n  var key = path[path.length - 1];\n\n  if (!parent.getChild(key).runtime) {\n    return;\n  }\n\n  parent.removeChild(key);\n};\n\nfunction update(path, targetModule, newModule) {\n  if (true) {\n    assertRawModule(path, newModule);\n  } // update target module\n\n\n  targetModule.update(newModule); // update nested modules\n\n  if (newModule.modules) {\n    for (var key in newModule.modules) {\n      if (!targetModule.getChild(key)) {\n        if (true) {\n          console.warn(\"[vuex] trying to add a new module '\" + key + \"' on hot reloading, \" + 'manual reload is needed');\n        }\n\n        return;\n      }\n\n      update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);\n    }\n  }\n}\n\nvar functionAssert = {\n  assert: function (value) {\n    return typeof value === 'function';\n  },\n  expected: 'function'\n};\nvar objectAssert = {\n  assert: function (value) {\n    return typeof value === 'function' || typeof value === 'object' && typeof value.handler === 'function';\n  },\n  expected: 'function or object with \"handler\" function'\n};\nvar assertTypes = {\n  getters: functionAssert,\n  mutations: functionAssert,\n  actions: objectAssert\n};\n\nfunction assertRawModule(path, rawModule) {\n  Object.keys(assertTypes).forEach(function (key) {\n    if (!rawModule[key]) {\n      return;\n    }\n\n    var assertOptions = assertTypes[key];\n    forEachValue(rawModule[key], function (value, type) {\n      assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));\n    });\n  });\n}\n\nfunction makeAssertionMessage(path, key, type, value, expected) {\n  var buf = key + \" should be \" + expected + \" but \\\"\" + key + \".\" + type + \"\\\"\";\n\n  if (path.length > 0) {\n    buf += \" in module \\\"\" + path.join('.') + \"\\\"\";\n  }\n\n  buf += \" is \" + JSON.stringify(value) + \".\";\n  return buf;\n}\n\nvar Vue; // bind on install\n\nvar Store = function Store(options) {\n  var this$1 = this;\n  if (options === void 0) options = {}; // Auto install if it is not done yet and `window` has `Vue`.\n  // To allow users to avoid auto-installation in some cases,\n  // this code should be placed here. See #731\n\n  if (!Vue && typeof window !== 'undefined' && window.Vue) {\n    install(window.Vue);\n  }\n\n  if (true) {\n    assert(Vue, \"must call Vue.use(Vuex) before creating a store instance.\");\n    assert(typeof Promise !== 'undefined', \"vuex requires a Promise polyfill in this browser.\");\n    assert(this instanceof Store, \"store must be called with the new operator.\");\n  }\n\n  var plugins = options.plugins;\n  if (plugins === void 0) plugins = [];\n  var strict = options.strict;\n  if (strict === void 0) strict = false; // store internal state\n\n  this._committing = false;\n  this._actions = Object.create(null);\n  this._actionSubscribers = [];\n  this._mutations = Object.create(null);\n  this._wrappedGetters = Object.create(null);\n  this._modules = new ModuleCollection(options);\n  this._modulesNamespaceMap = Object.create(null);\n  this._subscribers = [];\n  this._watcherVM = new Vue(); // bind commit and dispatch to self\n\n  var store = this;\n  var ref = this;\n  var dispatch = ref.dispatch;\n  var commit = ref.commit;\n\n  this.dispatch = function boundDispatch(type, payload) {\n    return dispatch.call(store, type, payload);\n  };\n\n  this.commit = function boundCommit(type, payload, options) {\n    return commit.call(store, type, payload, options);\n  }; // strict mode\n\n\n  this.strict = strict;\n  var state = this._modules.root.state; // init root module.\n  // this also recursively registers all sub-modules\n  // and collects all module getters inside this._wrappedGetters\n\n  installModule(this, state, [], this._modules.root); // initialize the store vm, which is responsible for the reactivity\n  // (also registers _wrappedGetters as computed properties)\n\n  resetStoreVM(this, state); // apply plugins\n\n  plugins.forEach(function (plugin) {\n    return plugin(this$1);\n  });\n  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;\n\n  if (useDevtools) {\n    devtoolPlugin(this);\n  }\n};\n\nvar prototypeAccessors$1 = {\n  state: {\n    configurable: true\n  }\n};\n\nprototypeAccessors$1.state.get = function () {\n  return this._vm._data.$$state;\n};\n\nprototypeAccessors$1.state.set = function (v) {\n  if (true) {\n    assert(false, \"use store.replaceState() to explicit replace store state.\");\n  }\n};\n\nStore.prototype.commit = function commit(_type, _payload, _options) {\n  var this$1 = this; // check object-style commit\n\n  var ref = unifyObjectStyle(_type, _payload, _options);\n  var type = ref.type;\n  var payload = ref.payload;\n  var options = ref.options;\n  var mutation = {\n    type: type,\n    payload: payload\n  };\n  var entry = this._mutations[type];\n\n  if (!entry) {\n    if (true) {\n      console.error(\"[vuex] unknown mutation type: \" + type);\n    }\n\n    return;\n  }\n\n  this._withCommit(function () {\n    entry.forEach(function commitIterator(handler) {\n      handler(payload);\n    });\n  });\n\n  this._subscribers.forEach(function (sub) {\n    return sub(mutation, this$1.state);\n  });\n\n  if ( true && options && options.silent) {\n    console.warn(\"[vuex] mutation type: \" + type + \". Silent option has been removed. \" + 'Use the filter functionality in the vue-devtools');\n  }\n};\n\nStore.prototype.dispatch = function dispatch(_type, _payload) {\n  var this$1 = this; // check object-style dispatch\n\n  var ref = unifyObjectStyle(_type, _payload);\n  var type = ref.type;\n  var payload = ref.payload;\n  var action = {\n    type: type,\n    payload: payload\n  };\n  var entry = this._actions[type];\n\n  if (!entry) {\n    if (true) {\n      console.error(\"[vuex] unknown action type: \" + type);\n    }\n\n    return;\n  }\n\n  try {\n    this._actionSubscribers.filter(function (sub) {\n      return sub.before;\n    }).forEach(function (sub) {\n      return sub.before(action, this$1.state);\n    });\n  } catch (e) {\n    if (true) {\n      console.warn(\"[vuex] error in before action subscribers: \");\n      console.error(e);\n    }\n  }\n\n  var result = entry.length > 1 ? Promise.all(entry.map(function (handler) {\n    return handler(payload);\n  })) : entry[0](payload);\n  return result.then(function (res) {\n    try {\n      this$1._actionSubscribers.filter(function (sub) {\n        return sub.after;\n      }).forEach(function (sub) {\n        return sub.after(action, this$1.state);\n      });\n    } catch (e) {\n      if (true) {\n        console.warn(\"[vuex] error in after action subscribers: \");\n        console.error(e);\n      }\n    }\n\n    return res;\n  });\n};\n\nStore.prototype.subscribe = function subscribe(fn) {\n  return genericSubscribe(fn, this._subscribers);\n};\n\nStore.prototype.subscribeAction = function subscribeAction(fn) {\n  var subs = typeof fn === 'function' ? {\n    before: fn\n  } : fn;\n  return genericSubscribe(subs, this._actionSubscribers);\n};\n\nStore.prototype.watch = function watch(getter, cb, options) {\n  var this$1 = this;\n\n  if (true) {\n    assert(typeof getter === 'function', \"store.watch only accepts a function.\");\n  }\n\n  return this._watcherVM.$watch(function () {\n    return getter(this$1.state, this$1.getters);\n  }, cb, options);\n};\n\nStore.prototype.replaceState = function replaceState(state) {\n  var this$1 = this;\n\n  this._withCommit(function () {\n    this$1._vm._data.$$state = state;\n  });\n};\n\nStore.prototype.registerModule = function registerModule(path, rawModule, options) {\n  if (options === void 0) options = {};\n\n  if (typeof path === 'string') {\n    path = [path];\n  }\n\n  if (true) {\n    assert(Array.isArray(path), \"module path must be a string or an Array.\");\n    assert(path.length > 0, 'cannot register the root module by using registerModule.');\n  }\n\n  this._modules.register(path, rawModule);\n\n  installModule(this, this.state, path, this._modules.get(path), options.preserveState); // reset store to update getters...\n\n  resetStoreVM(this, this.state);\n};\n\nStore.prototype.unregisterModule = function unregisterModule(path) {\n  var this$1 = this;\n\n  if (typeof path === 'string') {\n    path = [path];\n  }\n\n  if (true) {\n    assert(Array.isArray(path), \"module path must be a string or an Array.\");\n  }\n\n  this._modules.unregister(path);\n\n  this._withCommit(function () {\n    var parentState = getNestedState(this$1.state, path.slice(0, -1));\n    Vue.delete(parentState, path[path.length - 1]);\n  });\n\n  resetStore(this);\n};\n\nStore.prototype.hotUpdate = function hotUpdate(newOptions) {\n  this._modules.update(newOptions);\n\n  resetStore(this, true);\n};\n\nStore.prototype._withCommit = function _withCommit(fn) {\n  var committing = this._committing;\n  this._committing = true;\n  fn();\n  this._committing = committing;\n};\n\nObject.defineProperties(Store.prototype, prototypeAccessors$1);\n\nfunction genericSubscribe(fn, subs) {\n  if (subs.indexOf(fn) < 0) {\n    subs.push(fn);\n  }\n\n  return function () {\n    var i = subs.indexOf(fn);\n\n    if (i > -1) {\n      subs.splice(i, 1);\n    }\n  };\n}\n\nfunction resetStore(store, hot) {\n  store._actions = Object.create(null);\n  store._mutations = Object.create(null);\n  store._wrappedGetters = Object.create(null);\n  store._modulesNamespaceMap = Object.create(null);\n  var state = store.state; // init all modules\n\n  installModule(store, state, [], store._modules.root, true); // reset vm\n\n  resetStoreVM(store, state, hot);\n}\n\nfunction resetStoreVM(store, state, hot) {\n  var oldVm = store._vm; // bind store public getters\n\n  store.getters = {};\n  var wrappedGetters = store._wrappedGetters;\n  var computed = {};\n  forEachValue(wrappedGetters, function (fn, key) {\n    // use computed to leverage its lazy-caching mechanism\n    computed[key] = function () {\n      return fn(store);\n    };\n\n    Object.defineProperty(store.getters, key, {\n      get: function () {\n        return store._vm[key];\n      },\n      enumerable: true // for local getters\n\n    });\n  }); // use a Vue instance to store the state tree\n  // suppress warnings just in case the user has added\n  // some funky global mixins\n\n  var silent = Vue.config.silent;\n  Vue.config.silent = true;\n  store._vm = new Vue({\n    data: {\n      $$state: state\n    },\n    computed: computed\n  });\n  Vue.config.silent = silent; // enable strict mode for new vm\n\n  if (store.strict) {\n    enableStrictMode(store);\n  }\n\n  if (oldVm) {\n    if (hot) {\n      // dispatch changes in all subscribed watchers\n      // to force getter re-evaluation for hot reloading.\n      store._withCommit(function () {\n        oldVm._data.$$state = null;\n      });\n    }\n\n    Vue.nextTick(function () {\n      return oldVm.$destroy();\n    });\n  }\n}\n\nfunction installModule(store, rootState, path, module, hot) {\n  var isRoot = !path.length;\n\n  var namespace = store._modules.getNamespace(path); // register in namespace map\n\n\n  if (module.namespaced) {\n    store._modulesNamespaceMap[namespace] = module;\n  } // set state\n\n\n  if (!isRoot && !hot) {\n    var parentState = getNestedState(rootState, path.slice(0, -1));\n    var moduleName = path[path.length - 1];\n\n    store._withCommit(function () {\n      Vue.set(parentState, moduleName, module.state);\n    });\n  }\n\n  var local = module.context = makeLocalContext(store, namespace, path);\n  module.forEachMutation(function (mutation, key) {\n    var namespacedType = namespace + key;\n    registerMutation(store, namespacedType, mutation, local);\n  });\n  module.forEachAction(function (action, key) {\n    var type = action.root ? key : namespace + key;\n    var handler = action.handler || action;\n    registerAction(store, type, handler, local);\n  });\n  module.forEachGetter(function (getter, key) {\n    var namespacedType = namespace + key;\n    registerGetter(store, namespacedType, getter, local);\n  });\n  module.forEachChild(function (child, key) {\n    installModule(store, rootState, path.concat(key), child, hot);\n  });\n}\n/**\n * make localized dispatch, commit, getters and state\n * if there is no namespace, just use root ones\n */\n\n\nfunction makeLocalContext(store, namespace, path) {\n  var noNamespace = namespace === '';\n  var local = {\n    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {\n      var args = unifyObjectStyle(_type, _payload, _options);\n      var payload = args.payload;\n      var options = args.options;\n      var type = args.type;\n\n      if (!options || !options.root) {\n        type = namespace + type;\n\n        if ( true && !store._actions[type]) {\n          console.error(\"[vuex] unknown local action type: \" + args.type + \", global type: \" + type);\n          return;\n        }\n      }\n\n      return store.dispatch(type, payload);\n    },\n    commit: noNamespace ? store.commit : function (_type, _payload, _options) {\n      var args = unifyObjectStyle(_type, _payload, _options);\n      var payload = args.payload;\n      var options = args.options;\n      var type = args.type;\n\n      if (!options || !options.root) {\n        type = namespace + type;\n\n        if ( true && !store._mutations[type]) {\n          console.error(\"[vuex] unknown local mutation type: \" + args.type + \", global type: \" + type);\n          return;\n        }\n      }\n\n      store.commit(type, payload, options);\n    }\n  }; // getters and state object must be gotten lazily\n  // because they will be changed by vm update\n\n  Object.defineProperties(local, {\n    getters: {\n      get: noNamespace ? function () {\n        return store.getters;\n      } : function () {\n        return makeLocalGetters(store, namespace);\n      }\n    },\n    state: {\n      get: function () {\n        return getNestedState(store.state, path);\n      }\n    }\n  });\n  return local;\n}\n\nfunction makeLocalGetters(store, namespace) {\n  var gettersProxy = {};\n  var splitPos = namespace.length;\n  Object.keys(store.getters).forEach(function (type) {\n    // skip if the target getter is not match this namespace\n    if (type.slice(0, splitPos) !== namespace) {\n      return;\n    } // extract local getter type\n\n\n    var localType = type.slice(splitPos); // Add a port to the getters proxy.\n    // Define as getter property because\n    // we do not want to evaluate the getters in this time.\n\n    Object.defineProperty(gettersProxy, localType, {\n      get: function () {\n        return store.getters[type];\n      },\n      enumerable: true\n    });\n  });\n  return gettersProxy;\n}\n\nfunction registerMutation(store, type, handler, local) {\n  var entry = store._mutations[type] || (store._mutations[type] = []);\n  entry.push(function wrappedMutationHandler(payload) {\n    handler.call(store, local.state, payload);\n  });\n}\n\nfunction registerAction(store, type, handler, local) {\n  var entry = store._actions[type] || (store._actions[type] = []);\n  entry.push(function wrappedActionHandler(payload, cb) {\n    var res = handler.call(store, {\n      dispatch: local.dispatch,\n      commit: local.commit,\n      getters: local.getters,\n      state: local.state,\n      rootGetters: store.getters,\n      rootState: store.state\n    }, payload, cb);\n\n    if (!isPromise(res)) {\n      res = Promise.resolve(res);\n    }\n\n    if (store._devtoolHook) {\n      return res.catch(function (err) {\n        store._devtoolHook.emit('vuex:error', err);\n\n        throw err;\n      });\n    } else {\n      return res;\n    }\n  });\n}\n\nfunction registerGetter(store, type, rawGetter, local) {\n  if (store._wrappedGetters[type]) {\n    if (true) {\n      console.error(\"[vuex] duplicate getter key: \" + type);\n    }\n\n    return;\n  }\n\n  store._wrappedGetters[type] = function wrappedGetter(store) {\n    return rawGetter(local.state, // local state\n    local.getters, // local getters\n    store.state, // root state\n    store.getters // root getters\n    );\n  };\n}\n\nfunction enableStrictMode(store) {\n  store._vm.$watch(function () {\n    return this._data.$$state;\n  }, function () {\n    if (true) {\n      assert(store._committing, \"do not mutate vuex store state outside mutation handlers.\");\n    }\n  }, {\n    deep: true,\n    sync: true\n  });\n}\n\nfunction getNestedState(state, path) {\n  return path.length ? path.reduce(function (state, key) {\n    return state[key];\n  }, state) : state;\n}\n\nfunction unifyObjectStyle(type, payload, options) {\n  if (isObject(type) && type.type) {\n    options = payload;\n    payload = type;\n    type = type.type;\n  }\n\n  if (true) {\n    assert(typeof type === 'string', \"expects string as the type, but found \" + typeof type + \".\");\n  }\n\n  return {\n    type: type,\n    payload: payload,\n    options: options\n  };\n}\n\nfunction install(_Vue) {\n  if (Vue && _Vue === Vue) {\n    if (true) {\n      console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');\n    }\n\n    return;\n  }\n\n  Vue = _Vue;\n  applyMixin(Vue);\n}\n/**\n * Reduce the code which written in Vue.js for getting the state.\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.\n * @param {Object}\n */\n\n\nvar mapState = normalizeNamespace(function (namespace, states) {\n  var res = {};\n  normalizeMap(states).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedState() {\n      var state = this.$store.state;\n      var getters = this.$store.getters;\n\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapState', namespace);\n\n        if (!module) {\n          return;\n        }\n\n        state = module.context.state;\n        getters = module.context.getters;\n      }\n\n      return typeof val === 'function' ? val.call(this, state, getters) : state[val];\n    }; // mark vuex getter for devtools\n\n\n    res[key].vuex = true;\n  });\n  return res;\n});\n/**\n * Reduce the code which written in Vue.js for committing the mutation\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.\n * @return {Object}\n */\n\nvar mapMutations = normalizeNamespace(function (namespace, mutations) {\n  var res = {};\n  normalizeMap(mutations).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedMutation() {\n      var args = [],\n          len = arguments.length;\n\n      while (len--) args[len] = arguments[len]; // Get the commit method from store\n\n\n      var commit = this.$store.commit;\n\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);\n\n        if (!module) {\n          return;\n        }\n\n        commit = module.context.commit;\n      }\n\n      return typeof val === 'function' ? val.apply(this, [commit].concat(args)) : commit.apply(this.$store, [val].concat(args));\n    };\n  });\n  return res;\n});\n/**\n * Reduce the code which written in Vue.js for getting the getters\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} getters\n * @return {Object}\n */\n\nvar mapGetters = normalizeNamespace(function (namespace, getters) {\n  var res = {};\n  normalizeMap(getters).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val; // The namespace has been mutated by normalizeNamespace\n\n    val = namespace + val;\n\n    res[key] = function mappedGetter() {\n      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {\n        return;\n      }\n\n      if ( true && !(val in this.$store.getters)) {\n        console.error(\"[vuex] unknown getter: \" + val);\n        return;\n      }\n\n      return this.$store.getters[val];\n    }; // mark vuex getter for devtools\n\n\n    res[key].vuex = true;\n  });\n  return res;\n});\n/**\n * Reduce the code which written in Vue.js for dispatch the action\n * @param {String} [namespace] - Module's namespace\n * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.\n * @return {Object}\n */\n\nvar mapActions = normalizeNamespace(function (namespace, actions) {\n  var res = {};\n  normalizeMap(actions).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedAction() {\n      var args = [],\n          len = arguments.length;\n\n      while (len--) args[len] = arguments[len]; // get dispatch function from store\n\n\n      var dispatch = this.$store.dispatch;\n\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);\n\n        if (!module) {\n          return;\n        }\n\n        dispatch = module.context.dispatch;\n      }\n\n      return typeof val === 'function' ? val.apply(this, [dispatch].concat(args)) : dispatch.apply(this.$store, [val].concat(args));\n    };\n  });\n  return res;\n});\n/**\n * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object\n * @param {String} namespace\n * @return {Object}\n */\n\nvar createNamespacedHelpers = function (namespace) {\n  return {\n    mapState: mapState.bind(null, namespace),\n    mapGetters: mapGetters.bind(null, namespace),\n    mapMutations: mapMutations.bind(null, namespace),\n    mapActions: mapActions.bind(null, namespace)\n  };\n};\n/**\n * Normalize the map\n * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]\n * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]\n * @param {Array|Object} map\n * @return {Object}\n */\n\n\nfunction normalizeMap(map) {\n  return Array.isArray(map) ? map.map(function (key) {\n    return {\n      key: key,\n      val: key\n    };\n  }) : Object.keys(map).map(function (key) {\n    return {\n      key: key,\n      val: map[key]\n    };\n  });\n}\n/**\n * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.\n * @param {Function} fn\n * @return {Function}\n */\n\n\nfunction normalizeNamespace(fn) {\n  return function (namespace, map) {\n    if (typeof namespace !== 'string') {\n      map = namespace;\n      namespace = '';\n    } else if (namespace.charAt(namespace.length - 1) !== '/') {\n      namespace += '/';\n    }\n\n    return fn(namespace, map);\n  };\n}\n/**\n * Search a special module from store by namespace. if module not exist, print error message.\n * @param {Object} store\n * @param {String} helper\n * @param {String} namespace\n * @return {Object}\n */\n\n\nfunction getModuleByNamespace(store, helper, namespace) {\n  var module = store._modulesNamespaceMap[namespace];\n\n  if ( true && !module) {\n    console.error(\"[vuex] module namespace not found in \" + helper + \"(): \" + namespace);\n  }\n\n  return module;\n}\n\nvar index_esm = {\n  Store: Store,\n  install: install,\n  version: '3.1.0',\n  mapState: mapState,\n  mapMutations: mapMutations,\n  mapGetters: mapGetters,\n  mapActions: mapActions,\n  createNamespacedHelpers: createNamespacedHelpers\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (index_esm);\n\n\n//# sourceURL=webpack:///./node_modules/vuex/dist/vuex.esm.js?");

/***/ }),

/***/ "./route/route.js":
/*!************************!*\
  !*** ./route/route.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ \"./node_modules/vue-router/dist/vue-router.esm.js\");\n//import routercomp from \"../components/routercomp.vue\"\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vue_router__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  routes: [{\n    name: 'routercomp',\n    path: '/',\n    component: () => Promise.all(/*! import() */[__webpack_require__.e(\"common\"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../components/routercomp.vue */ \"./components/routercomp.vue\"))\n  }, {\n    name: 'routercomp2',\n    path: '/2',\n    component: () => Promise.all(/*! import() */[__webpack_require__.e(\"common\"), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, /*! ../components/routercomp2.vue */ \"./components/routercomp2.vue\"))\n  }, {\n    name: 'routercomp3',\n    path: '/3',\n    component: () => Promise.all(/*! import() */[__webpack_require__.e(\"common\"), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ../components/rout.vue */ \"./components/rout.vue\"))\n  }]\n}));\n\n//# sourceURL=webpack:///./route/route.js?");

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ \"./node_modules/vuex/dist/vuex.esm.js\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\n\nvue__WEBPACK_IMPORTED_MODULE_1__[\"default\"].use(vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (new vuex__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Store({\n  state: {\n    text: 0\n  }\n}));\n\n//# sourceURL=webpack:///./store/store.js?");

/***/ }),

/***/ "dll-reference vendor":
/*!*************************!*\
  !*** external "vendor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = vendor;\n\n//# sourceURL=webpack:///external_%22vendor%22?");

/***/ })

/******/ });