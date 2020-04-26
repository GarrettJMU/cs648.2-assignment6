/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\nvar _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\"));\n\nvar _ProductList = _interopRequireDefault(__webpack_require__(/*! ./ProductList.jsx */ \"./src/ProductList.jsx\"));\n\nvar _NotFound = _interopRequireDefault(__webpack_require__(/*! ./NotFound.jsx */ \"./src/NotFound.jsx\"));\n\nvar _ProductView = _interopRequireDefault(__webpack_require__(/*! ./ProductView.jsx */ \"./src/ProductView.jsx\"));\n\nvar _ProductEdit = _interopRequireDefault(__webpack_require__(/*! ./ProductEdit.jsx */ \"./src/ProductEdit.jsx\"));\n\nvar _Navigation = _interopRequireDefault(__webpack_require__(/*! ./Navigation.jsx */ \"./src/Navigation.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar element = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_Navigation.default, null), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Redirect, {\n  exact: true,\n  from: \"/\",\n  to: \"/products\"\n}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {\n  path: \"/products\",\n  component: _ProductList.default\n}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {\n  path: \"/view/:id\",\n  component: _ProductView.default\n}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {\n  path: \"/edit/:id\",\n  component: _ProductEdit.default\n}), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {\n  component: _NotFound.default\n}))));\n\n_reactDom.default.render(element, document.getElementById('root'));\n\n//# sourceURL=webpack:///./src/App.jsx?");

/***/ }),

/***/ "./src/Navigation.jsx":
/*!****************************!*\
  !*** ./src/Navigation.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nvar _reactRouterBootstrap = __webpack_require__(/*! react-router-bootstrap */ \"./node_modules/react-router-bootstrap/lib/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Navigation = function Navigation() {\n  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Navbar.Brand, null, \"My Company Inventory\"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Nav, null, /*#__PURE__*/_react.default.createElement(_reactRouterBootstrap.LinkContainer, {\n    exact: true,\n    to: \"/products\"\n  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.NavItem, null, \"Products\"))));\n};\n\nvar _default = Navigation;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/Navigation.jsx?");

/***/ }),

/***/ "./src/NotFound.jsx":
/*!**************************!*\
  !*** ./src/NotFound.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFound = function NotFound() {\n  return /*#__PURE__*/_react.default.createElement(\"h1\", null, \"The page you are looking for aint here!\");\n};\n\nvar _default = NotFound;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/NotFound.jsx?");

/***/ }),

/***/ "./src/NumberInput.jsx":
/*!*****************************!*\
  !*** ./src/NumberInput.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\nvar NumberInput = /*#__PURE__*/function (_PureComponent) {\n  _inheritsLoose(NumberInput, _PureComponent);\n\n  function NumberInput(props) {\n    var _this;\n\n    _this = _PureComponent.call(this, props) || this;\n    _this.state = {\n      value: _this.format(props.value)\n    };\n    return _this;\n  }\n\n  var _proto = NumberInput.prototype;\n\n  _proto.format = function format(number) {\n    return number != null ? number.toString() : '';\n  };\n\n  _proto.unformat = function unformat(string) {\n    var val = parseInt(string, 10);\n    return Number.isNaN(val) ? null : val;\n  };\n\n  _proto.onChange = function onChange(e) {\n    if (e.target.value.match(/^\\d*$/)) {\n      this.setState({\n        value: e.target.value\n      });\n    }\n  };\n\n  _proto.onBlur = function onBlur(e) {\n    var onChange = this.props.onChange;\n    var value = this.state.value;\n    onChange(e, this.unformat(value));\n  };\n\n  _proto.render = function render() {\n    var _this2 = this;\n\n    return /*#__PURE__*/_react.default.createElement(\"input\", _extends({\n      type: \"text\"\n    }, this.props, {\n      value: this.state.value,\n      onBlur: function onBlur(e) {\n        return _this2.onBlur(e);\n      },\n      onChange: function onChange(e) {\n        return _this2.onChange(e);\n      }\n    }));\n  };\n\n  return NumberInput;\n}(_react.PureComponent);\n\nvar _default = NumberInput;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/NumberInput.jsx?");

/***/ }),

