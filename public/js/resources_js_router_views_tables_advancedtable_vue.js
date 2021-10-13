(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_tables_advancedtable_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/advancedtable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/advancedtable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _data_advancedtable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-advancedtable */ "./resources/js/router/views/tables/data-advancedtable.js");




/**
 * Advanced table component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Advanced Table",
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
      tableData: _data_advancedtable__WEBPACK_IMPORTED_MODULE_2__.tableData,
      title: "Advanced Table",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Tables",
        href: "/"
      }, {
        text: "Advanced",
        active: true
      }],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      fields: [{
        key: "name",
        sortable: true
      }, {
        key: "position",
        sortable: true
      }, {
        key: "office",
        sortable: true
      }, {
        key: "age",
        sortable: true
      }, {
        key: "date",
        sortable: true
      }, {
        key: "salary",
        sortable: true
      }]
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows: function rows() {
      return this.tableData.length;
    }
  },
  mounted: function mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered: function onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
});

/***/ }),

/***/ "./resources/js/router/views/tables/data-advancedtable.js":
/*!****************************************************************!*\
  !*** ./resources/js/router/views/tables/data-advancedtable.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tableData": function() { return /* binding */ tableData; }
/* harmony export */ });
var tableData = [{
  name: 'Timoteo Lyddy',
  position: 'Recruiting Manager',
  office: 'Vidago',
  age: 29,
  date: '2018/12/04',
  salary: '$11700'
}, {
  name: 'Cherye Bleby',
  position: 'Quality Engineer',
  office: 'La Concordia',
  age: 62,
  date: '2018/10/04',
  salary: '$14700'
}, {
  name: 'Zacharias O\'Shaughnessy',
  position: 'Senior Editor',
  office: 'Maungatapere',
  age: 26,
  date: '2018/07/30',
  salary: '$11600'
}, {
  name: 'Odie Jentin',
  position: 'Programmer II',
  office: 'Grabovci',
  age: 26,
  date: '2019/05/16',
  salary: '$11200'
}, {
  name: 'Lucinda Stickley',
  position: 'Data Coordiator',
  office: 'Sirnarasa',
  age: 31,
  date: '2018/07/29',
  salary: '$13600'
}, {
  name: 'Henrietta Carsberg',
  position: 'Data Coordiator',
  office: 'Paninggaran',
  age: 59,
  date: '2019/07/13',
  salary: '$13700'
}, {
  name: 'Phylys David',
  position: 'Senior Developer',
  office: 'New Glasgow',
  age: 52,
  date: '2019/04/08',
  salary: '$15200'
}, {
  name: 'Brena Shivell',
  position: 'Graphic Designer',
  office: 'Caen',
  age: 50,
  date: '2018/12/14',
  salary: '$15800'
}, {
  name: 'Carmon Tuiller',
  position: 'Marketing Assistant',
  office: 'Jiangbei',
  age: 46,
  date: '2019/06/19',
  salary: '$12800'
}, {
  name: 'Tina Strattan',
  position: 'Account Representative III',
  office: 'São Miguel da Carreira',
  age: 31,
  date: '2019/07/08',
  salary: '$13900'
}, {
  name: 'Jon Tarbox',
  position: 'Senior Cost Accountant',
  office: 'Ryazhsk',
  age: 61,
  date: '2019/02/22',
  salary: '$16000'
}, {
  name: 'Carmine Hollibone',
  position: 'Assistant Manager',
  office: 'Punta del Este',
  age: 50,
  date: '2019/04/23',
  salary: '$15000'
}, {
  name: 'Cora Germann',
  position: 'Automation Specialist III',
  office: 'Heshui',
  age: 47,
  date: '2019/03/27',
  salary: '$11300'
}, {
  name: 'Dawna Hillyatt',
  position: 'Biostatistician I',
  office: 'Suresnes',
  age: 37,
  date: '2018/12/02',
  salary: '$14800'
}, {
  name: 'Natty Casini',
  position: 'Senior Developer',
  office: 'Pucallpa',
  age: 31,
  date: '2018/08/19',
  salary: '$11900'
}, {
  name: 'Vittorio Lauder',
  position: 'Developer II',
  office: 'Tønsberg',
  age: 54,
  date: '2018/12/10',
  salary: '$16200'
}, {
  name: 'Chery Cardenas',
  position: 'Senior Developer',
  office: 'Santo Tomas',
  age: 26,
  date: '2018/12/07',
  salary: '$11100'
}, {
  name: 'Hilde McFfaden',
  position: 'Senior Financial Analyst',
  office: 'Cruz',
  age: 43,
  date: '2018/11/05',
  salary: '$14100'
}, {
  name: 'Siward Kindred',
  position: 'Office Assistant III',
  office: 'Béziers',
  age: 39,
  date: '2018/09/26',
  salary: '$15500'
}, {
  name: 'Tamera Caneo',
  position: 'Executive Secretary',
  office: 'Hetian',
  age: 38,
  date: '2018/09/28',
  salary: '$12300'
}, {
  name: 'Munmro Rendell',
  position: 'Marketing Manager',
  office: 'Castelo',
  age: 60,
  date: '2018/11/15',
  salary: '$12400'
}, {
  name: 'Nerta Eddisforth',
  position: 'Social Worker',
  office: 'Al Ḩayfah',
  age: 33,
  date: '2018/12/01',
  salary: '$14900'
}, {
  name: 'Laraine Hamlyn',
  position: 'Chemical Engineer',
  office: 'Baška Voda',
  age: 44,
  date: '2019/03/25',
  salary: '$12800'
}, {
  name: 'Eugenie Sang',
  position: 'Operator',
  office: 'Oxbow',
  age: 59,
  date: '2019/07/16',
  salary: '$15200'
}, {
  name: 'Sammy Guyers',
  position: 'Mechanical Systems Engineer',
  office: 'Sanhe',
  age: 53,
  date: '2019/07/09',
  salary: '$14200'
}, {
  name: 'Tarah Blick',
  position: 'Paralegal',
  office: 'Fylí',
  age: 23,
  date: '2018/12/14',
  salary: '$15200'
}, {
  name: 'Jemie Ormshaw',
  position: 'Systems Administrator II',
  office: 'Vila Fria',
  age: 28,
  date: '2019/05/15',
  salary: '$14400'
}, {
  name: 'Gerrie Semeradova',
  position: 'Research Associate',
  office: 'Balykchy',
  age: 26,
  date: '2018/09/28',
  salary: '$14900'
}, {
  name: 'Ottilie Mostyn',
  position: 'Accounting Assistant II',
  office: 'Eskilstuna',
  age: 43,
  date: '2018/08/20',
  salary: '$11300'
}, {
  name: 'Lombard Crepin',
  position: 'Project Manager',
  office: 'Novoul’yanovsk',
  age: 63,
  date: '2019/04/28',
  salary: '$13300'
}, {
  name: 'Fons Sopp',
  position: 'Structural Analysis Engineer',
  office: 'Bealanana',
  age: 47,
  date: '2019/02/22',
  salary: '$13300'
}, {
  name: 'Berenice Wildey',
  position: 'Sales Representative',
  office: 'Markópoulo Oropoú',
  age: 49,
  date: '2018/10/19',
  salary: '$14700'
}, {
  name: 'Maybelle Cullotey',
  position: 'Senior Financial Analyst',
  office: 'Arcos de Valdevez',
  age: 33,
  date: '2019/02/06',
  salary: '$14700'
}, {
  name: 'Mikkel Lingner',
  position: 'Assistant Media Planner',
  office: 'Celestynów',
  age: 32,
  date: '2018/08/12',
  salary: '$11400'
}, {
  name: 'Silvano Hartil',
  position: 'Assistant Manager',
  office: 'Leles',
  age: 26,
  date: '2019/04/30',
  salary: '$11500'
}, {
  name: 'Maddi Mansell',
  position: 'Assistant Media Planner',
  office: 'Doug An',
  age: 48,
  date: '2019/05/29',
  salary: '$14600'
}, {
  name: 'Mohandas Course',
  position: 'Staff Accountant II',
  office: 'Wuping',
  age: 59,
  date: '2019/07/18',
  salary: '$12900'
}, {
  name: 'Ericha Clilverd',
  position: 'Desktop Support Technician',
  office: 'Conde',
  age: 37,
  date: '2018/09/12',
  salary: '$14400'
}, {
  name: 'Elspeth Leap',
  position: 'Paralegal',
  office: 'Hägersten',
  age: 42,
  date: '2019/02/15',
  salary: '$14400'
}, {
  name: 'Sam Chinge',
  position: 'Assistant Media Planner',
  office: 'Arai',
  age: 55,
  date: '2019/05/26',
  salary: '$11800'
}, {
  name: 'Judie Hug',
  position: 'Operator',
  office: 'Verkhniy Rohachyk',
  age: 32,
  date: '2018/11/18',
  salary: '$11300'
}, {
  name: 'Lulita Espasa',
  position: 'Operator',
  office: 'Sabi',
  age: 59,
  date: '2019/06/06',
  salary: '$13600'
}, {
  name: 'Kandy Fulker',
  position: 'Human Resources Assistant I',
  office: 'Murowana Goślina',
  age: 57,
  date: '2019/05/01',
  salary: '$13100'
}, {
  name: 'Bradley Gunbie',
  position: 'Assistant Media Planner',
  office: 'Bundoran',
  age: 34,
  date: '2019/03/16',
  salary: '$13700'
}, {
  name: 'Katie Proctor',
  position: 'Quality Engineer',
  office: 'Qingxi',
  age: 34,
  date: '2018/10/14',
  salary: '$12400'
}, {
  name: 'Lin Gallaccio',
  position: 'VP Quality Control',
  office: 'Rongcheng',
  age: 23,
  date: '2018/08/27',
  salary: '$10300'
}, {
  name: 'Christy Ranaghan',
  position: 'Nurse Practicioner',
  office: 'Naval',
  age: 42,
  date: '2018/11/02',
  salary: '$15700'
}, {
  name: 'Concordia Varrow',
  position: 'Environmental Specialist',
  office: 'Rashaant',
  age: 48,
  date: '2018/12/11',
  salary: '$12500'
}, {
  name: 'Normand Tropman',
  position: 'Legal Assistant',
  office: 'Yläne',
  age: 52,
  date: '2019/01/21',
  salary: '$14600'
}, {
  name: 'Oswald Cruikshank',
  position: 'Help Desk Operator',
  office: 'Armenia',
  age: 57,
  date: '2019/05/16',
  salary: '$15700'
}, {
  name: 'Debbie Pinchin',
  position: 'Tax Accountant',
  office: 'Seara',
  age: 35,
  date: '2018/08/29',
  salary: '$12100'
}, {
  name: 'Wells Dartan',
  position: 'Financial Analyst',
  office: 'Bhalwāl',
  age: 44,
  date: '2019/03/03',
  salary: '$10500'
}, {
  name: 'Kelsey Zucker',
  position: 'Accountant III',
  office: 'Douz',
  age: 44,
  date: '2018/11/09',
  salary: '$15700'
}, {
  name: 'Lothaire Rubinchik',
  position: 'Operator',
  office: 'Paringin',
  age: 37,
  date: '2018/07/26',
  salary: '$13800'
}, {
  name: 'Dmitri Marrow',
  position: 'Quality Engineer',
  office: 'Kirzhach',
  age: 30,
  date: '2018/11/25',
  salary: '$13400'
}, {
  name: 'Virgie Bullivant',
  position: 'Dental Hygienist',
  office: 'Mungyeong',
  age: 34,
  date: '2019/07/16',
  salary: '$14600'
}, {
  name: 'Simmonds Moughtin',
  position: 'Programmer III',
  office: 'Loma',
  age: 44,
  date: '2018/10/20',
  salary: '$13900'
}, {
  name: 'Ralina Bounds',
  position: 'Associate Professor',
  office: 'Cacocum',
  age: 52,
  date: '2019/05/12',
  salary: '$11400'
}, {
  name: 'Bettye Hearons',
  position: 'Food Chemist',
  office: 'Guayabetal',
  age: 30,
  date: '2018/12/29',
  salary: '$16000'
}, {
  name: 'Cortie Andreacci',
  position: 'Assistant Manager',
  office: 'Yongheshi',
  age: 33,
  date: '2018/11/23',
  salary: '$11200'
}, {
  name: 'Frederic Fozard',
  position: 'Occupational Therapist',
  office: 'Wierzbica',
  age: 29,
  date: '2019/02/14',
  salary: '$10500'
}, {
  name: 'Carissa Simeoni',
  position: 'Developer II',
  office: 'Huansheng',
  age: 29,
  date: '2019/05/21',
  salary: '$13100'
}, {
  name: 'Ruperto Humblestone',
  position: 'Clinical Specialist',
  office: 'Zubūbah',
  age: 31,
  date: '2019/07/01',
  salary: '$13200'
}, {
  name: 'Leontine Sailes',
  position: 'Quality Control Specialist',
  office: 'Novocherkassk',
  age: 33,
  date: '2018/11/28',
  salary: '$11800'
}, {
  name: 'Lanny Cregeen',
  position: 'Programmer I',
  office: 'Abbeville',
  age: 60,
  date: '2018/09/26',
  salary: '$15400'
}, {
  name: 'Linus Flucker',
  position: 'Help Desk Operator',
  office: 'Libofshë',
  age: 37,
  date: '2019/03/02',
  salary: '$10300'
}, {
  name: 'Edd Valentin',
  position: 'Associate Professor',
  office: 'Vila Chã do Monte',
  age: 42,
  date: '2018/08/26',
  salary: '$14000'
}, {
  name: 'Rafaela Kingsworth',
  position: 'Senior Sales Associate',
  office: 'Penco',
  age: 41,
  date: '2019/05/26',
  salary: '$14800'
}, {
  name: 'Helge Cutajar',
  position: 'Associate Professor',
  office: 'Wololele A',
  age: 42,
  date: '2019/03/13',
  salary: '$15000'
}, {
  name: 'Dusty Abethell',
  position: 'Mechanical Systems Engineer',
  office: 'Bodø',
  age: 36,
  date: '2018/08/30',
  salary: '$15300'
}];


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

