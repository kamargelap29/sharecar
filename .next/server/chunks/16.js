"use strict";
exports.id = 16;
exports.ids = [16];
exports.modules = {

/***/ 5016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4045);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5194);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_leaflet__WEBPACK_IMPORTED_MODULE_2__]);
react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable import/no-named-as-default-member */ /* eslint-disable @typescript-eslint/no-explicit-any */ 
// import { useRouter } from "next/router";


// interface myCompProps {
//   children?: React.ReactNode;
// }
function MyMapsComponent({ data  }) {
    const [position, setPosition] = react__WEBPACK_IMPORTED_MODULE_1__.useState(null);
    // const { data, loading }: any = useActiveLocations();
    const map = (0,react_leaflet__WEBPACK_IMPORTED_MODULE_2__.useMapEvents)({
        click () {
            map.locate();
        },
        locationfound (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            console.log(e.latlng);
        },
        mouseover () {
            data !== null ? map.flyTo(data, map.getZoom()) : null;
        }
    });
    // if (loading || data == `undefined`) return <span>Loading!!</span>;
    return position === null ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__.LayerGroup, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__.Marker, {
            position: position,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__.Popup, {
                children: "lokasi anda saat ini"
            })
        })
    });
}
const TestMap = ({ locdata , pos  })=>{
    // const router = useRouter();
    // const { lng, lat } = router.query;
    // const map = useMapEvents({
    //   mouseover() {
    //     map.flyTo(pos, map.getZoom());
    //   },
    // });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_leaflet__WEBPACK_IMPORTED_MODULE_2__.MapContainer, {
        center: pos === null || pos === "undefined" ? [
            -6.172553,
            106.863034
        ] : pos,
        className: "max-w-5xl z-10 absolute inset-0",
        scrollWheelZoom: false,
        style: {
            width: "100%",
            height: "100%"
        },
        zoom: 13,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__.TileLayer, {
                attribution: '\xa9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            }),
            locdata?.map(({ id , latitude , longitude , name , car_available  })=>{
                const newIcon = new (leaflet__WEBPACK_IMPORTED_MODULE_3___default().Icon)({
                    iconUrl: "/assets/images/sharecar-map.png",
                    iconSize: [
                        30,
                        20
                    ],
                    iconAnchor: [
                        -6,
                        22
                    ],
                    popupAnchor: [
                        -6,
                        -25
                    ]
                });
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__.Marker, {
                    icon: newIcon,
                    position: [
                        latitude,
                        longitude
                    ],
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_2__.Popup, {
                        children: `${name}, ${car_available}`
                    })
                }, `${id}`);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MyMapsComponent, {
                data: pos
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestMap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;