/***/ "./src/ProductAdd.jsx":
/*!****************************!*\
  !*** ./src/ProductAdd.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\nvar ProductAdd = /*#__PURE__*/function (_PureComponent) {\n  _inheritsLoose(ProductAdd, _PureComponent);\n\n  function ProductAdd(props) {\n    var _this;\n\n    _this = _PureComponent.call(this, props) || this;\n    _this.state = {\n      price: '',\n      category: '',\n      name: '',\n      image: ''\n    };\n    return _this;\n  }\n\n  var _proto = ProductAdd.prototype;\n\n  _proto.onSubmit = function onSubmit(e) {\n    e.preventDefault();\n    var product = {\n      Name: this.state.name,\n      Price: parseInt(this.state.price, 10),\n      Category: this.state.category,\n      Image: this.state.image\n    };\n    this.props.addProduct(product);\n    this.setState({\n      name: '',\n      price: '',\n      category: '',\n      image: ''\n    });\n  };\n\n  _proto.render = function render() {\n    var _this2 = this;\n\n    var categoryValues = ['', 'Shirts', 'Jeans', 'Jackets', 'Sweaters', 'Accessories'];\n    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Container, {\n      className: \"justify-content-md-center\",\n      style: {\n        backgroundColor: '#d5f4e6',\n        padding: 20\n      }\n    }, /*#__PURE__*/_react.default.createElement(\"p\", null, \"Add a new product to Inventory\"), /*#__PURE__*/_react.default.createElement(\"hr\", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {\n      controlId: \"category\"\n    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, \"Category\"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {\n      as: \"select\",\n      value: this.state.category,\n      onChange: function onChange(e) {\n        return _this2.setState({\n          category: e.target.value\n        });\n      }\n    }, categoryValues.map(function (value) {\n      return /*#__PURE__*/_react.default.createElement(\"option\", {\n        value: value,\n        key: value\n      }, value);\n    }))), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {\n      controlId: \"name\"\n    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, \"Product Name\"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {\n      type: \"text\",\n      name: \"name\",\n      value: this.state.name,\n      onChange: function onChange(e) {\n        return _this2.setState({\n          name: e.target.value\n        });\n      }\n    })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {\n      controlId: \"price\"\n    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, \"Price Per Unit\"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {\n      type: \"text\",\n      name: \"price\",\n      value: \"$\" + this.state.price,\n      onChange: function onChange(e) {\n        return _this2.setState({\n          price: e.target.value.replace(/\\$/g, '')\n        });\n      }\n    })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Group, {\n      controlId: \"image\"\n    }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Label, null, \"Image URL\"), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Form.Control, {\n      type: \"text\",\n      name: \"image\",\n      value: this.state.image,\n      onChange: function onChange(e) {\n        return _this2.setState({\n          image: e.target.value\n        });\n      }\n    })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {\n      variant: \"primary\",\n      type: \"submit\",\n      onClick: function onClick(e) {\n        return _this2.onSubmit(e);\n      }\n    }, \"Add Product\")));\n  };\n\n  return ProductAdd;\n}(_react.PureComponent);\n\nvar _default = ProductAdd;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/ProductAdd.jsx?");

/***/ }),

