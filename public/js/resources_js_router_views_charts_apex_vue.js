(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_charts_apex_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/apex.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/apex.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _data_apex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-apex */ "./resources/js/router/views/charts/data-apex.js");




/**
 * Apex-chart component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Apex chart",
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
      linewithDataChart: _data_apex__WEBPACK_IMPORTED_MODULE_2__.linewithDataChart,
      stackedAreaChart: _data_apex__WEBPACK_IMPORTED_MODULE_2__.stackedAreaChart,
      basicColumChart: _data_apex__WEBPACK_IMPORTED_MODULE_2__.basicColumChart,
      nagativeValueBarChart: _data_apex__WEBPACK_IMPORTED_MODULE_2__.nagativeValueBarChart,
      lineColumAreaChart: _data_apex__WEBPACK_IMPORTED_MODULE_2__.lineColumAreaChart,
      simplePieChart: _data_apex__WEBPACK_IMPORTED_MODULE_2__.simplePieChart,
      simpleBubbleChart: _data_apex__WEBPACK_IMPORTED_MODULE_2__.simpleBubbleChart,
      basicRadialBarChart: _data_apex__WEBPACK_IMPORTED_MODULE_2__.basicRadialBarChart,
      strokedCircularGuage: _data_apex__WEBPACK_IMPORTED_MODULE_2__.strokedCircularGuage,
      title: "Apexcharts",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Charts",
        href: "/"
      }, {
        text: "Apexcharts",
        active: true
      }]
    };
  }
});

/***/ }),

/***/ "./resources/js/router/views/charts/data-apex.js":
/*!*******************************************************!*\
  !*** ./resources/js/router/views/charts/data-apex.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "linewithDataChart": function() { return /* binding */ linewithDataChart; },
/* harmony export */   "stackedAreaChart": function() { return /* binding */ stackedAreaChart; },
/* harmony export */   "basicColumChart": function() { return /* binding */ basicColumChart; },
/* harmony export */   "nagativeValueBarChart": function() { return /* binding */ nagativeValueBarChart; },
/* harmony export */   "lineColumAreaChart": function() { return /* binding */ lineColumAreaChart; },
/* harmony export */   "simpleBubbleChart": function() { return /* binding */ simpleBubbleChart; },
/* harmony export */   "simplePieChart": function() { return /* binding */ simplePieChart; },
/* harmony export */   "basicRadialBarChart": function() { return /* binding */ basicRadialBarChart; },
/* harmony export */   "strokedCircularGuage": function() { return /* binding */ strokedCircularGuage; }
/* harmony export */ });
function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = baseval;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    series.push([x, y]);
    baseval += 86400000;
    i++;
  }

  return series;
}

function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];

  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }

  return series;
}

