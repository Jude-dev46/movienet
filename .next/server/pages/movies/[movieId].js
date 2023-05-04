"use strict";
(() => {
var exports = {};
exports.id = 348;
exports.ids = [348];
exports.modules = {

/***/ 8384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _movieId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/error"
var error_ = __webpack_require__(5566);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/UI/skeleton/BtsSkeleton.jsx
var BtsSkeleton = __webpack_require__(2720);
;// CONCATENATED MODULE: ./components/movies/MovieBTS.jsx



const MovieBTS = ({ data  })=>{
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    const [vidData, setVidData] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setVidData(data);
            setIsLoading(false);
        }, 5000);
    }, [
        data
    ]);
    const videos = data.results;
    const filteredVideos = videos.filter((vid)=>{
        return vid.type === "Behind the Scenes";
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mb-8",
        children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(BtsSkeleton/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-xl ml-3 mt-3 mb-2 md:mt-4 md:ml-4",
                    children: "Behind The Scenes →"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex mt-3 md:flex-row md:ml-4 md:mt-2 gap-1 overflow-auto hide-scroll",
                    children: [
                        filteredVideos.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl ml-3",
                            children: "No Video Found"
                        }),
                        filteredVideos.map((vid)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:ml-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    className: "w-auto ml-3 md:w-29 md:h-23",
                                    src: `https://www.youtube.com/embed/${vid.key}`,
                                    frameBorder: "0",
                                    allowFullscreen: true
                                })
                            }, vid.id))
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const movies_MovieBTS = (MovieBTS);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/movies/Cast.jsx


const Cast = ({ data  })=>{
    const base_url = "https://image.tmdb.org/t/p/";
    const filteredData = data.filter((d)=>d.profile_path !== null);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "text-xl ml-3 mt-3 md:mt-4 md:ml-4",
                children: "Cast →"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col ml-3 mt-3 md:ml-4 md:mt-2 gap-2 overflow-auto hide-scroll",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex gap-4",
                    children: filteredData.map((cast)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "container w-25 flex flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    className: "max-w-none",
                                    src: base_url + "w500" + cast.profile_path,
                                    width: 200,
                                    height: 50,
                                    alt: "",
                                    style: {
                                        width: "auto",
                                        height: "auto"
                                    }
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-white font-mono font-base",
                                    children: cast.name
                                })
                            ]
                        }, cast.id))
                })
            })
        ]
    });
};
/* harmony default export */ const movies_Cast = (Cast);

// EXTERNAL MODULE: ./components/tvshows/ActionIcons.jsx + 1 modules
var ActionIcons = __webpack_require__(6579);
// EXTERNAL MODULE: ./components/UI/header/Nav.jsx
var Nav = __webpack_require__(965);
// EXTERNAL MODULE: ./components/UI/skeleton/Skeleton.jsx
var Skeleton = __webpack_require__(7183);
// EXTERNAL MODULE: ./components/UI/skeleton/CastSkeleton.jsx
var CastSkeleton = __webpack_require__(8130);
;// CONCATENATED MODULE: ./components/movies/MovieDetail.jsx








