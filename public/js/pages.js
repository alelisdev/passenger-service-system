"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["pages"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

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
    title: "Admin Login",
    meta: [{
      name: "description",
      content: ""
    }]
  },
  data: function data() {
    return {
      model: {
        email: '',
        password: '',
        rememberMe: false
      },
      authError: null,
      isAuthError: false,
      isSubmitting: false
    };
  },
  computed: (0,E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['currentRole'])),
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      // this will be called only after form is valid. You can do api call here to login
      // Reset the authError if it existed.
      this.authError = null;
      this.isSubmitting = true;
      return this.$store.dispatch("adminLogin", {
        email: this.model.email,
        password: this.model.password
      }).then(function (res) {
        // console.log(this.currentRole)
        if (_this.currentRole == 'Admin') {
          _this.$router.push({
            name: "AdminUsers"
          });
        } else {
          _this.$router.push({
            name: "AdminLogin"
          });
        }

        _this.isAuthError = false;
        _this.isSubmitting = false;
      })["catch"](function (error) {
        _this.authError = error ? error : "";
        _this.isAuthError = true;
        _this.isSubmitting = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
// import flatPicker from "vue-flatpickr-component";
// import "flatpickr/dist/flatpickr.css";
/* harmony default export */ __webpack_exports__["default"] = ({
  page: {
    title: "Register",
    meta: [{
      name: "description",
      content: ""
    }]
  },
  components: {},
  data: function data() {
    return {
      model: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        agree: false
      },
      regError: null,
      isRegisterError: false,
      registerSuccess: false
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      // this will be called only after form is valid. You can do an api call here to register users
      // Reset the regError if it existed.
      this.regError = null;
      return this.$store.dispatch("register", {
        first_name: this.model.first_name,
        last_name: this.model.last_name,
        email: this.model.email,
        password: this.model.password,
        password_confirmation: this.model.password
      }).then(function (res, status) {
        _this.isRegisterError = false;
        _this.registerSuccess = true;

        if (_this.registerSuccess) {
          _this.$router.push({
            name: "AdminLogin"
          });
        }
      })["catch"](function (error) {
        _this.regError = error ? error : "";
        _this.isRegisterError = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

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
    title: "Login",
    meta: [{
      name: "description",
      content: ""
    }]
  },
  data: function data() {
    return {
      model: {
        last_name: '',
        reference: ''
      },
      authError: null,
      isAuthError: false,
      isSubmitting: false
    };
  },
  computed: (0,E_Hayden_PSS_PSS_passenger_services_system_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['currentPassenger'])),
  methods: {
    onSubmit: function onSubmit() {
      var _this = this;

      // this will be called only after form is valid. You can do api call here to login
      // Reset the authError if it existed.
      this.authError = null;
      this.isSubmitting = true;
      return this.$store.dispatch("login", {
        last_name: this.model.last_name,
        reference: this.model.reference
      }).then(function (res) {
        // console.log(this.currentPassenger)
        if (_this.currentPassenger.role == 'Passenger') {
          _this.$router.push({
            name: "Booking"
          });
        } else {
          _this.$router.push({
            name: "Login"
          });
        }

        _this.isAuthError = false;
        _this.isSubmitting = false;
      })["catch"](function (error) {
        // console.log(error)
        _this.authError = error ? error : "";
        _this.isAuthError = true;
        _this.isSubmitting = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/contain/admin/auth/Login.vue":
/*!***************************************************!*\
  !*** ./resources/js/contain/admin/auth/Login.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=4f7eba8a& */ "./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/contain/admin/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/contain/admin/auth/Register.vue":
/*!******************************************************!*\
  !*** ./resources/js/contain/admin/auth/Register.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=480a3841& */ "./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/contain/admin/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/contain/checkin/auth/Login.vue":
/*!*****************************************************!*\
  !*** ./resources/js/contain/checkin/auth/Login.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=36d031dd& */ "./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__.render,
  _Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/contain/checkin/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_4f7eba8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=4f7eba8a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a&");


/***/ }),

/***/ "./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841&":
/*!*************************************************************************************!*\
  !*** ./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_480a3841___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=480a3841& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841&");


/***/ }),

/***/ "./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd&":
/*!************************************************************************************!*\
  !*** ./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_36d031dd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Login.vue?vue&type=template&id=36d031dd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Login.vue?vue&type=template&id=4f7eba8a& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
        "div",
        { staticClass: "header bg-gradient-success py-6 py-lg-6 pt-lg-7" },
        [
          _c("b-container", [
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
                          _vm._v("Welcome!")
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
              staticClass:
                "separator separator-bottom separator-skew zindex-100"
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--8 pb-6" },
        [
          _c(
            "b-row",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-col",
                { attrs: { lg: "5", md: "7" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "bg-secondary border-0 mb-0",
                      attrs: { "no-body": "" }
                    },
                    [
                      _c(
                        "b-card-body",
                        { staticClass: "px-lg-5 py-lg-5" },
                        [
                          _c(
                            "div",
                            { staticClass: "text-center text-muted mb-4" },
                            [
                              _c("small", [
                                _vm._v("Or sign in with credentials")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.isAuthError
                            ? _c(
                                "base-alert",
                                { attrs: { dismissible: "", type: "danger" } },
                                [
                                  _c("strong", [_vm._v("Failed!")]),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.authError) +
                                      "\n            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("validation-observer", {
                            ref: "formValidator",
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var handleSubmit = ref.handleSubmit
                                  return [
                                    _c(
                                      "b-form",
                                      {
                                        attrs: { role: "form" },
                                        on: {
                                          submit: function($event) {
                                            $event.preventDefault()
                                            return handleSubmit(_vm.onSubmit)
                                          }
                                        }
                                      },
                                      [
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            name: "Email",
                                            rules: {
                                              required: true,
                                              email: true
                                            },
                                            "prepend-icon": "ni ni-email-83",
                                            placeholder: "Email"
                                          },
                                          model: {
                                            value: _vm.model.email,
                                            callback: function($$v) {
                                              _vm.$set(_vm.model, "email", $$v)
                                            },
                                            expression: "model.email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            name: "Password",
                                            rules: { required: true, min: 6 },
                                            "prepend-icon":
                                              "ni ni-lock-circle-open",
                                            type: "password",
                                            placeholder: "Password"
                                          },
                                          model: {
                                            value: _vm.model.password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "password",
                                                $$v
                                              )
                                            },
                                            expression: "model.password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "b-form-checkbox",
                                          {
                                            model: {
                                              value: _vm.model.rememberMe,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.model,
                                                  "rememberMe",
                                                  $$v
                                                )
                                              },
                                              expression: "model.rememberMe"
                                            }
                                          },
                                          [_vm._v("Remember me")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "text-center" },
                                          [
                                            _c(
                                              "b-button",
                                              {
                                                staticClass: "mt-4",
                                                attrs: {
                                                  type: "submit",
                                                  variant: "primary",
                                                  disabled: _vm.isSubmitting
                                                }
                                              },
                                              [
                                                _vm.isSubmitting
                                                  ? _c("i", {
                                                      staticClass:
                                                        "fa fa-spinner fa-spin"
                                                    })
                                                  : _vm._e(),
                                                _vm._v(
                                                  " Sign in\n                  "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mt-3" },
                    [
                      _c("b-col", { attrs: { cols: "6" } }),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "text-right", attrs: { cols: "6" } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-light",
                              attrs: { to: "/admin/register" }
                            },
                            [_c("small", [_vm._v("Create new account")])]
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
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/admin/auth/Register.vue?vue&type=template&id=480a3841& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
        "div",
        { staticClass: "header bg-gradient-success py-5 py-lg-6 pt-lg-7" },
        [
          _c("b-container", { staticClass: "container" }, [
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
                          _vm._v("Create an account")
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
              staticClass:
                "separator separator-bottom separator-skew zindex-100"
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-container",
        { staticClass: "mt--8 pb-6" },
        [
          _c(
            "b-row",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-col",
                { attrs: { lg: "6", md: "8" } },
                [
                  _c(
                    "b-card",
                    {
                      staticClass: "bg-secondary border-0 mb-0",
                      attrs: { "no-body": "" }
                    },
                    [
                      _c(
                        "b-card-body",
                        { staticClass: "px-lg-5 py-lg-5" },
                        [
                          _c(
                            "div",
                            { staticClass: "text-center text-muted mb-4" },
                            [
                              _c("small", [
                                _vm._v("Or sign up with credentials")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.isRegisterError
                            ? _c(
                                "base-alert",
                                { attrs: { dismissible: "", type: "danger" } },
                                [
                                  _c("strong", [_vm._v("Failed!")]),
                                  _vm._v(
                                    " " +
                                      _vm._s(_vm.regError) +
                                      "\n            "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c("validation-observer", {
                            ref: "formValidator",
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var handleSubmit = ref.handleSubmit
                                  return [
                                    _c(
                                      "b-form",
                                      {
                                        attrs: { role: "form" },
                                        on: {
                                          submit: function($event) {
                                            $event.preventDefault()
                                            return handleSubmit(_vm.onSubmit)
                                          }
                                        }
                                      },
                                      [
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon": "ni ni-hat-3",
                                            placeholder: "First Name",
                                            name: "FistName",
                                            rules: { required: true }
                                          },
                                          model: {
                                            value: _vm.model.first_name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "first_name",
                                                $$v
                                              )
                                            },
                                            expression: "model.first_name"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon": "ni ni-hat-3",
                                            placeholder: "Last Name",
                                            name: "LastName",
                                            rules: { required: true }
                                          },
                                          model: {
                                            value: _vm.model.last_name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "last_name",
                                                $$v
                                              )
                                            },
                                            expression: "model.last_name"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon": "ni ni-email-83",
                                            placeholder: "Email",
                                            name: "Email",
                                            rules: {
                                              required: true,
                                              email: true
                                            }
                                          },
                                          model: {
                                            value: _vm.model.email,
                                            callback: function($$v) {
                                              _vm.$set(_vm.model, "email", $$v)
                                            },
                                            expression: "model.email"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c("base-input", {
                                          staticClass: "mb-3",
                                          attrs: {
                                            alternative: "",
                                            "prepend-icon":
                                              "ni ni-lock-circle-open",
                                            placeholder: "password",
                                            type: "password",
                                            name: "Password",
                                            rules: { required: true, min: 6 }
                                          },
                                          model: {
                                            value: _vm.model.password,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.model,
                                                "password",
                                                $$v
                                              )
                                            },
                                            expression: "model.password"
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "text-muted font-italic"
                                          },
                                          [
                                            _c("small", [
                                              _vm._v("password strength: "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "text-success font-weight-700"
                                                },
                                                [_vm._v("strong")]
                                              )
                                            ])
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-row",
                                          { staticClass: "my-3" },
                                          [
                                            _c(
                                              "b-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c(
                                                  "base-input",
                                                  {
                                                    attrs: {
                                                      rules: {
                                                        required: {
                                                          allowFalse: false
                                                        }
                                                      },
                                                      name: "Privacy Policy"
                                                    }
                                                  },
                                                  [
                                                    _c(
                                                      "b-form-checkbox",
                                                      {
                                                        model: {
                                                          value:
                                                            _vm.model.agree,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.model,
                                                              "agree",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "model.agree"
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "text-muted"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "I agree with the "
                                                            ),
                                                            _c(
                                                              "a",
                                                              {
                                                                attrs: {
                                                                  href: "#"
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "Privacy Policy"
                                                                )
                                                              ]
                                                            )
                                                          ]
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
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          { staticClass: "text-center" },
                                          [
                                            _c(
                                              "b-button",
                                              {
                                                staticClass: "mt-1",
                                                attrs: {
                                                  type: "submit",
                                                  variant: "primary"
                                                }
                                              },
                                              [_vm._v("Create account")]
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "mt-3" },
                    [
                      _c("b-col", { attrs: { cols: "6" } }, [
                        _c("span", { staticClass: "text-light" }, [
                          _c("small", [_vm._v("Already have an account?")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-col",
                        { staticClass: "text-right", attrs: { cols: "6" } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-light",
                              attrs: { to: "/admin/login" }
                            },
                            [_c("small", [_vm._v("Sign in")])]
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
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/contain/checkin/auth/Login.vue?vue&type=template&id=36d031dd& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
            { staticClass: "px-5 mt-5", attrs: { xl: "6", lg: "6", md: "6" } },
            [
              _c(
                "b-container",
                { staticClass: "justify-content-center m-5" },
                [
                  _c("span", [_vm._v("Step 1")]),
                  _vm._v(" "),
                  _c("h1", [_vm._v("Ready to Check in?")]),
                  _vm._v(" "),
                  _c("span", [
                    _vm._v(
                      "Check in and get your boarding pass from 24 hours before your flight"
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    { staticClass: "justify-content-center" },
                    [
                      _c(
                        "b-col",
                        { attrs: { lg: "10", md: "12" } },
                        [
                          _c(
                            "b-card",
                            {
                              staticClass: "bg-secondary border-0 mb-0",
                              attrs: { "no-body": "" }
                            },
                            [
                              _c(
                                "b-card-body",
                                { staticClass: "px-lg-5 py-lg-5" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "text-center text-muted mb-4"
                                    },
                                    [
                                      _c("small", [
                                        _vm._v("Or sign in with credentials")
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _vm.isAuthError
                                    ? _c(
                                        "base-alert",
                                        {
                                          attrs: {
                                            dismissible: "",
                                            type: "danger"
                                          }
                                        },
                                        [
                                          _c("strong", [_vm._v("Failed!")]),
                                          _vm._v(
                                            " " +
                                              _vm._s(_vm.authError) +
                                              "\n                          "
                                          )
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c("validation-observer", {
                                    ref: "formValidator",
                                    scopedSlots: _vm._u([
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var handleSubmit = ref.handleSubmit
                                          return [
                                            _c(
                                              "b-form",
                                              {
                                                attrs: { role: "form" },
                                                on: {
                                                  submit: function($event) {
                                                    $event.preventDefault()
                                                    return handleSubmit(
                                                      _vm.onSubmit
                                                    )
                                                  }
                                                }
                                              },
                                              [
                                                _c("base-input", {
                                                  staticClass: "mb-3",
                                                  attrs: {
                                                    alternative: "",
                                                    label: "Last Name",
                                                    name: "LastName",
                                                    rules: { required: true }
                                                  },
                                                  model: {
                                                    value: _vm.model.last_name,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.model,
                                                        "last_name",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "model.last_name"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c("base-input", {
                                                  staticClass: "mb-3",
                                                  attrs: {
                                                    alternative: "",
                                                    label:
                                                      "Reference Reservation",
                                                    name: "Reference",
                                                    rules: {
                                                      required: true,
                                                      min: 6,
                                                      max: 6
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.model.reference,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.model,
                                                        "reference",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "model.reference"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "text-center"
                                                  },
                                                  [
                                                    _c(
                                                      "b-button",
                                                      {
                                                        staticClass:
                                                          "mt-4 bg-yellow",
                                                        attrs: {
                                                          type: "submit",
                                                          variant: "primary",
                                                          disabled:
                                                            _vm.isSubmitting
                                                        }
                                                      },
                                                      [
                                                        _vm.isSubmitting
                                                          ? _c("i", {
                                                              staticClass:
                                                                "fa fa-spinner fa-spin"
                                                            })
                                                          : _vm._e(),
                                                        _vm._v(
                                                          " CONFIRM\n                                  "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            )
                                          ]
                                        }
                                      }
                                    ])
                                  })
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
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("b-col", { attrs: { xl: "6", lg: "6", md: "6" } }, [
            _c("img", {
              staticStyle: { width: "100%" },
              attrs: { src: "img/theme/login.png" }
            })
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);