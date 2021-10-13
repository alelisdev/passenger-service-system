(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_pages_invoice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/layouts/main.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/layouts/main.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/state/helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/router/layouts/vertical'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/router/layouts/horizontal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Vertical: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/router/layouts/vertical'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Horizontal: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/router/layouts/horizontal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  computed: _objectSpread({}, Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/state/helpers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/invoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/invoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Invoice component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Invoice",
    meta: [{
      name: "description",
      content: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }]
  },
  components: {
    Layout: _layouts_main__WEBPACK_IMPORTED_MODULE_0__.default,
    PageHeader: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      title: "Invoice",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Extra Pages",
        href: "/"
      }, {
        text: "Invoice",
        active: true
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/router/layouts/main.vue":
/*!**********************************************!*\
  !*** ./resources/js/router/layouts/main.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_vue_vue_type_template_id_3e66b212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.vue?vue&type=template&id=3e66b212& */ "./resources/js/router/layouts/main.vue?vue&type=template&id=3e66b212&");
/* harmony import */ var _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.vue?vue&type=script&lang=js& */ "./resources/js/router/layouts/main.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _main_vue_vue_type_template_id_3e66b212___WEBPACK_IMPORTED_MODULE_0__.render,
  _main_vue_vue_type_template_id_3e66b212___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/layouts/main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/router/views/pages/invoice.vue":
/*!*****************************************************!*\
  !*** ./resources/js/router/views/pages/invoice.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _invoice_vue_vue_type_template_id_e94f448e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.vue?vue&type=template&id=e94f448e& */ "./resources/js/router/views/pages/invoice.vue?vue&type=template&id=e94f448e&");
/* harmony import */ var _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.vue?vue&type=script&lang=js& */ "./resources/js/router/views/pages/invoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _invoice_vue_vue_type_template_id_e94f448e___WEBPACK_IMPORTED_MODULE_0__.render,
  _invoice_vue_vue_type_template_id_e94f448e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/pages/invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/router/layouts/main.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/router/layouts/main.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/layouts/main.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/router/views/pages/invoice.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/router/views/pages/invoice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/invoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/router/layouts/main.vue?vue&type=template&id=3e66b212&":
/*!*****************************************************************************!*\
  !*** ./resources/js/router/layouts/main.vue?vue&type=template&id=3e66b212& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3e66b212___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3e66b212___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_main_vue_vue_type_template_id_3e66b212___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./main.vue?vue&type=template&id=3e66b212& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/layouts/main.vue?vue&type=template&id=3e66b212&");


/***/ }),

/***/ "./resources/js/router/views/pages/invoice.vue?vue&type=template&id=e94f448e&":
/*!************************************************************************************!*\
  !*** ./resources/js/router/views/pages/invoice.vue?vue&type=template&id=e94f448e& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_e94f448e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_e94f448e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_invoice_vue_vue_type_template_id_e94f448e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./invoice.vue?vue&type=template&id=e94f448e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/invoice.vue?vue&type=template&id=e94f448e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/layouts/main.vue?vue&type=template&id=3e66b212&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/layouts/main.vue?vue&type=template&id=3e66b212& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.layoutType === "vertical"
        ? _c(
            "vertical",
            { attrs: { layout: _vm.layoutType } },
            [_vm._t("default")],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.layoutType === "horizontal"
        ? _c(
            "Horizontal",
            { attrs: { layout: _vm.layoutType } },
            [_vm._t("default")],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/invoice.vue?vue&type=template&id=e94f448e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/invoice.vue?vue&type=template&id=e94f448e& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "Layout",
    [
      _c("PageHeader", { attrs: { title: _vm.title, items: _vm.items } }),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", { staticClass: "invoice-title" }, [
                    _c("h4", { staticClass: "float-right font-size-16" }, [
                      _c("strong", [_vm._v("Order # 12345")])
                    ]),
                    _vm._v(" "),
                    _c("h3", { staticClass: "mt-0" }, [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/logo-sm.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                          alt: "logo",
                          height: "24"
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-6" }, [
                      _c("address", [
                        _c("strong", [_vm._v("Billed To:")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v("John Smith\n                    "),
                        _c("br"),
                        _vm._v("1234 Main\n                    "),
                        _c("br"),
                        _vm._v("Apt. 4B\n                    "),
                        _c("br"),
                        _vm._v("Springfield, ST 54321\n                  ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6 text-right" }, [
                      _c("address", [
                        _c("strong", [_vm._v("Shipped To:")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v("Kenny Rigdon\n                    "),
                        _c("br"),
                        _vm._v("1234 Main\n                    "),
                        _c("br"),
                        _vm._v("Apt. 4B\n                    "),
                        _c("br"),
                        _vm._v("Springfield, ST 54321\n                  ")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-6 mt-4" }, [
                      _c("address", [
                        _c("strong", [_vm._v("Payment Method:")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v("Visa ending **** 4242\n                    "),
                        _c("br"),
                        _vm._v("jsmith@email.com\n                  ")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-6 mt-4 text-right" }, [
                      _c("address", [
                        _c("strong", [_vm._v("Order Date:")]),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v("January 16, 2019\n                    "),
                        _c("br"),
                        _vm._v(" "),
                        _c("br")
                      ])
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-12" }, [
                  _c("div", [
                    _c("div", { staticClass: "p-2" }, [
                      _c("h3", { staticClass: "font-size-16" }, [
                        _c("strong", [_vm._v("Order summary")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", {}, [
                      _c("div", { staticClass: "table-responsive" }, [
                        _c("table", { staticClass: "table" }, [
                          _c("thead", [
                            _c("tr", [
                              _c("td", [_c("strong", [_vm._v("Item")])]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c("strong", [_vm._v("Price")])
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _c("strong", [_vm._v("Quantity")])
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _c("strong", [_vm._v("Totals")])
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tbody", [
                            _c("tr", [
                              _c("td", [_vm._v("BS-200")]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v("$10.99")
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v("1")
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v("$10.99")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("BS-400")]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v("$20.00")
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v("3")
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v("$60.00")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", [_vm._v("BS-1000")]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v("$600.00")
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-center" }, [
                                _vm._v("1")
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "text-right" }, [
                                _vm._v("$600.00")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "thick-line" }),
                              _vm._v(" "),
                              _c("td", { staticClass: "thick-line" }),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "thick-line text-center" },
                                [_c("strong", [_vm._v("Subtotal")])]
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "thick-line text-right" },
                                [_vm._v("$670.99")]
                              )
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "no-line" }),
                              _vm._v(" "),
                              _c("td", { staticClass: "no-line" }),
                              _vm._v(" "),
                              _c("td", { staticClass: "no-line text-center" }, [
                                _c("strong", [_vm._v("Shipping")])
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "no-line text-right" }, [
                                _vm._v("$15")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("tr", [
                              _c("td", { staticClass: "no-line" }),
                              _vm._v(" "),
                              _c("td", { staticClass: "no-line" }),
                              _vm._v(" "),
                              _c("td", { staticClass: "no-line text-center" }, [
                                _c("strong", [_vm._v("Total")])
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "no-line text-right" }, [
                                _c("h4", { staticClass: "m-0" }, [
                                  _vm._v("$685.99")
                                ])
                              ])
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "d-print-none" }, [
                        _c("div", { staticClass: "float-right" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-success",
                              attrs: { href: "javascript:window.print()" }
                            },
                            [_c("i", { staticClass: "fa fa-print" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-primary ml-1",
                              attrs: { href: "#" }
                            },
                            [_vm._v("Send")]
                          )
                        ])
                      ])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);