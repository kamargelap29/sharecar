(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[134],{830:function(r,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news",function(){return t(51)}])},949:function(r,a,t){"use strict";t.d(a,{Kr:function(){return m},My:function(){return p},No:function(){return v},Ub:function(){return Z},Wf:function(){return j},YM:function(){return g},vP:function(){return x}});var e=t(7568),n=t(1799),o=t(9534),c=t(4051),s=t.n(c),i=t(3144),u=t.n(i),l=t(1163),d=t(8100);function h(r,a){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(s().mark((function r(a,t){var e;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,u()(a,{headers:{"Content-Type":"aplication/json","Accept-language":"".concat(t)}});case 2:if(404!=(e=r.sent).status){r.next=6;break}throw new Error("An error occurred while fetching the data.");case 6:return r.abrupt("return",e.json());case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var p=function(){var r=(0,l.useRouter)().locale,a=(0,d.ZP)(["".concat("https://cms.sharecar.co.id","/api/banners/type/home-promo"),r],h),t=a.data,e=a.error,c=(0,o.Z)(a,["data","error"]);return(0,n.Z)({data:t,error:e,loading:!t&&!e},c)},g=function(){var r=(0,l.useRouter)().locale,a=(0,d.ZP)(["".concat("https://cms.sharecar.co.id","/api/banners/type/home-hero"),r],h),t=a.data,e=a.error,c=(0,o.Z)(a,["data","error"]);return(0,n.Z)({data:t,error:e,loading:!t&&!e},c)},v=function(){var r=(0,l.useRouter)().locale,a=(0,d.ZP)(["".concat("https://cms.sharecar.co.id","/api/locations?active=1"),r],h),t=a.data,e=a.error,c=(0,o.Z)(a,["data","error"]);return(0,n.Z)({data:t,error:e,loading:!t&&!e},c)},m=function(){var r=(0,l.useRouter)().locale,a=(0,d.ZP)(["".concat("https://cms.sharecar.co.id","/api/promotions?active=1"),r],h),t=a.data,e=a.error,c=(0,o.Z)(a,["data","error"]);return(0,n.Z)({data:t,error:e,loading:!t&&!e},c)},Z=function(r){var a=(0,l.useRouter)().locale,t=(0,d.ZP)(["".concat("https://cms.sharecar.co.id","/api/blogs"),a],h,{fallbackData:r,refreshInterval:2e4}),e=t.data,c=t.error,s=(0,o.Z)(t,["data","error"]);return(0,n.Z)({data:e,error:c,loading:!e&&!c},s)},x=function(r){var a=(0,d.ZP)("".concat("https://cms.sharecar.co.id","/api/cars?active=1"),h,{fallbackData:r}),t=a.data,e=a.error,c=(0,o.Z)(a,["data","error"]);return(0,n.Z)({data:t,error:e,loading:!t&&!e},c)},j=function(){var r=(0,l.useRouter)().locale,a=(0,d.ZP)(["".concat("https://cms.sharecar.co.id","/api/resources"),r],h),t=a.data,e=a.error,c=(0,o.Z)(a,["data","error"]);return(0,n.Z)({data:t,error:e,loading:!t&&!e},c)}},51:function(r,a,t){"use strict";t.r(a),t.d(a,{__N_SSG:function(){return m}});var e=t(603),n=t(5893),o=t(7294),c=t(1664),s=t.n(c),i=t(8090),u=t(2091),l=t(949),d=t(7920),h=t(2728),f=t(8100),p=t(9008),g=t.n(p),v=t(2962),m=!0;a.default=function(r){var a=r.fallback,t=(0,e.Z)(o.useState(1),2),c=t[0],p=t[1],m=(0,e.Z)(o.useState(10),1)[0],Z=(0,l.Ub)(a),x=Z.data,j=Z.loading,w=Z.error,y=null===x||void 0===x?void 0:x.data,P=window.location.pathname.slice(1);if(j||"undefined"===typeof y)return(0,n.jsx)("h2",{className:"z-30 my-16",children:"loading!!"});if(w||0==y.length)return(0,n.jsx)(u.TX,{contentdata:P});var _=c*m,b=_-m,N=null===y||void 0===y?void 0:y.slice(b,_);return(0,n.jsxs)(f.J$,{value:{fallback:a},children:[(0,n.jsxs)(g(),{children:[(0,n.jsxs)("title",{children:[P," | Share Car "]}),(0,n.jsx)("meta",{content:"/assets/images/sc-logo.png",property:"og:image"})]}),(0,n.jsx)(v.PB,{openGraph:{title:P},title:"".concat(P," | Share Car ")}),(0,n.jsxs)(u.ts,{className:"z-30",children:[(0,n.jsx)(i.W2,{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8 ",children:null===N||void 0===N?void 0:N.map((function(r){var a=r.id,t=r.slug,e=r.image,o=r.created_at,c=r.name,i=new Date("".concat(o)),l=(0,d.Z)(i,"dd MMMM yyyy",{locale:h.Z});return(0,n.jsx)("div",{children:(0,n.jsx)(s(),{as:"/news/".concat(t),href:"/news/[slug]",children:(0,n.jsx)("a",{children:(0,n.jsx)(u.Zb,{datePost:l,imgsrc:e,myKey:t,title:"".concat(c)},a)})})},"".concat(a))}))}),(0,n.jsx)(i.W2,{className:" my-12 z-30",children:(0,n.jsx)(u.tl,{activePage:c,paginate:function(r){return p(r)},postPerPage:m,totalPost:null===y||void 0===y?void 0:y.length})})]})]})}}},function(r){r.O(0,[74,694,774,888,179],(function(){return a=830,r(r.s=a);var a}));var a=r.O();_N_E=a}]);