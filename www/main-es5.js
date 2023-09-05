function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-router-outlet id=\"main-content\"></ion-router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/configuration/configuration.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/configuration/configuration.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAutenticationConfigurationConfigurationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" routerLink=\"/\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Configurações</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-10 ml-auto mr-auto mt-5\">\n      <ion-card class=\"card\">\n        <ion-card-header class=\"pl-2 pt-3 pr-2\">\n          <ion-card-title *ngIf=\"dependent === null ? true : false\" class=\"title\">{{user.user}}</ion-card-title>          \n          <ion-card-title *ngIf=\"dependent !== null ? true : false\" class=\"title\">{{dependent?.patient?.name}}</ion-card-title>          \n        </ion-card-header>\n        <hr>\n        <ion-card-content class=\"pl-2 pt-1 pr-2 pb-3\">\n          <div class=\"row p-0\">\n          <div class=\"col-12\" *ngIf=\"dependent === null ? true : false\">\n            CPF: <br><b>{{user.cpf | mask: '000.000.000-00'}}</b>\n          </div>\n          <div class=\"col-12\" *ngIf=\"dependent !== null ? true : false\">\n            CPF: <br><b>{{dependent?.patient?.cpf | mask: '000.000.000-00'}}</b>\n          </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div class=\"col-10 ml-auto mr-auto mt-3\">\n      <div class=\"col-12 btn-login text-center\" routerLink=\"/personal-data\">\n        Dados pessoais\n      </div>\n      <div class=\"col-12 btn-back text-center mt-2\" (click)=\"presentAlert()\">\n        Alterar senha\n      </div>\n      <div class=\"col-12 btn-back text-center mt-2\" (click)=\"presentAlertConsortium()\">\n        Alterar convênio\n      </div>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar (click)=\"logout()\">\n    <ion-title color=\"danger\">Sair</ion-title>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/configuration/personal-data/personal-data.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/configuration/personal-data/personal-data.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAutenticationConfigurationPersonalDataPersonalDataComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" routerLink=\"/configuration\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Dados pessoais</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>    \n    <div class=\"col-10 mt-4 mr-auto ml-auto\" [formGroup]=\"formPersonal\">\n      <div class=\"col-12 mt-1\">\n        <p class=\"info-data\">Confira seus dados, qualquer alteração dirija-se a uma unidade de saúde para atualizá-los.</p>\n      </div>\n      <div class=\"col-12\">\n        <ion-label>Nome</ion-label>\n        <ion-input formControlName=\"name\" placeholder=\"Nome\" class=\"input-border\" type=\"text\"></ion-input>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <ion-label>E-mail</ion-label>\n        <ion-input formControlName=\"email\" placeholder=\"E-mail\" class=\"input-border\" type=\"email\"></ion-input>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <ion-label>Data de Nascimento</ion-label>\n        <ion-input formControlName=\"date\" placeholder=\"Data de nascimento\" class=\"input-border\" type=\"date\"></ion-input>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <ion-label>Sexo</ion-label>\n        <ion-select formControlName=\"sexo\" placeholder=\"Sexo\" class=\"input-border pl-0\">\n          <ion-select-option value=\"2\">Feminino</ion-select-option>\n          <ion-select-option value=\"1\">Masculino</ion-select-option>\n        </ion-select>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <ion-label>Telefone</ion-label>\n        <ion-input [brmasker]=\"{phone: true}\" formControlName=\"phone\" placeholder=\"Telefone\" class=\"input-border\" type=\"text\"></ion-input>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <ion-label>CEP</ion-label>\n        <ion-input [brmasker]=\"{mask: '12412-170', type:'num', len:9}\" formControlName=\"cep\" placeholder=\"CEP\" class=\"input-border\" type=\"text\"></ion-input>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <ion-label>Endereço</ion-label>\n        <ion-input formControlName=\"end\" placeholder=\"Endereço\" class=\"input-border\" type=\"text\"></ion-input>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <ion-label>Estado</ion-label>\n        <ion-input formControlName=\"estado\" placeholder=\"Estado\" class=\"input-border\" type=\"text\"></ion-input>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <ion-label>Cidade</ion-label>\n        <ion-input formControlName=\"city\" placeholder=\"Cidade\" class=\"input-border\" type=\"text\"></ion-input>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <ion-label>Bairro</ion-label>\n        <ion-input formControlName=\"district\" placeholder=\"Bairro\" class=\"input-border\" type=\"text\"></ion-input>\n      </div>\n      <div class=\"col-12 mt-3 mb-5\">\n        <ion-label>Número</ion-label>\n        <ion-input formControlName=\"number\" placeholder=\"Numero\" class=\"input-border\" type=\"number\"></ion-input>\n      </div>\n\n    </div>\n  </div>\n\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/dual-persona/dual-persona.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/dual-persona/dual-persona.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAutenticationDualPersonaDualPersonaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-dual\">\n      <div class=\"logo-dual\"></div>\n    </div>\n    <div class=\"col-10 mt-5 ml-auto mr-auto mb-5\">\n      <p class=\"msg\">\n        <strong>Olá, {{user.user}}.</strong> <br>Vimos no nosso sistema que você é um dos nossos agentes.\n        <br> Qual modo você deseja acessar?\n      </p>\n      <hr style=\"background: #00000012;\">\n    </div>\n    <div class=\"col-9 mt-4 ml-auto mr-auto\">\n      <div class=\"row card-footer footer-next mt-5\">\n        <div class=\"col-12\" (click)=\"viewDashboard()\">\n          <p>\n            <span class=\"view-info\">MODO PACIENTE</span>\n            <span class=\"view-info-icon\">\n              <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\n            </span>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-10 mt-5 ml-auto mr-auto\"></div>\n    <div class=\"col-9 mt-5 ml-auto mr-auto\">\n      <div class=\"row card-footer footer-agent\">\n        <div class=\"col-12\" (click)=\"viewAgent()\">\n          <p>\n            <span class=\"view-info\">MODO AGENTE</span>\n            <span class=\"view-info-icon\">\n              <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\n            </span>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/first-access/first-access.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/first-access/first-access.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAutenticationFirstAccessFirstAccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-12 header-first\">\n    <div class=\"row\">\n      <div class=\"col-2 mt-2\">\n        <ion-icon *ngIf=\"stepSelect === 0\" (click)=\"backLogin()\" class=\"ml-2\" style=\"cursor:pointer;\" name=\"close-outline\"></ion-icon>\n        <ion-icon *ngIf=\"stepSelect !== 0\" (click)=\"next(stepSelect - 1)\" class=\"ml-2\" name=\"arrow-back-outline\">\n        </ion-icon>\n      </div>\n      <div class=\"col-10\">\n        <label class=\"label-account\">CRIAR CONTA</label>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-12 mt-5\"></div>\n  <div class=\"col-12 mt-5\"></div>\n  <div class=\"col-12\" [formGroup]=\"formFirst\">\n    <div class=\"col-12\" [hidden]=\"stepSelect !== 0\">\n      <label class=\"label-first ml-3 mt-5\">Vamos criar sua conta!</label>\n      <div class=\"col-12 mt-3\">\n        <label class=\"label-first-second\">Insira seu CPF</label><br>\n        <ion-input \n           formControlName=\"cpf\"\n           class=\"input-border\"\n           placeholder=\"000.000.000-00\" \n           type=\"text\"\n           [brmasker]=\"{person: true}\">\n        </ion-input>\n      </div>\n    </div>\n\n    <div class=\"col-12\" [hidden]=\"stepSelect !== 1\">\n      <label class=\"label-first ml-3 mt-5\">Olá, {{user?.name}}</label>\n      <div class=\"col-12 mt-3\">\n        <label class=\"label-first-second\">Insira sua data de nascimento</label><br>\n        <ion-input formControlName=\"date\" class=\"input-border\" placeholder=\"13/12/1993\" type=\"date\">\n        </ion-input>\n      </div>\n    </div>\n\n    <div class=\"col-12\" [hidden]=\"stepSelect !== 2\">\n      <label class=\"label-first ml-3 mt-5\">\n        {{user?.name}}, indentificamos em nosso sistema que você é um agente do STC.\n      </label>\n      <div class=\"col-12 mt-3\">\n        <span class=\"label-first-secound\">\n          Você pode alternar sua conta para o “modo paciente” acessando o menu e indo na opção alternar contas.\n        </span>\n      </div>\n    </div>\n\n    <div class=\"col-12\" [hidden]=\"stepSelect !== 3\">\n      <div class=\"col-12 mt-5\">\n        <label class=\"label-first-second\">E-mail</label><br>\n        <ion-input formControlName=\"email\" class=\"input-border\" placeholder=\"email@email.com\" type=\"email\"></ion-input>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <label class=\"label-first-second\">Confirmar E-mail</label><br>\n        <ion-input formControlName=\"cEmail\" class=\"input-border\" placeholder=\"email@email.com\" type=\"email\"></ion-input>\n      </div>\n    </div>\n\n    <div class=\"col-12\" [hidden]=\"stepSelect !== 4\">\n      <div class=\"col-12 mt-5\">\n        <label class=\"label-first-second\">Senha</label><br>\n        <ion-input formControlName=\"password\" class=\"input-border\" placeholder=\"********\" type=\"password\"></ion-input>\n      </div>\n      <div class=\"col-12 mt-3\">\n        <label class=\"label-first-second\">Confirmar senha</label><br>\n        <ion-input formControlName=\"repeatPassword\" class=\"input-border\" placeholder=\"********\" type=\"password\"></ion-input>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"stepSelect !== stepEnd\" class=\"col-8 btn-login mr-auto ml-auto mt-5\" (click)=\"next(stepSelect + 1)\">\n    Próximo\n  </div>\n\n  <div *ngIf=\"stepSelect === stepEnd\" class=\"col-8 btn-login mr-auto ml-auto mt-5\" (click)=\"save()\">\n    Salvar\n  </div>\n\n  <div *ngIf=\"stepSelect !== 0\" class=\"col-8 btn-back mr-auto ml-auto mt-3\" (click)=\"next(stepSelect - 1, true)\">\n    Voltar\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/first-access/term-accept/term-accept.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/first-access/term-accept/term-accept.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAutenticationFirstAccessTermAcceptTermAcceptComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-dual\">\n      <div class=\"logo-dual\"></div>\n    </div>\n    <div class=\"col-10 mt-5 ml-auto mr-auto mb-5\">\n      <p class=\"msg\">\n        <strong>Termo de aceite</strong> <br>\n        Expresso meu consentimento quanto ao uso de meus dados pessoais não sensíveis aqui expostos para uso exclusivo no Tratamento para a execução de políticas públicas conforme prevê a Lei 13709. Lei Geral de Proteção de Dados Pessoais (LGPD), de 14 de agosto de 2018 - nos artigos: Art 7, inciso III e art 11. II 'b'\n      </p>\n      <hr style=\"background: #00000012;\">\n    </div>\n    <div class=\"col-9 mt-4 ml-auto mr-auto\">\n      <div class=\"row card-footer footer-next mt-5\">\n        <div class=\"col-12\" (click)=\"next()\">\n          <p>\n            <span class=\"view-info\">CONTINUAR</span>\n            <span class=\"view-info-icon\">\n              <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\n            </span>\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-10 mt-5 ml-auto mr-auto\"></div>\n    <div class=\"col-9 mt-5 ml-auto mr-auto\">\n      <div class=\"row card-footer footer-agent\">\n        <div class=\"col-12\" (click)=\"back()\">\n          <p>\n            <span class=\"view-info\">VOLTAR</span>\n            <span class=\"view-info-icon\">\n              <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\n            </span>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/login/login.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/login/login.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAutenticationLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n  <div class=\"col-12 header\">\n    <div class=\"logo\"></div>\n  </div>\n</div>\n  <div class=\"row\">\n  <div class=\"col-12 mt-1\" [formGroup]=\"formLogin\">\n    <!-- FORM LOGIN -->\n    <div class=\"row m-auto pr-5 pl-5\">\n      <div class=\"col-12 row input-login m-auto\">\n        <div class=\"col-2 text-right\">\n          <ion-icon name=\"person-outline\"></ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <input id=\"cpf\" formControlName=\"cpf\" placeholder=\"CPF\" type=\"text\" max=\"14\"\n            class=\"form-control input-login no-border font-size-12\" [brmasker]=\"{person: true}\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row m-auto pl-5 pr-5 pt-3\">\n      <div class=\"col-12 row input-login m-auto\">\n        <div class=\"col-2 text-right\">\n          <ion-icon name=\"lock-closed-outline\"></ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <input id=\"senha\" formControlName=\"password\" placeholder=\"Senha\" type=\"password\"\n            class=\"form-control input-login no-border font-size-12\">\n        </div>\n      </div>\n    </div>\n    <div class=\"row m-auto pl-5 pr-5 pt-4\">\n      <button class=\"col-12 btn-login m-auto\" (click)=\"postLogin()\">\n        Entrar\n      </button>\n    </div>\n    <div class=\"row m-auto pl-5 pr-5 pt-4\">\n      <div class=\"col-12 text-center label-password\" style=\"cursor: pointer;\" (click)=\"resetPassword()\">\n        Esqueci minha senha\n      </div>\n    </div>\n  </div>\n</div>\n<ion-footer class=\"ion-no-border footer-app text-center\">\n  <span style=\"cursor: pointer;\" (click)=\"openFirstAccess()\">\n     Primeiro Acesso?\n  </span>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/password-reset/password-reset.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/password-reset/password-reset.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAutenticationPasswordResetPasswordResetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-dual\">\n      <div class=\"logo-dual\"></div>\n    </div>\n    <div class=\"col-10 mt-4 ml-auto mr-auto\" [formGroup]=\"form\">\n      <div class=\"col-12 mt-5\">\n        <label class=\"label-first-second\">Digite seu e-mail de acesso</label><br>\n        <ion-input formControlName=\"email\" class=\"input-border\" placeholder=\"email@email.com\" type=\"email\"></ion-input>\n      </div>\n    </div>\n    <div class=\"col-9 mt-5 ml-auto mr-auto\">\n      <button class=\"col-12 btn-login\" (click)=\"send()\">Confirmar</button>      \n    </div>\n    <div class=\"col-9 mt-3 ml-auto mr-auto\">\n      <button (click)=\"back()\" class=\"col-12 btn-cancel\">Voltar</button>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-room/chat-room.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-room/chat-room.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatRoomChatRoomPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" (click)=\"closeModal()\" name=\"arrow-back-outline\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">{{ user.name }}</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div>\n      <div class=\"col-11 mr-auto ml-auto mt-4\" *ngFor=\"let mess of messages\">\n        <div flex flow-right *ngIf=\"mess.from === session\">\n          <ion-card bg-light>\n            <ion-card-content style=\"padding-bottom: 0px;\">\n              {{ mess.msg }}\n              <p text-right no-margin light-time-white>{{ formatDate(mess) }}</p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <div flex *ngIf=\"mess.from !== session\">\n          <ion-card bg-white>\n            <ion-card-content style=\"padding-bottom: 0px;\">\n              {{ mess.msg }}\n              <p text-right no-margin light-time>{{ formatDate(mess) }}</p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <div slot=\"start\" padding>😀</div>\n    <ion-input [(ngModel)]=\"chat\" (keyup.enter)=\"sendChat()\" placeholder=\"No que você esta pensando agora?\"></ion-input>\n    <img src=\"assets/imagens/enviar.png\" (click)=\"sendChat()\" alt=\"auto\" width=25px slot=\"end\" padding>\n    <img src=\"assets/imagens/email.png\" alt=\"auto\" width=30px slot=\"end\" padding>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filter-chat-modal/filter-chat-modal.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/filter-chat-modal/filter-chat-modal.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFilterChatModalFilterChatModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\" [formGroup]=\"form\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" (click)=\"dismiss()\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Filtrar</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-10 mr-auto ml-auto mt-4\">\n      <div class=\"col-12 mt-3\">\n        <label class=\"label-first-second\">Nome:</label><br>\n        <ion-input formControlName=\"name\" class=\"input-border\" placeholder=\"Digite algum nome...\" type=\"text\">\n        </ion-input>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col-6\">\n          <div class=\"btn-back\" (click)=\"cleanFilter()\">Limpar Filtro</div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"btn-login\" (click)=\"applyFilter()\">Aplicar</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filter-date-modal/filter-date-modal.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/filter-date-modal/filter-date-modal.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFilterDateModalFilterDateModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\" [formGroup]=\"form\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" (click)=\"dismiss()\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Filtrar</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-10 mr-auto ml-auto mt-4\">\n      <div class=\"col-12 mt-4\">\n        <label class=\"label-first-second\">Data de início</label><br>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"00/00/0000\" formControlName=\"startDate\"\n          class=\"input-border\" display-timezone=\"utc\"\n          monthShortNames=\"jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez\" done-text=\"confirmar\"\n          cancel-text=\"cancelar\"></ion-datetime>\n      </div>\n      <div class=\"col-12 mt-4\">\n        <label class=\"label-first-second\">Data de fim</label><br>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"00/00/0000\" formControlName=\"endDate\"\n          class=\"input-border\" display-timezone=\"utc\"\n          monthShortNames=\"jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez\" done-text=\"confirmar\"\n          cancel-text=\"cancelar\"></ion-datetime>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col-6\">\n          <div class=\"btn-back\" (click)=\"cleanFilter()\">Limpar Filtro</div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"btn-login\" (click)=\"applyFilter()\">Aplicar</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dependent/dependent-add/dependent-add.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dependent/dependent-add/dependent-add.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDependentDependentAddDependentAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\" [formGroup]=\"form\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" (click)=\"dismiss()\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Novo Dependente</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-10 mr-auto ml-auto mt-4\">\n      <div class=\"col-12 mt-3\">\n        <label class=\"label-first-second\">CPF</label><br>\n        <ion-input formControlName=\"cpf\" class=\"input-border\" placeholder=\"000.000.000-00\" type=\"text\"\n          [brmasker]=\"{person: true}\">\n        </ion-input>\n      </div>\n      <div class=\"col-12 mt-4\">\n        <label class=\"label-first-second\">Data de nascimento</label><br>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"00/00/0000\" formControlName=\"birthDate\"\n          class=\"input-border\" display-timezone=\"utc\"\n          monthShortNames=\"jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez\" done-text=\"confirmar\"\n          cancel-text=\"cancelar\"></ion-datetime>\n      </div>\n      <div class=\"col-12 mt-4\">\n        <div class=\"btn-login\" (click)=\"save()\">Salvar</div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dependent/dependent-list/dependent-list.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dependent/dependent-list/dependent-list.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDependentDependentListDependentListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" [routerLink]=\"['/']\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Meus Dependentes</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-4 mr-auto ml-auto mt-4 text-center filter\">\n      <div class=\"row\" (click)=\"presentFilterModal()\">\n        <div class=\"col-8 filter-text\">\n          <span>Filtrar</span>\n          <span class=\"filter-applied\" *ngIf=\"isFilterActive\"></span>\n        </div>\n        <div class=\"col-3 text-right filter-text\">\n          <ion-icon class=\"filter-icon\" name=\"funnel\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4 mr-auto ml-auto mt-4 text-center filter\">\n      <div class=\"row\" (click)=\"presentModal()\">\n        <div class=\"col-8 filter-text\">\n          Novo\n        </div>\n        <div class=\"col-2 text-right filter-text\">\n          <ion-icon class=\"filter-icon\" name=\"add-circle\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-11 mr-auto ml-auto mt-4\" *ngIf=\"dependents.length === 0\">\n      <ion-card class=\"card p-2 nonedepenent\">\n        <ion-card-content>\n          <div class=\"row p-0 text-center\">\n            <div class=\"col-12\">Nenhum dependente vinculado</div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div *ngIf=\"dependents.length > 0\">\n      <div class=\"col-11 mr-auto ml-auto mt-4\" *ngFor=\"let item of dependents\">\n        <ion-card class=\"card p-2\">\n          <ion-card-header>\n            <ion-card-title class=\"title\">PACIENTE</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <div class=\"row p-0\" (click)=\"viewDependent(item)\">\n              <div class=\"col-12\"><b>Nome: </b> {{item.patient.name}}</div>\n              <div class=\"col-12\">\n                <b>CPF: </b> {{item.patient.cpf | mask: '000.000.000-00'}}\n              </div>\n              <div class=\"col-12\">\n                <b>E-mail: </b> {{item.patient.email}}\n              </div>\n            </div>\n            <div class=\"row p-0\">\n              <div class=\"col-12 mt-4\">\n                <div class=\"btn-cancel\" (click)=\"removeDependentConfirm(item)\">\n                  Remover\n                </div>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard-agent/dashboard-agent.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard-agent/dashboard-agent.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeDashboardAgentDashboardAgentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header\">\n      <div class=\"row ml-4 mt-4\">\n        <div class=\"col-7 logo-dashboard mt-2\"></div>\n        <div class=\"col-2 mt-2 text-right\">\n          <ion-icon (click)=\"dash()\" class=\"icon-swapper\" name=\"sync-circle\"></ion-icon>\n        </div>\n        <div class=\"col-2 mt-2 text-right\">\n          <ion-icon class=\"icon-swapper\" name=\"settings\" routerLink=\"/configuration\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 text-center\">\n          <label class=\"welcome\">\n            Olá,&nbsp;&nbsp;{{user.user}}!\n          </label>\n        </div>\n      </div>\n\n      <div class=\"col-12\">\n        <ion-card *ngIf=\"isLoading\">\n          <ion-card-content class=\"text-center\">\n            <div class=\"spinner-border text-primary\" role=\"status\">\n              <span class=\"sr-only\">Carregando...</span>\n            </div>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"title-next\">TOTAL DE PACIENTE</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"card-content info\">\n            Você gerencia <span class=\"text-count-user\">{{countUser}} pacientes.</span>\n          </ion-card-content>\n          <ion-row class=\"card-footer footer-next\" (click)=\"listUser()\">\n            <ion-col>\n              <p>\n                <span class=\"view-info\">VER INFORMAÇÕES</span>\n                <span class=\"view-info-icon\">\n                  <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\n                </span>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"title-next\">AGENDAMENTOS PENDENTES</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"card-content info\">\n            Agendamentos Pendentes\n          </ion-card-content>\n          <ion-row class=\"card-footer footer-my\" (click)=\"listPendingUserSchedules()\">\n            <ion-col>\n              <p>\n                <span class=\"view-info\">VER INFORMAÇÕES</span>\n                <span class=\"view-info-icon\">\n                  <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\n                </span>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n        <ion-card>\n          <ion-card-header>\n            <ion-card-title class=\"title-next\">AGENDAMENTOS CONFIRMADOS</ion-card-title>\n          </ion-card-header>\n          <ion-card-content class=\"card-content info\">\n            Agendamentos Confirmados\n          </ion-card-content>\n          <ion-row class=\"card-footer footer-depe\" (click)=\"listConfirmedUserSchedules()\">\n            <ion-col>\n              <p>\n                <span class=\"view-info\">VER INFORMAÇÕES</span>\n                <span class=\"view-info-icon\">\n                  <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\n                </span>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n\n      </div>\n    </div>\n  </div>\n  <!-- Botao do chat virtual -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" color=\"light\">\n    <img src=\"assets/imagens/chat.png\" (click)=\"showModalChat()\" alt=\"auto\" width=50px>\n    <ion-badge style=\"background-color: #3880ff;\">{{amountOfMessages}}</ion-badge>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard-agent/schedules-users/schedules-users.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard-agent/schedules-users/schedules-users.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeDashboardAgentSchedulesUsersSchedulesUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" (click)=\"backDash()\" name=\"arrow-back-outline\">\n          </ion-icon>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-4 mr-auto ml-auto mt-4 text-center filter\">\n      <div class=\"row\" (click)=\"presentModal()\">\n        <div class=\"col-8 filter-text\">\n          <span>Filtrar</span>\n          <span class=\"filter-applied\" *ngIf=\"isFilterActive\"></span>\n        </div>\n        <div class=\"col-3 text-right filter-text\">\n          <ion-icon class=\"filter-icon\" name=\"funnel\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    \n    <div class=\"col-12 mt-1\" *ngIf=\"schedulingList?.length === 0\">\n      <div class=\"col-12 p-0\">\n        <ion-card class=\"card-content\">\n          <ion-card-content class=\"ml-2\">\n             <span class=\"ml-1\">NENHUM AGENDAMENTO ENCONTRADO</span>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n\n    <!-- Agendamentos -->\n    <div class=\"col-12 mt-1\" *ngFor=\"let item of schedulingList\">\n      <div class=\"col-12 p-0\">\n        <!-- Cards Status = Presente -->\n        <ion-card class=\"card-content\">\n          <div [ngClass]=\"item.backGroundColor\"></div>\n          <ion-card-header>\n            <ion-card-subtitle class=\"card-subtitle ml-2\">\n              <span class=\"ml-1\">{{item.nameStatus}}</span>\n            </ion-card-subtitle>\n            <ion-card-title class=\"ml-2 title-card mt-1\">{{item.title}}</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content class=\"ml-2\">\n            <span>\n              <b>Paciente: </b> {{item.patientName}}\n            </span><br>\n            <span>\n              <b>Local: </b> {{item.local}}\n            </span><br>\n            <span>\n              <b>Data: </b> {{item.data}}\n            </span>\n            <span><br>\n              <b>Horário: </b> {{item.hour}}\n            </span>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard/dashboard.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard/dashboard.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header\">\n      <div class=\"row ml-4 mt-4\">\n        <div class=\"col-5 logo-dashboard mt-2\"></div>\n        <div class=\"col-2 mt-2 text-right\">\n          <ion-icon *ngIf=\"isDependent\" (click)=\"myInfos()\" class=\"icon-swapper\" name=\"person-circle-outline\">\n          </ion-icon>\n        </div>\n        <div class=\"col-2 mt-2 text-right\">\n          <ion-icon (click)=\"agent()\" class=\"icon-swapper\" name=\"sync-circle\" *ngIf=\"user.typeUser === 'agente'\">\n          </ion-icon>\n        </div>\n        <div class=\"col-2 mt-2 text-right\">\n          <ion-icon class=\"icon-swapper\" name=\"settings\" routerLink=\"/configuration\"></ion-icon>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 text-center\">\n          <label class=\"welcome\">\n            Olá,&nbsp;&nbsp;{{userName}}\n          </label>\n        </div>\n      </div>\n      <div class=\"col-12\">\n        <ion-card *ngIf=\"isLoading\">\n          <ion-card-content class=\"text-center\">\n            <div class=\"spinner-border text-primary\" role=\"status\">\n              <span class=\"sr-only\">Carregando...</span>\n            </div>\n          </ion-card-content>\n        </ion-card>\n        <ion-card *ngIf=\"!isLoading\" (click)=\"detail(scheduling[0]?.id)\">\n          <ion-card-header>\n            <ion-card-title class=\"title-next\">PRÓXIMO AGENDAMENTO</ion-card-title>\n            <ion-card-subtitle *ngIf=\"scheduling.length > 0\">{{scheduling[0]?.title}}</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content class=\"card-content info\" *ngIf=\"scheduling.length > 0\">\n            DATA: {{scheduling[0]?.dateScheduling}} <br>\n            HORÁRIO: {{scheduling[0]?.hour}}\n          </ion-card-content>\n          <ion-card-content class=\"card-content info\" *ngIf=\"scheduling.length === 0\">\n            NENHUM AGENDAMENTO\n          </ion-card-content>\n          <ion-row class=\"card-footer footer-next\">\n            <ion-col>\n              <p>\n                <span class=\"view-info\">VER INFORMAÇÕES</span>\n                <span class=\"view-info-icon\">\n                  <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\n                </span>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n      <div class=\"col-12\">\n        <ion-card *ngIf=\"isLoading\">\n          <ion-card-content class=\"text-center\">\n            <div class=\"spinner-border text-primary\" role=\"status\">\n              <span class=\"sr-only\">Carregando...</span>\n            </div>\n          </ion-card-content>\n        </ion-card>\n        <ion-card *ngIf=\"!isLoading\" class=\"card-content\" (click)=\"myScheduling()\">\n          <ion-card-header>\n            <ion-card-title class=\"title\">MEUS AGENDAMENTOS</ion-card-title>\n            <ion-card-subtitle></ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content class=\"card-content info\" *ngIf=\"scheduling.length > 0\">\n            PRÓXIMO AGENDAMENTO: {{scheduling[0]?.dateScheduling}}\n          </ion-card-content>\n          <ion-card-content class=\"card-content info\" *ngIf=\"scheduling.length === 0\">\n            VEJA SEUS AGENDAMENTOS\n          </ion-card-content>\n          <ion-row class=\"card-footer footer-my\">\n            <ion-col>\n              <p>\n                <span class=\"view-info\">VER TODOS</span>\n                <span class=\"view-info-icon\">\n                  <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\n                </span>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n      <div class=\"col-12\" *ngIf=\"!user.dependent\">\n        <ion-card *ngIf=\"isLoading\">\n          <ion-card-content class=\"text-center\">\n            <div class=\"spinner-border text-primary\" role=\"status\">\n              <span class=\"sr-only\">Carregando...</span>\n            </div>\n          </ion-card-content>\n        </ion-card>\n        <ion-card *ngIf=\"!isLoading && !isDependent\" (click)=\"myDependent()\">\n          <ion-card-header>\n            <ion-card-title class=\"title\">DEPENDENTES</ion-card-title>\n            <ion-card-subtitle>VOCÊ POSSUI {{countUser}} DEPENDENTE(S)</ion-card-subtitle>\n          </ion-card-header>\n          <ion-card-content class=\"card-content info\">\n            ADICIONE OU REMOVA\n          </ion-card-content>\n          <ion-row class=\"card-footer footer-depe\">\n            <ion-col>\n              <p>\n                <span class=\"view-info\">VER DEPENDENTES</span>\n                <span class=\"view-info-icon\">\n                  <ion-icon name=\"arrow-forward-circle-outline\"></ion-icon>\n                </span>\n              </p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n  <!-- Botao do chat virtual -->\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" color=\"light\">\n    <img src=\"assets/imagens/chat.png\" (click)=\"showModalChat()\" alt=\"auto\" width=50px>\n    <ion-badge style=\"background-color: #3880ff;\">{{amountOfMessages}}</ion-badge>\n  </ion-fab>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-user-agent/filter-modal/filter-modal.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-user-agent/filter-modal/filter-modal.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListUserAgentFilterModalFilterModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\" [formGroup]=\"form\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" (click)=\"dismiss()\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Filtrar</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-10 mr-auto ml-auto mt-4\">\n      <div class=\"col-12 mt-3\">\n        <label class=\"label-first-second\">CPF</label><br>\n        <ion-input formControlName=\"cpf\" class=\"input-border\" placeholder=\"000.000.000-00\" type=\"text\"\n          [brmasker]=\"{person: true}\">\n        </ion-input>\n      </div>\n      <div class=\"col-12 mt-4\">\n        <label class=\"label-first-second\">Data de nascimento</label><br>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"00/00/0000\" formControlName=\"birthDate\"\n          class=\"input-border\" display-timezone=\"utc\"\n          monthShortNames=\"jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez\" done-text=\"confirmar\"\n          cancel-text=\"cancelar\"></ion-datetime>\n      </div>\n      <div class=\"row mt-4\">\n        <div class=\"col-6\">\n          <div class=\"btn-back\" (click)=\"cleanFilter()\">Limpar Filtro</div>\n        </div>\n        <div class=\"col-6\">\n          <div class=\"btn-login\" (click)=\"applyFilter()\">Aplicar</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-user-agent/list-user-add/list-user-add.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-user-agent/list-user-add/list-user-add.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListUserAgentListUserAddListUserAddComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\" [formGroup]=\"form\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" (click)=\"dismiss()\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Novo Usuário</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-10 mr-auto ml-auto mt-4\">\n      <div class=\"col-12 mt-3\">\n        <label class=\"label-first-second\">CPF</label><br>\n        <ion-input formControlName=\"cpf\" class=\"input-border\" placeholder=\"000.000.000-00\" type=\"text\"\n          [brmasker]=\"{person: true}\">\n        </ion-input>\n      </div>\n      <div class=\"col-12 mt-4\">\n        <label class=\"label-first-second\">Data de nascimento</label><br>\n        <ion-datetime displayFormat=\"DD/MM/YYYY\" placeholder=\"00/00/0000\" formControlName=\"birthDate\"\n          class=\"input-border\" display-timezone=\"utc\"\n          monthShortNames=\"jan, fev, mar, abr, mai, jun, jul, ago, set, out, nov, dez\" done-text=\"confirmar\"\n          cancel-text=\"cancelar\"></ion-datetime>\n      </div>\n      <div class=\"col-12 mt-4\">\n        <div class=\"btn-login\" (click)=\"save()\">Salvar</div>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-user-agent/list-user/list-user.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-user-agent/list-user/list-user.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListUserAgentListUserListUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" [routerLink]=\"['/agent']\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Meus Pacientes</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-4 mr-auto ml-auto mt-4 text-center filter\">\n      <div class=\"row\" (click)=\"presentModal()\">\n        <div class=\"col-8 filter-text\">\n          <span>Filtrar</span>\n          <span class=\"filter-applied\" *ngIf=\"isFilterActive\"></span>\n        </div>\n        <div class=\"col-3 text-right filter-text\">\n          <ion-icon class=\"filter-icon\" name=\"funnel\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-4 mr-auto ml-auto mt-4 text-center filter\">\n      <div class=\"row\" (click)=\"userAddModal()\">\n        <div class=\"col-8 filter-text\">\n          Novo\n        </div>\n        <div class=\"col-3 text-right filter-text\">\n          <ion-icon class=\"filter-icon\" name=\"add-circle\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-11 mr-auto ml-auto mt-4\" *ngIf=\"holders.length === 0\">\n      <ion-card class=\"card p-2 noneholder\">\n        <ion-card-content>\n          <div class=\"row p-0 text-center\">\n            <div class=\"col-12\">Nenhum paciente vinculado</div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div class=\"col-10 mr-auto ml-auto mt-4\" *ngFor=\"let item of holders\">\n      <ion-card class=\"card p-2\">\n        <ion-card-header>\n          <ion-card-title class=\"title\">PACIENTE</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <div class=\"row p-0\" (click)=\"viewUser(item)\">\n            <div class=\"col-7\"><b>Nome: </b> {{item.patient.name}}</div>\n            <div class=\"col-5 text-right\"><b>Idade: </b> {{item.age}}</div>\n            <div class=\"col-12\">\n              <b>CPF: </b> {{item.patient.cpf | mask: '000.000.000-00'}}\n            </div>\n            <div class=\"col-12\" *ngIf=\"item.nextConsulting !== null\">\n              <b>Próxima Consulta: </b> {{item.nextConsulting | date:'dd/MM/yyyy'}}\n            </div>\n            <div class=\"col-12\" *ngIf=\"item.nextConsulting === null\">\n              <b>Próxima Consulta: </b> <br> Nenhuma consulta encontrada\n            </div>\n          </div>\n          <div class=\"row p-0\">\n            <div class=\"col-12 mt-4\">\n              <div class=\"btn-cancel\" (click)=\"removePatientConfirm(item)\">\n                Remover\n              </div>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-newchat/modal-newchat.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal-newchat/modal-newchat.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalNewchatModalNewchatPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" (click)=\"closeModal()\" name=\"arrow-back-outline\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Chat Vírtual</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div *ngIf=\"user.typeUser === 'agente'\" class=\"col-4 mr-auto ml-auto mt-4 text-center filter\">\n      <div class=\"row\" (click)=\"presentModal()\">\n        <div class=\"col-8 filter-text\">\n          <span>Filtrar</span>\n          <span class=\"filter-applied\" *ngIf=\"isFilterActive\"></span>\n        </div>\n        <div class=\"col-3 text-right filter-text\">\n          <ion-icon class=\"filter-icon\" name=\"funnel\"></ion-icon>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"user.typeUser === 'agente'\">\n      <div class=\"col-11 mr-auto ml-auto mt-4\" *ngFor=\"let mensageiro of mensageiros\">\n        <ion-card class=\"card p-2\" (click)=\"openChat(mensageiro.patient)\">\n          <div style=\"margin-block-end: -50px;\">\n            <ion-row>\n              <ion-col></ion-col>\n              <ion-col></ion-col>\n              <ion-col></ion-col>\n              <ion-col>\n                <ion-button fill=\"clear\">\n                  <img src=\"assets/imagens/chat.png\" alt=\"auto\" width=50px>\n                  <ion-badge *ngIf=\"mensageiro.patient['amountOfMessages']\"\n                    style=\"background-color: #3880ff; height: 15px; font-size: 10px;\">\n                    {{mensageiro.patient['amountOfMessages']}}</ion-badge>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n          <ion-card-header>\n            <ion-card-title class=\"title\">PACIENTE</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <div class=\"row p-0\">\n              <div class=\"col-7\"><b>Nome: </b> {{mensageiro.patient.name}}</div>\n              <div class=\"col-5 text-right\"><b>Idade: </b> {{mensageiro.age}}</div>\n              <div class=\"col-12\">\n                <b>CPF: </b> {{mensageiro.patient.cpf | mask: '000.000.000-00'}}\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n    <div *ngIf=\"user.typeUser !== 'agente'\">\n      <div class=\"col-11 mr-auto ml-auto mt-4\" *ngFor=\"let mensageiro of mensageiros\">\n        <ion-card class=\"card p-2\" (click)=\"openChat(mensageiro)\">\n          <div style=\"margin-block-end: -50px;\">\n            <ion-row>\n              <ion-col></ion-col>\n              <ion-col></ion-col>\n              <ion-col></ion-col>\n              <ion-col>\n                <ion-button fill=\"clear\">\n                  <img src=\"assets/imagens/chat.png\" alt=\"auto\" width=50px>\n                  <ion-badge *ngIf=\"mensageiro['amountOfMessages']\"\n                    style=\"background-color: #3880ff; height: 15px; font-size: 10px;\">{{mensageiro['amountOfMessages']}}\n                  </ion-badge>\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n          <ion-card-header>\n            <ion-card-title class=\"title\">AGENTE</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <div class=\"row p-0\">\n              <div class=\"col-7\"><b>Nome: </b> {{mensageiro.name}}</div>\n              <div class=\"col-5 text-right\"><b>E-mail: </b> {{mensageiro.email}}</div>\n              <div class=\"col-12\">\n                <b>CPF: </b> {{mensageiro.cpf | mask: '000.000.000-00'}}\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n  </div>\n</ion-content>`";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/detail/detail.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/detail/detail.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuizDetailDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" routerLink=\"/list\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Avaliar consulta</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-3\"></div>\n    <div class=\"col-11 mr-auto ml-auto mt-2\">\n      <p class=\"text-introduction\">Olá <b>{{card?.patientName}}</b>, convidamos você para responder algumas breves questões que medem seu grau de satisfação para melhorarmos cada vez mais nossos serviços.</p>\n    </div>\n    <div class=\"col-12\">\n      <ion-card class=\"mt-1\">\n        <ion-card-header class=\"card-header\">\n          <ion-card-title class=\"title-card mt-1\">{{card?.title}}</ion-card-title>\n          <ion-card-subtitle class=\"card-subtitle mt-1\">\n            <span>{{card?.persona}}</span>\n          </ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content class=\"mt-2 card-content\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <span>\n                <b>Data: </b> {{card?.data}}\n              </span>\n            </div>\n            <div class=\"col-6 text-right\">\n              <span>\n                {{card?.day}}\n              </span>\n            </div>\n            <div class=\"col-12\">\n              <span>\n                <b>Horário: </b> {{card?.hour}}\n              </span>\n            </div>\n            <div class=\"col-12\">\n              <span>\n                <b>Local: </b> {{card?.local}}\n              </span>\n            </div>\n            <div class=\"col-12\">\n              <span>\n                <b>Cidade: </b> {{card?.city}}\n              </span>\n            </div>\n            <div class=\"col-12\">\n              <span>\n                <b>Endereço: </b> {{card?.address}}\n              </span>\n            </div>\n            <div class=\"col-12\">\n              <span>\n                <b>Bairro: </b> {{card?.district}}\n              </span>\n            </div>\n            <div class=\"col-12\">\n              <span>\n                <b>Número: </b> {{card?.number}}\n              </span>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div class=\"col-12\" *ngIf=\"mockTransport !== null\">\n      <ion-card class=\"mt-1\">\n        <ion-card-header class=\"card-header\">\n          <ion-card-title class=\"content mt-1\"><b>Data:</b> {{mockTransport?.date}}</ion-card-title>\n          <ion-card-subtitle class=\"content mt-1\">\n            <span><b>Horário de partida: </b>{{mockTransport?.hour}}</span><br>\n            <span><b>Horário de retorno: </b>{{mockTransport?.hour_return}}</span>\n          </ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content class=\"mt-2 card-content\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <b>Local: </b> {{mockTransport?.site}}\n            </div>\n            <div class=\"col-12\">\n              <b>Cidade: </b> {{mockTransport?.city}}\n            </div>\n            <div class=\"col-12\">\n              <b>Endereço: </b> {{mockTransport?.address}}\n            </div>\n            <div class=\"col-12\">\n              <b>Bairro: </b> {{mockTransport?.district}}\n            </div>\n            <div class=\"col-12\">\n              <b>Número: </b> {{mockTransport?.number}}\n            </div>\n            <div class=\"col-12\">\n              <b>Placa do veículo: </b> {{mockTransport?.transport?.board}}\n            </div>\n            <div class=\"col-12\">\n              <b>Motorista: </b> {{mockTransport?.transport?.driver}}\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div class=\"col-11 mr-auto ml-auto mt-1 mb-3\">\n      <div *ngIf=\"quiz !== null\" class=\"btn-back\" (click)=\"start()\">\n        <label>Avaliar</label>\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/question/question.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/question/question.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuizQuestionQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" [routerLink]=\"['/list']\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Avaliar consulta</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-10 mr-auto ml-auto mt-4 text-center\" *ngFor=\"let question of questions; let last = last; let first = first;\" [hidden]=\"question.step !== stepActual\">\n      <label class=\"title-question\" *ngIf=\"!last\">{{question.title}}</label>      \n      <div class=\"col-12 mr-auto ml-auto\" *ngFor=\"let option of question.options\" (click)=\"navigateStep(stepActual + 1, option)\">\n        <div class=\"option row mt-4\" [ngClass]=\"{'option-select': option.select}\">\n          <div class=\"col-6 text-left\">\n            {{option.name}}\n          </div>\n          <div class=\"col-6 text-right option-icon\">\n          <ion-icon [ngStyle]=\"{'color': option.color}\" name={{option.icon}}></ion-icon>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-12 mr-auto ml-auto\" *ngIf=\"last\">\n        <ion-textarea rows=\"6\" cols=\"20\" [(ngModel)]=\"comments\" placeholder=\"{{question.title}}\"></ion-textarea>\n      </div>      \n\n    <div class=\"btn-back col-12 mr-auto ml-auto mt-4\" *ngIf=\"!first\" (click)=\"navigateStep(stepActual - 1)\">\n      Voltar\n    </div>\n    <div (click)=\"send()\" class=\"btn-login col-12 mr-auto ml-auto mt-4\" *ngIf=\"last\">\n      Enviar\n    </div>\n\n    <div class=\"col-12 mt-5 mr-auto ml-auto\" *ngIf=\"last\">                       \n      <ion-label class=\"font-size-anonimate\">\n        Desejo responder o questionário anonimamente          \n      </ion-label>        \n    </div>\n    <div class=\"col-12 mt-3 mr-auto ml-auto\"  *ngIf=\"last\" [formGroup]=\"form_anonimate\">\n      <ion-checkbox formControlName=\"is_anonimate\"></ion-checkbox> \n    </div>\n\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/thank-you/thank-you.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/thank-you/thank-you.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppQuizThankYouThankYouComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" (click)=\"goToList()\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Meus agendamentos</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-4 text-center\">\n      <img src=\"../../../assets/thankful.png\" alt=\"\">\n    </div>\n    <div class=\"col-10 ml-auto mr-auto mt-4 text-center\">\n      <label class=\"text\">\n        Obrigado pela sua avaliação, ela nos ajuda a frequentemente melhorar nosso sistema e conhecer melhor nossos médicos parceiros. \n      </label>\n    </div>\n    <div class=\"btn-login col-10 mt-4 ml-auto mr-auto\" (click)=\"goToList()\">\n      Meus agendamentos\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/cancel/cancel.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/cancel/cancel.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSchedulingCancelCancelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" (click)=\"backList()\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Desistir da consulta</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-3\">\n      <div class=\"col-10 options mr-auto ml-auto mt-3\" *ngFor=\"let item of optionCancel\" (click)=\"presentModal(item)\">\n        {{item.name}}\n      </div>\n    </div>\n    <!-- <div class=\"col-11 ml-auto mr-auto mt-5\">\n      <div class=\"btn-cancel\">\n        Cancelar\n      </div>\n    </div> -->\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/cancel/modal-cancel/modal-cancel.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/cancel/modal-cancel/modal-cancel.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSchedulingCancelModalCancelModalCancelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" (click)=\"dismiss()\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">{{optionName}}</label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div [formGroup]=\"formDescription\" class=\"col-10 ml-auto mr-auto mt-3\" *ngIf=\"option === 1 || option === 4\">\n      <label class=\"label-modal-cancel\">Observações</label>\n      <ion-textarea formControlName=\"description\" rows=\"6\" cols=\"20\" placeholder=\"Informe uma observação\"></ion-textarea>\n    </div><!-- Observações -->\n\n    <div class=\"col-10 ml-auto mr-auto mt-3 text-center\" *ngIf=\"option === 2\">\n      <label class=\"label-modal-cancel\">Qual melhor dia da semana para agendarmos novamente?</label>\n    </div>\n    <div *ngIf=\"option === 2\" [formGroup]=\"formDateIncompatible\" class=\"row ml-auto mr-auto\">\n      <div class=\"col-11 mt-2 mr-auto ml-auto text-center\">\n        <ion-list>\n          <ion-item *ngFor=\"let entry of weekDays; let i = index\">\n            <ion-label>{{entry}}</ion-label>\n            <ion-checkbox [value]=\"entry\" (click)=\"selectDays(entry, i)\" slot=\"end\"></ion-checkbox>\n          </ion-item>\n        </ion-list>\n      </div>\n      <div class=\"col-11 mt-2 mb-5 mr-auto ml-auto text-center\">\n        <label class=\"label-modal-cancel\" for=\"\">Qual o melhor período?</label>\n        <ion-list>\n          <ion-item *ngFor=\"let entry of period; let i = index\">\n            <ion-label>{{entry.name}}</ion-label>\n            <ion-checkbox [value]=\"entry\" (click)=\"selectPeriod(entry, i)\" slot=\"end\"></ion-checkbox>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div><!-- Data incompatível -->\n\n    <div class=\"col-10 ml-auto mr-auto mt-3 text-center\" *ngIf=\"option === 3\">\n      <label class=\"label-modal-cancel\">Você deseja adiar o agendamento para daqui quantos dias?</label>\n    </div>\n    <div [formGroup]=\"formDelay\" *ngIf=\"option === 3\" class=\"col-11 mt-2 mb-5 mr-auto ml-auto text-center\">\n      <ion-list>\n        <ion-radio-group>\n          <ion-item *ngFor=\"let entry of days\">\n            <ion-label>{{entry.name}}</ion-label>\n            <ion-radio (click)=\"selectDelayDay(entry.name)\" slot=\"end\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n    </div><!-- Adiar -->\n\n  </div>\n\n  <ion-footer class=\"ion-no-border\">\n    <div class=\"col-10 ml-auto mr-auto btn-login\" (click)=\"send()\">\n      Enviar\n    </div>\n  </ion-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/detail/detail.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/detail/detail.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSchedulingDetailDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" name=\"arrow-back-outline\" (click)=\"backDash()\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label *ngIf=\"stepActual === 1\" class=\"label-account\">Detalhes do Agendamento</label>\n          <label *ngIf=\"stepActual !== 1\" class=\"label-account\">Confirmação de Agendamento</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\" *ngIf=\"scheduling.transport === null\"></div>\n    <div class=\"col-11 ml-auto mr-auto mt-3\" *ngIf=\"scheduling.transport !== null\">\n      <span class=\"title-card\"><b>Agendamento</b></span>\n    </div>\n    <div class=\"col-12\">\n      <ion-card class=\"mt-1\">\n        <ion-card-header class=\"card-header\">\n          <ion-card-title class=\"title-card mt-1\">{{\n            scheduling.title\n            }}</ion-card-title>\n          <ion-card-subtitle class=\"card-subtitle mt-1\">\n            <span>{{ scheduling.professional }}</span>\n          </ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content class=\"mt-2 card-content\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <span> <b>Data: </b> {{ scheduling.data }} </span>\n            </div>\n            <div class=\"col-6 text-right\">\n              <span>\n                {{ scheduling.day }}\n              </span>\n            </div>\n            <div class=\"col-12\">\n              <span> <b>Horário: </b> {{ scheduling.hour }} </span>\n            </div>\n            <div class=\"col-12\">\n              <span> <b>Local: </b> {{ scheduling.local }} </span>\n            </div>\n            <div class=\"col-12\">\n              <span> <b>Cidade: </b> {{ scheduling.city }} </span>\n            </div>\n            <div class=\"col-12\">\n              <span> <b>Endereço: </b> {{ scheduling.address }} </span>\n            </div>\n            <div class=\"col-12\">\n              <span> <b>Bairro: </b> {{ scheduling.district }} </span>\n            </div>\n            <div class=\"col-12\">\n              <span> <b>Número: </b> {{ scheduling.number }} </span>\n            </div>\n            <div class=\"col-12\">\n              <span> <b>Observações:</b> {{ scheduling.obs }} </span>\n            </div>\n            <div class=\"col-12\" *ngIf=\"scheduling?.files?.length > 0\">\n              <hr>\n              <div class=\"row\">\n                <div class=\"col-12 text-center mt-2\" *ngFor=\"let item of scheduling?.files\">\n                  <ion-icon name=\"file-tray-full-outline\" style=\"font-size: 2em\" (click)=\"downloadFile(item)\"></ion-icon>\n                  <br />\n                  {{ item.fileName }}\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 text-center mt-2\" *ngIf=\"scheduling.urlMap !== null\">\n              <a target=\"_blank\" href=\"{{ scheduling.urlMap }}\">\n                <ion-icon style=\"font-size: 2em\" name=\"map-outline\"></ion-icon><br />\n                Ver no mapa\n              </a>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div class=\"col-11 m-auto\" *ngIf=\"scheduling.transport !== null\">\n      <span class=\"title-card\"><b>Transporte</b></span>\n    </div>\n    <div class=\"col-12\" *ngIf=\"scheduling.transport !== null\">\n      <ion-card class=\"mt-1\">\n        <ion-card-header class=\"card-header\">\n          <ion-card-title class=\"content mt-1\"><b>Data:</b> {{ scheduling?.data }}</ion-card-title>\n          <ion-card-subtitle class=\"content mt-1\">\n            <span><b>Horário de partida: </b>{{ scheduling?.transport?.hourStart }}</span><br />\n            <span><b>Horário de retorno: </b>{{ scheduling?.transport?.hourReturn }}</span>\n          </ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content class=\"mt-2 card-content\">\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <b>Destino: </b> {{ scheduling?.transport?.site }}\n            </div>\n            <div class=\"col-12\">\n              <b>Partida: </b> {{ scheduling?.transport?.city }}\n            </div>\n            <div class=\"col-12\">\n              <b>Endereço: </b> {{ scheduling?.transport?.address }}\n            </div>\n            <div class=\"col-12\">\n              <b>Bairro: </b> {{ scheduling?.transport?.district }}\n            </div>\n            <div class=\"col-12\">\n              <b>Referencia: </b> {{ scheduling?.transport?.reference }}\n            </div>\n            <div class=\"col-12\">\n              <b>Placa do veículo: </b> {{ scheduling?.transport?.board }}\n            </div>\n            <div class=\"col-12\">\n              <b>Motorista: </b> {{ scheduling?.transport?.driver }}\n            </div>\n            <div class=\"col-12\">\n              <b>Telefone do Motorista:</b>\n              {{ scheduling?.transport?.driverTel }}\n            </div>\n            <div class=\"col-12 mt-3 text-center alert-transport\">\n              <b>O transporte pode ser alterado devido a disponibilidade da\n                prefeitura.</b>\n            </div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <div class=\"col-12 mb-2 mt-2\" *ngIf=\"stepActual === 1\">\n      <div class=\"row\">\n        <div class=\"col-11 ml-auto mr-auto text-center\">\n          <label class=\"title-card-Notification\">\n            <ion-icon name=\"warning\" class=\"icWarning\"></ion-icon> <br />\n            Prezado paciente, se não puder comparecer, cancele seu agendamento\n            e/ou transporte a tempo de que outra pessoa possa utilizar o\n            serviço, assim evita desperdícios e permite que outra pessoa da fila\n            ocupe seu lugar.\n          </label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12 mb-2 mt-2\" *ngIf=\"scheduling.transport === null && stepActual === 4\">\n      <div class=\"row\">\n        <div class=\"col-11 ml-auto mr-auto text-center\">\n          <label class=\"title-card-Notification\">\n            <ion-icon name=\"warning\" class=\"icWarning\"></ion-icon> <br />\n            Acompanhantes somente serão permitidos em caso de real necessidade,\n            como: limitações de mobilidade ou entendimento, acima de 65 anos, abaixo de 18 anos e\n            quando exigido pelo procedimento a ser realizado. Acompanhantes sem\n            necessidade não poderão embarcar no transporte.\n          </label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-12\" *ngIf=\"scheduling.transport === null && scheduling.cardStatus === 1\">\n      <div class=\"row\" *ngFor=\"let item of stepCard\" [hidden]=\"item.id !== stepActual\">\n        <div class=\"col-12 ml-4\">\n          <label class=\"title-card title-step\">\n            {{ item.name }}\n          </label>\n        </div>\n      </div>\n\n      <div class=\"row mt-2\">\n        <div class=\"col-10 mr-auto ml-auto btn-login\" (click)=\"navigateStep(stepActual + 1, false, true)\">\n          Sim\n        </div>\n\n        <div class=\"col-10 mr-auto ml-auto mt-2 btn-back\" (click)=\"navigateStep(null, true, false)\" *ngIf=\"stepActual === 1\"\n          [ngClass]=\"{ 'btn-cancel': stepActual === 1 }\">\n          Não\n        </div>\n\n        <div class=\"col-10 mr-auto ml-auto mt-2 btn-back\" (click)=\"navigateStep(stepActual + 1, false, false)\" *ngIf=\"stepActual > 1\">\n          Não\n        </div>\n\n      </div>\n    </div>\n    <div class=\"col-12\" *ngIf=\"\n        scheduling.transport === null &&\n        scheduling.cardStatus === 3 &&\n        stepActual === 1\n      \">\n      <div class=\"row\">\n        <div class=\"col-10 mr-auto ml-auto mb-3 text-center\">\n          <label class=\"label-no-transport\">SEM TRANSPORTE</label>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-10 m-auto\">\n          <div class=\"btn-login\" (click)=\"requestTransport()\">\n            Solicitar Transporte\n          </div>\n        </div>\n        <div class=\"col-10 mr-auto ml-auto mb-3 mt-2\">\n          <div class=\"btn-cancel\" (click)=\"navigateStep(null, true)\">\n            Cancelar Agendamento\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12\" *ngIf=\"\n        scheduling.transport !== null &&\n        scheduling.cardStatus !== 4 &&\n        scheduling.cardStatus !== 5\n      \">\n      <div class=\"row\">\n        <div class=\"col-10 m-auto\">\n          <div class=\"btn-cancel\" (click)=\"cancelTransportAlert()\">\n            Cancelar Transporte\n          </div>\n        </div>\n        <div class=\"col-10 mr-auto ml-auto mb-3 mt-2\">\n          <div class=\"btn-cancel\" (click)=\"navigateStep(null, true)\">\n            Cancelar Agendamento\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Step quando tiver sem transporte -->\n\n    <div class=\"col-12\" *ngIf=\"\n        scheduling.transport === null &&\n        scheduling.cardStatus === 3 &&\n        stepActual !== 1\n      \">\n      <div class=\"row\" *ngFor=\"let item of stepCard\" [hidden]=\"item.id !== stepActual\">\n        <div class=\"col-12 ml-4\">\n          <label class=\"title-card title-step\">\n            {{ item.name }}\n          </label>\n        </div>\n      </div>\n      <div class=\"row mt-2\">\n        <div class=\"col-10 mr-auto ml-auto btn-login\" (click)=\"navigateStep(stepActual + 1, false, true)\">\n          Sim\n        </div>\n\n        <div class=\"col-10 mr-auto ml-auto mt-2 btn-back\" (click)=\"navigateStep(null, true, false)\" *ngIf=\"stepActual === 1\"\n          [ngClass]=\"{ 'btn-cancel': stepActual === 1 }\">\n          Não\n        </div>\n\n        <div class=\"col-10 mr-auto ml-auto mt-2 btn-back\" (click)=\"navigateStep(stepActual + 1, false, false)\" *ngIf=\"stepActual > 1\">\n          Não\n        </div>\n\n      </div>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/detail/transport/transport.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/detail/transport/transport.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSchedulingDetailTransportTransportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon routerLink=\"/detail/{{id}}\" class=\"ml-2\" name=\"arrow-back-outline\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label class=\"label-account\">Confirmação de Agendamento</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-2\">\n      <div class=\"col-12 text-center title mt-2\">\n        Transporte: Locais e Horários de partida.\n      </div>\n      <div class=\"col-11 ml-auto mr-auto subtitle\" *ngIf=\"transport.length !== 0\">\n        <label>Toque para escolher o transporte</label>\n      </div>\n\n      <div class=\"col-12 mt-4\" *ngIf=\"transport.length === 0\">\n        <ion-card class=\"card p-2\">\n          <ion-card-content>\n            <div class=\"row p-0 text-center\">\n              <div class=\"col-12\">Nenhum transporte encontrado, porém ao clicar no botão confirmar o agendamento um\n                transporte será definido por um gestor responsável </div>\n              <div class=\"col-12 mt-2\">\n                <div class=\"btn-login\" (click)=\"confirmWithoutTransport()\">\n                  Confirmar Agendamento\n                </div>\n              </div>\n            </div>\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n      <ion-card *ngFor=\"let item of transport\" class=\"mt-4\" (click)=\"select(item)\">\n        <ion-card-header class=\"card-header\">\n          <ion-card-title class=\"content mt-1\"><b>Data:</b> {{item.date}}</ion-card-title>\n          <ion-card-subtitle class=\"content mt-1\">\n            <span><b>Horário de partida: </b>{{item.hourStart}}</span><br>\n            <span><b>Horário de retorno: </b>{{item.hourReturn}}</span>\n          </ion-card-subtitle>\n        </ion-card-header>\n\n        <ion-card-content class=\"mt-2 card-content\">\n          <p>\n            <b>Local: </b> {{item.site}}\n          </p>\n          <p>\n            <b>Cidade: </b> {{item.city}}\n          </p>\n          <p>\n            <b>Endereço: </b> {{item.address}}\n          </p>\n          <p>\n            <b>Bairro: </b> {{item.district}}\n          </p>\n          <p>\n            <b>Referencia: </b> {{item.reference}}\n          </p>\n          <p>\n            <b>Veículo: </b> {{item.board}}\n          </p>\n          <p><b>Motorista: </b> {{item.driver}}</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/list/list.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/list/list.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSchedulingListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div class=\"row\">\n    <div class=\"col-12 header-first\">\n      <div class=\"row\">\n        <div class=\"col-2 mt-2\">\n          <ion-icon class=\"ml-2\" (click)=\"backDash()\" name=\"arrow-back-outline\">\n          </ion-icon>\n        </div>\n        <div class=\"col-10\">\n          <label *ngIf=\"modAgent === null\" class=\"label-account\">Meus agendamentos</label>\n          <label *ngIf=\"modAgent !== null\" class=\"label-account\">{{modAgent?.patient?.name}}</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mt-5\"></div>\n    <div class=\"col-12 mt-5\"></div>\n  <!--  <div class=\"col-4 mr-auto ml-auto mt-4 text-center filter\">\n      <div class=\"row\" (click)=\"presentModal()\">\n        <div class=\"col-8 filter-text\">\n          <span>Filtrar</span>\n          <span class=\"filter-applied\" *ngIf=\"isFilterActive\"></span>\n        </div>\n        <div class=\"col-3 text-right filter-text\">\n          <ion-icon class=\"filter-icon\" name=\"funnel\"></ion-icon>\n        </div>\n      </div>\n    </div>-->\n    <!-- Pendências -->\n    <div class=\"col-12 mt-3\" *ngIf=\"schedulingList.length === 0\">\n      <ion-card class=\"card p-2 noneholder\">\n        <ion-card-content>\n          <div class=\"row p-0 text-center\">\n            <div class=\"col-12\">Nenhum agendamento encontrado</div>\n          </div>\n        </ion-card-content>\n      </ion-card>\n    </div>\n    <div class=\"col-12 mt-3\" *ngFor=\"let item of schedulingList\">\n      <div class=\"col-12 p-0\" *ngIf=\"item.title === 'Pendências' \">\n        <span class=\"title ml-3\">\n          {{item.title}}\n        </span>\n        <!-- Cards -->\n        <ion-card *ngFor=\"let card of item.card\" (click)=\"detailOrQuiz(card)\" class=\"card-content\">\n          <div [ngClass]=\"card.backGroundColor\"></div>\n          <ion-card-header>\n            <ion-card-subtitle class=\"card-subtitle ml-2\">\n              <span class=\"ml-1\">{{card.nameStatus}}</span>\n            </ion-card-subtitle>\n            <ion-card-title class=\"ml-2 title-card mt-1\">{{card.title}}</ion-card-title>\n          </ion-card-header>\n\n          <ion-card-content class=\"ml-2\">\n            <span>\n              <b>Local: </b> {{card.local}}\n            </span><br>\n            <span>\n              <b>Data: </b> {{card.data}}\n            </span>\n            <span><br>\n              <b>Horário: </b> {{card.hour}}\n            </span>\n          </ion-card-content>\n        </ion-card>\n      </div>\n    </div>\n\n    <!-- Agendamentos -->\n    <div class=\"col-12 mt-1\" *ngFor=\"let item of schedulingList\">\n      <div class=\"col-12 p-0\" *ngIf=\"item.title === 'Agendamentos' \">\n        <span class=\"title ml-3\">\n          {{item.title}}\n        </span>\n        <!-- Cards Status = Confirmado -->\n        <div class=\"col-12 p-0\" *ngFor=\"let card of item.card\">\n          <ion-card *ngIf=\"card.cardStatus === 3\" (click)=\"detailOrQuiz(card)\" class=\"card-content\">\n            <div [ngClass]=\"card.backGroundColor\"></div>\n            <ion-card-header>\n              <ion-card-subtitle class=\"card-subtitle ml-2\">\n                <span class=\"ml-1\">{{card.nameStatus}}</span>\n              </ion-card-subtitle>\n              <ion-card-title class=\"ml-2 title-card mt-1\">{{card.title}}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content class=\"ml-2\">\n              <span>\n                <b>Local: </b> {{card.local}}\n              </span><br>\n              <span>\n                <b>Data: </b> {{card.data}}\n              </span>\n              <span><br>\n                <b>Horário: </b> {{card.hour}}\n              </span>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <!-- Cards Status = Presente -->\n        <div class=\"col-12 p-0\" *ngFor=\"let card of item.card\">\n          <ion-card *ngIf=\"card.cardStatus === 5\" (click)=\"detailOrQuiz(card)\" class=\"card-content\">\n            <div [ngClass]=\"card.backGroundColor\"></div>\n            <ion-card-header>\n              <ion-card-subtitle class=\"card-subtitle ml-2\">\n                <span class=\"ml-1\">{{card.nameStatus}}</span>\n              </ion-card-subtitle>\n              <ion-card-title class=\"ml-2 title-card mt-1\">{{card.title}}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content class=\"ml-2\">\n              <span>\n                <b>Local: </b> {{card.local}}\n              </span><br>\n              <span>\n                <b>Data: </b> {{card.data}}\n              </span>\n              <span><br>\n                <b>Horário: </b> {{card.hour}}\n              </span>\n            </ion-card-content>\n          </ion-card>\n        </div>\n        <!-- Cards Status = Faltou -->\n        <div class=\"col-12 p-0\" *ngFor=\"let card of item.card\">\n          <ion-card *ngIf=\"card.cardStatus === 11\" class=\"card-content\">\n            <div [ngClass]=\"card.backGroundColor\"></div>\n            <ion-card-header>\n              <ion-card-subtitle class=\"card-subtitle ml-2\">\n                <span class=\"ml-1\">{{card.nameStatus}}</span>\n              </ion-card-subtitle>\n              <ion-card-title class=\"ml-2 title-card mt-1\">{{card.title}}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content class=\"ml-2\">\n              <span>\n                <b>Local: </b> {{card.local}}\n              </span><br>\n              <span>\n                <b>Data: </b> {{card.data}}\n              </span>\n              <span><br>\n                <b>Horário: </b> {{card.hour}}\n              </span>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n\n    <!-- Conluidos -->\n    <div class=\"col-12 mt-1\" *ngFor=\"let item of schedulingList\">\n      <div class=\"col-12 p-0\" *ngIf=\"item.title === 'Concluídos' \">\n        <span class=\"title ml-3\">\n          {{item.title}}\n        </span>\n        <!-- Cards Status = Conluidos -->\n        <div class=\"col-12 p-0\" *ngFor=\"let card of item.card\">\n          <ion-card *ngIf=\"card.cardStatus === 12\" class=\"card-content\">\n            <div [ngClass]=\"card.backGroundColor\"></div>\n            <ion-card-header>\n              <ion-card-subtitle class=\"card-subtitle ml-2\">\n                <span class=\"ml-1\">{{card.nameStatus}}</span>\n              </ion-card-subtitle>\n              <ion-card-title class=\"ml-2 title-card mt-1\">{{card.title}}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content class=\"ml-2\">\n              <span>\n                <b>Local: </b> {{card.local}}\n              </span><br>\n              <span>\n                <b>Data: </b> {{card.data}}\n              </span>\n              <span><br>\n                <b>Horário: </b> {{card.hour}}\n              </span>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/auth/auth.guard */
    "./src/app/core/auth/auth.guard.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./home/dashboard.module */
        "./src/app/home/dashboard.module.ts")).then(function (m) {
          return m.DashboardModule;
        });
      },
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./autentication/autentication.module */
        "./src/app/autentication/autentication.module.ts")).then(function (m) {
          return m.AutenticationModule;
        });
      },
      pathMatch: 'full'
    }, {
      path: 'chat-room',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./chat-room/chat-room.module */
        "./src/app/chat-room/chat-room.module.ts")).then(function (m) {
          return m.ChatRoomPageModule;
        });
      },
      pathMatch: 'full'
    }, {
      path: 'modal-newchat',
      loadChildren: function loadChildren() {
        return Promise.resolve().then(__webpack_require__.bind(null,
        /*! ./modal-newchat/modal-newchat.module */
        "./src/app/modal-newchat/modal-newchat.module.ts")).then(function (m) {
          return m.ModalNewchatPageModule;
        });
      },
      pathMatch: 'full'
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyRUFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7O0VBRUUsa0JBQUE7QUNDRjs7QURFQTtFQUNFLDJEQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLHNEQUFBO0FDSEY7O0FETUE7RUFDRSwrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsY0FBQTtBQ0hGOztBRE1BO0VBQ0UsZ0JBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0FDSEY7O0FETUE7RUFDRSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSwrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0FDSEY7O0FETUE7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURNQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FDSkY7O0FET0E7RUFDRSxpQ0FBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iLCJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBjb2xvcjogIzc1NzU3NTtcbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _service_push_push_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./service/push/push-notification.service */
    "./src/app/service/push/push-notification.service.ts");
    /* harmony import */


    var _service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./service/firebase/firebase.service */
    "./src/app/service/firebase/firebase.service.ts");
    /* harmony import */


    var _service_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./service/fcm/fcm.service */
    "./src/app/service/fcm/fcm.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, swPush, pushService, firebaseService, fcmService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.swPush = swPush;
        this.pushService = pushService;
        this.firebaseService = firebaseService;
        this.fcmService = fcmService;
        this.selectedIndex = 0;
        this.appPages = [{
          title: 'Inbox',
          url: '/folder/Inbox',
          icon: 'mail'
        }, {
          title: 'Outbox',
          url: '/folder/Outbox',
          icon: 'paper-plane'
        }, {
          title: 'Favorites',
          url: '/folder/Favorites',
          icon: 'heart'
        }, {
          title: 'Archived',
          url: '/folder/Archived',
          icon: 'archive'
        }, {
          title: 'Trash',
          url: '/folder/Trash',
          icon: 'trash'
        }, {
          title: 'Spam',
          url: '/folder/Spam',
          icon: 'warning'
        }];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.VAPID_PUBLIC = "BHifWlroi04Vm5W9gnPRZyArK1KQTb54DGhfglgzTEsOoWXliWrNuQXrnO3U8M0ljAYnvMPTLNpi-zg8lEqIzgQ";
        this.initializeApp();
        this.initializePushNotification();
      }

      _createClass(AppComponent, [{
        key: "initializePushNotification",
        value: function initializePushNotification() {
          var _this = this;

          if (this.swPush.isEnabled) {
            this.swPush.requestSubscription({
              serverPublicKey: this.VAPID_PUBLIC
            }).then(function (subscription) {
              _this.pushService.sendSubscriptionToTheServer(subscription);
            })["catch"](console.error);
          }
        }
      }, {
        key: "initializeApp",
        value: function initializeApp() {
          var _this2 = this;

          this.platform.ready().then(function () {
            _this2.statusBar.overlaysWebView(false);

            _this2.statusBar.backgroundColorByHexString('#406AEF');

            _this2.splashScreen.hide();
            /**Iniciando o Google Firebase e as Notificações Push no aplicativo @author Gustavo Teles */


            _this2.firebaseService.configApp();

            _this2.fcmService.initPush();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var path = window.location.pathname.split('folder/')[1];

          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) {
              return page.title.toLowerCase() === path.toLowerCase();
            });
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]
      }, {
        type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"]
      }, {
        type: _service_push_push_notification_service__WEBPACK_IMPORTED_MODULE_6__["PushNotificationService"]
      }, {
        type: _service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"]
      }, {
        type: _service_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_8__["FcmService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/locales/pt */
    "./node_modules/@angular/common/locales/pt.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _autentication_autentication_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./autentication/autentication.module */
    "./src/app/autentication/autentication.module.ts");
    /* harmony import */


    var _home_dashboard_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/dashboard.module */
    "./src/app/home/dashboard.module.ts");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/dist/index.js");
    /* harmony import */


    var _scheduling_scheduling_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./scheduling/scheduling.module */
    "./src/app/scheduling/scheduling.module.ts");
    /* harmony import */


    var _quiz_quiz_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./quiz/quiz.module */
    "./src/app/quiz/quiz.module.ts");
    /* harmony import */


    var _list_user_agent_list_user_agent_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./list-user-agent/list-user-agent.module */
    "./src/app/list-user-agent/list-user-agent.module.ts");
    /* harmony import */


    var _dependent_dependent_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./dependent/dependent.module */
    "./src/app/dependent/dependent.module.ts");
    /* harmony import */


    var _service_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./service/fcm/fcm.service */
    "./src/app/service/fcm/fcm.service.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./core/auth/auth.service */
    "./src/app/core/auth/auth.service.ts");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _service_token_interceptor_service___WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./service/token.interceptor.service  */
    "./src/app/service/token.interceptor.service .ts");
    /* harmony import */


    var _service_push_push_notification_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./service/push/push-notification.service */
    "./src/app/service/push/push-notification.service.ts");
    /* harmony import */


    var _modal_newchat_modal_newchat_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./modal-newchat/modal-newchat.module */
    "./src/app/modal-newchat/modal-newchat.module.ts");
    /* harmony import */


    var _chat_room_chat_room_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./chat-room/chat-room.module */
    "./src/app/chat-room/chat-room.module.ts");
    /* harmony import */


    var _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @ionic-native/firebase-messaging/ngx */
    "./node_modules/@ionic-native/firebase-messaging/ngx/index.js");
    /* harmony import */


    var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @ionic-native/http/ngx */
    "./node_modules/@ionic-native/http/ngx/index.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default.a, 'pt');

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
      entryComponents: [],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _autentication_autentication_module__WEBPACK_IMPORTED_MODULE_11__["AutenticationModule"], br_mask__WEBPACK_IMPORTED_MODULE_13__["BrMaskerModule"], _scheduling_scheduling_module__WEBPACK_IMPORTED_MODULE_14__["SchedulingModule"], _quiz_quiz_module__WEBPACK_IMPORTED_MODULE_15__["QuizModule"], _list_user_agent_list_user_agent_module__WEBPACK_IMPORTED_MODULE_16__["ListUserAgentModule"], _dependent_dependent_module__WEBPACK_IMPORTED_MODULE_17__["DependentModule"], _home_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_30__["HttpModule"], _modal_newchat_modal_newchat_module__WEBPACK_IMPORTED_MODULE_26__["ModalNewchatPageModule"], _chat_room_chat_room_module__WEBPACK_IMPORTED_MODULE_27__["ChatRoomPageModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_19__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].production,
        registrationStrategy: 'registerWhenStable:30000'
      })],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"], _service_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_18__["FcmService"], _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_28__["FirebaseMessaging"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_29__["HTTP"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicRouteStrategy"]
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
        useValue: 'pt'
      }, {
        provide: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__["JWT_OPTIONS"],
        useValue: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__["JWT_OPTIONS"]
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HTTP_INTERCEPTORS"],
        useClass: _service_token_interceptor_service___WEBPACK_IMPORTED_MODULE_24__["TokenInterceptorService"],
        multi: true
      }, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_22__["JwtHelperService"], _service_push_push_notification_service__WEBPACK_IMPORTED_MODULE_25__["PushNotificationService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/autentication/autentication-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/autentication/autentication-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AutenticationRoutingModule */

  /***/
  function srcAppAutenticationAutenticationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutenticationRoutingModule", function () {
      return AutenticationRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/autentication/login/login.component.ts");
    /* harmony import */


    var _first_access_first_access_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./first-access/first-access.component */
    "./src/app/autentication/first-access/first-access.component.ts");
    /* harmony import */


    var _dual_persona_dual_persona_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dual-persona/dual-persona.component */
    "./src/app/autentication/dual-persona/dual-persona.component.ts");
    /* harmony import */


    var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../core/auth/auth.guard */
    "./src/app/core/auth/auth.guard.ts");
    /* harmony import */


    var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./configuration/configuration.component */
    "./src/app/autentication/configuration/configuration.component.ts");
    /* harmony import */


    var _configuration_personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./configuration/personal-data/personal-data.component */
    "./src/app/autentication/configuration/personal-data/personal-data.component.ts");
    /* harmony import */


    var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./password-reset/password-reset.component */
    "./src/app/autentication/password-reset/password-reset.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'dual',
      component: _dual_persona_dual_persona_component__WEBPACK_IMPORTED_MODULE_5__["DualPersonaComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'first-access',
      component: _first_access_first_access_component__WEBPACK_IMPORTED_MODULE_4__["FirstAccessComponent"]
    }, {
      path: 'configuration',
      component: _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_7__["ConfigurationComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'personal-data',
      component: _configuration_personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_8__["PersonalDataComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'password-reset',
      component: _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_9__["PasswordResetComponent"]
    }];

    var AutenticationRoutingModule = /*#__PURE__*/_createClass(function AutenticationRoutingModule() {
      _classCallCheck(this, AutenticationRoutingModule);
    });

    AutenticationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AutenticationRoutingModule);
    /***/
  },

  /***/
  "./src/app/autentication/autentication.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/autentication/autentication.module.ts ***!
    \*******************************************************/

  /*! exports provided: AutenticationModule */

  /***/
  function srcAppAutenticationAutenticationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutenticationModule", function () {
      return AutenticationModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _autentication_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./autentication-routing.module */
    "./src/app/autentication/autentication-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/dist/index.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/autentication/login/login.component.ts");
    /* harmony import */


    var _first_access_first_access_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./first-access/first-access.component */
    "./src/app/autentication/first-access/first-access.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _dual_persona_dual_persona_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dual-persona/dual-persona.component */
    "./src/app/autentication/dual-persona/dual-persona.component.ts");
    /* harmony import */


    var _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./configuration/configuration.component */
    "./src/app/autentication/configuration/configuration.component.ts");
    /* harmony import */


    var _configuration_personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./configuration/personal-data/personal-data.component */
    "./src/app/autentication/configuration/personal-data/personal-data.component.ts");
    /* harmony import */


    var _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./password-reset/password-reset.component */
    "./src/app/autentication/password-reset/password-reset.component.ts");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
    /* harmony import */


    var _first_access_term_accept_term_accept_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./first-access/term-accept/term-accept.component */
    "./src/app/autentication/first-access/term-accept/term-accept.component.ts");

    var AutenticationModule = /*#__PURE__*/_createClass(function AutenticationModule() {
      _classCallCheck(this, AutenticationModule);
    });

    AutenticationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], _first_access_first_access_component__WEBPACK_IMPORTED_MODULE_8__["FirstAccessComponent"], _dual_persona_dual_persona_component__WEBPACK_IMPORTED_MODULE_10__["DualPersonaComponent"], _configuration_configuration_component__WEBPACK_IMPORTED_MODULE_11__["ConfigurationComponent"], _configuration_personal_data_personal_data_component__WEBPACK_IMPORTED_MODULE_12__["PersonalDataComponent"], _password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_13__["PasswordResetComponent"], _first_access_term_accept_term_accept_component__WEBPACK_IMPORTED_MODULE_15__["TermAcceptComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"], _autentication_routing_module__WEBPACK_IMPORTED_MODULE_3__["AutenticationRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_6__["BrMaskerModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_14__["NgxMaskModule"].forRoot()]
    })], AutenticationModule);
    /***/
  },

  /***/
  "./src/app/autentication/configuration/configuration.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/autentication/configuration/configuration.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAutenticationConfigurationConfigurationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  font-family: \"Baloo 2\", cursive;\n  color: #656565;\n}\n\n.title {\n  color: #54B488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 1.3rem;\n  font-family: \"Baloo 2\", cursive;\n}\n\nhr {\n  border: 0px solid #E8E8E8;\n  background: #E8E8E8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvYXV0ZW50aWNhdGlvbi9jb25maWd1cmF0aW9uL2NvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGVudGljYXRpb24vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FER0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2F1dGVudGljYXRpb24vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdCYWxvbyAyJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzY1NjU2NTtcbiAgICBcbn1cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogIzU0QjQ4ODtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBmb250LWZhbWlseTogJ0JhbG9vIDInLCBjdXJzaXZlO1xufVxuXG5ociB7XG4gICAgYm9yZGVyOiAwcHggc29saWQgI0U4RThFODtcbiAgICBiYWNrZ3JvdW5kOiAjRThFOEU4O1xufSIsIi5jYXJkIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNjU2NTY1O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzU0QjQ4ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG5ociB7XG4gIGJvcmRlcjogMHB4IHNvbGlkICNFOEU4RTg7XG4gIGJhY2tncm91bmQ6ICNFOEU4RTg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/autentication/configuration/configuration.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/autentication/configuration/configuration.component.ts ***!
    \************************************************************************/

  /*! exports provided: ConfigurationComponent */

  /***/
  function srcAppAutenticationConfigurationConfigurationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function () {
      return ConfigurationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/auth/auth.service */
    "./src/app/core/auth/auth.service.ts");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");

    var ConfigurationComponent = /*#__PURE__*/function () {
      function ConfigurationComponent(alertController, requestService, toastController, loadingController, router, authService) {
        var _this3 = this;

        _classCallCheck(this, ConfigurationComponent);

        this.alertController = alertController;
        this.requestService = requestService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.router = router;
        this.authService = authService;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.dependent = JSON.parse(localStorage.getItem('dependent'));
        this.alertInputs = [];
        this.showChangeConsortium = false;

        this.presentAlert = function () {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this4 = this;

            var alert;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Alterar senha',
                    inputs: [{
                      name: 'pass-old',
                      type: 'password',
                      placeholder: 'Senha atual'
                    }, {
                      name: 'pass',
                      type: 'password',
                      placeholder: 'Senha nova'
                    }, {
                      name: 'pass-confirm',
                      type: 'password',
                      placeholder: 'Confirmar senha nova'
                    }],
                    buttons: [{
                      text: 'Cancelar',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: function handler() {
                        console.log('Confirm Cancel');
                      }
                    }, {
                      text: 'Salvar',
                      handler: function handler(values) {
                        var obj = {
                          cpf: _this4.user.cpf,
                          password: values['pass-old'],
                          newPassword: values['pass'],
                          confirmPassword: values['pass-confirm']
                        };
                        var regex = new RegExp(/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/);

                        if (obj.newPassword.length < 8) {
                          _this4.presentToast('Senha deve ter no mínimo 8 dígitos.', 'warning');
                        } else if (!regex.test(obj.newPassword)) {
                          _this4.presentToast('Senha deve conter números, letra maiúscula e caractere especial.', 'warning');
                        } else if (obj.newPassword === obj.confirmPassword) _this4.alterPassword(obj);else _this4.presentToast('Nova senha está diferente da confirmação da senha.', 'warning');
                      }
                    }]
                  });

                case 2:
                  alert = _context.sent;
                  _context.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        };

        this.populateConsortiumView = function () {
          var tenantList = JSON.parse(localStorage.getItem("tenantList"));

          if (tenantList.length > 1) {
            _this3.showChangeConsortium = true;
          }

          tenantList.forEach(function (element) {
            _this3.alertInputs.push({
              label: element.nameTenant,
              type: 'radio',
              value: element.tenant
            });
          });
        };
      }

      _createClass(ConfigurationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.populateConsortiumView();
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.loadingController.create({
                    cssClass: 'my-custom-class',
                    message: 'Aguarde...',
                    duration: 2000
                  });

                case 2:
                  this.loading = _context2.sent;
                  _context2.next = 5;
                  return this.loading.present();

                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 4000,
                    color: type
                  });

                case 2:
                  toast = _context3.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "alterPassword",
        value: function alterPassword(obj) {
          var _this5 = this;

          this.presentLoading();
          this.requestService.postReturnString('User/alter-password-app', JSON.stringify(obj)).subscribe(function (node) {
            _this5.loading.onDidDismiss().then(function (dis) {
              if (node) _this5.presentToast('Senha alterada com sucesso.', 'success');else _this5.presentToast('Senha atual informada está incorreta.', 'warning');
            });
          }, function (err) {
            _this5.loading.onDidDismiss().then(function (dis) {
              _this5.presentToast('Falha na comunicação com o servidor.', 'danger');
            });
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.presentAlertConfirmLogout();

                case 2:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "presentAlertConfirmLogout",
        value: function presentAlertConfirmLogout() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _this6 = this;

            var alert;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Deseja realmente sair do aplicativo?',
                    buttons: [{
                      text: 'Não',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: function handler() {}
                    }, {
                      text: 'Sim',
                      handler: function handler() {
                        localStorage.clear();

                        _this6.router.navigate(['/']);
                      }
                    }]
                  });

                case 2:
                  alert = _context5.sent;
                  _context5.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentAlertConsortium",
        value: function presentAlertConsortium() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var _this7 = this;

            var alert;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.alertController.create({
                    header: 'Por favor selecione qual convênio quer acessar seus agendamentos',
                    subHeader: '',
                    message: '',
                    buttons: [{
                      text: 'Voltar'
                    }, {
                      text: 'OK',
                      handler: function handler(select) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                            while (1) switch (_context6.prev = _context6.next) {
                              case 0:
                                console.log(select);

                                if (!(select !== undefined)) {
                                  _context6.next = 6;
                                  break;
                                }

                                _context6.next = 4;
                                return this.setResultSelect(select);

                              case 4:
                                _context6.next = 8;
                                break;

                              case 6:
                                _context6.next = 8;
                                return this.presentAlertConsortium();

                              case 8:
                              case "end":
                                return _context6.stop();
                            }
                          }, _callee6, this);
                        }));
                      }
                    }],
                    inputs: this.alertInputs
                  });

                case 2:
                  alert = _context7.sent;
                  _context7.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "setResultSelect",
        value: function setResultSelect(select) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  this.authService.tenantID = select;
                  location.reload();

                case 2:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
        }
      }]);

      return ConfigurationComponent;
    }();

    ConfigurationComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-configuration',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./configuration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/configuration/configuration.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./configuration.component.scss */
      "./src/app/autentication/configuration/configuration.component.scss"))["default"]]
    })], ConfigurationComponent);
    /***/
  },

  /***/
  "./src/app/autentication/configuration/model/patient-posted-dto.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/autentication/configuration/model/patient-posted-dto.ts ***!
    \*************************************************************************/

  /*! exports provided: PatientPostedDTO */

  /***/
  function srcAppAutenticationConfigurationModelPatientPostedDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatientPostedDTO", function () {
      return PatientPostedDTO;
    });

    var PatientPostedDTO = /*#__PURE__*/_createClass(function PatientPostedDTO() {
      _classCallCheck(this, PatientPostedDTO);
    });
    /***/

  },

  /***/
  "./src/app/autentication/configuration/personal-data/personal-data.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/autentication/configuration/personal-data/personal-data.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAutenticationConfigurationPersonalDataPersonalDataComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-border {\n  border-bottom: 1px solid #54B488;\n}\n\n::ng-deep .select-text {\n  text-align: center !important;\n}\n\n.info-data {\n  color: #212529;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvYXV0ZW50aWNhdGlvbi9jb25maWd1cmF0aW9uL3BlcnNvbmFsLWRhdGEvcGVyc29uYWwtZGF0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0ZW50aWNhdGlvbi9jb25maWd1cmF0aW9uL3BlcnNvbmFsLWRhdGEvcGVyc29uYWwtZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0FDQ0o7O0FERUE7RUFDUSw2QkFBQTtBQ0NSOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRlbnRpY2F0aW9uL2NvbmZpZ3VyYXRpb24vcGVyc29uYWwtZGF0YS9wZXJzb25hbC1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NEI0ODg7XG59XG5cbjo6bmctZGVlcCAuc2VsZWN0LXRleHR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW5mby1kYXRhIHtcbiAgICBjb2xvcjogIzIxMjUyOTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn0iLCIuaW5wdXQtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NEI0ODg7XG59XG5cbjo6bmctZGVlcCAuc2VsZWN0LXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmluZm8tZGF0YSB7XG4gIGNvbG9yOiAjMjEyNTI5O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/autentication/configuration/personal-data/personal-data.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/autentication/configuration/personal-data/personal-data.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: PersonalDataComponent */

  /***/
  function srcAppAutenticationConfigurationPersonalDataPersonalDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalDataComponent", function () {
      return PersonalDataComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _model_patient_posted_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../model/patient-posted-dto */
    "./src/app/autentication/configuration/model/patient-posted-dto.ts");
    /* harmony import */


    var _core_util_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../core/util/loading */
    "./src/app/core/util/loading.ts");

    var PersonalDataComponent = /*#__PURE__*/function () {
      function PersonalDataComponent(builder, requestService, loadingController, toastController) {
        var _this8 = this;

        _classCallCheck(this, PersonalDataComponent);

        this.builder = builder;
        this.requestService = requestService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.dependent = JSON.parse(localStorage.getItem("dependent"));
        this.states = [];
        this.citys = [];

        this.createForm = function () {
          _this8.formPersonal = _this8.builder.group({
            name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sexo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            estado: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            number: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cep: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            district: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });

          _this8.formPersonal.disable();
        };

        this.populateDto = function () {
          var obj = new _model_patient_posted_dto__WEBPACK_IMPORTED_MODULE_8__["PatientPostedDTO"]();
          obj.name = _this8.formPersonal.controls.name.value;
          obj.dateBirth = _this8.formPersonal.controls.date.value;
          obj.idGender = _this8.formPersonal.controls.sexo.value;
          obj.email = _this8.formPersonal.controls.email.value;
          obj.cpf = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isNil"])(_this8.dependent) ? _this8.user.cpf : _this8.dependent.patient.cpf;
          obj.rg = _this8.patient.cpf;
          obj.cnh = _this8.patient.cnh;
          obj.sus = _this8.patient.sus;
          obj.phone = _this8.formPersonal.controls.phone.value;
          obj.zipCode = _this8.formPersonal.controls.cep.value;
          obj.street = _this8.formPersonal.controls.end.value;
          obj.number = _this8.formPersonal.controls.number.value;
          obj.district = _this8.formPersonal.controls.district.value;

          if (_this8.patient.city.name.toUpperCase() === _this8.formPersonal.controls.city.value.toUpperCase()) {
            obj.idCity = _this8.patient.idCity;
            obj.city = _this8.patient.city.name.toUpperCase();
            obj.idState = _this8.patient.city.state;
          } else {
            obj.city = _this8.formPersonal.controls.city.value.toUpperCase();
            obj.state = _this8.formPersonal.controls.estado.value;
          }

          return obj;
        };

        this.getCep = function (cep) {
          Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_9__["LoadingOn"])(_this8.loadingController);

          _this8.requestService.get(cep + "/json/unicode/").subscribe(function (node) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_9__["LoadingOnDidDismiss"])(this.loadingController);
                    this.formPersonal.controls.end.setValue(node.logradouro);
                    this.formPersonal.controls.estado.setValue(node.uf);
                    this.formPersonal.controls.district.setValue(node.bairro);
                    this.formPersonal.controls.city.setValue(node.localidade);

                  case 5:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }, function (err) {
            console.error(err);

            _this8.presentToast("Nenhum endereço foi encontrado no cadastro.", "danger");
          });
        };

        this.alterDataUser = function () {
          Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_9__["LoadingOn"])(_this8.loadingController);

          _this8.requestService.put("Patient/alterPatientApp/" + _this8.patient.idUser, JSON.stringify(_this8.populateDto())).subscribe(function (node) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_9__["LoadingOnDidDismiss"])(this.loadingController);

                  case 2:
                    this.alterData(false);
                    this.presentToast("Dados alterados com sucesso.", "success");
                    this.getDataUser();

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_9__["LoadingOnDidDismiss"])(this.loadingController);

                  case 2:
                    this.presentToast("Ocorreu um problema ao alterar os dados.", "danger");

                  case 3:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this);
            }));
          });
        };
      }

      _createClass(PersonalDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
          this.getDataUser();
        }
      }, {
        key: "alterData",
        value: function alterData(change) {
          if (change) {
            this.formPersonal.enable();
            this.formPersonal.controls.end.disable();
            this.formPersonal.controls.estado.disable();
            this.formPersonal.controls.end.disable();
            this.formPersonal.controls.district.disable();
            this.formPersonal.controls.city.disable();
          } else {
            this.formPersonal.disable();
          }
        }
      }, {
        key: "populateForm",
        value: function populateForm(data) {
          var _a, _b, _c, _d;

          this.formPersonal.controls.name.setValue(data.name);
          this.formPersonal.controls.email.setValue(data.email);
          var formtDate = moment__WEBPACK_IMPORTED_MODULE_7__(data.dateBirth).format("yyyy-MM-DD");
          this.formPersonal.controls.date.setValue(formtDate);
          this.formPersonal.controls.sexo.setValue(data.gender.toString());
          this.formPersonal.controls.number.setValue(data.address.number);
          this.formPersonal.controls.cep.setValue(data.address.zipCode);
          if (data.phoneSet.length > 0) this.formPersonal.controls.phone.setValue(data.phoneSet[0].number);

          if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(data.address) && !Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(data.city)) {
            this.formPersonal.controls.end.setValue((_a = data.address) === null || _a === void 0 ? void 0 : _a.street);
            this.formPersonal.controls.estado.setValue((_b = data.city) === null || _b === void 0 ? void 0 : _b.state);
            this.formPersonal.controls.district.setValue((_c = data.address) === null || _c === void 0 ? void 0 : _c.district);
            this.formPersonal.controls.city.setValue((_d = data.city) === null || _d === void 0 ? void 0 : _d.name);
          } else {
            this.getCep(data.address.zipCode);
          }
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 4000,
                    color: type
                  });

                case 2:
                  toast = _context12.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context12.stop();
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "getDataUser",
        value: function getDataUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
            var _this9 = this;

            var cpf;
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_9__["LoadingOn"])(this.loadingController);

                case 2:
                  cpf = Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isNil"])(this.dependent) ? this.user.cpf.replace(".", "").replace(".", "").replace("-", "") : this.dependent.patient.cpf;
                  this.requestService.get("Patient/getPatientByCpf?cpf=" + cpf).subscribe(function (node) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                        while (1) switch (_context13.prev = _context13.next) {
                          case 0:
                            this.patient = node;
                            this.populateForm(node);
                            _context13.next = 4;
                            return this.getStates();

                          case 4:
                            Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_9__["LoadingOnDidDismiss"])(this.loadingController);

                          case 5:
                          case "end":
                            return _context13.stop();
                        }
                      }, _callee13, this);
                    }));
                  }, function (err) {
                    Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_9__["LoadingOnDidDismiss"])(_this9.loadingController);
                    console.error(err);
                  });

                case 4:
                case "end":
                  return _context14.stop();
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "getStates",
        value: function getStates() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
            var _this10 = this;

            return _regeneratorRuntime().wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return this.requestService.get("Address/GetStates").subscribe(function (node) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                      var _this11 = this;

                      var consulting;
                      return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                        while (1) switch (_context15.prev = _context15.next) {
                          case 0:
                            consulting = node.find(function (a) {
                              return a.id === _this11.formPersonal.controls.estado.value;
                            });

                            if (!Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(consulting)) {
                              this.formPersonal.controls.estado.setValue(consulting.description);
                            }

                          case 2:
                          case "end":
                            return _context15.stop();
                        }
                      }, _callee15, this);
                    }));
                  }, function (err) {
                    console.error(err);
                  });

                case 2:
                case "end":
                  return _context16.stop();
              }
            }, _callee16, this);
          }));
        }
      }]);

      return PersonalDataComponent;
    }();

    PersonalDataComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    PersonalDataComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-personal-data",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./personal-data.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/configuration/personal-data/personal-data.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./personal-data.component.scss */
      "./src/app/autentication/configuration/personal-data/personal-data.component.scss"))["default"]]
    })], PersonalDataComponent);
    /***/
  },

  /***/
  "./src/app/autentication/dual-persona/dual-persona.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/autentication/dual-persona/dual-persona.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAutenticationDualPersonaDualPersonaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-dual {\n  background-image: url('logo.png');\n  background-repeat: no-repeat;\n  height: 72px;\n  background-position: center bottom;\n  margin-top: 4%;\n}\n\n.header-dual {\n  background-image: url('background-header.png');\n  background-repeat: no-repeat;\n  height: 100px;\n  background-size: 100%;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.title {\n  color: #979797;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.title-next {\n  color: #54B488;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.sub-title {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  color: #656565;\n}\n\n.info {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  color: #656565;\n}\n\n.footer-next {\n  background: #54B488;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  height: 70px;\n}\n\n.footer-agent {\n  background: #FF993C;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  height: 70px;\n}\n\n.footer-depe {\n  background: #3CD0FF;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 0px 0px 5px 5px;\n  height: 70px;\n}\n\n.card-footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  line-height: 43px;\n}\n\n.card-content {\n  height: auto;\n  min-height: 130px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.view-info {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"Baloo 2\", cursive;\n  font-weight: bold;\n}\n\n.view-info-icon {\n  float: right;\n  color: #FFFFFF;\n  font-size: 40px;\n  position: absolute;\n  right: 0;\n  bottom: 20%;\n}\n\n.msg {\n  font-size: 20px;\n  font-family: \"Baloo 2\", cursive;\n  font-weight: 100;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvYXV0ZW50aWNhdGlvbi9kdWFsLXBlcnNvbmEvZHVhbC1wZXJzb25hLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRlbnRpY2F0aW9uL2R1YWwtcGVyc29uYS9kdWFsLXBlcnNvbmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksOENBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNFSjs7QURDQTtFQUNJLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNHSjs7QUREQTtFQUNJLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ01KOztBREhBO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvYXV0ZW50aWNhdGlvbi9kdWFsLXBlcnNvbmEvZHVhbC1wZXJzb25hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tZHVhbCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9sb2dvLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuLmhlYWRlci1kdWFsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQtaGVhZGVyLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi50aXRsZSB7XG4gICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGl0bGUtbmV4dCB7XG4gICAgY29sb3I6ICM1NEI0ODg7IFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjNjU2NTY1O1xufVxuLmluZm8ge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLmZvb3Rlci1uZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjNTRCNDg4O1xuICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG4uZm9vdGVyLWFnZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkY5OTNDO1xuICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG4uZm9vdGVyLWRlcGUge1xuICAgIGJhY2tncm91bmQ6ICMzQ0QwRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGhlaWdodDogNzBweDtcbn1cbi5jYXJkLWZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgfVxuXG4uY2FyZC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTMwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdCYWxvbyAyJywgY3Vyc2l2ZTtcbn1cblxuLnZpZXctaW5mbyB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi52aWV3LWluZm8taWNvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAyMCU7XG59XG5cbi5tc2cge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSIsIi5sb2dvLWR1YWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2xvZ28ucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA3MnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuLmhlYWRlci1kdWFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLWhlYWRlci5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICM5Nzk3OTc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGl0bGUtbmV4dCB7XG4gIGNvbG9yOiAjNTRCNDg4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLmluZm8ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG5cbi5mb290ZXItbmV4dCB7XG4gIGJhY2tncm91bmQ6ICM1NEI0ODg7XG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmZvb3Rlci1hZ2VudCB7XG4gIGJhY2tncm91bmQ6ICNGRjk5M0M7XG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmZvb3Rlci1kZXBlIHtcbiAgYmFja2dyb3VuZDogIzNDRDBGRjtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4udmlldy1pbmZvIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZpZXctaW5mby1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDIwJTtcbn1cblxuLm1zZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogMTAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/autentication/dual-persona/dual-persona.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/autentication/dual-persona/dual-persona.component.ts ***!
    \**********************************************************************/

  /*! exports provided: DualPersonaComponent */

  /***/
  function srcAppAutenticationDualPersonaDualPersonaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DualPersonaComponent", function () {
      return DualPersonaComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);

    var DualPersonaComponent = /*#__PURE__*/function () {
      function DualPersonaComponent(router, serviceUser) {
        _classCallCheck(this, DualPersonaComponent);

        this.router = router;
        this.serviceUser = serviceUser;
        this.user = JSON.parse(localStorage.getItem('user'));
      }

      _createClass(DualPersonaComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "viewDashboard",
        value: function viewDashboard() {
          this.router.navigate(['/']);
        }
      }, {
        key: "viewAgent",
        value: function viewAgent() {
          this.router.navigate(['agent']);
        }
      }, {
        key: "updateUserToken",
        value: function updateUserToken() {
          var token = localStorage.getItem('pushToken');

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(this.user) && !Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(token)) {
            var model = {
              id: this.user.id,
              pushToken: token
            };
            this.serviceUser.post('User/update-push-token', JSON.stringify(model)).subscribe();
          }
        }
      }]);

      return DualPersonaComponent;
    }();

    DualPersonaComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }];
    };

    DualPersonaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dual-persona',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dual-persona.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/dual-persona/dual-persona.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dual-persona.component.scss */
      "./src/app/autentication/dual-persona/dual-persona.component.scss"))["default"]]
    })], DualPersonaComponent);
    /***/
  },

  /***/
  "./src/app/autentication/first-access/first-access.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/autentication/first-access/first-access.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAutenticationFirstAccessFirstAccessComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".label-first {\n  color: #54B488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.label-first-second {\n  color: #868686;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.input-border {\n  border-bottom: 3px solid #54B488;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvYXV0ZW50aWNhdGlvbi9maXJzdC1hY2Nlc3MvZmlyc3QtYWNjZXNzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdXRlbnRpY2F0aW9uL2ZpcnN0LWFjY2Vzcy9maXJzdC1hY2Nlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2F1dGVudGljYXRpb24vZmlyc3QtYWNjZXNzL2ZpcnN0LWFjY2Vzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1maXJzdCB7XG4gICAgY29sb3I6ICM1NEI0ODg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubGFiZWwtZmlyc3Qtc2Vjb25kIHtcbiAgICBjb2xvcjogIzg2ODY4NjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5wdXQtYm9yZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzU0QjQ4ODtcbn0iLCIubGFiZWwtZmlyc3Qge1xuICBjb2xvcjogIzU0QjQ4ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5sYWJlbC1maXJzdC1zZWNvbmQge1xuICBjb2xvcjogIzg2ODY4NjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5wdXQtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM1NEI0ODg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/autentication/first-access/first-access.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/autentication/first-access/first-access.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FirstAccessComponent */

  /***/
  function srcAppAutenticationFirstAccessFirstAccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstAccessComponent", function () {
      return FirstAccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_core_util_cpf_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/util/cpf-valid */
    "./src/app/core/util/cpf-valid.ts");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _model_UserPosted__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../model/UserPosted */
    "./src/app/autentication/model/UserPosted.ts");
    /* harmony import */


    var _term_accept_term_accept_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./term-accept/term-accept.component */
    "./src/app/autentication/first-access/term-accept/term-accept.component.ts");

    var FirstAccessComponent = /*#__PURE__*/function () {
      function FirstAccessComponent(router, builder, toastController, requestService, loadingController, modalController) {
        _classCallCheck(this, FirstAccessComponent);

        this.router = router;
        this.builder = builder;
        this.toastController = toastController;
        this.requestService = requestService;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.stepSelect = 0;
        this.stepEnd = 4;
        this.user = {};
        this.term_accept = false;
      }

      _createClass(FirstAccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  _context17.next = 2;
                  return this.loadingController.create({
                    message: "Aguarde..."
                  });

                case 2:
                  this.loading = _context17.sent;
                  _context17.next = 5;
                  return this.loading.present();

                case 5:
                case "end":
                  return _context17.stop();
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(message, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.next = 2;
                  return this.toastController.create({
                    message: message,
                    duration: 4000,
                    color: type
                  });

                case 2:
                  toast = _context18.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context18.stop();
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.formFirst = this.builder.group({
            cpf: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            date: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$')]],
            cEmail: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$')]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*')]],
            repeatPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*')]]
          });
        }
      }, {
        key: "next",
        value: function next(step) {
          var _this12 = this;

          var back = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          var _a, _b, _c, _d, _e, _f;

          if (step === 1) {
            if ((_a = this.formFirst.controls.cpf.errors) === null || _a === void 0 ? void 0 : _a.required) {
              this.presentToast("Informe seu CPF", "warning");
            } else if (!Object(src_app_core_util_cpf_valid__WEBPACK_IMPORTED_MODULE_5__["validCPF"])(this.formFirst.controls.cpf.value)) {
              this.presentToast("CPF inválido", "danger");
            } else {
              this.presentLoading();
              this.requestService.get("Patient/getPatientByCpf?cpf=" + this.formFirst.controls.cpf.value).subscribe(function (res) {
                if (res !== null) {
                  _this12.user = res;

                  _this12.formFirst.controls.email.setValue(_this12.user.email);

                  _this12.formFirst.controls.cEmail.setValue(_this12.user.email);

                  _this12.requestService.get("User/getUserByCpf?cpf=" + _this12.user.cpf).subscribe(function (res) {
                    if (!res) {
                      _this12.stepSelect = step;
                    } else {
                      _this12.presentToast("CPF informado já possui cadastro", "primary");
                    }

                    _this12.loading.dismiss();
                  }, function (err) {
                    _this12.presentToast("Falha ao comunicar com o servidor, tente novamente mais tarde", "danger");

                    _this12.loading.dismiss();
                  });
                } else {
                  _this12.presentToast("CPF não encontrado na nossa base de dados", "warning");

                  _this12.loading.dismiss();
                }
              }, function (err) {
                _this12.presentToast("Falha ao comunicar com o servidor, tente novamente mais tarde", "danger");

                _this12.loading.dismiss();
              });
            }
          } else if (step === 2) {
            if ((_b = this.formFirst.controls.date.errors) === null || _b === void 0 ? void 0 : _b.required) {
              this.presentToast("Informe sua data de nascimento", "warning");
            } else {
              if (moment__WEBPACK_IMPORTED_MODULE_7__(this.formFirst.controls.date.value).format("DD/MM/YYYY") === moment__WEBPACK_IMPORTED_MODULE_7__(this.user.dateBirth).format("DD/MM/YYYY")) {
                if (this.user.agent) {
                  if (!back) {
                    this.presentModal(step);
                  } else {
                    this.stepSelect = 1;
                  }
                } else {
                  if (!back) {
                    this.presentModal(step);
                  } else {
                    this.stepSelect = 1;
                  }
                }
              } else {
                this.presentToast("Data de nascimento não corresponde com a data cadastrada", "warning");
              }
            }
          } else if (step === 4) {
            if ((_c = this.formFirst.controls.email.errors) === null || _c === void 0 ? void 0 : _c.required) {
              this.presentToast("Informe seu e-mail", "warning");
            } else if ((_d = this.formFirst.controls.email.errors) === null || _d === void 0 ? void 0 : _d.pattern) {
              this.presentToast("E-mail inválido", "warning");
            } else if ((_e = this.formFirst.controls.cEmail.errors) === null || _e === void 0 ? void 0 : _e.required) {
              this.presentToast("Confirme seu e-mail", "warning");
            } else if ((_f = this.formFirst.controls.cEmail.errors) === null || _f === void 0 ? void 0 : _f.pattern) {
              this.presentToast("Confirmação de e-mail inválida", "warning");
            } else if (this.formFirst.controls.email.value !== this.formFirst.controls.cEmail.value) {
              this.presentToast("E-mails estão diferentes", "primary");
            } else {
              this.stepSelect = step;
            }
          } else {
            this.stepSelect = step;
          }
        }
      }, {
        key: "backLogin",
        value: function backLogin() {
          this.router.navigate(["/login"]);
        }
      }, {
        key: "populateSave",
        value: function populateSave() {
          var user = new _model_UserPosted__WEBPACK_IMPORTED_MODULE_8__["UserPosted"]();
          user.name = this.user.name;
          user.email = this.formFirst.controls.email.value;
          user.password = this.formFirst.controls.password.value;
          user.cpf = this.user.cpf;
          user.idType = 3;
          user.active = true;
          return user;
        }
      }, {
        key: "save",
        value: function save() {
          var _this13 = this;

          var _a, _b, _c, _d, _e, _f;

          if ((_a = this.formFirst.controls.password.errors) === null || _a === void 0 ? void 0 : _a.required) {
            this.presentToast("Informe sua Senha", "warning");
          } else if ((_b = this.formFirst.controls.password.errors) === null || _b === void 0 ? void 0 : _b.minlength) {
            this.presentToast("Senha deve conter 8 ou mais caracteres", "warning");
          } else if ((_c = this.formFirst.controls.password.errors) === null || _c === void 0 ? void 0 : _c.pattern) {
            this.presentToast("Senha deve conter números, letra maiúscula e caractere especial", "warning");
            this.formFirst.controls.repeatPassword.reset();
          } else if ((_d = this.formFirst.controls.repeatPassword.errors) === null || _d === void 0 ? void 0 : _d.required) {
            this.presentToast("Informe a confirmação de senha", "warning");
          } else if ((_e = this.formFirst.controls.repeatPassword.errors) === null || _e === void 0 ? void 0 : _e.minlength) {
            this.presentToast("Confirmação de senha deve conter 8 ou mais caracteres", "warning");
          } else if ((_f = this.formFirst.controls.repeatPassword.errors) === null || _f === void 0 ? void 0 : _f.pattern) {
            this.presentToast("confirmação de senha inválida", "warning");
            this.formFirst.controls.repeatPassword.reset();
          } else if (this.formFirst.controls.password.value !== this.formFirst.controls.repeatPassword.value) {
            this.presentToast("Senha e confirmação de senha estão diferentes", "warning");
            this.formFirst.controls.repeatPassword.reset();
          } else {
            this.requestService.post("User/new-user-app", JSON.stringify(this.populateSave())).subscribe(function (res) {
              if (res) {
                _this13.router.navigate(["/login"]);

                _this13.presentToast("Cadastro realizado com sucesso", "success");
              }
            }, function (err) {
              console.error(err);

              _this13.presentToast("Falha durante o cadastro, tente novamente mais tarde.", "error");
            });
          }
        }
      }, {
        key: "presentModal",
        value: function presentModal(step) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
            var _this14 = this;

            var modal;
            return _regeneratorRuntime().wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
                case 0:
                  _context19.next = 2;
                  return this.modalController.create({
                    component: _term_accept_term_accept_component__WEBPACK_IMPORTED_MODULE_9__["TermAcceptComponent"],
                    cssClass: 'my-custom-class'
                  });

                case 2:
                  modal = _context19.sent;
                  modal.onDidDismiss().then(function (data) {
                    var next = data['data']['next'];

                    if (next) {
                      _this14.stepSelect = 3;
                    }
                  });
                  _context19.next = 6;
                  return modal.present();

                case 6:
                  return _context19.abrupt("return", _context19.sent);

                case 7:
                case "end":
                  return _context19.stop();
              }
            }, _callee19, this);
          }));
        }
      }]);

      return FirstAccessComponent;
    }();

    FirstAccessComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    FirstAccessComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-first-access",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./first-access.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/first-access/first-access.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./first-access.component.scss */
      "./src/app/autentication/first-access/first-access.component.scss"))["default"]]
    })], FirstAccessComponent);
    /***/
  },

  /***/
  "./src/app/autentication/first-access/term-accept/term-accept.component.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/autentication/first-access/term-accept/term-accept.component.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAutenticationFirstAccessTermAcceptTermAcceptComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-dual {\n  background-image: url('logo.png');\n  background-repeat: no-repeat;\n  height: 72px;\n  background-position: center bottom;\n  margin-top: 4%;\n}\n\n.header-dual {\n  background-image: url('background-header.png');\n  background-repeat: no-repeat;\n  height: 100px;\n  background-size: 100%;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.title {\n  color: #979797;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.title-next {\n  color: #54B488;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.sub-title {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  color: #656565;\n}\n\n.info {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  color: #656565;\n}\n\n.footer-next {\n  background: #54B488;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  height: 70px;\n}\n\n.footer-agent {\n  background: #FF993C;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  height: 70px;\n}\n\n.footer-depe {\n  background: #3CD0FF;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 0px 0px 5px 5px;\n  height: 70px;\n}\n\n.card-footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  line-height: 43px;\n}\n\n.card-content {\n  height: auto;\n  min-height: 130px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.view-info {\n  color: #FFFFFF;\n  font-size: 20px;\n  font-family: \"Baloo 2\", cursive;\n  font-weight: bold;\n}\n\n.view-info-icon {\n  float: right;\n  color: #FFFFFF;\n  font-size: 40px;\n  position: absolute;\n  right: 0;\n  bottom: 20%;\n}\n\n.msg {\n  font-size: 20px;\n  font-family: \"Baloo 2\", cursive;\n  font-weight: 100;\n  text-align: justify;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvYXV0ZW50aWNhdGlvbi9maXJzdC1hY2Nlc3MvdGVybS1hY2NlcHQvdGVybS1hY2NlcHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2F1dGVudGljYXRpb24vZmlyc3QtYWNjZXNzL3Rlcm0tYWNjZXB0L3Rlcm0tYWNjZXB0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLDhDQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQ0E7RUFDSSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDR0o7O0FEREE7RUFDSSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDSUo7O0FERkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURGQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDS0o7O0FERkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNNSjs7QURIQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL2F1dGVudGljYXRpb24vZmlyc3QtYWNjZXNzL3Rlcm0tYWNjZXB0L3Rlcm0tYWNjZXB0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tZHVhbCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9sb2dvLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDcycHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuLmhlYWRlci1kdWFsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2JhY2tncm91bmQtaGVhZGVyLnBuZyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi50aXRsZSB7XG4gICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGl0bGUtbmV4dCB7XG4gICAgY29sb3I6ICM1NEI0ODg7IFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjNjU2NTY1O1xufVxuLmluZm8ge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLmZvb3Rlci1uZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjNTRCNDg4O1xuICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG4uZm9vdGVyLWFnZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjRkY5OTNDO1xuICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG4uZm9vdGVyLWRlcGUge1xuICAgIGJhY2tncm91bmQ6ICMzQ0QwRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGhlaWdodDogNzBweDtcbn1cbi5jYXJkLWZvb3RlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgfVxuXG4uY2FyZC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogMTMwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdCYWxvbyAyJywgY3Vyc2l2ZTtcbn1cblxuLnZpZXctaW5mbyB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi52aWV3LWluZm8taWNvbiB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAyMCU7XG59XG5cbi5tc2cge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSIsIi5sb2dvLWR1YWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2xvZ28ucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA3MnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuLmhlYWRlci1kdWFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLWhlYWRlci5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICM5Nzk3OTc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGl0bGUtbmV4dCB7XG4gIGNvbG9yOiAjNTRCNDg4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLmluZm8ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG5cbi5mb290ZXItbmV4dCB7XG4gIGJhY2tncm91bmQ6ICM1NEI0ODg7XG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmZvb3Rlci1hZ2VudCB7XG4gIGJhY2tncm91bmQ6ICNGRjk5M0M7XG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmZvb3Rlci1kZXBlIHtcbiAgYmFja2dyb3VuZDogIzNDRDBGRjtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiA0M3B4O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4udmlldy1pbmZvIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnZpZXctaW5mby1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDIwJTtcbn1cblxuLm1zZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogMTAwO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/autentication/first-access/term-accept/term-accept.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/autentication/first-access/term-accept/term-accept.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: TermAcceptComponent */

  /***/
  function srcAppAutenticationFirstAccessTermAcceptTermAcceptComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermAcceptComponent", function () {
      return TermAcceptComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var TermAcceptComponent = /*#__PURE__*/function () {
      function TermAcceptComponent(router, modalController) {
        _classCallCheck(this, TermAcceptComponent);

        this.router = router;
        this.modalController = modalController;
      }

      _createClass(TermAcceptComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "next",
        value: function next() {
          this.modalController.dismiss({
            'next': true
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.modalController.dismiss({
            'next': false
          });
        }
      }]);

      return TermAcceptComponent;
    }();

    TermAcceptComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    TermAcceptComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-term-accept',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./term-accept.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/first-access/term-accept/term-accept.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./term-accept.component.scss */
      "./src/app/autentication/first-access/term-accept/term-accept.component.scss"))["default"]]
    })], TermAcceptComponent);
    /***/
  },

  /***/
  "./src/app/autentication/login/login.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/autentication/login/login.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAutenticationLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button {\n  outline: none;\n}\n\n.input-login {\n  background: #EAEAEA;\n  border-radius: 12px;\n  height: 56px;\n  line-height: 56px;\n  font-size: 25px;\n  color: #858585;\n}\n\n.label-password {\n  color: #888888;\n  font-style: normal;\n  font-weight: normal;\n  text-decoration: none;\n  outline: none;\n}\n\n.footer-app {\n  background: #406AEF;\n  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.35);\n  height: 87px;\n  color: #FFFFFF;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 87px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvYXV0ZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0ZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXV0ZW50aWNhdGlvbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuYnV0dG9uIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wdXQtbG9naW4ge1xuICAgIGJhY2tncm91bmQ6ICNFQUVBRUE7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBoZWlnaHQ6IDU2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjODU4NTg1O1xufVxuXG4ubGFiZWwtcGFzc3dvcmQge1xuICAgIGNvbG9yOiAjODg4ODg4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4uZm9vdGVyLWFwcCB7XG4gICAgYmFja2dyb3VuZDogIzQwNkFFRjtcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgICBoZWlnaHQ6IDg3cHg7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDg3cHg7XG59XG4iLCJidXR0b24ge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uaW5wdXQtbG9naW4ge1xuICBiYWNrZ3JvdW5kOiAjRUFFQUVBO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBoZWlnaHQ6IDU2cHg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjODU4NTg1O1xufVxuXG4ubGFiZWwtcGFzc3dvcmQge1xuICBjb2xvcjogIzg4ODg4ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb290ZXItYXBwIHtcbiAgYmFja2dyb3VuZDogIzQwNkFFRjtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGhlaWdodDogODdweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDg3cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/autentication/login/login.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/autentication/login/login.component.ts ***!
    \********************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAutenticationLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_util_cpf_valid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/util/cpf-valid */
    "./src/app/core/util/cpf-valid.ts");
    /* harmony import */


    var src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/util/loading */
    "./src/app/core/util/loading.ts");
    /* harmony import */


    var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/core/auth/auth.service */
    "./src/app/core/auth/auth.service.ts");
    /* harmony import */


    var src_app_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/service/firebase/firebase.service */
    "./src/app/service/firebase/firebase.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(serviceHelper, builder, toastController, router, loading, authService, firebaseService, alertController) {
        var _this15 = this;

        _classCallCheck(this, LoginComponent);

        this.serviceHelper = serviceHelper;
        this.builder = builder;
        this.toastController = toastController;
        this.router = router;
        this.loading = loading;
        this.authService = authService;
        this.firebaseService = firebaseService;
        this.alertController = alertController;
        this.alertButtons = ['OK'];
        this.alertInputs = [];

        this.populateConsortiumView = function (consortiumList) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
            var _this16 = this;

            return _regeneratorRuntime().wrap(function _callee20$(_context20) {
              while (1) switch (_context20.prev = _context20.next) {
                case 0:
                  consortiumList.forEach(function (element) {
                    _this16.alertInputs.push({
                      label: element.nameTenant,
                      type: 'radio',
                      value: element.tenant
                    });
                  });

                case 1:
                case "end":
                  return _context20.stop();
              }
            }, _callee20);
          }));
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee21$(_context21) {
              while (1) switch (_context21.prev = _context21.next) {
                case 0:
                  _context21.next = 2;
                  return this.toastController.create({
                    cssClass: 'text-center',
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context21.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context21.stop();
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.formLogin = this.builder.group({
            cpf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*')]]
          });
        }
      }, {
        key: "openFirstAccess",
        value: function openFirstAccess() {
          this.router.navigate(['/first-access']);
        }
      }, {
        key: "postLogin",
        value: function postLogin() {
          var _this17 = this;

          var _a, _b, _c, _d;

          if ((_a = this.formLogin.controls.cpf.errors) === null || _a === void 0 ? void 0 : _a.required) {
            this.presentToast('Informe CPF e senha', 'danger');
          } else if (!Object(src_app_core_util_cpf_valid__WEBPACK_IMPORTED_MODULE_6__["validCPF"])(this.formLogin.controls.cpf.value)) {
            this.presentToast('CPF inválido', "danger");
          } else if ((_b = this.formLogin.controls.password.errors) === null || _b === void 0 ? void 0 : _b.required) {
            this.presentToast("Informe sua Senha", "danger");
          } else if ((_c = this.formLogin.controls.password.errors) === null || _c === void 0 ? void 0 : _c.minlength) {
            this.presentToast("Senha deve conter 8 ou mais caracteres", "danger");
          } else if ((_d = this.formLogin.controls.password.errors) === null || _d === void 0 ? void 0 : _d.pattern) {
            this.presentToast("Senha deve conter números, letra maiúscula e caractere especial", "danger");
          } else {
            Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOn"])(this.loading);
            var objLogin = {
              cpf: this.formLogin.controls.cpf.value,
              password: this.formLogin.controls.password.value
            };
            this.serviceHelper.post('User/tenant-app', JSON.stringify(objLogin)).subscribe(function (res) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
                return _regeneratorRuntime().wrap(function _callee22$(_context22) {
                  while (1) switch (_context22.prev = _context22.next) {
                    case 0:
                      Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(this.loading);

                      if (!res) {
                        _context22.next = 18;
                        break;
                      }

                      this.authService.tenantList = JSON.stringify(res);

                      if (!(res.length > 0)) {
                        _context22.next = 17;
                        break;
                      }

                      if (!(res.length > 1)) {
                        _context22.next = 11;
                        break;
                      }

                      _context22.next = 7;
                      return this.populateConsortiumView(res);

                    case 7:
                      _context22.next = 9;
                      return this.presentAlert(objLogin);

                    case 9:
                      _context22.next = 14;
                      break;

                    case 11:
                      this.authService.tenantID = res[0]["tenant"];
                      _context22.next = 14;
                      return this.login(objLogin);

                    case 14:
                      sessionStorage.setItem('mail', this.formLogin.controls.cpf.value);
                      _context22.next = 18;
                      break;

                    case 17:
                      this.presentToast("CPF e/ou senha inválidos.", "danger");

                    case 18:
                    case "end":
                      return _context22.stop();
                  }
                }, _callee22, this);
              }));
            }, function (err) {
              localStorage.removeItem('user');
              Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(_this17.loading);
              console.error(err);
            });
          }
        }
      }, {
        key: "resetPassword",
        value: function resetPassword() {
          this.router.navigate(['password-reset']);
        }
      }, {
        key: "login",
        value: function login(objLogin) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
            var _this18 = this;

            return _regeneratorRuntime().wrap(function _callee23$(_context23) {
              while (1) switch (_context23.prev = _context23.next) {
                case 0:
                  this.serviceHelper.post('auth/login-app', JSON.stringify(objLogin)).subscribe(function (res) {
                    Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(_this18.loading);

                    if (res.authenticated) {
                      localStorage.setItem('user', JSON.stringify(res));
                      _this18.authService.token = res.token;
                      /**Salvando o token de notificação push do usuário! */

                      _this18.firebaseService.saveTokenUserFirebase();

                      if (res.typeUser !== 'agente') {
                        _this18.router.navigate(['']);
                      } else {
                        _this18.router.navigate(['dual']);
                      }
                    } else {
                      _this18.presentToast(res.message, "danger");
                    }
                  }, function (err) {
                    localStorage.removeItem('user');
                    Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(_this18.loading);
                    console.error(err);
                  });

                case 1:
                case "end":
                  return _context23.stop();
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(objLogin) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee25() {
            var _this19 = this;

            var alert;
            return _regeneratorRuntime().wrap(function _callee25$(_context25) {
              while (1) switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return this.alertController.create({
                    header: 'Por favor selecione qual convênio quer acessar seus agendamentos',
                    subHeader: '',
                    message: '',
                    buttons: [{
                      text: 'OK',
                      handler: function handler(select) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
                          return _regeneratorRuntime().wrap(function _callee24$(_context24) {
                            while (1) switch (_context24.prev = _context24.next) {
                              case 0:
                                if (!(select !== undefined)) {
                                  _context24.next = 5;
                                  break;
                                }

                                _context24.next = 3;
                                return this.setResultSelect(select, objLogin);

                              case 3:
                                _context24.next = 7;
                                break;

                              case 5:
                                _context24.next = 7;
                                return this.presentAlert(objLogin);

                              case 7:
                              case "end":
                                return _context24.stop();
                            }
                          }, _callee24, this);
                        }));
                      }
                    }],
                    inputs: this.alertInputs
                  });

                case 2:
                  alert = _context25.sent;
                  _context25.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context25.stop();
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "setResultSelect",
        value: function setResultSelect(select, objLogin) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee26() {
            return _regeneratorRuntime().wrap(function _callee26$(_context26) {
              while (1) switch (_context26.prev = _context26.next) {
                case 0:
                  this.authService.tenantID = select;
                  _context26.next = 3;
                  return this.login(objLogin);

                case 3:
                case "end":
                  return _context26.stop();
              }
            }, _callee26, this);
          }));
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]
      }, {
        type: src_app_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/autentication/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/autentication/model/UserPosted.ts":
  /*!***************************************************!*\
    !*** ./src/app/autentication/model/UserPosted.ts ***!
    \***************************************************/

  /*! exports provided: UserPosted */

  /***/
  function srcAppAutenticationModelUserPostedTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPosted", function () {
      return UserPosted;
    });

    var UserPosted = /*#__PURE__*/_createClass(function UserPosted() {
      _classCallCheck(this, UserPosted);
    });
    /***/

  },

  /***/
  "./src/app/autentication/password-reset/password-reset.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/autentication/password-reset/password-reset.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAutenticationPasswordResetPasswordResetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".label-first {\n  color: #54B488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.label-first-second {\n  color: #868686;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.input-border {\n  border-bottom: 3px solid #54B488;\n}\n\n.logo-dual {\n  background-image: url('logo.png');\n  background-repeat: no-repeat;\n  height: 72px;\n  background-position: center bottom;\n  margin-top: 4%;\n}\n\n.header-dual {\n  background-image: url('background-header.png');\n  background-repeat: no-repeat;\n  height: 100px;\n  background-size: 100%;\n  font-family: \"Baloo 2\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvYXV0ZW50aWNhdGlvbi9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0ZW50aWNhdGlvbi9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxnQ0FBQTtBQ0FKOztBREdBO0VBQ0ksaUNBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNBSjs7QURHQTtFQUNJLDhDQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXV0ZW50aWNhdGlvbi9wYXNzd29yZC1yZXNldC9wYXNzd29yZC1yZXNldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmxhYmVsLWZpcnN0IHtcbiAgICBjb2xvcjogIzU0QjQ4ODtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5sYWJlbC1maXJzdC1zZWNvbmQge1xuICAgIGNvbG9yOiAjODY4Njg2O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbnB1dC1ib3JkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNTRCNDg4O1xufVxuXG4ubG9nby1kdWFsIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2xvZ28ucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICAgIG1hcmdpbi10b3A6IDQlO1xufVxuXG4uaGVhZGVyLWR1YWwge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvYmFja2dyb3VuZC1oZWFkZXIucG5nKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn0iLCIubGFiZWwtZmlyc3Qge1xuICBjb2xvcjogIzU0QjQ4ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5sYWJlbC1maXJzdC1zZWNvbmQge1xuICBjb2xvcjogIzg2ODY4NjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaW5wdXQtYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM1NEI0ODg7XG59XG5cbi5sb2dvLWR1YWwge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2xvZ28ucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiA3MnB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xuICBtYXJnaW4tdG9wOiA0JTtcbn1cblxuLmhlYWRlci1kdWFsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLWhlYWRlci5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/autentication/password-reset/password-reset.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/autentication/password-reset/password-reset.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PasswordResetComponent */

  /***/
  function srcAppAutenticationPasswordResetPasswordResetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function () {
      return PasswordResetComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");

    var PasswordResetComponent = /*#__PURE__*/function () {
      function PasswordResetComponent(builder, service, router, alertController) {
        _classCallCheck(this, PasswordResetComponent);

        this.builder = builder;
        this.service = service;
        this.router = router;
        this.alertController = alertController;
      }

      _createClass(PasswordResetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee27() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee27$(_context27) {
              while (1) switch (_context27.prev = _context27.next) {
                case 0:
                  _context27.next = 2;
                  return this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: message,
                    buttons: ['OK']
                  });

                case 2:
                  alert = _context27.sent;
                  _context27.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context27.stop();
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.form = this.builder.group({
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "send",
        value: function send() {
          var _this20 = this;

          this.service.put('User/requestToResetPassword/' + this.form.controls.email.value, {}).subscribe(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
              return _regeneratorRuntime().wrap(function _callee28$(_context28) {
                while (1) switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return this.presentAlert(result.messages[0]);

                  case 2:
                  case "end":
                    return _context28.stop();
                }
              }, _callee28, this);
            }));
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.router.navigate(['/login']);
        }
      }]);

      return PasswordResetComponent;
    }();

    PasswordResetComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    PasswordResetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-password-reset',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./password-reset.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/autentication/password-reset/password-reset.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./password-reset.component.scss */
      "./src/app/autentication/password-reset/password-reset.component.scss"))["default"]]
    })], PasswordResetComponent);
    /***/
  },

  /***/
  "./src/app/chat-room/chat-room.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/chat-room/chat-room.module.ts ***!
    \***********************************************/

  /*! exports provided: ChatRoomPageModule */

  /***/
  function srcAppChatRoomChatRoomModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatRoomPageModule", function () {
      return ChatRoomPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _chat_room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./chat-room.page */
    "./src/app/chat-room/chat-room.page.ts");

    var routes = [{
      path: '',
      component: _chat_room_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]
    }];

    var ChatRoomPageModule = /*#__PURE__*/_createClass(function ChatRoomPageModule() {
      _classCallCheck(this, ChatRoomPageModule);
    });

    ChatRoomPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_chat_room_page__WEBPACK_IMPORTED_MODULE_6__["ChatRoomPage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })], ChatRoomPageModule);
    /***/
  },

  /***/
  "./src/app/chat-room/chat-room.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/chat-room/chat-room.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatRoomChatRoomPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-card {\n  width: 80%;\n  border-radius: 50px;\n}\n\n[flow-right] {\n  flex-flow: row-reverse;\n}\n\n[bg-sky] {\n  --background: #f8fafa;\n}\n\n[bg-white] {\n  --background: #fff;\n  --color: #000;\n}\n\n[bg-light] {\n  --background: #54B488;\n  --color: #fff;\n}\n\n[light-time] {\n  color: #6a6a6a;\n  font-size: 0.7rem;\n  padding: 5px;\n}\n\n[light-time-white] {\n  color: #fff;\n  font-size: 0.7rem;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvY2hhdC1yb29tL2NoYXQtcm9vbS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NoYXQtcm9vbS9jaGF0LXJvb20ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxzQkFBQTtBQ0VKOztBRENBO0VBQ0kscUJBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQ0dKOztBRERBO0VBQ0kscUJBQUE7RUFDQSxhQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDS0o7O0FERkE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9jaGF0LXJvb20vY2hhdC1yb29tLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5bZmxvdy1yaWdodF0ge1xuICAgIGZsZXgtZmxvdzogcm93LXJldmVyc2U7XG59XG5cbltiZy1za3ldIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmOGZhZmE7XG59XG5bYmctd2hpdGVdIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgLS1jb2xvcjogIzAwMDtcbn1cbltiZy1saWdodF0ge1xuICAgIC0tYmFja2dyb3VuZDogIzU0QjQ4ODs7XG4gICAgLS1jb2xvcjogI2ZmZjtcbn1cbltsaWdodC10aW1lXSB7XG4gICAgY29sb3I6ICM2YTZhNmE7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG5bbGlnaHQtdGltZS13aGl0ZV0ge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbiIsImlvbi1jYXJkIHtcbiAgd2lkdGg6IDgwJTtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuW2Zsb3ctcmlnaHRdIHtcbiAgZmxleC1mbG93OiByb3ctcmV2ZXJzZTtcbn1cblxuW2JnLXNreV0ge1xuICAtLWJhY2tncm91bmQ6ICNmOGZhZmE7XG59XG5cbltiZy13aGl0ZV0ge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIC0tY29sb3I6ICMwMDA7XG59XG5cbltiZy1saWdodF0ge1xuICAtLWJhY2tncm91bmQ6ICM1NEI0ODg7XG4gIC0tY29sb3I6ICNmZmY7XG59XG5cbltsaWdodC10aW1lXSB7XG4gIGNvbG9yOiAjNmE2YTZhO1xuICBmb250LXNpemU6IDAuN3JlbTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG5bbGlnaHQtdGltZS13aGl0ZV0ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/chat-room/chat-room.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/chat-room/chat-room.page.ts ***!
    \*********************************************/

  /*! exports provided: ChatRoomPage */

  /***/
  function srcAppChatRoomChatRoomPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatRoomPage", function () {
      return ChatRoomPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/service/firebase/firebase.service */
    "./src/app/service/firebase/firebase.service.ts");
    /* harmony import */


    var _service_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../service/fcm/fcm.service */
    "./src/app/service/fcm/fcm.service.ts");
    /**
     * Classe responsável pelo envio e recebimento de mensagens pelo app
     * @author Gustavo Teles
     */


    var ChatRoomPage = /*#__PURE__*/function () {
      function ChatRoomPage(firebaseService, route, router, navParams, modalCtrl, fcmService) {
        _classCallCheck(this, ChatRoomPage);

        this.firebaseService = firebaseService;
        this.route = route;
        this.router = router;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.fcmService = fcmService;
        this.messages = [];
        this.chatKeys = [];
        this.loader = true;
        this.user = this.navParams.data.data;
        var cpfUsuario = this.user.cpf;

        if (cpfUsuario.includes('/')) {
          cpfUsuario = cpfUsuario.replace('/', '');
        }

        if (cpfUsuario.includes('-')) {
          cpfUsuario = cpfUsuario.replace('-', '');
        }

        if (cpfUsuario.includes('.')) {
          cpfUsuario = cpfUsuario.replace('.', '');
        }

        this.cpfEnvio = parseFloat(cpfUsuario);
      }

      _createClass(ChatRoomPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
            var cpfSession;
            return _regeneratorRuntime().wrap(function _callee29$(_context29) {
              while (1) switch (_context29.prev = _context29.next) {
                case 0:
                  this.session = JSON.parse(localStorage.getItem("user"));
                  cpfSession = this.session.cpf;

                  while (cpfSession.includes('/') || cpfSession.includes('-') || cpfSession.includes('.')) {
                    cpfSession = cpfSession.replace('/', '');
                    cpfSession = cpfSession.replace('-', '');
                    cpfSession = cpfSession.replace('.', '');
                  }

                  this.session = parseFloat(cpfSession);
                  _context29.next = 6;
                  return this.getChat();

                case 6:
                  this.content.scrollToBottom();

                case 7:
                case "end":
                  return _context29.stop();
              }
            }, _callee29, this);
          }));
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
            return _regeneratorRuntime().wrap(function _callee30$(_context30) {
              while (1) switch (_context30.prev = _context30.next) {
                case 0:
                  this.content.scrollToBottom();

                case 1:
                case "end":
                  return _context30.stop();
              }
            }, _callee30, this);
          }));
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
            return _regeneratorRuntime().wrap(function _callee31$(_context31) {
              while (1) switch (_context31.prev = _context31.next) {
                case 0:
                  this.modalCtrl.dismiss({
                    'dismissed': true
                  });

                case 1:
                case "end":
                  return _context31.stop();
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "sendChat",
        value: function sendChat() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee32() {
            var loggedInUser;
            return _regeneratorRuntime().wrap(function _callee32$(_context32) {
              while (1) switch (_context32.prev = _context32.next) {
                case 0:
                  if (this.chat) {
                    loggedInUser = JSON.parse(localStorage.getItem("user"));
                    this.fcmService.sendPushMsg(loggedInUser.user, this.chat, this.user.cpf);
                    this.firebaseService.sendMsg(this.cpfEnvio, this.cpfEnvio, this.session, this.chat);
                  }

                  this.chat = '';
                  this.content.scrollToBottom();

                case 3:
                case "end":
                  return _context32.stop();
              }
            }, _callee32, this);
          }));
        }
      }, {
        key: "getChat",
        value: function getChat() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
            var _this21 = this;

            return _regeneratorRuntime().wrap(function _callee33$(_context33) {
              while (1) switch (_context33.prev = _context33.next) {
                case 0:
                  _context33.next = 2;
                  return this.firebaseService.db.collection("chatRoom").where('id', 'array-contains', this.session).onSnapshot(function (querySnapshot) {
                    _this21.loader = false;
                    querySnapshot.forEach(function (doc) {
                      var data = doc.data();

                      if (data.from == _this21.cpfEnvio && data.to == _this21.session || data.from == _this21.session && data.to == _this21.cpfEnvio) {
                        if (_this21.chatKeys.indexOf(data.key) < 0) {
                          _this21.messages.push(data);

                          _this21.chatKeys.push(data.key);

                          _this21.content.scrollToBottom();
                        }

                        ;
                      }

                      ;
                    });

                    _this21.messages.sort(_this21.sortDate);

                    console.log("🚀 ~ file: chat-room.page.ts:100 ~ ChatRoomPage ~ .onSnapshot ~ this.messages", _this21.messages);
                  });

                case 2:
                case "end":
                  return _context33.stop();
              }
            }, _callee33, this);
          }));
        }
      }, {
        key: "sortDate",
        value: function sortDate(a, b) {
          var dateA = new Date();
          var dateB = new Date();

          try {
            dateA = new Date(a.timestamp.toDate());
          } catch (error) {}

          try {
            dateB = new Date(b.timestamp.toDate());
          } catch (error) {}

          return dateA > dateB ? 1 : -1;
        }
      }, {
        key: "formatDate",
        value: function formatDate(message) {
          var date = message['timestamp'] ? message['timestamp'].toDate() : new Date();
          return this.firebaseService.formatAMPM(date);
        }
      }]);

      return ChatRoomPage;
    }();

    ChatRoomPage.ctorParameters = function () {
      return [{
        type: src_app_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _service_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_5__["FcmService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], {
      "static": true
    })], ChatRoomPage.prototype, "content", void 0);
    ChatRoomPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-room',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./chat-room.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-room/chat-room.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./chat-room.page.scss */
      "./src/app/chat-room/chat-room.page.scss"))["default"]]
    })], ChatRoomPage);
    /***/
  },

  /***/
  "./src/app/components/filter-chat-modal/filter-chat-modal.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/filter-chat-modal/filter-chat-modal.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFilterChatModalFilterChatModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-border {\n  border-bottom: 3px solid #54B488;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9maWx0ZXItY2hhdC1tb2RhbC9maWx0ZXItY2hhdC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXItY2hhdC1tb2RhbC9maWx0ZXItY2hhdC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci1jaGF0LW1vZGFsL2ZpbHRlci1jaGF0LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM1NEI0ODg7XG59IiwiLmlucHV0LWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNTRCNDg4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/filter-chat-modal/filter-chat-modal.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/filter-chat-modal/filter-chat-modal.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: FilterChatModalComponent */

  /***/
  function srcAppComponentsFilterChatModalFilterChatModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterChatModalComponent", function () {
      return FilterChatModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /**
     * Classe responsável pela caixa de opções de filtros do chat virtual
     * @author Gustavo Teles
     */


    var FilterChatModalComponent = /*#__PURE__*/function () {
      function FilterChatModalComponent(modalCtrl, builder, toastController) {
        _classCallCheck(this, FilterChatModalComponent);

        this.modalCtrl = modalCtrl;
        this.builder = builder;
        this.toastController = toastController;
      }

      _createClass(FilterChatModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.form = this.builder.group({
            name: [null]
          });
          var filter = localStorage.getItem('filterChatModal');

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(filter)) {
            var form = JSON.parse(filter);
            this.form.controls.name.setValue(form.name);
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          var dados = {
            name: this.form.controls.name.value
          };
          localStorage.setItem('filterChatModal', JSON.stringify(dados));
          this.dismiss(dados);
        }
      }, {
        key: "cleanFilter",
        value: function cleanFilter() {
          localStorage.removeItem('filterChatModal');
          this.dismiss(null);
        }
      }, {
        key: "dismiss",
        value: function dismiss(result) {
          if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(result)) {
            localStorage.removeItem('filterChatModal');
          }

          this.modalCtrl.dismiss({
            'data': result,
            'dismissed': true
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee34$(_context34) {
              while (1) switch (_context34.prev = _context34.next) {
                case 0:
                  _context34.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context34.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context34.stop();
              }
            }, _callee34, this);
          }));
        }
      }]);

      return FilterChatModalComponent;
    }();

    FilterChatModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    FilterChatModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filter-chat-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filter-chat-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filter-chat-modal/filter-chat-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./filter-chat-modal.component.scss */
      "./src/app/components/filter-chat-modal/filter-chat-modal.component.scss"))["default"]]
    })], FilterChatModalComponent);
    /***/
  },

  /***/
  "./src/app/components/filter-date-modal/filter-date-modal.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/filter-date-modal/filter-date-modal.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFilterDateModalFilterDateModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-border {\n  border-bottom: 3px solid #54B488;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvY29tcG9uZW50cy9maWx0ZXItZGF0ZS1tb2RhbC9maWx0ZXItZGF0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9maWx0ZXItZGF0ZS1tb2RhbC9maWx0ZXItZGF0ZS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2ZpbHRlci1kYXRlLW1vZGFsL2ZpbHRlci1kYXRlLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM1NEI0ODg7XG59IiwiLmlucHV0LWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNTRCNDg4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/filter-date-modal/filter-date-modal.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/filter-date-modal/filter-date-modal.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: FilterDateModalComponent */

  /***/
  function srcAppComponentsFilterDateModalFilterDateModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterDateModalComponent", function () {
      return FilterDateModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);

    var FilterDateModalComponent = /*#__PURE__*/function () {
      function FilterDateModalComponent(modalCtrl, builder, toastController) {
        _classCallCheck(this, FilterDateModalComponent);

        this.modalCtrl = modalCtrl;
        this.builder = builder;
        this.toastController = toastController;
      }

      _createClass(FilterDateModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.form = this.builder.group({
            startDate: [null],
            endDate: [null]
          });
          var filter = localStorage.getItem('filterDateModal');

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(filter)) {
            var form = JSON.parse(filter);
            this.form.controls.startDate.setValue(form.startDate);
            this.form.controls.endDate.setValue(form.endDate);
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          var dados = {
            startDate: this.form.controls.startDate.value,
            endDate: this.form.controls.endDate.value
          };
          localStorage.setItem('filterDateModal', JSON.stringify(dados));
          this.dismiss(dados);
        }
      }, {
        key: "cleanFilter",
        value: function cleanFilter() {
          localStorage.removeItem('filterDateModal');
          this.dismiss(null);
        }
      }, {
        key: "dismiss",
        value: function dismiss(result) {
          if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(result)) {
            localStorage.removeItem('filterDateModal');
          }

          this.modalCtrl.dismiss({
            'data': result,
            'dismissed': true
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee35$(_context35) {
              while (1) switch (_context35.prev = _context35.next) {
                case 0:
                  _context35.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context35.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context35.stop();
              }
            }, _callee35, this);
          }));
        }
      }]);

      return FilterDateModalComponent;
    }();

    FilterDateModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    FilterDateModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filter-date-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filter-date-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/filter-date-modal/filter-date-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./filter-date-modal.component.scss */
      "./src/app/components/filter-date-modal/filter-date-modal.component.scss"))["default"]]
    })], FilterDateModalComponent);
    /***/
  },

  /***/
  "./src/app/core/auth/auth.guard.ts":
  /*!*****************************************!*\
    !*** ./src/app/core/auth/auth.guard.ts ***!
    \*****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppCoreAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (localStorage.getItem('user')) {
            return true;
          }

          document.location.href = '/login';
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/core/auth/auth.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/auth/auth.service.ts ***!
    \*******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppCoreAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(jwtHelper) {
        _classCallCheck(this, AuthService);

        this.jwtHelper = jwtHelper;
        this._currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.tokenPayload);
      }

      _createClass(AuthService, [{
        key: "clear",
        value: function clear() {
          localStorage.clear();
        }
      }, {
        key: "loggedIn",
        get: function get() {
          return !!this.tokenPayload;
        }
      }, {
        key: "isTokenExpired",
        get: function get() {
          var expiration = this.tokenPayload.exp;
          if (expiration === undefined) return false;
          return !(expiration > Date.now() / 1000);
        }
      }, {
        key: "currentUser",
        get: function get() {
          return this._currentUser.asObservable();
        }
      }, {
        key: "typeUser",
        get: function get() {
          if (!!this.tokenPayload) {
            return this.tokenPayload.typeUser;
          }

          return '';
        }
      }, {
        key: "token",
        get: function get() {
          return localStorage.token;
        },
        set: function set(value) {
          localStorage.setItem('token', value);

          this._currentUser.next(this.tokenPayload);
        }
      }, {
        key: "tenantList",
        get: function get() {
          return localStorage.tenantList;
        },
        set: function set(value) {
          localStorage.setItem('tenantList', value);
        }
      }, {
        key: "tenantID",
        get: function get() {
          return localStorage.tenantID;
        },
        set: function set(value) {
          localStorage.setItem('tenantID', value);
        }
      }, {
        key: "tenantOK",
        get: function get() {
          return localStorage.tenantOK;
        },
        set: function set(value) {
          localStorage.setItem('tenantOK', value);
        }
      }, {
        key: "idUser",
        get: function get() {
          return this.tokenPayload.id;
        }
      }, {
        key: "roles",
        get: function get() {
          if (!!this.tokenPayload.roles) {
            return this.tokenPayload.roles.split(',');
          }

          return [];
        }
      }, {
        key: "typeEntity",
        get: function get() {
          if (!!this.tokenPayload) {
            return this.tokenPayload.typeEntity;
          }

          return '';
        }
      }, {
        key: "tokenPayload",
        get: function get() {
          try {
            return this.jwtHelper.decodeToken(this.token);
          } catch (error) {
            return null;
          }
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
      }];
    };

    AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthService);
    /***/
  },

  /***/
  "./src/app/core/request-help/request-service.ts":
  /*!******************************************************!*\
    !*** ./src/app/core/request-help/request-service.ts ***!
    \******************************************************/

  /*! exports provided: RequestService */

  /***/
  function srcAppCoreRequestHelpRequestServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestService", function () {
      return RequestService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/core/auth/auth.service.ts");

    var RequestService = /*#__PURE__*/function () {
      function RequestService(http, authService) {
        _classCallCheck(this, RequestService);

        this.http = http;
        this.authService = authService;
        this.urlBase = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].url;
        this.urlBaseCep = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].urlCep;
      }

      _createClass(RequestService, [{
        key: "get",
        value: function get(url, errorParams) {
          var _this22 = this;

          var httpOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var defaultHttp = this.getOptions();
          var requestHttpOptions = Object.assign(Object.assign({}, defaultHttp), httpOptions);
          return this.http.get(this.urlBase + url, requestHttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return _this22.handleError(e);
          }));
        }
      }, {
        key: "getCep",
        value: function getCep(url, errorParams) {
          var httpOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var defaultHttp = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          defaultHttp.set('Content-Type', 'application/json');
          var requestHttpOptions = Object.assign(Object.assign({}, defaultHttp), httpOptions);
          return this.get(this.urlBaseCep + url, requestHttpOptions);
        }
      }, {
        key: "post",
        value: function post(url, data, errorParams) {
          var _this23 = this;

          var httpOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var defaultHttp = this.getOptions();
          var requestHttpOptions = Object.assign(Object.assign({}, defaultHttp), httpOptions);
          return this.http.post(this.urlBase + url, data, requestHttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return _this23.handleError(e);
          }));
        }
      }, {
        key: "put",
        value: function put(url, data, errorParams) {
          var _this24 = this;

          var httpOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var defaultHttp = this.getOptions();
          var requestHttpOptions = Object.assign(Object.assign({}, defaultHttp), httpOptions);
          return this.http.put(this.urlBase + url, data, requestHttpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return _this24.handleError(e);
          }));
        }
      }, {
        key: "postReturnString",
        value: function postReturnString(url, data, errorParams) {
          var httpOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
          var defaultHttp = this.getOptions();
          var requestHttpOptions = Object.assign(Object.assign({}, defaultHttp), httpOptions);
          return this.http.post(this.urlBase + url, data, requestHttpOptions).pipe();
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(idFile, fileName) {
          var fullUri = this.urlBase + 'File/Download/' + idFile;
          return fullUri;
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            errorMessage = "Error: ".concat(error.error.message);
          } else {
            errorMessage = "Error Code: ".concat(error.status, " - Message: ").concat(error.message);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        } //   private getOptions(addContentType = true): any {
        //     const headers = {
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //         'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        //     };
        //     if (this.authService.token) {
        //       headers['Authorization'] = `Bearer ${this.authService.token}`;
        //     }
        //     return { headers: headers };
        //   }

      }, {
        key: "getOptions",
        value: function getOptions() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var addContentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();

          if (addContentType) {
            headers = headers.set('Content-Type', 'application/json');
            headers = headers.set('Access-Control-Allow-Origin', '*');
            headers = headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // tslint:disable-next-line: max-line-length

            headers = headers.set('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
          }

          if (this.authService.token) {
            headers = headers.set('Authorization', "Bearer ".concat(this.authService.token));
          }

          if (this.authService.tenantID) {
            headers = headers.set('tenant', this.authService.tenantID);
          }

          return {
            headers: headers
          };
        }
      }]);

      return RequestService;
    }();

    RequestService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    RequestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], RequestService);
    /***/
  },

  /***/
  "./src/app/core/util/cpf-valid.ts":
  /*!****************************************!*\
    !*** ./src/app/core/util/cpf-valid.ts ***!
    \****************************************/

  /*! exports provided: validCPF */

  /***/
  function srcAppCoreUtilCpfValidTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validCPF", function () {
      return validCPF;
    });

    function validCPF(cpf) {
      cpf = cpf.replace(/\D/g, '');
      if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
      var result = true;
      [9, 10].forEach(function (j) {
        var soma = 0,
            r;
        cpf.split(/(?=)/).splice(0, j).forEach(function (e, i) {
          soma += parseInt(e) * (j + 2 - (i + 1));
        });
        r = soma % 11;
        r = r < 2 ? 0 : 11 - r;
        if (r != cpf.substring(j, j + 1)) result = false;
      });
      return result;
    }
    /***/

  },

  /***/
  "./src/app/core/util/loading.ts":
  /*!**************************************!*\
    !*** ./src/app/core/util/loading.ts ***!
    \**************************************/

  /*! exports provided: LoadingOnDidDismiss, LoadingOn */

  /***/
  function srcAppCoreUtilLoadingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingOnDidDismiss", function () {
      return LoadingOnDidDismiss;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingOn", function () {
      return LoadingOn;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function LoadingOnDidDismiss(loading) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee36() {
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              _context36.next = 2;
              return loading.dismiss();

            case 2:
            case "end":
              return _context36.stop();
          }
        }, _callee36);
      }));
    }

    function LoadingOn(loading) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
        var createLoading;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              _context37.next = 2;
              return loading.create({
                message: "Aguarde..."
              });

            case 2:
              createLoading = _context37.sent;
              _context37.next = 5;
              return createLoading.present();

            case 5:
            case "end":
              return _context37.stop();
          }
        }, _callee37);
      }));
    }
    /***/

  },

  /***/
  "./src/app/dependent/dependent-add/dependent-add.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/dependent/dependent-add/dependent-add.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDependentDependentAddDependentAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlcGVuZGVudC9kZXBlbmRlbnQtYWRkL2RlcGVuZGVudC1hZGQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/dependent/dependent-add/dependent-add.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/dependent/dependent-add/dependent-add.component.ts ***!
    \********************************************************************/

  /*! exports provided: DependentAddComponent */

  /***/
  function srcAppDependentDependentAddDependentAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DependentAddComponent", function () {
      return DependentAddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var _model_dependent_holder_add_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../model/dependent-holder-add-dto */
    "./src/app/dependent/model/dependent-holder-add-dto.ts");

    var DependentAddComponent = /*#__PURE__*/function () {
      function DependentAddComponent(modalCtrl, builder, service, toastController) {
        _classCallCheck(this, DependentAddComponent);

        this.modalCtrl = modalCtrl;
        this.builder = builder;
        this.service = service;
        this.toastController = toastController;
        this.user = JSON.parse(localStorage.getItem('user'));
      }

      _createClass(DependentAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.form = this.builder.group({
            cpf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            birthDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this25 = this;

          if (this.form.valid) {
            var model = new _model_dependent_holder_add_dto__WEBPACK_IMPORTED_MODULE_5__["DependentHolderAddDto"]();
            model.idUser = this.user.id;
            model.cpf = this.form.controls.cpf.value.replace(".", "").replace(".", "").replace("-", "");
            model.birthDate = this.form.controls.birthDate.value;
            this.service.post('Dependent/DependentAdd', JSON.stringify(model)).subscribe(function (result) {
              if (result.result) {
                _this25.presentToast('Dependente vinculado com sucesso!', 'success');

                _this25.dismiss();
              } else {
                _this25.presentToast(result.messages[0], 'warning');
              }
            }, function (error) {
              _this25.presentToast('Erro incluir dependente', 'warning');
            });
          } else {
            this.presentToast('Preencha todos os campos', 'warning');
          }
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee38$(_context38) {
              while (1) switch (_context38.prev = _context38.next) {
                case 0:
                  _context38.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context38.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context38.stop();
              }
            }, _callee38, this);
          }));
        }
      }]);

      return DependentAddComponent;
    }();

    DependentAddComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    DependentAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dependent-add',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dependent-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dependent/dependent-add/dependent-add.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dependent-add.component.scss */
      "./src/app/dependent/dependent-add/dependent-add.component.scss"))["default"]]
    })], DependentAddComponent);
    /***/
  },

  /***/
  "./src/app/dependent/dependent-list/dependent-list.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/dependent/dependent-list/dependent-list.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDependentDependentListDependentListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  background: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  font-family: \"Baloo 2\", cursive;\n  color: #656565;\n}\n\n.title {\n  color: #54b488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.filter {\n  background: #ffffff;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  height: 45px;\n  line-height: 45px;\n}\n\n.filter-text {\n  color: #54b488;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.filter-icon {\n  font-size: 1.5rem;\n  margin-top: 0.6rem;\n}\n\n.nonedepenent {\n  height: 75px;\n  line-height: 62px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvZGVwZW5kZW50L2RlcGVuZGVudC1saXN0L2RlcGVuZGVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZXBlbmRlbnQvZGVwZW5kZW50LWxpc3QvZGVwZW5kZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RlcGVuZGVudC9kZXBlbmRlbnQtbGlzdC9kZXBlbmRlbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogIzU0YjQ4ODtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uZmlsdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbn1cblxuLmZpbHRlci10ZXh0IHtcbiAgICBjb2xvcjogIzU0YjQ4ODtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmZpbHRlci1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XG59XG5cbi5ub25lZGVwZW5lbnQge1xuICAgIGhlaWdodDogNzVweDtcbiAgICBsaW5lLWhlaWdodDogNjJweDtcbn1cbiIsIi5jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG4gIGNvbG9yOiAjNjU2NTY1O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzU0YjQ4ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmZpbHRlciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbn1cblxuLmZpbHRlci10ZXh0IHtcbiAgY29sb3I6ICM1NGI0ODg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uZmlsdGVyLWljb24ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMC42cmVtO1xufVxuXG4ubm9uZWRlcGVuZW50IHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBsaW5lLWhlaWdodDogNjJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dependent/dependent-list/dependent-list.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/dependent/dependent-list/dependent-list.component.ts ***!
    \**********************************************************************/

  /*! exports provided: DependentListComponent */

  /***/
  function srcAppDependentDependentListDependentListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DependentListComponent", function () {
      return DependentListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _dependent_add_dependent_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../dependent-add/dependent-add.component */
    "./src/app/dependent/dependent-add/dependent-add.component.ts");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../model/dependent-holder-filter-dto */
    "./src/app/dependent/model/dependent-holder-filter-dto.ts");
    /* harmony import */


    var src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/util/loading */
    "./src/app/core/util/loading.ts");
    /* harmony import */


    var src_app_components_filter_chat_modal_filter_chat_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/filter-chat-modal/filter-chat-modal.component */
    "./src/app/components/filter-chat-modal/filter-chat-modal.component.ts");

    var DependentListComponent = /*#__PURE__*/function () {
      function DependentListComponent(modalController, service, toastController, loadingController, alertController) {
        _classCallCheck(this, DependentListComponent);

        this.modalController = modalController;
        this.service = service;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.dependents = [];
        this.dependentsAux = [];
        this.user = JSON.parse(localStorage.getItem("user"));
        this.isFilterActive = false;
      }

      _createClass(DependentListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          localStorage.removeItem("dependent");
          this.getAllDependent();
        }
      }, {
        key: "getAllDependent",
        value: function getAllDependent() {
          var _this26 = this;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(this.user)) {
            var model = new _model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_6__["DependentHolderFilterDto"]();
            model.idUser = this.user.id;
            this.presentLoading();
            this.service.post("Dependent/GetDependentsByFilter", JSON.stringify(model)).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee39() {
                return _regeneratorRuntime().wrap(function _callee39$(_context39) {
                  while (1) switch (_context39.prev = _context39.next) {
                    case 0:
                      this.dependents = result;
                      _context39.next = 3;
                      return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(this.loadingController);

                    case 3:
                    case "end":
                      return _context39.stop();
                  }
                }, _callee39, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this26, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
                return _regeneratorRuntime().wrap(function _callee40$(_context40) {
                  while (1) switch (_context40.prev = _context40.next) {
                    case 0:
                      this.presentToast("Erro ao consultar dependentes", "warning");
                      _context40.next = 3;
                      return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(this.loadingController);

                    case 3:
                    case "end":
                      return _context40.stop();
                  }
                }, _callee40, this);
              }));
            });
          }
        }
      }, {
        key: "viewDependent",
        value: function viewDependent(item) {
          localStorage.setItem("dependent", JSON.stringify(item));
          location.href = "/";
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee41$(_context41) {
              while (1) switch (_context41.prev = _context41.next) {
                case 0:
                  _context41.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context41.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context41.stop();
              }
            }, _callee41, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee42() {
            return _regeneratorRuntime().wrap(function _callee42$(_context42) {
              while (1) switch (_context42.prev = _context42.next) {
                case 0:
                  Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOn"])(this.loadingController);

                case 1:
                case "end":
                  return _context42.stop();
              }
            }, _callee42, this);
          }));
        }
      }, {
        key: "removeDependentConfirm",
        value: function removeDependentConfirm(dependent) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee43() {
            var _this27 = this;

            var alert;
            return _regeneratorRuntime().wrap(function _callee43$(_context43) {
              while (1) switch (_context43.prev = _context43.next) {
                case 0:
                  _context43.next = 2;
                  return this.alertController.create({
                    cssClass: "my-custom-class",
                    header: "Remover dependente",
                    message: "Deseja realmente remover esse dependente?",
                    buttons: [{
                      text: "Não",
                      role: "cancel",
                      cssClass: "secondary",
                      handler: function handler(blah) {}
                    }, {
                      text: "Sim",
                      handler: function handler() {
                        _this27.removeDependent(dependent);
                      }
                    }]
                  });

                case 2:
                  alert = _context43.sent;
                  _context43.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context43.stop();
              }
            }, _callee43, this);
          }));
        }
      }, {
        key: "removeDependent",
        value: function removeDependent(dependent) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
            var _this28 = this;

            return _regeneratorRuntime().wrap(function _callee46$(_context46) {
              while (1) switch (_context46.prev = _context46.next) {
                case 0:
                  _context46.next = 2;
                  return this.presentLoading();

                case 2:
                  this.service.get("Dependent/removeDepententByPatient?patientId=" + this.user.id + "&dependentId=" + dependent.idUserDependent).subscribe(function (node) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this28, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee44() {
                      return _regeneratorRuntime().wrap(function _callee44$(_context44) {
                        while (1) switch (_context44.prev = _context44.next) {
                          case 0:
                            _context44.next = 2;
                            return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(this.loadingController);

                          case 2:
                            if (node) this.presentToast("Dependente removido com sucesso", "success");else this.presentToast("Dependente não encontrado", "warning");
                            this.getAllDependent();

                          case 4:
                          case "end":
                            return _context44.stop();
                        }
                      }, _callee44, this);
                    }));
                  }, function (err) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this28, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee45() {
                      return _regeneratorRuntime().wrap(function _callee45$(_context45) {
                        while (1) switch (_context45.prev = _context45.next) {
                          case 0:
                            _context45.next = 2;
                            return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(this.loadingController);

                          case 2:
                            this.presentToast("Houve um error ao tentar de remover o dependente", "danger");
                            console.error(err);

                          case 4:
                          case "end":
                            return _context45.stop();
                        }
                      }, _callee45, this);
                    }));
                  });

                case 3:
                case "end":
                  return _context46.stop();
              }
            }, _callee46, this);
          }));
        }
      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
            var _this29 = this;

            var modal;
            return _regeneratorRuntime().wrap(function _callee47$(_context47) {
              while (1) switch (_context47.prev = _context47.next) {
                case 0:
                  _context47.next = 2;
                  return this.modalController.create({
                    component: _dependent_add_dependent_add_component__WEBPACK_IMPORTED_MODULE_3__["DependentAddComponent"],
                    cssClass: "my-custom-class"
                  });

                case 2:
                  modal = _context47.sent;
                  modal.onDidDismiss().then(function () {
                    _this29.ngOnInit();
                  });
                  _context47.next = 6;
                  return modal.present();

                case 6:
                  return _context47.abrupt("return", _context47.sent);

                case 7:
                case "end":
                  return _context47.stop();
              }
            }, _callee47, this);
          }));
        }
        /**
         * @author Gustavo Teles
         * @returns
         * Método responsável por abrir o modal
         * de filtros disponíveis
         */

      }, {
        key: "presentFilterModal",
        value: function presentFilterModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
            var _this30 = this;

            var modal;
            return _regeneratorRuntime().wrap(function _callee49$(_context49) {
              while (1) switch (_context49.prev = _context49.next) {
                case 0:
                  _context49.next = 2;
                  return this.modalController.create({
                    component: src_app_components_filter_chat_modal_filter_chat_modal_component__WEBPACK_IMPORTED_MODULE_8__["FilterChatModalComponent"],
                    cssClass: 'my-custom-class'
                  });

                case 2:
                  modal = _context49.sent;
                  modal.onDidDismiss().then(function (data) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this30, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
                      var resultFilter;
                      return _regeneratorRuntime().wrap(function _callee48$(_context48) {
                        while (1) switch (_context48.prev = _context48.next) {
                          case 0:
                            resultFilter = data['data'];

                            if (!(resultFilter.data !== undefined && resultFilter.data !== null)) {
                              _context48.next = 12;
                              break;
                            }

                            if (!(resultFilter.data.name !== undefined && resultFilter.data.name !== null)) {
                              _context48.next = 8;
                              break;
                            }

                            this.isFilterActive = true;
                            _context48.next = 6;
                            return this.executeFilter(resultFilter.data.name);

                          case 6:
                            _context48.next = 10;
                            break;

                          case 8:
                            this.dependents = this.dependentsAux;
                            this.isFilterActive = false;

                          case 10:
                            _context48.next = 14;
                            break;

                          case 12:
                            this.dependents = this.dependentsAux;
                            this.isFilterActive = false;

                          case 14:
                          case "end":
                            return _context48.stop();
                        }
                      }, _callee48, this);
                    }));
                  });
                  localStorage.setItem('typeFilter', 'holder');
                  _context49.next = 7;
                  return modal.present();

                case 7:
                  return _context49.abrupt("return", _context49.sent);

                case 8:
                case "end":
                  return _context49.stop();
              }
            }, _callee49, this);
          }));
        }
        /**
         * @author Gustavo Teles
         * @param nome
         * Método que executa o filtro informado
         */

      }, {
        key: "executeFilter",
        value: function executeFilter(name) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee51() {
            var _this31 = this;

            var dependents;
            return _regeneratorRuntime().wrap(function _callee51$(_context51) {
              while (1) switch (_context51.prev = _context51.next) {
                case 0:
                  dependents = this.dependents;
                  this.dependents = [];
                  return _context51.abrupt("return", dependents.filter(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this31, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee50() {
                      return _regeneratorRuntime().wrap(function _callee50$(_context50) {
                        while (1) switch (_context50.prev = _context50.next) {
                          case 0:
                            if (String(item.patient.name).toLowerCase().includes(name.toLowerCase())) {
                              this.dependents.push(item);
                            }

                          case 1:
                          case "end":
                            return _context50.stop();
                        }
                      }, _callee50, this);
                    }));
                  }));

                case 3:
                case "end":
                  return _context51.stop();
              }
            }, _callee51, this);
          }));
        }
      }]);

      return DependentListComponent;
    }();

    DependentListComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    DependentListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dependent-list",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dependent-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dependent/dependent-list/dependent-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dependent-list.component.scss */
      "./src/app/dependent/dependent-list/dependent-list.component.scss"))["default"]]
    })], DependentListComponent);
    /***/
  },

  /***/
  "./src/app/dependent/dependent-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dependent/dependent-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DependentRoutingModule */

  /***/
  function srcAppDependentDependentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DependentRoutingModule", function () {
      return DependentRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dependent_list_dependent_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dependent-list/dependent-list.component */
    "./src/app/dependent/dependent-list/dependent-list.component.ts");
    /* harmony import */


    var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/auth/auth.guard */
    "./src/app/core/auth/auth.guard.ts");
    /* harmony import */


    var _dependent_add_dependent_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dependent-add/dependent-add.component */
    "./src/app/dependent/dependent-add/dependent-add.component.ts");

    var routes = [{
      path: 'dependent-list',
      component: _dependent_list_dependent_list_component__WEBPACK_IMPORTED_MODULE_3__["DependentListComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'dependent-add',
      component: _dependent_add_dependent_add_component__WEBPACK_IMPORTED_MODULE_5__["DependentAddComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }];

    var DependentRoutingModule = /*#__PURE__*/_createClass(function DependentRoutingModule() {
      _classCallCheck(this, DependentRoutingModule);
    });

    DependentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DependentRoutingModule);
    /***/
  },

  /***/
  "./src/app/dependent/dependent.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dependent/dependent.module.ts ***!
    \***********************************************/

  /*! exports provided: DependentModule */

  /***/
  function srcAppDependentDependentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DependentModule", function () {
      return DependentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _dependent_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dependent-routing.module */
    "./src/app/dependent/dependent-routing.module.ts");
    /* harmony import */


    var _dependent_list_dependent_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dependent-list/dependent-list.component */
    "./src/app/dependent/dependent-list/dependent-list.component.ts");
    /* harmony import */


    var _dependent_add_dependent_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dependent-add/dependent-add.component */
    "./src/app/dependent/dependent-add/dependent-add.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/dist/index.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/fesm2015/ngx-mask.js");

    var DependentModule = /*#__PURE__*/_createClass(function DependentModule() {
      _classCallCheck(this, DependentModule);
    });

    DependentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dependent_list_dependent_list_component__WEBPACK_IMPORTED_MODULE_4__["DependentListComponent"], _dependent_add_dependent_add_component__WEBPACK_IMPORTED_MODULE_5__["DependentAddComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"], _dependent_routing_module__WEBPACK_IMPORTED_MODULE_3__["DependentRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_8__["BrMaskerModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_9__["NgxMaskModule"].forRoot()]
    })], DependentModule);
    /***/
  },

  /***/
  "./src/app/dependent/model/dependent-holder-add-dto.ts":
  /*!*************************************************************!*\
    !*** ./src/app/dependent/model/dependent-holder-add-dto.ts ***!
    \*************************************************************/

  /*! exports provided: DependentHolderAddDto */

  /***/
  function srcAppDependentModelDependentHolderAddDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DependentHolderAddDto", function () {
      return DependentHolderAddDto;
    });

    var DependentHolderAddDto = /*#__PURE__*/_createClass(function DependentHolderAddDto() {
      _classCallCheck(this, DependentHolderAddDto);
    });
    /***/

  },

  /***/
  "./src/app/dependent/model/dependent-holder-filter-dto.ts":
  /*!****************************************************************!*\
    !*** ./src/app/dependent/model/dependent-holder-filter-dto.ts ***!
    \****************************************************************/

  /*! exports provided: DependentHolderFilterDto */

  /***/
  function srcAppDependentModelDependentHolderFilterDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DependentHolderFilterDto", function () {
      return DependentHolderFilterDto;
    });

    var DependentHolderFilterDto = /*#__PURE__*/_createClass(function DependentHolderFilterDto() {
      _classCallCheck(this, DependentHolderFilterDto);
    });
    /***/

  },

  /***/
  "./src/app/home/dashboard-agent/dashboard-agent.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/home/dashboard-agent/dashboard-agent.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeDashboardAgentDashboardAgentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-dashboard {\n  background-image: url('logo-min.png');\n  background-repeat: no-repeat;\n  height: 72px;\n  background-position: left top;\n}\n\n.welcome {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  color: #FFFFFF;\n}\n\n.title {\n  color: #979797;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.title-next {\n  color: #54B488;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.sub-title {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  color: #656565;\n}\n\n.info {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  color: #656565;\n}\n\n.footer-next {\n  background: #54B488;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 0px 0px 5px 5px;\n  height: 70px;\n}\n\n.footer-my {\n  background: #FF993C;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 0px 0px 5px 5px;\n  height: 70px;\n}\n\n.footer-depe {\n  background: #3CD0FF;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 0px 0px 5px 5px;\n  height: 70px;\n}\n\n.card-footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  line-height: 35px;\n}\n\n.card-content {\n  height: auto;\n  min-height: 130px;\n}\n\n.view-info {\n  color: #FFFFFF;\n  font-size: 14px;\n  font-family: \"Baloo 2\", cursive;\n  font-weight: 700;\n}\n\n.view-info-icon {\n  float: right;\n  color: #FFFFFF;\n  font-size: 40px;\n  position: absolute;\n  right: 0;\n  bottom: 25%;\n}\n\n.icon-swapper {\n  font-size: 2.2rem;\n  color: white;\n  border-radius: 20px;\n  font-weight: bold;\n}\n\n.text-count-user {\n  color: #54B488;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvaG9tZS9kYXNoYm9hcmQtYWdlbnQvZGFzaGJvYXJkLWFnZW50LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2Rhc2hib2FyZC1hZ2VudC9kYXNoYm9hcmQtYWdlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDS0o7O0FERkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ01KOztBREhBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ01KOztBREhBO0VBQ0ksY0FBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9kYXNoYm9hcmQtYWdlbnQvZGFzaGJvYXJkLWFnZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28tZGFzaGJvYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9sb2dvLW1pbi5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGhlaWdodDogNzJweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IHRvcDtcbn1cblxuLndlbGNvbWUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogIzk3OTc5NztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50aXRsZS1uZXh0IHtcbiAgICBjb2xvcjogIzU0QjQ4ODsgXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICM2NTY1NjU7XG59XG4uaW5mbyB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNjU2NTY1O1xufVxuXG4uZm9vdGVyLW5leHQge1xuICAgIGJhY2tncm91bmQ6ICM1NEI0ODg7XG4gICAgYm94LXNoYWRvdzogMHB4IC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGhlaWdodDogNzBweDtcbn1cbi5mb290ZXItbXkge1xuICAgIGJhY2tncm91bmQ6ICNGRjk5M0M7XG4gICAgYm94LXNoYWRvdzogMHB4IC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICAgIGhlaWdodDogNzBweDtcbn1cbi5mb290ZXItZGVwZSB7XG4gICAgYmFja2dyb3VuZDogIzNDRDBGRjtcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuLmNhcmQtZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xuICB9XG5cbi5jYXJkLWNvbnRlbnQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiAxMzBweDtcbn1cblxuLnZpZXctaW5mbyB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLnZpZXctaW5mby1pY29uIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDI1JTtcbn1cblxuLmljb24tc3dhcHBlciB7XG4gICAgZm9udC1zaXplOiAyLjJyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxufVxuXG4udGV4dC1jb3VudC11c2VyIHtcbiAgICBjb2xvcjogIzU0QjQ4ODtcbn0iLCIubG9nby1kYXNoYm9hcmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbG9nby1taW4ucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDcycHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xufVxuXG4ud2VsY29tZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICM5Nzk3OTc7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udGl0bGUtbmV4dCB7XG4gIGNvbG9yOiAjNTRCNDg4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLmluZm8ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG5cbi5mb290ZXItbmV4dCB7XG4gIGJhY2tncm91bmQ6ICM1NEI0ODg7XG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmZvb3Rlci1teSB7XG4gIGJhY2tncm91bmQ6ICNGRjk5M0M7XG4gIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIGhlaWdodDogNzBweDtcbn1cblxuLmZvb3Rlci1kZXBlIHtcbiAgYmFja2dyb3VuZDogIzNDRDBGRjtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uY2FyZC1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMzBweDtcbn1cblxuLnZpZXctaW5mbyB7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnZpZXctaW5mby1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDI1JTtcbn1cblxuLmljb24tc3dhcHBlciB7XG4gIGZvbnQtc2l6ZTogMi4ycmVtO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udGV4dC1jb3VudC11c2VyIHtcbiAgY29sb3I6ICM1NEI0ODg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/dashboard-agent/dashboard-agent.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/home/dashboard-agent/dashboard-agent.component.ts ***!
    \*******************************************************************/

  /*! exports provided: DashboardAgentComponent */

  /***/
  function srcAppHomeDashboardAgentDashboardAgentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardAgentComponent", function () {
      return DashboardAgentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _dashboard_model_user_push_token_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../dashboard/model/user-push-token-dto */
    "./src/app/home/dashboard/model/user-push-token-dto.ts");
    /* harmony import */


    var _core_util_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../core/util/loading */
    "./src/app/core/util/loading.ts");
    /* harmony import */


    var src_app_modal_newchat_modal_newchat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modal-newchat/modal-newchat.page */
    "./src/app/modal-newchat/modal-newchat.page.ts");
    /* harmony import */


    var src_app_dependent_model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/dependent/model/dependent-holder-filter-dto */
    "./src/app/dependent/model/dependent-holder-filter-dto.ts");
    /* harmony import */


    var src_app_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/service/firebase/firebase.service */
    "./src/app/service/firebase/firebase.service.ts");

    var DashboardAgentComponent = /*#__PURE__*/function () {
      function DashboardAgentComponent(router, service, toastController, loadingController, modalController, firebaseService, platform) {
        _classCallCheck(this, DashboardAgentComponent);

        this.router = router;
        this.service = service;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.platform = platform;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.isLoading = false;
        this.countUser = 0;
        /**Variável que recebe a quantidade de mensagens aguardando ser respondidas */

        this.amountOfMessages = 0;
        /**Variável responsável por receber a lista de mensageiros para ser exibida a quantidade
         * de novas mensagens disponíveis para o usuário
         */

        this.listaMensageiros = [];
      }

      _createClass(DashboardAgentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
            return _regeneratorRuntime().wrap(function _callee52$(_context52) {
              while (1) switch (_context52.prev = _context52.next) {
                case 0:
                  _context52.next = 2;
                  return Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_6__["LoadingOn"])(this.loadingController);

                case 2:
                  _context52.next = 4;
                  return this.getNewsmensagens();

                case 4:
                  _context52.next = 6;
                  return this.getCountUserAgent();

                case 6:
                  _context52.next = 8;
                  return this.saveDeviceToken();

                case 8:
                case "end":
                  return _context52.stop();
              }
            }, _callee52, this);
          }));
        }
      }, {
        key: "getCountUserAgent",
        value: function getCountUserAgent() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
            var _this32 = this;

            return _regeneratorRuntime().wrap(function _callee53$(_context53) {
              while (1) switch (_context53.prev = _context53.next) {
                case 0:
                  this.service.get("Holder/GetCountUserByUserId?userID=" + this.user.id).subscribe(function (result) {
                    _this32.countUser = result;
                    Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_6__["LoadingOnDidDismiss"])(_this32.loadingController);
                  }, function (error) {
                    Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_6__["LoadingOnDidDismiss"])(_this32.loadingController);

                    _this32.presentToast("Erro ao consultar pacientes", "warning");
                  });

                case 1:
                case "end":
                  return _context53.stop();
              }
            }, _callee53, this);
          }));
        }
      }, {
        key: "dash",
        value: function dash() {
          this.router.navigate(["/"]);
        }
      }, {
        key: "listUser",
        value: function listUser() {
          this.router.navigate(["list-user"]);
        }
      }, {
        key: "listPendingUserSchedules",
        value: function listPendingUserSchedules() {
          this.router.navigate(["schedules-users"], {
            queryParams: {
              status: "WaitingConfirmation"
            }
          });
        }
      }, {
        key: "listConfirmedUserSchedules",
        value: function listConfirmedUserSchedules() {
          this.router.navigate(["schedules-users"], {
            queryParams: {
              status: "ConfirmedSchedule"
            }
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee54$(_context54) {
              while (1) switch (_context54.prev = _context54.next) {
                case 0:
                  _context54.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context54.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context54.stop();
              }
            }, _callee54, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
            return _regeneratorRuntime().wrap(function _callee55$(_context55) {
              while (1) switch (_context55.prev = _context55.next) {
                case 0:
                  _context55.next = 2;
                  return Object(_core_util_loading__WEBPACK_IMPORTED_MODULE_6__["LoadingOn"])(this.loadingController);

                case 2:
                case "end":
                  return _context55.stop();
              }
            }, _callee55, this);
          }));
        }
      }, {
        key: "saveDeviceToken",
        value: function saveDeviceToken() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
            var deviceToken, objSend;
            return _regeneratorRuntime().wrap(function _callee56$(_context56) {
              while (1) switch (_context56.prev = _context56.next) {
                case 0:
                  deviceToken = localStorage.getItem("device-token");
                  objSend = new _dashboard_model_user_push_token_dto__WEBPACK_IMPORTED_MODULE_5__["UserPushTokenDto"]();
                  objSend.id = this.user.id;
                  objSend.pushToken = deviceToken;
                  this.service.post("User/update-push-token", JSON.stringify(objSend)).subscribe(function (node) {}, function (err) {
                    console.error(err);
                  });

                case 5:
                case "end":
                  return _context56.stop();
              }
            }, _callee56, this);
          }));
        }
        /**
         * @author Gustavo Teles
         * Método que abre o modal para a escolha do usuário disponível no bate papo
         * @returns
         */

      }, {
        key: "showModalChat",
        value: function showModalChat() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee57() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee57$(_context57) {
              while (1) switch (_context57.prev = _context57.next) {
                case 0:
                  _context57.next = 2;
                  return this.modalController.create({
                    component: src_app_modal_newchat_modal_newchat_page__WEBPACK_IMPORTED_MODULE_7__["ModalNewchatPage"],
                    componentProps: {
                      data: this.user,
                      listaMensageiros: this.listaMensageiros
                    }
                  });

                case 2:
                  modal = _context57.sent;
                  this.amountOfMessages = 0;
                  this.listaMensageiros = [];
                  _context57.next = 7;
                  return modal.present();

                case 7:
                  return _context57.abrupt("return", _context57.sent);

                case 8:
                case "end":
                  return _context57.stop();
              }
            }, _callee57, this);
          }));
        }
        /**
        * @author Gustavo Teles
        * Método responsável por verificar se existem mensagens
        * que precisam ser respondidas
        */

      }, {
        key: "getNewsmensagens",
        value: function getNewsmensagens() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee64() {
            var _this33 = this;

            var model;
            return _regeneratorRuntime().wrap(function _callee64$(_context64) {
              while (1) switch (_context64.prev = _context64.next) {
                case 0:
                  try {
                    this.amountOfMessages = 0;
                    this.listaMensageiros = [];

                    if (this.user.typeUser === 'agente') {
                      model = new src_app_dependent_model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_8__["DependentHolderFilterDto"]();
                      model.idUser = this.user.id;
                      this.service.post('Holder/GetHoldersByFilter', JSON.stringify(model)).subscribe(function (result) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
                          var _iterator, _step, usuario;

                          return _regeneratorRuntime().wrap(function _callee58$(_context58) {
                            while (1) switch (_context58.prev = _context58.next) {
                              case 0:
                                _iterator = _createForOfIteratorHelper(result);
                                _context58.prev = 1;

                                _iterator.s();

                              case 3:
                                if ((_step = _iterator.n()).done) {
                                  _context58.next = 9;
                                  break;
                                }

                                usuario = _step.value;
                                _context58.next = 7;
                                return this.countMensagens(usuario.patient);

                              case 7:
                                _context58.next = 3;
                                break;

                              case 9:
                                _context58.next = 14;
                                break;

                              case 11:
                                _context58.prev = 11;
                                _context58.t0 = _context58["catch"](1);

                                _iterator.e(_context58.t0);

                              case 14:
                                _context58.prev = 14;

                                _iterator.f();

                                return _context58.finish(14);

                              case 17:
                              case "end":
                                return _context58.stop();
                            }
                          }, _callee58, this, [[1, 11, 14, 17]]);
                        }));
                      }, function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
                          return _regeneratorRuntime().wrap(function _callee59$(_context59) {
                            while (1) switch (_context59.prev = _context59.next) {
                              case 0:
                                console.log("🚀 ~ file: dashboard-agent.component.ts:141 ~ DashboardAgentComponent ~ error", error);

                              case 1:
                              case "end":
                                return _context59.stop();
                            }
                          }, _callee59);
                        }));
                      });
                    } else {
                      this.service.get("Patient/getPatientByCpf?cpf=" + this.user.cpf).subscribe(function (node) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee62() {
                          var _this34 = this;

                          return _regeneratorRuntime().wrap(function _callee62$(_context62) {
                            while (1) switch (_context62.prev = _context62.next) {
                              case 0:
                                this.service.get('Patient/GetHolder/' + node.idUser).subscribe(function (result) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this34, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee60() {
                                    return _regeneratorRuntime().wrap(function _callee60$(_context60) {
                                      while (1) switch (_context60.prev = _context60.next) {
                                        case 0:
                                          _context60.next = 2;
                                          return this.countMensagens(result);

                                        case 2:
                                        case "end":
                                          return _context60.stop();
                                      }
                                    }, _callee60, this);
                                  }));
                                }, function (error) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this34, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee61() {
                                    return _regeneratorRuntime().wrap(function _callee61$(_context61) {
                                      while (1) switch (_context61.prev = _context61.next) {
                                        case 0:
                                          console.log("🚀 ~ file: dashboard-agent.component.ts:150 ~ DashboardAgentComponent ~ error", error);

                                        case 1:
                                        case "end":
                                          return _context61.stop();
                                      }
                                    }, _callee61);
                                  }));
                                });

                              case 1:
                              case "end":
                                return _context62.stop();
                            }
                          }, _callee62, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this33, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee63() {
                          return _regeneratorRuntime().wrap(function _callee63$(_context63) {
                            while (1) switch (_context63.prev = _context63.next) {
                              case 0:
                                console.log("🚀 ~ file: dashboard-agent.component.ts:154 ~ DashboardAgentComponent ~ err", err);

                              case 1:
                              case "end":
                                return _context63.stop();
                            }
                          }, _callee63);
                        }));
                      });
                    }
                  } catch (error) {
                    console.log("🚀 ~ file: dashboard-agent.component.ts:159 ~ DashboardAgentComponent ~ getNewsmensagens ~ error", error);
                  }

                case 1:
                case "end":
                  return _context64.stop();
              }
            }, _callee64, this);
          }));
        }
        /**
         * @author Gustavo Teles
         * @param usuario
         * Método responsável por retornar a quantidade de
         * novas mensagens existentes
         */

      }, {
        key: "countMensagens",
        value: function countMensagens(usuario) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
            var _this35 = this;

            var mensagens, chatKeys, posicao, countMensagens, promise;
            return _regeneratorRuntime().wrap(function _callee66$(_context66) {
              while (1) switch (_context66.prev = _context66.next) {
                case 0:
                  mensagens = [];
                  chatKeys = [];
                  posicao = 0;
                  countMensagens = 0;
                  promise = new Promise(function (resolve, reject) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this35, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
                      var _this36 = this;

                      var session, user, cpfSession, cpfEnvio, cpfUsuario;
                      return _regeneratorRuntime().wrap(function _callee65$(_context65) {
                        while (1) switch (_context65.prev = _context65.next) {
                          case 0:
                            _context65.prev = 0;

                            /**AUTOR */
                            session = 0;
                            user = JSON.parse(localStorage.getItem("user"));
                            cpfSession = user.cpf;

                            while (cpfSession.includes('/') || cpfSession.includes('-') || cpfSession.includes('.')) {
                              cpfSession = cpfSession.replace('/', '');
                              cpfSession = cpfSession.replace('-', '');
                              cpfSession = cpfSession.replace('.', '');
                            }

                            session = parseFloat(cpfSession);
                            /**DESTINATÁRIO */

                            cpfEnvio = 0;
                            cpfUsuario = usuario.cpf;

                            if (cpfUsuario.includes('/')) {
                              cpfUsuario = cpfUsuario.replace('/', '');
                            }

                            if (cpfUsuario.includes('-')) {
                              cpfUsuario = cpfUsuario.replace('-', '');
                            }

                            if (cpfUsuario.includes('.')) {
                              cpfUsuario = cpfUsuario.replace('.', '');
                            }

                            cpfEnvio = parseFloat(cpfUsuario);
                            _context65.next = 14;
                            return this.firebaseService.db.collection("chatRoom").where('id', 'array-contains', session).onSnapshot(function (querySnapshot) {
                              querySnapshot.forEach(function (doc) {
                                var data = doc.data();

                                if (data.from == cpfEnvio && data.to == session || data.from == session && data.to == cpfEnvio) {
                                  if (chatKeys.indexOf(data.key) < 0) {
                                    mensagens.push(data);
                                    chatKeys.push(data.key);
                                    posicao++;
                                  }

                                  ;
                                }

                                ;
                              });
                              mensagens.sort(_this36.sortDate);

                              try {
                                if (mensagens[posicao - 1] !== null && mensagens[posicao - 1] !== undefined) {
                                  if (parseFloat(mensagens[posicao - 1].to) !== cpfEnvio) {
                                    _this36.amountOfMessages++;
                                    countMensagens++;
                                  } else {
                                    countMensagens = 0;
                                  }
                                }
                              } catch (error) {
                                console.log("🚀 ~ file: dashboard-agent.component.ts:229 ~ DashboardAgentComponent ~ .onSnapshot ~ error", error);
                              }

                              _this36.setNewsMensagens(cpfUsuario, countMensagens);

                              resolve(true);
                            });

                          case 14:
                            _context65.next = 20;
                            break;

                          case 16:
                            _context65.prev = 16;
                            _context65.t0 = _context65["catch"](0);
                            console.log("🚀 ~ file: dashboard-agent.component.ts:236 ~ DashboardAgentComponent ~ promise ~ err", _context65.t0);
                            reject(_context65.t0);

                          case 20:
                          case "end":
                            return _context65.stop();
                        }
                      }, _callee65, this, [[0, 16]]);
                    }));
                  });
                  return _context66.abrupt("return", promise.then(function (res) {
                    console.log("🚀 ~ file: dashboard-agent.component.ts:242 ~ DashboardAgentComponent ~ countMensagens ~ res", res);
                    return _this35.amountOfMessages;
                  }));

                case 6:
                case "end":
                  return _context66.stop();
              }
            }, _callee66);
          }));
        }
      }, {
        key: "sortDate",
        value: function sortDate(a, b) {
          var dateA = new Date();
          var dateB = new Date();

          try {
            dateA = new Date(a.timestamp.toDate());
          } catch (error) {}

          try {
            dateB = new Date(b.timestamp.toDate());
          } catch (error) {}

          return dateA > dateB ? 1 : -1;
        }
      }, {
        key: "formatDate",
        value: function formatDate(message) {
          var date = message['timestamp'] ? message['timestamp'].toDate() : new Date();
          return this.firebaseService.formatAMPM(date);
        }
        /**
         * @author Gustavo Teles
         * @param cpf
         * @param amountOfMessages
         * Método responsável por salvar a lista de mensageiros
         * com a quantidade de mensagens disponíveis
         */

      }, {
        key: "setNewsMensagens",
        value: function setNewsMensagens(cpf, amountOfMessages) {
          var dados = {
            cpf: cpf,
            amountOfMessages: amountOfMessages
          };
          this.listaMensageiros.push(dados);
        }
      }]);

      return DashboardAgentComponent;
    }();

    DashboardAgentComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }, {
        type: src_app_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    DashboardAgentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard-agent",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard-agent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard-agent/dashboard-agent.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard-agent.component.scss */
      "./src/app/home/dashboard-agent/dashboard-agent.component.scss"))["default"]]
    })], DashboardAgentComponent);
    /***/
  },

  /***/
  "./src/app/home/dashboard-agent/schedules-users/schedules-users.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/home/dashboard-agent/schedules-users/schedules-users.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeDashboardAgentSchedulesUsersSchedulesUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  color: #4d4d4d;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.card-subtitle {\n  background: #c9c9c9;\n  border-radius: 3px;\n  height: 19px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  color: #ffffff;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.status {\n  position: absolute;\n  width: 22px;\n  height: 100%;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px 0px 0px 5px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.await-confirm {\n  background: #ff993c;\n}\n\n.peding-evaluation {\n  background: #ffe24b;\n}\n\n.canceled {\n  background: #f55555;\n}\n\n.not-met {\n  background: #ec2c2c;\n}\n\n.confirmation {\n  background: #406aef;\n}\n\n.present {\n  background: #54b488;\n}\n\n.complete {\n  background: #54b488;\n}\n\n.title-card {\n  color: #54b488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.card {\n  background: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  font-family: \"Baloo 2\", cursive;\n  color: #656565;\n}\n\n.title {\n  color: #54b488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.filter {\n  background: #ffffff;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  height: 45px;\n  line-height: 45px;\n}\n\n.filter-text {\n  color: #54b488;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.filter-icon {\n  font-size: 1.5rem;\n  margin-top: 0.6rem;\n}\n\n.noneholder {\n  height: 75px;\n  line-height: 62px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvaG9tZS9kYXNoYm9hcmQtYWdlbnQvc2NoZWR1bGVzLXVzZXJzL3NjaGVkdWxlcy11c2Vycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9kYXNoYm9hcmQtYWdlbnQvc2NoZWR1bGVzLXVzZXJzL3NjaGVkdWxlcy11c2Vycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9kYXNoYm9hcmQtYWdlbnQvc2NoZWR1bGVzLXVzZXJzL3NjaGVkdWxlcy11c2Vycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogMTlweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uc3RhdHVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmF3YWl0LWNvbmZpcm0ge1xuICAgIGJhY2tncm91bmQ6ICNmZjk5M2M7XG59XG5cbi5wZWRpbmctZXZhbHVhdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZTI0Yjtcbn1cblxuLmNhbmNlbGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjU1NTU1O1xufVxuXG4ubm90LW1ldCB7XG4gICAgYmFja2dyb3VuZDogI2VjMmMyYztcbn1cblxuLmNvbmZpcm1hdGlvbiB7XG4gICAgYmFja2dyb3VuZDogIzQwNmFlZjtcbn1cblxuLnByZXNlbnQge1xuICAgIGJhY2tncm91bmQ6ICM1NGI0ODg7XG59XG5cbi5jb21wbGV0ZSB7XG4gICAgYmFja2dyb3VuZDogIzU0YjQ4ODtcbn1cblxuLnRpdGxlLWNhcmQge1xuICAgIGNvbG9yOiAjNTRiNDg4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogIzU0YjQ4ODtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uZmlsdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbn1cblxuLmZpbHRlci10ZXh0IHtcbiAgICBjb2xvcjogIzU0YjQ4ODtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmZpbHRlci1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XG59XG5cbi5ub25laG9sZGVyIHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDYycHg7XG59XG4iLCIudGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjYzljOWM5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMTlweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi5zdGF0dXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uYXdhaXQtY29uZmlybSB7XG4gIGJhY2tncm91bmQ6ICNmZjk5M2M7XG59XG5cbi5wZWRpbmctZXZhbHVhdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmUyNGI7XG59XG5cbi5jYW5jZWxlZCB7XG4gIGJhY2tncm91bmQ6ICNmNTU1NTU7XG59XG5cbi5ub3QtbWV0IHtcbiAgYmFja2dyb3VuZDogI2VjMmMyYztcbn1cblxuLmNvbmZpcm1hdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM0MDZhZWY7XG59XG5cbi5wcmVzZW50IHtcbiAgYmFja2dyb3VuZDogIzU0YjQ4ODtcbn1cblxuLmNvbXBsZXRlIHtcbiAgYmFja2dyb3VuZDogIzU0YjQ4ODtcbn1cblxuLnRpdGxlLWNhcmQge1xuICBjb2xvcjogIzU0YjQ4ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjNTRiNDg4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uZmlsdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xufVxuXG4uZmlsdGVyLXRleHQge1xuICBjb2xvcjogIzU0YjQ4ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi5maWx0ZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjZyZW07XG59XG5cbi5ub25laG9sZGVyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBsaW5lLWhlaWdodDogNjJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/dashboard-agent/schedules-users/schedules-users.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/home/dashboard-agent/schedules-users/schedules-users.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: SchedulesUsersComponent */

  /***/
  function srcAppHomeDashboardAgentSchedulesUsersSchedulesUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulesUsersComponent", function () {
      return SchedulesUsersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/util/loading */
    "./src/app/core/util/loading.ts");
    /* harmony import */


    var src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/auth/auth.service */
    "./src/app/core/auth/auth.service.ts");
    /* harmony import */


    var src_app_components_filter_date_modal_filter_date_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/filter-date-modal/filter-date-modal.component */
    "./src/app/components/filter-date-modal/filter-date-modal.component.ts");

    var SchedulesUsersComponent = /*#__PURE__*/function () {
      function SchedulesUsersComponent(route, router, loadingController, service, toastController, authService, modalController) {
        _classCallCheck(this, SchedulesUsersComponent);

        this.route = route;
        this.router = router;
        this.loadingController = loadingController;
        this.service = service;
        this.toastController = toastController;
        this.authService = authService;
        this.modalController = modalController;
        this.schedulingList = [];
        this.schedulingListAux = [];
        this.isAuthenticated = false;
        this.user = null;
        /**Variáveis do filtro */

        this.isFilterActive = false;
      }

      _createClass(SchedulesUsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.isAuthenticated = this.authService.loggedIn;
          this.route.queryParams.subscribe(function (params) {
            var status = params['status'];
            _this37.status = status;

            _this37.getAllSchedulesByDependent(status);
          });
        }
      }, {
        key: "getAllSchedulesByDependent",
        value: function getAllSchedulesByDependent(schedulingStatus) {
          var _this38 = this;

          this.presentLoading();

          if (this.isAuthenticated) {
            this.user = JSON.parse(localStorage.getItem('user'));
            var cpf = this.user.cpf.replace(".", "").replace(".", "").replace("-", "");
            this.service.get("Scheduling/GetListSchedulingByDependent?cpfUser=".concat(cpf, "&schedulingStatus=").concat(schedulingStatus)).subscribe(function (result) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this38, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee67() {
                return _regeneratorRuntime().wrap(function _callee67$(_context67) {
                  while (1) switch (_context67.prev = _context67.next) {
                    case 0:
                      this.schedulingList = result;
                      this.schedulingListAux = result;
                      _context67.next = 4;
                      return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingOnDidDismiss"])(this.loadingController);

                    case 4:
                    case "end":
                      return _context67.stop();
                  }
                }, _callee67, this);
              }));
            }, function (error) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this38, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee68() {
                return _regeneratorRuntime().wrap(function _callee68$(_context68) {
                  while (1) switch (_context68.prev = _context68.next) {
                    case 0:
                      this.presentToast("Erro ao consultar dependentes", "warning");
                      _context68.next = 3;
                      return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingOnDidDismiss"])(this.loadingController);

                    case 3:
                    case "end":
                      return _context68.stop();
                  }
                }, _callee68, this);
              }));
            });
          } else {
            Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingOnDidDismiss"])(this.loadingController);
          }
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee69() {
            return _regeneratorRuntime().wrap(function _callee69$(_context69) {
              while (1) switch (_context69.prev = _context69.next) {
                case 0:
                  Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingOn"])(this.loadingController);

                case 1:
                case "end":
                  return _context69.stop();
              }
            }, _callee69, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee70() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee70$(_context70) {
              while (1) switch (_context70.prev = _context70.next) {
                case 0:
                  _context70.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context70.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context70.stop();
              }
            }, _callee70, this);
          }));
        }
      }, {
        key: "backDash",
        value: function backDash() {
          this.router.navigate(["agent"]);
        }
        /**
            * @author Gustavo Teles
            * @returns
            * Método responsável por abrir o modal
            * de filtros disponíveis
            */

      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee72() {
            var _this39 = this;

            var modal;
            return _regeneratorRuntime().wrap(function _callee72$(_context72) {
              while (1) switch (_context72.prev = _context72.next) {
                case 0:
                  _context72.next = 2;
                  return this.modalController.create({
                    component: src_app_components_filter_date_modal_filter_date_modal_component__WEBPACK_IMPORTED_MODULE_7__["FilterDateModalComponent"],
                    cssClass: 'my-custom-class'
                  });

                case 2:
                  modal = _context72.sent;
                  modal.onDidDismiss().then(function (data) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this39, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee71() {
                      var resultFilter;
                      return _regeneratorRuntime().wrap(function _callee71$(_context71) {
                        while (1) switch (_context71.prev = _context71.next) {
                          case 0:
                            resultFilter = data['data'];

                            if (!(resultFilter.data !== undefined && resultFilter.data !== null)) {
                              _context71.next = 12;
                              break;
                            }

                            if (!(resultFilter.data.startDate !== undefined && resultFilter.data.startDate !== null && resultFilter.data.endDate !== undefined && resultFilter.data.endDate !== null)) {
                              _context71.next = 8;
                              break;
                            }

                            this.isFilterActive = true;
                            _context71.next = 6;
                            return this.executeFilter(resultFilter.data.startDate, resultFilter.data.endDate);

                          case 6:
                            _context71.next = 10;
                            break;

                          case 8:
                            this.isFilterActive = false;
                            this.schedulingList = this.schedulingListAux;

                          case 10:
                            _context71.next = 14;
                            break;

                          case 12:
                            this.isFilterActive = false;
                            this.schedulingList = this.schedulingListAux;

                          case 14:
                          case "end":
                            return _context71.stop();
                        }
                      }, _callee71, this);
                    }));
                  });
                  localStorage.setItem('typeFilter', 'schedulingList');
                  _context72.next = 7;
                  return modal.present();

                case 7:
                  return _context72.abrupt("return", _context72.sent);

                case 8:
                case "end":
                  return _context72.stop();
              }
            }, _callee72, this);
          }));
        }
        /**
         * @author Gustavo Teles
         * @param nome
         * Método que executa o filtro informado
         */

      }, {
        key: "executeFilter",
        value: function executeFilter(startDate, endDate) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee75() {
            var _this40 = this;

            var startDateInformado, endDateInformado, cpf;
            return _regeneratorRuntime().wrap(function _callee75$(_context75) {
              while (1) switch (_context75.prev = _context75.next) {
                case 0:
                  _context75.next = 2;
                  return this.presentLoading();

                case 2:
                  startDateInformado = startDate.substring(0, startDate.indexOf("T"));
                  endDateInformado = endDate.substring(0, endDate.indexOf("T"));

                  if (this.isAuthenticated) {
                    this.user = JSON.parse(localStorage.getItem('user'));
                    cpf = this.user.cpf.replace(".", "").replace(".", "").replace("-", "");
                    this.service.get("Scheduling/GetListSchedulingByDependent?cpfUser=".concat(cpf, "&schedulingStatus=").concat(this.status) + "&startDate=" + startDateInformado + "&endDate=" + endDateInformado).subscribe(function (result) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this40, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee73() {
                        return _regeneratorRuntime().wrap(function _callee73$(_context73) {
                          while (1) switch (_context73.prev = _context73.next) {
                            case 0:
                              this.schedulingList = result;
                              _context73.next = 3;
                              return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingOnDidDismiss"])(this.loadingController);

                            case 3:
                            case "end":
                              return _context73.stop();
                          }
                        }, _callee73, this);
                      }));
                    }, function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this40, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee74() {
                        return _regeneratorRuntime().wrap(function _callee74$(_context74) {
                          while (1) switch (_context74.prev = _context74.next) {
                            case 0:
                              this.presentToast("Erro ao consultar dependentes", "warning");
                              _context74.next = 3;
                              return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingOnDidDismiss"])(this.loadingController);

                            case 3:
                            case "end":
                              return _context74.stop();
                          }
                        }, _callee74, this);
                      }));
                    });
                  } else {
                    Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingOnDidDismiss"])(this.loadingController);
                  }

                case 5:
                case "end":
                  return _context75.stop();
              }
            }, _callee75, this);
          }));
        }
      }]);

      return SchedulesUsersComponent;
    }();

    SchedulesUsersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: src_app_core_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    SchedulesUsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-schedules-users',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./schedules-users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard-agent/schedules-users/schedules-users.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./schedules-users.component.scss */
      "./src/app/home/dashboard-agent/schedules-users/schedules-users.component.scss"))["default"]]
    })], SchedulesUsersComponent);
    /***/
  },

  /***/
  "./src/app/home/dashboard-routing.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/home/dashboard-routing.module.ts ***!
    \**************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppHomeDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/home/dashboard/dashboard.component.ts");
    /* harmony import */


    var _dashboard_agent_dashboard_agent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dashboard-agent/dashboard-agent.component */
    "./src/app/home/dashboard-agent/dashboard-agent.component.ts");
    /* harmony import */


    var _dashboard_agent_schedules_users_schedules_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-agent/schedules-users/schedules-users.component */
    "./src/app/home/dashboard-agent/schedules-users/schedules-users.component.ts");
    /* harmony import */


    var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../core/auth/auth.guard */
    "./src/app/core/auth/auth.guard.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var routes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'agent',
      component: _dashboard_agent_dashboard_agent_component__WEBPACK_IMPORTED_MODULE_4__["DashboardAgentComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: 'schedules-users',
      component: _dashboard_agent_schedules_users_schedules_users_component__WEBPACK_IMPORTED_MODULE_5__["SchedulesUsersComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }];

    var DashboardRoutingModule = /*#__PURE__*/_createClass(function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    });

    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/dashboard.module.ts":
  /*!******************************************!*\
    !*** ./src/app/home/dashboard.module.ts ***!
    \******************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppHomeDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/home/dashboard/dashboard.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _dashboard_agent_dashboard_agent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-agent/dashboard-agent.component */
    "./src/app/home/dashboard-agent/dashboard-agent.component.ts");
    /* harmony import */


    var _dashboard_agent_schedules_users_schedules_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard-agent/schedules-users/schedules-users.component */
    "./src/app/home/dashboard-agent/schedules-users/schedules-users.component.ts");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/home/dashboard-routing.module.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var DashboardModule = /*#__PURE__*/_createClass(function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    });

    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _dashboard_agent_dashboard_agent_component__WEBPACK_IMPORTED_MODULE_5__["DashboardAgentComponent"], _dashboard_agent_schedules_users_schedules_users_component__WEBPACK_IMPORTED_MODULE_6__["SchedulesUsersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_7__["DashboardRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/home/dashboard/dashboard.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/home/dashboard/dashboard.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo-dashboard {\n  background-image: url('logo-min.png');\n  background-repeat: no-repeat;\n  height: 72px;\n  background-position: left top;\n}\n\n.welcome {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  color: #FFFFFF;\n}\n\n.title {\n  color: #979797;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.title-next {\n  color: #54B488;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.sub-title {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  color: #656565;\n}\n\n.info {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  color: #656565;\n}\n\n.footer-next {\n  background: #54B488;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 0px 0px 5px 5px;\n  height: 70px;\n}\n\n.footer-my {\n  background: #FF993C;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 0px 0px 5px 5px;\n  height: 70px;\n}\n\n.footer-depe {\n  background: #3CD0FF;\n  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.25);\n  border-radius: 0px 0px 5px 5px;\n  height: 70px;\n}\n\n.card-footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  line-height: 35px;\n}\n\n.card-content {\n  height: auto;\n  min-height: 130px;\n}\n\n.view-info {\n  color: #FFFFFF;\n  font-size: 14px;\n  font-family: \"Baloo 2\", cursive;\n  font-weight: 700;\n}\n\n.view-info-icon {\n  float: right;\n  color: #FFFFFF;\n  font-size: 40px;\n  position: absolute;\n  right: 0;\n  bottom: 25%;\n}\n\n.icon-swapper {\n  font-size: 2.2rem;\n  color: white;\n  border-radius: 20px;\n  font-weight: bold;\n}\n\n.icon-swapper-perfil {\n  position: absolute;\n  top: 14%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvaG9tZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRENBO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFBO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0dKOztBRERBO0VBQ0ksbUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDS0o7O0FERkE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQ0tKOztBREhBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ01KOztBREhBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ01KOztBREhBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDTUoiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nby1kYXNoYm9hcmQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2xvZ28tbWluLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgaGVpZ2h0OiA3MnB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xufVxuXG4ud2VsY29tZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4udGl0bGUge1xuICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnRpdGxlLW5leHQge1xuICAgIGNvbG9yOiAjNTRCNDg4OyBcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zdWItdGl0bGUge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjogIzY1NjU2NTtcbn1cbi5pbmZvIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM2NTY1NjU7XG59XG5cbi5mb290ZXItbmV4dCB7XG4gICAgYmFja2dyb3VuZDogIzU0QjQ4ODtcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuLmZvb3Rlci1teSB7XG4gICAgYmFja2dyb3VuZDogI0ZGOTkzQztcbiAgICBib3gtc2hhZG93OiAwcHggLTFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xufVxuLmZvb3Rlci1kZXBlIHtcbiAgICBiYWNrZ3JvdW5kOiAjM0NEMEZGO1xuICAgIGJveC1zaGFkb3c6IDBweCAtMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG59XG4uY2FyZC1mb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XG4gIH1cblxuLmNhcmQtY29udGVudCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDEzMHB4O1xufVxuXG4udmlldy1pbmZvIHtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4udmlldy1pbmZvLWljb24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMjUlO1xufVxuXG4uaWNvbi1zd2FwcGVyIHtcbiAgICBmb250LXNpemU6IDIuMnJlbTsgICAgXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ICAgIFxufVxuXG4uaWNvbi1zd2FwcGVyLXBlcmZpbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTQlO1xufSIsIi5sb2dvLWRhc2hib2FyZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9sb2dvLW1pbi5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNzJweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCB0b3A7XG59XG5cbi53ZWxjb21lIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzk3OTc5NztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi50aXRsZS1uZXh0IHtcbiAgY29sb3I6ICM1NEI0ODg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNjU2NTY1O1xufVxuXG4uaW5mbyB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLmZvb3Rlci1uZXh0IHtcbiAgYmFja2dyb3VuZDogIzU0QjQ4ODtcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uZm9vdGVyLW15IHtcbiAgYmFja2dyb3VuZDogI0ZGOTkzQztcbiAgYm94LXNoYWRvdzogMHB4IC0xcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uZm9vdGVyLWRlcGUge1xuICBiYWNrZ3JvdW5kOiAjM0NEMEZGO1xuICBib3gtc2hhZG93OiAwcHggLTFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCA1cHggNXB4O1xuICBoZWlnaHQ6IDcwcHg7XG59XG5cbi5jYXJkLWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEzMHB4O1xufVxuXG4udmlldy1pbmZvIHtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4udmlldy1pbmZvLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMjUlO1xufVxuXG4uaWNvbi1zd2FwcGVyIHtcbiAgZm9udC1zaXplOiAyLjJyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5pY29uLXN3YXBwZXItcGVyZmlsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/dashboard/dashboard.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/home/dashboard/dashboard.component.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppHomeDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _model_user_push_token_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./model/user-push-token-dto */
    "./src/app/home/dashboard/model/user-push-token-dto.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_modal_newchat_modal_newchat_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/modal-newchat/modal-newchat.page */
    "./src/app/modal-newchat/modal-newchat.page.ts");
    /* harmony import */


    var src_app_dependent_model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/dependent/model/dependent-holder-filter-dto */
    "./src/app/dependent/model/dependent-holder-filter-dto.ts");
    /* harmony import */


    var src_app_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/service/firebase/firebase.service */
    "./src/app/service/firebase/firebase.service.ts");

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(serviceHelp, router, alertController, modalController, firebaseService, platform) {
        _classCallCheck(this, DashboardComponent);

        this.serviceHelp = serviceHelp;
        this.router = router;
        this.alertController = alertController;
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.platform = platform;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.userName = "";
        this.scheduling = [];
        this.isLoading = false;
        this.isDependent = false;
        this.countUser = 0;
        /**Variável que recebe a quantidade de mensagens aguardando ser respondidas */

        this.amountOfMessages = 0;
        /**Variável responsável por receber a lista de mensageiros para ser exibida a quantidade
         * de novas mensagens disponíveis para o usuário
         */

        this.listaMensageiros = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee76() {
            return _regeneratorRuntime().wrap(function _callee76$(_context76) {
              while (1) switch (_context76.prev = _context76.next) {
                case 0:
                  this.isLoading = true;
                  _context76.next = 3;
                  return this.getNewsmensagens();

                case 3:
                  _context76.next = 5;
                  return this.getMyDependent();

                case 5:
                  _context76.next = 7;
                  return this.saveDeviceToken();

                case 7:
                  this.isLoading = false;

                case 8:
                case "end":
                  return _context76.stop();
              }
            }, _callee76, this);
          }));
        }
      }, {
        key: "getMyDependent",
        value: function getMyDependent() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee77() {
            var local;
            return _regeneratorRuntime().wrap(function _callee77$(_context77) {
              while (1) switch (_context77.prev = _context77.next) {
                case 0:
                  local = localStorage.getItem("dependent");

                  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(local)) {
                    if (JSON.parse(local).patient.cpf === this.user.cpf) {
                      local = null;
                      localStorage.removeItem("dependent");
                    }
                  }

                  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(local)) {
                    this.userName = JSON.parse(local).patient.name;
                    this.isDependent = true;
                    this.getScheduling(JSON.parse(local).patient.cpf.replace(".", "").replace(".", "").replace("-", ""));
                  } else {
                    this.userName = this.user.user;
                    this.getCountUserAgent();
                  }

                case 3:
                case "end":
                  return _context77.stop();
              }
            }, _callee77, this);
          }));
        }
      }, {
        key: "getCountUserAgent",
        value: function getCountUserAgent() {
          var _this41 = this;

          this.serviceHelp.get("Dependent/GetCountUserByUserId?userID=" + this.user.id).subscribe(function (result) {
            _this41.countUser = result;

            _this41.getScheduling();
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "getScheduling",
        value: function getScheduling(cpf) {
          var _this42 = this;

          this.serviceHelp.get("scheduling/schedulingByUser?cpfUser=" + (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(cpf) ? this.user.cpf.replace(".", "").replace(".", "").replace("-", "") : cpf.replace(".", "").replace(".", "").replace("-", ""))).subscribe(function (node) {
            _this42.scheduling = node.filter(function (a) {
              return a.descActive === "AGUARDANDO CONFIRMAÇÃO" || a.descActive === "CONFIRMADO AGENDAMENTO";
            }); //this.saveDeviceToken();
          }, function (err) {
            console.error(err);
          });
        }
      }, {
        key: "myScheduling",
        value: function myScheduling() {
          if (this.isDependent) {
            localStorage.setItem("dependenteHolder", localStorage.getItem("dependent"));
          }

          location.href = "/list";
        }
      }, {
        key: "myDependent",
        value: function myDependent() {
          this.router.navigate(["dependent-list"]);
        }
      }, {
        key: "agent",
        value: function agent() {
          localStorage.removeItem("dependent");
          this.router.navigate(["/agent"]);
        }
      }, {
        key: "myInfos",
        value: function myInfos() {
          localStorage.removeItem("dependent");
          location.reload();
        }
      }, {
        key: "saveDeviceToken",
        value: function saveDeviceToken() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee78() {
            var deviceToken, objSend;
            return _regeneratorRuntime().wrap(function _callee78$(_context78) {
              while (1) switch (_context78.prev = _context78.next) {
                case 0:
                  deviceToken = localStorage.getItem("device-token");
                  objSend = new _model_user_push_token_dto__WEBPACK_IMPORTED_MODULE_5__["UserPushTokenDto"]();
                  objSend.id = this.user.id;
                  objSend.pushToken = deviceToken;
                  this.serviceHelp.post("User/update-push-token", JSON.stringify(objSend)).subscribe(function (node) {}, function (err) {
                    console.error(err);
                  });

                case 5:
                case "end":
                  return _context78.stop();
              }
            }, _callee78, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee79() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee79$(_context79) {
              while (1) switch (_context79.prev = _context79.next) {
                case 0:
                  _context79.next = 2;
                  return this.alertController.create({
                    cssClass: "my-custom-class",
                    header: "Próximo Agendamento",
                    message: "Nenhum agendamento foi encontrado",
                    buttons: ["OK"]
                  });

                case 2:
                  alert = _context79.sent;
                  _context79.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context79.stop();
              }
            }, _callee79, this);
          }));
        }
      }, {
        key: "detail",
        value: function detail(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee80() {
            return _regeneratorRuntime().wrap(function _callee80$(_context80) {
              while (1) switch (_context80.prev = _context80.next) {
                case 0:
                  if (Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(id)) {
                    _context80.next = 4;
                    break;
                  }

                  this.router.navigate(["/detail/" + id]);
                  _context80.next = 6;
                  break;

                case 4:
                  _context80.next = 6;
                  return this.presentAlert();

                case 6:
                case "end":
                  return _context80.stop();
              }
            }, _callee80, this);
          }));
        }
        /**
         * @author Gustavo Teles
         * Método que abre o modal para a escolha do usuário disponível no bate papo
         * @returns
         */

      }, {
        key: "showModalChat",
        value: function showModalChat() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee81() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee81$(_context81) {
              while (1) switch (_context81.prev = _context81.next) {
                case 0:
                  _context81.next = 2;
                  return this.modalController.create({
                    component: src_app_modal_newchat_modal_newchat_page__WEBPACK_IMPORTED_MODULE_7__["ModalNewchatPage"],
                    componentProps: {
                      data: this.user,
                      listaMensageiros: this.listaMensageiros
                    }
                  });

                case 2:
                  modal = _context81.sent;
                  this.amountOfMessages = 0;
                  this.listaMensageiros = [];
                  _context81.next = 7;
                  return modal.present();

                case 7:
                  return _context81.abrupt("return", _context81.sent);

                case 8:
                case "end":
                  return _context81.stop();
              }
            }, _callee81, this);
          }));
        }
        /**
        * @author Gustavo Teles
        * Método responsável por verificar se existem mensagens
        * que precisam ser respondidas
        */

      }, {
        key: "getNewsmensagens",
        value: function getNewsmensagens() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee88() {
            var _this43 = this;

            var model;
            return _regeneratorRuntime().wrap(function _callee88$(_context88) {
              while (1) switch (_context88.prev = _context88.next) {
                case 0:
                  try {
                    this.amountOfMessages = 0;
                    this.listaMensageiros = [];

                    if (this.user.typeUser === 'agente') {
                      model = new src_app_dependent_model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_8__["DependentHolderFilterDto"]();
                      model.idUser = this.user.id;
                      this.serviceHelp.post('Holder/GetHoldersByFilter', JSON.stringify(model)).subscribe(function (result) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this43, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee82() {
                          var _iterator2, _step2, usuario;

                          return _regeneratorRuntime().wrap(function _callee82$(_context82) {
                            while (1) switch (_context82.prev = _context82.next) {
                              case 0:
                                _iterator2 = _createForOfIteratorHelper(result);
                                _context82.prev = 1;

                                _iterator2.s();

                              case 3:
                                if ((_step2 = _iterator2.n()).done) {
                                  _context82.next = 9;
                                  break;
                                }

                                usuario = _step2.value;
                                _context82.next = 7;
                                return this.countMensagens(usuario.patient);

                              case 7:
                                _context82.next = 3;
                                break;

                              case 9:
                                _context82.next = 14;
                                break;

                              case 11:
                                _context82.prev = 11;
                                _context82.t0 = _context82["catch"](1);

                                _iterator2.e(_context82.t0);

                              case 14:
                                _context82.prev = 14;

                                _iterator2.f();

                                return _context82.finish(14);

                              case 17:
                              case "end":
                                return _context82.stop();
                            }
                          }, _callee82, this, [[1, 11, 14, 17]]);
                        }));
                      }, function (error) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this43, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee83() {
                          return _regeneratorRuntime().wrap(function _callee83$(_context83) {
                            while (1) switch (_context83.prev = _context83.next) {
                              case 0:
                                console.log("🚀 ~ file: dashboard.component.ts:205 ~ DashboardComponent ~ error", error);

                              case 1:
                              case "end":
                                return _context83.stop();
                            }
                          }, _callee83);
                        }));
                      });
                    } else {
                      this.serviceHelp.get("Patient/getPatientByCpf?cpf=" + this.user.cpf).subscribe(function (node) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this43, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee86() {
                          var _this44 = this;

                          return _regeneratorRuntime().wrap(function _callee86$(_context86) {
                            while (1) switch (_context86.prev = _context86.next) {
                              case 0:
                                this.serviceHelp.get('Patient/GetHolder/' + node.idUser).subscribe(function (result) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this44, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee84() {
                                    return _regeneratorRuntime().wrap(function _callee84$(_context84) {
                                      while (1) switch (_context84.prev = _context84.next) {
                                        case 0:
                                          _context84.next = 2;
                                          return this.countMensagens(result);

                                        case 2:
                                        case "end":
                                          return _context84.stop();
                                      }
                                    }, _callee84, this);
                                  }));
                                }, function (error) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this44, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee85() {
                                    return _regeneratorRuntime().wrap(function _callee85$(_context85) {
                                      while (1) switch (_context85.prev = _context85.next) {
                                        case 0:
                                          console.log("🚀 ~ file: dashboard.component.ts:214 ~ DashboardComponent ~ error", error);

                                        case 1:
                                        case "end":
                                          return _context85.stop();
                                      }
                                    }, _callee85);
                                  }));
                                });

                              case 1:
                              case "end":
                                return _context86.stop();
                            }
                          }, _callee86, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this43, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee87() {
                          return _regeneratorRuntime().wrap(function _callee87$(_context87) {
                            while (1) switch (_context87.prev = _context87.next) {
                              case 0:
                                console.log("🚀 ~ file: dashboard.component.ts:218 ~ DashboardComponent ~ err", err);

                              case 1:
                              case "end":
                                return _context87.stop();
                            }
                          }, _callee87);
                        }));
                      });
                    }
                  } catch (error) {
                    console.log("🚀 ~ file: dashboard.component.ts:223 ~ DashboardComponent ~ getNewsmensagens ~ error", error);
                  }

                case 1:
                case "end":
                  return _context88.stop();
              }
            }, _callee88, this);
          }));
        }
        /**
         * @author Gustavo Teles
         * @param usuario
         * Método responsável por retornar a quantidade de
         * novas mensagens existentes
         */

      }, {
        key: "countMensagens",
        value: function countMensagens(usuario) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee90() {
            var _this45 = this;

            var mensagens, chatKeys, posicao, countMensagens, promise;
            return _regeneratorRuntime().wrap(function _callee90$(_context90) {
              while (1) switch (_context90.prev = _context90.next) {
                case 0:
                  mensagens = [];
                  chatKeys = [];
                  posicao = 0;
                  countMensagens = 0;
                  promise = new Promise(function (resolve, reject) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this45, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee89() {
                      var _this46 = this;

                      var session, user, cpfSession, cpfEnvio, cpfUsuario;
                      return _regeneratorRuntime().wrap(function _callee89$(_context89) {
                        while (1) switch (_context89.prev = _context89.next) {
                          case 0:
                            _context89.prev = 0;

                            /**AUTOR */
                            session = 0;
                            user = JSON.parse(localStorage.getItem("user"));
                            cpfSession = user.cpf;

                            while (cpfSession.includes('/') || cpfSession.includes('-') || cpfSession.includes('.')) {
                              cpfSession = cpfSession.replace('/', '');
                              cpfSession = cpfSession.replace('-', '');
                              cpfSession = cpfSession.replace('.', '');
                            }

                            session = parseFloat(cpfSession);
                            /**DESTINATÁRIO */

                            cpfEnvio = 0;
                            cpfUsuario = usuario.cpf;

                            if (cpfUsuario.includes('/')) {
                              cpfUsuario = cpfUsuario.replace('/', '');
                            }

                            if (cpfUsuario.includes('-')) {
                              cpfUsuario = cpfUsuario.replace('-', '');
                            }

                            if (cpfUsuario.includes('.')) {
                              cpfUsuario = cpfUsuario.replace('.', '');
                            }

                            cpfEnvio = parseFloat(cpfUsuario);
                            _context89.next = 14;
                            return this.firebaseService.db.collection("chatRoom").where('id', 'array-contains', session).onSnapshot(function (querySnapshot) {
                              querySnapshot.forEach(function (doc) {
                                var data = doc.data();

                                if (data.from == cpfEnvio && data.to == session || data.from == session && data.to == cpfEnvio) {
                                  if (chatKeys.indexOf(data.key) < 0) {
                                    mensagens.push(data);
                                    chatKeys.push(data.key);
                                    posicao++;
                                  }

                                  ;
                                }

                                ;
                              });
                              mensagens.sort(_this46.sortDate);

                              try {
                                if (mensagens[posicao - 1] !== null && mensagens[posicao - 1] !== undefined) {
                                  if (parseFloat(mensagens[posicao - 1].to) !== cpfEnvio) {
                                    _this46.amountOfMessages++;
                                    countMensagens++;
                                  } else {
                                    countMensagens = 0;
                                  }
                                }
                              } catch (error) {
                                console.log("🚀 ~ file: dashboard.component.ts:293 ~ DashboardComponent ~ .onSnapshot ~ error", error);
                              }

                              _this46.setNewsMensagens(cpfUsuario, countMensagens);

                              resolve(true);
                            });

                          case 14:
                            _context89.next = 20;
                            break;

                          case 16:
                            _context89.prev = 16;
                            _context89.t0 = _context89["catch"](0);
                            console.log("🚀 ~ file: dashboard.component.ts:300 ~ DashboardComponent ~ promise ~ err", _context89.t0);
                            reject(_context89.t0);

                          case 20:
                          case "end":
                            return _context89.stop();
                        }
                      }, _callee89, this, [[0, 16]]);
                    }));
                  });
                  return _context90.abrupt("return", promise.then(function (res) {
                    console.log("🚀 ~ file: dashboard.component.ts:306 ~ DashboardComponent ~ countMensagens ~ res", res);
                    return _this45.amountOfMessages;
                  }));

                case 6:
                case "end":
                  return _context90.stop();
              }
            }, _callee90);
          }));
        }
      }, {
        key: "sortDate",
        value: function sortDate(a, b) {
          var dateA = new Date();
          var dateB = new Date();

          try {
            dateA = new Date(a.timestamp.toDate());
          } catch (error) {}

          try {
            dateB = new Date(b.timestamp.toDate());
          } catch (error) {}

          return dateA > dateB ? 1 : -1;
        }
      }, {
        key: "formatDate",
        value: function formatDate(message) {
          var date = message['timestamp'] ? message['timestamp'].toDate() : new Date();
          return this.firebaseService.formatAMPM(date);
        }
        /**
         * @author Gustavo Teles
         * @param cpf
         * @param amountOfMessages
         * Método responsável por salvar a lista de mensageiros
         * com a quantidade de mensagens disponíveis
         */

      }, {
        key: "setNewsMensagens",
        value: function setNewsMensagens(cpf, amountOfMessages) {
          var dados = {
            cpf: cpf,
            amountOfMessages: amountOfMessages
          };
          this.listaMensageiros.push(dados);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_2__["RequestService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: src_app_service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_9__["FirebaseService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
      }];
    };

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-dashboard",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/home/dashboard/dashboard.component.scss"))["default"]]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/home/dashboard/model/user-push-token-dto.ts":
  /*!*************************************************************!*\
    !*** ./src/app/home/dashboard/model/user-push-token-dto.ts ***!
    \*************************************************************/

  /*! exports provided: UserPushTokenDto */

  /***/
  function srcAppHomeDashboardModelUserPushTokenDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserPushTokenDto", function () {
      return UserPushTokenDto;
    });

    var UserPushTokenDto = /*#__PURE__*/_createClass(function UserPushTokenDto() {
      _classCallCheck(this, UserPushTokenDto);
    });
    /***/

  },

  /***/
  "./src/app/list-user-agent/filter-modal/filter-modal.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/list-user-agent/filter-modal/filter-modal.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListUserAgentFilterModalFilterModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input-border {\n  border-bottom: 3px solid #54B488;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvbGlzdC11c2VyLWFnZW50L2ZpbHRlci1tb2RhbC9maWx0ZXItbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpc3QtdXNlci1hZ2VudC9maWx0ZXItbW9kYWwvZmlsdGVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdXNlci1hZ2VudC9maWx0ZXItbW9kYWwvZmlsdGVyLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWJvcmRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM1NEI0ODg7XG59IiwiLmlucHV0LWJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNTRCNDg4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/list-user-agent/filter-modal/filter-modal.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/list-user-agent/filter-modal/filter-modal.component.ts ***!
    \************************************************************************/

  /*! exports provided: FilterModalComponent */

  /***/
  function srcAppListUserAgentFilterModalFilterModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterModalComponent", function () {
      return FilterModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var src_app_dependent_model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/dependent/model/dependent-holder-filter-dto */
    "./src/app/dependent/model/dependent-holder-filter-dto.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);

    var FilterModalComponent = /*#__PURE__*/function () {
      function FilterModalComponent(modalCtrl, builder, toastController, service) {
        _classCallCheck(this, FilterModalComponent);

        this.modalCtrl = modalCtrl;
        this.builder = builder;
        this.toastController = toastController;
        this.service = service;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.resultFilter = {
          result: [],
          isFilter: true
        };
      }

      _createClass(FilterModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var typeFilter = localStorage.getItem('typeFilter');
          this.url = typeFilter === 'holder' ? 'Holder/GetHoldersByFilter' : 'Dependent/GetDependentsByFilter';
          this.createForm();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.form = this.builder.group({
            cpf: [null],
            birthDate: [null]
          });
          var filter = localStorage.getItem('filterModal');

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isNil"])(filter)) {
            var form = JSON.parse(filter);
            this.form.controls.cpf.setValue(form.cpf);
            this.form.controls.birthDate.setValue(form.birthDate);
          }
        }
      }, {
        key: "applyFilter",
        value: function applyFilter() {
          var _this47 = this;

          var model = new src_app_dependent_model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_5__["DependentHolderFilterDto"]();
          model.cpf = this.form.controls.cpf.value;
          model.birthDate = this.form.controls.birthDate.value;
          model.idUser = this.user.id;
          this.service.post(this.url, JSON.stringify(model)).subscribe(function (result) {
            _this47.resultFilter = {
              isFilter: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isNil"])(model.cpf) && Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isNil"])(model.birthDate) ? false : true,
              result: result
            };
            localStorage.setItem('filterModal', JSON.stringify(model));

            _this47.dismiss(_this47.resultFilter);
          }, function (error) {
            _this47.presentToast('Erro ao consultar pacientes', 'error');
          });
        }
      }, {
        key: "cleanFilter",
        value: function cleanFilter() {
          var _this48 = this;

          var model = new src_app_dependent_model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_5__["DependentHolderFilterDto"]();
          model.idUser = this.user.id;
          this.service.post(this.url, JSON.stringify(model)).subscribe(function (result) {
            _this48.resultFilter = {
              isFilter: false,
              result: result
            };
            localStorage.removeItem('filterModal');

            _this48.dismiss(_this48.resultFilter);
          }, function (error) {
            _this48.presentToast('Erro ao consultar pacientes', 'error');
          });
        }
      }, {
        key: "dismiss",
        value: function dismiss(result) {
          if (Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isNil"])(result)) {
            localStorage.removeItem('filterModal');
          }

          this.modalCtrl.dismiss({
            'data': result,
            'dismissed': true
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee91() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee91$(_context91) {
              while (1) switch (_context91.prev = _context91.next) {
                case 0:
                  _context91.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context91.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context91.stop();
              }
            }, _callee91, this);
          }));
        }
      }]);

      return FilterModalComponent;
    }();

    FilterModalComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }];
    };

    FilterModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-filter-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./filter-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-user-agent/filter-modal/filter-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./filter-modal.component.scss */
      "./src/app/list-user-agent/filter-modal/filter-modal.component.scss"))["default"]]
    })], FilterModalComponent);
    /***/
  },

  /***/
  "./src/app/list-user-agent/list-user-add/list-user-add.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/list-user-agent/list-user-add/list-user-add.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListUserAgentListUserAddListUserAddComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdXNlci1hZ2VudC9saXN0LXVzZXItYWRkL2xpc3QtdXNlci1hZGQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/list-user-agent/list-user-add/list-user-add.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/list-user-agent/list-user-add/list-user-add.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ListUserAddComponent */

  /***/
  function srcAppListUserAgentListUserAddListUserAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListUserAddComponent", function () {
      return ListUserAddComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var src_app_dependent_model_dependent_holder_add_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/dependent/model/dependent-holder-add-dto */
    "./src/app/dependent/model/dependent-holder-add-dto.ts");

    var ListUserAddComponent = /*#__PURE__*/function () {
      function ListUserAddComponent(modalCtrl, builder, service, toastController) {
        _classCallCheck(this, ListUserAddComponent);

        this.modalCtrl = modalCtrl;
        this.builder = builder;
        this.service = service;
        this.toastController = toastController;
        this.user = JSON.parse(localStorage.getItem('user'));
      }

      _createClass(ListUserAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createForm();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.form = this.builder.group({
            cpf: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            birthDate: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "save",
        value: function save() {
          var _this49 = this;

          if (this.form.valid) {
            var model = new src_app_dependent_model_dependent_holder_add_dto__WEBPACK_IMPORTED_MODULE_5__["DependentHolderAddDto"]();
            model.idUser = this.user.id;
            model.cpf = this.form.controls.cpf.value.replace(".", "").replace(".", "").replace("-", "");
            model.birthDate = this.form.controls.birthDate.value;
            this.service.post('Holder/HolderAdd', JSON.stringify(model)).subscribe(function (result) {
              if (result.result) {
                _this49.presentToast('Paciente vinculado com sucesso!', 'success');

                _this49.dismiss();
              } else {
                _this49.presentToast(result.messages[0], 'warning');
              }
            }, function (error) {
              _this49.presentToast('Erro incluir paciente', 'warning');
            });
          } else {
            this.presentToast('Preencha todos os campos', 'warning');
          }
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          // using the injected ModalController this page
          // can "dismiss" itself and optionally pass back data
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee92() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee92$(_context92) {
              while (1) switch (_context92.prev = _context92.next) {
                case 0:
                  _context92.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context92.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context92.stop();
              }
            }, _callee92, this);
          }));
        }
      }]);

      return ListUserAddComponent;
    }();

    ListUserAddComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }];
    };

    ListUserAddComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-user-add',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-user-add.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-user-agent/list-user-add/list-user-add.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-user-add.component.scss */
      "./src/app/list-user-agent/list-user-add/list-user-add.component.scss"))["default"]]
    })], ListUserAddComponent);
    /***/
  },

  /***/
  "./src/app/list-user-agent/list-user-agent-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/list-user-agent/list-user-agent-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ListUserAgentRoutingModule */

  /***/
  function srcAppListUserAgentListUserAgentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListUserAgentRoutingModule", function () {
      return ListUserAgentRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-user/list-user.component */
    "./src/app/list-user-agent/list-user/list-user.component.ts");
    /* harmony import */


    var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/auth/auth.guard */
    "./src/app/core/auth/auth.guard.ts");

    var routes = [{
      path: 'list-user',
      component: _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_3__["ListUserComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }];

    var ListUserAgentRoutingModule = /*#__PURE__*/_createClass(function ListUserAgentRoutingModule() {
      _classCallCheck(this, ListUserAgentRoutingModule);
    });

    ListUserAgentRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ListUserAgentRoutingModule);
    /***/
  },

  /***/
  "./src/app/list-user-agent/list-user-agent.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/list-user-agent/list-user-agent.module.ts ***!
    \***********************************************************/

  /*! exports provided: ListUserAgentModule */

  /***/
  function srcAppListUserAgentListUserAgentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListUserAgentModule", function () {
      return ListUserAgentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _list_user_list_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list-user/list-user.component */
    "./src/app/list-user-agent/list-user/list-user.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _list_user_agent_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./list-user-agent-routing.module */
    "./src/app/list-user-agent/list-user-agent-routing.module.ts");
    /* harmony import */


    var _filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./filter-modal/filter-modal.component */
    "./src/app/list-user-agent/filter-modal/filter-modal.component.ts");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/dist/index.js");
    /* harmony import */


    var _list_user_add_list_user_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./list-user-add/list-user-add.component */
    "./src/app/list-user-agent/list-user-add/list-user-add.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/fesm2015/ngx-mask.js");

    var ListUserAgentModule = /*#__PURE__*/_createClass(function ListUserAgentModule() {
      _classCallCheck(this, ListUserAgentModule);
    });

    ListUserAgentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_user_list_user_component__WEBPACK_IMPORTED_MODULE_3__["ListUserComponent"], _filter_modal_filter_modal_component__WEBPACK_IMPORTED_MODULE_6__["FilterModalComponent"], _list_user_add_list_user_add_component__WEBPACK_IMPORTED_MODULE_8__["ListUserAddComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"], _list_user_agent_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListUserAgentRoutingModule"], br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_10__["NgxMaskModule"].forRoot()]
    })], ListUserAgentModule);
    /***/
  },

  /***/
  "./src/app/list-user-agent/list-user/list-user.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/list-user-agent/list-user/list-user.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListUserAgentListUserListUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  background: #FFFFFF;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  font-family: \"Baloo 2\", cursive;\n  color: #656565;\n}\n\n.title {\n  color: #54B488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.filter {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  height: 45px;\n  line-height: 45px;\n}\n\n.filter-text {\n  color: #54B488;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.filter-icon {\n  font-size: 1.5rem;\n  margin-top: 0.6rem;\n}\n\n.noneholder {\n  height: 75px;\n  line-height: 62px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvbGlzdC11c2VyLWFnZW50L2xpc3QtdXNlci9saXN0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xpc3QtdXNlci1hZ2VudC9saXN0LXVzZXIvbGlzdC11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FER0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9saXN0LXVzZXItYWdlbnQvbGlzdC11c2VyL2xpc3QtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gMicsIGN1cnNpdmU7XG4gICAgY29sb3I6ICM2NTY1NjU7XG4gICAgXG59XG5cbi50aXRsZSB7XG4gICAgY29sb3I6ICM1NEI0ODg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gMicsIGN1cnNpdmU7XG59XG5cbi5maWx0ZXIge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xufVxuXG4uZmlsdGVyLXRleHQge1xuICAgIGNvbG9yOiAjNTRCNDg4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC1mYW1pbHk6ICdCYWxvbyAyJywgY3Vyc2l2ZTtcbn1cblxuLmZpbHRlci1pY29uIHsgICAgXG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgbWFyZ2luLXRvcDogMC42cmVtO1xufVxuXG4ubm9uZWhvbGRlciB7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MnB4O1xufVxuIiwiLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjNTRCNDg4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uZmlsdGVyIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xufVxuXG4uZmlsdGVyLXRleHQge1xuICBjb2xvcjogIzU0QjQ4ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi5maWx0ZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjZyZW07XG59XG5cbi5ub25laG9sZGVyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBsaW5lLWhlaWdodDogNjJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/list-user-agent/list-user/list-user.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/list-user-agent/list-user/list-user.component.ts ***!
    \******************************************************************/

  /*! exports provided: ListUserComponent */

  /***/
  function srcAppListUserAgentListUserListUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListUserComponent", function () {
      return ListUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _list_user_add_list_user_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../list-user-add/list-user-add.component */
    "./src/app/list-user-agent/list-user-add/list-user-add.component.ts");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_dependent_model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/dependent/model/dependent-holder-filter-dto */
    "./src/app/dependent/model/dependent-holder-filter-dto.ts");
    /* harmony import */


    var src_app_components_filter_chat_modal_filter_chat_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/filter-chat-modal/filter-chat-modal.component */
    "./src/app/components/filter-chat-modal/filter-chat-modal.component.ts");

    var ListUserComponent = /*#__PURE__*/function () {
      function ListUserComponent(modalController, service, toastController, loadingController, alertController) {
        _classCallCheck(this, ListUserComponent);

        this.modalController = modalController;
        this.service = service;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.isLoading = false;
        this.user = JSON.parse(localStorage.getItem('user'));
        this.holders = [];
        this.holdersAux = [];
        this.isFilterActive = false;
      }

      _createClass(ListUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAllHolders();
        }
      }, {
        key: "getAllHolders",
        value: function getAllHolders() {
          var _this50 = this;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(this.user)) {
            var model = new src_app_dependent_model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_6__["DependentHolderFilterDto"]();
            model.idUser = this.user.id;
            this.presentLoading();
            this.service.post('Holder/GetHoldersByFilter', JSON.stringify(model)).subscribe(function (result) {
              _this50.holders = result;
              _this50.holdersAux = result;
            }, function (error) {
              _this50.presentToast('Erro ao consultar pacientes', 'warning');
            });
          }
        }
      }, {
        key: "viewUser",
        value: function viewUser(item) {
          localStorage.setItem('user-agent', JSON.stringify(item));
          localStorage.setItem('dependenteHolder', JSON.stringify(item));
          location.href = '/list';
        }
      }, {
        key: "userAddModal",
        value: function userAddModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee93() {
            var _this51 = this;

            var modal;
            return _regeneratorRuntime().wrap(function _callee93$(_context93) {
              while (1) switch (_context93.prev = _context93.next) {
                case 0:
                  _context93.next = 2;
                  return this.modalController.create({
                    component: _list_user_add_list_user_add_component__WEBPACK_IMPORTED_MODULE_3__["ListUserAddComponent"],
                    cssClass: 'my-custom-class'
                  });

                case 2:
                  modal = _context93.sent;
                  modal.onDidDismiss().then(function () {
                    _this51.ngOnInit();
                  });
                  _context93.next = 6;
                  return modal.present();

                case 6:
                  return _context93.abrupt("return", _context93.sent);

                case 7:
                case "end":
                  return _context93.stop();
              }
            }, _callee93, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee94() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee94$(_context94) {
              while (1) switch (_context94.prev = _context94.next) {
                case 0:
                  _context94.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context94.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context94.stop();
              }
            }, _callee94, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee95() {
            return _regeneratorRuntime().wrap(function _callee95$(_context95) {
              while (1) switch (_context95.prev = _context95.next) {
                case 0:
                  _context95.next = 2;
                  return this.loadingController.create({
                    cssClass: 'my-custom-class',
                    message: 'Aguarde...',
                    duration: 2000
                  });

                case 2:
                  this.loading = _context95.sent;
                  _context95.next = 5;
                  return this.loading.present();

                case 5:
                case "end":
                  return _context95.stop();
              }
            }, _callee95, this);
          }));
        }
      }, {
        key: "removePatientConfirm",
        value: function removePatientConfirm(patient) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee96() {
            var _this52 = this;

            var alert;
            return _regeneratorRuntime().wrap(function _callee96$(_context96) {
              while (1) switch (_context96.prev = _context96.next) {
                case 0:
                  _context96.next = 2;
                  return this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Remover paciente',
                    message: 'Deseja realmente remover esse paciente da sua lista?',
                    buttons: [{
                      text: 'Não',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: function handler(blah) {}
                    }, {
                      text: 'Sim',
                      handler: function handler() {
                        _this52.removePatient(patient);
                      }
                    }]
                  });

                case 2:
                  alert = _context96.sent;
                  _context96.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context96.stop();
              }
            }, _callee96, this);
          }));
        }
      }, {
        key: "removePatient",
        value: function removePatient(patient) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee99() {
            var _this53 = this;

            return _regeneratorRuntime().wrap(function _callee99$(_context99) {
              while (1) switch (_context99.prev = _context99.next) {
                case 0:
                  _context99.next = 2;
                  return this.presentLoading();

                case 2:
                  this.service.get('Holder/removeUserByAgent?patientId=' + patient.idUserDependent + '&agentId=' + this.user.id).subscribe(function (node) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this53, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee97() {
                      var _this54 = this;

                      return _regeneratorRuntime().wrap(function _callee97$(_context97) {
                        while (1) switch (_context97.prev = _context97.next) {
                          case 0:
                            _context97.next = 2;
                            return this.loading.onDidDismiss().then(function (dis) {
                              if (node) _this54.presentToast('Paciente removido com sucesso', 'success');else _this54.presentToast('Paciente não encontrado', 'warning');

                              _this54.getAllHolders();
                            });

                          case 2:
                          case "end":
                            return _context97.stop();
                        }
                      }, _callee97, this);
                    }));
                  }, function (err) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this53, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee98() {
                      var _this55 = this;

                      return _regeneratorRuntime().wrap(function _callee98$(_context98) {
                        while (1) switch (_context98.prev = _context98.next) {
                          case 0:
                            _context98.next = 2;
                            return this.loading.onDidDismiss().then(function (dis) {
                              _this55.presentToast('Houve um error ao tentar de remover o Paciente', 'danger');

                              console.error(err);
                            });

                          case 2:
                          case "end":
                            return _context98.stop();
                        }
                      }, _callee98, this);
                    }));
                  });

                case 3:
                case "end":
                  return _context99.stop();
              }
            }, _callee99, this);
          }));
        }
        /**
         * @author Gustavo Teles
         * @returns
         * Método responsável por abrir o modal
         * de filtros disponíveis
         */

      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee101() {
            var _this56 = this;

            var modal;
            return _regeneratorRuntime().wrap(function _callee101$(_context101) {
              while (1) switch (_context101.prev = _context101.next) {
                case 0:
                  _context101.next = 2;
                  return this.modalController.create({
                    component: src_app_components_filter_chat_modal_filter_chat_modal_component__WEBPACK_IMPORTED_MODULE_7__["FilterChatModalComponent"],
                    cssClass: 'my-custom-class'
                  });

                case 2:
                  modal = _context101.sent;
                  modal.onDidDismiss().then(function (data) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this56, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee100() {
                      var resultFilter;
                      return _regeneratorRuntime().wrap(function _callee100$(_context100) {
                        while (1) switch (_context100.prev = _context100.next) {
                          case 0:
                            resultFilter = data['data'];

                            if (!(resultFilter.data !== undefined && resultFilter.data !== null)) {
                              _context100.next = 12;
                              break;
                            }

                            if (!(resultFilter.data.name !== undefined && resultFilter.data.name !== null)) {
                              _context100.next = 8;
                              break;
                            }

                            this.isFilterActive = true;
                            _context100.next = 6;
                            return this.executeFilter(resultFilter.data.name);

                          case 6:
                            _context100.next = 10;
                            break;

                          case 8:
                            this.holders = this.holdersAux;
                            this.isFilterActive = false;

                          case 10:
                            _context100.next = 14;
                            break;

                          case 12:
                            this.holders = this.holdersAux;
                            this.isFilterActive = false;

                          case 14:
                          case "end":
                            return _context100.stop();
                        }
                      }, _callee100, this);
                    }));
                  });
                  localStorage.setItem('typeFilter', 'holder');
                  _context101.next = 7;
                  return modal.present();

                case 7:
                  return _context101.abrupt("return", _context101.sent);

                case 8:
                case "end":
                  return _context101.stop();
              }
            }, _callee101, this);
          }));
        }
        /**
         * @author Gustavo Teles
         * @param nome
         * Método que executa o filtro informado
         */

      }, {
        key: "executeFilter",
        value: function executeFilter(name) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee103() {
            var _this57 = this;

            var holders;
            return _regeneratorRuntime().wrap(function _callee103$(_context103) {
              while (1) switch (_context103.prev = _context103.next) {
                case 0:
                  holders = this.holders;
                  this.holders = [];
                  return _context103.abrupt("return", holders.filter(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this57, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee102() {
                      return _regeneratorRuntime().wrap(function _callee102$(_context102) {
                        while (1) switch (_context102.prev = _context102.next) {
                          case 0:
                            if (String(item.patient.name).toLowerCase().includes(name.toLowerCase())) {
                              this.holders.push(item);
                            }

                          case 1:
                          case "end":
                            return _context102.stop();
                        }
                      }, _callee102, this);
                    }));
                  }));

                case 3:
                case "end":
                  return _context103.stop();
              }
            }, _callee103, this);
          }));
        }
      }]);

      return ListUserComponent;
    }();

    ListUserComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    ListUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-user',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-user-agent/list-user/list-user.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-user.component.scss */
      "./src/app/list-user-agent/list-user/list-user.component.scss"))["default"]]
    })], ListUserComponent);
    /***/
  },

  /***/
  "./src/app/modal-newchat/modal-newchat.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modal-newchat/modal-newchat.module.ts ***!
    \*******************************************************/

  /*! exports provided: ModalNewchatPageModule */

  /***/
  function srcAppModalNewchatModalNewchatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalNewchatPageModule", function () {
      return ModalNewchatPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_newchat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modal-newchat.page */
    "./src/app/modal-newchat/modal-newchat.page.ts");
    /* harmony import */


    var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-mask */
    "./node_modules/ngx-mask/fesm2015/ngx-mask.js");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/dist/index.js");
    /* harmony import */


    var _components_filter_chat_modal_filter_chat_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../components/filter-chat-modal/filter-chat-modal.component */
    "./src/app/components/filter-chat-modal/filter-chat-modal.component.ts");

    var routes = [{
      path: '',
      component: _modal_newchat_page__WEBPACK_IMPORTED_MODULE_6__["ModalNewchatPage"]
    }];

    var ModalNewchatPageModule = /*#__PURE__*/_createClass(function ModalNewchatPageModule() {
      _classCallCheck(this, ModalNewchatPageModule);
    });

    ModalNewchatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], br_mask__WEBPACK_IMPORTED_MODULE_8__["BrMaskerModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_7__["NgxMaskModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_modal_newchat_page__WEBPACK_IMPORTED_MODULE_6__["ModalNewchatPage"], _components_filter_chat_modal_filter_chat_modal_component__WEBPACK_IMPORTED_MODULE_9__["FilterChatModalComponent"]]
    })], ModalNewchatPageModule);
    /***/
  },

  /***/
  "./src/app/modal-newchat/modal-newchat.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/modal-newchat/modal-newchat.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalNewchatModalNewchatPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  background: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  font-family: \"Baloo 2\", cursive;\n  color: #656565;\n}\n\n.title {\n  color: #54b488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.filter {\n  background: #ffffff;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  height: 45px;\n  line-height: 45px;\n}\n\n.filter-text {\n  color: #54b488;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.filter-icon {\n  font-size: 1.5rem;\n  margin-top: 0.6rem;\n}\n\n.noneholder {\n  height: 75px;\n  line-height: 62px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvbW9kYWwtbmV3Y2hhdC9tb2RhbC1uZXdjaGF0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvbW9kYWwtbmV3Y2hhdC9tb2RhbC1uZXdjaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwtbmV3Y2hhdC9tb2RhbC1uZXdjaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogIzU0YjQ4ODtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uZmlsdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbn1cblxuLmZpbHRlci10ZXh0IHtcbiAgICBjb2xvcjogIzU0YjQ4ODtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmZpbHRlci1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XG59XG5cbi5ub25laG9sZGVyIHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDYycHg7XG59XG4iLCIuY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xuICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6ICM1NGI0ODg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi5maWx0ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogNDVweDtcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XG59XG5cbi5maWx0ZXItdGV4dCB7XG4gIGNvbG9yOiAjNTRiNDg4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmZpbHRlci1pY29uIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcbn1cblxuLm5vbmVob2xkZXIge1xuICBoZWlnaHQ6IDc1cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modal-newchat/modal-newchat.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modal-newchat/modal-newchat.page.ts ***!
    \*****************************************************/

  /*! exports provided: ModalNewchatPage */

  /***/
  function srcAppModalNewchatModalNewchatPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalNewchatPage", function () {
      return ModalNewchatPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _dependent_model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../dependent/model/dependent-holder-filter-dto */
    "./src/app/dependent/model/dependent-holder-filter-dto.ts");
    /* harmony import */


    var _core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var _chat_room_chat_room_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../chat-room/chat-room.page */
    "./src/app/chat-room/chat-room.page.ts");
    /* harmony import */


    var _components_filter_chat_modal_filter_chat_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/filter-chat-modal/filter-chat-modal.component */
    "./src/app/components/filter-chat-modal/filter-chat-modal.component.ts");
    /* harmony import */


    var _service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../service/firebase/firebase.service */
    "./src/app/service/firebase/firebase.service.ts");
    /**
     * Classe responsável pela exibição da lista de usuários para se comunicar via chat virtual
     * @author Gustavo Teles
     */


    var ModalNewchatPage = /*#__PURE__*/function () {
      function ModalNewchatPage(navParams, modalCtrl, service, toastController, loadingController, alertController, modalController, firebaseService) {
        _classCallCheck(this, ModalNewchatPage);

        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.modalController = modalController;
        this.firebaseService = firebaseService;
        this.listaMensageiros = [];
        this.mensageiros = [];
        this.mensageirosAux = [];
        this.isFilterActive = false;
        this.user = JSON.parse(localStorage.getItem("user"));
      }

      _createClass(ModalNewchatPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee110() {
            var _this58 = this;

            var model;
            return _regeneratorRuntime().wrap(function _callee110$(_context110) {
              while (1) switch (_context110.prev = _context110.next) {
                case 0:
                  _context110.next = 2;
                  return this.presentLoading();

                case 2:
                  /**Salvando o token de notificação push do usuário! */
                  this.firebaseService.saveTokenUserFirebase();

                  if (this.user.typeUser === 'agente') {
                    model = new _dependent_model_dependent_holder_filter_dto__WEBPACK_IMPORTED_MODULE_3__["DependentHolderFilterDto"]();
                    model.idUser = this.user.id;
                    this.service.post('Holder/GetHoldersByFilter', JSON.stringify(model)).subscribe(function (results) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this58, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee104() {
                        var _iterator3, _step3, result, _iterator4, _step4, mensageiro;

                        return _regeneratorRuntime().wrap(function _callee104$(_context104) {
                          while (1) switch (_context104.prev = _context104.next) {
                            case 0:
                              _iterator3 = _createForOfIteratorHelper(results);

                              try {
                                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                                  result = _step3.value;
                                  _iterator4 = _createForOfIteratorHelper(this.listaMensageiros);

                                  try {
                                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                                      mensageiro = _step4.value;

                                      if (parseFloat(result.patient.cpf) === parseFloat(mensageiro.cpf)) {
                                        result.patient['amountOfMessages'] = mensageiro.amountOfMessages;
                                      }
                                    }
                                  } catch (err) {
                                    _iterator4.e(err);
                                  } finally {
                                    _iterator4.f();
                                  }

                                  try {
                                    if (result.patient['amountOfMessages'] === null) {
                                      result.patient['amountOfMessages'] = 0;
                                    }
                                  } catch (error) {
                                    result.patient['amountOfMessages'] = 0;
                                  }

                                  result.patient['pushToken'] = result.pushToken;
                                  this.mensageiros.push(result);
                                  this.mensageirosAux.push(result);
                                  this.mensageiros.sort(this.sortMensagem);
                                  this.mensageirosAux.sort(this.sortMensagem);
                                }
                              } catch (err) {
                                _iterator3.e(err);
                              } finally {
                                _iterator3.f();
                              }

                              _context104.next = 4;
                              return this.loading.dismiss();

                            case 4:
                            case "end":
                              return _context104.stop();
                          }
                        }, _callee104, this);
                      }));
                    }, function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this58, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee105() {
                        return _regeneratorRuntime().wrap(function _callee105$(_context105) {
                          while (1) switch (_context105.prev = _context105.next) {
                            case 0:
                              console.log("🚀 ~ file: modal-newchat.page.ts:46 ~ ModalNewchatPage ~ ngOnInit ~ err", error);
                              _context105.next = 3;
                              return this.loading.dismiss();

                            case 3:
                            case "end":
                              return _context105.stop();
                          }
                        }, _callee105, this);
                      }));
                    });
                  } else {
                    this.service.get("Patient/getPatientByCpf?cpf=" + this.user.cpf).subscribe(function (node) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this58, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee108() {
                        var _this59 = this;

                        return _regeneratorRuntime().wrap(function _callee108$(_context108) {
                          while (1) switch (_context108.prev = _context108.next) {
                            case 0:
                              this.service.get('Patient/GetHolder/' + node.idUser).subscribe(function (result) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this59, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee106() {
                                  var _iterator5, _step5, mensageiro;

                                  return _regeneratorRuntime().wrap(function _callee106$(_context106) {
                                    while (1) switch (_context106.prev = _context106.next) {
                                      case 0:
                                        _iterator5 = _createForOfIteratorHelper(this.listaMensageiros);

                                        try {
                                          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                                            mensageiro = _step5.value;

                                            if (parseFloat(result.cpf) === parseFloat(mensageiro.cpf)) {
                                              result['amountOfMessages'] = mensageiro.amountOfMessages;
                                            }
                                          }
                                        } catch (err) {
                                          _iterator5.e(err);
                                        } finally {
                                          _iterator5.f();
                                        }

                                        this.mensageiros.push(result);
                                        this.mensageirosAux.push(result);
                                        _context106.next = 6;
                                        return this.loading.dismiss();

                                      case 6:
                                      case "end":
                                        return _context106.stop();
                                    }
                                  }, _callee106, this);
                                }));
                              }, function (error) {
                                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this59, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee107() {
                                  return _regeneratorRuntime().wrap(function _callee107$(_context107) {
                                    while (1) switch (_context107.prev = _context107.next) {
                                      case 0:
                                        console.log("🚀 ~ file: modal-newchat.page.ts:62 ~ ModalNewchatPage ~ ngOnInit ~ err", error);
                                        _context107.next = 3;
                                        return this.loading.dismiss();

                                      case 3:
                                      case "end":
                                        return _context107.stop();
                                    }
                                  }, _callee107, this);
                                }));
                              });

                            case 1:
                            case "end":
                              return _context108.stop();
                          }
                        }, _callee108, this);
                      }));
                    }, function (err) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this58, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee109() {
                        return _regeneratorRuntime().wrap(function _callee109$(_context109) {
                          while (1) switch (_context109.prev = _context109.next) {
                            case 0:
                              console.log("🚀 ~ file: modal-newchat.page.ts:75 ~ ModalNewchatPage ~ err", err);
                              _context109.next = 3;
                              return this.loading.dismiss();

                            case 3:
                            case "end":
                              return _context109.stop();
                          }
                        }, _callee109, this);
                      }));
                    });
                  }

                case 4:
                case "end":
                  return _context110.stop();
              }
            }, _callee110, this);
          }));
        }
      }, {
        key: "openChat",
        value: function openChat(usr) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee111() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee111$(_context111) {
              while (1) switch (_context111.prev = _context111.next) {
                case 0:
                  _context111.next = 2;
                  return this.modalController.create({
                    component: _chat_room_chat_room_page__WEBPACK_IMPORTED_MODULE_5__["ChatRoomPage"],
                    componentProps: {
                      data: usr
                    }
                  });

                case 2:
                  modal = _context111.sent;
                  delete usr['amountOfMessages'];
                  _context111.next = 6;
                  return modal.present();

                case 6:
                  return _context111.abrupt("return", _context111.sent);

                case 7:
                case "end":
                  return _context111.stop();
              }
            }, _callee111, this);
          }));
        }
      }, {
        key: "closeModal",
        value: function closeModal() {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee112() {
            return _regeneratorRuntime().wrap(function _callee112$(_context112) {
              while (1) switch (_context112.prev = _context112.next) {
                case 0:
                  _context112.next = 2;
                  return this.loadingController.create({
                    cssClass: 'my-custom-class',
                    message: 'Aguarde...',
                    duration: 2000000
                  });

                case 2:
                  this.loading = _context112.sent;
                  _context112.next = 5;
                  return this.loading.present();

                case 5:
                case "end":
                  return _context112.stop();
              }
            }, _callee112, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee113() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee113$(_context113) {
              while (1) switch (_context113.prev = _context113.next) {
                case 0:
                  _context113.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context113.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context113.stop();
              }
            }, _callee113, this);
          }));
        }
        /**
         * @returns
         * Método responsável por abrir o modal
         * de filtros disponíveis
         */

      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee115() {
            var _this60 = this;

            var modal;
            return _regeneratorRuntime().wrap(function _callee115$(_context115) {
              while (1) switch (_context115.prev = _context115.next) {
                case 0:
                  _context115.next = 2;
                  return this.modalController.create({
                    component: _components_filter_chat_modal_filter_chat_modal_component__WEBPACK_IMPORTED_MODULE_6__["FilterChatModalComponent"],
                    cssClass: 'my-custom-class'
                  });

                case 2:
                  modal = _context115.sent;
                  modal.onDidDismiss().then(function (data) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this60, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee114() {
                      var resultFilter;
                      return _regeneratorRuntime().wrap(function _callee114$(_context114) {
                        while (1) switch (_context114.prev = _context114.next) {
                          case 0:
                            resultFilter = data['data'];

                            if (!(resultFilter.data !== undefined && resultFilter.data !== null)) {
                              _context114.next = 12;
                              break;
                            }

                            if (!(resultFilter.data.name !== undefined && resultFilter.data.name !== null)) {
                              _context114.next = 8;
                              break;
                            }

                            this.isFilterActive = true;
                            _context114.next = 6;
                            return this.executeFilter(resultFilter.data.name);

                          case 6:
                            _context114.next = 10;
                            break;

                          case 8:
                            this.mensageiros = this.mensageirosAux;
                            this.isFilterActive = false;

                          case 10:
                            _context114.next = 14;
                            break;

                          case 12:
                            this.mensageiros = this.mensageirosAux;
                            this.isFilterActive = false;

                          case 14:
                          case "end":
                            return _context114.stop();
                        }
                      }, _callee114, this);
                    }));
                  });
                  localStorage.setItem('typeFilter', 'holder');
                  _context115.next = 7;
                  return modal.present();

                case 7:
                  return _context115.abrupt("return", _context115.sent);

                case 8:
                case "end":
                  return _context115.stop();
              }
            }, _callee115, this);
          }));
        }
        /**
         * @param name
         * Método que executa o filtro informado
         */

      }, {
        key: "executeFilter",
        value: function executeFilter(name) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee117() {
            var _this61 = this;

            var mensageiros;
            return _regeneratorRuntime().wrap(function _callee117$(_context117) {
              while (1) switch (_context117.prev = _context117.next) {
                case 0:
                  mensageiros = this.mensageiros;
                  this.mensageiros = [];
                  return _context117.abrupt("return", mensageiros.filter(function (item) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this61, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee116() {
                      return _regeneratorRuntime().wrap(function _callee116$(_context116) {
                        while (1) switch (_context116.prev = _context116.next) {
                          case 0:
                            if (String(item.patient.name).toLowerCase().includes(name.toLowerCase())) {
                              this.mensageiros.push(item);
                            }

                          case 1:
                          case "end":
                            return _context116.stop();
                        }
                      }, _callee116, this);
                    }));
                  }));

                case 3:
                case "end":
                  return _context117.stop();
              }
            }, _callee117, this);
          }));
        }
        /**
         * @param a
         * @param b
         * @returns
         * Método que ordena a lista de mensageiros
         * colocando em primeiro a queles que
         * enviaram alguma mensagem
         */

      }, {
        key: "sortMensagem",
        value: function sortMensagem(a, b) {
          var msgA = a.patient['amountOfMessages'];
          var msgB = b.patient['amountOfMessages'];
          return msgA > msgB ? -1 : 1;
        }
      }]);

      return ModalNewchatPage;
    }();

    ModalNewchatPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _service_firebase_firebase_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalNewchatPage.prototype, "listaMensageiros", void 0);
    ModalNewchatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-newchat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-newchat.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal-newchat/modal-newchat.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-newchat.page.scss */
      "./src/app/modal-newchat/modal-newchat.page.scss"))["default"]]
    })], ModalNewchatPage);
    /***/
  },

  /***/
  "./src/app/quiz/detail/detail.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/quiz/detail/detail.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuizDetailDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title-card {\n  color: #54B488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.card-header {\n  border-bottom: 1px solid #E8E8E8;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.content {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 28px;\n  color: #505050;\n}\n\n.card-content {\n  font-family: \"Baloo 2\", cursive;\n}\n\n.text-introduction {\n  text-align: justify;\n  color: #343a40;\n  font-style: normal;\n  font-weight: normal;\n  font-family: \"Baloo 2\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvcXVpei9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWl6L2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLGdDQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9xdWl6L2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtY2FyZCB7XG4gICAgY29sb3I6ICM1NEI0ODg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4OyAgICBcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbiAgICBmb250LWZhbWlseTogJ0JhbG9vIDInLCBjdXJzaXZlO1xufVxuXG4uY29udGVudCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGNvbG9yOiAjNTA1MDUwO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ0JhbG9vIDInLCBjdXJzaXZlO1xufVxuXG4udGV4dC1pbnRyb2R1Y3Rpb24ge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgY29sb3I6ICMzNDNhNDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1mYW1pbHk6ICdCYWxvbyAyJywgY3Vyc2l2ZTtcbn0iLCIudGl0bGUtY2FyZCB7XG4gIGNvbG9yOiAjNTRCNDg4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNFOEU4RTg7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmNvbnRlbnQge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGNvbG9yOiAjNTA1MDUwO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4udGV4dC1pbnRyb2R1Y3Rpb24ge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBjb2xvcjogIzM0M2E0MDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/quiz/detail/detail.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/quiz/detail/detail.component.ts ***!
    \*************************************************/

  /*! exports provided: DetailComponent */

  /***/
  function srcAppQuizDetailDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailComponent", function () {
      return DetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/util/loading */
    "./src/app/core/util/loading.ts");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);

    var DetailComponent = /*#__PURE__*/function () {
      function DetailComponent(router, routeSub, service, loadingController) {
        _classCallCheck(this, DetailComponent);

        this.router = router;
        this.routeSub = routeSub;
        this.service = service;
        this.loadingController = loadingController;
        this.card = {};
        this.user = JSON.parse(localStorage.getItem('user'));
        this.quiz = [];
        this.mockTransport = JSON.parse(localStorage.getItem('transport'));
      }

      _createClass(DetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this62 = this;

          this.routeSub.params.subscribe(function (params) {
            _this62.idScheduling = params['scheduling'];

            _this62.getCard(_this62.idScheduling);

            _this62.service.get('Question/GetQuizEvaluationQuery?schedulingID=' + _this62.idScheduling).subscribe(function (result) {
              _this62.quiz = result;
              if (!Object(util__WEBPACK_IMPORTED_MODULE_6__["isNullOrUndefined"])(_this62.quiz)) localStorage.setItem('quiz', JSON.stringify(result));
            });
          });
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee118() {
            return _regeneratorRuntime().wrap(function _callee118$(_context118) {
              while (1) switch (_context118.prev = _context118.next) {
                case 0:
                  _context118.next = 2;
                  return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingOn"])(this.loadingController);

                case 2:
                case "end":
                  return _context118.stop();
              }
            }, _callee118, this);
          }));
        }
      }, {
        key: "getCard",
        value: function getCard(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee121() {
            var _this63 = this;

            return _regeneratorRuntime().wrap(function _callee121$(_context121) {
              while (1) switch (_context121.prev = _context121.next) {
                case 0:
                  _context121.next = 2;
                  return this.presentLoading();

                case 2:
                  this.service.get('scheduling/getSchedulingAppById?idScheduling=' + Number(id)).subscribe(function (result) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this63, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee119() {
                      return _regeneratorRuntime().wrap(function _callee119$(_context119) {
                        while (1) switch (_context119.prev = _context119.next) {
                          case 0:
                            _context119.next = 2;
                            return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingOnDidDismiss"])(this.loadingController);

                          case 2:
                            this.card = result;

                          case 3:
                          case "end":
                            return _context119.stop();
                        }
                      }, _callee119, this);
                    }));
                  }, function (err) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this63, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee120() {
                      return _regeneratorRuntime().wrap(function _callee120$(_context120) {
                        while (1) switch (_context120.prev = _context120.next) {
                          case 0:
                            _context120.next = 2;
                            return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_5__["LoadingOnDidDismiss"])(this.loadingController);

                          case 2:
                            console.error(err);

                          case 3:
                          case "end":
                            return _context120.stop();
                        }
                      }, _callee120, this);
                    }));
                  });

                case 3:
                case "end":
                  return _context121.stop();
              }
            }, _callee121, this);
          }));
        }
      }, {
        key: "start",
        value: function start() {
          var _this64 = this;

          this.routeSub.params.subscribe(function (params) {
            _this64.router.navigateByUrl('question/' + params['scheduling']);
          });
        }
      }]);

      return DetailComponent;
    }();

    DetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }];
    };

    DetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/detail/detail.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail.component.scss */
      "./src/app/quiz/detail/detail.component.scss"))["default"]]
    })], DetailComponent);
    /***/
  },

  /***/
  "./src/app/quiz/question/model/answer.ts":
  /*!***********************************************!*\
    !*** ./src/app/quiz/question/model/answer.ts ***!
    \***********************************************/

  /*! exports provided: Answer */

  /***/
  function srcAppQuizQuestionModelAnswerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Answer", function () {
      return Answer;
    });

    var Answer = /*#__PURE__*/_createClass(function Answer() {
      _classCallCheck(this, Answer);

      this.anonymous = false;
    });
    /***/

  },

  /***/
  "./src/app/quiz/question/question.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/quiz/question/question.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuizQuestionQuestionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title-question {\n  text-align: justify;\n  color: #54B488;\n  font-style: normal;\n  font-weight: normal;\n  font-family: \"Baloo 2\", cursive;\n  font-size: 18px;\n}\n\n.option {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  height: 40px;\n  line-height: 40px;\n}\n\n.option-icon {\n  font-size: 27px;\n  position: relative;\n  top: 3px;\n  font-weight: bold;\n}\n\n.option-select {\n  background-color: #49505775;\n}\n\n.font-size-anonimate {\n  font-size: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvcXVpei9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcXVpei9xdWVzdGlvbi9xdWVzdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3F1aXovcXVlc3Rpb24vcXVlc3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtcXVlc3Rpb24ge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgY29sb3I6ICM1NEI0ODg7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1mYW1pbHk6ICdCYWxvbyAyJywgY3Vyc2l2ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5vcHRpb24ge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4ub3B0aW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAzcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5vcHRpb24tc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk1MDU3NzU7XG59XG5cbi5mb250LXNpemUtYW5vbmltYXRlIHtcbiAgICBmb250LXNpemU6IDAuN2VtO1xufSIsIi50aXRsZS1xdWVzdGlvbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGNvbG9yOiAjNTRCNDg4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ub3B0aW9uIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4ub3B0aW9uLWljb24ge1xuICBmb250LXNpemU6IDI3cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ub3B0aW9uLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0OTUwNTc3NTtcbn1cblxuLmZvbnQtc2l6ZS1hbm9uaW1hdGUge1xuICBmb250LXNpemU6IDAuN2VtO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/quiz/question/question.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/quiz/question/question.component.ts ***!
    \*****************************************************/

  /*! exports provided: QuestionComponent */

  /***/
  function srcAppQuizQuestionQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuestionComponent", function () {
      return QuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/util/loading */
    "./src/app/core/util/loading.ts");
    /* harmony import */


    var _model_answer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./model/answer */
    "./src/app/quiz/question/model/answer.ts");

    var QuestionComponent = /*#__PURE__*/function () {
      function QuestionComponent(routeSub, router, service, toastController, loadingController, alertController, form_builder) {
        _classCallCheck(this, QuestionComponent);

        this.routeSub = routeSub;
        this.router = router;
        this.service = service;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.form_builder = form_builder;
        this.stepActual = 0;
        this.questions = [];
      }

      _createClass(QuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this65 = this;

          this.createFormAnonimate();
          this.routeSub.params.subscribe(function (params) {
            _this65.id = params['scheduling'];
            var quiz = localStorage.getItem('quiz');

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(quiz)) {
              _this65.questions = JSON.parse(quiz);
            }
          });
        }
      }, {
        key: "navigateStep",
        value: function navigateStep(step, option) {
          this.stepActual = step;

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(option)) {
            this.checkSelectExist(step, option);
          }
        }
      }, {
        key: "checkSelectExist",
        value: function checkSelectExist(step, option) {
          var options = this.questions.find(function (a) {
            return a.step === step - 1;
          }).options;
          options.forEach(function (element) {
            element.select = false;
          });
          options.find(function (a) {
            return a.id === option.id;
          }).select = true;
        }
      }, {
        key: "send",
        value: function send() {
          var _this66 = this;

          var model = [];
          this.questions.forEach(function (question) {
            var answer = new _model_answer__WEBPACK_IMPORTED_MODULE_8__["Answer"]();
            var selecOption = !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(question.options) ? question.options.find(function (x) {
              return x.select;
            }) : null;
            answer.createdAt = new Date();
            answer.description = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(question.options) ? _this66.comments : !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(selecOption) ? selecOption.name : '';
            answer.idSchedulingQuiz = question.schedulingQuizID;
            answer.idQuestion = question.questionID;
            answer.score = !Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isNil"])(selecOption) ? selecOption.value : 0;
            answer.anonymous = _this66.form_anonimate.controls.is_anonimate.value;
            model.push(answer);
          });
          this.presentLoading();
          this.service.post('Question/SaveAnswerForQuestion/' + this.id, JSON.stringify(model)).subscribe(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this66, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee122() {
              return _regeneratorRuntime().wrap(function _callee122$(_context122) {
                while (1) switch (_context122.prev = _context122.next) {
                  case 0:
                    _context122.next = 2;
                    return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(this.loadingController);

                  case 2:
                    if (result) {
                      this.router.navigateByUrl('/thank-you');
                    } else {
                      this.presentToast('Erro ao salvar a avaliação', 'error');
                    }

                  case 3:
                  case "end":
                    return _context122.stop();
                }
              }, _callee122, this);
            }));
          }, function (error) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this66, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee123() {
              return _regeneratorRuntime().wrap(function _callee123$(_context123) {
                while (1) switch (_context123.prev = _context123.next) {
                  case 0:
                    _context123.next = 2;
                    return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(this.loadingController);

                  case 2:
                    this.presentToast('Erro ao salvar a avaliação', 'error');

                  case 3:
                  case "end":
                    return _context123.stop();
                }
              }, _callee123, this);
            }));
          });
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee124() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee124$(_context124) {
              while (1) switch (_context124.prev = _context124.next) {
                case 0:
                  _context124.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context124.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context124.stop();
              }
            }, _callee124, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee125() {
            return _regeneratorRuntime().wrap(function _callee125$(_context125) {
              while (1) switch (_context125.prev = _context125.next) {
                case 0:
                  Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOn"])(this.loadingController);

                case 1:
                case "end":
                  return _context125.stop();
              }
            }, _callee125, this);
          }));
        }
      }, {
        key: "createFormAnonimate",
        value: function createFormAnonimate() {
          this.form_anonimate = this.form_builder.group({
            is_anonimate: [false]
          });
        }
      }]);

      return QuestionComponent;
    }();

    QuestionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    QuestionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-question',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/question/question.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./question.component.scss */
      "./src/app/quiz/question/question.component.scss"))["default"]]
    })], QuestionComponent);
    /***/
  },

  /***/
  "./src/app/quiz/quiz-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/quiz/quiz-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: QuizRoutingModule */

  /***/
  function srcAppQuizQuizRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizRoutingModule", function () {
      return QuizRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/auth/auth.guard */
    "./src/app/core/auth/auth.guard.ts");
    /* harmony import */


    var _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./detail/detail.component */
    "./src/app/quiz/detail/detail.component.ts");
    /* harmony import */


    var _question_question_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./question/question.component */
    "./src/app/quiz/question/question.component.ts");
    /* harmony import */


    var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./thank-you/thank-you.component */
    "./src/app/quiz/thank-you/thank-you.component.ts");

    var routes = [{
      path: 'question-scheduling/:scheduling',
      component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_4__["DetailComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'question/:scheduling',
      component: _question_question_component__WEBPACK_IMPORTED_MODULE_5__["QuestionComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }, {
      path: 'thank-you',
      component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_6__["ThankYouComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    }];

    var QuizRoutingModule = /*#__PURE__*/_createClass(function QuizRoutingModule() {
      _classCallCheck(this, QuizRoutingModule);
    });

    QuizRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], QuizRoutingModule);
    /***/
  },

  /***/
  "./src/app/quiz/quiz.module.ts":
  /*!*************************************!*\
    !*** ./src/app/quiz/quiz.module.ts ***!
    \*************************************/

  /*! exports provided: QuizModule */

  /***/
  function srcAppQuizQuizModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QuizModule", function () {
      return QuizModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./quiz-routing.module */
    "./src/app/quiz/quiz-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail/detail.component */
    "./src/app/quiz/detail/detail.component.ts");
    /* harmony import */


    var _question_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./question/question.component */
    "./src/app/quiz/question/question.component.ts");
    /* harmony import */


    var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./thank-you/thank-you.component */
    "./src/app/quiz/thank-you/thank-you.component.ts");

    var QuizModule = /*#__PURE__*/_createClass(function QuizModule() {
      _classCallCheck(this, QuizModule);
    });

    QuizModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _question_question_component__WEBPACK_IMPORTED_MODULE_7__["QuestionComponent"], _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_8__["ThankYouComponent"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _quiz_routing_module__WEBPACK_IMPORTED_MODULE_3__["QuizRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"]]
    })], QuizModule);
    /***/
  },

  /***/
  "./src/app/quiz/thank-you/thank-you.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/quiz/thank-you/thank-you.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppQuizThankYouThankYouComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text {\n  color: #6C5353;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  font-family: \"Baloo 2\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvcXVpei90aGFuay15b3UvdGhhbmsteW91LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9xdWl6L3RoYW5rLXlvdS90aGFuay15b3UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcXVpei90aGFuay15b3UvdGhhbmsteW91LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICAgIGNvbG9yOiAjNkM1MzUzO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LWZhbWlseTogJ0JhbG9vIDInLCBjdXJzaXZlO1xufSIsIi50ZXh0IHtcbiAgY29sb3I6ICM2QzUzNTM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/quiz/thank-you/thank-you.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/quiz/thank-you/thank-you.component.ts ***!
    \*******************************************************/

  /*! exports provided: ThankYouComponent */

  /***/
  function srcAppQuizThankYouThankYouComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function () {
      return ThankYouComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ThankYouComponent = /*#__PURE__*/function () {
      function ThankYouComponent(router) {
        _classCallCheck(this, ThankYouComponent);

        this.router = router;
      }

      _createClass(ThankYouComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToList",
        value: function goToList() {
          window.location.href = 'list';
        }
      }]);

      return ThankYouComponent;
    }();

    ThankYouComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ThankYouComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thank-you',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./thank-you.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/quiz/thank-you/thank-you.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./thank-you.component.scss */
      "./src/app/quiz/thank-you/thank-you.component.scss"))["default"]]
    })], ThankYouComponent);
    /***/
  },

  /***/
  "./src/app/scheduling/cancel/cancel.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/scheduling/cancel/cancel.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSchedulingCancelCancelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".options {\n  background: #FFFFFF;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  height: 40px;\n  line-height: 40px;\n  color: #000000;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  font-family: \"Baloo 2\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvc2NoZWR1bGluZy9jYW5jZWwvY2FuY2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY2hlZHVsaW5nL2NhbmNlbC9jYW5jZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2NoZWR1bGluZy9jYW5jZWwvY2FuY2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9wdGlvbnMge1xuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LWZhbWlseTogJ0JhbG9vIDInLCBjdXJzaXZlO1xufSIsIi5vcHRpb25zIHtcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/scheduling/cancel/cancel.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/scheduling/cancel/cancel.component.ts ***!
    \*******************************************************/

  /*! exports provided: CancelComponent */

  /***/
  function srcAppSchedulingCancelCancelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelComponent", function () {
      return CancelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _modal_cancel_modal_cancel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modal-cancel/modal-cancel.component */
    "./src/app/scheduling/cancel/modal-cancel/modal-cancel.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CancelComponent = /*#__PURE__*/function () {
      function CancelComponent(modal, routeSub, router, navCtrl) {
        _classCallCheck(this, CancelComponent);

        this.modal = modal;
        this.routeSub = routeSub;
        this.router = router;
        this.navCtrl = navCtrl;
        this.optionCancel = [{
          id: 1,
          name: 'Não preciso'
        }, // {
        //   id: 2,
        //   name: 'Data incompatível'
        // },
        // {
        //   id: 3,
        //   name: 'Adiar'
        // },
        {
          id: 4,
          name: 'Outro'
        }];
      }

      _createClass(CancelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this67 = this;

          this.routeSub.params.subscribe(function (params) {
            _this67.id = Number(params['id']);
          });
        }
      }, {
        key: "backList",
        value: function backList() {
          window.location.href = '/detail/' + this.id;
        }
      }, {
        key: "presentModal",
        value: function presentModal(option) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee126() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee126$(_context126) {
              while (1) switch (_context126.prev = _context126.next) {
                case 0:
                  _context126.next = 2;
                  return this.modal.create({
                    component: _modal_cancel_modal_cancel_component__WEBPACK_IMPORTED_MODULE_3__["ModalCancelComponent"],
                    cssClass: 'my-custom-class',
                    componentProps: {
                      'id': this.id,
                      'option': option.id,
                      'optionName': option.name
                    }
                  });

                case 2:
                  modal = _context126.sent;
                  _context126.next = 5;
                  return modal.present();

                case 5:
                  return _context126.abrupt("return", _context126.sent);

                case 6:
                case "end":
                  return _context126.stop();
              }
            }, _callee126, this);
          }));
        }
      }]);

      return CancelComponent;
    }();

    CancelComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }];
    };

    CancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cancel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cancel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/cancel/cancel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cancel.component.scss */
      "./src/app/scheduling/cancel/cancel.component.scss"))["default"]]
    })], CancelComponent);
    /***/
  },

  /***/
  "./src/app/scheduling/cancel/modal-cancel/modal-cancel.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/scheduling/cancel/modal-cancel/modal-cancel.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSchedulingCancelModalCancelModalCancelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".label-modal-cancel {\n  font-family: \"Baloo 2\", cursive;\n  color: gray;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n::ng-deep .textarea-wrapper {\n  font-family: \"Baloo 2\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvc2NoZWR1bGluZy9jYW5jZWwvbW9kYWwtY2FuY2VsL21vZGFsLWNhbmNlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NoZWR1bGluZy9jYW5jZWwvbW9kYWwtY2FuY2VsL21vZGFsLWNhbmNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2NoZWR1bGluZy9jYW5jZWwvbW9kYWwtY2FuY2VsL21vZGFsLWNhbmNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJlbC1tb2RhbC1jYW5jZWwge1xuICAgIGZvbnQtZmFtaWx5OiAnQmFsb28gMicsIGN1cnNpdmU7XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxOHB4OyAgXG59XG5cbjo6bmctZGVlcCAudGV4dGFyZWEtd3JhcHBlciB7XG4gICAgZm9udC1mYW1pbHk6ICdCYWxvbyAyJywgY3Vyc2l2ZTtcbn0iLCIubGFiZWwtbW9kYWwtY2FuY2VsIHtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbjo6bmctZGVlcCAudGV4dGFyZWEtd3JhcHBlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/scheduling/cancel/modal-cancel/modal-cancel.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/scheduling/cancel/modal-cancel/modal-cancel.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ModalCancelComponent */

  /***/
  function srcAppSchedulingCancelModalCancelModalCancelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCancelComponent", function () {
      return ModalCancelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/util/loading */
    "./src/app/core/util/loading.ts");

    var ModalCancelComponent = /*#__PURE__*/function () {
      function ModalCancelComponent(modalCtrl, builder, router, requestService, toastController, loadingController) {
        _classCallCheck(this, ModalCancelComponent);

        this.modalCtrl = modalCtrl;
        this.builder = builder;
        this.router = router;
        this.requestService = requestService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.weekDays = moment__WEBPACK_IMPORTED_MODULE_3__["localeData"]('pt-BR').weekdays();
        this.period = [{
          id: 1,
          name: 'Período da manhã'
        }, {
          id: 2,
          name: 'Período da tarde'
        }];
        this.days = [{
          id: 1,
          name: '15 dias'
        }, {
          id: 2,
          name: '30 dias'
        }, {
          id: 3,
          name: '45 dias'
        }, {
          id: 4,
          name: '60 dias'
        }];
        this.daysWeekSelect = [];
        this.periodSelect = [];
      }

      _createClass(ModalCancelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createFormDateIncopatible();
          this.createFormDelay();
          this.createFormDescription();
        }
      }, {
        key: "createFormDateIncopatible",
        value: function createFormDateIncopatible() {
          this.formDateIncompatible = this.builder.group({
            days: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            period: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "createFormDelay",
        value: function createFormDelay() {
          this.formDelay = this.builder.group({
            day: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "createFormDescription",
        value: function createFormDescription() {
          this.formDescription = this.builder.group({
            description: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        }
      }, {
        key: "dismiss",
        value: function dismiss() {
          this.modalCtrl.dismiss({
            'dismissed': true
          });
        }
      }, {
        key: "send",
        value: function send() {
          this.cancel();
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee127() {
            return _regeneratorRuntime().wrap(function _callee127$(_context127) {
              while (1) switch (_context127.prev = _context127.next) {
                case 0:
                  _context127.next = 2;
                  return this.loadingController.create({
                    cssClass: 'my-custom-class',
                    message: 'Aguarde...',
                    duration: 2000
                  });

                case 2:
                  this.loading = _context127.sent;
                  _context127.next = 5;
                  return this.loading.present();

                case 5:
                case "end":
                  return _context127.stop();
              }
            }, _callee127, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee128() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee128$(_context128) {
              while (1) switch (_context128.prev = _context128.next) {
                case 0:
                  _context128.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context128.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context128.stop();
              }
            }, _callee128, this);
          }));
        }
      }, {
        key: "populateObj",
        value: function populateObj() {
          // option 1 = Nao preciso/Outro, option 2 = Data incompativel, option 3 = Adiar
          if (this.option === 1 || this.option === 4) {
            var obj = {
              IdScheduling: this.id,
              TypeCancel: this.option,
              Description: this.formDescription.controls.description.value
            };
            return obj;
          }

          if (this.option === 2) {
            var days = '';
            this.daysWeekSelect.forEach(function (element) {
              days += element.day + ' - ';
            });
            var period = '';
            this.periodSelect.forEach(function (element) {
              period += element.period.name + ' - ';
            });
            var objDate = {
              IdScheduling: this.id,
              TypeCancel: this.option,
              Description: 'Melhor dia: ' + days + 'Melhor período: ' + period
            };
            return objDate;
          }

          if (this.option === 3) {
            var objDelay = {
              IdScheduling: this.id,
              TypeCancel: this.option,
              Description: this.formDelay.controls.day.value
            };
            return objDelay;
          }
        }
      }, {
        key: "cancel",
        value: function cancel() {
          var _this68 = this;

          Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOn"])(this.loadingController);
          this.requestService.post('Scheduling/cancelSchedulingApp', JSON.stringify(this.populateObj())).subscribe(function (res) {
            if (res) {
              Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(_this68.loadingController);

              _this68.presentToast('Agendamento cancelado com sucesso', 'success');

              window.location.href = 'list';
            }
          }, function (err) {
            Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(_this68.loadingController);

            _this68.presentToast('Houve um error ao tentar de cancelar o agendamento', 'danger');
          });
        }
      }, {
        key: "selectDelayDay",
        value: function selectDelayDay(item) {
          this.formDelay.controls.day.setValue(item);
        }
      }, {
        key: "selectDays",
        value: function selectDays(item, index) {
          if (this.daysWeekSelect.length === 0 && this.daysWeekSelect.filter(function (a) {
            return a === item;
          }).length === 0) this.daysWeekSelect.push({
            day: item,
            index: index
          });else {
            if (this.daysWeekSelect.filter(function (a) {
              return a.day === item;
            }).length > 0) {
              this.daysWeekSelect.splice(index, 1);
            } else {
              this.daysWeekSelect.push({
                day: item,
                index: index
              });
            }
          }
          this.formDateIncompatible.controls.days.setValue(this.daysWeekSelect);
        }
      }, {
        key: "selectPeriod",
        value: function selectPeriod(item, index) {
          if (this.periodSelect.length === 0 && this.periodSelect.filter(function (a) {
            return a === item;
          }).length === 0) this.periodSelect.push({
            period: item,
            index: index
          });else {
            if (this.periodSelect.filter(function (a) {
              return a.period === item;
            }).length > 0) {
              this.periodSelect.splice(index, 1);
            } else {
              this.periodSelect.push({
                period: item,
                index: index
              });
            }
          }
          this.formDateIncompatible.controls.period.setValue(this.periodSelect);
        }
      }]);

      return ModalCancelComponent;
    }();

    ModalCancelComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalCancelComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalCancelComponent.prototype, "option", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModalCancelComponent.prototype, "optionName", void 0);
    ModalCancelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-cancel',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./modal-cancel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/cancel/modal-cancel/modal-cancel.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./modal-cancel.component.scss */
      "./src/app/scheduling/cancel/modal-cancel/modal-cancel.component.scss"))["default"]]
    })], ModalCancelComponent);
    /***/
  },

  /***/
  "./src/app/scheduling/detail/detail.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/scheduling/detail/detail.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSchedulingDetailDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title-card {\n  color: #54B488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.title-step {\n  font-size: 18px !important;\n}\n\n.card-header {\n  border-bottom: 1px solid #E8E8E8;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.card-content {\n  font-family: \"Baloo 2\", cursive;\n}\n\n.content {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 28px;\n  color: #505050;\n}\n\n.label-no-transport {\n  font-family: \"Baloo 2\", cursive;\n  color: #505050;\n}\n\na {\n  text-decoration: none;\n}\n\n.alert-transport {\n  color: #d39e00;\n}\n\n.title-card-Notification {\n  color: #EC2C2C;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.icWarning {\n  color: gold;\n  transform: scale(1.5);\n}\n\nhr {\n  background: #f4f4f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvc2NoZWR1bGluZy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zY2hlZHVsaW5nL2RldGFpbC9kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQ0FBQTtFQUNBLCtCQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2NoZWR1bGluZy9kZXRhaWwvZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWNhcmQge1xuICAgIGNvbG9yOiAjNTRCNDg4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDsgICAgXG59XG5cbi50aXRsZS1zdGVwIHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U4RThFODtcbiAgICBmb250LWZhbWlseTogJ0JhbG9vIDInLCBjdXJzaXZlO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogJ0JhbG9vIDInLCBjdXJzaXZlO1xufVxuXG4uY29udGVudCB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGNvbG9yOiAjNTA1MDUwO1xufVxuXG4ubGFiZWwtbm8tdHJhbnNwb3J0IHtcbiAgICBmb250LWZhbWlseTogJ0JhbG9vIDInLCBjdXJzaXZlO1xuICAgIGNvbG9yOiAjNTA1MDUwO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hbGVydC10cmFuc3BvcnQge1xuICAgIGNvbG9yOiAjZDM5ZTAwO1xufVxuXG4udGl0bGUtY2FyZC1Ob3RpZmljYXRpb24ge1xuICAgIGNvbG9yOiAjRUMyQzJDO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7ICAgIFxufVxuXG4uaWNXYXJuaW5ne1xuICAgIGNvbG9yOiBnb2xkO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbn1cblxuaHIge1xuICAgIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG59IiwiLnRpdGxlLWNhcmQge1xuICBjb2xvcjogIzU0QjQ4ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi50aXRsZS1zdGVwIHtcbiAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRThFOEU4O1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi5jb250ZW50IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBjb2xvcjogIzUwNTA1MDtcbn1cblxuLmxhYmVsLW5vLXRyYW5zcG9ydCB7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM1MDUwNTA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5hbGVydC10cmFuc3BvcnQge1xuICBjb2xvcjogI2QzOWUwMDtcbn1cblxuLnRpdGxlLWNhcmQtTm90aWZpY2F0aW9uIHtcbiAgY29sb3I6ICNFQzJDMkM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmljV2FybmluZyB7XG4gIGNvbG9yOiBnb2xkO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbmhyIHtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/scheduling/detail/detail.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/scheduling/detail/detail.component.ts ***!
    \*******************************************************/

  /*! exports provided: DetailComponent */

  /***/
  function srcAppSchedulingDetailDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailComponent", function () {
      return DetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _model_scheduling_save_app_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../model/scheduling-save-app-dto */
    "./src/app/scheduling/model/scheduling-save-app-dto.ts");
    /* harmony import */


    var src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/core/util/loading */
    "./src/app/core/util/loading.ts");

    var DetailComponent = /*#__PURE__*/function () {
      function DetailComponent(routeSub, router, alertController, requestService, builder, toastController, loadingController) {
        _classCallCheck(this, DetailComponent);

        this.routeSub = routeSub;
        this.router = router;
        this.alertController = alertController;
        this.requestService = requestService;
        this.builder = builder;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.scheduling = {};
        this.mockTransport = null;
        this.stepCard = [{
          id: 1,
          name: 'Confirmar agendamento?'
        }, {
          id: 2,
          name: 'Precisa de transporte?'
        }, {
          id: 3,
          name: 'Portador de Necessidades Especiais?'
        }, {
          id: 4,
          name: 'Levará acompanhante?'
        }];
        this.stepCardNoTransport = [{
          id: 1,
          name: 'Portador de Necessidades Especiais?'
        }, {
          id: 2,
          name: 'Levará acompanhante?'
        }];
        this.stepActual = 1;
      }

      _createClass(DetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCard();
          this.createForm();
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee129() {
            return _regeneratorRuntime().wrap(function _callee129$(_context129) {
              while (1) switch (_context129.prev = _context129.next) {
                case 0:
                  _context129.next = 2;
                  return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_8__["LoadingOn"])(this.loadingController);

                case 2:
                case "end":
                  return _context129.stop();
              }
            }, _callee129, this);
          }));
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.formScheduling = this.builder.group({
            needTransport: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            isSpecial: [null],
            companion: [null],
            transport: [null]
          });
        }
      }, {
        key: "getTransport",
        value: function getTransport() {
          var _this69 = this;

          this.routeSub.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
              var transp = JSON.parse(localStorage.getItem('transport'));

              if (transp != null) {
                var check = transp.id === params['id'];
                if (check) _this69.mockTransport = transp;else _this69.mockTransport = null;
              } else _this69.mockTransport = null;
            }
          });
        }
      }, {
        key: "presentAlertCancelConsulting",
        value: function presentAlertCancelConsulting() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee130() {
            var _this70 = this;

            var alert;
            return _regeneratorRuntime().wrap(function _callee130$(_context130) {
              while (1) switch (_context130.prev = _context130.next) {
                case 0:
                  _context130.next = 2;
                  return this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Cancelar consulta',
                    message: 'Você tem certeza que deseja cancelar? ',
                    buttons: [{
                      text: 'Sim',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: function handler(blah) {
                        _this70.routeSub.params.subscribe(function (params) {
                          _this70.router.navigate(['cancel/', params['id']]);
                        });
                      }
                    }, {
                      text: 'Não',
                      handler: function handler() {
                        console.log('Confirm Okay');
                      }
                    }]
                  });

                case 2:
                  alert = _context130.sent;
                  _context130.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context130.stop();
              }
            }, _callee130, this);
          }));
        }
      }, {
        key: "getCard",
        value: function getCard() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee133() {
            var _this71 = this;

            return _regeneratorRuntime().wrap(function _callee133$(_context133) {
              while (1) switch (_context133.prev = _context133.next) {
                case 0:
                  _context133.next = 2;
                  return this.presentLoading();

                case 2:
                  this.routeSub.params.subscribe(function (params) {
                    if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(params['id'])) {
                      _this71.requestService.get('scheduling/getSchedulingAppById?idScheduling=' + Number(params['id'])).subscribe(function (result) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this71, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee131() {
                          return _regeneratorRuntime().wrap(function _callee131$(_context131) {
                            while (1) switch (_context131.prev = _context131.next) {
                              case 0:
                                this.scheduling = result;
                                _context131.next = 3;
                                return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_8__["LoadingOnDidDismiss"])(this.loadingController);

                              case 3:
                              case "end":
                                return _context131.stop();
                            }
                          }, _callee131, this);
                        }));
                      }, function (err) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this71, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee132() {
                          return _regeneratorRuntime().wrap(function _callee132$(_context132) {
                            while (1) switch (_context132.prev = _context132.next) {
                              case 0:
                                _context132.next = 2;
                                return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_8__["LoadingOnDidDismiss"])(this.loadingController);

                              case 2:
                                console.error(err);

                              case 3:
                              case "end":
                                return _context132.stop();
                            }
                          }, _callee132, this);
                        }));
                      });
                    }
                  });

                case 3:
                case "end":
                  return _context133.stop();
              }
            }, _callee133, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee134() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee134$(_context134) {
              while (1) switch (_context134.prev = _context134.next) {
                case 0:
                  _context134.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 2000,
                    color: type
                  });

                case 2:
                  toast = _context134.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context134.stop();
              }
            }, _callee134, this);
          }));
        }
      }, {
        key: "propulateForm",
        value: function propulateForm(step, change) {
          switch (step) {
            case 3:
              this.formScheduling.controls.needTransport.setValue(change);

              if (!change) {
                this.sendForm();
              }

              break;

            case 4:
              this.formScheduling.controls.isSpecial.setValue(change);
              break;

            case 5:
              this.formScheduling.controls.companion.setValue(change);
              break;
          }
        }
      }, {
        key: "populateObj",
        value: function populateObj() {
          var obj = new _model_scheduling_save_app_dto__WEBPACK_IMPORTED_MODULE_7__["SchedulingSaveAppDto"]();
          obj.needTransport = this.formScheduling.controls.needTransport.value;
          obj.isSpecial = this.formScheduling.controls.isSpecial.value;
          obj.companion = this.formScheduling.controls.companion.value;
          obj.idScheduling = this.scheduling.id;
          obj.idTransport = this.formScheduling.controls.transport.value;
          return obj;
        }
      }, {
        key: "sendForm",
        value: function sendForm() {
          var _this72 = this;

          this.presentLoading();
          this.requestService.post('Scheduling/confirmSchedulingApp', JSON.stringify(this.populateObj())).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this72, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee135() {
              return _regeneratorRuntime().wrap(function _callee135$(_context135) {
                while (1) switch (_context135.prev = _context135.next) {
                  case 0:
                    if (!res) {
                      _context135.next = 5;
                      break;
                    }

                    _context135.next = 3;
                    return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_8__["LoadingOnDidDismiss"])(this.loadingController);

                  case 3:
                    this.presentToast('Agendamento confirmado com sucesso', 'success');
                    window.location.href = 'list';

                  case 5:
                  case "end":
                    return _context135.stop();
                }
              }, _callee135, this);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this72, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee136() {
              return _regeneratorRuntime().wrap(function _callee136$(_context136) {
                while (1) switch (_context136.prev = _context136.next) {
                  case 0:
                    _context136.next = 2;
                    return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_8__["LoadingOnDidDismiss"])(this.loadingController);

                  case 2:
                    this.presentToast('Houve um erro ao tentar confirmar o agendamento', 'danger');

                  case 3:
                  case "end":
                    return _context136.stop();
                }
              }, _callee136, this);
            }));
          });
        }
      }, {
        key: "navigateStep",
        value: function navigateStep(step, no, change) {
          var _this73 = this;

          if (!no) {
            this.propulateForm(step, change);

            if (step === 0) {
              this.stepActual = 1;
            } else if (step === 5) {
              this.routeSub.params.subscribe(function (params) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(params['id'])) {
                  localStorage.setItem('detail-scheduling', JSON.stringify(_this73.populateObj()));
                  location.href = 'transport/' + params['id'] + '/' + _this73.formScheduling.controls.isSpecial.value;
                }
              });
            } else {
              this.stepActual = step;
            }
          } else {
            if (this.stepActual === 1) {
              this.presentAlertCancelConsulting();
            }

            if (this.stepActual === 2) {
              this.formScheduling.controls.needTransport.setValue(false);
              this.sendForm();
            }

            if (this.stepActual === 4) {
              this.routeSub.params.subscribe(function (params) {
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(params['id'])) {
                  localStorage.setItem('detail-scheduling', JSON.stringify(_this73.populateObj()));
                  location.href = 'transport/' + params['id'] + '/' + _this73.formScheduling.controls.isSpecial.value;
                }
              });
            }

            if (this.stepActual === 3) {
              this.stepActual = 4;
            }
          }
        }
      }, {
        key: "requestTransport",
        value: function requestTransport() {
          this.formScheduling.controls.needTransport.setValue(true);
          this.navigateStep(3, false, true);
        }
      }, {
        key: "cancelTransportAlert",
        value: function cancelTransportAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee137() {
            var _this74 = this;

            var alert;
            return _regeneratorRuntime().wrap(function _callee137$(_context137) {
              while (1) switch (_context137.prev = _context137.next) {
                case 0:
                  _context137.next = 2;
                  return this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Cancelar transporte',
                    message: 'Você tem certeza que deseja cancelar o transporte? ',
                    buttons: [{
                      text: 'Sim',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: function handler(blah) {
                        _this74.cancelTransport();
                      }
                    }, {
                      text: 'Não',
                      handler: function handler() {
                        console.log('Confirm Okay');
                      }
                    }]
                  });

                case 2:
                  alert = _context137.sent;
                  _context137.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context137.stop();
              }
            }, _callee137, this);
          }));
        }
      }, {
        key: "cancelTransport",
        value: function cancelTransport() {
          var _this75 = this;

          var obj = new _model_scheduling_save_app_dto__WEBPACK_IMPORTED_MODULE_7__["SchedulingSaveAppDto"]();
          obj.needTransport = false;
          obj.isSpecial = false;
          obj.companion = false;
          obj.idScheduling = this.scheduling.id;
          obj.idTransport = null;
          this.presentLoading();
          this.requestService.post('Scheduling/confirmSchedulingApp', JSON.stringify(obj)).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this75, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee138() {
              return _regeneratorRuntime().wrap(function _callee138$(_context138) {
                while (1) switch (_context138.prev = _context138.next) {
                  case 0:
                    if (!res) {
                      _context138.next = 5;
                      break;
                    }

                    _context138.next = 3;
                    return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_8__["LoadingOnDidDismiss"])(this.loadingController);

                  case 3:
                    this.presentToast('Transporte cancelado com sucesso', 'success');
                    this.getCard();

                  case 5:
                  case "end":
                    return _context138.stop();
                }
              }, _callee138, this);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this75, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee139() {
              return _regeneratorRuntime().wrap(function _callee139$(_context139) {
                while (1) switch (_context139.prev = _context139.next) {
                  case 0:
                    _context139.next = 2;
                    return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_8__["LoadingOnDidDismiss"])(this.loadingController);

                  case 2:
                    this.presentToast('Houve um error ao tentar de cancelar o transporte do agendamento', 'danger');

                  case 3:
                  case "end":
                    return _context139.stop();
                }
              }, _callee139, this);
            }));
          });
        }
      }, {
        key: "backDash",
        value: function backDash() {
          this.router.navigate(['/list']);
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(file) {
          var url = this.requestService.downloadFile(file.id, file.fileName);
          window.open(url);
        }
      }]);

      return DetailComponent;
    }();

    DetailComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_5__["RequestService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }];
    };

    DetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/detail/detail.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./detail.component.scss */
      "./src/app/scheduling/detail/detail.component.scss"))["default"]]
    })], DetailComponent);
    /***/
  },

  /***/
  "./src/app/scheduling/detail/transport/transport.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/scheduling/detail/transport/transport.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSchedulingDetailTransportTransportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  font-family: \"Baloo 2\", cursive;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 31px;\n  color: #54B488;\n}\n\n.content {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 28px;\n  color: #505050;\n}\n\n.subtitle {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  color: #9D9D9D;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.noneholder {\n  height: 75px;\n  line-height: 62px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvc2NoZWR1bGluZy9kZXRhaWwvdHJhbnNwb3J0L3RyYW5zcG9ydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NoZWR1bGluZy9kZXRhaWwvdHJhbnNwb3J0L3RyYW5zcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zY2hlZHVsaW5nL2RldGFpbC90cmFuc3BvcnQvdHJhbnNwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBmb250LWZhbWlseTogJ0JhbG9vIDInLCBjdXJzaXZlO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogMzFweDtcbiAgICBjb2xvcjogIzU0QjQ4ODtcbn1cblxuLmNvbnRlbnQge1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICBjb2xvcjogIzUwNTA1MDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICM5RDlEOUQ7XG4gICAgZm9udC1mYW1pbHk6ICdCYWxvbyAyJywgY3Vyc2l2ZTtcbn1cblxuLm5vbmVob2xkZXIge1xuICAgIGhlaWdodDogNzVweDtcbiAgICBsaW5lLWhlaWdodDogNjJweDtcbn0iLCIudGl0bGUge1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzFweDtcbiAgY29sb3I6ICM1NEI0ODg7XG59XG5cbi5jb250ZW50IHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBjb2xvcjogIzUwNTA1MDtcbn1cblxuLnN1YnRpdGxlIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjOUQ5RDlEO1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi5ub25laG9sZGVyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBsaW5lLWhlaWdodDogNjJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/scheduling/detail/transport/transport.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/scheduling/detail/transport/transport.component.ts ***!
    \********************************************************************/

  /*! exports provided: TransportComponent */

  /***/
  function srcAppSchedulingDetailTransportTransportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransportComponent", function () {
      return TransportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _model_scheduling_save_app_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../model/scheduling-save-app-dto */
    "./src/app/scheduling/model/scheduling-save-app-dto.ts");
    /* harmony import */


    var src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/util/loading */
    "./src/app/core/util/loading.ts");

    var TransportComponent = /*#__PURE__*/function () {
      function TransportComponent(routeSub, requestService, toastController, loadingController, alertController) {
        _classCallCheck(this, TransportComponent);

        this.routeSub = routeSub;
        this.requestService = requestService;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.transport = [];
        this.user = JSON.parse(localStorage.getItem('user'));
        this.isSpecial = false;
      }

      _createClass(TransportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this76 = this;

          this.routeSub.params.subscribe(function (params) {
            if (params['id'] !== null && params['id'] !== undefined) {
              _this76.id = params['id'];
            }

            if (params['isSpecial'] !== null && params['isSpecial'] !== undefined) {
              _this76.isSpecial = params['isSpecial'];
            }
          });
          this.getTransport();
        }
      }, {
        key: "getTransport",
        value: function getTransport() {
          var _this77 = this;

          this.requestService.get('transport/GetTransportByPatientCity?cpfUser=' + this.user.cpf.replace(".", "").replace(".", "").replace("-", "") + '&schedulingId=' + this.id + "&IsSpecial=" + this.isSpecial).subscribe(function (result) {
            _this77.transport = result;
          }, function (err) {
            console.error(err);
          });
        }
      }, {
        key: "select",
        value: function select(item) {
          this.presentAlert(item);
        }
      }, {
        key: "noTransport",
        value: function noTransport() {
          location.href = 'detail/' + this.id;
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee140() {
            return _regeneratorRuntime().wrap(function _callee140$(_context140) {
              while (1) switch (_context140.prev = _context140.next) {
                case 0:
                  _context140.next = 2;
                  return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_6__["LoadingOn"])(this.loadingController);

                case 2:
                case "end":
                  return _context140.stop();
              }
            }, _callee140, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast(title, type) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee141() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee141$(_context141) {
              while (1) switch (_context141.prev = _context141.next) {
                case 0:
                  _context141.next = 2;
                  return this.toastController.create({
                    message: title,
                    duration: 3000,
                    color: type
                  });

                case 2:
                  toast = _context141.sent;
                  _context141.next = 5;
                  return toast.present();

                case 5:
                case "end":
                  return _context141.stop();
              }
            }, _callee141, this);
          }));
        }
      }, {
        key: "presentAlert",
        value: function presentAlert(item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee142() {
            var _this78 = this;

            var alert;
            return _regeneratorRuntime().wrap(function _callee142$(_context142) {
              while (1) switch (_context142.prev = _context142.next) {
                case 0:
                  _context142.next = 2;
                  return this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Aviso',
                    message: 'O transporte pode ser alterado devido a disponibilidade da prefeitura.',
                    buttons: [{
                      text: 'OK',
                      handler: function handler() {
                        _this78.sendForm(_this78.populateObj(item.id, true));
                      }
                    }]
                  });

                case 2:
                  alert = _context142.sent;
                  _context142.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context142.stop();
              }
            }, _callee142, this);
          }));
        }
      }, {
        key: "populateObj",
        value: function populateObj(idTransport, haveTransport) {
          var obj = new _model_scheduling_save_app_dto__WEBPACK_IMPORTED_MODULE_5__["SchedulingSaveAppDto"]();
          obj.needTransport = JSON.parse(localStorage.getItem('detail-scheduling')).needTransport;
          obj.isSpecial = JSON.parse(localStorage.getItem('detail-scheduling')).isSpecial;
          obj.companion = JSON.parse(localStorage.getItem('detail-scheduling')).companion;
          obj.idScheduling = JSON.parse(localStorage.getItem('detail-scheduling')).idScheduling;
          obj.idTransport = haveTransport === true ? idTransport : null;
          return obj;
        }
      }, {
        key: "sendForm",
        value: function sendForm(obj) {
          var _this79 = this;

          this.presentLoading();
          this.requestService.post('Scheduling/confirmSchedulingApp', JSON.stringify(obj)).subscribe(function (res) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this79, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee143() {
              return _regeneratorRuntime().wrap(function _callee143$(_context143) {
                while (1) switch (_context143.prev = _context143.next) {
                  case 0:
                    if (!res) {
                      _context143.next = 5;
                      break;
                    }

                    _context143.next = 3;
                    return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_6__["LoadingOnDidDismiss"])(this.loadingController);

                  case 3:
                    this.presentToast('Agendamento confirmado com sucesso', 'success');
                    setTimeout(function () {
                      location.href = 'list';
                    }, 2000);

                  case 5:
                  case "end":
                    return _context143.stop();
                }
              }, _callee143, this);
            }));
          }, function (err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this79, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee144() {
              return _regeneratorRuntime().wrap(function _callee144$(_context144) {
                while (1) switch (_context144.prev = _context144.next) {
                  case 0:
                    _context144.next = 2;
                    return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_6__["LoadingOnDidDismiss"])(this.loadingController);

                  case 2:
                    this.presentToast('Houve um erro ao tentar confirmar o transporte', 'danger');

                  case 3:
                  case "end":
                    return _context144.stop();
                }
              }, _callee144, this);
            }));
          });
        }
      }, {
        key: "confirmWithoutTransport",
        value: function confirmWithoutTransport() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee145() {
            return _regeneratorRuntime().wrap(function _callee145$(_context145) {
              while (1) switch (_context145.prev = _context145.next) {
                case 0:
                  this.sendForm(this.populateObj(0, false));

                case 1:
                case "end":
                  return _context145.stop();
              }
            }, _callee145, this);
          }));
        }
      }]);

      return TransportComponent;
    }();

    TransportComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_3__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TransportComponent.prototype, "form", void 0);
    TransportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transport',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./transport.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/detail/transport/transport.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./transport.component.scss */
      "./src/app/scheduling/detail/transport/transport.component.scss"))["default"]]
    })], TransportComponent);
    /***/
  },

  /***/
  "./src/app/scheduling/list/list.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/scheduling/list/list.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSchedulingListListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  color: #4d4d4d;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.card-subtitle {\n  background: #c9c9c9;\n  border-radius: 3px;\n  height: 19px;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  color: #ffffff;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.status {\n  position: absolute;\n  width: 22px;\n  height: 100%;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px 0px 0px 5px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.await-confirm {\n  background: #ff993c;\n}\n\n.peding-evaluation {\n  background: #ffe24b;\n}\n\n.canceled {\n  background: #f55555;\n}\n\n.not-met {\n  background: #ec2c2c;\n}\n\n.confirmation {\n  background: #406aef;\n}\n\n.present {\n  background: #54b488;\n}\n\n.complete {\n  background: #54b488;\n}\n\n.title-card {\n  color: #54b488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.card {\n  background: #ffffff;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  font-family: \"Baloo 2\", cursive;\n  color: #656565;\n}\n\n.title {\n  color: #54b488;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 14px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.filter {\n  background: #ffffff;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 3px;\n  height: 45px;\n  line-height: 45px;\n}\n\n.filter-text {\n  color: #54b488;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n  font-family: \"Baloo 2\", cursive;\n}\n\n.filter-icon {\n  font-size: 1.5rem;\n  margin-top: 0.6rem;\n}\n\n.noneholder {\n  height: 75px;\n  line-height: 62px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdW5pb3ItY3JlZmlzYS9Eb2N1bWVudHMvUGVzc29hbC9wcm9qZXRvcy9zYXVkZXRlY2hhbWEtYXBwL3NyYy9hcHAvc2NoZWR1bGluZy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NjaGVkdWxpbmcvbGlzdC9saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zY2hlZHVsaW5nL2xpc3QvbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjNGQ0ZDRkO1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICAgIGJhY2tncm91bmQ6ICNjOWM5Yzk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogMTlweDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uc3RhdHVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmF3YWl0LWNvbmZpcm0ge1xuICAgIGJhY2tncm91bmQ6ICNmZjk5M2M7XG59XG5cbi5wZWRpbmctZXZhbHVhdGlvbiB7XG4gICAgYmFja2dyb3VuZDogI2ZmZTI0Yjtcbn1cblxuLmNhbmNlbGVkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjU1NTU1O1xufVxuXG4ubm90LW1ldCB7XG4gICAgYmFja2dyb3VuZDogI2VjMmMyYztcbn1cblxuLmNvbmZpcm1hdGlvbiB7XG4gICAgYmFja2dyb3VuZDogIzQwNmFlZjtcbn1cblxuLnByZXNlbnQge1xuICAgIGJhY2tncm91bmQ6ICM1NGI0ODg7XG59XG5cbi5jb21wbGV0ZSB7XG4gICAgYmFja2dyb3VuZDogIzU0YjQ4ODtcbn1cblxuLnRpdGxlLWNhcmQge1xuICAgIGNvbG9yOiAjNTRiNDg4O1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi5jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgICBjb2xvcjogIzY1NjU2NTtcbn1cblxuLnRpdGxlIHtcbiAgICBjb2xvcjogIzU0YjQ4ODtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uZmlsdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBsaW5lLWhlaWdodDogNDVweDtcbn1cblxuLmZpbHRlci10ZXh0IHtcbiAgICBjb2xvcjogIzU0YjQ4ODtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmZpbHRlci1pY29uIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjZyZW07XG59XG5cbi5ub25laG9sZGVyIHtcbiAgICBoZWlnaHQ6IDc1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDYycHg7XG59XG4iLCIudGl0bGUge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICBiYWNrZ3JvdW5kOiAjYzljOWM5O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGhlaWdodDogMTlweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi5zdGF0dXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uYXdhaXQtY29uZmlybSB7XG4gIGJhY2tncm91bmQ6ICNmZjk5M2M7XG59XG5cbi5wZWRpbmctZXZhbHVhdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmUyNGI7XG59XG5cbi5jYW5jZWxlZCB7XG4gIGJhY2tncm91bmQ6ICNmNTU1NTU7XG59XG5cbi5ub3QtbWV0IHtcbiAgYmFja2dyb3VuZDogI2VjMmMyYztcbn1cblxuLmNvbmZpcm1hdGlvbiB7XG4gIGJhY2tncm91bmQ6ICM0MDZhZWY7XG59XG5cbi5wcmVzZW50IHtcbiAgYmFja2dyb3VuZDogIzU0YjQ4ODtcbn1cblxuLmNvbXBsZXRlIHtcbiAgYmFja2dyb3VuZDogIzU0YjQ4ODtcbn1cblxuLnRpdGxlLWNhcmQge1xuICBjb2xvcjogIzU0YjQ4ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbn1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkJhbG9vIDJcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiAjNTRiNDg4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xufVxuXG4uZmlsdGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xufVxuXG4uZmlsdGVyLXRleHQge1xuICBjb2xvcjogIzU0YjQ4ODtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogXCJCYWxvbyAyXCIsIGN1cnNpdmU7XG59XG5cbi5maWx0ZXItaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAwLjZyZW07XG59XG5cbi5ub25laG9sZGVyIHtcbiAgaGVpZ2h0OiA3NXB4O1xuICBsaW5lLWhlaWdodDogNjJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/scheduling/list/list.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/scheduling/list/list.component.ts ***!
    \***************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppSchedulingListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! lodash */
    "./node_modules/lodash/lodash.js");
    /* harmony import */


    var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_components_filter_date_modal_filter_date_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/filter-date-modal/filter-date-modal.component */
    "./src/app/components/filter-date-modal/filter-date-modal.component.ts");
    /* harmony import */


    var src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/request-help/request-service */
    "./src/app/core/request-help/request-service.ts");
    /* harmony import */


    var src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/util/loading */
    "./src/app/core/util/loading.ts");
    /* harmony import */


    var _model_scheduling_status_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../model/scheduling-status-enum */
    "./src/app/scheduling/model/scheduling-status-enum.ts");

    var ListComponent =
    /*#__PURE__*/

    /**
     * Representa a listagem de agendamentos do usuário.
     * @constructor
     */
    function () {
      function ListComponent(router, serviceHelp, loadingController, modalController) {
        _classCallCheck(this, ListComponent);

        this.router = router;
        this.serviceHelp = serviceHelp;
        this.loadingController = loadingController;
        this.modalController = modalController;
        this.modAgent = null;
        this.user = JSON.parse(localStorage.getItem("user"));
        this.dependenteHolder = localStorage.getItem("dependenteHolder");
        this.schedulingList = [];
        this.schedulingListAux = [];
        this.isFilterActive = false;
      }

      _createClass(ListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee146() {
            return _regeneratorRuntime().wrap(function _callee146$(_context146) {
              while (1) switch (_context146.prev = _context146.next) {
                case 0:
                  _context146.next = 2;
                  return this.checkModAgent();

                case 2:
                  _context146.next = 4;
                  return this.getScheduling();

                case 4:
                case "end":
                  return _context146.stop();
              }
            }, _callee146, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee147() {
            return _regeneratorRuntime().wrap(function _callee147$(_context147) {
              while (1) switch (_context147.prev = _context147.next) {
                case 0:
                  _context147.next = 2;
                  return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOn"])(this.loadingController);

                case 2:
                case "end":
                  return _context147.stop();
              }
            }, _callee147, this);
          }));
        }
      }, {
        key: "getScheduling",
        value: function getScheduling() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee149() {
            var _this80 = this;

            var cpf;
            return _regeneratorRuntime().wrap(function _callee149$(_context149) {
              while (1) switch (_context149.prev = _context149.next) {
                case 0:
                  _context149.next = 2;
                  return this.presentLoading();

                case 2:
                  cpf = "";

                  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(this.dependenteHolder)) {
                    cpf = JSON.parse(this.dependenteHolder).patient.cpf.replace(".", "").replace(".", "").replace("-", "");
                  } else {
                    cpf = this.user.cpf.replace(".", "").replace(".", "").replace("-", "");
                  }

                  this.serviceHelp.get("scheduling/getListSchedulingByUser?cpfUser=" + cpf).subscribe(function (node) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this80, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee148() {
                      return _regeneratorRuntime().wrap(function _callee148$(_context148) {
                        while (1) switch (_context148.prev = _context148.next) {
                          case 0:
                            this.ajustNameCard(node);
                            _context148.next = 3;
                            return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(this.loadingController);

                          case 3:
                          case "end":
                            return _context148.stop();
                        }
                      }, _callee148, this);
                    }));
                  }, function (err) {
                    console.error(err);
                  });

                case 5:
                case "end":
                  return _context149.stop();
              }
            }, _callee149, this);
          }));
        }
      }, {
        key: "checkModAgent",
        value: function checkModAgent() {
          if (this.modAgent == null) {
            this.modAgent = JSON.parse(localStorage.getItem("user-agent"));
          } else {
            this.modAgent = null;
          }
        }
      }, {
        key: "backDash",
        value: function backDash() {
          localStorage.removeItem("dependenteHolder");

          if (this.modAgent !== null) {
            localStorage.removeItem("user-agent");
            this.router.navigate(["list-user"]);
          } else {
            localStorage.removeItem("user-agent");
            this.router.navigate(["/"]);
          }
        }
      }, {
        key: "detailOrQuiz",
        value: function detailOrQuiz(item) {
          var statusCode = Number(_model_scheduling_status_enum__WEBPACK_IMPORTED_MODULE_8__["SchedulingStatus"][item.nameStatus]);

          if (statusCode !== 2) {
            this.router.navigate(["/detail/", item.id]);
          } else {
            this.router.navigate(["/question-scheduling/", item.id]);
          }
        }
      }, {
        key: "ajustNameCard",
        value: function ajustNameCard(list) {
          list.forEach(function (element) {
            element.card.forEach(function (card) {
              var statusCode = Number(_model_scheduling_status_enum__WEBPACK_IMPORTED_MODULE_8__["SchedulingStatus"][card.nameStatus]);

              switch (statusCode) {
                case 2:
                  card.nameStatus = "PENDENTE DE AVALIAÇÃO";
                  break;
              }
            });
          });
          this.schedulingList = list;
          this.schedulingListAux = list;
        }
        /**
          * @author Gustavo Teles
          * @returns
          * Método responsável por abrir o modal
          * de filtros disponíveis
          */

      }, {
        key: "presentModal",
        value: function presentModal() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee151() {
            var _this81 = this;

            var modal;
            return _regeneratorRuntime().wrap(function _callee151$(_context151) {
              while (1) switch (_context151.prev = _context151.next) {
                case 0:
                  _context151.next = 2;
                  return this.modalController.create({
                    component: src_app_components_filter_date_modal_filter_date_modal_component__WEBPACK_IMPORTED_MODULE_5__["FilterDateModalComponent"],
                    cssClass: 'my-custom-class'
                  });

                case 2:
                  modal = _context151.sent;
                  modal.onDidDismiss().then(function (data) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this81, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee150() {
                      var resultFilter;
                      return _regeneratorRuntime().wrap(function _callee150$(_context150) {
                        while (1) switch (_context150.prev = _context150.next) {
                          case 0:
                            resultFilter = data['data'];

                            if (!(resultFilter.data !== undefined && resultFilter.data !== null)) {
                              _context150.next = 12;
                              break;
                            }

                            if (!(resultFilter.data.startDate !== undefined && resultFilter.data.startDate !== null && resultFilter.data.endDate !== undefined && resultFilter.data.endDate !== null)) {
                              _context150.next = 8;
                              break;
                            }

                            this.isFilterActive = true;
                            _context150.next = 6;
                            return this.executeFilter(resultFilter.data.startDate, resultFilter.data.endDate);

                          case 6:
                            _context150.next = 10;
                            break;

                          case 8:
                            this.isFilterActive = false;
                            this.schedulingList = this.schedulingListAux;

                          case 10:
                            _context150.next = 14;
                            break;

                          case 12:
                            this.isFilterActive = false;
                            this.schedulingList = this.schedulingListAux;

                          case 14:
                          case "end":
                            return _context150.stop();
                        }
                      }, _callee150, this);
                    }));
                  });
                  localStorage.setItem('typeFilter', 'schedulingList');
                  _context151.next = 7;
                  return modal.present();

                case 7:
                  return _context151.abrupt("return", _context151.sent);

                case 8:
                case "end":
                  return _context151.stop();
              }
            }, _callee151, this);
          }));
        }
        /**
         * @author Gustavo Teles
         * @param nome
         * Método que executa o filtro informado
         */

      }, {
        key: "executeFilter",
        value: function executeFilter(startDate, endDate) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee153() {
            var _this82 = this;

            var startDateInformado, endDateInformado, cpf;
            return _regeneratorRuntime().wrap(function _callee153$(_context153) {
              while (1) switch (_context153.prev = _context153.next) {
                case 0:
                  _context153.next = 2;
                  return this.presentLoading();

                case 2:
                  startDateInformado = startDate.substring(0, startDate.indexOf("T"));
                  endDateInformado = endDate.substring(0, endDate.indexOf("T"));
                  cpf = "";

                  if (!Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isNil"])(this.dependenteHolder)) {
                    cpf = JSON.parse(this.dependenteHolder).patient.cpf.replace(".", "").replace(".", "").replace("-", "");
                  } else {
                    cpf = this.user.cpf.replace(".", "").replace(".", "").replace("-", "");
                  }

                  this.serviceHelp.get("scheduling/getListSchedulingByUser?cpfUser=" + cpf + "&startDate=" + startDateInformado + "&endDate=" + endDateInformado).subscribe(function (node) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this82, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee152() {
                      return _regeneratorRuntime().wrap(function _callee152$(_context152) {
                        while (1) switch (_context152.prev = _context152.next) {
                          case 0:
                            this.ajustNameCard(node);
                            _context152.next = 3;
                            return Object(src_app_core_util_loading__WEBPACK_IMPORTED_MODULE_7__["LoadingOnDidDismiss"])(this.loadingController);

                          case 3:
                          case "end":
                            return _context152.stop();
                        }
                      }, _callee152, this);
                    }));
                  }, function (err) {
                    console.error(err);
                  });

                case 7:
                case "end":
                  return _context153.stop();
              }
            }, _callee153, this);
          }));
        }
      }]);

      return ListComponent;
    }();

    ListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_core_request_help_request_service__WEBPACK_IMPORTED_MODULE_6__["RequestService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }];
    };

    ListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-list",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scheduling/list/list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list.component.scss */
      "./src/app/scheduling/list/list.component.scss"))["default"]]
    })
    /**
     * Representa a listagem de agendamentos do usuário.
     * @constructor
     */
    ], ListComponent);
    /***/
  },

  /***/
  "./src/app/scheduling/model/scheduling-save-app-dto.ts":
  /*!*************************************************************!*\
    !*** ./src/app/scheduling/model/scheduling-save-app-dto.ts ***!
    \*************************************************************/

  /*! exports provided: SchedulingSaveAppDto */

  /***/
  function srcAppSchedulingModelSchedulingSaveAppDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulingSaveAppDto", function () {
      return SchedulingSaveAppDto;
    });

    var SchedulingSaveAppDto = /*#__PURE__*/_createClass(function SchedulingSaveAppDto() {
      _classCallCheck(this, SchedulingSaveAppDto);
    });
    /***/

  },

  /***/
  "./src/app/scheduling/model/scheduling-status-enum.ts":
  /*!************************************************************!*\
    !*** ./src/app/scheduling/model/scheduling-status-enum.ts ***!
    \************************************************************/

  /*! exports provided: SchedulingStatus */

  /***/
  function srcAppSchedulingModelSchedulingStatusEnumTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulingStatus", function () {
      return SchedulingStatus;
    });

    var SchedulingStatus;

    (function (SchedulingStatus) {
      SchedulingStatus[SchedulingStatus["PENDENTE DE AVALIA\xC7\xC3O"] = 2] = "PENDENTE DE AVALIA\xC7\xC3O";
      SchedulingStatus[SchedulingStatus["ATENDIDO"] = 2] = "ATENDIDO";
    })(SchedulingStatus || (SchedulingStatus = {}));
    /***/

  },

  /***/
  "./src/app/scheduling/scheduling-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/scheduling/scheduling-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SchedulingRoutingModule */

  /***/
  function srcAppSchedulingSchedulingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulingRoutingModule", function () {
      return SchedulingRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/scheduling/list/list.component.ts");
    /* harmony import */


    var _core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../core/auth/auth.guard */
    "./src/app/core/auth/auth.guard.ts");
    /* harmony import */


    var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail/detail.component */
    "./src/app/scheduling/detail/detail.component.ts");
    /* harmony import */


    var _cancel_cancel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cancel/cancel.component */
    "./src/app/scheduling/cancel/cancel.component.ts");
    /* harmony import */


    var _detail_transport_transport_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./detail/transport/transport.component */
    "./src/app/scheduling/detail/transport/transport.component.ts");

    var routes = [{
      path: 'list',
      component: _list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'detail/:id',
      component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'cancel/:id',
      component: _cancel_cancel_component__WEBPACK_IMPORTED_MODULE_6__["CancelComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }, {
      path: 'transport/:id/:isSpecial',
      component: _detail_transport_transport_component__WEBPACK_IMPORTED_MODULE_7__["TransportComponent"],
      canActivate: [_core_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    }];

    var SchedulingRoutingModule = /*#__PURE__*/_createClass(function SchedulingRoutingModule() {
      _classCallCheck(this, SchedulingRoutingModule);
    });

    SchedulingRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SchedulingRoutingModule);
    /***/
  },

  /***/
  "./src/app/scheduling/scheduling.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/scheduling/scheduling.module.ts ***!
    \*************************************************/

  /*! exports provided: SchedulingModule */

  /***/
  function srcAppSchedulingSchedulingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SchedulingModule", function () {
      return SchedulingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _scheduling_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./scheduling-routing.module */
    "./src/app/scheduling/scheduling-routing.module.ts");
    /* harmony import */


    var _list_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list/list.component */
    "./src/app/scheduling/list/list.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail/detail.component */
    "./src/app/scheduling/detail/detail.component.ts");
    /* harmony import */


    var _cancel_cancel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cancel/cancel.component */
    "./src/app/scheduling/cancel/cancel.component.ts");
    /* harmony import */


    var _cancel_modal_cancel_modal_cancel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cancel/modal-cancel/modal-cancel.component */
    "./src/app/scheduling/cancel/modal-cancel/modal-cancel.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _detail_transport_transport_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./detail/transport/transport.component */
    "./src/app/scheduling/detail/transport/transport.component.ts");
    /* harmony import */


    var _components_filter_date_modal_filter_date_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../components/filter-date-modal/filter-date-modal.component */
    "./src/app/components/filter-date-modal/filter-date-modal.component.ts");

    var SchedulingModule = /*#__PURE__*/_createClass(function SchedulingModule() {
      _classCallCheck(this, SchedulingModule);
    });

    SchedulingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_4__["ListComponent"], _detail_detail_component__WEBPACK_IMPORTED_MODULE_6__["DetailComponent"], _cancel_cancel_component__WEBPACK_IMPORTED_MODULE_7__["CancelComponent"], _cancel_modal_cancel_modal_cancel_component__WEBPACK_IMPORTED_MODULE_8__["ModalCancelComponent"], _detail_transport_transport_component__WEBPACK_IMPORTED_MODULE_10__["TransportComponent"], _components_filter_date_modal_filter_date_modal_component__WEBPACK_IMPORTED_MODULE_11__["FilterDateModalComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _scheduling_routing_module__WEBPACK_IMPORTED_MODULE_3__["SchedulingRoutingModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]]
    })], SchedulingModule);
    /***/
  },

  /***/
  "./src/app/service/fcm/fcm.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/fcm/fcm.service.ts ***!
    \********************************************/

  /*! exports provided: FcmService */

  /***/
  function srcAppServiceFcmFcmServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FcmService", function () {
      return FcmService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/firebase-messaging/ngx */
    "./node_modules/@ionic-native/firebase-messaging/ngx/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/fesm2015/http.js");
    /* harmony import */


    var _firebase_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../firebase/firebase.service */
    "./src/app/service/firebase/firebase.service.ts");
    /**
     * Classe responsável pela manutenção e exibição das notificações push
     * @author Gustavo Teles
     */


    var FcmService = /*#__PURE__*/function () {
      function FcmService(router, platform, alertController, firebaseMessaging, loadingController, firebaseService, http) {
        _classCallCheck(this, FcmService);

        this.router = router;
        this.platform = platform;
        this.alertController = alertController;
        this.firebaseMessaging = firebaseMessaging;
        this.loadingController = loadingController;
        this.firebaseService = firebaseService;
        this.http = http;
      }

      _createClass(FcmService, [{
        key: "initPush",
        value: function initPush() {
          if (this.platform.is('cordova')) {
            this.registerPush();
          }
        }
      }, {
        key: "registerPush",
        value: function registerPush() {
          var _this83 = this;

          console.log('🚀 --------INICIANDO AS NOTIFICAÇÕES PUSH--------');
          this.firebaseMessaging.requestPermission().then(function (result) {
            if (result === 'granted') {} else {}
          });
          this.firebaseMessaging.subscribe('marketing');
          this.firebaseMessaging.getToken().then(function (token) {
            console.log('🚀 --------TOKEN NOTIFICAÇÕES PUSH--------' + token);
            localStorage.setItem('device-token', token);
          });
          this.firebaseMessaging.onMessage().subscribe(function (notification) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this83, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee154() {
              var _this84 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee154$(_context154) {
                while (1) switch (_context154.prev = _context154.next) {
                  case 0:
                    console.log('🚀 --------NOTIFICAÇÃO-------' + notification.gcm.body);

                    if (!(notification.gcm.clickAction !== 'chat')) {
                      _context154.next = 7;
                      break;
                    }

                    _context154.next = 4;
                    return this.alertController.create({
                      cssClass: 'my-custom-class',
                      header: notification.gcm.title,
                      message: notification.gcm.body,
                      buttons: [{
                        text: 'Voltar',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }, {
                        text: 'Ok',
                        handler: function handler() {
                          var data = notification.data;

                          if (data['SchedulingID'] !== null) {
                            if (data['SchedulingStatus'] !== 2) {
                              _this84.router.navigate(['/detail/', data['SchedulingID']]);
                            } else {
                              _this84.router.navigate(['/question-scheduling/', data['SchedulingID']]);
                            }
                          }
                        }
                      }]
                    });

                  case 4:
                    alert = _context154.sent;
                    _context154.next = 7;
                    return alert.present();

                  case 7:
                  case "end":
                    return _context154.stop();
                }
              }, _callee154, this);
            }));
          });
          this.firebaseMessaging.onBackgroundMessage().subscribe(function (notification) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this83, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee155() {
              return _regeneratorRuntime().wrap(function _callee155$(_context155) {
                while (1) switch (_context155.prev = _context155.next) {
                  case 0:
                    console.log('🚀 --------NOTIFICAÇÃO EM BACKGROUND-------' + notification.gcm.body);

                  case 1:
                  case "end":
                    return _context155.stop();
                }
              }, _callee155);
            }));
          });
          this.firebaseMessaging.onTokenRefresh();
          this.firebaseMessaging.requestPermission().then(function (hasPermission) {
            console.log('🚀 --------PERMISSÃO PARA NOTIFICAÇÃO-------' + hasPermission);
          });
        }
        /**
         * @param message
         * @param token
         * Método responsável por enviar uma notificação para o
         * usuário do chat
         */

      }, {
        key: "sendPushMsg",
        value: function sendPushMsg(user, message, cpf) {
          var _this85 = this;

          try {
            if (cpf.includes('/')) {
              cpf = cpf.replace('/', '');
            }

            if (cpf.includes('-')) {
              cpf = cpf.replace('-', '');
            }

            if (cpf.includes('.')) {
              cpf = cpf.replace('.', '');
            }

            if (cpf.includes('.')) {
              cpf = cpf.replace('.', '');
            }

            var cpfUsuario = parseFloat(cpf);
            this.firebaseService.db.collection("users_token").where("cpf", "==", cpfUsuario).get().then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                var document = doc.data();

                if (document !== undefined && document !== null) {
                  _this85.sendPush(user, message, document.token);
                }
              });
            })["catch"](function (error) {
              console.log("🚀 ~ file: firebase.service.ts:172 ~ FirebaseService ~ getTokenUser ~ error:", error);
            });
          } catch (error) {
            console.log("🚀 ~ -------ERROR AO CHAMAR O MÉTODO DE ENVIO DE NOTIFICAÇÕES PUSH-------", error);
          }
        }
        /**
         * @param user
         * @param message
         * @param token
         * Efetua o envio da notificação push
         */

      }, {
        key: "sendPush",
        value: function sendPush(user, message, token) {
          try {
            var url = 'https://fcm.googleapis.com/fcm/send';
            var body = {
              "to": token,
              "notification": {
                "title": user,
                "body": message,
                "mutable_content": true,
                "sound": "Tri-tone",
                "click_action": 'chat'
              },
              "data": {
                "url": "<url of media image>",
                "dl": "<deeplink action on tap of notification>"
              }
            };
            var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["Headers"]({
              'Content-Type': 'application/json',
              'Authorization': 'key=AAAAPc5T_6w:APA91bHX2WHMQuSXgjFawZJr1gduu1jLo-4Fcizr9at5bypqR_E7AFzE0nQfX86a-Go4kj8ZifhmC5zV_Fvh2fRvWoiW4eBWHCkZ85cglgxs0Gjd02eTSTfMg2g7S9n-1A9HH5m93W7y'
            });
            var options = new _angular_http__WEBPACK_IMPORTED_MODULE_5__["RequestOptions"]({
              headers: headers
            });
            this.http.post(url, body, options).subscribe(function (response) {
              console.log("🚀 ~ -------NOTIFICAÇÃO PUSH ENVIADA COM SUCESSO!-------", response);
            }, function (error) {
              console.log("🚀 ~ -------ERROR AO ENVIAR UMA NOTIFICAÇÃO PUSH-------", error);
            });
          } catch (error) {
            console.log("🚀 ~ -------ERROR AO CHAMAR O MÉTODO DE ENVIO DE NOTIFICAÇÕES PUSH-------", error);
          }
        }
      }]);

      return FcmService;
    }();

    FcmService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_native_firebase_messaging_ngx__WEBPACK_IMPORTED_MODULE_3__["FirebaseMessaging"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
      }, {
        type: _firebase_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"]
      }, {
        type: _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"]
      }];
    };

    FcmService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FcmService);
    /***/
  },

  /***/
  "./src/app/service/firebase/firebase.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/service/firebase/firebase.service.ts ***!
    \******************************************************/

  /*! exports provided: FirebaseService */

  /***/
  function srcAppServiceFirebaseFirebaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseService", function () {
      return FirebaseService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.esm.js");
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/firestore */
    "./node_modules/firebase/firestore/dist/index.esm.js");
    /**
     * Classe responsável pela comunicação do aplicativo com o Google Firebase
     * @author Gustavo Teles
     */


    var FirebaseService = /*#__PURE__*/function () {
      function FirebaseService() {
        _classCallCheck(this, FirebaseService);

        this.loader = false;
      }

      _createClass(FirebaseService, [{
        key: "configApp",
        value: function configApp() {
          console.log('🚀 --------INICIANDO O GOOGLE FIREBASE--------');
          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].firebase);
          this.db = firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore();
        }
      }, {
        key: "signin",
        value: function signin(email, password) {
          var _this86 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signInWithEmailAndPassword(email, password).then(function (user) {
            _this86.loader = false;
            _this86.user = {
              id: email.substring(0, email.indexOf('@')).toLowerCase()
            };
            localStorage.setItem('loggedIn', _this86.user.id);
          })["catch"](function (error) {
            _this86.loader = false;
            console.log("🚀 ~ file: api.service.ts:43 ~ ApiService ~ signin ~ error", error);
          });
        }
      }, {
        key: "signUp",
        value: function signUp(name, email, password) {
          var _this87 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().createUserWithEmailAndPassword(email, password).then(function (user) {
            _this87.loader = false;
            _this87.user = {
              name: name,
              id: email.substring(0, email.indexOf('@')).toLowerCase()
            };
            localStorage.setItem('loggedIn', _this87.user.id);

            _this87.db.collection("users").doc(_this87.user.id).set({
              name: name,
              id: _this87.user.id
            });
          })["catch"](function (error) {
            _this87.loader = false;
            console.log("🚀 ~ file: api.service.ts:74 ~ ApiService ~ signUp ~ error", error);
          });
        }
      }, {
        key: "signOut",
        value: function signOut() {
          var _this88 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].auth().signOut().then(function () {
            _this88.user = {};
            localStorage.removeItem('loggedIn');
          })["catch"](function (error) {
            console.log('error while logout', error);
          });
        }
      }, {
        key: "sendMsg",
        value: function sendMsg(id, to, from, msg) {
          var unique = this.generateRandomString(16);
          this.db.collection("chatRoom/").doc(unique).set({
            key: this.generateRandomString(6),
            id: [to, from],
            to: to ? to : 'admin',
            from: from ? from : 'admin',
            msg: msg,
            timestamp: firebase_app__WEBPACK_IMPORTED_MODULE_3__["default"].firestore.FieldValue.serverTimestamp()
          });
        }
      }, {
        key: "generateRandomString",
        value: function generateRandomString(length) {
          var text = "";
          var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

          for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
          }

          return text;
        }
      }, {
        key: "formatAMPM",
        value: function formatAMPM(date) {
          var hours = date.getHours();
          var minutes = date.getMinutes();
          var ampm = hours >= 12 ? 'PM' : 'AM';
          hours = hours % 12;
          hours = hours ? hours : 12;
          minutes = minutes < 10 ? '0' + minutes : minutes;
          var strTime = hours + ':' + minutes + ' ' + ampm;
          return strTime;
        }
        /**
         * @param cpf
         * @param token
         * @returns
         * Método responsável por salvar o token do usuário logado
         */

      }, {
        key: "saveTokenUser",
        value: function saveTokenUser(cpf, token) {
          var _this89 = this;

          var promise = new Promise(function (resolve, reject) {
            try {
              var object = {
                cpf: cpf,
                token: token
              };

              _this89.db.collection("users_token").add(object).then(function (data) {
                var returnObject = [{
                  "doc": data.id
                }];

                _this89.updateTokenUser(data.id, returnObject[0]);

                resolve(data.id);
              }, function (err) {
                reject(err);
                console.log('Erro', err);
              });
            } catch (err) {}
          });
          return promise.then(function (res) {
            console.log('Retorno ', res);
          });
        }
        /**
         * @param doc
         * @param object
         * Método responsável por atualizar o documento de
         * tokens dos usuários
         */

      }, {
        key: "updateTokenUser",
        value: function updateTokenUser(doc, object) {
          this.db.collection("users_token").doc(doc).update(object);
        }
        /**
         * Salva o token do usuário logado no firebase para
         * as notificações push
         */

      }, {
        key: "saveTokenUserFirebase",
        value: function saveTokenUserFirebase() {
          var _this90 = this;

          var saveToken = true;
          var user = JSON.parse(localStorage.getItem("user"));
          var deviceToken = localStorage.getItem("device-token");
          var cpfUsuario = user.cpf;

          if (cpfUsuario.includes('/')) {
            cpfUsuario = cpfUsuario.replace('/', '');
          }

          if (cpfUsuario.includes('-')) {
            cpfUsuario = cpfUsuario.replace('-', '');
          }

          if (cpfUsuario.includes('.')) {
            cpfUsuario = cpfUsuario.replace('.', '');
          }

          if (cpfUsuario.includes('.')) {
            cpfUsuario = cpfUsuario.replace('.', '');
          }

          var cpf = parseFloat(cpfUsuario);
          this.db.collection("users_token").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
              var document = doc.data();

              if (cpf === document.cpf) {
                if (deviceToken !== document.token) {
                  var object = {
                    token: deviceToken,
                    cpf: cpf
                  };

                  _this90.updateTokenUser(document.doc, object);
                }

                saveToken = false;
              } else if (document.token === deviceToken) {
                var _object = {
                  token: deviceToken,
                  cpf: cpf
                };

                _this90.updateTokenUser(document.doc, _object);

                saveToken = false;
              }
            });

            if (saveToken) {
              _this90.saveTokenUser(cpf, deviceToken);
            }
          })["catch"](function (error) {
            console.log("🚀 ~ file: firebase.service.ts:172 ~ FirebaseService ~ getTokenUser ~ error:", error);
          });
        }
      }]);

      return FirebaseService;
    }();

    FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FirebaseService);
    /***/
  },

  /***/
  "./src/app/service/push/push-notification.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/service/push/push-notification.service.ts ***!
    \***********************************************************/

  /*! exports provided: PushNotificationService */

  /***/
  function srcAppServicePushPushNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PushNotificationService", function () {
      return PushNotificationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SERVER_URL = 'http://localhost:3000/subscription';

    var PushNotificationService = /*#__PURE__*/function () {
      function PushNotificationService(http) {
        _classCallCheck(this, PushNotificationService);

        this.http = http;
      }

      _createClass(PushNotificationService, [{
        key: "sendSubscriptionToTheServer",
        value: function sendSubscriptionToTheServer(subscription) {
          return this.http.post(SERVER_URL, subscription);
        }
      }]);

      return PushNotificationService;
    }();

    PushNotificationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    PushNotificationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], PushNotificationService);
    /***/
  },

  /***/
  "./src/app/service/token.interceptor.service .ts":
  /*!*******************************************************!*\
    !*** ./src/app/service/token.interceptor.service .ts ***!
    \*******************************************************/

  /*! exports provided: TokenInterceptorService */

  /***/
  function srcAppServiceTokenInterceptorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
      return TokenInterceptorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../core/auth/auth.service */
    "./src/app/core/auth/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var TokenInterceptorService = /*#__PURE__*/function () {
      function TokenInterceptorService(authService, router) {
        _classCallCheck(this, TokenInterceptorService);

        this.authService = authService;
        this.router = router;
      }

      _createClass(TokenInterceptorService, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this91 = this;

          return next.handle(this.addAuthToken(request)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (e) {
            return _this91.handleError(e);
          }));
        }
      }, {
        key: "addAuthToken",
        value: function addAuthToken(request) {
          var token = this.authService.token; //   if (token == null) {
          //     this.router.navigate(["login"]);
          //  }

          return request.clone({
            setHeaders: {
              Authorization: "Bearer ".concat(token)
            }
          });
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = "";

          if (error.status == 401) {
            this.router.navigate(["login"]);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }

          if (error.error instanceof ErrorEvent) {
            errorMessage = "Error: ".concat(error.error.message);
          } else {
            errorMessage = "Error Code: ".concat(error.status, " - Message: ").concat(error.message);
          }

          console.error(errorMessage);
          Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        }
      }]);

      return TokenInterceptorService;
    }();

    TokenInterceptorService.ctorParameters = function () {
      return [{
        type: _core_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    TokenInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], TokenInterceptorService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      url: 'https://api-prod.saudetechama.com.br/api/',
      urlCep: 'https://viacep.com.br/ws/',
      pushKey: "BHifWlroi04Vm5W9gnPRZyArK1KQTb54DGhfglgzTEsOoWXliWrNuQXrnO3U8M0ljAYnvMPTLNpi-zg8lEqIzgQ",
      firebase: {
        apiKey: "AIzaSyD9cEP_uiyCS24RcG1nWNeC2Y-kRsekktQ",
        authDomain: "stc-app-f8a39.firebaseapp.com",
        databaseURL: "https://stc-app-f8a39.firebaseio.com",
        projectId: "stc-app-f8a39",
        storageBucket: "stc-app-f8a39.appspot.com",
        messagingSenderId: "265454616492",
        appId: "1:265454616492:web:22f7d42482256689188409",
        measurementId: "G-EFN4N74WVB"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/junior-crefisa/Documents/Pessoal/projetos/saudetechama-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map