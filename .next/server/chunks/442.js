"use strict";
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 2695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* unused harmony export containerStyles */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable react/prop-types */ 

const containerStyles = "max-w-7xl box-content px-[32px]";
const Container = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , children , ...rest }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(containerStyles, className),
        ref: ref,
        ...rest,
        children: children
    });
});
Container.displayName = "Container";


/***/ }),

/***/ 4512:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ar": () => (/* reexport safe */ _layout__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "W2": () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_1__.W)
/* harmony export */ });
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6159);
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2695);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_0__]);
_layout__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2640:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Lang = ({ imgsrc , language , children , myRef  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover, {
            children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Button, {
                            className: `
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md hover:text-opacity-100 focus:outline-none `,
                            ref: myRef,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sr-only",
                                    children: language
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    alt: `flag-${language}`,
                                    height: 48,
                                    src: `${imgsrc}`,
                                    width: 48
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
                                    "aria-hidden": "true",
                                    className: `${open ? "rotate-180" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-sc-light md:text-sc-grey transition duration-150 ease-in-out group-hover:text-opacity-80`
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0 translate-y-1",
                            enterTo: "opacity-100 translate-y-0",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100 translate-y-0",
                            leaveTo: "opacity-0 translate-y-1",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Panel, {
                                className: "absolute right-0 z-10 mt-3 md:mt-0 w-screen max-w-[160px] transform px-4 sm:px-0 ",
                                focus: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative grid gap-8 bg-sc-light p-7",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "list-none",
                                            children: children
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Lang);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6159:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1125);
/* harmony import */ var _ui_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(240);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui__WEBPACK_IMPORTED_MODULE_2__, _navigation__WEBPACK_IMPORTED_MODULE_4__]);
([_components_ui__WEBPACK_IMPORTED_MODULE_2__, _navigation__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import Meta from "../meta";



const Layout = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navigation__WEBPACK_IMPORTED_MODULE_4__/* .Navigation */ .W_, {}),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui_footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .SocialMedia */ .us, {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ui__WEBPACK_IMPORTED_MODULE_2__/* .ScrollArrow */ .QA, {})
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ NavigationMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2130);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _navigation__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _navigation__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const NavigationMenu = ({ open , popoverButtonRef , children  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.useIntl)();
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        const handleRouteChange = ()=>{
            if (open && popoverButtonRef?.current) {
                popoverButtonRef.current.click();
            }
        };
        router.events.on("routeChangeStart", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [
        router.events,
        open,
        popoverButtonRef
    ]);
    // const BtnLink = React.forwardRef<HTMLAnchorElement, BtnLinkProps>(
    //   ({ onClick, href, name }, ref) => {
    //     return (
    //       <a onClick={onClick} href={href} ref={ref}>
    //         {name}
    //       </a>
    //     );
    //   }
    // );
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
        enter: "duration-200 ease-out",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "duration-100 ease-in",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Panel, {
            className: "absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden",
            focus: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: " gardient divide-y-2 divide-gray-50 min-h-screen ",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "pt-5 pb-6 px-5",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "outline-none border-none",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only ",
                                                    children: "Share Car"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    alt: "logo",
                                                    height: 48,
                                                    src: "/assets/images/logo-sc-light.png",
                                                    width: 82
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "-mr-2",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Button, {
                                        className: "bg-transparant rounded-md p-2 inline-flex items-center justify-center text-sc-light hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: "Close menu"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.XIcon, {
                                                "aria-hidden": "true",
                                                className: "h-6 w-6"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-6 bg-transparent text-sc-light",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                                className: "flex flex-col gap-y-8 mx-[44px]",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "flex justify-end",
                                        children: children
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "mb-14",
                                        children: _navigation__WEBPACK_IMPORTED_MODULE_4__/* .mobileMenuitems.map */ .l9.map(({ name , href  })=>{
                                            // const isActive = exact
                                            // ? href === router.asPath
                                            // : router.asPath.startsWith(href);
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "w-full",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                    href: `${href}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: "outline-none focus:outline-none active:outline-none active:border-none border-b-2 flex ",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "my-2 text-xl font-medium text-sc-light uppercase",
                                                            children: f({
                                                                id: name
                                                            })
                                                        })
                                                    })
                                                })
                                            }, `${name}`);
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2130:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W_": () => (/* binding */ Navigation),
/* harmony export */   "l9": () => (/* binding */ mobileMenuitems)
/* harmony export */ });
/* unused harmony exports infoMenu, menuitems */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _navigation_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7782);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2640);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _navigation_menu__WEBPACK_IMPORTED_MODULE_6__, _lang__WEBPACK_IMPORTED_MODULE_9__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _navigation_menu__WEBPACK_IMPORTED_MODULE_6__, _lang__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable @typescript-eslint/no-unused-vars */ 








const infoMenu = [
    {
        name: "kontak",
        href: "/kontak-page",
        exact: true
    },
    {
        name: "news",
        href: "/news",
        exact: true
    },
    {
        name: "resource",
        href: "/resource",
        exact: true
    }, 
];
const mobileMenuitems = [
    {
        name: "harga",
        href: "/harga",
        exact: true
    },
    {
        name: "lokasi",
        href: "/lokasi",
        exact: true
    },
    {
        name: "promo",
        href: "/promo",
        exact: true
    },
    {
        name: "faq",
        href: "/faq",
        exact: true
    },
    {
        name: "kontak",
        href: "/kontak-page",
        exact: true
    },
    {
        name: "news",
        href: "/news",
        exact: true
    },
    {
        name: "resource",
        href: "/resource",
        exact: true
    }, 
];
const menuitems = [
    {
        name: "harga",
        href: "/harga",
        exact: true
    },
    {
        name: "lokasi",
        href: "/lokasi",
        exact: true
    },
    {
        name: "promo",
        href: "/promo",
        exact: true
    },
    {
        name: "faq",
        href: "/faq",
        exact: true
    }, 
];
// function classNames(...classes: string[]) {
//   return classes.filter(Boolean).join(" ");
// }
const Navigation = ()=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_8__.useIntl)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const popoverButtonRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef(null);
    // btn handling
    const BtnLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ onClick , href , name  }, ref)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: "underlinex capitalize",
            href: href,
            onClick: onClick,
            ref: ref,
            children: f({
                id: `${name}`
            })
        });
    });
    // locale
    const { locales , asPath , locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const imgsrc = locale == "id" ? "/assets/images/icons8-indonesia-48.png" : "/assets/images/icons8-usa-48.png";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover, {
        className: "relative z-50 min-w-full bg-lm-light",
        children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sticky max-w-7xl mx-auto px-4 sm:px-6",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between items-center py-6 md:justify-start md:space-x-10",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex justify-start lg:w-0 lg:flex-1",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Share Car"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    alt: "logo",
                                                    height: 48,
                                                    src: "/assets/images/sc-logo.png",
                                                    width: 82
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "-mr-2 -my-2 md:hidden",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Button, {
                                        className: "bg-bsd-light rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lm-blue",
                                        ref: popoverButtonRef,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sr-only",
                                                children: "Open menu"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MenuIcon, {
                                                "aria-hidden": "true",
                                                className: "h-6 w-6"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Group, {
                                    as: "nav",
                                    className: "hidden cursor-pointer md:flex items-center space-x-10",
                                    children: [
                                        menuitems.map(({ name , href  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BtnLink, {
                                                name: `${name}`,
                                                onClick: ()=>push(`${href}`)
                                            }, name)),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Button, {
                                            className: `
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center rounded-md hover:text-opacity-100 focus:outline-none `,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    children: "Info"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
                                                    "aria-hidden": "true",
                                                    className: `${open ? "rotate-180" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-sc-grey transition duration-150 ease-in-out group-hover:text-opacity-80`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                            enter: "transition ease-out duration-200",
                                            enterFrom: "opacity-0 translate-y-1",
                                            enterTo: "opacity-100 translate-y-0",
                                            leave: "transition ease-in duration-150",
                                            leaveFrom: "opacity-100 translate-y-0",
                                            leaveTo: "opacity-0 translate-y-1",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Panel, {
                                                className: "absolute left-1/2 md:left-[63%] z-10 mt-3 md:mt-52 w-screen max-w-[160px] -translate-x-1/2 transform px-4 sm:px-0 ",
                                                focus: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "inline-block overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "relative grid gap-8 bg-sc-light p-7",
                                                        children: infoMenu.map(({ name , href  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BtnLink, {
                                                                name: f({
                                                                    id: `${name}`
                                                                }),
                                                                onClick: ()=>push(`${href}`)
                                                            }, name))
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-none hidden md:flex items-center justify-end md:flex-1 lg:w-0",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lang__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        imgsrc: imgsrc,
                                        language: locale,
                                        myRef: popoverButtonRef,
                                        children: locales?.map((loc)=>{
                                            const flagsrc = loc == "id" ? "/assets/images/icons8-indonesia-48.png" : "/assets/images/icons8-usa-48.png";
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "flex items-center justify-center focus:outline-none active:outline-none focus:border-none active:border-none",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: asPath,
                                                    locale: loc,
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                                alt: `flag-${loc}`,
                                                                height: 48,
                                                                src: flagsrc,
                                                                width: 48
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "text-sc-dark ",
                                                                children: loc
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, loc);
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_navigation_menu__WEBPACK_IMPORTED_MODULE_6__/* .NavigationMenu */ .i, {
                        open: open,
                        popoverButtonRef: popoverButtonRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lang__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            imgsrc: imgsrc,
                            language: locale,
                            children: locales?.map((loc)=>{
                                const flagsrc = loc == "id" ? "/assets/images/icons8-indonesia-48.png" : "/assets/images/icons8-usa-48.png";
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "flex items-center justify-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: asPath,
                                        locale: loc,
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
                                                    alt: `flag-${loc}`,
                                                    height: 48,
                                                    src: flagsrc,
                                                    width: 48
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text-sc-dark ",
                                                    children: loc
                                                })
                                            ]
                                        })
                                    })
                                }, loc);
                            })
                        })
                    })
                ]
            })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1362:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @typescript-eslint/no-explicit-any */ 



const Accordion = ({ title , description , defaultOpen , className , myKey  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pb-6",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, " max-w-md rounded-2xl p-2 ring-2 ring-sc-blue/75"),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Disclosure, {
                defaultOpen: defaultOpen,
                children: ({ open  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Disclosure.Button, {
                                className: "flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-sc-dark hover:bg-sc-green/80 focus:bg-sc-blue/80 focus:outline-none focus-visible:ring focus-visible:ring-sc-light focus-visible:ring-opacity-75",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "capitalize",
                                        children: title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronUpIcon, {
                                        className: `${open ? "rotate-180 transform" : "text-sc-blue"} h-5 w-5 text-black hover:text-sc-light`
                                    })
                                ]
                            }),
                            open && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Disclosure.Panel, {
                                className: "px-4 pt-4 pb-2 text-sm text-gray-500 whitespace-pre-line",
                                static: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: description
                                    }
                                })
                            })
                        ]
                    })
            })
        })
    }, myKey);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(648);




const Card = ({ children , title , description , myKey , datePost , imgsrc ,  })=>{
    // const datePost = moment(new Date()).format("DD MMMM YYYY");
    // console.log(moment(new Date()).locale("id"));
    // console.log(title);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "card w-full h-full bg-sc-light shadow-xl ring-2 ring-sc-blue",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "px-[37px] py-[29px]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                    className: "relative aspect-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        alt: `alt-${imgsrc}`,
                        layout: "fill",
                        src: `${imgsrc}`
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "card-body items-left text-left space-y-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-x-4",
                        children: [
                            /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__/* .Calendar */ .f, {
                                width: "24px",
                                height: "24px"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: `${datePost}`
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "card-title text-sc-dark",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: description
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "card-actions",
                        children: children
                    })
                ]
            })
        ]
    }, myKey);
};


/***/ }),

/***/ 1710:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ FilterList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable @typescript-eslint/no-explicit-any */ 



[];
const FilterList = ({ title , children , selected , onChange , classname  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox, {
        onChange: onChange,
        value: selected,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative ",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Button, {
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(classname, "relative cursor-default rounded-full py-2 pl-3 pr-10 text-left shadow-md ring-2 ring-sc-blue sm:text-md text-sc-dark"),
                    children: [
                        selected == "" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "block text-base md:text:sm truncate",
                            children: title
                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "block text-base md:text:sm truncate",
                            children: `${selected}`
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
                                "aria-hidden": "true",
                                className: `${selected ? "rotate-180" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-sc-blue transition duration-150 ease-in-out group-hover:text-opacity-80`
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    leave: "transition ease-in duration-100",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Listbox.Options, {
                        className: "absolute mt-1 max-h-60 w-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-50",
                        children: children
                    })
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8548:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export FilterSearch */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const FilterSearch = ({ title , children  })=>{
    return /*#__PURE__*/ _jsx(Popover, {
        className: "relative",
        children: ({ open  })=>/*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsxs(Popover.Button, {
                        className: `
                ${open ? "" : "text-opacity-90"}
                group relative inline-flex items-center rounded-full w-full bg-transparant px-3 py-2 text-base font-medium text-sc-dark hover:text-opacity-100 focus:outline-none ring-2 ring-sc-blue  focus-visible:ring-opacity-75`,
                        children: [
                            title,
                            /*#__PURE__*/ _jsx("span", {
                                className: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2",
                                children: /*#__PURE__*/ _jsx(ChevronDownIcon, {
                                    "aria-hidden": "true",
                                    className: `${open ? "rotate-180" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-sc-blue transition duration-150 ease-in-out group-hover:text-opacity-80`
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(Transition, {
                        as: React.Fragment,
                        enter: "transition ease-out duration-200",
                        enterFrom: "opacity-0 translate-y-1",
                        enterTo: "opacity-100 translate-y-0",
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100 translate-y-0",
                        leaveTo: "opacity-0 translate-y-1",
                        children: /*#__PURE__*/ _jsx(Popover.Panel, {
                            className: "absolute left-1/2 z-10 mt-3 w-screen max-w-xs -translate-x-1/2 transform px-4 sm:px-0 ",
                            children: /*#__PURE__*/ _jsx("div", {
                                className: "overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5",
                                children: /*#__PURE__*/ _jsx("div", {
                                    className: "relative grid gap-8 bg-sc-light p-7 ",
                                    children: children
                                })
                            })
                        })
                    })
                ]
            })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(648);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9068);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_6__);



// import SectionSeparator from "../layout/section-separator";




// import { EXAMPLE_PATH } from "../../lib/constants";
const Footer = ()=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_6__.useIntl)();
    const dynamicDate = new Date().getFullYear();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "mt-16 pt-32 w-full gardient relative gardient",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                className: "absolute -top-2 md:-top-44 lg:-top-60 xl:-top-80 z-10",
                id: "eNYC4Rhcl0s1",
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                viewBox: "0 0 1440 480",
                xmlns: "http://www.w3.org/2000/svg",
                xmlnsXlink: "http://www.w3.org/1999/xlink",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    d: "M0,4.11439h1440v474.62184c-84.13103-78.08007-374.59997-135.65146-720-135.65146s-635.86897,57.57139-720,135.65146L0,4.11439Z",
                    fill: "#f4f4f4",
                    strokeWidth: "0"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_section__WEBPACK_IMPORTED_MODULE_4__/* .SectionPage */ .t, {
                className: "flex flex-col-reverse mt-0 md:mt-48 xl:mt-0 md:flex-row items-center justify-center px-8 md:px-[88px] gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-none md:flex-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "text-2xl md:text-[32px] font-semibold text-sc-light text-center md:leading-10 whitespace-pre-line break-words mx-auto max-w-[616px]",
                                children: f({
                                    id: `Tunggu Apalagi? Download ShareCar Sekarang!`
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-center gap-4 md:gap-8 my-[60px] ",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://apps.apple.com/id/app/share-car-sewa-mobil-online/id1484777097",
                                        rel: "nofollow noopener noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            alt: "app-store",
                                            height: 48,
                                            src: "/assets/images/app-store.png",
                                            width: 164
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "https://play.google.com/store/apps/details?id=com.quantuminventions.sharecar&hl=en&gl=US",
                                        rel: "nofollow noopener noreferrer",
                                        target: "_blank",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                            alt: "play-store",
                                            height: 48,
                                            src: "/assets/images/playstore.png",
                                            width: 164
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-none md:flex justify-center mt-20 md:mt-0 md:flex-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "p-10 md:p-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                alt: "foooter-img",
                                height: 390,
                                src: "/assets/images/footer-phone.png",
                                width: 336
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-8 md:mx-[88px] mb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "sr-only ",
                        children: "Share Car"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                        alt: "logo",
                        height: 48,
                        src: "/assets/images/logo-sc-light.png",
                        width: 82
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_section__WEBPACK_IMPORTED_MODULE_4__/* .SectionPage */ .t, {
                className: "flex-none md:flex items-start justify-start gap-8 px-8 md:px-[88px] space-y-8 md:space-y-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "space-y-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-sc-light max-w-[300px] break-words whitespace-pre-line",
                            children: f({
                                id: "share Car adalah aplikasi sewa mobil online lepas kunci mulai dari hitungan jam dan dapat digunakan kapan saja untuk berbagai kebutuhan, baik urusan kantor atau pribadi."
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-sc-light text-xl",
                                children: f({
                                    id: "bantuan"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "text-sc-light",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/cara-kerja-sharecar`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                children: [
                                                    f({
                                                        id: "cara kerja"
                                                    }),
                                                    "?"
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/kenapa-sharecar`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                children: [
                                                    f({
                                                        id: "kenapa Share Car"
                                                    }),
                                                    "? "
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/kebijakan-privasi`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: f({
                                                    id: "kebijakan privasi"
                                                })
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/syarat-dan-ketentuan`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                children: [
                                                    f({
                                                        id: "syarat dan ketentuan"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-sc-light text-xl",
                                children: "Menu"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "text-sc-light",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/harga`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                children: [
                                                    f({
                                                        id: "harga"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/lokasi`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                children: [
                                                    f({
                                                        id: "lokasi"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/promo`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                children: [
                                                    f({
                                                        id: "promo"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/faq`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                children: [
                                                    f({
                                                        id: "faq"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/kontak-page`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                children: [
                                                    f({
                                                        id: "kontak"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/news`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                children: [
                                                    f({
                                                        id: "news"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/resource`,
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                children: [
                                                    f({
                                                        id: "resource"
                                                    }),
                                                    " "
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-sc-light text-xl",
                                children: f({
                                    id: "media sosial"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                className: "flex item-center gap-x-7",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://www.facebook.com/sharecarid",
                                            rel: "nofollow noopener noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__.Fb, {
                                                width: "24px",
                                                height: "24px"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://twitter.com/ShareCarID",
                                            rel: "nofollow noopener noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__/* .Twitter */ .tL, {
                                                width: "24px",
                                                height: "24px"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://www.instagram.com/sharecarid",
                                            rel: "nofollow noopener noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__/* .Instagram */ .mr, {
                                                width: "24px",
                                                height: "24px"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://www.youtube.com/sharecar",
                                            rel: "nofollow noopener noreferrer",
                                            target: "_blank",
                                            children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__/* .Youtube */ .hx, {
                                                width: "24px",
                                                height: "24px"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: "w-[320px] lg:w-[972px] xl:w-[1290px] mt-8 mx-auto py-[2px] px-1 rounded-full bg-sc-light"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_section__WEBPACK_IMPORTED_MODULE_4__/* .SectionPage */ .t, {
                className: "mx-12 py-10",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "text-center text-sc-light py-4",
                    children: [
                        "\xa9Copyright ",
                        `${dynamicDate}`,
                        " PT. Adi Sarana Armada Tbk. All Rights Reserved."
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* reexport */ Calendar),
  "lG": () => (/* reexport */ Car),
  "Zb": () => (/* reexport */ Card),
  "Fb": () => (/* reexport */ Fb),
  "p2": () => (/* reexport */ Human),
  "OM": () => (/* reexport */ HumanCircle),
  "mr": () => (/* reexport */ Instagram),
  "dR": () => (/* reexport */ Likes),
  "y0": () => (/* reexport */ Mendal),
  "gG": () => (/* reexport */ Percent),
  "fy": () => (/* reexport */ PhoneUnlimited),
  "QS": () => (/* reexport */ Seat),
  "jM": () => (/* reexport */ Suitcase),
  "B9": () => (/* reexport */ Tooling),
  "fs": () => (/* reexport */ Transmision),
  "tL": () => (/* reexport */ Twitter),
  "hx": () => (/* reexport */ Youtube)
});

// UNUSED EXPORTS: City, Linkedin, Oval, Stars, Whatsapp

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/ui/icons/human.tsx


function Human({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 211 498",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M150.722 455.127L148.585 451.988L107.823 479.523C105.842 480.861 103.308 481.066 101.128 480.038L100.737 480.219L104.167 485.248C104.299 485.439 104.487 485.568 104.701 485.62L104.901 485.664C106.318 485.978 107.796 485.71 108.992 484.9L150.348 456.967C150.95 456.555 151.115 455.735 150.708 455.118L150.722 455.127Z",
                fill: "#00276F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M127.288 378.319L137.07 438.268L145.03 452.801L105.815 479.284C104.52 480.166 102.728 479.817 101.837 478.521C101.171 477.546 101.18 476.258 101.841 475.301L118.094 451.94L99.1484 400.171",
                fill: "#FFCFA5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M117.512 449.073L100.42 476.172C99.7184 477.294 99.8005 478.841 100.638 480.068C101.76 481.707 104.348 481.889 105.787 480.924L148.612 452.005L136.785 437.732C136.785 437.732 132.732 447.851 117.54 449.089L117.512 449.073Z",
                fill: "#FFAB37"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M113.043 453.656C115.636 454.497 118.12 455.649 120.44 457.079",
                stroke: "#00276F",
                strokeLinecap: "round",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M111.247 457.58C114.011 458.579 115.347 459.314 117.44 460.553",
                stroke: "#00276F",
                strokeLinecap: "round",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M109.58 460.68C111.432 461.308 113.506 462.517 115.23 463.425",
                stroke: "#00276F",
                strokeLinecap: "round",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M88.2348 202.849L86.504 216.758C85.9433 221.277 84.4039 225.631 81.9996 229.516C71.1686 246.963 49.2349 309.54 55.2483 331.424C62.5049 357.867 107.685 441.651 107.685 441.651L142.953 410.123L103.798 317.025L143.707 248.043C143.707 248.043 166.396 231.711 142.925 189.667",
                fill: "#355ABA"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M139.212 389.614L99.0794 320.267C96.7169 316.373 97.713 313.303 99.6462 310.514L133.156 246.246C133.156 246.246 155.754 229.553 131.794 185.789",
                stroke: "#15489B",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M136.282 396.938L96.1195 323.069C92.3212 317.838 93.9593 310.076 96.7148 306.12C96.7148 306.12 132.2 242.372 132.379 242.235C134.728 240.283 148.451 226.053 125.952 184.952",
                stroke: "#15489B",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M142.988 404.967L150.747 417.622L106.368 443.224L99.5881 430.326L142.988 404.967Z",
                fill: "#3574BA"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M149.968 406.336L143.839 457.672L146.927 473.878L101.335 487.305C99.8261 487.75 98.2369 486.89 97.7944 485.389C97.4614 484.26 97.8648 483.048 98.7994 482.319L121.527 464.966L119.479 410.036",
                fill: "#FFCFA5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M147.093 485.413L146.999 481.638L97.5973 482.856C95.1978 482.915 92.9452 481.711 91.6619 479.693L91.2384 479.623L91.3896 485.689C91.3952 485.915 91.4815 486.122 91.648 486.296L91.798 486.454C92.8131 487.478 94.2061 488.041 95.6653 488.005L145.796 486.769C146.526 486.751 147.111 486.139 147.093 485.413Z",
                fill: "#00276F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M122.383 462.52L93.1956 476.067C91.9929 476.63 91.2153 477.972 91.2518 479.439C91.3009 481.407 93.3835 482.953 95.1183 482.91L146.999 481.632L144.806 463.307C144.806 463.307 135.879 469.626 122.366 462.504L122.383 462.52Z",
                fill: "#FFAB37"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M116.127 463.98C117.85 466.083 119.318 468.386 120.498 470.825",
                stroke: "#00276F",
                strokeLinecap: "round",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M112.469 466.314C114.262 468.625 114.976 469.962 116.069 472.129",
                stroke: "#00276F",
                strokeLinecap: "round",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M107.882 470.745C109.439 471.9 111.062 473.675 112.432 475.054",
                stroke: "#00276F",
                strokeLinecap: "round",
                strokeMiterlimit: "10"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M162.864 189.912C162.864 189.912 173.065 217.169 168.501 247.093C163.92 277.022 159.087 444.428 159.087 444.428L109.273 438.538L109.339 240.98C109.339 240.98 104.426 217.781 104.841 185.195",
                fill: "#355ABA"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M145.131 442.788L155.16 250.755C155.16 250.755 161.249 225.425 156.382 208.921",
                stroke: "#3D6CE6",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M149.035 443.231L160.119 249.273C160.119 249.273 166.207 223.944 161.341 207.439",
                stroke: "#3D6CE6",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M159.461 431.637L159.233 446.517L108.797 441.75L109.267 427.976L159.461 431.637Z",
                fill: "#3574BA"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M158.555 229.317C158.555 229.317 144.18 226.776 136.746 213.549",
                stroke: "#1B5ABF",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M110.654 245.828C110.654 245.828 103.983 241.606 103.092 236.808C100.634 223.596 99.0339 206.416 99.0339 206.416",
                stroke: "#00276F",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M26.1758 129.462L36.3392 116.581C36.3392 116.581 22.5746 90.986 21.395 91.3789C18.9892 92.1862 24.7255 103.077 24.7255 103.077C24.7255 103.077 17.0454 91.5943 16.2658 92.4938C14.8497 94.1143 20.7898 106.085 20.7898 106.085C20.7898 106.085 13.9299 94.6401 13.0095 96.0261C12.0891 97.4121 19.2052 115.595 19.2052 115.595L26.1919 129.46L26.1758 129.462Z",
                fill: "#FFCFA5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M38.6884 117.584L36.0776 113.692C36.0776 113.692 34.6034 106.718 32.2168 101.778C29.8141 96.8402 28.1975 94.5237 27.2467 94.6311C26.296 94.7385 28.1511 102.627 28.1511 102.627C28.1511 102.627 27.2849 109.686 30.1755 113.888",
                fill: "#FFCFA5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M24.169 117.637L31.3222 109.315C31.6262 108.972 31.6971 108.445 31.4709 108.032L19.7174 85.3577L19.0284 85.614C18.8727 85.6803 18.6829 85.7342 18.5524 85.8787L10.6599 94.4461C10.3559 94.7888 10.285 95.3161 10.5112 95.7288L22.1704 117.57C22.3374 117.892 22.651 118.068 22.9751 118.047L24.1851 117.635L24.169 117.637Z",
                fill: "#0A172B"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M24.3942 117.466L32.1991 108.99C32.5031 108.647 32.574 108.12 32.3478 107.707L20.6276 85.7589C20.378 85.2839 19.7798 85.1892 19.415 85.5712L11.5225 94.1386C11.2185 94.4813 11.1476 95.0086 11.3738 95.4212L23.033 117.263C23.322 117.798 23.9865 117.902 24.3781 117.468L24.3942 117.466Z",
                fill: "#00276F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M31.5004 106.131L22.3884 116.037L12.196 96.9181L21.3098 87.0281L31.5004 106.131Z",
                fill: "#8DADE0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M27.5936 111.989C27.7105 112.301 27.9846 112.416 28.1957 112.262C28.4229 112.107 28.5102 111.724 28.3933 111.412C28.2765 111.101 28.0023 110.986 27.7912 111.139C27.564 111.295 27.4768 111.678 27.5936 111.989Z",
                fill: "#8DADE0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17.0645 89.748L15.4677 91.5026",
                stroke: "#8DADE0",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "0.25"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                opacity: "0.55",
                style: {
                    mixBlendMode: "multiply"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M22.68 93.0719C22.795 93.3673 23.053 93.4842 23.248 93.3324C23.4429 93.1805 23.5338 92.8295 23.4349 92.5323C23.336 92.2351 23.0618 92.12 22.8669 92.2718C22.6558 92.4255 22.5811 92.7747 22.68 93.0719Z",
                    fill: "#8DADE0"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M14.8377 97.3322L19.6333 92.1167C20.1411 91.5563 21.0224 91.7002 21.394 92.3886L22.2451 93.9966L22.7878 94.0327L16.9122 100.376C16.4044 100.937 15.5231 100.793 15.1514 100.104L14.6325 99.1244C14.3219 98.5427 14.4014 97.8034 14.8377 97.3322Z",
                fill: "white",
                opacity: "0.51"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M20.4534 93.1641L15.6113 98.4011",
                stroke: "#8DADE0",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "0.25"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M21.096 94.3711L18.3192 97.3787",
                stroke: "#8DADE0",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "0.25"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                opacity: "0.55",
                style: {
                    mixBlendMode: "multiply"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M29.2587 104.778C29.3737 105.073 29.6317 105.19 29.8267 105.038C30.0217 104.887 30.1125 104.536 30.0136 104.238C29.9147 103.941 29.6406 103.826 29.4456 103.978C29.2345 104.132 29.1598 104.481 29.2587 104.778Z",
                    fill: "#8DADE0"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M21.4165 109.038L26.212 103.823C26.7198 103.262 27.6011 103.406 27.9728 104.095L28.8239 105.703L29.3665 105.739L23.4909 112.082C22.9831 112.643 22.1018 112.499 21.7302 111.811L21.2113 110.83C20.9006 110.249 20.9802 109.509 21.4165 109.038Z",
                fill: "white",
                opacity: "0.51"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M27.0306 104.853L22.1903 110.106",
                stroke: "#8DADE0",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "0.25"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M27.6755 106.077L24.8825 109.087",
                stroke: "#8DADE0",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "0.25"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                opacity: "0.55",
                style: {
                    mixBlendMode: "multiply"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M18.0701 106.873C18.1851 107.168 18.4432 107.285 18.6381 107.133C18.8492 106.98 18.9239 106.63 18.825 106.333C18.7261 106.036 18.452 105.921 18.257 106.073C18.062 106.225 17.9712 106.576 18.0701 106.873Z",
                    fill: "#8DADE0"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M18.577 102.547L23.7659 96.9134C24.2021 96.4422 24.9347 96.5705 25.2454 97.1521L26.0533 98.6676C26.2795 99.0802 26.2087 99.6076 25.9029 99.9342L19.5035 106.84L19.5846 105.971L18.4284 103.829C18.2022 103.417 18.2569 102.891 18.5627 102.564L18.577 102.547Z",
                fill: "white",
                opacity: "0.51"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M24.3942 98.1426L19.552 103.38",
                stroke: "#8DADE0",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "0.25"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M25.0375 99.3496L22.2606 102.357",
                stroke: "#8DADE0",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "0.25"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M21.8582 102.84L20.7817 104",
                stroke: "#8DADE0",
                strokeLinecap: "round",
                strokeMiterlimit: "10",
                strokeWidth: "0.25"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.2717 90.7766L9.51272 92.9714L32.3947 114.472L34.1698 112.275L11.2717 90.7766Z",
                fill: "url(#paint0_linear_994_20100)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.1993 88.5433L10.756 89.0965L33.6379 110.597L34.0812 110.044L11.1993 88.5433Z",
                fill: "url(#paint1_linear_994_20100)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M74.0846 129.519L64.8017 148.889L36.0791 113.704C36.0791 113.704 18.8254 117.292 21.7951 125.655C34.2317 148.885 46.3095 184.961 65.5698 184.684C86.7356 184.37 109.006 142.452 109.006 142.452",
                fill: "#FFCFA5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M64.8012 148.891C64.8012 148.891 70.6497 155.29 75.5698 165.169",
                stroke: "#D34F9B",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M24.3224 130.26C24.3224 130.26 15.37 114.021 14.1337 110.882C12.9136 107.742 9.64809 99.0718 11.0984 98.908C12.5487 98.7442 16.9005 106.918 17.4325 108.303C20.473 109.501 24.8617 111.796 25.3734 116.753",
                fill: "#FFCFA5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M112.556 76.7137C112.556 76.7137 88.8917 81.6262 68.5249 137.772C74.5442 144.671 103.177 157.422 110.59 156.438C117.31 143.849 121.484 113.079 121.484 113.079",
                fill: "#3574BA"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M94.2575 126.036C98.3861 96.0181 107.984 80.7342 107.984 80.7342L131.719 70.9616L154.345 93.2351C181.116 151.278 169.537 219.755 169.537 219.755C156.451 227.14 98.1273 221.719 82.674 209.476C82.674 209.476 90.7529 151.326 94.2414 126.038L94.2575 126.036Z",
                fill: "#3574BA"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M90.8974 150.876C90.8974 150.876 96.1095 103.745 100.463 94.4736",
                stroke: "#225BAF",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M180.723 111.999C180.723 111.999 196.376 142.752 195.333 161.955C193.741 191.459 149.943 224.416 149.943 224.416C149.943 224.416 152.419 232.023 149.518 236.099C140.575 230.91 137.074 223.76 137.074 223.76L140.272 216.826C140.272 216.826 161.438 173.67 159.182 160.504C157.59 151.19 137.707 106.277 137.707 106.277",
                fill: "#FFCFA5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M131.723 70.9573C131.723 70.9573 158.602 75.2727 171.865 93.6868C187.951 116.001 192.885 135.957 192.885 135.957C182.759 148.59 160.319 156.107 147.407 154.936L133.261 110.381",
                fill: "#3574BA"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M147.387 154.923L134.356 113.878",
                stroke: "#225BAF",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M103.221 60.8096L113.87 36.4977L126.309 53.5442L126.089 57.8047L131.723 70.9623C128.994 83.4904 112.228 86.7636 107.988 80.735L103.221 60.8096Z",
                fill: "#FFCFA5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M88.0918 31.5206C86.8513 39.8885 89.3885 67.5147 96.2771 69.6902C103.164 71.8496 116.081 67.5831 119.392 62.227C122.26 57.5701 122.841 34.2817 116.182 29.3702C109.522 24.4587 89.8508 19.7998 88.1097 31.5348L88.0918 31.5206Z",
                fill: "#FFCFA5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M108.711 34.5958C102.658 36.3506 97.0997 35.2582 92.1377 34.2445C87.1756 33.2308 82.3387 30.7261 79.5161 26.5496C77.1636 23.0666 76.4438 17.8573 80.9354 15.289C82.0091 14.6808 83.2444 14.3466 84.4782 14.2884C88.4411 14.1166 91.8357 16.135 95.0781 18.1057C93.143 12.1087 105.144 13.5932 107.827 15.5297C108.664 16.1492 109.28 16.9722 110.262 17.4293C113.22 18.7667 116.762 18.4802 119.855 19.413C123.674 20.572 126.923 23.4669 128.511 27.1175C129.835 30.165 131.604 35.2719 129.455 39.3608C128.419 41.3117 127.452 43.4333 127.34 45.6206L126.285 54.6168C126.285 54.6168 121.81 52.1362 121.318 51.8347C119.546 50.7366 118.745 49.1393 117.262 47.7164C113.471 44.0712 110.559 38.5254 108.739 34.5601L108.711 34.5958Z",
                fill: "#333333"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M114.131 46.0085C114.758 44.4772 115.62 42.7245 117.137 42.4234C117.917 42.2541 118.718 42.5531 119.344 43.0342C122.59 45.475 123.421 50.8014 120.66 53.9531C119.503 55.2685 117.774 55.9993 116.399 54.5156L114.005 47.0613C113.856 46.7536 113.99 46.349 114.133 46.0245L114.131 46.0085Z",
                fill: "#FFCFA5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M105.429 70.2308C105.429 70.2308 115.973 68.6503 119.683 61.626",
                stroke: "#D34F9B",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M95.0547 44.1728C95.0547 44.1728 91.5767 51.9495 93.1408 53.8013C94.7048 55.6532 98.098 54.0528 98.098 54.0528",
                stroke: "#D34F9B",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M100.264 43.3254C100.144 43.8582 100.272 44.5578 100.287 44.978C100.324 45.7366 101.175 46.0462 101.827 45.7454C103.053 45.185 102.474 42.2319 100.931 42.5847C100.533 42.6783 100.336 42.9601 100.264 43.3254Z",
                fill: "#00276F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M89.7079 44.5158C89.5887 45.0486 89.7168 45.7482 89.7316 46.1684C89.7685 46.927 90.6195 47.2366 91.271 46.9358C92.497 46.3754 91.9181 43.4223 90.3749 43.7751C89.9775 43.8687 89.7809 44.1506 89.7079 44.5158Z",
                fill: "#00276F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M94.7628 60.062L105.307 55.7389C105.307 55.7389 106.675 63.9421 100.222 65.9044C96.3089 67.0929 94.761 60.046 94.761 60.046L94.7628 60.062Z",
                fill: "white"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M98.9585 39.4337C101.039 39.2149 103.35 39.4408 105.278 40.0345C105.474 39.8986 105.91 38.8432 105.522 38.3028C105.228 37.8654 101.814 37.115 98.8717 37.5122C98.8717 37.5122 98.5105 39.2246 98.9585 39.4337Z",
                fill: "#00276F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M93.0956 39.9793C91.5986 40.1646 90.1184 40.7862 89.0272 41.6722C88.8372 41.5801 88.3741 40.8047 88.4253 40.2471C88.4569 39.8054 90.495 38.4878 92.6456 38.3098C92.6456 38.3098 93.3083 39.6956 93.0956 39.9793Z",
                fill: "#00276F"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M121.761 52.1406C121.761 52.1406 119.978 55.5716 116.992 55",
                stroke: "#D34F9B",
                strokeMiterlimit: "10",
                strokeWidth: "0.75"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        gradientUnits: "userSpaceOnUse",
                        id: "paint0_linear_994_20100",
                        x1: "9.81101",
                        x2: "33.7243",
                        y1: "92.4779",
                        y2: "112.892",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.6"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.89",
                                stopColor: "white",
                                stopOpacity: "0.1"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        gradientUnits: "userSpaceOnUse",
                        id: "paint1_linear_994_20100",
                        x1: "10.4084",
                        x2: "34.275",
                        y1: "89.4379",
                        y2: "109.818",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.6"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.89",
                                stopColor: "white",
                                stopOpacity: "0.1"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/car.tsx


function Car({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 872 422",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                clipPath: "url(#clip0_402_10331)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M40.5423 279.867L93.3834 211.446L799.936 172.976L914.856 211.446L961.075 315.554C956.984 323.014 950.529 329.138 942.459 332.784L928.046 339.298C922.48 341.803 916.498 343.167 910.404 343.307L54.65 363.655L40.5423 279.84V279.867Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M40.5423 279.867L93.3834 211.446L799.936 172.976L914.856 211.446L961.075 315.554C956.984 323.014 950.529 329.138 942.459 332.784L928.046 339.298C922.48 341.803 916.498 343.167 910.404 343.307L54.65 363.655L40.5423 279.84V279.867Z",
                        fill: "#FAFAFA",
                        opacity: "0.2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M2.36517 232.1L14.7477 195.356C18.8102 183.275 27.7979 173.477 39.4847 168.383C75.6027 152.655 159.692 121.283 249.709 124.679C249.709 124.679 366.939 18.4557 489.261 3.50759C595.305 -9.43634 797.042 16.9247 848.909 24.19C852.137 24.6354 852.582 29.1171 849.521 30.2027L836.165 35.0184C831.462 36.7164 831.017 43.1745 835.441 45.4849L944.63 102.995C957.764 109.926 966 123.538 966 138.403V296.347C966 312.074 956.79 326.326 942.459 332.812L928.046 339.326C927.489 339.577 926.905 339.827 926.32 340.05C926.432 338.018 926.515 335.986 926.515 333.926C926.515 275.525 879.184 228.175 820.805 228.175C762.427 228.175 715.095 275.525 715.095 333.926C715.095 338.686 715.429 343.39 716.013 347.983L291.308 358.088C293.117 350.321 294.091 342.249 294.091 333.926C294.091 275.525 246.759 228.175 188.381 228.175C130.002 228.175 82.6703 275.525 82.6703 333.926C82.6703 344.003 84.0895 353.717 86.7051 362.959L44.9943 363.961C40.9318 364.045 36.8691 363.488 32.9735 362.291L26.6571 360.343C10.7964 355.471 -0.0278931 340.801 -0.0278931 324.183V246.603C-0.0278931 241.704 0.779053 236.805 2.33734 232.156L2.36517 232.1Z",
                        fill: "#3381D9"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M291.336 358.032C292.699 352.242 293.562 346.257 293.924 340.133L344.678 314.023C348.574 312.019 352.831 310.849 357.2 310.543L624.355 293.006C629.197 292.7 634.038 293.479 638.546 295.317L715.373 326.744C715.206 329.082 715.123 331.476 715.123 333.842C715.123 338.602 715.457 343.307 716.041 347.9L291.336 358.004V358.032Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M83.5052 346.814C84.173 352.326 85.2583 357.699 86.733 362.932L45.0221 363.934C40.9595 364.017 36.897 363.461 33.0014 362.264L26.6849 360.315C21.1476 358.617 16.2224 355.722 12.1599 351.964L83.4774 346.814H83.5052Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M820.833 218.154C884.61 218.154 936.505 270.069 936.505 333.87C936.505 334.399 936.505 334.956 936.505 335.485L928.073 339.298C927.517 339.549 926.933 339.799 926.348 340.022C926.46 337.99 926.543 335.958 926.543 333.898C926.543 275.497 879.211 228.148 820.833 228.148C762.454 228.148 715.123 275.497 715.123 333.898C715.123 338.658 715.457 343.362 716.041 347.955L706.024 348.206C705.439 343.529 705.133 338.742 705.133 333.898C705.133 270.097 757.028 218.182 820.805 218.182L820.833 218.154Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M188.408 218.154C252.185 218.154 304.08 270.069 304.08 333.87C304.08 342.054 303.218 350.071 301.604 357.782L291.364 358.032C293.173 350.266 294.146 342.193 294.146 333.87C294.146 275.469 246.815 228.12 188.436 228.12C130.058 228.12 82.7261 275.469 82.7261 333.87C82.7261 343.947 84.1452 353.662 86.7608 362.904L76.521 363.154C74.0723 353.801 72.7645 344.003 72.7645 333.898C72.7645 270.097 124.66 218.182 188.436 218.182L188.408 218.154Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M492.183 27.2796C554.624 19.6524 653.878 26.4167 732.43 34.35C739.971 35.1016 743.338 44.2041 738.135 49.6879L696.062 94.1426C690.553 99.9604 683.207 103.691 675.248 104.665L348.657 145.278C344.65 145.779 340.588 145.556 336.664 144.666L292.338 134.478C286.912 133.225 285.353 126.21 289.778 122.814C328.873 92.6395 410.263 37.3007 492.21 27.2796H492.183Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M62.3297 328.358H65.4462L42.5178 246.798H31.4153L62.3297 328.358Z",
                        fill: "black",
                        opacity: "0.3"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M0 324.127V246.547C0 244.96 0.0834675 243.374 0.250422 241.787L27.2415 337.851H23.4571L16.7789 320.202L0.779118 331.838C0.250429 329.333 0 326.744 0 324.127Z",
                        fill: "black",
                        opacity: "0.3"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M505.928 160.644L544.996 159.002C547.751 158.89 550.171 157.109 551.09 154.52C552.064 151.82 549.977 148.981 547.111 149.092L508.043 150.734C505.288 150.846 502.868 152.627 501.949 155.216C500.975 157.916 503.062 160.755 505.928 160.644Z",
                            fill: "black",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M797.487 46.9326L832.937 38.0527C831.768 40.6415 832.548 43.9819 835.469 45.5129L944.63 102.995C945.882 103.663 947.078 104.387 948.247 105.194H925.792C923.76 105.194 921.729 104.916 919.754 104.359L806.558 73.0153C805.056 72.5977 803.72 71.7905 802.663 70.6492L793.424 60.6002C789.167 55.9794 791.393 48.4636 797.515 46.9326H797.487Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M181.285 156.997L165.953 151.708C163.421 150.846 160.666 150.706 158.05 151.347L31.4154 181.967L28.5493 193.24C27.7145 196.469 28.1876 199.893 29.8571 202.788L30.2745 203.512C33.0571 208.328 38.4831 211 43.9926 210.221L68.9802 206.769C71.4288 206.435 73.7383 205.461 75.714 203.985L104.653 181.994L181.007 162.899C183.956 162.175 184.123 158.055 181.257 157.053L181.285 156.997Z",
                        fill: "#FAFAFA",
                        opacity: "0.7"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M170.238 156.329C172.798 157.22 172.631 160.867 170.016 161.507L102.204 178.459L76.521 198C74.7679 199.337 72.7088 200.172 70.5384 200.478L48.3334 203.54C43.4361 204.208 38.6222 201.87 36.1457 197.583L35.7841 196.943C34.3093 194.382 33.8919 191.348 34.6154 188.48L36.591 180.714L156.687 151.681L170.21 156.329H170.238Z",
                        fill: "#3381D9"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M170.238 156.329C172.798 157.22 172.631 160.867 170.016 161.507L102.204 178.459L76.521 198C74.7679 199.337 72.7088 200.172 70.5384 200.478L48.3334 203.54C43.4361 204.208 38.6222 201.87 36.1457 197.583L35.7841 196.943C34.3093 194.382 33.8919 191.348 34.6154 188.48L36.591 180.714L156.687 151.681L170.21 156.329H170.238Z",
                        fill: "#FAFAFA",
                        opacity: "0.3"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M36.6187 180.687L89.6269 167.882L67.2271 189.594C65.6132 191.153 63.7211 192.155 61.6898 192.517L41.1544 196.136C38.9561 196.526 36.7857 196.052 34.8657 194.911C34.1701 192.851 34.0588 190.596 34.6153 188.453L36.5909 180.687H36.6187Z",
                        fill: "#3381D9"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M36.6187 180.687L89.6269 167.882L67.2271 189.594C65.6132 191.153 63.7211 192.155 61.6898 192.517L41.1544 196.136C38.9561 196.526 36.7857 196.052 34.8657 194.911C34.1701 192.851 34.0588 190.596 34.6153 188.453L36.5909 180.687H36.6187Z",
                        fill: "#FAFAFA",
                        opacity: "0.6"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M426.681 18.5117L434.945 22.7985C435.919 23.2996 435.807 24.7192 434.75 25.0811C367.606 46.7657 305.36 93.1968 269.604 123.483C265.792 126.712 260.644 127.797 255.858 126.433L249.736 124.68C249.736 124.68 329.819 52.1103 426.681 18.5117Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M747.067 165.6L615.757 266.507L342.675 303.445L259.865 189.929L616.759 165.6H747.067Z",
                        fill: "#FAFAFA",
                        opacity: "0.2"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M758.519 396.209C724.115 361.792 724.115 305.991 758.519 271.574C792.923 237.157 848.703 237.157 883.106 271.574C917.51 305.991 917.51 361.792 883.106 396.209C848.703 430.626 792.923 430.626 758.519 396.209Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M799.685 401.848C800.52 399.147 799.157 396.252 796.541 395.223C772.973 385.925 756.973 364.157 755.081 338.854C754.886 336.042 752.521 333.871 749.71 333.871C746.566 333.871 744.089 336.571 744.312 339.717C746.51 369.112 765.126 394.415 792.506 405.244C795.428 406.413 798.739 404.826 799.685 401.82V401.848Z",
                            fill: "black",
                            opacity: "0.6"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M757.641 315.024C765.404 289.025 788.805 270.18 815.908 268.12C818.69 267.897 820.833 265.531 820.833 262.748C820.833 259.602 818.162 257.097 815.045 257.347C783.574 259.769 756.361 281.676 747.317 311.879C746.427 314.885 748.291 318.031 751.352 318.699C754.079 319.283 756.861 317.697 757.641 315.024Z",
                            fill: "black",
                            opacity: "0.6"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M856.394 395.5C857.98 398.228 861.542 399.035 864.13 397.254C884.888 383.029 897.576 359.229 897.576 333.87C897.576 306.34 882.55 280.758 858.871 267.202C856.144 265.643 852.638 266.729 851.274 269.568C850.078 272.101 851.024 275.163 853.445 276.555C873.813 288.219 886.724 310.182 886.724 333.87C886.724 355.694 875.817 376.126 857.952 388.346C855.643 389.933 854.947 393.051 856.366 395.472L856.394 395.5Z",
                            fill: "black",
                            opacity: "0.6"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M826.621 410.42C829.57 410.198 832.464 409.808 835.358 409.251C838.447 408.667 840.367 405.549 839.532 402.515C838.781 399.815 836.109 398.089 833.354 398.618C830.85 399.091 828.318 399.425 825.786 399.62C822.975 399.815 820.833 402.181 820.833 404.992C820.833 408.138 823.504 410.615 826.621 410.392V410.42Z",
                            fill: "black",
                            opacity: "0.6"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M782.622 372.097C761.53 350.997 761.53 316.786 782.622 295.686C803.714 274.586 837.911 274.586 859.004 295.686C880.096 316.787 880.096 350.997 859.004 372.097C837.911 393.197 803.714 393.197 782.622 372.097Z",
                        fill: "#FAFAFA",
                        opacity: "0.4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M820.833 285.296C818.44 285.296 816.52 287.244 816.52 289.611V317.28C816.52 319.674 818.468 321.595 820.833 321.595C823.226 321.595 825.146 319.646 825.146 317.28V289.611C825.146 287.217 823.198 285.296 820.833 285.296Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M818.245 295.149C818.245 293.72 819.404 292.561 820.833 292.561C822.262 292.561 823.421 293.72 823.421 295.149V311.768C823.421 313.197 822.262 314.356 820.833 314.356C819.404 314.356 818.245 313.197 818.245 311.768V295.149Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M820.805 346.174H820.833C823.215 346.174 825.146 348.106 825.146 350.488V378.186C825.146 380.569 823.215 382.5 820.833 382.5H820.805C818.423 382.5 816.492 380.569 816.492 378.186V350.488C816.492 348.106 818.423 346.174 820.805 346.174Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M818.245 356.028C818.245 354.598 819.404 353.439 820.833 353.439C822.262 353.439 823.421 354.598 823.421 356.028V372.647C823.421 374.076 822.262 375.235 820.833 375.235C819.404 375.235 818.245 374.076 818.245 372.647V356.028Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M837.361 329.333L861.319 315.498C863.379 314.301 864.102 311.657 862.905 309.597C861.709 307.537 859.066 306.813 857.006 308.01L833.048 321.845C830.989 323.042 830.266 325.686 831.462 327.746C832.659 329.806 835.302 330.53 837.361 329.333Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M841.285 325.074L855.671 316.779C856.923 316.055 857.34 314.468 856.617 313.243C855.893 311.991 854.307 311.573 853.083 312.297L838.697 320.592C837.445 321.316 837.027 322.903 837.751 324.127C838.474 325.38 840.061 325.798 841.285 325.074Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M784.659 359.786L808.617 345.951C810.677 344.754 811.4 342.11 810.203 340.05C809.007 337.99 806.364 337.266 804.304 338.463L780.346 352.298C778.287 353.495 777.564 356.139 778.76 358.199C779.957 360.259 782.6 360.983 784.659 359.786Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M788.583 355.499L802.969 347.204C804.221 346.48 804.638 344.893 803.915 343.668C803.191 342.416 801.605 341.998 800.381 342.722L785.995 351.017C784.743 351.741 784.325 353.328 785.049 354.552C785.772 355.805 787.358 356.223 788.583 355.499Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M862.905 358.199C864.102 356.139 863.379 353.495 861.319 352.298L837.361 338.463C835.302 337.266 832.659 337.99 831.462 340.05C830.266 342.11 830.989 344.754 833.048 345.951L857.006 359.786C859.066 360.983 861.709 360.259 862.905 358.199Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M856.617 354.553C857.34 353.3 856.895 351.714 855.671 351.018L841.285 342.723C840.033 341.999 838.447 342.444 837.751 343.669C837.028 344.922 837.473 346.508 838.697 347.204L853.083 355.5C854.335 356.223 855.921 355.778 856.617 354.553Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M810.203 327.746C811.4 325.686 810.677 323.042 808.617 321.845L784.659 308.01C782.6 306.813 779.957 307.537 778.76 309.597C777.564 311.657 778.287 314.301 780.346 315.498L804.304 329.333C806.364 330.53 809.007 329.806 810.203 327.746Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M803.915 324.128C804.638 322.876 804.193 321.289 802.969 320.593L788.583 312.298C787.331 311.574 785.745 312.019 785.049 313.244C784.325 314.497 784.771 316.084 785.995 316.779L800.381 325.075C801.633 325.798 803.219 325.353 803.915 324.128Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M813.57 333.898C813.57 337.907 816.826 341.163 820.833 341.163C824.84 341.163 828.095 337.907 828.095 333.898C828.095 329.89 824.84 326.633 820.833 326.633C816.826 326.633 813.57 329.89 813.57 333.898Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M126.119 396.205C91.7154 361.788 91.7155 305.987 126.119 271.57C160.523 237.153 216.303 237.153 250.706 271.57C285.11 305.987 285.11 361.788 250.706 396.205C216.303 430.622 160.523 430.622 126.119 396.205Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M167.261 401.847C168.096 399.146 166.732 396.251 164.117 395.222C140.548 385.924 124.548 364.156 122.656 338.853C122.461 336.041 120.096 333.87 117.286 333.87C114.141 333.87 111.665 336.57 111.887 339.716C114.086 369.111 132.701 394.414 160.082 405.243C163.003 406.412 166.315 404.825 167.261 401.819V401.847Z",
                            fill: "black",
                            opacity: "0.6"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M125.216 315.024C132.979 289.025 156.381 270.18 183.483 268.12C186.266 267.897 188.408 265.531 188.408 262.748C188.408 259.602 185.737 257.097 182.621 257.347C151.15 259.769 123.936 281.676 114.893 311.879C114.002 314.885 115.867 318.031 118.927 318.699C121.654 319.283 124.437 317.697 125.216 315.024Z",
                            fill: "black",
                            opacity: "0.6"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M223.97 395.499C225.556 398.227 229.117 399.034 231.705 397.253C252.463 383.028 265.152 359.228 265.152 333.869C265.152 306.339 250.126 280.757 226.446 267.201C223.719 265.642 220.213 266.728 218.85 269.567C217.653 272.1 218.599 275.162 221.02 276.554C241.389 288.218 254.3 310.181 254.3 333.869C254.3 355.693 243.392 376.125 225.528 388.345C223.219 389.932 222.523 393.05 223.942 395.471L223.97 395.499Z",
                            fill: "black",
                            opacity: "0.6"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.6",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M194.196 410.42C197.146 410.198 200.04 409.808 202.933 409.251C206.022 408.667 207.942 405.549 207.107 402.515C206.356 399.815 203.685 398.089 200.93 398.618C198.426 399.091 195.894 399.425 193.361 399.62C190.551 399.815 188.408 402.181 188.408 404.992C188.408 408.138 191.08 410.615 194.196 410.392V410.42Z",
                            fill: "black",
                            opacity: "0.6"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M150.222 372.093C129.13 350.993 129.13 316.783 150.222 295.682C171.314 274.582 205.511 274.582 226.603 295.682C247.696 316.783 247.696 350.993 226.603 372.093C205.511 393.193 171.314 393.193 150.222 372.093Z",
                        fill: "#FAFAFA",
                        opacity: "0.4"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M188.381 285.296H188.408C190.79 285.296 192.721 287.228 192.721 289.611V317.308C192.721 319.691 190.79 321.622 188.408 321.622H188.381C185.999 321.622 184.068 319.691 184.068 317.308V289.611C184.068 287.228 185.999 285.296 188.381 285.296Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M185.821 295.149C185.821 293.72 186.979 292.561 188.408 292.561C189.838 292.561 190.996 293.72 190.996 295.149V311.768C190.996 313.197 189.838 314.356 188.408 314.356C186.979 314.356 185.821 313.197 185.821 311.768V295.149Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M188.381 346.174H188.408C190.79 346.174 192.721 348.106 192.721 350.488V378.186C192.721 380.569 190.79 382.5 188.408 382.5H188.381C185.999 382.5 184.068 380.569 184.068 378.186V350.488C184.068 348.106 185.999 346.174 188.381 346.174Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M185.821 356.028C185.821 354.598 186.979 353.439 188.408 353.439C189.838 353.439 190.996 354.598 190.996 356.028V372.647C190.996 374.076 189.838 375.235 188.408 375.235C186.979 375.235 185.821 374.076 185.821 372.647V356.028Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M204.937 329.333L228.895 315.498C230.954 314.301 231.678 311.657 230.481 309.597C229.285 307.537 226.641 306.813 224.582 308.01L200.624 321.845C198.565 323.042 197.841 325.686 199.038 327.746C200.234 329.806 202.878 330.53 204.937 329.333Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M208.86 325.074L223.246 316.779C224.498 316.055 224.916 314.468 224.192 313.243C223.469 311.991 221.883 311.573 220.658 312.297L206.273 320.592C205.02 321.316 204.603 322.903 205.326 324.127C206.05 325.38 207.636 325.798 208.86 325.074Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M152.235 359.786L176.193 345.951C178.252 344.754 178.975 342.11 177.779 340.05C176.582 337.99 173.939 337.266 171.88 338.463L147.922 352.298C145.863 353.495 145.139 356.139 146.336 358.199C147.532 360.259 150.176 360.983 152.235 359.786Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M156.158 355.499L170.544 347.204C171.796 346.48 172.214 344.893 171.49 343.668C170.767 342.416 169.181 341.998 167.956 342.722L153.57 351.017C152.318 351.741 151.901 353.328 152.624 354.552C153.348 355.805 154.934 356.223 156.158 355.499Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M230.481 358.199C231.678 356.139 230.954 353.495 228.895 352.298L204.937 338.463C202.878 337.266 200.234 337.99 199.038 340.05C197.841 342.11 198.565 344.754 200.624 345.951L224.582 359.786C226.641 360.983 229.285 360.259 230.481 358.199Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M224.192 354.553C224.916 353.3 224.471 351.714 223.246 351.018L208.86 342.723C207.608 341.999 206.022 342.444 205.326 343.669C204.603 344.922 205.048 346.508 206.273 347.204L220.658 355.5C221.911 356.223 223.497 355.778 224.192 354.553Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M177.779 327.746C178.975 325.686 178.252 323.042 176.193 321.845L152.235 308.01C150.176 306.813 147.532 307.537 146.336 309.597C145.139 311.657 145.863 314.301 147.922 315.498L171.88 329.333C173.939 330.53 176.582 329.806 177.779 327.746Z",
                            fill: "#FAFAFA",
                            opacity: "0.3"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M171.49 324.127C172.214 322.875 171.769 321.288 170.544 320.592L156.158 312.297C154.906 311.573 153.32 312.018 152.624 313.243C151.901 314.496 152.346 316.083 153.57 316.778L167.956 325.074C169.209 325.797 170.795 325.352 171.49 324.127Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M181.146 333.897C181.146 337.906 184.401 341.162 188.408 341.162C192.415 341.162 195.671 337.906 195.671 333.897C195.671 329.889 192.415 326.632 188.408 326.632C184.401 326.632 181.146 329.889 181.146 333.897Z",
                        fill: "#263238"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M950.64 165.348L886.363 146.002C885.417 145.724 884.582 145.195 883.914 144.471L864.686 123.733C861.57 120.365 863.657 114.881 868.22 114.463L935.392 108.117C937.924 107.866 940.289 109.397 941.124 111.791L957.457 158.222C958.96 162.481 954.981 166.657 950.64 165.348Z",
                        fill: "black",
                        opacity: "0.3"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M289.75 122.842C309.284 107.783 339.363 86.4322 374.786 67.5869L360.539 143.831L348.657 145.306C344.65 145.807 340.588 145.585 336.664 144.694L292.338 134.506C286.912 133.253 285.353 126.238 289.778 122.842H289.75Z",
                        fill: "black"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M598.087 24.6915L583.813 116.078L546.721 120.699L572.989 24.0791C581.225 24.1904 589.601 24.4131 598.087 24.6915Z",
                        fill: "black"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M738.135 49.7163L696.062 94.171C695.895 94.338 695.7 94.5329 695.533 94.6999L699.679 31.2607C710.865 32.2629 721.829 33.2928 732.43 34.3784C739.971 35.13 743.338 44.2325 738.135 49.7163Z",
                        fill: "black"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M359.676 130.024L382.159 129.439L377.179 93.6973L355.836 98.4016C348.518 100.016 343.287 106.502 343.287 114.018C343.287 123.009 350.688 130.246 359.676 129.996V130.024Z",
                        fill: "#3381D9"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M371.085 95.0334L377.179 93.6973L382.159 129.439L375.899 129.606L371.085 95.0334Z",
                        fill: "black",
                        opacity: "0.3"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                    id: "clip0_402_10331",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                        fill: "white",
                        height: "422",
                        transform: "matrix(-1 0 0 1 966 0)",
                        width: "966"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/human-circle.tsx


function HumanCircle({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 577 577",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M577 288.5C577 447.834 447.834 577 288.5 577C129.166 577 0 447.834 0 288.5C0 129.166 129.166 0 288.5 0C447.834 0 577 129.166 577 288.5ZM83.2968 288.5C83.2968 401.831 175.169 493.703 288.5 493.703C401.831 493.703 493.703 401.831 493.703 288.5C493.703 175.169 401.831 83.2968 288.5 83.2968C175.169 83.2968 83.2968 175.169 83.2968 288.5Z",
                fill: "url(#paint0_linear_397_10015)"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "288.5",
                cy: "288.5",
                fill: "#FAFAFA",
                r: "210.5"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                cx: "288",
                cy: "289",
                fill: "url(#paint1_linear_397_10015)",
                r: "170"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                height: "499",
                id: "mask0_397_10015",
                maskUnits: "userSpaceOnUse",
                style: {
                    maskType: "alpha"
                },
                width: "460",
                x: "57",
                y: "0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ellipse", {
                    cx: "287",
                    cy: "249.5",
                    fill: "url(#paint2_linear_397_10015)",
                    rx: "230",
                    ry: "249.5"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                mask: "url(#mask0_397_10015)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M348.575 402.931L359.853 428.935C363.515 437.386 368.974 444.955 375.839 451.122C406.733 478.79 484.833 587.702 485.683 633.609C486.729 689.077 316.047 867.812 316.047 867.812L249.421 793.192L383.587 633.414L267.074 522.348C267.074 522.348 213.885 503.62 235.298 408.608",
                        fill: "#355ABA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M268.97 792.834L394.572 637.003C399.181 631.946 398.56 624.115 393.231 619.808L286.46 512.822C286.46 512.822 233.239 493.343 254.619 394.709",
                        stroke: "#15489B",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M268.611 804.318L401.895 640.755C408.433 633.577 407.583 622.385 399.999 616.284C399.999 616.284 286.101 504.762 285.676 504.599C280.02 502.152 245.367 482.379 265.44 389.749",
                        stroke: "#15489B",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M196.885 420.484C196.885 420.484 192.701 479.214 218.593 534.682C244.517 590.149 349.326 912.283 349.326 912.283L442.301 872.38L329.515 489.003C329.515 489.003 325.788 441.17 306.402 378.166",
                        fill: "#355ABA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M375.382 901.125L246.479 534.16C246.479 534.16 220.26 488.481 220.26 453.667",
                        stroke: "#1B5ABF",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M368.091 904.225L236.05 534.128C236.05 534.128 209.831 488.449 209.831 453.635",
                        stroke: "#1B5ABF",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M227.714 494.484C227.714 494.484 254.063 481.335 260.896 451.415",
                        stroke: "#1B5ABF",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M329.744 499.15C329.744 499.15 340.238 487.143 339.225 477.322C336.446 450.274 329.744 416.015 329.744 416.015",
                        stroke: "#00276F",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M460.543 246.349L437.267 222.759C437.267 222.759 459.039 168.173 461.491 168.695C466.493 169.772 457.47 192.97 457.47 192.97C457.47 192.97 470.253 168.14 472.018 169.772C475.222 172.708 466.035 198.125 466.035 198.125C466.035 198.125 477.183 173.557 479.341 176.134C481.499 178.712 471.364 216.886 471.364 216.886L460.51 246.349H460.543Z",
                        fill: "#FFCFA5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M432.788 225.304L437.136 216.886C437.136 216.886 438.509 202.529 442.17 192.056C445.865 181.582 448.578 176.558 450.507 176.558C452.436 176.558 450.507 192.839 450.507 192.839C450.507 192.839 453.841 206.836 449.003 215.939",
                        fill: "#FFCFA5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M461.883 222.106L445.668 207C444.982 206.38 444.72 205.336 445.08 204.455L463.485 156.198L464.924 156.557C465.251 156.655 465.643 156.72 465.937 156.981L483.689 172.414C484.375 173.034 484.637 174.078 484.277 174.959L465.872 221.519C465.61 222.204 465.022 222.628 464.368 222.661L461.851 222.106H461.883Z",
                        fill: "#0A172B"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M461.393 221.813L443.838 206.543C443.151 205.923 442.89 204.879 443.249 203.998L461.753 157.21C462.145 156.198 463.322 155.872 464.139 156.557L481.891 171.99C482.577 172.61 482.839 173.654 482.479 174.535L464.074 221.095C463.616 222.237 462.308 222.596 461.426 221.813H461.393Z",
                        fill: "#00276F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M444.589 200.636L465.087 218.484L481.171 177.732L460.674 159.917L444.589 200.636Z",
                        fill: "#8DADE0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M453.743 211.535C453.58 212.188 453.057 212.481 452.599 212.22C452.109 211.959 451.847 211.209 452.011 210.556C452.174 209.904 452.697 209.61 453.155 209.871C453.645 210.132 453.907 210.883 453.743 211.535Z",
                        fill: "#8DADE0"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M469.795 164.42L473.391 167.585",
                        stroke: "#8DADE0",
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.55",
                        style: {
                            mixBlendMode: "multiply"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M459.301 172.382C459.137 173.002 458.647 173.296 458.222 173.035C457.797 172.774 457.535 172.089 457.666 171.469C457.797 170.849 458.32 170.555 458.745 170.816C459.203 171.077 459.431 171.762 459.301 172.382Z",
                            fill: "#8DADE0"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M475.974 179.168L465.185 169.771C464.041 168.76 462.308 169.249 461.72 170.718L460.38 174.144L459.301 174.339L472.508 185.759C473.652 186.771 475.385 186.281 475.974 184.813L476.791 182.725C477.281 181.485 476.954 180.017 475.974 179.168V179.168Z",
                        fill: "white",
                        opacity: "0.51"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M463.78 172.055L474.666 181.484",
                        stroke: "#8DADE0",
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M462.766 174.633L469.01 180.049",
                        stroke: "#8DADE0",
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.55",
                        style: {
                            mixBlendMode: "multiply"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M448.774 197.408C448.611 198.027 448.12 198.321 447.695 198.06C447.27 197.799 447.009 197.114 447.14 196.494C447.27 195.874 447.793 195.58 448.218 195.841C448.676 196.102 448.905 196.788 448.774 197.408Z",
                            fill: "#8DADE0"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M465.447 204.194L454.659 194.797C453.514 193.785 451.782 194.275 451.193 195.743L449.853 199.169L448.774 199.365L461.982 210.785C463.126 211.796 464.858 211.307 465.447 209.838L466.264 207.75C466.755 206.51 466.428 205.042 465.447 204.194V204.194Z",
                        fill: "white",
                        opacity: "0.51"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M453.253 197.048L464.139 206.51",
                        stroke: "#8DADE0",
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M452.24 199.658L458.516 205.074",
                        stroke: "#8DADE0",
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                        opacity: "0.55",
                        style: {
                            mixBlendMode: "multiply"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            d: "M471.658 199.072C471.495 199.692 471.004 199.985 470.579 199.724C470.122 199.463 469.893 198.778 470.024 198.158C470.154 197.538 470.677 197.244 471.102 197.505C471.527 197.767 471.789 198.452 471.658 199.072Z",
                            fill: "#8DADE0"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M469.664 190.49L457.993 180.343C457.012 179.495 455.574 179.919 455.084 181.159L453.809 184.389C453.449 185.27 453.711 186.314 454.397 186.901L468.781 199.333L468.422 197.603L470.252 193.035C470.612 192.154 470.383 191.11 469.697 190.523L469.664 190.49Z",
                        fill: "white",
                        opacity: "0.51"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M457.012 182.953L467.899 192.383",
                        stroke: "#8DADE0",
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M455.999 185.531L462.243 190.947",
                        stroke: "#8DADE0",
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M463.158 191.828L465.578 193.916",
                        stroke: "#8DADE0",
                        strokeLinecap: "round",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.25"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M481.629 165.171L485.65 169.184L444.688 217.604L440.634 213.591L481.629 165.171Z",
                        fill: "url(#paint3_linear_397_10015)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M481.269 160.669L482.283 161.68L441.32 210.1L440.307 209.089L481.269 160.669Z",
                        fill: "url(#paint4_linear_397_10015)"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M364.593 257.345L387.575 294.182L437.136 216.919C437.136 216.919 472.508 220.214 468.454 237.703C448.807 287.232 432.788 362.504 394.146 366.322C351.68 370.498 297.575 291.278 297.575 291.278",
                        fill: "#FFCFA5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M387.576 294.182C387.576 294.182 377.31 308.375 369.693 329.354",
                        stroke: "#D34F9B",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M464.433 247.523C464.433 247.523 478.687 212.84 480.452 206.249C482.185 199.658 486.762 181.484 483.82 181.484C480.877 181.484 474.012 198.908 473.26 201.812C467.441 204.911 459.17 210.523 459.268 220.605",
                        fill: "#FFCFA5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M275.574 159.917C275.574 159.917 324.088 164.42 377.605 272.679C367.111 287.916 312.646 320.054 297.576 319.761C281.262 295.975 265.93 235.059 265.93 235.059",
                        fill: "#3574BA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M323.402 254.93C308.331 195.515 285.643 166.965 285.643 166.965L235.886 152.707L195.61 202.628C155.138 325.406 193.845 460.453 193.845 460.453C221.731 472.329 337.328 448.185 365.509 420.059C365.509 420.059 336.152 304.981 323.435 254.93H323.402Z",
                        fill: "#3574BA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M335.759 304.099C335.759 304.099 314.641 210.523 303.82 192.871",
                        stroke: "#225BAF",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M147.031 246.349C147.031 246.349 122.643 311.736 129.083 350.106C138.956 409.064 234.154 465.38 234.154 465.38C234.154 465.38 230.917 481.237 237.652 488.774C254.39 476.31 259.784 461.138 259.784 461.138L251.807 447.924C251.807 447.924 199.631 365.963 201.168 338.98C202.247 319.893 231.898 225.076 231.898 225.076",
                        fill: "#FFCFA5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M235.887 152.707C235.887 152.707 183.024 167.487 160.63 207.522C133.464 256.039 128.102 297.281 128.102 297.281C151.248 320.381 197.899 330.398 223.496 325.112L241.738 232.319",
                        fill: "#3574BA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M223.529 325.08L240.332 239.595",
                        stroke: "#225BAF",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M290.678 125.821L263.838 79.3594L242.784 116.457L244.19 124.973L235.886 152.707C244.19 177.275 278.516 180.049 285.643 166.965L290.678 125.821",
                        fill: "#FFCFA5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M314.346 63.5032C318.727 80.0455 319.904 136.165 306.598 142.104C293.293 148.009 266.453 142.365 258.607 132.348C251.807 123.636 245.367 76.9459 257.594 65.5588C269.82 54.1717 308.168 40.3375 314.314 63.5358L314.346 63.5032Z",
                        fill: "#FFCFA5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M273.743 74.3674C286.264 76.5208 297.151 73.0623 306.86 69.8974C316.569 66.7325 325.69 60.5984 330.398 51.5605C334.321 44.0235 334.582 33.3868 325.004 29.2431C322.715 28.2643 320.165 27.8727 317.681 28.0359C309.704 28.5906 303.362 33.4195 297.314 38.1179C299.831 25.6214 276.13 31.3313 271.193 35.8339C269.657 37.2696 268.611 39.0641 266.747 40.2061C261.124 43.5667 253.965 43.7951 247.982 46.3727C240.594 49.5702 234.742 56.1284 232.389 63.8286C230.427 70.2563 228.041 80.9256 233.271 88.6584C235.788 92.3453 238.208 96.3912 238.927 100.763L243.079 118.611C243.079 118.611 251.48 112.607 252.396 111.889C255.698 109.279 256.94 105.886 259.588 102.688C266.355 94.4987 270.932 82.6875 273.678 74.3021L273.743 74.3674Z",
                        fill: "#333333"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M265.472 98.5451C263.871 95.6086 261.746 92.2806 258.64 92.0196C257.038 91.8564 255.501 92.6395 254.357 93.7488C248.407 99.3934 247.95 110.291 254.194 116.001C256.809 118.383 260.438 119.46 262.857 116.164L265.963 100.633C266.192 99.9807 265.832 99.1977 265.472 98.5777V98.5451Z",
                        fill: "#FFCFA5"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M288.389 145.268C288.389 145.268 266.911 144.485 257.888 131.205",
                        stroke: "#D34F9B",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M303.264 90.5186C303.264 90.5186 311.993 105.364 309.279 109.443C306.566 113.521 299.406 111.074 299.406 111.074",
                        stroke: "#D34F9B",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M292.639 89.9956C292.999 91.0397 292.901 92.4753 292.966 93.3237C293.064 94.8572 291.429 95.6729 290.056 95.2161C287.474 94.3677 287.964 88.299 291.135 88.6579C291.953 88.7558 292.41 89.2778 292.639 89.9956V89.9956Z",
                        fill: "#00276F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M314.052 89.9956C314.412 91.0397 314.314 92.4753 314.379 93.3237C314.477 94.8572 312.842 95.6729 311.469 95.2161C308.887 94.3677 309.377 88.299 312.548 88.6579C313.366 88.7558 313.823 89.2778 314.052 89.9956V89.9956Z",
                        fill: "#00276F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M307.448 122.396L285.349 116.099C285.349 116.099 284.466 132.902 297.837 135.382C305.945 136.883 307.448 122.363 307.448 122.363V122.396Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M294.372 81.8715C290.155 81.9041 285.578 82.8829 281.851 84.5143C281.426 84.2859 280.314 82.263 280.968 81.0884C281.459 80.1422 288.128 77.8583 294.11 77.9888C294.11 77.9888 295.222 81.3494 294.372 81.8715Z",
                        fill: "#00276F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M306.239 81.6429C309.279 81.6755 312.385 82.5891 314.771 84.1226C315.131 83.8942 315.883 82.2302 315.654 81.1208C315.491 80.2399 311.11 78.0538 306.762 78.1843C306.762 78.1843 305.748 81.1208 306.239 81.6429V81.6429Z",
                        fill: "#00276F"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M251.578 112.607C251.578 112.607 255.926 119.1 261.778 117.273",
                        stroke: "#D34F9B",
                        strokeMiterlimit: "10",
                        strokeWidth: "0.75"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        gradientUnits: "userSpaceOnUse",
                        id: "paint0_linear_397_10015",
                        x1: "861.18",
                        x2: "112.328",
                        y1: "-182.413",
                        y2: "1043.59",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#3574BA"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#8CC14E"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        gradientUnits: "userSpaceOnUse",
                        id: "paint1_linear_397_10015",
                        x1: "458",
                        x2: "118",
                        y1: "119",
                        y2: "459",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#96E43B"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#3B93F4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        gradientUnits: "userSpaceOnUse",
                        id: "paint2_linear_397_10015",
                        x1: "517",
                        x2: "19.6478",
                        y1: "1.48714e-05",
                        y2: "458.481",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "#8CC14E"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "1",
                                stopColor: "#3574BA"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        gradientUnits: "userSpaceOnUse",
                        id: "paint3_linear_397_10015",
                        x1: "484.941",
                        x2: "441.499",
                        y1: "168.26",
                        y2: "214.573",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.6"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.89",
                                stopColor: "white",
                                stopOpacity: "0.1"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        gradientUnits: "userSpaceOnUse",
                        id: "paint4_linear_397_10015",
                        x1: "483.057",
                        x2: "439.7",
                        y1: "162.288",
                        y2: "208.521",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                stopColor: "white",
                                stopOpacity: "0.6"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                                offset: "0.89",
                                stopColor: "white",
                                stopOpacity: "0.1"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/stars.tsx


function Stars({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ _jsx("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 134 134",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M50.1187 12.6211C55.9175 -3.05003 78.0825 -3.05003 83.8813 12.6211L91.1368 32.2286C92.9599 37.1555 96.8445 41.0401 101.771 42.8633L121.379 50.1187C137.05 55.9175 137.05 78.0825 121.379 83.8813L101.771 91.1368C96.8445 92.9599 92.9599 96.8445 91.1367 101.771L83.8813 121.379C78.0825 137.05 55.9175 137.05 50.1187 121.379L42.8632 101.771C41.0401 96.8445 37.1555 92.9599 32.2286 91.1367L12.6211 83.8813C-3.05003 78.0825 -3.05003 55.9175 12.6211 50.1187L32.2286 42.8632C37.1555 41.0401 41.0401 37.1555 42.8633 32.2286L50.1187 12.6211Z",
            fill: "#1D8EDB"
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/twitter.tsx


function Twitter({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 24 25",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M21.75 6.55196C21.0328 6.86134 20.2523 7.084 19.4484 7.17072C20.2831 6.67486 20.9081 5.89149 21.2062 4.96759C20.423 5.4335 19.565 5.76021 18.6703 5.93321C18.2964 5.53343 17.8441 5.21495 17.3417 4.99761C16.8392 4.78026 16.2974 4.66872 15.75 4.66993C13.5352 4.66993 11.7539 6.46525 11.7539 8.66837C11.7539 8.97775 11.7914 9.28712 11.8524 9.58478C8.53595 9.41134 5.57815 7.82697 3.61174 5.40118C3.25344 6.01317 3.06568 6.70999 3.06799 7.41915C3.06799 8.80665 3.77346 10.0301 4.84924 10.7496C4.21527 10.7247 3.59614 10.5504 3.04221 10.241V10.2902C3.04221 12.2332 4.41565 13.8434 6.24611 14.2137C5.90242 14.303 5.54886 14.3486 5.19377 14.3496C4.93361 14.3496 4.68752 14.3238 4.43908 14.2887C4.94533 15.8731 6.41955 17.0239 8.17502 17.0614C6.80158 18.1371 5.08127 18.7699 3.2133 18.7699C2.87815 18.7699 2.56877 18.7582 2.24768 18.7207C4.01955 19.8574 6.12189 20.5137 8.38595 20.5137C15.7359 20.5137 19.7578 14.4246 19.7578 9.13947C19.7578 8.96603 19.7578 8.79259 19.7461 8.61915C20.5242 8.04962 21.2062 7.34415 21.75 6.55196Z",
            fill: "white"
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/youtube.tsx


function Youtube({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 24 24",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M17.812 5.01699H6.145C3.855 5.01699 2 6.85199 2 9.11599V14.884C2 17.148 3.856 18.984 6.145 18.984H17.812C20.102 18.984 21.957 17.148 21.957 14.884V9.11599C21.957 6.85199 20.101 5.01599 17.812 5.01599V5.01699ZM15.009 12.28L9.552 14.855C9.51872 14.871 9.48192 14.8784 9.44503 14.8763C9.40815 14.8743 9.37237 14.863 9.34103 14.8434C9.3097 14.8239 9.28382 14.7967 9.2658 14.7645C9.24779 14.7322 9.23822 14.6959 9.238 14.659V9.34999C9.23867 9.31286 9.24872 9.27651 9.26722 9.24432C9.28573 9.21212 9.31208 9.18513 9.34382 9.16587C9.37556 9.1466 9.41167 9.13568 9.44877 9.13413C9.48587 9.13258 9.52276 9.14044 9.556 9.15699L15.014 11.892C15.0504 11.9101 15.0809 11.9381 15.102 11.9728C15.1232 12.0075 15.1341 12.0474 15.1336 12.0881C15.1331 12.1287 15.1211 12.1683 15.0991 12.2025C15.077 12.2366 15.0458 12.2638 15.009 12.281V12.28Z",
            fill: "white"
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/fb.tsx


function Fb({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 24 24",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            clipRule: "evenodd",
            d: "M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z",
            fill: "white",
            fillRule: "evenodd"
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/card.tsx


function Card({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 48 48",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M38 30C33.58 30 30 33.58 30 38C30 39.5 30.42 40.92 31.16 42.12C32.54 44.44 35.08 46 38 46C40.92 46 43.46 44.44 44.84 42.12C45.58 40.92 46 39.5 46 38C46 33.58 42.42 30 38 30ZM42.14 37.14L37.88 41.08C37.6 41.34 37.22 41.48 36.86 41.48C36.48 41.48 36.1 41.34 35.8 41.04L33.82 39.06C33.24 38.48 33.24 37.52 33.82 36.94C34.4 36.36 35.36 36.36 35.94 36.94L36.9 37.9L40.1 34.94C40.7 34.38 41.66 34.42 42.22 35.02C42.78 35.62 42.74 36.56 42.14 37.14Z",
                fill: fill
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M44 15.1V16C44 17.1 43.1 18 42 18H6C4.9 18 4 17.1 4 16V15.08C4 10.5 7.7 6.80005 12.28 6.80005H35.7C40.28 6.80005 44 10.52 44 15.1Z",
                fill: fill
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M4 23V32.92C4 37.5 7.7 41.2 12.28 41.2H24.8C25.96 41.2 26.96 40.22 26.86 39.06C26.58 36 27.56 32.68 30.28 30.04C31.4 28.94 32.78 28.1 34.28 27.62C36.78 26.82 39.2 26.92 41.34 27.64C42.64 28.08 44 27.14 44 25.76V22.98C44 21.88 43.1 20.98 42 20.98H6C4.9 21 4 21.9 4 23ZM16 34.5H12C11.18 34.5 10.5 33.82 10.5 33C10.5 32.18 11.18 31.5 12 31.5H16C16.82 31.5 17.5 32.18 17.5 33C17.5 33.82 16.82 34.5 16 34.5Z",
                fill: fill
            })
        ]
    });
}

// EXTERNAL MODULE: ./components/ui/icons/wa.tsx
var wa = __webpack_require__(9073);
;// CONCATENATED MODULE: ./components/ui/icons/instagram.tsx


function Instagram({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 24 24",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            clipRule: "evenodd",
            d: "M7.465 1.066C8.638 1.012 9.012 1 12 1C14.988 1 15.362 1.013 16.534 1.066C17.706 1.119 18.506 1.306 19.206 1.577C19.939 1.854 20.604 2.287 21.154 2.847C21.714 3.396 22.146 4.06 22.422 4.794C22.694 5.494 22.88 6.294 22.934 7.464C22.988 8.639 23 9.013 23 12C23 14.988 22.987 15.362 22.934 16.535C22.881 17.705 22.694 18.505 22.422 19.205C22.146 19.9391 21.7133 20.6042 21.154 21.154C20.604 21.714 19.939 22.146 19.206 22.422C18.506 22.694 17.706 22.88 16.536 22.934C15.362 22.988 14.988 23 12 23C9.012 23 8.638 22.987 7.465 22.934C6.295 22.881 5.495 22.694 4.795 22.422C4.06092 22.146 3.39582 21.7133 2.846 21.154C2.28638 20.6047 1.85331 19.9399 1.577 19.206C1.306 18.506 1.12 17.706 1.066 16.536C1.012 15.361 1 14.987 1 12C1 9.012 1.013 8.638 1.066 7.466C1.119 6.294 1.306 5.494 1.577 4.794C1.85372 4.06008 2.28712 3.39531 2.847 2.846C3.39604 2.2865 4.06047 1.85344 4.794 1.577C5.494 1.306 6.294 1.12 7.464 1.066H7.465ZM16.445 3.046C15.285 2.993 14.937 2.982 12 2.982C9.063 2.982 8.715 2.993 7.555 3.046C6.482 3.095 5.9 3.274 5.512 3.425C4.999 3.625 4.632 3.862 4.247 4.247C3.88205 4.60205 3.60118 5.03428 3.425 5.512C3.274 5.9 3.095 6.482 3.046 7.555C2.993 8.715 2.982 9.063 2.982 12C2.982 14.937 2.993 15.285 3.046 16.445C3.095 17.518 3.274 18.1 3.425 18.488C3.601 18.965 3.882 19.398 4.247 19.753C4.602 20.118 5.035 20.399 5.512 20.575C5.9 20.726 6.482 20.905 7.555 20.954C8.715 21.007 9.062 21.018 12 21.018C14.938 21.018 15.285 21.007 16.445 20.954C17.518 20.905 18.1 20.726 18.488 20.575C19.001 20.375 19.368 20.138 19.753 19.753C20.118 19.398 20.399 18.965 20.575 18.488C20.726 18.1 20.905 17.518 20.954 16.445C21.007 15.285 21.018 14.937 21.018 12C21.018 9.063 21.007 8.715 20.954 7.555C20.905 6.482 20.726 5.9 20.575 5.512C20.375 4.999 20.138 4.632 19.753 4.247C19.3979 3.88207 18.9657 3.60121 18.488 3.425C18.1 3.274 17.518 3.095 16.445 3.046ZM10.595 15.391C11.3797 15.7176 12.2534 15.7617 13.0669 15.5157C13.8805 15.2697 14.5834 14.7489 15.0556 14.0422C15.5278 13.3356 15.7401 12.4869 15.656 11.6411C15.572 10.7953 15.197 10.005 14.595 9.405C14.2112 9.02148 13.7472 8.72781 13.2363 8.54515C12.7255 8.36248 12.1804 8.29536 11.6405 8.34862C11.1006 8.40187 10.5792 8.57418 10.1138 8.85313C9.64845 9.13208 9.25074 9.51074 8.9493 9.96185C8.64786 10.413 8.45019 10.9253 8.37052 11.462C8.29084 11.9986 8.33115 12.5463 8.48854 13.0655C8.64593 13.5847 8.91648 14.0626 9.28072 14.4647C9.64496 14.8668 10.0938 15.1832 10.595 15.391ZM8.002 8.002C8.52702 7.47697 9.15032 7.0605 9.8363 6.77636C10.5223 6.49222 11.2575 6.34597 12 6.34597C12.7425 6.34597 13.4777 6.49222 14.1637 6.77636C14.8497 7.0605 15.473 7.47697 15.998 8.002C16.523 8.52702 16.9395 9.15032 17.2236 9.8363C17.5078 10.5223 17.654 11.2575 17.654 12C17.654 12.7425 17.5078 13.4777 17.2236 14.1637C16.9395 14.8497 16.523 15.473 15.998 15.998C14.9377 17.0583 13.4995 17.654 12 17.654C10.5005 17.654 9.06234 17.0583 8.002 15.998C6.94166 14.9377 6.34597 13.4995 6.34597 12C6.34597 10.5005 6.94166 9.06234 8.002 8.002ZM18.908 7.188C19.0381 7.06527 19.1423 6.91768 19.2143 6.75397C19.2863 6.59027 19.3248 6.41377 19.3274 6.23493C19.33 6.05609 19.2967 5.87855 19.2295 5.71281C19.1622 5.54707 19.0624 5.39651 18.936 5.27004C18.8095 5.14357 18.6589 5.04376 18.4932 4.97652C18.3275 4.90928 18.1499 4.87598 17.9711 4.87858C17.7922 4.88119 17.6157 4.91965 17.452 4.9917C17.2883 5.06374 17.1407 5.1679 17.018 5.298C16.7793 5.55103 16.6486 5.88712 16.6537 6.23493C16.6588 6.58274 16.7992 6.91488 17.0452 7.16084C17.2911 7.40681 17.6233 7.54723 17.9711 7.5523C18.3189 7.55737 18.655 7.42669 18.908 7.188Z",
            fill: "#FAFAFA",
            fillRule: "evenodd"
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/calendar.tsx


function Calendar({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 48 48",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16 11.5C15.18 11.5 14.5 10.82 14.5 10V4C14.5 3.18 15.18 2.5 16 2.5C16.82 2.5 17.5 3.18 17.5 4V10C17.5 10.82 16.82 11.5 16 11.5Z",
                fill: "#333333"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M32 11.5C31.18 11.5 30.5 10.82 30.5 10V4C30.5 3.18 31.18 2.5 32 2.5C32.82 2.5 33.5 3.18 33.5 4V10C33.5 10.82 32.82 11.5 32 11.5Z",
                fill: "#333333"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17 29C16.74 29 16.48 28.94 16.24 28.84C15.98 28.74 15.78 28.6 15.58 28.42C15.22 28.04 15 27.54 15 27C15 26.74 15.06 26.48 15.16 26.24C15.26 26 15.4 25.78 15.58 25.58C15.78 25.4 15.98 25.26 16.24 25.16C16.96 24.86 17.86 25.02 18.42 25.58C18.78 25.96 19 26.48 19 27C19 27.12 18.98 27.26 18.96 27.4C18.94 27.52 18.9 27.64 18.84 27.76C18.8 27.88 18.74 28 18.66 28.12C18.6 28.22 18.5 28.32 18.42 28.42C18.04 28.78 17.52 29 17 29Z",
                fill: "#333333"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M24 29C23.74 29 23.48 28.94 23.24 28.84C22.98 28.74 22.78 28.6 22.58 28.42C22.22 28.04 22 27.54 22 27C22 26.74 22.06 26.48 22.16 26.24C22.26 26 22.4 25.78 22.58 25.58C22.78 25.4 22.98 25.26 23.24 25.16C23.96 24.84 24.86 25.02 25.42 25.58C25.78 25.96 26 26.48 26 27C26 27.12 25.98 27.26 25.96 27.4C25.94 27.52 25.9 27.64 25.84 27.76C25.8 27.88 25.74 28 25.66 28.12C25.6 28.22 25.5 28.32 25.42 28.42C25.04 28.78 24.52 29 24 29Z",
                fill: "#333333"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M31 29C30.74 29 30.48 28.94 30.24 28.84C29.98 28.74 29.78 28.6 29.58 28.42C29.5 28.32 29.42 28.22 29.34 28.12C29.26 28 29.2 27.88 29.16 27.76C29.1 27.64 29.06 27.52 29.04 27.4C29.02 27.26 29 27.12 29 27C29 26.48 29.22 25.96 29.58 25.58C29.78 25.4 29.98 25.26 30.24 25.16C30.98 24.84 31.86 25.02 32.42 25.58C32.78 25.96 33 26.48 33 27C33 27.12 32.98 27.26 32.96 27.4C32.94 27.52 32.9 27.64 32.84 27.76C32.8 27.88 32.74 28 32.66 28.12C32.6 28.22 32.5 28.32 32.42 28.42C32.04 28.78 31.52 29 31 29Z",
                fill: "#333333"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M17 36C16.74 36 16.48 35.94 16.24 35.84C16 35.74 15.78 35.6 15.58 35.42C15.22 35.04 15 34.52 15 34C15 33.74 15.06 33.48 15.16 33.24C15.26 32.98 15.4 32.76 15.58 32.58C16.32 31.84 17.68 31.84 18.42 32.58C18.78 32.96 19 33.48 19 34C19 34.52 18.78 35.04 18.42 35.42C18.04 35.78 17.52 36 17 36Z",
                fill: "#333333"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M24 36C23.48 36 22.96 35.78 22.58 35.42C22.22 35.04 22 34.52 22 34C22 33.74 22.06 33.48 22.16 33.24C22.26 32.98 22.4 32.76 22.58 32.58C23.32 31.84 24.68 31.84 25.42 32.58C25.6 32.76 25.74 32.98 25.84 33.24C25.94 33.48 26 33.74 26 34C26 34.52 25.78 35.04 25.42 35.42C25.04 35.78 24.52 36 24 36Z",
                fill: "#333333"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M31 36.0001C30.48 36.0001 29.96 35.7801 29.58 35.4201C29.4 35.2401 29.26 35.0201 29.16 34.7601C29.06 34.5201 29 34.2601 29 34.0001C29 33.7401 29.06 33.4801 29.16 33.2401C29.26 32.9801 29.4 32.7601 29.58 32.5801C30.04 32.1201 30.74 31.9 31.38 32.04C31.52 32.06 31.64 32.1 31.76 32.16C31.88 32.2 32 32.2601 32.12 32.3401C32.22 32.4001 32.32 32.5001 32.42 32.5801C32.78 32.9601 33 33.4801 33 34.0001C33 34.5201 32.78 35.0401 32.42 35.4201C32.04 35.7801 31.52 36.0001 31 36.0001Z",
                fill: "#333333"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M41 19.6799H7C6.18 19.6799 5.5 18.9999 5.5 18.1799C5.5 17.3599 6.18 16.6799 7 16.6799H41C41.82 16.6799 42.5 17.3599 42.5 18.1799C42.5 18.9999 41.82 19.6799 41 19.6799Z",
                fill: "#333333"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M32 45.5H16C8.7 45.5 4.5 41.3 4.5 34V17C4.5 9.7 8.7 5.5 16 5.5H32C39.3 5.5 43.5 9.7 43.5 17V34C43.5 41.3 39.3 45.5 32 45.5ZM16 8.5C10.28 8.5 7.5 11.28 7.5 17V34C7.5 39.72 10.28 42.5 16 42.5H32C37.72 42.5 40.5 39.72 40.5 34V17C40.5 11.28 37.72 8.5 32 8.5H16Z",
                fill: "#333333"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/city.tsx


function City({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ _jsxs("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 945 601",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#clip0_383_6296)",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M850.311 595.398H787.714V595.872H850.311V595.398Z",
                        fill: "#3574BA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M626.006 600.526H609.582V600.999H626.006V600.526Z",
                        fill: "#3574BA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M785.824 577.819H749.555V578.292H785.824V577.819Z",
                        fill: "#3574BA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M180.779 580.998H99.1494V581.471H180.779V580.998Z",
                        fill: "#3574BA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M209.582 580.998H197.618V581.471H209.582V580.998Z",
                        fill: "#3574BA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M425.533 589.003H248.478V589.476H425.533V589.003Z",
                        fill: "#3574BA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M945 564.933H0V565.406H945V564.933Z",
                        fill: "#3574BA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M398.28 169.584H293.177V565.652H398.28V169.584Z",
                        fill: "#F0F0F0"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M300.756 139.138H206.105V565.653H300.756V139.138Z",
                        fill: "#E0ECF9"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M222.737 345.375H128.085V565.653H222.737V345.375Z",
                        fill: "#F0F0F0"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M487.544 290.197H382.442V565.653H487.544V290.197Z",
                        fill: "#E0ECF9"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M232.413 181.014H222.737V190.797H232.413V181.014Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M284.105 181.014H274.428V190.797H284.105V181.014Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M232.413 212.689H222.737V222.472H232.413V212.689Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M258.269 212.689H248.592V222.472H258.269V212.689Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M284.105 244.385H274.428V254.168H284.105V244.385Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M232.413 276.062H222.737V285.845H232.413V276.062Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M258.269 276.062H248.592V285.845H258.269V276.062Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M258.269 307.757H248.592V317.54H258.269V307.757Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M284.105 307.757H274.428V317.54H284.105V307.757Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M258.269 339.434H248.592V349.217H258.269V339.434Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M284.105 339.434H274.428V349.217H284.105V339.434Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M284.105 371.129H274.428V380.912H284.105V371.129Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M258.269 402.806H248.592V412.589H258.269V402.806Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M456.019 317.521H465.696V307.738H456.019V317.521Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M404.309 317.521H413.986V307.738H404.309V317.521Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M456.019 349.217H465.696V339.434H456.019V349.217Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M430.164 349.217H439.841V339.434H430.164V349.217Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M404.309 380.893H413.986V371.11H404.309V380.893Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M456.019 412.588H465.696V402.805H456.019V412.588Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M430.164 412.588H439.841V402.805H430.164V412.588Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M430.164 444.265H439.841V434.482H430.164V444.265Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M404.309 444.265H413.986V434.482H404.309V444.265Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M430.164 475.96H439.841V466.177H430.164V475.96Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M404.309 475.96H413.986V466.177H404.309V475.96Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M404.309 507.637H413.986V497.854H404.309V507.637Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M430.164 539.332H439.841V529.549H430.164V539.332Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M624.399 565.652H705.348V180.881H624.399V565.652Z",
                        fill: "#F0F0F0"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M699.527 565.634H772.424V151.305H699.527V565.634Z",
                        fill: "#E0ECF9"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M759.61 565.652H832.507V351.657H759.61V565.652Z",
                        fill: "#F0F0F0"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M555.641 565.652H636.59V298.068H555.641V565.652Z",
                        fill: "#E0ECF9"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M752.125 201.506H759.591V192.007H752.125V201.506Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M712.322 201.506H719.788V192.007H712.322V201.506Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M752.125 232.274H759.591V222.775H752.125V232.274Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M732.243 232.274H739.708V222.775H732.243V232.274Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M712.322 263.042H719.788V253.543H712.322V263.042Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M752.125 293.849H759.591V284.35H752.125V293.849Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M732.243 293.849H739.708V284.35H732.243V293.849Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M732.243 324.616H739.708V315.117H732.243V324.616Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M712.322 324.616H719.788V315.117H712.322V324.616Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M732.243 355.385H739.708V345.886H732.243V355.385Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M712.322 355.385H719.788V345.886H712.322V355.385Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M712.322 386.19H719.788V376.691H712.322V386.19Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M732.243 416.959H739.708V407.46H732.243V416.959Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M579.965 315.117H572.5V324.616H579.965V315.117Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M619.769 315.117H612.303V324.616H619.769V315.117Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M579.965 345.904H572.5V355.403H579.965V345.904Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M599.867 345.904H592.402V355.403H599.867V345.904Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M619.769 376.673H612.303V386.172H619.769V376.673Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M579.965 407.459H572.5V416.958H579.965V407.459Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M599.867 407.459H592.402V416.958H599.867V407.459Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M599.867 438.246H592.402V447.745H599.867V438.246Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M619.769 438.246H612.303V447.745H619.769V438.246Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M599.867 469.015H592.402V478.514H599.867V469.015Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M619.769 469.015H612.303V478.514H619.769V469.015Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M619.769 499.802H612.303V509.301H619.769V499.802Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M599.867 530.588H592.402V540.087H599.867V530.588Z",
                        fill: "#FAFAFA"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M319.448 64.885C319.448 64.885 142.695 90.0142 161.009 36.2552C179.323 -17.5039 216.594 36.2552 216.594 36.2552C216.594 36.2552 235.759 2.49728 256.681 12.3559C277.603 22.2146 279.739 44.2783 279.739 44.2783C279.739 44.2783 285.938 26.2451 302.702 45.5462C319.448 64.8661 317.841 41.2886 319.448 64.8661V64.885Z",
                        fill: "#F0F0F0"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M670.553 58.3375C670.553 58.3375 554.186 74.8759 566.244 39.4906C578.302 4.10542 602.834 39.4906 602.834 39.4906C602.834 39.4906 615.46 17.2566 629.219 23.766C642.978 30.2753 644.396 44.789 644.396 44.789C644.396 44.789 648.478 32.9056 659.516 45.6216C670.553 58.3375 669.476 42.821 670.553 58.3375Z",
                        fill: "#F0F0F0"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M790.719 40.7209C790.719 40.7209 658.211 59.5678 671.952 19.2627C685.673 -21.0424 713.626 19.2627 713.626 19.2627C713.626 19.2627 727.99 -6.05572 743.677 1.34301C759.364 8.74174 760.971 25.2801 760.971 25.2801C760.971 25.2801 765.62 11.7504 778.189 26.2451C790.757 40.7398 789.529 23.0472 790.757 40.7209H790.719Z",
                        fill: "#F0F0F0"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("defs", {
                children: /*#__PURE__*/ _jsx("clipPath", {
                    id: "clip0_383_6296",
                    children: /*#__PURE__*/ _jsx("rect", {
                        fill: "white",
                        height: "601",
                        width: "945"
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/linkedin.tsx


function Linkedin({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ _jsxs("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 24 25",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M4.98301 7.78909C6.19141 7.78909 7.17101 6.80949 7.17101 5.60109C7.17101 4.39269 6.19141 3.41309 4.98301 3.41309C3.77461 3.41309 2.79501 4.39269 2.79501 5.60109C2.79501 6.80949 3.77461 7.78909 4.98301 7.78909Z",
                fill: "white"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M9.237 9.44648V21.5855H13.006V15.5825C13.006 13.9985 13.304 12.4645 15.268 12.4645C17.205 12.4645 17.229 14.2755 17.229 15.6825V21.5865H21V14.9295C21 11.6595 20.296 9.14648 16.474 9.14648C14.639 9.14648 13.409 10.1535 12.906 11.1065H12.855V9.44648H9.237ZM3.095 9.44648H6.87V21.5855H3.095V9.44648Z",
                fill: "white"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/oval.tsx


function Oval({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ _jsxs("svg", {
        height: height,
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                id: "imagebot_2",
                children: [
                    /*#__PURE__*/ _jsx("title", {
                        children: "imagebot_2"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M 3.57837 297.906 C 3.57837 176.731 199.883 78.5784 442.234 78.5784 C 684.585 78.5784 880.889 176.731 880.889 297.906 C 880.889 419.081 684.585 517.234 442.234 517.234 C 199.883 517.234 3.57837 419.081 3.57837 297.906 Z",
                        fill: fill,
                        id: "imagebot_45",
                        stroke: "none",
                        strokeDasharray: "null",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeOpacity: "null",
                        strokeWidth: "3",
                        transform: "translate(0 1.95313) matrix(0.806667 0 0 0.806667 7.8125 87.8906)"
                    })
                ]
            }),
            /*#__PURE__*/ _jsx("metadata", {
                children: "image/svg+xmlOpenclipartStriped Ball2013-08-26T15:48:18A striped ball.https://openclipart.org/detail/182218/striped-ball-by-gustavorezende-182218gustavorezendeballcirclespherestripedstripes"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/likes.tsx


function Likes({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 48 48",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M43.12 21.4801L40.4 18.3201C39.88 17.7201 39.46 16.6001 39.46 15.8001V12.4001C39.46 10.2801 37.72 8.54012 35.6 8.54012H32.2C31.42 8.54012 30.28 8.12012 29.68 7.60012L26.52 4.88012C25.14 3.70012 22.88 3.70012 21.48 4.88012L18.34 7.62012C17.74 8.12012 16.6 8.54012 15.82 8.54012H12.36C10.24 8.54012 8.50001 10.2801 8.50001 12.4001V15.8201C8.50001 16.6001 8.08001 17.7201 7.58001 18.3201L4.88001 21.5001C3.72001 22.8801 3.72001 25.1201 4.88001 26.5001L7.58001 29.6801C8.08001 30.2801 8.50001 31.4001 8.50001 32.1801V35.6001C8.50001 37.7201 10.24 39.4601 12.36 39.4601H15.82C16.6 39.4601 17.74 39.8801 18.34 40.4001L21.5 43.1201C22.88 44.3001 25.14 44.3001 26.54 43.1201L29.7 40.4001C30.3 39.8801 31.42 39.4601 32.22 39.4601H35.62C37.74 39.4601 39.48 37.7201 39.48 35.6001V32.2001C39.48 31.4201 39.9 30.2801 40.42 29.6801L43.14 26.5201C44.3 25.1401 44.3 22.8601 43.12 21.4801ZM33.36 24.0001L31.02 31.1201C30.72 32.3001 29.46 33.2601 28.18 33.2601H24.48C23.84 33.2601 22.94 33.0401 22.54 32.6401L19.6 30.3401C19.54 31.6201 18.96 32.1601 17.54 32.1601H16.58C15.1 32.1601 14.5 31.5801 14.5 30.1801V20.6201C14.5 19.2201 15.1 18.6401 16.58 18.6401H17.56C19.04 18.6401 19.64 19.2201 19.64 20.6201V21.3401L23.52 15.5801C23.92 14.9601 24.94 14.5201 25.8 14.8601C26.74 15.1801 27.34 16.2201 27.14 17.1401L26.66 20.2601C26.62 20.5401 26.68 20.8001 26.86 21.0001C27.02 21.1801 27.26 21.3001 27.52 21.3001H31.42C32.18 21.3001 32.82 21.6001 33.2 22.1401C33.54 22.6601 33.6 23.3201 33.36 24.0001Z",
            fill: fill
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/phone-unlimited.tsx


function PhoneUnlimited({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 48 48",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                clipRule: "evenodd",
                d: "M26.6881 4.85535C25.8886 4.05163 24.8043 3.6001 23.6736 3.6001H9.46311C8.33245 3.6001 7.2481 4.05163 6.4486 4.85535C5.6491 5.65908 5.19995 6.74917 5.19995 7.88581V37.4096C5.19995 38.5463 5.6491 39.6364 6.4486 40.4401C7.2481 41.2438 8.33245 41.6953 9.46311 41.6953H17.6775C19.2629 41.6953 20.1995 39.662 19.5494 38.216C19.3771 37.8328 19.2239 37.4401 19.0908 37.0395C19.069 36.9737 19.0061 36.9301 18.9368 36.9334H14.2L14.0067 36.9201C13.65 36.8708 13.3252 36.6872 13.098 36.4064C12.8708 36.1256 12.7581 35.7686 12.7826 35.4075C12.8072 35.0464 12.9672 34.7081 13.2302 34.461C13.4933 34.2139 13.8399 34.0764 14.2 34.0763H16.342C17.5067 34.0763 18.4103 33.0793 18.5231 31.92C18.7361 29.7303 19.5271 27.6232 20.8322 25.8248C22.2504 23.8705 24.1995 22.3862 26.4293 21.5388C27.2945 21.21 27.9368 20.4215 27.9368 19.496V7.88581C27.9368 6.74917 27.4876 5.65908 26.6881 4.85535Z",
                fill: fill,
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                clipRule: "evenodd",
                d: "M32.6 44.4002C38.4542 44.4002 43.2 39.6544 43.2 33.8002C43.2 27.946 38.4542 23.2002 32.6 23.2002C26.7458 23.2002 22 27.946 22 33.8002C22 39.6544 26.7458 44.4002 32.6 44.4002ZM36.069 36.7799C35.061 36.7799 34.131 36.3059 33.525 35.4719C33.381 35.2739 33.423 34.9919 33.621 34.8419C33.819 34.6919 34.101 34.7399 34.251 34.9379C34.689 35.5319 35.349 35.8739 36.069 35.8739C37.323 35.8739 38.349 34.8539 38.349 33.5939C38.349 32.3339 37.329 31.3139 36.069 31.3139C35.217 31.3139 34.413 31.7699 33.975 32.4959L32.385 35.1419C31.785 36.1439 30.687 36.7619 29.523 36.7619C27.771 36.7619 26.343 35.3339 26.343 33.5819C26.343 31.8299 27.771 30.4019 29.523 30.4019C30.531 30.4019 31.461 30.8759 32.067 31.7099C32.211 31.9079 32.169 32.1899 31.971 32.3399C31.767 32.4899 31.491 32.4419 31.341 32.2439C30.909 31.6619 30.249 31.3199 29.529 31.3199C28.275 31.3199 27.249 32.3399 27.249 33.5999C27.249 34.8599 28.269 35.8799 29.529 35.8799C30.381 35.8799 31.185 35.4239 31.623 34.6979L33.213 32.0519C33.813 31.0499 34.911 30.4319 36.075 30.4319C37.827 30.4319 39.255 31.8599 39.255 33.6119C39.255 35.3639 37.821 36.7799 36.069 36.7799ZM29.5 34.7999C30.1628 34.7999 30.7 34.2626 30.7 33.5999C30.7 32.9372 30.1628 32.3999 29.5 32.3999C28.8373 32.3999 28.3 32.9372 28.3 33.5999C28.3 34.2626 28.8373 34.7999 29.5 34.7999ZM37.3001 33.5999C37.3001 34.2626 36.7628 34.7999 36.1001 34.7999C35.4373 34.7999 34.9001 34.2626 34.9001 33.5999C34.9001 32.9372 35.4373 32.3999 36.1001 32.3999C36.7628 32.3999 37.3001 32.9372 37.3001 33.5999Z",
                fill: fill,
                fillRule: "evenodd"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/mendal.tsx


function Mendal({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 64 64",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M56.6667 49.253L52.2667 50.293C51.28 50.533 50.5067 51.2796 50.2934 52.2663L49.36 56.1863C48.8534 58.3196 46.1334 58.9863 44.72 57.3063L36.7467 48.133C36.1067 47.3863 36.4534 46.213 37.4134 45.973C42.1334 44.8263 46.3734 42.1863 49.4934 38.4263C50 37.813 50.9067 37.733 51.4667 38.293L57.3867 44.213C59.4134 46.2396 58.6934 48.773 56.6667 49.253Z",
                fill: fill
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.19995 49.253L11.5999 50.293C12.5866 50.533 13.3599 51.2796 13.5733 52.2663L14.5066 56.1863C15.0133 58.3196 17.7333 58.9863 19.1466 57.3063L27.1199 48.133C27.7599 47.3863 27.4133 46.213 26.4533 45.973C21.7333 44.8263 17.4933 42.1863 14.3733 38.4263C13.8666 37.813 12.9599 37.733 12.3999 38.293L6.47995 44.213C4.45328 46.2396 5.17328 48.773 7.19995 49.253Z",
                fill: fill
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M32 5.33398C21.68 5.33398 13.3334 13.6807 13.3334 24.0007C13.3334 27.8673 14.48 31.414 16.4534 34.374C19.3334 38.6407 23.8934 41.654 29.2 42.4273C30.1067 42.5873 31.04 42.6673 32 42.6673C32.96 42.6673 33.8934 42.5873 34.8 42.4273C40.1067 41.654 44.6667 38.6407 47.5467 34.374C49.52 31.414 50.6667 27.8673 50.6667 24.0007C50.6667 13.6807 42.32 5.33398 32 5.33398ZM40.16 23.414L37.9467 25.6273C37.5734 26.0007 37.36 26.7207 37.4934 27.254L38.1334 30.0007C38.64 32.1607 37.4934 33.014 35.5734 31.8673L32.9067 30.294C32.4267 30.0007 31.6267 30.0007 31.1467 30.294L28.48 31.8673C26.56 32.9873 25.4134 32.1607 25.92 30.0007L26.56 27.254C26.6667 26.7473 26.48 26.0007 26.1067 25.6273L23.84 23.414C22.5334 22.1073 22.96 20.8007 24.7734 20.5073L27.6267 20.0273C28.1067 19.9473 28.6667 19.5207 28.88 19.094L30.4534 15.9473C31.3067 14.2407 32.6934 14.2407 33.5467 15.9473L35.12 19.094C35.3334 19.5207 35.8934 19.9473 36.4 20.0273L39.2534 20.5073C41.04 20.8007 41.4667 22.1073 40.16 23.414Z",
                fill: fill
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/tooling.tsx


function Tooling({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 64 64",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            clipRule: "evenodd",
            d: "M53.8667 24.4262L57.4933 28.6395C59.0667 30.4795 59.0667 33.5195 57.52 35.3595L53.8933 39.5728C53.2 40.3728 52.64 41.8928 52.64 42.9328V47.4662C52.64 50.2928 50.32 52.6128 47.4933 52.6128H42.96C41.8933 52.6128 40.4 53.1728 39.6 53.8662L35.3867 57.4928C33.52 59.0662 30.5067 59.0662 28.6667 57.4928L24.4533 53.8662C23.6533 53.1728 22.1333 52.6128 21.0933 52.6128H16.48C13.6533 52.6128 11.3333 50.2928 11.3333 47.4662V42.9062C11.3333 41.8662 10.7733 40.3728 10.1067 39.5728L6.50668 35.3328C4.96001 33.4928 4.96001 30.5062 6.50668 28.6662L10.1067 24.4262C10.7733 23.6262 11.3333 22.1328 11.3333 21.0928V16.5328C11.3333 13.7062 13.6533 11.3862 16.48 11.3862H21.0933C22.1333 11.3862 23.6533 10.8262 24.4533 10.1595L28.64 6.50617C30.5067 4.93284 33.52 4.93284 35.36 6.50617L39.5733 10.1328C40.3733 10.8262 41.8933 11.3862 42.9333 11.3862H47.4667C50.2933 11.3862 52.6133 13.7062 52.6133 16.5328V21.0662C52.6133 22.1328 53.1733 23.6262 53.8667 24.4262ZM26.1851 27.351C27.2779 26.6369 28 25.4028 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 24.4503 20.0744 24.8832 20.2116 25.2871C20.7474 26.8648 22.2412 28 24 28C24.8063 28 25.5569 27.7614 26.1851 27.351ZM40.0357 28.3995L27.1936 41.2823L26.3673 42.1112C25.5707 42.9104 24.4357 43.1667 23.422 42.8794C22.9472 42.7449 22.499 42.4911 22.1247 42.118C20.9512 40.9482 20.9482 39.0487 22.118 37.8753L36.0213 23.9279L37.6497 22.2944C38.8194 21.121 40.7189 21.1179 41.8923 22.2877C43.0657 23.4574 43.0687 25.3569 41.899 26.5303L40.0357 28.3995ZM42.792 37.1356C42.0712 36.4329 41.0862 36 40 36C37.7909 36 36 37.7909 36 40C36 41.96 37.4098 43.5908 39.2706 43.9337C39.5071 43.9772 39.7509 44 40 44C42.2091 44 44 42.2091 44 40C44 38.877 43.5372 37.8621 42.792 37.1356Z",
            fill: fill,
            fillRule: "evenodd"
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/percent.tsx


function Percent({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 64 64",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            clipRule: "evenodd",
            d: "M57.4933 28.6395L53.8667 24.4262C53.1733 23.6262 52.6133 22.1328 52.6133 21.0662V16.5328C52.6133 13.7062 50.2933 11.3862 47.4667 11.3862H42.9333C41.8933 11.3862 40.3733 10.8262 39.5733 10.1328L35.36 6.50617C33.52 4.93284 30.5067 4.93284 28.64 6.50617L24.4533 10.1595C23.6533 10.8262 22.1333 11.3862 21.0933 11.3862H16.48C13.6533 11.3862 11.3333 13.7062 11.3333 16.5328V21.0928C11.3333 22.1328 10.7733 23.6262 10.1067 24.4262L6.50668 28.6662C4.96001 30.5062 4.96001 33.4928 6.50668 35.3328L10.1067 39.5728C10.7733 40.3728 11.3333 41.8662 11.3333 42.9062V47.4662C11.3333 50.2928 13.6533 52.6128 16.48 52.6128H21.0933C22.1333 52.6128 23.6533 53.1728 24.4533 53.8662L28.6667 57.4928C30.5067 59.0662 33.52 59.0662 35.3867 57.4928L39.6 53.8662C40.4 53.1728 41.8933 52.6128 42.96 52.6128H47.4933C50.32 52.6128 52.64 50.2928 52.64 47.4662V42.9328C52.64 41.8928 53.2 40.3728 53.8933 39.5728L57.52 35.3595C59.0667 33.5195 59.0667 30.4795 57.4933 28.6395ZM28.7638 40.6041C28.7638 41.2003 28.6712 41.7713 28.4991 42.3036C27.8016 44.4622 25.7996 45.986 23.3819 45.986C20.368 45.986 18 43.618 18 40.6041C18 39.2189 18.5002 37.9702 19.3333 37.0251C20.313 35.9137 21.7532 35.2222 23.3819 35.2222C23.8115 35.2184 24.2402 35.2635 24.6596 35.3567L28.5626 31.4548L30.3784 33.2707C29.625 34.1329 29.6185 35.4374 30.4796 36.2985L30.8154 36.7356L28.5281 39.0229C28.6767 39.5212 28.7638 40.0519 28.7638 40.6041ZM22.6424 43.3951L22.1268 42.8795L20.5898 41.3425L21.3303 38.5514L24.1225 37.8109L26.1741 39.8635L25.5564 42.1914L25.4335 42.6546L22.6424 43.3951ZM18 19.4133L19.4133 18L23.7178 20.4897L23.4831 22.1043L27.6538 26.2749L33.3385 31.9596L34.0446 31.2535C34.1424 31.1515 34.2599 31.0703 34.39 31.0148C34.52 30.9594 34.6599 30.9308 34.8013 30.9308C34.9427 30.9308 35.0826 30.9594 35.2126 31.0148C35.3427 31.0703 35.4601 31.1515 35.558 31.2535L35.9616 31.6561C36.2845 31.9801 36.2845 32.6388 35.9616 33.0694L37.3749 34.3471C38.0208 34.1318 38.7882 34.3471 39.3264 34.8853L42.4868 38.0644L45.112 40.7053C46.296 41.8893 46.3089 43.8203 44.9096 45.112C43.7256 46.296 41.7881 46.296 40.6041 45.112L39.3686 43.8836L34.7851 39.3264C34.247 38.7882 34.1393 38.0208 34.247 37.3749L32.9682 36.0973C32.6453 36.5278 31.9865 36.5278 31.556 36.0973L31.119 35.6592C30.6884 35.2286 30.6884 34.5763 31.119 34.1458L31.9596 33.3385L26.5441 27.9223L26.1867 27.5649V27.4928C26.1867 25.6458 25.4034 24.8692 23.4752 24.8531L22.1043 23.482L20.4897 23.7188L18 19.4133ZM41.1964 41.97L42.857 43.6309C43.0722 43.8462 43.4167 43.8462 43.632 43.6309C43.8472 43.4156 43.8472 43.0733 43.632 42.858L41.5842 40.8106L37.2737 36.5009C37.1661 36.3922 37.0391 36.3664 36.9045 36.3664C36.77 36.3664 36.6085 36.3933 36.5009 36.5009C36.2856 36.7162 36.2856 37.0585 36.5009 37.2737L41.1964 41.97ZM43.9445 29.147C43.7628 29.3703 43.5786 29.5697 43.3962 29.7391C41.8516 31.2837 39.8259 31.119 37.8798 29.9748L36.9379 30.9166L36.8367 30.8154L36.3986 30.3784C35.5375 29.625 34.2674 29.625 33.4063 30.3784L31.7917 28.5626L34.078 26.2752C32.7895 24.229 32.5247 22.1096 34.1458 20.4886C34.3281 20.3192 34.5392 20.1463 34.7732 19.9745C36.2295 18.9054 38.573 17.8813 40.4028 18.0334C40.7063 18.0592 40.9754 18.1076 41.2445 18.2024L38.1144 21.3303C38.0124 21.4282 37.9312 21.5457 37.8757 21.6757C37.8202 21.8057 37.7916 21.9457 37.7916 22.087C37.7916 22.2284 37.8202 22.3683 37.8757 22.4984C37.9312 22.6284 38.0124 22.7459 38.1144 22.8437L41.2435 25.9717C41.674 26.4023 42.3263 26.4023 42.7569 25.9717L45.7836 22.8437C46.4459 24.6414 45.2637 27.5251 43.9445 29.147Z",
            fill: fill,
            fillRule: "evenodd"
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/suitcase.tsx


function Suitcase({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 48 48",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M40.5 10.5H33.75V9C33.7451 7.60913 33.1903 6.27664 32.2069 5.29315C31.2234 4.30965 29.8909 3.75494 28.5 3.75H19.5C18.1091 3.75494 16.7766 4.30965 15.7931 5.29315C14.8097 6.27664 14.2549 7.60913 14.25 9V10.5H7.5C6.50696 10.5049 5.55599 10.9016 4.85379 11.6038C4.1516 12.306 3.75493 13.257 3.75 14.25V38.25C3.75493 39.243 4.1516 40.194 4.85379 40.8962C5.55599 41.5984 6.50696 41.9951 7.5 42H40.5C41.493 41.9951 42.444 41.5984 43.1462 40.8962C43.8484 40.194 44.2451 39.243 44.25 38.25V14.25C44.2451 13.257 43.8484 12.306 43.1462 11.6038C42.444 10.9016 41.493 10.5049 40.5 10.5ZM18.75 9C18.75 8.80109 18.829 8.61032 18.9697 8.46967C19.1103 8.32902 19.3011 8.25 19.5 8.25H28.5C28.6989 8.25 28.8897 8.32902 29.0303 8.46967C29.171 8.61032 29.25 8.80109 29.25 9V10.5H18.75V9ZM29.25 15V37.5H18.75V15H29.25ZM8.25 15H14.25V37.5H8.25V15ZM39.75 37.5H33.75V15H39.75V37.5Z",
            fill: fill
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/transmision.tsx


function Transmision({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 48 48",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 16C12.2091 16 14 14.2091 14 12C14 9.79086 12.2091 8 10 8C7.79086 8 6 9.79086 6 12C6 14.2091 7.79086 16 10 16Z",
                stroke: fill,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M24 16C26.2091 16 28 14.2091 28 12C28 9.79086 26.2091 8 24 8C21.7909 8 20 9.79086 20 12C20 14.2091 21.7909 16 24 16Z",
                stroke: fill,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M38 16C40.2091 16 42 14.2091 42 12C42 9.79086 40.2091 8 38 8C35.7909 8 34 9.79086 34 12C34 14.2091 35.7909 16 38 16Z",
                stroke: fill,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M10 40C12.2091 40 14 38.2091 14 36C14 33.7909 12.2091 32 10 32C7.79086 32 6 33.7909 6 36C6 38.2091 7.79086 40 10 40Z",
                stroke: fill,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M24 40C26.2091 40 28 38.2091 28 36C28 33.7909 26.2091 32 24 32C21.7909 32 20 33.7909 20 36C20 38.2091 21.7909 40 24 40Z",
                stroke: fill,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M38 16V20C38 21.0609 37.5786 22.0783 36.8284 22.8284C36.0783 23.5786 35.0609 24 34 24H10M10 16V32V16ZM24 16V32V16Z",
                stroke: fill,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/seat.tsx


function Seat({ width , height , fill ="none" , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 48 48",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M14 36C14 36 8 20 8 12C8 4 12 4 12 4H14C14 4 16 4 16 6C16 8 14 8 14 12C14 16 20 20 20 26C20 32 14 36 14 36ZM24 34C22 34 16 39 16 39C15.4 39.4 15.6 40 16 40.6C16 40.6 18 44.2 22 44.2H34C36.2 44.2 38 42.4 38 40.2V38.2C38 36 36.2 34.2 34 34.2H24V34Z",
            fill: fill
        })
    });
}

;// CONCATENATED MODULE: ./components/ui/icons/index.tsx














// benefit





// footer
// car info





/***/ }),

/***/ 9073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ Whatsapp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Whatsapp({ width , height , fill ="currentColor" , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        fill: fill,
        height: height,
        viewBox: "0 0 22 21",
        width: width,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            clipRule: "evenodd",
            d: "M9.998 1.667h.004c4.595 0 8.331 3.738 8.331 8.333 0 4.595-3.736 8.333-8.33 8.333a8.261 8.261 0 01-4.585-1.377l-2.64.844a.3.3 0 01-.375-.381l.85-2.535A8.271 8.271 0 011.667 10c0-4.596 3.736-8.333 8.33-8.333zm3.218 12.943c.636-.137 1.434-.608 1.635-1.176.201-.568.201-1.053.143-1.156-.047-.082-.159-.135-.325-.215l-.14-.07c-.246-.121-1.436-.71-1.661-.788-.221-.083-.431-.054-.598.181l-.095.134c-.201.282-.395.555-.556.729-.147.156-.387.176-.588.093a8.376 8.376 0 00-.075-.031c-.318-.129-1.024-.414-1.879-1.175-.72-.641-1.21-1.44-1.352-1.68-.14-.24-.02-.381.092-.511l.006-.008c.071-.088.14-.162.21-.236.05-.053.101-.106.152-.166l.023-.025c.109-.126.174-.2.247-.357.084-.161.024-.328-.035-.451-.041-.086-.293-.698-.51-1.224l-.24-.58c-.16-.386-.284-.4-.528-.41l-.023-.002a4.924 4.924 0 00-.256-.008c-.32 0-.652.094-.853.299a22.89 22.89 0 01-.022.022c-.257.262-.83.845-.83 2.006 0 1.164.826 2.29.979 2.499.004.005.008.01.01.015.01.012.027.037.053.073.312.452 1.831 2.653 4.097 3.591 1.914.794 2.483.72 2.919.627z",
            fill: fill,
            fillRule: "evenodd"
        })
    });
}


/***/ }),

/***/ 1125:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G6": () => (/* reexport safe */ _filter_list__WEBPACK_IMPORTED_MODULE_7__.G),
/* harmony export */   "QA": () => (/* reexport safe */ _scroll_arrow__WEBPACK_IMPORTED_MODULE_1__.Q),
/* harmony export */   "TX": () => (/* reexport safe */ _notfound__WEBPACK_IMPORTED_MODULE_9__.T),
/* harmony export */   "UQ": () => (/* reexport safe */ _accordion__WEBPACK_IMPORTED_MODULE_10__.U),
/* harmony export */   "Zb": () => (/* reexport safe */ _card__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "e6": () => (/* reexport safe */ _range__WEBPACK_IMPORTED_MODULE_5__.e),
/* harmony export */   "tl": () => (/* reexport safe */ _pagination__WEBPACK_IMPORTED_MODULE_11__.t),
/* harmony export */   "ts": () => (/* reexport safe */ _section__WEBPACK_IMPORTED_MODULE_2__.t),
/* harmony export */   "us": () => (/* reexport safe */ _social_media__WEBPACK_IMPORTED_MODULE_0__.u)
/* harmony export */ });
/* harmony import */ var _social_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5524);
/* harmony import */ var _scroll_arrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6415);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9068);
/* harmony import */ var _section_gardient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3583);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4345);
/* harmony import */ var _range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(371);
/* harmony import */ var _filter_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8548);
/* harmony import */ var _filter_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1710);
/* harmony import */ var _progress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5534);
/* harmony import */ var _notfound__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1696);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1362);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9980);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_filter_search__WEBPACK_IMPORTED_MODULE_6__, _filter_list__WEBPACK_IMPORTED_MODULE_7__, _notfound__WEBPACK_IMPORTED_MODULE_9__, _accordion__WEBPACK_IMPORTED_MODULE_10__]);
([_filter_search__WEBPACK_IMPORTED_MODULE_6__, _filter_list__WEBPACK_IMPORTED_MODULE_7__, _notfound__WEBPACK_IMPORTED_MODULE_9__, _accordion__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1696:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ NotFound)
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
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layout__WEBPACK_IMPORTED_MODULE_4__]);
_layout__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @typescript-eslint/no-unused-vars */ 




const NotFound = ({ contentdata  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
    console.log(contentdata);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layout__WEBPACK_IMPORTED_MODULE_4__/* .Container */ .W2, {
        className: "z-30 my-14",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-0 animate-bounce mx-auto md:my-16 scale-50 md:scale-100 w-32",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                    className: "relative aspect-1",
                    children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__.createElement(_icons__WEBPACK_IMPORTED_MODULE_5__/* .HumanCircle */ .OM)
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col justify-center items-center space-y-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "mb-4 text-center flex-1 capitalize max-w-[816px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "my-4 paragraph-news",
                            children: f({
                                id: `sepertinya kami tidak bisa menemukan yang kamu cari. Yuk cari lain.`
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: `/`,
                        passHref: true,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                "aria-label": "btn-link",
                                className: "sc-blue-btn text-sc-light hover:text-sc-blue",
                                children: "halaman utama"
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

/***/ 9980:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable @typescript-eslint/no-explicit-any */ 

function Pagination({ postPerPage , totalPost , paginate , activePage  }) {
    const pageNumber = [];
    const marginPages = Math.ceil(totalPost / postPerPage);
    for(let index = 1; index <= marginPages; index++){
        pageNumber.push(index);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "mx-auto flex flex-wrap justify-center items-center gap-4",
        children: pageNumber.map((number)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    "aria-label": "btn pagination",
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(activePage == number ? "bg-sc-blue ring-sc-light text-sc-light" : "", "rounded-full ring-2 ring-sc-green hover:ring-sc-light hover:bg-sc-blue active:bg-sc-green active:text-sc-light text-sc-dark hover:text-sc-light px-6 py-4"),
                    onClick: ()=>paginate(number),
                    children: number
                })
            }, `${number}`))
    });
}


/***/ }),

/***/ 5534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Progress */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// import { Container } from "../layout";
const Progress = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "relative flex bg-sc-light outline-none p-2 w-full rounded-full",
        children: /*#__PURE__*/ _jsx("div", {
            className: "absolute inset-0 bg-gradient-to-tr from-sc-green to-sc-blue rounded-full animate-runProgress "
        })
    });
};


/***/ }),

/***/ 371:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ Range)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);




const Range = ({ className , handleChange , defaultValue  })=>{
    const { formatMessage: f  } = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "tooltip tooltip-left w-full",
        "data-tip": defaultValue,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                "aria-hidden": "true",
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("range range-accent", className),
                defaultValue: defaultValue,
                max: "72",
                min: "1",
                name: "harga",
                onChange: handleChange,
                placeholder: "harga",
                type: "range"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between text-sc-dark text-xl font-semibold",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "1 ",
                            f({
                                id: "jam"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "72 ",
                            f({
                                id: "jam"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 6415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ScrollArrow)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);






const ScrollArrow = ({ heightThreshold =400 , pagesExcluded  })=>{
    const { 0: showScroll , 1: setShowScroll  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { route  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const checkScrollTop = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!showScroll && window.pageYOffset > heightThreshold) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= heightThreshold) {
            setShowScroll(false);
        }
    }, [
        showScroll,
        heightThreshold
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("scroll", checkScrollTop);
        return ()=>window.removeEventListener("scroll", checkScrollTop);
    }, [
        checkScrollTop
    ]);
    const scrollTop = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    if (pagesExcluded?.includes(route)) return null;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        "aria-label": "scroll-up",
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(showScroll ? "inline-flex" : "hidden", "fixed bottom-20 right-5 h-12 w-12 items-center justify-center p-2 border border-transparent rounded-full shadow-lg text-white bg-sc-blue hover:bg-sc-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sc-green transition duration-300 ease-in-out z-50"),
        onClick: scrollTop,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ArrowUpIcon, {
            className: "h-6 w-6"
        })
    });
};


/***/ }),

/***/ 3583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export SectionGardient */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable react/prop-types */ 

const SectionGardient = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , children , ...rest }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("box-content my-[59px] px-8 bg-gradient-to-r from-sc-green to-sc-blue", className),
        ref: ref,
        ...rest,
        children: children
    });
});
SectionGardient.displayName = "SectionGardient";


/***/ }),

/***/ 9068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ SectionPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);

/* eslint-disable react/prop-types */ 

const SectionPage = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , children , ...rest }, ref)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("box-content mx-0", className),
        ref: ref,
        ...rest,
        children: children
    });
});
SectionPage.displayName = "Section";


/***/ }),

/***/ 5524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ SocialMedia)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_wa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9073);




const SocialMedia = ({ heightThreshold =100 ,  })=>{
    const [showScroll, setShowScroll] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
    const checkScrollTop = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        if (!showScroll && window.pageYOffset > heightThreshold) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= heightThreshold) {
            setShowScroll(false);
        }
    }, [
        showScroll,
        heightThreshold
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        window.addEventListener("scroll", checkScrollTop);
        return ()=>window.removeEventListener("scroll", checkScrollTop);
    }, [
        checkScrollTop
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(showScroll ? "inline-flex" : "hidden", "fixed bottom-40 right-2 h-12 sm:h-20 w-auto items-center justify-center p-2 border border-transparent rounded-full space-x-4 z-50"),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "sm:py-2",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: "https://wa.link/3djipt",
                rel: "noopener noreferrer",
                target: "_blank",
                children: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.createElement(_icons_wa__WEBPACK_IMPORTED_MODULE_3__/* .Whatsapp */ .C, {
                    width: "56px",
                    height: "56px",
                    fill: "#00E676"
                }, classnames__WEBPACK_IMPORTED_MODULE_2___default()(" sm:w-12 sm:h-12"))
            })
        })
    });
};


/***/ })

};
;