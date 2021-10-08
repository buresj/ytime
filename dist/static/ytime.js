"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _watchTimeTotal = /*#__PURE__*/new WeakMap();

var _watchTimeToday = /*#__PURE__*/new WeakMap();

var _visitTimeTotal = /*#__PURE__*/new WeakMap();

var _visitTimeToday = /*#__PURE__*/new WeakMap();

var _createStorageItem = /*#__PURE__*/new WeakSet();

class YTimeStore {
  constructor() {
    _classPrivateMethodInitSpec(this, _createStorageItem);

    _classPrivateFieldInitSpec(this, _watchTimeTotal, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _watchTimeToday, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _visitTimeTotal, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _visitTimeToday, {
      writable: true,
      value: void 0
    });

    const todayString = new Date().toLocaleDateString();

    _classPrivateFieldSet(this, _watchTimeTotal, _classPrivateMethodGet(this, _createStorageItem, _createStorageItem2).call(this, "wt_total", {
      count: 0
    }));

    _classPrivateFieldSet(this, _visitTimeTotal, _classPrivateMethodGet(this, _createStorageItem, _createStorageItem2).call(this, "vt_total", {
      count: 0
    }));

    _classPrivateFieldSet(this, _watchTimeToday, _classPrivateMethodGet(this, _createStorageItem, _createStorageItem2).call(this, "wt_" + todayString, {
      count: 0
    }));

    _classPrivateFieldSet(this, _visitTimeToday, _classPrivateMethodGet(this, _createStorageItem, _createStorageItem2).call(this, "vt_" + todayString, {
      count: 0
    }));
  }

  get todayWatchTime() {
    return _classPrivateFieldGet(this, _watchTimeToday).count;
  }

  set todayWatchTime(count) {
    _classPrivateFieldGet(this, _watchTimeToday).count = count;
  }

  get todayVisitTime() {
    return _classPrivateFieldGet(this, _visitTimeToday).count;
  }

  set todayVisitTime(count) {
    _classPrivateFieldGet(this, _visitTimeToday).count = count;
  }

}

function _createStorageItem2(key, initial) {
  const initialState = JSON.stringify(initial);
  return new Proxy(localStorage, {
    get: (target, prop) => {
      return JSON.parse(target.getItem(key) || initialState)[prop];
    },
    set: (target, prop, value) => {
      const previousState = JSON.parse(target.getItem(key) || initialState);
      target.setItem(key, JSON.stringify(_objectSpread(_objectSpread({}, previousState), {}, {
        [prop]: value
      })));
      return true;
    }
  });
}

var _runClock = /*#__PURE__*/new WeakSet();

class YTime extends HTMLSpanElement {
  constructor() {
    super();

    _classPrivateMethodInitSpec(this, _runClock);

    _defineProperty(this, "store", void 0);

    _defineProperty(this, "clock", void 0);

    _defineProperty(this, "showTime", void 0);

    this.store = new YTimeStore();
    this.attachShadow({
      mode: "open"
    });
  }

  get videoWrapper() {
    return document.querySelector("#movie_player");
  }

  get videoPlayer() {
    return document.querySelector("#movie_player").querySelector("video");
  }

  connectedCallback() {
    var _this$videoPlayer, _this$videoPlayer2;

    const observerHandled = playing => _classPrivateMethodGet(this, _runClock, _runClock2).bind(this, playing);

    (_this$videoPlayer = this.videoPlayer) === null || _this$videoPlayer === void 0 ? void 0 : _this$videoPlayer.addEventListener("playing", () => observerHandled(true));
    (_this$videoPlayer2 = this.videoPlayer) === null || _this$videoPlayer2 === void 0 ? void 0 : _this$videoPlayer2.addEventListener("pause", () => observerHandled(false));
    this.innerText = "text";
  }

  disconnectedCallback() {
    var _this$videoPlayer3, _this$videoPlayer4;

    const observerHandled = playing => _classPrivateMethodGet(this, _runClock, _runClock2).bind(this, playing);

    (_this$videoPlayer3 = this.videoPlayer) === null || _this$videoPlayer3 === void 0 ? void 0 : _this$videoPlayer3.removeEventListener("playing", () => observerHandled(true));
    (_this$videoPlayer4 = this.videoPlayer) === null || _this$videoPlayer4 === void 0 ? void 0 : _this$videoPlayer4.removeEventListener("pause", () => observerHandled(false));
  }

}

function _runClock2(playing) {
  if (!playing) {
    this.clock && clearInterval(this.clock);
    return;
  }

  this.clock = setInterval(() => {
    if (this.videoWrapper.classList.contains("playing-mode")) {
      this.store.todayVisitTime += 1;
      this.store.todayWatchTime += 1;
      this.showTime = this.store.todayWatchTime;
    }
  }, 1000);
}

customElements.define("c-ytime", YTime, {
  extends: "span"
});
const yTime = document.createElement("c-ytime", {
  is: "span"
});
document.querySelector("#start").appendChild(yTime);