/***/ "./src/ProductEdit.jsx":
/*!*****************************!*\
  !*** ./src/ProductEdit.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\nvar _query = _interopRequireDefault(__webpack_require__(/*! ./query.js */ \"./src/query.js\"));\n\nvar _TextInput = _interopRequireDefault(__webpack_require__(/*! ./TextInput.jsx */ \"./src/TextInput.jsx\"));\n\nvar _NumberInput = _interopRequireDefault(__webpack_require__(/*! ./NumberInput.jsx */ \"./src/NumberInput.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar ProductEdit = /*#__PURE__*/function (_React$Component) {\n  _inheritsLoose(ProductEdit, _React$Component);\n\n  function ProductEdit() {\n    var _this;\n\n    _this = _React$Component.call(this) || this;\n\n    _defineProperty(_assertThisInitialized(_this), \"onChange\", function (event, naturalValue) {\n      var _event$target = event.target,\n          name = _event$target.name,\n          textValue = _event$target.value;\n      var value = naturalValue === undefined ? textValue : naturalValue;\n\n      _this.setState(function (prevState) {\n        var _extends2;\n\n        return {\n          product: _extends({}, prevState.product, (_extends2 = {}, _extends2[name] = value, _extends2))\n        };\n      });\n    });\n\n    _this.state = {\n      product: {}\n    };\n    return _this;\n  }\n\n  var _proto = ProductEdit.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    this.loadData();\n  };\n\n  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {\n    var previousId = prevProps.match.params.id;\n    var id = this.props.match.params.id;\n\n    if (id !== previousId) {\n      this.loadData();\n    }\n  };\n\n  _proto.handleSubmit = /*#__PURE__*/function () {\n    var _handleSubmit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {\n      var product, query, id, modify, data;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              product = this.state.product;\n              query = \"mutation productUpdate(\\n      $id: Int!\\n      $modify: ProductUpdateInputs!\\n    ) {\\n      productUpdate(\\n        id: $id\\n        modify: $modify\\n      ) {\\n        id Category Name Price Image\\n      }\\n    }\";\n              id = product.id, modify = _objectWithoutPropertiesLoose(product, [\"id\"]);\n              _context.next = 6;\n              return (0, _query.default)(query, {\n                modify: modify,\n                id: id\n              });\n\n            case 6:\n              data = _context.sent;\n\n              if (data) {\n                this.setState({\n                  product: data.productUpdate\n                });\n                alert('Update Product Successfully'); // eslint-disable-line no-alert\n              }\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function handleSubmit(_x) {\n      return _handleSubmit.apply(this, arguments);\n    }\n\n    return handleSubmit;\n  }();\n\n  _proto.loadData = /*#__PURE__*/function () {\n    var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n      var query, id, data;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              query = \"query Product($id: Int!) {\\n      Product(id: $id) {\\n        id Name Price Category Image\\n      }\\n    }\";\n              id = this.props.match.params.id;\n              _context2.next = 4;\n              return (0, _query.default)(query, {\n                id: id\n              });\n\n            case 4:\n              data = _context2.sent;\n              this.setState({\n                product: data.Product\n              });\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, this);\n    }));\n\n    function loadData() {\n      return _loadData.apply(this, arguments);\n    }\n\n    return loadData;\n  }();\n\n  _proto.render = function render() {\n    var _this2 = this;\n\n    var _this$state$product = this.state.product,\n        Name = _this$state$product.Name,\n        Price = _this$state$product.Price,\n        Image = _this$state$product.Image,\n        id = _this$state$product.id,\n        Category = _this$state$product.Category;\n    return id ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n      to: \"/products\"\n    }, \"Back\"), /*#__PURE__*/_react.default.createElement(\"form\", {\n      onSubmit: function onSubmit(e) {\n        return _this2.handleSubmit(e);\n      }\n    }, /*#__PURE__*/_react.default.createElement(\"h1\", null, \"Editing Product ID: \" + id), /*#__PURE__*/_react.default.createElement(\"table\", null, /*#__PURE__*/_react.default.createElement(\"tbody\", null, /*#__PURE__*/_react.default.createElement(\"tr\", null, /*#__PURE__*/_react.default.createElement(\"td\", null, \"Name:\"), /*#__PURE__*/_react.default.createElement(\"td\", null, /*#__PURE__*/_react.default.createElement(_TextInput.default, {\n      name: \"Name\",\n      value: Name,\n      onChange: this.onChange,\n      key: id\n    }))), /*#__PURE__*/_react.default.createElement(\"tr\", null, /*#__PURE__*/_react.default.createElement(\"td\", null, \"Category:\"), /*#__PURE__*/_react.default.createElement(\"td\", null, /*#__PURE__*/_react.default.createElement(\"select\", {\n      name: \"Category\",\n      value: Category,\n      onChange: this.onChange\n    }, /*#__PURE__*/_react.default.createElement(\"option\", {\n      value: \"Shirt\"\n    }, \"Shirt\"), /*#__PURE__*/_react.default.createElement(\"option\", {\n      value: \"Jeans\"\n    }, \"Jeans\"), /*#__PURE__*/_react.default.createElement(\"option\", {\n      value: \"Jackets\"\n    }, \"Jackets\"), /*#__PURE__*/_react.default.createElement(\"option\", {\n      value: \"Sweaters\"\n    }, \"Sweaters\"), /*#__PURE__*/_react.default.createElement(\"option\", {\n      value: \"Accessories\"\n    }, \"Accessories\")))), /*#__PURE__*/_react.default.createElement(\"tr\", null, /*#__PURE__*/_react.default.createElement(\"td\", null, \"Price:\"), /*#__PURE__*/_react.default.createElement(\"td\", null, /*#__PURE__*/_react.default.createElement(_NumberInput.default, {\n      name: \"Price\",\n      value: Price,\n      onChange: this.onChange,\n      key: id\n    }))), /*#__PURE__*/_react.default.createElement(\"tr\", null, /*#__PURE__*/_react.default.createElement(\"td\", null, \"Image:\"), /*#__PURE__*/_react.default.createElement(\"td\", null, /*#__PURE__*/_react.default.createElement(_TextInput.default, {\n      name: \"Image\",\n      value: Image,\n      onChange: this.onChange,\n      key: id\n    }))), /*#__PURE__*/_react.default.createElement(\"tr\", null, /*#__PURE__*/_react.default.createElement(\"td\", null), /*#__PURE__*/_react.default.createElement(\"td\", null, /*#__PURE__*/_react.default.createElement(\"button\", {\n      type: \"submit\"\n    }, \"Submit\"))))))) : /*#__PURE__*/_react.default.createElement(\"h1\", null, \"Loading Data...\");\n  };\n\n  return ProductEdit;\n}(_react.default.Component);\n\nvar _default = ProductEdit;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/ProductEdit.jsx?");

