(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_ui_typography_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/typography.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/typography.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Typography component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Typography",
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
      title: "Typography",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "UI Elements",
        href: "/"
      }, {
        text: "Typography",
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

/***/ "./resources/js/router/views/ui/typography.vue":
/*!*****************************************************!*\
  !*** ./resources/js/router/views/ui/typography.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typography_vue_vue_type_template_id_d36a1d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typography.vue?vue&type=template&id=d36a1d3e& */ "./resources/js/router/views/ui/typography.vue?vue&type=template&id=d36a1d3e&");
/* harmony import */ var _typography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typography.vue?vue&type=script&lang=js& */ "./resources/js/router/views/ui/typography.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _typography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _typography_vue_vue_type_template_id_d36a1d3e___WEBPACK_IMPORTED_MODULE_0__.render,
  _typography_vue_vue_type_template_id_d36a1d3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/ui/typography.vue"
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

/***/ "./resources/js/router/views/ui/typography.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/router/views/ui/typography.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typography.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/typography.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typography_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/ui/typography.vue?vue&type=template&id=d36a1d3e&":
/*!************************************************************************************!*\
  !*** ./resources/js/router/views/ui/typography.vue?vue&type=template&id=d36a1d3e& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_typography_vue_vue_type_template_id_d36a1d3e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_typography_vue_vue_type_template_id_d36a1d3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_typography_vue_vue_type_template_id_d36a1d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typography.vue?vue&type=template&id=d36a1d3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/typography.vue?vue&type=template&id=d36a1d3e&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/typography.vue?vue&type=template&id=d36a1d3e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/typography.vue?vue&type=template&id=d36a1d3e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Headings")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            All HTML headings,\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("<h1>")
                ]),
                _vm._v(" through\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("<h6>")
                ]),
                _vm._v(", are available.\n          ")
              ]),
              _vm._v(" "),
              _c("h1", [
                _vm._v("\n            h1. Bootstrap heading\n            "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Semibold 2.5rem (40px)")
                ])
              ]),
              _vm._v(" "),
              _c("h2", [
                _vm._v("\n            h2. Bootstrap heading\n            "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Semibold 2rem (32px)")
                ])
              ]),
              _vm._v(" "),
              _c("h3", [
                _vm._v("\n            h3. Bootstrap heading\n            "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Semibold 1.75rem (28px)")
                ])
              ]),
              _vm._v(" "),
              _c("h4", [
                _vm._v("\n            h4. Bootstrap heading\n            "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Semibold 1.5rem (24px)")
                ])
              ]),
              _vm._v(" "),
              _c("h5", [
                _vm._v("\n            h5. Bootstrap heading\n            "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Semibold 1.25rem (20px)")
                ])
              ]),
              _vm._v(" "),
              _c("h6", [
                _vm._v("\n            h6. Bootstrap heading\n            "),
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v("Semibold 1rem (16px)")
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Inline text elements")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("Styling for common inline HTML5 elements.")
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v(
                  "\n            You can use the mark tag to\n            "
                ),
                _c("mark", [_vm._v("highlight")]),
                _vm._v(" text.\n          ")
              ]),
              _vm._v(" "),
              _c("p", [
                _c("del", [
                  _vm._v(
                    "This line of text is meant to be treated as deleted text."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("s", [
                  _vm._v(
                    "This line of text is meant to be treated as no longer accurate."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("ins", [
                  _vm._v(
                    "This line of text is meant to be treated as an addition to the document."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("u", [_vm._v("This line of text will render as underlined")])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("small", [
                  _vm._v(
                    "This line of text is meant to be treated as fine print."
                  )
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _c("strong", [_vm._v("This line rendered as bold text.")])
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "mb-0" }, [
                _c("em", [_vm._v("This line rendered as italicized text.")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Unstyled List")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Remove the default\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("list-style")
                ]),
                _vm._v(
                  " and left margin on list\n            items (immediate children only).\n            "
                ),
                _c("strong", [
                  _vm._v(
                    "\n              This only applies to immediate\n              children list items\n            "
                  )
                ]),
                _vm._v(
                  ", meaning you will need to add the class\n            for any nested lists as well.\n          "
                )
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "list-unstyled mb-0" }, [
                _c("li", [_vm._v("Integer molestie lorem at massa")]),
                _vm._v(" "),
                _c("li", [
                  _vm._v(
                    "\n              Nulla volutpat aliquam velit\n              "
                  ),
                  _c("ul", [
                    _c("li", [_vm._v("Phasellus iaculis neque")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Purus sodales ultricies")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Vestibulum laoreet porttitor sem")])
                  ])
                ]),
                _vm._v(" "),
                _c("li", [_vm._v("Faucibus porta lacus fringilla vel")])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Display headings")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "Traditional heading elements are designed to work best in the meat of your page content."
                )
              ]),
              _vm._v(" "),
              _c("h1", { staticClass: "display-1" }, [_vm._v("Display 1")]),
              _vm._v(" "),
              _c("h1", { staticClass: "display-2" }, [_vm._v("Display 2")]),
              _vm._v(" "),
              _c("h1", { staticClass: "display-3" }, [_vm._v("Display 3")]),
              _vm._v(" "),
              _c("h1", { staticClass: "display-4" }, [_vm._v("Display 4")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Blockquotes")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            For quoting blocks of content from\n            another source within your document. Wrap\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v(
                    '\n              <blockquote\n              class="blockquote">\n            '
                  )
                ]),
                _vm._v(" around any\n            "),
                _c("abbr", { attrs: { title: "HyperText Markup Language" } }, [
                  _vm._v("HTML")
                ]),
                _vm._v(" as the quote.\n          ")
              ]),
              _vm._v(" "),
              _c("blockquote", { staticClass: "blockquote font-16" }, [
                _c("p", [
                  _vm._v(
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                  )
                ]),
                _vm._v(" "),
                _c("footer", { staticClass: "blockquote-footer" }, [
                  _vm._v("\n              Someone famous in\n              "),
                  _c("cite", { attrs: { title: "Source Title" } }, [
                    _vm._v("Source Title")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "blockquote",
                { staticClass: "blockquote blockquote-reverse font-16 mb-0" },
                [
                  _c("p", [
                    _vm._v(
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante."
                    )
                  ]),
                  _vm._v(" "),
                  _c("footer", { staticClass: "blockquote-footer" }, [
                    _vm._v("\n              Someone famous in\n              "),
                    _c("cite", { attrs: { title: "Source Title" } }, [
                      _vm._v("Source Title")
                    ])
                  ])
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Inline List")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Remove a list’s bullets and apply some\n            light\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v("margin")
                ]),
                _vm._v(
                  " with a combination\n            of two classes,\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v(".list-inline")
                ]),
                _vm._v(" and\n            "),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v(".list-inline-item")
                ]),
                _vm._v(".\n          ")
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "list-inline" }, [
                _c("li", { staticClass: "list-inline-item" }, [
                  _vm._v("Lorem ipsum")
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "list-inline-item" }, [
                  _vm._v("Phasellus iaculis")
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "list-inline-item" }, [
                  _vm._v("Nulla volutpat")
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Description list alignment")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Align terms and descriptions\n            horizontally by using our grid system’s predefined classes (or semantic\n            mixins). For longer terms, you can optionally add a\n            "
                ),
                _c("code", { staticClass: "highlighter-rouge" }, [
                  _vm._v(".text-truncate")
                ]),
                _vm._v(
                  " class to\n            truncate the text with an ellipsis.\n          "
                )
              ]),
              _vm._v(" "),
              _c("dl", { staticClass: "row mb-0" }, [
                _c("dt", { staticClass: "col-sm-3" }, [
                  _vm._v("Description lists")
                ]),
                _vm._v(" "),
                _c("dd", { staticClass: "col-sm-9" }, [
                  _vm._v("A description list is perfect for defining terms.")
                ]),
                _vm._v(" "),
                _c("dt", { staticClass: "col-sm-3" }, [_vm._v("Euismod")]),
                _vm._v(" "),
                _c("dd", { staticClass: "col-sm-9" }, [
                  _vm._v(
                    "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit."
                  )
                ]),
                _vm._v(" "),
                _c("dd", { staticClass: "col-sm-9 offset-sm-3" }, [
                  _vm._v("Donec id elit non mi porta gravida at eget metus.")
                ]),
                _vm._v(" "),
                _c("dt", { staticClass: "col-sm-3" }, [
                  _vm._v("Malesuada porta")
                ]),
                _vm._v(" "),
                _c("dd", { staticClass: "col-sm-9" }, [
                  _vm._v("Etiam porta sem malesuada magna mollis euismod.")
                ]),
                _vm._v(" "),
                _c("dt", { staticClass: "col-sm-3 text-truncate" }, [
                  _vm._v("Truncated term is truncated")
                ]),
                _vm._v(" "),
                _c("dd", { staticClass: "col-sm-9" }, [
                  _vm._v(
                    "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."
                  )
                ]),
                _vm._v(" "),
                _c("dt", { staticClass: "col-sm-3" }, [_vm._v("Nesting")]),
                _vm._v(" "),
                _c("dd", { staticClass: "col-sm-9 mb-0" }, [
                  _c("dl", { staticClass: "row mb-0" }, [
                    _c("dt", { staticClass: "col-sm-4" }, [
                      _vm._v("Nested definition list")
                    ]),
                    _vm._v(" "),
                    _c("dd", { staticClass: "col-sm-8" }, [
                      _vm._v(
                        "Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc."
                      )
                    ])
                  ])
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