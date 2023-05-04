"use strict";
(() => {
var exports = {};
exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 2279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tvshows),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/tvshows/ActionTv.jsx



const ActionTvshows = ({ data , result , action  })=>{
    const base_url = "https://image.tmdb.org/t/p/";
    const tv = data.filter((movie)=>{
        return movie.genre_ids.includes(10759);
    });
    const tv1 = result.filter((movie)=>{
        return movie.genre_ids.includes(10759);
    });
    const tv2 = action.filter((movie)=>{
        return movie.genre_ids.includes(10759);
    });
    tv.push(...tv1, ...tv2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl ml-3 mt-3 md:mt-4 md:ml-8",
                children: "Action & Adventure →"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col ml-3 mt-3 md:ml-8 md:mt-2 gap-2 overflow-auto hide-scroll",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex gap-4",
                    children: tv.map((movie)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/tvshows/${movie.id}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "max-w-none",
                                        src: base_url + "w500" + movie.poster_path,
                                        width: 200,
                                        height: 50,
                                        alt: "",
                                        style: {
                                            width: "auto",
                                            height: "auto"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-white font-mono font-base",
                                    children: movie.name
                                })
                            ]
                        }, movie.id))
                })
            })
        ]
    });
};
/* harmony default export */ const ActionTv = (ActionTvshows);

// EXTERNAL MODULE: ./components/tvshows/AiringTvshows.jsx
var AiringTvshows = __webpack_require__(3202);
// EXTERNAL MODULE: ./components/tvshows/PopularTvshows.jsx
var PopularTvshows = __webpack_require__(9915);
// EXTERNAL MODULE: ./components/tvshows/TopratedTvshows.jsx
var TopratedTvshows = __webpack_require__(9328);
;// CONCATENATED MODULE: ./components/tvshows/TvAnimation.jsx



const TvAnimation = ({ data , result , action  })=>{
    const base_url = "https://image.tmdb.org/t/p/";
    const tv = data.filter((movie)=>{
        return movie.genre_ids.includes(16);
    });
    const tv1 = result.filter((movie)=>{
        return movie.genre_ids.includes(16);
    });
    const tv2 = action.filter((movie)=>{
        return movie.genre_ids.includes(16);
    });
    tv.push(...tv1, ...tv2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl ml-3 mt-3 md:mt-4 md:ml-8",
                children: "Animation →"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col ml-3 mt-3 md:ml-8 md:mt-2 gap-2 overflow-auto hide-scroll",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex gap-4",
                    children: tv.map((movie)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/tvshows/${movie.id}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "max-w-none",
                                        src: base_url + "w500" + movie.poster_path,
                                        width: 200,
                                        height: 50,
                                        alt: "",
                                        style: {
                                            width: "auto",
                                            height: "auto"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-white font-mono font-base",
                                    children: movie.name
                                })
                            ]
                        }, movie.id))
                })
            })
        ]
    });
};
/* harmony default export */ const tvshows_TvAnimation = (TvAnimation);

;// CONCATENATED MODULE: ./components/tvshows/TvComedy.jsx



const TvComedy = ({ data , result , action  })=>{
    const base_url = "https://image.tmdb.org/t/p/";
    const tv = data.filter((movie)=>{
        return movie.genre_ids.includes(35);
    });
    const tv1 = result.filter((movie)=>{
        return movie.genre_ids.includes(35);
    });
    const tv2 = action.filter((movie)=>{
        return movie.genre_ids.includes(35);
    });
    tv.push(...tv1, ...tv2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl ml-3 mt-3 md:mt-4 md:ml-8",
                children: "Comedy →"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col ml-3 mt-3 md:ml-8 md:mt-2 gap-2 overflow-auto hide-scroll",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex gap-4",
                    children: tv.map((movie)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/tvshows/${movie.id}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "max-w-none",
                                        src: base_url + "w500" + movie.poster_path,
                                        width: 200,
                                        height: 50,
                                        alt: "",
                                        style: {
                                            width: "auto",
                                            height: "auto"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-white font-mono font-base",
                                    children: movie.name
                                })
                            ]
                        }, movie.id))
                })
            })
        ]
    });
};
/* harmony default export */ const tvshows_TvComedy = (TvComedy);

;// CONCATENATED MODULE: ./components/tvshows/TvCrime.jsx



const TvCrime = ({ data , result , action  })=>{
    const base_url = "https://image.tmdb.org/t/p/";
    const tv = data.filter((movie)=>{
        return movie.genre_ids.includes(80);
    });
    const tv1 = result.filter((movie)=>{
        return movie.genre_ids.includes(80);
    });
    const tv2 = action.filter((movie)=>{
        return movie.genre_ids.includes(80);
    });
    tv.push(...tv1, ...tv2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl ml-3 mt-3 md:mt-4 md:ml-8",
                children: "Crime →"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col ml-3 mt-3 md:ml-8 md:mt-2 gap-2 overflow-auto hide-scroll",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex gap-4",
                    children: tv.map((movie)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/tvshows/${movie.id}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "max-w-none",
                                        src: base_url + "w500" + movie.poster_path,
                                        width: 200,
                                        height: 50,
                                        alt: "",
                                        style: {
                                            width: "auto",
                                            height: "auto"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-white font-mono font-base",
                                    children: movie.name
                                })
                            ]
                        }, movie.id))
                })
            })
        ]
    });
};
/* harmony default export */ const tvshows_TvCrime = (TvCrime);

;// CONCATENATED MODULE: ./components/tvshows/TvDrama.jsx



