(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["bulmaExtensions"] = factory();
	else
		root["bulmaExtensions"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bulma_accordion_src_js_index_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bulma_calendar_src_js_index_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bulma_carousel_src_js_index_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bulma_iconpicker_src_js_index_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bulma_quickview_src_js_index_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bulma_slider_src_js_index_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bulma_steps_src_js_index_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bulma_tagsinput_src_js_index_js__ = __webpack_require__(25);









/* harmony default export */ __webpack_exports__["default"] = ({
    bulmaAccordion: __WEBPACK_IMPORTED_MODULE_0__bulma_accordion_src_js_index_js__["a" /* default */],
    bulmaCalendar: __WEBPACK_IMPORTED_MODULE_1__bulma_calendar_src_js_index_js__["a" /* default */],
    bulmaCarousel: __WEBPACK_IMPORTED_MODULE_2__bulma_carousel_src_js_index_js__["a" /* default */],
    bulmaIconpicker: __WEBPACK_IMPORTED_MODULE_3__bulma_iconpicker_src_js_index_js__["a" /* default */],
    bulmaQuickview: __WEBPACK_IMPORTED_MODULE_4__bulma_quickview_src_js_index_js__["a" /* default */],
    bulmaSlider: __WEBPACK_IMPORTED_MODULE_5__bulma_slider_src_js_index_js__["a" /* default */],
    bulmaSteps: __WEBPACK_IMPORTED_MODULE_6__bulma_steps_src_js_index_js__["a" /* default */],
    bulmaTagsinput: __WEBPACK_IMPORTED_MODULE_7__bulma_tagsinput_src_js_index_js__["a" /* default */]
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var onBulmaAccordionClick = Symbol('onBulmaAccordionClick');

var bulmaAccordion = function (_EventEmitter) {
  _inherits(bulmaAccordion, _EventEmitter);

  function bulmaAccordion(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, bulmaAccordion);

    var _this = _possibleConstructorReturn(this, (bulmaAccordion.__proto__ || Object.getPrototypeOf(bulmaAccordion)).call(this));

    _this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!_this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    _this._clickEvents = ['click'];

    _this[onBulmaAccordionClick] = _this[onBulmaAccordionClick].bind(_this);

    _this.init();
    return _this;
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */


  _createClass(bulmaAccordion, [{
    key: 'init',


    /**
     * Initiate plugin
     * @method init
     * @return {void}
     */
    value: function init() {
      this.items = this.element.querySelectorAll('.accordion') || [];

      this._bindEvents();
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this2 = this;

      this.items.forEach(function (item) {
        _this2._clickEvents.forEach(function (clickEvent) {
          item.removeEventListener(clickEvent, _this2[onBulmaAccordionClick], false);
        });
      });
    }

    /**
     * Bind all events
     * @method _bindEvents
     * @return {void}
     */

  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this3 = this;

      this.items.forEach(function (item) {
        _this3._clickEvents.forEach(function (clickEvent) {
          item.addEventListener(clickEvent, _this3[onBulmaAccordionClick], false);
        });
      });
    }

    /**
     * Toggle accordion item
     * @method onBulmaAccordionClick
     * @param  {Event}    e click event
     * @return {void}
     */

  }, {
    key: onBulmaAccordionClick,
    value: function value(e) {
      e.preventDefault();

      var target = e.currentTarget.closest('.accordion') || e.currentTarget;
      if (!target.classList.contains('is-active')) {
        var activeItem = this.element.querySelector('.accordion.is-active');
        if (activeItem) {
          activeItem.classList.remove('is-active');
        }
        target.classList.add('is-active');
      } else {
        target.classList.remove('is-active');
      }
    }
  }], [{
    key: 'attach',
    value: function attach() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.accordions';

      var instances = new Array();

      var elements = document.querySelectorAll(selector);
      [].forEach.call(elements, function (element) {
        setTimeout(function () {
          instances.push(new bulmaAccordion(element));
        }, 100);
      });
      return instances;
    }
  }]);

  return bulmaAccordion;
}(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (bulmaAccordion);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, EventEmitter);

    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  _createClass(EventEmitter, [{
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (!this._listeners.has(eventName)) {
        return 0;
      }

      var eventListeners = this._listeners.get(eventName);
      return eventListeners.length;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this.removeListeners(e, middleware);
          });
        } else {
          this._listeners.delete(eventName);

          if (middleware) {
            this.removeMiddleware(eventName);
          }
        }
      } else {
        this._listeners = new Map();
      }
    }
  }, {
    key: "middleware",
    value: function middleware(eventName, fn) {
      var _this2 = this;

      if (Array.isArray(eventName)) {
        name.forEach(function (e) {
          return _this2.middleware(e, fn);
        });
      } else {
        if (!Array.isArray(this._middlewares.get(eventName))) {
          this._middlewares.set(eventName, []);
        }

        this._middlewares.get(eventName).push(fn);
      }
    }
  }, {
    key: "removeMiddleware",
    value: function removeMiddleware() {
      var _this3 = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this3.removeMiddleware(e);
          });
        } else {
          this._middlewares.delete(eventName);
        }
      } else {
        this._middlewares = new Map();
      }
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _this4 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(name)) {
        name.forEach(function (e) {
          return _this4.on(e, callback);
        });
      } else {
        name = name.toString();
        var split = name.split(/,|, | /);

        if (split.length > 1) {
          split.forEach(function (e) {
            return _this4.on(e, callback);
          });
        } else {
          if (!Array.isArray(this._listeners.get(name))) {
            this._listeners.set(name, []);
          }

          this._listeners.get(name).push({ once: once, callback: callback });
        }
      }
    }
  }, {
    key: "once",
    value: function once(name, callback) {
      this.on(name, callback, true);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var _this5 = this;

      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      name = name.toString();
      var listeners = this._listeners.get(name);
      var middlewares = null;
      var doneCount = 0;
      var execute = silent;

      if (Array.isArray(listeners)) {
        listeners.forEach(function (listener, index) {
          // Start Middleware checks unless we're doing a silent emit
          if (!silent) {
            middlewares = _this5._middlewares.get(name);
            // Check and execute Middleware
            if (Array.isArray(middlewares)) {
              middlewares.forEach(function (middleware) {
                middleware(data, function () {
                  var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (newData !== null) {
                    data = newData;
                  }
                  doneCount++;
                }, name);
              });

              if (doneCount >= middlewares.length) {
                execute = true;
              }
            } else {
              execute = true;
            }
          }

          // If Middleware checks have been passed, execute
          if (execute) {
            if (listener.once) {
              listeners[index] = null;
            }
            listener.callback(data);
          }
        });

        // Dirty way of removing used Events
        while (listeners.indexOf(null) !== -1) {
          listeners.splice(listeners.indexOf(null), 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_date__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_type__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_events__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__langs_langs__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__defaultOptions__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__template__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var onToggleDatePicker = Symbol('onToggleDatePicker');
var onCloseDatePicker = Symbol('onCloseDatePicker');
var onPreviousYearDatePicker = Symbol('onPreviousYearDatePicker');
var onNextYearDatePicker = Symbol('onNextYearDatePicker');
var onPreviousMonthDatePicker = Symbol('onPreviousMonthDatePicker');
var onNextMonthDatePicker = Symbol('onNextMonthDatePicker');
var onDateClickDatePicker = Symbol('onDateClickDatePicker');
var getDayNameDatePicker = Symbol('getDayNameDatePicker');

var _supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      _supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

var bulmaCalendar = function (_EventEmitter) {
  _inherits(bulmaCalendar, _EventEmitter);

  function bulmaCalendar(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, bulmaCalendar);

    var _this = _possibleConstructorReturn(this, (bulmaCalendar.__proto__ || Object.getPrototypeOf(bulmaCalendar)).call(this));

    _this.element = __WEBPACK_IMPORTED_MODULE_1__utils_type__["a" /* isString */](selector) ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!_this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }
    _this._clickEvents = ['click'];

    /// Set default options and merge with instance defined
    _this.options = _extends({}, __WEBPACK_IMPORTED_MODULE_4__defaultOptions__["a" /* default */], options);

    _this[onToggleDatePicker] = _this[onToggleDatePicker].bind(_this);
    _this[onCloseDatePicker] = _this[onCloseDatePicker].bind(_this);
    _this[onPreviousYearDatePicker] = _this[onPreviousYearDatePicker].bind(_this);
    _this[onNextYearDatePicker] = _this[onNextYearDatePicker].bind(_this);
    _this[onPreviousMonthDatePicker] = _this[onPreviousMonthDatePicker].bind(_this);
    _this[onNextMonthDatePicker] = _this[onNextMonthDatePicker].bind(_this);
    _this[onDateClickDatePicker] = _this[onDateClickDatePicker].bind(_this);
    _this[getDayNameDatePicker] = _this[getDayNameDatePicker].bind(_this);

    // Initiate plugin
    _this._init();
    return _this;
  }

  /**
   * Initiate all DOM element containing datePicker class
   * @method
   * @return {Array} Array of all datePicker instances
   */


  _createClass(bulmaCalendar, [{
    key: '_init',


    /**
     * Initiate plugin instance
     * @method _init
     * @return {datePicker} Current plugin instance
     */
    value: function _init() {
      this._id = 'datePicker' + new Date().getTime() + Math.floor(Math.random() * Math.floor(9999));
      this.lang = this.options.lang;
      this.dateFormat = this.options.dateFormat;
      this._open = false;

      this._initDates();
      this._build();
      this._bindEvents();

      this.emit('datepicker:ready', this._date);

      return this;
    }

    // Init dates used by datePicker core system

  }, {
    key: '_initDates',
    value: function _initDates() {
      // Set the startDate to the input value
      if (this.element.value) {
        this.date = __WEBPACK_IMPORTED_MODULE_0__utils_date__["d" /* parseDate */](this.element.value);
      } else {
        this.date = this.options.startDate ? this.options.dateFormat : new Date();
      }
      // Transform start date according to dateFormat option
      this.minDate = this.options.minDate ? this.options.minDate : '1970-01-01';
      this.maxDate = this.options.maxDate ? this.options.maxDate : '9999-12-31';

      if (this.options.disabledDates) {
        if (!Array.isArray(this.options.disabledDates)) {
          this.options.disabledDates = [this.options.disabledDates];
        }
        for (var i = 0; i < this.options.disabledDates.length; i++) {
          this.options.disabledDates[i] = __WEBPACK_IMPORTED_MODULE_0__utils_date__["d" /* parseDate */](__WEBPACK_IMPORTED_MODULE_0__utils_date__["c" /* getFormatedDate */](new Date(this.options.disabledDates[i]), this.dateFormat, this.lang));
        }
      }
    }

    /**
     * Build datePicker HTML component and append it to the DOM
     * @method _build
     * @return {datePicker} Current plugin instance
     */

  }, {
    key: '_build',
    value: function _build() {
      // Create datePicker HTML Fragment based on Template
      var datePickerFragment = document.createRange().createContextualFragment(Object(__WEBPACK_IMPORTED_MODULE_5__template__["a" /* default */])(_extends({}, this.options, {
        id: this.id,
        date: this.date,
        lang: this.lang,
        getDayName: this[getDayNameDatePicker]
      })));

      // Save pointer to each datePicker element for later use
      this.elementContainer = datePickerFragment.querySelector('#' + this.id);
      this.elementCalendar = this.elementContainer.querySelector('.calendar');
      if (this.options.overlay) {
        this.elementOverlay = this.elementContainer.querySelector('.modal-background');
        this.elementCloseButton = this.elementContainer.querySelector('.modal-close');
      }
      this.elementCalendarNav = this.elementCalendar.querySelector('.calendar-nav');
      this.elementCalendarNavMonth = this.elementCalendar.querySelector('.calendar-month');
      this.elementCalendarNavYear = this.elementCalendar.querySelector('.calendar-year');
      this.elementCalendarNavDay = this.elementCalendar.querySelector('.calendar-day');
      this.elementCalendarNavPreviousMonth = this.elementCalendarNav.querySelector('.calendar-nav-previous-month');
      this.elementCalendarNavNextMonth = this.elementCalendarNav.querySelector('.calendar-nav-next-month');
      this.elementCalendarNavPreviousYear = this.elementCalendarNav.querySelector('.calendar-nav-previous-year');
      this.elementCalendarNavNextYear = this.elementCalendarNav.querySelector('.calendar-nav-next-year');
      this.elementCalendarHeader = this.elementCalendar.querySelector('.calendar-header');
      this.elementCalendarBody = this.elementCalendar.querySelector('.calendar-body');

      // Add datepicker HTML element to Document Body
      document.body.appendChild(datePickerFragment);
    }

    /**
     * Bind all events
     * @method _bindEvents
     * @return {void}
     */

  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this2 = this;

      // Bind event to element in order to display/hide datePicker on click
      if (this.options.toggleOnInputClick === true) {
        this._clickEvents.forEach(function (clickEvent) {
          _this2.element.addEventListener(clickEvent, _this2[onToggleDatePicker]);
        });
      }

      if (this.options.overlay) {
        // Bind close event on Close button
        if (this.elementCloseButton) {
          this._clickEvents.forEach(function (clickEvent) {
            _this2.elementCloseButton.addEventListener(clickEvent, _this2[onCloseDatePicker]);
          });
        }
        // Bind close event on overlay based on options
        if (this.options.closeOnOverlayClick && this.elementOverlay) {
          this._clickEvents.forEach(function (clickEvent) {
            _this2.elementOverlay.addEventListener(clickEvent, _this2[onCloseDatePicker]);
          });
        }
      }

      // Bind year navigation events
      if (this.elementCalendarNavPreviousYear) {
        this._clickEvents.forEach(function (clickEvent) {
          _this2.elementCalendarNavPreviousYear.addEventListener(clickEvent, _this2[onPreviousYearDatePicker]);
        });
      }
      if (this.elementCalendarNavNextYear) {
        this._clickEvents.forEach(function (clickEvent) {
          _this2.elementCalendarNavNextYear.addEventListener(clickEvent, _this2[onNextYearDatePicker]);
        });
      }

      // Bind month navigation events
      if (this.elementCalendarNavPreviousMonth) {
        this._clickEvents.forEach(function (clickEvent) {
          _this2.elementCalendarNavPreviousMonth.addEventListener(clickEvent, _this2[onPreviousMonthDatePicker]);
        });
      }
      if (this.elementCalendarNavNextMonth) {
        this._clickEvents.forEach(function (clickEvent) {
          _this2.elementCalendarNavNextMonth.addEventListener(clickEvent, _this2[onNextMonthDatePicker]);
        });
      }
    }
  }, {
    key: onToggleDatePicker,
    value: function value(e) {
      e.preventDefault();

      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }
  }, {
    key: onCloseDatePicker,
    value: function value(e) {
      if (!_supportsPassive) {
        e.preventDefault();
      }
      this.hide();
    }
  }, {
    key: onPreviousYearDatePicker,
    value: function value(e) {
      if (!_supportsPassive) {
        e.preventDefault();
      }
      this.prevYear();
    }
  }, {
    key: onNextYearDatePicker,
    value: function value(e) {
      if (!_supportsPassive) {
        e.preventDefault();
      }
      this.nextYear();
    }
  }, {
    key: onPreviousMonthDatePicker,
    value: function value(e) {
      if (!_supportsPassive) {
        e.preventDefault();
      }
      this.prevMonth();
    }
  }, {
    key: onNextMonthDatePicker,
    value: function value(e) {
      if (!_supportsPassive) {
        e.preventDefault();
      }
      this.nextMonth();
    }
  }, {
    key: onDateClickDatePicker,
    value: function value(e) {
      if (!_supportsPassive) {
        e.preventDefault();
      }
      if (!e.currentTarget.classList.contains('is-disabled')) {
        this.date = e.currentTarget.dataset.date;
        var _date = this.date,
            year = _date.year,
            month = _date.month,
            day = _date.day;


        this.emit('datepicker:date:selected', this);

        this.element.value = __WEBPACK_IMPORTED_MODULE_0__utils_date__["c" /* getFormatedDate */](new Date(year, month, day), this.dateFormat, this.lang);
        if (this.options.closeOnSelect) {
          this.hide();
        }
      }
    }

    /**
     * Bind events on each Day item
     * @method _bindDaysEvents
     * @return {void}
     */

  }, {
    key: '_bindDaysEvents',
    value: function _bindDaysEvents() {
      var _this3 = this;

      [].forEach.call(this.elementCalendarDays, function (calendarDay) {
        _this3._clickEvents.forEach(function (clickEvent) {
          calendarDay.addEventListener(clickEvent, _this3[onDateClickDatePicker]);
        });
      });
    }

    /**
     * Get localized day name
     * @method renderDayName
     * @param  {[type]}      day          [description]
     * @param  {Boolean}     [abbr=false] [description]
     * @return {[type]}                   [description]
     */

  }, {
    key: getDayNameDatePicker,
    value: function value(day) {
      var abbr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      // will try to use weekStart from options if provided, also verify if it's in the range 0 ~ 6
      day += typeof this.options.weekStart != 'number' && this.options.weekStart >= 0 && this.options.weekStart <= 6 ? this.options.weekStart : this.lang.weekStart;
      while (day >= 7) {
        day -= 7;
      }

      return abbr ? this.lang.weekdaysShort[day] : this.lang.weekdays[day];
    }
  }, {
    key: '_renderDay',
    value: function _renderDay(day, month, year, isSelected, isToday, isDisabled, isEmpty, isBetween, isSelectedIn, isSelectedOut) {
      return '\n      <div data-date="' + (year + '-' + month + '-' + day) + '" class="calendar-date' + (isDisabled ? ' is-disabled' : '') + (isBetween ? ' calendar-range' : '') + (isSelectedIn ? ' calendar-range-start' : '') + (isSelectedOut ? ' calendar-range-end' : '') + '">\n        <button class="date-item' + (isToday ? ' is-today' : '') + (isSelected ? ' is-active' : '') + '">' + day + '</button>\n      </div>\n    ';
    }
  }, {
    key: '_renderDays',
    value: function _renderDays() {
      var now = new Date();
      var days = '';

      var numberOfDays = __WEBPACK_IMPORTED_MODULE_0__utils_date__["b" /* getDaysInMonth */](this.date.year, this.date.month),
          before = new Date(this.date.year, this.date.month, 1).getDay();

      this.emit('datepicker:rendered', this);

      // Get start day from options
      // will try to use weekStart from options if provided, also verify if it's in the range 0 ~ 6
      var startDay = typeof this.options.weekStart != 'number' && this.options.weekStart >= 0 && this.options.weekStart <= 6 ? this.options.weekStart : this.lang.weekStart;
      if (startDay > 0) {
        before -= startDay;
        if (before < 0) {
          before += 7;
        }
      }

      var cells = numberOfDays + before,
          after = cells;
      while (after > 7) {
        after -= 7;
      }

      cells += 7 - after;
      for (var i = 0; i < cells; i++) {
        var day = new Date(this.date.year, this.date.month, 1 + (i - before)),
            isBetween = false,
            isSelected = __WEBPACK_IMPORTED_MODULE_0__utils_date__["a" /* compareDates */](day, this.options.startDate),
            isSelectedIn = false,
            isSelectedOut = false,
            isToday = __WEBPACK_IMPORTED_MODULE_0__utils_date__["a" /* compareDates */](day, now),
            isEmpty = i < before || i >= numberOfDays + before,
            isDisabled = false;

        day.setHours(0, 0, 0, 0);

        if (!isSelected) {
          isSelectedIn = false;
          isSelectedOut = false;
        }

        if (day.getMonth() !== this.date.month || this.minDate && day.getTime() < this.minDate.getTime() || this.maxDate && day.getTime() > this.maxDate.getTime()) {
          isDisabled = true;
        }

        if (this.options.disabledDates) {
          for (var j = 0; j < this.options.disabledDates.length; j++) {
            if (day.getTime() == this.options.disabledDates[j].getTime()) {
              isDisabled = true;
            }
          }
        }

        days += this._renderDay(day.getDate(), this.date.month, this.date.year, isSelected, isToday, isDisabled, isEmpty, isBetween, isSelectedIn, isSelectedOut);
      }

      this.elementCalendarBody.insertAdjacentHTML('beforeend', days);
      this.elementCalendarDays = this.elementCalendarBody.querySelectorAll('.calendar-date');
      this._bindDaysEvents();
    }

    /**
     * Navigate to the previous month and regenerate calendar
     * @method prevMonth
     * @return {void}
     */

  }, {
    key: 'prevMonth',
    value: function prevMonth() {
      this.date.month -= 1;
      this._refreshCalendar();
    }
  }, {
    key: '_disablePrevMonth',
    value: function _disablePrevMonth() {
      this.elementCalendarNavPreviousMonth.setAttribute('disabled', 'disabled');
    }
  }, {
    key: '_enablePrevMonth',
    value: function _enablePrevMonth() {
      this.elementCalendarNavPreviousMonth.removeAttribute('disabled');
    }

    /**
     * Navigate to the next month and regenerate calendar
     * @method nextMonth
     * @return {}
     */

  }, {
    key: 'nextMonth',
    value: function nextMonth() {
      this.date.month += 1;
      this._refreshCalendar();
    }
  }, {
    key: '_disableNextMonth',
    value: function _disableNextMonth() {
      this.elementCalendarNavNextMonth.setAttribute('disabled', 'disabled');
    }
  }, {
    key: '_enableNextMonth',
    value: function _enableNextMonth() {
      this.elementCalendarNavNextMonth.removeAttribute('disabled');
    }

    /**
     * Navigate to the previous year and regenerate calendar
     * @method prevYear
     * @return {void}
     */

  }, {
    key: 'prevYear',
    value: function prevYear() {
      this.date.year -= 1;
      this._refreshCalendar();
    }
  }, {
    key: '_disablePrevYear',
    value: function _disablePrevYear() {
      this.elementCalendarNavPreviousYear.setAttribute('disabled', 'disabled');
    }
  }, {
    key: '_enablePrevYear',
    value: function _enablePrevYear() {
      this.elementCalendarNavPreviousYear.removeAttribute('disabled');
    }

    /**
     * Navigate to the previous year and regenerate calendar
     * @method nextYear
     * @return {}
     */

  }, {
    key: 'nextYear',
    value: function nextYear() {
      this.date.year += 1;
      this._refreshCalendar();
    }
  }, {
    key: '_disableNextYear',
    value: function _disableNextYear() {
      this.elementCalendarNavNextYear.setAttribute('disabled', 'disabled');
    }
  }, {
    key: '_enableNextYear',
    value: function _enableNextYear() {
      this.elementCalendarNavNextYear.removeAttribute('disabled');
    }

    /**
     * Show datePicker HTML Component
     * @method show
     * @return {void}
     */

  }, {
    key: 'show',
    value: function show() {
      // Set the startDate to the input value
      if (this.element.value) {
        this.options.startDate = __WEBPACK_IMPORTED_MODULE_0__utils_date__["d" /* parseDate */](this.element.value);
      }
      // this.date.month = this.options.startDate.getMonth();
      // this.date.year = this.options.startDate.getFullYear();
      // this.date.day = this.options.startDate.getDate();
      this._refreshCalendar();

      this.emit('datepicker:show', this);

      this.elementContainer.classList.add('is-active');
      if (!this.options.overlay) {
        this._adjustPosition();
      }
      this._open = true;
    }

    /**
     * Hide datePicker HTML Component
     * @method hide
     * @return {void}
     */

  }, {
    key: 'hide',
    value: function hide() {
      this._open = false;
      this.emit('datepicker:hide', this);
      this.elementContainer.classList.remove('is-active');
    }

    /**
     * Refresh calendar with new year/month days
     * @method _refreshCalendar
     * @return {[type]}        [description]
     */

  }, {
    key: '_refreshCalendar',
    value: function _refreshCalendar() {
      if (this.date.month < 0) {
        this.date.year -= Math.ceil(Math.abs(this.date.month) / 12);
        this.date.month += 12;
      }
      if (this.date.month > 11) {
        this.date.year += Math.floor(Math.abs(this.date.month) / 12);
        this.date.month -= 12;
      }
      this.elementCalendarNavMonth.innerHTML = this.lang.months[this.date.month];
      this.elementCalendarNavYear.innerHTML = this.date.year;
      this.elementCalendarNavDay.innerHTML = this.date.day;
      this.elementCalendarBody.innerHTML = '';

      var minMonth = 0,
          minYear = 0,
          maxMonth = 12,
          maxYear = 9999;

      if (this.minDate) {
        minMonth = this.minDate.getMonth();
        minYear = this.minDate.getFullYear();
      }
      if (this.maxDate) {
        maxMonth = this.maxDate.getMonth();
        maxYear = this.maxDate.getFullYear();
      }

      if (this.date.year <= minYear) {
        this._disablePrevYear();
      } else {
        this._enablePrevYear();
      }

      if (this.date.year >= maxYear) {
        this._disableNextYear();
      } else {
        this._enableNextYear();
      }

      if (this.date.year <= minYear && this.date.month <= minMonth) {
        this._disablePrevMonth();
      } else {
        this._enablePrevMonth();
      }

      if (this.date.year >= maxYear && this.date.month >= maxMonth) {
        this._disableNextMonth();
      } else {
        this._enableNextMonth();
      }

      this._renderDays();
      return this;
    }

    /**
     * Recalculate calendar position
     * @method _adjustPosition
     * @return {void}
     */

  }, {
    key: '_adjustPosition',
    value: function _adjustPosition() {
      //var width = this.elementCalendar.offsetWidth,
      // height = this.elementCalendar.offsetHeight,
      // viewportWidth = window.innerWidth || document.documentElement.clientWidth,
      // viewportHeight = window.innerHeight || document.documentElement.clientHeight,
      // scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop,
      var left = void 0,
          top = void 0,
          clientRect = void 0;

      if (typeof this.element.getBoundingClientRect === 'function') {
        clientRect = this.element.getBoundingClientRect();
        left = clientRect.left + window.pageXOffset;
        top = clientRect.bottom + window.pageYOffset;
      } else {
        left = this.element.offsetLeft;
        top = this.element.offsetTop + this.element.offsetHeight;
        while (this.element = this.element.offsetParent) {
          left += this.element.offsetLeft;
          top += this.element.offsetTop;
        }
      }

      this.elementCalendar.style.position = 'absolute';
      this.elementCalendar.style.left = left + 'px';
      this.elementCalendar.style.top = top + 'px';
    }

    /**
     * Destroy datePicker
     * @method destroy
     * @return {[type]} [description]
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      this.elementCalendar.remove();
    }
  }, {
    key: 'id',


    /**
     * Get id of current datePicker
     */
    get: function get() {
      return this._id;
    }

    // Get current datePicker language

  }, {
    key: 'lang',
    get: function get() {
      return this._lang;
    }

    // Set datePicker language
    ,
    set: function set() {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';

      this._lang = __WEBPACK_IMPORTED_MODULE_3__langs_langs__["a" /* default */][lang];
      if (typeof this._lang === 'undefined') {
        this._lang = __WEBPACK_IMPORTED_MODULE_3__langs_langs__["a" /* default */]['en'];
      }
    }

    // Get date object

  }, {
    key: 'date',
    get: function get() {
      return this._date;
    }

    // Set startdate and init date by spliting it in {month, year, day}
    ,
    set: function set() {
      var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

      if (__WEBPACK_IMPORTED_MODULE_1__utils_type__["a" /* isString */](date)) {
        date = __WEBPACK_IMPORTED_MODULE_0__utils_date__["d" /* parseDate */](date, this.dateFormat);
      } else {
        date = __WEBPACK_IMPORTED_MODULE_0__utils_date__["d" /* parseDate */](__WEBPACK_IMPORTED_MODULE_0__utils_date__["c" /* getFormatedDate */](date, this.dateFormat, this.lang));
      }
      this._date = {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
      };
    }

    // Get minDate

  }, {
    key: 'minDate',
    get: function get() {
      return this._minDate;
    }

    // Set minDate (set to 1970-01-01 by default)
    ,
    set: function set() {
      var minDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '1970-01-01';

      if (__WEBPACK_IMPORTED_MODULE_1__utils_type__["a" /* isString */](minDate)) {
        this._minDate = __WEBPACK_IMPORTED_MODULE_0__utils_date__["d" /* parseDate */](minDate, this.dateFormat);
      } else {
        this._minDate = __WEBPACK_IMPORTED_MODULE_0__utils_date__["d" /* parseDate */](__WEBPACK_IMPORTED_MODULE_0__utils_date__["c" /* getFormatedDate */](minDate, this._dateFormat, this.lang));
      }
    }

    // Get maxDate

  }, {
    key: 'maxDate',
    get: function get() {
      return this._maxDate;
    }

    // Set maxDate (set to 9999-12-31 by default)
    ,
    set: function set() {
      var maxDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '9999-12-31';

      if (__WEBPACK_IMPORTED_MODULE_1__utils_type__["a" /* isString */](maxDate)) {
        this._maxDate = __WEBPACK_IMPORTED_MODULE_0__utils_date__["d" /* parseDate */](maxDate, this.dateFormat);
      } else {
        this._maxDate = __WEBPACK_IMPORTED_MODULE_0__utils_date__["d" /* parseDate */](__WEBPACK_IMPORTED_MODULE_0__utils_date__["c" /* getFormatedDate */](maxDate, this._dateFormat, this.lang));
      }
    }

    // Get dateFormat

  }, {
    key: 'dateFormat',
    get: function get() {
      return this._dateFormat;
    }

    // Set dateFormat (set to yyyy-mm-dd by default)
    ,
    set: function set() {
      var dateFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'yyyy-mm-dd';

      this._dateFormat = dateFormat;
      this._initDates();
      return this;
    }
  }], [{
    key: 'attach',
    value: function attach() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'input[type="date"]';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var datepickerInstances = new Array();

      var datepickers = __WEBPACK_IMPORTED_MODULE_1__utils_type__["a" /* isString */](selector) ? document.querySelectorAll(selector) : Array.isArray(selector) ? selector : [selector];
      [].forEach.call(datepickers, function (datepicker) {
        setTimeout(function () {
          datepickerInstances.push(new bulmaCalendar(datepicker, options));
        }, 100);
      });
      return datepickerInstances;
    }
  }]);

  return bulmaCalendar;
}(__WEBPACK_IMPORTED_MODULE_2__utils_events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (bulmaCalendar);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getDaysInMonth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return compareDates; });
/* unused harmony export isLeapYear */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parseDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFormatedDate; });
/**
 * Get the number of days in month
 * @method getDaysInMonth
 * @param  {Integer}       year  Year to check if we are facing a leapyear or not
 * @param  {Integer}       month Month for which we want to know the amount of days
 * @return {Integer}              Days amount
 */
