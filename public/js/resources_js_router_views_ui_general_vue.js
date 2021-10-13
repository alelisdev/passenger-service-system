(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_ui_general_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/general.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/general.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * General component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "General",
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
      title: "General",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "UI Elements",
        href: "/"
      }, {
        text: "General",
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

/***/ "./resources/js/router/views/ui/general.vue":
/*!**************************************************!*\
  !*** ./resources/js/router/views/ui/general.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _general_vue_vue_type_template_id_6ca534a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.vue?vue&type=template&id=6ca534a6& */ "./resources/js/router/views/ui/general.vue?vue&type=template&id=6ca534a6&");
/* harmony import */ var _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general.vue?vue&type=script&lang=js& */ "./resources/js/router/views/ui/general.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _general_vue_vue_type_template_id_6ca534a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _general_vue_vue_type_template_id_6ca534a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/ui/general.vue"
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

/***/ "./resources/js/router/views/ui/general.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/router/views/ui/general.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./general.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/general.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/ui/general.vue?vue&type=template&id=6ca534a6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/router/views/ui/general.vue?vue&type=template&id=6ca534a6& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_template_id_6ca534a6___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_template_id_6ca534a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_general_vue_vue_type_template_id_6ca534a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./general.vue?vue&type=template&id=6ca534a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/general.vue?vue&type=template&id=6ca534a6&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/general.vue?vue&type=template&id=6ca534a6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/general.vue?vue&type=template&id=6ca534a6& ***!
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
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-6" }, [
                  _c("div", [
                    _c("h4", { staticClass: "card-title" }, [_vm._v("badges")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-title-desc" }, [
                      _vm._v(
                        "Add any of the below mentioned modifier classes to change the appearance of a badge."
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("b-badge", { attrs: { variant: "primary" } }, [
                          _vm._v("Primary")
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "ml-1",
                            attrs: { variant: "success" }
                          },
                          [_vm._v("Success")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { staticClass: "ml-1", attrs: { variant: "info" } },
                          [_vm._v("Info")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "ml-1",
                            attrs: { variant: "warning" }
                          },
                          [_vm._v("Warning")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { staticClass: "ml-1", attrs: { variant: "danger" } },
                          [_vm._v("Danger")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          { staticClass: "ml-1", attrs: { variant: "dark" } },
                          [_vm._v("Dark")]
                        )
                      ],
                      1
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-lg-6" }, [
                  _c("div", [
                    _c("h4", { staticClass: "card-title mo-mt-2" }, [
                      _vm._v("Pill badges")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-title-desc" }, [
                      _vm._v("\n                  Use the\n                  "),
                      _c("code", [_vm._v("pill")]),
                      _vm._v(
                        " modifier class to make\n                  badges more rounded (with a larger\n                  "
                      ),
                      _c("code", [_vm._v("border-radius")]),
                      _vm._v(
                        "\n                  and additional horizontal\n                  "
                      ),
                      _c("code", [_vm._v("padding")]),
                      _vm._v(
                        ").\n                  Useful if you miss the badges from v3.\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c(
                          "b-badge",
                          { attrs: { pill: "", variant: "primary" } },
                          [_vm._v("Primary")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "ml-1",
                            attrs: { pill: "", variant: "success" }
                          },
                          [_vm._v("Success")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "ml-1",
                            attrs: { pill: "", variant: "info" }
                          },
                          [_vm._v("Info")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "ml-1",
                            attrs: { pill: "", variant: "warning" }
                          },
                          [_vm._v("Warning")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "ml-1",
                            attrs: { pill: "", variant: "danger" }
                          },
                          [_vm._v("Danger")]
                        ),
                        _vm._v(" "),
                        _c(
                          "b-badge",
                          {
                            staticClass: "ml-1",
                            attrs: { pill: "", variant: "dark" }
                          },
                          [_vm._v("Dark")]
                        )
                      ],
                      1
                    )
                  ])
                ])
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Popovers")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "Add small overlay content, like those found in iOS, to any element for housing secondary information."
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "button-items" }, [
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "b-popover",
                        rawName: "v-b-popover.top",
                        value:
                          "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
                        expression:
                          "'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",
                        modifiers: { top: true }
                      }
                    ],
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Popover on top")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "b-popover",
                        rawName: "v-b-popover.right",
                        value:
                          "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
                        expression:
                          "'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",
                        modifiers: { right: true }
                      }
                    ],
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Popover on right")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "b-popover",
                        rawName: "v-b-popover.bottom",
                        value:
                          "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
                        expression:
                          "'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",
                        modifiers: { bottom: true }
                      }
                    ],
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Popover on bottom")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "b-popover",
                        rawName: "v-b-popover.left",
                        value:
                          "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
                        expression:
                          "'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'",
                        modifiers: { left: true }
                      }
                    ],
                    staticClass: "btn btn-secondary",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Popover on left")]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Tooltips")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("Hover over the links below to see tooltips:")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "button-items" }, [
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover",
                        modifiers: { hover: true }
                      }
                    ],
                    staticClass: "btn btn-primary",
                    attrs: { type: "button", title: "Tooltip on top" }
                  },
                  [_vm._v("Tooltip on top")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover.right",
                        value: "Tooltip on right",
                        expression: "'Tooltip on right'",
                        modifiers: { hover: true, right: true }
                      }
                    ],
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Tooltip on right")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover.bottom",
                        value: "Tooltip on bottom",
                        expression: "'Tooltip on bottom'",
                        modifiers: { hover: true, bottom: true }
                      }
                    ],
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Tooltip on bottom")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    directives: [
                      {
                        name: "b-tooltip",
                        rawName: "v-b-tooltip.hover.left",
                        value: "Tooltip on left",
                        expression: "'Tooltip on left'",
                        modifiers: { hover: true, left: true }
                      }
                    ],
                    staticClass: "btn btn-primary",
                    attrs: { type: "button" }
                  },
                  [_vm._v("Tooltip on left")]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Pagination")]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-6" },
                  [
                    _c("h5", { staticClass: "font-size-16 mt-0" }, [
                      _vm._v("Default Example")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-title-desc" }, [
                      _vm._v(
                        "Pagination links indicate a series of related content exists across multiple pages."
                      )
                    ]),
                    _vm._v(" "),
                    _c("b-pagination", {
                      attrs: {
                        "v-model": 30,
                        "total-rows": 50,
                        "per-page": 10,
                        "aria-controls": "my-table"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "nav",
                      { attrs: { "aria-label": "Page navigation example" } },
                      [
                        _c("ul", { staticClass: "pagination" }, [
                          _c("li", { staticClass: "page-item" }, [
                            _c(
                              "a",
                              {
                                staticClass: "page-link",
                                attrs: { href: "#", "aria-label": "Previous" }
                              },
                              [
                                _c(
                                  "span",
                                  { attrs: { "aria-hidden": "true" } },
                                  [_vm._v("«")]
                                ),
                                _vm._v(" "),
                                _c("span", { staticClass: "sr-only" }, [
                                  _vm._v("Previous")
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "page-item" }, [
                            _c(
                              "a",
                              {
                                staticClass: "page-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("1")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "page-item" }, [
                            _c(
                              "a",
                              {
                                staticClass: "page-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("2")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "page-item" }, [
                            _c(
                              "a",
                              {
                                staticClass: "page-link",
                                attrs: { href: "#" }
                              },
                              [_vm._v("3")]
                            )
                          ]),
                          _vm._v(" "),
                          _c("li", { staticClass: "page-item" }, [
                            _c(
                              "a",
                              {
                                staticClass: "page-link",
                                attrs: { href: "#", "aria-label": "Next" }
                              },
                              [
                                _c(
                                  "span",
                                  { attrs: { "aria-hidden": "true" } },
                                  [_vm._v("»")]
                                ),
                                _vm._v(" "),
                                _c("span", { staticClass: "sr-only" }, [
                                  _vm._v("Next")
                                ])
                              ]
                            )
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-6" },
                  [
                    _c("h5", { staticClass: "font-size-16" }, [
                      _vm._v("Alignment")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-title-desc" }, [
                      _vm._v(
                        "\n                Change the alignment of pagination\n                components with flexbox utilities.\n              "
                      )
                    ]),
                    _vm._v(" "),
                    _c("b-pagination", {
                      attrs: {
                        "total-rows": 50,
                        "prev-text": "Previous",
                        "next-text": "Next",
                        align: "center"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-pagination", {
                      attrs: {
                        "total-rows": 50,
                        "prev-text": "Previous",
                        "next-text": "Next",
                        align: "right"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  { staticClass: "col-lg-6" },
                  [
                    _c("h5", { staticClass: "font-size-16" }, [
                      _vm._v("Sizing")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-title-desc" }, [
                      _vm._v(
                        "\n                Fancy larger or smaller pagination? Add\n                "
                      ),
                      _c("code", [_vm._v(".pagination-lg")]),
                      _vm._v(" or\n                "),
                      _c("code", [_vm._v(".pagination-sm")]),
                      _vm._v(
                        " for additional\n                sizes.\n              "
                      )
                    ]),
                    _vm._v(" "),
                    _c("b-pagination", {
                      attrs: {
                        size: "lg",
                        "total-rows": 30,
                        "per-page": 10,
                        "aria-controls": "my-table"
                      }
                    }),
                    _vm._v(" "),
                    _c("b-pagination", {
                      attrs: {
                        size: "sm",
                        "total-rows": 30,
                        "per-page": 10,
                        "aria-controls": "my-table"
                      }
                    })
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
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Border spinner")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "Use the border spinners for a lightweight loading indicator."
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: { label: "Spinning", variant: "primary" }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: { label: "Spinning" }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: { label: "Spinning", variant: "success" }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: { label: "Spinning", variant: "info" }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: { label: "Spinning", variant: "warning" }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: { label: "Spinning", variant: "danger" }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: { label: "Spinning", variant: "dark" }
                  })
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
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Growing spinner")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!"
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: {
                      type: "grow",
                      label: "Spinning",
                      variant: "primary"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: { type: "grow", label: "Spinning" }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: {
                      type: "grow",
                      label: "Spinning",
                      variant: "success"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: { type: "grow", label: "Spinning", variant: "info" }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: {
                      type: "grow",
                      label: "Spinning",
                      variant: "warning"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: {
                      type: "grow",
                      label: "Spinning",
                      variant: "danger"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-spinner", {
                    staticClass: "m-1",
                    attrs: { type: "grow", label: "Spinning", variant: "dark" }
                  })
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