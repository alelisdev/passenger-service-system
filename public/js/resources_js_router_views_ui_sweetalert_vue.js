(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_router_views_ui_sweetalert_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/sweetalert.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/sweetalert.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/main */ "./resources/js/router/layouts/main.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





/**
 * SweetAlert 2 component
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "SweetAlert 2",
    meta: [{
      name: "description",
      content: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/app.config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    }]
  },
  components: {
    Layout: _layouts_main__WEBPACK_IMPORTED_MODULE_1__.default,
    PageHeader: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/page-header'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      title: "SweetAlert 2",
      items: [{
        text: "Veltrix",
        href: "/"
      }, {
        text: "UI Elements",
        href: "/"
      }, {
        text: "SweetAlert 2",
        active: true
      }]
    };
  },
  methods: {
    showAlert: function showAlert() {
      vue__WEBPACK_IMPORTED_MODULE_3__.default.swal("Any fool can use a computer!");
    },
    titleText: function titleText() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("The Internet?", "That thing is still around?", "question");
    },
    successmsg: function successmsg() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Good job!", "You clicked the button!", "success");
    },
    confirm: function confirm() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    cancel: function cancel() {
      var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger ml-2"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          swalWithBootstrapButtons.fire("Deleted!", "Your file has been deleted.", "success");
        } else if (
        /* Read more about handling dismissals below */
        result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.cancel)) {
          swalWithBootstrapButtons.fire("Cancelled", "Your imaginary file is safe :)", "error");
        }
      });
    },
    custom: function custom() {
      vue__WEBPACK_IMPORTED_MODULE_3__.default.swal({
        title: "Sweet!",
        text: "Modal with a custom image.",
        imageUrl: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/images/logo-dark.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        imageHeight: 20,
        confirmButtonColor: "#556ee6"
      });
    },
    timer: function timer() {
      var timerInterval;
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "Auto close alert!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        onBeforeOpen: function onBeforeOpen() {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
          timerInterval = setInterval(function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().getContent().querySelector("b").textContent = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().getTimerLeft();
          }, 100);
        },
        onClose: function onClose() {
          clearInterval(timerInterval);
        }
      }).then(function (result) {
        if (
        /* Read more about handling dismissals below */
        result.dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.timer)) {
          console.log("I was closed by the timer"); // eslint-disable-line
        }
      });
    },
    customHtml: function customHtml() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "<i>HTML</i> <u>example</u>",
        icon: "info",
        html: "You can use <b>bold text</b>, " + '<a href="//sweetalert2.github.io">links</a> ' + "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: "#47bd9a",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down"
      });
    },
    customBackground: function customBackground() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "Custom width, padding, background.",
        width: 600,
        padding: 100,
        confirmButtonColor: "#556ee6",
        background: "#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)"
      });
    },
    ajax: function ajax() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: "Submit email to run ajax request",
        input: "email",
        showCancelButton: true,
        confirmButtonText: "Submit",
        showLoaderOnConfirm: true,
        confirmButtonColor: "#556ee6",
        cancelButtonColor: "#f46a6a",
        preConfirm: function preConfirm(email) {
          // eslint-disable-next-line no-unused-vars
          return new Promise(function (resolve, reject) {
            setTimeout(function () {
              if (email === "taken@example.com") {
                Promise.reject(new Error("This email is already taken."));
              } else {
                resolve();
              }
            }, 2000);
          });
        },
        allowOutsideClick: false
      }).then(function (email) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          icon: "success",
          title: "Ajax request finished!",
          html: "Submitted email: " + email
        });
      });
    },
    chain: function chain() {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
        input: "text",
        confirmButtonText: "Next &rarr;",
        showCancelButton: true,
        confirmButtonColor: "#556ee6",
        cancelButtonColor: "#74788d",
        progressSteps: ["1", "2", "3"]
      }).queue([{
        title: "Question 1",
        text: "Chaining swal2 modals is easy"
      }, "Question 2", "Question 3"]).then(function (result) {
        if (result.value) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "All done!",
            html: "Your answers: <pre><code>" + JSON.stringify(result.value) + "</code></pre>",
            confirmButtonText: "Lovely!"
          });
        }
      });
    },
    dynamicQueue: function dynamicQueue() {
      var ipAPI = "https://api.ipify.org?format=json";
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().queue([{
        title: "Your public IP",
        confirmButtonText: "Show my public IP",
        text: "Your public IP will be received " + "via AJAX request",
        showLoaderOnConfirm: true,
        preConfirm: function preConfirm() {
          return fetch(ipAPI).then(function (response) {
            return response.json();
          }).then(function (data) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().insertQueueStep(data.ip);
          })["catch"](function () {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().insertQueueStep({
              type: "error",
              title: "Unable to get your public IP"
            });
          });
        }
      }]);
    }
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

