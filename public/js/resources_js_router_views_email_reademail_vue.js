(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_email_reademail_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/reademail.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/reademail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Read-email component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Email Read",
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
      title: "Email Read",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Email",
        href: "/"
      }, {
        text: "Email Read",
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

/***/ "./resources/js/router/views/email/reademail.vue":
/*!*******************************************************!*\
  !*** ./resources/js/router/views/email/reademail.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reademail_vue_vue_type_template_id_5a1c9aaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reademail.vue?vue&type=template&id=5a1c9aaa& */ "./resources/js/router/views/email/reademail.vue?vue&type=template&id=5a1c9aaa&");
/* harmony import */ var _reademail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reademail.vue?vue&type=script&lang=js& */ "./resources/js/router/views/email/reademail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _reademail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _reademail_vue_vue_type_template_id_5a1c9aaa___WEBPACK_IMPORTED_MODULE_0__.render,
  _reademail_vue_vue_type_template_id_5a1c9aaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/email/reademail.vue"
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

/***/ "./resources/js/router/views/email/reademail.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/router/views/email/reademail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reademail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reademail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/reademail.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reademail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/email/reademail.vue?vue&type=template&id=5a1c9aaa&":
/*!**************************************************************************************!*\
  !*** ./resources/js/router/views/email/reademail.vue?vue&type=template&id=5a1c9aaa& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reademail_vue_vue_type_template_id_5a1c9aaa___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reademail_vue_vue_type_template_id_5a1c9aaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_reademail_vue_vue_type_template_id_5a1c9aaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./reademail.vue?vue&type=template&id=5a1c9aaa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/reademail.vue?vue&type=template&id=5a1c9aaa&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/reademail.vue?vue&type=template&id=5a1c9aaa&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/reademail.vue?vue&type=template&id=5a1c9aaa& ***!
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
        _c("div", { staticClass: "col-12" }, [
          _c(
            "div",
            { staticClass: "email-leftbar card" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-danger rounded btn-custom btn-block",
                  attrs: { tag: "a", to: "/email/compose" }
                },
                [_vm._v("Compose")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mail-list mt-4" }, [
                _c(
                  "a",
                  {
                    staticClass: "active",
                    attrs: { href: "javascript: void(0);" }
                  },
                  [
                    _vm._v("\n            Inbox\n            "),
                    _c("span", { staticClass: "ml-1" }, [_vm._v("(18)")])
                  ]
                ),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Starred")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Important")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Draft")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Sent Mail")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Trash")
                ])
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "mt-4" }, [_vm._v("Labels")]),
              _vm._v(" "),
              _c("div", { staticClass: "mail-list mt-4" }, [
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _c("span", {
                    staticClass:
                      "mdi mdi-arrow-right-drop-circle text-info float-right"
                  }),
                  _vm._v("Theme Support\n          ")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _c("span", {
                    staticClass:
                      "mdi mdi-arrow-right-drop-circle text-warning float-right"
                  }),
                  _vm._v("Freelance\n          ")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _c("span", {
                    staticClass:
                      "mdi mdi-arrow-right-drop-circle text-primary float-right"
                  }),
                  _vm._v("Social\n          ")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _c("span", {
                    staticClass:
                      "mdi mdi-arrow-right-drop-circle text-danger float-right"
                  }),
                  _vm._v("Friends\n          ")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _c("span", {
                    staticClass:
                      "mdi mdi-arrow-right-drop-circle text-success float-right"
                  }),
                  _vm._v("Family\n          ")
                ])
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "mt-4" }, [_vm._v("Chat")]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-4" }, [
                _c(
                  "a",
                  {
                    staticClass: "media",
                    attrs: { href: "javascript: void(0);" }
                  },
                  [
                    _c("img", {
                      staticClass: "d-flex mr-3 rounded-circle",
                      attrs: {
                        src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                        alt: "Generic placeholder image",
                        height: "36"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body chat-user-box" }, [
                      _c("p", { staticClass: "user-title m-0" }, [
                        _vm._v("Scott Median")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [_vm._v("Hello")])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "media",
                    attrs: { href: "javascript: void(0);" }
                  },
                  [
                    _c("img", {
                      staticClass: "d-flex mr-3 rounded-circle",
                      attrs: {
                        src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                        alt: "Generic placeholder image",
                        height: "36"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body chat-user-box" }, [
                      _c("p", { staticClass: "user-title m-0" }, [
                        _vm._v("Julian Rosa")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("What about our next..")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "media",
                    attrs: { href: "javascript: void(0);" }
                  },
                  [
                    _c("img", {
                      staticClass: "d-flex mr-3 rounded-circle",
                      attrs: {
                        src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                        alt: "Generic placeholder image",
                        height: "36"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body chat-user-box" }, [
                      _c("p", { staticClass: "user-title m-0" }, [
                        _vm._v("David Medina")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Yeah everything is fine")
                      ])
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "media",
                    attrs: { href: "javascript: void(0);" }
                  },
                  [
                    _c("img", {
                      staticClass: "d-flex mr-3 rounded-circle",
                      attrs: {
                        src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-6.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                        alt: "Generic placeholder image",
                        height: "36"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body chat-user-box" }, [
                      _c("p", { staticClass: "user-title m-0" }, [
                        _vm._v("Jay Baker")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Wow that's great")
                      ])
                    ])
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "email-rightbar mb-3" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "btn-toolbar p-3" },
                [
                  _c("div", { staticClass: "btn-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" }
                      },
                      [_c("i", { staticClass: "fa fa-inbox" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" }
                      },
                      [_c("i", { staticClass: "fa fa-exclamation-circle" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" }
                      },
                      [_c("i", { staticClass: "far fa-trash-alt" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "btn-group ml-1 mo-mb-2",
                      attrs: { variant: "primary" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _c("i", { staticClass: "fa fa-folder" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "mdi mdi-chevron-down ml-1" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Updates")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Social")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Team Manage")]
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "btn-group ml-1 mo-mb-2",
                      attrs: { variant: "primary" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _c("i", { staticClass: "fa fa-tag" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "mdi mdi-chevron-down ml-1" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Updates")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Social")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Team Manage")]
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "btn-group ml-1 mo-mb-2",
                      attrs: { variant: "primary" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _vm._v("\n                More\n                "),
                        _c("i", { staticClass: "mdi mdi-chevron-down" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { href: "javascript: void(0);" } },
                        [_vm._v("Mark as Unread")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { href: "javascript: void(0);" } },
                        [_vm._v("Mark as Important")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { href: "javascript: void(0);" } },
                        [_vm._v("Add to Tasks")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { href: "javascript: void(0);" } },
                        [_vm._v("Add Star")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { href: "javascript: void(0);" } },
                        [_vm._v("Mute")]
                      )
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _c("div", { staticClass: "media mb-4" }, [
                    _c("img", {
                      staticClass: "d-flex mr-3 rounded-circle avatar-sm",
                      attrs: {
                        src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/users/user-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                        alt: "Generic placeholder image"
                      }
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "media-body" }, [
                      _c("h4", { staticClass: "font-size-15 m-0" }, [
                        _vm._v("Humberto D. Champion")
                      ]),
                      _vm._v(" "),
                      _c("small", { staticClass: "text-muted" }, [
                        _vm._v("support@domain.com")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("h4", { staticClass: "mt-0 font-size-16" }, [
                    _vm._v("This Week's Top Stories")
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Dear Lorem Ipsum,")]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n              Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. Quisque arcu leo, facilisis in fringilla id, luctus in tortor. Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. In at felis ac velit maximus\n              convallis.\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [
                    _vm._v(
                      "\n              Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia\n              lacus, vel tincidunt mi nibh sit amet lorem.\n            "
                    )
                  ]),
                  _vm._v(" "),
                  _c("p", [_vm._v("Sincerly,")]),
                  _vm._v(" "),
                  _c("hr"),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "col-xl-2 col-6" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("img", {
                          staticClass: "card-img-top img-fluid",
                          attrs: {
                            src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                            alt: "Card image cap"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "py-2 text-center" }, [
                          _c(
                            "a",
                            {
                              staticClass: "font-weight-medium",
                              attrs: { href: "" }
                            },
                            [_vm._v("Download")]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-xl-2 col-6" }, [
                      _c("div", { staticClass: "card" }, [
                        _c("img", {
                          staticClass: "card-img-top img-fluid",
                          attrs: {
                            src: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/small/img-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
                            alt: "Card image cap"
                          }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "py-2 text-center" }, [
                          _c(
                            "a",
                            {
                              staticClass: "font-weight-medium",
                              attrs: { href: "" }
                            },
                            [_vm._v("Download")]
                          )
                        ])
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-secondary mt-4",
                      attrs: { tag: "a", to: "/email/compose" }
                    },
                    [
                      _c("i", { staticClass: "mdi mdi-reply" }),
                      _vm._v(" Reply\n            ")
                    ]
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