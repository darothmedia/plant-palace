/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_setup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game_setup.js */ \"./src/scripts/game_setup.js\");\n// import { Furniture } from './scripts/furniture.js'\n// import { Plant } from './scripts/plant.js'\n// import { Human } from './scripts/human.js'\n// import { Wall } from './scripts/wall.js'\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_scripts_game_setup_js__WEBPACK_IMPORTED_MODULE_0__.setupGame)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7QUFDdkRGLEVBQUFBLGlFQUFTO0FBQ1YsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYW50LXBhbGFjZS0yLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgRnVybml0dXJlIH0gZnJvbSAnLi9zY3JpcHRzL2Z1cm5pdHVyZS5qcydcbi8vIGltcG9ydCB7IFBsYW50IH0gZnJvbSAnLi9zY3JpcHRzL3BsYW50LmpzJ1xuLy8gaW1wb3J0IHsgSHVtYW4gfSBmcm9tICcuL3NjcmlwdHMvaHVtYW4uanMnXG4vLyBpbXBvcnQgeyBXYWxsIH0gZnJvbSAnLi9zY3JpcHRzL3dhbGwuanMnXG5cbmltcG9ydCB7c2V0dXBHYW1lfSBmcm9tICcuL3NjcmlwdHMvZ2FtZV9zZXR1cC5qcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gIHNldHVwR2FtZSgpXG59KVxuXG4iXSwibmFtZXMiOlsic2V0dXBHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game_setup.js":
/*!***********************************!*\
  !*** ./src/scripts/game_setup.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupGame\": function() { return /* binding */ setupGame; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Display = /*#__PURE__*/function () {\n  function Display() {\n    _classCallCheck(this, Display);\n  }\n\n  _createClass(Display, [{\n    key: \"setupGame\",\n    value: function setupGame() {\n      var Canvas = document.getElementById(\"game-canvas\");\n      var ctx = Canvas.getContext(\"2d\");\n      var container = document.getElementById(\"game-container\");\n      var logo = document.createElement(\"img\");\n      logo.src = './img/assets/pp-game-logo.png';\n      logo.width = 600;\n      logo.className = 'logo';\n      container.appendChild(logo);\n      var base = document.createElement(\"img\");\n      base.src = './img/assets/bg/base-floor.png';\n      base.width = 800;\n      base.height = 600;\n      base.id = 'base';\n      container.appendChild(base);\n    }\n  }]);\n\n  return Display;\n}();\n\nfunction setupGame() {\n  var Canvas = document.getElementById(\"game-canvas\");\n  var ctx = Canvas.getContext(\"2d\");\n  var container = document.getElementById(\"game-container\");\n  var logo = document.createElement(\"img\");\n  logo.src = './img/assets/pp-game-logo.png';\n  logo.width = 600;\n  logo.className = 'logo';\n  container.appendChild(logo);\n  var base = document.createElement(\"img\");\n  base.src = './img/assets/bg/base-floor.png';\n  base.width = 800;\n  base.height = 600;\n  base.id = 'base';\n  container.appendChild(base);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3NldHVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUE7QUFDSixxQkFBYztBQUFBO0FBRWI7Ozs7V0FDRCxxQkFBWTtBQUNWLFVBQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxVQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsVUFBTUMsU0FBUyxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQWxCO0FBRUEsVUFBSUksSUFBSSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBRCxNQUFBQSxJQUFJLENBQUNFLEdBQUwsR0FBVywrQkFBWDtBQUNBRixNQUFBQSxJQUFJLENBQUNHLEtBQUwsR0FBYSxHQUFiO0FBQ0FILE1BQUFBLElBQUksQ0FBQ0ksU0FBTCxHQUFpQixNQUFqQjtBQUNBTCxNQUFBQSxTQUFTLENBQUNNLFdBQVYsQ0FBc0JMLElBQXRCO0FBRUEsVUFBSU0sSUFBSSxHQUFHWCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBSyxNQUFBQSxJQUFJLENBQUNKLEdBQUwsR0FBVyxnQ0FBWDtBQUNBSSxNQUFBQSxJQUFJLENBQUNILEtBQUwsR0FBYSxHQUFiO0FBQ0FHLE1BQUFBLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEdBQWQ7QUFDQUQsTUFBQUEsSUFBSSxDQUFDRSxFQUFMLEdBQVUsTUFBVjtBQUNBVCxNQUFBQSxTQUFTLENBQUNNLFdBQVYsQ0FBc0JDLElBQXRCO0FBQ0Q7Ozs7OztBQUlILFNBQVNHLFNBQVQsR0FBcUI7QUFDbkIsTUFBTWYsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBZjtBQUNBLE1BQU1DLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVo7QUFDQSxNQUFNQyxTQUFTLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBbEI7QUFFQSxNQUFJSSxJQUFJLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0FELEVBQUFBLElBQUksQ0FBQ0UsR0FBTCxHQUFXLCtCQUFYO0FBQ0FGLEVBQUFBLElBQUksQ0FBQ0csS0FBTCxHQUFhLEdBQWI7QUFDQUgsRUFBQUEsSUFBSSxDQUFDSSxTQUFMLEdBQWlCLE1BQWpCO0FBQ0FMLEVBQUFBLFNBQVMsQ0FBQ00sV0FBVixDQUFzQkwsSUFBdEI7QUFFQSxNQUFJTSxJQUFJLEdBQUdYLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0FLLEVBQUFBLElBQUksQ0FBQ0osR0FBTCxHQUFXLGdDQUFYO0FBQ0FJLEVBQUFBLElBQUksQ0FBQ0gsS0FBTCxHQUFhLEdBQWI7QUFDQUcsRUFBQUEsSUFBSSxDQUFDQyxNQUFMLEdBQWMsR0FBZDtBQUNBRCxFQUFBQSxJQUFJLENBQUNFLEVBQUwsR0FBVSxNQUFWO0FBQ0FULEVBQUFBLFNBQVMsQ0FBQ00sV0FBVixDQUFzQkMsSUFBdEI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYW50LXBhbGFjZS0yLy4vc3JjL3NjcmlwdHMvZ2FtZV9zZXR1cC5qcz84NDUwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERpc3BsYXkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBcbiAgfVxuICBzZXR1cEdhbWUoKSB7XG4gICAgY29uc3QgQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjdHggPSBDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jb250YWluZXJcIilcblxuICAgIHZhciBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGxvZ28uc3JjID0gJy4vaW1nL2Fzc2V0cy9wcC1nYW1lLWxvZ28ucG5nJ1xuICAgIGxvZ28ud2lkdGggPSA2MDBcbiAgICBsb2dvLmNsYXNzTmFtZSA9ICdsb2dvJ1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKVxuXG4gICAgdmFyIGJhc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgYmFzZS5zcmMgPSAnLi9pbWcvYXNzZXRzL2JnL2Jhc2UtZmxvb3IucG5nJ1xuICAgIGJhc2Uud2lkdGggPSA4MDBcbiAgICBiYXNlLmhlaWdodCA9IDYwMFxuICAgIGJhc2UuaWQgPSAnYmFzZSdcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFzZSlcbiAgfVxufVxuXG5cbmZ1bmN0aW9uIHNldHVwR2FtZSgpIHtcbiAgY29uc3QgQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgY29uc3QgY3R4ID0gQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNvbnRhaW5lclwiKVxuXG4gIHZhciBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBsb2dvLnNyYyA9ICcuL2ltZy9hc3NldHMvcHAtZ2FtZS1sb2dvLnBuZydcbiAgbG9nby53aWR0aCA9IDYwMFxuICBsb2dvLmNsYXNzTmFtZSA9ICdsb2dvJ1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9nbylcblxuICB2YXIgYmFzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgYmFzZS5zcmMgPSAnLi9pbWcvYXNzZXRzL2JnL2Jhc2UtZmxvb3IucG5nJ1xuICBiYXNlLndpZHRoID0gODAwXG4gIGJhc2UuaGVpZ2h0ID0gNjAwXG4gIGJhc2UuaWQgPSAnYmFzZSdcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhc2UpXG59XG5cbmV4cG9ydCB7IHNldHVwR2FtZSB9Il0sIm5hbWVzIjpbIkRpc3BsYXkiLCJDYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsImNvbnRhaW5lciIsImxvZ28iLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwid2lkdGgiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImJhc2UiLCJoZWlnaHQiLCJpZCIsInNldHVwR2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_setup.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFudC1wYWxhY2UtMi8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;