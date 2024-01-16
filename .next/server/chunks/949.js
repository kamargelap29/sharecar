"use strict";
exports.id = 949;
exports.ids = [949];
exports.modules = {

/***/ 949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kr": () => (/* binding */ useActivePromo),
/* harmony export */   "My": () => (/* binding */ useActivePromoBanners),
/* harmony export */   "No": () => (/* binding */ useActiveLocations),
/* harmony export */   "Ub": () => (/* binding */ useBlogs),
/* harmony export */   "Wf": () => (/* binding */ useResource),
/* harmony export */   "YM": () => (/* binding */ useActiveBanners),
/* harmony export */   "vP": () => (/* binding */ useActiveCars)
/* harmony export */ });
/* unused harmony exports Fetcher, useBanners, useLocations, usePromo, useBlogsWithLang, useBlogId, useCarsBrands, useCarsTypes, useCars */
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7881);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_2__]);
swr__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable @typescript-eslint/no-unused-vars */ /* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable no-undef */ 


async function Fetcher(input, // init?: RequestInit,
lang) {
    const resp = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(input, // eslint-disable-next-line no-param-reassign
    {
        headers: {
            // "x-access-token": "sans@dev",
            "Content-Type": "aplication/json",
            "Accept-language": `${lang}`
        }
    });
    if (resp.status == 404) {
        const error = new Error("An error occurred while fetching the data.");
        throw error;
    }
    return resp.json();
}
// GET banners
const useBanners = ()=>{
    const { locale  } = useRouter();
    const { data , error , ...rest } = useSWR([
        `${"https://cms.sharecar.co.id"}/api/banners`,
        locale
    ], Fetcher);
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET Active hero banners
const useActivePromoBanners = ()=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { data , error , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])([
        `${"https://cms.sharecar.co.id"}/api/banners/type/home-promo`,
        locale
    ], Fetcher);
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET Active hero banners
const useActiveBanners = ()=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { data , error , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])([
        `${"https://cms.sharecar.co.id"}/api/banners/type/home-hero`,
        locale
    ], Fetcher);
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET locations
const useLocations = ()=>{
    const { locale  } = useRouter();
    const { data , error , ...rest } = useSWR([
        `${"https://cms.sharecar.co.id"}/api/locations`,
        locale
    ], Fetcher);
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET Active locations
const useActiveLocations = ()=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { data , error , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])([
        `${"https://cms.sharecar.co.id"}/api/locations?active=1`,
        locale
    ], Fetcher);
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET Active promo
const useActivePromo = ()=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { data , error , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])([
        `${"https://cms.sharecar.co.id"}/api/promotions?active=1`,
        locale
    ], Fetcher);
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET promo
const usePromo = ()=>{
    const { data , error , ...rest } = useSWR(`${"https://cms.sharecar.co.id"}/api/promotions`, Fetcher);
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET blogs
const useBlogs = (initialData)=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { data , error , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])([
        `${"https://cms.sharecar.co.id"}/api/blogs`,
        locale
    ], Fetcher, {
        fallbackData: initialData,
        refreshInterval: 20000
    });
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET accep lang blogs
const useBlogsWithLang = ()=>{
    const { locale  } = useRouter();
    const { data , error , ...rest } = useSWR([
        `${"https://cms.sharecar.co.id"}/api/blogs`,
        locale
    ], Fetcher);
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET single blog
const useBlogId = (slug, initialData)=>{
    const { locale  } = useRouter();
    const { data , error , ...rest } = useSWR([
        slug ? `${"https://cms.sharecar.co.id"}/api/blogs/slug/${slug}` : null,
        locale, 
    ], Fetcher, {
        fallbackData: initialData
    });
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET Car Brands
const useCarsBrands = ()=>{
    const { locale  } = useRouter();
    const { data , error , ...rest } = useSWR([
        `${"https://cms.sharecar.co.id"}/api/carbrands`,
        locale
    ], Fetcher);
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET Cars Types
const useCarsTypes = ()=>{
    const { locale  } = useRouter();
    const { data , error , ...rest } = useSWR([
        `${"https://cms.sharecar.co.id"}/api/cartypes`,
        locale
    ], Fetcher);
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET All Cars data
const useCars = (initialData)=>{
    const { data , error , ...rest } = useSWR(`${"https://cms.sharecar.co.id"}/api/cars`, Fetcher, {
        fallbackData: initialData
    });
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET Cars data
const useActiveCars = (initialData)=>{
    const { data , error , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])(`${"https://cms.sharecar.co.id"}/api/cars?active=1`, Fetcher, {
        fallbackData: initialData
    });
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};
// GET Resource data
const useResource = ()=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const { data , error , ...rest } = (0,swr__WEBPACK_IMPORTED_MODULE_2__["default"])([
        `${"https://cms.sharecar.co.id"}/api/resources`,
        locale
    ], Fetcher);
    return {
        data,
        error,
        loading: !data && !error,
        ...rest
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;