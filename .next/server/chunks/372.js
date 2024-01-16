"use strict";
exports.id = 372;
exports.ids = [372];
exports.modules = {

/***/ 6929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* reexport safe */ _map_component__WEBPACK_IMPORTED_MODULE_0__.G)
/* harmony export */ });
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5905);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_map_component__WEBPACK_IMPORTED_MODULE_0__]);
_map_component__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
 // export * from "./test-map";

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5905:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ MapComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4512);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1125);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(949);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_3__, _ui__WEBPACK_IMPORTED_MODULE_4__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__]);
([_layout__WEBPACK_IMPORTED_MODULE_3__, _ui__WEBPACK_IMPORTED_MODULE_4__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable no-undef */ /* eslint-disable @typescript-eslint/no-explicit-any */ 

// import { useBanners } from "~/lib/fetcher";





const MapComponent = ()=>{
    const [longlatEx, setLonglatEx] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_5__.useIntl)();
    const { data: MapLoc , loading  } = (0,_lib_fetcher__WEBPACK_IMPORTED_MODULE_6__/* .useActiveLocations */ .No)();
    if (loading || MapLoc == `undefined`) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        children: "Loading!!"
    });
    const allMapDataActive = MapLoc?.data;
    // console.log(allMapDataActive);
    // lazy import for map components
    const Map = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(__webpack_require__, 5016)), {
        ssr: false
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_4__/* .SectionPage */ .ts, {
                className: "px-8 md:px-[88px] mb-16 z-30",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col items-center justify-center w-full md:w-[622px] space-y-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: " text-center text-2xl md:text-[40px] text-sc-dark font-semibold leading-normal md:leading-10 capitalize",
                            children: f({
                                id: `temukan kami di berbagai lokasi`
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-center text-xl text-sc-dark",
                            children: f({
                                id: `pesan mobil terdekat di sekitarmu, dan rasakan kemudahan pengalaman dalam berkendara.`
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W2, {
                className: "block mx-auto lg:mx-14 relative lg:flex bg-[#ffff] shadow-xl p-8 my-[60px] gap-0 md:gap-4 max-h-full overflow-hidden z-30",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative flex-intial h-[58vh] w-full md:w-[678px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Map, {
                            locdata: allMapDataActive,
                            pos: longlatEx
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-none md:flex-initial max-w-[768px] h-full my-4 md:my-16 lg:my-0 ",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                            className: "space-y-4 relative mt-16 md:mt-0 carousel carousel-vertical h-72 md:h-[390px] lg:h-[567px] xl:h-[58vh]",
                            children: allMapDataActive?.map(({ id , image , name , desc , latitude , longitude  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "carousel-item h-fit",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex bg-sc-light rounded-xl shadow-xl p-6 w-full",
                                        onClick: ()=>setLonglatEx({
                                                lat: latitude,
                                                lng: longitude
                                            }),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "basis-1/3 w-full max-w-96",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                                    className: "relative aspect-w-4 aspect-h-3 ",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                        alt: `img-${id}`,
                                                        // blurDataURL={`/_next/image?url=${image}&w=16&q=1`}
                                                        layout: "fill",
                                                        // placeholder="blur"
                                                        src: `${image}`
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "basis-2/3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-sc-dark font-semibold",
                                                        children: name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "max-w-[400px]",
                                                        dangerouslySetInnerHTML: {
                                                            __html: desc
                                                        }
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }, `${id}`))
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;