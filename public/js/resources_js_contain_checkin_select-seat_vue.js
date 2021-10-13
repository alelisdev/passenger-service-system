(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_contain_checkin_select-seat_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BaseTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/BaseTable */ "./resources/js/components/BaseTable.vue");
/* harmony import */ var _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/BaseButton.vue */ "./resources/js/components/BaseButton.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");




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
    title: "Select Seat",
    meta: [{
      name: "description",
      content: ""
    }]
  },
  components: {
    BaseTable: _components_BaseTable__WEBPACK_IMPORTED_MODULE_4__["default"],
    BaseButton: _components_BaseButton_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      flightTableData: [],
      seats: []
    };
  },
  watch: {
    passengerInfo: function passengerInfo() {
      this.flightTableData.push(this.passengerInfo);
      this.getFlightPassengers(this.passengerInfo.aircraft_flight_id);
    },
    flightPassengers: function flightPassengers() {
      this.seats = [];
      var that = this;
      this.flightPassengers.forEach(function (item, index) {
        if (item.seat != null && item.seat != '') {
          if (item.id == that.passengerInfo.id) {
            that.seats[item.seat] = true;
          } else {
            document.getElementById(item.seat).disabled = true;
          }
        }
      });
    }
  },
  computed: (0,E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapGetters)(['passengerInfo', 'currentPassenger', 'flightPassengers'])),
  mounted: function mounted() {
    this.initCheckin(this.currentPassenger.book_reference);
  },
  methods: (0,E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])((0,E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, (0,vuex__WEBPACK_IMPORTED_MODULE_6__.mapActions)(['initCheckin', 'getFlightPassengers', 'passengerSeatSave'])), {}, {
    continuePage: function continuePage() {
      var _this = this;

      var passenger_seats = [];

      for (var _i = 0, _Object$entries = Object.entries(this.seats); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = (0,E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        if (value == true) {
          passenger_seats.push(key);
        }
      }

      if (passenger_seats.length == 1) {
        this.passengerSeatSave({
          passengerId: this.passengerInfo.passenger_id,
          flightId: this.passengerInfo.aircraft_flight_id,
          seat: passenger_seats[0],
          statusFlag: true
        }).then(function (res) {
          // this.$notify({
          //     message: 'Successfully Saved',
          //     timeout: 5000,
          //     icon: 'ni ni-bell-55',
          //     type: 'success'
          //   });
          _this.$router.push({
            name: "Confirm"
          });
        })["catch"](function (error) {});
      } else {
        // console.log(passenger_seats)
        this.$notify({
          message: 'You can select only one seat.',
          timeout: 5000,
          icon: 'ni ni-bell-55',
          type: 'warning'
        });
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js").f;

// `Object.{ entries, values }` methods implementation
var createMethod = function (TO_ENTRIES) {
  return function (it) {
    var O = toIndexedObject(it);
    var keys = objectKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {
        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};

module.exports = {
  // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries
  entries: createMethod(true),
  // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values
  values: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.entries.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $entries = __webpack_require__(/*! ../internals/object-to-array */ "./node_modules/core-js/internals/object-to-array.js").entries;

// `Object.entries` method
// https://tc39.es/ecma262/#sec-object.entries
$({ target: 'Object', stat: true }, {
  entries: function entries(O) {
    return $entries(O);
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".seat-config {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.seat-config li {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.seat-config .seat {\n  display: block;\n  position: relative;\n  width: 30px;\n  height: 30px;\n  padding: 4px 0;\n  border-radius: 5px;\n}\n.seat-config .seat.available-seat {\n  background: #6acc6a;\n}\n.seat-config .seat.reserved-seat {\n  background: #ff844a;\n}\n.seat-config .seat.disabled-seat {\n  background: #dddddd;\n}\n.seat-config .seat:before {\n  content: \"\";\n  position: absolute;\n  width: 75%;\n  height: 80%;\n  top: 1px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%);\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 3px;\n}\n.seat-config .description {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_select_seat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./select-seat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_select_seat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_select_seat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/contain/checkin/select-seat.vue":
/*!******************************************************!*\
  !*** ./resources/js/contain/checkin/select-seat.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_seat_vue_vue_type_template_id_7463080b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./select-seat.vue?vue&type=template&id=7463080b& */ "./resources/js/contain/checkin/select-seat.vue?vue&type=template&id=7463080b&");
/* harmony import */ var _select_seat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select-seat.vue?vue&type=script&lang=js& */ "./resources/js/contain/checkin/select-seat.vue?vue&type=script&lang=js&");
/* harmony import */ var _select_seat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-seat.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/contain/checkin/select-seat.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _select_seat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _select_seat_vue_vue_type_template_id_7463080b___WEBPACK_IMPORTED_MODULE_0__.render,
  _select_seat_vue_vue_type_template_id_7463080b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/contain/checkin/select-seat.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/contain/checkin/select-seat.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/contain/checkin/select-seat.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_select_seat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./select-seat.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_select_seat_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/contain/checkin/select-seat.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./resources/js/contain/checkin/select-seat.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_select_seat_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./select-seat.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/contain/checkin/select-seat.vue?vue&type=template&id=7463080b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/contain/checkin/select-seat.vue?vue&type=template&id=7463080b& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_seat_vue_vue_type_template_id_7463080b___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_seat_vue_vue_type_template_id_7463080b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_select_seat_vue_vue_type_template_id_7463080b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./select-seat.vue?vue&type=template&id=7463080b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=template&id=7463080b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=template&id=7463080b&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/select-seat.vue?vue&type=template&id=7463080b& ***!
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
    "div",
    [
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "py-6", attrs: { xl: "6", lg: "6", md: "6" } },
            [
              _c(
                "b-container",
                [
                  _c(
                    "b-row",
                    { staticClass: "d-flex jsutify-content-end" },
                    [
                      _c("b-col", { attrs: { xl: "4", lg: "4", md: "4" } }),
                      _vm._v(" "),
                      _c("b-col", { attrs: { xl: "8", lg: "8", md: "8" } }, [
                        _c("span", [_vm._v("Step 5")]),
                        _vm._v(" "),
                        _c("h1", [_vm._v("Select your seat")]),
                        _vm._v(" "),
                        _c("div", {}, [
                          _c("span", [
                            _c("i", {
                              staticClass: "far fa-dot-circle",
                              staticStyle: {
                                "font-size": "8px",
                                "margin-right": "8px"
                              }
                            }),
                            _vm._v(
                              " Select passenger and click on the map below for the preferred seat"
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", {}, [
                          _c("span", [
                            _c("i", {
                              staticClass: "far fa-dot-circle",
                              staticStyle: {
                                "font-size": "8px",
                                "margin-right": "8px"
                              }
                            }),
                            _vm._v(
                              " To finish, click continue to accept seating"
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mt-5 mb-5" }, [
                          _c(
                            "ul",
                            { staticClass: "seat-config d-flex flex-column" },
                            [
                              _c(
                                "li",
                                {
                                  staticStyle: {
                                    "padding-bottom": "10px",
                                    "padding-top": "10px",
                                    "border-bottom": "solid 1px #dfdfdf"
                                  }
                                },
                                [
                                  _c("span", {
                                    staticClass: "seat available-seat"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "description" }, [
                                    _vm._v("Seat Available")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticStyle: {
                                    "padding-bottom": "10px",
                                    "padding-top": "10px",
                                    "border-bottom": "solid 1px #dfdfdf"
                                  }
                                },
                                [
                                  _c("span", {
                                    staticClass: "seat disabled-seat"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "description" }, [
                                    _vm._v("Not Available")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "li",
                                {
                                  staticStyle: {
                                    "padding-bottom": "10px",
                                    "padding-top": "10px",
                                    "border-bottom": "solid 1px #dfdfdf"
                                  }
                                },
                                [
                                  _c("span", {
                                    staticClass: "seat reserved-seat"
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "description" }, [
                                    _vm._v("Your Seat")
                                  ])
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { xl: "6", lg: "6", md: "6" } },
            [
              _c(
                "b-card-group",
                [
                  _c(
                    "card",
                    {
                      staticClass: "border-0",
                      attrs: { "body-classes": "px-md-4 px-lg-5" }
                    },
                    [
                      _c("div", { staticClass: "plane" }, [
                        _c("div", { staticClass: "cockpit" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "exit exit--front fuselage" }),
                        _vm._v(" "),
                        _c(
                          "ol",
                          { staticClass: "cabin fuselage" },
                          _vm._l(20, function(i) {
                            return _c("li", { key: i, staticClass: "row" }, [
                              _c(
                                "ol",
                                { staticClass: "seats", attrs: { type: "A" } },
                                [
                                  _c("li", { staticClass: "seat" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.seats[i + "A"],
                                          expression: "seats[i+'A']"
                                        }
                                      ],
                                      attrs: { type: "checkbox", id: i + "A" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.seats[i + "A"]
                                        )
                                          ? _vm._i(_vm.seats[i + "A"], null) >
                                            -1
                                          : _vm.seats[i + "A"]
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.seats[i + "A"],
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.seats,
                                                  i + "A",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.seats,
                                                  i + "A",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(_vm.seats, i + "A", $$c)
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: i + "A" } }, [
                                      _vm._v(_vm._s(i) + "A")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "seat" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.seats[i + "B"],
                                          expression: "seats[i+'B']"
                                        }
                                      ],
                                      attrs: { type: "checkbox", id: i + "B" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.seats[i + "B"]
                                        )
                                          ? _vm._i(_vm.seats[i + "B"], null) >
                                            -1
                                          : _vm.seats[i + "B"]
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.seats[i + "B"],
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.seats,
                                                  i + "B",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.seats,
                                                  i + "B",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(_vm.seats, i + "B", $$c)
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: i + "B" } }, [
                                      _vm._v(_vm._s(i) + "B")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "seat" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.seats[i + "C"],
                                          expression: "seats[i+'C']"
                                        }
                                      ],
                                      attrs: { type: "checkbox", id: i + "C" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.seats[i + "C"]
                                        )
                                          ? _vm._i(_vm.seats[i + "C"], null) >
                                            -1
                                          : _vm.seats[i + "C"]
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.seats[i + "C"],
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.seats,
                                                  i + "C",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.seats,
                                                  i + "C",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(_vm.seats, i + "C", $$c)
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: i + "C" } }, [
                                      _vm._v(_vm._s(i) + "C")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "seat" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.seats[i + "D"],
                                          expression: "seats[i+'D']"
                                        }
                                      ],
                                      attrs: { type: "checkbox", id: i + "D" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.seats[i + "D"]
                                        )
                                          ? _vm._i(_vm.seats[i + "D"], null) >
                                            -1
                                          : _vm.seats[i + "D"]
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.seats[i + "D"],
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.seats,
                                                  i + "D",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.seats,
                                                  i + "D",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(_vm.seats, i + "D", $$c)
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: i + "D" } }, [
                                      _vm._v(_vm._s(i) + "D")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c("li", { staticClass: "seat" }, [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.seats[i + "E"],
                                          expression: "seats[i+'E']"
                                        }
                                      ],
                                      attrs: { type: "checkbox", id: i + "E" },
                                      domProps: {
                                        checked: Array.isArray(
                                          _vm.seats[i + "E"]
                                        )
                                          ? _vm._i(_vm.seats[i + "E"], null) >
                                            -1
                                          : _vm.seats[i + "E"]
                                      },
                                      on: {
                                        change: function($event) {
                                          var $$a = _vm.seats[i + "E"],
                                            $$el = $event.target,
                                            $$c = $$el.checked ? true : false
                                          if (Array.isArray($$a)) {
                                            var $$v = null,
                                              $$i = _vm._i($$a, $$v)
                                            if ($$el.checked) {
                                              $$i < 0 &&
                                                _vm.$set(
                                                  _vm.seats,
                                                  i + "E",
                                                  $$a.concat([$$v])
                                                )
                                            } else {
                                              $$i > -1 &&
                                                _vm.$set(
                                                  _vm.seats,
                                                  i + "E",
                                                  $$a
                                                    .slice(0, $$i)
                                                    .concat($$a.slice($$i + 1))
                                                )
                                            }
                                          } else {
                                            _vm.$set(_vm.seats, i + "E", $$c)
                                          }
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("label", { attrs: { for: i + "E" } }, [
                                      _vm._v(_vm._s(i) + "E")
                                    ])
                                  ])
                                ]
                              )
                            ])
                          }),
                          0
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "exit exit--back fuselage" })
                      ])
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
      ),
      _vm._v(" "),
      _c("b-container", [
        _c(
          "div",
          { staticClass: "text-center" },
          [
            _c(
              "router-link",
              {
                staticClass: "btn base-button btn-secondary btn-md",
                attrs: { to: "/declaration" }
              },
              [_vm._v("GO BACK")]
            ),
            _vm._v(" "),
            _c(
              "base-button",
              {
                staticClass: "bg-yellow",
                attrs: { size: "md", type: "warning" },
                on: {
                  click: function($event) {
                    return _vm.continuePage()
                  }
                }
              },
              [_vm._v("CONFIRM")]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithHoles; }
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArrayLimit; }
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableRest; }
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _slicedToArray; }
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ })

}]);