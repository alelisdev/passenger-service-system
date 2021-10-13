(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_ui_images_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/images.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/images.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Images component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Images",
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
      title: "Images",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "UI Elements",
        href: "/"
      }, {
        text: "Images",
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

/***/ "./resources/js/router/views/ui/images.vue":
/*!*************************************************!*\
  !*** ./resources/js/router/views/ui/images.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _images_vue_vue_type_template_id_6279cf2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images.vue?vue&type=template&id=6279cf2a& */ "./resources/js/router/views/ui/images.vue?vue&type=template&id=6279cf2a&");
/* harmony import */ var _images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images.vue?vue&type=script&lang=js& */ "./resources/js/router/views/ui/images.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _images_vue_vue_type_template_id_6279cf2a___WEBPACK_IMPORTED_MODULE_0__.render,
  _images_vue_vue_type_template_id_6279cf2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/ui/images.vue"
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

/***/ "./resources/js/router/views/ui/images.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/router/views/ui/images.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./images.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/images.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_images_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/ui/images.vue?vue&type=template&id=6279cf2a&":
/*!********************************************************************************!*\
  !*** ./resources/js/router/views/ui/images.vue?vue&type=template&id=6279cf2a& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_images_vue_vue_type_template_id_6279cf2a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_images_vue_vue_type_template_id_6279cf2a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_images_vue_vue_type_template_id_6279cf2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./images.vue?vue&type=template&id=6279cf2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/images.vue?vue&type=template&id=6279cf2a&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/images.vue?vue&type=template&id=6279cf2a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/images.vue?vue&type=template&id=6279cf2a& ***!
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
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Image thumbnails")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            In addition to our border-radius utilities, you can use\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("thumbnail")
                ]),
                _vm._v(
                  " to give an image a\n            rounded 1px border appearance.\n          "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {},
                [
                  _c("b-img", {
                    attrs: {
                      src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                      width: "200",
                      thumbnail: "",
                      alt: "200x200"
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Image Rounded & Circle")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Use attribute\n            "),
                _c("code", [_vm._v("rounded")]),
                _vm._v(" and\n            "),
                _c("code", [_vm._v("rounded='circle'")]),
                _vm._v(".\n          ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                {},
                [
                  _c("b-img", {
                    staticClass: "mr-2 mo-mb-2",
                    attrs: {
                      src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                      rounded: "",
                      width: "200",
                      alt: "200x200"
                    }
                  }),
                  _vm._v(" "),
                  _c("b-img", {
                    attrs: {
                      src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                      rounded: "circle",
                      alt: "200x200"
                    }
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
                _vm._v("Responsive images")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Images in Bootstrap are made responsive\n            with\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("fluid")
                ]),
                _vm._v(".\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("max-width: 100%;")
                ]),
                _vm._v(" and\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("height: auto;")
                ]),
                _vm._v(
                  " are applied to\n            the image so that it scales with the parent element.\n          "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                {},
                [
                  _c("b-img", {
                    attrs: {
                      src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                      fluid: "",
                      alt: "Responsive image"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v("Default media object")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v(
                    "\n            The default media displays a media\n            object (images, video, audio) to the left or right of a content\n            block.\n          "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-media",
                  {
                    staticClass: "mb-4",
                    scopedSlots: _vm._u([
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c("b-img", {
                              attrs: {
                                src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-6.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                                rounded: "circle",
                                height: "64",
                                alt: "Generic placeholder image"
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    _c("h5", { staticClass: "mt-0 font-16" }, [
                      _vm._v("Media heading")
                    ]),
                    _vm._v(
                      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-media",
                  {
                    staticClass: "mb-4",
                    scopedSlots: _vm._u([
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c("b-img", {
                              attrs: {
                                src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                                rounded: "circle",
                                height: "64",
                                alt: "Generic placeholder image"
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "b-media-body",
                      [
                        _c("h5", { staticClass: "mt-0 font-16" }, [
                          _vm._v("Media heading")
                        ]),
                        _vm._v(
                          "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n              "
                        ),
                        _c(
                          "b-media",
                          {
                            staticClass: "mt-3",
                            scopedSlots: _vm._u([
                              {
                                key: "aside",
                                fn: function() {
                                  return [
                                    _c("b-img", {
                                      attrs: {
                                        src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                                        rounded: "circle",
                                        height: "64",
                                        alt: "Generic placeholder image"
                                      }
                                    })
                                  ]
                                },
                                proxy: true
                              }
                            ])
                          },
                          [
                            _vm._v(" "),
                            _c("b-media-body", [
                              _c("h5", { staticClass: "mt-0 font-16" }, [
                                _vm._v("Media heading")
                              ]),
                              _vm._v(
                                "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n                "
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
                  "b-media",
                  {
                    attrs: { "right-align": "" },
                    scopedSlots: _vm._u([
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c("b-img", {
                              attrs: {
                                src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                                rounded: "circle",
                                height: "64",
                                alt: "Generic placeholder image"
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _c("b-media-body", [
                      _c("h5", { staticClass: "mt-0 mb-1 font-16" }, [
                        _vm._v("Media object")
                      ]),
                      _vm._v(
                        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.\n            "
                      )
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
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v("Media alignment")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v(
                    "\n            The images or other media can be\n            aligned top, middle, or bottom. The default is top aligned.\n          "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-media",
                  {
                    staticClass: "mb-4",
                    attrs: { "vertical-align": "top" },
                    scopedSlots: _vm._u([
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c("b-img", {
                              attrs: {
                                src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                                rounded: "",
                                height: "64",
                                alt: "Generic placeholder image"
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    _c("h5", { staticClass: "mt-0 font-16" }, [
                      _vm._v("Top-aligned media")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-media",
                  {
                    staticClass: "mb-4",
                    attrs: { "vertical-align": "center" },
                    scopedSlots: _vm._u([
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c("b-img", {
                              attrs: {
                                src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-5.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                                rounded: "",
                                height: "64",
                                alt: "Generic placeholder image"
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    _c("h5", { staticClass: "mt-0 font-16" }, [
                      _vm._v("Center-aligned media")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                      )
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-media",
                  {
                    staticClass: "mb-4",
                    attrs: { "vertical-align": "end" },
                    scopedSlots: _vm._u([
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c("b-img", {
                              attrs: {
                                src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                                rounded: "",
                                height: "64",
                                alt: "Generic placeholder image"
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ])
                  },
                  [
                    _vm._v(" "),
                    _c("h5", { staticClass: "mt-0 font-16" }, [
                      _vm._v("Bottom-aligned media")
                    ]),
                    _vm._v(" "),
                    _c("p", [
                      _vm._v(
                        "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "mb-0" }, [
                      _vm._v(
                        "Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);