<template>
  <div>
    <b-row>
        <b-col xl="6" lg="6" md="6" class="px-5 mt-5">
            <b-container class="justify-content-center m-5">
                <span>Step 1</span>
                <h1>Ready to Check in?</h1>
                <span>Check in and get your boarding pass from 24 hours before your flight</span>
                <b-row class="justify-content-center">
                    <b-col lg="10" md="12">
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
                                            label="Last Name"
                                            class="mb-3"
                                            name="LastName"
                                            :rules="{required: true}"
                                            v-model="model.last_name">
                                </base-input>

                                <base-input alternative
                                            label="Reference Reservation"
                                            class="mb-3"
                                            name="Reference"
                                            :rules="{required: true, min: 6, max: 6}"
                                            v-model="model.reference">
                                </base-input>

                                <div class="text-center">
                                    <b-button type="submit" variant="primary" class="mt-4 bg-yellow" :disabled="isSubmitting">
                                    <i class="fa fa-spinner fa-spin" v-if="isSubmitting"></i> CONFIRM
                                    </b-button>
                                </div>
                                </b-form>
                            </validation-observer>
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-container>
        </b-col>
        <b-col xl="6" lg="6" md="6">
            <img src="img/theme/login.png" style="width: 100%;">
        </b-col>
    </b-row>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    page: {
      title: "Login",
      meta: [{ name: "description", content: "" }]
    },
    data() {
      return {
        model: {
          last_name: '',
          reference: '',
        },
        authError: null,
        isAuthError: false,
        isSubmitting: false,
      };
    },
    computed: {
      ...mapGetters([
        'currentPassenger',
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
            .dispatch("login", {
              last_name: this.model.last_name,
              reference: this.model.reference
            })
            .then((res) => {
              // console.log(this.currentPassenger)
              if (this.currentPassenger.role == 'Passenger') {
                this.$router.push({name: "Booking"});
              } else {
                this.$router.push({name: "Login"});
              }
              this.isAuthError = false;
              this.isSubmitting = false;
            })
            .catch(error => {
              // console.log(error)
              this.authError = error ? error : "";
              this.isAuthError = true;
              this.isSubmitting = false;
            })
        );
      }
    }
  };
</script>