/***/ }),

/***/ "./src/ProductList.jsx":
/*!*****************************!*\
  !*** ./src/ProductList.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _query = _interopRequireDefault(__webpack_require__(/*! ./query */ \"./src/query.js\"));\n\nvar _ProductTable = _interopRequireDefault(__webpack_require__(/*! ./ProductTable.jsx */ \"./src/ProductTable.jsx\"));\n\nvar _ProductAdd = _interopRequireDefault(__webpack_require__(/*! ./ProductAdd.jsx */ \"./src/ProductAdd.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\nvar ProductList = /*#__PURE__*/function (_PureComponent) {\n  _inheritsLoose(ProductList, _PureComponent);\n\n  function ProductList(props) {\n    var _this;\n\n    _this = _PureComponent.call(this, props) || this;\n    _this.state = {\n      products: []\n    };\n    return _this;\n  }\n\n  var _proto = ProductList.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    this.loadData();\n  };\n\n  _proto.loadData = /*#__PURE__*/function () {\n    var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var query, data;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              query = \"query {\\n      productList {\\n        id Category Name Price Image\\n      }\\n    }\";\n              _context.next = 3;\n              return (0, _query.default)(query);\n\n            case 3:\n              data = _context.sent;\n              if (data) this.setState({\n                products: data.productList\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function loadData() {\n      return _loadData.apply(this, arguments);\n    }\n\n    return loadData;\n  }();\n\n  _proto.addProduct = /*#__PURE__*/function () {\n    var _addProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(product) {\n      var query, data;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              query = \"mutation productAdd($product: ProductInputs!) {\\n      productAdd(product: $product) {\\n        id\\n      }\\n    }\";\n              _context2.next = 3;\n              return (0, _query.default)(query, {\n                product: product\n              });\n\n            case 3:\n              data = _context2.sent;\n              if (data) this.loadData();\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, this);\n    }));\n\n    function addProduct(_x) {\n      return _addProduct.apply(this, arguments);\n    }\n\n    return addProduct;\n  }();\n\n  _proto.deleteProduct = /*#__PURE__*/function () {\n    var _deleteProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {\n      var query, data;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              query = \"mutation productDelete($id: Int!) {\\n      productDelete(id: $id)\\n    }\";\n              _context3.next = 3;\n              return (0, _query.default)(query, {\n                id: id\n              });\n\n            case 3:\n              data = _context3.sent;\n\n              if (data.productDelete) {\n                _context3.next = 7;\n                break;\n              }\n\n              alert('Product deleted unsuccessfully');\n              return _context3.abrupt(\"return\", false);\n\n            case 7:\n              alert('Product deleted successfully');\n              this.loadData();\n              return _context3.abrupt(\"return\", true);\n\n            case 10:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, this);\n    }));\n\n    function deleteProduct(_x2) {\n      return _deleteProduct.apply(this, arguments);\n    }\n\n    return deleteProduct;\n  }();\n\n  _proto.render = function render() {\n    var _this2 = this;\n\n    return /*#__PURE__*/_react.default.createElement(\"div\", null, /*#__PURE__*/_react.default.createElement(_ProductTable.default, {\n      products: this.state.products,\n      deleteProduct: function deleteProduct(productId) {\n        return _this2.deleteProduct(productId);\n      }\n    }), /*#__PURE__*/_react.default.createElement(_ProductAdd.default, {\n      addProduct: function addProduct(product) {\n        return _this2.addProduct(product);\n      }\n    }));\n  };\n\n  return ProductList;\n}(_react.PureComponent);\n\nvar _default = ProductList;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/ProductList.jsx?");

