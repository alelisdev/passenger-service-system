(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_ui_cards_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/cards.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/cards.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Cards component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Cards",
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
      title: "Cards",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "UI Elements",
        href: "/"
      }, {
        text: "Cards",
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

/***/ "./resources/js/router/views/ui/cards.vue":
/*!************************************************!*\
  !*** ./resources/js/router/views/ui/cards.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards_vue_vue_type_template_id_1fef21be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.vue?vue&type=template&id=1fef21be& */ "./resources/js/router/views/ui/cards.vue?vue&type=template&id=1fef21be&");
/* harmony import */ var _cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cards.vue?vue&type=script&lang=js& */ "./resources/js/router/views/ui/cards.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _cards_vue_vue_type_template_id_1fef21be___WEBPACK_IMPORTED_MODULE_0__.render,
  _cards_vue_vue_type_template_id_1fef21be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/ui/cards.vue"
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

/***/ "./resources/js/router/views/ui/cards.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/router/views/ui/cards.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cards.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/cards.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/ui/cards.vue?vue&type=template&id=1fef21be&":
/*!*******************************************************************************!*\
  !*** ./resources/js/router/views/ui/cards.vue?vue&type=template&id=1fef21be& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_template_id_1fef21be___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_template_id_1fef21be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_cards_vue_vue_type_template_id_1fef21be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./cards.vue?vue&type=template&id=1fef21be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/cards.vue?vue&type=template&id=1fef21be&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/cards.vue?vue&type=template&id=1fef21be&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/cards.vue?vue&type=template&id=1fef21be& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
        _c(
          "div",
          { staticClass: "col-lg-6 col-xl-3" },
          [
            _c(
              "b-card",
              {
                attrs: {
                  "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                  "img-alt": "Card image",
                  "img-top": ""
                }
              },
              [
                _c("b-card-title", [
                  _c("h5", { staticClass: "card-title" }, [
                    _vm._v("Card title")
                  ])
                ]),
                _vm._v(" "),
                _c("b-card-text", [
                  _vm._v(
                    "\n          Some quick example text to build on the card title and make\n          up the bulk of the card's content.\n        "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { href: "javascript:void(0);", variant: "primary" }
                  },
                  [_vm._v("Button")]
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
          { staticClass: "col-lg-6 col-xl-3" },
          [
            _c(
              "b-card",
              {
                attrs: {
                  "no-body": "",
                  "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                  "img-alt": "Card image",
                  "img-top": ""
                }
              },
              [
                _c(
                  "b-card-body",
                  [
                    _c("b-card-title", [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Card title")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-card-text", [
                      _vm._v(
                        "Some quick example text to build on the card title and make up the bulk of the card's content."
                      )
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("ul", { staticClass: "list-group list-group-flush" }, [
                  _c("li", { staticClass: "list-group-item" }, [
                    _vm._v("Cras justo odio")
                  ]),
                  _vm._v(" "),
                  _c("li", { staticClass: "list-group-item" }, [
                    _vm._v("Dapibus ac facilisis in")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "card-body" }, [
                  _c(
                    "a",
                    {
                      staticClass: "card-link text-custom",
                      attrs: { href: "javascript:void(0);" }
                    },
                    [_vm._v("Card link")]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "card-link text-custom",
                      attrs: { href: "javascript:void(0);" }
                    },
                    [_vm._v("Another link")]
                  )
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
          { staticClass: "col-lg-6 col-xl-3" },
          [
            _c(
              "b-card",
              {
                attrs: {
                  "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                  "img-alt": "Card image",
                  "img-top": ""
                }
              },
              [
                _c("b-card-text", [
                  _vm._v(
                    "\n          Some quick example text to build on the card title and make\n          up the bulk of the card's content.\n        "
                  )
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
          { staticClass: "col-lg-6 col-xl-3" },
          [
            _c(
              "b-card",
              { attrs: { "no-body": "" } },
              [
                _c(
                  "b-card-body",
                  [
                    _c("b-card-title", [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Card title")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-card-sub-title", [
                      _c("h6", { staticClass: "card-subtitle text-muted" }, [
                        _vm._v("Support card subtitle")
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("img", {
                  staticClass: "img-fluid",
                  attrs: { src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())) }
                }),
                _vm._v(" "),
                _c(
                  "b-card-body",
                  [
                    _c("b-card-text", [
                      _vm._v(
                        "\n            Some quick example text to build on the card title and make\n            up the bulk of the card's content.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "card-link text-custom",
                        attrs: { href: "javascript:void(0);" }
                      },
                      [_vm._v("Card link")]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "card-link text-custom",
                        attrs: { href: "javascript:void(0);" }
                      },
                      [_vm._v("Another link")]
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
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              { attrs: { "no-body": "" } },
              [
                _c(
                  "b-card-body",
                  [
                    _c("b-card-title", [
                      _c("h4", { staticClass: "card-title" }, [
                        _vm._v("Special title treatment")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-card-text", [
                      _vm._v(
                        "\n            With supporting text below as a natural lead-in to additional\n            content.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary btn-block",
                        attrs: { href: "javascript:void(0);" }
                      },
                      [_vm._v("Go somewhere")]
                    )
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
          "div",
          { staticClass: "col-lg-6" },
          [
            _c(
              "b-card",
              { attrs: { "no-body": "" } },
              [
                _c(
                  "b-card-body",
                  [
                    _c("b-card-title", [
                      _c("h4", { staticClass: "card-title" }, [
                        _vm._v("Special title treatment")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-card-text", [
                      _vm._v(
                        "\n            With supporting text below as a natural lead-in to additional\n            content.\n          "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-primary btn-block",
                        attrs: { href: "javascript:void(0);" }
                      },
                      [_vm._v("Go somewhere")]
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
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              [
                _c("b-card-title", [
                  _c("h5", { staticClass: "card-title" }, [
                    _vm._v("Special title treatment")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "h4",
                  {
                    staticClass: "mb-0",
                    attrs: { slot: "header" },
                    slot: "header"
                  },
                  [_vm._v("Featured")]
                ),
                _vm._v(" "),
                _c("b-card-text", [
                  _vm._v(
                    "With supporting text below as a natural lead-in to additional content."
                  )
                ]),
                _vm._v(" "),
                _c("b-button", { attrs: { href: "#", variant: "primary" } }, [
                  _vm._v("Go somewhere")
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
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              { attrs: { header: "Quote" } },
              [
                _c("b-card-text", [
                  _vm._v(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                  )
                ]),
                _vm._v(" "),
                _c("footer", [
                  _vm._v("\n          Someone famous in\n          "),
                  _c("cite", { attrs: { title: "Source Title" } }, [
                    _vm._v("Source Title")
                  ])
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
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              { attrs: { header: "Featured", footer: "2 days ago" } },
              [
                _c("b-card-text", [
                  _c("h4", { staticClass: "card-title" }, [
                    _vm._v("Special title treatment")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "card-text" }, [
                    _vm._v(
                      "\n            With supporting text below as a natural lead-in to\n            additional content.\n          "
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "btn btn-primary", attrs: { href: "#" } },
                    [_vm._v("Go somewhere")]
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              {
                attrs: {
                  "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-5.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                  "img-alt": "Card image",
                  "img-top": ""
                }
              },
              [
                _c("b-card-title", [
                  _c("h5", { staticClass: "card-title" }, [
                    _vm._v("Card title")
                  ])
                ]),
                _vm._v(" "),
                _c("b-card-text", [
                  _c("p", [
                    _vm._v(
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("small", { staticClass: "text-muted" }, [
                      _vm._v("Last updated 3 mins ago")
                    ])
                  ])
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
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              {
                attrs: {
                  "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-7.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                  "img-alt": "Card image",
                  "img-bottom": ""
                }
              },
              [
                _c("b-card-title", [
                  _c("h5", { staticClass: "card-title" }, [
                    _vm._v("Card title")
                  ])
                ]),
                _vm._v(" "),
                _c("b-card-text", [
                  _c("p", [
                    _vm._v(
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("small", { staticClass: "text-muted" }, [
                      _vm._v("Last updated 3 mins ago")
                    ])
                  ])
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
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              {
                attrs: {
                  overlay: "",
                  "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-6.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                  "img-alt": "Card Image",
                  "text-variant": "white"
                }
              },
              [
                _c("b-card-title", [
                  _c("h5", { staticClass: "card-title text-white" }, [
                    _vm._v("Card title")
                  ])
                ]),
                _vm._v(" "),
                _c("b-card-text", [
                  _c("p", [
                    _vm._v(
                      "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _c("small", { staticClass: "text-white" }, [
                      _vm._v("Last updated 3 mins ago")
                    ])
                  ])
                ])
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              { attrs: { "bg-variant": "secondary", "text-variant": "white" } },
              [
                _c(
                  "blockquote",
                  { staticClass: "card-bodyquote mb-0" },
                  [
                    _c("b-card-text", [
                      _c("p", [
                        _vm._v(
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "footer",
                        { staticClass: "blockquote-footer text-white" },
                        [
                          _vm._v(
                            "\n              Someone famous in\n              "
                          ),
                          _c("cite", { attrs: { title: "Source Title" } }, [
                            _vm._v("Source Title")
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              { attrs: { "bg-variant": "primary", "text-variant": "white" } },
              [
                _c(
                  "blockquote",
                  { staticClass: "card-bodyquote mb-0" },
                  [
                    _c("b-card-text", [
                      _c("p", [
                        _vm._v(
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "footer",
                        { staticClass: "blockquote-footer text-white" },
                        [
                          _vm._v(
                            "\n              Someone famous in\n              "
                          ),
                          _c("cite", { attrs: { title: "Source Title" } }, [
                            _vm._v("Source Title")
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              { attrs: { "bg-variant": "success", "text-variant": "white" } },
              [
                _c(
                  "blockquote",
                  { staticClass: "card-bodyquote mb-0" },
                  [
                    _c("b-card-text", [
                      _c("p", [
                        _vm._v(
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "footer",
                        { staticClass: "blockquote-footer text-white" },
                        [
                          _vm._v(
                            "\n              Someone famous in\n              "
                          ),
                          _c("cite", { attrs: { title: "Source Title" } }, [
                            _vm._v("Source Title")
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              { attrs: { "bg-variant": "info", "text-variant": "white" } },
              [
                _c(
                  "blockquote",
                  { staticClass: "card-bodyquote mb-0" },
                  [
                    _c("b-card-text", [
                      _c("p", [
                        _vm._v(
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "footer",
                        { staticClass: "blockquote-footer text-white" },
                        [
                          _vm._v(
                            "\n              Someone famous in\n              "
                          ),
                          _c("cite", { attrs: { title: "Source Title" } }, [
                            _vm._v("Source Title")
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              { attrs: { "bg-variant": "warning", "text-variant": "white" } },
              [
                _c(
                  "blockquote",
                  { staticClass: "card-bodyquote mb-0" },
                  [
                    _c("b-card-text", [
                      _c("p", [
                        _vm._v(
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "footer",
                        { staticClass: "blockquote-footer text-white" },
                        [
                          _vm._v(
                            "\n              Someone famous in\n              "
                          ),
                          _c("cite", { attrs: { title: "Source Title" } }, [
                            _vm._v("Source Title")
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-4" },
          [
            _c(
              "b-card",
              { attrs: { "bg-variant": "danger", "text-variant": "white" } },
              [
                _c(
                  "blockquote",
                  { staticClass: "card-bodyquote mb-0" },
                  [
                    _c("b-card-text", [
                      _c("p", [
                        _vm._v(
                          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "footer",
                        { staticClass: "blockquote-footer text-white" },
                        [
                          _vm._v(
                            "\n              Someone famous in\n              "
                          ),
                          _c("cite", { attrs: { title: "Source Title" } }, [
                            _vm._v("Source Title")
                          ])
                        ]
                      )
                    ])
                  ],
                  1
                )
              ]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mb-3" }, [
        _c(
          "div",
          { staticClass: "col-12" },
          [
            _c("h4", { staticClass: "my-4" }, [_vm._v("Decks")]),
            _vm._v(" "),
            _c(
              "b-card-group",
              { attrs: { deck: "" } },
              [
                _c(
                  "b-card",
                  {
                    attrs: {
                      "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                      "img-alt": "Card image",
                      "img-top": ""
                    }
                  },
                  [
                    _c("b-card-title", [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Card title")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-card-text", [
                      _c("p", [
                        _vm._v(
                          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("Last updated 3 mins ago")
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-card",
                  {
                    attrs: {
                      "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-5.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                      "img-alt": "Card image",
                      "img-top": ""
                    }
                  },
                  [
                    _c("b-card-title", [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Card title")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-card-text", [
                      _c("p", [
                        _vm._v(
                          "This card has supporting text below as a natural lead-in to additional content."
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("Last updated 3 mins ago")
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-card",
                  {
                    attrs: {
                      "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-6.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                      "img-alt": "Card image",
                      "img-top": ""
                    }
                  },
                  [
                    _c("b-card-title", [
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v("Card title")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-card-text", [
                      _c("p", [
                        _vm._v(
                          "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action."
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", [
                        _c("small", { staticClass: "text-muted" }, [
                          _vm._v("Last updated 3 mins ago")
                        ])
                      ])
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);