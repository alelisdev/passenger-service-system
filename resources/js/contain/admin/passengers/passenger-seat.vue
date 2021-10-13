<template>    
  <div class="content">
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col cols="7" lg="6">
          <h6 class="h2 text-white d-inline-block mb-0">Select Seat</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </b-col>
        <b-col lg="6" cols="5" class="text-right">
          <router-link :to="{name: 'PassengerFlights', params: { passengerId: this.$route.params.passengerId }}" class="btn btn-neutral btn-sm">
            <i class="far fa-hand-point-left"></i> Go Back
          </router-link>
          <base-button class="btn btn-neutral btn-sm" :disabled="isSaving" @click="save">
            <i class="far fa-save"></i> Save Selection
          </base-button>
        </b-col>
      </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <div>
        <card class="no-border-card" body-classes="px-0 pb-1" footer-classes="pb-2">
          <div class="row">
            <b-col cols="12" class="">
              
            </b-col>
            <b-col cols="6" class="px-5 pt-5">
              <h2 class="mb-5">Passenger</h2>
              <el-table class="table-responsive align-items-center table-flush mb-5"
                        header-row-class-name="thead-light"
                        :data="tableData">
                <el-table-column label="Passenger"
                             prop="passenger"
                             min-width="160px">
                  <div slot-scope="{row}">
                    {{row.passenger.first_name +' '+ row.passenger.last_name}}
                  </div>
                </el-table-column>
                <el-table-column label="Seat"
                              prop="seat"
                              min-width="120px">
                  <div slot-scope="{row}">
                    {{row.seat}}
                  </div>
                </el-table-column>
              </el-table>
              <div>
                <ul class="seat-config">
                  <li>
                    <span class="seat available-seat"></span>
                    <span class="description">Seat Available</span>
                  </li>
                  <li>
                    <span class="seat reserved-seat"></span>
                    <span class="description">Current Passenger's Seat</span>
                  </li>
                  <li>
                    <span class="seat disabled-seat"></span>
                    <span class="description">Seat Not Available for Selection</span>
                  </li>
                </ul>
              </div>
            </b-col>
            <b-col cols="6" class="">
              <div class="plane">
                <div class="cockpit">
                  <h1>Seat Selection</h1>
                </div>
                <div class="exit exit--front fuselage">
                </div>
                <ol class="cabin fuselage">
                  <li class="row" v-for="i in 20" :key="i">
                    <ol class="seats" type="A">
                      <li class="seat">
                        <input type="checkbox" v-model="seats[i+'A']" :id="i+'A'" />
                        <label :for="i+'A'">{{i}}A</label>
                      </li>
                      <li class="seat">
                        <input type="checkbox" v-model="seats[i+'B']" :id="i+'B'" />
                        <label :for="i+'B'">{{i}}B</label>
                      </li>
                      <li class="seat">
                        <input type="checkbox" v-model="seats[i+'C']" :id="i+'C'" />
                        <label :for="i+'C'">{{i}}C</label>
                      </li>
                      <li class="seat">
                        <input type="checkbox" v-model="seats[i+'D']" :id="i+'D'" />
                        <label :for="i+'D'">{{i}}D</label>
                      </li>
                      <li class="seat">
                        <input type="checkbox" v-model="seats[i+'E']" :id="i+'E'" />
                        <label :for="i+'E'">{{i}}E</label>
                      </li>
                    </ol>
                  </li>
                </ol>
                <div class="exit exit--back fuselage">
                </div>
              </div>   
            </b-col>
          </div>
        </card>
      </div>
    </b-container>
    </div>
</template>
<script>
import { Table, TableColumn, Select, Option } from 'element-ui';
import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb'
import { BasePagination } from '@/components';
import clientPaginationMixin from '@/common/PaginatedTables/clientPaginationMixin'
import swal from 'sweetalert2';

import {mapActions, mapGetters} from 'vuex'
import BaseButton from '../../../components/BaseButton.vue';

export default {
  page: {
    title: "Seat Map",
    meta: [{ name: "description", content: "" }]
  },
  mixins: [clientPaginationMixin],
  components: {
    BasePagination,
    RouteBreadCrumb,
    BaseButton,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      seats: [],
      tableData: [],
      isSaving: false,
    };
  },
  watch: {
    flightPassenger: function() {
      this.tableData.push(this.flightPassenger);
      if (this.flightPassenger.seat != null) {
        document.getElementById(this.flightPassenger.seat).disabled = false
        this.seats[this.flightPassenger.seat] = true
      }
    },
    flightPassengers: function() {
      this.flightPassengers.forEach(function(item, index) {
        if (item.seat != null) {
          document.getElementById(item.seat).disabled = true
        }
      });
      this.getFlightPassengerById({passengerId: this.$route.params.passengerId, flightId: this.$route.params.flightId});
    },
  },
  computed: {
    ...mapGetters([
      // 'passenger',
      'flightPassenger',
      'flightPassengers',
    ]),
  },
  mounted() {
    // this.getPassengerById(this.$route.params.passengerId);
    this.getFlightPassengers(this.$route.params.flightId);
  },
  methods: {
    ...mapActions([
      // 'getPassengerById',
      'getFlightPassengerById',
      'getFlightPassengers',
      'passengerSeatSave',
    ]),

    save() {
      this.isSaving = true;
      let passenger_seats = [];
      for (const [key, value] of Object.entries(this.seats)) {
        if (value == true) {
          passenger_seats.push(key)
        }
      }
      if (passenger_seats.length == 1) {
        this.passengerSeatSave({
            passengerId: this.$route.params.passengerId,
            flightId: this.$route.params.flightId,
            seat: passenger_seats[0]
          })
          .then((res) => {
            this.isSaving = false;
            this.flightPassenger.seat = passenger_seats[0]
            this.$notify({
                message: 'Successfully Saved',
                timeout: 5000,
                icon: 'ni ni-bell-55',
                type: 'success'
              });
          })
          .catch((error) => {
            this.isSaving = false;
          })
      } else {
        this.isSaving = false;
        this.$notify({
            message: 'You can select only one seat.',
            timeout: 5000,
            icon: 'ni ni-bell-55',
            type: 'warning'
          });
      }
    },
  }
};
</script>
<style>
  .no-border-card .card-footer{
    border-top: 0;
  }
  .seat-config {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .seat-config li {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  .seat-config .seat {
    display: block;
    position: relative;
    width: 40px;
    height: 40px;
    padding: 4px 0;
    border-radius: 5px;
  }
  .seat-config .seat.available-seat {
    background: #6acc6a;
  }
  .seat-config .seat.reserved-seat {
    background: #ff844a;
  }
  .seat-config .seat.disabled-seat {
    background: #dddddd;
  }
  .seat-config .seat:before {
    content: "";
    position: absolute;
    width: 75%;
    height: 80%;
    top: 1px;
    left: 50%;
    transform: translate(-50%, 0%);
    background: rgba(255, 255, 255, 0.4);
    border-radius: 3px;
  }
  .seat-config .description {
    padding-left: 15px;
  }
</style>
