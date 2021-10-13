(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_charts_chartist_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/chartist.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/chartist.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/widgets/chart'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _data_chartist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-chartist */ "./resources/js/router/views/charts/data-chartist.js");





/**
 * Chartist Chart component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Chartist chart",
    meta: [{
      name: "description",
      content: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }]
  },
  components: {
    Layout: _layouts_main__WEBPACK_IMPORTED_MODULE_0__.default,
    PageHeader: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    Chart: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/widgets/chart'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      overlappingBarChart: _data_chartist__WEBPACK_IMPORTED_MODULE_2__.overlappingBarChart,
      stackBarChart: _data_chartist__WEBPACK_IMPORTED_MODULE_2__.stackBarChart,
      donutAnimateChart: _data_chartist__WEBPACK_IMPORTED_MODULE_2__.donutAnimateChart,
      simplePieChart: _data_chartist__WEBPACK_IMPORTED_MODULE_2__.simplePieChart,
      smilAnimationChart: _data_chartist__WEBPACK_IMPORTED_MODULE_2__.smilAnimationChart,
      simpleLineChart: _data_chartist__WEBPACK_IMPORTED_MODULE_2__.simpleLineChart,
      title: "Chartist Chart",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Charts",
        href: "/"
      }, {
        text: "Chartist Chart",
        active: true
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/router/views/charts/data-chartist.js":
/*!***********************************************************!*\
  !*** ./resources/js/router/views/charts/data-chartist.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "overlappingBarChart": function() { return /* binding */ overlappingBarChart; },
/* harmony export */   "stackBarChart": function() { return /* binding */ stackBarChart; },
/* harmony export */   "donutAnimateChart": function() { return /* binding */ donutAnimateChart; },
/* harmony export */   "simplePieChart": function() { return /* binding */ simplePieChart; },
/* harmony export */   "smilAnimationChart": function() { return /* binding */ smilAnimationChart; },
/* harmony export */   "simpleLineChart": function() { return /* binding */ simpleLineChart; }
/* harmony export */ });
var overlappingBarChart = {
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    series: [[5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8], [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]]
  },
  options: {
    seriesBarDistance: 10,
    height: 300,
    responsiveOptions: [['screen and (max-width: 640px)', {
      seriesBarDistance: 5,
      axisX: {
        labelInterpolationFnc: function labelInterpolationFnc(value) {
          return value[0];
        }
      }
    }]]
  }
};
var stackBarChart = {
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6'],
    series: [[800000, 1200000, 1400000, 1300000, 1520000, 1400000], [200000, 400000, 500000, 300000, 452000, 500000], [160000, 290000, 410000, 600000, 588000, 410000]]
  },
  options: {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: function labelInterpolationFnc(value) {
        return value / 1000 + 'k';
      }
    },
    height: 300
  }
};
var donutAnimateChart = {
  data: {
    series: [10, 20, 50, 20, 5, 50, 15],
    labels: [1, 2, 3, 4, 5, 6, 7]
  },
  options: {
    donut: true,
    showLabel: false,
    height: 300
  }
};
var simplePieChart = {
  data: {
    series: [5, 3, 4]
  },
  options: {
    height: 300,
    showLabel: false
  }
};
var smilAnimationChart = {
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    series: [[12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6], [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5], [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4], [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]]
  },
  options: {
    height: 300
  }
};
var simpleLineChart = {
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    series: [[12, 9, 7, 8, 5], [2, 1, 3.5, 7, 3], [1, 3, 4, 5, 6]]
  },
  options: {
    height: 300,
    fullWidth: true
  }
};


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

/***/ "./resources/js/router/views/charts/chartist.vue":
/*!*******************************************************!*\
  !*** ./resources/js/router/views/charts/chartist.vue ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chartist_vue_vue_type_template_id_74df947d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chartist.vue?vue&type=template&id=74df947d& */ "./resources/js/router/views/charts/chartist.vue?vue&type=template&id=74df947d&");
/* harmony import */ var _chartist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chartist.vue?vue&type=script&lang=js& */ "./resources/js/router/views/charts/chartist.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _chartist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _chartist_vue_vue_type_template_id_74df947d___WEBPACK_IMPORTED_MODULE_0__.render,
  _chartist_vue_vue_type_template_id_74df947d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/charts/chartist.vue"
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

/***/ "./resources/js/router/views/charts/chartist.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/router/views/charts/chartist.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chartist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./chartist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/chartist.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chartist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/charts/chartist.vue?vue&type=template&id=74df947d&":
/*!**************************************************************************************!*\
  !*** ./resources/js/router/views/charts/chartist.vue?vue&type=template&id=74df947d& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chartist_vue_vue_type_template_id_74df947d___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chartist_vue_vue_type_template_id_74df947d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chartist_vue_vue_type_template_id_74df947d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./chartist.vue?vue&type=template&id=74df947d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/chartist.vue?vue&type=template&id=74df947d&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/chartist.vue?vue&type=template&id=74df947d&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/chartist.vue?vue&type=template&id=74df947d& ***!
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
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body", attrs: { dir: "ltr" } },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Overlapping bars on mobile")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("86541")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Activated")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("2541")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Pending")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("102030")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Deactivated")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("chartist", {
                  attrs: {
                    ratio: "ct-chart",
                    data: _vm.overlappingBarChart.data,
                    options: _vm.overlappingBarChart.options,
                    type: "Bar"
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body", attrs: { dir: "ltr" } },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Stacked bar chart")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("5241")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Activated")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("65411")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Pending")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("51654")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Deactivated")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("chartist", {
                  attrs: {
                    ratio: "ct-chart",
                    data: _vm.stackBarChart.data,
                    options: _vm.stackBarChart.options,
                    type: "Bar"
                  }
                })
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
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Animating a Donut with Svg.animate")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("748949")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Activated")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("5181")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Pending")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("101025")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Deactivated")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("chartist", {
                  attrs: {
                    ratio: "ct-chart",
                    data: _vm.donutAnimateChart.data,
                    options: _vm.donutAnimateChart.options,
                    type: "Pie"
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Simple pie chart")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("48484")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Activated")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("48652")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Pending")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("85412")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Deactivated")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("chartist", {
                  attrs: {
                    ratio: "ct-chart",
                    data: _vm.simplePieChart.data,
                    options: _vm.simplePieChart.options,
                    type: "Pie"
                  }
                })
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
              { staticClass: "card-body", attrs: { dir: "ltr" } },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Advanced Smil Animations")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("45410")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Activated")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("4442")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Pending")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("3201")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Deactivated")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("chartist", {
                  attrs: {
                    ratio: "ct-chart",
                    data: _vm.smilAnimationChart.data,
                    options: _vm.smilAnimationChart.options,
                    type: "Line"
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body", attrs: { dir: "ltr" } },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Simple line chart")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("44242")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Activated")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("75221")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Pending")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("65212")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Deactivated")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("chartist", {
                  attrs: {
                    ratio: "ct-chart",
                    data: _vm.simpleLineChart.data,
                    options: _vm.simpleLineChart.options,
                    type: "Line"
                  }
                })
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
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Line chart with area")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row justify-content-center" }, [
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("4234")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Activated")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("64521")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Pending")
                      ])
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-4" }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("h5", { staticClass: "mb-0 font-size-20" }, [
                        _vm._v("94521")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Deactivated")
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("Chart")
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