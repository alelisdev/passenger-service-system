(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_pages_faqs_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/faqs.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/faqs.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * FAQs component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "FAQs",
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
      title: "FAQs",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Extra Pages",
        href: "/"
      }, {
        text: "FAQs",
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

/***/ "./resources/js/router/views/pages/faqs.vue":
/*!**************************************************!*\
  !*** ./resources/js/router/views/pages/faqs.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _faqs_vue_vue_type_template_id_1881bb7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqs.vue?vue&type=template&id=1881bb7e& */ "./resources/js/router/views/pages/faqs.vue?vue&type=template&id=1881bb7e&");
/* harmony import */ var _faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faqs.vue?vue&type=script&lang=js& */ "./resources/js/router/views/pages/faqs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _faqs_vue_vue_type_template_id_1881bb7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _faqs_vue_vue_type_template_id_1881bb7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/pages/faqs.vue"
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

/***/ "./resources/js/router/views/pages/faqs.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/router/views/pages/faqs.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./faqs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/faqs.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_faqs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/pages/faqs.vue?vue&type=template&id=1881bb7e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/router/views/pages/faqs.vue?vue&type=template&id=1881bb7e& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faqs_vue_vue_type_template_id_1881bb7e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faqs_vue_vue_type_template_id_1881bb7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_faqs_vue_vue_type_template_id_1881bb7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./faqs.vue?vue&type=template&id=1881bb7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/faqs.vue?vue&type=template&id=1881bb7e&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/faqs.vue?vue&type=template&id=1881bb7e&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/faqs.vue?vue&type=template&id=1881bb7e& ***!
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
              _c("div", { staticClass: "row justify-content-center mb-5" }, [
                _c("div", { staticClass: "col-lg-5" }, [
                  _c(
                    "div",
                    { staticClass: "text-center faq-title pt-4 pb-4" },
                    [
                      _c("div", { staticClass: "pt-3 pb-3" }, [
                        _c("i", { staticClass: "ti-comments text-primary h3" })
                      ]),
                      _vm._v(" "),
                      _c("h4", [
                        _vm._v("Can't find what you are looking for?")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v(
                          "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary mt-2 mr-1",
                          attrs: { type: "button" }
                        },
                        [_vm._v("Email Us")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-success mt-2",
                          attrs: { type: "button" }
                        },
                        [_vm._v("Send us a tweet")]
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row justify-content-center" }, [
                _c("div", { staticClass: "col-lg-5" }, [
                  _c("h5", { staticClass: "mt-0 font-size-18 mb-4" }, [
                    _c("i", { staticClass: "ti-agenda text-primary mr-2" }),
                    _vm._v(" General Questions\n              ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "b-card",
                        { staticClass: "mb-1 faq", attrs: { "no-body": "" } },
                        [
                          _c("b-card-header", { attrs: { role: "tab" } }, [
                            _c("h6", { staticClass: "m-0 font-size-16" }, [
                              _c(
                                "a",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-1",
                                      modifiers: { "accordion-1": true }
                                    }
                                  ],
                                  staticClass: "text-dark",
                                  attrs: { href: "javascript: void(0);" }
                                },
                                [_vm._v("What is Lorem Ipsum?")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-1",
                                visible: "",
                                accordion: "my-accordion"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c("b-card-text", [
                                    _vm._v(
                                      "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental."
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-card",
                        { staticClass: "mb-1 faq", attrs: { "no-body": "" } },
                        [
                          _c("b-card-header", { attrs: { role: "tab" } }, [
                            _c("h6", { staticClass: "m-0 font-size-16" }, [
                              _c(
                                "a",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-2",
                                      modifiers: { "accordion-2": true }
                                    }
                                  ],
                                  staticClass: "text-dark",
                                  attrs: { href: "javascript: void(0);" }
                                },
                                [_vm._v("Where does it come from?")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-2",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c("b-card-text", [
                                    _vm._v(
                                      "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar"
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-card",
                        { staticClass: "mb-1 faq", attrs: { "no-body": "" } },
                        [
                          _c("b-card-header", { attrs: { role: "tab" } }, [
                            _c("h6", { staticClass: "m-0 font-size-16" }, [
                              _c(
                                "a",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-3",
                                      modifiers: { "accordion-3": true }
                                    }
                                  ],
                                  staticClass: "text-dark",
                                  attrs: { href: "javascript: void(0);" }
                                },
                                [_vm._v("Why do we use it?")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-3",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c("b-card-text", [
                                    _vm._v(
                                      "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple"
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-card",
                        { staticClass: "mb-1 faq", attrs: { "no-body": "" } },
                        [
                          _c("b-card-header", { attrs: { role: "tab" } }, [
                            _c("h6", { staticClass: "m-0 font-size-16" }, [
                              _c(
                                "a",
                                {
                                  directives: [
                                    {
                                      name: "b-toggle",
                                      rawName: "v-b-toggle.accordion-4",
                                      modifiers: { "accordion-4": true }
                                    }
                                  ],
                                  staticClass: "text-dark",
                                  attrs: { href: "javascript: void(0);" }
                                },
                                [_vm._v("Where can I get some?")]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "b-collapse",
                            {
                              attrs: {
                                id: "accordion-4",
                                accordion: "my-accordion",
                                role: "tabpanel"
                              }
                            },
                            [
                              _c(
                                "b-card-body",
                                [
                                  _c("b-card-text", [
                                    _vm._v(
                                      "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar"
                                    )
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "col-lg-5 offset-lg-1" },
                  [
                    _c("h5", { staticClass: "mt-0 font-size-18 mb-4" }, [
                      _c("i", {
                        staticClass: "ti-bookmark-alt text-primary mr-2"
                      }),
                      _vm._v(" Pricing & Plans\n              ")
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      { staticClass: "mb-1 faq", attrs: { "no-body": "" } },
                      [
                        _c("b-card-header", { attrs: { role: "tab" } }, [
                          _c("h6", { staticClass: "m-0 font-size-16" }, [
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "b-toggle",
                                    rawName: "v-b-toggle.pricing-accordion-1",
                                    modifiers: { "pricing-accordion-1": true }
                                  }
                                ],
                                staticClass: "text-dark",
                                attrs: { href: "javascript: void(0);" }
                              },
                              [_vm._v("Where can I get some?")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          {
                            attrs: {
                              id: "pricing-accordion-1",
                              visible: "",
                              accordion: "pricing",
                              role: "tabpanel"
                            }
                          },
                          [
                            _c(
                              "b-card-body",
                              [
                                _c("b-card-text", [
                                  _vm._v(
                                    "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar"
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      { staticClass: "mb-1 faq", attrs: { "no-body": "" } },
                      [
                        _c("b-card-header", { attrs: { role: "tab" } }, [
                          _c("h6", { staticClass: "m-0 font-size-16" }, [
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "b-toggle",
                                    rawName: "v-b-toggle.pricing-accordion-2",
                                    modifiers: { "pricing-accordion-2": true }
                                  }
                                ],
                                staticClass: "text-dark",
                                attrs: { href: "javascript: void(0);" }
                              },
                              [_vm._v("Why do we use it?")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          {
                            attrs: {
                              id: "pricing-accordion-2",
                              accordion: "pricing",
                              role: "tabpanel"
                            }
                          },
                          [
                            _c(
                              "b-card-body",
                              [
                                _c("b-card-text", [
                                  _vm._v(
                                    "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple"
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      { staticClass: "mb-1 faq", attrs: { "no-body": "" } },
                      [
                        _c("b-card-header", { attrs: { role: "tab" } }, [
                          _c("h6", { staticClass: "m-0 font-size-16" }, [
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "b-toggle",
                                    rawName: "v-b-toggle.pricing-accordion-3",
                                    modifiers: { "pricing-accordion-3": true }
                                  }
                                ],
                                staticClass: "text-dark",
                                attrs: { href: "javascript: void(0);" }
                              },
                              [_vm._v("Where does it come from?")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          {
                            attrs: {
                              id: "pricing-accordion-3",
                              accordion: "pricing",
                              role: "tabpanel"
                            }
                          },
                          [
                            _c(
                              "b-card-body",
                              [
                                _c("b-card-text", [
                                  _vm._v(
                                    "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar"
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-card",
                      { staticClass: "mb-1 faq", attrs: { "no-body": "" } },
                      [
                        _c("b-card-header", { attrs: { role: "tab" } }, [
                          _c("h6", { staticClass: "m-0 font-size-16" }, [
                            _c(
                              "a",
                              {
                                directives: [
                                  {
                                    name: "b-toggle",
                                    rawName: "v-b-toggle.pricing-accordion-4",
                                    modifiers: { "pricing-accordion-4": true }
                                  }
                                ],
                                staticClass: "text-dark",
                                attrs: { href: "javascript: void(0);" }
                              },
                              [_vm._v("What is Lorem Ipsum?")]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "b-collapse",
                          {
                            attrs: {
                              id: "pricing-accordion-4",
                              accordion: "pricing"
                            }
                          },
                          [
                            _c(
                              "b-card-body",
                              [
                                _c("b-card-text", [
                                  _vm._v(
                                    "The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental."
                                  )
                                ])
                              ],
                              1
                            )
                          ],
                          1
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);