const MovieDetail = ({ data , cast , watch  })=>{
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    const [movData, setMovData] = (0,external_react_.useState)(null);
    const [movCast, setMovCast] = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setMovData(data);
            setMovCast(cast);
            setIsLoading(false);
        }, 5000);
    }, [
        data,
        cast
    ]);
    const { results  } = watch;
    console.log(data);
    const base_url = "https://image.tmdb.org/t/p/";
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Nav/* default */.Z, {}),
                isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(Skeleton/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container px-4 mx-auto flex flex-col md:flex-row mt-5 gap-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: base_url + "w500" + movData.poster_path,
                                alt: movData.original_title,
                                width: 375,
                                height: 200,
                                className: "rounded-lg md:h-full",
                                priority: true,
                                style: {
                                    width: "auto",
                                    height: "auto"
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-3xl font-bold",
                                    children: data.title
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex gap-2 items-center mb-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "border -py-1 px-1",
                                            children: !data.adult ? "PG-16" : "PG-18"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-dot-circle-o"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: movData.runtime
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "fa fa-dot-circle-o"
                                        }),
                                        movData.genres.map((gen)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: gen.name
                                            }, gen.id))
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ActionIcons/* default */.Z, {
                                    data: movData
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-baseline gap-2 mb-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-xl mb-1 font-semibold",
                                            children: "Status:"
                                        }),
                                        movData.status
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "w-full mb-4 md:w-29",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-xl mb-1 font-semibold",
                                            children: "Overview"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: movData.overview
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-baseline gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-xl mb-1 font-semibold",
                                            children: "Tagline:"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: movData.tagline === "" ? "None" : movData.tagline
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-baseline gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-xl mb-1 font-semibold",
                                            children: "Release date:"
                                        }),
                                        movData.release_date
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-baseline gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-xl mb-1 font-semibold",
                                            children: "Languages:"
                                        }),
                                        movData.spoken_languages.map((lan)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "flex",
                                                children: lan.name
                                            }, lan.id))
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "h-5 flex items-baseline gap-2 mb-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "text-xl mb-1 font-semibold",
                                            children: "Where to watch:"
                                        }),
                                        results.US ? results.US.flatrate.map((prov)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "flex",
                                                children: prov.provider_name
                                            }, prov.provider_id)) : ""
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(CastSkeleton/* default */.Z, {}) : /*#__PURE__*/ jsx_runtime_.jsx(movies_Cast, {
                    data: movCast
                })
            ]
        })
    });
};
/* harmony default export */ const movies_MovieDetail = (MovieDetail);

// EXTERNAL MODULE: ./components/UI/skeleton/ReviewSkeleton.jsx
var ReviewSkeleton = __webpack_require__(8706);
;// CONCATENATED MODULE: ./components/movies/MovieReviews.jsx




const MovieReviews = ({ data  })=>{
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    const [revData, setRevData] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setRevData(data);
        setTimeout(()=>{
            setIsLoading(false);
        }, 5000);
    }, [
        data
    ]);
    const base_url = "https://image.tmdb.org/t/p/";
    const filteredData = data.filter((author)=>author.author_details.avatar_path !== null);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(ReviewSkeleton/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "text-xl ml-3 mt-3 mb-2 md:mt-4 md:ml-4",
                    children: "Reviews"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container w-11/12 md:w-full md:px-4 ml-3 mb-6 md:ml-4 font-mono h-24 shadow-xl overflow-scroll hide-scroll",
                    children: [
                        filteredData.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl",
                            children: "No Review Found"
                        }),
                        filteredData.map((review)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "w-auto md:w-auto bg-slate-900 border-1 rounded-lg pb-4 -ml-3 mb-3 font-sans",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "w-full flex gap-3 p-4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                src: base_url + "w200" + review.author_details.avatar_path,
                                                width: 30,
                                                height: 50,
                                                alt: "review profile picture",
                                                style: {
                                                    width: "auto",
                                                    height: "auto"
                                                }
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "w-19",
                                                        children: [
                                                            "A review by ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: review.author
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "text-sm",
                                                        children: [
                                                            "written at ",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                children: review.created_at
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "m-4",
                                        children: review.content
                                    })
                                ]
                            }, review.id))
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const movies_MovieReviews = (MovieReviews);

// EXTERNAL MODULE: ./components/UI/skeleton/TeaserSkeleton.jsx
var TeaserSkeleton = __webpack_require__(6108);
;// CONCATENATED MODULE: ./components/movies/MovieTeasers.jsx



const MovieTeaser = ({ data  })=>{
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    const [vidData, setVidData] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setVidData(data);
            setIsLoading(false);
        }, 5000);
    }, [
        data
    ]);
    const videos = data.results;
    const filteredVideos = videos.filter((vid)=>{
        return vid.type === "Teaser";
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mb-8",
        children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(TeaserSkeleton/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-xl ml-3 mt-3 mb-2 md:mt-4 md:ml-4",
                    children: "Teasers →"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row mt-3 md:ml-4 md:mt-2 gap-1 overflow-auto hide-scroll",
                    children: [
                        filteredVideos.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl ml-3",
                            children: "No Teaser Found"
                        }),
                        filteredVideos.map((vid)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:ml-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    className: "w-auto ml-3 md:w-29 md:h-23",
                                    // width="560"
                                    // height="315"
                                    src: `https://www.youtube.com/embed/${vid.key}`,
                                    frameBorder: "0",
                                    allowFullScreen: true
                                })
                            }, vid.id))
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const MovieTeasers = (MovieTeaser);

