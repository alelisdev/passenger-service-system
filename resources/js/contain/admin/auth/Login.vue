<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-6 py-lg-6 pt-lg-7">
      <b-container>
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Welcome!</h1>
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
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="bg-secondary border-0 mb-0">
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <small>Or sign in with credentials</small>
              </div>
              <base-alert v-if="isAuthError" dismissible type="danger">
                <strong>Failed!</strong> {{authError}}
              </base-alert>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                  <base-input alternative
                              class="mb-3"
                              name="Email"
                              :rules="{required: true, email: true}"
                              prepend-icon="ni ni-email-83"
                              placeholder="Email"
                              v-model="model.email">
                  </base-input>

                  <base-input alternative
                              class="mb-3"
                              name="Password"
                              :rules="{required: true, min: 6}"
                              prepend-icon="ni ni-lock-circle-open"
                              type="password"
                              placeholder="Password"
                              v-model="model.password">
                  </base-input>

                  <b-form-checkbox v-model="model.rememberMe">Remember me</b-form-checkbox>
                  <div class="text-center">
                    <b-button type="submit" variant="primary" class="mt-4" :disabled="isSubmitting">
                      <i class="fa fa-spinner fa-spin" v-if="isSubmitting"></i> Sign in
                    </b-button>
                  </div>
                </b-form>
              </validation-observer>
            </b-card-body>
          </b-card>
          <b-row class="mt-3">
            <b-col cols="6">
              <!-- <router-link to="#" class="text-light"><small>Forgot password?</small></router-link> -->
            </b-col>
            <b-col cols="6" class="text-right">
              <router-link to="/admin/register" class="text-light"><small>Create new account</small></router-link>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    page: {
      title: "Admin Login",
      meta: [{ name: "description", content: "" }]
    },
    data() {
      return {
        model: {
          email: '',
          password: '',
          rememberMe: false
        },
        authError: null,
        isAuthError: false,
        isSubmitting: false,
      };
    },
    computed: {
      ...mapGetters([
        'currentRole',
      ]),
    },
    methods: {
      onSubmit() {
        // this will be called only after form is valid. You can do api call here to login
        // Reset the authError if it existed.
        this.authError = null;
        this.isSubmitting = true;
        return (
          this.$store
            .dispatch("adminLogin", {
              email: this.model.email,
              password: this.model.password
            })
            .then((res) => {
              // console.log(this.currentRole)
              if (this.currentRole == 'Admin') {
                this.$router.push({name: "AdminUsers"});
              } else {
                this.$router.push({name: "AdminLogin"});
              }
              this.isAuthError = false;
              this.isSubmitting = false;
            })
            .catch(error => {
              this.authError = error ? error : "";
              this.isAuthError = true;
              this.isSubmitting = false;
            })
        );
      }
    }
  };
</script>
