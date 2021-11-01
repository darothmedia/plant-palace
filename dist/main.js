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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupGame\": function() { return /* binding */ setupGame; }\n/* harmony export */ });\nfunction setupGame() {\n  var Canvas = document.getElementById(\"game-canvas\");\n  var ctx = Canvas.getContext(\"2d\");\n  var container = document.getElementById(\"game-container\");\n  var logo = document.createElement(\"img\");\n  logo.src = './img/assets/pp-game-logo.png';\n  logo.width = 600;\n  logo.className = 'logo';\n  container.appendChild(logo);\n  var lvl1 = document.createElement(\"img\");\n  lvl1.src = './img/assets/bg/level-1.png';\n  lvl1.width = 800;\n  lvl1.height = 600;\n  container.appendChild(lvl1);\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3NldHVwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTQSxTQUFULEdBQXFCO0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQWxCO0FBRUEsTUFBSUksSUFBSSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBRCxFQUFBQSxJQUFJLENBQUNFLEdBQUwsR0FBVywrQkFBWDtBQUNBRixFQUFBQSxJQUFJLENBQUNHLEtBQUwsR0FBYSxHQUFiO0FBQ0FILEVBQUFBLElBQUksQ0FBQ0ksU0FBTCxHQUFpQixNQUFqQjtBQUNBTCxFQUFBQSxTQUFTLENBQUNNLFdBQVYsQ0FBc0JMLElBQXRCO0FBRUEsTUFBSU0sSUFBSSxHQUFHWCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWDtBQUNBSyxFQUFBQSxJQUFJLENBQUNKLEdBQUwsR0FBVyw2QkFBWDtBQUNBSSxFQUFBQSxJQUFJLENBQUNILEtBQUwsR0FBYSxHQUFiO0FBQ0FHLEVBQUFBLElBQUksQ0FBQ0MsTUFBTCxHQUFjLEdBQWQ7QUFDQVIsRUFBQUEsU0FBUyxDQUFDTSxXQUFWLENBQXNCQyxJQUF0QjtBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhbnQtcGFsYWNlLTIvLi9zcmMvc2NyaXB0cy9nYW1lX3NldHVwLmpzPzg0NTAiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2V0dXBHYW1lKCkge1xuICBjb25zdCBDYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICBjb25zdCBjdHggPSBDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY29udGFpbmVyXCIpXG5cbiAgdmFyIGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gIGxvZ28uc3JjID0gJy4vaW1nL2Fzc2V0cy9wcC1nYW1lLWxvZ28ucG5nJ1xuICBsb2dvLndpZHRoID0gNjAwXG4gIGxvZ28uY2xhc3NOYW1lID0gJ2xvZ28nXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvKVxuXG4gIHZhciBsdmwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICBsdmwxLnNyYyA9ICcuL2ltZy9hc3NldHMvYmcvbGV2ZWwtMS5wbmcnXG4gIGx2bDEud2lkdGggPSA4MDBcbiAgbHZsMS5oZWlnaHQgPSA2MDBcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGx2bDEpXG59XG5cbmV4cG9ydCB7IHNldHVwR2FtZSB9Il0sIm5hbWVzIjpbInNldHVwR2FtZSIsIkNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29udGFpbmVyIiwibG9nbyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImFwcGVuZENoaWxkIiwibHZsMSIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_setup.js\n");

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