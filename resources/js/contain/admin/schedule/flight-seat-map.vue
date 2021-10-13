<template>    
  <div class="content">
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col cols="7" lg="6">
          <h6 class="h2 text-white d-inline-block mb-0">Aircraft Seat Map</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </b-col>
        <b-col lg="6" cols="5" class="text-right">
          <router-link :to="{name: 'Schedule'}" class="btn btn-neutral btn-sm">
            <i class="far fa-hand-point-left"></i> Go Back
          </router-link>
          <button class="btn btn-neutral btn-sm" :disabled="isBulkTicketing" @click="totalTicketing()">
            <i class="fas fa-ticket-alt"></i> Bulk Ticketing
          </button>
        </b-col>
      </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <div>
        <card class="no-border-card" body-classes="px-0 pb-1" footer-classes="pb-2">
          <template slot="header">
            <h3 class="mb-0">Seat Map</h3>
          </template>
          <div class="row">
            <b-col cols="12" class="mb-5">
              <h4 class="px-4 mb-3">Flight Info</h4>
              <el-table class="table-responsive align-items-center table-flush"
                        header-row-class-name="thead-light"
                        :data="flightTableData">
                <el-table-column label="Flight No."
                             prop="airline"
                             min-width="140px">
                  <div slot-scope="{row}">
                    {{row.flight.airline_code + row.flight.flight_number}}
                  </div>
                </el-table-column>
                <el-table-column label="Aircraft"
                              prop="aircraft"
                              min-width="120px">
                  <div slot-scope="{row}">
                    <span v-if="row.aircraft != null">{{row.aircraft.registration}}</span>
                    <span v-else>Not assigned</span>
                  </div>
                </el-table-column>
                <el-table-column label="From"
                              prop="origin_airport_name"
                              min-width="120px">
                  <div slot-scope="{row}">
                    {{row.flight.origin_airport_name}}
                  </div>
                </el-table-column>
                <el-table-column label="To"
                              prop="destination_airport_name"
                              min-width="120px">
                  <div slot-scope="{row}">
                    {{row.flight.destination_airport_name}}
                  </div>
                </el-table-column>
                <el-table-column label="Departure"
                              prop="departure_time"
                              min-width="120px">
                  <div slot-scope="{row}">
                    {{row.date + 'T' + row.departure_time}}
                  </div>
                </el-table-column>
                <el-table-column label="Arrival"
                              prop="arrival_time"
                              min-width="120px">
                  <div slot-scope="{row}">
                    {{row.date + 'T' + row.arrival_time}}
                  </div>
                </el-table-column>
                <el-table-column label="Duration"
                              prop="flight_time"
                              min-width="100px">
                  <div slot-scope="{row}">
                    {{row.flight_time}}
                  </div>
                </el-table-column>
                <el-table-column label="Type"
                              prop="type"
                              min-width="100px">
                  <div slot-scope="{row}">
                    <span class="text-primary" v-if="row.flight.type == 'REGULAR'">REGULAR</span>
                    <span class="text-warning" v-else>CHARTER</span>
                  </div>
                </el-table-column>
              </el-table>
            </b-col>
            <b-col cols="6" class="">
              <div class="d-flex justify-content-between align-items-center px-3 mb-4">
                <h4 class="mb-0">Passenger Table</h4>
                <button class="btn btn-neutral btn-sm" :disabled="flightPassengers.length>=100" @click="showAddModal = true">
                  <i class="fas fa-plus"></i> Add
                </button>
              </div>
              <b-col cols="12" class="d-flex justify-content-center justify-content-sm-between flex-wrap"
              >
                <el-select
                  class="select-primary pagination-select"
                  v-model="pagination.perPage"
                  placeholder="Per page"
                >
                  <el-option
                    class="select-primary"
                    v-for="item in pagination.perPageOptions"
                    :key="item"
                    :label="item"
                    :value="item"
                  >
                  </el-option>
                </el-select>

                <div>
                  <base-input v-model="searchQuery"
                              prepend-icon="fas fa-search"
                              placeholder="Search...">
                  </base-input>
                </div>
              </b-col>
              <el-table :data="queriedData"
                        row-key="id"
                        header-row-class-name="thead-light"
                        @sort-change="sortChange">
                <el-table-column label="First Name"
                              prop="first_name"
                              min-width="120px"
                              sortable>
                  <div slot-scope="{row}">
                    {{row.passenger.first_name}}
                  </div>
                </el-table-column>
                <el-table-column label="Last Name"
                              prop="last_name"
                              min-width="120px"
                              sortable>
                  <div slot-scope="{row}">
                    {{row.passenger.last_name}}
                  </div>
                </el-table-column>
                <el-table-column label="Seat"
                              prop="seat"
                              min-width="90px"
                              sortable>
                </el-table-column>
                <el-table-column label="Reference"
                              prop="book_reference"
                              min-width="100px">
                </el-table-column>
                <el-table-column min-width="140px" align="right" label="Action">
                  <div slot-scope="{row}" class="d-flex justify-content-center">
                    <button class="btn btn-neutral btn-sm" :disabled="isSaving" @click="save(row)">
                      <i class="far fa-save"></i>
                    </button>
                    <button class="btn btn-neutral btn-sm" :disabled="isTicketing" @click="ticketing(row)">
                      <i class="fas fa-feather"></i>
                    </button>
                    <button class="btn btn-neutral btn-sm" @click="handleDelete(row)">
                      <i class="fas fa-trash"></i>
                    </button>
                  </div>
                </el-table-column>
              </el-table>
              <b-col cols="12"
                class="d-flex justify-content-center justify-content-sm-between flex-wrap"
              >
                <div class="">
                  <p class="card-category" v-if="total != 0">
                    Showing {{ from + 1 }} to {{ to }} of {{ total }} passengers / 100 seats

                    <!-- <span>
                      &nbsp; &nbsp; {{total}}/100
                    </span> -->
                  </p>
                </div>
                <base-pagination
                  class="pagination-no-border"
                  :current="pagination.currentPage"
                  :per-page="pagination.perPage"
                  :total="total"
                  @change="paginationChanged($event)"
                >
                </base-pagination>
              </b-col>
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
    <modal :show.sync="showAddModal" modal-classes="modal-secondary">
      <base-alert v-if="isError" dismissible type="danger">
        <strong>Failed!</strong>
      </base-alert>
      <validation-observer v-slot="{handleSubmit}" ref="formValidator">
        <b-form role="form" class="new-event--form row" @submit.prevent="handleSubmit(savePassengerToFlight)">
          <div class="col-12">
            <base-input label="Passenger">
              <el-select v-model="model.passenger"
                          filterable
                          placeholder="Passengers"
                          @change="handlePassenger()">
                <el-option v-for="option in passengerOptions" v-if="option.status == 1"
                            :key="option.id"
                            :label="option.first_name + ' ' + option.last_name"
                            :value="option.id">
                </el-option>
              </el-select>
            </base-input>
          </div>
          <div class="col-12">
            <p>Phone: {{ model.phone }}</p>
            <p>Birthday: {{ model.birthday }}</p>
            <p>Company: {{ model.company }}</p>
            <p>Roster: {{ model.roster }}</p>
          </div>
          <div class="col-12 d-flex justify-content-between mt-4">
            <b-button type="submit" variant="primary" class="new-event--add">Add Passenger</b-button>
            <b-button type="button" variant="link" class="ml-auto" @click="showAddModal = false">Close</b-button>
          </div>
        </b-form>
      </validation-observer>
    </modal>
  </div>