var linewithDataChart = {
  chartOptions: {
    chart: {
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    colors: ['#626ed4', '#02a499'],
    dataLabels: {
      enabled: true
    },
    stroke: {
      width: [3, 3],
      curve: 'smooth'
    },
    title: {
      text: 'Average High & Low Temperature',
      align: 'left',
      style: {
        fontSize: '14px',
        color: '#666'
      }
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'],
        // takes an array which will be repeated on columns
        opacity: 0.2
      },
      borderColor: '#f1f3fa'
    },
    markers: {
      style: 'inverted',
      size: 6
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      title: {
        text: 'Month'
      }
    },
    yaxis: {
      title: {
        text: 'Temperature'
      },
      min: 5,
      max: 40
    },
    legend: {
      position: 'top',
      horizontalAlign: 'right',
      floating: true,
      offsetY: -25,
      offsetX: -5
    },
    responsive: [{
      breakpoint: 600,
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        legend: {
          show: false
        }
      }
    }]
  },
  series: [{
    name: 'High - 2018',
    data: [28, 29, 33, 36, 32, 32, 33]
  }, {
    name: 'Low - 2018',
    data: [12, 11, 14, 18, 17, 13, 13]
  }]
};
var stackedAreaChart = {
  chartOptions: {
    chart: {
      stacked: true,
      events: {
        selection: function selection(chart, e) {
          // eslint-disable-next-line no-console
          console.log(new Date(e.xaxis.min));
        }
      }
    },
    colors: ['#626ed4', '#02a499', '#dee2e6'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [2],
      curve: 'smooth'
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.6,
        opacityTo: 0.8
      }
    },
    legend: {
      show: false
    },
    xaxis: {
      type: 'datetime'
    }
  },
  series: [{
    name: 'South',
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  }, {
    name: 'North',
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 20
    })
  }, {
    name: 'Central',
    data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 15
    })
  }]
};
var basicColumChart = {
  chartOptions: {
    chart: {
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: 'rounded',
        columnWidth: '55%'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    colors: ['#626ed4', '#02a499', '#dee2e6'],
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
    },
    legend: {
      offsetY: -5
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    grid: {
      row: {
        colors: ['transparent', 'transparent'],
        // takes an array which will be repeated on columns
        opacity: 0.2
      },
      borderColor: '#f1f3fa'
    },
    tooltip: {
      y: {
        formatter: function formatter(val) {
          return '$ ' + val + ' thousands';
        }
      }
    }
  },
  series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }]
};
var nagativeValueBarChart = {
  chartOptions: {
    chart: {
      stacked: true,
      toolbar: {
        show: false
      }
    },
    colors: ['#626ed4', '#02a499'],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    grid: {
      xaxis: {
        showLines: false
      },
      borderColor: '#f1f3fa'
    },
    yaxis: {
      min: -5,
      max: 5,
      title: {// text: 'Age',
      }
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function formatter(val) {
          return val;
        }
      },
      y: {
        formatter: function formatter(val) {
          return Math.abs(val) + '%';
        }
      }
    },
    xaxis: {
      categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59', '50-54', '45-49', '40-44', '35-39', '30-34', '25-29', '20-24', '15-19', '10-14', '5-9', '0-4'],
      title: {
        text: 'Percent'
      },
      labels: {
        formatter: function formatter(val) {
          return Math.abs(Math.round(val)) + '%';
        }
      }
    },
    legend: {
      offsetY: -5
    }
  },
  series: [{
    name: 'Males',
    data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3]
  }, {
    name: 'Females',
    data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8]
  }]
};
var lineColumAreaChart = {
  chartOptions: {
    chart: {
      padding: {
        right: 0,
        left: 0
      },
      stacked: false,
      toolbar: {
        show: false
      }
    },
    stroke: {
      width: [0, 2, 4],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    colors: ['#626ed4', '#02a499', '#f1556c'],
    fill: {
      opacity: [0.85, 0.25, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
    markers: {
      size: 0
    },
    legend: {
      offsetY: -5
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: 'Points'
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function formatter(y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points';
          }

          return y;
        }
      }
    },
    grid: {
      borderColor: '#f1f3fa'
    }
  },
  series: [{
    name: 'Team A',
    type: 'column',
    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
  }, {
    name: 'Team B',
    type: 'area',
    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
  }, {
    name: 'Team C',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  }]
};
var simpleBubbleChart = {
  chartOptions: {
    chart: {
      toolbar: {
        show: false
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 0.8,
      gradient: {
        enabled: false
      }
    },
    colors: ['#626ed4', '#02a499', '#f1556c'],
    xaxis: {
      tickAmount: 12,
      type: 'category'
    },
    yaxis: {
      max: 70
    },
    grid: {
      borderColor: '#f1f3fa'
    },
    legend: {
      offsetY: -1
    }
  },
  series: [{
    name: 'Bubble 1',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  }, {
    name: 'Bubble 2',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  }, {
    name: 'Bubble 3',
    data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
      min: 10,
      max: 60
    })
  }]
};
var simplePieChart = {
  series: [44, 55, 41, 17, 15],
  chartOptions: {
    labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4', 'Series 5'],
    colors: ['#6873cb', '#626ed4', '#757cb9', '#a4aade', '#9aa2ea'],
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      verticalAlign: 'middle',
      floating: false,
      fontSize: '14px',
      offsetX: 0,
      offsetY: -5
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 600,
      options: {
        chart: {
          height: 250
        },
        legend: {
          show: false
        }
      }
    }]
  }
};
var basicRadialBarChart = {
  chartOptions: {
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%'
        }
      }
    },
    colors: ['#6c757d'],
    labels: ['CRICKET']
  },
  series: [70]
};
var strokedCircularGuage = {
  chartOptions: {
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: '16px',
            color: undefined,
            offsetY: 120
          },
          value: {
            offsetY: 76,
            fontSize: '22px',
            color: undefined,
            formatter: function formatter(val) {
              return val + '%';
            }
          }
        }
      }
    },
    fill: {
      gradient: {
        enabled: true,
        shade: 'dark',
        shadeIntensity: 0.15,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 65, 91]
      }
    },
    stroke: {
      dashArray: 4
    },
    colors: ['#f672a7'],
    labels: ['Median Ratio'],
    responsive: [{
      breakpoint: 380,
      options: {
        chart: {
          height: 280
        }
      }
    }]
  },
  series: [67]
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

