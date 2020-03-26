(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.css":
/*!****************************!*\
  !*** ./assets/css/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.jsx":
/*!***************************!*\
  !*** ./assets/js/app.jsx ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var _components_screens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/screens */ "./assets/js/components/screens/index.js");
/* harmony import */ var _redux_stores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./redux/stores */ "./assets/js/redux/stores.js");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/app.css */ "./assets/css/app.css");
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_app_css__WEBPACK_IMPORTED_MODULE_7__);









function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
    store: _redux_stores__WEBPACK_IMPORTED_MODULE_6__["default"].store
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__["PersistGate"], {
    loading: null,
    persistor: _redux_stores__WEBPACK_IMPORTED_MODULE_6__["default"].persistor
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: _components_screens__WEBPACK_IMPORTED_MODULE_5__["Home"],
    exact: true,
    path: "/"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: _components_screens__WEBPACK_IMPORTED_MODULE_5__["Categories"],
    exact: true,
    path: "/category/"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: _components_screens__WEBPACK_IMPORTED_MODULE_5__["Category"],
    exact: true,
    path: "/category/:id(\\d+)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: _components_screens__WEBPACK_IMPORTED_MODULE_5__["Cart"],
    exact: true,
    path: "/cart"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: _components_screens__WEBPACK_IMPORTED_MODULE_5__["Checkout"],
    exact: true,
    path: "/checkout"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: _components_screens__WEBPACK_IMPORTED_MODULE_5__["Login"],
    exact: true,
    path: "/login"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: _components_screens__WEBPACK_IMPORTED_MODULE_5__["Order"],
    path: "/order/:id(\\d+)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: _components_screens__WEBPACK_IMPORTED_MODULE_5__["Product"],
    path: "/product/:id(\\d+)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: _components_screens__WEBPACK_IMPORTED_MODULE_5__["Signup"],
    exact: true,
    path: "/signup"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
    component: _components_screens__WEBPACK_IMPORTED_MODULE_5__["PageNotFound"],
    path: "*"
  })))));
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/common/networking/ecommerce-api.js":
/*!******************************************************!*\
  !*** ./assets/js/common/networking/ecommerce-api.js ***!
  \******************************************************/
/*! exports provided: getCategories, getProductCategory, getOrder, placeOrder, getAllProducts, getProduct, getProductArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategories", function() { return getCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductCategory", function() { return getProductCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrder", function() { return getOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placeOrder", function() { return placeOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProducts", function() { return getAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProduct", function() { return getProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductArray", function() { return getProductArray; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


function getCategories() {
  return _getCategories.apply(this, arguments);
}

function _getCategories() {
  _getCategories = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var res, categories;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/category/');

          case 3:
            res = _context.sent;
            categories = res.data;
            return _context.abrupt("return", categories);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);

            if (!(_context.t0.response.status == 404)) {
              _context.next = 14;
              break;
            }

            throw 404;

          case 14:
            console.error(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _getCategories.apply(this, arguments);
}

function getProductCategory(_x) {
  return _getProductCategory.apply(this, arguments);
}

function _getProductCategory() {
  _getProductCategory = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
    var res, category;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/category/".concat(id));

          case 3:
            res = _context2.sent;
            category = res.data;
            return _context2.abrupt("return", category.products);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);

            if (!(_context2.t0.response.status == 404)) {
              _context2.next = 14;
              break;
            }

            throw 404;

          case 14:
            console.error(_context2.t0);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getProductCategory.apply(this, arguments);
}

function getOrder(_x2) {
  return _getOrder.apply(this, arguments);
}

function _getOrder() {
  _getOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
    var res, order;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/order/".concat(id));

          case 3:
            res = _context3.sent;
            order = res.data;
            return _context3.abrupt("return", order);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);

            if (!(_context3.t0.response.status == 404)) {
              _context3.next = 14;
              break;
            }

            throw 404;

          case 14:
            console.error(_context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return _getOrder.apply(this, arguments);
}

function placeOrder(_x3) {
  return _placeOrder.apply(this, arguments);
}

function _placeOrder() {
  _placeOrder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(order) {
    var data, i, config, res, id;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            data = new FormData();
            data.set('firstname', order.firstName);
            data.set('lastname', order.lastName);
            data.set('address', order.address);
            data.set('creditCardNb', order.creditCardNb);
            data.set('creditCardPin', order.creditCardPin);

            for (i = 0; i < order.product_ids.length; i++) {
              data.set("product_ids[".concat(i, "]"), order.product_ids[i]);
            }

            config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            };
            _context4.prev = 8;
            _context4.next = 11;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/order/', data, config);

          case 11:
            res = _context4.sent;
            id = res.data.id;
            return _context4.abrupt("return", id);

          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](8);
            console.error(_context4.t0);

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[8, 16]]);
  }));
  return _placeOrder.apply(this, arguments);
}

function getAllProducts() {
  return _getAllProducts.apply(this, arguments);
}

function _getAllProducts() {
  _getAllProducts = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var res, products;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/product');

          case 3:
            res = _context5.sent;
            products = res.data;
            return _context5.abrupt("return", products);

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            console.error(_context5.t0);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));
  return _getAllProducts.apply(this, arguments);
}

function getProduct(_x4) {
  return _getProduct.apply(this, arguments);
}

function _getProduct() {
  _getProduct = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
    var res, product;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("/api/product/".concat(id));

          case 3:
            res = _context6.sent;
            product = res.data;
            return _context6.abrupt("return", product);

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.error(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _getProduct.apply(this, arguments);
}

function getProductArray(_x5) {
  return _getProductArray.apply(this, arguments);
}

function _getProductArray() {
  _getProductArray = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(ids) {
    var res, products;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/product/array', {
              params: {
                ids: ids
              }
            });

          case 3:
            res = _context7.sent;
            products = res.data;
            return _context7.abrupt("return", products);

          case 8:
            _context7.prev = 8;
            _context7.t0 = _context7["catch"](0);
            console.error(_context7.t0);

          case 11:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return _getProductArray.apply(this, arguments);
}

/***/ }),

/***/ "./assets/js/components/screens/cart.jsx":
/*!***********************************************!*\
  !*** ./assets/js/components/screens/cart.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cart_productList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart/productList */ "./assets/js/components/screens/cart/productList.jsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./assets/js/components/shared/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    title: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(4)
    }
  };
});
function Cart() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_2__["NavBar"], {
    title: "Cart"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classes.title,
    variant: "h3"
  }, "Products in cart"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_cart_productList__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}

/***/ }),

/***/ "./assets/js/components/screens/cart/productList.jsx":
/*!***********************************************************!*\
  !*** ./assets/js/components/screens/cart/productList.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../common/networking/ecommerce-api */ "./assets/js/common/networking/ecommerce-api.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../redux/actions */ "./assets/js/redux/actions.js");


















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



;





















var styles = function styles(theme) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, theme.breakpoints.down('xl'), {
    checkout: {
      width: '90%'
    },
    list: {
      width: '90%'
    }
  }), _defineProperty(_ref, theme.breakpoints.up('xl'), {
    checkout: {
      width: '60%'
    },
    list: {
      width: '60%'
    }
  }), _defineProperty(_ref, "checkout", {
    alignSelf: 'center',
    marginTop: theme.spacing(4)
  }), _defineProperty(_ref, "circularProgress", {
    left: -35,
    marginLeft: '50vw',
    marginTop: '50vh',
    position: 'absolute',
    top: -35
  }), _defineProperty(_ref, "empty", {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4)
  }), _ref;
};

var ProductList = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductList, _React$Component);

  function ProductList(props) {
    var _this;

    _classCallCheck(this, ProductList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductList).call(this, props));
    _this.state = {
      loading: true,
      products: []
    };
    return _this;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var cart = this.props.cart;
      console.log(cart);
      var product_ids = cart.map(function (product) {
        return product.id;
      });
      this.getProducts(product_ids);
    }
  }, {
    key: "computeTotal",
    value: function computeTotal(products) {
      var total = 0;

      for (var i = 0; i < products.length; i++) {
        total += products[i].price * this.getCartQuantity(products[i].id);
      }

      return total;
    }
  }, {
    key: "getProducts",
    value: function getProducts(ids) {
      var _this2 = this;

      if (ids.length > 0) {
        Object(_common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_37__["getProductArray"])(ids).then(function (products) {
          return _this2.setState({
            loading: false,
            products: products
          });
        });
      } else {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "getCartQuantity",
    value: function getCartQuantity(id) {
      var cart = this.props.cart;
      var product = cart.find(function (product) {
        return product.id === id;
      });
      return product.quantity;
    }
  }, {
    key: "removeProduct",
    value: function removeProduct(id) {
      var removeProductFromCart = this.props.removeProductFromCart;

      if (this.getCartQuantity(id) == 1) {
        var products = this.state.products;
        products = products.filter(function (product) {
          return product.id !== id;
        });
        this.setState({
          products: products
        });
      }

      removeProductFromCart(id);
    }
  }, {
    key: "renderSecondaryAction",
    value: function renderSecondaryAction(product) {
      var _this3 = this;

      if (this.getCartQuantity(product.id) > 1) {
        return react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_22__["default"], {
          "aria-label": "quantity-down",
          edge: "end",
          onClick: function onClick() {
            return _this3.removeProduct(product.id);
          }
        }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_32___default.a, null));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_22__["default"], {
          "aria-label": "delete",
          edge: "end",
          onClick: function onClick() {
            return _this3.removeProduct(product.id);
          }
        }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_31___default.a, null));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          history = _this$props.history;
      var _this$state = this.state,
          loading = _this$state.loading,
          products = _this$state.products;
      return react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_34___default.a.Fragment, null, loading ? react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_19__["default"], {
        className: classes.circularProgress,
        size: 70
      }) : products && products.length ? react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_34___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
        container: true,
        direction: "column"
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_21__["default"], {
        container: true,
        justify: "center"
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_24__["default"], {
        className: classes.list,
        style: {
          borderColor: 'black',
          borderWidth: '1px'
        }
      }, products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_34___default.a.Fragment, {
          key: product.id
        }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_25__["default"], null, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_26__["default"], null, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17__["default"], {
          alt: "product photo",
          src: "https://source.unsplash.com/random"
        })), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_28__["default"], {
          primary: product.name.length > 27 ? product.name.slice(0, 27).concat('...') : product.name,
          secondary: "".concat(product.price, "$ x ").concat(_this4.getCartQuantity(product.id))
        }), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_27__["default"], null, _this4.renderSecondaryAction(product))), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_20__["default"], null));
      }), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_25__["default"], {
        key: "total"
      }, react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_28__["default"], {
        primary: "Total: ".concat(this.computeTotal(products), "$")
      })))), react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: classes.checkout,
        color: "primary",
        onClick: function onClick() {
          return history.push('/checkout');
        },
        variant: "outlined"
      }, "Checkout"))) : react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_30__["default"], {
        className: classes.empty
      }, "No products in your cart. ", react__WEBPACK_IMPORTED_MODULE_34___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_23__["default"], {
        href: "/"
      }, "Add some.")));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_34___default.a.Component);

ProductList.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_33___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_33___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cart
  };
};

var mapDispatchToProps = {
  removeProductFromCart: _redux_actions__WEBPACK_IMPORTED_MODULE_38__["removeProductFromCart"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_35__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_36__["withRouter"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_29__["withStyles"])(styles)(ProductList))));

/***/ }),

/***/ "./assets/js/components/screens/categories.jsx":
/*!*****************************************************!*\
  !*** ./assets/js/components/screens/categories.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Categories; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _categories_categoryList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories/categoryList */ "./assets/js/components/screens/categories/categoryList.jsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./assets/js/components/shared/index.js");





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    title: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(4)
    }
  };
});
function Categories() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_4__["NavBar"], {
    title: "Categories"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.title,
    variant: "h3"
  }, "Categories"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_categories_categoryList__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

/***/ }),

/***/ "./assets/js/components/screens/categories/categoryList.jsx":
/*!******************************************************************!*\
  !*** ./assets/js/components/screens/categories/categoryList.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ "./node_modules/@material-ui/core/esm/ListItemAvatar/index.js");
/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ "./node_modules/@material-ui/core/esm/ListItemSecondaryAction/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/Remove */ "./node_modules/@material-ui/icons/Remove.js");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../common/networking/ecommerce-api */ "./assets/js/common/networking/ecommerce-api.js");
















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



;




















var styles = function styles(theme) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, theme.breakpoints.down('xl'), {
    checkout: {
      width: '90%'
    },
    list: {
      width: '90%'
    }
  }), _defineProperty(_ref, theme.breakpoints.up('xl'), {
    checkout: {
      width: '60%'
    },
    list: {
      width: '60%'
    }
  }), _defineProperty(_ref, "checkout", {
    alignSelf: 'center',
    marginTop: theme.spacing(4)
  }), _defineProperty(_ref, "circularProgress", {
    left: -35,
    marginLeft: '50vw',
    marginTop: '50vh',
    position: 'absolute',
    top: -35
  }), _defineProperty(_ref, "empty", {
    marginTop: theme.spacing(4),
    marginLeft: theme.spacing(4)
  }), _ref;
};

