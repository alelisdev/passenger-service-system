(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_ui_tabs_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/tabs.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/tabs.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Tabs & accordions component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Tabs & Accordions",
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
      title: "Tabs & accordions",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "UI Elements",
        href: "/"
      }, {
        text: "Tabs & accordions",
        active: true
      }],
      text: "\n         Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.\n        ",
      content: "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit."
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

/***/ "./resources/js/router/views/ui/tabs.vue":
/*!***********************************************!*\
  !*** ./resources/js/router/views/ui/tabs.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_vue_vue_type_template_id_1d6c4bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.vue?vue&type=template&id=1d6c4bb0& */ "./resources/js/router/views/ui/tabs.vue?vue&type=template&id=1d6c4bb0&");
/* harmony import */ var _tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.vue?vue&type=script&lang=js& */ "./resources/js/router/views/ui/tabs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _tabs_vue_vue_type_template_id_1d6c4bb0___WEBPACK_IMPORTED_MODULE_0__.render,
  _tabs_vue_vue_type_template_id_1d6c4bb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/ui/tabs.vue"
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

/***/ "./resources/js/router/views/ui/tabs.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/router/views/ui/tabs.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tabs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/tabs.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/ui/tabs.vue?vue&type=template&id=1d6c4bb0&":
/*!******************************************************************************!*\
  !*** ./resources/js/router/views/ui/tabs.vue?vue&type=template&id=1d6c4bb0& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_template_id_1d6c4bb0___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_template_id_1d6c4bb0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tabs_vue_vue_type_template_id_1d6c4bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./tabs.vue?vue&type=template&id=1d6c4bb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/tabs.vue?vue&type=template&id=1d6c4bb0&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/tabs.vue?vue&type=template&id=1d6c4bb0&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/tabs.vue?vue&type=template&id=1d6c4bb0& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v("Default Tabs")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v(
                    "\n            Use the tab JavaScript plugin—include\n            it individually or through the compiled\n            "
                  ),
                  _c("code", { staticClass: "highlighter-rouge" }, [
                    _vm._v("bootstrap.js")
                  ]),
                  _vm._v(
                    "\n            file—to extend our navigational tabs and pills to create tabbable panes\n            of local content, even via dropdown menus.\n          "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-tabs",
                  { attrs: { "content-class": "p-3" } },
                  [
                    _c(
                      "b-tab",
                      {
                        staticClass: "border-0",
                        attrs: { active: "" },
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "fas fa-home" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Home")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.text))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "far fa-user" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Profile")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.content))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "far fa-envelope" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Messages")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.text))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "fas fa-cog" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Settings")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.content))
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
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v("Justify Tabs")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v(
                    "\n            Use the tab JavaScript plugin—include\n            it individually or through the compiled\n            "
                  ),
                  _c("code", { staticClass: "highlighter-rouge" }, [
                    _vm._v("bootstrap.js")
                  ]),
                  _vm._v(
                    "\n            file—to extend our navigational tabs and pills to create tabbable panes\n            of local content, even via dropdown menus.\n          "
                  )
                ]),
                _vm._v(" "),
                _c(
                  "b-tabs",
                  {
                    staticClass: "navtab-bg",
                    attrs: { justified: "", pills: "", "content-class": "p-3" }
                  },
                  [
                    _c(
                      "b-tab",
                      {
                        attrs: { active: "" },
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "fas fa-home" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Home")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.text))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "far fa-user" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Profile")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.content))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "far fa-envelope" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Messages")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.text))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "fas fa-cog" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Settings")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.content))
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
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v("Custom Tabs")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v("Example of custom tabs")
                ]),
                _vm._v(" "),
                _c(
                  "b-tabs",
                  {
                    attrs: {
                      "nav-class": "nav-tabs-custom",
                      "content-class": "p-3"
                    }
                  },
                  [
                    _c(
                      "b-tab",
                      {
                        attrs: { active: "" },
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "fas fa-home" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Home")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.text))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "far fa-user" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Profile")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.content))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "far fa-envelope" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Messages")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.text))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "fas fa-cog" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Settings")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.content))
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
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v("Custom Tabs Justified")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v("Example of custom tabs")
                ]),
                _vm._v(" "),
                _c(
                  "b-tabs",
                  {
                    attrs: {
                      justified: "",
                      "nav-class": "nav-tabs-custom",
                      "content-class": "p-3"
                    }
                  },
                  [
                    _c(
                      "b-tab",
                      {
                        attrs: { active: "" },
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "fas fa-home" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Home")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.text))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "far fa-user" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Profile")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.content))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "far fa-envelope" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Messages")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.text))
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-tab",
                      {
                        scopedSlots: _vm._u([
                          {
                            key: "title",
                            fn: function() {
                              return [
                                _c(
                                  "span",
                                  { staticClass: "d-inline-block d-sm-none" },
                                  [_c("i", { staticClass: "fas fa-cog" })]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "d-none d-sm-inline-block" },
                                  [_vm._v("Settings")]
                                )
                              ]
                            },
                            proxy: true
                          }
                        ])
                      },
                      [
                        _vm._v(" "),
                        _c("p", { staticClass: "mb-0" }, [
                          _vm._v(_vm._s(_vm.content))
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
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v("Default Collapse")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v(
                    "\n            You can use a link with the\n            "
                  ),
                  _c("code", { staticClass: "highlighter-rouge" }, [
                    _vm._v("href")
                  ]),
                  _vm._v(
                    "\n            attribute, or a button with the\n            "
                  ),
                  _c("code", { staticClass: "highlighter-rouge" }, [
                    _vm._v("data-target")
                  ]),
                  _vm._v(
                    "\n            attribute. In both cases, the\n            "
                  ),
                  _c("code", { staticClass: "highlighter-rouge" }, [
                    _vm._v('data-toggle="collapse"')
                  ]),
                  _vm._v("\n            is required.\n          ")
                ]),
                _vm._v(" "),
                _c(
                  "p",
                  [
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle.collapse",
                            modifiers: { collapse: true }
                          }
                        ],
                        staticClass: "m-1",
                        attrs: { variant: "primary" }
                      },
                      [_vm._v("Link with href")]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle",
                            value: "collapse",
                            expression: "'collapse'"
                          }
                        ],
                        staticClass: "m-1",
                        attrs: { variant: "primary" }
                      },
                      [_vm._v("Button with data-target")]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-collapse",
                  {
                    staticClass: "mt-1",
                    attrs: { id: "collapse", visible: "" }
                  },
                  [
                    _c("b-card", [
                      _vm._v(
                        "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
                      )
                    ])
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
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Accordion example")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "Extend the default collapse behavior to create an accordion."
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { role: "tablist" } },
                [
                  _c(
                    "b-card",
                    { staticClass: "mb-1", attrs: { "no-body": "" } },
                    [
                      _c(
                        "b-card-header",
                        { attrs: { "header-tag": "header", role: "tab" } },
                        [
                          _c("h6", { staticClass: "m-0 font-14" }, [
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
                              [_vm._v("Collapsible Group Item #1")]
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-collapse",
                        {
                          attrs: {
                            id: "accordion-1",
                            visible: "",
                            accordion: "my-accordion",
                            role: "tabpanel"
                          }
                        },
                        [
                          _c(
                            "b-card-body",
                            [_c("b-card-text", [_vm._v(_vm._s(_vm.text))])],
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
                    { staticClass: "mb-1", attrs: { "no-body": "" } },
                    [
                      _c(
                        "b-card-header",
                        { attrs: { "header-tag": "header", role: "tab" } },
                        [
                          _c("h6", { staticClass: "m-0 font-14" }, [
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
                              [_vm._v("Collapsible Group Item #2")]
                            )
                          ])
                        ]
                      ),
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
                            [_c("b-card-text", [_vm._v(_vm._s(_vm.text))])],
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
                    { staticClass: "mb-1", attrs: { "no-body": "" } },
                    [
                      _c(
                        "b-card-header",
                        { attrs: { "header-tag": "header", role: "tab" } },
                        [
                          _c("h6", { staticClass: "m-0 font-14" }, [
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
                              [_vm._v("Collapsible Group Item #3")]
                            )
                          ])
                        ]
                      ),
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
                            [_c("b-card-text", [_vm._v(_vm._s(_vm.text))])],
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);