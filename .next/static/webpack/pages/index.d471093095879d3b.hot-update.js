"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/UI/header/Header.jsx":
/*!*****************************************!*\
  !*** ./components/UI/header/Header.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Hero */ \"./components/UI/header/Hero.jsx\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Nav */ \"./components/UI/header/Nav.jsx\");\n/* harmony import */ var _SideNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideNav */ \"./components/UI/header/SideNav.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Header = (param)=>{\n    let { data  } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const showNav = ()=>{\n        setIsOpen(true);\n    };\n    const hideNav = ()=>{\n        setIsOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-hero bg-cover bg-center h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                toggleNav: showNav,\n                open: isOpen,\n                onHide: hideNav\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\Header.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SideNav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                onHide: hideNav\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\Header.jsx\",\n                lineNumber: 20,\n                columnNumber: 18\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                data: data\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\Header.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\Header.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Header, \"+sus0Lb0ewKHdwiUhiTAJFoFyQ0=\");\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VJL2hlYWRlci9IZWFkZXIuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFDUDtBQUNGO0FBQ1E7QUFFaEMsTUFBTUksU0FBUyxTQUFjO1FBQWIsRUFBRUMsS0FBSSxFQUFFOztJQUN0QixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUMsS0FBSztJQUUxQyxNQUFNUSxVQUFVLElBQU07UUFDcEJELFVBQVUsSUFBSTtJQUNoQjtJQUVBLE1BQU1FLFVBQVUsSUFBTTtRQUNwQkYsVUFBVSxLQUFLO0lBQ2pCO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDVCw0Q0FBR0E7Z0JBQUNVLFdBQVdKO2dCQUFTSyxNQUFNUDtnQkFBUVEsUUFBUUw7Ozs7OztZQUM5Q0gsd0JBQVUsOERBQUNILGdEQUFPQTtnQkFBQ1csUUFBUUw7Ozs7OzswQkFDNUIsOERBQUNSLDZDQUFJQTtnQkFBQ0ksTUFBTUE7Ozs7Ozs7Ozs7OztBQUdsQjtHQWxCTUQ7S0FBQUE7QUFvQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9oZWFkZXIvSGVhZGVyLmpzeD9kYWE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZXJvIGZyb20gXCIuL0hlcm9cIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi9OYXZcIjtcclxuaW1wb3J0IFNpZGVOYXYgZnJvbSBcIi4vU2lkZU5hdlwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3Qgc2hvd05hdiA9ICgpID0+IHtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoaWRlTmF2ID0gKCkgPT4ge1xyXG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1oZXJvIGJnLWNvdmVyIGJnLWNlbnRlciBoLXNjcmVlblwiPlxyXG4gICAgICA8TmF2IHRvZ2dsZU5hdj17c2hvd05hdn0gb3Blbj17aXNPcGVufSBvbkhpZGU9e2hpZGVOYXZ9IC8+XHJcbiAgICAgIHtpc09wZW4gJiYgPFNpZGVOYXYgb25IaWRlPXtoaWRlTmF2fSAvPn1cclxuICAgICAgPEhlcm8gZGF0YT17ZGF0YX0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlcm8iLCJOYXYiLCJTaWRlTmF2IiwiSGVhZGVyIiwiZGF0YSIsImlzT3BlbiIsInNldElzT3BlbiIsInNob3dOYXYiLCJoaWRlTmF2IiwiZGl2IiwiY2xhc3NOYW1lIiwidG9nZ2xlTmF2Iiwib3BlbiIsIm9uSGlkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/UI/header/Header.jsx\n"));

/***/ })

});