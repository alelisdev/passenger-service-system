<template>
  <div>
    <base-header class="pb-6">
      <b-row class="align-items-center py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 text-white d-inline-block mb-0">Add Flight</h6>
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
              <h3 slot="header" class="mb-0">Add Flight</h3>
              <!-- Card body -->
              <base-alert v-if="isError" dismissible type="danger">
                <strong>Failed!</strong> {{error}}
              </base-alert>
              <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                <b-form role="form" class="row" @submit.prevent="handleSubmit(onSubmit)">
                  <div class="col-md-6 col-sm-12">
                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-plane"
                                label="Airline Code"
                                placeholder="Airline Code"
                                name="AirlineCode"
                                :rules="{required: true}"
                                v-model="model.airline_code">
                    </base-input>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-plane"
                                label="Flight Number"
                                placeholder="Flight Number"
                                name="FlightNumber"
                                :rules="{required: true}"
                                v-model="model.flight_number">
                    </base-input>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-plane-departure"
                                label="Origin Airport"
                                placeholder="Origin Airport"
                                name="OriginAirport"
                                :rules="{required: true}"
                                v-model="model.origin_airport_name">
                    </base-input>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <base-input alternative
                                class="mb-3"
                                prepend-icon="ni ni-caps-small"
                                label="Origin Airport IATA Code"
                                placeholder="Origin Airport IATA Code"
                                name="OriginAirportIATACode"
                                :rules="{required: true}"
                                v-model="model.origin_airport_code">
                    </base-input>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <base-input alternative
                                class="mb-3"
                                prepend-icon="fas fa-plane-arrival"
                                label="Destination Airport"
                                placeholder="Destination Airport"
                                name="DestinationAirport"
                                :rules="{required: true}"
                                v-model="model.destination_airport_name">
                    </base-input>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <base-input alternative
                                class="mb-3"
                                prepend-icon="ni ni-caps-small"
                                label="Destination Airport IATA Code"
                                placeholder="Destination Airport IATA Code"
                                name="DestinationAirportIATACode"
                                :rules="{required: true}"
                                v-model="model.destination_airport_code">
                    </base-input>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <base-input prepend-icon="fas fa-plane-departure" label="Departure Time" name="DepartureTime" :rules="{required: true}">
                      <flat-picker slot-scope="{focus, blur}"
                                    @on-open="focus"
                                    @on-close="blur"
                                    :config="configs.timePicker"
                                    class="form-control datepicker"
                                    v-model="model.departure_time">
                      </flat-picker>
                    </base-input>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <base-input prepend-icon="fas fa-plane-arrival" label="Arrival Time" name="ArrivalTime" :rules="{required: true}">
                      <flat-picker slot-scope="{focus, blur}"
                                    @on-open="focus"
                                    @on-close="blur"
                                    :config="configs.timePicker"
                                    class="form-control datepicker"
                                    v-model="model.arrival_time">
                      </flat-picker>
                    </base-input>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <base-input label="Type">
                      <el-select v-model="model.type"
                                 filterable
                                 placeholder="Scheduled Type"
                                 :rules="{required: true}">
                        <el-option v-for="option in typeOptions"
                                   :key="option.label"
                                   :label="option.label"
                                   :value="option.value">
                        </el-option>
                      </el-select>
                    </base-input>
                  </div>
                  <div class="col-md-6 col-sm-12">
                    <base-input label="Days Of Operation" v-if="model.type != 'CHARTER'">
                      <el-select v-model="model.operation_days"
                                 multiple
                                 filterable
                                 placeholder="Days Of Operation"
                                 :rules="{required: true}">
                        <el-option v-for="option in daysOptions"
                                   :key="option.label"
                                   :label="option.label"
                                   :value="option.value">
                        </el-option>
                      </el-select>
                    </base-input>
                  </div>
                  <div class="d-flex justify-content-between col-12 mt-4">
                    <router-link :to="{name: 'Flights'}" class="btn btn-secondary">Cancel</router-link>
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
      title: "Create Flight",
      meta: [{ name: "description", content: "" }]
    },
    components: {
      [Select.name]: Select,
      [Option.name]: Option,
      flatPicker,
    },
    data() {
      return {
        typeOptions: [
          {
            label: 'REGULAR',
            value: 'REGULAR'
          },
          {
            label: 'CHARTER',
            value: 'CHARTER'
          },
        ],
        daysOptions: [
          {
            label: '1',
            value: 1
          },
          {
            label: '2',
            value: 2
          },
          {
            label: '3',
            value: 3
          },
          {
            label: '4',
            value: 4
          },
          {
            label: '5',
            value: 5
          },
          {
            label: '6',
            value: 6
          },
          {
            label: '7',
            value: 7
          },
        ],
        configs: {
          dateTimePicker: {
            enableTime: true,
            dateFormat: 'Y-m-d H:i'
          },
          timePicker: {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
            time_24hr: true
          }
        },
        model: {
          airline_code: '',
          flight_number: '',
          origin_airport_name: '',
          origin_airport_code: '',
          destination_airport_name: '',
          destination_airport_code: '',
          departure_time: '',
          arrival_time: '',
          type: '',
          operation_days: [],
        },
        error: null,
        isError: false,
        isSubmitting: false,
      }
    },
    mounted() {
    },
    computed: {
      ...mapGetters([
      ]),
    },
    methods: {
      ...mapActions([
        'createFlight',
      ]),

      onSubmit() {
        // this will be called only after form is valid. You can do an api call here to register Flights
        // Reset the error if it existed.
        this.error = null;
        this.isSubmitting = true;
        return (
          this.createFlight({
              airline_code: this.model.airline_code,
              flight_number: this.model.flight_number,
              origin_airport_name: this.model.origin_airport_name,
              origin_airport_code: this.model.origin_airport_code,
              destination_airport_name: this.model.destination_airport_name,
              destination_airport_code: this.model.destination_airport_code,
              departure_time: this.model.departure_time,
              arrival_time: this.model.arrival_time,
              type: this.model.type,
              operation_days: this.model.operation_days,
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
                { name: "Flights" }
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
