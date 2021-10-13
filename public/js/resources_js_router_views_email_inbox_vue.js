(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_email_inbox_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/inbox.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/inbox.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _data_inbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-inbox */ "./resources/js/router/views/email/data-inbox.js");




/**
 * Email-inbox component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Inbox",
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
      emailData: _data_inbox__WEBPACK_IMPORTED_MODULE_2__.emailData,
      paginatedEmailData: _data_inbox__WEBPACK_IMPORTED_MODULE_2__.emailData,
      title: "Inbox",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "Email",
        href: "/"
      }, {
        text: "Inbox",
        active: true
      }],
      // page number
      currentPage: 1,
      // default page size
      perPage: 15,
      // start and end index
      startIndex: 1,
      endIndex: 15
    };
  },
  computed: {
    /**
     * Return emaildata length
     */
    rows: function rows() {
      return this.emailData.length;
    }
  },
  created: function created() {
    this.startIndex = 0;
    this.endIndex = this.perPage;
    this.paginatedEmailData = this.emailData.slice(this.startIndex, this.endIndex);
  },
  methods: {
    /**
     * Pagination page change method
     */
    onPageChange: function onPageChange() {
      this.startIndex = (this.currentPage - 1) * this.perPage;
      this.endIndex = (this.currentPage - 1) * this.perPage + this.perPage;
      this.paginatedEmailData = this.emailData.slice(this.startIndex, this.endIndex);
    }
  }
});

/***/ }),

/***/ "./resources/js/router/views/email/data-inbox.js":
/*!*******************************************************!*\
  !*** ./resources/js/router/views/email/data-inbox.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "emailData": function() { return /* binding */ emailData; }