/***/ "./resources/js/router/views/tables/advancedtable.vue":
/*!************************************************************!*\
  !*** ./resources/js/router/views/tables/advancedtable.vue ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _advancedtable_vue_vue_type_template_id_9d5a598a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./advancedtable.vue?vue&type=template&id=9d5a598a& */ "./resources/js/router/views/tables/advancedtable.vue?vue&type=template&id=9d5a598a&");
/* harmony import */ var _advancedtable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./advancedtable.vue?vue&type=script&lang=js& */ "./resources/js/router/views/tables/advancedtable.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _advancedtable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _advancedtable_vue_vue_type_template_id_9d5a598a___WEBPACK_IMPORTED_MODULE_0__.render,
  _advancedtable_vue_vue_type_template_id_9d5a598a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/tables/advancedtable.vue"
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

/***/ "./resources/js/router/views/tables/advancedtable.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/router/views/tables/advancedtable.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_advancedtable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./advancedtable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/advancedtable.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_advancedtable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/tables/advancedtable.vue?vue&type=template&id=9d5a598a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/router/views/tables/advancedtable.vue?vue&type=template&id=9d5a598a& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_advancedtable_vue_vue_type_template_id_9d5a598a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_advancedtable_vue_vue_type_template_id_9d5a598a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_advancedtable_vue_vue_type_template_id_9d5a598a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./advancedtable.vue?vue&type=template&id=9d5a598a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/advancedtable.vue?vue&type=template&id=9d5a598a&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/advancedtable.vue?vue&type=template&id=9d5a598a&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/tables/advancedtable.vue?vue&type=template&id=9d5a598a& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
              _c("h4", { staticClass: "card-title" }, [_vm._v("Data Table")]),
              _vm._v(" "),
              _c("p", { staticClass: "card-title-desc" }),
              _vm._v(" "),
              _c("div", { staticClass: "row mb-md-2" }, [
                _c("div", { staticClass: "col-sm-12 col-md-6" }, [
                  _c(
                    "div",
                    {
                      staticClass: "dataTables_length",
                      attrs: { id: "tickets-table_length" }
                    },
                    [
                      _c(
                        "label",
                        { staticClass: "d-inline-flex align-items-center" },
                        [
                          _vm._v(
                            "\n                  Show\n                  "
                          ),
                          _c("b-form-select", {
                            attrs: { size: "sm", options: _vm.pageOptions },
                            model: {
                              value: _vm.perPage,
                              callback: function($$v) {
                                _vm.perPage = $$v
                              },
                              expression: "perPage"
                            }
                          }),
                          _vm._v("entries\n                ")
                        ],
                        1
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12 col-md-6" }, [
                  _c(
                    "div",
                    {
                      staticClass: "dataTables_filter text-md-right",
                      attrs: { id: "tickets-table_filter" }
                    },
                    [
                      _c(
                        "label",
                        { staticClass: "d-inline-flex align-items-center" },
                        [
                          _vm._v(
                            "\n                  Search:\n                  "
                          ),
                          _c("b-form-input", {
                            staticClass: "form-control form-control-sm ml-2",
                            attrs: { type: "search", placeholder: "Search..." },
                            model: {
                              value: _vm.filter,
                              callback: function($$v) {
                                _vm.filter = $$v
                              },
                              expression: "filter"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-responsive mb-0" },
                [
                  _c("b-table", {
                    attrs: {
                      items: _vm.tableData,
                      fields: _vm.fields,
                      responsive: "sm",
                      "per-page": _vm.perPage,
                      "current-page": _vm.currentPage,
                      "sort-by": _vm.sortBy,
                      "sort-desc": _vm.sortDesc,
                      filter: _vm.filter,
                      "filter-included-fields": _vm.filterOn
                    },
                    on: {
                      "update:sortBy": function($event) {
                        _vm.sortBy = $event
                      },
                      "update:sort-by": function($event) {
                        _vm.sortBy = $event
                      },
                      "update:sortDesc": function($event) {
                        _vm.sortDesc = $event
                      },
                      "update:sort-desc": function($event) {
                        _vm.sortDesc = $event
                      },
                      filtered: _vm.onFiltered
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "dataTables_paginate paging_simple_numbers float-right"
                    },
                    [
                      _c(
                        "ul",
                        { staticClass: "pagination pagination-rounded mb-0" },
                        [
                          _c("b-pagination", {
                            attrs: {
                              "total-rows": _vm.rows,
                              "per-page": _vm.perPage
                            },
                            model: {
                              value: _vm.currentPage,
                              callback: function($$v) {
                                _vm.currentPage = $$v
                              },
                              expression: "currentPage"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  )
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