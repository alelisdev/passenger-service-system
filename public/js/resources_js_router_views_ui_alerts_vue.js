(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_ui_alerts_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/alerts.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/alerts.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Alerts component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Alerts",
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
      title: "Alerts",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "UI Elements",
        href: "/"
      }, {
        text: "Alerts",
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

/***/ "./resources/js/router/views/ui/alerts.vue":
/*!*************************************************!*\
  !*** ./resources/js/router/views/ui/alerts.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alerts_vue_vue_type_template_id_2aebc7c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alerts.vue?vue&type=template&id=2aebc7c9& */ "./resources/js/router/views/ui/alerts.vue?vue&type=template&id=2aebc7c9&");
/* harmony import */ var _alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alerts.vue?vue&type=script&lang=js& */ "./resources/js/router/views/ui/alerts.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _alerts_vue_vue_type_template_id_2aebc7c9___WEBPACK_IMPORTED_MODULE_0__.render,
  _alerts_vue_vue_type_template_id_2aebc7c9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/ui/alerts.vue"
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

/***/ "./resources/js/router/views/ui/alerts.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/router/views/ui/alerts.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./alerts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/alerts.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_alerts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/ui/alerts.vue?vue&type=template&id=2aebc7c9&":
/*!********************************************************************************!*\
  !*** ./resources/js/router/views/ui/alerts.vue?vue&type=template&id=2aebc7c9& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_alerts_vue_vue_type_template_id_2aebc7c9___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_alerts_vue_vue_type_template_id_2aebc7c9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_alerts_vue_vue_type_template_id_2aebc7c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./alerts.vue?vue&type=template&id=2aebc7c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/alerts.vue?vue&type=template&id=2aebc7c9&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/alerts.vue?vue&type=template&id=2aebc7c9&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/alerts.vue?vue&type=template&id=2aebc7c9& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Examples")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Alerts are available for any length of\n            text, as well as an optional dismiss button. For proper styling, use one\n            of the four\n            "
                ),
                _c("strong", [_vm._v("required")]),
                _vm._v(" contextual classes (e.g.,\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v(".alert-success")
                ]),
                _vm._v(
                  "). For inline\n            dismissal, use the alerts jQuery plugin.\n          "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {},
                [
                  _c("b-alert", { attrs: { show: "", variant: "success" } }, [
                    _c("strong", [_vm._v("Well done!")]),
                    _vm._v(
                      " You successfully read this important alert message.\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("b-alert", { attrs: { variant: "info", show: "" } }, [
                    _c("strong", [_vm._v("Heads up!")]),
                    _vm._v(
                      " This alert needs your attention, but it's not super important.\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("b-alert", { attrs: { variant: "warning", show: "" } }, [
                    _c("strong", [_vm._v("Warning!")]),
                    _vm._v(
                      " Better check yourself, you're not looking too good.\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "mb-0",
                      attrs: { variant: "danger", show: "" }
                    },
                    [
                      _c("strong", [_vm._v("Oh snap!")]),
                      _vm._v(
                        " Change a few things up and try submitting again.\n            "
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Link color")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Use the\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v(".alert-link")
                ]),
                _vm._v(
                  " utility class to\n            quickly provide matching colored links within any alert.\n          "
                )
              ]),
              _vm._v(" "),
              _c("div", {}, [
                _c(
                  "div",
                  {
                    staticClass: "alert alert-success",
                    attrs: { role: "alert" }
                  },
                  [
                    _c("strong", [_vm._v("Well done!")]),
                    _vm._v(" You successfully read\n              "),
                    _c(
                      "a",
                      { staticClass: "alert-link", attrs: { href: "#" } },
                      [_vm._v("this important alert message")]
                    ),
                    _vm._v(".\n            ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "alert alert-info", attrs: { role: "alert" } },
                  [
                    _c("strong", [_vm._v("Heads up!")]),
                    _vm._v(" This\n              "),
                    _c(
                      "a",
                      { staticClass: "alert-link", attrs: { href: "#" } },
                      [_vm._v("alert needs your attention")]
                    ),
                    _vm._v(", but it's not super important.\n            ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "alert alert-warning",
                    attrs: { role: "alert" }
                  },
                  [
                    _c("strong", [_vm._v("Warning!")]),
                    _vm._v(" Better check yourself, you're\n              "),
                    _c(
                      "a",
                      { staticClass: "alert-link", attrs: { href: "#" } },
                      [_vm._v("not looking too good")]
                    ),
                    _vm._v(".\n            ")
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "alert alert-danger mb-0",
                    attrs: { role: "alert" }
                  },
                  [
                    _c("strong", [_vm._v("Oh snap!")]),
                    _vm._v(" "),
                    _c(
                      "a",
                      { staticClass: "alert-link", attrs: { href: "#" } },
                      [_vm._v("Change a few things up")]
                    ),
                    _vm._v(" and try submitting again.\n            ")
                  ]
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Dismissing")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("You can see this in action with a live demo:")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {},
                [
                  _c(
                    "b-alert",
                    {
                      attrs: { show: "", variant: "success", dismissible: "" }
                    },
                    [
                      _c("strong", [_vm._v("Well done!")]),
                      _vm._v(
                        " You successfully read this important alert message.\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    { attrs: { variant: "info", show: "", dismissible: "" } },
                    [
                      _c("strong", [_vm._v("Heads up!")]),
                      _vm._v(
                        " This alert needs your attention, but it's not super important.\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      attrs: { variant: "warning", show: "", dismissible: "" }
                    },
                    [
                      _c("strong", [_vm._v("Warning!")]),
                      _vm._v(
                        " Better check yourself, you're not looking too good.\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "mb-0",
                      attrs: { variant: "danger", show: "", dismissible: "" }
                    },
                    [
                      _c("strong", [_vm._v("Oh snap!")]),
                      _vm._v(
                        " Change a few things up and try submitting again.\n            "
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v("Additional content")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v(
                    "Alerts can also contain additional HTML elements like headings and paragraphs."
                  )
                ]),
                _vm._v(" "),
                _c("b-alert", { attrs: { show: "", variant: "success" } }, [
                  _c("h4", { staticClass: "alert-heading" }, [
                    _vm._v("Well done!")
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n              Aww yeah, you successfully read this important alert message. This example text is going to\n              run a bit longer so that you can see how spacing within an alert works with this kind of\n              content.\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v(
                      "Whenever you need to, be sure to use margin utilities to keep things nice and tidy."
                    )
                  ])
                ])
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Examples")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Alerts are available for any length of\n            text, as well as an optional dismiss button. For proper styling, use one\n            of the four\n            "
                ),
                _c("strong", [_vm._v("required")]),
                _vm._v(" contextual classes (e.g.,\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v(".alert-success .bg-**")
                ]),
                _vm._v(
                  "). For inline\n            dismissal, use the alerts jQuery plugin.\n          "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {},
                [
                  _c(
                    "b-alert",
                    {
                      staticClass: "bg-success text-white border-0",
                      attrs: { show: "" }
                    },
                    [
                      _c("strong", [_vm._v("Well done!")]),
                      _vm._v(
                        " You successfully read this important alert message.\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "bg-info text-white border-0",
                      attrs: { show: "", role: "alert" }
                    },
                    [
                      _c("strong", [_vm._v("Heads up!")]),
                      _vm._v(
                        " This alert needs your attention, but it's not super important.\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "bg-warning text-white border-0",
                      attrs: { show: "", role: "alert" }
                    },
                    [
                      _c("strong", [_vm._v("Warning!")]),
                      _vm._v(
                        " Better check yourself, you're not looking too good.\n            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-alert",
                    {
                      staticClass: "bg-danger text-white mb-0 border-0",
                      attrs: { show: "", role: "alert" }
                    },
                    [
                      _c("strong", [_vm._v("Oh snap!")]),
                      _vm._v(
                        " Change a few things up and try submitting again.\n            "
                      )
                    ]
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