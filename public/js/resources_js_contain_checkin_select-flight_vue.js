(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_contain_checkin_select-flight_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-flight.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-flight.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _components_BaseTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/BaseTable */ "./resources/js/components/BaseTable.vue");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Select Flight",
    meta: [{
      name: "description",
      content: ""
    }]
  },
  components: {
    BaseTable: _components_BaseTable__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      flightTableData: []
    };
  },
  watch: {
    aircraftFlight: function aircraftFlight() {
      this.flightTableData = [];
      this.flightTableData.push(this.aircraftFlight);
    }
  },
  computed: (0,E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, mapGetters(['flightPassengers'])),
  mounted: function mounted() {
    this.getFlightPassengers(this.$route.params.flightId);
    this.initPassengers();
  },
  methods: (0,E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)((0,E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.default)({}, mapActions(['getFlightPassengers'])), {}, {
    paginationChanged: function paginationChanged(page) {
      this.pagination.currentPage = page;
    }
  })
});

/***/ }),

/***/ "./resources/js/contain/checkin/select-flight.vue":
/*!********************************************************!*\
  !*** ./resources/js/contain/checkin/select-flight.vue ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_flight_vue_vue_type_template_id_7ffacd76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-flight.vue?vue&type=template&id=7ffacd76& */ "./resources/js/contain/checkin/select-flight.vue?vue&type=template&id=7ffacd76&");
/* harmony import */ var _select_flight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-flight.vue?vue&type=script&lang=js& */ "./resources/js/contain/checkin/select-flight.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _select_flight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _select_flight_vue_vue_type_template_id_7ffacd76___WEBPACK_IMPORTED_MODULE_0__.render,
  _select_flight_vue_vue_type_template_id_7ffacd76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/contain/checkin/select-flight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/contain/checkin/select-flight.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/contain/checkin/select-flight.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_select_flight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./select-flight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-flight.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_select_flight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/contain/checkin/select-flight.vue?vue&type=template&id=7ffacd76&":
/*!***************************************************************************************!*\
  !*** ./resources/js/contain/checkin/select-flight.vue?vue&type=template&id=7ffacd76& ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_flight_vue_vue_type_template_id_7ffacd76___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_flight_vue_vue_type_template_id_7ffacd76___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_flight_vue_vue_type_template_id_7ffacd76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./select-flight.vue?vue&type=template&id=7ffacd76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-flight.vue?vue&type=template&id=7ffacd76&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-flight.vue?vue&type=template&id=7ffacd76&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-flight.vue?vue&type=template&id=7ffacd76& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "header bg-gradient-success py-7 py-lg-8 pt-lg-9" },
      [
        _c("div", [
          _c(
            "div",
            { staticClass: "header-body text-center mb-7" },
            [
              _c(
                "b-row",
                { staticClass: "justify-content-center" },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "px-5",
                      attrs: { xl: "5", lg: "6", md: "8" }
                    },
                    [
                      _c("h1", { staticClass: "text-white" }, [
                        _vm._v("Select Flight for Check-in")
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "separator separator-bottom separator-skew zindex-100"
          },
          [
            _c(
              "svg",
              {
                attrs: {
                  x: "0",
                  y: "0",
                  viewBox: "0 0 2560 100",
                  preserveAspectRatio: "none",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg"
                }
              },
              [
                _c("polygon", {
                  staticClass: "fill-default",
                  attrs: { points: "2560 0 2560 100 0 100" }
                })
              ]
            )
          ]
        )
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "mt--8 pb-5" },
      [
        _c(
          "b-row",
          { staticClass: "justify-content-center mx-0" },
          [
            _c(
              "b-col",
              {
                staticClass: "px-0",
                attrs: { lg: "8", md: "9", sm: "10", cols: "10" }
              },
              [
                _c(
                  "b-card-group",
                  [
                    _c(
                      "card",
                      {
                        staticClass: "border-0 text-center",
                        attrs: { "body-classes": "px-md-3 px-lg-4" }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "table-responsive" },
                          [
                            _c(
                              "base-table",
                              {
                                staticClass: "table table-dark",
                                attrs: { data: _vm.flightTableData },
                                scopedSlots: _vm._u([
                                  {
                                    key: "default",
                                    fn: function(ref) {
                                      var row = ref.row
                                      return [
                                        _c(
                                          "td",
                                          { staticClass: "text-center" },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                row.aircraftFlight.flight
                                                  .airline_code
                                              )
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "text-center"
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "text-center"
                                        }),
                                        _vm._v(" "),
                                        _c("td", {
                                          staticClass: "text-center"
                                        }),
                                        _vm._v(" "),
                                        _c("td", { staticClass: "text-center" })
                                      ]
                                    }
                                  }
                                ])
                              },
                              [
                                _c("template", { slot: "columns" }, [
                                  _c(
                                    "th",
                                    {
                                      staticClass: "text-center",
                                      attrs: { scope: "col" }
                                    },
                                    [_vm._v("Flight No.")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass: "text-center",
                                      attrs: { scope: "col" }
                                    },
                                    [_vm._v("Date")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass: "text-center",
                                      attrs: { scope: "col" }
                                    },
                                    [_vm._v("Dep")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass: "text-center",
                                      attrs: { scope: "col" }
                                    },
                                    [_vm._v("Arr")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "th",
                                    {
                                      staticClass: "text-center",
                                      attrs: { scope: "col" }
                                    },
                                    [_vm._v("Status")]
                                  )
                                ])
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ]
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
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);