"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tvshows/[tvshowsId]",{

/***/ "./components/tvshows/TvDetails.jsx":
/*!******************************************!*\
  !*** ./components/tvshows/TvDetails.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _TvCast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TvCast */ \"./components/tvshows/TvCast.jsx\");\n/* harmony import */ var _UI_header_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/header/Nav */ \"./components/UI/header/Nav.jsx\");\n/* harmony import */ var _ActionIcons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ActionIcons */ \"./components/tvshows/ActionIcons.jsx\");\n/* harmony import */ var _UI_skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UI/skeleton/Skeleton */ \"./components/UI/skeleton/Skeleton.jsx\");\n/* harmony import */ var _UI_skeleton_CastSkeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../UI/skeleton/CastSkeleton */ \"./components/UI/skeleton/CastSkeleton.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst TvDetail = (param)=>{\n    let { data , cast , watch  } = param;\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [tvData, setTvData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [tvCast, setTvCast] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>{\n            setTvData(data);\n            setTvCast(cast);\n            setIsLoading(false);\n        }, 5000);\n    }, [\n        data,\n        cast\n    ]);\n    const { results  } = watch;\n    const base_url = \"https://image.tmdb.org/t/p/\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_header_Nav__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined),\n                isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container px-4 mx-auto flex flex-col md:flex-row mt-5 gap-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: base_url + \"w500\" + tvData.poster_path,\n                                alt: tvData.original_name,\n                                width: 375,\n                                height: 200,\n                                style: {\n                                    width: \"auto\",\n                                    height: \"auto\"\n                                },\n                                className: \"rounded-lg md:h-full\",\n                                priority: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-3xl font-bold\",\n                                    children: tvData.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex gap-2 items-center mb-4\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"border -py-1 px-1\",\n                                            children: !tvData.adult ? \"PG-13\" : \"PG-18\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: tvData.first_air_date\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"fa fa-dot-circle-o\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        tvData.genres.map((gen)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: gen.name\n                                            }, gen.id, false, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, undefined))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ActionIcons__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    data: tvData\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-baseline gap-2 mb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl mb-1 font-semibold\",\n                                            children: \"Status:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        tvData.status\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-full mb-2 md:w-29\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl mb-1 font-semibold\",\n                                            children: \"Overview\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: tvData.overview === \"\" ? \"Not Found\" : tvData.overview\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-baseline gap-2 mb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl mb-1 font-semibold\",\n                                            children: \"Created by:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        tvData.created_by === [] ? \"Not found\" : tvData.created_by.map((dir)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"flex\",\n                                                children: dir.name\n                                            }, dir.id, false, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 23\n                                            }, undefined))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-baseline gap-2 mb-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl mb-1 font-semibold\",\n                                            children: \"Last Episode air date:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        tvData.last_episode_to_air.air_date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-baseline gap-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl mb-1 font-semibold\",\n                                            children: \"Next Episode air date:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        tvData.next_episode_to_air === null ? \"Not Found\" : tvData.next_episode_to_air.air_date\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-baseline gap-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl mb-1 font-semibold\",\n                                            children: \"Where to watch:\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        results.US.flatrate === null ? \"Not Found\" : results.US.flatrate.map((prov)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: prov.provider_name\n                                            }, prov.provider_id, false, {\n                                                fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                                lineNumber: 96,\n                                                columnNumber: 23\n                                            }, undefined))\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                                    lineNumber: 91,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                    lineNumber: 33,\n                    columnNumber: 11\n                }, undefined),\n                isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_skeleton_CastSkeleton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 22\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TvCast__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    data: tvCast\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 41\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Documents\\\\my-web-project\\\\movienet\\\\components\\\\tvshows\\\\TvDetails.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TvDetail, \"AJsmR+tvNudjJFb62K064pYEk1E=\");\n_c = TvDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TvDetail);\nvar _c;\n$RefreshReg$(_c, \"TvDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NEQUE2Qjs7Ozs7O3dDQUcxQ1IsT0FBT2lDLG1CQUFtQixLQUFLLElBQUksR0FDaEMsY0FDQWpDLE9BQU9pQyxtQkFBbUIsQ0FBQ0QsUUFBUTs7Ozs7Ozs4Q0FFekMsOERBQUN6QjtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNTOzRDQUFHVCxXQUFVO3NEQUE2Qjs7Ozs7O3dDQUMxQ0gsUUFBUTZCLEVBQUUsQ0FBQ0MsUUFBUSxLQUFLLElBQUksR0FDekIsY0FDQTlCLFFBQVE2QixFQUFFLENBQUNDLFFBQVEsQ0FBQ1gsR0FBRyxDQUFDLENBQUNZLHFCQUN2Qiw4REFBQ2hCOzBEQUEwQmdCLEtBQUtDLGFBQWE7K0NBQXJDRCxLQUFLRSxXQUFXOzs7OzBEQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUliO2dCQUVBeEMsMEJBQVksOERBQUNMLGlFQUFZQTs7Ozs4Q0FBTSw4REFBQ0osK0NBQU1BO29CQUFDTSxNQUFNTzs7Ozs7NkJBQVU7Ozs7Ozs7Ozs7OztBQUloRTtHQWxHTVI7S0FBQUE7QUFvR04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90dnNob3dzL1R2RGV0YWlscy5qc3g/OGU3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgVHZDYXN0IGZyb20gXCIuL1R2Q2FzdFwiO1xyXG5pbXBvcnQgTmF2IGZyb20gXCIuLi9VSS9oZWFkZXIvTmF2XCI7XHJcbmltcG9ydCBJY29ucyBmcm9tIFwiLi9BY3Rpb25JY29uc1wiO1xyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSBcIi4uL1VJL3NrZWxldG9uL1NrZWxldG9uXCI7XHJcbmltcG9ydCBDYXN0U2tlbGV0b24gZnJvbSBcIi4uL1VJL3NrZWxldG9uL0Nhc3RTa2VsZXRvblwiO1xyXG5cclxuY29uc3QgVHZEZXRhaWwgPSAoeyBkYXRhLCBjYXN0LCB3YXRjaCB9KSA9PiB7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFt0dkRhdGEsIHNldFR2RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdHZDYXN0LCBzZXRUdkNhc3RdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNldFR2RGF0YShkYXRhKTtcclxuICAgICAgc2V0VHZDYXN0KGNhc3QpO1xyXG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgfSwgNTAwMCk7XHJcbiAgfSwgW2RhdGEsIGNhc3RdKTtcclxuXHJcbiAgY29uc3QgeyByZXN1bHRzIH0gPSB3YXRjaDtcclxuXHJcbiAgY29uc3QgYmFzZV91cmwgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL1wiO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8TmF2IC8+XHJcbiAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgIDxTa2VsZXRvbiAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC00IG14LWF1dG8gZmxleCBmbGV4LWNvbCBtZDpmbGV4LXJvdyBtdC01IGdhcC02XCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Jhc2VfdXJsICsgXCJ3NTAwXCIgKyB0dkRhdGEucG9zdGVyX3BhdGh9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e3R2RGF0YS5vcmlnaW5hbF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgd2lkdGg9ezM3NX1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiYXV0b1wiLCBoZWlnaHQ6IFwiYXV0b1wiIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWxnIG1kOmgtZnVsbFwiXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj57dHZEYXRhLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIgaXRlbXMtY2VudGVyIG1iLTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIC1weS0xIHB4LTFcIj5cclxuICAgICAgICAgICAgICAgICAgeyF0dkRhdGEuYWR1bHQgPyBcIlBHLTEzXCIgOiBcIlBHLTE4XCJ9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwPnt0dkRhdGEuZmlyc3RfYWlyX2RhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZG90LWNpcmNsZS1vXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAge3R2RGF0YS5nZW5yZXMubWFwKChnZW4pID0+IChcclxuICAgICAgICAgICAgICAgICAgPHAga2V5PXtnZW4uaWR9PntnZW4ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8SWNvbnMgZGF0YT17dHZEYXRhfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtMiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0xIGZvbnQtc2VtaWJvbGRcIj5TdGF0dXM6PC9oMj5cclxuICAgICAgICAgICAgICAgIHt0dkRhdGEuc3RhdHVzfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1iLTIgbWQ6dy0yOVwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWItMSBmb250LXNlbWlib2xkXCI+T3ZlcnZpZXc8L2gyPlxyXG4gICAgICAgICAgICAgICAgPHA+e3R2RGF0YS5vdmVydmlldyA9PT0gXCJcIiA/IFwiTm90IEZvdW5kXCIgOiB0dkRhdGEub3ZlcnZpZXd9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtMiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0xIGZvbnQtc2VtaWJvbGRcIj5DcmVhdGVkIGJ5OjwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAge3R2RGF0YS5jcmVhdGVkX2J5ID09PSBbXVxyXG4gICAgICAgICAgICAgICAgICA/IFwiTm90IGZvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgOiB0dkRhdGEuY3JlYXRlZF9ieS5tYXAoKGRpcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtkaXIuaWR9IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2Rpci5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtMiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBtYi0xIGZvbnQtc2VtaWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgTGFzdCBFcGlzb2RlIGFpciBkYXRlOlxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIHt0dkRhdGEubGFzdF9lcGlzb2RlX3RvX2Fpci5haXJfZGF0ZX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtYmFzZWxpbmUgZ2FwLTJcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTEgZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICBOZXh0IEVwaXNvZGUgYWlyIGRhdGU6XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAge3R2RGF0YS5uZXh0X2VwaXNvZGVfdG9fYWlyID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgID8gXCJOb3QgRm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICA6IHR2RGF0YS5uZXh0X2VwaXNvZGVfdG9fYWlyLmFpcl9kYXRlfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1iYXNlbGluZSBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgbWItMSBmb250LXNlbWlib2xkXCI+V2hlcmUgdG8gd2F0Y2g6PC9oMj5cclxuICAgICAgICAgICAgICAgIHtyZXN1bHRzLlVTLmZsYXRyYXRlID09PSBudWxsXHJcbiAgICAgICAgICAgICAgICAgID8gXCJOb3QgRm91bmRcIlxyXG4gICAgICAgICAgICAgICAgICA6IHJlc3VsdHMuVVMuZmxhdHJhdGUubWFwKChwcm92KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e3Byb3YucHJvdmlkZXJfaWR9Pntwcm92LnByb3ZpZGVyX25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtpc0xvYWRpbmcgPyA8Q2FzdFNrZWxldG9uIC8+IDogPFR2Q2FzdCBkYXRhPXt0dkNhc3R9IC8+fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUdkRldGFpbDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJUdkNhc3QiLCJOYXYiLCJJY29ucyIsIlNrZWxldG9uIiwiQ2FzdFNrZWxldG9uIiwiVHZEZXRhaWwiLCJkYXRhIiwiY2FzdCIsIndhdGNoIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidHZEYXRhIiwic2V0VHZEYXRhIiwidHZDYXN0Iiwic2V0VHZDYXN0Iiwic2V0VGltZW91dCIsInJlc3VsdHMiLCJiYXNlX3VybCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsInBvc3Rlcl9wYXRoIiwiYWx0Iiwib3JpZ2luYWxfbmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJwcmlvcml0eSIsImgyIiwibmFtZSIsImFkdWx0IiwicCIsImZpcnN0X2Fpcl9kYXRlIiwiaSIsImdlbnJlcyIsIm1hcCIsImdlbiIsImlkIiwic3RhdHVzIiwib3ZlcnZpZXciLCJjcmVhdGVkX2J5IiwiZGlyIiwibGFzdF9lcGlzb2RlX3RvX2FpciIsImFpcl9kYXRlIiwibmV4dF9lcGlzb2RlX3RvX2FpciIsIlVTIiwiZmxhdHJhdGUiLCJwcm92IiwicHJvdmlkZXJfbmFtZSIsInByb3ZpZGVyX2lkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/tvshows/TvDetails.jsx\n"));

/***/ })

});