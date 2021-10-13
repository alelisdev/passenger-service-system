(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_tables_basic_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/basic.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/basic.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Basic-table component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Basic table",
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
      title: "Basic Tables",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Tables",
        href: "/"
      }, {
        text: "Basic",
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

/***/ "./resources/js/router/views/tables/basic.vue":
/*!****************************************************!*\
  !*** ./resources/js/router/views/tables/basic.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basic_vue_vue_type_template_id_7c077706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basic.vue?vue&type=template&id=7c077706& */ "./resources/js/router/views/tables/basic.vue?vue&type=template&id=7c077706&");
/* harmony import */ var _basic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic.vue?vue&type=script&lang=js& */ "./resources/js/router/views/tables/basic.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _basic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _basic_vue_vue_type_template_id_7c077706___WEBPACK_IMPORTED_MODULE_0__.render,
  _basic_vue_vue_type_template_id_7c077706___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/tables/basic.vue"
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

/***/ "./resources/js/router/views/tables/basic.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/router/views/tables/basic.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./basic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/basic.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/tables/basic.vue?vue&type=template&id=7c077706&":
/*!***********************************************************************************!*\
  !*** ./resources/js/router/views/tables/basic.vue?vue&type=template&id=7c077706& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_template_id_7c077706___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_template_id_7c077706___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_basic_vue_vue_type_template_id_7c077706___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./basic.vue?vue&type=template&id=7c077706& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/basic.vue?vue&type=template&id=7c077706&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/basic.vue?vue&type=template&id=7c077706&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/basic.vue?vue&type=template&id=7c077706& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
                _vm._v("Basic example")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            For basic styling—light padding and\n            only horizontal dividers—add the base class\n            "
                ),
                _c("code", [_vm._v(".table")]),
                _vm._v(" to any\n            "),
                _c("code", [_vm._v("<table>")]),
                _vm._v(".\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive mb-0" }, [
                _c("table", { staticClass: "table" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("First Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Last Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Username")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Mark")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Otto")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@mdo")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Jacob")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Thornton")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@fat")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Larry")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("the Bird")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@twitter")])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Dark table")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            You can also invert the colors—with light text on dark backgrounds—with\n            "
                ),
                _c("code", [_vm._v(".table-dark")]),
                _vm._v(".\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive mb-0" }, [
                _c("table", { staticClass: "table table-dark" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("First Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Last Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Username")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Mark")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Otto")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@mdo")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Jacob")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Thornton")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@fat")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Larry")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("the Bird")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@twitter")])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Table head")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Use one of two modifier classes to make\n            "
                ),
                _c("code", [_vm._v("<thead>")]),
                _vm._v("s appear light or dark gray.\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive mb-0" }, [
                _c("table", { staticClass: "table" }, [
                  _c("thead", { staticClass: "thead-light" }, [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("First Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Last Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Username")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Mark")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Otto")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@mdo")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Jacob")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Thornton")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@fat")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Larry")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("the Bird")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@twitter")])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Striped rows")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Use\n            "),
                _c("code", [_vm._v(".table-striped")]),
                _vm._v(
                  " to add zebra-striping to any table row within the\n            "
                ),
                _c("code", [_vm._v("<tbody>")]),
                _vm._v(".\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive mb-0" }, [
                _c("table", { staticClass: "table table-striped" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("First Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Last Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Username")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Mark")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Otto")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@mdo")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Jacob")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Thornton")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@fat")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Larry")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("the Bird")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@twitter")])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Bordered table")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Add\n            "),
                _c("code", [_vm._v(".table-bordered")]),
                _vm._v(
                  " for borders on all sides of the table and cells.\n          "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive mb-0" }, [
                _c("table", { staticClass: "table table-bordered" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("First Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Last Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Username")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Mark")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Otto")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@mdo")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Jacob")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Thornton")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@fat")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Larry")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("the Bird")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@twitter")])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Borderless table")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Add\n            "),
                _c("code", [_vm._v(".table-borderless")]),
                _vm._v(" for a table without borders.\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive mb-0" }, [
                _c("table", { staticClass: "table table-borderless" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("First Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Last Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Username")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Mark")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Otto")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@mdo")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Jacob")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Thornton")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@fat")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Larry")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("the Bird")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@twitter")])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Hoverable rows")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Add\n            "),
                _c("code", [_vm._v(".table-hover")]),
                _vm._v(
                  " to enable a hover state on table rows within a\n            "
                ),
                _c("code", [_vm._v("<tbody>")]),
                _vm._v(".\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive mb-0" }, [
                _c("table", { staticClass: "table table-hover" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("First Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Last Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Username")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Mark")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Otto")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@mdo")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Jacob")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Thornton")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@fat")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Larry")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("the Bird")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@twitter")])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Small table")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Add\n            "),
                _c("code", [_vm._v(".table-sm")]),
                _vm._v(
                  " to make tables more compact by cutting cell padding in half.\n          "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive mb-0" }, [
                _c("table", { staticClass: "table table-sm" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("First Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Last Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Username")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Mark")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Otto")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@mdo")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Jacob")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Thornton")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@fat")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Larry")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("the Bird")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@twitter")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("4")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Mark")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Otto")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@mdo")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("5")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Jacob")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Thornton")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@fat")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("6")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Larry")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("the Bird")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@twitter")])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Contextual classes")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "Use contextual classes to color table rows or individual cells."
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive mb-0" }, [
                _c("table", { staticClass: "table" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Column heading")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Column heading")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Column heading")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", { staticClass: "table-light" }, [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")])
                    ]),
                    _vm._v(" "),
                    _c("tr", { staticClass: "table-success" }, [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")])
                    ]),
                    _vm._v(" "),
                    _c("tr", { staticClass: "table-info" }, [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")])
                    ]),
                    _vm._v(" "),
                    _c("tr", { staticClass: "table-warning" }, [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("4")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")])
                    ]),
                    _vm._v(" "),
                    _c("tr", { staticClass: "table-danger" }, [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("5")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Column content")])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Captions")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            A\n            "),
                _c("code", [_vm._v("<caption>")]),
                _vm._v(
                  " functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it.\n          "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive mb-0" }, [
                _c("table", { staticClass: "table" }, [
                  _c("caption", [_vm._v("List of users")]),
                  _vm._v(" "),
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("First Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Last Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Username")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Mark")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Otto")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@mdo")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Jacob")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Thornton")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@fat")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Larry")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("the Bird")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("@twitter")])
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Responsive tables")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v(
                  "\n            Create responsive tables by wrapping any\n            "
                ),
                _c("code", [_vm._v(".table")]),
                _vm._v(" in\n            "),
                _c("code", [_vm._v(".table-responsive")]),
                _vm._v(
                  "\n            to make them scroll horizontally on small devices (under 768px).\n          "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-responsive mb-0" }, [
                _c("table", { staticClass: "table" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Table heading")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Table heading")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Table heading")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Table heading")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Table heading")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Table heading")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tbody", [
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("1")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("2")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { attrs: { scope: "row" } }, [_vm._v("3")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("Table cell")])
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