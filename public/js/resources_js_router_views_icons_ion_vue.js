(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_icons_ion_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/ion.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/ion.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



/**
 * Ion Icons component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Ion Icons",
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
      title: "Ion Icons",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Icons",
        href: "/"
      }, {
        text: "Ion Icons",
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

/***/ "./resources/js/router/views/icons/ion.vue":
/*!*************************************************!*\
  !*** ./resources/js/router/views/icons/ion.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ion_vue_vue_type_template_id_a204572c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ion.vue?vue&type=template&id=a204572c& */ "./resources/js/router/views/icons/ion.vue?vue&type=template&id=a204572c&");
/* harmony import */ var _ion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ion.vue?vue&type=script&lang=js& */ "./resources/js/router/views/icons/ion.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ion_vue_vue_type_template_id_a204572c___WEBPACK_IMPORTED_MODULE_0__.render,
  _ion_vue_vue_type_template_id_a204572c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/icons/ion.vue"
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

/***/ "./resources/js/router/views/icons/ion.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/router/views/icons/ion.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ion.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/ion.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ion_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/icons/ion.vue?vue&type=template&id=a204572c&":
/*!********************************************************************************!*\
  !*** ./resources/js/router/views/icons/ion.vue?vue&type=template&id=a204572c& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ion_vue_vue_type_template_id_a204572c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ion_vue_vue_type_template_id_a204572c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ion_vue_vue_type_template_id_a204572c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ion.vue?vue&type=template&id=a204572c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/ion.vue?vue&type=template&id=a204572c&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/ion.vue?vue&type=template&id=a204572c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/icons/ion.vue?vue&type=template&id=a204572c& ***!
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
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title" }, [
                _vm._v("Material style")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row icon-demo-content" }, [
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-add" }),
                  _vm._v(" ion ion-md-add\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-add-circle" }),
                  _vm._v(" ion ion-md-add-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-add-circle-outline" }),
                  _vm._v(" ion ion-md-add-circle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-airplane" }),
                  _vm._v(" ion ion-md-airplane\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-alarm" }),
                  _vm._v(" ion ion-md-alarm\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-albums" }),
                  _vm._v(" ion ion-md-albums\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-alert" }),
                  _vm._v(" ion ion-md-alert\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-american-football" }),
                  _vm._v(" ion ion-md-american-football\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-analytics" }),
                  _vm._v(" ion ion-md-analytics\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-aperture" }),
                  _vm._v(" ion ion-md-aperture\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-apps" }),
                  _vm._v(" ion ion-md-apps\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-appstore" }),
                  _vm._v(" ion ion-md-appstore\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-archive" }),
                  _vm._v(" ion ion-md-archive\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-back" }),
                  _vm._v(" ion ion-md-arrow-back\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-down" }),
                  _vm._v(" ion ion-md-arrow-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-dropdown" }),
                  _vm._v(" ion ion-md-arrow-dropdown\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-dropdown-circle" }),
                  _vm._v(" ion ion-md-arrow-dropdown-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-dropleft" }),
                  _vm._v(" ion ion-md-arrow-dropleft\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-dropleft-circle" }),
                  _vm._v(" ion ion-md-arrow-dropleft-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-dropright" }),
                  _vm._v(" ion ion-md-arrow-dropright\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-dropright-circle" }),
                  _vm._v(" ion ion-md-arrow-dropright-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-dropup" }),
                  _vm._v(" ion ion-md-arrow-dropup\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-dropup-circle" }),
                  _vm._v(" ion ion-md-arrow-dropup-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-forward" }),
                  _vm._v(" ion ion-md-arrow-forward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-round-back" }),
                  _vm._v(" ion ion-md-arrow-round-back\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-round-down" }),
                  _vm._v(" ion ion-md-arrow-round-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-round-forward" }),
                  _vm._v(" ion ion-md-arrow-round-forward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-round-up" }),
                  _vm._v(" ion ion-md-arrow-round-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-arrow-up" }),
                  _vm._v(" ion ion-md-arrow-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-at" }),
                  _vm._v(" ion ion-md-at\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-attach" }),
                  _vm._v(" ion ion-md-attach\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-backspace" }),
                  _vm._v(" ion ion-md-backspace\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-barcode" }),
                  _vm._v(" ion ion-md-barcode\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-baseball" }),
                  _vm._v(" ion ion-md-baseball\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-basket" }),
                  _vm._v(" ion ion-md-basket\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-basketball" }),
                  _vm._v(" ion ion-md-basketball\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-battery-charging" }),
                  _vm._v(" ion ion-md-battery-charging\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-battery-dead" }),
                  _vm._v(" ion ion-md-battery-dead\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-battery-full" }),
                  _vm._v(" ion ion-md-battery-full\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-beaker" }),
                  _vm._v(" ion ion-md-beaker\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-bed" }),
                  _vm._v(" ion ion-md-bed\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-beer" }),
                  _vm._v(" ion ion-md-beer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-bicycle" }),
                  _vm._v(" ion ion-md-bicycle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-bluetooth" }),
                  _vm._v(" ion ion-md-bluetooth\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-boat" }),
                  _vm._v(" ion ion-md-boat\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-body" }),
                  _vm._v(" ion ion-md-body\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-bonfire" }),
                  _vm._v(" ion ion-md-bonfire\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-book" }),
                  _vm._v(" ion ion-md-book\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-bookmark" }),
                  _vm._v(" ion ion-md-bookmark\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-bookmarks" }),
                  _vm._v(" ion ion-md-bookmarks\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-bowtie" }),
                  _vm._v(" ion ion-md-bowtie\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-briefcase" }),
                  _vm._v(" ion ion-md-briefcase\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-browsers" }),
                  _vm._v(" ion ion-md-browsers\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-brush" }),
                  _vm._v(" ion ion-md-brush\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-bug" }),
                  _vm._v(" ion ion-md-bug\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-build" }),
                  _vm._v(" ion ion-md-build\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-bulb" }),
                  _vm._v(" ion ion-md-bulb\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-bus" }),
                  _vm._v(" ion ion-md-bus\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-business" }),
                  _vm._v(" ion ion-md-business\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cafe" }),
                  _vm._v(" ion ion-md-cafe\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-calculator" }),
                  _vm._v(" ion ion-md-calculator\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-calendar" }),
                  _vm._v(" ion ion-md-calendar\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-call" }),
                  _vm._v(" ion ion-md-call\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-camera" }),
                  _vm._v(" ion ion-md-camera\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-car" }),
                  _vm._v(" ion ion-md-car\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-card" }),
                  _vm._v(" ion ion-md-card\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cart" }),
                  _vm._v(" ion ion-md-cart\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cash" }),
                  _vm._v(" ion ion-md-cash\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cellular" }),
                  _vm._v(" ion ion-md-cellular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-chatboxes" }),
                  _vm._v(" ion ion-md-chatboxes\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-chatbubbles" }),
                  _vm._v(" ion ion-md-chatbubbles\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-checkbox" }),
                  _vm._v(" ion ion-md-checkbox\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-checkbox-outline" }),
                  _vm._v(" ion ion-md-checkbox-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-checkmark" }),
                  _vm._v(" ion ion-md-checkmark\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-checkmark-circle" }),
                  _vm._v(" ion ion-md-checkmark-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "ion ion-md-checkmark-circle-outline"
                  }),
                  _vm._v(" ion ion-md-checkmark-circle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-clipboard" }),
                  _vm._v(" ion ion-md-clipboard\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-clock" }),
                  _vm._v(" ion ion-md-clock\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-close" }),
                  _vm._v(" ion ion-md-close\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-close-circle" }),
                  _vm._v(" ion ion-md-close-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-close-circle-outline" }),
                  _vm._v(" ion ion-md-close-circle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cloud" }),
                  _vm._v(" ion ion-md-cloud\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cloud-circle" }),
                  _vm._v(" ion ion-md-cloud-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cloud-done" }),
                  _vm._v(" ion ion-md-cloud-done\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cloud-download" }),
                  _vm._v(" ion ion-md-cloud-download\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cloud-outline" }),
                  _vm._v(" ion ion-md-cloud-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cloud-upload" }),
                  _vm._v(" ion ion-md-cloud-upload\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cloudy" }),
                  _vm._v(" ion ion-md-cloudy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cloudy-night" }),
                  _vm._v(" ion ion-md-cloudy-night\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-code" }),
                  _vm._v(" ion ion-md-code\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-code-download" }),
                  _vm._v(" ion ion-md-code-download\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-code-working" }),
                  _vm._v(" ion ion-md-code-working\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cog" }),
                  _vm._v(" ion ion-md-cog\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-color-fill" }),
                  _vm._v(" ion ion-md-color-fill\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-color-filter" }),
                  _vm._v(" ion ion-md-color-filter\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-color-palette" }),
                  _vm._v(" ion ion-md-color-palette\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-color-wand" }),
                  _vm._v(" ion ion-md-color-wand\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-compass" }),
                  _vm._v(" ion ion-md-compass\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-construct" }),
                  _vm._v(" ion ion-md-construct\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-contact" }),
                  _vm._v(" ion ion-md-contact\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-contacts" }),
                  _vm._v(" ion ion-md-contacts\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-contract" }),
                  _vm._v(" ion ion-md-contract\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-contrast" }),
                  _vm._v(" ion ion-md-contrast\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-copy" }),
                  _vm._v(" ion ion-md-copy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-create" }),
                  _vm._v(" ion ion-md-create\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-crop" }),
                  _vm._v(" ion ion-md-crop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cube" }),
                  _vm._v(" ion ion-md-cube\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-cut" }),
                  _vm._v(" ion ion-md-cut\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-desktop" }),
                  _vm._v(" ion ion-md-desktop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-disc" }),
                  _vm._v(" ion ion-md-disc\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-document" }),
                  _vm._v(" ion ion-md-document\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-done-all" }),
                  _vm._v(" ion ion-md-done-all\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-download" }),
                  _vm._v(" ion ion-md-download\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-easel" }),
                  _vm._v(" ion ion-md-easel\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-egg" }),
                  _vm._v(" ion ion-md-egg\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-exit" }),
                  _vm._v(" ion ion-md-exit\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-expand" }),
                  _vm._v(" ion ion-md-expand\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-eye" }),
                  _vm._v(" ion ion-md-eye\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-eye-off" }),
                  _vm._v(" ion ion-md-eye-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-fastforward" }),
                  _vm._v(" ion ion-md-fastforward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-female" }),
                  _vm._v(" ion ion-md-female\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-filing" }),
                  _vm._v(" ion ion-md-filing\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-film" }),
                  _vm._v(" ion ion-md-film\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-finger-print" }),
                  _vm._v(" ion ion-md-finger-print\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-fitness" }),
                  _vm._v(" ion ion-md-fitness\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-flag" }),
                  _vm._v(" ion ion-md-flag\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-flame" }),
                  _vm._v(" ion ion-md-flame\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-flash" }),
                  _vm._v(" ion ion-md-flash\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-flash-off" }),
                  _vm._v(" ion ion-md-flash-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-flashlight" }),
                  _vm._v(" ion ion-md-flashlight\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-flask" }),
                  _vm._v(" ion ion-md-flask\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-flower" }),
                  _vm._v(" ion ion-md-flower\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-folder" }),
                  _vm._v(" ion ion-md-folder\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-folder-open" }),
                  _vm._v(" ion ion-md-folder-open\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-football" }),
                  _vm._v(" ion ion-md-football\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-funnel" }),
                  _vm._v(" ion ion-md-funnel\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-gift" }),
                  _vm._v(" ion ion-md-gift\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-git-branch" }),
                  _vm._v(" ion ion-md-git-branch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-git-commit" }),
                  _vm._v(" ion ion-md-git-commit\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-git-compare" }),
                  _vm._v(" ion ion-md-git-compare\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-git-merge" }),
                  _vm._v(" ion ion-md-git-merge\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-git-network" }),
                  _vm._v(" ion ion-md-git-network\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-git-pull-request" }),
                  _vm._v(" ion ion-md-git-pull-request\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-glasses" }),
                  _vm._v(" ion ion-md-glasses\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-globe" }),
                  _vm._v(" ion ion-md-globe\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-grid" }),
                  _vm._v(" ion ion-md-grid\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-hammer" }),
                  _vm._v(" ion ion-md-hammer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-hand" }),
                  _vm._v(" ion ion-md-hand\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-happy" }),
                  _vm._v(" ion ion-md-happy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-headset" }),
                  _vm._v(" ion ion-md-headset\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-heart" }),
                  _vm._v(" ion ion-md-heart\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-heart-dislike" }),
                  _vm._v(" ion ion-md-heart-dislike\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-heart-empty" }),
                  _vm._v(" ion ion-md-heart-empty\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-heart-half" }),
                  _vm._v(" ion ion-md-heart-half\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-help" }),
                  _vm._v(" ion ion-md-help\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-help-buoy" }),
                  _vm._v(" ion ion-md-help-buoy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-help-circle" }),
                  _vm._v(" ion ion-md-help-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-help-circle-outline" }),
                  _vm._v(" ion ion-md-help-circle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-home" }),
                  _vm._v(" ion ion-md-home\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-hourglass" }),
                  _vm._v(" ion ion-md-hourglass\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-ice-cream" }),
                  _vm._v(" ion ion-md-ice-cream\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-image" }),
                  _vm._v(" ion ion-md-image\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-images" }),
                  _vm._v(" ion ion-md-images\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-infinite" }),
                  _vm._v(" ion ion-md-infinite\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-information" }),
                  _vm._v(" ion ion-md-information\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-information-circle" }),
                  _vm._v(" ion ion-md-information-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "ion ion-md-information-circle-outline"
                  }),
                  _vm._v(" ion ion-md-information-circle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-jet" }),
                  _vm._v(" ion ion-md-jet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-journal" }),
                  _vm._v(" ion ion-md-journal\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-key" }),
                  _vm._v(" ion ion-md-key\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-keypad" }),
                  _vm._v(" ion ion-md-keypad\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-laptop" }),
                  _vm._v(" ion ion-md-laptop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-leaf" }),
                  _vm._v(" ion ion-md-leaf\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-link" }),
                  _vm._v(" ion ion-md-link\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-list" }),
                  _vm._v(" ion ion-md-list\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-list-box" }),
                  _vm._v(" ion ion-md-list-box\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-locate" }),
                  _vm._v(" ion ion-md-locate\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-lock" }),
                  _vm._v(" ion ion-md-lock\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-log-in" }),
                  _vm._v(" ion ion-md-log-in\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-log-out" }),
                  _vm._v(" ion ion-md-log-out\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-magnet" }),
                  _vm._v(" ion ion-md-magnet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-mail" }),
                  _vm._v(" ion ion-md-mail\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-mail-open" }),
                  _vm._v(" ion ion-md-mail-open\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-mail-unread" }),
                  _vm._v(" ion ion-md-mail-unread\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-male" }),
                  _vm._v(" ion ion-md-male\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-man" }),
                  _vm._v(" ion ion-md-man\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-map" }),
                  _vm._v(" ion ion-md-map\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-medal" }),
                  _vm._v(" ion ion-md-medal\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-medical" }),
                  _vm._v(" ion ion-md-medical\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-medkit" }),
                  _vm._v(" ion ion-md-medkit\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-megaphone" }),
                  _vm._v(" ion ion-md-megaphone\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-menu" }),
                  _vm._v(" ion ion-md-menu\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-mic" }),
                  _vm._v(" ion ion-md-mic\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-mic-off" }),
                  _vm._v(" ion ion-md-mic-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-microphone" }),
                  _vm._v(" ion ion-md-microphone\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-moon" }),
                  _vm._v(" ion ion-md-moon\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-more" }),
                  _vm._v(" ion ion-md-more\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-move" }),
                  _vm._v(" ion ion-md-move\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-musical-note" }),
                  _vm._v(" ion ion-md-musical-note\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-musical-notes" }),
                  _vm._v(" ion ion-md-musical-notes\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-navigate" }),
                  _vm._v(" ion ion-md-navigate\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-notifications" }),
                  _vm._v(" ion ion-md-notifications\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-notifications-off" }),
                  _vm._v(" ion ion-md-notifications-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-notifications-outline" }),
                  _vm._v(" ion ion-md-notifications-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-nuclear" }),
                  _vm._v(" ion ion-md-nuclear\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-nutrition" }),
                  _vm._v(" ion ion-md-nutrition\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-open" }),
                  _vm._v(" ion ion-md-open\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-options" }),
                  _vm._v(" ion ion-md-options\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-outlet" }),
                  _vm._v(" ion ion-md-outlet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-paper" }),
                  _vm._v(" ion ion-md-paper\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-paper-plane" }),
                  _vm._v(" ion ion-md-paper-plane\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-partly-sunny" }),
                  _vm._v(" ion ion-md-partly-sunny\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-pause" }),
                  _vm._v(" ion ion-md-pause\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-paw" }),
                  _vm._v(" ion ion-md-paw\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-people" }),
                  _vm._v(" ion ion-md-people\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-person" }),
                  _vm._v(" ion ion-md-person\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-person-add" }),
                  _vm._v(" ion ion-md-person-add\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-phone-landscape" }),
                  _vm._v(" ion ion-md-phone-landscape\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-phone-portrait" }),
                  _vm._v(" ion ion-md-phone-portrait\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-photos" }),
                  _vm._v(" ion ion-md-photos\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-pie" }),
                  _vm._v(" ion ion-md-pie\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-pin" }),
                  _vm._v(" ion ion-md-pin\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-pint" }),
                  _vm._v(" ion ion-md-pint\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-pizza" }),
                  _vm._v(" ion ion-md-pizza\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-planet" }),
                  _vm._v(" ion ion-md-planet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-play" }),
                  _vm._v(" ion ion-md-play\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-play-circle" }),
                  _vm._v(" ion ion-md-play-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-podium" }),
                  _vm._v(" ion ion-md-podium\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-power" }),
                  _vm._v(" ion ion-md-power\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-pricetag" }),
                  _vm._v(" ion ion-md-pricetag\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-pricetags" }),
                  _vm._v(" ion ion-md-pricetags\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-print" }),
                  _vm._v(" ion ion-md-print\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-pulse" }),
                  _vm._v(" ion ion-md-pulse\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-qr-scanner" }),
                  _vm._v(" ion ion-md-qr-scanner\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-quote" }),
                  _vm._v(" ion ion-md-quote\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-radio" }),
                  _vm._v(" ion ion-md-radio\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-radio-button-off" }),
                  _vm._v(" ion ion-md-radio-button-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-radio-button-on" }),
                  _vm._v(" ion ion-md-radio-button-on\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-rainy" }),
                  _vm._v(" ion ion-md-rainy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-recording" }),
                  _vm._v(" ion ion-md-recording\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-redo" }),
                  _vm._v(" ion ion-md-redo\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-refresh" }),
                  _vm._v(" ion ion-md-refresh\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-refresh-circle" }),
                  _vm._v(" ion ion-md-refresh-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-remove" }),
                  _vm._v(" ion ion-md-remove\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-remove-circle" }),
                  _vm._v(" ion ion-md-remove-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-remove-circle-outline" }),
                  _vm._v(" ion ion-md-remove-circle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-reorder" }),
                  _vm._v(" ion ion-md-reorder\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-repeat" }),
                  _vm._v(" ion ion-md-repeat\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-resize" }),
                  _vm._v(" ion ion-md-resize\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-restaurant" }),
                  _vm._v(" ion ion-md-restaurant\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-return-left" }),
                  _vm._v(" ion ion-md-return-left\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-return-right" }),
                  _vm._v(" ion ion-md-return-right\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-reverse-camera" }),
                  _vm._v(" ion ion-md-reverse-camera\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-rewind" }),
                  _vm._v(" ion ion-md-rewind\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-ribbon" }),
                  _vm._v(" ion ion-md-ribbon\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-rocket" }),
                  _vm._v(" ion ion-md-rocket\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-rose" }),
                  _vm._v(" ion ion-md-rose\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-sad" }),
                  _vm._v(" ion ion-md-sad\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-save" }),
                  _vm._v(" ion ion-md-save\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-school" }),
                  _vm._v(" ion ion-md-school\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-search" }),
                  _vm._v(" ion ion-md-search\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-send" }),
                  _vm._v(" ion ion-md-send\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-settings" }),
                  _vm._v(" ion ion-md-settings\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-share" }),
                  _vm._v(" ion ion-md-share\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-share-alt" }),
                  _vm._v(" ion ion-md-share-alt\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-shirt" }),
                  _vm._v(" ion ion-md-shirt\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-shuffle" }),
                  _vm._v(" ion ion-md-shuffle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-skip-backward" }),
                  _vm._v(" ion ion-md-skip-backward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-skip-forward" }),
                  _vm._v(" ion ion-md-skip-forward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-snow" }),
                  _vm._v(" ion ion-md-snow\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-speedometer" }),
                  _vm._v(" ion ion-md-speedometer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-square" }),
                  _vm._v(" ion ion-md-square\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-square-outline" }),
                  _vm._v(" ion ion-md-square-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-star" }),
                  _vm._v(" ion ion-md-star\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-star-half" }),
                  _vm._v(" ion ion-md-star-half\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-star-outline" }),
                  _vm._v(" ion ion-md-star-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-stats" }),
                  _vm._v(" ion ion-md-stats\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-stopwatch" }),
                  _vm._v(" ion ion-md-stopwatch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-subway" }),
                  _vm._v(" ion ion-md-subway\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-sunny" }),
                  _vm._v(" ion ion-md-sunny\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-swap" }),
                  _vm._v(" ion ion-md-swap\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-switch" }),
                  _vm._v(" ion ion-md-switch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-sync" }),
                  _vm._v(" ion ion-md-sync\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-tablet-landscape" }),
                  _vm._v(" ion ion-md-tablet-landscape\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-tablet-portrait" }),
                  _vm._v(" ion ion-md-tablet-portrait\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-tennisball" }),
                  _vm._v(" ion ion-md-tennisball\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-text" }),
                  _vm._v(" ion ion-md-text\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-thermometer" }),
                  _vm._v(" ion ion-md-thermometer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-thumbs-down" }),
                  _vm._v(" ion ion-md-thumbs-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-thumbs-up" }),
                  _vm._v(" ion ion-md-thumbs-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-thunderstorm" }),
                  _vm._v(" ion ion-md-thunderstorm\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-time" }),
                  _vm._v(" ion ion-md-time\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-timer" }),
                  _vm._v(" ion ion-md-timer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-today" }),
                  _vm._v(" ion ion-md-today\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-train" }),
                  _vm._v(" ion ion-md-train\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-transgender" }),
                  _vm._v(" ion ion-md-transgender\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-trash" }),
                  _vm._v(" ion ion-md-trash\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-trending-down" }),
                  _vm._v(" ion ion-md-trending-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-trending-up" }),
                  _vm._v(" ion ion-md-trending-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-trophy" }),
                  _vm._v(" ion ion-md-trophy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-tv" }),
                  _vm._v(" ion ion-md-tv\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-umbrella" }),
                  _vm._v(" ion ion-md-umbrella\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-undo" }),
                  _vm._v(" ion ion-md-undo\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-unlock" }),
                  _vm._v(" ion ion-md-unlock\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-videocam" }),
                  _vm._v(" ion ion-md-videocam\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-volume-high" }),
                  _vm._v(" ion ion-md-volume-high\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-volume-low" }),
                  _vm._v(" ion ion-md-volume-low\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-volume-mute" }),
                  _vm._v(" ion ion-md-volume-mute\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-volume-off" }),
                  _vm._v(" ion ion-md-volume-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-walk" }),
                  _vm._v(" ion ion-md-walk\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-wallet" }),
                  _vm._v(" ion ion-md-wallet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-warning" }),
                  _vm._v(" ion ion-md-warning\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-watch" }),
                  _vm._v(" ion ion-md-watch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-water" }),
                  _vm._v(" ion ion-md-water\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-wifi" }),
                  _vm._v(" ion ion-md-wifi\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-wine" }),
                  _vm._v(" ion ion-md-wine\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-md-woman" }),
                  _vm._v(" ion ion-md-woman\n            ")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-box" }, [
              _c("h4", { staticClass: "header-title mb-4" }, [_vm._v("iOS")]),
              _vm._v(" "),
              _c("div", { staticClass: "row icon-demo-content" }, [
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-add" }),
                  _vm._v(" ion ion-ios-add\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-add-circle" }),
                  _vm._v(" ion ion-ios-add-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-add-circle-outline" }),
                  _vm._v(" ion ion-ios-add-circle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-airplane" }),
                  _vm._v(" ion ion-ios-airplane\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-alarm" }),
                  _vm._v(" ion ion-ios-alarm\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-albums" }),
                  _vm._v(" ion ion-ios-albums\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-alert" }),
                  _vm._v(" ion ion-ios-alert\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-american-football" }),
                  _vm._v(" ion ion-ios-american-football\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-analytics" }),
                  _vm._v(" ion ion-ios-analytics\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-aperture" }),
                  _vm._v(" ion ion-ios-aperture\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-apps" }),
                  _vm._v(" ion ion-ios-apps\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-appstore" }),
                  _vm._v(" ion ion-ios-appstore\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-archive" }),
                  _vm._v(" ion ion-ios-archive\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-back" }),
                  _vm._v(" ion ion-ios-arrow-back\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-down" }),
                  _vm._v(" ion ion-ios-arrow-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-dropdown" }),
                  _vm._v(" ion ion-ios-arrow-dropdown\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-dropdown-circle" }),
                  _vm._v(" ion ion-ios-arrow-dropdown-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-dropleft" }),
                  _vm._v(" ion ion-ios-arrow-dropleft\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-dropleft-circle" }),
                  _vm._v(" ion ion-ios-arrow-dropleft-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-dropright" }),
                  _vm._v(" ion ion-ios-arrow-dropright\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "ion ion-ios-arrow-dropright-circle"
                  }),
                  _vm._v(" ion ion-ios-arrow-dropright-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-dropup" }),
                  _vm._v(" ion ion-ios-arrow-dropup\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-dropup-circle" }),
                  _vm._v(" ion ion-ios-arrow-dropup-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-forward" }),
                  _vm._v(" ion ion-ios-arrow-forward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-round-back" }),
                  _vm._v(" ion ion-ios-arrow-round-back\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-round-down" }),
                  _vm._v(" ion ion-ios-arrow-round-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-round-forward" }),
                  _vm._v(" ion ion-ios-arrow-round-forward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-round-up" }),
                  _vm._v(" ion ion-ios-arrow-round-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-arrow-up" }),
                  _vm._v(" ion ion-ios-arrow-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-at" }),
                  _vm._v(" ion ion-ios-at\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-attach" }),
                  _vm._v(" ion ion-ios-attach\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-backspace" }),
                  _vm._v(" ion ion-ios-backspace\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-barcode" }),
                  _vm._v(" ion ion-ios-barcode\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-baseball" }),
                  _vm._v(" ion ion-ios-baseball\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-basket" }),
                  _vm._v(" ion ion-ios-basket\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-basketball" }),
                  _vm._v(" ion ion-ios-basketball\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-battery-charging" }),
                  _vm._v(" ion ion-ios-battery-charging\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-battery-dead" }),
                  _vm._v(" ion ion-ios-battery-dead\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-battery-full" }),
                  _vm._v(" ion ion-ios-battery-full\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-beaker" }),
                  _vm._v(" ion ion-ios-beaker\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-bed" }),
                  _vm._v(" ion ion-ios-bed\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-beer" }),
                  _vm._v(" ion ion-ios-beer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-bicycle" }),
                  _vm._v(" ion ion-ios-bicycle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-bluetooth" }),
                  _vm._v(" ion ion-ios-bluetooth\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-boat" }),
                  _vm._v(" ion ion-ios-boat\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-body" }),
                  _vm._v(" ion ion-ios-body\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-bonfire" }),
                  _vm._v(" ion ion-ios-bonfire\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-book" }),
                  _vm._v(" ion ion-ios-book\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-bookmark" }),
                  _vm._v(" ion ion-ios-bookmark\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-bookmarks" }),
                  _vm._v(" ion ion-ios-bookmarks\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-bowtie" }),
                  _vm._v(" ion ion-ios-bowtie\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-briefcase" }),
                  _vm._v(" ion ion-ios-briefcase\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-browsers" }),
                  _vm._v(" ion ion-ios-browsers\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-brush" }),
                  _vm._v(" ion ion-ios-brush\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-bug" }),
                  _vm._v(" ion ion-ios-bug\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-build" }),
                  _vm._v(" ion ion-ios-build\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-bulb" }),
                  _vm._v(" ion ion-ios-bulb\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-bus" }),
                  _vm._v(" ion ion-ios-bus\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-business" }),
                  _vm._v(" ion ion-ios-business\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cafe" }),
                  _vm._v(" ion ion-ios-cafe\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-calculator" }),
                  _vm._v(" ion ion-ios-calculator\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-calendar" }),
                  _vm._v(" ion ion-ios-calendar\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-call" }),
                  _vm._v(" ion ion-ios-call\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-camera" }),
                  _vm._v(" ion ion-ios-camera\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-car" }),
                  _vm._v(" ion ion-ios-car\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-card" }),
                  _vm._v(" ion ion-ios-card\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cart" }),
                  _vm._v(" ion ion-ios-cart\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cash" }),
                  _vm._v(" ion ion-ios-cash\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cellular" }),
                  _vm._v(" ion ion-ios-cellular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-chatboxes" }),
                  _vm._v(" ion ion-ios-chatboxes\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-chatbubbles" }),
                  _vm._v(" ion ion-ios-chatbubbles\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-checkbox" }),
                  _vm._v(" ion ion-ios-checkbox\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-checkbox-outline" }),
                  _vm._v(" ion ion-ios-checkbox-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-checkmark" }),
                  _vm._v(" ion ion-ios-checkmark\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-checkmark-circle" }),
                  _vm._v(" ion ion-ios-checkmark-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "ion ion-ios-checkmark-circle-outline"
                  }),
                  _vm._v(" ion ion-ios-checkmark-circle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-clipboard" }),
                  _vm._v(" ion ion-ios-clipboard\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-clock" }),
                  _vm._v(" ion ion-ios-clock\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-close" }),
                  _vm._v(" ion ion-ios-close\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-close-circle" }),
                  _vm._v(" ion ion-ios-close-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-close-circle-outline" }),
                  _vm._v(" ion ion-ios-close-circle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cloud" }),
                  _vm._v(" ion ion-ios-cloud\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cloud-circle" }),
                  _vm._v(" ion ion-ios-cloud-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cloud-done" }),
                  _vm._v(" ion ion-ios-cloud-done\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cloud-download" }),
                  _vm._v(" ion ion-ios-cloud-download\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cloud-outline" }),
                  _vm._v(" ion ion-ios-cloud-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cloud-upload" }),
                  _vm._v(" ion ion-ios-cloud-upload\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cloudy" }),
                  _vm._v(" ion ion-ios-cloudy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cloudy-night" }),
                  _vm._v(" ion ion-ios-cloudy-night\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-code" }),
                  _vm._v(" ion ion-ios-code\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-code-download" }),
                  _vm._v(" ion ion-ios-code-download\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-code-working" }),
                  _vm._v(" ion ion-ios-code-working\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cog" }),
                  _vm._v(" ion ion-ios-cog\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-color-fill" }),
                  _vm._v(" ion ion-ios-color-fill\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-color-filter" }),
                  _vm._v(" ion ion-ios-color-filter\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-color-palette" }),
                  _vm._v(" ion ion-ios-color-palette\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-color-wand" }),
                  _vm._v(" ion ion-ios-color-wand\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-compass" }),
                  _vm._v(" ion ion-ios-compass\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-construct" }),
                  _vm._v(" ion ion-ios-construct\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-contact" }),
                  _vm._v(" ion ion-ios-contact\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-contacts" }),
                  _vm._v(" ion ion-ios-contacts\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-contract" }),
                  _vm._v(" ion ion-ios-contract\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-contrast" }),
                  _vm._v(" ion ion-ios-contrast\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-copy" }),
                  _vm._v(" ion ion-ios-copy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-create" }),
                  _vm._v(" ion ion-ios-create\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-crop" }),
                  _vm._v(" ion ion-ios-crop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cube" }),
                  _vm._v(" ion ion-ios-cube\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-cut" }),
                  _vm._v(" ion ion-ios-cut\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-desktop" }),
                  _vm._v(" ion ion-ios-desktop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-disc" }),
                  _vm._v(" ion ion-ios-disc\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-document" }),
                  _vm._v(" ion ion-ios-document\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-done-all" }),
                  _vm._v(" ion ion-ios-done-all\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-download" }),
                  _vm._v(" ion ion-ios-download\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-easel" }),
                  _vm._v(" ion ion-ios-easel\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-egg" }),
                  _vm._v(" ion ion-ios-egg\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-exit" }),
                  _vm._v(" ion ion-ios-exit\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-expand" }),
                  _vm._v(" ion ion-ios-expand\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-eye" }),
                  _vm._v(" ion ion-ios-eye\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-eye-off" }),
                  _vm._v(" ion ion-ios-eye-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-fastforward" }),
                  _vm._v(" ion ion-ios-fastforward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-female" }),
                  _vm._v(" ion ion-ios-female\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-filing" }),
                  _vm._v(" ion ion-ios-filing\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-film" }),
                  _vm._v(" ion ion-ios-film\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-finger-print" }),
                  _vm._v(" ion ion-ios-finger-print\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-fitness" }),
                  _vm._v(" ion ion-ios-fitness\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-flag" }),
                  _vm._v(" ion ion-ios-flag\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-flame" }),
                  _vm._v(" ion ion-ios-flame\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-flash" }),
                  _vm._v(" ion ion-ios-flash\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-flash-off" }),
                  _vm._v(" ion ion-ios-flash-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-flashlight" }),
                  _vm._v(" ion ion-ios-flashlight\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-flask" }),
                  _vm._v(" ion ion-ios-flask\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-flower" }),
                  _vm._v(" ion ion-ios-flower\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-folder" }),
                  _vm._v(" ion ion-ios-folder\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-folder-open" }),
                  _vm._v(" ion ion-ios-folder-open\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-football" }),
                  _vm._v(" ion ion-ios-football\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-funnel" }),
                  _vm._v(" ion ion-ios-funnel\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-gift" }),
                  _vm._v(" ion ion-ios-gift\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-git-branch" }),
                  _vm._v(" ion ion-ios-git-branch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-git-commit" }),
                  _vm._v(" ion ion-ios-git-commit\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-git-compare" }),
                  _vm._v(" ion ion-ios-git-compare\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-git-merge" }),
                  _vm._v(" ion ion-ios-git-merge\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-git-network" }),
                  _vm._v(" ion ion-ios-git-network\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-git-pull-request" }),
                  _vm._v(" ion ion-ios-git-pull-request\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-glasses" }),
                  _vm._v(" ion ion-ios-glasses\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-globe" }),
                  _vm._v(" ion ion-ios-globe\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-grid" }),
                  _vm._v(" ion ion-ios-grid\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-hammer" }),
                  _vm._v(" ion ion-ios-hammer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-hand" }),
                  _vm._v(" ion ion-ios-hand\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-happy" }),
                  _vm._v(" ion ion-ios-happy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-headset" }),
                  _vm._v(" ion ion-ios-headset\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-heart" }),
                  _vm._v(" ion ion-ios-heart\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-heart-dislike" }),
                  _vm._v(" ion ion-ios-heart-dislike\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-heart-empty" }),
                  _vm._v(" ion ion-ios-heart-empty\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-heart-half" }),
                  _vm._v(" ion ion-ios-heart-half\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-help" }),
                  _vm._v(" ion ion-ios-help\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-help-buoy" }),
                  _vm._v(" ion ion-ios-help-buoy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-help-circle" }),
                  _vm._v(" ion ion-ios-help-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-help-circle-outline" }),
                  _vm._v(" ion ion-ios-help-circle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-home" }),
                  _vm._v(" ion ion-ios-home\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-hourglass" }),
                  _vm._v(" ion ion-ios-hourglass\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-ice-cream" }),
                  _vm._v(" ion ion-ios-ice-cream\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-image" }),
                  _vm._v(" ion ion-ios-image\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-images" }),
                  _vm._v(" ion ion-ios-images\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-infinite" }),
                  _vm._v(" ion ion-ios-infinite\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-information" }),
                  _vm._v(" ion ion-ios-information\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-information-circle" }),
                  _vm._v(" ion ion-ios-information-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", {
                    staticClass: "ion ion-ios-information-circle-outline"
                  }),
                  _vm._v(
                    " ion ion-ios-information-circle-outline\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-jet" }),
                  _vm._v(" ion ion-ios-jet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-journal" }),
                  _vm._v(" ion ion-ios-journal\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-key" }),
                  _vm._v(" ion ion-ios-key\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-keypad" }),
                  _vm._v(" ion ion-ios-keypad\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-laptop" }),
                  _vm._v(" ion ion-ios-laptop\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-leaf" }),
                  _vm._v(" ion ion-ios-leaf\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-link" }),
                  _vm._v(" ion ion-ios-link\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-list" }),
                  _vm._v(" ion ion-ios-list\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-list-box" }),
                  _vm._v(" ion ion-ios-list-box\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-locate" }),
                  _vm._v(" ion ion-ios-locate\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-lock" }),
                  _vm._v(" ion ion-ios-lock\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-log-in" }),
                  _vm._v(" ion ion-ios-log-in\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-log-out" }),
                  _vm._v(" ion ion-ios-log-out\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-magnet" }),
                  _vm._v(" ion ion-ios-magnet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-mail" }),
                  _vm._v(" ion ion-ios-mail\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-mail-open" }),
                  _vm._v(" ion ion-ios-mail-open\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-mail-unread" }),
                  _vm._v(" ion ion-ios-mail-unread\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-male" }),
                  _vm._v(" ion ion-ios-male\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-man" }),
                  _vm._v(" ion ion-ios-man\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-map" }),
                  _vm._v(" ion ion-ios-map\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-medal" }),
                  _vm._v(" ion ion-ios-medal\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-medical" }),
                  _vm._v(" ion ion-ios-medical\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-medkit" }),
                  _vm._v(" ion ion-ios-medkit\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-megaphone" }),
                  _vm._v(" ion ion-ios-megaphone\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-menu" }),
                  _vm._v(" ion ion-ios-menu\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-mic" }),
                  _vm._v(" ion ion-ios-mic\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-mic-off" }),
                  _vm._v(" ion ion-ios-mic-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-microphone" }),
                  _vm._v(" ion ion-ios-microphone\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-moon" }),
                  _vm._v(" ion ion-ios-moon\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-more" }),
                  _vm._v(" ion ion-ios-more\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-move" }),
                  _vm._v(" ion ion-ios-move\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-musical-note" }),
                  _vm._v(" ion ion-ios-musical-note\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-musical-notes" }),
                  _vm._v(" ion ion-ios-musical-notes\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-navigate" }),
                  _vm._v(" ion ion-ios-navigate\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-notifications" }),
                  _vm._v(" ion ion-ios-notifications\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-notifications-off" }),
                  _vm._v(" ion ion-ios-notifications-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-notifications-outline" }),
                  _vm._v(" ion ion-ios-notifications-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-nuclear" }),
                  _vm._v(" ion ion-ios-nuclear\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-nutrition" }),
                  _vm._v(" ion ion-ios-nutrition\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-open" }),
                  _vm._v(" ion ion-ios-open\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-options" }),
                  _vm._v(" ion ion-ios-options\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-outlet" }),
                  _vm._v(" ion ion-ios-outlet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-paper" }),
                  _vm._v(" ion ion-ios-paper\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-paper-plane" }),
                  _vm._v(" ion ion-ios-paper-plane\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-partly-sunny" }),
                  _vm._v(" ion ion-ios-partly-sunny\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-pause" }),
                  _vm._v(" ion ion-ios-pause\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-paw" }),
                  _vm._v(" ion ion-ios-paw\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-people" }),
                  _vm._v(" ion ion-ios-people\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-person" }),
                  _vm._v(" ion ion-ios-person\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-person-add" }),
                  _vm._v(" ion ion-ios-person-add\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-phone-landscape" }),
                  _vm._v(" ion ion-ios-phone-landscape\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-phone-portrait" }),
                  _vm._v(" ion ion-ios-phone-portrait\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-photos" }),
                  _vm._v(" ion ion-ios-photos\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-pie" }),
                  _vm._v(" ion ion-ios-pie\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-pin" }),
                  _vm._v(" ion ion-ios-pin\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-pint" }),
                  _vm._v(" ion ion-ios-pint\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-pizza" }),
                  _vm._v(" ion ion-ios-pizza\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-planet" }),
                  _vm._v(" ion ion-ios-planet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-play" }),
                  _vm._v(" ion ion-ios-play\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-play-circle" }),
                  _vm._v(" ion ion-ios-play-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-podium" }),
                  _vm._v(" ion ion-ios-podium\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-power" }),
                  _vm._v(" ion ion-ios-power\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-pricetag" }),
                  _vm._v(" ion ion-ios-pricetag\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-pricetags" }),
                  _vm._v(" ion ion-ios-pricetags\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-print" }),
                  _vm._v(" ion ion-ios-print\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-pulse" }),
                  _vm._v(" ion ion-ios-pulse\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-qr-scanner" }),
                  _vm._v(" ion ion-ios-qr-scanner\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-quote" }),
                  _vm._v(" ion ion-ios-quote\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-radio" }),
                  _vm._v(" ion ion-ios-radio\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-radio-button-off" }),
                  _vm._v(" ion ion-ios-radio-button-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-radio-button-on" }),
                  _vm._v(" ion ion-ios-radio-button-on\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-rainy" }),
                  _vm._v(" ion ion-ios-rainy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-recording" }),
                  _vm._v(" ion ion-ios-recording\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-redo" }),
                  _vm._v(" ion ion-ios-redo\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-refresh" }),
                  _vm._v(" ion ion-ios-refresh\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-refresh-circle" }),
                  _vm._v(" ion ion-ios-refresh-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-remove" }),
                  _vm._v(" ion ion-ios-remove\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-remove-circle" }),
                  _vm._v(" ion ion-ios-remove-circle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-remove-circle-outline" }),
                  _vm._v(" ion ion-ios-remove-circle-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-reorder" }),
                  _vm._v(" ion ion-ios-reorder\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-repeat" }),
                  _vm._v(" ion ion-ios-repeat\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-resize" }),
                  _vm._v(" ion ion-ios-resize\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-restaurant" }),
                  _vm._v(" ion ion-ios-restaurant\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-return-left" }),
                  _vm._v(" ion ion-ios-return-left\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-return-right" }),
                  _vm._v(" ion ion-ios-return-right\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-reverse-camera" }),
                  _vm._v(" ion ion-ios-reverse-camera\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-rewind" }),
                  _vm._v(" ion ion-ios-rewind\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-ribbon" }),
                  _vm._v(" ion ion-ios-ribbon\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-rocket" }),
                  _vm._v(" ion ion-ios-rocket\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-rose" }),
                  _vm._v(" ion ion-ios-rose\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-sad" }),
                  _vm._v(" ion ion-ios-sad\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-save" }),
                  _vm._v(" ion ion-ios-save\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-school" }),
                  _vm._v(" ion ion-ios-school\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-search" }),
                  _vm._v(" ion ion-ios-search\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-send" }),
                  _vm._v(" ion ion-ios-send\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-settings" }),
                  _vm._v(" ion ion-ios-settings\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-share" }),
                  _vm._v(" ion ion-ios-share\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-share-alt" }),
                  _vm._v(" ion ion-ios-share-alt\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-shirt" }),
                  _vm._v(" ion ion-ios-shirt\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-shuffle" }),
                  _vm._v(" ion ion-ios-shuffle\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-skip-backward" }),
                  _vm._v(" ion ion-ios-skip-backward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-skip-forward" }),
                  _vm._v(" ion ion-ios-skip-forward\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-snow" }),
                  _vm._v(" ion ion-ios-snow\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-speedometer" }),
                  _vm._v(" ion ion-ios-speedometer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-square" }),
                  _vm._v(" ion ion-ios-square\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-square-outline" }),
                  _vm._v(" ion ion-ios-square-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-star" }),
                  _vm._v(" ion ion-ios-star\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-star-half" }),
                  _vm._v(" ion ion-ios-star-half\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-star-outline" }),
                  _vm._v(" ion ion-ios-star-outline\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-stats" }),
                  _vm._v(" ion ion-ios-stats\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-stopwatch" }),
                  _vm._v(" ion ion-ios-stopwatch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-subway" }),
                  _vm._v(" ion ion-ios-subway\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-sunny" }),
                  _vm._v(" ion ion-ios-sunny\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-swap" }),
                  _vm._v(" ion ion-ios-swap\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-switch" }),
                  _vm._v(" ion ion-ios-switch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-sync" }),
                  _vm._v(" ion ion-ios-sync\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-tablet-landscape" }),
                  _vm._v(" ion ion-ios-tablet-landscape\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-tablet-portrait" }),
                  _vm._v(" ion ion-ios-tablet-portrait\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-tennisball" }),
                  _vm._v(" ion ion-ios-tennisball\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-text" }),
                  _vm._v(" ion ion-ios-text\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-thermometer" }),
                  _vm._v(" ion ion-ios-thermometer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-thumbs-down" }),
                  _vm._v(" ion ion-ios-thumbs-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-thumbs-up" }),
                  _vm._v(" ion ion-ios-thumbs-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-thunderstorm" }),
                  _vm._v(" ion ion-ios-thunderstorm\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-time" }),
                  _vm._v(" ion ion-ios-time\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-timer" }),
                  _vm._v(" ion ion-ios-timer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-today" }),
                  _vm._v(" ion ion-ios-today\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-train" }),
                  _vm._v(" ion ion-ios-train\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-transgender" }),
                  _vm._v(" ion ion-ios-transgender\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-trash" }),
                  _vm._v(" ion ion-ios-trash\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-trending-down" }),
                  _vm._v(" ion ion-ios-trending-down\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-trending-up" }),
                  _vm._v(" ion ion-ios-trending-up\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-trophy" }),
                  _vm._v(" ion ion-ios-trophy\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-tv" }),
                  _vm._v(" ion ion-ios-tv\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-umbrella" }),
                  _vm._v(" ion ion-ios-umbrella\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-undo" }),
                  _vm._v(" ion ion-ios-undo\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-unlock" }),
                  _vm._v(" ion ion-ios-unlock\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-videocam" }),
                  _vm._v(" ion ion-ios-videocam\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-volume-high" }),
                  _vm._v(" ion ion-ios-volume-high\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-volume-low" }),
                  _vm._v(" ion ion-ios-volume-low\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-volume-mute" }),
                  _vm._v(" ion ion-ios-volume-mute\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-volume-off" }),
                  _vm._v(" ion ion-ios-volume-off\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-walk" }),
                  _vm._v(" ion ion-ios-walk\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-wallet" }),
                  _vm._v(" ion ion-ios-wallet\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-warning" }),
                  _vm._v(" ion ion-ios-warning\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-watch" }),
                  _vm._v(" ion ion-ios-watch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-water" }),
                  _vm._v(" ion ion-ios-water\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-wifi" }),
                  _vm._v(" ion ion-ios-wifi\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-wine" }),
                  _vm._v(" ion ion-ios-wine\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-ios-woman" }),
                  _vm._v(" ion ion-ios-woman\n            ")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("h4", { staticClass: "card-title mb-4" }, [_vm._v("Logo")]),
              _vm._v(" "),
              _c("div", { staticClass: "row icon-demo-content" }, [
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-android" }),
                  _vm._v(" ion ion-logo-android\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-angular" }),
                  _vm._v(" ion ion-logo-angular\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-apple" }),
                  _vm._v(" ion ion-logo-apple\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-bitbucket" }),
                  _vm._v(" ion ion-logo-bitbucket\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-bitcoin" }),
                  _vm._v(" ion ion-logo-bitcoin\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-buffer" }),
                  _vm._v(" ion ion-logo-buffer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-chrome" }),
                  _vm._v(" ion ion-logo-chrome\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-closed-captioning" }),
                  _vm._v(" ion ion-logo-closed-captioning\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-codepen" }),
                  _vm._v(" ion ion-logo-codepen\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-css3" }),
                  _vm._v(" ion ion-logo-css3\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-designernews" }),
                  _vm._v(" ion ion-logo-designernews\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-dribbble" }),
                  _vm._v(" ion ion-logo-dribbble\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-dropbox" }),
                  _vm._v(" ion ion-logo-dropbox\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-euro" }),
                  _vm._v(" ion ion-logo-euro\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-facebook" }),
                  _vm._v(" ion ion-logo-facebook\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-flickr" }),
                  _vm._v(" ion ion-logo-flickr\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-foursquare" }),
                  _vm._v(" ion ion-logo-foursquare\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-freebsd-devil" }),
                  _vm._v(" ion ion-logo-freebsd-devil\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-game-controller-a" }),
                  _vm._v(" ion ion-logo-game-controller-a\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-game-controller-b" }),
                  _vm._v(" ion ion-logo-game-controller-b\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-github" }),
                  _vm._v(" ion ion-logo-github\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-google" }),
                  _vm._v(" ion ion-logo-google\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-googleplus" }),
                  _vm._v(" ion ion-logo-googleplus\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-hackernews" }),
                  _vm._v(" ion ion-logo-hackernews\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-html5" }),
                  _vm._v(" ion ion-logo-html5\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-instagram" }),
                  _vm._v(" ion ion-logo-instagram\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-ionic" }),
                  _vm._v(" ion ion-logo-ionic\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-ionitron" }),
                  _vm._v(" ion ion-logo-ionitron\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-javascript" }),
                  _vm._v(" ion ion-logo-javascript\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-linkedin" }),
                  _vm._v(" ion ion-logo-linkedin\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-markdown" }),
                  _vm._v(" ion ion-logo-markdown\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-model-s" }),
                  _vm._v(" ion ion-logo-model-s\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-no-smoking" }),
                  _vm._v(" ion ion-logo-no-smoking\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-nodejs" }),
                  _vm._v(" ion ion-logo-nodejs\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-npm" }),
                  _vm._v(" ion ion-logo-npm\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-octocat" }),
                  _vm._v(" ion ion-logo-octocat\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-pinterest" }),
                  _vm._v(" ion ion-logo-pinterest\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-playstation" }),
                  _vm._v(" ion ion-logo-playstation\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-polymer" }),
                  _vm._v(" ion ion-logo-polymer\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-python" }),
                  _vm._v(" ion ion-logo-python\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-reddit" }),
                  _vm._v(" ion ion-logo-reddit\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-rss" }),
                  _vm._v(" ion ion-logo-rss\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-sass" }),
                  _vm._v(" ion ion-logo-sass\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-skype" }),
                  _vm._v(" ion ion-logo-skype\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-slack" }),
                  _vm._v(" ion ion-logo-slack\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-snapchat" }),
                  _vm._v(" ion ion-logo-snapchat\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-steam" }),
                  _vm._v(" ion ion-logo-steam\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-tumblr" }),
                  _vm._v(" ion ion-logo-tumblr\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-tux" }),
                  _vm._v(" ion ion-logo-tux\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-twitch" }),
                  _vm._v(" ion ion-logo-twitch\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-twitter" }),
                  _vm._v(" ion ion-logo-twitter\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-usd" }),
                  _vm._v(" ion ion-logo-usd\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-vimeo" }),
                  _vm._v(" ion ion-logo-vimeo\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-vk" }),
                  _vm._v(" ion ion-logo-vk\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-whatsapp" }),
                  _vm._v(" ion ion-logo-whatsapp\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-windows" }),
                  _vm._v(" ion ion-logo-windows\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-wordpress" }),
                  _vm._v(" ion ion-logo-wordpress\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-xbox" }),
                  _vm._v(" ion ion-logo-xbox\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-xing" }),
                  _vm._v(" ion ion-logo-xing\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-yahoo" }),
                  _vm._v(" ion ion-logo-yahoo\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-yen" }),
                  _vm._v(" ion ion-logo-yen\n            ")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6" }, [
                  _c("i", { staticClass: "ion ion-logo-youtube" }),
                  _vm._v(" ion ion-logo-youtube\n            ")
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