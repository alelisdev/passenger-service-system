(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_ui_modals_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/modals.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/modals.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Modals component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Modals",
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
      title: "Modals",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "UI Elements",
        href: "/"
      }, {
        text: "Modals",
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

/***/ "./resources/js/router/views/ui/modals.vue":
/*!*************************************************!*\
  !*** ./resources/js/router/views/ui/modals.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modals_vue_vue_type_template_id_62588118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modals.vue?vue&type=template&id=62588118& */ "./resources/js/router/views/ui/modals.vue?vue&type=template&id=62588118&");
/* harmony import */ var _modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals.vue?vue&type=script&lang=js& */ "./resources/js/router/views/ui/modals.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _modals_vue_vue_type_template_id_62588118___WEBPACK_IMPORTED_MODULE_0__.render,
  _modals_vue_vue_type_template_id_62588118___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/ui/modals.vue"
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

/***/ "./resources/js/router/views/ui/modals.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/router/views/ui/modals.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/modals.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_modals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/ui/modals.vue?vue&type=template&id=62588118&":
/*!********************************************************************************!*\
  !*** ./resources/js/router/views/ui/modals.vue?vue&type=template&id=62588118& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modals_vue_vue_type_template_id_62588118___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modals_vue_vue_type_template_id_62588118___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_modals_vue_vue_type_template_id_62588118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./modals.vue?vue&type=template&id=62588118& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/modals.vue?vue&type=template&id=62588118&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/modals.vue?vue&type=template&id=62588118&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/modals.vue?vue&type=template&id=62588118& ***!
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
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Modals Examples")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Modals are streamlined, but flexible\n            dialog prompts powered by JavaScript. They support a number of use cases\n            from user notification to completely custom content and feature a\n            handful of helpful subcomponents, sizes, and more.\n          "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal bs-example-modal",
                  attrs: { tabindex: "-1", role: "dialog" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog",
                      attrs: { role: "document" }
                    },
                    [
                      _c("div", { staticClass: "modal-content" }, [
                        _c("div", { staticClass: "modal-header" }, [
                          _c("h5", { staticClass: "modal-title mt-0" }, [
                            _vm._v("Modal title")
                          ]),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "close",
                              attrs: {
                                type: "button",
                                "data-dismiss": "modal",
                                "aria-label": "Close"
                              }
                            },
                            [
                              _c("span", { attrs: { "aria-hidden": "true" } }, [
                                _vm._v("×")
                              ])
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-body" }, [
                          _c("p", [_vm._v("One fine body…")])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-footer" }, [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary",
                              attrs: { type: "button" }
                            },
                            [_vm._v("Save changes")]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-secondary",
                              attrs: { type: "button", "data-dismiss": "modal" }
                            },
                            [_vm._v("Close")]
                          )
                        ])
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-6 col-md-3 mt-4" }, [
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Standard Modal")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-standard",
                              modifiers: { "modal-standard": true }
                            }
                          ],
                          attrs: { variant: "primary" }
                        },
                        [_vm._v("Standard Modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          attrs: {
                            id: "modal-standard",
                            title: "Modal Heading",
                            "title-class": "font-18"
                          }
                        },
                        [
                          _c("h5", [
                            _vm._v("Overflowing text to show scroll behavior")
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 col-md-3 mt-4" }, [
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Large Modal")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-lg",
                              modifiers: { "modal-lg": true }
                            }
                          ],
                          attrs: { variant: "primary" }
                        },
                        [_vm._v("Large modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          attrs: {
                            id: "modal-lg",
                            size: "lg",
                            title: "Large modal",
                            "title-class": "font-18",
                            "hide-footer": ""
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                    Cras mattis consectetur purus sit amet fermentum.\n                    Cras justo odio, dapibus ac facilisis in,\n                    egestas eget quam. Morbi leo risus, porta ac\n                    consectetur ac, vestibulum at eros.\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                    Praesent commodo cursus magna, vel scelerisque\n                    nisl consectetur et. Vivamus sagittis lacus vel\n                    augue laoreet rutrum faucibus dolor auctor.\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _vm._v(
                              "\n                    Aenean lacinia bibendum nulla sed consectetur.\n                    Praesent commodo cursus magna, vel scelerisque\n                    nisl consectetur et. Donec sed odio dui. Donec\n                    ullamcorper nulla non metus auctor\n                    fringilla.\n                  "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 col-md-3 mt-4" }, [
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Small Modal")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-sm",
                              modifiers: { "modal-sm": true }
                            }
                          ],
                          attrs: { variant: "primary" }
                        },
                        [_vm._v("Small modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          attrs: {
                            id: "modal-sm",
                            size: "sm",
                            title: "Small modal",
                            "title-class": "font-18",
                            "hide-footer": ""
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                    Cras mattis consectetur purus sit amet fermentum.\n                    Cras justo odio, dapibus ac facilisis in,\n                    egestas eget quam. Morbi leo risus, porta ac\n                    consectetur ac, vestibulum at eros.\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                    Praesent commodo cursus magna, vel scelerisque\n                    nisl consectetur et. Vivamus sagittis lacus vel\n                    augue laoreet rutrum faucibus dolor auctor.\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _vm._v(
                              "\n                    Aenean lacinia bibendum nulla sed consectetur.\n                    Praesent commodo cursus magna, vel scelerisque\n                    nisl consectetur et. Donec sed odio dui. Donec\n                    ullamcorper nulla non metus auctor\n                    fringilla.\n                  "
                            )
                          ])
                        ]
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-6 col-md-3 mt-4" }, [
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Center Modal")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-center",
                              modifiers: { "modal-center": true }
                            }
                          ],
                          attrs: { variant: "primary" }
                        },
                        [_vm._v("Center modal")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-modal",
                        {
                          attrs: {
                            id: "modal-center",
                            centered: "",
                            title: "Center modal",
                            "title-class": "font-18",
                            "hide-footer": ""
                          }
                        },
                        [
                          _c("p", [
                            _vm._v(
                              "\n                    Cras mattis consectetur purus sit amet fermentum.\n                    Cras justo odio, dapibus ac facilisis in,\n                    egestas eget quam. Morbi leo risus, porta ac\n                    consectetur ac, vestibulum at eros.\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "\n                    Praesent commodo cursus magna, vel scelerisque\n                    nisl consectetur et. Vivamus sagittis lacus vel\n                    augue laoreet rutrum faucibus dolor auctor.\n                  "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "mb-0" }, [
                            _vm._v(
                              "\n                    Aenean lacinia bibendum nulla sed consectetur.\n                    Praesent commodo cursus magna, vel scelerisque\n                    nisl consectetur et. Donec sed odio dui. Donec\n                    ullamcorper nulla non metus auctor\n                    fringilla.\n                  "
                            )
                          ])
                        ]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);