// EXTERNAL MODULE: ./components/UI/skeleton/TrailerSkeleton.jsx
var TrailerSkeleton = __webpack_require__(1141);
;// CONCATENATED MODULE: ./components/movies/MovieVideos.jsx



const MoveiVideos = ({ data  })=>{
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    const [vidData, setVidData] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setVidData(data);
            setIsLoading(false);
        }, 5000);
    }, [
        data
    ]);
    const videos = data.results;
    const filteredVideos = videos.filter((vid)=>{
        return vid.type === "Trailer";
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mb-8",
        children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(TrailerSkeleton/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-xl ml-3 mt-3 mb-2 md:mt-4 md:ml-4",
                    children: "Trailer →"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-row mt-3 md:ml-4 md:mt-2 gap-1 overflow-auto hide-scroll",
                    children: [
                        filteredVideos.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl ml-3",
                            children: "No Trailer Found"
                        }),
                        filteredVideos.map((vid)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "md:ml-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                                    className: "w-auto ml-3 md:w-29 md:h-23",
                                    src: `https://www.youtube.com/embed/${vid.key}`,
                                    frameBorder: "0",
                                    allowFullScreen: true
                                })
                            }, vid.id))
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const MovieVideos = (MoveiVideos);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/UI/skeleton/SimSkeleton.jsx
var SimSkeleton = __webpack_require__(1361);
;// CONCATENATED MODULE: ./components/movies/SimilarMovies.jsx





const SimilarMovies = ({ data  })=>{
    const [isLoading, setIsLoading] = (0,external_react_.useState)(true);
    const [vidData, setVidData] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setVidData(data);
            setIsLoading(false);
        }, 5000);
    }, [
        data
    ]);
    const base_url = "https://image.tmdb.org/t/p/";
    const sim = data.results;
    const filteredData = sim.filter((d)=>d.profile_path !== null);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "mb-8",
        children: isLoading ? /*#__PURE__*/ jsx_runtime_.jsx(SimSkeleton/* default */.Z, {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-xl ml-3 mt-3 md:mt-4 md:ml-4",
                    children: "Similar Movies →"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col ml-3 mt-3 md:ml-4 md:mt-2 gap-2 overflow-auto hide-scroll",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex gap-4",
                        children: filteredData.map((mov)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "container w-25 flex flex-col transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        className: "max-w-none",
                                        src: base_url + "w500" + mov.backdrop_path,
                                        width: 200,
                                        height: 50,
                                        alt: "",
                                        style: {
                                            width: "auto",
                                            height: "auto"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "text-white font-mono font-base",
                                        children: mov.title
                                    })
                                ]
                            }, mov.id))
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const movies_SimilarMovies = (SimilarMovies);

// EXTERNAL MODULE: ./components/UI/footer/Footer.jsx
var Footer = __webpack_require__(8160);
;// CONCATENATED MODULE: ./pages/movies/[movieId]/index.js