var getDaysInMonth = function getDaysInMonth(year, month) {
  return [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
};

/**
 * Compare two dates
 * @method compareDates
 * @param  {Date}     a First date to compare
 * @param  {Date}     b Second Date to compare with
 * @return {Boolean}    True if dates are equal then false
 */
var compareDates = function compareDates(a, b) {
  // weak date comparison
  a.setHours(0, 0, 0, 0);
  b.setHours(0, 0, 0, 0);
  return a.getTime() === b.getTime();
};

/**
 * Check if given year is LeapYear or not
 * @method isLeapYear
 * @param  {Integer}   year Year to check
 * @return {Boolean}        True if LeapYear then False
 */
var isLeapYear = function isLeapYear(year) {
  // solution by Matti Virkkunen: http://stackoverflow.com/a/4881951
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};

/**
 * Parse Date string based on the Date Format given
 * @method parseDate
 * @param  {String}   dateString          Date string to parse
 * @param  {[String}   [format=undefined] Date Format
 * @return {Date}                         Date Object initialized with Date String based on the Date Format
 */
var parseDate = function parseDate(dateString) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

  var date = new Date();
  date.setHours(0, 0, 0, 0);

  var formatPattern = /((?:mm?)|(?:dd?)|(?:yyy?y?))[^0-9]((?:mm?)|(?:dd?)|(?:yyy?y?))[^0-9]((?:mm?)|(?:dd?)|(?:yyy?y?))/i;
  var datePattern = /(\d+)[^0-9](\d+)[^0-9](\d+)/i;

  var matchFormat = formatPattern.exec(format);
  if (matchFormat) {
    var matchDate = datePattern.exec(dateString);
    if (matchDate) {
      switch (matchFormat[1][0]) {
        case 'd':
          date.setDate(matchDate[1]);
          break;
        case 'm':
          date.setMonth(matchDate[1] - 1);
          break;
        case 'y':
          date.setFullYear(matchDate[1]);
          break;
      }

      switch (matchFormat[2][0]) {
        case 'd':
          date.setDate(matchDate[2]);
          break;
        case 'm':
          date.setMonth(matchDate[2] - 1);
          break;
        case 'y':
          date.setFullYear(matchDate[2]);
          break;
      }

      switch (matchFormat[3][0]) {
        case 'd':
          date.setDate(matchDate[3]);
          break;
        case 'm':
          date.setMonth(matchDate[3] - 1);
          break;
        case 'y':
          date.setFullYear(matchDate[3]);
          break;
      }
    }
  }

  return date;
};

