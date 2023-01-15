(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[232,741],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var a=o.apply(null,r);a&&e.push(a)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},6489:function(e,t){"use strict";t.Q=function(e,t){if("string"!==typeof e)throw new TypeError("argument str must be a string");for(var n={},o=t||{},a=e.split(";"),s=o.decode||r,u=0;u<a.length;u++){var l=a[u],c=l.indexOf("=");if(!(c<0)){var f=l.substring(0,c).trim();if(void 0==n[f]){var p=l.substring(c+1,l.length).trim();'"'===p[0]&&(p=p.slice(1,-1)),n[f]=i(p,s)}}}return n},t.q=function(e,t,r){var i=r||{},a=i.encode||n;if("function"!==typeof a)throw new TypeError("option encode is invalid");if(!o.test(e))throw new TypeError("argument name is invalid");var s=a(t);if(s&&!o.test(s))throw new TypeError("argument val is invalid");var u=e+"="+s;if(null!=i.maxAge){var l=i.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(l)}if(i.domain){if(!o.test(i.domain))throw new TypeError("option domain is invalid");u+="; Domain="+i.domain}if(i.path){if(!o.test(i.path))throw new TypeError("option path is invalid");u+="; Path="+i.path}if(i.expires){if("function"!==typeof i.expires.toUTCString)throw new TypeError("option expires is invalid");u+="; Expires="+i.expires.toUTCString()}i.httpOnly&&(u+="; HttpOnly");i.secure&&(u+="; Secure");if(i.sameSite){switch("string"===typeof i.sameSite?i.sameSite.toLowerCase():i.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u};var r=decodeURIComponent,n=encodeURIComponent,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function i(e,t){try{return t(e)}catch(r){return e}}},8304:function(e,t,r){"use strict";r.d(t,{GW:function(){return s},MT:function(){return a}});var n=r(8116);r(7294),r(7544),r(6689);const o=(0,n.Fj)("root");const{createDomain:i,createStore:a,createEffect:s,createEvent:u}=o},4144:function(e,t){var r,n,o;n=[t,e],r=function(e,t){"use strict";var r={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};function n(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function o(e){try{delete window[e]}catch(t){window[e]=void 0}}function i(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}function a(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],a=e,s=t.timeout||r.timeout,u=t.jsonpCallback||r.jsonpCallback,l=void 0;return new Promise((function(r,c){var f=t.jsonpCallbackFunction||n(),p=u+"_"+f;window[f]=function(e){r({ok:!0,json:function(){return Promise.resolve(e)}}),l&&clearTimeout(l),i(p),o(f)},a+=-1===a.indexOf("?")?"?":"&";var d=document.createElement("script");d.setAttribute("src",""+a+u+"="+f),t.charset&&d.setAttribute("charset",t.charset),t.nonce&&d.setAttribute("nonce",t.nonce),t.referrerPolicy&&d.setAttribute("referrerPolicy",t.referrerPolicy),d.id=p,document.getElementsByTagName("head")[0].appendChild(d),l=setTimeout((function(){c(new Error("JSONP request to "+e+" timed out")),o(f),i(p),window[f]=function(){o(f)}}),s),d.onerror=function(){c(new Error("JSONP request to "+e+" failed")),o(f),i(p),l&&clearTimeout(l)}}))}t.exports=a},void 0===(o="function"===typeof r?r.apply(t,n):r)||(e.exports=o)},6689:function(e,t,r){var n=r(5885);n=n.default||n,e.exports=function(e,t){var r=e.req&&e.req.headers&&e.req.headers.cookie;return new n(r).getAll(t)}},7544:function(e,t,r){r(2741)},2741:function(e,t,r){"use strict";var n=r(3227),o=r(8361),i=r(5971),a=r(2715),s=r(1193),u=r(7794);function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=s(e);if(t){var o=s(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return a(this,r)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AppInitialProps",{enumerable:!0,get:function(){return p.AppInitialProps}}),Object.defineProperty(t,"NextWebVitalsMetric",{enumerable:!0,get:function(){return p.NextWebVitalsMetric}}),Object.defineProperty(t,"AppType",{enumerable:!0,get:function(){return p.AppType}}),t.default=void 0;var c=r(932).Z,f=(0,r(2648).Z)(r(7294)),p=r(9475);function d(e){return h.apply(this,arguments)}function h(){return(h=c(u.mark((function e(t){var r,n,o;return u.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.Component,n=t.ctx,e.next=3,p.loadGetInitialProps(r,n);case 3:return o=e.sent,e.abrupt("return",{pageProps:o});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=function(e){i(r,e);var t=l(r);function r(){return n(this,r),t.apply(this,arguments)}return o(r,[{key:"render",value:function(){var e=this.props,t=e.Component,r=e.pageProps;return f.default.createElement(t,Object.assign({},r))}}]),r}(f.default.Component);m.origGetInitialProps=d,m.getInitialProps=d,t.default=m},5885:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return a}});var n=r(6489);function o(e,t){void 0===t&&(t={});var r=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(function(e,t){return"undefined"===typeof t&&(t=!e||"{"!==e[0]&&"["!==e[0]&&'"'!==e[0]),!t}(r,t.doNotParse))try{return JSON.parse(r)}catch(n){}return e}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=function(){function e(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=function(e,t){return"string"===typeof e?n.Q(e,t):"object"===typeof e&&null!==e?e:{}}(e,t),new Promise((function(){r.HAS_DOCUMENT_COOKIE="object"===typeof document&&"string"===typeof document.cookie})).catch((function(){}))}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=n.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,r){return void 0===t&&(t={}),this._updateBrowserValues(r),o(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var r={};for(var n in this.cookies)r[n]=o(this.cookies[n],e);return r},e.prototype.set=function(e,t,r){var o;"object"===typeof t&&(t=JSON.stringify(t)),this.cookies=i(i({},this.cookies),((o={})[e]=t,o)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.q(e,t,r)),this._emitChange({name:e,value:t,options:r})},e.prototype.remove=function(e,t){var r=t=i(i({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=i({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.q(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}()},3250:function(e,t,r){"use strict";var n=r(7294);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=n.useState,a=n.useEffect,s=n.useLayoutEffect,u=n.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!o(e,r)}catch(n){return!0}}var c="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),o=n[0].inst,c=n[1];return s((function(){o.value=r,o.getSnapshot=t,l(o)&&c({inst:o})}),[e,r,t]),a((function(){return l(o)&&c({inst:o}),e((function(){l(o)&&c({inst:o})}))}),[e]),u(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},139:function(e,t,r){"use strict";var n=r(7294),o=r(1688);var i="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},a=o.useSyncExternalStore,s=n.useRef,u=n.useEffect,l=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,o){var f=s(null);if(null===f.current){var p={hasValue:!1,value:null};f.current=p}else p=f.current;f=l((function(){function e(e){if(!u){if(u=!0,a=e,e=n(e),void 0!==o&&p.hasValue){var t=p.value;if(o(t,e))return s=t}return s=e}if(t=s,i(a,e))return t;var r=n(e);return void 0!==o&&o(t,r)?t:(a=e,s=r)}var a,s,u=!1,l=void 0===r?null:r;return[function(){return e(t())},null===l?void 0:function(){return e(l())}]}),[t,r,n,o]);var d=a(e,f[0],f[1]);return u((function(){p.hasValue=!0,p.value=d}),[d]),c(d),d}},1688:function(e,t,r){"use strict";e.exports=r(3250)},2798:function(e,t,r){"use strict";e.exports=r(139)},4190:function(e,t,r){"use strict";r.d(t,{oR:function(){return l}});var n=r(7294),o=r(8116),i=r(2798),a=r(1688);function s(e,t,r,n){let i=[o.Nb.run({fn:e=>t(e)})];if(n&&i.unshift(n),r){let t=(0,o.dS)({node:i}),n=e.graphite.id,a=r.additionalLinks,s=a[n]||[];return a[n]=s,s.push(t),()=>{let e=s.indexOf(t);-1!==e&&s.splice(e,1),(0,o.PO)(t)}}{let t=(0,o.dS)({node:i,parent:[e],family:{owners:e}});return()=>{(0,o.PO)(t)}}}function u(e,t){o.is.store(e)||c("expect useStore argument to be a store");let r=n.useCallback((r=>s(e,r,t)),[e,t]),i=n.useCallback((()=>d(e,t)),[e,t]);return f(r,i,i)}function l(e){return u(e)}let c=e=>{throw Error(e)};const{useSyncExternalStore:f}=a,{useSyncExternalStoreWithSelector:p}=i,d=(e,t)=>t?t.getState(e):e.getState();"undefined"!=typeof window?n.useLayoutEffect:n.useEffect},8116:function(e,t,r){"use strict";function n(e,t){for(let r in e)t(e[r],r)}function o(e,t){e.forEach(t)}function i(e,t){if(!e)throw Error(t)}function a({node:e=[],from:t,source:r,parent:n=t||r,to:i,target:a,child:s=i||a,scope:u={},meta:l={},family:c={type:"regular"},regional:f}={}){let p=J(n),d=J(c.links),h=J(c.owners),m=[];o(e,(e=>e&&P(m,e)));let v={id:B(),seq:m,next:J(s),meta:l,scope:u,family:{type:c.type||"crosslink",links:d,owners:h}};return o(d,(e=>P(A(e),v))),o(h,(e=>P(_(e),v))),o(p,(e=>P(e.next,v))),f&&U&&K(M(U),[v]),v}function s(e,t,r){let n=Ne,i=null,a=Ce;if(e.target&&(t=e.params,r=e.defer,n="page"in e?e.page:n,e.stack&&(i=e.stack),a=$(e)||a,e=e.target),a&&Ce&&a!==Ce&&(Ce=null),Array.isArray(e))for(let o=0;o<e.length;o++)Se("pure",n,N(e[o]),i,t[o],a);else Se("pure",n,N(e),i,t,a);if(r&&!Oe)return;let s,u,l,c,f,p,d={isRoot:Oe,currentPage:Ne,scope:Ce,isWatch:Pe,isPure:je};Oe=0;e:for(;c=we();){let{idx:e,stack:t,type:r}=c;l=t.node,Ne=f=t.page,Ce=$(t),f?p=f.reg:Ce&&(p=Ce.reg);let n=!!f,i=!!Ce,a={fail:0,scope:l.scope};s=u=0;for(let o=e;o<l.seq.length&&!s;o++){let c=l.seq[o];if(c.order){let{priority:n,barrierID:i}=c.order,a=i?f?`${f.fullID}_${i}`:i:0;if(o!==e||r!==n){i?Ee.has(a)||(Ee.add(a),ke(o,t,n,i)):ke(o,t,n);continue e}i&&Ee.delete(a)}switch(c.type){case"mov":{let e,r=c.data;switch(r.from){case y:e=M(t);break;case"a":case"b":e=t[r.from];break;case"value":e=r.store;break;case"store":if(p&&!p[r.store.id])if(n){let e=Te(f,r.store.id);t.page=f=e,e?p=e.reg:i?(Ie(Ce,r.store,0,1,r.softRead),p=Ce.reg):p=void 0}else i&&Ie(Ce,r.store,0,1,r.softRead);e=he(p&&p[r.store.id]||r.store)}switch(r.to){case y:t.value=e;break;case"a":case"b":t[r.to]=e;break;case"store":Me(f,Ce,l,r.target).current=e}break}case"compute":let e=c.data;if(e.fn){Pe="watch"===D(l,"op"),je=e.pure;let r=e.safe?(0,e.fn)(M(t),a.scope,t):qe(a,e.fn,t);e.filter?u=!r:t.value=r,Pe=d.isWatch,je=d.isPure}}s=a.fail||u}if(!s){let e=M(t);o(l.next,(r=>{Se("child",f,r,t,e,$(t))}));let r=$(t);if(r){D(l,"needFxCounter")&&Se("child",f,r.fxCount,t,e,r),D(l,"storeChange")&&Se("child",f,r.storeChange,t,e,r),D(l,"warnSerialize")&&Se("child",f,r.warnSerializeNode,t,e,r);let n=r.additionalLinks[l.id];n&&o(n,(n=>{Se("child",f,n,t,e,r)}))}}}Oe=d.isRoot,Ne=d.currentPage,Ce=$(d)}function u(e,t){let r,n,o=e;if(t){let o=L(t);0===e.length?(r=o.path,n=o.fullName):(r=o.path.concat([e]),n=0===o.fullName.length?e:o.fullName+"/"+e)}else r=0===e.length?[]:[e],n=e;return{shortName:o,fullName:n,path:r}}function l(e,...t){let r=W();if(r){let n=r.handlers[e];if(n)return n(r,...t)}}function c(e,t){let r=(e,...t)=>(j(!D(r,"derived"),"call of derived event","createEvent"),j(!je,"unit call from pure function","operators like sample"),Ne?((e,t,r,n)=>{let o=Ne,i=null;if(t)for(i=Ne;i&&i.template!==t;)i=q(i);_e(i);let a=e.create(r,n);return _e(o),a})(r,n,e,t):r.create(e,t)),n=W();return Object.assign(r,{graphite:a({meta:We("event",r,e,t),regional:1}),create:e=>(s({target:r,params:e,scope:Ce}),e),watch:e=>Be(r,e),map:e=>He(r,v,e,[fe()]),filter:e=>He(r,"filter",e.fn?e:e.fn,[fe(ne,1)]),filterMap:e=>He(r,"filterMap",e,[fe(),le((e=>!Z(e)),1)]),prepend(e){let t=c("* \u2192 "+r.shortName,{parent:q(r)});return l("eventPrepend",N(t)),Ve(t,r,[fe()],"prepend",e),Ue(r,t),t}})}function f(e,t){let r=de(e),n=c({named:"updates",derived:1});l("storeBase",r);let u=r.id,p={subscribers:new Map,updates:n,defaultState:e,stateRef:r,getState(){let e,t=r;if(Ne){let t=Ne;for(;t&&!t.reg[u];)t=q(t);t&&(e=t)}return!e&&Ce&&(Ie(Ce,r,1),e=Ce),e&&(t=e.reg[u]),he(t)},setState:e=>s({target:p,params:e,defer:1,scope:Ce}),reset:(...e)=>(o(e,(e=>p.on(e,(()=>p.defaultState)))),p),on:(e,t)=>(ee(e,".on","first argument"),j(!D(p,"derived"),".on in derived store","createStore"),o(Array.isArray(e)?e:[e],(e=>{p.off(e),I(p).set(e,Fe(Ke(e,p,"on",re,t)))})),p),off(e){let t=I(p).get(e);return t&&(t(),I(p).delete(e)),p},map(e,t){let n,o;G(e)&&(n=e,e=e.fn),j(Z(t),"second argument of store.map","updateFilter");let i=p.getState();W()?o=null:Z(i)||(o=e(i,t));let a=f(o,{name:`${p.shortName} \u2192 *`,derived:1,and:n}),s=Ke(p,a,v,te,e);return me(T(a),{type:v,fn:e,from:r}),T(a).noInit=1,l("storeMap",r,s),a},watch(e,t){if(!t||!g(e)){let t=Be(p,e);return l("storeWatch",r,e)||e(p.getState()),t}return i(Q(t),"second argument should be a function"),e.watch((e=>t(p.getState(),e)))}},d=We("store",p,t),h=p.defaultConfig.updateFilter;p.graphite=a({scope:{state:r,fn:h},node:[le(((e,t,n)=>(n.scope&&!n.scope.reg[r.id]&&(n.b=1),e))),ce(r),le(((e,t,{a:r,b:n})=>!Z(e)&&(e!==r||n)),1),h&&fe(te,1),ae({from:y,target:r})],child:n,meta:d,regional:1});let m=D(p,"derived"),b="ignore"===D(p,"serialize"),w=D(p,"sid");return w&&(b||R(p,"storeChange",1),r.sid=w),w||b||m||R(p,"warnSerialize",1),i(m||!Z(e),"current state can't be undefined, use null instead"),K(p,[n]),p}function p(){let e={};return e.req=new Promise(((t,r)=>{e.rs=t,e.rj=r})),e.req.catch((()=>{})),e}function d(e,t){let r=c(Q(e)?{handler:e}:e,t),n=N(r);R(n,"op",r.kind="effect"),r.use=e=>(i(Q(e),".use argument should be a function"),m.scope.handler=e,r),r.use.getCurrent=()=>m.scope.handler;let o=r.finally=c({named:"finally",derived:1}),u=r.done=o.filterMap({named:"done",fn({status:e,params:t,result:r}){if("done"===e)return{params:t,result:r}}}),l=r.fail=o.filterMap({named:"fail",fn({status:e,params:t,error:r}){if("fail"===e)return{params:t,error:r}}}),d=r.doneData=u.map({named:"doneData",fn:({result:e})=>e}),h=r.failData=l.map({named:"failData",fn:({error:e})=>e}),m=a({scope:{handlerId:D(n,"sid"),handler:r.defaultConfig.handler||(()=>i(0,`no handler used in ${r.getType()}`))},node:[le(((e,t,r)=>{let n=t,o=n.handler;if($(r)){let e=$(r).handlers[n.handlerId];e&&(o=e)}return e.handler=o,e}),0,1),le((({params:e,req:t,handler:r,args:n=[e]},i,a)=>{let s=Ge(e,t,1,o,a),u=Ge(e,t,0,o,a),[l,c]=Je(r,u,n);l&&(G(c)&&Q(c.then)?c.then(s,u):s(c))}),0,1)],meta:{op:"fx",fx:"runner"}});n.scope.runner=m,P(n.seq,le(((e,{runner:t},r)=>{let n=q(r)?{params:e,req:{rs(e){},rj(e){}}}:e;return s({target:t,params:n,defer:1,scope:$(r)}),n.params}),0,1)),r.create=e=>{let t=p(),n={params:e,req:t};if(Ce){if(!Pe){let e=Ce;t.req.finally((()=>{Ae(e)})).catch((()=>{}))}s({target:r,params:n,scope:Ce})}else s(r,n);return t.req};let v=r.inFlight=f(0,{serialize:"ignore"}).on(r,(e=>e+1)).on(o,(e=>e-1)).map({fn:e=>e,named:"inFlight"});R(o,"needFxCounter","dec"),R(r,"needFxCounter",1);let y=r.pending=v.map({fn:e=>e>0,named:"pending"});return K(r,[o,u,l,d,h,y,v]),r}function h(e,t){let r=a({family:{type:"domain"},regional:1}),i={history:{},graphite:r,hooks:{}};r.meta=We("domain",i,e,t),n({Event:c,Effect:d,Store:f,Domain:h},((e,t)=>{let r=t.toLowerCase(),n=c({named:`on${t}`});i.hooks[r]=n;let a=new Set;i.history[`${r}s`]=a,n.create=e=>(s(n,e),e),P(N(n).seq,le(((e,t,r)=>(r.scope=null,e)))),n.watch((e=>{K(i,[e]),a.add(e),e.ownerSet||(e.ownerSet=a),q(e)||(e.parent=i)})),K(i,[n]),i[`onCreate${t}`]=e=>(o(a,e),n.watch(e)),i[`create${t}`]=i[r]=(t,r)=>n(e(t,{parent:i,or:r}))}));let u=q(i);return u&&n(i.hooks,((e,t)=>Ve(e,u.hooks[t]))),i}r.d(t,{Fj:function(){return h},Nb:function(){return pe},PO:function(){return ze},dS:function(){return a},is:function(){return C}});let m="undefined"!=typeof Symbol&&Symbol.observable||"@@observable",v="map",y="stack",g=e=>(Q(e)||G(e))&&"kind"in e;const b=e=>t=>g(t)&&t.kind===e;let w=b("store"),S=b("event"),k=b("effect"),x=b("domain"),E=b("scope");var C={__proto__:null,unit:g,store:w,event:S,effect:k,domain:x,scope:E};let O=(e,t)=>{let r=e.indexOf(t);-1!==r&&e.splice(r,1)},P=(e,t)=>e.push(t),j=(e,t,r)=>!e&&console.error(`${t} is deprecated${r?`, use ${r} instead`:""}`),N=e=>e.graphite||e,A=e=>e.family.owners,_=e=>e.family.links,T=e=>e.stateRef,M=e=>e.value,I=e=>e.subscribers,q=e=>e.parent,$=e=>e.scope,D=(e,t)=>N(e).meta[t],R=(e,t,r)=>N(e).meta[t]=r,L=e=>e.compositeName;const z=()=>{let e=0;return()=>""+ ++e};let F=z(),V=z(),B=z(),U=null,W=()=>U&&U.template,H=e=>(e&&U&&U.sidRoot&&(e=`${U.sidRoot}|${e}`),e),K=(e,t)=>{let r=N(e);o(t,(e=>{let t=N(e);"domain"!==r.family.type&&(t.family.type="crosslink"),P(A(t),r),P(_(r),t)}))},J=(e=[])=>(Array.isArray(e)?e:[e]).flat().map(N),G=e=>"object"==typeof e&&null!==e,Q=e=>"function"==typeof e,Z=e=>void 0===e,X=e=>i(G(e)||Q(e),"expect first argument be an object");const Y=(e,t,r,n)=>i(!(!G(e)&&!Q(e)||!("family"in e)&&!("graphite"in e)),`${t}: expect ${r} to be a unit (store, event or effect)${n}`);let ee=(e,t,r)=>{Array.isArray(e)?o(e,((e,n)=>Y(e,t,`${n} item of ${r}`,""))):Y(e,t,r," or array of units")},te=(e,{fn:t},{a:r})=>t(e,r),re=(e,{fn:t},{a:r})=>t(r,e),ne=(e,{fn:t})=>t(e);const oe=(e,t,r,n)=>{let o={id:V(),type:e,data:t};return r&&(o.order={priority:r},n&&(o.order.barrierID=++ie)),o};let ie=0,ae=({from:e="store",store:t,target:r,to:n=(r?"store":y),batch:o,priority:i})=>oe("mov",{from:e,store:t,to:n,target:r},i,o),se=({fn:e,batch:t,priority:r,safe:n=0,filter:o=0,pure:i=0})=>oe("compute",{fn:e,safe:n,filter:o,pure:i},r,t),ue=({fn:e})=>se({fn:e,priority:"effect"}),le=(e,t,r)=>se({fn:e,safe:1,filter:t,priority:r&&"effect"}),ce=(e,t,r)=>ae({store:e,to:t?y:"a",priority:r&&"sampler",batch:1}),fe=(e=ne,t)=>se({fn:e,pure:1,filter:t}),pe={mov:ae,compute:se,filter:({fn:e,pure:t})=>se({fn:e,filter:1,pure:t}),run:ue},de=e=>({id:V(),current:e}),he=({current:e})=>e,me=(e,t)=>{e.before||(e.before=[]),P(e.before,t)},ve=null;const ye=(e,t)=>{if(!e)return t;if(!t)return e;let r;return(e.v.type===t.v.type&&e.v.id>t.v.id||xe(e.v.type)>xe(t.v.type))&&(r=e,e=t,t=r),r=ye(e.r,t),e.r=e.l,e.l=r,e},ge=[];let be=0;for(;be<6;)P(ge,{first:null,last:null,size:0}),be+=1;const we=()=>{for(let e=0;e<6;e++){let t=ge[e];if(t.size>0){if(3===e||4===e){t.size-=1;let e=ve.v;return ve=ye(ve.l,ve.r),e}1===t.size&&(t.last=null);let r=t.first;return t.first=r.r,t.size-=1,r.v}}},Se=(e,t,r,n,o,i)=>ke(0,{a:null,b:null,node:r,parent:n,value:o,page:t,scope:i},e),ke=(e,t,r,n=0)=>{let o=xe(r),i=ge[o],a={v:{idx:e,stack:t,type:r,id:n},l:null,r:null};3===o||4===o?ve=ye(ve,a):(0===i.size?i.first=a:i.last.r=a,i.last=a),i.size+=1},xe=e=>{switch(e){case"child":return 0;case"pure":return 1;case"read":return 2;case"barrier":return 3;case"sampler":return 4;case"effect":return 5;default:return-1}},Ee=new Set;let Ce,Oe=1,Pe=0,je=0,Ne=null,Ae=e=>{Ce=e},_e=e=>{Ne=e};const Te=(e,t)=>{if(e){for(;e&&!e.reg[t];)e=q(e);if(e)return e}return null};let Me=(e,t,r,n,o)=>{let i=Te(e,n.id);return i?i.reg[n.id]:t?(Ie(t,n,o),t.reg[n.id]):n},Ie=(e,t,r,n,i)=>{let a=e.reg,s=t.sid;if(a[t.id])return;let u={id:t.id,current:t.current};if(s&&s in e.sidValuesMap&&!(s in e.sidIdMap))u.current=e.sidValuesMap[s];else if(t.before&&!i){let i=0,s=r||!t.noInit||n;o(t.before,(t=>{switch(t.type){case v:{let o=t.from;if(o||t.fn){o&&Ie(e,o,r,n);let i=o&&a[o.id].current;s&&(u.current=t.fn?t.fn(i):i)}break}case"field":i||(i=1,u.current=Array.isArray(u.current)?[...u.current]:{...u.current}),Ie(e,t.from,r,n),s&&(u.current[t.field]=a[a[t.from.id].id].current)}}))}s&&(e.sidIdMap[s]=t.id),a[t.id]=u};const qe=(e,t,r)=>{try{return t(M(r),e.scope,r)}catch(t){console.error(t),e.fail=1}};let $e=(e,t={})=>(G(e)&&($e(e.or,t),n(e,((e,r)=>{Z(e)||"or"===r||"and"===r||(t[r]=e)})),$e(e.and,t)),t);const De=(e,t)=>{O(e.next,t),O(A(e),t),O(_(e),t)},Re=(e,t,r)=>{let n;e.next.length=0,e.seq.length=0,e.scope=null;let o=_(e);for(;n=o.pop();)De(n,e),(t||r&&"sample"!==D(e,"op")||"crosslink"===n.family.type)&&Re(n,t,"on"!==D(n,"op")&&r);for(o=A(e);n=o.pop();)De(n,e),r&&"crosslink"===n.family.type&&Re(n,t,"on"!==D(n,"op")&&r)},Le=e=>e.clear();let ze=(e,{deep:t}={})=>{let r=0;if(e.ownerSet&&e.ownerSet.delete(e),w(e))Le(I(e));else if(x(e)){r=1;let t=e.history;Le(t.events),Le(t.effects),Le(t.stores),Le(t.domains)}Re(N(e),!!t,r)},Fe=e=>{let t=()=>ze(e);return t.unsubscribe=t,t},Ve=(e,t,r,n,o)=>a({node:r,parent:e,child:t,scope:{fn:o},meta:{op:n},family:{owners:[e,t],links:t},regional:1}),Be=(e,t)=>(i(Q(t),".watch argument should be a function"),Fe(a({scope:{fn:t},node:[ue({fn:ne})],parent:e,meta:{op:"watch"},family:{owners:e},regional:1}))),Ue=(e,t,r="event")=>{q(e)&&q(e).hooks[r](t)},We=(e,t,r,n)=>{let o="domain"===e,i=F(),a=$e({or:n,and:"string"==typeof r?{name:r}:r}),{parent:s=null,sid:l=null,named:c=null}=a,f=c||a.name||(o?"":i),p=u(f,s),d={op:t.kind=e,name:t.shortName=f,sid:t.sid=H(l),named:c,unitId:t.id=i,serialize:a.serialize,derived:a.derived,config:a};if(t.parent=s,t.compositeName=p,t.defaultConfig=a,t.thru=e=>(j(0,"thru","js pipe"),e(t)),t.getType=()=>p.fullName,!o){t.subscribe=e=>(X(e),t.watch(Q(e)?e:t=>e.next&&e.next(t))),t[m]=()=>t;let e=W();e&&(d.nativeTemplate=e)}return d};const He=(e,t,r,n)=>{let o;G(r)&&(o=r,r=r.fn);let i=c({name:`${e.shortName} \u2192 *`,derived:1,and:o});return Ve(e,i,n,t,r),i},Ke=(e,t,r,n,o)=>{let i=T(t),a=ae({store:i,to:"a",priority:"read"});r===v&&(a.data.softRead=1);let s=[a,fe(n)];return l("storeOnMap",i,s,w(e)&&T(e)),Ve(e,t,s,r,o)};let Je=(e,t,r)=>{try{return[1,e(...r)]}catch(e){return t(e),[0,null]}},Ge=(e,t,r,n,o)=>i=>s({target:[n,Qe],params:[r?{status:"done",params:e,result:i}:{status:"fail",params:e,error:i},{value:i,fn:r?t.rs:t.rj}],defer:1,page:o.page,scope:$(o)});const Qe=a({node:[ue({fn:({fn:e,value:t})=>e(t)})],meta:{op:"fx",fx:"sidechain"}})},29:function(e,t,r){"use strict";function n(e,t,r,n,o,i,a){try{var s=e[i](a),u=s.value}catch(l){return void r(l)}s.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function s(e){n(a,o,i,s,u,"next",e)}function u(e){n(a,o,i,s,u,"throw",e)}s(void 0)}))}}r.d(t,{Z:function(){return o}})}}]);