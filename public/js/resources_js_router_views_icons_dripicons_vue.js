(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_icons_dripicons_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/dripicons.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/dripicons.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Dripicons component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Dripicons",
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
      title: "Dripicons",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Icons",
        href: "/"
      }, {
        text: "Dripicons",
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

/***/ "./resources/js/router/views/icons/dripicons.vue":
/*!*******************************************************!*\
  !*** ./resources/js/router/views/icons/dripicons.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dripicons_vue_vue_type_template_id_671e9732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dripicons.vue?vue&type=template&id=671e9732& */ "./resources/js/router/views/icons/dripicons.vue?vue&type=template&id=671e9732&");
/* harmony import */ var _dripicons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dripicons.vue?vue&type=script&lang=js& */ "./resources/js/router/views/icons/dripicons.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _dripicons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _dripicons_vue_vue_type_template_id_671e9732___WEBPACK_IMPORTED_MODULE_0__.render,
  _dripicons_vue_vue_type_template_id_671e9732___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/icons/dripicons.vue"
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

/***/ "./resources/js/router/views/icons/dripicons.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/router/views/icons/dripicons.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dripicons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dripicons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/dripicons.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dripicons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/icons/dripicons.vue?vue&type=template&id=671e9732&":
/*!**************************************************************************************!*\
  !*** ./resources/js/router/views/icons/dripicons.vue?vue&type=template&id=671e9732& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dripicons_vue_vue_type_template_id_671e9732___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dripicons_vue_vue_type_template_id_671e9732___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dripicons_vue_vue_type_template_id_671e9732___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dripicons.vue?vue&type=template&id=671e9732& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/dripicons.vue?vue&type=template&id=671e9732&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/dripicons.vue?vue&type=template&id=671e9732&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/dripicons.vue?vue&type=template&id=671e9732& ***!
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
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [_vm._v("Examples")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc mb-2" }, [
                _vm._v("\n            Use\n            "),
                _c("code", [
                  _vm._v(
                    '\n              <i\n              class="dripicons-alarm"></i>\n            '
                  )
                ]),
                _vm._v(".\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row icon-demo-content" }, [
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-alarm" }),
                  _vm._v(" dripicons-alarm\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-align-center" }),
                  _vm._v(" dripicons-align-center\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-align-justify" }),
                  _vm._v(" dripicons-align-justify\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-align-left" }),
                  _vm._v(" dripicons-align-left\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-align-right" }),
                  _vm._v(" dripicons-align-right\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-anchor" }),
                  _vm._v(" dripicons-anchor\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-archive" }),
                  _vm._v(" dripicons-archive\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-arrow-down" }),
                  _vm._v(" dripicons-arrow-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-arrow-left" }),
                  _vm._v(" dripicons-arrow-left\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-arrow-right" }),
                  _vm._v(" dripicons-arrow-right\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-arrow-thin-down" }),
                  _vm._v(" dripicons-arrow-thin-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-arrow-thin-left" }),
                  _vm._v(" dripicons-arrow-thin-left\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-arrow-thin-right" }),
                  _vm._v(" dripicons-arrow-thin-right\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-arrow-thin-up" }),
                  _vm._v(" dripicons-arrow-thin-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-arrow-up" }),
                  _vm._v(" dripicons-arrow-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-article" }),
                  _vm._v(" dripicons-article\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-backspace" }),
                  _vm._v(" dripicons-backspace\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-basket" }),
                  _vm._v(" dripicons-basket\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-basketball" }),
                  _vm._v(" dripicons-basketball\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-battery-empty" }),
                  _vm._v(" dripicons-battery-empty\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-battery-full" }),
                  _vm._v(" dripicons-battery-full\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-battery-low" }),
                  _vm._v(" dripicons-battery-low\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-battery-medium" }),
                  _vm._v(" dripicons-battery-medium\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-bell" }),
                  _vm._v(" dripicons-bell\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-blog" }),
                  _vm._v(" dripicons-blog\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-bluetooth" }),
                  _vm._v(" dripicons-bluetooth\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-bold" }),
                  _vm._v(" dripicons-bold\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-bookmark" }),
                  _vm._v(" dripicons-bookmark\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-bookmarks" }),
                  _vm._v(" dripicons-bookmarks\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-box" }),
                  _vm._v(" dripicons-box\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-briefcase" }),
                  _vm._v(" dripicons-briefcase\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-brightness-low" }),
                  _vm._v(" dripicons-brightness-low\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-brightness-max" }),
                  _vm._v(" dripicons-brightness-max\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-brightness-medium" }),
                  _vm._v(" dripicons-brightness-medium\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-broadcast" }),
                  _vm._v(" dripicons-broadcast\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-browser" }),
                  _vm._v(" dripicons-browser\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-browser-upload" }),
                  _vm._v(" dripicons-browser-upload\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-brush" }),
                  _vm._v(" dripicons-brush\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-calendar" }),
                  _vm._v(" dripicons-calendar\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-camcorder" }),
                  _vm._v(" dripicons-camcorder\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-camera" }),
                  _vm._v(" dripicons-camera\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-card" }),
                  _vm._v(" dripicons-card\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-cart" }),
                  _vm._v(" dripicons-cart\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-checklist" }),
                  _vm._v(" dripicons-checklist\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-checkmark" }),
                  _vm._v(" dripicons-checkmark\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-chevron-down" }),
                  _vm._v(" dripicons-chevron-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-chevron-left" }),
                  _vm._v(" dripicons-chevron-left\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-chevron-right" }),
                  _vm._v(" dripicons-chevron-right\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-chevron-up" }),
                  _vm._v(" dripicons-chevron-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-clipboard" }),
                  _vm._v(" dripicons-clipboard\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-clock" }),
                  _vm._v(" dripicons-clock\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-clockwise" }),
                  _vm._v(" dripicons-clockwise\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-cloud" }),
                  _vm._v(" dripicons-cloud\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-cloud-download" }),
                  _vm._v(" dripicons-cloud-download\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-cloud-upload" }),
                  _vm._v(" dripicons-cloud-upload\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-code" }),
                  _vm._v(" dripicons-code\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-contract" }),
                  _vm._v(" dripicons-contract\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-contract-2" }),
                  _vm._v(" dripicons-contract-2\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-conversation" }),
                  _vm._v(" dripicons-conversation\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-copy" }),
                  _vm._v(" dripicons-copy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-crop" }),
                  _vm._v(" dripicons-crop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-cross" }),
                  _vm._v(" dripicons-cross\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-crosshair" }),
                  _vm._v(" dripicons-crosshair\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-cutlery" }),
                  _vm._v(" dripicons-cutlery\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-device-desktop" }),
                  _vm._v(" dripicons-device-desktop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-device-mobile" }),
                  _vm._v(" dripicons-device-mobile\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-device-tablet" }),
                  _vm._v(" dripicons-device-tablet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-direction" }),
                  _vm._v(" dripicons-direction\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-disc" }),
                  _vm._v(" dripicons-disc\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-document" }),
                  _vm._v(" dripicons-document\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-document-delete" }),
                  _vm._v(" dripicons-document-delete\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-document-edit" }),
                  _vm._v(" dripicons-document-edit\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-document-new" }),
                  _vm._v(" dripicons-document-new\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-document-remove" }),
                  _vm._v(" dripicons-document-remove\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-dot" }),
                  _vm._v(" dripicons-dot\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-dots-2" }),
                  _vm._v(" dripicons-dots-2\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-dots-3" }),
                  _vm._v(" dripicons-dots-3\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-download" }),
                  _vm._v(" dripicons-download\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-duplicate" }),
                  _vm._v(" dripicons-duplicate\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-enter" }),
                  _vm._v(" dripicons-enter\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-exit" }),
                  _vm._v(" dripicons-exit\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-expand" }),
                  _vm._v(" dripicons-expand\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-expand-2" }),
                  _vm._v(" dripicons-expand-2\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-experiment" }),
                  _vm._v(" dripicons-experiment\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-export" }),
                  _vm._v(" dripicons-export\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-feed" }),
                  _vm._v(" dripicons-feed\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-flag" }),
                  _vm._v(" dripicons-flag\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-flashlight" }),
                  _vm._v(" dripicons-flashlight\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-folder" }),
                  _vm._v(" dripicons-folder\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-folder-open" }),
                  _vm._v(" dripicons-folder-open\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-forward" }),
                  _vm._v(" dripicons-forward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-gaming" }),
                  _vm._v(" dripicons-gaming\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-gear" }),
                  _vm._v(" dripicons-gear\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-graduation" }),
                  _vm._v(" dripicons-graduation\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-graph-bar" }),
                  _vm._v(" dripicons-graph-bar\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-graph-line" }),
                  _vm._v(" dripicons-graph-line\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-graph-pie" }),
                  _vm._v(" dripicons-graph-pie\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-headset" }),
                  _vm._v(" dripicons-headset\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-heart" }),
                  _vm._v(" dripicons-heart\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-help" }),
                  _vm._v(" dripicons-help\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-home" }),
                  _vm._v(" dripicons-home\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-hourglass" }),
                  _vm._v(" dripicons-hourglass\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-inbox" }),
                  _vm._v(" dripicons-inbox\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-information" }),
                  _vm._v(" dripicons-information\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-italic" }),
                  _vm._v(" dripicons-italic\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-jewel" }),
                  _vm._v(" dripicons-jewel\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-lifting" }),
                  _vm._v(" dripicons-lifting\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-lightbulb" }),
                  _vm._v(" dripicons-lightbulb\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-link" }),
                  _vm._v(" dripicons-link\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-link-broken" }),
                  _vm._v(" dripicons-link-broken\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-list" }),
                  _vm._v(" dripicons-list\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-loading" }),
                  _vm._v(" dripicons-loading\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-location" }),
                  _vm._v(" dripicons-location\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-lock" }),
                  _vm._v(" dripicons-lock\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-lock-open" }),
                  _vm._v(" dripicons-lock-open\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-mail" }),
                  _vm._v(" dripicons-mail\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-map" }),
                  _vm._v(" dripicons-map\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-media-loop" }),
                  _vm._v(" dripicons-media-loop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-media-next" }),
                  _vm._v(" dripicons-media-next\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-media-pause" }),
                  _vm._v(" dripicons-media-pause\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-media-play" }),
                  _vm._v(" dripicons-media-play\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-media-previous" }),
                  _vm._v(" dripicons-media-previous\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-media-record" }),
                  _vm._v(" dripicons-media-record\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-media-shuffle" }),
                  _vm._v(" dripicons-media-shuffle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-media-stop" }),
                  _vm._v(" dripicons-media-stop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-medical" }),
                  _vm._v(" dripicons-medical\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-menu" }),
                  _vm._v(" dripicons-menu\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-message" }),
                  _vm._v(" dripicons-message\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-meter" }),
                  _vm._v(" dripicons-meter\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-microphone" }),
                  _vm._v(" dripicons-microphone\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-minus" }),
                  _vm._v(" dripicons-minus\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-monitor" }),
                  _vm._v(" dripicons-monitor\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-move" }),
                  _vm._v(" dripicons-move\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-music" }),
                  _vm._v(" dripicons-music\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-network-1" }),
                  _vm._v(" dripicons-network-1\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-network-2" }),
                  _vm._v(" dripicons-network-2\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-network-3" }),
                  _vm._v(" dripicons-network-3\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-network-4" }),
                  _vm._v(" dripicons-network-4\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-network-5" }),
                  _vm._v(" dripicons-network-5\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-pamphlet" }),
                  _vm._v(" dripicons-pamphlet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-paperclip" }),
                  _vm._v(" dripicons-paperclip\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-pencil" }),
                  _vm._v(" dripicons-pencil\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-phone" }),
                  _vm._v(" dripicons-phone\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-photo" }),
                  _vm._v(" dripicons-photo\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-photo-group" }),
                  _vm._v(" dripicons-photo-group\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-pill" }),
                  _vm._v(" dripicons-pill\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-pin" }),
                  _vm._v(" dripicons-pin\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-plus" }),
                  _vm._v(" dripicons-plus\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-power" }),
                  _vm._v(" dripicons-power\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-preview" }),
                  _vm._v(" dripicons-preview\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-print" }),
                  _vm._v(" dripicons-print\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-pulse" }),
                  _vm._v(" dripicons-pulse\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-question" }),
                  _vm._v(" dripicons-question\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-reply" }),
                  _vm._v(" dripicons-reply\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-reply-all" }),
                  _vm._v(" dripicons-reply-all\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-return" }),
                  _vm._v(" dripicons-return\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-retweet" }),
                  _vm._v(" dripicons-retweet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-rocket" }),
                  _vm._v(" dripicons-rocket\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-scale" }),
                  _vm._v(" dripicons-scale\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-search" }),
                  _vm._v(" dripicons-search\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-shopping-bag" }),
                  _vm._v(" dripicons-shopping-bag\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-skip" }),
                  _vm._v(" dripicons-skip\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-stack" }),
                  _vm._v(" dripicons-stack\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-star" }),
                  _vm._v(" dripicons-star\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-stopwatch" }),
                  _vm._v(" dripicons-stopwatch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-store" }),
                  _vm._v(" dripicons-store\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-suitcase" }),
                  _vm._v(" dripicons-suitcase\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-swap" }),
                  _vm._v(" dripicons-swap\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-tag" }),
                  _vm._v(" dripicons-tag\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-tag-delete" }),
                  _vm._v(" dripicons-tag-delete\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-tags" }),
                  _vm._v(" dripicons-tags\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-thumbs-down" }),
                  _vm._v(" dripicons-thumbs-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-thumbs-up" }),
                  _vm._v(" dripicons-thumbs-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-ticket" }),
                  _vm._v(" dripicons-ticket\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-time-reverse" }),
                  _vm._v(" dripicons-time-reverse\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-to-do" }),
                  _vm._v(" dripicons-to-do\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-toggles" }),
                  _vm._v(" dripicons-toggles\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-trash" }),
                  _vm._v(" dripicons-trash\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-trophy" }),
                  _vm._v(" dripicons-trophy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-upload" }),
                  _vm._v(" dripicons-upload\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-user" }),
                  _vm._v(" dripicons-user\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-user-group" }),
                  _vm._v(" dripicons-user-group\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-user-id" }),
                  _vm._v(" dripicons-user-id\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-vibrate" }),
                  _vm._v(" dripicons-vibrate\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-view-apps" }),
                  _vm._v(" dripicons-view-apps\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-view-list" }),
                  _vm._v(" dripicons-view-list\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-view-list-large" }),
                  _vm._v(" dripicons-view-list-large\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-view-thumb" }),
                  _vm._v(" dripicons-view-thumb\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-volume-full" }),
                  _vm._v(" dripicons-volume-full\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-volume-low" }),
                  _vm._v(" dripicons-volume-low\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-volume-medium" }),
                  _vm._v(" dripicons-volume-medium\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-volume-off" }),
                  _vm._v(" dripicons-volume-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-wallet" }),
                  _vm._v(" dripicons-wallet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-warning" }),
                  _vm._v(" dripicons-warning\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-web" }),
                  _vm._v(" dripicons-web\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-weight" }),
                  _vm._v(" dripicons-weight\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-wifi" }),
                  _vm._v(" dripicons-wifi\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-wrong" }),
                  _vm._v(" dripicons-wrong\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-zoom-in" }),
                  _vm._v(" dripicons-zoom-in\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "dripicons-zoom-out" }),
                  _vm._v(" dripicons-zoom-out\n            ")
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