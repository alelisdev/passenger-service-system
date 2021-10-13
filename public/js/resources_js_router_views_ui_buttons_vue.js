(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_ui_buttons_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/buttons.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/buttons.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Buttons component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Buttons",
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
      title: "Buttons",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "UI Elements",
        href: "/"
      }, {
        text: "Buttons",
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

/***/ "./resources/js/router/views/ui/buttons.vue":
/*!**************************************************!*\
  !*** ./resources/js/router/views/ui/buttons.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons_vue_vue_type_template_id_5f201282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons.vue?vue&type=template&id=5f201282& */ "./resources/js/router/views/ui/buttons.vue?vue&type=template&id=5f201282&");
/* harmony import */ var _buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons.vue?vue&type=script&lang=js& */ "./resources/js/router/views/ui/buttons.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _buttons_vue_vue_type_template_id_5f201282___WEBPACK_IMPORTED_MODULE_0__.render,
  _buttons_vue_vue_type_template_id_5f201282___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/ui/buttons.vue"
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

/***/ "./resources/js/router/views/ui/buttons.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/router/views/ui/buttons.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./buttons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/buttons.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/ui/buttons.vue?vue&type=template&id=5f201282&":
/*!*********************************************************************************!*\
  !*** ./resources/js/router/views/ui/buttons.vue?vue&type=template&id=5f201282& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_template_id_5f201282___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_template_id_5f201282___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_buttons_vue_vue_type_template_id_5f201282___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./buttons.vue?vue&type=template&id=5f201282& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/buttons.vue?vue&type=template&id=5f201282&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/buttons.vue?vue&type=template&id=5f201282&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/buttons.vue?vue&type=template&id=5f201282& ***!
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
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Examples")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "Bootstrap includes six predefined button styles, each serving its own semantic purpose."
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "button-items" },
                [
                  _c("b-button", { attrs: { variant: "primary" } }, [
                    _vm._v("Primary")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "secondary" } }, [
                    _vm._v("Secondary")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "success" } }, [
                    _vm._v("Success")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "info" } }, [
                    _vm._v("Info")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "warning" } }, [
                    _vm._v("Warning")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "danger" } }, [
                    _vm._v("Danger")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "dark" } }, [
                    _vm._v("Dark")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "link" } }, [
                    _vm._v("Link")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "light" } }, [
                    _vm._v("Light")
                  ])
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
                _vm._v("Outline buttons")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Replace the default modifier classes with the\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("outline-*")
                ]),
                _vm._v(
                  " ones to remove all background images and colors on any button.\n          "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "button-items" },
                [
                  _c("b-button", { attrs: { variant: "outline-primary" } }, [
                    _vm._v("Primary")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "outline-secondary" } }, [
                    _vm._v("Secondary")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "outline-success" } }, [
                    _vm._v("Success")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "outline-info" } }, [
                    _vm._v("Info")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "outline-warning" } }, [
                    _vm._v("Warning")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "outline-danger" } }, [
                    _vm._v("Danger")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "outline-dark" } }, [
                    _vm._v("Dark")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { variant: "outline-light" } }, [
                    _vm._v("Light")
                  ])
                ],
                1
              )
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
                _vm._v("Rounded buttons")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Use\n            "),
                _c("code", [_vm._v("pill")]),
                _vm._v(" for button round border.\n          ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "button-items" },
                [
                  _c("b-button", { attrs: { pill: "", variant: "primary" } }, [
                    _vm._v("Primary")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { attrs: { pill: "", variant: "secondary" } },
                    [_vm._v("Secondary")]
                  ),
                  _vm._v(" "),
                  _c("b-button", { attrs: { pill: "", variant: "success" } }, [
                    _vm._v("Success")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { pill: "", variant: "info" } }, [
                    _vm._v("Info")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { pill: "", variant: "warning" } }, [
                    _vm._v("Warning")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { pill: "", variant: "danger" } }, [
                    _vm._v("Danger")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { pill: "", variant: "dark" } }, [
                    _vm._v("Dark")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { pill: "", variant: "link" } }, [
                    _vm._v("Link")
                  ]),
                  _vm._v(" "),
                  _c("b-button", { attrs: { pill: "", variant: "light" } }, [
                    _vm._v("Light")
                  ])
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Sizes")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Fancy larger or smaller buttons? Add size\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("lg")
                ]),
                _vm._v(" or\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("sm")
                ]),
                _vm._v(" for additional sizes.\n          ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "button-items" },
                [
                  _c(
                    "b-button",
                    { attrs: { size: "lg", variant: "primary" } },
                    [_vm._v("Large button")]
                  ),
                  _vm._v(" "),
                  _c("b-button", { attrs: { size: "lg" } }, [
                    _vm._v("Large button")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { attrs: { size: "sm", variant: "primary" } },
                    [_vm._v("Small button")]
                  ),
                  _vm._v(" "),
                  _c("b-button", { attrs: { size: "sm" } }, [
                    _vm._v("Small button")
                  ])
                ],
                1
              )
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
                _vm._v("Block Buttons")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Create block level buttons—those that\n            span the full width of a parent—by adding\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("block")
                ]),
                _vm._v(".\n          ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "button-items" },
                [
                  _c(
                    "b-button",
                    { attrs: { block: "", variant: "primary", size: "lg" } },
                    [_vm._v("Block Level Button")]
                  ),
                  _vm._v(" "),
                  _c("b-button", { attrs: { block: "", size: "sm" } }, [
                    _vm._v("Block Level Button")
                  ])
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Button tags")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            The\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v(".btn")
                ]),
                _vm._v(
                  "\n            classes are designed to be used with the\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("<button>")
                ]),
                _vm._v(
                  " element.\n            However, you can also use these classes on\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("<a>")
                ]),
                _vm._v(
                  ". (though\n            some browsers may apply a slightly different rendering).\n          "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "button-items" },
                [
                  _c("b-button", { attrs: { href: "#", variant: "primary" } }, [
                    _vm._v("Link")
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    { attrs: { variant: "success", type: "submit" } },
                    [_vm._v("Button")]
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
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Sizing")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Instead of applying button sizing\n            classes to every button in a group, just add size\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("lg, sm")
                ]),
                _vm._v(" to each\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("button-group")
                ]),
                _vm._v(
                  ", including each one\n            when nesting multiple groups.\n          "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c(
                    "b-button-group",
                    { attrs: { size: "lg" } },
                    [
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("Left")
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("Middle")
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("Right")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-2" },
                [
                  _c(
                    "b-button-group",
                    [
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("Left")
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("Middle")
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("Right")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mt-2" },
                [
                  _c(
                    "b-button-group",
                    { attrs: { size: "sm" } },
                    [
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("Left")
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("Middle")
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("Right")
                      ])
                    ],
                    1
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
                  _vm._v("Vertical variation")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v(
                    "\n            Make a set of buttons appear vertically\n            stacked rather than horizontally. Split button dropdowns are not\n            supported here.\n          "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-button-group",
                  { attrs: { vertical: "" } },
                  [
                    _c("b-button", { attrs: { variant: "secondary" } }, [
                      _vm._v("Button")
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      { attrs: { variant: "secondary" } },
                      [
                        _c("template", { slot: "button-content" }, [
                          _vm._v(
                            "\n                Dropdown\n                "
                          ),
                          _c("i", { staticClass: "mdi mdi-chevron-down" })
                        ]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Dropdown Link")]),
                        _vm._v(" "),
                        _c("b-dropdown-item", [_vm._v("Dropdown Link")])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c("b-button", { attrs: { variant: "secondary" } }, [
                      _vm._v("Button")
                    ]),
                    _vm._v(" "),
                    _c("b-button", { attrs: { variant: "secondary" } }, [
                      _vm._v("Button")
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);