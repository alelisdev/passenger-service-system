(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_forms_elements_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/elements.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/elements.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Form Elements component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Form Elements",
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
      title: "Form Elements",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Forms",
        href: "/"
      }, {
        text: "Form Elements",
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

/***/ "./resources/js/router/views/forms/elements.vue":
/*!******************************************************!*\
  !*** ./resources/js/router/views/forms/elements.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _elements_vue_vue_type_template_id_35155190___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./elements.vue?vue&type=template&id=35155190& */ "./resources/js/router/views/forms/elements.vue?vue&type=template&id=35155190&");
/* harmony import */ var _elements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.vue?vue&type=script&lang=js& */ "./resources/js/router/views/forms/elements.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _elements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _elements_vue_vue_type_template_id_35155190___WEBPACK_IMPORTED_MODULE_0__.render,
  _elements_vue_vue_type_template_id_35155190___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/forms/elements.vue"
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

/***/ "./resources/js/router/views/forms/elements.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/router/views/forms/elements.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_elements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./elements.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/elements.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_elements_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/forms/elements.vue?vue&type=template&id=35155190&":
/*!*************************************************************************************!*\
  !*** ./resources/js/router/views/forms/elements.vue?vue&type=template&id=35155190& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_elements_vue_vue_type_template_id_35155190___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_elements_vue_vue_type_template_id_35155190___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_elements_vue_vue_type_template_id_35155190___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./elements.vue?vue&type=template&id=35155190& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/elements.vue?vue&type=template&id=35155190&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/elements.vue?vue&type=template&id=35155190&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/elements.vue?vue&type=template&id=35155190& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title" }, [
                  _vm._v("Textual inputs")
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-title-desc" }, [
                  _vm._v("\n            Here are examples of\n            "),
                  _c("code", { staticClass: "highlighter-rouge" }, [
                    _vm._v(".form-control")
                  ]),
                  _vm._v(
                    " applied to each\n            textual HTML5\n            "
                  ),
                  _c("code", { staticClass: "highlighter-rouge" }, [
                    _vm._v("<input>")
                  ]),
                  _vm._v(" "),
                  _c("code", { staticClass: "highlighter-rouge" }, [
                    _vm._v("type")
                  ]),
                  _vm._v(".\n          ")
                ]),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Text",
                      "label-for": "example-text-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        id: "example-text-input",
                        value: "Artisanal kale"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Search",
                      "label-for": "example-search-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "search",
                        id: "example-search-input",
                        value: "How do I shoot web"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Email",
                      "label-for": "example-email-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "email",
                        id: "example-email-input",
                        value: "bootstrap@example.com"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "URL",
                      "label-for": "example-url-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "url",
                        id: "example-url-input",
                        value: "https://getbootstrap.com"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "URL",
                      "label-for": "example-tel-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "tel",
                        id: "example-tel-input",
                        value: "1-(555)-555-5555"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Password",
                      "label-for": "example-password-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "password",
                        id: "example-password-input",
                        value: "hunter2"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Number",
                      "label-for": "example-number-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "number",
                        id: "example-number-input",
                        value: "42"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Date and time",
                      "label-for": "example-datetime-local-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "datetime-local",
                        id: "example-datetime-local-input",
                        value: "2011-08-19T13:45:00"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Date",
                      "label-for": "example-date-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "date",
                        id: "example-date-input",
                        value: "2011-08-19"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Month",
                      "label-for": "example-month-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "month",
                        id: "example-month-input",
                        value: "2011-08"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Week",
                      "label-for": "example-week-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "week",
                        id: "example-week-input",
                        value: "2011-08"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Time",
                      "label-for": "example-time-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "time",
                        id: "example-time-input",
                        value: "13:45:00"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Color",
                      "label-for": "example-color-input"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "color",
                        id: "example-color-input",
                        value: "#02a499"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                    _vm._v("Select")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-10" }, [
                    _c("select", { staticClass: "form-control" }, [
                      _c("option", [_vm._v("Select")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("Large select")]),
                      _vm._v(" "),
                      _c("option", [_vm._v("Small select")])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row" }, [
                  _c("label", { staticClass: "col-sm-2 col-form-label" }, [
                    _vm._v("Custom Select")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-10" }, [
                    _c("select", { staticClass: "custom-select" }, [
                      _c("option", { attrs: { selected: "" } }, [
                        _vm._v("Open this select menu")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "1" } }, [_vm._v("One")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "2" } }, [_vm._v("Two")]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "3" } }, [_vm._v("Three")])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Large",
                      "label-for": "example-text-input-lg"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "text",
                        size: "lg",
                        id: "example-text-input-lg",
                        placeholder: ".form-control-lg"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-form-group",
                  {
                    attrs: {
                      "label-cols": "10",
                      "label-cols-sm": "2",
                      label: "Small",
                      "label-for": "example-text-input-sm"
                    }
                  },
                  [
                    _c("b-form-input", {
                      attrs: {
                        type: "text",
                        size: "sm",
                        id: "example-text-input-sm",
                        placeholder: ".form-control-sm"
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