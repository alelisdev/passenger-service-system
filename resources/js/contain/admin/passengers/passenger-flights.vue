<template>    
  <div class="content">
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col cols="7" lg="6">
          <h6 class="h2 text-white d-inline-block mb-0">Flight With Us</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </b-col>
        <b-col lg="6" cols="5" class="text-right">
          <router-link :to="{name: 'Passengers'}" class="btn btn-neutral btn-sm">
            <i class="far fa-hand-point-left"></i> Go Back
          </router-link>
        </b-col>
      </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <div>
        <card class="no-border-card" body-classes="px-0 pb-1" footer-classes="pb-2">
          <template slot="header">
            <h3 class="mb-0">Upcoming Flights</h3>
          </template>
          <div>
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
              <el-table-column label="Flight No."
                            prop="airline"
                            min-width="120px">
                <div slot-scope="{row}">
                  {{row.aircraft_flight.flight.airline_code + row.aircraft_flight.flight.flight_number}}
                </div>
              </el-table-column>
              <el-table-column label="Aircraft"
                            prop="aircraft"
                            min-width="120px">
                <div slot-scope="{row}">
                  <span v-if="row.aircraft_flight.aircraft != null">{{row.aircraft_flight.aircraft.registration}}</span>
                  <span v-else>Not assigned</span>
                </div>
              </el-table-column>
              <el-table-column label="From"
                            prop="origin_airport_name"
                            min-width="120px">
                <div slot-scope="{row}">
                  {{row.aircraft_flight.flight.origin_airport_name}}
                </div>
              </el-table-column>
              <el-table-column label="To"
                            prop="destination_airport_name"
                            min-width="120px">
                <div slot-scope="{row}">
                  {{row.aircraft_flight.flight.destination_airport_name}}
                </div>
              </el-table-column>
              <el-table-column label="Departure"
                            prop="departure_time"
                            min-width="140px">
                <div slot-scope="{row}">
                  {{row.aircraft_flight.date + 'T' + row.aircraft_flight.departure_time}}
                </div>
              </el-table-column>
              <el-table-column label="Arrival"
                            prop="arrival_time"
                            min-width="140px">
                <div slot-scope="{row}">
                  {{row.aircraft_flight.date + 'T' + row.aircraft_flight.arrival_time}}
                </div>
              </el-table-column>
              <el-table-column label="Seat"
                            prop="seat"
                            min-width="100px">
              </el-table-column>
              <el-table-column label="Reference"
                            prop="book_reference"
                            min-width="120px">
              </el-table-column>
              <el-table-column min-width="100px" align="right" label="Actions">
                <div slot-scope="{row}" class="d-flex justify-content-center">
                  <base-button
                    @click.native="goToPassengerSeat(row)"
                    type="primary"
                    size="sm"
                    icon
                    :disabled="row.status == 0"
                  >
                    <i class="text-white ni ni-curved-next"></i>
                  </base-button>
                </div>
              </el-table-column>
            </el-table>
          </div>
          <div
            slot="footer"
            class="col-12 d-flex justify-content-center justify-content-sm-between flex-wrap"
          >
            <div class="">
              <p class="card-category" v-if="total != 0">
                Showing {{ from + 1 }} to {{ to }} of {{ total }} entries

                <span v-if="selectedRows.length">
                  &nbsp; &nbsp; {{selectedRows.length}} rows selected
                </span>
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
          </div>
        </card>

        <card class="no-border-card" body-classes="px-0 pb-1" footer-classes="pb-2">
          <template slot="header">
            <h3 class="mb-0">Previous Flights</h3>
          </template>
          <div class="row">
            <b-col cols="12" class="mb-5">
              <el-table class="table-responsive align-items-center table-flush"
                        header-row-class-name="thead-light"
                        :data="previousTableData">
                <el-table-column label="Flight No."
                             prop="airline"
                             min-width="120px">
                  <div slot-scope="{row}">
                    {{row.aircraft_flight.flight.airline_code + row.aircraft_flight.flight.flight_number}}
                  </div>
                </el-table-column>
                <el-table-column label="Aircraft"
                              prop="aircraft"
                              min-width="120px">
                  <div slot-scope="{row}">
                    <span v-if="row.aircraft_flight.aircraft != null">{{row.aircraft_flight.aircraft.registration}}</span>
                    <span v-else>Not assigned</span>
                  </div>
                </el-table-column>
                <el-table-column label="From"
                              prop="origin_airport_name"
                              min-width="120px">
                  <div slot-scope="{row}">
                    {{row.aircraft_flight.flight.origin_airport_name}}
                  </div>
                </el-table-column>
                <el-table-column label="To"
                              prop="destination_airport_name"
                              min-width="120px">
                  <div slot-scope="{row}">
                    {{row.aircraft_flight.flight.destination_airport_name}}
                  </div>
                </el-table-column>
                <el-table-column label="Departure"
                              prop="departure_time"
                              min-width="140px">
                  <div slot-scope="{row}">
                    {{row.aircraft_flight.date + 'T' + row.aircraft_flight.departure_time}}
                  </div>
                </el-table-column>
                <el-table-column label="Arrival"
                              prop="arrival_time"
                              min-width="140px">
                  <div slot-scope="{row}">
                    {{row.aircraft_flight.date + 'T' + row.aircraft_flight.arrival_time}}
                  </div>
                </el-table-column>
                <el-table-column label="Seat"
                              prop="seat"
                              min-width="100px">
                </el-table-column>
                <el-table-column label="Reference"
                              prop="book_reference"
                              min-width="120px">
                </el-table-column>
              </el-table>
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

export default {
  page: {
    title: "Passenger's Flights",
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
      propsToSearch: [],
      tableData: [],
      selectedRows: [],
      previousTableData: [],
    };
  },
  watch: {
    upcomingFlights: function() {
      this.tableData = this.upcomingFlights;
    },
    previousFlights: function() {
      this.previousTableData = this.previousFlights;
    },
  },
  computed: {
    ...mapGetters([
      'upcomingFlights',
      'previousFlights',
    ]),
  },
  mounted() {
    this.getPassengerFlights(this.$route.params.passengerId);
  },
  methods: {
    ...mapActions([
      'getPassengerFlights',
    ]),

    paginationChanged(page) {
      this.pagination.currentPage = page
    },
    goToPassengerSeat(row) {
      this.$router.push({ name: 'PassengerSeat', params: { passengerId: this.$route.params.passengerId, flightId: row.aircraft_flight_id }})
    },
  }
};
</script>
<style>
  .no-border-card .card-footer{
    border-top: 0;
  }
</style>
