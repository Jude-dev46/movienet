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

/***/ "./components/UI/header/SideNav.jsx":
/*!******************************************!*\
  !*** ./components/UI/header/SideNav.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/nextjs-auth0/client */ \"./node_modules/@auth0/nextjs-auth0/dist/client/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst SideNav = (param)=>{\n    let { open  } = param;\n    _s();\n    const { user , error  } = (0,_auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__.useUser)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-red-600 md:hidden w-8/12 h-full p-5 z-50 \".concat(open ? \"translate-x-0\" : \"translate-x-full\", \" fixed top-0 left-0 transition-all ease-in-out duration-500\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex flex-col gap-4 w-full mt-4 md:hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"flex flex-col gap-2 text-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/\",\n                                className: \"mb-6\",\n                                children: \"Home\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/movies\",\n                                className: \"mb-6\",\n                                children: \"Movies\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                                lineNumber: 19,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/tvshows\",\n                                className: \"mb-6\",\n                                children: \"Tv Shows\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-white h-5 px-5 mb-4 text-red-900 rounded hover:bg-red-900 hover:text-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/api/auth/login\",\n                        children: \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 11\n                }, undefined),\n                user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"bg-white h-5 px-5 mb-4 text-red-900 rounded hover:bg-red-900 hover:text-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/api/auth/logout\",\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-4 justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.linkedin.com/in/jude-olajumoke-002426246/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa fa-linkedin-square circle-icon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.twitter.com/judeoscar4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa fa-twitter-square circle-icon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.facebook.com/jude.olajumoke\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa fa-facebook-square circle-icon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://www.vcarrd.me/judeolajumoke\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                className: \"fa fa-address-card circle-icon\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined),\n                user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-center pt-1 border-t-2 border-t-white\",\n                    children: user.email\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\UI\\\\header\\\\SideNav.jsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SideNav, \"CUZ7MTfbgsjlz7C+7lFvNJcbQYc=\", false, function() {\n    return [\n        _auth0_nextjs_auth0_client__WEBPACK_IMPORTED_MODULE_2__.useUser\n    ];\n});\n_c = SideNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideNav);\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1VJL2hlYWRlci9TaWRlTmF2LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE2QjtBQUN3QjtBQUVyRCxNQUFNRSxVQUFVLFNBQWM7UUFBYixFQUFFQyxLQUFJLEVBQUU7O0lBQ3ZCLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR0osbUVBQU9BO0lBRS9CLHFCQUNFLDhEQUFDSztRQUNDQyxXQUFXLCtDQUVWLE9BRENKLE9BQU8sa0JBQWtCLGtCQUFrQixFQUM1QztrQkFFRCw0RUFBQ0c7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDOzhCQUNDLDRFQUFDQzt3QkFBR0YsV0FBVTs7MENBQ1osOERBQUNQLGtEQUFJQTtnQ0FBQ1UsTUFBSztnQ0FBSUgsV0FBVTswQ0FBTzs7Ozs7OzBDQUdoQyw4REFBQ1Asa0RBQUlBO2dDQUFDVSxNQUFLO2dDQUFVSCxXQUFVOzBDQUFPOzs7Ozs7MENBR3RDLDhEQUFDUCxrREFBSUE7Z0NBQUNVLE1BQUs7Z0NBQVdILFdBQVU7MENBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU0xQyxDQUFDSCxzQkFDQSw4REFBQ087b0JBQU9KLFdBQVU7OEJBQ2hCLDRFQUFDUCxrREFBSUE7d0JBQUNVLE1BQUs7a0NBQWtCOzs7Ozs7Ozs7OztnQkFHaENOLHNCQUNDLDhEQUFDTztvQkFBT0osV0FBVTs4QkFDaEIsNEVBQUNQLGtEQUFJQTt3QkFBQ1UsTUFBSztrQ0FBbUI7Ozs7Ozs7Ozs7OzhCQUdsQyw4REFBQ0o7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDSzs0QkFBRUYsTUFBSztzQ0FDTiw0RUFBQ0c7Z0NBQUVOLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVmLDhEQUFDSzs0QkFBRUYsTUFBSztzQ0FDTiw0RUFBQ0c7Z0NBQUVOLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVmLDhEQUFDSzs0QkFBRUYsTUFBSztzQ0FDTiw0RUFBQ0c7Z0NBQUVOLFdBQVU7Ozs7Ozs7Ozs7O3NDQUVmLDhEQUFDSzs0QkFBRUYsTUFBSztzQ0FDTiw0RUFBQ0c7Z0NBQUVOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUdoQkgsc0JBQ0MsOERBQUNVO29CQUFFUCxXQUFVOzhCQUNWSCxLQUFLVyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQU12QjtHQXhETWI7O1FBQ29CRCwrREFBT0E7OztLQUQzQkM7QUEwRE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9VSS9oZWFkZXIvU2lkZU5hdi5qc3g/MzRjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tIFwiQGF1dGgwL25leHRqcy1hdXRoMC9jbGllbnRcIjtcclxuXHJcbmNvbnN0IFNpZGVOYXYgPSAoeyBvcGVuIH0pID0+IHtcclxuICBjb25zdCB7IHVzZXIsIGVycm9yIH0gPSB1c2VVc2VyKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YGJnLXJlZC02MDAgbWQ6aGlkZGVuIHctOC8xMiBoLWZ1bGwgcC01IHotNTAgJHtcclxuICAgICAgICBvcGVuID8gXCJ0cmFuc2xhdGUteC0wXCIgOiBcInRyYW5zbGF0ZS14LWZ1bGxcIlxyXG4gICAgICB9IGZpeGVkIHRvcC0wIGxlZnQtMCB0cmFuc2l0aW9uLWFsbCBlYXNlLWluLW91dCBkdXJhdGlvbi01MDBgfVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgdy1mdWxsIG10LTQgbWQ6aGlkZGVuXCI+XHJcbiAgICAgICAgPG5hdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIHRleHQteGxcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtYi02XCI+XHJcbiAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbW92aWVzXCIgY2xhc3NOYW1lPVwibWItNlwiPlxyXG4gICAgICAgICAgICAgIE1vdmllc1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdHZzaG93c1wiIGNsYXNzTmFtZT1cIm1iLTZcIj5cclxuICAgICAgICAgICAgICBUdiBTaG93c1xyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL1wiPk15IExpc3Q8L0xpbms+ICovfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgICB7IXVzZXIgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLTUgcHgtNSBtYi00IHRleHQtcmVkLTkwMCByb3VuZGVkIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FwaS9hdXRoL2xvZ2luXCI+U2lnbiBJbjwvTGluaz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBoLTUgcHgtNSBtYi00IHRleHQtcmVkLTkwMCByb3VuZGVkIGhvdmVyOmJnLXJlZC05MDAgaG92ZXI6dGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FwaS9hdXRoL2xvZ291dFwiPkxvZ291dDwvTGluaz5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2p1ZGUtb2xhanVtb2tlLTAwMjQyNjI0Ni9cIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlua2VkaW4tc3F1YXJlIGNpcmNsZS1pY29uXCI+PC9pPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnR3aXR0ZXIuY29tL2p1ZGVvc2NhcjRcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdHdpdHRlci1zcXVhcmUgY2lyY2xlLWljb25cIj48L2k+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2p1ZGUub2xhanVtb2tlXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZhY2Vib29rLXNxdWFyZSBjaXJjbGUtaWNvblwiPjwvaT5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy52Y2FycmQubWUvanVkZW9sYWp1bW9rZVwiPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hZGRyZXNzLWNhcmQgY2lyY2xlLWljb25cIj48L2k+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtMSBib3JkZXItdC0yIGJvcmRlci10LXdoaXRlXCI+XHJcbiAgICAgICAgICAgIHt1c2VyLmVtYWlsfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVOYXY7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlVXNlciIsIlNpZGVOYXYiLCJvcGVuIiwidXNlciIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwibmF2IiwidWwiLCJocmVmIiwiYnV0dG9uIiwiYSIsImkiLCJwIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UI/header/SideNav.jsx\n"));

/***/ })

});