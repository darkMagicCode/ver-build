(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,481];
exports.modules = {

/***/ 4369:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6626);
/* harmony import */ var _layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(697);
/* harmony import */ var _layouts_components_Cta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5116);
/* harmony import */ var _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1360);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3015);
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8722);
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_contentParser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4879);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__, _layouts_components_Cta__WEBPACK_IMPORTED_MODULE_3__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_7__, swiper_react__WEBPACK_IMPORTED_MODULE_8__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_10__]);
([_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__, _layouts_components_Cta__WEBPACK_IMPORTED_MODULE_3__, _lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__, swiper__WEBPACK_IMPORTED_MODULE_7__, swiper_react__WEBPACK_IMPORTED_MODULE_8__, _lib_contentParser__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Home = ({ frontmatter  })=>{
    const { banner , feature , services , workflow , call_to_action  } = frontmatter;
    const { title  } = _config_config_json__WEBPACK_IMPORTED_MODULE_1__/* .site */ .lz;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Baseof__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        title: title,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section pb-[50px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "row text-center",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mx-auto lg:col-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "font-primary font-bold",
                                    children: '"The Ultimate Frontend Development Course: Start Your Journey Today"'
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "mt-4",
                                    children: '"دورة تعليمية في تطوير الفرونت ايند: اكتشف أساسيات التصميم الحديث"'
                                }),
                                banner.button.enable && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    className: "btn btn-primary mt-4",
                                    href: banner.button.link,
                                    rel: banner.button.rel,
                                    children: banner.button.label
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    className: "mx-auto mt-12",
                                    src: banner.image,
                                    width: 750,
                                    height: 390,
                                    alt: "banner image",
                                    priority: true
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "section bg-theme-light",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .markdownify */ .gI)(feature.title)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3",
                            children: feature.features.map((item, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "feature-card rounded-xl bg-white p-5 pb-8 text-center",
                                    children: [
                                        item.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            className: "mx-auto",
                                            src: item.icon,
                                            width: 30,
                                            height: 30,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-4",
                                            children: [
                                                (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .markdownify */ .gI)(item.name, "h3", "h5"),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "mt-3",
                                                    children: item.content
                                                })
                                            ]
                                        })
                                    ]
                                }, `feature-${i}`))
                        })
                    ]
                })
            }),
            services.map((service, index)=>{
                const isOdd = index % 2 > 0;
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                    className: `section ${isOdd && "bg-theme-light"}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "items-center gap-8 md:grid md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `service-carousel ${!isOdd && "md:order-2"}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_8__.Swiper, {
                                        modules: [
                                            swiper__WEBPACK_IMPORTED_MODULE_7__.Autoplay,
                                            swiper__WEBPACK_IMPORTED_MODULE_7__.Pagination
                                        ],
                                        pagination: service.images.length > 1 ? {
                                            clickable: true
                                        } : false,
                                        autoplay: {
                                            delay: 5000,
                                            disableOnInteraction: false
                                        },
                                        init: service?.images > 1 ? false : true,
                                        children: service?.images.map((slide, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_8__.SwiperSlide, {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    src: slide,
                                                    alt: "",
                                                    width: 600,
                                                    height: 500
                                                })
                                            }, index))
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `service-content mt-5 md:mt-0 ${!isOdd && "md:order-1"}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "font-bold leading-[40px]",
                                            children: service?.title
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mt-4 mb-2",
                                            children: service?.content
                                        }),
                                        service.button.enable && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            href: service?.button.link,
                                            className: "cta-link inline-flex items-center text-primary",
                                            children: [
                                                service?.button.label,
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    className: "ml-1",
                                                    src: "/images/arrow-right.svg",
                                                    width: 18,
                                                    height: 14,
                                                    alt: "arrow"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }, `service-${index}`);
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                className: "section pb-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-8 text-center",
                        children: [
                            (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .markdownify */ .gI)(workflow.title, "h2", "mx-auto max-w-[400px] font-bold leading-[44px]"),
                            (0,_lib_utils_textConverter__WEBPACK_IMPORTED_MODULE_4__/* .markdownify */ .gI)(workflow.description, "p", "mt-3")
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                        src: workflow.image,
                        alt: "workflow image",
                        width: 1920,
                        height: 296
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_components_Cta__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                cta: call_to_action
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const homePage = await (0,_lib_contentParser__WEBPACK_IMPORTED_MODULE_10__/* .getListPage */ .di)("content/_index.md");
    const { frontmatter  } = homePage;
    return {
        props: {
            frontmatter
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8722:
/***/ (() => {



/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 9989:
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1578:
/***/ ((module) => {

"use strict";
module.exports = import("github-slugger");;

/***/ }),

/***/ 8974:
/***/ ((module) => {

"use strict";
module.exports = import("marked");;

/***/ }),

/***/ 4818:
/***/ ((module) => {

"use strict";
module.exports = import("next-mdx-remote/serialize");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-slug");;

/***/ }),

/***/ 6809:
/***/ ((module) => {

"use strict";
module.exports = import("remark-gfm");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,676,61,115,116], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();