/***/ "./resources/js/router/views/charts/apex.vue":
/*!***************************************************!*\
  !*** ./resources/js/router/views/charts/apex.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apex_vue_vue_type_template_id_42df6b33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apex.vue?vue&type=template&id=42df6b33& */ "./resources/js/router/views/charts/apex.vue?vue&type=template&id=42df6b33&");
/* harmony import */ var _apex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apex.vue?vue&type=script&lang=js& */ "./resources/js/router/views/charts/apex.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _apex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _apex_vue_vue_type_template_id_42df6b33___WEBPACK_IMPORTED_MODULE_0__.render,
  _apex_vue_vue_type_template_id_42df6b33___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/charts/apex.vue"
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

/***/ "./resources/js/router/views/charts/apex.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/router/views/charts/apex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./apex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/apex.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/charts/apex.vue?vue&type=template&id=42df6b33&":
/*!**********************************************************************************!*\
  !*** ./resources/js/router/views/charts/apex.vue?vue&type=template&id=42df6b33& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apex_vue_vue_type_template_id_42df6b33___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apex_vue_vue_type_template_id_42df6b33___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apex_vue_vue_type_template_id_42df6b33___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./apex.vue?vue&type=template&id=42df6b33& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/apex.vue?vue&type=template&id=42df6b33&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/apex.vue?vue&type=template&id=42df6b33&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/charts/apex.vue?vue&type=template&id=42df6b33& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Line with Data Labels")
                ]),
                _vm._v(" "),
                _c("apexchart", {
                  staticClass: "apex-charts",
                  attrs: {
                    dir: "ltr",
                    height: "380",
                    type: "line",
                    series: _vm.linewithDataChart.series,
                    options: _vm.linewithDataChart.chartOptions
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Stacked Area")
                ]),
                _vm._v(" "),
                _c("apexchart", {
                  staticClass: "apex-charts",
                  attrs: {
                    dir: "ltr",
                    height: "380",
                    type: "area",
                    series: _vm.stackedAreaChart.series,
                    options: _vm.stackedAreaChart.chartOptions
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
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Basic Column Chart")
                ]),
                _vm._v(" "),
                _c("apexchart", {
                  staticClass: "apex-charts",
                  attrs: {
                    dir: "ltr",
                    height: "380",
                    type: "bar",
                    series: _vm.basicColumChart.series,
                    options: _vm.basicColumChart.chartOptions
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Bar with Negative Values")
                ]),
                _vm._v(" "),
                _c("apexchart", {
                  staticClass: "apex-charts",
                  attrs: {
                    dir: "ltr",
                    height: "380",
                    type: "bar",
                    series: _vm.nagativeValueBarChart.series,
                    options: _vm.nagativeValueBarChart.chartOptions
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
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Line, Column & Area Chart")
                ]),
                _vm._v(" "),
                _c("apexchart", {
                  staticClass: "apex-charts",
                  attrs: {
                    dir: "ltr",
                    height: "380",
                    type: "line",
                    series: _vm.lineColumAreaChart.series,
                    options: _vm.lineColumAreaChart.chartOptions
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-6" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Simple Bubble Chart")
                ]),
                _vm._v(" "),
                _c("apexchart", {
                  staticClass: "apex-charts",
                  attrs: {
                    dir: "ltr",
                    height: "380",
                    type: "bubble",
                    series: _vm.simpleBubbleChart.series,
                    options: _vm.simpleBubbleChart.chartOptions
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
        _c("div", { staticClass: "col-xl-4" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Simple Pie Chart")
                ]),
                _vm._v(" "),
                _c("apexchart", {
                  staticClass: "apex-charts",
                  attrs: {
                    height: "320",
                    type: "pie",
                    series: _vm.simplePieChart.series,
                    options: _vm.simplePieChart.chartOptions
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Basic RadialBar Chart")
                ]),
                _vm._v(" "),
                _c("apexchart", {
                  staticClass: "apex-charts",
                  attrs: {
                    height: "335",
                    type: "radialBar",
                    series: _vm.basicRadialBarChart.series,
                    options: _vm.basicRadialBarChart.chartOptions
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-xl-4" }, [
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-body" },
              [
                _c("h4", { staticClass: "card-title mb-4" }, [
                  _vm._v("Stroked Circular Guage")
                ]),
                _vm._v(" "),
                _c("apexchart", {
                  staticClass: "apex-charts",
                  attrs: {
                    height: "350",
                    type: "radialBar",
                    series: _vm.strokedCircularGuage.series,
                    options: _vm.strokedCircularGuage.chartOptions
                  }
                })
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