/* harmony export */ });
var emailData = [{
  title: 'O\'Keefe Group\'',
  subject: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
  date: '01-Mar'
}, {
  title: 'Batz, Abbott and Jakubowski',
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
  date: '12-Oct'
}, {
  unread: 'true',
  title: 'Mertz and Sons',
  subject: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.',
  date: '09-May'
}, {
  title: 'Thompson Group',
  subject: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  date: '26-Dec'
}, {
  title: 'Jerde, Okuneva and Klocko',
  subject: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
  date: '02-Feb'
}, {
  title: 'Boyer-Lubowitz',
  subject: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
  date: '13-Nov'
}, {
  title: 'Gutmann, McLaughlin and Nienow',
  subject: 'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  date: '25-Jul'
}, {
  title: 'Lebsack-Schmitt',
  subject: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
  date: '30-Sep'
}, {
  unread: 'true',
  title: 'Jacobi-Greenholt',
  subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
  date: '16-May'
}, {
  title: 'Kutch, Jacobson and Kozey',
  subject: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
  date: '06-Apr'
}, {
  title: 'Bernhard and Sons',
  subject: 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
  date: '09-Feb'
}, {
  title: 'Kunze Inc',
  subject: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  date: '11-May'
}, {
  title: 'Miller Group',
  subject: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
  date: '19-Jul'
}, {
  title: 'Durgan and Sons',
  subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  date: '23-Dec'
}, {
  title: 'Pfannerstill-Kautzer',
  subject: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
  date: '20-Jan'
}, {
  title: 'O\'Reilly-Ferry',
  subject: 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.',
  date: '29-Apr'
}, {
  title: 'Shields, Jast and Towne',
  subject: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
  date: '16-Feb'
}, {
  title: 'Mayert-Dickinson',
  subject: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
  date: '30-Dec'
}, {
  title: 'Little LLC',
  subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  date: '07-Mar'
}, {
  title: 'Crist, Blanda and Wuckert',
  subject: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
  date: '13-Aug'
}, {
  title: 'Williamson-Sanford',
  subject: 'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
  date: '09-Jul'
}, {
  title: 'Gleason-Shanahan',
  subject: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
  date: '13-May'
}, {
  unread: 'true',
  title: 'Franecki-Hodkiewicz',
  subject: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
  date: '15-Mar'
}, {
  title: 'Bailey-Simonis',
  subject: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  date: '18-Sep'
}, {
  title: 'Grant-Volkman',
  subject: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
  date: '13-Mar'
}, {
  title: 'Kshlerin-Cole',
  subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
  date: '21-Nov'
}, {
  title: 'Pouros-Funk',
  subject: 'Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
  date: '05-Jun'
}, {
  title: 'Ziemann-Denesik',
  subject: 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.',
  date: '14-Apr'
}, {
  title: 'Johnson LLC',
  subject: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  date: '30-Nov'
}, {
  title: 'Cummings-Ferry',
  subject: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.',
  date: '30-Nov'
}, {
  title: 'Weimann-Lueilwitz',
  subject: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  date: '06-Nov'
}, {
  unread: 'true',
  title: 'Zieme, Krajcik and Champlin',
  subject: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  date: '28-Mar'
}, {
  title: 'Toy-Kunde',
  subject: 'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.',
  date: '27-Dec'
}, {
  title: 'Mosciski and Sons',
  subject: 'Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
  date: '04-Feb'
}, {
  title: 'Lowe, Windler and Wolff',
  subject: 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
  date: '13-Mar'
}, {
  title: 'Bruen-Bashirian',
  subject: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.',
  date: '04-Mar'
}, {
  title: 'Nader, Hickle and Ullrich',
  subject: 'In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.',
  date: '28-May'
}, {
  title: 'Reilly-Homenick',
  subject: 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
  date: '18-Jan'
}, {
  unread: 'true',
  title: 'O\'Connell and Sons',
  subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  date: '03-Aug'
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

/***/ "./resources/js/router/views/email/inbox.vue":
/*!***************************************************!*\
  !*** ./resources/js/router/views/email/inbox.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inbox_vue_vue_type_template_id_cb23392c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.vue?vue&type=template&id=cb23392c& */ "./resources/js/router/views/email/inbox.vue?vue&type=template&id=cb23392c&");
/* harmony import */ var _inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inbox.vue?vue&type=script&lang=js& */ "./resources/js/router/views/email/inbox.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _inbox_vue_vue_type_template_id_cb23392c___WEBPACK_IMPORTED_MODULE_0__.render,
  _inbox_vue_vue_type_template_id_cb23392c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/email/inbox.vue"
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

/***/ "./resources/js/router/views/email/inbox.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/router/views/email/inbox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./inbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/inbox.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/email/inbox.vue?vue&type=template&id=cb23392c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/router/views/email/inbox.vue?vue&type=template&id=cb23392c& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inbox_vue_vue_type_template_id_cb23392c___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inbox_vue_vue_type_template_id_cb23392c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_inbox_vue_vue_type_template_id_cb23392c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./inbox.vue?vue&type=template&id=cb23392c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/inbox.vue?vue&type=template&id=cb23392c&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/inbox.vue?vue&type=template&id=cb23392c&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/email/inbox.vue?vue&type=template&id=cb23392c& ***!
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
        _c("div", { staticClass: "col-12" }, [
          _c(
            "div",
            { staticClass: "email-leftbar card" },
            [
              _c(
                "router-link",
                {
                  staticClass: "btn btn-danger btn-block",
                  attrs: { tag: "a", to: "/email/compose" }
                },
                [_vm._v("Compose")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "mail-list mt-4" }, [
                _c(
                  "a",
                  {
                    staticClass: "active",
                    attrs: { href: "javascript: void(0);" }
                  },
                  [
                    _vm._v("\n            Inbox\n            "),
                    _c("span", { staticClass: "ml-1" }, [_vm._v("(18)")])
                  ]
                ),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Starred")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Important")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Draft")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Sent Mail")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _vm._v("Trash")
                ])
              ]),
              _vm._v(" "),
              _c("h5", { staticClass: "mt-4" }, [_vm._v("Labels")]),
              _vm._v(" "),
              _c("div", { staticClass: "mail-list mt-4" }, [
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _c("span", {
                    staticClass:
                      "mdi mdi-arrow-right-drop-circle text-info float-right"
                  }),
                  _vm._v("Theme Support\n          ")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _c("span", {
                    staticClass:
                      "mdi mdi-arrow-right-drop-circle text-warning float-right"
                  }),
                  _vm._v("Freelance\n          ")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _c("span", {
                    staticClass:
                      "mdi mdi-arrow-right-drop-circle text-primary float-right"
                  }),
                  _vm._v("Social\n          ")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _c("span", {
                    staticClass:
                      "mdi mdi-arrow-right-drop-circle text-danger float-right"
                  }),
                  _vm._v("Friends\n          ")
                ]),
                _vm._v(" "),
                _c("a", { attrs: { href: "javascript: void(0);" } }, [
                  _c("span", {
                    staticClass:
                      "mdi mdi-arrow-right-drop-circle text-success float-right"
                  }),
                  _vm._v("Family\n          ")
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "email-rightbar mb-3" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "btn-toolbar p-3" },
                [
                  _c("div", { staticClass: "btn-group" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" }
                      },
                      [_c("i", { staticClass: "fa fa-inbox" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" }
                      },
                      [_c("i", { staticClass: "fa fa-exclamation-circle" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "button" }
                      },
                      [_c("i", { staticClass: "far fa-trash-alt" })]
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "btn-group ml-1 mo-mb-2",
                      attrs: { variant: "primary" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _c("i", { staticClass: "fa fa-folder" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "mdi mdi-chevron-down ml-1" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Updates")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Social")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Team Manage")]
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "btn-group ml-1 mo-mb-2",
                      attrs: { variant: "primary" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _c("i", { staticClass: "fa fa-tag" }),
                        _vm._v(" "),
                        _c("i", { staticClass: "mdi mdi-chevron-down ml-1" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Updates")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Social")]
                      ),
                      _vm._v(" "),
                      _c(
                        "a",
                        {
                          staticClass: "dropdown-item",
                          attrs: { href: "javascript: void(0);" }
                        },
                        [_vm._v("Team Manage")]
                      )
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown",
                    {
                      staticClass: "btn-group ml-1 mo-mb-2",
                      attrs: { variant: "primary" }
                    },
                    [
                      _c("template", { slot: "button-content" }, [
                        _vm._v("\n                More\n                "),
                        _c("i", { staticClass: "mdi mdi-chevron-down" })
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { href: "javascript: void(0);" } },
                        [_vm._v("Mark as Unread")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { href: "javascript: void(0);" } },
                        [_vm._v("Mark as Important")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { href: "javascript: void(0);" } },
                        [_vm._v("Add to Tasks")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { href: "javascript: void(0);" } },
                        [_vm._v("Add Star")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-dropdown-item",
                        { attrs: { href: "javascript: void(0);" } },
                        [_vm._v("Mute")]
                      )
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", [
                _c(
                  "ul",
                  { staticClass: "message-list" },
                  _vm._l(_vm.paginatedEmailData, function(email, index) {
                    return _c(
                      "li",
                      {
                        key: index,
                        class: { unread: "" + email.unread === "true" }
                      },
                      [
                        _c("div", { staticClass: "col-mail col-mail-1" }, [
                          _c("div", { staticClass: "checkbox-wrapper-mail" }, [
                            _c("input", {
                              attrs: { id: "chk-" + index, type: "checkbox" }
                            }),
                            _vm._v(" "),
                            _c("label", { attrs: { for: "chk-" + index } })
                          ]),
                          _vm._v(" "),
                          _c("span", {
                            staticClass: "star-toggle far fa-star"
                          }),
                          _vm._v(" "),
                          _c("a", { staticClass: "title" }, [
                            _vm._v(_vm._s(email.title))
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-mail col-mail-2" }, [
                          _c("a", { staticClass: "subject" }, [
                            _vm._v(_vm._s(email.subject))
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "date" }, [
                            _vm._v(_vm._s(email.date))
                          ])
                        ])
                      ]
                    )
                  }),
                  0
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c("div", { staticClass: "col-7" }, [
                _vm._v(
                  "Showing " +
                    _vm._s(_vm.startIndex) +
                    " - " +
                    _vm._s(_vm.endIndex) +
                    " of " +
                    _vm._s(_vm.rows)
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-5" }, [
                _c(
                  "div",
                  { staticClass: "btn-group float-right" },
                  [
                    _c("b-pagination", {
                      attrs: {
                        "total-rows": _vm.rows,
                        "per-page": _vm.perPage
                      },
                      on: { input: _vm.onPageChange },
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