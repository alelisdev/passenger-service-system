(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_ui_dropdowns_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/dropdowns.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/dropdowns.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Dropdowns component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Dropdowns",
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
      title: "Dropdowns",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "UI Elements",
        href: "/"
      }, {
        text: "Dropdowns",
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

/***/ "./resources/js/router/views/ui/dropdowns.vue":
/*!****************************************************!*\
  !*** ./resources/js/router/views/ui/dropdowns.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdowns_vue_vue_type_template_id_6bd34880___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdowns.vue?vue&type=template&id=6bd34880& */ "./resources/js/router/views/ui/dropdowns.vue?vue&type=template&id=6bd34880&");
/* harmony import */ var _dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdowns.vue?vue&type=script&lang=js& */ "./resources/js/router/views/ui/dropdowns.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _dropdowns_vue_vue_type_template_id_6bd34880___WEBPACK_IMPORTED_MODULE_0__.render,
  _dropdowns_vue_vue_type_template_id_6bd34880___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/ui/dropdowns.vue"
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

/***/ "./resources/js/router/views/ui/dropdowns.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/router/views/ui/dropdowns.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dropdowns.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/dropdowns.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/ui/dropdowns.vue?vue&type=template&id=6bd34880&":
/*!***********************************************************************************!*\
  !*** ./resources/js/router/views/ui/dropdowns.vue?vue&type=template&id=6bd34880& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_template_id_6bd34880___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_template_id_6bd34880___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdowns_vue_vue_type_template_id_6bd34880___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dropdowns.vue?vue&type=template&id=6bd34880& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/dropdowns.vue?vue&type=template&id=6bd34880&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/dropdowns.vue?vue&type=template&id=6bd34880&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/dropdowns.vue?vue&type=template&id=6bd34880& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Single button dropdowns")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Any single\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v(".btn")
                ]),
                _vm._v(
                  " can be turned into a dropdown\n            toggle with some markup changes. Here’s how you can put them to work\n            with either\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("<button>")
                ]),
                _vm._v("\n            elements:\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-sm-6" },
                  [
                    _c(
                      "b-dropdown",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "button-content",
                            fn: function() {
                              return [
                                _vm._v(
                                  "\n                  Dropdown button\n                  "
                                ),
                                _c("i", { staticClass: "mdi mdi-chevron-down" })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Another Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Something else here")])
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Variant")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc mb-3" }, [
                _vm._v(
                  "The best part is you can do this with any button variant, too:"
                )
              ]),
              _vm._v(" "),
              _c("div", {}, [
                _c(
                  "div",
                  { staticClass: "btn-group mr-1 mt-2" },
                  [
                    _c(
                      "b-dropdown",
                      { attrs: { text: "Primary", variant: "primary" } },
                      [
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Another action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Something else here")]
                        ),
                        _vm._v(" "),
                        _c("b-dropdown-divider"),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Separated link")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-group mr-1 mt-2" },
                  [
                    _c(
                      "b-dropdown",
                      { attrs: { text: "Secondary", variant: "secondary" } },
                      [
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Another action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Something else here")]
                        ),
                        _vm._v(" "),
                        _c("b-dropdown-divider"),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Separated link")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-group mr-1 mt-2" },
                  [
                    _c(
                      "b-dropdown",
                      { attrs: { text: "Success", variant: "success" } },
                      [
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Another action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Something else here")]
                        ),
                        _vm._v(" "),
                        _c("b-dropdown-divider"),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Separated link")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-group mr-1 mt-2" },
                  [
                    _c(
                      "b-dropdown",
                      { attrs: { text: "Info", variant: "info" } },
                      [
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Another action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Something else here")]
                        ),
                        _vm._v(" "),
                        _c("b-dropdown-divider"),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Separated link")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-group mr-1 mt-2" },
                  [
                    _c(
                      "b-dropdown",
                      { attrs: { text: "Warning", variant: "warning" } },
                      [
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Another action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Something else here")]
                        ),
                        _vm._v(" "),
                        _c("b-dropdown-divider"),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Separated link")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "btn-group mr-1 mt-2" },
                  [
                    _c(
                      "b-dropdown",
                      { attrs: { text: "Danger", variant: "danger" } },
                      [
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Another action")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Something else here")]
                        ),
                        _vm._v(" "),
                        _c("b-dropdown-divider"),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          { attrs: { href: "javascript: void(0);" } },
                          [_vm._v("Separated link")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Sizing")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc mb-3" }, [
                _vm._v(
                  "\n            Button dropdowns work with buttons of\n            all sizes, including default and split dropdown buttons.\n          "
                )
              ]),
              _vm._v(" "),
              _c("div", [
                _c(
                  "div",
                  { staticClass: "mr-1 mt-2" },
                  [
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "m-2",
                        attrs: { size: "lg" },
                        scopedSlots: _vm._u([
                          {
                            key: "button-content",
                            fn: function() {
                              return [
                                _vm._v(
                                  "\n                  Large button\n                  "
                                ),
                                _c("i", { staticClass: "mdi mdi-chevron-down" })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("b-dropdown-item-button", [_vm._v("Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item-button", [
                          _vm._v("Another action")
                        ]),
                        _vm._v(" "),
                        _c("b-dropdown-item-button", [
                          _vm._v("Something else here")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "m-2",
                        attrs: { size: "sm" },
                        scopedSlots: _vm._u([
                          {
                            key: "button-content",
                            fn: function() {
                              return [
                                _vm._v(
                                  "\n                  Small button\n                  "
                                ),
                                _c("i", { staticClass: "mdi mdi-chevron-down" })
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("b-dropdown-item-button", [_vm._v("Action")]),
                        _vm._v(" "),
                        _c("b-dropdown-item-button", [
                          _vm._v("Another action")
                        ]),
                        _vm._v(" "),
                        _c("b-dropdown-item-button", [
                          _vm._v("Something else here")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Menu alignment")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Add\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("right")
                ]),
                _vm._v("\n            to a\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("dropdown")
                ]),
                _vm._v(
                  " to right\n            align the dropdown menu.\n          "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "btn-group" },
                [
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "m-2",
                      attrs: {
                        id: "dropdown-right",
                        right: "",
                        variant: "secondary"
                      }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _vm._v(
                          "\n                Menu is right-aligned\n                "
                        ),
                        _c("i", { staticClass: "mdi mdi-chevron-up" })
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", { attrs: { href: "#" } }, [
                        _vm._v("Action")
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", { attrs: { href: "#" } }, [
                        _vm._v("Another action")
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", { attrs: { href: "#" } }, [
                        _vm._v("Something else here")
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Dropup")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc mb-3" }, [
                _vm._v(
                  "\n            Trigger dropdown menus above elements by adding\n            "
                ),
                _c("code", [_vm._v("dropup")]),
                _vm._v(" to the parent element.\n          ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-1" },
                [
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "m-2",
                      attrs: { dropup: "", variant: "primary" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _vm._v("\n                Dropup\n                "),
                        _c("i", { staticClass: "mdi mdi-chevron-up" })
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [_vm._v("Action")]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [_vm._v("Another action")]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [
                        _vm._v("Something else here")
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "m-2",
                      attrs: { dropup: "", variant: "warning" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _vm._v("\n                Dropup\n                "),
                        _c("i", { staticClass: "mdi mdi-chevron-up" })
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [_vm._v("Action")]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [_vm._v("Another action")]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [
                        _vm._v("Something else here")
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "m-2",
                      attrs: { dropup: "", variant: "success" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _vm._v("\n                Dropup\n                "),
                        _c("i", { staticClass: "mdi mdi-chevron-up" })
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [_vm._v("Action")]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [_vm._v("Another action")]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [
                        _vm._v("Something else here")
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Drop variation")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc mb-3" }, [
                _vm._v(
                  "\n            Trigger dropdown menus at the right of the elements by adding\n            "
                ),
                _c("code", [_vm._v("dropleft")]),
                _vm._v(" and\n            "),
                _c("code", [_vm._v("dropright")]),
                _vm._v(" to the parent element.\n          ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "dropdown mt-1" },
                [
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "m-2",
                      attrs: { dropright: "", variant: "info" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _vm._v(
                          "\n                Drop-right\n                "
                        ),
                        _c("i", { staticClass: "mdi mdi-chevron-right" })
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [_vm._v("Action")]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [_vm._v("Another action")]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [
                        _vm._v("Something else here")
                      ])
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "m-2",
                      attrs: { dropleft: "", variant: "info" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _c("i", { staticClass: "mdi mdi-chevron-left" }),
                        _vm._v("\n                Drop-left\n              ")
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [_vm._v("Action")]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [_vm._v("Another action")]),
                      _vm._v(" "),
                      _c("b-dropdown-item-button", [
                        _vm._v("Something else here")
                      ])
                    ],
                    2
                  )
                ],
                1
              )
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