<template>
  <div>
    <!-- Header -->
    <div class="header py-6">
        <div class="header-body">
          <b-row class="justify-content-center">
            <b-col lg="8" md="9" sm="10" cols="10">
              <span>Step 2</span>
              <h1>Welcome, {{this.passengerInfo.passenger.first_name}}</h1>
              <span>Please conrim your booking information.</span>
            </b-col>
          </b-row>
        </div>
    </div>
    <!-- Page content -->
    <div class="pb-5">
      <b-row class="justify-content-center mx-0">
        <b-col lg="8" md="9" sm="10" cols="10" class="px-0">
          <v-card class="mx-auto">
            <v-card-title class="bg-dark">
              <v-col
                cols="6"
                sm="6">
                <span class="text-white" style="font-size:20px;">{{this.passengerInfo.aircraft_flight.flight.origin_airport_name}} - </span> 
                <span class="text-white" style="font-size:20px;">{{this.passengerInfo.aircraft_flight.flight.destination_airport_name}}</span>
              </v-col>
              <v-col
                cols="3"
                sm="3">
                <span class="text-white" style="font-size:12px;">Date:</span>
                <span class="text-white" v-for="item in this.passengerInfo.aircraft_flight.flight.operation_days" style="font-size:15px;">{{new Date().toJSON().slice(0,8).replace(/-/g,'/')}}{{ item }},</span>
              </v-col>
              <v-col
                cols="3"
                sm="3">
                <span class="text-white" style="font-size:12px;">Flight Number:</span>
                <span class="text-white" style="font-size:15px;">{{this.passengerInfo.aircraft_flight.flight.flight_number}}</span>
              </v-col>
            </v-card-title>

          <v-card-actions class="d-flex flex-row justify-content-around">
            <b-row>
              <v-col cols="6" sm="6" class="d-flex flex-column justify-content-center">
                <span style="font-size:12px;">{{this.passengerInfo.aircraft_flight.flight.flight_time}}</span>
                <div class="d-flex flex-row">
                  <span class="time">{{this.passengerInfo.aircraft_flight.flight.departure_time}} </span>
                  <img src="img/theme/flight.png" style="max-height: 20px;"><span class="time">{{this.passengerInfo.aircraft_flight.flight.arrival_time}}</span>
                </div>
              </v-col>
              <v-col cols="3" sm="3">
                <div class="d-flex flex-column">
                  <span style="font-size:10px;">Adult</span>
                  <h4>{{this.passengerInfo.passenger.first_name}} {{this.passengerInfo.passenger.last_name}}</h4>
                  <span style="font-size:10px;">checked baggage: 1 * 20kg</span>
                </div>
              </v-col>
              <v-col cols="3" sm="3">
                <div class="d-flex flex-column">
                  <span style="font-size:12px;">status</span>
                  <v-btn class="bg-green btn btn-md disabled">
                    OPEN FOR CHECK IN
                  </v-btn>
                </div>
              </v-col>
            </b-row>
          </v-card-actions>
          </v-card>
        </b-col>
      </b-row>
    </div>
    <b-container>
      <div class="text-center">
        <router-link to="/login" class="btn base-button btn-secondary btn-md">GO BACK</router-link>
        <base-button size="md" type="warning" class="bg-yellow" @click="continuePage()">CONFIRM</base-button>
      </div>
    </b-container>
  </div>
</template>
<script>
  import { Select, Option } from 'element-ui';
  import {mapActions, mapGetters, mapState} from 'vuex'

  export default {
    page: {
      title: "Booking Info",
      meta: [{ name: "description", content: "" }]
    },
    components: {
      [Select.name]: Select,
      [Option.name]: Option,
    },
    data() {
      return {
        routines: [],
        selected: true,
        selectedData: null,

      }
    },
    watch: {
      flights: function () {
        this.routines = this.flights;
      },
    },
    computed: {
     ...mapGetters([
        'flights',
        'passengerInfo',
        'currentPassenger',
      ]),
      ...mapState([
        'status'
    ]),
    },
    mounted() {
      this.initRoutines();
      this.initCheckin(this.currentPassenger.book_reference);
    },
    methods: {
      ...mapActions([
        'initRoutines',
        'initCheckin',
      ]),
      continuePage() {
        this.$router.push({name: "Declaration"});
      },
    }
  };
</script>
<style lang="scss">
  .el-select .el-input .el-input__inner {
    font-size: 11px !important;
    height: 28px !important;
  }
  .el-input__icon {
    line-height: 29px !important;
  }
  .el-select-dropdown__item {
    font-size: 11px !important;
  }
</style>
