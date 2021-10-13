<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-5 py-lg-6 pt-lg-7">
      <b-container class="container">
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Create an account</h1>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-6">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8" >
          <b-card no-body class="bg-secondary border-0 mb-0">
            <!-- <b-card-header class="bg-transparent pb-5">
              <div class="text-muted text-center mt-2 mb-4"><small>Sign up with</small></div>
              <div class="text-center">
                <a href="#" class="btn btn-neutral btn-icon mr-4">
                  <span class="btn-inner--icon"><img src="img/icons/common/github.svg"></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"><img src="img/icons/common/google.svg"></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div>
            </b-card-header> -->
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <base-alert v-if="isRegisterError" dismissible type="danger">
                <strong>Failed!</strong> {{regError}}
              </base-alert>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="First Name"
                              name="FistName"
                              :rules="{required: true}"
                              v-model="model.first_name">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-hat-3"
                              placeholder="Last Name"
                              name="LastName"
                              :rules="{required: true}"
                              v-model="model.last_name">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              name="Email"
                              :rules="{required: true, email: true}"
                              v-model="model.email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              prepend-icon="ni ni-lock-circle-open"
                              placeholder="password"
                              type="password"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              v-model="model.password">
                  </base-input>
                  <div class="text-muted font-italic"><small>password strength: <span
                    class="text-success font-weight-700">strong</span></small></div>
                  <b-row class="my-3">
                    <b-col cols="12">
                      <base-input :rules="{ required: { allowFalse: false } }" name="Privacy Policy">
                        <b-form-checkbox v-model="model.agree">
                          <span class="text-muted">I agree with the <a href="#">Privacy Policy</a></span>
                        </b-form-checkbox>
                      </base-input>
                    </b-col>
                  </b-row>
                  <div class="text-center">
                    <b-button type="submit" variant="primary" class="mt-1">Create account</b-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <span class="text-light"><small>Already have an account?</small></span>
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/admin/login" class="text-light"><small>Sign in</small></router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  // import flatPicker from "vue-flatpickr-component";
  // import "flatpickr/dist/flatpickr.css";

  export default {
    page: {
      title: "Register",
      meta: [{ name: "description", content: "" }]
    },
    components: {
    },
    data() {
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
      }
    },
    methods: {
      onSubmit() {
        // this will be called only after form is valid. You can do an api call here to register users
        // Reset the regError if it existed.
        this.regError = null;
        return (
          this.$store
            .dispatch("register", {
                first_name: this.model.first_name,
                last_name: this.model.last_name,
                email: this.model.email,
                password: this.model.password,
                password_confirmation: this.model.password
            })
            .then((res, status) => {
              this.isRegisterError = false;
              this.registerSuccess = true;
              if (this.registerSuccess) {
                this.$router.push(
                  { name: "AdminLogin" }
                );
              }
            })
            .catch((error) => {
              this.regError = error ? error : "";
              this.isRegisterError = true;
            })
        );
      }
    }

  };
</script>
<style></style>