var CategoryList = /*#__PURE__*/function (_React$Component) {
  _inherits(CategoryList, _React$Component);

  function CategoryList(props) {
    var _this;

    _classCallCheck(this, CategoryList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CategoryList).call(this, props));
    _this.state = {
      loading: true,
      categories: []
    };
    return _this;
  }

  _createClass(CategoryList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getCategories();
    }
  }, {
    key: "getCategories",
    value: function getCategories() {
      var _this2 = this;

      Object(_common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_35__["getCategories"])().then(function (categories) {
        return _this2.setState({
          loading: false,
          categories: categories
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          history = _this$props.history;
      var _this$state = this.state,
          loading = _this$state.loading,
          categories = _this$state.categories;
      return react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_32___default.a.Fragment, null, loading ? react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: classes.circularProgress,
        size: 70
      }) : categories && categories.length ? react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_32___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        container: true,
        direction: "column"
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        container: true,
        justify: "center"
      }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: classes.list,
        style: {
          borderColor: 'black',
          borderWidth: '1px'
        }
      }, categories.map(function (category) {
        return react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_32___default.a.Fragment, {
          key: category.id
        }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_23__["default"], {
          button: true,
          component: "a",
          href: "/category/".concat(category.id)
        }, react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_26__["default"], {
          primary: category.name.length > 27 ? category.name.slice(0, 27).concat('...') : category.name,
          secondary: "".concat(category.products.length, " products")
        })), react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_18__["default"], null));
      }))))) : react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_28__["default"], {
        className: classes.empty
      }, "No categories yet. ", react__WEBPACK_IMPORTED_MODULE_32___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21__["default"], {
        href: "/"
      }, "Return to home.")));
    }
  }]);

  return CategoryList;
}(react__WEBPACK_IMPORTED_MODULE_32___default.a.Component);

CategoryList.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_31___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_31___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_34__["withRouter"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_27__["withStyles"])(styles)(CategoryList)));

/***/ }),

/***/ "./assets/js/components/screens/category.jsx":
/*!***************************************************!*\
  !*** ./assets/js/components/screens/category.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _category_productList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category/productList */ "./assets/js/components/screens/category/productList.jsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./assets/js/components/shared/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);








function Category(_ref) {
  var id = _ref.match.params.id;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_6__["NavBar"], {
    title: "Category"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_category_productList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    categoryId: id
  })));
}
Category.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.string.isRequired
    })
  })
};

/***/ }),

/***/ "./assets/js/components/screens/category/productList.jsx":
/*!***************************************************************!*\
  !*** ./assets/js/components/screens/category/productList.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_truncate_string__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-truncate-string */ "./node_modules/react-truncate-string/dist/truncateString.js");
/* harmony import */ var react_truncate_string__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_truncate_string__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../common/networking/ecommerce-api */ "./assets/js/common/networking/ecommerce-api.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../redux/actions */ "./assets/js/redux/actions.js");














function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



















var styles = function styles(theme) {
  return {
    card: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    cardContent: {
      flexGrow: 1
    },
    cardGrid: {
      paddingBottom: theme.spacing(8),
      paddingTop: theme.spacing(4),
      minWidth: '100%'
    },
    cardMedia: {
      paddingTop: '56.25%' // 16:9

    },
    circularProgress: {
      left: -35,
      marginLeft: '50vw',
      marginTop: '50vh',
      position: 'absolute',
      top: -35
    },
    empty: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(4)
    }
  };
};

var ProductList = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductList, _React$Component);

  function ProductList(props) {
    var _this;

    _classCallCheck(this, ProductList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductList).call(this, props));
    _this.state = {
      loading: true,
      products: []
    };
    return _this;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getProducts();
    }
  }, {
    key: "getProducts",
    value: function getProducts() {
      var _this2 = this;

      var categoryId = this.props.categoryId;
      Object(_common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_28__["getProductCategory"])(categoryId).then(function (products) {
        return _this2.setState({
          loading: false,
          products: products
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          addProductToCart = _this$props.addProductToCart,
          classes = _this$props.classes,
          history = _this$props.history;
      var _this$state = this.state,
          loading = _this$state.loading,
          products = _this$state.products;
      return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_24___default.a.Fragment, null, loading ? react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: classes.circularProgress,
        size: 70
      }) : products && products.length ? react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_19__["default"], {
        className: classes.cardGrid,
        maxWidth: "md"
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
        container: true,
        spacing: 4
      }, products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
          key: product.id,
          item: true,
          lg: 2,
          md: 4,
          sm: 6,
          xs: 12
        }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__["default"], {
          className: classes.card
        }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_17__["default"], {
          className: classes.cardMedia,
          image: "https://source.unsplash.com/random",
          title: product.name
        }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_16__["default"], {
          className: classes.cardContent
        }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
          component: "h2",
          gutterBottom: true,
          variant: "h5"
        }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react_truncate_string__WEBPACK_IMPORTED_MODULE_27___default.a, {
          text: product.name,
          truncateAt: 100
        })), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], null, product.price, "$"), "art"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
          color: "primary",
          onClick: function onClick() {
            return history.push("/product/".concat(product.id));
          },
          size: "small"
        }, "View"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
          color: "primary",
          onClick: function onClick() {
            return addProductToCart(product.id);
          },
          size: "small"
        }, "Add to cart"))));
      }))) : react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: classes.empty
      }, "No products yet T_T."));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_24___default.a.Component);

ProductList.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.object.isRequired,
  categoryId: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.string.isRequired
};
var mapStateToProps = null;
var mapDispatchToProps = {
  addProductToCart: _redux_actions__WEBPACK_IMPORTED_MODULE_29__["addProductToCart"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_25__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_26__["withRouter"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_21__["withStyles"])(styles)(ProductList))));

/***/ }),

/***/ "./assets/js/components/screens/checkout.jsx":
/*!***************************************************!*\
  !*** ./assets/js/components/screens/checkout.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkout; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _checkout_checkoutForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout/checkoutForm */ "./assets/js/components/screens/checkout/checkoutForm.jsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./assets/js/components/shared/index.js");





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    title: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(4)
    }
  };
});
function Checkout() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_4__["NavBar"], {
    title: "Checkout"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.title,
    variant: "h3"
  }, "Checkout", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_checkout_checkoutForm__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
}

/***/ }),

/***/ "./assets/js/components/screens/checkout/checkoutForm.jsx":
/*!****************************************************************!*\
  !*** ./assets/js/components/screens/checkout/checkoutForm.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/icons/ShoppingCartOutlined */ "./node_modules/@material-ui/icons/ShoppingCartOutlined.js");
/* harmony import */ var _material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../common/networking/ecommerce-api */ "./assets/js/common/networking/ecommerce-api.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../redux/actions */ "./assets/js/redux/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

























var styles = function styles(theme) {
  return {
    avatar: {
      backgroundColor: theme.palette.secondary.main,
      margin: theme.spacing(1)
    },
    circularProgress: {
      left: -35,
      marginLeft: '50vw',
      marginTop: '50vh',
      position: 'absolute',
      top: -35
    },
    form: {
      marginTop: theme.spacing(3),
      width: '100%'
    },
    paper: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(8)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
};

var CheckoutForm = /*#__PURE__*/function (_React$Component) {
  _inherits(CheckoutForm, _React$Component);

  function CheckoutForm(props) {
    var _this;

    _classCallCheck(this, CheckoutForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CheckoutForm).call(this, props));
    _this.state = {
      firstName: '',
      lastName: '',
      loading: true,
      products: []
    };
    return _this;
  }

  _createClass(CheckoutForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var cart = this.props.cart;
      var product_ids = cart.map(function (product) {
        return product.id;
      });
      this.getProducts(product_ids);
    }
  }, {
    key: "computeTotal",
    value: function computeTotal(products) {
      var total = 0;

      for (var i = 0; i < products.length; i++) {
        total += products[i].price * this.getCartQuantity(products[i].id);
      }

      return total;
    }
  }, {
    key: "getCartQuantity",
    value: function getCartQuantity(id) {
      var cart = this.props.cart;
      var product = cart.find(function (product) {
        return product.id === id;
      });
      return product.quantity;
    }
  }, {
    key: "getProducts",
    value: function getProducts(ids) {
      var _this2 = this;

      if (ids.length > 0) {
        Object(_common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_34__["getProductArray"])(ids).then(function (products) {
          return _this2.setState({
            loading: false,
            products: products
          });
        });
      } else {
        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var value;

      if (event.target.name === 'isAdmin') {
        value = event.target.checked;
      } else {
        value = event.target.value;
      }

      this.setState(_defineProperty({}, event.target.name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this$state = this.state,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          address = _this$state.address,
          creditCardNb = _this$state.creditCardNb,
          creditCardPin = _this$state.creditCardPin;
      var _this$props = this.props,
          cart = _this$props.cart,
          history = _this$props.history;
      var product_ids = [];

      for (var i = 0; i < cart.length; i++) {
        for (var j = 0; j < cart[i].quantity; j++) {
          product_ids.push(cart[i].id);
        }
      }

      Object(_common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_34__["placeOrder"])({
        firstName: firstName,
        lastName: lastName,
        address: address,
        creditCardNb: creditCardNb,
        creditCardPin: creditCardPin,
        product_ids: product_ids
      }).then(function (id) {
        history.push("/order/".concat(id));
      });
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state2 = this.state,
          products = _this$state2.products,
          loading = _this$state2.loading;
      return react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_33___default.a.Fragment, null, loading ? react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: classes.circularProgress,
        size: 70
      }) : react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_31__["default"], {
        component: "main",
        maxWidth: "xs"
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_19__["default"], null), react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement("div", {
        className: classes.paper
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: classes.avatar
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_icons_ShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_30___default.a, null)), react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], {
        component: "h1",
        variant: "h5"
      }, "Checkout"), react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement("form", {
        className: classes.form,
        onSubmit: this.handleSubmit.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
        container: true,
        spacing: 2
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
        item: true,
        xs: 12,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], {
        variant: "h5"
      }, "Total to pay:")), react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
        item: true,
        xs: 12,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], {
        variant: "h5"
      }, this.computeTotal(products), " $")), react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
        item: true,
        xs: 12,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_28__["default"], {
        autoComplete: "fname",
        autoFocus: true,
        id: "firstName",
        fullWidth: true,
        label: "First Name",
        name: "firstName",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
        item: true,
        xs: 12,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_28__["default"], {
        autoComplete: "lname",
        fullWidth: true,
        id: "lastName",
        label: "Last Name",
        name: "lastName",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_28__["default"], {
        autoComplete: "street-address",
        fullWidth: true,
        id: "address",
        label: "Address",
        multiline: true,
        name: "address",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
        item: true,
        xs: 12,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_28__["default"], {
        fullWidth: true,
        id: "creditCardNb",
        label: "Credit card N\xB0",
        name: "creditCardNb",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
        item: true,
        xs: 12,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_28__["default"], {
        fullWidth: true,
        id: "creditCardPin",
        label: "Credit card pin",
        name: "creditCardPin",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      }))), react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: classes.submit,
        color: "primary",
        fullWidth: true,
        type: "submit",
        variant: "contained"
      }, "Pay"), react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
        container: true,
        justify: "flex-end"
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_22__["default"], {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_33___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_24__["default"], {
        href: "/",
        variant: "body2"
      }, "I want to buy more")))))));
    }
  }]);

  return CheckoutForm;
}(react__WEBPACK_IMPORTED_MODULE_33___default.a.Component);

CheckoutForm.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_32___default.a.object.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cart
  };
};

var mapDispatchToProps = {
  removeProductFromCart: _redux_actions__WEBPACK_IMPORTED_MODULE_35__["removeProductFromCart"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_36__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_37__["withRouter"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26__["withStyles"])(styles)(CheckoutForm))));

/***/ }),

/***/ "./assets/js/components/screens/home.jsx":
/*!***********************************************!*\
  !*** ./assets/js/components/screens/home.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_productList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/productList */ "./assets/js/components/screens/home/productList.jsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./assets/js/components/shared/index.js");





var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    title: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(4)
    }
  };
});
function Home() {
  var classes = useStyles();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_4__["NavBar"], {
    title: "Home"
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.title,
    variant: "h3"
  }, "Latest Products"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_home_productList__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

/***/ }),

/***/ "./assets/js/components/screens/home/productList.jsx":
/*!***********************************************************!*\
  !*** ./assets/js/components/screens/home/productList.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_truncate_string__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-truncate-string */ "./node_modules/react-truncate-string/dist/truncateString.js");
/* harmony import */ var react_truncate_string__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_truncate_string__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../common/networking/ecommerce-api */ "./assets/js/common/networking/ecommerce-api.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../redux/actions */ "./assets/js/redux/actions.js");














function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



















var styles = function styles(theme) {
  return {
    card: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    cardContent: {
      flexGrow: 1
    },
    cardGrid: {
      paddingBottom: theme.spacing(8),
      paddingTop: theme.spacing(4),
      minWidth: '100%'
    },
    cardMedia: {
      paddingTop: '56.25%' // 16:9

    },
    circularProgress: {
      left: -35,
      marginLeft: '50vw',
      marginTop: '50vh',
      position: 'absolute',
      top: -35
    },
    empty: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(4)
    }
  };
};

