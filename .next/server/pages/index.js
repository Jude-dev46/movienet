"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/movies/NowPlaying.jsx
var NowPlaying = __webpack_require__(9331);
// EXTERNAL MODULE: ./components/movies/PopularMovies.jsx
var PopularMovies = __webpack_require__(3924);
// EXTERNAL MODULE: ./components/movies/TopRated.jsx
var TopRated = __webpack_require__(3584);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/movies/UpcomingMovies.jsx



const UpcomingMovies = ({ data , genre  })=>{
    const base_url = "https://image.tmdb.org/t/p/";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl ml-3 mt-3 md:mt-4 md:ml-8",
                children: "Upcoming Movies →"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col ml-3 mt-3 md:ml-8 md:mt-2 gap-1 overflow-auto hide-scroll",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex gap-4",
                    children: data.map((movie)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/movies/${movie.id}`,
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
                                    children: movie.title
                                })
                            ]
                        }, movie.id))
                })
            })
        ]
    });
};
/* harmony default export */ const movies_UpcomingMovies = (UpcomingMovies);

;// CONCATENATED MODULE: ./components/movies/WeeklyTrend.jsx



const WeekTrend = ({ data  })=>{
    const base_url = "https://image.tmdb.org/t/p/";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl ml-3 mt-3 md:mt-4 md:ml-8",
                children: "Trending This Week →"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col ml-3 mt-3 md:ml-8 md:mt-2 gap-2 overflow-auto hide-scroll",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex gap-4",
                    children: data.map((movie)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/${movie.media_type === "tv" ? "tvshows" : "movies"}/${movie.id}`,
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
                                    className: "text-white font-mono font-base mt-1",
                                    children: movie.title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex justify-between"
                                })
                            ]
                        }, movie.id))
                })
            })
        ]
    });
};
/* harmony default export */ const WeeklyTrend = (WeekTrend);

// EXTERNAL MODULE: ./components/tvshows/AiringTvshows.jsx
var AiringTvshows = __webpack_require__(3202);
// EXTERNAL MODULE: ./components/tvshows/PopularTvshows.jsx
var PopularTvshows = __webpack_require__(9915);
// EXTERNAL MODULE: ./components/tvshows/TopratedTvshows.jsx
var TopratedTvshows = __webpack_require__(9328);
// EXTERNAL MODULE: ./components/UI/footer/Footer.jsx
var Footer = __webpack_require__(8160);
// EXTERNAL MODULE: ./components/UI/header/Hero.jsx
var Hero = __webpack_require__(1044);
// EXTERNAL MODULE: ./components/UI/header/Nav.jsx
var Nav = __webpack_require__(965);
;// CONCATENATED MODULE: ./components/UI/header/SideNav.jsx


const SideNav = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `bg-red-600 md:hidden w-full h-3/4 p-5 z-10`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-4 w-full md:hidden",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "flex flex-col gap-2 text-xl",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "mb-8",
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/movies",
                                className: "mb-8",
                                children: "Movies"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/tvshows",
                                className: "mb-8",
                                children: "Tv Shows"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    className: "bg-white h-5 px-5 text-red-900 rounded hover:bg-red-900",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/api/auth/login",
                        children: "Sign In"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const header_SideNav = (SideNav);

;// CONCATENATED MODULE: ./components/UI/header/Header.jsx





const Header = ({ data  })=>{
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    const showNav = ()=>{
        setIsOpen(true);
    };
    const hideNav = ()=>{
        setIsOpen(false);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-hero bg-cover bg-center h-screen",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Nav/* default */.Z, {
                toggleNav: showNav,
                open: isOpen,
                onHide: hideNav
            }),
            isOpen && /*#__PURE__*/ jsx_runtime_.jsx(header_SideNav, {
                onHide: hideNav
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Hero/* default */.Z, {
                data: data
            })
        ]
    });
};
/* harmony default export */ const header_Header = (Header);

// EXTERNAL MODULE: ./components/UI/preloader/Preloader.jsx
var Preloader = __webpack_require__(3701);
// EXTERNAL MODULE: external "@auth0/nextjs-auth0/client"
var client_ = __webpack_require__(6153);
;// CONCATENATED MODULE: ./pages/index.js















function Home({ data , airing , upcoming , weekly_movies , now_playing , popular_movies , top_movies , popular_tvshows , toprated_tvshows  }) {
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setIsLoading(false);
        }, 5000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "MovieNet"
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
                    /*#__PURE__*/ jsx_runtime_.jsx(header_Header, {
                        data: data
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(NowPlaying/* default */.Z, {
                        data: now_playing
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PopularMovies/* default */.Z, {
                        data: popular_movies
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PopularTvshows/* default */.Z, {
                        data: popular_tvshows
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(WeeklyTrend, {
                        data: weekly_movies
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(movies_UpcomingMovies, {
                        data: upcoming
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TopRated/* default */.Z, {
                        data: top_movies
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TopratedTvshows/* default */.Z, {
                        data: toprated_tvshows
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(AiringTvshows/* default */.Z, {
                        data: airing
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                ]
            })
        ]
    });
}
{}async function getServerSideProps() {
    const { heromovie  } = await __webpack_require__.e(/* import() */ 769).then(__webpack_require__.t.bind(__webpack_require__, 6769, 19));
    const { upcoming  } = await __webpack_require__.e(/* import() */ 261).then(__webpack_require__.t.bind(__webpack_require__, 9261, 19));
    const { weekly_movies  } = await __webpack_require__.e(/* import() */ 856).then(__webpack_require__.t.bind(__webpack_require__, 6856, 19));
    const { now_playing  } = await __webpack_require__.e(/* import() */ 586).then(__webpack_require__.t.bind(__webpack_require__, 2586, 19));
    const { popular_movies  } = await __webpack_require__.e(/* import() */ 352).then(__webpack_require__.t.bind(__webpack_require__, 4352, 19));
    const { top_movies  } = await __webpack_require__.e(/* import() */ 607).then(__webpack_require__.t.bind(__webpack_require__, 5607, 19));
    const { popular_tvshows  } = await __webpack_require__.e(/* import() */ 705).then(__webpack_require__.t.bind(__webpack_require__, 6705, 19));
    const { toprated_tvshows  } = await __webpack_require__.e(/* import() */ 899).then(__webpack_require__.t.bind(__webpack_require__, 7899, 19));
    const { airing  } = await __webpack_require__.e(/* import() */ 34).then(__webpack_require__.t.bind(__webpack_require__, 8034, 19));
    return {
        props: {
            data: heromovie,
            upcoming,
            weekly_movies,
            now_playing,
            popular_movies,
            top_movies,
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
var __webpack_exports__ = __webpack_require__.X(0, [443,61,789,723,716,768], () => (__webpack_exec__(5177)));
module.exports = __webpack_exports__;

})();