const TvDrama = ({ data , result , action  })=>{
    const base_url = "https://image.tmdb.org/t/p/";
    const tv = data.filter((movie)=>{
        return movie.genre_ids.includes(18);
    });
    const tv1 = result.filter((movie)=>{
        return movie.genre_ids.includes(18);
    });
    const tv2 = action.filter((movie)=>{
        return movie.genre_ids.includes(18);
    });
    tv.push(...tv1, ...tv2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl ml-3 mt-3 md:mt-4 md:ml-8",
                children: "Drama →"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col ml-3 mt-3 md:ml-8 md:mt-2 gap-2 overflow-auto hide-scroll",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex gap-4",
                    children: tv.map((movie)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/tvshows/${movie.id}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "max-w-none",
                                        src: base_url + "w500" + movie.poster_path,
                                        width: 200,
                                        height: 50,
                                        alt: "",
                                        style: {
                                            width: "auto",
                                            height: "auto"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-white font-mono font-base",
                                    children: movie.name
                                })
                            ]
                        }, movie.id))
                })
            })
        ]
    });
};
/* harmony default export */ const tvshows_TvDrama = (TvDrama);

;// CONCATENATED MODULE: ./components/tvshows/TvSci.jsx



const TvSci_Fantasy = ({ data , result , action  })=>{
    const base_url = "https://image.tmdb.org/t/p/";
    const tv = data.filter((movie)=>{
        return movie.genre_ids.includes(10765);
    });
    const tv1 = result.filter((movie)=>{
        return movie.genre_ids.includes(10765);
    });
    const tv2 = action.filter((movie)=>{
        return movie.genre_ids.includes(10765);
    });
    tv.push(...tv1, ...tv2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl ml-3 mt-3 md:mt-4 md:ml-8",
                children: "Sci-Fi & Fantasy →"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col ml-3 mt-3 md:ml-8 md:mt-2 gap-2 overflow-auto hide-scroll",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex gap-4",
                    children: tv.map((movie)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/tvshows/${movie.id}`,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "max-w-none",
                                        src: base_url + "w500" + movie.poster_path,
                                        width: 200,
                                        height: 50,
                                        alt: "",
                                        style: {
                                            width: "auto",
                                            height: "auto"
                                        }
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-white font-mono font-base",
                                    children: movie.name
                                })
                            ]
                        }, movie.id))
                })
            })
        ]
    });
};
/* harmony default export */ const TvSci = (TvSci_Fantasy);

// EXTERNAL MODULE: ./components/UI/footer/Footer.jsx
var Footer = __webpack_require__(8160);
// EXTERNAL MODULE: ./components/UI/header/Hero.jsx
var Hero = __webpack_require__(1044);
// EXTERNAL MODULE: ./components/UI/header/Nav.jsx
var Nav = __webpack_require__(965);
;// CONCATENATED MODULE: ./components/UI/header/TvHeader.jsx



const TvHeader = ({ data  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-tvHero bg-cover bg-center h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Nav/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                data: data
            })
        ]
    });
};
/* harmony default export */ const header_TvHeader = (TvHeader);

// EXTERNAL MODULE: ./components/UI/preloader/Preloader.jsx
var Preloader = __webpack_require__(3701);
;// CONCATENATED MODULE: ./pages/tvshows/index.js















const Tvshows = ({ data , popular_tvshows , toprated_tvshows , airing  })=>{
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 3000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Tvshows"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "A Next Js built movie app using The MovieDatabase Api"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(Preloader/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header_TvHeader, {
                        data: data
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PopularTvshows/* default */.Z, {
                        data: popular_tvshows
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TopratedTvshows/* default */.Z, {
                        data: toprated_tvshows
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AiringTvshows/* default */.Z, {
                        data: airing
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ActionTv, {
                        data: airing,
                        result: popular_tvshows,
                        action: toprated_tvshows
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(tvshows_TvAnimation, {
                        data: airing,
                        result: popular_tvshows,
                        action: toprated_tvshows
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(tvshows_TvComedy, {
                        data: airing,
                        result: popular_tvshows,
                        action: toprated_tvshows
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(tvshows_TvCrime, {
                        data: airing,
                        result: popular_tvshows,
                        action: toprated_tvshows
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(tvshows_TvDrama, {
                        data: airing,
                        result: popular_tvshows,
                        action: toprated_tvshows
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TvSci, {
                        data: airing,
                        result: popular_tvshows,
                        action: toprated_tvshows
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const tvshows = (Tvshows);
async function getServerSideProps() {
    const { heromovie  } = await __webpack_require__.e(/* import() */ 524).then(__webpack_require__.t.bind(__webpack_require__, 4524, 19));
    const { popular_tvshows  } = await __webpack_require__.e(/* import() */ 705).then(__webpack_require__.t.bind(__webpack_require__, 6705, 19));
    const { toprated_tvshows  } = await __webpack_require__.e(/* import() */ 899).then(__webpack_require__.t.bind(__webpack_require__, 7899, 19));
    const { airing  } = await __webpack_require__.e(/* import() */ 34).then(__webpack_require__.t.bind(__webpack_require__, 8034, 19));
    return {
        props: {
            data: heromovie,
            popular_tvshows,
            toprated_tvshows,
            airing
        }
    };
}


/***/ }),

/***/ 6153:
/***/ ((module) => {

module.exports = require("@auth0/nextjs-auth0/client");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [443,61,789,723,768], () => (__webpack_exec__(2279)));
module.exports = __webpack_exports__;

})();