(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_email-template_billing_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email-template/billing.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email-template/billing.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Billing Email component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Billing Email",
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
      title: "Billing Email",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Email Templates",
        href: "/"
      }, {
        text: "Billing Email",
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

/***/ "./resources/js/router/views/email-template/billing.vue":
/*!**************************************************************!*\
  !*** ./resources/js/router/views/email-template/billing.vue ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _billing_vue_vue_type_template_id_f01ca4a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./billing.vue?vue&type=template&id=f01ca4a0& */ "./resources/js/router/views/email-template/billing.vue?vue&type=template&id=f01ca4a0&");
/* harmony import */ var _billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billing.vue?vue&type=script&lang=js& */ "./resources/js/router/views/email-template/billing.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _billing_vue_vue_type_template_id_f01ca4a0___WEBPACK_IMPORTED_MODULE_0__.render,
  _billing_vue_vue_type_template_id_f01ca4a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/email-template/billing.vue"
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

/***/ "./resources/js/router/views/email-template/billing.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/router/views/email-template/billing.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./billing.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email-template/billing.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/email-template/billing.vue?vue&type=template&id=f01ca4a0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/router/views/email-template/billing.vue?vue&type=template&id=f01ca4a0& ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_vue_vue_type_template_id_f01ca4a0___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_vue_vue_type_template_id_f01ca4a0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_billing_vue_vue_type_template_id_f01ca4a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./billing.vue?vue&type=template&id=f01ca4a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email-template/billing.vue?vue&type=template&id=f01ca4a0&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email-template/billing.vue?vue&type=template&id=f01ca4a0&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email-template/billing.vue?vue&type=template&id=f01ca4a0& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
          _c(
            "table",
            {
              staticClass: "body-wrap",
              staticStyle: {
                "font-family": "'Helvetica Neue',Helvetica,Arial,sans-serif",
                "box-sizing": "border-box",
                "font-size": "14px",
                width: "100%",
                "background-color": "#f6f6f6",
                margin: "0"
              },
              attrs: { bgcolor: "#f6f6f6" }
            },
            [
              _c(
                "tr",
                {
                  staticStyle: {
                    "font-family":
                      "'Helvetica Neue',Helvetica,Arial,sans-serif",
                    "box-sizing": "border-box",
                    "font-size": "14px",
                    margin: "0"
                  }
                },
                [
                  _c("td", {
                    staticStyle: {
                      "font-family":
                        "'Helvetica Neue',Helvetica,Arial,sans-serif",
                      "box-sizing": "border-box",
                      "font-size": "14px",
                      "vertical-align": "top",
                      margin: "0"
                    },
                    attrs: { valign: "top" }
                  }),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "container",
                      staticStyle: {
                        "font-family":
                          "'Helvetica Neue',Helvetica,Arial,sans-serif",
                        "box-sizing": "border-box",
                        "font-size": "14px",
                        "vertical-align": "top",
                        display: "block !important",
                        "max-width": "600px !important",
                        clear: "both !important",
                        margin: "0 auto"
                      },
                      attrs: { width: "600", valign: "top" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "content",
                          staticStyle: {
                            "font-family":
                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                            "box-sizing": "border-box",
                            "font-size": "14px",
                            "max-width": "600px",
                            display: "block",
                            margin: "0 auto",
                            padding: "20px"
                          }
                        },
                        [
                          _c(
                            "table",
                            {
                              staticClass: "main",
                              staticStyle: {
                                "font-family":
                                  "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                "box-sizing": "border-box",
                                "font-size": "14px",
                                "border-radius": "3px",
                                margin: "0",
                                border: "none"
                              },
                              attrs: {
                                width: "100%",
                                cellpadding: "0",
                                cellspacing: "0"
                              }
                            },
                            [
                              _c(
                                "tr",
                                {
                                  staticStyle: {
                                    "font-family":
                                      "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                    "box-sizing": "border-box",
                                    "font-size": "14px",
                                    margin: "0"
                                  }
                                },
                                [
                                  _c(
                                    "td",
                                    {
                                      staticClass: "content-wrap aligncenter",
                                      staticStyle: {
                                        "font-family":
                                          "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                        "box-sizing": "border-box",
                                        "font-size": "14px",
                                        "vertical-align": "top",
                                        margin: "0",
                                        padding: "20px",
                                        border: "3px solid #1d1e3a",
                                        "border-radius": "7px",
                                        "background-color": "#fff"
                                      },
                                      attrs: { align: "center", valign: "top" }
                                    },
                                    [
                                      _c(
                                        "table",
                                        {
                                          staticStyle: {
                                            "font-family":
                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                            "box-sizing": "border-box",
                                            "font-size": "14px",
                                            margin: "0"
                                          },
                                          attrs: {
                                            width: "100%",
                                            cellpadding: "0",
                                            cellspacing: "0"
                                          }
                                        },
                                        [
                                          _c(
                                            "tr",
                                            {
                                              staticStyle: {
                                                "font-family":
                                                  "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                "box-sizing": "border-box",
                                                "font-size": "14px",
                                                margin: "0"
                                              }
                                            },
                                            [
                                              _c(
                                                "td",
                                                {
                                                  staticClass: "content-block",
                                                  staticStyle: {
                                                    "font-family":
                                                      "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                    "box-sizing": "border-box",
                                                    "font-size": "14px",
                                                    "vertical-align": "top",
                                                    margin: "0",
                                                    padding: "0 0 20px"
                                                  },
                                                  attrs: { valign: "top" }
                                                },
                                                [
                                                  _c(
                                                    "h2",
                                                    {
                                                      staticClass:
                                                        "aligncenter",
                                                      staticStyle: {
                                                        "font-family":
                                                          "'Helvetica Neue',Helvetica,Arial,'Lucida Grande',sans-serif",
                                                        "box-sizing":
                                                          "border-box",
                                                        "font-size": "24px",
                                                        color: "#000",
                                                        "line-height": "1.2em",
                                                        "font-weight": "400",
                                                        "text-align": "center",
                                                        margin: "40px 0 0"
                                                      },
                                                      attrs: { align: "center" }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "\n                            Thanks for using\n                            "
                                                      ),
                                                      _c(
                                                        "b",
                                                        {
                                                          staticStyle: {
                                                            "font-weight": "600"
                                                          }
                                                        },
                                                        [_vm._v("VELTRIX")]
                                                      ),
                                                      _vm._v(
                                                        ".\n                          "
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "tr",
                                            {
                                              staticStyle: {
                                                "font-family":
                                                  "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                "box-sizing": "border-box",
                                                "font-size": "14px",
                                                margin: "0"
                                              }
                                            },
                                            [
                                              _c(
                                                "td",
                                                {
                                                  staticClass:
                                                    "content-block aligncenter",
                                                  staticStyle: {
                                                    "font-family":
                                                      "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                    "box-sizing": "border-box",
                                                    "font-size": "14px",
                                                    "vertical-align": "top",
                                                    "text-align": "center",
                                                    margin: "0",
                                                    padding: "0 0 20px"
                                                  },
                                                  attrs: {
                                                    align: "center",
                                                    valign: "top"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "table",
                                                    {
                                                      staticClass: "invoice",
                                                      staticStyle: {
                                                        "font-family":
                                                          "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                        "box-sizing":
                                                          "border-box",
                                                        "font-size": "14px",
                                                        "text-align": "left",
                                                        width: "80%",
                                                        margin: "40px auto"
                                                      }
                                                    },
                                                    [
                                                      _c(
                                                        "tr",
                                                        {
                                                          staticStyle: {
                                                            "font-family":
                                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                            "box-sizing":
                                                              "border-box",
                                                            "font-size": "14px",
                                                            margin: "0"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "td",
                                                            {
                                                              staticStyle: {
                                                                "font-family":
                                                                  "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                "box-sizing":
                                                                  "border-box",
                                                                "font-size":
                                                                  "14px",
                                                                "vertical-align":
                                                                  "top",
                                                                margin: "0",
                                                                padding: "5px 0"
                                                              },
                                                              attrs: {
                                                                valign: "top"
                                                              }
                                                            },
                                                            [
                                                              _c("b", [
                                                                _vm._v(
                                                                  "Company Name"
                                                                )
                                                              ]),
                                                              _vm._v(" "),
                                                              _c("br", {
                                                                staticStyle: {
                                                                  "font-family":
                                                                    "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                  "box-sizing":
                                                                    "border-box",
                                                                  "font-size":
                                                                    "14px",
                                                                  margin: "0"
                                                                }
                                                              }),
                                                              _vm._v(
                                                                "Invoice #6521\n                                "
                                                              ),
                                                              _c("br", {
                                                                staticStyle: {
                                                                  "font-family":
                                                                    "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                  "box-sizing":
                                                                    "border-box",
                                                                  "font-size":
                                                                    "14px",
                                                                  margin: "0"
                                                                }
                                                              }),
                                                              _vm._v(
                                                                "August 01 2017\n                              "
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      _c(
                                                        "tr",
                                                        {
                                                          staticStyle: {
                                                            "font-family":
                                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                            "box-sizing":
                                                              "border-box",
                                                            "font-size": "14px",
                                                            margin: "0"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "td",
                                                            {
                                                              staticStyle: {
                                                                "font-family":
                                                                  "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                "box-sizing":
                                                                  "border-box",
                                                                "font-size":
                                                                  "14px",
                                                                "vertical-align":
                                                                  "top",
                                                                margin: "0",
                                                                padding: "5px 0"
                                                              },
                                                              attrs: {
                                                                valign: "top"
                                                              }
                                                            },
                                                            [
                                                              _c(
                                                                "table",
                                                                {
                                                                  staticClass:
                                                                    "invoice-items",
                                                                  staticStyle: {
                                                                    "font-family":
                                                                      "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                    "box-sizing":
                                                                      "border-box",
                                                                    "font-size":
                                                                      "14px",
                                                                    width:
                                                                      "100%",
                                                                    margin: "0"
                                                                  },
                                                                  attrs: {
                                                                    cellpadding:
                                                                      "0",
                                                                    cellspacing:
                                                                      "0"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "tr",
                                                                    {
                                                                      staticStyle: {
                                                                        "font-family":
                                                                          "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                        "box-sizing":
                                                                          "border-box",
                                                                        "font-size":
                                                                          "14px",
                                                                        margin:
                                                                          "0"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticStyle: {
                                                                            "font-family":
                                                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                            "box-sizing":
                                                                              "border-box",
                                                                            "font-size":
                                                                              "14px",
                                                                            "vertical-align":
                                                                              "top",
                                                                            "border-top-width":
                                                                              "1px",
                                                                            "border-top-color":
                                                                              "#eee",
                                                                            "border-top-style":
                                                                              "solid",
                                                                            margin:
                                                                              "0",
                                                                            padding:
                                                                              "5px 0"
                                                                          },
                                                                          attrs: {
                                                                            valign:
                                                                              "top"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "BS-200 (1 Pc)"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticClass:
                                                                            "alignright",
                                                                          staticStyle: {
                                                                            "font-family":
                                                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                            "box-sizing":
                                                                              "border-box",
                                                                            "font-size":
                                                                              "14px",
                                                                            "vertical-align":
                                                                              "top",
                                                                            "text-align":
                                                                              "right",
                                                                            "border-top-width":
                                                                              "1px",
                                                                            "border-top-color":
                                                                              "#eee",
                                                                            "border-top-style":
                                                                              "solid",
                                                                            margin:
                                                                              "0",
                                                                            padding:
                                                                              "5px 0"
                                                                          },
                                                                          attrs: {
                                                                            align:
                                                                              "right",
                                                                            valign:
                                                                              "top"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "$10.99"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "tr",
                                                                    {
                                                                      staticStyle: {
                                                                        "font-family":
                                                                          "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                        "box-sizing":
                                                                          "border-box",
                                                                        "font-size":
                                                                          "14px",
                                                                        margin:
                                                                          "0"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticStyle: {
                                                                            "font-family":
                                                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                            "box-sizing":
                                                                              "border-box",
                                                                            "font-size":
                                                                              "14px",
                                                                            "vertical-align":
                                                                              "top",
                                                                            "border-top-width":
                                                                              "1px",
                                                                            "border-top-color":
                                                                              "#eee",
                                                                            "border-top-style":
                                                                              "solid",
                                                                            margin:
                                                                              "0",
                                                                            padding:
                                                                              "5px 0"
                                                                          },
                                                                          attrs: {
                                                                            valign:
                                                                              "top"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "BS-400 (2 Pcs)"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticClass:
                                                                            "alignright",
                                                                          staticStyle: {
                                                                            "font-family":
                                                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                            "box-sizing":
                                                                              "border-box",
                                                                            "font-size":
                                                                              "14px",
                                                                            "vertical-align":
                                                                              "top",
                                                                            "text-align":
                                                                              "right",
                                                                            "border-top-width":
                                                                              "1px",
                                                                            "border-top-color":
                                                                              "#eee",
                                                                            "border-top-style":
                                                                              "solid",
                                                                            margin:
                                                                              "0",
                                                                            padding:
                                                                              "5px 0"
                                                                          },
                                                                          attrs: {
                                                                            align:
                                                                              "right",
                                                                            valign:
                                                                              "top"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "$60.00"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "tr",
                                                                    {
                                                                      staticStyle: {
                                                                        "font-family":
                                                                          "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                        "box-sizing":
                                                                          "border-box",
                                                                        "font-size":
                                                                          "14px",
                                                                        margin:
                                                                          "0"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticStyle: {
                                                                            "font-family":
                                                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                            "box-sizing":
                                                                              "border-box",
                                                                            "font-size":
                                                                              "14px",
                                                                            "vertical-align":
                                                                              "top",
                                                                            "border-top-width":
                                                                              "1px",
                                                                            "border-top-color":
                                                                              "#eee",
                                                                            "border-top-style":
                                                                              "solid",
                                                                            margin:
                                                                              "0",
                                                                            padding:
                                                                              "5px 0"
                                                                          },
                                                                          attrs: {
                                                                            valign:
                                                                              "top"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "BS-1000 (1 Pc)"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticClass:
                                                                            "alignright",
                                                                          staticStyle: {
                                                                            "font-family":
                                                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                            "box-sizing":
                                                                              "border-box",
                                                                            "font-size":
                                                                              "14px",
                                                                            "vertical-align":
                                                                              "top",
                                                                            "text-align":
                                                                              "right",
                                                                            "border-top-width":
                                                                              "1px",
                                                                            "border-top-color":
                                                                              "#eee",
                                                                            "border-top-style":
                                                                              "solid",
                                                                            margin:
                                                                              "0",
                                                                            padding:
                                                                              "5px 0"
                                                                          },
                                                                          attrs: {
                                                                            align:
                                                                              "right",
                                                                            valign:
                                                                              "top"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "$600.00"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  ),
                                                                  _vm._v(" "),
                                                                  _c(
                                                                    "tr",
                                                                    {
                                                                      staticClass:
                                                                        "total",
                                                                      staticStyle: {
                                                                        "font-family":
                                                                          "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                        "box-sizing":
                                                                          "border-box",
                                                                        "font-size":
                                                                          "14px",
                                                                        margin:
                                                                          "0"
                                                                      }
                                                                    },
                                                                    [
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticClass:
                                                                            "alignright",
                                                                          staticStyle: {
                                                                            "font-family":
                                                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                            "box-sizing":
                                                                              "border-box",
                                                                            "font-size":
                                                                              "14px",
                                                                            "vertical-align":
                                                                              "top",
                                                                            "text-align":
                                                                              "right",
                                                                            "border-top-width":
                                                                              "2px",
                                                                            "border-top-color":
                                                                              "#333",
                                                                            "border-top-style":
                                                                              "solid",
                                                                            "border-bottom-color":
                                                                              "#333",
                                                                            "border-bottom-width":
                                                                              "2px",
                                                                            "border-bottom-style":
                                                                              "solid",
                                                                            "font-weight":
                                                                              "700",
                                                                            margin:
                                                                              "0",
                                                                            padding:
                                                                              "5px 0"
                                                                          },
                                                                          attrs: {
                                                                            width:
                                                                              "80%",
                                                                            align:
                                                                              "right",
                                                                            valign:
                                                                              "top"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "Total"
                                                                          )
                                                                        ]
                                                                      ),
                                                                      _vm._v(
                                                                        " "
                                                                      ),
                                                                      _c(
                                                                        "td",
                                                                        {
                                                                          staticClass:
                                                                            "alignright",
                                                                          staticStyle: {
                                                                            "font-family":
                                                                              "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                                            "box-sizing":
                                                                              "border-box",
                                                                            "font-size":
                                                                              "14px",
                                                                            "vertical-align":
                                                                              "top",
                                                                            "text-align":
                                                                              "right",
                                                                            "border-top-width":
                                                                              "2px",
                                                                            "border-top-color":
                                                                              "#333",
                                                                            "border-top-style":
                                                                              "solid",
                                                                            "border-bottom-color":
                                                                              "#333",
                                                                            "border-bottom-width":
                                                                              "2px",
                                                                            "border-bottom-style":
                                                                              "solid",
                                                                            "font-weight":
                                                                              "700",
                                                                            margin:
                                                                              "0",
                                                                            padding:
                                                                              "5px 0"
                                                                          },
                                                                          attrs: {
                                                                            align:
                                                                              "right",
                                                                            valign:
                                                                              "top"
                                                                          }
                                                                        },
                                                                        [
                                                                          _vm._v(
                                                                            "$670.99"
                                                                          )
                                                                        ]
                                                                      )
                                                                    ]
                                                                  )
                                                                ]
                                                              )
                                                            ]
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "tr",
                                            {
                                              staticStyle: {
                                                "font-family":
                                                  "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                "box-sizing": "border-box",
                                                "font-size": "14px",
                                                margin: "0"
                                              }
                                            },
                                            [
                                              _c(
                                                "td",
                                                {
                                                  staticClass:
                                                    "content-block aligncenter",
                                                  staticStyle: {
                                                    "font-family":
                                                      "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                    "box-sizing": "border-box",
                                                    "font-size": "14px",
                                                    "vertical-align": "top",
                                                    "text-align": "center",
                                                    margin: "0",
                                                    padding: "0 0 20px"
                                                  },
                                                  attrs: {
                                                    align: "center",
                                                    valign: "top"
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "Veltrix Inc. 2896 Howell Rd, Russellville, AR, 72823"
                                                  )
                                                ]
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "tr",
                                            {
                                              staticStyle: {
                                                "font-family":
                                                  "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                "box-sizing": "border-box",
                                                "font-size": "14px",
                                                margin: "0"
                                              }
                                            },
                                            [
                                              _c(
                                                "td",
                                                {
                                                  staticClass: "content-block",
                                                  staticStyle: {
                                                    "text-align": "center",
                                                    "font-family":
                                                      "'Helvetica Neue',Helvetica,Arial,sans-serif",
                                                    "box-sizing": "border-box",
                                                    "font-size": "14px",
                                                    "vertical-align": "top",
                                                    margin: "0",
                                                    padding: "0"
                                                  },
                                                  attrs: { valign: "top" }
                                                },
                                                [
                                                  _vm._v(
                                                    "© " +
                                                      _vm._s(
                                                        new Date().getFullYear()
                                                      ) +
                                                      " Veltrix"
                                                  )
                                                ]
                                              )
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
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