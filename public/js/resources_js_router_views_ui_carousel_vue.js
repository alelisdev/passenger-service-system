(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_ui_carousel_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/carousel.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/carousel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Carousel component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Carousel",
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
      title: "Carousel",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "UI Elements",
        href: "/"
      }, {
        text: "Carousel",
        active: true
      }],
      slide: 0,
      slide1: 0,
      sliding: null
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

/***/ "./resources/js/router/views/ui/carousel.vue":
/*!***************************************************!*\
  !*** ./resources/js/router/views/ui/carousel.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_vue_vue_type_template_id_38a4db92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carousel.vue?vue&type=template&id=38a4db92& */ "./resources/js/router/views/ui/carousel.vue?vue&type=template&id=38a4db92&");
/* harmony import */ var _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.vue?vue&type=script&lang=js& */ "./resources/js/router/views/ui/carousel.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _carousel_vue_vue_type_template_id_38a4db92___WEBPACK_IMPORTED_MODULE_0__.render,
  _carousel_vue_vue_type_template_id_38a4db92___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/ui/carousel.vue"
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

/***/ "./resources/js/router/views/ui/carousel.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/router/views/ui/carousel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./carousel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/carousel.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/ui/carousel.vue?vue&type=template&id=38a4db92&":
/*!**********************************************************************************!*\
  !*** ./resources/js/router/views/ui/carousel.vue?vue&type=template&id=38a4db92& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_38a4db92___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_38a4db92___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_template_id_38a4db92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./carousel.vue?vue&type=template&id=38a4db92& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/carousel.vue?vue&type=template&id=38a4db92&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/carousel.vue?vue&type=template&id=38a4db92&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/carousel.vue?vue&type=template&id=38a4db92& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v("Slides only")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v(
                    "\n            Here’s a carousel with slides only.\n            Note the presence of the\n            "
                  ),
                  _c("code", [_vm._v(".d-block")]),
                  _vm._v("\n            and\n            "),
                  _c("code", [_vm._v(".img-fluid")]),
                  _vm._v(
                    " on carousel images\n            to prevent browser default image alignment.\n          "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-carousel",
                  {
                    staticStyle: { "text-shadow": "0px 0px 2px #000" },
                    attrs: { id: "carousel-fade" }
                  },
                  [
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    }),
                    _vm._v(" "),
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    }),
                    _vm._v(" "),
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
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
                  _vm._v("With controls")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v("Adding in the previous and next controls:")
                ]),
                _vm._v(" "),
                _c(
                  "b-carousel",
                  {
                    staticStyle: { "text-shadow": "0px 0px 2px #000" },
                    attrs: { controls: "" }
                  },
                  [
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    }),
                    _vm._v(" "),
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-5.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    }),
                    _vm._v(" "),
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    })
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v("With indicators")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v(
                    "\n            You can also add the indicators to the\n            carousel, alongside the controls, too.\n          "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-carousel",
                  {
                    staticStyle: { "text-shadow": "0px 0px 2px #000" },
                    attrs: { controls: "", indicators: "" }
                  },
                  [
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    }),
                    _vm._v(" "),
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    }),
                    _vm._v(" "),
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
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
                  _vm._v("With captions")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v(
                    "\n            Add captions to your slides easily with the\n            "
                  ),
                  _c("code", [_vm._v(".carousel-caption")]),
                  _vm._v(" element within any\n            "),
                  _c("code", [_vm._v(".carousel-item")]),
                  _vm._v(".\n          ")
                ]),
                _vm._v(" "),
                _c(
                  "b-carousel",
                  {
                    staticStyle: { "text-shadow": "1px 1px 2px #333" },
                    attrs: {
                      id: "carousel-1",
                      interval: 4000,
                      controls: "",
                      indicators: "",
                      background: "#ababab"
                    },
                    model: {
                      value: _vm.slide,
                      callback: function($$v) {
                        _vm.slide = $$v
                      },
                      expression: "slide"
                    }
                  },
                  [
                    _c(
                      "b-carousel-slide",
                      {
                        attrs: {
                          "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-5.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                        }
                      },
                      [
                        _c("h3", { staticClass: "text-white" }, [
                          _vm._v("First slide label")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Nulla vitae elit libero, a pharetra augue mollis interdum."
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-carousel-slide",
                      {
                        attrs: {
                          "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                        }
                      },
                      [
                        _c("h3", { staticClass: "text-white" }, [
                          _vm._v("Second slide label")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-carousel-slide",
                      {
                        attrs: {
                          "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                        }
                      },
                      [
                        _c("h3", { staticClass: "text-white" }, [
                          _vm._v("Third slide label")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
                          )
                        ])
                      ]
                    )
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title" }, [_vm._v("Crossfade")]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v("\n            Add\n            "),
                  _c("code", [_vm._v("fade")]),
                  _vm._v(
                    " to your carousel to animate slides with a fade transition instead of a slide.\n          "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-carousel",
                  {
                    staticStyle: { "text-shadow": "0px 0px 2px #000" },
                    attrs: { controls: "", fade: "" }
                  },
                  [
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    }),
                    _vm._v(" "),
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    }),
                    _vm._v(" "),
                    _c("b-carousel-slide", {
                      attrs: {
                        "img-src": __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
                      }
                    })
                  ],
                  1
                )
              ],
              1
            )
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