var ProductList = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductList, _React$Component);

  function ProductList(props) {
    var _this;

    _classCallCheck(this, ProductList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductList).call(this, props));
    _this.state = {
      loading: true,
      products: []
    };
    return _this;
  }

  _createClass(ProductList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.getProducts();
    }
  }, {
    key: "getProducts",
    value: function getProducts() {
      var _this2 = this;

      Object(_common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_28__["getAllProducts"])().then(function (products) {
        return _this2.setState({
          loading: false,
          products: products
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          addProductToCart = _this$props.addProductToCart,
          classes = _this$props.classes,
          history = _this$props.history;
      var _this$state = this.state,
          loading = _this$state.loading,
          products = _this$state.products;
      return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_24___default.a.Fragment, null, loading ? react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_18__["default"], {
        className: classes.circularProgress,
        size: 70
      }) : products && products.length ? react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_19__["default"], {
        className: classes.cardGrid,
        maxWidth: "md"
      }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
        container: true,
        spacing: 4
      }, products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_20__["default"], {
          key: product.id,
          item: true,
          lg: 2,
          md: 4,
          sm: 6,
          xs: 12
        }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_14__["default"], {
          className: classes.card
        }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_17__["default"], {
          className: classes.cardMedia,
          image: "https://source.unsplash.com/random",
          title: product.name
        }), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_16__["default"], {
          className: classes.cardContent
        }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
          component: "h2",
          gutterBottom: true,
          variant: "h5"
        }, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(react_truncate_string__WEBPACK_IMPORTED_MODULE_27___default.a, {
          text: product.name,
          truncateAt: 100
        })), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], null, product.price, "$"), "art"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__["default"], null, react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
          color: "primary",
          onClick: function onClick() {
            return history.push("/product/".concat(product.id));
          },
          size: "small"
        }, "View"), react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
          color: "primary",
          onClick: function onClick() {
            return addProductToCart(product.id);
          },
          size: "small"
        }, "Add to cart"))));
      }))) : react__WEBPACK_IMPORTED_MODULE_24___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: classes.empty
      }, "No products yet T_T."));
    }
  }]);

  return ProductList;
}(react__WEBPACK_IMPORTED_MODULE_24___default.a.Component);

ProductList.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_23___default.a.object.isRequired
};
var mapStateToProps = null;
var mapDispatchToProps = {
  addProductToCart: _redux_actions__WEBPACK_IMPORTED_MODULE_29__["addProductToCart"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_25__["connect"])(mapStateToProps, mapDispatchToProps)(Object(react_router_dom__WEBPACK_IMPORTED_MODULE_26__["withRouter"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_21__["withStyles"])(styles)(ProductList))));

/***/ }),

/***/ "./assets/js/components/screens/index.js":
/*!***********************************************!*\
  !*** ./assets/js/components/screens/index.js ***!
  \***********************************************/
/*! exports provided: Categories, Category, Cart, Checkout, Home, Login, Order, Product, PageNotFound, Signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categories__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories */ "./assets/js/components/screens/categories.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Categories", function() { return _categories__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./assets/js/components/screens/category.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Category", function() { return _category__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ "./assets/js/components/screens/cart.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return _cart__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _checkout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkout */ "./assets/js/components/screens/checkout.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkout", function() { return _checkout__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home */ "./assets/js/components/screens/home.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return _home__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login */ "./assets/js/components/screens/login.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _login__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order */ "./assets/js/components/screens/order.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _order__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product */ "./assets/js/components/screens/product.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _product__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _pageNotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pageNotFound */ "./assets/js/components/screens/pageNotFound.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNotFound", function() { return _pageNotFound__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./signup */ "./assets/js/components/screens/signup.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return _signup__WEBPACK_IMPORTED_MODULE_9__["default"]; });












/***/ }),

/***/ "./assets/js/components/screens/login.jsx":
/*!************************************************!*\
  !*** ./assets/js/components/screens/login.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _login_loginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/loginForm */ "./assets/js/components/screens/login/loginForm.jsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./assets/js/components/shared/index.js");



function Login() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_2__["NavBar"], {
    title: "Login"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_login_loginForm__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}

/***/ }),

/***/ "./assets/js/components/screens/login/loginForm.jsx":
/*!**********************************************************!*\
  !*** ./assets/js/components/screens/login/loginForm.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_26__);














function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
















var styles = function styles(theme) {
  return {
    avatar: {
      backgroundColor: theme.palette.secondary.main,
      margin: theme.spacing(1)
    },
    form: {
      marginTop: theme.spacing(1),
      width: '100%'
    },
    paper: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(8)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
};

var LoginForm = /*#__PURE__*/function (_React$Component) {
  _inherits(LoginForm, _React$Component);

  function LoginForm(props) {
    var _this;

    _classCallCheck(this, LoginForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).call(this, props));
    _this.state = {
      email: '',
      password: ''
    };
    return _this;
  }

  _createClass(LoginForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.name, event.target.value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password;
      console.log(email, password);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_16__["default"], {
        component: "main",
        maxWidth: "xs"
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_17__["default"], null), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("div", {
        className: classes.paper
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.avatar
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_21___default.a, null)), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_24__["default"], {
        component: "h1",
        variant: "h5"
      }, "Sign in"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement("form", {
        className: classes.form,
        onSubmit: this.handleSubmit.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_23__["default"], {
        autoComplete: "email",
        autoFocus: true,
        fullWidth: true,
        id: "email",
        label: "Email Address",
        margin: "normal",
        name: "email",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_23__["default"], {
        autoComplete: "current-password",
        id: "password",
        fullWidth: true,
        label: "Password",
        margin: "normal",
        name: "password",
        onChange: this.handleChange.bind(this),
        required: true,
        type: "password",
        variant: "outlined"
      }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
        control: react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__["default"], {
          value: "remember",
          color: "primary"
        }),
        label: "Remember me"
      }), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: classes.submit,
        color: "primary",
        fullWidth: true,
        type: "submit",
        variant: "contained"
      }, "Sign In"), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        container: true
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true,
        xs: true
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_20__["default"], {
        href: "#",
        variant: "body2"
      }, "Forgot password?")), react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_26___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_20__["default"], {
        href: "/signup",
        variant: "body2"
      }, "Don't have an account? Sign Up"))))));
    }
  }]);

  return LoginForm;
}(react__WEBPACK_IMPORTED_MODULE_26___default.a.Component);

LoginForm.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_25___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_22__["withStyles"])(styles)(LoginForm));

/***/ }),

/***/ "./assets/js/components/screens/order.jsx":
/*!************************************************!*\
  !*** ./assets/js/components/screens/order.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Order; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _order_orderDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order/orderDetail */ "./assets/js/components/screens/order/orderDetail.jsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./assets/js/components/shared/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _home_productList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/productList */ "./assets/js/components/screens/home/productList.jsx");








function Order(props) {
  var id = props.match.params.id;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_5__["NavBar"], {
    title: "Order"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_order_orderDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id
  })));
}
Order.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
    })
  })
};

/***/ }),

/***/ "./assets/js/components/screens/order/orderDetail.jsx":
/*!************************************************************!*\
  !*** ./assets/js/components/screens/order/orderDetail.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/networking/ecommerce-api */ "./assets/js/common/networking/ecommerce-api.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var react_truncate_string__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-truncate-string */ "./node_modules/react-truncate-string/dist/truncateString.js");
/* harmony import */ var react_truncate_string__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_truncate_string__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
















function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

















var styles = function styles(theme) {
  return {
    circularProgress: {
      left: -35,
      marginLeft: '50vw',
      marginTop: '50vh',
      position: 'absolute',
      top: -35
    },
    title: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(4)
    },
    text: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(2)
    }
  };
};

var OrderDetail = /*#__PURE__*/function (_React$Component) {
  _inherits(OrderDetail, _React$Component);

  function OrderDetail(props) {
    var _this;

    _classCallCheck(this, OrderDetail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OrderDetail).call(this, props));
    _this.state = {
      loading: true,
      order: null
    };
    return _this;
  }

  _createClass(OrderDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var id = this.props.id;
      this.getOrder(id);
    }
  }, {
    key: "getOrder",
    value: function getOrder(id) {
      var _this2 = this;

      var history = this.props.history;

      Object(_common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_20__["getOrder"])(id).then(function (order) {
        return _this2.setState({
          loading: false,
          order: order
        });
      })["catch"](function (error) {
        history.push('*');
      });
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var _this$state = this.state,
          loading = _this$state.loading,
          order = _this$state.order;
      return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_17___default.a.Fragment, null, loading ? react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_21__["default"], {
        className: classes.circularProgress,
        size: 70
      }) : react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_17___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: classes.title,
        component: "h1",
        variant: "h3"
      }, "Order N\xB0", order.id), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: classes.title,
        variant: "h4"
      }, "Buyer"), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: classes.text
      }, "Name: ", order.firstname, " ", order.lastname), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: classes.text
      }, "Address: ", order.address), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: classes.text
      }, "Credit Card N\xB0: ", order.creditCardNb), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: classes.text
      }, "Credit Card pin: ", order.creditCardPin), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: classes.title,
        variant: "h4"
      }, "Products"), order.products.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
          className: classes.text,
          key: product.id
        }, product.name.length > 27 ? product.name.slice(0, 27).concat('...') : product.name, " | ", product.price, "$");
      }), react__WEBPACK_IMPORTED_MODULE_17___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_22__["default"], {
        className: classes.text
      }, "Total = ", order.totalPrice, "$")));
    }
  }]);

  return OrderDetail;
}(react__WEBPACK_IMPORTED_MODULE_17___default.a.Component);

OrderDetail.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_19__["withRouter"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_15__["withStyles"])(styles)(OrderDetail)));

/***/ }),

/***/ "./assets/js/components/screens/pageNotFound.jsx":
/*!*******************************************************!*\
  !*** ./assets/js/components/screens/pageNotFound.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageNotFound; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function PageNotFound() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404: Page not found"));
}

/***/ }),

/***/ "./assets/js/components/screens/product.jsx":
/*!**************************************************!*\
  !*** ./assets/js/components/screens/product.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _product_productDetail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/productDetail */ "./assets/js/components/screens/product/productDetail.jsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared */ "./assets/js/components/shared/index.js");






function Product(props) {
  var id = props.match.params.id;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_5__["NavBar"], {
    title: "Product"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_product_productDetail__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id
  })));
}
Product.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    params: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
    })
  })
};

/***/ }),

/***/ "./assets/js/components/screens/product/productDetail.jsx":
/*!****************************************************************!*\
  !*** ./assets/js/components/screens/product/productDetail.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_truncate_string__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-truncate-string */ "./node_modules/react-truncate-string/dist/truncateString.js");
/* harmony import */ var react_truncate_string__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_truncate_string__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../common/networking/ecommerce-api */ "./assets/js/common/networking/ecommerce-api.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../redux/actions */ "./assets/js/redux/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");













function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















var styles = function styles(theme) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, theme.breakpoints.down('xl'), {
    card: {
      width: '80%'
    }
  }), _defineProperty(_ref, theme.breakpoints.up('xl'), {
    card: {
      width: '50%'
    }
  }), _defineProperty(_ref, "card", {
    display: 'flex',
    flexDirection: 'column',
    marginTop: theme.spacing(4)
  }), _defineProperty(_ref, "cardContent", {
    flexGrow: 1
  }), _defineProperty(_ref, "cardGrid", {
    paddingBottom: theme.spacing(8),
    paddingTop: theme.spacing(4),
    minWidth: '100%'
  }), _defineProperty(_ref, "cardMedia", {
    paddingTop: '56.25%' // 16:9

  }), _defineProperty(_ref, "circularProgress", {
    left: -35,
    marginLeft: '50vw',
    marginTop: '50vh',
    position: 'absolute',
    top: -35
  }), _defineProperty(_ref, "title", {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(4)
  }), _ref;
};

var ProductDetail = /*#__PURE__*/function (_React$Component) {
  _inherits(ProductDetail, _React$Component);

  function ProductDetail(props) {
    var _this;

    _classCallCheck(this, ProductDetail);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProductDetail).call(this, props));
    _this.state = {
      loading: true,
      product: null
    };
    return _this;
  }

  _createClass(ProductDetail, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var id = this.props.id;
      this.getProduct(id);
    }
  }, {
    key: "getProduct",
    value: function getProduct(id) {
      var _this2 = this;

      Object(_common_networking_ecommerce_api__WEBPACK_IMPORTED_MODULE_24__["getProduct"])(id).then(function (product) {
        return _this2.setState({
          loading: false,
          product: product
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          addProductToCart = _this$props.addProductToCart,
          classes = _this$props.classes;
      var _this$state = this.state,
          loading = _this$state.loading,
          product = _this$state.product;
      return react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_22___default.a.Fragment, null, loading ? react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_17__["default"], {
        className: classes.circularProgress,
        size: 70
      }) : react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_22___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__["default"], {
        className: classes.title,
        component: "h1",
        variant: "h3"
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(react_truncate_string__WEBPACK_IMPORTED_MODULE_23___default.a, {
        text: product.name,
        truncateAt: 100
      })), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_18__["default"], {
        container: true,
        justify: "center"
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.card
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_16__["default"], {
        className: classes.cardMedia,
        image: "https://source.unsplash.com/random"
      }), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_14__["default"], null, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "primary",
        onClick: function onClick() {
          return addProductToCart(product.id);
        },
        size: "large"
      }, "Add to cart"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        color: "primary",
        disabled: true,
        size: "large"
      }, "Buy it now")), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_15__["default"], {
        className: classes.cardContent
      }, react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__["default"], {
        component: "h2",
        gutterBottom: true,
        variant: "h5"
      }, product.name), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__["default"], {
        component: "p",
        variant: "h6"
      }, product.price, "$"), react__WEBPACK_IMPORTED_MODULE_22___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_20__["default"], null, product.description))))));
    }
  }]);

  return ProductDetail;
}(react__WEBPACK_IMPORTED_MODULE_22___default.a.Component);

