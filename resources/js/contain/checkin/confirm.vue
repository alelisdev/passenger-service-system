<template>
  <div>
    <!-- Header -->
    <div class="header py-6">
        <div class="header-body">
            <b-row class="justify-content-center">
            <b-col lg="8" md="9" sm="10" cols="10">
                <span>Step 6</span>
                <h1>Confirmation</h1>
            </b-col>
            </b-row>
        </div>
    </div>
    <div>
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
                    <div class="d-flex flex-column" style="margin-top: 30px;">
                    <b-row class="d-flex flex-row">
                        <v-col cols="6" sm="6" class="d-flex flex-column">
                            <div class="justify-content-center" style="margin-left: 30px;">
                                <span style="font-size:12px;">{{this.passengerInfo.aircraft_flight.flight.flight_time}}</span>
                                <div class="d-flex flex-row">
                                  <span class="time">{{this.passengerInfo.aircraft_flight.flight.departure_time}} </span>
                                  <img src="img/theme/flight.png" style="max-height: 20px;"><span class="time">{{this.passengerInfo.aircraft_flight.flight.arrival_time}}</span>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols="3" sm="3">
                            <div class="d-flex flex-column">
                            <span style="font-size:10px;">Adult</span>
                            <h4>{{this.passengerInfo.passenger.first_name}} {{this.passengerInfo.passenger.last_name}}</h4>
                            </div>
                        </v-col>
                        <v-col cols="2" sm="2">
                            <div class="d-flex flex-column">
                            <span style="font-size:12px;">status</span>
                            <v-btn class="bg-green btn btn-md disabled">
                                CHECKED IN
                            </v-btn>
                            </div>
                        </v-col>
                    </b-row>

                    <v-divider></v-divider>
                    <div>
                        <div class="table-responsive mt-2 mb-4">
                            <base-table class="table thead-light"
                                        :data="flightTableData">
                            <template slot="columns">
                                <th class="text-center" scope="col">Flight No.</th>
                                <th class="text-center" scope="col">Departure Date Time</th>
                                <th class="text-center" scope="col">Origin</th>
                                <th class="text-center" scope="col">Destination</th>
                            </template>
                            <template slot-scope="{row}">
                                <td class="text-center">{{row.aircraft_flight.flight.airline_code+' '+row.aircraft_flight.flight.flight_number}}</td>
                                <td class="text-center">{{row.aircraft_flight.date+' '+row.aircraft_flight.departure_time}}</td>
                                <td class="text-center">
                                {{row.aircraft_flight.flight.origin_airport_name}}<br/>
                                </td>
                                <td class="text-center">
                                {{row.aircraft_flight.flight.destination_airport_name}}<br/>
                                </td>
                            </template>
                            </base-table>
                        </div>
                        <div class="table-responsive mb-4">
                            <base-table class="table thead-light"
                                        :data="passengerTableData">
                            <template slot="columns">
                                <th class="text-center" scope="col">Passenger</th>
                                <th class="text-center" scope="col">Passenger Type</th>
                                <th class="text-center" scope="col">Booking Ref</th>
                                <th class="text-center" scope="col">Seat</th>
                            </template>
                            <template slot-scope="{row}">
                                <td class="text-center">{{row.passenger.first_name+' '+row.passenger.last_name}}</td>
                                <td class="text-center">{{row.passenger_type}}</td>
                                <td class="text-center">{{row.book_reference}}</td>
                                <td class="text-center">{{row.seat}}</td>
                            </template>
                            </base-table>
                        </div>
                    </div>
                    </div>
                </v-card>
            </b-col>
        </b-row>
    </div>
    <div class="header py-6">
        <div class="header-body">
            <b-row class="justify-content-center">
                <b-col lg="8" md="9" sm="10" cols="10">
                    <span style="margin-bottom: 5px">Anyone passing through a security checkpoint will be required to have a photo ID and a Boarding Pass.</span>
                </b-col>
            </b-row>
            <b-row class="justify-content-center">
                <b-col lg="8" md="9" sm="10" cols="10">
                    <v-divider></v-divider>
                </b-col>
            </b-row>

            <b-row class="justify-content-center">
                <b-col lg="8" md="9" sm="10" cols="10">
                    <h2>Please enter your email address receive your boarding pass or download as PDF-file.</h2>
                </b-col>
            </b-row>
            <b-row class="justify-content-center">
                <b-col lg="8" md="9" sm="10" cols="10">
                    <b-row class="d-flex flex-row justify-content-between">
                        <b-col lg="4" md="4" sm="4" cols="4">
                            <input class="form-control" type="email" value="" placeholder="Input Email..." />
                        </b-col>
                        <b-col lg="2" md="4" sm="4" cols="4">
                            <base-button size="md" @click="snedEmail()">SEND</base-button>
                        </b-col>
                        <b-col lg="6" md="4" sm="4" cols="4">
                            <base-button size="md" type="warning" class="bg-yellow" @click="download()">DOWNLOAD PDF</base-button>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <b-row class="justify-content-center">
                <b-col lg="4" md="4" sm="5" cols="5">
                    <h2>Boarding time</h2>
                    <span>Faliure to represent at the boarding gate 30 minute before the scheduled time of dapature will result in boarding being defined. If this occurs, please advise your travel administrator.</span>
                </b-col>
                <b-col lg="4" md="4" sm="5" cols="5">
                    <h2>Carrying-on Baggage</h2>
                    <span>Must fit within the test unit and weight 7kgs or less. If not, please check it or charges will apply at the gate.x</span>
                </b-col>
            </b-row>
        </div>
    </div>
    <b-container>
        <div class="text-center">
            <router-link to="/select-seat" class="btn base-button btn-secondary btn-md">GO BACK</router-link>
        </div>
    </b-container>
  </div>
</template>
<script>
  import BaseTable from '@/components/BaseTable';
  import BaseButton from '@/components/BaseButton.vue';
  import { Select, Option } from 'element-ui';

  import {mapActions, mapGetters} from 'vuex'

  export default {
    page: {
      title: "Confirmation",
      meta: [{ name: "description", content: "" }]
    },
    components: {
      BaseTable,
      BaseButton,
      [Select.name]: Select,
      [Option.name]: Option,
    },
    data() {
      return {
        flightTableData: [],
        passengerTableData: [],
      }
    },
    watch: {
      passengerInfo: function() {
        this.flightTableData.push(this.passengerInfo);
        this.passengerTableData.push(this.passengerInfo);
      },
    },
    computed: {
      ...mapGetters([
        'passengerInfo',
        'currentPassenger',
      ]),
    },
    mounted() {
      this.initCheckin(this.currentPassenger.book_reference);
    },
    methods: {
      ...mapActions([
        'initCheckin',
      ]),

      continuePage() {
        this.$router.push({name: "Booking"});
      },
      download() {
        console.log('dddd');
      },
      sendEmail() {
        console.log('dddd');
      },
    }
  };
</script>
<style lang="scss">
</style>
