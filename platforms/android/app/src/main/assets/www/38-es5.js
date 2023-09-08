function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return t};var e,t={},r=Object.prototype,o=r.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function d(e,t,r,o){var a=t&&t.prototype instanceof b?t:b,i=Object.create(a.prototype),s=new L(o||[]);return n(i,"_invoke",{value:E(e,r,s)}),i}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}t.wrap=d;var u="suspendedStart",p="executing",f="completed",m={};function b(){}function y(){}function v(){}var g={};l(g,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(D([])));x&&x!==r&&o.call(x,i)&&(g=x);var k=v.prototype=b.prototype=Object.create(g);function j(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(n,a,i,s){var c=h(e[n],e,a);if("throw"!==c.type){var l=c.arg,d=l.value;return d&&"object"==typeof d&&o.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,s)}),(function(e){r("throw",e,i,s)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,s)}))}s(c.arg)}var a;n(this,"_invoke",{value:function(e,o){function n(){return new t((function(t,n){r(e,o,t,n)}))}return a=a?a.then(n,n):n()}})}function E(t,r,o){var n=u;return function(a,i){if(n===p)throw new Error("Generator is already running");if(n===f){if("throw"===a)throw i;return{value:e,done:!0}}for(o.method=a,o.arg=i;;){var s=o.delegate;if(s){var c=S(s,o);if(c){if(c===m)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(n===u)throw n=f,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);n=p;var l=h(t,r,o);if("normal"===l.type){if(n=o.done?f:"suspendedYield",l.arg===m)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(n=f,o.method="throw",o.arg=l.arg)}}}function S(t,r){var o=r.method,n=t.iterator[o];if(n===e)return r.delegate=null,"throw"===o&&t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method)||"return"!==o&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+o+"' method")),m;var a=h(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function D(t){if(t||""===t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function r(){for(;++n<t.length;)if(o.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw new TypeError(typeof t+" is not iterable")}return y.prototype=v,n(k,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:y,configurable:!0}),y.displayName=l(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},t.awrap=function(e){return{__await:e}},j(O.prototype),l(O.prototype,s,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,o,n,a){void 0===a&&(a=Promise);var i=new O(d(e,r,o,n),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},j(k),l(k,c,"Generator"),l(k,i,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},t.values=D,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(o,n){return s.type="throw",s.arg=t,r.next=o,n&&(r.method="next",r.arg=e),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),P(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;P(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,o){return this.delegate={iterator:D(t),resultName:r,nextLoc:o},"next"===this.method&&(this.arg=e),m}},t}function asyncGeneratorStep(e,t,r,o,n,a,i){try{var s=e[a](i),c=s.value}catch(l){return void r(l)}s.done?t(c):Promise.resolve(c).then(o,n)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function i(e){asyncGeneratorStep(a,o,n,i,s,"next",e)}function s(e){asyncGeneratorStep(a,o,n,i,s,"throw",e)}i(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{TvZU:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_modal",(function(){return y}));var o=r("wEJo"),n=r("E/Mt"),a=r("spDm"),i=r("f9PN"),s=r("74mu"),c=r("qb1Q"),l=r("Kfhc"),d=r("bC4P"),h=r("KF81"),u=r("W6o/");r("B4Jq"),r("y08P");var p=function(e,t){var r=Object(l.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o=Object(l.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),n=Object(l.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(t){var a=window.innerWidth<768,i="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,s=Object(l.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),c=document.body;if(a){var d=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",h="translateY(".concat(i?"-10px":d,") scale(").concat(.93,")");s.afterStyles({transform:h}).beforeAddWrite((function(){return c.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:h,borderRadius:"10px 10px 0 0"}]),n.addAnimation(s)}else if(n.addAnimation(r),i){var u="translateY(-10px) scale(".concat(i?.93:1,")");s.afterStyles({transform:u}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:u}]);var p=Object(l.a)().afterStyles({transform:u}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:u}]);n.addAnimation([s,p])}else o.fromTo("opacity","0","1")}else n.addAnimation(r);return n},f=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,o=Object(l.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n=Object(l.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),a=Object(l.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(n);if(t){var i=window.innerWidth<768,s="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,c=Object(l.a)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){1===e&&(t.style.setProperty("overflow",""),Array.from(d.querySelectorAll("ion-modal")).filter((function(e){return void 0!==e.presentingElement})).length<=1&&d.style.setProperty("background-color",""))})),d=document.body;if(i){var h=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",u="translateY(".concat(s?"-10px":h,") scale(").concat(.93,")");c.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:u,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),a.addAnimation(c)}else if(a.addAnimation(o),s){var p="translateY(-10px) scale(".concat(s?.93:1,")");c.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:p},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var f=Object(l.a)().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:p},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);a.addAnimation([c,f])}else n.fromTo("opacity","1","0")}else a.addAnimation(o);return a},m=function(e){var t=Object(l.a)(),r=Object(l.a)(),o=Object(l.a)();return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,o])},b=function(e){var t=Object(l.a)(),r=Object(l.a)(),o=Object(l.a)(),n=e.querySelector(".modal-wrapper");return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(n).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,o])},y=function(e,t){function r(e){var t=this;_classCallCheck(this,r),Object(o.o)(this,e),this.didPresent=Object(o.g)(this,"ionModalDidPresent",7),this.willPresent=Object(o.g)(this,"ionModalWillPresent",7),this.willDismiss=Object(o.g)(this,"ionModalWillDismiss",7),this.didDismiss=Object(o.g)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){t.dismiss(void 0,i.a)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onLifecycle=function(e){var r=t.usersElement,o=v[e.type];if(r&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(n)}}}return _createClass(r,[{key:"swipeToCloseChanged",value:function(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}},{key:"connectedCallback",value:function(){Object(i.f)(this.el)}},{key:"present",value:function(){return(e=e||_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t,r,n=this;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(t=this.el.querySelector(".modal-wrapper")){e.next=5;break}throw new Error("container is undefined");case 5:return r=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),e.next=8,Object(a.a)(this.delegate,t,this.component,["ion-page"],r);case 8:return this.usersElement=e.sent,e.next=11,Object(c.f)(this.usersElement);case 11:return Object(o.f)((function(){return n.el.classList.add("show-modal")})),e.next=14,Object(i.e)(this,"modalEnter",p,m,this.presentingElement);case 14:this.swipeToClose&&this.initSwipeToClose();case 15:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"initSwipeToClose",value:function(){var e=this;if("ios"===Object(n.b)(this)){var t,r,o,a,i,s=this.leaveAnimation||n.c.get("modalLeave",f),c=this.animation=s(this.el,this.presentingElement);this.gesture=(t=this.el,r=c,o=t.offsetHeight,a=!1,i=Object(h.createGesture)({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content, ion-footer")},onStart:function(){r.progressStart(!0,a?1:0)},onMove:function(e){var t=Object(u.k)(1e-4,e.deltaY/o,.9999);r.progressStep(t)},onEnd:function(t){var n=t.velocityY,s=Object(u.k)(1e-4,t.deltaY/o,.9999),c=(t.deltaY+1e3*n)/o>=.5,l=c?-.001:.001;c?(r.easing("cubic-bezier(0.32, 0.72, 0, 1)"),l+=Object(d.a)([0,0],[.32,.72],[0,1],[1,1],s)[0]):(r.easing("cubic-bezier(1, 0, 0.68, 0.28)"),l+=Object(d.a)([0,0],[1,0],[.68,.28],[1,1],s)[0]);var h=function(e,t){return Object(u.k)(400,e/Math.abs(1.1*t),500)}(c?s*o:(1-s)*o,n);a=c,i.enable(!1),r.onFinish((function(){c||i.enable(!0)})).progressEnd(c?1:0,l,h),c&&(e.gestureAnimationDismissing=!0,e.animation.onFinish(_asyncToGenerator(_regeneratorRuntime().mark((function t(){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.dismiss(void 0,"gesture");case 2:e.gestureAnimationDismissing=!1;case 3:case"end":return t.stop()}}),t)})))))}})),this.gesture.enable(!0)}}},{key:"dismiss",value:function(e,r){return(t=t||_asyncToGenerator(_regeneratorRuntime().mark((function e(t,r){var o,n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.gestureAnimationDismissing||"gesture"===r){e.next=2;break}return e.abrupt("return",!1);case 2:return o=i.i.get(this)||[],e.next=5,Object(i.g)(this,t,r,"modalLeave",f,b,this.presentingElement);case 5:if(n=e.sent,e.t0=n,!e.t0){e.next=12;break}return e.next=10,Object(a.b)(this.delegate,this.usersElement);case 10:this.animation&&this.animation.destroy(),o.forEach((function(e){return e.destroy()}));case 12:return this.animation=void 0,e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,this)})))).apply(this,arguments)}},{key:"onDidDismiss",value:function(){return Object(i.h)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(i.h)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var e,t=this.htmlAttributes,r=Object(n.b)(this);return Object(o.j)(o.c,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},t,{style:{zIndex:""+(2e4+this.overlayIndex)},class:Object.assign((e={},_defineProperty(e,r,!0),_defineProperty(e,"modal-card",void 0!==this.presentingElement&&"ios"===r),e),Object(s.b)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),Object(o.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===r&&Object(o.j)("div",{class:"modal-shadow"}),Object(o.j)("div",{tabindex:"0"}),Object(o.j)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),Object(o.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(o.k)(this)}}],[{key:"watchers",get:function(){return{swipeToClose:["swipeToCloseChanged"]}}}]),r}(),v={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};y.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}]);
//# sourceMappingURL=38-es5.js.map