ProductDetail.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_21___default.a.string.isRequired
};
var mapStateToProps = null;
var mapDispatchToProps = {
  addProductToCart: _redux_actions__WEBPACK_IMPORTED_MODULE_25__["addProductToCart"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_26__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_19__["withStyles"])(styles)(ProductDetail)));

/***/ }),

/***/ "./assets/js/components/screens/signup.jsx":
/*!*************************************************!*\
  !*** ./assets/js/components/screens/signup.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _signup_signupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signupForm */ "./assets/js/components/screens/signup/signupForm.jsx");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared */ "./assets/js/components/shared/index.js");



function Signup() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared__WEBPACK_IMPORTED_MODULE_2__["NavBar"], {
    title: "Signup"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_signup_signupForm__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}

/***/ }),

/***/ "./assets/js/components/screens/signup/signupForm.jsx":
/*!************************************************************!*\
  !*** ./assets/js/components/screens/signup/signupForm.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.create */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/esm/Avatar/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "./node_modules/@material-ui/core/esm/Checkbox/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/icons/LockOutlined */ "./node_modules/@material-ui/icons/LockOutlined.js");
/* harmony import */ var _material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_30__);














function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




















var styles = function styles(theme) {
  return {
    avatar: {
      backgroundColor: theme.palette.secondary.main,
      margin: theme.spacing(1)
    },
    form: {
      marginTop: theme.spacing(3),
      width: '100%'
    },
    paper: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(8)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  };
};

var SignupForm = /*#__PURE__*/function (_React$Component) {
  _inherits(SignupForm, _React$Component);

  function SignupForm(props) {
    var _this;

    _classCallCheck(this, SignupForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SignupForm).call(this, props));
    _this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      isAdmin: false
    };
    return _this;
  }

  _createClass(SignupForm, [{
    key: "handleChange",
    value: function handleChange(event) {
      var value;

      if (event.target.name === 'isAdmin') {
        value = event.target.checked;
      } else {
        value = event.target.value;
      }

      this.setState(_defineProperty({}, event.target.name, value));
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      var _this$state = this.state,
          email = _this$state.email,
          password = _this$state.password,
          firstName = _this$state.firstName,
          lastName = _this$state.lastName,
          isAdmin = _this$state.isAdmin;
      console.log(email, password, firstName, lastName, isAdmin);
      event.preventDefault();
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var isAdmin = this.state.isAdmin;
      return react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_28__["default"], {
        component: "main",
        maxWidth: "xs"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_16__["default"], null), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("div", {
        className: classes.paper
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: classes.avatar
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_icons_LockOutlined__WEBPACK_IMPORTED_MODULE_27___default.a, null)), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_26__["default"], {
        component: "h1",
        variant: "h5"
      }, "Sign up"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement("form", {
        className: classes.form,
        onSubmit: this.handleSubmit.bind(this)
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        container: true,
        spacing: 2
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true,
        xs: 12,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
        autoComplete: "fname",
        autoFocus: true,
        id: "firstName",
        fullWidth: true,
        label: "First Name",
        name: "firstName",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true,
        xs: 12,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
        autoComplete: "lname",
        fullWidth: true,
        id: "lastName",
        label: "Last Name",
        name: "lastName",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
        autoComplete: "email",
        fullWidth: true,
        id: "email",
        label: "Email Address",
        name: "email",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
        autoComplete: "current-password",
        fullWidth: true,
        id: "password",
        label: "Password",
        name: "password",
        onChange: this.handleChange.bind(this),
        required: true,
        type: "password",
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
        autoComplete: "street-address",
        fullWidth: true,
        id: "address",
        label: "Address",
        multiline: true,
        name: "address",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true,
        xs: 12,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
        fullWidth: true,
        id: "cardNb",
        label: "Credit card N\xB0",
        name: "cardNb",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true,
        xs: 12,
        sm: 6
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_25__["default"], {
        fullWidth: true,
        id: "cardPin",
        label: "Credit card pin",
        name: "cardPin",
        onChange: this.handleChange.bind(this),
        required: true,
        variant: "outlined"
      })), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true,
        xs: 12
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_18__["default"], {
        control: react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_24__["default"], {
          checked: isAdmin,
          name: "isAdmin",
          onChange: this.handleChange.bind(this)
        }),
        label: "I want to have admin permissions on this site."
      }))), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_14__["default"], {
        className: classes.submit,
        color: "primary",
        fullWidth: true,
        type: "submit",
        variant: "contained"
      }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        container: true,
        justify: "flex-end"
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_19__["default"], {
        item: true
      }, react__WEBPACK_IMPORTED_MODULE_30___default.a.createElement(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_21__["default"], {
        href: "/login",
        variant: "body2"
      }, "Already have an account? Sign in"))))));
    }
  }]);

  return SignupForm;
}(react__WEBPACK_IMPORTED_MODULE_30___default.a.Component);

SignupForm.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_29___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_23__["withStyles"])(styles)(SignupForm));

/***/ }),

/***/ "./assets/js/components/shared/index.js":
/*!**********************************************!*\
  !*** ./assets/js/components/shared/index.js ***!
  \**********************************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./assets/js/components/shared/navbar.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return _navbar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/js/components/shared/navbar.jsx":
/*!************************************************!*\
  !*** ./assets/js/components/shared/navbar.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Badge */ "./node_modules/@material-ui/core/esm/Badge/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Category */ "./node_modules/@material-ui/icons/Category.js");
/* harmony import */ var _material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "./node_modules/@material-ui/icons/ShoppingCart.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");














var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  };
});

function cartCount(cart) {
  var total = 0;

  for (var i = 0; i < cart.length; i++) {
    total += cart[i].quantity;
  }

  return total;
}

function NavBar(_ref) {
  var isLogged = _ref.isLogged,
      cart = _ref.cart,
      title = _ref.title;
  var classes = useStyles();
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["useHistory"])();
  return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_0__["default"], {
    position: "static"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    "aria-label": "menu",
    color: "inherit",
    className: classes.menuButton,
    edge: "start",
    onClick: function onClick() {
      return history.push('/');
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_7___default.a, null)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: classes.title,
    variant: "h6"
  }, title), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "inherit",
    onClick: function onClick() {
      return history.push('/category');
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_icons_Category__WEBPACK_IMPORTED_MODULE_8___default.a, null)), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "inherit",
    onClick: function onClick() {
      return history.push('/cart');
    }
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Badge__WEBPACK_IMPORTED_MODULE_1__["default"], {
    badgeContent: cartCount(cart),
    color: "secondary"
  }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_9___default.a, null))), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "inherit",
    onClick: function onClick() {
      return history.push('/login');
    }
  }, "Login"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "button"
  }, "Or"), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "inherit",
    onClick: function onClick() {
      return history.push('/signup');
    }
  }, "Sign Up"))));
}

NavBar.propTypes = {
  isLogged: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  title: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    cart: state.cart
  };
};

var mapDispatchToProps = null;
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapStateToProps, mapDispatchToProps)(NavBar));

/***/ }),

/***/ "./assets/js/redux/actions.js":
/*!************************************!*\
  !*** ./assets/js/redux/actions.js ***!
  \************************************/
/*! exports provided: ADD_PRODUCT_CART, REMOVE_PRODUCT_CART, addProductToCart, removeProductFromCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_PRODUCT_CART", function() { return ADD_PRODUCT_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_PRODUCT_CART", function() { return REMOVE_PRODUCT_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProductToCart", function() { return addProductToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeProductFromCart", function() { return removeProductFromCart; });
var ADD_PRODUCT_CART = 'ADD_PRODUCT_CART';
var REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART';
function addProductToCart(id) {
  return {
    type: ADD_PRODUCT_CART,
    id: id
  };
}
function removeProductFromCart(id) {
  return {
    type: REMOVE_PRODUCT_CART,
    id: id
  };
}

/***/ }),

/***/ "./assets/js/redux/reducers.js":
/*!*************************************!*\
  !*** ./assets/js/redux/reducers.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootReducer; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-properties */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./actions */ "./assets/js/redux/actions.js");






















function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var initialState = {
  cart: []
};
function rootReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var product = state.cart.find(function (product) {
    return product.id === action.id;
  });

  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_21__["ADD_PRODUCT_CART"]:
      if (product) {
        state.cart = state.cart.filter(function (product) {
          return product.id !== action.id;
        });
        product.quantity += 1;
      } else {
        product = {
          id: action.id,
          quantity: 1
        };
      }

      return _objectSpread({}, state, {
        cart: [].concat(_toConsumableArray(state.cart), [product])
      });

    case _actions__WEBPACK_IMPORTED_MODULE_21__["REMOVE_PRODUCT_CART"]:
      if (product) {
        state.cart = state.cart.filter(function (product) {
          return product.id !== action.id;
        });

        if (product.quantity > 1) {
          product.quantity -= 1;
          state.cart.push(product);
        }

        return _objectSpread({}, state, {
          cart: state.cart
        });
      }

    default:
      return state;
  }

  return state;
}

/***/ }),

/***/ "./assets/js/redux/stores.js":
/*!***********************************!*\
  !*** ./assets/js/redux/stores.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./assets/js/redux/reducers.js");




var persistConfig = {
  key: 'root',
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default.a
};
var persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])(persistConfig, _reducers__WEBPACK_IMPORTED_MODULE_3__["default"]);
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer);
var persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistStore"])(store);
/* harmony default export */ __webpack_exports__["default"] = ({
  store: store,
  persistor: persistor
}); // export default createStore(rootReducer);

