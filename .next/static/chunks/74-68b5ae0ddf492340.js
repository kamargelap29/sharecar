"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[74],{3144:function(e){var n=self.fetch.bind(self);e.exports=n,e.exports.default=e.exports},7568:function(e,n,t){function r(e,n,t,r,i,o,u){try{var a=e[o](u),c=a.value}catch(f){return void t(f)}a.done?n(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,o){var u=e.apply(n,t);function a(e){r(u,i,o,a,c,"next",e)}function c(e){r(u,i,o,a,c,"throw",e)}a(void 0)}))}}t.d(n,{Z:function(){return i}})},8100:function(e,n,t){t.d(n,{J$:function(){return Q},ZP:function(){return U}});var r=t(7294);function i(e,n,t,r){return new(t||(t=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(n){o(n)}}function a(e){try{c(r.throw(e))}catch(n){o(n)}}function c(e){var n;e.done?i(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,a)}c((r=r.apply(e,n||[])).next())}))}function o(e,n){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=n.call(e,u)}catch(a){o=[6,a],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}}var u,a=function(){},c=a(),f=Object,s=function(e){return e===c},l=function(e){return"function"==typeof e},d=function(e,n){return f.assign({},e,n)},v="undefined",h=function(){return typeof window!=v},p=new WeakMap,g=0,y=function(e){var n,t,r=typeof e,i=e&&e.constructor,o=i==Date;if(f(e)!==e||o||i==RegExp)n=o?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(n=p.get(e))return n;if(n=++g+"~",p.set(e,n),i==Array){for(n="@",t=0;t<e.length;t++)n+=y(e[t])+",";p.set(e,n)}if(i==f){n="#";for(var u=f.keys(e).sort();!s(t=u.pop());)s(e[t])||(n+=t+":"+y(e[t])+",");p.set(e,n)}}return n},b=!0,w=h(),m=typeof document!=v,E=w&&window.addEventListener?window.addEventListener.bind(window):a,R=m?document.addEventListener.bind(document):a,k=w&&window.removeEventListener?window.removeEventListener.bind(window):a,O=m?document.removeEventListener.bind(document):a,S={isOnline:function(){return b},isVisible:function(){var e=m&&document.visibilityState;return s(e)||"hidden"!==e}},T={initFocus:function(e){return R("visibilitychange",e),E("focus",e),function(){O("visibilitychange",e),k("focus",e)}},initReconnect:function(e){var n=function(){b=!0,e()},t=function(){b=!1};return E("online",n),E("offline",t),function(){k("online",n),k("offline",t)}}},V=!h()||"Deno"in window,x=function(e){return h()&&typeof window.requestAnimationFrame!=v?window.requestAnimationFrame(e):setTimeout(e,1)},C=V?r.useEffect:r.useLayoutEffect,D="undefined"!==typeof navigator&&navigator.connection,I=!V&&D&&(["slow-2g","2g"].includes(D.effectiveType)||D.saveData),P=function(e){if(l(e))try{e=e()}catch(t){e=""}var n=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?y(e):"",n,e?"$swr$"+e:""]},L=new WeakMap,F=function(e,n,t,r,i,o,u){void 0===u&&(u=!0);var a=L.get(e),c=a[0],f=a[1],s=a[3],l=c[n],d=f[n];if(u&&d)for(var v=0;v<d.length;++v)d[v](t,r,i);return o&&(delete s[n],l&&l[0])?l[0](2).then((function(){return e.get(n)})):e.get(n)},A=0,M=function(){return++A},N=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return i(void 0,void 0,void 0,(function(){var n,t,r,i,u,a,f,v,h,p,g,y,b,w,m,E,R,k,O,S,T;return o(this,(function(o){switch(o.label){case 0:if(n=e[0],t=e[1],r=e[2],i=e[3],a=!!s((u="boolean"===typeof i?{revalidate:i}:i||{}).populateCache)||u.populateCache,f=!1!==u.revalidate,v=!1!==u.rollbackOnError,h=u.optimisticData,p=P(t),g=p[0],y=p[2],!g)return[2];if(b=L.get(n),w=b[2],e.length<3)return[2,F(n,g,n.get(g),c,c,f,!0)];if(m=r,R=M(),w[g]=[R,0],k=!s(h),O=n.get(g),k&&(S=l(h)?h(O):h,n.set(g,S),F(n,g,S)),l(m))try{m=m(n.get(g))}catch(V){E=V}return m&&l(m.then)?[4,m.catch((function(e){E=e}))]:[3,2];case 1:if(m=o.sent(),R!==w[g][0]){if(E)throw E;return[2,m]}E&&k&&v&&(a=!0,m=O,n.set(g,O)),o.label=2;case 2:return a&&(E||(l(a)&&(m=a(m,O)),n.set(g,m)),n.set(y,d(n.get(y),{error:E}))),w[g][1]=M(),[4,F(n,g,m,E,c,f,!!a)];case 3:if(T=o.sent(),E)throw E;return[2,a?T:m]}}))}))},W=function(e,n){for(var t in e)e[t][0]&&e[t][0](n)},_=function(e,n){if(!L.has(e)){var t=d(T,n),r={},i=N.bind(c,e),o=a;if(L.set(e,[r,{},{},{},i]),!V){var u=t.initFocus(setTimeout.bind(c,W.bind(c,r,0))),f=t.initReconnect(setTimeout.bind(c,W.bind(c,r,1)));o=function(){u&&u(),f&&f(),L.delete(e)}}return[e,i,o]}return[e,L.get(e)[4]]},J=_(new Map),$=J[0],q=J[1],Z=d({onLoadingSlow:a,onSuccess:a,onError:a,onErrorRetry:function(e,n,t,r,i){var o=t.errorRetryCount,u=i.retryCount,a=~~((Math.random()+.5)*(1<<(u<8?u:8)))*t.errorRetryInterval;!s(o)&&u>o||setTimeout(r,a,i)},onDiscarded:a,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:I?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:I?5e3:3e3,compare:function(e,n){return y(e)==y(n)},isPaused:function(){return!1},cache:$,mutate:q,fallback:{}},S),j=function(e,n){var t=d(e,n);if(n){var r=e.use,i=e.fallback,o=n.use,u=n.fallback;r&&o&&(t.use=r.concat(o)),i&&u&&(t.fallback=d(i,u))}return t},G=(0,r.createContext)({}),H=function(e){return l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},z=function(){return d(Z,(0,r.useContext)(G))},B=function(e,n,t){var r=n[e]||(n[e]=[]);return r.push(t),function(){var e=r.indexOf(t);e>=0&&(r[e]=r[r.length-1],r.pop())}},K={dedupe:!0},Q=f.defineProperty((function(e){var n=e.value,t=j((0,r.useContext)(G),n),i=n&&n.provider,o=(0,r.useState)((function(){return i?_(i(t.cache||$),n):c}))[0];return o&&(t.cache=o[0],t.mutate=o[1]),C((function(){return o?o[2]:c}),[]),(0,r.createElement)(G.Provider,d(e,{value:t}))}),"default",{value:Z}),U=(u=function(e,n,t){var u=t.cache,a=t.compare,f=t.fallbackData,v=t.suspense,h=t.revalidateOnMount,p=t.refreshInterval,g=t.refreshWhenHidden,y=t.refreshWhenOffline,b=L.get(u),w=b[0],m=b[1],E=b[2],R=b[3],k=P(e),O=k[0],S=k[1],T=k[2],D=(0,r.useRef)(!1),I=(0,r.useRef)(!1),A=(0,r.useRef)(O),W=(0,r.useRef)(n),_=(0,r.useRef)(t),J=function(){return _.current},$=function(){return J().isVisible()&&J().isOnline()},q=function(e){return u.set(T,d(u.get(T),e))},Z=u.get(O),j=s(f)?t.fallback[O]:f,G=s(Z)?j:Z,H=u.get(T)||{},z=H.error,Q=!D.current,U=function(){return Q&&!s(h)?h:!J().isPaused()&&(v?!s(G)&&t.revalidateIfStale:s(G)||t.revalidateIfStale)},X=!(!O||!n)&&(!!H.isValidating||Q&&U()),Y=function(e,n){var t=(0,r.useState)({})[1],i=(0,r.useRef)(e),o=(0,r.useRef)({data:!1,error:!1,isValidating:!1}),u=(0,r.useCallback)((function(e){var r=!1,u=i.current;for(var a in e){var c=a;u[c]!==e[c]&&(u[c]=e[c],o.current[c]&&(r=!0))}r&&!n.current&&t({})}),[]);return C((function(){i.current=e})),[i,o.current,u]}({data:G,error:z,isValidating:X},I),ee=Y[0],ne=Y[1],te=Y[2],re=(0,r.useCallback)((function(e){return i(void 0,void 0,void 0,(function(){var n,r,i,f,d,v,h,p,g,y,b,w,m;return o(this,(function(o){switch(o.label){case 0:if(n=W.current,!O||!n||I.current||J().isPaused())return[2,!1];f=!0,d=e||{},v=!R[O]||!d.dedupe,h=function(){return!I.current&&O===A.current&&D.current},p=function(){var e=R[O];e&&e[1]===i&&delete R[O]},g={isValidating:!1},y=function(){q({isValidating:!1}),h()&&te(g)},q({isValidating:!0}),te({isValidating:!0}),o.label=1;case 1:return o.trys.push([1,3,,4]),v&&(F(u,O,ee.current.data,ee.current.error,!0),t.loadingTimeout&&!u.get(O)&&setTimeout((function(){f&&h()&&J().onLoadingSlow(O,t)}),t.loadingTimeout),R[O]=[n.apply(void 0,S),M()]),m=R[O],r=m[0],i=m[1],[4,r];case 2:return r=o.sent(),v&&setTimeout(p,t.dedupingInterval),R[O]&&R[O][1]===i?(q({error:c}),g.error=c,b=E[O],!s(b)&&(i<=b[0]||i<=b[1]||0===b[1])?(y(),v&&h()&&J().onDiscarded(O),[2,!1]):(a(ee.current.data,r)?g.data=ee.current.data:g.data=r,a(u.get(O),r)||u.set(O,r),v&&h()&&J().onSuccess(r,O,t),[3,4])):(v&&h()&&J().onDiscarded(O),[2,!1]);case 3:return w=o.sent(),p(),J().isPaused()||(q({error:w}),g.error=w,v&&h()&&(J().onError(w,O,t),("boolean"===typeof t.shouldRetryOnError&&t.shouldRetryOnError||l(t.shouldRetryOnError)&&t.shouldRetryOnError(w))&&$()&&J().onErrorRetry(w,O,t,re,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return f=!1,y(),h()&&v&&F(u,O,g.data,g.error,!1),[2,!0]}}))}))}),[O]),ie=(0,r.useCallback)(N.bind(c,u,(function(){return A.current})),[]);if(C((function(){W.current=n,_.current=t})),C((function(){if(O){var e=O!==A.current,n=re.bind(c,K),t=0,r=B(O,m,(function(e,n,t){te(d({error:n,isValidating:t},a(ee.current.data,e)?c:{data:e}))})),i=B(O,w,(function(e){if(0==e){var r=Date.now();J().revalidateOnFocus&&r>t&&$()&&(t=r+J().focusThrottleInterval,n())}else if(1==e)J().revalidateOnReconnect&&$()&&n();else if(2==e)return re()}));return I.current=!1,A.current=O,D.current=!0,e&&te({data:G,error:z,isValidating:X}),U()&&(s(G)||V?n():x(n)),function(){I.current=!0,r(),i()}}}),[O,re]),C((function(){var e;function n(){var n=l(p)?p(G):p;n&&-1!==e&&(e=setTimeout(t,n))}function t(){ee.current.error||!g&&!J().isVisible()||!y&&!J().isOnline()?n():re(K).then(n)}return n(),function(){e&&(clearTimeout(e),e=-1)}}),[p,g,y,re]),(0,r.useDebugValue)(G),v&&s(G)&&O)throw W.current=n,_.current=t,I.current=!1,s(z)?re(K):z;return{mutate:ie,get data(){return ne.data=!0,G},get error(){return ne.error=!0,z},get isValidating(){return ne.isValidating=!0,X}}},function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=z(),r=H(e),i=r[0],o=r[1],a=r[2],c=j(t,a),f=u,s=c.use;if(s)for(var l=s.length;l-- >0;)f=s[l](f);return f(i,o||c.fetcher,c)})}}]);