</template>
<script>
import { Table, TableColumn, Select, Option } from 'element-ui';
import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb'
import { BasePagination } from '@/components';
import clientPaginationMixin from '@/common/PaginatedTables/clientPaginationMixin'
import swal from 'sweetalert2';

import {mapActions, mapGetters} from 'vuex'

export default {
  page: {
    title: "Seat Map",
    meta: [{ name: "description", content: "" }]
  },
  mixins: [clientPaginationMixin],
  components: {
    BasePagination,
    RouteBreadCrumb,
    [Select.name]: Select,
    [Option.name]: Option,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn
  },
  data() {
    return {
      seats: [],
      propsToSearch: ['first_name', 'last_name'],
      tableData: [],
      flightTableData: [],
      passengerOptions: [],
      isBulkTicketing: false,
      isTicketing: false,
      isSaving: false,
      showAddModal: false,
      model: {
        passenger: '',
        phone: '',
        birthday: '',
        company: '',
        roster: '',
      },
      isError: false,
    };
  },
  watch: {
    flightPassengers: function() {
      this.tableData = this.flightPassengers;
      this.seats = [];
      this.flightPassengers.forEach(function(item, index) {
        if ((item.seat != null) && (item.seat != '')) {
          document.getElementById(item.seat).disabled = true
        }
      });
      this.initPassengers();
    },
    aircraftFlight: function() {
      this.flightTableData = [];
      this.flightTableData.push(this.aircraftFlight);
    },
    passengers: function() {
      var that = this;
      this.passengers.forEach(function(item) {
        let index = that.flightPassengers.findIndex(e => e.passenger_id === item.id)
        if (index == -1) {
          that.passengerOptions.push(item);
        }
      });
    },
  },
  computed: {
    ...mapGetters([
      'flightPassengers',
      'aircraftFlight',
      'passengers',
    ]),
  },
  mounted() {
    this.getFlightPassengers(this.$route.params.flightId);
  },
  methods: {
    ...mapActions([
      'getFlightPassengers',
      'indivisualTicketing',
      'bulkTicketing',
      'passengerSeatSave',
      'initPassengers',
      'assignPassengerToFlight',
      'removePassengerFromFlight',
    ]),

    paginationChanged(page) {
      this.pagination.currentPage = page
    },
    ticketing(row) {
      this.isTicketing = true
      if (row.status == 'CLOSED') {
        this.indivisualTicketing({id: row.id})
          .then((res) => {
            // console.log(res)
            this.isTicketing = false
            if (res.data.message == 'success') {
              this.$notify({
                message: 'Successfully ticketed',
                timeout: 5000,
                icon: 'ni ni-bell-55',
                type: 'success'
              });
              this.getFlightPassengers(this.$route.params.flightId);
            } else {
              this.$notify({
                message: 'Already ticketed',
                timeout: 5000,
                icon: 'ni ni-bell-55',
                type: 'warning'
              });
            }
          })
          .catch((error) => {
            this.isTicketing = false;
          })
      } else {
        this.isTicketing = false
        this.$notify({
          message: 'Already ticketed',
          timeout: 5000,
          icon: 'ni ni-bell-55',
          type: 'warning'
        });
      }
    },
    totalTicketing() {
      this.isBulkTicketing = true
      this.bulkTicketing({flightId: this.$route.params.flightId})
        .then((res) => {
          this.isBulkTicketing = false
          if (res.data.message == 'success') {
            this.$notify({
              message: 'Successfully ticketed',
              timeout: 5000,
              icon: 'ni ni-bell-55',
              type: 'success'
            });
            this.getFlightPassengers(this.$route.params.flightId);
          } else {
            this.$notify({
              message: 'Already ticketed',
              timeout: 5000,
              icon: 'ni ni-bell-55',
              type: 'warning'
            });
          }
        })
        .catch((error) => {
          this.isBulkTicketing = false;
        })
    },
    save(row) {
      this.isSaving = true;
      let passenger_seats = [];
      for (const [key, value] of Object.entries(this.seats)) {
        if (value == true) {
          passenger_seats.push(key)
        }
      }
      if (passenger_seats.length == 1) {
        if ((row.seat != null) && (row.seat != '')) {
          document.getElementById(row.seat).disabled = false
        }
        this.passengerSeatSave({
            passengerId: row.passenger_id,
            flightId: row.aircraft_flight_id,
            seat: passenger_seats[0]
          })
          .then((res) => {
            this.isSaving = false;
            this.$notify({
                message: 'Successfully Saved',
                timeout: 5000,
                icon: 'ni ni-bell-55',
                type: 'success'
              });
            this.getFlightPassengers(this.$route.params.flightId);
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
    handlePassenger() {
      let index = this.passengers.findIndex(e => e.id === this.model.passenger)
      if (index !== -1) {
        this.model.phone = this.passengers[index].phone
        this.model.birthday = this.passengers[index].birthday
        this.model.company = this.passengers[index].company
        this.model.roster = this.passengers[index].roster
      }
    },
    savePassengerToFlight() {
      if ((this.model.passenger == '') || (this.model.passenger == null)) {
        return ;
      }
      return (
        this.assignPassengerToFlight({
            aircraft_flight_id: this.$route.params.flightId,
            passenger_id: this.model.passenger,
          })
          .then((res) => {
            this.isError = false;
            this.showAddModal = false;
            this.$store.commit('SET_FLIGHT_PASSENGERS', res.data)
          })
          .catch((error) => {
            this.isError = true;
          })
      );
    },
    handleDelete(row) {
      swal.fire({
        title: `Are you sure?`,
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        buttonsStyling: false,
        confirmButtonClass: 'btn btn-warning',
        cancelButtonClass: 'btn btn-secondary btn-fill',
        icon: 'warning'
      }).then(result => {
        if (result.value) {
          this.removePassengerFromFlight(row.id);
          this.$notify({
            message: 'Successfully Removed',
            timeout: 5000,
            icon: 'ni ni-bell-55',
            type: 'success'
          });
        }
      });
    },
  }
};
</script>
<style>
  .no-border-card .card-footer{
    border-top: 0;
  }
</style>