/**
 * Returns date according to passed format
 * @method getFormatedDate
 * @param {Date}   dt     Date object
 * @param {String} format Format string
 *      d    - day of month
 *      dd   - 2-digits day of month
 *      D    - day of week
 *      m    - month number
 *      mm   - 2-digits month number
 *      M    - short month name
 *      MM   - full month name
 *      yy   - 2-digits year number
 *      yyyy - 4-digits year number
 */
var getFormatedDate = function getFormatedDate(dt, format, lang) {
  var items = {
    d: dt.getDate(),
    dd: dt.getDate(),
    D: dt.getDay(),
    m: dt.getMonth() + 1,
    mm: dt.getMonth() + 1,
    M: dt.getMonth(),
    MM: dt.getMonth(),
    yy: dt.getFullYear().toString().substr(-2),
    yyyy: dt.getFullYear()
  };

  items.dd < 10 && (items.dd = '0' + items.dd);
  items.mm < 10 && (items.mm = '0' + items.mm);
  items.D = lang.weekdays[items.D ? items.D - 1 : 6];
  items.M = lang.monthsShort[items.M];
  items.MM = lang.months[items.MM];

  return format.replace(/(?:[dmM]{1,2}|D|yyyy|yy)/g, function (m) {
    return typeof items[m] !== 'undefined' ? items[m] : m;
  });
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isString; });
/* unused harmony export isDate */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isString = function isString(unknown) {
  return typeof unknown === 'string' || !!unknown && (typeof unknown === 'undefined' ? 'undefined' : _typeof(unknown)) === 'object' && Object.prototype.toString.call(unknown) === '[object String]';
};
var isDate = function isDate(unknown) {
  return (Object.prototype.toString.call(unknown) === '[object Date]' || unknown instanceof Date) && !isNaN(unknown.valueOf());
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, EventEmitter);

    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  _createClass(EventEmitter, [{
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (!this._listeners.has(eventName)) {
        return 0;
      }

      var eventListeners = this._listeners.get(eventName);
      return eventListeners.length;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this.removeListeners(e, middleware);
          });
        } else {
          this._listeners.delete(eventName);

          if (middleware) {
            this.removeMiddleware(eventName);
          }
        }
      } else {
        this._listeners = new Map();
      }
    }
  }, {
    key: "middleware",
    value: function middleware(eventName, fn) {
      var _this2 = this;

      if (Array.isArray(eventName)) {
        name.forEach(function (e) {
          return _this2.middleware(e, fn);
        });
      } else {
        if (!Array.isArray(this._middlewares.get(eventName))) {
          this._middlewares.set(eventName, []);
        }

        this._middlewares.get(eventName).push(fn);
      }
    }
  }, {
    key: "removeMiddleware",
    value: function removeMiddleware() {
      var _this3 = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this3.removeMiddleware(e);
          });
        } else {
          this._middlewares.delete(eventName);
        }
      } else {
        this._middlewares = new Map();
      }
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _this4 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(name)) {
        name.forEach(function (e) {
          return _this4.on(e, callback);
        });
      } else {
        name = name.toString();
        var split = name.split(/,|, | /);

        if (split.length > 1) {
          split.forEach(function (e) {
            return _this4.on(e, callback);
          });
        } else {
          if (!Array.isArray(this._listeners.get(name))) {
            this._listeners.set(name, []);
          }

          this._listeners.get(name).push({ once: once, callback: callback });
        }
      }
    }
  }, {
    key: "once",
    value: function once(name, callback) {
      this.on(name, callback, true);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var _this5 = this;

      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      name = name.toString();
      var listeners = this._listeners.get(name);
      var middlewares = null;
      var doneCount = 0;
      var execute = silent;

      if (Array.isArray(listeners)) {
        listeners.forEach(function (listener, index) {
          // Start Middleware checks unless we're doing a silent emit
          if (!silent) {
            middlewares = _this5._middlewares.get(name);
            // Check and execute Middleware
            if (Array.isArray(middlewares)) {
              middlewares.forEach(function (middleware) {
                middleware(data, function () {
                  var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (newData !== null) {
                    data = newData;
                  }
                  doneCount++;
                }, name);
              });

              if (doneCount >= middlewares.length) {
                execute = true;
              }
            } else {
              execute = true;
            }
          }

          // If Middleware checks have been passed, execute
          if (execute) {
            if (listener.once) {
              listeners[index] = null;
            }
            listener.callback(data);
          }
        });

        // Dirty way of removing used Events
        while (listeners.indexOf(null) !== -1) {
          listeners.splice(listeners.indexOf(null), 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var datepicker_langs = {
  ar: {
    weekStart: 0,
    previousMonth: 'الشهر الماضي',
    nextMonth: 'الشهر القادم',
    months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    monthsShort: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
    weekdays: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'],
    weekdaysShort: ['السبت', 'الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة']
  },
  bn: {
    weekStart: 1,
    months: ['জানুয়ারী', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
    monthsShort: ['জানুয়ারী', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'অগাস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর'],
    weekdays: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার'],
    weekdaysShort: ['রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার', 'শনিবার']
  },
  cs: {
    weekStart: 1,
    months: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
    monthsShort: ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čvn', 'Čvc', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'],
    weekdays: ['Neděle', 'Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota'],
    weekdaysShort: ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So']
  },
  de: {
    weekStart: 1,
    previousMonth: 'Vorheriger Monat',
    nextMonth: 'Nächster Monat',
    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
    monthsShort: ['Jan', 'Febr', 'März', 'Apr', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez'],
    weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
    weekdaysShort: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa']
  },
  en: {
    weekStart: 1,
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month',
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  es: {
    weekStart: 1,
    previousMonth: 'Mes anterior',
    nextMonth: 'Próximo mes',
    months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthsShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    weekdays: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']
  },
  fa: {
    weekStart: 1,
    months: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
    monthsShort: ['ژان', 'فور', 'مار', 'آور', 'مه', 'ژون', 'ژوی', 'اوت', 'سپت', 'اکت', 'نوا', 'دسا'],
    weekdays: ['یک‌شنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه', 'یک‌شنبه'],
    weekdaysShort: ['یک', 'دو', 'سه', 'چهار', 'پنج', 'جمعه', 'شنبه', 'یک']
  },
  fr: {
    weekStart: 1,
    previousMonth: 'Mois précédent',
    nextMonth: 'Mois suivant',
    months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthsShort: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Auo', 'Sep', 'Oct', 'Nov', 'Déc'],
    weekdays: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    weekdaysShort: ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam']
  },
  hi: {
    weekStart: 1,
    months: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितम्बर', 'अक्टूबर', 'नवंबर', 'दिसम्बर'],
    monthsShort: ['जन', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितं', 'अक्टूबर', 'नवं', 'दिसम्बर'],
    weekdays: ['रविवार', 'सोमवार', 'मंगलवार', 'बुधवार', 'गुरुवार', 'शुक्रवार', 'शनिवार'],
    weekdaysShort: ['सूर्य', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि']
  },
  hr: {
    weekStart: 2,
    previousMonth: 'Prošli mjesec',
    nextMonth: 'Slijedeći mjesec',
    months: ['siječanj', 'veljača', 'ožujak', 'travanj', 'svibanj', 'lipanj', 'srpanj', 'kolovoz', 'rujan', 'listopad', 'studeni', 'prosinac'],
    monthsShort: ['sij', 'velj', 'ožu', 'tra', 'svi', 'lip', 'srp', 'kol', 'ruj', 'lis', 'stu', 'pro'],
    weekdays: ['nedjelja', 'ponedjeljak', 'utorak', 'srijeda', 'četvrtak', 'petak', 'subota'],
    weekdaysShort: ['ned', 'pon', 'uto', 'sri', 'čet', 'pet', 'sub']
  },
  hu: {
    weekStart: 1,
    previousMonth: 'Előző hónap',
    nextMonth: 'Következő hónap',
    months: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
    monthsShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún', 'Júl', 'Aug', 'Szept', 'Okt', 'Nov', 'Dec'],
    weekdays: ['Vasárnap', 'Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
    weekdaysShort: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo']
  },
  id: {
    weekStart: 1,
    months: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
    monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des'],
    weekdays: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
    weekdaysShort: ['Mgu', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']
  },
  it: {
    weekStart: 1,
    previousMonth: 'Mese Precedente',
    nextMonth: 'Prossimo Mese',
    months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    monthsShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
    weekdays: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
    weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
  },
  ja: {
    weekStart: 1,
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    weekdays: ['日曜', '月曜', '火曜', '水曜', '木曜', '金曜', '土曜'],
    weekdaysShort: ['日', '月', '火', '水', '木', '金', '土']
  },
  nl: {
    weekStart: 1,
    previousMonth: 'Vorige Maand',
    nextMonth: 'Volgende Maand',
    months: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
    monthsShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
    weekdays: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
    weekdaysShort: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za']
  },
  pt: {
    weekStart: 1,
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  },
  'pt-BR': {
    weekStart: 1,
    previousMonth: 'Mês anterior',
    nextMonth: 'Próximo mês',
    months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthsShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    weekdays: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
    weekdaysShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']
  },
  ru: {
    weekStart: 1,
    previousMonth: 'Предыдущий месяц',
    nextMonth: 'Следующий месяц',
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    weekdaysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
  },
  sr: {
    weekStart: 2,
    previousMonth: 'Prošli mesec',
    nextMonth: 'Sledeći mesec',
    months: ['januar', 'februar', 'mart', 'april', 'maj', 'jun', 'jul', 'avgust', 'septembar', 'oktobar', 'novembar', 'decembar'],
    monthsShort: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'avg', 'sep', 'okt', 'nov', 'dec'],
    weekdays: ['nedelja', 'ponedeljak', 'utorak', 'sreda', 'četvrtak', 'petak', 'subota'],
    weekdaysShort: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub']
  },
  th: {
    weekStart: 1,
    previousMonth: 'เดือนก่อนหน้า',
    nextMonth: 'เดือนถัดไป',
    months: ['มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'],
    monthsShort: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'],
    weekdays: ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'],
    weekdaysShort: ['อา.', 'จ.', 'อ.', 'พ.', 'พฤ.', 'ศ.', 'ส.']
  },
  tr: {
    weekStart: 1,
    previousMonth: 'Önceki Ay',
    nextMonth: 'Gelecek Ay',
    months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
    monthsShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
    weekdays: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
    weekdaysShort: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt']
  },
  vi: {
    weekStart: 1,
    previousMonth: 'Tháng Trước',
    nextMonth: 'Tháng Sau',
    months: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
    monthsShort: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12"],
    weekdays: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
    weekdaysShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
  },
  'zh-cn': {
    weekStart: 1,
    previousMonth: '上个月',
    nextMonth: '下个月',
    months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    weekdaysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  }
};

/* harmony default export */ __webpack_exports__["a"] = (datepicker_langs);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultOptions = {
  startDate: new Date(),
  weekStart: null,
  minDate: null,
  maxDate: null,
  disabledDates: null,
  dateFormat: 'yyyy-mm-dd', // the default data format `field` value
  lang: 'en', // internationalization
  overlay: false,
  closeOnOverlayClick: true,
  closeOnSelect: true,
  toggleOnInputClick: true,
  icons: {
    month: {
      previous: '<svg viewBox="0 0 50 80" xml:space="preserve">\n        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n      </svg>',
      next: '<svg viewBox="0 0 50 80" xml:space="preserve">\n        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n      </svg>'
    },
    year: {
      previous: '<svg viewBox="0 0 50 80" xml:space="preserve">\n        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>\n      </svg>',
      next: '<svg viewBox="0 0 50 80" xml:space="preserve">\n        <polyline fill="none" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>\n      </svg>'
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (defaultOptions);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (data) {
  return '<div id=\'' + data.id + '\' class="datepicker ' + (data.overlay ? 'modal' : '') + '">\n    ' + (data.overlay ? '<div class="modal-background"></div>' : '') + '\n    <div class="calendar">\n      <div class="calendar-nav">\n        <div class="calendar-nav-month">\n          <button class="calendar-nav-previous-month button is-small is-text">' + data.icons.month.previous + '</button>\n          <div class="calendar-month">' + data.lang.months[data.date.month] + '</div>\n          <button class="calendar-nav-next-month button is-small is-text">' + data.icons.month.next + '</button>\n        </div>\n        <div class="calendar-nav-day">\n          <div class="calendar-day">' + data.date.day + '</div>\n        </div>\n        <div class="calendar-nav-year">\n          <button class="calendar-nav-previous-year button is-small is-text">' + data.icons.year.previous + '</button>\n          <div class="calendar-year">' + data.date.year + '</div>\n          <button class="calendar-nav-next-year button is-small is-text">' + data.icons.year.next + '</button>\n        </div>\n      </div>\n      <div class="calendar-container">\n        <div class="calendar-header">\n          <div class="calendar-date">' + data.getDayName(0, true) + '</div>\n          <div class="calendar-date">' + data.getDayName(1, true) + '</div>\n          <div class="calendar-date">' + data.getDayName(2, true) + '</div>\n          <div class="calendar-date">' + data.getDayName(3, true) + '</div>\n          <div class="calendar-date">' + data.getDayName(4, true) + '</div>\n          <div class="calendar-date">' + data.getDayName(5, true) + '</div>\n          <div class="calendar-date">' + data.getDayName(6, true) + '</div>\n        </div>\n        <div class="calendar-body"></div>\n      </div>\n    </div>\n  </div>';
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptions__ = __webpack_require__(12);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var BULMA_CAROUSEL_EVENTS = {
  'ready': 'carousel:ready',
  'slideBefore': 'carousel:slide:before',
  'slideAfter': 'carousel:slide:after'
};

var onSwipeStart = Symbol('onSwipeStart');
var onSwipeMove = Symbol('onSwipeMove');
var onSwipeEnd = Symbol('onSwipeEnd');

var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      supportsPassive = true;
    }
  });
  window.addEventListener("testPassive", null, opts);
  window.removeEventListener("testPassive", null, opts);
} catch (e) {}

var bulmaCarousel = function (_EventEmitter) {
  _inherits(bulmaCarousel, _EventEmitter);

  function bulmaCarousel(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, bulmaCarousel);

    var _this = _possibleConstructorReturn(this, (bulmaCarousel.__proto__ || Object.getPrototypeOf(bulmaCarousel)).call(this));

    _this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!_this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    _this._clickEvents = ['click'];
    /// Set default options and merge with instance defined
    _this.options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptions__["a" /* default */], options);
    if (_this.element.dataset.autoplay) {
      _this.options.autoplay = _this.element.dataset.autoplay;
    }
    if (_this.element.dataset.delay) {
      _this.options.delay = _this.element.dataset.delay;
    }
    if (_this.element.dataset.size && !_this.element.classList.contains('carousel-animate-fade')) {
      _this.options.size = _this.element.dataset.size;
    }
    if (_this.element.classList.contains('carousel-animate-fade')) {
      _this.options.size = 1;
    }

    _this.forceHiddenNavigation = false;

    _this[onSwipeStart] = _this[onSwipeStart].bind(_this);
    _this[onSwipeMove] = _this[onSwipeMove].bind(_this);
    _this[onSwipeEnd] = _this[onSwipeEnd].bind(_this);

    _this.init();
    return _this;
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */


  _createClass(bulmaCarousel, [{
    key: 'init',


    /**
     * Initiate plugin
     * @method init
     * @return {void}
     */
    value: function init() {
      this.container = this.element.querySelector('.carousel-container');
      this.items = this.element.querySelectorAll('.carousel-item');
      this.currentItem = {
        element: this.element,
        node: this.element.querySelector('.carousel-item.is-active'),
        pos: -1
      };
      this.currentItem.pos = this.currentItem.node ? Array.from(this.items).indexOf(this.currentItem.node) : -1;
      if (!this.currentItem.node) {
        this.currentItem.node = this.items[0];
        this.currentItem.node.classList.add('is-active');
        this.currentItem.pos = 0;
      }
      this.forceHiddenNavigation = this.items.length <= 1;

      var images = this.element.querySelectorAll('img');
      [].forEach.call(images, function (img) {
        img.setAttribute('draggable', false);
      });

      this._resize();
      this._setOrder();
      this._initNavigation();
      this._bindEvents();

      if (this.options.autoplay) {
        this._autoPlay(this.options.delay);
      }

      this.emit(BULMA_CAROUSEL_EVENTS.ready, this.currentItem);
    }
  }, {
    key: '_resize',
    value: function _resize() {
      var _this2 = this;

      var computedStyle = window.getComputedStyle(this.element);
      var width = parseInt(computedStyle.getPropertyValue('width'), 10);

      // Detect which animation is setup and auto-calculate size and transformation
      if (this.options.size > 1) {
        if (this.options.size >= Array.from(this.items).length) {
          this.offset = 0;
        } else {
          this.offset = width / this.options.size;
        }

        this.container.style.left = 0 - this.offset + 'px';
        this.container.style.transform = 'translateX(' + this.offset + 'px)';
        [].forEach.call(this.items, function (item) {
          item.style.flexBasis = _this2.offset + 'px';
        });
      }

      // If animation is fade then force carouselContainer size (due to the position: absolute)
      if (this.element.classList.contains('carousel-animate-fade') && this.items.length) {
        var img = this.items[0].querySelector('img');
        var scale = 1;
        if (img.naturalWidth) {
          scale = width / img.naturalWidth;
          this.container.style.height = img.naturalHeight * scale + 'px';
        } else {
          img.onload = function () {
            scale = width / img.naturalWidth;
            _this2.container.style.height = img.naturalHeight * scale + 'px';
          };
        }
      }
    }

    /**
     * Bind all events
     * @method _bindEvents
     * @return {void}
     */

  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this3 = this;

      if (this.previousControl) {
        this._clickEvents.forEach(function (clickEvent) {
          _this3.previousControl.addEventListener(clickEvent, function (e) {
            if (!supportsPassive) {
              e.preventDefault();
            }
            if (_this3._autoPlayInterval) {
              clearInterval(_this3._autoPlayInterval);
              _this3._autoPlay(_this3.optionsdelay);
            }
            _this3._slide('previous');
          }, supportsPassive ? { passive: true } : false);
        });
      }

      if (this.nextControl) {
        this._clickEvents.forEach(function (clickEvent) {
          _this3.nextControl.addEventListener(clickEvent, function (e) {
            if (!supportsPassive) {
              e.preventDefault();
            }
            if (_this3._autoPlayInterval) {
              clearInterval(_this3._autoPlayInterval);
              _this3._autoPlay(_this3.options.delay);
            }
            _this3._slide('next');
          }, supportsPassive ? { passive: true } : false);
        });
      }

      // Bind swipe events
      this.element.addEventListener('touchstart', this[onSwipeStart], supportsPassive ? { passive: true } : false);
      this.element.addEventListener('mousedown', this[onSwipeStart], supportsPassive ? { passive: true } : false);
      this.element.addEventListener('touchmove', this[onSwipeMove], supportsPassive ? { passive: true } : false);
      this.element.addEventListener('mousemove', this[onSwipeMove], supportsPassive ? { passive: true } : false);
      this.element.addEventListener('touchend', this[onSwipeEnd], supportsPassive ? { passive: true } : false);
      this.element.addEventListener('mouseup', this[onSwipeEnd], supportsPassive ? { passive: true } : false);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.element.removeEventListener('touchstart', this[onSwipeStart], supportsPassive ? { passive: true } : false);
      this.element.removeEventListener('mousedown', this[onSwipeStart], supportsPassive ? { passive: true } : false);
      this.element.removeEventListener('touchmove', this[onSwipeMove], supportsPassive ? { passive: true } : false);
      this.element.removeEventListener('mousemove', this[onSwipeMove], supportsPassive ? { passive: true } : false);
      this.element.removeEventListener('touchend', this[onSwipeEnd], supportsPassive ? { passive: true } : false);
      this.element.removeEventListener('mouseup', this[onSwipeEnd], supportsPassive ? { passive: true } : false);
    }

    /**
     * Save current position on start swiping
     * @method onSwipeStart
     * @param  {Event}    e Swipe event
     * @return {void}
     */

  }, {
    key: onSwipeStart,
    value: function value(e) {
      if (!supportsPassive) {
        e.preventDefault();
      }

      e = e ? e : window.event;
      e = 'changedTouches' in e ? e.changedTouches[0] : e;
      this._touch = {
        start: {
          time: new Date().getTime(), // record time when finger first makes contact with surface
          x: e.pageX,
          y: e.pageY
        },
        dist: {
          x: 0,
          y: 0
        }
      };
    }

    /**
     * Save current position on end swiping
     * @method onSwipeMove
     * @param  {Event}  e swipe event
     * @return {void}
     */

  }, {
    key: onSwipeMove,
    value: function value(e) {
      if (!supportsPassive) {
        e.preventDefault();
      }
    }

    /**
     * Save current position on end swiping
     * @method onSwipeEnd
     * @param  {Event}  e swipe event
     * @return {void}
     */

  }, {
    key: onSwipeEnd,
    value: function value(e) {
      if (!supportsPassive) {
        e.preventDefault();
      }

      e = e ? e : window.event;
      e = 'changedTouches' in e ? e.changedTouches[0] : e;
      this._touch.dist = {
        x: e.pageX - this._touch.start.x, // get horizontal dist traveled by finger while in contact with surface
        y: e.pageY - this._touch.start.y // get vertical dist traveled by finger while in contact with surface
      };

      this._handleGesture();
    }

    /**
     * Identify the gestureand slide if necessary
     * @method _handleGesture
     * @return {void}
     */

  }, {
    key: '_handleGesture',
    value: function _handleGesture() {
      var elapsedTime = new Date().getTime() - this._touch.start.time; // get time elapsed
      if (elapsedTime <= this.options.allowedTime) {
        // first condition for awipe met
        if (Math.abs(this._touch.dist.x) >= this.options.threshold && Math.abs(this._touch.dist.y) <= this.options.restraint) {
          // 2nd condition for horizontal swipe met
          this._touch.dist.x < 0 ? this._slide('next') : this._slide('previous'); // if dist traveled is negative, it indicates left swipe
        }
      }
    }

    /**
     * Initiate Navigation area and Previous/Next buttons
     * @method _initNavigation
     * @return {[type]}        [description]
     */

  }, {
    key: '_initNavigation',
    value: function _initNavigation() {
      this.previousControl = this.element.querySelector('.carousel-nav-left');
      this.nextControl = this.element.querySelector('.carousel-nav-right');

      if (this.items.length <= 1 || this.forceHiddenNavigation) {
        if (this.container) {
          this.container.style.left = '0';
        }
        if (this.previousControl) {
          this.previousControl.style.display = 'none';
        }
        if (this.nextControl) {
          this.nextControl.style.display = 'none';
        }
      }
    }

    /**
     * Update each item order
     * @method _setOrder
     */

  }, {
    key: '_setOrder',
    value: function _setOrder() {
      this.currentItem.node.style.order = '1';
      this.currentItem.node.style.zIndex = '1';
      var item = this.currentItem.node;
      var i = void 0,
          j = void 0,
          ref = void 0;
      for (i = j = 2, ref = Array.from(this.items).length; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
        item = this._next(item);
        item.style.order = '' + i % Array.from(this.items).length;
        item.style.zIndex = '0';
      }
    }

    /**
     * Find next item to display
     * @method _next
     * @param  {Node} element Current Node element
     * @return {Node}         Next Node element
     */

  }, {
    key: '_next',
    value: function _next(element) {
      if (element.nextElementSibling) {
        return element.nextElementSibling;
      } else {
        return this.items[0];
      }
    }

    /**
     * Find previous item to display
     * @method _previous
     * @param  {Node}  element Current Node element
     * @return {Node}          Previous Node element
     */

  }, {
    key: '_previous',
    value: function _previous(element) {
      if (element.previousElementSibling) {
        return element.previousElementSibling;
      } else {
        return this.items[this.items.length - 1];
      }
    }

    /**
     * Update slides to display the wanted one
     * @method _slide
     * @param  {String} [direction='next'] Direction in which items need to move
     * @return {void}
     */

  }, {
    key: '_slide',
    value: function _slide() {
      var _this4 = this;

      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'next';

      if (this.items.length) {
        this.oldItemNode = this.currentItem.node;
        this.emit(BULMA_CAROUSEL_EVENTS.slideBefore, this.currentItem);
        // initialize direction to change order
        if (direction === 'previous') {
          this.currentItem.node = this._previous(this.currentItem.node);
          // add reverse class
          if (!this.element.classList.contains('carousel-animate-fade')) {
            this.element.classList.add('is-reversing');
            this.container.style.transform = 'translateX(' + -Math.abs(this.offset) + 'px)';
          }
        } else {
          // Reorder items
          this.currentItem.node = this._next(this.currentItem.node);
          // re_slide reverse class
          this.element.classList.remove('is-reversing');
          this.container.style.transform = 'translateX(' + Math.abs(this.offset) + 'px)';
        }
        this.currentItem.node.classList.add('is-active');
        this.oldItemNode.classList.remove('is-active');

        // Disable transition to instant change order
        this.element.classList.remove('carousel-animated');
        // Enable transition to animate order 1 to order 2
        setTimeout(function () {
          _this4.element.classList.add('carousel-animated');
        }, 50);

        this._setOrder();
        this.emit(BULMA_CAROUSEL_EVENTS.slideAfter, this.currentItem);
      }
    }

    /**
     * Initiate autoplay system
     * @method _autoPlay
     * @param  {Number}  [delay=5000] Delay between slides in milliseconds
     * @return {void}
     */

  }, {
    key: '_autoPlay',
    value: function _autoPlay() {
      var _this5 = this;

      var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;

      this._autoPlayInterval = setInterval(function () {
        _this5._slide('next');
      }, delay);
    }
  }], [{
    key: 'attach',
    value: function attach() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.carousel, .hero-carousel';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var instances = new Array();

      var elements = document.querySelectorAll(selector);
      [].forEach.call(elements, function (element) {
        setTimeout(function () {
          instances.push(new bulmaCarousel(element, options));
        }, 100);
      });
      return instances;
    }
  }]);

  return bulmaCarousel;
}(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (bulmaCarousel);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, EventEmitter);

    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  _createClass(EventEmitter, [{
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (!this._listeners.has(eventName)) {
        return 0;
      }

      var eventListeners = this._listeners.get(eventName);
      return eventListeners.length;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this.removeListeners(e, middleware);
          });
        } else {
          this._listeners.delete(eventName);

          if (middleware) {
            this.removeMiddleware(eventName);
          }
        }
      } else {
        this._listeners = new Map();
      }
    }
  }, {
    key: "middleware",
    value: function middleware(eventName, fn) {
      var _this2 = this;

      if (Array.isArray(eventName)) {
        name.forEach(function (e) {
          return _this2.middleware(e, fn);
        });
      } else {
        if (!Array.isArray(this._middlewares.get(eventName))) {
          this._middlewares.set(eventName, []);
        }

        this._middlewares.get(eventName).push(fn);
      }
    }
  }, {
    key: "removeMiddleware",
    value: function removeMiddleware() {
      var _this3 = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this3.removeMiddleware(e);
          });
        } else {
          this._middlewares.delete(eventName);
        }
      } else {
        this._middlewares = new Map();
      }
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _this4 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(name)) {
        name.forEach(function (e) {
          return _this4.on(e, callback);
        });
      } else {
        name = name.toString();
        var split = name.split(/,|, | /);

        if (split.length > 1) {
          split.forEach(function (e) {
            return _this4.on(e, callback);
          });
        } else {
          if (!Array.isArray(this._listeners.get(name))) {
            this._listeners.set(name, []);
          }

          this._listeners.get(name).push({ once: once, callback: callback });
        }
      }
    }
  }, {
    key: "once",
    value: function once(name, callback) {
      this.on(name, callback, true);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var _this5 = this;

      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      name = name.toString();
      var listeners = this._listeners.get(name);
      var middlewares = null;
      var doneCount = 0;
      var execute = silent;

      if (Array.isArray(listeners)) {
        listeners.forEach(function (listener, index) {
          // Start Middleware checks unless we're doing a silent emit
          if (!silent) {
            middlewares = _this5._middlewares.get(name);
            // Check and execute Middleware
            if (Array.isArray(middlewares)) {
              middlewares.forEach(function (middleware) {
                middleware(data, function () {
                  var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (newData !== null) {
                    data = newData;
                  }
                  doneCount++;
                }, name);
              });

              if (doneCount >= middlewares.length) {
                execute = true;
              }
            } else {
              execute = true;
            }
          }

          // If Middleware checks have been passed, execute
          if (execute) {
            if (listener.once) {
              listeners[index] = null;
            }
            listener.callback(data);
          }
        });

        // Dirty way of removing used Events
        while (listeners.indexOf(null) !== -1) {
          listeners.splice(listeners.indexOf(null), 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultOptions = {
  size: 1,
  autoplay: false,
  delay: 5000,
  threshold: 50, //required min distance traveled to be considered swipe
  restraint: 100, // maximum distance allowed at the same time in perpendicular direction
  allowedTime: 500 // maximum time allowed to travel that distance
};

/* harmony default export */ __webpack_exports__["a"] = (defaultOptions);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptions__ = __webpack_require__(15);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var fetchStyle = function fetchStyle(url) {
  return new Promise(function (resolve, reject) {
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.onload = function () {
      resolve();
    };
    link.href = url;

    if (!document.querySelector('link[href="' + url + '"]')) {
      var headScript = document.querySelector('head');
      headScript.append(link);
    }
  });
};

var bulmaIconpicker = function (_EventEmitter) {
  _inherits(bulmaIconpicker, _EventEmitter);

  function bulmaIconpicker(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, bulmaIconpicker);

    var _this = _possibleConstructorReturn(this, (bulmaIconpicker.__proto__ || Object.getPrototypeOf(bulmaIconpicker)).call(this));

    _this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!_this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    _this._clickEvents = ['click'];
    /// Set default options and merge with instance defined
    _this.options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptions__["a" /* default */], options);

    _this.icons = [];
    _this.id = 'iconPicker' + new Date().getTime();
    _this.init();
    return _this;
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */


  _createClass(bulmaIconpicker, [{
    key: 'init',
    value: function init() {
      var _this2 = this;

      this.createModal();
      this.createPreview();

      this.options.iconSets.forEach(function (iconSet) {
        fetchStyle(iconSet.css);
        // Parse CSS file to get array of all available icons
        fetch(iconSet.css, { mode: 'cors' }).then(function (res) {
          return res.text();
        }).then(function (css) {
          _this2.icons[iconSet.name] = _this2.parseCSS(css, iconSet.prefix || 'fa-', iconSet.displayPrefix || '');
          _this2.modalSetTabs.querySelector('a').click();
          var touchEvent = new Event('touchstart');
          _this2.modalSetTabs.querySelector('a').dispatchEvent(touchEvent);
        });
      });
    }
  }, {
    key: 'createPreview',
    value: function createPreview() {
      var _this3 = this;

      this.preview = document.createElement('div');
      this.preview.className = 'icon is-large';
      this.preview.classList.add('iconpicker-preview');
      var iconPreview = document.createElement('i');
      iconPreview.className = 'iconpicker-icon-preview';
      if (this.element.value.length) {
        var classes = this.element.value.split(' ');
        classes.forEach(function (cls) {
          iconPreview.classList.add(cls);
        });
      }
      this.preview.appendChild(iconPreview);

      this._clickEvents.forEach(function (event) {
        _this3.preview.addEventListener(event, function (e) {
          e.preventDefault();

          _this3.modal.classList.add('is-active');
        });
      });

      this.element.parentNode.insertBefore(this.preview, this.element.nextSibling);
    }
  }, {
    key: 'parseCSS',
    value: function parseCSS(css) {
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fa-';
      var displayPrefix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      var iconPattern = new RegExp('\\.' + prefix + '([^\\.!:]*)::?before\\s*{\\s*content:\\s*["|\']\\\\[^\'|"]*["|\'];?\\s*}', 'g');
      var index = 1;
      var icons = [],
          icon = void 0,
          match = void 0;

      while (match = iconPattern.exec(css)) {
        icon = {
          prefix: prefix,
          selector: prefix + match[index].trim(':'),
          name: this.ucwords(match[index]).trim(':'),
          filter: match[index].trim(':'),
          displayPrefix: displayPrefix
        };
        icons[match[index]] = icon;
      }

      if (Object.getOwnPropertyNames(this.icons).length == 0) {
        console.warn("No icons found in CSS file");
      }
      return icons;
    }
  }, {
    key: 'ucwords',
    value: function ucwords(str) {
      return (str + '').replace(/^(.)|\s+(.)/g, function ($1) {
        return $1.toUpperCase();
      });
    }
  }, {
    key: 'drawIcons',
    value: function drawIcons(iconSet) {
      this.iconsList.innerHTML = '';

      if (iconSet) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.entries(iconSet)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ref = _step.value;

            var _ref2 = _slicedToArray(_ref, 2);

            var iconName = _ref2[0];
            var icon = _ref2[1];

            this.iconsList.appendChild(this.createIconPreview(icon));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: 'createIconPreview',
    value: function createIconPreview(icon) {
      var _this4 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fa-';

      var iconLink = document.createElement('a');
      iconLink.dataset.title = icon['name'];
      iconLink.setAttribute('title', icon['name']);
      iconLink.dataset.icon = icon['selector'];
      iconLink.dataset.filter = icon['filter'];
      var iconPreview = document.createElement('i');
      iconPreview.className = 'iconpicker-icon-preview';
      if (icon['displayPrefix'].length) {
        prefix = icon['displayPrefix'].split(' ');
        prefix.forEach(function (pfx) {
          iconPreview.classList.add(pfx);
        });
      }
      iconPreview.classList.add(icon['selector']);
      iconLink.appendChild(iconPreview);
      this._clickEvents.forEach(function (event) {
        iconLink.addEventListener(event, function (e) {
          e.preventDefault();
          _this4.preview.innerHTML = '';
          _this4.element.value = e.target.classList;
          _this4.element.dispatchEvent(new Event('change'));
          _this4.preview.appendChild(e.target.cloneNode(true));
          _this4.modal.classList.remove('is-active');
        });
      });
      return iconLink;
    }
  }, {
    key: 'createModal',
    value: function createModal() {
      var _this5 = this;

      this.modal = document.createElement('div');
      this.modal.className = 'modal';
      this.modal.classList.add('iconpicker-modal');
      this.modal.id = this.id;
      var modalBackground = document.createElement('div');
      modalBackground.className = 'modal-background';
      var modalCard = document.createElement('div');
      modalCard.className = 'modal-card';

      var modalHeader = document.createElement('header');
      modalHeader.className = 'modal-card-head';
      var modalHeaderTitle = document.createElement('p');
      modalHeaderTitle.className = 'modal-card-title';
      modalHeaderTitle.innerHTML = 'iconPicker';
      this.modalHeaderSearch = document.createElement('input');
      this.modalHeaderSearch.setAttribute('type', 'search');
      this.modalHeaderSearch.setAttribute('placeholder', 'Search');
      this.modalHeaderSearch.className = 'iconpicker-search';
      this.modalHeaderSearch.addEventListener('input', function (e) {
        _this5.filter(e.target.value);
      });
      var modalHeaderClose = document.createElement('button');
      modalHeaderClose.className = 'delete';
      this._clickEvents.forEach(function (event) {
        modalHeaderClose.addEventListener(event, function (e) {
          e.preventDefault();

          _this5.modal.classList.remove('is-active');
        });
      });

      modalCard.appendChild(modalHeader);

      this.modalBody = document.createElement('section');
      this.modalBody.className = 'modal-card-body';

      if (this.options.iconSets.length >= 1) {
        var modalSets = document.createElement('div');
        modalSets.className = 'iconpicker-sets';
        modalSets.classList.add('tabs');
        this.modalSetTabs = document.createElement('ul');
        this.options.iconSets.forEach(function (iconSet) {
          var modalSetTab = document.createElement('li');
          var modalSetTabLink = document.createElement('a');
          modalSetTabLink.dataset.iconset = iconSet.name;
          modalSetTabLink.innerHTML = iconSet.name;
          _this5._clickEvents.forEach(function (event) {
            modalSetTabLink.addEventListener(event, function (e) {
              e.preventDefault();

              var activeModalTabs = _this5.modalSetTabs.querySelectorAll('.is-active');
              [].forEach.call(activeModalTabs, function (activeModalTab) {
                activeModalTab.classList.remove('is-active');
              });

              e.target.parentNode.classList.add('is-active');
              _this5.drawIcons(_this5.icons[e.target.dataset.iconset]);
              _this5.filter(_this5.modalHeaderSearch.value);
            });
          });
          modalSetTab.appendChild(modalSetTabLink);
          _this5.modalSetTabs.appendChild(modalSetTab);
        });
        modalSets.appendChild(this.modalSetTabs);
        modalCard.appendChild(modalSets);
      }

      this.iconsList = document.createElement('div');
      this.iconsList.className = 'iconpicker-icons';

      modalHeader.appendChild(modalHeaderTitle);
      modalHeader.appendChild(this.modalHeaderSearch);
      modalHeader.appendChild(modalHeaderClose);

      this.modalBody.appendChild(this.iconsList);
      modalCard.appendChild(this.modalBody);

      this.modal.appendChild(modalBackground);
      this.modal.appendChild(modalCard);
      document.body.appendChild(this.modal);
    }
  }, {
    key: 'filter',
    value: function filter() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (value === '') {
        this.iconsList.querySelectorAll('[data-filter]').forEach(function (el) {
          el.classList.remove('is-hidden');
        });
        return;
      }
      this.iconsList.querySelectorAll('[data-filter]').forEach(function (el) {
        el.classList.remove('is-hidden');
      });
      this.iconsList.querySelectorAll('[data-filter]:not([data-filter*="' + value + '"])').forEach(function (el) {
        el.classList.add('is-hidden');
      });
    }
  }], [{
    key: 'attach',
    value: function attach() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-action="iconPicker"]';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var instances = new Array();

      var elements = document.querySelectorAll(selector);
      [].forEach.call(elements, function (element) {
        setTimeout(function () {
          instances.push(new bulmaIconpicker(element, options));
        }, 100);
      });
      return instances;
    }
  }]);

  return bulmaIconpicker;
}(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (bulmaIconpicker);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, EventEmitter);

    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  _createClass(EventEmitter, [{
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (!this._listeners.has(eventName)) {
        return 0;
      }

      var eventListeners = this._listeners.get(eventName);
      return eventListeners.length;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this.removeListeners(e, middleware);
          });
        } else {
          this._listeners.delete(eventName);

          if (middleware) {
            this.removeMiddleware(eventName);
          }
        }
      } else {
        this._listeners = new Map();
      }
    }
  }, {
    key: "middleware",
    value: function middleware(eventName, fn) {
      var _this2 = this;

      if (Array.isArray(eventName)) {
        name.forEach(function (e) {
          return _this2.middleware(e, fn);
        });
      } else {
        if (!Array.isArray(this._middlewares.get(eventName))) {
          this._middlewares.set(eventName, []);
        }

        this._middlewares.get(eventName).push(fn);
      }
    }
  }, {
    key: "removeMiddleware",
    value: function removeMiddleware() {
      var _this3 = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this3.removeMiddleware(e);
          });
        } else {
          this._middlewares.delete(eventName);
        }
      } else {
        this._middlewares = new Map();
      }
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _this4 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(name)) {
        name.forEach(function (e) {
          return _this4.on(e, callback);
        });
      } else {
        name = name.toString();
        var split = name.split(/,|, | /);

        if (split.length > 1) {
          split.forEach(function (e) {
            return _this4.on(e, callback);
          });
        } else {
          if (!Array.isArray(this._listeners.get(name))) {
            this._listeners.set(name, []);
          }

          this._listeners.get(name).push({ once: once, callback: callback });
        }
      }
    }
  }, {
    key: "once",
    value: function once(name, callback) {
      this.on(name, callback, true);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var _this5 = this;

      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      name = name.toString();
      var listeners = this._listeners.get(name);
      var middlewares = null;
      var doneCount = 0;
      var execute = silent;

      if (Array.isArray(listeners)) {
        listeners.forEach(function (listener, index) {
          // Start Middleware checks unless we're doing a silent emit
          if (!silent) {
            middlewares = _this5._middlewares.get(name);
            // Check and execute Middleware
            if (Array.isArray(middlewares)) {
              middlewares.forEach(function (middleware) {
                middleware(data, function () {
                  var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (newData !== null) {
                    data = newData;
                  }
                  doneCount++;
                }, name);
              });

              if (doneCount >= middlewares.length) {
                execute = true;
              }
            } else {
              execute = true;
            }
          }

          // If Middleware checks have been passed, execute
          if (execute) {
            if (listener.once) {
              listeners[index] = null;
            }
            listener.callback(data);
          }
        });

        // Dirty way of removing used Events
        while (listeners.indexOf(null) !== -1) {
          listeners.splice(listeners.indexOf(null), 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultOptions = {
  iconSets: [{
    name: 'simpleLine', // Name displayed on tab
    css: 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css', // CSS url containing icons rules
    prefix: 'icon-', // CSS rules prefix to identify icons
    displayPrefix: ''
  }, {
    name: 'fontAwesome', // Name displayed on tab
    css: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', // CSS url containing icons rules
    prefix: 'fa-', // CSS rules prefix to identify icons
    displayPrefix: 'fas fa-icon'
  }]
};

/* harmony default export */ __webpack_exports__["a"] = (defaultOptions);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptions__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var onQuickviewShowClick = Symbol('onQuickviewShowClick');
var onQuickviewDismissClick = Symbol('onQuickviewDismissClick');

var bulmaQuickview = function (_EventEmitter) {
  _inherits(bulmaQuickview, _EventEmitter);

  function bulmaQuickview(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, bulmaQuickview);

    var _this = _possibleConstructorReturn(this, (bulmaQuickview.__proto__ || Object.getPrototypeOf(bulmaQuickview)).call(this));

    _this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!_this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    _this._clickEvents = ['click'];
    /// Set default options and merge with instance defined
    _this.options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptions__["a" /* default */], options);

    _this[onQuickviewShowClick] = _this[onQuickviewShowClick].bind(_this);
    _this[onQuickviewDismissClick] = _this[onQuickviewDismissClick].bind(_this);

    _this.init();
    return _this;
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */


  _createClass(bulmaQuickview, [{
    key: 'init',


    /**
     * Initiate plugin
     * @method init
     * @return {void}
     */
    value: function init() {
      this.quickview = document.getElementById(this.element.dataset['target']);
      this.dismissElements = document.querySelectorAll('[data-dismiss="quickview"]');

      this._bindEvents();

      this.emit('quickview:ready', {
        element: this.element,
        quickview: this.quickview
      });
    }

    /**
     * Bind all events
     * @method _bindEvents
     * @return {void}
     */

  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this2 = this;

      this._clickEvents.forEach(function (event) {
        _this2.element.addEventListener(event, _this2[onQuickviewShowClick], false);
      });

      [].forEach.call(this.dismissElements, function (dismissElement) {
        _this2._clickEvents.forEach(function (event) {
          dismissElement.addEventListener(event, _this2[onQuickviewDismissClick], false);
        });
      });
    }
  }, {
    key: onQuickviewShowClick,
    value: function value(e) {
      this.quickview.classList.add('is-active');

      this.emit('quickview:show', {
        element: this.element,
        quickview: this.quickview
      });
    }
  }, {
    key: onQuickviewDismissClick,
    value: function value(e) {
      this.quickview.classList.remove('is-active');

      this.emit('quickview:hide', {
        element: this.element,
        quickview: this.quickview
      });
    }
  }], [{
    key: 'attach',
    value: function attach() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-show="quickview"]';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var instances = new Array();

      var elements = document.querySelectorAll(selector);
      [].forEach.call(elements, function (element) {
        setTimeout(function () {
          instances.push(new bulmaQuickview(element, options));
        }, 100);
      });
      return instances;
    }
  }]);

  return bulmaQuickview;
}(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (bulmaQuickview);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, EventEmitter);

    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  _createClass(EventEmitter, [{
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (!this._listeners.has(eventName)) {
        return 0;
      }

      var eventListeners = this._listeners.get(eventName);
      return eventListeners.length;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this.removeListeners(e, middleware);
          });
        } else {
          this._listeners.delete(eventName);

          if (middleware) {
            this.removeMiddleware(eventName);
          }
        }
      } else {
        this._listeners = new Map();
      }
    }
  }, {
    key: "middleware",
    value: function middleware(eventName, fn) {
      var _this2 = this;

      if (Array.isArray(eventName)) {
        name.forEach(function (e) {
          return _this2.middleware(e, fn);
        });
      } else {
        if (!Array.isArray(this._middlewares.get(eventName))) {
          this._middlewares.set(eventName, []);
        }

        this._middlewares.get(eventName).push(fn);
      }
    }
  }, {
    key: "removeMiddleware",
    value: function removeMiddleware() {
      var _this3 = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this3.removeMiddleware(e);
          });
        } else {
          this._middlewares.delete(eventName);
        }
      } else {
        this._middlewares = new Map();
      }
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _this4 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(name)) {
        name.forEach(function (e) {
          return _this4.on(e, callback);
        });
      } else {
        name = name.toString();
        var split = name.split(/,|, | /);

        if (split.length > 1) {
          split.forEach(function (e) {
            return _this4.on(e, callback);
          });
        } else {
          if (!Array.isArray(this._listeners.get(name))) {
            this._listeners.set(name, []);
          }

          this._listeners.get(name).push({ once: once, callback: callback });
        }
      }
    }
  }, {
    key: "once",
    value: function once(name, callback) {
      this.on(name, callback, true);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var _this5 = this;

      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      name = name.toString();
      var listeners = this._listeners.get(name);
      var middlewares = null;
      var doneCount = 0;
      var execute = silent;

      if (Array.isArray(listeners)) {
        listeners.forEach(function (listener, index) {
          // Start Middleware checks unless we're doing a silent emit
          if (!silent) {
            middlewares = _this5._middlewares.get(name);
            // Check and execute Middleware
            if (Array.isArray(middlewares)) {
              middlewares.forEach(function (middleware) {
                middleware(data, function () {
                  var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (newData !== null) {
                    data = newData;
                  }
                  doneCount++;
                }, name);
              });

              if (doneCount >= middlewares.length) {
                execute = true;
              }
            } else {
              execute = true;
            }
          }

          // If Middleware checks have been passed, execute
          if (execute) {
            if (listener.once) {
              listeners[index] = null;
            }
            listener.callback(data);
          }
        });

        // Dirty way of removing used Events
        while (listeners.indexOf(null) !== -1) {
          listeners.splice(listeners.indexOf(null), 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultOptions = {};

/* harmony default export */ __webpack_exports__["a"] = (defaultOptions);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptions__ = __webpack_require__(21);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var onSliderInput = Symbol('onSliderInput');

var bulmaSlider = function (_EventEmitter) {
  _inherits(bulmaSlider, _EventEmitter);

  function bulmaSlider(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, bulmaSlider);

    var _this = _possibleConstructorReturn(this, (bulmaSlider.__proto__ || Object.getPrototypeOf(bulmaSlider)).call(this));

    _this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!_this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    _this._clickEvents = ['click'];
    /// Set default options and merge with instance defined
    _this.options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptions__["a" /* default */], options);

    _this[onSliderInput] = _this[onSliderInput].bind(_this);

    _this.init();
    return _this;
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */


  _createClass(bulmaSlider, [{
    key: 'init',


    /**
     * Initiate plugin
     * @method init
     * @return {void}
     */
    value: function init() {
      this._id = 'bulmaSlider' + new Date().getTime() + Math.floor(Math.random() * Math.floor(9999));
      this.output = this._findOutputForSlider();

      if (this.output) {
        if (this.element.classList.contains('has-output-tooltip')) {
          // Get new output position
          var newPosition = this._getSliderOutputPosition();

          // Set output position
          this.output.style['left'] = newPosition.position;
        }
      }

      this.emit('bulmaslider:ready', this.element.value);
    }
  }, {
    key: '_findOutputForSlider',
    value: function _findOutputForSlider() {
      var _this2 = this;

      var outputs = document.getElementsByTagName('output');
      [].forEach.call(outputs, function (output) {
        if (output.htmlFor == _this2.element.getAttribute('id')) {
          return output;
        }
      });
      return null;
    }
  }, {
    key: '_getSliderOutputPosition',
    value: function _getSliderOutputPosition() {
      // Update output position
      var newPlace, minValue;

      var style = window.getComputedStyle(this.element, null);
      // Measure width of range input
      var sliderWidth = parseInt(style.getPropertyValue('width'), 10);

      // Figure out placement percentage between left and right of input
      if (!this.element.getAttribute('min')) {
        minValue = 0;
      } else {
        minValue = this.element.getAttribute('min');
      }
      var newPoint = (this.element.value - minValue) / (this.element.getAttribute('max') - minValue);

      // Prevent bubble from going beyond left or right (unsupported browsers)
      if (newPoint < 0) {
        newPlace = 0;
      } else if (newPoint > 1) {
        newPlace = sliderWidth;
      } else {
        newPlace = sliderWidth * newPoint;
      }

      return {
        'position': newPlace + 'px'
      };
    }

    /**
     * Bind all events
     * @method _bindEvents
     * @return {void}
     */

  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      if (this.output) {
        // Add event listener to update output when slider value change
        this.element.addEventListener('input', this[onSliderInput], false);
      }
    }
  }, {
    key: onSliderInput,
    value: function value(e) {
      e.preventDefault();

      if (this.element.classList.contains('has-output-tooltip')) {
        // Get new output position
        var newPosition = this._getSliderOutputPosition();

        // Set output position
        this.output.style['left'] = newPosition.position;
      }

      // Check for prefix and postfix
      var prefix = this.output.hasAttribute('data-prefix') ? this.output.getAttribute('data-prefix') : '';
      var postfix = this.output.hasAttribute('data-postfix') ? this.output.getAttribute('data-postfix') : '';

      // Update output with slider value
      this.output.value = prefix + this.element.value + postfix;

      this.emit('bulmaslider:ready', this.element.value);
    }
  }], [{
    key: 'attach',
    value: function attach() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'input[type="range"].slider';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var instances = new Array();

      var elements = document.querySelectorAll(selector);
      [].forEach.call(elements, function (element) {
        setTimeout(function () {
          instances.push(new bulmaSlider(element, options));
        }, 100);
      });
      return instances;
    }
  }]);

  return bulmaSlider;
}(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (bulmaSlider);

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, EventEmitter);

    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  _createClass(EventEmitter, [{
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (!this._listeners.has(eventName)) {
        return 0;
      }

      var eventListeners = this._listeners.get(eventName);
      return eventListeners.length;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this.removeListeners(e, middleware);
          });
        } else {
          this._listeners.delete(eventName);

          if (middleware) {
            this.removeMiddleware(eventName);
          }
        }
      } else {
        this._listeners = new Map();
      }
    }
  }, {
    key: "middleware",
    value: function middleware(eventName, fn) {
      var _this2 = this;

      if (Array.isArray(eventName)) {
        name.forEach(function (e) {
          return _this2.middleware(e, fn);
        });
      } else {
        if (!Array.isArray(this._middlewares.get(eventName))) {
          this._middlewares.set(eventName, []);
        }

        this._middlewares.get(eventName).push(fn);
      }
    }
  }, {
    key: "removeMiddleware",
    value: function removeMiddleware() {
      var _this3 = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this3.removeMiddleware(e);
          });
        } else {
          this._middlewares.delete(eventName);
        }
      } else {
        this._middlewares = new Map();
      }
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _this4 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(name)) {
        name.forEach(function (e) {
          return _this4.on(e, callback);
        });
      } else {
        name = name.toString();
        var split = name.split(/,|, | /);

        if (split.length > 1) {
          split.forEach(function (e) {
            return _this4.on(e, callback);
          });
        } else {
          if (!Array.isArray(this._listeners.get(name))) {
            this._listeners.set(name, []);
          }

          this._listeners.get(name).push({ once: once, callback: callback });
        }
      }
    }
  }, {
    key: "once",
    value: function once(name, callback) {
      this.on(name, callback, true);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var _this5 = this;

      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      name = name.toString();
      var listeners = this._listeners.get(name);
      var middlewares = null;
      var doneCount = 0;
      var execute = silent;

      if (Array.isArray(listeners)) {
        listeners.forEach(function (listener, index) {
          // Start Middleware checks unless we're doing a silent emit
          if (!silent) {
            middlewares = _this5._middlewares.get(name);
            // Check and execute Middleware
            if (Array.isArray(middlewares)) {
              middlewares.forEach(function (middleware) {
                middleware(data, function () {
                  var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (newData !== null) {
                    data = newData;
                  }
                  doneCount++;
                }, name);
              });

              if (doneCount >= middlewares.length) {
                execute = true;
              }
            } else {
              execute = true;
            }
          }

          // If Middleware checks have been passed, execute
          if (execute) {
            if (listener.once) {
              listeners[index] = null;
            }
            listener.callback(data);
          }
        });

        // Dirty way of removing used Events
        while (listeners.indexOf(null) !== -1) {
          listeners.splice(listeners.indexOf(null), 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultOptions = {};

/* harmony default export */ __webpack_exports__["a"] = (defaultOptions);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__events__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptions__ = __webpack_require__(24);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var onStepsPrevious = Symbol('onStepsPrevious');
var onStepsNext = Symbol('onStepsNext');

var bulmaSteps = function (_EventEmitter) {
  _inherits(bulmaSteps, _EventEmitter);

  function bulmaSteps(selector) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, bulmaSteps);

    var _this = _possibleConstructorReturn(this, (bulmaSteps.__proto__ || Object.getPrototypeOf(bulmaSteps)).call(this));

    _this.element = typeof selector === 'string' ? document.querySelector(selector) : selector;
    // An invalid selector or non-DOM node has been provided.
    if (!_this.element) {
      throw new Error('An invalid selector or non-DOM node has been provided.');
    }

    _this._clickEvents = ['click'];
    /// Set default options and merge with instance defined
    _this.options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptions__["a" /* default */], options);

    _this[onStepsPrevious] = _this[onStepsPrevious].bind(_this);
    _this[onStepsNext] = _this[onStepsNext].bind(_this);

    _this.init();
    return _this;
  }

  /**
   * Initiate all DOM element containing carousel class
   * @method
   * @return {Array} Array of all Carousel instances
   */


  _createClass(bulmaSteps, [{
    key: 'init',


    /**
     * Initiate plugin
     * @method init
     * @return {void}
     */
    value: function init() {
      this._id = 'bulmaSteps' + new Date().getTime() + Math.floor(Math.random() * Math.floor(9999));

      this.steps = this.element.querySelectorAll(this.options.selector);
      this.contents = this.element.querySelectorAll(this.options.selector_content);
      this.previous_btn = this.element.querySelector(this.options.previous_selector);
      this.next_btn = this.element.querySelector(this.options.next_selector);

      [].forEach.call(this.steps, function (step, index) {
        step.setAttribute('data-step-id', index);
      });

      if (this.steps && this.steps.length) {
        this.activate_step(0);
        this.updateActions(this.steps[0]);
      }

      this._bindEvents();

      this.emit('bulmasteps:ready', this.element.value);
    }

    /**
     * Bind all events
     * @method _bindEvents
     * @return {void}
     */

  }, {
    key: '_bindEvents',
    value: function _bindEvents() {
      var _this2 = this;

      if (this.previous_btn != null) {
        this._clickEvents.forEach(function (event) {
          _this2.previous_btn.addEventListener(event, _this2[onStepsPrevious], false);
        });
      }

      if (this.next_btn != null) {
        this._clickEvents.forEach(function (event) {
          _this2.next_btn.addEventListener(event, _this2[onStepsNext], false);
        });
      }

      if (this.options.stepClickable) {
        [].forEach.call(this.steps, function (step, index) {
          _this2._clickEvents.forEach(function (event) {
            while (index > _this2.current_id) {
              _this2[onStepsNext](event);
            }
            while (index < _this2.current_id) {
              _this2[onStepsPrevious](event);
            }
          });
        });
      }
    }
  }, {
    key: onStepsPrevious,
    value: function value(e) {
      e.preventDefault();

      if (!e.target.getAttribute('disabled')) {
        this.previous_step();
      }
    }
  }, {
    key: onStepsNext,
    value: function value(e) {
      e.preventDefault();

      if (!e.target.getAttribute('disabled')) {
        this.next_step();
      }
    }
  }, {
    key: 'get_current_step_id',
    value: function get_current_step_id() {
      for (var i = 0; i < this.steps.length; i++) {
        var step = this.steps[i];

        if (step.classList.contains(this.options.active_class)) {
          return parseInt(step.getAttribute('data-step-id'));
        }
      }

      return null;
    }
  }, {
    key: 'updateActions',
    value: function updateActions(step) {
      var stepId = parseInt(step.getAttribute('data-step-id'));
      if (stepId == 0) {
        if (this.previous_btn != null) {
          this.previous_btn.setAttribute('disabled', 'disabled');
        }
        if (this.next_btn != null) {
          this.next_btn.removeAttribute('disabled', 'disabled');
        }
      } else if (stepId == this.steps.length - 1) {
        if (this.previous_btn != null) {
          this.previous_btn.removeAttribute('disabled', 'disabled');
        }
        if (this.next_btn != null) {
          this.next_btn.setAttribute('disabled', 'disabled');
        }
      } else {
        if (this.previous_btn != null) {
          this.previous_btn.removeAttribute('disabled', 'disabled');
        }
        if (this.next_btn != null) {
          this.next_btn.removeAttribute('disabled', 'disabled');
        }
      }
    }
  }, {
    key: 'next_step',
    value: function next_step() {
      var current_id = this.get_current_step_id();

      if (current_id == null) {
        return;
      }

      var next_id = current_id + 1,
          errors = [];

      if (typeof this.options.beforeNext != 'undefined' && this.options.beforeNext != null && this.options.beforeNext) {
        errors = this.options.beforeNext(current_id);
      }
      this.emit('bulmasteps:before:next', current_id);

      if (typeof errors == 'undefined') {
        errors = [];
      }

      if (errors.length > 0) {
        this.emit('bulmasteps:errors', errors);
        for (var i = 0; i < errors.length; i++) {
          if (typeof this.options.onError != 'undefined' && this.options.onError != null && this.options.onError) {
            this.options.onError(errors[i]);
          }
        }

        return;
      }

      if (next_id >= this.steps.length) {
        if (typeof this.options.onFinish != 'undefined' && this.options.onFinish != null && this.options.onFinish) {
          this.options.onFinish(current_id);
        }
        this.emit('bulmasteps:finish', current_id);
        this.deactivate_step(current_id);
      } else {
        this.complete_step(current_id);
        this.activate_step(next_id);
      }
    }
  }, {
    key: 'previous_step',
    value: function previous_step() {
      var current_id = this.get_current_step_id();
      if (current_id == null) {
        return;
      }

      this.uncomplete_step(current_id - 1);
      this.activate_step(current_id - 1);
    }

    /**
     * Activate a single step,
     * will deactivate all other steps.
     */

  }, {
    key: 'activate_step',
    value: function activate_step(step_id) {
      this.updateActions(this.steps[step_id]);

      for (var i = 0; i < this.steps.length; i++) {
        var _step = this.steps[i];

        if (_step == this.steps[step_id]) {
          continue;
        }

        this.deactivate_step(i);
      }

      this.steps[step_id].classList.add(this.options.active_class);
      if (typeof this.contents[step_id] !== 'undefined') {
        this.contents[step_id].classList.add(this.options.active_class);
      }

      if (typeof this.options.onShow != 'undefined' && this.options.onShow != null && this.options.onShow) {
        this.options.onShow(step_id);
      }

      this.emit('bulmasteps:step:show', step_id);
    }
  }, {
    key: 'complete_step',
    value: function complete_step(step_id) {
      this.steps[step_id].classList.add(this.options.completed_class);
      this.emit('bulmasteps:step:completed', step_id);
    }
  }, {
    key: 'uncomplete_step',
    value: function uncomplete_step(step_id) {
      this.steps[step_id].classList.remove(this.options.completed_class);
      this.emit('bulmasteps:step:uncompleted', step_id);
    }
  }, {
    key: 'deactivate_step',
    value: function deactivate_step(step_id) {
      this.steps[step_id].classList.remove(this.options.active_class);
      if (typeof this.contents[step_id] !== 'undefined') {
        this.contents[step_id].classList.remove(this.options.active_class);
      }
    }
  }], [{
    key: 'attach',
    value: function attach() {
      var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.steps';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var instances = new Array();

      var elements = document.querySelectorAll(selector);
      [].forEach.call(elements, function (element) {
        setTimeout(function () {
          instances.push(new bulmaSteps(element, options));
        }, 100);
      });
      return instances;
    }
  }]);

  return bulmaSteps;
}(__WEBPACK_IMPORTED_MODULE_0__events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (bulmaSteps);

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, EventEmitter);

    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  _createClass(EventEmitter, [{
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (!this._listeners.has(eventName)) {
        return 0;
      }

      var eventListeners = this._listeners.get(eventName);
      return eventListeners.length;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this.removeListeners(e, middleware);
          });
        } else {
          this._listeners.delete(eventName);

          if (middleware) {
            this.removeMiddleware(eventName);
          }
        }
      } else {
        this._listeners = new Map();
      }
    }
  }, {
    key: "middleware",
    value: function middleware(eventName, fn) {
      var _this2 = this;

      if (Array.isArray(eventName)) {
        name.forEach(function (e) {
          return _this2.middleware(e, fn);
        });
      } else {
        if (!Array.isArray(this._middlewares.get(eventName))) {
          this._middlewares.set(eventName, []);
        }

        this._middlewares.get(eventName).push(fn);
      }
    }
  }, {
    key: "removeMiddleware",
    value: function removeMiddleware() {
      var _this3 = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this3.removeMiddleware(e);
          });
        } else {
          this._middlewares.delete(eventName);
        }
      } else {
        this._middlewares = new Map();
      }
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _this4 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(name)) {
        name.forEach(function (e) {
          return _this4.on(e, callback);
        });
      } else {
        name = name.toString();
        var split = name.split(/,|, | /);

        if (split.length > 1) {
          split.forEach(function (e) {
            return _this4.on(e, callback);
          });
        } else {
          if (!Array.isArray(this._listeners.get(name))) {
            this._listeners.set(name, []);
          }

          this._listeners.get(name).push({ once: once, callback: callback });
        }
      }
    }
  }, {
    key: "once",
    value: function once(name, callback) {
      this.on(name, callback, true);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var _this5 = this;

      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      name = name.toString();
      var listeners = this._listeners.get(name);
      var middlewares = null;
      var doneCount = 0;
      var execute = silent;

      if (Array.isArray(listeners)) {
        listeners.forEach(function (listener, index) {
          // Start Middleware checks unless we're doing a silent emit
          if (!silent) {
            middlewares = _this5._middlewares.get(name);
            // Check and execute Middleware
            if (Array.isArray(middlewares)) {
              middlewares.forEach(function (middleware) {
                middleware(data, function () {
                  var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (newData !== null) {
                    data = newData;
                  }
                  doneCount++;
                }, name);
              });

              if (doneCount >= middlewares.length) {
                execute = true;
              }
            } else {
              execute = true;
            }
          }

          // If Middleware checks have been passed, execute
          if (execute) {
            if (listener.once) {
              listeners[index] = null;
            }
            listener.callback(data);
          }
        });

        // Dirty way of removing used Events
        while (listeners.indexOf(null) !== -1) {
          listeners.splice(listeners.indexOf(null), 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultOptions = {
    'selector': '.step-item',
    'selector_content': '.step-content',
    'previous_selector': '[data-nav="previous"]',
    'next_selector': '[data-nav="next"]',
    'active_class': 'is-active',
    'completed_class': 'is-completed',
    'stepClickable': false,
    'beforeNext': null,
    'onShow': null,
    'onFinish': null,
    'onError': null
};

/* harmony default export */ __webpack_exports__["a"] = (defaultOptions);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_events__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultOptions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_type__ = __webpack_require__(28);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var KEY_BACKSPACE = 8,
    KEY_TAB = 9,
    KEY_ENTER = 13,
    KEY_LEFT = 37,
    KEY_RIGHT = 39,
    KEY_DELETE = 46,
    KEY_COMMA = 188;

var bulmaTagsinput = function (_EventEmitter) {
	_inherits(bulmaTagsinput, _EventEmitter);

	function bulmaTagsinput(selector) {
		var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, bulmaTagsinput);

		var _this = _possibleConstructorReturn(this, (bulmaTagsinput.__proto__ || Object.getPrototypeOf(bulmaTagsinput)).call(this));

		_this.element = __WEBPACK_IMPORTED_MODULE_2__utils_type__["a" /* isString */](selector) ? document.querySelector(selector) : selector;
		// An invalid selector or non-DOM node has been provided.
		if (!_this.element) {
			throw new Error('An invalid selector or non-DOM node has been provided.');
		}
		_this._clickEvents = ['click'];

		/// Set default options and merge with instance defined
		_this.options = _extends({}, __WEBPACK_IMPORTED_MODULE_1__defaultOptions__["a" /* default */], options);

		if (_this.element.dataset.hasOwnProperty('lowercase')) {
			_this.options.lowercase = _this.element.dataset('lowercase');
		}
		if (_this.element.dataset.hasOwnProperty('uppercase')) {
			_this.options.lowercase = _this.element.dataset('uppercase');
		}
		if (_this.element.dataset.hasOwnProperty('duplicates')) {
			_this.options.lowercase = _this.element.dataset('duplicates');
		}

		_this.init();
		return _this;
	}

	/**
   * Initiate all DOM element containing tagsinput class
   * @method
   * @return {Array} Array of all TagsInput instances
   */


	_createClass(bulmaTagsinput, [{
		key: 'init',
		value: function init() {
			if (!this.options.disabled) {
				this.tags = [];
				// The container will visually looks like an input
				this.container = document.createElement('div');
				this.container.className = 'tagsinput';
				this.container.classList.add('field');
				this.container.classList.add('is-grouped');
				this.container.classList.add('is-grouped-multiline');
				this.container.classList.add('input');

				var inputType = this.element.getAttribute('type');
				if (!inputType || inputType === 'tags') {
					inputType = 'text';
				}
				// Create an invisible input element so user will be able to enter value
				this.input = document.createElement('input');
				this.input.setAttribute('type', inputType);
				if (this.element.getAttribute('placeholder')) {
					this.input.setAttribute('placeholder', this.element.getAttribute('placeholder'));
				} else {
					this.input.setAttribute('placeholder', 'Add a Tag');
				}
				this.container.appendChild(this.input);

				var sib = this.element.nextSibling;
				this.element.parentNode[sib ? 'insertBefore' : 'appendChild'](this.container, sib);
				this.element.style.cssText = 'position:absolute;left:0;top:0;width:1px;height:1px;opacity:0.01;';
				this.element.tabIndex = -1;

				this.enable();
			}
		}
	}, {
		key: 'enable',
		value: function enable() {
			var _this2 = this;

			if (!this.enabled && !this.options.disabled) {

				this.element.addEventListener('focus', function () {
					_this2.container.classList.add('is-focused');
					_this2.select(Array.prototype.slice.call(_this2.container.querySelectorAll('.tag:not(.is-delete)')).pop());
				});

				this.input.addEventListener('focus', function () {
					_this2.container.classList.add('is-focused');
					_this2.select(Array.prototype.slice.call(_this2.container.querySelectorAll('.tag:not(.is-delete)')).pop());
				});
				this.input.addEventListener('blur', function () {
					_this2.container.classList.remove('is-focused');
					_this2.select(Array.prototype.slice.call(_this2.container.querySelectorAll('.tag:not(.is-delete)')).pop());
					_this2.savePartial();
				});
				this.input.addEventListener('keydown', function (e) {
					var key = e.charCode || e.keyCode || e.which,
					    selectedTag = void 0,
					    activeTag = _this2.container.querySelector('.tag.is-active'),
					    last = Array.prototype.slice.call(_this2.container.querySelectorAll('.tag:not(.is-delete)')).pop(),
					    atStart = _this2.caretAtStart(_this2.input);

					if (activeTag) {
						selectedTag = _this2.container.querySelector('[data-tag="' + activeTag.innerHTML.trim() + '"]');
					}
					_this2.setInputWidth();

					if (key === KEY_ENTER || key === _this2.options.delimiter.charCodeAt(0) || key === KEY_COMMA || key === KEY_TAB) {
						if (!_this2.input.value && (key !== _this2.options.delimiter.charCodeAt(0) || key === KEY_COMMA)) {
							return;
						}
						_this2.savePartial();
					} else if (key === KEY_DELETE && selectedTag) {
						if (selectedTag.nextSibling) {
							_this2.select(selectedTag.nextSibling.querySelector('.tag'));
						} else if (selectedTag.previousSibling) {
							_this2.select(selectedTag.previousSibling.querySelector('.tag'));
						}
						_this2.container.removeChild(selectedTag);
						_this2.tags.splice(_this2.tags.indexOf(selectedTag.getAttribute('data-tag')), 1);
						_this2.setInputWidth();
						_this2.save();
					} else if (key === KEY_BACKSPACE) {
						if (selectedTag) {
							if (selectedTag.previousSibling) {
								_this2.select(selectedTag.previousSibling.querySelector('.tag'));
							} else if (selectedTag.nextSibling) {
								_this2.select(selectedTag.nextSibling.querySelector('.tag'));
							}
							_this2.container.removeChild(selectedTag);
							_this2.tags.splice(_this2.tags.indexOf(selectedTag.getAttribute('data-tag')), 1);
							_this2.setInputWidth();
							_this2.save();
						} else if (last && atStart) {
							_this2.select(last);
						} else {
							return;
						}
					} else if (key === KEY_LEFT) {
						if (selectedTag) {
							if (selectedTag.previousSibling) {
								_this2.select(selectedTag.previousSibling.querySelector('.tag'));
							}
						} else if (!atStart) {
							return;
						} else {
							_this2.select(last);
						}
					} else if (key === KEY_RIGHT) {
						if (!selectedTag) {
							return;
						}
						_this2.select(selectedTag.nextSibling.querySelector('.tag'));
					} else {
						return _this2.select();
					}

					e.preventDefault();
					return false;
				});
				this.input.addEventListener('input', function () {
					_this2.element.value = _this2.getValue();
					_this2.element.dispatchEvent(new Event('input'));
				});
				this.input.addEventListener('paste', function () {
					return setTimeout(savePartial, 0);
				});

				this.container.addEventListener('mousedown', function (e) {
					_this2.refocus(e);
				});
				this.container.addEventListener('touchstart', function (e) {
					_this2.refocus(e);
				});

				this.savePartial(this.element.value);

				this.enabled = true;
			}
		}
	}, {
		key: 'disable',
		value: function disable() {
			if (this.enabled && !this.options.disabled) {
				this.reset();

				this.enabled = false;
			}
		}
	}, {
		key: 'select',
		value: function select(el) {
			var sel = this.container.querySelector('.is-active');
			if (sel) {
				sel.classList.remove('is-active');
			}
			if (el) {
				el.classList.add('is-active');
			}
		}
	}, {
		key: 'addTag',
		value: function addTag(text) {
			var _this3 = this;

			if (~text.indexOf(this.options.delimiter)) {
				text = text.split(this.options.delimiter);
			}
			if (Array.isArray(text)) {
				return text.forEach(function (text) {
					_this3.addTag(text);
				});
			}

			var tag = text && text.trim();
			if (!tag) {
				return false;
			}

			if (this.options['lowercase'] == 'true') {
				tag = tag.toLowerCase();
			}
			if (this.options['uppercase'] == 'true') {
				tag = tag.toUpperCase();
			}
			if (this.options['duplicates'] || this.tags.indexOf(tag) === -1) {
				this.tags.push(tag);

				var newTagWrapper = document.createElement('div');
				newTagWrapper.className = 'control';
				newTagWrapper.setAttribute('data-tag', tag);

				var newTag = document.createElement('div');
				newTag.className = 'tags';
				newTag.classList.add('has-addons');

				var newTagContent = document.createElement('span');
				newTagContent.className = 'tag';
				newTagContent.classList.add('is-active');
				this.select(newTagContent);
				newTagContent.innerHTML = tag;

				newTag.appendChild(newTagContent);
				if (this.options.allowDelete) {
					var newTagDeleteButton = document.createElement('a');
					newTagDeleteButton.className = 'tag';
					newTagDeleteButton.classList.add('is-delete');
					this._clickEvents.forEach(function (event) {
						newTagDeleteButton.addEventListener(event, function (e) {
							var selectedTag = void 0,
							    activeTag = e.target.parentNode,
							    last = Array.prototype.slice.call(_this3.container.querySelectorAll('.tag')).pop(),
							    atStart = _this3.caretAtStart(_this3.input);

							if (activeTag) {
								selectedTag = _this3.container.querySelector('[data-tag="' + activeTag.innerText.trim() + '"]');
							}

							if (selectedTag) {
								_this3.select(selectedTag.previousSibling);
								_this3.container.removeChild(selectedTag);
								_this3.tags.splice(_this3.tags.indexOf(selectedTag.getAttribute('data-tag')), 1);
								_this3.setInputWidth();
								_this3.save();
							} else if (last && atStart) {
								_this3.select(last);
							} else {
								return;
							}
						});
					});
					newTag.appendChild(newTagDeleteButton);
				}
				newTagWrapper.appendChild(newTag);

				this.container.insertBefore(newTagWrapper, this.input);
			}
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.tags.join(this.options.delimiter);
		}
	}, {
		key: 'setValue',
		value: function setValue(value) {
			var _this4 = this;

			Array.prototype.slice.call(this.container.querySelectorAll('.tag')).forEach(function (tag) {
				_this4.tags.splice(_this4.tags.indexOf(tag.innerHTML), 1);
				_this4.container.removeChild(tag);
			});
			this.savePartial(value);
		}
	}, {
		key: 'setInputWidth',
		value: function setInputWidth() {
			var last = Array.prototype.slice.call(this.container.querySelectorAll('.control')).pop();

			if (!this.container.offsetWidth) {
				return;
			}
			this.input.style.width = Math.max(this.container.offsetWidth - (last ? last.offsetLeft + last.offsetWidth : 30) - 30, this.container.offsetWidth / 4) + 'px';
		}
	}, {
		key: 'savePartial',
		value: function savePartial(value) {
			if (typeof value !== 'string' && !Array.isArray(value)) {
				value = this.input.value;
			}
			if (this.addTag(value) !== false) {
				this.input.value = '';
				this.save();
				this.setInputWidth();
			}
		}
	}, {
		key: 'save',
		value: function save() {
			this.element.value = this.tags.join(this.options.delimiter);
			this.element.dispatchEvent(new Event('change'));
		}
	}, {
		key: 'caretAtStart',
		value: function caretAtStart(el) {
			try {
				return el.selectionStart === 0 && el.selectionEnd === 0;
			} catch (e) {
				return el.value === '';
			}
		}
	}, {
		key: 'refocus',
		value: function refocus(e) {
			if (e.target.classList.contains('tag')) {
				this.select(e.target);
			}
			if (e.target === this.input) {
				return this.select();
			}
			this.input.focus();
			e.preventDefault();
			return false;
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.tags = [];
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.disable();
			this.reset();
			this.element = null;
		}
	}], [{
		key: 'attach',
		value: function attach() {
			var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'input[type="tags"]';
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var instances = new Array();

			var elements = document.querySelectorAll(selector);
			[].forEach.call(elements, function (element) {
				setTimeout(function () {
					instances.push(new bulmaTagsinput(element, options));
				}, 100);
			});
			return instances;
		}
	}]);

	return bulmaTagsinput;
}(__WEBPACK_IMPORTED_MODULE_0__utils_events__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (bulmaTagsinput);

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, EventEmitter);

    this._listeners = new Map(listeners);
    this._middlewares = new Map();
  }

  _createClass(EventEmitter, [{
    key: "listenerCount",
    value: function listenerCount(eventName) {
      if (!this._listeners.has(eventName)) {
        return 0;
      }

      var eventListeners = this._listeners.get(eventName);
      return eventListeners.length;
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      var _this = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var middleware = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this.removeListeners(e, middleware);
          });
        } else {
          this._listeners.delete(eventName);

          if (middleware) {
            this.removeMiddleware(eventName);
          }
        }
      } else {
        this._listeners = new Map();
      }
    }
  }, {
    key: "middleware",
    value: function middleware(eventName, fn) {
      var _this2 = this;

      if (Array.isArray(eventName)) {
        name.forEach(function (e) {
          return _this2.middleware(e, fn);
        });
      } else {
        if (!Array.isArray(this._middlewares.get(eventName))) {
          this._middlewares.set(eventName, []);
        }

        this._middlewares.get(eventName).push(fn);
      }
    }
  }, {
    key: "removeMiddleware",
    value: function removeMiddleware() {
      var _this3 = this;

      var eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (eventName !== null) {
        if (Array.isArray(eventName)) {
          name.forEach(function (e) {
            return _this3.removeMiddleware(e);
          });
        } else {
          this._middlewares.delete(eventName);
        }
      } else {
        this._middlewares = new Map();
      }
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _this4 = this;

      var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(name)) {
        name.forEach(function (e) {
          return _this4.on(e, callback);
        });
      } else {
        name = name.toString();
        var split = name.split(/,|, | /);

        if (split.length > 1) {
          split.forEach(function (e) {
            return _this4.on(e, callback);
          });
        } else {
          if (!Array.isArray(this._listeners.get(name))) {
            this._listeners.set(name, []);
          }

          this._listeners.get(name).push({ once: once, callback: callback });
        }
      }
    }
  }, {
    key: "once",
    value: function once(name, callback) {
      this.on(name, callback, true);
    }
  }, {
    key: "emit",
    value: function emit(name, data) {
      var _this5 = this;

      var silent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      name = name.toString();
      var listeners = this._listeners.get(name);
      var middlewares = null;
      var doneCount = 0;
      var execute = silent;

      if (Array.isArray(listeners)) {
        listeners.forEach(function (listener, index) {
          // Start Middleware checks unless we're doing a silent emit
          if (!silent) {
            middlewares = _this5._middlewares.get(name);
            // Check and execute Middleware
            if (Array.isArray(middlewares)) {
              middlewares.forEach(function (middleware) {
                middleware(data, function () {
                  var newData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

                  if (newData !== null) {
                    data = newData;
                  }
                  doneCount++;
                }, name);
              });

              if (doneCount >= middlewares.length) {
                execute = true;
              }
            } else {
              execute = true;
            }
          }

          // If Middleware checks have been passed, execute
          if (execute) {
            if (listener.once) {
              listeners[index] = null;
            }
            listener.callback(data);
          }
        });

        // Dirty way of removing used Events
        while (listeners.indexOf(null) !== -1) {
          listeners.splice(listeners.indexOf(null), 1);
        }
      }
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["a"] = (EventEmitter);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var defaultOptions = {
		disabled: false,
		delimiter: ',',
		allowDelete: true,
		lowercase: false,
		uppercase: false,
		duplicates: true
};

/* harmony default export */ __webpack_exports__["a"] = (defaultOptions);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isString; });
/* unused harmony export isDate */
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isString = function isString(unknown) {
  return typeof unknown === 'string' || !!unknown && (typeof unknown === 'undefined' ? 'undefined' : _typeof(unknown)) === 'object' && Object.prototype.toString.call(unknown) === '[object String]';
};
var isDate = function isDate(unknown) {
  return (Object.prototype.toString.call(unknown) === '[object Date]' || unknown instanceof Date) && !isNaN(unknown.valueOf());
};

/***/ })
/******/ ])["default"];
});