/***/ }),

/***/ "./src/ProductRow.jsx":
/*!****************************!*\
  !*** ./src/ProductRow.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction ProductRow(_ref) {\n  var index = _ref.index,\n      product = _ref.product,\n      deleteProduct = _ref.deleteProduct;\n  return /*#__PURE__*/_react.default.createElement(\"tr\", {\n    key: index\n  }, /*#__PURE__*/_react.default.createElement(\"th\", null, product.Name), /*#__PURE__*/_react.default.createElement(\"th\", null, \"$\", product.Price), /*#__PURE__*/_react.default.createElement(\"th\", null, product.Category), /*#__PURE__*/_react.default.createElement(\"th\", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n    to: \"/view/\" + product.id\n  }, \"View\")), /*#__PURE__*/_react.default.createElement(\"th\", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n    to: \"/edit/\" + product.id\n  }, \"Edit\"), ' | ', /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {\n    variant: \"danger\",\n    onClick: function onClick() {\n      return deleteProduct(product.id);\n    }\n  }, \"Delete\")));\n}\n\nvar _default = ProductRow;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/ProductRow.jsx?");

/***/ }),

/***/ "./src/ProductTable.jsx":
/*!******************************!*\
  !*** ./src/ProductTable.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _ProductRow = _interopRequireDefault(__webpack_require__(/*! ./ProductRow.jsx */ \"./src/ProductRow.jsx\"));\n\nvar _reactBootstrap = __webpack_require__(/*! react-bootstrap */ \"./node_modules/react-bootstrap/esm/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nvar selectOptions = ['Product Name', 'Price', 'Category', 'Image', 'Edit/Delete'];\n\nfunction ProductTable(_ref) {\n  var products = _ref.products,\n      deleteProduct = _ref.deleteProduct;\n  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(\"h1\", null, \"My Company Inventory\"), /*#__PURE__*/_react.default.createElement(\"h2\", null, \"Showing all available products\"), /*#__PURE__*/_react.default.createElement(\"hr\", null), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Table, {\n    striped: true,\n    bordered: true,\n    hover: true\n  }, /*#__PURE__*/_react.default.createElement(\"thead\", null, /*#__PURE__*/_react.default.createElement(\"tr\", null, selectOptions.map(function (option) {\n    return /*#__PURE__*/_react.default.createElement(\"th\", {\n      key: option\n    }, option);\n  }))), /*#__PURE__*/_react.default.createElement(\"tbody\", null, products.map(function (product, index) {\n    return /*#__PURE__*/_react.default.createElement(_ProductRow.default, {\n      product: product,\n      index: index,\n      key: product.id,\n      deleteProduct: deleteProduct\n    });\n  }))));\n}\n\nvar _default = ProductTable;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/ProductTable.jsx?");

/***/ }),