const MovieDetails = ({ movieDetail , cast , results , data , res , watch  })=>{
    if (!movieDetail || !cast || !results || !data || !res || !watch) {
        return /*#__PURE__*/ jsx_runtime_.jsx((error_default()), {
            statusCode: 500,
            title: "Unable to get movie details ☹, Check your Internet Connection"
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: movieDetail.title
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
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(movies_MovieDetail, {
                        data: movieDetail,
                        cast: cast,
                        watch: watch
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(movies_MovieReviews, {
                        data: results
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MovieVideos, {
                        data: data
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(MovieTeasers, {
                        data: data
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(movies_MovieBTS, {
                        data: data
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(movies_SimilarMovies, {
                        data: res
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const _movieId_ = (MovieDetails);
async function getStaticPaths() {
    const { popular_movies  } = await __webpack_require__.e(/* import() */ 352).then(__webpack_require__.t.bind(__webpack_require__, 4352, 19));
    const { upcoming  } = await __webpack_require__.e(/* import() */ 261).then(__webpack_require__.t.bind(__webpack_require__, 9261, 19));
    const { weekly_movies  } = await __webpack_require__.e(/* import() */ 856).then(__webpack_require__.t.bind(__webpack_require__, 6856, 19));
    const { now_playing  } = await __webpack_require__.e(/* import() */ 586).then(__webpack_require__.t.bind(__webpack_require__, 2586, 19));
    const { top_movies  } = await __webpack_require__.e(/* import() */ 607).then(__webpack_require__.t.bind(__webpack_require__, 5607, 19));
    const weeklyMovies = weekly_movies.filter((mov)=>mov.media_type === "movie");
    const allData = [
        ...popular_movies,
        ...upcoming,
        ...weeklyMovies,
        ...now_playing,
        ...top_movies
    ];
    const allPaths = allData.map((mov)=>{
        return {
            params: {
                movieId: mov.id.toString()
            }
        };
    });
    return {
        paths: allPaths,
        fallback: false
    };
}
async function getStaticProps(context) {
    const id = context?.params.movieId.toString();
    const { popular_movies  } = await __webpack_require__.e(/* import() */ 352).then(__webpack_require__.t.bind(__webpack_require__, 4352, 19));
    const { upcoming  } = await __webpack_require__.e(/* import() */ 261).then(__webpack_require__.t.bind(__webpack_require__, 9261, 19));
    const { weekly_movies  } = await __webpack_require__.e(/* import() */ 856).then(__webpack_require__.t.bind(__webpack_require__, 6856, 19));
    const { now_playing  } = await __webpack_require__.e(/* import() */ 586).then(__webpack_require__.t.bind(__webpack_require__, 2586, 19));
    const { top_movies  } = await __webpack_require__.e(/* import() */ 607).then(__webpack_require__.t.bind(__webpack_require__, 5607, 19));
    const weeklyMovies = weekly_movies.filter((mov)=>mov.media_type === "movie");
    const allData = [
        ...popular_movies,
        ...upcoming,
        ...weeklyMovies,
        ...now_playing,
        ...top_movies
    ];
    const data = allData.filter((mov)=>mov.id.toString() === id);
    const uniqueData = data.filter((item, index, self)=>{
        return index === self.findIndex((mov)=>mov.id === item.id);
    });
    const movie_id = uniqueData.map((mov)=>{
        return mov.id;
    });
    try {
        const movie = await fetch(`https://api.themoviedb.org/3/movie/${movie_id[0]}?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`);
        const movieDetail = await movie.json();
        const crew = await fetch(`https://api.themoviedb.org/3/movie/${movie_id[0]}/credits?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`);
        const { cast  } = await crew.json();
        const reviews = await fetch(`https://api.themoviedb.org/3/movie/${movie_id[0]}/reviews?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US&page=1`);
        const { results  } = await reviews.json();
        const videoReq = await fetch(`https://api.themoviedb.org/3/movie/${movie_id[0]}/videos?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`);
        const data = await videoReq.json();
        const similarVid = await fetch(`https://api.themoviedb.org/3/movie/${movie_id[0]}/recommendations?api_key=ccbc07c5fb9e4a890336d35cdf1938e3&language=en-US`);
        const res = await similarVid.json();
        const watchProvider = await fetch(`https://api.themoviedb.org/3/movie/${movie_id[0]}/watch/providers?api_key=ccbc07c5fb9e4a890336d35cdf1938e3`);
        const watch = await watchProvider.json();
        if (!movie.ok || !crew.ok || !reviews.ok || !videoReq.ok || !similarVid.ok || !watchProvider.ok) {
            throw new (error_default())("Something went wrong");
        }
        return {
            props: {
                movieDetail,
                cast: cast,
                results: results,
                data: data,
                res: res,
                watch
            }
        };
    } catch (err) {
        console.log(err);
        return {
            props: {}
        };
    }
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

/***/ 5566:
/***/ ((module) => {

module.exports = require("next/error");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [443,61,789,74], () => (__webpack_exec__(8384)));
module.exports = __webpack_exports__;

})();