/***/ "./resources/js/router/views/ui/sweetalert.vue":
/*!*****************************************************!*\
  !*** ./resources/js/router/views/ui/sweetalert.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sweetalert_vue_vue_type_template_id_fad073c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sweetalert.vue?vue&type=template&id=fad073c4& */ "./resources/js/router/views/ui/sweetalert.vue?vue&type=template&id=fad073c4&");
/* harmony import */ var _sweetalert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sweetalert.vue?vue&type=script&lang=js& */ "./resources/js/router/views/ui/sweetalert.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _sweetalert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _sweetalert_vue_vue_type_template_id_fad073c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _sweetalert_vue_vue_type_template_id_fad073c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/ui/sweetalert.vue"
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

/***/ "./resources/js/router/views/ui/sweetalert.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/router/views/ui/sweetalert.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetalert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sweetalert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/sweetalert.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetalert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

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

/***/ "./resources/js/router/views/ui/sweetalert.vue?vue&type=template&id=fad073c4&":
/*!************************************************************************************!*\
  !*** ./resources/js/router/views/ui/sweetalert.vue?vue&type=template&id=fad073c4& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetalert_vue_vue_type_template_id_fad073c4___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetalert_vue_vue_type_template_id_fad073c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_sweetalert_vue_vue_type_template_id_fad073c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./sweetalert.vue?vue&type=template&id=fad073c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/sweetalert.vue?vue&type=template&id=fad073c4&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/sweetalert.vue?vue&type=template&id=fad073c4&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/router/views/ui/sweetalert.vue?vue&type=template&id=fad073c4& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
                _vm._v(
                  "\n            A beautiful, responsive, customizable\n            and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero\n            dependencies.\n          "
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "row text-center" }, [
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [_vm._v("A basic message")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button" },
                      on: { click: _vm.showAlert }
                    },
                    [_vm._v("Click me")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [_vm._v("A title with a text under")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", id: "sa-title" },
                      on: { click: _vm.titleText }
                    },
                    [_vm._v("Click me")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [_vm._v("A success message!")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", id: "sa-success" },
                      on: { click: _vm.successmsg }
                    },
                    [_vm._v("Click me")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [
                    _vm._v(
                      'A warning message, with a function attached to the "Confirm"-button...'
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", id: "sa-warning" },
                      on: { click: _vm.confirm }
                    },
                    [_vm._v("Click me")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [
                    _vm._v(
                      'By passing a parameter, you can execute something else for "Cancel".'
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", id: "sa-params" },
                      on: { click: _vm.cancel }
                    },
                    [_vm._v("Click me")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [_vm._v("A message with custom Image Header")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", id: "sa-image" },
                      on: { click: _vm.custom }
                    },
                    [_vm._v("Click me")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [_vm._v("A message with auto close timer")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", id: "sa-close" },
                      on: { click: _vm.timer }
                    },
                    [_vm._v("Click me")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [_vm._v("Custom HTML description and buttons")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", id: "custom-html-alert" },
                      on: { click: _vm.customHtml }
                    },
                    [_vm._v("Click me")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [
                    _vm._v(
                      "A message with custom width, padding and background"
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: {
                        type: "button",
                        id: "custom-padding-width-alert"
                      },
                      on: { click: _vm.customBackground }
                    },
                    [_vm._v("Click me")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [_vm._v("Ajax request example")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", id: "ajax-alert" },
                      on: { click: _vm.ajax }
                    },
                    [_vm._v("Click me")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [_vm._v("Chaining modals (queue) example")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", id: "chaining-alert" },
                      on: { click: _vm.chain }
                    },
                    [_vm._v("Click me")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-xl-3 col-lg-4 col-sm-6 mb-4" }, [
                  _c("p", [_vm._v("Dynamic queue example")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "button", id: "dynamic-alert" },
                      on: { click: _vm.dynamicQueue }
                    },
                    [_vm._v("Click me")]
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