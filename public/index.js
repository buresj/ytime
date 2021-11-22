"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _today = /*#__PURE__*/new WeakMap();

var _createStorageItem = /*#__PURE__*/new WeakSet();

var YTimeStore = /*#__PURE__*/function () {
  function YTimeStore() {
    _classCallCheck(this, YTimeStore);

    _classPrivateMethodInitSpec(this, _createStorageItem);

    _classPrivateFieldInitSpec(this, _today, {
      writable: true,
      value: void 0
    });

    var todayString = new Date().toLocaleDateString();

    _classPrivateFieldSet(this, _today, _classPrivateMethodGet(this, _createStorageItem, _createStorageItem2).call(this, "ytime_" + todayString, {
      visitTime: 0,
      watchTime: 0,
      videos: []
    }));
  }

  _createClass(YTimeStore, [{
    key: "todayWatchTime",
    get: function get() {
      return _classPrivateFieldGet(this, _today).watchTime;
    },
    set: function set(count) {
      _classPrivateFieldGet(this, _today).watchTime = count;
    }
  }, {
    key: "todayVisitTime",
    get: function get() {
      return _classPrivateFieldGet(this, _today).visitTime;
    },
    set: function set(count) {
      _classPrivateFieldGet(this, _today).visitTime = count;
    }
  }, {
    key: "todayVideos",
    get: function get() {
      return _classPrivateFieldGet(this, _today).videos;
    },
    set: function set(video) {
      _classPrivateFieldGet(this, _today).videos = [].concat(_toConsumableArray(_classPrivateFieldGet(this, _today).videos), [video]);
    }
  }, {
    key: "allWatchTimes",
    get: function get() {
      return Object.entries(localStorage).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (key.includes("ytime")) {
          var data = JSON.parse(value);
          return (data === null || data === void 0 ? void 0 : data.watchTime) || 0;
        }

        return 0;
      });
    }
  }]);

  return YTimeStore;
}();

function _createStorageItem2(key, initial) {
  var initialState = JSON.stringify(initial);
  return new Proxy(localStorage, {
    get: function get(target, prop) {
      return JSON.parse(target.getItem(key) || initialState)[prop];
    },
    set: function set(target, prop, value) {
      var previousState = JSON.parse(target.getItem(key) || initialState);
      target.setItem(key, JSON.stringify(_objectSpread(_objectSpread({}, previousState), {}, _defineProperty({}, prop, value))));
      return true;
    }
  });
}

