"use strict";
(() => {
var exports = {};
exports.id = 269;
exports.ids = [269];
exports.modules = {

/***/ 5554:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ Calculator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(648);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1125);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui__WEBPACK_IMPORTED_MODULE_3__]);
_ui__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ /* eslint-disable no-undef */ /* eslint-disable @typescript-eslint/no-explicit-any */ 
// import Link from "next/link";
// import { Container } from "../layout";


// import { Seat, Transmision } from "../ui/icons";

const Calculator = ({ // seat,
// storage,
// description,
initialData , children  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
    const [rangeData, setRangeData] = react__WEBPACK_IMPORTED_MODULE_1__.useState("1");
    const [selectedPromos, setSelectedPromos] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    // console.log(window.navigator.userAgent);
    // const { data } = useCars();
    // const { price_advertising }: any = initalData[0];
    if (initialData === "undefined") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "loading..."
    });
    const newCurrency = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0
    });
    const basePrice = initialData?.price_base;
    // const nextPrice =
    //   rangeData === "1"
    //     ? basePrice * 0
    //     : initialData?.price_next * (Number(rangeData) - 1);
    // const subTotalPrice = rangeData === "1" ? basePrice : basePrice + nextPrice;
    const nextPrice = initialData?.price_next;
    // new update
    const updateNext = (Number(rangeData) - 1) * nextPrice;
    const subTotalPrice = basePrice + updateNext;
    const promoPrice = subTotalPrice * selectedPromos / 100;
    const totalPrice = nextPrice === 0 && promoPrice === 0 ? subTotalPrice : subTotalPrice - promoPrice;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-none block p-0 md:p-[60px] md:flex justify-between space-y-8 md:space-y-0 h-full gap-8 z-50",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-1 space-y-4 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-sc-dark text-2xl md:text-[40px] font-semibold",
                        children: initialData?.name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "relative",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                            className: "relative aspect-w-4 aspect-h-3",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                alt: "car",
                                height: 218,
                                src: `${initialData?.image}`,
                                width: 326
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bg-[#ffff] shadow-lg rounded-full py-6 px-4 text-sc-dark",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-evenly",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .Seat */ .QS, {
                                            width: "24px",
                                            height: "24px",
                                            fill: "#333333"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-[10px] md:text-base",
                                            children: [
                                                initialData?.attr_seater,
                                                " ",
                                                f({
                                                    id: `kursi`
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .Transmision */ .fs, {
                                            width: "24px",
                                            height: "24px",
                                            fill: "#333333"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[10px] md:text-base",
                                            children: f({
                                                id: `otomatis`
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex items-center gap-2",
                                    children: initialData?.attr_trunk == null ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .Suitcase */ .jM, {
                                                width: "24px",
                                                height: "24px",
                                                fill: "#333333"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: "text-[10px] md:text-base",
                                                children: [
                                                    `3`,
                                                    " ",
                                                    f({
                                                        id: `tas/koper`
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex-1 bg-[#ffff] px-3 md:px-[40px] py-6 rounded-3xl shadow-xl my-8 lg:my-0 z-30",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_3__/* .Range */ .e6, {
                            className: "my-6 tooltip",
                            defaultValue: rangeData,
                            handleChange: (e)=>setRangeData(e.currentTarget.value)
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "my-[40px] space-y-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "text-sc-dark space-y-4 capitalize",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xl font-semibold text-sc-dark ",
                                    children: f({
                                        id: "estimasi harga"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: f({
                                                    id: "1 jam pertama"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: `${newCurrency.format(initialData?.price_base)}`
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: f({
                                                    id: `1 jam berikutnya`
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: `${newCurrency.format(nextPrice)}`
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex justify-between",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                children: [
                                                    f({
                                                        id: "sub total"
                                                    }),
                                                    " ",
                                                    rangeData,
                                                    " ",
                                                    f({
                                                        id: "jam"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: `${newCurrency.format(subTotalPrice)}`
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: f({
                                                id: "promo"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex justify-between my-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        className: "text-sc-dark ring-2 ring-sc-blue focus:ring-sc-green focus:outline-none rounded-full p-1 md:p-3 md:w-2/3 w-1/2",
                                                        max: "100",
                                                        min: "0",
                                                        onChange: (e)=>setSelectedPromos(e.currentTarget.value),
                                                        placeholder: "promo %",
                                                        type: "number"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: `${newCurrency.format(Math.ceil(promoPrice))}`
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: " font-semibold text-sc-dark",
                                                    children: f({
                                                        id: "total keseluruhan"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: " font-semibold text-sc-dark",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: `${newCurrency.format(Math.ceil(totalPrice))}`
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-xs italic",
                                            children: [
                                                "*",
                                                f({
                                                    id: `harga belum termasuk PPN 11%`
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "https://wa.link/3djipt",
                            rel: "noopener noreferrer",
                            target: "_blank",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                "aria-label": "promo",
                                className: "sc-blue-btn text-sc-light text-sm md:text-lg hover:text-sc-blue hover:ring-2 hover:ring-sc-blue focus:text-sc-light uppercase",
                                children: f({
                                    id: "pesan sekarang"
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9184:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* reexport safe */ _slider__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   "y": () => (/* reexport safe */ _calculator__WEBPACK_IMPORTED_MODULE_1__.y)
/* harmony export */ });
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4318);
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_slider__WEBPACK_IMPORTED_MODULE_0__, _calculator__WEBPACK_IMPORTED_MODULE_1__]);
([_slider__WEBPACK_IMPORTED_MODULE_0__, _calculator__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4318:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ SliderCars)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1125);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui__WEBPACK_IMPORTED_MODULE_2__]);
_ui__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable no-undef */ 




// const CarData: CarDataProps[] = [
//   {
//     title: "All New Avanza",
//     seat: 7,
//     price: 20000,
//     src: "/assets/images/mobil/All New Avanza.png",
//   },
//   {
//     title: "All New Mitshubishi Xpander",
//     seat: 7,
//     price: 20000,
//     src: "/assets/images/mobil/All New Mitsubishi Xpander.png",
//   },
//   {
//     title: "Avanza",
//     seat: 7,
//     price: 20000,
//     src: "/assets/images/mobil/Avanza.png",
//   },
//   {
//     title: "Sienta",
//     seat: 7,
//     price: 20000,
//     src: "/assets/images/mobil/Sienta.png",
//   },
//   {
//     title: "Xpander",
//     seat: 7,
//     price: 20000,
//     src: "/assets/images/mobil/Xpander.png",
//   },
// ];
const SliderCars = ({ CarData , carId  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)();
    const [, setSlideLeft] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const [, setIsScrolling] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const arrowRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    // const scroll = (scrollOffset: number) => {
    //   arrowRef.current.scrollLeft += scrollOffset;
    //   // console.log((arrowRef.current.scrollLeft += scrollOffset));
    // };
    const moveLeft = ()=>{
        const el = document.getElementById(`scrollHor`);
        setSlideLeft(el.scrollLeft += 600);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "carousel carousel-center relative w-full max-w-sm md:max-w-2xl lg:max-w-7xl bg-transparant cursor-pointer",
        id: `scrollHor`,
        onScroll: ()=>setIsScrolling(true),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                className: "hidden md:block pl-8 w-fit z-50",
                onClick: moveLeft,
                ref: arrowRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_5__.ArrowRightIcon, {
                        className: "h-12 w-12"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "italic text-sm my-8 capitalize",
                        children: "swipe/scroll"
                    })
                ]
            }),
            CarData && CarData?.map(({ id , name , attr_seater , price_advertising , image  })=>{
                const newCurrency = new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                    minimumFractionDigits: 0
                }).format(price_advertising);
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "pl-8 carousel-item relative w-fit",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui__WEBPACK_IMPORTED_MODULE_2__/* .SectionPage */ .ts, {
                            className: "relative w-full text-center capitalize",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-full max-w-xs h-fit",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                        className: "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            height: 413,
                                            onClick: ()=>carId(id),
                                            src: `${image}`,
                                            width: 515
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-sc-dark font-semibold text-xl md:text-2xl",
                                    children: name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "text-sc-dark font-semibold text-xl",
                                    children: [
                                        attr_seater,
                                        " ",
                                        f({
                                            id: "kursi"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                                    className: "text-md whitespace-pre-wrap mt-4",
                                    children: [
                                        f({
                                            id: "mulai dari"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-md font-semibold text-sc-dark",
                                            children: `\n ${newCurrency}/jam`
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }, `${id}`);
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_harga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9184);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4512);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1125);
/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(949);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7881);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_harga__WEBPACK_IMPORTED_MODULE_2__, _components_layout__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_4__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_5__, _headlessui_react__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_10__]);
([_components_harga__WEBPACK_IMPORTED_MODULE_2__, _components_layout__WEBPACK_IMPORTED_MODULE_3__, _components_ui__WEBPACK_IMPORTED_MODULE_4__, _lib_fetcher__WEBPACK_IMPORTED_MODULE_5__, _headlessui_react__WEBPACK_IMPORTED_MODULE_6__, swr__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-img-element */ /* eslint-disable react/no-children-prop */ /* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable no-undef */ 


// import { Container } from "~/components/layout";







async function getStaticProps() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(`${"https://cms.sharecar.co.id"}/api/cars?active=1`);
    const ActiveCarData = await res.json();
    return {
        props: {
            fallback: {
                cars: ActiveCarData
            }
        }
    };
}
const Harga = ({ fallback  })=>{
    const [selectedTipe, setSelectedTipe] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const [selectedMerek, setSelectedMerek] = react__WEBPACK_IMPORTED_MODULE_1__.useState("");
    const [selectedCarData, setSelectedCarData] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_9__.useIntl)();
    const { data: CarData , loading , error  } = (0,_lib_fetcher__WEBPACK_IMPORTED_MODULE_5__/* .useActiveCars */ .vP)(fallback);
    // const { data: CarBrands } = useCarsBrands();
    const path =  false ? 0 : "";
    if (loading) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        children: "loading"
    });
    if (error) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_4__/* .NotFound */ .TX, {
        contentdata: path
    });
    // if (error) return <span className="z-30">failed fetching the data</span>;
    // sample data from 1st index of data
    const sampleData = CarData?.data;
    const tipelist = sampleData?.map((value)=>value.car_brand_name);
    const newTipeList = tipelist?.filter((item, pos)=>{
        return tipelist.indexOf(item) == pos;
    });
    const initialData = sampleData?.find((item)=>{
        if (selectedCarData === 0 && selectedMerek == "") {
            return item.id == sampleData[0].id;
        }
        if (selectedMerek !== "" && selectedCarData <= 0 || selectedMerek !== "" && selectedCarData >= 0) {
            return item.car_type_name == selectedMerek;
        }
        if (selectedCarData >= 0 && selectedMerek === "") {
            return item.id == selectedCarData;
        }
    });
    const filterCarName = sampleData?.filter((item)=>{
        return item.car_brand_name == selectedTipe;
    });
    const mereklist = filterCarName?.map((value)=>value.car_type_name);
    // const mereklist = filterCarName?.map((value: any) => value.name);
    // handleClick carId
    const carIdData = (number)=>{
        setSelectedCarData(number), setSelectedMerek(""), setSelectedTipe("");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swr__WEBPACK_IMPORTED_MODULE_10__.SWRConfig, {
        value: {
            fallback
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_4__/* .SectionPage */ .ts, {
            className: "",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative before:bg-cover bg-repeat-x bg-white mix-blend-multiply overflow-hidden bg-cityVector z-30",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex items-center justify-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-2xl md:text-[40px] px-2 md:px-0 text-center font-semibold text-sc-dark my-[100px] mx-auto max-w-[416px] leading-normal whitespace-pre-wrap capitalize",
                            children: f({
                                id: `temukan beberapa kendaraan kami`
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-32 md:mt-[120px] mb-4 md:mb-0 ml-0 md:ml-8 transition-all",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_harga__WEBPACK_IMPORTED_MODULE_2__/* .SliderCars */ .k, {
                                CarData: sampleData,
                                carId: carIdData
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "italic text-sm my-8",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "*",
                                            f({
                                                id: "harga belum termasuk PPN 11%"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "*",
                                            f({
                                                id: "harga khusus area jabodetabek"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W2, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex md:flex-row flex-col items-center bg-sc-blue gap-[53px] rounded-xl p-4 md:p-[53px] md: my-[59px]",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-initial order-last md:order-first h-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        alt: "sharecar-thumb",
                                        height: "auto",
                                        src: "/assets/images/sharecar-thumb.png",
                                        width: "327"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sc-light text-base md:text-2xl font-semibold mb-4",
                                            children: f({
                                                id: "kembalikan kendaraan dengan level BBM yang sama dengan saat pengambilan."
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-sc-light text-base md:text-2xl font-semibold",
                                            children: f({
                                                id: "biaya tambahan sebesar Rp8.500,-/liter akan dikenakan apabila terdapat kekurangan BBM pada saat pengembalian."
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "italic mt-8 text-sc-light",
                                            children: [
                                                "*",
                                                f({
                                                    id: "harga belum termasuk PPN 11%"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout__WEBPACK_IMPORTED_MODULE_3__/* .Container */ .W2, {
                        className: "capitalize",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_harga__WEBPACK_IMPORTED_MODULE_2__/* .Calculator */ .y, {
                            initialData: initialData,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-evenly flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-initial",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_4__/* .FilterList */ .G6, {
                                            children: newTipeList?.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Listbox.Option, {
                                                    className: ({ active  })=>`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-sc-green text-sc-light" : "text-gray-900"}`,
                                                    value: val,
                                                    children: ({ selectedTipe  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: `block truncate ${selectedTipe ? "font-medium" : "font-normal"}`,
                                                                    children: val
                                                                }),
                                                                selectedTipe ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "absolute inset-y-0 left-0 flex items-center pl-3 text-sc-blue",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.CheckIcon, {
                                                                        "aria-hidden": "true",
                                                                        className: "h-5 w-5"
                                                                    })
                                                                }) : null
                                                            ]
                                                        })
                                                }, index)),
                                            onChange: setSelectedTipe,
                                            selected: selectedTipe,
                                            title: f({
                                                id: "Type Kendaraan"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex-initial",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_4__/* .FilterList */ .G6, {
                                            children: filterCarName?.length > 0 ? mereklist?.map((val, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Listbox.Option, {
                                                    className: ({ active  })=>`relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-sc-green text-sc-light" : "text-gray-900"}`,
                                                    value: val,
                                                    children: ({ selectedMerek  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: `block truncate ${selectedMerek ? "font-medium" : "font-normal"}`,
                                                                    children: val
                                                                }),
                                                                selectedMerek ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "absolute inset-y-0 left-0 flex items-center pl-3 text-sc-blue",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_7__.CheckIcon, {
                                                                        "aria-hidden": "true",
                                                                        className: "h-5 w-5"
                                                                    })
                                                                }) : null
                                                            ]
                                                        })
                                                }, index)) : null,
                                            onChange: setSelectedMerek,
                                            selected: selectedMerek,
                                            title: f({
                                                id: "Merek Kendaraan"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Harga);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 7881:
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 3126:
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61,442,949], () => (__webpack_exec__(3939)));
module.exports = __webpack_exports__;

})();