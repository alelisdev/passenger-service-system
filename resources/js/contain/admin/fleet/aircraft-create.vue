<template>
  <div>
    <base-header class="pb-6">
      <b-row class="align-items-center py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 text-white d-inline-block mb-0">Add Aircraft</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb/>
          </nav>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col lg="12">
          <div class="card-wrapper">
            <!-- Input groups -->
            <card>
              <!-- Card header -->
              <h3 slot="header" class="mb-0">Add Aircraft</h3>
              <!-- Card body -->
              <base-alert v-if="isError" dismissible type="danger">
                <strong>Failed!</strong> {{error}}
              </base-alert>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" class="row" @submit.prevent="handleSubmit(onSubmit)">
                  <div class="col-8 offset-2">
                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-fighter-jet"
                                label="Aircraft Registration"
                                placeholder="Aircraft Registration"
                                name="Registration"
                                :rules="{required: true}"
                                v-model="model.registration">
                    </base-input>

                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-fighter-jet"
                                label="Aircraft Model"
                                placeholder="Aircraft Model"
                                name="Model"
                                :rules="{required: true}"
                                v-model="model.model">
                    </base-input>

                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-chair"
                                label="Seat Configuration"
                                placeholder="e.g x-x"
                                name="SeatConfiguration"
                                :rules="{required: true}"
                                v-model="model.seat_config"
                                v-mask="'#-#'">
                    </base-input>

                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-chair"
                                label="Total Seat"
                                placeholder="Total Seat"
                                name="TotalSeat"
                                :rules="{required: true, numeric: true, min: 1}"
                                v-model="model.total_seat">
                    </base-input>
                    
                  </div>
                  <div class="d-flex justify-content-between col-12 mt-4">
                    <router-link :to="{name: 'Aircrafts'}" class="btn btn-secondary">Cancel</router-link>
                    <b-button type="submit" :disabled="isSubmitting" variant="primary">
                      <i class="fa fa-spinner fa-spin" v-if="isSubmitting"></i> Create
                    </b-button>
                  </div>
                </b-form>
              </validation-observer>
            </card>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { Select, Option } from 'element-ui'
  import flatPicker from "vue-flatpickr-component";
  import "flatpickr/dist/flatpickr.css";

  import {mapActions, mapGetters} from 'vuex'

  export default {
    page: {
      title: "Create Aircraft",
      meta: [{ name: "description", content: "" }]
    },
    components: {
      [Select.name]: Select,
      [Option.name]: Option,
      flatPicker,
    },
    data() {
      return {
        model: {
          registration: '',
          model: '',
          seat_config: null,
          total_seat: null,
        },
        error: null,
        isError: false,
        isSubmitting: false,
      }
    },
    methods: {
      ...mapActions([
        'createAircraft',
      ]),

      onSubmit() {
        // this will be called only after form is valid. You can do an api call here to register aircrafts
        // Reset the error if it existed.
        this.error = null;
        this.isSubmitting = true;
        return (
          this.createAircraft({
              registration: this.model.registration,
              model: this.model.model,
              seat_config: this.model.seat_config,
              total_seat: this.model.total_seat,
            })
            .then((res) => {
              this.isError = false;
              this.isSubmitting = false;
              this.$notify({
                message: 'Successfully Created',
                timeout: 5000,
                icon: 'ni ni-bell-55',
                type: 'success'
              });
              this.$router.push(
                { name: "Aircrafts" }
              );
            })
            .catch((error) => {
              this.error = error ? error : "";
              this.isError = true;
              this.isSubmitting = false;
            })
        );
      }
    }
  }
</script>
