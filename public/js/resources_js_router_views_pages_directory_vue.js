(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_pages_directory_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/directory.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/directory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Directory component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Directory",
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
      title: "Directory",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Extra Pages",
        href: "/"
      }, {
        text: "Directory",
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

/***/ "./resources/js/router/views/pages/directory.vue":
/*!*******************************************************!*\
  !*** ./resources/js/router/views/pages/directory.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directory_vue_vue_type_template_id_5aaacbf9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directory.vue?vue&type=template&id=5aaacbf9& */ "./resources/js/router/views/pages/directory.vue?vue&type=template&id=5aaacbf9&");
/* harmony import */ var _directory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directory.vue?vue&type=script&lang=js& */ "./resources/js/router/views/pages/directory.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _directory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _directory_vue_vue_type_template_id_5aaacbf9___WEBPACK_IMPORTED_MODULE_0__.render,
  _directory_vue_vue_type_template_id_5aaacbf9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/pages/directory.vue"
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

/***/ "./resources/js/router/views/pages/directory.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/router/views/pages/directory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_directory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./directory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/directory.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_directory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/pages/directory.vue?vue&type=template&id=5aaacbf9&":
/*!**************************************************************************************!*\
  !*** ./resources/js/router/views/pages/directory.vue?vue&type=template&id=5aaacbf9& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_directory_vue_vue_type_template_id_5aaacbf9___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_directory_vue_vue_type_template_id_5aaacbf9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_directory_vue_vue_type_template_id_5aaacbf9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./directory.vue?vue&type=template&id=5aaacbf9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/directory.vue?vue&type=template&id=5aaacbf9&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/directory.vue?vue&type=template&id=5aaacbf9&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/pages/directory.vue?vue&type=template&id=5aaacbf9& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-xl-4 col-md-6" }, [
          _c("div", { staticClass: "card directory-card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass:
                    "img-fluid img-thumbnail rounded-circle avatar-lg",
                  attrs: {
                    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body ml-3" }, [
                  _c(
                    "h5",
                    { staticClass: "text-primary font-size-18 mt-0 mb-1" },
                    [_vm._v("Jerome A. Hebert")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-size-12 mb-2" }, [
                    _vm._v("Creative Director")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v("Jerome@veltrix.com")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled social-links float-right" },
                  [
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-primary", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-facebook" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-info", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-twitter" })]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _c("b", [_vm._v("Intro :")]),
                _vm._v(
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...\n            "
                ),
                _c("a", { staticClass: "text-primary", attrs: { href: "#" } }, [
                  _vm._v("Read More")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-md-6" }, [
          _c("div", { staticClass: "card directory-card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass:
                    "img-fluid img-thumbnail rounded-circle avatar-lg",
                  attrs: {
                    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body ml-3" }, [
                  _c(
                    "h5",
                    { staticClass: "text-primary font-size-18 mt-0 mb-1" },
                    [_vm._v("Adam V. Acker")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-size-12 mb-2" }, [
                    _vm._v("Creative Director")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [_vm._v("Adam@veltrix.com")])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled social-links float-right" },
                  [
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-primary", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-facebook" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-info", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-twitter" })]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _c("b", [_vm._v("Intro :")]),
                _vm._v(
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...\n            "
                ),
                _c("a", { staticClass: "text-primary", attrs: { href: "#" } }, [
                  _vm._v("Read More")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-md-6" }, [
          _c("div", { staticClass: "card directory-card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass:
                    "img-fluid img-thumbnail rounded-circle avatar-lg",
                  attrs: {
                    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body ml-3" }, [
                  _c(
                    "h5",
                    { staticClass: "text-primary font-size-18 mt-0 mb-1" },
                    [_vm._v("Stanley M. Dyke")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-size-12 mb-2" }, [
                    _vm._v("Creative Director")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v("Stanley@veltrix.com")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled social-links float-right" },
                  [
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-primary", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-facebook" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-info", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-twitter" })]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _c("b", [_vm._v("Intro :")]),
                _vm._v(
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...\n            "
                ),
                _c("a", { staticClass: "text-primary", attrs: { href: "#" } }, [
                  _vm._v("Read More")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-md-6" }, [
          _c("div", { staticClass: "card directory-card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass:
                    "img-fluid img-thumbnail rounded-circle avatar-lg",
                  attrs: {
                    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-5.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body ml-3" }, [
                  _c(
                    "h5",
                    { staticClass: "text-primary font-size-18 mt-0 mb-1" },
                    [_vm._v("Ben J. Mathison")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-size-12 mb-2" }, [
                    _vm._v("Creative Director")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [_vm._v("Ben@veltrix.com")])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled social-links float-right" },
                  [
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-primary", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-facebook" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-info", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-twitter" })]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _c("b", [_vm._v("Intro :")]),
                _vm._v(
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...\n            "
                ),
                _c("a", { staticClass: "text-primary", attrs: { href: "#" } }, [
                  _vm._v("Read More")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-md-6" }, [
          _c("div", { staticClass: "card directory-card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass:
                    "img-fluid img-thumbnail rounded-circle avatar-lg",
                  attrs: {
                    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-6.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body ml-3" }, [
                  _c(
                    "h5",
                    { staticClass: "text-primary font-size-18 mt-0 mb-1" },
                    [_vm._v("John V. Bailey")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-size-12 mb-2" }, [
                    _vm._v("Creative Director")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [_vm._v("John@veltrix.com")])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled social-links float-right" },
                  [
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-primary", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-facebook" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-info", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-twitter" })]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _c("b", [_vm._v("Intro :")]),
                _vm._v(
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...\n            "
                ),
                _c("a", { staticClass: "text-primary", attrs: { href: "#" } }, [
                  _vm._v("Read More")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-md-6" }, [
          _c("div", { staticClass: "card directory-card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass:
                    "img-fluid img-thumbnail rounded-circle avatar-lg",
                  attrs: {
                    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-7.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body ml-3" }, [
                  _c(
                    "h5",
                    { staticClass: "text-primary font-size-18 mt-0 mb-1" },
                    [_vm._v("Antonio J. Thomas")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-size-12 mb-2" }, [
                    _vm._v("Creative Director")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v("Antonio@veltrix.com")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled social-links float-right" },
                  [
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-primary", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-facebook" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-info", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-twitter" })]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _c("b", [_vm._v("Intro :")]),
                _vm._v(
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...\n            "
                ),
                _c("a", { staticClass: "text-primary", attrs: { href: "#" } }, [
                  _vm._v("Read More")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-md-6" }, [
          _c("div", { staticClass: "card directory-card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass:
                    "img-fluid img-thumbnail rounded-circle avatar-lg",
                  attrs: {
                    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-8.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body ml-3" }, [
                  _c(
                    "h5",
                    { staticClass: "text-primary font-size-18 mt-0 mb-1" },
                    [_vm._v("Jerome A. Hebert")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-size-12 mb-2" }, [
                    _vm._v("Creative Director")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v("Jerome@veltrix.com")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled social-links float-right" },
                  [
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-primary", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-facebook" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-info", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-twitter" })]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _c("b", [_vm._v("Intro :")]),
                _vm._v(
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...\n            "
                ),
                _c("a", { staticClass: "text-primary", attrs: { href: "#" } }, [
                  _vm._v("Read More")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-md-6" }, [
          _c("div", { staticClass: "card directory-card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass:
                    "img-fluid img-thumbnail rounded-circle avatar-lg",
                  attrs: {
                    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-9.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body ml-3" }, [
                  _c(
                    "h5",
                    { staticClass: "text-primary font-size-18 mt-0 mb-1" },
                    [_vm._v("Adam V. Acker")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-size-12 mb-2" }, [
                    _vm._v("Creative Director")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [_vm._v("Adam@veltrix.com")])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled social-links float-right" },
                  [
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-primary", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-facebook" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-info", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-twitter" })]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _c("b", [_vm._v("Intro :")]),
                _vm._v(
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...\n            "
                ),
                _c("a", { staticClass: "text-primary", attrs: { href: "#" } }, [
                  _vm._v("Read More")
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4 col-md-6" }, [
          _c("div", { staticClass: "card directory-card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "media" }, [
                _c("img", {
                  staticClass:
                    "img-fluid img-thumbnail rounded-circle avatar-lg",
                  attrs: {
                    src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-10.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                    alt: ""
                  }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "media-body ml-3" }, [
                  _c(
                    "h5",
                    { staticClass: "text-primary font--size18 mt-0 mb-1" },
                    [_vm._v("Stanley M. Dyke")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "font-size-12 mb-2" }, [
                    _vm._v("Creative Director")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "mb-0" }, [
                    _vm._v("Stanley@veltrix.com")
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "list-unstyled social-links float-right" },
                  [
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-primary", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-facebook" })]
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "a",
                        { staticClass: "btn-info", attrs: { href: "#" } },
                        [_c("i", { staticClass: "mdi mdi-twitter" })]
                      )
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _c("b", [_vm._v("Intro :")]),
                _vm._v(
                  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis atque corrupti quos dolores et...\n            "
                ),
                _c("a", { staticClass: "text-primary", attrs: { href: "#" } }, [
                  _vm._v("Read More")
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