/***/ })

},[["./assets/js/app.jsx","runtime","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbW1vbi9uZXR3b3JraW5nL2Vjb21tZXJjZS1hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NyZWVucy9jYXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9zY3JlZW5zL2NhcnQvcHJvZHVjdExpc3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NjcmVlbnMvY2F0ZWdvcmllcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NyZWVucy9jYXRlZ29yaWVzL2NhdGVnb3J5TGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NyZWVucy9jYXRlZ29yeS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NyZWVucy9jYXRlZ29yeS9wcm9kdWN0TGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NyZWVucy9jaGVja291dC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NyZWVucy9jaGVja291dC9jaGVja291dEZvcm0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NjcmVlbnMvaG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NyZWVucy9ob21lL3Byb2R1Y3RMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9zY3JlZW5zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NjcmVlbnMvbG9naW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NjcmVlbnMvbG9naW4vbG9naW5Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9zY3JlZW5zL29yZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9zY3JlZW5zL29yZGVyL29yZGVyRGV0YWlsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9zY3JlZW5zL3BhZ2VOb3RGb3VuZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NyZWVucy9wcm9kdWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9zY3JlZW5zL3Byb2R1Y3QvcHJvZHVjdERldGFpbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvc2NyZWVucy9zaWdudXAuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NjcmVlbnMvc2lnbnVwL3NpZ251cEZvcm0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL3NoYXJlZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdXgvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVkdXgvcmVkdWNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlZHV4L3N0b3Jlcy5qcyJdLCJuYW1lcyI6WyJBcHAiLCJzdG9yZXMiLCJzdG9yZSIsInBlcnNpc3RvciIsIkhvbWUiLCJDYXRlZ29yaWVzIiwiQ2F0ZWdvcnkiLCJDYXJ0IiwiQ2hlY2tvdXQiLCJMb2dpbiIsIk9yZGVyIiwiUHJvZHVjdCIsIlNpZ251cCIsIlBhZ2VOb3RGb3VuZCIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENhdGVnb3JpZXMiLCJheGlvcyIsImdldCIsInJlcyIsImNhdGVnb3JpZXMiLCJkYXRhIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJjb25zb2xlIiwiZXJyb3IiLCJnZXRQcm9kdWN0Q2F0ZWdvcnkiLCJpZCIsImNhdGVnb3J5IiwicHJvZHVjdHMiLCJnZXRPcmRlciIsIm9yZGVyIiwicGxhY2VPcmRlciIsIkZvcm1EYXRhIiwic2V0IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJhZGRyZXNzIiwiY3JlZGl0Q2FyZE5iIiwiY3JlZGl0Q2FyZFBpbiIsImkiLCJwcm9kdWN0X2lkcyIsImxlbmd0aCIsImNvbmZpZyIsImhlYWRlcnMiLCJwb3N0IiwiZ2V0QWxsUHJvZHVjdHMiLCJnZXRQcm9kdWN0IiwicHJvZHVjdCIsImdldFByb2R1Y3RBcnJheSIsImlkcyIsInBhcmFtcyIsInVzZVN0eWxlcyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInRpdGxlIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJjbGFzc2VzIiwic3R5bGVzIiwiYnJlYWtwb2ludHMiLCJkb3duIiwiY2hlY2tvdXQiLCJ3aWR0aCIsImxpc3QiLCJ1cCIsImFsaWduU2VsZiIsImxlZnQiLCJwb3NpdGlvbiIsInRvcCIsIlByb2R1Y3RMaXN0IiwicHJvcHMiLCJzdGF0ZSIsImxvYWRpbmciLCJjYXJ0IiwibG9nIiwibWFwIiwiZ2V0UHJvZHVjdHMiLCJ0b3RhbCIsInByaWNlIiwiZ2V0Q2FydFF1YW50aXR5IiwidGhlbiIsInNldFN0YXRlIiwiZmluZCIsInF1YW50aXR5IiwicmVtb3ZlUHJvZHVjdEZyb21DYXJ0IiwiZmlsdGVyIiwicmVtb3ZlUHJvZHVjdCIsImhpc3RvcnkiLCJjaXJjdWxhclByb2dyZXNzIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJXaWR0aCIsIm5hbWUiLCJzbGljZSIsImNvbmNhdCIsInJlbmRlclNlY29uZGFyeUFjdGlvbiIsImNvbXB1dGVUb3RhbCIsInB1c2giLCJlbXB0eSIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiLCJ3aXRoUm91dGVyIiwid2l0aFN0eWxlcyIsIkNhdGVnb3J5TGlzdCIsIm1hdGNoIiwic2hhcGUiLCJzdHJpbmciLCJjYXJkIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiLCJjYXJkQ29udGVudCIsImZsZXhHcm93IiwiY2FyZEdyaWQiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsIm1pbldpZHRoIiwiY2FyZE1lZGlhIiwiY2F0ZWdvcnlJZCIsImFkZFByb2R1Y3RUb0NhcnQiLCJhdmF0YXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsIm1hcmdpbiIsImZvcm0iLCJwYXBlciIsImFsaWduSXRlbXMiLCJzdWJtaXQiLCJDaGVja291dEZvcm0iLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiY2hlY2tlZCIsImoiLCJwcmV2ZW50RGVmYXVsdCIsImhhbmRsZVN1Ym1pdCIsImJpbmQiLCJoYW5kbGVDaGFuZ2UiLCJMb2dpbkZvcm0iLCJlbWFpbCIsInBhc3N3b3JkIiwidGV4dCIsIk9yZGVyRGV0YWlsIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJ0b3RhbFByaWNlIiwiUHJvZHVjdERldGFpbCIsImRlc2NyaXB0aW9uIiwiU2lnbnVwRm9ybSIsImlzQWRtaW4iLCJyb290IiwibWVudUJ1dHRvbiIsIm1hcmdpblJpZ2h0IiwiY2FydENvdW50IiwiTmF2QmFyIiwiaXNMb2dnZWQiLCJ1c2VIaXN0b3J5IiwiYm9vbCIsIkFERF9QUk9EVUNUX0NBUlQiLCJSRU1PVkVfUFJPRFVDVF9DQVJUIiwidHlwZSIsImluaXRpYWxTdGF0ZSIsInJvb3RSZWR1Y2VyIiwiYWN0aW9uIiwicGVyc2lzdENvbmZpZyIsImtleSIsInN0b3JhZ2UiLCJwZXJzaXN0ZWRSZWR1Y2Vy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LENBQXZDO0FBQ0EsSUFBTTVLLEtBQUssR0FBR21MLHlEQUFXLENBQUNGLGdCQUFELENBQXpCO0FBQ0EsSUFBTWhMLFNBQVMsR0FBR21MLGtFQUFZLENBQUNwTCxLQUFELENBQTlCO0FBRWU7QUFBRUEsT0FBSyxFQUFMQSxLQUFGO0FBQVNDLFdBQVMsRUFBVEE7QUFBVCxDQUFmLEUsQ0FFQSwyQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7XG4gIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxuICBSb3V0ZSxcbiAgU3dpdGNoLFxufSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFBlcnNpc3RHYXRlIH0gZnJvbSAncmVkdXgtcGVyc2lzdC9pbnRlZ3JhdGlvbi9yZWFjdCc7XG5cbmltcG9ydCB7XG4gIENhdGVnb3JpZXMsXG4gIENhdGVnb3J5LFxuICBDYXJ0LFxuICBDaGVja291dCxcbiAgSG9tZSxcbiAgTG9naW4sXG4gIE9yZGVyLFxuICBQYWdlTm90Rm91bmQsXG4gIFByb2R1Y3QsXG4gIFNpZ251cCxcbn0gZnJvbSAnLi9jb21wb25lbnRzL3NjcmVlbnMnO1xuaW1wb3J0IHN0b3JlcyBmcm9tICcuL3JlZHV4L3N0b3Jlcyc7XG5cbmltcG9ydCAnLi4vY3NzL2FwcC5jc3MnO1xuXG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3Jlcy5zdG9yZX0+XG4gICAgICA8UGVyc2lzdEdhdGUgbG9hZGluZz17bnVsbH0gcGVyc2lzdG9yPXtzdG9yZXMucGVyc2lzdG9yfT5cbiAgICAgICAgPFJvdXRlcj5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17SG9tZX0gZXhhY3QgcGF0aD1cIi9cIiAvPlxuICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Q2F0ZWdvcmllc30gZXhhY3QgcGF0aD1cIi9jYXRlZ29yeS9cIiAvPlxuICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Q2F0ZWdvcnl9IGV4YWN0IHBhdGg9XCIvY2F0ZWdvcnkvOmlkKFxcZCspXCIgLz5cbiAgICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e0NhcnR9IGV4YWN0IHBhdGg9XCIvY2FydFwiIC8+XG4gICAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtDaGVja291dH0gZXhhY3QgcGF0aD1cIi9jaGVja291dFwiIC8+XG4gICAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtMb2dpbn0gZXhhY3QgcGF0aD1cIi9sb2dpblwiIC8+XG4gICAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtPcmRlcn0gcGF0aD1cIi9vcmRlci86aWQoXFxkKylcIiAvPlxuICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17UHJvZHVjdH0gcGF0aD1cIi9wcm9kdWN0LzppZChcXGQrKVwiIC8+XG4gICAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtTaWdudXB9IGV4YWN0IHBhdGg9XCIvc2lnbnVwXCIgLz5cbiAgICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e1BhZ2VOb3RGb3VuZH0gcGF0aD1cIipcIi8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvUm91dGVyPlxuICAgICAgPC9QZXJzaXN0R2F0ZT5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2F0ZWdvcmllcygpXG57XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2NhdGVnb3J5LycpO1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSByZXMuZGF0YTtcbiAgICByZXR1cm4gY2F0ZWdvcmllcztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDQpIHtcbiAgICAgIHRocm93IDQwNDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2R1Y3RDYXRlZ29yeShpZClcbntcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvY2F0ZWdvcnkvJHtpZH1gKTtcbiAgICBjb25zdCBjYXRlZ29yeSA9IHJlcy5kYXRhO1xuICAgIHJldHVybiBjYXRlZ29yeS5wcm9kdWN0cztcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChlLnJlc3BvbnNlLnN0YXR1cyA9PSA0MDQpIHtcbiAgICAgIHRocm93IDQwNDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZGVyKGlkKVxue1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9vcmRlci8ke2lkfWApO1xuICAgIGNvbnN0IG9yZGVyID0gcmVzLmRhdGE7XG4gICAgcmV0dXJuIG9yZGVyO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKGUucmVzcG9uc2Uuc3RhdHVzID09IDQwNCkge1xuICAgICAgdGhyb3cgNDA0O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGxhY2VPcmRlcihvcmRlcilcbntcbiAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICBkYXRhLnNldCgnZmlyc3RuYW1lJywgb3JkZXIuZmlyc3ROYW1lKTtcbiAgZGF0YS5zZXQoJ2xhc3RuYW1lJywgb3JkZXIubGFzdE5hbWUpO1xuICBkYXRhLnNldCgnYWRkcmVzcycsIG9yZGVyLmFkZHJlc3MpO1xuICBkYXRhLnNldCgnY3JlZGl0Q2FyZE5iJywgb3JkZXIuY3JlZGl0Q2FyZE5iKTtcbiAgZGF0YS5zZXQoJ2NyZWRpdENhcmRQaW4nLCBvcmRlci5jcmVkaXRDYXJkUGluKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcmRlci5wcm9kdWN0X2lkcy5sZW5ndGg7IGkrKykge1xuICAgIGRhdGEuc2V0KGBwcm9kdWN0X2lkc1ske2l9XWAsIG9yZGVyLnByb2R1Y3RfaWRzW2ldKTtcbiAgfVxuICBjb25zdCBjb25maWcgPSB7IGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyB9IH07XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9vcmRlci8nLCBkYXRhLCBjb25maWcpO1xuICAgIGNvbnN0IGlkID0gcmVzLmRhdGEuaWQ7XG4gICAgcmV0dXJuIGlkO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUHJvZHVjdHMoKVxue1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wcm9kdWN0Jyk7XG4gICAgY29uc3QgcHJvZHVjdHMgPSByZXMuZGF0YTtcbiAgICByZXR1cm4gcHJvZHVjdHM7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9kdWN0KGlkKVxue1xuICB0cnkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9kdWN0LyR7aWR9YCk7XG4gICAgY29uc3QgcHJvZHVjdCA9IHJlcy5kYXRhO1xuICAgIHJldHVybiBwcm9kdWN0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcihlKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjdEFycmF5KGlkcylcbntcbiAgdHJ5IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcHJvZHVjdC9hcnJheScsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBpZHM6IGlkcyxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgcHJvZHVjdHMgPSByZXMuZGF0YTtcbiAgICByZXR1cm4gcHJvZHVjdHM7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICB9XG59IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vY2FydC9wcm9kdWN0TGlzdCc7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuLi9zaGFyZWQnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQge21ha2VTdHlsZXN9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydCgpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZCYXIgdGl0bGU9XCJDYXJ0XCIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoM1wiPlxuICAgICAgICAgIFByb2R1Y3RzIGluIGNhcnRcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8UHJvZHVjdExpc3QgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn0iLCJpbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7O1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgRGl2aWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaXZpZGVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUF2YXRhcic7XG5pbXBvcnQgTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBEZWxldGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGUnO1xuaW1wb3J0IFJlbW92ZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1JlbW92ZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmltcG9ydCB7IGdldFByb2R1Y3RBcnJheSB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9uZXR3b3JraW5nL2Vjb21tZXJjZS1hcGknO1xuaW1wb3J0IHsgcmVtb3ZlUHJvZHVjdEZyb21DYXJ0IH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucyc7XG5cblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hsJyldOiB7XG4gICAgY2hlY2tvdXQ6IHtcbiAgICAgIHdpZHRoOiAnOTAlJyxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIHdpZHRoOiAnOTAlJyxcbiAgICB9LFxuICB9LFxuICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hsJyldOiB7XG4gICAgY2hlY2tvdXQ6IHtcbiAgICAgIHdpZHRoOiAnNjAlJyxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIHdpZHRoOiAnNjAlJyxcbiAgICB9LFxuICB9LFxuICBjaGVja291dDoge1xuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxuICB9LFxuICBjaXJjdWxhclByb2dyZXNzOiB7XG4gICAgbGVmdDogLTM1LFxuICAgIG1hcmdpbkxlZnQ6ICc1MHZ3JyxcbiAgICBtYXJnaW5Ub3A6ICc1MHZoJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IC0zNSxcbiAgfSxcbiAgZW1wdHk6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZyg0KSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGxvYWRpbmc6IHRydWUsIHByb2R1Y3RzOiBbXSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBjYXJ0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnNvbGUubG9nKGNhcnQpO1xuICAgIGNvbnN0IHByb2R1Y3RfaWRzID0gY2FydC5tYXAocHJvZHVjdCA9PiBwcm9kdWN0LmlkKTtcbiAgICB0aGlzLmdldFByb2R1Y3RzKHByb2R1Y3RfaWRzKTtcbiAgfVxuXG4gIGNvbXB1dGVUb3RhbChwcm9kdWN0cykge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWwgKz0gcHJvZHVjdHNbaV0ucHJpY2UgKiB0aGlzLmdldENhcnRRdWFudGl0eShwcm9kdWN0c1tpXS5pZCk7XG4gICAgfVxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIGdldFByb2R1Y3RzKGlkcykge1xuICAgIGlmIChpZHMubGVuZ3RoID4gMCkge1xuICAgICAgZ2V0UHJvZHVjdEFycmF5KGlkcykudGhlbihwcm9kdWN0cyA9PiB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZSwgcHJvZHVjdHN9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6IGZhbHNlfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0Q2FydFF1YW50aXR5KGlkKSB7XG4gICAgY29uc3QgeyBjYXJ0IH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBwcm9kdWN0ID0gY2FydC5maW5kKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCA9PT0gaWQpO1xuICAgIHJldHVybiBwcm9kdWN0LnF1YW50aXR5O1xuICB9XG5cbiAgcmVtb3ZlUHJvZHVjdChpZCkge1xuICAgIGNvbnN0IHsgcmVtb3ZlUHJvZHVjdEZyb21DYXJ0IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICh0aGlzLmdldENhcnRRdWFudGl0eShpZCkgPT0gMSkge1xuICAgICAgbGV0IHByb2R1Y3RzID0gdGhpcy5zdGF0ZS5wcm9kdWN0cztcbiAgICAgIHByb2R1Y3RzID0gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCAhPT0gaWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cHJvZHVjdHM6IHByb2R1Y3RzfSk7XG4gICAgfVxuICAgIHJlbW92ZVByb2R1Y3RGcm9tQ2FydChpZCk7XG4gIH1cblxuICByZW5kZXJTZWNvbmRhcnlBY3Rpb24ocHJvZHVjdCkge1xuICAgIGlmICh0aGlzLmdldENhcnRRdWFudGl0eShwcm9kdWN0LmlkKSA+IDEpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJxdWFudGl0eS1kb3duXCIgZWRnZT1cImVuZFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVtb3ZlUHJvZHVjdChwcm9kdWN0LmlkKX0+XG4gICAgICAgICAgPFJlbW92ZUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cImRlbGV0ZVwiIGVkZ2U9XCJlbmRcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlbW92ZVByb2R1Y3QocHJvZHVjdC5pZCl9PlxuICAgICAgICAgIDxEZWxldGVJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcywgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxvYWRpbmcsIHByb2R1Y3RzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaXJjdWxhclByb2dyZXNzfSBzaXplPXs3MH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBwcm9kdWN0cyAmJiBwcm9kdWN0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fSBzdHlsZT17e2JvcmRlckNvbG9yOiAnYmxhY2snLCBib3JkZXJXaWR0aDogJzFweCd9fT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PVwicHJvZHVjdCBwaG90b1wiIHNyYz1cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb21cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtQXZhdGFyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17cHJvZHVjdC5uYW1lLmxlbmd0aCA+IDI3ID8gcHJvZHVjdC5uYW1lLnNsaWNlKDAsIDI3KS5jb25jYXQoJy4uLicpIDogcHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeT17YCR7cHJvZHVjdC5wcmljZX0kIHggJHt0aGlzLmdldENhcnRRdWFudGl0eShwcm9kdWN0LmlkKX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1TZWNvbmRhcnlBY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyU2Vjb25kYXJ5QWN0aW9uKHByb2R1Y3QpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBrZXk9J3RvdGFsJz5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtgVG90YWw6ICR7dGhpcy5jb21wdXRlVG90YWwocHJvZHVjdHMpfSRgfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrb3V0fVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnL2NoZWNrb3V0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIiA+XG4gICAgICAgICAgICAgICAgICBDaGVja291dFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmVtcHR5fT5cbiAgICAgICAgICAgICAgTm8gcHJvZHVjdHMgaW4geW91ciBjYXJ0LiA8TGluayBocmVmPVwiL1wiPkFkZCBzb21lLjwvTGluaz5cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICApXG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cblByb2R1Y3RMaXN0LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgY2FydDogc3RhdGUuY2FydCxcbiAgfTtcbn07XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgcmVtb3ZlUHJvZHVjdEZyb21DYXJ0OiByZW1vdmVQcm9kdWN0RnJvbUNhcnQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKSh3aXRoUm91dGVyKHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0TGlzdCkpKTsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IENhdGVnb3J5TGlzdCBmcm9tICcuL2NhdGVnb3JpZXMvY2F0ZWdvcnlMaXN0JztcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcmllcygpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZCYXIgdGl0bGU9XCJDYXRlZ29yaWVzXCIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoM1wiPlxuICAgICAgICAgIENhdGVnb3JpZXNcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8Q2F0ZWdvcnlMaXN0IC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59IiwiaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nOztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluayc7XG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0JztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1BdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1BdmF0YXInO1xuaW1wb3J0IExpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtU2Vjb25kYXJ5QWN0aW9uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRGVsZXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcbmltcG9ydCBSZW1vdmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL25ldHdvcmtpbmcvZWNvbW1lcmNlLWFwaSc7XG5cblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hsJyldOiB7XG4gICAgY2hlY2tvdXQ6IHtcbiAgICAgIHdpZHRoOiAnOTAlJyxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIHdpZHRoOiAnOTAlJyxcbiAgICB9LFxuICB9LFxuICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3hsJyldOiB7XG4gICAgY2hlY2tvdXQ6IHtcbiAgICAgIHdpZHRoOiAnNjAlJyxcbiAgICB9LFxuICAgIGxpc3Q6IHtcbiAgICAgIHdpZHRoOiAnNjAlJyxcbiAgICB9LFxuICB9LFxuICBjaGVja291dDoge1xuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxuICB9LFxuICBjaXJjdWxhclByb2dyZXNzOiB7XG4gICAgbGVmdDogLTM1LFxuICAgIG1hcmdpbkxlZnQ6ICc1MHZ3JyxcbiAgICBtYXJnaW5Ub3A6ICc1MHZoJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IC0zNSxcbiAgfSxcbiAgZW1wdHk6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZyg0KSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBDYXRlZ29yeUxpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBsb2FkaW5nOiB0cnVlLCBjYXRlZ29yaWVzOiBbXSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRDYXRlZ29yaWVzKCk7XG4gIH1cblxuICBnZXRDYXRlZ29yaWVzKCkge1xuICAgIGdldENhdGVnb3JpZXMoKS50aGVuKGNhdGVnb3JpZXMgPT4gdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2UsIGNhdGVnb3JpZXN9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzLCBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbG9hZGluZywgY2F0ZWdvcmllcyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjbGFzc05hbWU9e2NsYXNzZXMuY2lyY3VsYXJQcm9ncmVzc30gc2l6ZT17NzB9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgY2F0ZWdvcmllcyAmJiBjYXRlZ29yaWVzLmxlbmd0aCA/IChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBkaXJlY3Rpb249XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPExpc3QgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3R9IHN0eWxlPXt7Ym9yZGVyQ29sb3I6ICdibGFjaycsIGJvcmRlcldpZHRoOiAnMXB4J319PlxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2NhdGVnb3J5LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY29tcG9uZW50PVwiYVwiIGhyZWY9e2AvY2F0ZWdvcnkvJHtjYXRlZ29yeS5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e2NhdGVnb3J5Lm5hbWUubGVuZ3RoID4gMjcgPyBjYXRlZ29yeS5uYW1lLnNsaWNlKDAsIDI3KS5jb25jYXQoJy4uLicpIDogY2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnk9e2Ake2NhdGVnb3J5LnByb2R1Y3RzLmxlbmd0aH0gcHJvZHVjdHNgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8Lz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmVtcHR5fT5cbiAgICAgICAgICAgICAgTm8gY2F0ZWdvcmllcyB5ZXQuIDxMaW5rIGhyZWY9XCIvXCI+UmV0dXJuIHRvIGhvbWUuPC9MaW5rPlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuQ2F0ZWdvcnlMaXN0LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBoaXN0b3J5OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHdpdGhTdHlsZXMoc3R5bGVzKShDYXRlZ29yeUxpc3QpKTsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vY2F0ZWdvcnkvcHJvZHVjdExpc3QnO1xuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi4vc2hhcmVkJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoeyBtYXRjaDogeyBwYXJhbXM6IHsgaWQgfSB9IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkJhciB0aXRsZT1cIkNhdGVnb3J5XCIgLz5cbiAgICAgIDxtYWluPlxuICAgICAgICA8UHJvZHVjdExpc3QgY2F0ZWdvcnlJZD17aWR9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59XG5cbkNhdGVnb3J5LnByb3BUeXBlcyA9IHtcbiAgbWF0Y2g6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGFyYW1zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9KVxuICB9KVxufTsiLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVHJ1bmNhdGVTdHJpbmcgZnJvbSAncmVhY3QtdHJ1bmNhdGUtc3RyaW5nJztcblxuaW1wb3J0IHsgZ2V0UHJvZHVjdENhdGVnb3J5IH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL25ldHdvcmtpbmcvZWNvbW1lcmNlLWFwaSc7XG5pbXBvcnQgeyBhZGRQcm9kdWN0VG9DYXJ0IH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucyc7XG5cblxuY29uc3Qgc3R5bGVzID0gdGhlbWUgPT4gKHtcbiAgY2FyZDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgfSxcbiAgY2FyZENvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgY2FyZEdyaWQ6IHtcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgY2FyZE1lZGlhOiB7XG4gICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcbiAgfSxcbiAgY2lyY3VsYXJQcm9ncmVzczoge1xuICAgIGxlZnQ6IC0zNSxcbiAgICBtYXJnaW5MZWZ0OiAnNTB2dycsXG4gICAgbWFyZ2luVG9wOiAnNTB2aCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAtMzUsXG4gIH0sXG4gIGVtcHR5OiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoNCksXG4gIH0sXG59KTtcblxuY2xhc3MgUHJvZHVjdExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBsb2FkaW5nOiB0cnVlLCBwcm9kdWN0czogW10gfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0UHJvZHVjdHMoKTtcbiAgfVxuXG4gIGdldFByb2R1Y3RzKCkge1xuICAgIGNvbnN0IHsgY2F0ZWdvcnlJZCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRQcm9kdWN0Q2F0ZWdvcnkoY2F0ZWdvcnlJZCkudGhlbihwcm9kdWN0cyA9PiB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UsIHByb2R1Y3RzIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFkZFByb2R1Y3RUb0NhcnQsIGNsYXNzZXMsIGhpc3RvcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBwcm9kdWN0cyB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjbGFzc05hbWU9e2NsYXNzZXMuY2lyY3VsYXJQcm9ncmVzc30gc2l6ZT17NzB9IC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgcHJvZHVjdHMgJiYgcHJvZHVjdHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZEdyaWR9IG1heFdpZHRoPVwibWRcIj5cbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezR9PlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiAoXG4gICAgICAgICAgICAgICAgICA8R3JpZCBrZXk9e3Byb2R1Y3QuaWR9IGl0ZW0gbGc9ezJ9IG1kPXs0fSBzbT17Nn0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmR9PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkTWVkaWF9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT1cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZENvbnRlbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDJcIiBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUcnVuY2F0ZVN0cmluZyB0ZXh0PXtwcm9kdWN0Lm5hbWV9IHRydW5jYXRlQXQ9ezEwMH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcmljZX0kXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+YXJ0XG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiICBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goYC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gKX0gc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAgb25DbGljaz17KCkgPT4gYWRkUHJvZHVjdFRvQ2FydChwcm9kdWN0LmlkKX0gc2l6ZT1cInNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCB0byBjYXJ0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZW1wdHl9PlxuICAgICAgICAgICAgICBObyBwcm9kdWN0cyB5ZXQgVF9ULlxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIClcbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbn1cblxuUHJvZHVjdExpc3QucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgY2F0ZWdvcnlJZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gbnVsbDtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBhZGRQcm9kdWN0VG9DYXJ0OiBhZGRQcm9kdWN0VG9DYXJ0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFJvdXRlcih3aXRoU3R5bGVzKHN0eWxlcykoUHJvZHVjdExpc3QpKSk7IiwiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBDaGVja291dEluZm9ybWF0aW9uIGZyb20gJy4vY2hlY2tvdXQvY2hlY2tvdXRGb3JtJztcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXModGhlbWUgPT4gKHtcbiAgdGl0bGU6IHtcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2QmFyIHRpdGxlPVwiQ2hlY2tvdXRcIiAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cImgzXCI+XG4gICAgICAgICAgQ2hlY2tvdXRcbiAgICAgICAgICA8Q2hlY2tvdXRJbmZvcm1hdGlvbiAvPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gICk7XG59IiwiaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFNob3BwaW5nQ2FydE91dGxpbmVkIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnRPdXRsaW5lZCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Z2V0UHJvZHVjdEFycmF5LCBwbGFjZU9yZGVyfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbmV0d29ya2luZy9lY29tbWVyY2UtYXBpJztcbmltcG9ydCB7cmVtb3ZlUHJvZHVjdEZyb21DYXJ0fSBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBhdmF0YXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBjaXJjdWxhclByb2dyZXNzOiB7XG4gICAgbGVmdDogLTM1LFxuICAgIG1hcmdpbkxlZnQ6ICc1MHZ3JyxcbiAgICBtYXJnaW5Ub3A6ICc1MHZoJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IC0zNSxcbiAgfSxcbiAgZm9ybToge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcbiAgICB3aWR0aDogJzEwMCUnLFxuICB9LFxuICBwYXBlcjoge1xuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXG4gIH0sXG4gIHN1Ym1pdDoge1xuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygzLCAwLCAyKSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBDaGVja291dEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBwcm9kdWN0czogW10sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgY2FydCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwcm9kdWN0X2lkcyA9IGNhcnQubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5pZCk7XG4gICAgdGhpcy5nZXRQcm9kdWN0cyhwcm9kdWN0X2lkcyk7XG4gIH1cblxuICBjb21wdXRlVG90YWwocHJvZHVjdHMpIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZHVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvdGFsICs9IHByb2R1Y3RzW2ldLnByaWNlICogdGhpcy5nZXRDYXJ0UXVhbnRpdHkocHJvZHVjdHNbaV0uaWQpO1xuICAgIH1cbiAgICByZXR1cm4gdG90YWw7XG4gIH1cblxuICBnZXRDYXJ0UXVhbnRpdHkoaWQpIHtcbiAgICBjb25zdCB7IGNhcnQgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHByb2R1Y3QgPSBjYXJ0LmZpbmQocHJvZHVjdCA9PiBwcm9kdWN0LmlkID09PSBpZCk7XG4gICAgcmV0dXJuIHByb2R1Y3QucXVhbnRpdHk7XG4gIH1cblxuICBnZXRQcm9kdWN0cyhpZHMpIHtcbiAgICBpZiAoaWRzLmxlbmd0aCA+IDApIHtcbiAgICAgIGdldFByb2R1Y3RBcnJheShpZHMpLnRoZW4ocHJvZHVjdHMgPT4gdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzogZmFsc2UsIHByb2R1Y3RzfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOiBmYWxzZX0pO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGlmIChldmVudC50YXJnZXQubmFtZSA9PT0gJ2lzQWRtaW4nKSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC5jaGVja2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGNvbnN0IHsgZmlyc3ROYW1lLCBsYXN0TmFtZSwgYWRkcmVzcywgY3JlZGl0Q2FyZE5iLCBjcmVkaXRDYXJkUGluIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgY2FydCwgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwcm9kdWN0X2lkcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjYXJ0W2ldLnF1YW50aXR5OyBqKyspIHtcbiAgICAgICAgcHJvZHVjdF9pZHMucHVzaChjYXJ0W2ldLmlkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcGxhY2VPcmRlcih7Zmlyc3ROYW1lLCBsYXN0TmFtZSwgYWRkcmVzcywgY3JlZGl0Q2FyZE5iLCBjcmVkaXRDYXJkUGluLCBwcm9kdWN0X2lkc30pXG4gICAgICAudGhlbihpZCA9PiB7XG4gICAgICAgIGhpc3RvcnkucHVzaChgL29yZGVyLyR7aWR9YCk7XG4gICAgICB9KTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHByb2R1Y3RzLCBsb2FkaW5nIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaXJjdWxhclByb2dyZXNzfSBzaXplPXs3MH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XG4gICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxuICAgICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRPdXRsaW5lZCAvPlxuICAgICAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgICAgICBDaGVja291dFxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgVG90YWwgdG8gcGF5OlxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5jb21wdXRlVG90YWwocHJvZHVjdHMpfSAkXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJmbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImxuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJzdHJlZXQtYWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkFkZHJlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjcmVkaXRDYXJkTmJcIlxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ3JlZGl0IGNhcmQgTsKwXCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY3JlZGl0Q2FyZE5iXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjcmVkaXRDYXJkUGluXCJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNyZWRpdCBjYXJkIHBpblwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNyZWRpdENhcmRQaW5cIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdH1cbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGF5XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICBJIHdhbnQgdG8gYnV5IG1vcmVcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5cbkNoZWNrb3V0Rm9ybS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjYXJ0OiBzdGF0ZS5jYXJ0LFxuICB9O1xufTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICByZW1vdmVQcm9kdWN0RnJvbUNhcnQ6IHJlbW92ZVByb2R1Y3RGcm9tQ2FydCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKHdpdGhSb3V0ZXIod2l0aFN0eWxlcyhzdHlsZXMpKENoZWNrb3V0Rm9ybSkpKTsiLCJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4vaG9tZS9wcm9kdWN0TGlzdCc7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHRpdGxlOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXG4gIH0sXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2QmFyIHRpdGxlPVwiSG9tZVwiIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDNcIj5cbiAgICAgICAgICBMYXRlc3QgUHJvZHVjdHNcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8UHJvZHVjdExpc3QgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgVHJ1bmNhdGVTdHJpbmcgZnJvbSAncmVhY3QtdHJ1bmNhdGUtc3RyaW5nJztcblxuaW1wb3J0IHsgZ2V0QWxsUHJvZHVjdHMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vbmV0d29ya2luZy9lY29tbWVyY2UtYXBpJztcbmltcG9ydCB7IGFkZFByb2R1Y3RUb0NhcnQgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zJztcblxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIGhlaWdodDogJzEwMCUnLFxuICB9LFxuICBjYXJkQ29udGVudDoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBjYXJkR3JpZDoge1xuICAgIHBhZGRpbmdCb3R0b206IHRoZW1lLnNwYWNpbmcoOCksXG4gICAgcGFkZGluZ1RvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICB9LFxuICBjYXJkTWVkaWE6IHtcbiAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxuICB9LFxuICBjaXJjdWxhclByb2dyZXNzOiB7XG4gICAgbGVmdDogLTM1LFxuICAgIG1hcmdpbkxlZnQ6ICc1MHZ3JyxcbiAgICBtYXJnaW5Ub3A6ICc1MHZoJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IC0zNSxcbiAgfSxcbiAgZW1wdHk6IHtcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZyg0KSxcbiAgfSxcbn0pO1xuXG5jbGFzcyBQcm9kdWN0TGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGxvYWRpbmc6IHRydWUsIHByb2R1Y3RzOiBbXSB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRQcm9kdWN0cygpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdHMoKSB7XG4gICAgZ2V0QWxsUHJvZHVjdHMoKS50aGVuKHByb2R1Y3RzID0+IHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgcHJvZHVjdHMgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYWRkUHJvZHVjdFRvQ2FydCwgY2xhc3NlcywgaGlzdG9yeSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGxvYWRpbmcsIHByb2R1Y3RzIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaXJjdWxhclByb2dyZXNzfSBzaXplPXs3MH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICBwcm9kdWN0cyAmJiBwcm9kdWN0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkR3JpZH0gbWF4V2lkdGg9XCJtZFwiPlxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGtleT17cHJvZHVjdC5pZH0gaXRlbSBsZz17Mn0gbWQ9ezR9IHNtPXs2fSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRNZWRpYX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkQ29udGVudH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMlwiIGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRydW5jYXRlU3RyaW5nIHRleHQ9e3Byb2R1Y3QubmFtZX0gdHJ1bmNhdGVBdD17MTAwfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlfSRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5hcnRcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaChgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWApfSBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgVmlld1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiICBvbkNsaWNrPXsoKSA9PiBhZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QuaWQpfSBzaXplPVwic21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5lbXB0eX0+XG4gICAgICAgICAgICAgIE5vIHByb2R1Y3RzIHlldCBUX1QuXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5Qcm9kdWN0TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gbnVsbDtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBhZGRQcm9kdWN0VG9DYXJ0OiBhZGRQcm9kdWN0VG9DYXJ0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFJvdXRlcih3aXRoU3R5bGVzKHN0eWxlcykoUHJvZHVjdExpc3QpKSk7IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXRlZ29yaWVzfSBmcm9tICcuL2NhdGVnb3JpZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnknO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXJ0IH0gZnJvbSAnLi9jYXJ0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ2hlY2tvdXQgfSBmcm9tICcuL2NoZWNrb3V0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSG9tZSB9IGZyb20gJy4vaG9tZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ2luIH0gZnJvbSAnLi9sb2dpbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE9yZGVyIH0gZnJvbSAnLi9vcmRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2R1Y3QgfSBmcm9tICcuL3Byb2R1Y3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYWdlTm90Rm91bmQgfSBmcm9tICcuL3BhZ2VOb3RGb3VuZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZ251cCB9IGZyb20gJy4vc2lnbnVwJzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4vbG9naW4vbG9naW5Gb3JtJztcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmF2QmFyIHRpdGxlPVwiTG9naW5cIiAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxMb2dpbkZvcm0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn0iLCJpbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBMb2NrT3V0bGluZWRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Mb2NrT3V0bGluZWQnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBhdmF0YXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBmb3JtOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxuICB9LFxufSk7XG5cbmNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJycsXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgY29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XG4gICAgICAgIDxDc3NCYXNlbGluZS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxuICAgICAgICAgICAgPExvY2tPdXRsaW5lZEljb24vPlxuICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICBTaWduIGluXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgICAgICAgY29udHJvbD17PENoZWNrYm94IHZhbHVlPVwicmVtZW1iZXJcIiBjb2xvcj1cInByaW1hcnlcIi8+fVxuICAgICAgICAgICAgICBsYWJlbD1cIlJlbWVtYmVyIG1lXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpZ24gSW5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgdmFyaWFudD1cImJvZHkyXCI+XG4gICAgICAgICAgICAgICAgICBGb3Jnb3QgcGFzc3dvcmQ/XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaWdudXBcIiB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgIERvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiBVcFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbkxvZ2luRm9ybS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKExvZ2luRm9ybSk7IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBPcmRlckRldGFpbCBmcm9tICcuL29yZGVyL29yZGVyRGV0YWlsJztcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gJy4uL3NoYXJlZCc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuL2hvbWUvcHJvZHVjdExpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlcihwcm9wcykge1xuICBjb25zdCB7IG1hdGNoOiB7IHBhcmFtczogeyBpZCB9IH0gfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZCYXIgdGl0bGU9XCJPcmRlclwiIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPE9yZGVyRGV0YWlsIGlkPXtpZH0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuT3JkZXIucHJvcFR5cGVzID0ge1xuICBtYXRjaDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYXJhbXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pXG4gIH0pXG59OyIsImltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgeyBnZXRPcmRlciB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9uZXR3b3JraW5nL2Vjb21tZXJjZS1hcGknO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBUcnVuY2F0ZVN0cmluZyBmcm9tICdyZWFjdC10cnVuY2F0ZS1zdHJpbmcnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnO1xuXG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIGNpcmN1bGFyUHJvZ3Jlc3M6IHtcbiAgICBsZWZ0OiAtMzUsXG4gICAgbWFyZ2luTGVmdDogJzUwdncnLFxuICAgIG1hcmdpblRvcDogJzUwdmgnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogLTM1LFxuICB9LFxuICB0aXRsZToge1xuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMyksXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxuICB9LFxuICB0ZXh0OiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXG4gIH0sXG59KTtcblxuY2xhc3MgT3JkZXJEZXRhaWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBsb2FkaW5nOiB0cnVlLCBvcmRlcjogbnVsbCB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmdldE9yZGVyKGlkKTtcbiAgfVxuXG4gIGdldE9yZGVyKGlkKSB7XG4gICAgY29uc3QgeyBoaXN0b3J5IH0gPSB0aGlzLnByb3BzO1xuICAgIGdldE9yZGVyKGlkKVxuICAgICAgLnRoZW4ob3JkZXIgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBvcmRlciB9KSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgIGhpc3RvcnkucHVzaCgnKicpO1xuICAgICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbG9hZGluZywgb3JkZXIgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY2xhc3NOYW1lPXtjbGFzc2VzLmNpcmN1bGFyUHJvZ3Jlc3N9IHNpemU9ezcwfSAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImgzXCI+XG4gICAgICAgICAgICAgIE9yZGVyIE7CsHtvcmRlci5pZH1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIEJ1eWVyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XG4gICAgICAgICAgICAgIE5hbWU6IHtvcmRlci5maXJzdG5hbWV9IHtvcmRlci5sYXN0bmFtZX1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cbiAgICAgICAgICAgICAgQWRkcmVzczoge29yZGVyLmFkZHJlc3N9XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XG4gICAgICAgICAgICAgIENyZWRpdCBDYXJkIE7CsDoge29yZGVyLmNyZWRpdENhcmROYn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5cbiAgICAgICAgICAgICAgQ3JlZGl0IENhcmQgcGluOiB7b3JkZXIuY3JlZGl0Q2FyZFBpbn1cbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cImg0XCI+XG4gICAgICAgICAgICAgIFByb2R1Y3RzXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICB7b3JkZXIucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0ga2V5PXtwcm9kdWN0LmlkfT5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lLmxlbmd0aCA+IDI3ID8gcHJvZHVjdC5uYW1lLnNsaWNlKDAsIDI3KS5jb25jYXQoJy4uLicpIDogcHJvZHVjdC5uYW1lfSB8IHtwcm9kdWN0LnByaWNlfSRcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+XG4gICAgICAgICAgICAgIFRvdGFsID0ge29yZGVyLnRvdGFsUHJpY2V9JFxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5PcmRlckRldGFpbC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgaGlzdG9yeTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcih3aXRoU3R5bGVzKHN0eWxlcykoT3JkZXJEZXRhaWwpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlTm90Rm91bmQoKSB7XG4gIHJldHVybiAoXG4gICAgPG1haW4+XG4gICAgICA8aDE+NDA0OiBQYWdlIG5vdCBmb3VuZDwvaDE+XG4gICAgPC9tYWluPlxuICApO1xufSIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUHJvZHVjdERldGFpbCBmcm9tICcuL3Byb2R1Y3QvcHJvZHVjdERldGFpbCc7XG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tICcuLi9zaGFyZWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KHByb3BzKSB7XG4gIGNvbnN0IHsgbWF0Y2g6IHsgcGFyYW1zOiB7IGlkIH0gfSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkJhciB0aXRsZT1cIlByb2R1Y3RcIiAvPlxuICAgICAgPG1haW4+XG4gICAgICAgIDxQcm9kdWN0RGV0YWlsIGlkPXtpZH0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuUHJvZHVjdC5wcm9wVHlwZXMgPSB7XG4gIG1hdGNoOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhcmFtczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSlcbiAgfSlcbn07IiwiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcnVuY2F0ZVN0cmluZyBmcm9tICdyZWFjdC10cnVuY2F0ZS1zdHJpbmcnO1xuXG5pbXBvcnQge2dldFByb2R1Y3R9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9uZXR3b3JraW5nL2Vjb21tZXJjZS1hcGknO1xuaW1wb3J0IHthZGRQcm9kdWN0VG9DYXJ0fSBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zJztcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneGwnKV06IHtcbiAgICBjYXJkOiB7XG4gICAgICB3aWR0aDogJzgwJScsXG4gICAgfSxcbiAgfSxcbiAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCd4bCcpXToge1xuICAgIGNhcmQ6IHtcbiAgICAgIHdpZHRoOiAnNTAlJyxcbiAgICB9LFxuICB9LFxuICBjYXJkOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcbiAgfSxcbiAgY2FyZENvbnRlbnQ6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgY2FyZEdyaWQ6IHtcbiAgICBwYWRkaW5nQm90dG9tOiB0aGVtZS5zcGFjaW5nKDgpLFxuICAgIHBhZGRpbmdUb3A6IHRoZW1lLnNwYWNpbmcoNCksXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgfSxcbiAgY2FyZE1lZGlhOiB7XG4gICAgcGFkZGluZ1RvcDogJzU2LjI1JScsIC8vIDE2OjlcbiAgfSxcbiAgY2lyY3VsYXJQcm9ncmVzczoge1xuICAgIGxlZnQ6IC0zNSxcbiAgICBtYXJnaW5MZWZ0OiAnNTB2dycsXG4gICAgbWFyZ2luVG9wOiAnNTB2aCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAtMzUsXG4gIH0sXG4gIHRpdGxlOiB7XG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygzKSxcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXG4gIH0sXG59KTtcblxuXG5cbmNsYXNzIFByb2R1Y3REZXRhaWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7IGxvYWRpbmc6IHRydWUsIHByb2R1Y3Q6IG51bGwgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgaWQgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5nZXRQcm9kdWN0KGlkKTtcbiAgfVxuXG4gIGdldFByb2R1Y3QoaWQpIHtcbiAgICBnZXRQcm9kdWN0KGlkKVxuICAgIC50aGVuKHByb2R1Y3QgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBwcm9kdWN0IH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFkZFByb2R1Y3RUb0NhcnQsIGNsYXNzZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsb2FkaW5nLCBwcm9kdWN0IH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICAgIDxDaXJjdWxhclByb2dyZXNzIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaXJjdWxhclByb2dyZXNzfSBzaXplPXs3MH0gLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoM1wiPlxuICAgICAgICAgICAgICA8VHJ1bmNhdGVTdHJpbmcgdGV4dD17cHJvZHVjdC5uYW1lfSB0cnVuY2F0ZUF0PXsxMDB9IC8+XG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIganVzdGlmeT1cImNlbnRlclwiPlxuICAgICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XG4gICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRNZWRpYX1cbiAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiICBvbkNsaWNrPXsoKSA9PiBhZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QuaWQpfSBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgQWRkIHRvIGNhcnRcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBkaXNhYmxlZCBzaXplPVwibGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgQnV5IGl0IG5vd1xuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcmRDb250ZW50fT5cbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgyXCIgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwicFwiIHZhcmlhbnQ9XCJoNlwiPlxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcmljZX0kXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC8+XG4gICAgKTtcbiAgfVxufVxuXG5Qcm9kdWN0RGV0YWlsLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gbnVsbDtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBhZGRQcm9kdWN0VG9DYXJ0OiBhZGRQcm9kdWN0VG9DYXJ0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFByb2R1Y3REZXRhaWwpKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU2lnbnVwRm9ybSBmcm9tICcuL3NpZ251cC9zaWdudXBGb3JtJztcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gJy4uL3NoYXJlZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ251cCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdkJhciB0aXRsZT1cIlNpZ251cFwiIC8+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPFNpZ251cEZvcm0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn0iLCJpbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCc7XG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IExvY2tPdXRsaW5lZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2tPdXRsaW5lZCc7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICBhdmF0YXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxuICB9LFxuICBmb3JtOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcbiAgfSxcbiAgc3VibWl0OiB7XG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDMsIDAsIDIpLFxuICB9LFxufSk7XG5cbmNsYXNzIFNpZ251cEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWw6ICcnLFxuICAgICAgZmlyc3ROYW1lOiAnJyxcbiAgICAgIGxhc3ROYW1lOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgIGlzQWRtaW46IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBsZXQgdmFsdWU7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm5hbWUgPT09ICdpc0FkbWluJykge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQuY2hlY2tlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2V2ZW50LnRhcmdldC5uYW1lXTogdmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgZmlyc3ROYW1lLCBsYXN0TmFtZSwgaXNBZG1pbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQsIGZpcnN0TmFtZSwgbGFzdE5hbWUsIGlzQWRtaW4pO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNBZG1pbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIGNvbXBvbmVudD1cIm1haW5cIiBtYXhXaWR0aD1cInhzXCI+XG4gICAgICAgIDxDc3NCYXNlbGluZS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBhcGVyfT5cbiAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxuICAgICAgICAgICAgPExvY2tPdXRsaW5lZEljb24vPlxuICAgICAgICAgIDwvQXZhdGFyPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImg1XCI+XG4gICAgICAgICAgICBTaWduIHVwXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBzbT17Nn0+XG4gICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZm5hbWVcIlxuICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImxuYW1lXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cInN0cmVldC1hZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgaWQ9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWRkcmVzc1wiXG4gICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJhZGRyZXNzXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gc209ezZ9PlxuICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgaWQ9XCJjYXJkTmJcIlxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDcmVkaXQgY2FyZCBOwrBcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNhcmROYlwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fT5cbiAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgIGlkPVwiY2FyZFBpblwiXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNyZWRpdCBjYXJkIHBpblwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY2FyZFBpblwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgICBjb250cm9sPXtcbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXtpc0FkbWlufSBuYW1lPVwiaXNBZG1pblwiIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJIHdhbnQgdG8gaGF2ZSBhZG1pbiBwZXJtaXNzaW9ucyBvbiB0aGlzIHNpdGUuXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdWJtaXR9XG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFNpZ24gVXBcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGp1c3RpZnk9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbG9naW5cIiB2YXJpYW50PVwiYm9keTJcIj5cbiAgICAgICAgICAgICAgICAgIEFscmVhZHkgaGF2ZSBhbiBhY2NvdW50PyBTaWduIGluXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuU2lnbnVwRm9ybS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFNpZ251cEZvcm0pOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTmF2QmFyIH0gZnJvbSAnLi9uYXZiYXInOyIsImltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBCYWRnZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWRnZSc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBIb21lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZSc7XG5pbXBvcnQgQ2F0ZWdvcnlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYXRlZ29yeSc7XG5pbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2hvcHBpbmdDYXJ0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxuICB9LFxuICB0aXRsZToge1xuICAgIGZsZXhHcm93OiAxXG4gIH0sXG59KSk7XG5cbmZ1bmN0aW9uIGNhcnRDb3VudChjYXJ0KSB7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKykge1xuICAgIHRvdGFsICs9IGNhcnRbaV0ucXVhbnRpdHk7XG4gIH1cbiAgcmV0dXJuIHRvdGFsO1xufVxuXG5mdW5jdGlvbiBOYXZCYXIoeyBpc0xvZ2dlZCwgY2FydCwgdGl0bGUgfSkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJzdGF0aWNcIj5cbiAgICAgICAgPFRvb2xiYXI+XG4gICAgICAgICAgPEljb25CdXR0b24gYXJpYS1sYWJlbD1cIm1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lbnVCdXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goJy8nKX0+XG4gICAgICAgICAgICA8SG9tZUljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDZcIj5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJpbmhlcml0XCIgb25DbGljaz17KCkgPT4gaGlzdG9yeS5wdXNoKCcvY2F0ZWdvcnknKX0+XG4gICAgICAgICAgICA8Q2F0ZWdvcnlJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnL2NhcnQnKX0+XG4gICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXtjYXJ0Q291bnQoY2FydCl9IGNvbG9yPVwic2Vjb25kYXJ5XCI+XG4gICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIC8+XG4gICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9eygpID0+IGhpc3RvcnkucHVzaCgnL2xvZ2luJyl9PkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJ1dHRvblwiPlxuICAgICAgICAgICAgT3JcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIiBvbkNsaWNrPXsoKSA9PiBoaXN0b3J5LnB1c2goJy9zaWdudXAnKX0+U2lnbiBVcDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICA8L0FwcEJhcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuTmF2QmFyLnByb3BUeXBlcyA9IHtcbiAgaXNMb2dnZWQ6IFByb3BUeXBlcy5ib29sLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIGNhcnQ6IHN0YXRlLmNhcnQsXG4gIH07XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShOYXZCYXIpOyIsImV4cG9ydCBjb25zdCBBRERfUFJPRFVDVF9DQVJUID0gJ0FERF9QUk9EVUNUX0NBUlQnO1xuZXhwb3J0IGNvbnN0IFJFTU9WRV9QUk9EVUNUX0NBUlQgPSAnUkVNT1ZFX1BST0RVQ1RfQ0FSVCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9kdWN0VG9DYXJ0KGlkKSB7XG4gIHJldHVybiB7IHR5cGU6IEFERF9QUk9EVUNUX0NBUlQsIGlkOiBpZCB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdEZyb21DYXJ0KGlkKSB7XG4gIHJldHVybiB7IHR5cGU6IFJFTU9WRV9QUk9EVUNUX0NBUlQsIGlkOiBpZCB9O1xufSIsImltcG9ydCB7XG4gIEFERF9QUk9EVUNUX0NBUlQsXG4gIFJFTU9WRV9QUk9EVUNUX0NBUlQsXG59IGZyb20gJy4vYWN0aW9ucyc7XG5cblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBjYXJ0OiBbXVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm9vdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBsZXQgcHJvZHVjdCA9IHN0YXRlLmNhcnQuZmluZChwcm9kdWN0ID0+IHByb2R1Y3QuaWQgPT09IGFjdGlvbi5pZCk7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QUk9EVUNUX0NBUlQ6XG4gICAgICBpZiAocHJvZHVjdCkge1xuICAgICAgICBzdGF0ZS5jYXJ0ID0gc3RhdGUuY2FydC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0LmlkICE9PSBhY3Rpb24uaWQpO1xuICAgICAgICBwcm9kdWN0LnF1YW50aXR5ICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9kdWN0ID0ge1xuICAgICAgICAgIGlkOiBhY3Rpb24uaWQsXG4gICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY2FydDogW1xuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXG4gICAgICAgICAgcHJvZHVjdCxcbiAgICAgICAgXVxuICAgICAgfTtcblxuICAgIGNhc2UgUkVNT1ZFX1BST0RVQ1RfQ0FSVDpcbiAgICAgIGlmIChwcm9kdWN0KSB7XG4gICAgICAgIHN0YXRlLmNhcnQgPSBzdGF0ZS5jYXJ0LmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QuaWQgIT09IGFjdGlvbi5pZCk7XG4gICAgICAgIGlmIChwcm9kdWN0LnF1YW50aXR5ID4gMSkge1xuICAgICAgICAgIHByb2R1Y3QucXVhbnRpdHkgLT0gMTtcbiAgICAgICAgICBzdGF0ZS5jYXJ0LnB1c2gocHJvZHVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICBjYXJ0OiBzdGF0ZS5jYXJ0LFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn0iLCJpbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgcGVyc2lzdFJlZHVjZXIsIHBlcnNpc3RTdG9yZSB9IGZyb20gJ3JlZHV4LXBlcnNpc3QnO1xuaW1wb3J0IHN0b3JhZ2UgZnJvbSAncmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZSc7XG5cbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJztcblxuXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xuICBrZXk6ICdyb290JyxcbiAgc3RvcmFnZSxcbn07XG5cbmNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcik7XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHBlcnNpc3RlZFJlZHVjZXIpO1xuY29uc3QgcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTtcblxuZXhwb3J0IGRlZmF1bHQgeyBzdG9yZSwgcGVyc2lzdG9yIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyKTsiXSwic291cmNlUm9vdCI6IiJ9