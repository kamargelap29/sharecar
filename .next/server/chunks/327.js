"use strict";
exports.id = 327;
exports.ids = [327];
exports.modules = {

/***/ 2120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ CardFooter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1362);
/* harmony import */ var _ui_copy_btn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4680);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_accordion__WEBPACK_IMPORTED_MODULE_3__]);
_ui_accordion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// import { FilterList } from "../ui";


const CardFooter = ({ promo , promoDetailDesc ,  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_2__.useIntl)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "bg-[#E0ECF9] flex justify-between items-center py-3 px-4 rounded-lg w-full gap-4 md:gap-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-[10px] md:text-base text-sc-dark font-medium capitalize",
                        children: f({
                            id: "kode promo"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-sc-light pl-2 py-0 flex items-center justify-between gap-x-2 rounded-lg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-[12px] lg:text-base",
                                children: promo
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_copy_btn__WEBPACK_IMPORTED_MODULE_4__/* .CopyButton */ .q, {
                                text: `${promo}`
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_accordion__WEBPACK_IMPORTED_MODULE_3__/* .Accordion */ .U, {
                    className: "bg-[#E0ECF9]",
                    description: promoDetailDesc,
                    title: f({
                        id: "syarat dan ketentuan"
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2327:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* reexport safe */ _card_footer__WEBPACK_IMPORTED_MODULE_1__.e),
/* harmony export */   "n": () => (/* reexport safe */ _promos__WEBPACK_IMPORTED_MODULE_0__.n)
/* harmony export */ });
/* harmony import */ var _promos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3629);
/* harmony import */ var _card_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2120);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_promos__WEBPACK_IMPORTED_MODULE_0__, _card_footer__WEBPACK_IMPORTED_MODULE_1__]);
([_promos__WEBPACK_IMPORTED_MODULE_0__, _card_footer__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3629:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ Promos)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4512);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1125);
/* harmony import */ var _ui_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(233);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_4__, _ui__WEBPACK_IMPORTED_MODULE_5__, _ui_carousel__WEBPACK_IMPORTED_MODULE_6__]);
([_layout__WEBPACK_IMPORTED_MODULE_4__, _ui__WEBPACK_IMPORTED_MODULE_5__, _ui_carousel__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Promos = ()=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui__WEBPACK_IMPORTED_MODULE_5__/* .SectionPage */ .ts, {
        className: "flex flex-col items-center justify-center px-8 md:px-[88px] mt-10 lg:mt-[120px] z-30",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W2, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: " text-center text-2xl md:text-[40px] text-sc-dark font-semibold leading-normal md:leading-10",
                    children: f({
                        id: "Promo Menarik Dari Kami"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_5__/* .SectionPage */ .ts, {
                className: "my-[30px] md:my-16",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_carousel__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W2, {
                className: "my-[30px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/promo`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            "aria-label": "promo",
                            className: "sc-light-btn hover:text-sc-light text-sc-blue uppercase",
                            children: f({
                                id: "lihat promo lainnya"
                            })
                        })
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 233:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(949);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_fetcher__WEBPACK_IMPORTED_MODULE_3__]);
_lib_fetcher__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ /* eslint-disable no-undef */ /* eslint-disable @typescript-eslint/no-explicit-any */ 



const CarouselWithNav = ()=>{
    const [currentImages, setImages] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const [currentImages2, setImages2] = react__WEBPACK_IMPORTED_MODULE_1__.useState([]);
    const slideRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const data = async ()=>{
            const fetching = await fetch(`${"https://cms.sharecar.co.id"}/api/banners/type/home-promo`);
            const resp = await fetching.json();
            const imgSrcDesk = resp.data.map((val)=>val.image);
            const imgSrcMob = resp.data.map((val)=>val.image_mobile);
            setImages(imgSrcDesk[0]);
            setImages2(imgSrcMob[0]);
        };
        data();
    }, []);
    const { data: desktopPromos , loading , error  } = (0,_lib_fetcher__WEBPACK_IMPORTED_MODULE_3__/* .useActivePromoBanners */ .My)();
    if (error || desktopPromos?.length === 0) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "sr-only",
        children: "empty data"
    });
    if (loading || desktopPromos == "undefined") return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "animate-bounce",
        children: "Loading..."
    });
    const bannerDesktop = desktopPromos?.data;
    const deskBanner = bannerDesktop?.map((val)=>val.image);
    const mobileBanner = bannerDesktop?.map((val)=>val.image_mobile);
    const IndexData = deskBanner?.indexOf(currentImages);
    const handleNext = (dataprops)=>{
        const nextImg = (IndexData + 1) % dataprops.length;
        setImages(deskBanner && deskBanner[nextImg]);
        setImages2(mobileBanner && mobileBanner[nextImg]);
    // console.log(slideRef.current?.classList.add("black"));
    };
    const handlePrev = (dataprops)=>{
        const prevImg = (IndexData + dataprops.length - 1) % dataprops.length;
        setImages(dataprops[prevImg]);
        setImages2(dataprops[prevImg]);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "hidden md:block relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "",
                        ref: slideRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                className: "relative",
                                children: deskBanner.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    alt: `${currentImages}`,
                                    // blurDataURL={`/_next/image?url=${currentImages}&w=16&q=1`}
                                    className: "rounded-xl",
                                    height: "570",
                                    // placeholder="blur"
                                    src: `${currentImages}`,
                                    width: "1264"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "aria-label": "carousel-prev",
                        className: "absolute transform -translate-x-1/2 bottom-1/2 p-4 rounded-full bg-sc-green hover:bg-gradient-to-tr from-sc-green to-sc-blue text-sc-light",
                        onClick: ()=>handlePrev(deskBanner),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ArrowLeftIcon, {
                            "aria-hidden": "true",
                            className: "h-6 w-6"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "aria-label": "carousel-next",
                        className: "absolute transform translate-x-1/2 bottom-1/2 right-0 p-4 rounded-full bg-sc-green hover:bg-gradient-to-tr from-sc-green to-sc-blue text-sc-light",
                        onClick: ()=>handleNext(deskBanner),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ArrowRightIcon, {
                            "aria-hidden": "true",
                            className: "h-6 w-6"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "block md:hidden relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-full",
                        ref: slideRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                            className: "relative aspect-1",
                            children: deskBanner.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                alt: `${currentImages2}`,
                                // blurDataURL={`/_next/image?url=${currentImages2}&w=16&`}
                                height: "410",
                                // placeholder="blur"
                                src: `${currentImages2}`,
                                width: "410"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "aria-label": "carousel-prev",
                        className: "absolute transform -translate-x-1/2 bottom-1/2 p-4 rounded-full bg-sc-green hover:bg-gradient-to-tr from-sc-green to-sc-blue text-sc-light",
                        onClick: ()=>handlePrev(mobileBanner),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ArrowLeftIcon, {
                            "aria-hidden": "true",
                            className: "h-6 w-6"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        "aria-label": "carousel-next",
                        className: "absolute transform translate-x-1/2 bottom-1/2 right-0 p-4 rounded-full bg-sc-green hover:bg-gradient-to-tr from-sc-green to-sc-blue text-sc-light",
                        onClick: ()=>handleNext(mobileBanner),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_2__.ArrowRightIcon, {
                            "aria-hidden": "true",
                            className: "h-6 w-6"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarouselWithNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ CopyButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function CopyButton({ text  }) {
    const { 0: isCopied , 1: setCopied  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: canCopy , 1: setCanCopy  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (false) {}
    }, []);
    if (!canCopy) return null;
    function handleCopy(e) {
        e.currentTarget.blur();
        return navigator.clipboard.writeText(text).then(()=>{
            setCopied(true);
            setTimeout(()=>{
                setCopied(false);
            }, 1000);
        }).catch((err)=>console.error(err));
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-start",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            "aria-label": "Salin",
            className: "relative text-sc-dark hover:text-sc-light hover:bg-sc-green ring-1 rounded-xl ring-sc-blue hover:ring-sc-green z-10 p-2",
            onClick: handleCopy,
            type: "button",
            children: isCopied ? "Tersalin" : "Salin"
        })
    });
}


/***/ })

};
;