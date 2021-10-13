(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_forms_mask_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/mask.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/mask.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Form Mask component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Form Mask",
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
      title: "Form Mask",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Forms",
        href: "/"
      }, {
        text: "Form Mask",
        active: true
      }],
      date: "",
      hour: "",
      datetime: "",
      ipaddress: "",
      cnpj: "",
      cpf: "",
      celphone: "",
      ustelephone: "",
      areacode: "",
      telephone: "",
      zipcode: "",
      crazyzip: "",
      money: "",
      digit: ""
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

/***/ "./resources/js/router/views/forms/mask.vue":
/*!**************************************************!*\
  !*** ./resources/js/router/views/forms/mask.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mask_vue_vue_type_template_id_02287d85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mask.vue?vue&type=template&id=02287d85& */ "./resources/js/router/views/forms/mask.vue?vue&type=template&id=02287d85&");
/* harmony import */ var _mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mask.vue?vue&type=script&lang=js& */ "./resources/js/router/views/forms/mask.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _mask_vue_vue_type_template_id_02287d85___WEBPACK_IMPORTED_MODULE_0__.render,
  _mask_vue_vue_type_template_id_02287d85___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/forms/mask.vue"
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

/***/ "./resources/js/router/views/forms/mask.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/router/views/forms/mask.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mask.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/mask.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mask_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/forms/mask.vue?vue&type=template&id=02287d85&":
/*!*********************************************************************************!*\
  !*** ./resources/js/router/views/forms/mask.vue?vue&type=template&id=02287d85& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mask_vue_vue_type_template_id_02287d85___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mask_vue_vue_type_template_id_02287d85___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mask_vue_vue_type_template_id_02287d85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./mask.vue?vue&type=template&id=02287d85& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/mask.vue?vue&type=template&id=02287d85&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/mask.vue?vue&type=template&id=02287d85&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/mask.vue?vue&type=template&id=02287d85& ***!
  \************************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "card-title mb-4" }, [_vm._v("Example")]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-md-6" }, [
                  _c("form", { attrs: { action: "#" } }, [
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("Date")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.date,
                            expression: "date"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "##/##/####",
                            expression: "'##/##/####'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.date },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.date = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "DD/MM/YYYY"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("Hour")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.hour,
                            expression: "hour"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "##:##:##",
                            expression: "'##:##:##'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.hour },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.hour = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "HH:MM:SS"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("Date & Hour")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.datetime,
                            expression: "datetime"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "##/##/#### ##:##:##",
                            expression: "'##/##/#### ##:##:##'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.datetime },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.datetime = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "DD/MM/YYYY HH:MM:SS"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("ZIP Code")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.zipcode,
                            expression: "zipcode"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "#####-###",
                            expression: "'#####-###'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.zipcode },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.zipcode = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "xxxxx-xxx"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("Crazy Zip Code")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.crazyzip,
                            expression: "crazyzip"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "#-##-##-##",
                            expression: "'#-##-##-##'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.crazyzip },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.crazyzip = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "x-xx-xx-xx"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("Money")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.money,
                            expression: "money"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "###.###.###.###.###,##",
                            expression: "'###.###.###.###.###,##'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.money },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.money = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "Your money"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("4 digit Group")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.digit,
                            expression: "digit"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "#,####,####,####",
                            expression: "'#,####,####,####'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.digit },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.digit = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g. "x,xxxx,xxxx,xxxx"')
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-md-6" }, [
                  _c("form", { attrs: { action: "#" } }, [
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("Telephone")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.telephone,
                            expression: "telephone"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "####-####",
                            expression: "'####-####'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.telephone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.telephone = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "xxxx-xxxx"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("Telephone with Code Area")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.areacode,
                            expression: "areacode"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "(##) ####-####",
                            expression: "'(##) ####-####'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.areacode },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.areacode = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "(xx) xxxx-xxxx"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("US Telephone")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ustelephone,
                            expression: "ustelephone"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "(###) ###-####",
                            expression: "'(###) ###-####'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.ustelephone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.ustelephone = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "(xxx) xxx-xxxx"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("São Paulo Celphones")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.celphone,
                            expression: "celphone"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "(##) #####-####",
                            expression: "'(##) #####-####'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.celphone },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.celphone = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "(xx) xxxxx-xxxx"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("CPF")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.cpf,
                            expression: "cpf"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "###.###.###-##",
                            expression: "'###.###.###-##'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.cpf },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.cpf = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "xxx.xxx.xxxx-xx"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("CNPJ")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.cnpj,
                            expression: "cnpj"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "##.###.###/####-##",
                            expression: "'##.###.###/####-##'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.cnpj },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.cnpj = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "xx.xxx.xxx/xxxx-xx"')
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group mb-4" }, [
                      _c("label", [_vm._v("IP Address")]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.ipaddress,
                            expression: "ipaddress"
                          },
                          {
                            name: "mask",
                            rawName: "v-mask",
                            value: "###.###.###.###",
                            expression: "'###.###.###.###'"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text" },
                        domProps: { value: _vm.ipaddress },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.ipaddress = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "font-13 text-muted" }, [
                        _vm._v('e.g "xxx.xxx.xxx.xxx"')
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