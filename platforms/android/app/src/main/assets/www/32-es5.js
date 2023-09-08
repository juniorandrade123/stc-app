function _defineProperty(t,e,n){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var t,e={},n=Object.prototype,i=n.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,n){return t[e]=n}}function u(t,e,n,i){var o=e&&e.prototype instanceof y?e:y,a=Object.create(o.prototype),s=new S(i||[]);return r(a,"_invoke",{value:j(t,n,s)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var h="suspendedStart",p="executing",d="completed",g={};function y(){}function m(){}function v(){}var b={};c(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(C([])));x&&x!==n&&i.call(x,a)&&(b=x);var k=v.prototype=y.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(r,o,a,s){var l=f(t[r],t,o);if("throw"!==l.type){var c=l.arg,u=c.value;return u&&"object"==typeof u&&i.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(u).then((function(t){c.value=t,a(c)}),(function(t){return n("throw",t,a,s)}))}s(l.arg)}var o;r(this,"_invoke",{value:function(t,i){function r(){return new e((function(e,r){n(t,i,e,r)}))}return o=o?o.then(r,r):r()}})}function j(e,n,i){var r=h;return function(o,a){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return{value:t,done:!0}}for(i.method=o,i.arg=a;;){var s=i.delegate;if(s){var l=L(s,i);if(l){if(l===g)continue;return l}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===h)throw r=d,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=p;var c=f(e,n,i);if("normal"===c.type){if(r=i.done?d:"suspendedYield",c.arg===g)continue;return{value:c.arg,done:i.done}}"throw"===c.type&&(r=d,i.method="throw",i.arg=c.arg)}}}function L(e,n){var i=n.method,r=e.iterator[i];if(r===t)return n.delegate=null,"throw"===i&&e.iterator.return&&(n.method="return",n.arg=t,L(e,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+i+"' method")),g;var o=f(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,g;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function C(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function n(){for(;++r<e.length;)if(i.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=v,r(k,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:m,configurable:!0}),m.displayName=c(v,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},_(E.prototype),c(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,i,r,o){void 0===o&&(o=Promise);var a=new E(u(t,n,i,r),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(k),c(k,l,"Generator"),c(k,a,(function(){return this})),c(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},e.values=C,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(i,r){return s.type="throw",s.arg=e,n.next=i,r&&(n.method="next",n.arg=t),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=i.call(a,"catchLoc"),c=i.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,i){return this.delegate={iterator:C(e),resultName:n,nextLoc:i},"next"===this.method&&(this.arg=t),g}},e}function asyncGeneratorStep(t,e,n,i,r,o,a){try{var s=t[o](a),l=s.value}catch(c){return void n(c)}s.done?e(l):Promise.resolve(l).then(i,r)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var o=t.apply(e,n);function a(t){asyncGeneratorStep(o,i,r,a,s,"next",t)}function s(t){asyncGeneratorStep(o,i,r,a,s,"throw",t)}a(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,_toPropertyKey(i.key),i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"2lz6":function(t,e,n){"use strict";n.r(e),n.d(e,"ion_infinite_scroll",(function(){return a})),n.d(e,"ion_infinite_scroll_content",(function(){return s}));var i=n("wEJo"),r=n("E/Mt"),o=n("39oe"),a=function(t,e){function n(t){var e=this;_classCallCheck(this,n),Object(i.o)(this,t),this.ionInfinite=Object(i.g)(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom",this.onScroll=function(){var t=e.scrollEl;if(!t||!e.canStart())return 1;var n=e.el.offsetHeight;if(0===n)return 2;var i=t.scrollTop,r=t.scrollHeight,o=t.offsetHeight,a=0!==e.thrPc?o*e.thrPc:e.thrPx;if(("bottom"===e.position?r-n-i-a-o:i-n-a)<0){if(!e.didFire)return e.isLoading=!0,e.didFire=!0,e.ionInfinite.emit(),3}else e.didFire=!1;return 4}}return _createClass(n,[{key:"thresholdChanged",value:function(){var t=this.threshold;t.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(t)/100):(this.thrPx=parseFloat(t),this.thrPc=0)}},{key:"disabledChanged",value:function(){var t=this.disabled;t&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!t)}},{key:"connectedCallback",value:function(){return(t=t||_asyncToGenerator(_regeneratorRuntime().mark((function t(){var e,n=this;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e=this.el.closest("ion-content"))){t.next=10;break}return t.next=4,e.getScrollElement();case 4:this.scrollEl=t.sent,this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&Object(i.f)((function(){n.scrollEl&&(n.scrollEl.scrollTop=n.scrollEl.scrollHeight-n.scrollEl.clientHeight)})),t.next=11;break;case 10:console.error("<ion-infinite-scroll> must be used inside an <ion-content>");case 11:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}},{key:"disconnectedCallback",value:function(){this.enableScrollEvents(!1),this.scrollEl=void 0}},{key:"complete",value:function(){return(e=e||_asyncToGenerator(_regeneratorRuntime().mark((function t(){var e,n,r=this;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.scrollEl,this.isLoading&&e&&(this.isLoading=!1,"top"===this.position)&&(this.isBusy=!0,n=e.scrollHeight-e.scrollTop,requestAnimationFrame((function(){Object(i.h)((function(){var t=e.scrollHeight-n;requestAnimationFrame((function(){Object(i.f)((function(){e.scrollTop=t,r.isBusy=!1}))}))}))})));case 2:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}},{key:"canStart",value:function(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}},{key:"enableScrollEvents",value:function(t){this.scrollEl&&(t?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}},{key:"render",value:function(){var t,e=Object(r.b)(this),n=this.disabled;return Object(i.j)(i.c,{class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"infinite-scroll-loading",this.isLoading),_defineProperty(t,"infinite-scroll-enabled",!n),t)})}},{key:"el",get:function(){return Object(i.k)(this)}}],[{key:"watchers",get:function(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}}]),n}();a.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";var s=function(){function t(e){_classCallCheck(this,t),Object(i.o)(this,e)}return _createClass(t,[{key:"componentDidLoad",value:function(){if(void 0===this.loadingSpinner){var t=Object(r.b)(this);this.loadingSpinner=r.c.get("infiniteLoadingSpinner",r.c.get("spinner","ios"===t?"lines":"crescent"))}}},{key:"render",value:function(){var t,e=Object(r.b)(this);return Object(i.j)(i.c,{class:(t={},_defineProperty(t,e,!0),_defineProperty(t,"infinite-scroll-content-"+e,!0),t)},Object(i.j)("div",{class:"infinite-loading"},this.loadingSpinner&&Object(i.j)("div",{class:"infinite-loading-spinner"},Object(i.j)("ion-spinner",{name:this.loadingSpinner})),this.loadingText&&Object(i.j)("div",{class:"infinite-loading-text",innerHTML:Object(o.a)(this.loadingText)})))}}]),t}();s.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{margin-left:32px;margin-right:32px;margin-top:4px;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.infinite-loading-text{margin-left:unset;margin-right:unset;-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px}}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"}}}]);
//# sourceMappingURL=32-es5.js.map