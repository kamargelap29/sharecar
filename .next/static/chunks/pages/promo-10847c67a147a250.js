(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2],{6521:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/promo",function(){return t(8945)}])},8945:function(e,n,t){"use strict";t.r(n);var l=t(603),a=t(5893),r=t(7294),i=t(8090),c=t(1831),o=t(2091),s=t(5542),d=t(8057),u=t(949),f=t(7920),m=t(2728),v=t(6896);n.default=function(){var e=(0,l.Z)(r.useState([]),2),n=e[0],t=e[1],x=(0,l.Z)(r.useState(1),2),p=x[0],h=x[1],g=(0,l.Z)(r.useState(10),1)[0],j=(0,l.Z)(r.useState(""),2),w=j[0],b=j[1],y=(0,l.Z)(r.useState([]),2),N=y[0],_=y[1],k=(0,l.Z)(r.useState(""),2),Z=k[0],M=k[1],E=(0,v.Z)().formatMessage,R=window.location.pathname.slice(1),C=(0,u.Kr)(),P=C.data,O=C.loading,D=C.error,S=null===P||void 0===P?void 0:P.data;if(D)return(0,a.jsx)("h1",{children:"Error fetch data"});var z=null===S||void 0===S?void 0:S.map((function(e){return e.promotion_cars})).flat(),L=null===z||void 0===z?void 0:z.map((function(e){return e.car_brand_name})),T=null===L||void 0===L?void 0:L.flat(1),B=null===T||void 0===T?void 0:T.filter((function(e,n){return T.indexOf(e)==n})),H=null===z||void 0===z?void 0:z.filter((function(e){return e.car_brand_name==Z})),K=null===H||void 0===H?void 0:H.map((function(e){return{name:e.car_type_name,id:e.id}})),X=null===K||void 0===K?void 0:K.reduce((function(e,n){return e.find((function(e){return e.id===n.id}))?e:e.concat([n])}),[]);if(D||(null===S||void 0===S?void 0:S.length)<=0)return(0,a.jsx)(o.TX,{contentdata:R});if(O||"undefined"==P)return(0,a.jsx)("h1",{className:"animate-bounce",children:"Loading..."});var F=p*g,G=F-g,W=null===S||void 0===S?void 0:S.slice(G,F);return(0,a.jsxs)(o.ts,{className:"px-8 py-8 md:px-[88px] z-30",children:[(0,a.jsx)(i.W2,{className:"block bg-[#ffff] rounded-lg lg:rounded-full",children:(0,a.jsxs)("div",{className:"flex flex-wrap lg:flex-row flex-col justify-evenly items-start lg:items-center py-4 gap-4",children:[(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsxs)("h3",{className:"text-sc-dark font-semibold",children:[E({id:"filter berdasarkan"}),":"]})}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(o.G6,{children:null===B||void 0===B?void 0:B.map((function(e,n){return(0,a.jsx)(s.R.Option,{className:function(e){var n=e.active;return"relative cursor-default select-none py-2 pl-10 pr-4 ".concat(n?"bg-sc-green text-sc-light":"text-gray-900")},value:e,children:function(n){var t=n.selectedTipe;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"block truncate ".concat(t?"font-medium":"font-normal"),children:e}),t?(0,a.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-sc-blue",children:(0,a.jsx)(d.Z,{"aria-hidden":"true",className:"h-5 w-5"})}):null]})}},n)})),classname:"w-full",onChange:M,selected:Z,title:E({id:"tipe kendaraan"})})}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)(o.G6,{children:(null===H||void 0===H?void 0:H.length)>=0?null===X||void 0===X?void 0:X.map((function(e,n){return(0,a.jsx)(s.R.Option,{className:function(e){var n=e.active;return"relative cursor-default select-none py-2 pl-10 pr-4 ".concat(n?"bg-sc-green text-sc-light":"text-gray-900")},value:e.name,children:function(n){var t=n.selectedMerek;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("span",{className:"block truncate uppercase ".concat(t?"font-medium":"font-normal"),onClick:function(){return _(e.id)},children:e.name}),t?(0,a.jsx)("span",{className:"absolute inset-y-0 left-0 flex items-center pl-3 text-sc-blue",children:(0,a.jsx)(d.Z,{"aria-hidden":"true",className:"h-5 w-5"})}):null]})}},n)})):"",classname:"w-full",onChange:b,selected:w,title:E({id:"merek kendaraan"})})}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("button",{"aria-label":"terapkan",className:"mx-0 lg:mx-4 px-4 py-2 rounded-full text-sm bg-sc-blue hover:bg-sc-blue/75 text-sc-light w-full",onClick:function(){return function(){var e=[N],n=null===W||void 0===W?void 0:W.filter((function(n){var t;return null===(t=n.promotion_cars)||void 0===t?void 0:t.some((function(n){return e.includes(n.id)}))}));return t(n)}()},children:E({id:"terapkan"})})}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("button",{"aria-label":"reset",className:"mx-0 lg:mx-4 px-4 py-2 rounded-full text-sm ring-2 ring-sc-blue hover:bg-sc-green/75 text-sc-blue w-full ",onClick:function(){return M(""),b(""),t([]),void _([])},children:"reset"})})]})}),(0,a.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8",children:0===n.length?null===W||void 0===W?void 0:W.map((function(e){var n=e.code,t=e.name,l=e.image,r=e.created_at,i=e.desc,s=new Date("".concat(r)),d=(0,f.Z)(s,"dd MMMM yyyy",{locale:m.Z});return(0,a.jsx)(o.Zb,{children:(0,a.jsx)(c.e,{promo:n,promoDetailDesc:"".concat(i)}),datePost:d,imgsrc:"".concat(l),myKey:"".concat(t),title:"Promo ".concat(t)},"".concat(t))})):null===n||void 0===n?void 0:n.map((function(e){var n=e.code,t=e.name,l=e.image,r=e.created_at,i=e.desc,s=new Date("".concat(r)),d=(0,f.Z)(s,"dd MMMM yyyy",{locale:m.Z});return(0,a.jsx)(o.Zb,{children:(0,a.jsx)(c.e,{promo:n,promoDetailDesc:"".concat(i)}),datePost:d,imgsrc:"".concat(l),myKey:"".concat(t),title:"Promo ".concat(t)},"".concat(t))}))}),(0,a.jsx)(i.W2,{className:" my-12 z-30",children:(0,a.jsx)(o.tl,{activePage:p,paginate:function(e){return h(e)},postPerPage:g,totalPost:null===S||void 0===S?void 0:S.length})})]})}},3973:function(e,n,t){"use strict";var l=t(7294);const a=l.forwardRef((function(e,n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),l.createElement("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"}))}));n.Z=a},3519:function(e,n,t){"use strict";var l=t(7294);const a=l.forwardRef((function(e,n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),l.createElement("path",{fillRule:"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z",clipRule:"evenodd"}))}));n.Z=a},8057:function(e,n,t){"use strict";var l=t(7294);const a=l.forwardRef((function(e,n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:n},e),l.createElement("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"}))}));n.Z=a}},function(e){e.O(0,[74,694,831,774,888,179],(function(){return n=6521,e(e.s=n);var n}));var n=e.O();_N_E=n}]);