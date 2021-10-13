(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_forms_repeater_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/repeater.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/repeater.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Form Repeater component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Form Repeater",
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
      title: "Form Repeater",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Forms",
        href: "/"
      }, {
        text: "Form Repeater",
        active: true
      }],
      fields: [{
        id: 1
      }],
      phoneData: [{
        id: 1
      }]
    };
  },
  methods: {
    /**
     * Push the row in form
     */
    AddformData: function AddformData() {
      this.fields.push({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    },

    /**
     * Delete the row
     */
    deleteRow: function deleteRow(index) {
      if (confirm("Are you sure you want to delete this element?")) this.fields.splice(index, 1);
    },

    /**
     * Add the phone number in form
     */
    AddPhoneNo: function AddPhoneNo() {
      this.phoneData.push({
        phone: ""
      });
    },

    /**
     * Delete the row from form
     */
    deletePhone: function deletePhone(index) {
      if (confirm("Are you sure you want to delete this element?")) {
        this.phoneData.splice(index, 1);
      }
    }
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

/***/ "./resources/js/router/views/forms/repeater.vue":
/*!******************************************************!*\
  !*** ./resources/js/router/views/forms/repeater.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repeater_vue_vue_type_template_id_2fcfc0be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repeater.vue?vue&type=template&id=2fcfc0be& */ "./resources/js/router/views/forms/repeater.vue?vue&type=template&id=2fcfc0be&");
/* harmony import */ var _repeater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repeater.vue?vue&type=script&lang=js& */ "./resources/js/router/views/forms/repeater.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _repeater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _repeater_vue_vue_type_template_id_2fcfc0be___WEBPACK_IMPORTED_MODULE_0__.render,
  _repeater_vue_vue_type_template_id_2fcfc0be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/forms/repeater.vue"
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

/***/ "./resources/js/router/views/forms/repeater.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/router/views/forms/repeater.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repeater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./repeater.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/repeater.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_repeater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/forms/repeater.vue?vue&type=template&id=2fcfc0be&":
/*!*************************************************************************************!*\
  !*** ./resources/js/router/views/forms/repeater.vue?vue&type=template&id=2fcfc0be& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repeater_vue_vue_type_template_id_2fcfc0be___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repeater_vue_vue_type_template_id_2fcfc0be___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_repeater_vue_vue_type_template_id_2fcfc0be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./repeater.vue?vue&type=template&id=2fcfc0be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/repeater.vue?vue&type=template&id=2fcfc0be&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/repeater.vue?vue&type=template&id=2fcfc0be&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/forms/repeater.vue?vue&type=template&id=2fcfc0be& ***!
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
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Example")]),
              _vm._v(" "),
              _c(
                "form",
                {
                  staticClass: "repeater",
                  attrs: { enctype: "multipart/form-data" }
                },
                [
                  _c(
                    "div",
                    { attrs: { "data-repeater-list": "group-a" } },
                    _vm._l(_vm.fields, function(field, index) {
                      return _c("div", { key: field.id, staticClass: "row" }, [
                        _c("div", { staticClass: "form-group col-lg-2" }, [
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Name")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: field.name,
                                expression: "field.name"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "name",
                              name: "untyped-input"
                            },
                            domProps: { value: field.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(field, "name", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-lg-2" }, [
                          _c("label", { attrs: { for: "email" } }, [
                            _vm._v("Email")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: field.email,
                                expression: "field.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "email", id: "email" },
                            domProps: { value: field.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(field, "email", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-lg-2" }, [
                          _c("label", { attrs: { for: "subject" } }, [
                            _vm._v("Subject")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: field.subject,
                                expression: "field.subject"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", id: "subject" },
                            domProps: { value: field.subject },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(field, "subject", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-lg-2" }, [
                          _c("label", { attrs: { for: "resume" } }, [
                            _vm._v("Resume")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control-file",
                            attrs: { type: "file", id: "resume" }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-lg-2" }, [
                          _c("label", { attrs: { for: "message" } }, [
                            _vm._v("Message")
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: field.message,
                                expression: "field.message"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { id: "message" },
                            domProps: { value: field.message },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(field, "message", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "col-lg-2 align-self-center" },
                          [
                            _c("input", {
                              staticClass: "btn btn-primary btn-block",
                              attrs: { type: "button", value: "Delete" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteRow(index)
                                }
                              }
                            })
                          ]
                        )
                      ])
                    }),
                    0
                  ),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "btn btn-success mo-mt-2",
                    attrs: { type: "button", value: "Add" },
                    on: { click: _vm.AddformData }
                  })
                ]
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Nested")]),
              _vm._v(" "),
              _c("form", { staticClass: "outer-repeater" }, [
                _c(
                  "div",
                  {
                    staticClass: "outer",
                    attrs: { "data-repeater-list": "outer-group" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass: "outer",
                        attrs: { "data-repeater-item": "" }
                      },
                      [
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "formname" } }, [
                            _vm._v("Name :")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "text",
                              id: "formname",
                              placeholder: "Enter your Name..."
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "formemail" } }, [
                            _vm._v("Email :")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "form-control",
                            attrs: {
                              type: "email",
                              id: "formemail",
                              placeholder: "Enter your Email..."
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "inner-repeater mb-4" }, [
                          _c(
                            "div",
                            {
                              staticClass: "inner form-group",
                              attrs: { "data-repeater-list": "inner-group" }
                            },
                            [
                              _c("label", [_vm._v("Phone no :")]),
                              _vm._v(" "),
                              _vm._l(_vm.phoneData, function(data, index) {
                                return _c(
                                  "div",
                                  {
                                    key: data.id,
                                    staticClass: "inner mb-3 row"
                                  },
                                  [
                                    _c(
                                      "div",
                                      { staticClass: "col-md-10 col-8" },
                                      [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: data.phone,
                                              expression: "data.phone"
                                            }
                                          ],
                                          staticClass: "inner form-control",
                                          attrs: {
                                            type: "text",
                                            placeholder:
                                              "Enter your phone no..."
                                          },
                                          domProps: { value: data.phone },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                data,
                                                "phone",
                                                $event.target.value
                                              )
                                            }
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "col-md-2 col-4" },
                                      [
                                        _c("input", {
                                          staticClass:
                                            "btn btn-primary btn-block inner",
                                          attrs: {
                                            type: "button",
                                            value: "Delete"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.deletePhone(index)
                                            }
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("input", {
                            staticClass: "btn btn-success inner",
                            attrs: {
                              "data-repeater-create": "",
                              type: "button",
                              value: "Add Number"
                            },
                            on: { click: _vm.AddPhoneNo }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { staticClass: "d-block mb-3" }, [
                            _vm._v("Gender :")
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-radio custom-control-inline"
                            },
                            [
                              _c("input", {
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "customRadioInline1",
                                  name: "customRadioInline1"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "customRadioInline1" }
                                },
                                [_vm._v("Male")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "custom-control custom-radio custom-control-inline"
                            },
                            [
                              _c("input", {
                                staticClass: "custom-control-input",
                                attrs: {
                                  type: "radio",
                                  id: "customRadioInline2",
                                  name: "customRadioInline1"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "custom-control-label",
                                  attrs: { for: "customRadioInline2" }
                                },
                                [_vm._v("Female")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "formmessage" } }, [
                            _vm._v("Message :")
                          ]),
                          _vm._v(" "),
                          _c("textarea", {
                            staticClass: "form-control",
                            attrs: { id: "formmessage", rows: "3" }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-primary",
                            attrs: { type: "submit" }
                          },
                          [_vm._v("Submit")]
                        )
                      ]
                    )
                  ]
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