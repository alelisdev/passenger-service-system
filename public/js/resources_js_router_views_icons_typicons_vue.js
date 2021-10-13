(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_icons_typicons_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/typicons.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/typicons.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Typicons component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Typicons",
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
      title: "Typicons",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Icons",
        href: "/"
      }, {
        text: "Typicons",
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

/***/ "./resources/js/router/views/icons/typicons.vue":
/*!******************************************************!*\
  !*** ./resources/js/router/views/icons/typicons.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typicons_vue_vue_type_template_id_0805da06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typicons.vue?vue&type=template&id=0805da06& */ "./resources/js/router/views/icons/typicons.vue?vue&type=template&id=0805da06&");
/* harmony import */ var _typicons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typicons.vue?vue&type=script&lang=js& */ "./resources/js/router/views/icons/typicons.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _typicons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _typicons_vue_vue_type_template_id_0805da06___WEBPACK_IMPORTED_MODULE_0__.render,
  _typicons_vue_vue_type_template_id_0805da06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/icons/typicons.vue"
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

/***/ "./resources/js/router/views/icons/typicons.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/router/views/icons/typicons.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typicons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typicons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/typicons.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_typicons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/icons/typicons.vue?vue&type=template&id=0805da06&":
/*!*************************************************************************************!*\
  !*** ./resources/js/router/views/icons/typicons.vue?vue&type=template&id=0805da06& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_typicons_vue_vue_type_template_id_0805da06___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_typicons_vue_vue_type_template_id_0805da06___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_typicons_vue_vue_type_template_id_0805da06___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./typicons.vue?vue&type=template&id=0805da06& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/typicons.vue?vue&type=template&id=0805da06&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/typicons.vue?vue&type=template&id=0805da06&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/typicons.vue?vue&type=template&id=0805da06& ***!
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Examples")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }, [
                _vm._v("\n            Use\n            "),
                _c("code", [_vm._v('<i class="pe-7s-album"></i>')]),
                _vm._v(".\n          ")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row icon-demo-content" }, [
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-chart-pie-outline" }),
                  _vm._v(" typcn typcn-chart-pie-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-chart-pie" }),
                  _vm._v(" typcn typcn-chart-pie\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-chevron-left-outline" }),
                  _vm._v(" typcn typcn-chevron-left-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-chevron-left" }),
                  _vm._v(" typcn typcn-chevron-left\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-chevron-right-outline" }),
                  _vm._v(" typcn typcn-chevron-right-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-chevron-right" }),
                  _vm._v(" typcn typcn-chevron-right\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-clipboard" }),
                  _vm._v(" typcn typcn-clipboard\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-cloud-storage" }),
                  _vm._v(" typcn typcn-cloud-storage\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-cloud-storage-outline" }),
                  _vm._v(" typcn typcn-cloud-storage-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-code-outline" }),
                  _vm._v(" typcn typcn-code-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-code" }),
                  _vm._v(" typcn typcn-code\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-coffee" }),
                  _vm._v(" typcn typcn-coffee\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-cog-outline" }),
                  _vm._v(" typcn typcn-cog-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-cog" }),
                  _vm._v(" typcn typcn-cog\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-compass" }),
                  _vm._v(" typcn typcn-compass\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-contacts" }),
                  _vm._v(" typcn typcn-contacts\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-credit-card" }),
                  _vm._v(" typcn typcn-credit-card\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-css3" }),
                  _vm._v(" typcn typcn-css3\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-database" }),
                  _vm._v(" typcn typcn-database\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-delete-outline" }),
                  _vm._v(" typcn typcn-delete-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-delete" }),
                  _vm._v(" typcn typcn-delete\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-device-desktop" }),
                  _vm._v(" typcn typcn-device-desktop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-device-laptop" }),
                  _vm._v(" typcn typcn-device-laptop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-device-phone" }),
                  _vm._v(" typcn typcn-device-phone\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-device-tablet" }),
                  _vm._v(" typcn typcn-device-tablet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-directions" }),
                  _vm._v(" typcn typcn-directions\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-divide-outline" }),
                  _vm._v(" typcn typcn-divide-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-divide" }),
                  _vm._v(" typcn typcn-divide\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-document-add" }),
                  _vm._v(" typcn typcn-document-add\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-document-delete" }),
                  _vm._v(" typcn typcn-document-delete\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-document-text" }),
                  _vm._v(" typcn typcn-document-text\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-document" }),
                  _vm._v(" typcn typcn-document\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-download-outline" }),
                  _vm._v(" typcn typcn-download-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-download" }),
                  _vm._v(" typcn typcn-download\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-dropbox" }),
                  _vm._v(" typcn typcn-dropbox\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-edit" }),
                  _vm._v(" typcn typcn-edit\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-eject-outline" }),
                  _vm._v(" typcn typcn-eject-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-eject" }),
                  _vm._v(" typcn typcn-eject\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-equals-outline" }),
                  _vm._v(" typcn typcn-equals-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-equals" }),
                  _vm._v(" typcn typcn-equals\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-export-outline" }),
                  _vm._v(" typcn typcn-export-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-export" }),
                  _vm._v(" typcn typcn-export\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-eye-outline" }),
                  _vm._v(" typcn typcn-eye-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-eye" }),
                  _vm._v(" typcn typcn-eye\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-feather" }),
                  _vm._v(" typcn typcn-feather\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-film" }),
                  _vm._v(" typcn typcn-film\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-filter" }),
                  _vm._v(" typcn typcn-filter\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-flag-outline" }),
                  _vm._v(" typcn typcn-flag-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-flag" }),
                  _vm._v(" typcn typcn-flag\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-flash-outline" }),
                  _vm._v(" typcn typcn-flash-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-flash" }),
                  _vm._v(" typcn typcn-flash\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-flow-children" }),
                  _vm._v(" typcn typcn-flow-children\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-flow-merge" }),
                  _vm._v(" typcn typcn-flow-merge\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-flow-parallel" }),
                  _vm._v(" typcn typcn-flow-parallel\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-flow-switch" }),
                  _vm._v(" typcn typcn-flow-switch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-folder-add" }),
                  _vm._v(" typcn typcn-folder-add\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-folder-delete" }),
                  _vm._v(" typcn typcn-folder-delete\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-folder-open" }),
                  _vm._v(" typcn typcn-folder-open\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-folder" }),
                  _vm._v(" typcn typcn-folder\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-gift" }),
                  _vm._v(" typcn typcn-gift\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-globe-outline" }),
                  _vm._v(" typcn typcn-globe-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-globe" }),
                  _vm._v(" typcn typcn-globe\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-group-outline" }),
                  _vm._v(" typcn typcn-group-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-group" }),
                  _vm._v(" typcn typcn-group\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-headphones" }),
                  _vm._v(" typcn typcn-headphones\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-heart-full-outline" }),
                  _vm._v(" typcn typcn-heart-full-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-heart-half-outline" }),
                  _vm._v(" typcn typcn-heart-half-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-heart-outline" }),
                  _vm._v(" typcn typcn-heart-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-heart" }),
                  _vm._v(" typcn typcn-heart\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-home-outline" }),
                  _vm._v(" typcn typcn-home-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-home" }),
                  _vm._v(" typcn typcn-home\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-html5" }),
                  _vm._v(" typcn typcn-html5\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-image-outline" }),
                  _vm._v(" typcn typcn-image-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-image" }),
                  _vm._v(" typcn typcn-image\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-infinity-outline" }),
                  _vm._v(" typcn typcn-infinity-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-infinity" }),
                  _vm._v(" typcn typcn-infinity\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-info-large-outline" }),
                  _vm._v(" typcn typcn-info-large-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-info-large" }),
                  _vm._v(" typcn typcn-info-large\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-info-outline" }),
                  _vm._v(" typcn typcn-info-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-info" }),
                  _vm._v(" typcn typcn-info\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-input-checked-outline" }),
                  _vm._v(" typcn typcn-input-checked-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-input-checked" }),
                  _vm._v(" typcn typcn-input-checked\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-key-outline" }),
                  _vm._v(" typcn typcn-key-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-key" }),
                  _vm._v(" typcn typcn-key\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-keyboard" }),
                  _vm._v(" typcn typcn-keyboard\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-leaf" }),
                  _vm._v(" typcn typcn-leaf\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-lightbulb" }),
                  _vm._v(" typcn typcn-lightbulb\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-link-outline" }),
                  _vm._v(" typcn typcn-link-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-link" }),
                  _vm._v(" typcn typcn-link\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-location-arrow-outline"
                  }),
                  _vm._v(" typcn typcn-location-arrow-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-location-arrow" }),
                  _vm._v(" typcn typcn-location-arrow\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-location-outline" }),
                  _vm._v(" typcn typcn-location-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-location" }),
                  _vm._v(" typcn typcn-location\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-lock-closed-outline" }),
                  _vm._v(" typcn typcn-lock-closed-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-lock-closed" }),
                  _vm._v(" typcn typcn-lock-closed\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-lock-open-outline" }),
                  _vm._v(" typcn typcn-lock-open-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-lock-open" }),
                  _vm._v(" typcn typcn-lock-open\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-mail" }),
                  _vm._v(" typcn typcn-mail\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-map" }),
                  _vm._v(" typcn typcn-map\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-eject-outline" }),
                  _vm._v(" typcn typcn-media-eject-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-eject" }),
                  _vm._v(" typcn typcn-media-eject\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-media-fast-forward-outline"
                  }),
                  _vm._v(
                    " typcn typcn-media-fast-forward-outline\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-fast-forward" }),
                  _vm._v(" typcn typcn-media-fast-forward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-pause-outline" }),
                  _vm._v(" typcn typcn-media-pause-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-pause" }),
                  _vm._v(" typcn typcn-media-pause\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-play-outline" }),
                  _vm._v(" typcn typcn-media-play-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-media-play-reverse-outline"
                  }),
                  _vm._v(
                    " typcn typcn-media-play-reverse-outline\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-play-reverse" }),
                  _vm._v(" typcn typcn-media-play-reverse\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-play" }),
                  _vm._v(" typcn typcn-media-play\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-record-outline" }),
                  _vm._v(" typcn typcn-media-record-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-record" }),
                  _vm._v(" typcn typcn-media-record\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-rewind-outline" }),
                  _vm._v(" typcn typcn-media-rewind-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-rewind" }),
                  _vm._v(" typcn typcn-media-rewind\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-stop-outline" }),
                  _vm._v(" typcn typcn-media-stop-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-media-stop" }),
                  _vm._v(" typcn typcn-media-stop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-message-typing" }),
                  _vm._v(" typcn typcn-message-typing\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-message" }),
                  _vm._v(" typcn typcn-message\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-messages" }),
                  _vm._v(" typcn typcn-messages\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-microphone-outline" }),
                  _vm._v(" typcn typcn-microphone-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-microphone" }),
                  _vm._v(" typcn typcn-microphone\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-minus-outline" }),
                  _vm._v(" typcn typcn-minus-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-minus" }),
                  _vm._v(" typcn typcn-minus\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-mortar-board" }),
                  _vm._v(" typcn typcn-mortar-board\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-news" }),
                  _vm._v(" typcn typcn-news\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-notes-outline" }),
                  _vm._v(" typcn typcn-notes-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-notes" }),
                  _vm._v(" typcn typcn-notes\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-pen" }),
                  _vm._v(" typcn typcn-pen\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-pencil" }),
                  _vm._v(" typcn typcn-pencil\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-phone-outline" }),
                  _vm._v(" typcn typcn-phone-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-phone" }),
                  _vm._v(" typcn typcn-phone\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-pi-outline" }),
                  _vm._v(" typcn typcn-pi-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-pi" }),
                  _vm._v(" typcn typcn-pi\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-pin-outline" }),
                  _vm._v(" typcn typcn-pin-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-pin" }),
                  _vm._v(" typcn typcn-pin\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-pipette" }),
                  _vm._v(" typcn typcn-pipette\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-plane-outline" }),
                  _vm._v(" typcn typcn-plane-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-plane" }),
                  _vm._v(" typcn typcn-plane\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-plug" }),
                  _vm._v(" typcn typcn-plug\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-plus-outline" }),
                  _vm._v(" typcn typcn-plus-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-plus" }),
                  _vm._v(" typcn typcn-plus\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-point-of-interest-outline"
                  }),
                  _vm._v(" typcn typcn-point-of-interest-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-point-of-interest" }),
                  _vm._v(" typcn typcn-point-of-interest\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-power-outline" }),
                  _vm._v(" typcn typcn-power-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-power" }),
                  _vm._v(" typcn typcn-power\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-printer" }),
                  _vm._v(" typcn typcn-printer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-puzzle-outline" }),
                  _vm._v(" typcn typcn-puzzle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-puzzle" }),
                  _vm._v(" typcn typcn-puzzle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-radar-outline" }),
                  _vm._v(" typcn typcn-radar-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-radar" }),
                  _vm._v(" typcn typcn-radar\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-refresh-outline" }),
                  _vm._v(" typcn typcn-refresh-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-refresh" }),
                  _vm._v(" typcn typcn-refresh\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-rss-outline" }),
                  _vm._v(" typcn typcn-rss-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-rss" }),
                  _vm._v(" typcn typcn-rss\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-scissors-outline" }),
                  _vm._v(" typcn typcn-scissors-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-scissors" }),
                  _vm._v(" typcn typcn-scissors\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-shopping-bag" }),
                  _vm._v(" typcn typcn-shopping-bag\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-shopping-cart" }),
                  _vm._v(" typcn typcn-shopping-cart\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-at-circular" }),
                  _vm._v(" typcn typcn-social-at-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-dribbble-circular"
                  }),
                  _vm._v(" typcn typcn-social-dribbble-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-dribbble" }),
                  _vm._v(" typcn typcn-social-dribbble\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-facebook-circular"
                  }),
                  _vm._v(" typcn typcn-social-facebook-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-facebook" }),
                  _vm._v(" typcn typcn-social-facebook\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-flickr-circular"
                  }),
                  _vm._v(" typcn typcn-social-flickr-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-flickr" }),
                  _vm._v(" typcn typcn-social-flickr\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-github-circular"
                  }),
                  _vm._v(" typcn typcn-social-github-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-github" }),
                  _vm._v(" typcn typcn-social-github\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-google-plus-circular"
                  }),
                  _vm._v(
                    " typcn typcn-social-google-plus-circular\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-google-plus" }),
                  _vm._v(" typcn typcn-social-google-plus\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-instagram-circular"
                  }),
                  _vm._v(" typcn typcn-social-instagram-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-instagram" }),
                  _vm._v(" typcn typcn-social-instagram\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-last-fm-circular"
                  }),
                  _vm._v(" typcn typcn-social-last-fm-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-last-fm" }),
                  _vm._v(" typcn typcn-social-last-fm\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-linkedin-circular"
                  }),
                  _vm._v(" typcn typcn-social-linkedin-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-linkedin" }),
                  _vm._v(" typcn typcn-social-linkedin\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-pinterest-circular"
                  }),
                  _vm._v(" typcn typcn-social-pinterest-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-pinterest" }),
                  _vm._v(" typcn typcn-social-pinterest\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-skype-outline" }),
                  _vm._v(" typcn typcn-social-skype-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-skype" }),
                  _vm._v(" typcn typcn-social-skype\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-tumbler-circular"
                  }),
                  _vm._v(" typcn typcn-social-tumbler-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-tumbler" }),
                  _vm._v(" typcn typcn-social-tumbler\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-twitter-circular"
                  }),
                  _vm._v(" typcn typcn-social-twitter-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-twitter" }),
                  _vm._v(" typcn typcn-social-twitter\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-vimeo-circular" }),
                  _vm._v(" typcn typcn-social-vimeo-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-vimeo" }),
                  _vm._v(" typcn typcn-social-vimeo\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-social-youtube-circular"
                  }),
                  _vm._v(" typcn typcn-social-youtube-circular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-social-youtube" }),
                  _vm._v(" typcn typcn-social-youtube\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-sort-alphabetically-outline"
                  }),
                  _vm._v(
                    " typcn typcn-sort-alphabetically-outline\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-sort-alphabetically" }),
                  _vm._v(" typcn typcn-sort-alphabetically\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "typcn typcn-sort-numerically-outline"
                  }),
                  _vm._v(" typcn typcn-sort-numerically-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-sort-numerically" }),
                  _vm._v(" typcn typcn-sort-numerically\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-spanner-outline" }),
                  _vm._v(" typcn typcn-spanner-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-spanner" }),
                  _vm._v(" typcn typcn-spanner\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-spiral" }),
                  _vm._v(" typcn typcn-spiral\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-star-full-outline" }),
                  _vm._v(" typcn typcn-star-full-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-star-half-outline" }),
                  _vm._v(" typcn typcn-star-half-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-star-half" }),
                  _vm._v(" typcn typcn-star-half\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-star-outline" }),
                  _vm._v(" typcn typcn-star-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-star" }),
                  _vm._v(" typcn typcn-star\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-starburst-outline" }),
                  _vm._v(" typcn typcn-starburst-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-starburst" }),
                  _vm._v(" typcn typcn-starburst\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-stopwatch" }),
                  _vm._v(" typcn typcn-stopwatch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-support" }),
                  _vm._v(" typcn typcn-support\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-tabs-outline" }),
                  _vm._v(" typcn typcn-tabs-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-tag" }),
                  _vm._v(" typcn typcn-tag\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-tags" }),
                  _vm._v(" typcn typcn-tags\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-th-large-outline" }),
                  _vm._v(" typcn typcn-th-large-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-th-large" }),
                  _vm._v(" typcn typcn-th-large\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-th-list-outline" }),
                  _vm._v(" typcn typcn-th-list-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-th-list" }),
                  _vm._v(" typcn typcn-th-list\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-th-menu-outline" }),
                  _vm._v(" typcn typcn-th-menu-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-th-menu" }),
                  _vm._v(" typcn typcn-th-menu\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-th-small-outline" }),
                  _vm._v(" typcn typcn-th-small-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-th-small" }),
                  _vm._v(" typcn typcn-th-small\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-thermometer" }),
                  _vm._v(" typcn typcn-thermometer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-thumbs-down" }),
                  _vm._v(" typcn typcn-thumbs-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-thumbs-ok" }),
                  _vm._v(" typcn typcn-thumbs-ok\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-thumbs-up" }),
                  _vm._v(" typcn typcn-thumbs-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-tick-outline" }),
                  _vm._v(" typcn typcn-tick-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-tick" }),
                  _vm._v(" typcn typcn-tick\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-ticket" }),
                  _vm._v(" typcn typcn-ticket\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-time" }),
                  _vm._v(" typcn typcn-time\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-times-outline" }),
                  _vm._v(" typcn typcn-times-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-times" }),
                  _vm._v(" typcn typcn-times\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-trash" }),
                  _vm._v(" typcn typcn-trash\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-tree" }),
                  _vm._v(" typcn typcn-tree\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-upload-outline" }),
                  _vm._v(" typcn typcn-upload-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-upload" }),
                  _vm._v(" typcn typcn-upload\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-user-add-outline" }),
                  _vm._v(" typcn typcn-user-add-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-user-add" }),
                  _vm._v(" typcn typcn-user-add\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-user-delete-outline" }),
                  _vm._v(" typcn typcn-user-delete-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-user-delete" }),
                  _vm._v(" typcn typcn-user-delete\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-user-outline" }),
                  _vm._v(" typcn typcn-user-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-user" }),
                  _vm._v(" typcn typcn-user\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-vendor-android" }),
                  _vm._v(" typcn typcn-vendor-android\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-vendor-apple" }),
                  _vm._v(" typcn typcn-vendor-apple\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-vendor-microsoft" }),
                  _vm._v(" typcn typcn-vendor-microsoft\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-video-outline" }),
                  _vm._v(" typcn typcn-video-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-video" }),
                  _vm._v(" typcn typcn-video\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-volume-down" }),
                  _vm._v(" typcn typcn-volume-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-volume-mute" }),
                  _vm._v(" typcn typcn-volume-mute\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-volume-up" }),
                  _vm._v(" typcn typcn-volume-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-volume" }),
                  _vm._v(" typcn typcn-volume\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-warning-outline" }),
                  _vm._v(" typcn typcn-warning-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-warning" }),
                  _vm._v(" typcn typcn-warning\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-watch" }),
                  _vm._v(" typcn typcn-watch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-waves-outline" }),
                  _vm._v(" typcn typcn-waves-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-waves" }),
                  _vm._v(" typcn typcn-waves\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-weather-cloudy" }),
                  _vm._v(" typcn typcn-weather-cloudy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-weather-downpour" }),
                  _vm._v(" typcn typcn-weather-downpour\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-weather-night" }),
                  _vm._v(" typcn typcn-weather-night\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-weather-partly-sunny" }),
                  _vm._v(" typcn typcn-weather-partly-sunny\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-weather-shower" }),
                  _vm._v(" typcn typcn-weather-shower\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-weather-snow" }),
                  _vm._v(" typcn typcn-weather-snow\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-weather-stormy" }),
                  _vm._v(" typcn typcn-weather-stormy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-weather-sunny" }),
                  _vm._v(" typcn typcn-weather-sunny\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-weather-windy-cloudy" }),
                  _vm._v(" typcn typcn-weather-windy-cloudy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-weather-windy" }),
                  _vm._v(" typcn typcn-weather-windy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-wi-fi-outline" }),
                  _vm._v(" typcn typcn-wi-fi-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-wi-fi" }),
                  _vm._v(" typcn typcn-wi-fi\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-wine" }),
                  _vm._v(" typcn typcn-wine\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-world-outline" }),
                  _vm._v(" typcn typcn-world-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-world" }),
                  _vm._v(" typcn typcn-world\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-zoom-in-outline" }),
                  _vm._v(" typcn typcn-zoom-in-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-zoom-in" }),
                  _vm._v(" typcn typcn-zoom-in\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-zoom-out-outline" }),
                  _vm._v(" typcn typcn-zoom-out-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-zoom-out" }),
                  _vm._v(" typcn typcn-zoom-out\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-zoom-outline" }),
                  _vm._v(" typcn typcn-zoom-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "typcn typcn-zoom" }),
                  _vm._v(" typcn typcn-zoom\n            ")
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