var Timer = /*#__PURE__*/function (_HTMLElement) {
  _inherits(Timer, _HTMLElement);

  var _super = _createSuper(Timer);

  function Timer() {
    var _this;

    _classCallCheck(this, Timer);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "store", void 0);

    _defineProperty(_assertThisInitialized(_this), "clock", void 0);

    _defineProperty(_assertThisInitialized(_this), "showTime", void 0);

    _defineProperty(_assertThisInitialized(_this), "location", void 0);

    _defineProperty(_assertThisInitialized(_this), "isWindowActive", void 0);

    return _this;
  }

  _createClass(Timer, [{
    key: "videoWrapper",
    get: function get() {
      return document.querySelector("#movie_player");
    }
  }, {
    key: "videoPlayer",
    get: function get() {
      var _document$querySelect;

      return (_document$querySelect = document.querySelector("#movie_player")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.querySelector("video");
    }
  }, {
    key: "watchTimeDisplay",
    set: function set(time) {
      this.querySelector("#watchTime").innerText = this.formatSeconds(time);
    }
  }, {
    key: "watchTimeDisplayColor",
    set: function set(hsl) {
      this.querySelector("#watchTime").style.color = hsl;
    }
  }, {
    key: "visitTimeDisplay",
    set: function set(time) {
      this.querySelector("#visitTime").innerText = this.formatSeconds(time);
    }
  }, {
    key: "todaysVideosDisplay",
    set: function set(count) {
      this.querySelector("#seenVideos").innerText = count;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.isWindowActive = true;
      this.store = new YTimeStore();
      this.innerHTML = "<style>i {margin: 0 0.65rem} </style><span id=\"watchTime\"></span><i>|</i><span id=\"visitTime\"></span><i>|</i><span id=\"seenVideos\"></span>";
      this.visitTimeDisplay = this.store.todayVisitTime;
      this.watchTimeDisplay = this.store.todayWatchTime;
      this.style.color = "white";
      this.style.fontSize = "2rem";
      this.style.position = "absolute";
      this.style.left = "200px";
      var handleVideoObserver = this.observeVideo.bind(this);
      document.addEventListener("yt-navigate-finish", handleVideoObserver);
      document.addEventListener("visibilitychange", function () {
        return _this2.isWindowActive = !document.hidden;
      });
      this.observeVideo();
      this.runClock();
    }
  }, {
    key: "runClock",
    value: function runClock() {
      var _this3 = this;

      this.clock && clearInterval(this.clock);
      this.clock = setInterval(function () {
        var _this3$videoWrapper;

        if ((_this3$videoWrapper = _this3.videoWrapper) !== null && _this3$videoWrapper !== void 0 && _this3$videoWrapper.classList.contains("playing-mode") && _this3.isWindowActive) {
          _this3.store.todayWatchTime += 1;
        }

        _this3.store.todayVisitTime += 1;

        _this3.render();
      }, 1000);
    }
  }, {
    key: "block",
    value: function block() {
      var twoHours = 60 * 60 * 2;

      if (this.store.todayWatchTime > twoHours) {
        var overlay = document.createElement("div");
        overlay.id = "overlay";
        var style = document.createElement("style");
        style.textContent = "#overlay {\n      position: fixed; /* Sit on top of the page content */\n      width: 100%; /* Full width (cover the whole page) */\n      height: 100%; /* Full height (cover the whole page) */\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-color: rgba(0,0,0,0.5); /* Black background with opacity */\n      z-index: 9999; /* Specify a stack order in case you're using a different order for other elements */\n      cursor: pointer; /* Add a pointer on hover */\n      }";
        document.body.appendChild(style);
        document.body.appendChild(overlay);
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.visitTimeDisplay = this.store.todayVisitTime;
      this.watchTimeDisplay = this.store.todayWatchTime;
      this.watchTimeDisplayColor = this.computeHSLFromTime(this.store.todayWatchTime);
      this.todaysVideosDisplay = this.store.todayVideos.length || 0;
    }
  }, {
    key: "formatSeconds",
    value: function formatSeconds(sec) {
      var date = new Date(0);
      date.setSeconds(sec);
      return date.toISOString().substr(11, 8);
    }
  }, {
    key: "observeVideo",
    value: function observeVideo() {
      var url = new URL(window.location.href);
      var id = url.searchParams.get("v");
      this.block();

      if (id && !this.store.todayVideos.includes(id)) {
        this.store.todayVideos = id;
      }
    }
  }, {
    key: "computeHSLFromTime",
    value: function computeHSLFromTime(currentTime) {
      var l = this.store.allWatchTimes.slice(0, -1).filter(function (a) {
        return a > 0;
      }).length;
      var sum = this.store.allWatchTimes.reduce(function (p, c) {
        return p += c;
      }, 0);

      if (l <= 1 || sum <= 1 || !l || !sum) {
        return "hsl(0,0%,100%)";
      }

      var avg = Math.round(sum / l);
      var percent = currentTime / avg * 100;
      var middle = 100;
      var hue = percent < middle ? middle - percent : 360 - (percent - middle);
      return "hsla(".concat(Math.round(hue), ",100%,50%,1)");
    }
  }]);

  return Timer;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define("c-timer", Timer);
var yTime = document.createElement("c-timer");
document.querySelector("#start").appendChild(yTime);