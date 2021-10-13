<template>
  <div>
    <base-header class="pb-6">
      <b-row class="align-items-center py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 text-white d-inline-block mb-0">Add Passenger</h6>
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
              <h3 slot="header" class="mb-0">Add Passenger</h3>
              <!-- Card body -->
              <base-alert v-if="isError" dismissible type="danger">
                <strong>Failed!</strong> {{error}}
              </base-alert>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" class="row mr-0 ml-0" @submit.prevent="handleSubmit(onSubmit)">
                  <div class="col-md-6 col-sm-12">
                    <base-input alternative
                                class="mb-3"
                                prepend-icon="ni ni-hat-3"
                                label="First Name"
                                placeholder="First Name"
                                name="FirstName"
                                :rules="{required: true}"
                                v-model="model.first_name">
                    </base-input>

                    <base-input alternative
                                class="mb-3"
                                prepend-icon="ni ni-hat-3"
                                label="Last Name"
                                placeholder="Last Name"
                                name="LastName"
                                :rules="{required: true}"
                                v-model="model.last_name">
                    </base-input>

                    <base-input prepend-icon="fas fa-phone"
                                label="Phone Number"
                                placeholder="Phone"
                                name="Phone"
                                type="tel"
                                :rules="{required: true}"
                                v-model="model.phone">
                    </base-input>

                    <base-input prepend-icon="fas fa-calendar" label="Birthday" name="Birthday">
                      <flat-picker slot-scope="{focus, blur}"
                                    @on-open="focus"
                                    @on-close="blur"
                                    class="form-control datepicker"
                                    v-model="model.birthday">
                      </flat-picker>
                    </base-input>

                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-globe-americas"
                                label="Company"
                                placeholder="Company"
                                name="Company"
                                v-model="model.company">
                    </base-input>
                  </div>

                  <div class="col-md-6 col-sm-12">
                    <base-input alternative
                                class="mb-3"
                                prepend-icon="ni ni-email-83"
                                label="Email"
                                placeholder="Email"
                                name="Email"
                                :rules="{email: true}"
                                v-model="model.email">
                    </base-input>

                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-clone"
                                label="Roster"
                                placeholder="e.g x-x-x-x"
                                name="Roster"
                                v-model="model.roster"
                                v-mask="'#-#-#-#'">
                    </base-input>

                    <base-input prepend-icon="fas fa-calendar" label="Start Date" name="StartDate">
                      <flat-picker slot-scope="{focus, blur}"
                                    @on-open="focus"
                                    @on-close="blur"
                                    class="form-control datepicker"
                                    v-model="model.start_date">
                      </flat-picker>
                    </base-input>

                    <div class="row">
                      <base-input label="Departed Flight" class="col-6">
                        <el-select v-model="model.departed_flight"
                                    filterable
                                    placeholder="Departed Flight"
                                    >
                          <el-option v-for="option in flights"
                                      :key="option.id"
                                      :label="option.airline_code + option.flight_number"
                                      :value="option.id">
                          </el-option>
                        </el-select>
                      </base-input>

                      <base-input label="Landed Flight" class="col-6">
                        <el-select v-model="model.landed_flight"
                                    filterable
                                    placeholder="Landed Flight"
                                    >
                          <el-option v-for="option in flights"
                                      :key="option.id"
                                      :label="option.airline_code + option.flight_number"
                                      :value="option.id">
                          </el-option>
                        </el-select>
                      </base-input>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between col-12 mt-4">
                    <router-link :to="{name: 'Passengers'}" class="btn btn-secondary">Cancel</router-link>
                    <b-button type="submit" variant="primary" :disabled="isSubmitting">
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
      title: "Create Passenger",
      meta: [{ name: "description", content: "" }]
    },
    components: {
      [Select.name]: Select,
      [Option.name]: Option,
      flatPicker,
    },
    data() {
      return {
        roleOptions: [
          {
            label: 'Admin',
            value: 'Admin'
          },
          {
            label: 'Passenger',
            value: 'Passenger'
          },
        ],
        model: {
          first_name: '',
          last_name: '',
          phone: '',
          company: '',
          birthday: '',
          roster: '',
          email: '',
          departed_flight: '',
          landed_flight: '',
          start_date: ''
        },
        error: null,
        isError: false,
        isSubmitting: false,
      }
    },
    computed: {
      ...mapGetters([
        'flights',
      ]),
    },
    mounted() {
      this.initFlights();
    },
    methods: {
      ...mapActions([
        'initFlights',
        'createPassenger',
      ]),

      onSubmit() {
        // this will be called only after form is valid. You can do an api call here to register passengers
        // Reset the error if it existed.
        this.error = null;
        this.isSubmitting = true;
        if ((this.model.roster != '') && (this.model.roster != null)) {
          let roster = this.model.roster.split("-");
          let index = roster.findIndex(e => e == "")
          var roster_error = false;
          // console.log(index)
          if ((roster.length < 4) || (index > -1)) {
            this.$notify({
                message: 'Roster is not valid',
                timeout: 5000,
                icon: 'ni ni-bell-55',
                type: 'warning'
              });
            roster_error = true;
          }
          if ((roster_error) || (this.model.departed_flight == '') || (this.model.departed_flight == null) || (this.model.landed_flight == '') || (this.model.landed_flight == null)) {
            this.isSubmitting = false;
            return ;
          }
        }
        
        return (
          this.createPassenger({
              first_name: this.model.first_name,
              last_name: this.model.last_name,
              phone: this.model.phone,
              company: this.model.company,
              birthday: this.model.birthday,
              roster: this.model.roster,
              departed_flight: this.model.departed_flight,
              landed_flight: this.model.landed_flight,
              start_date: this.model.start_date,
              email: this.model.email,
            })
            .then((res) => {
              this.isError = false;
              this.isSubmitting = false;
              if (res.data.message == 'success') {
                this.$notify({
                  message: 'Successfully Created',
                  timeout: 5000,
                  icon: 'ni ni-bell-55',
                  type: 'success'
                });
              } else {
                this.$notify({
                  message: res.data.message,
                  timeout: 5000,
                  icon: 'ni ni-bell-55',
                  type: 'warning'
                });
              }
              this.$router.push(
                { name: "Passengers" }
              );
            })
            .catch((error) => {
              this.error = error ? error.data : "";
              this.isError = true;
              this.isSubmitting = false;
            })
        );
      }
    }
  }
</script>