/***/ "./src/ProductView.jsx":
/*!*****************************!*\
  !*** ./src/ProductView.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\nvar _query = _interopRequireDefault(__webpack_require__(/*! ./query.js */ \"./src/query.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _getRequireWildcardCache() { if (typeof WeakMap !== \"function\") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\nvar ProductView = /*#__PURE__*/function (_PureComponent) {\n  _inheritsLoose(ProductView, _PureComponent);\n\n  function ProductView() {\n    var _this;\n\n    _this = _PureComponent.call(this) || this;\n    _this.state = {\n      product: {}\n    };\n    return _this;\n  }\n\n  var _proto = ProductView.prototype;\n\n  _proto.componentDidMount = function componentDidMount() {\n    this.loadData();\n  };\n\n  _proto.loadData = /*#__PURE__*/function () {\n    var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n      var query, data;\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              query = \"query Product($id: Int!) {\\n      Product(id: $id) {\\n        id Category Name Price Image\\n      }\\n    }\";\n              _context.next = 3;\n              return (0, _query.default)(query, {\n                id: this.props.match.params.id\n              });\n\n            case 3:\n              data = _context.sent;\n\n              if (data) {\n                this.setState({\n                  product: data.Product\n                });\n              } else {\n                this.setState({\n                  product: {}\n                });\n              }\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, this);\n    }));\n\n    function loadData() {\n      return _loadData.apply(this, arguments);\n    }\n\n    return loadData;\n  }();\n\n  _proto.render = function render() {\n    var product = this.state.product;\n    return /*#__PURE__*/_react.default.createElement(\"div\", {\n      style: {\n        width: '100vw'\n      }\n    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {\n      to: \"/products\",\n      style: {\n        width: '100vw'\n      }\n    }, \"Back\"), /*#__PURE__*/_react.default.createElement(\"img\", {\n      style: {\n        maxWidth: '80vw'\n      },\n      src: product.Image,\n      alt: product.Name\n    }));\n  };\n\n  return ProductView;\n}(_react.PureComponent);\n\nvar _default = ProductView;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/ProductView.jsx?");

/***/ }),

/***/ "./src/TextInput.jsx":
/*!***************************!*\
  !*** ./src/TextInput.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\nfunction format(text) {\n  return text != null ? text : '';\n}\n\nfunction unformat(text) {\n  return text.trim().length === 0 ? null : text;\n}\n\nvar TextInput = /*#__PURE__*/function (_React$Component) {\n  _inheritsLoose(TextInput, _React$Component);\n\n  function TextInput(props) {\n    var _this;\n\n    _this = _React$Component.call(this, props) || this;\n    _this.state = {\n      value: format(props.value)\n    };\n    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));\n    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  var _proto = TextInput.prototype;\n\n  _proto.onChange = function onChange(e) {\n    this.setState({\n      value: e.target.value\n    });\n  };\n\n  _proto.onBlur = function onBlur(e) {\n    var onChange = this.props.onChange;\n    var value = this.state.value;\n    onChange(e, unformat(value));\n  };\n\n  _proto.render = function render() {\n    var value = this.state.value;\n\n    var _this$props = this.props,\n        _this$props$tag = _this$props.tag,\n        tag = _this$props$tag === void 0 ? 'input' : _this$props$tag,\n        props = _objectWithoutPropertiesLoose(_this$props, [\"tag\"]);\n\n    return _react.default.createElement(tag, _extends({}, props, {\n      value: value,\n      onBlur: this.onBlur,\n      onChange: this.onChange\n    }));\n  };\n\n  return TextInput;\n}(_react.default.Component);\n\nexports.default = TextInput;\n\n//# sourceURL=webpack:///./src/TextInput.jsx?");

/***/ }),

/***/ "./src/query.js":
/*!**********************!*\
  !*** ./src/query.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction graphQLFetch(_x, _x2) {\n  return _graphQLFetch.apply(this, arguments);\n}\n\nfunction _graphQLFetch() {\n  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query, variables) {\n    var response, body, result;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (variables === void 0) {\n              variables = {};\n            }\n\n            _context.next = 3;\n            return fetch(window.ENV.UI_API_ENDPOINT, {\n              method: 'POST',\n              headers: {\n                'Content-Type': 'application/json'\n              },\n              body: JSON.stringify({\n                query: query,\n                variables: variables\n              })\n            });\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.text();\n\n          case 6:\n            body = _context.sent;\n            result = JSON.parse(body);\n            return _context.abrupt(\"return\", result.data);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _graphQLFetch.apply(this, arguments);\n}\n\nvar _default = graphQLFetch;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/query.js?");

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/App.jsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/App.jsx */\"./src/App.jsx\");\n\n\n//# sourceURL=webpack:///multi_./src/App.jsx?");

/***/ })

/******/ });