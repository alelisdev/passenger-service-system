<template>    
  <div class="content">
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col cols="7" lg="6">
          <h6 class="h2 text-white d-inline-block mb-0">Flights Table</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </b-col>
        <b-col lg="6" cols="5" class="text-right">
          <router-link :to="{name: 'FlightCreate'}" class="btn btn-neutral btn-sm">
            <i class="fas fa-plus"></i>Add Flight
          </router-link>
        </b-col>
      </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <div>
        <card class="no-border-card" body-classes="px-0 pb-1" footer-classes="pb-2">
          <template slot="header">
            <h3 class="mb-0">Flights table</h3>
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
                             min-width="140px"
                             sortable>
                <div slot-scope="{row}">
                  {{row.airline_code + row.flight_number}}
                </div>
              </el-table-column>
              <el-table-column label="From"
                             prop="origin_airport_name"
                             min-width="120px"
                             sortable>
              </el-table-column>
              <el-table-column label="To"
                             prop="destination_airport_name"
                             min-width="120px"
                             sortable>
              </el-table-column>
              <el-table-column label="Departure"
                             prop="departure_time"
                             min-width="120px"
                             sortable>
              </el-table-column>
              <el-table-column label="Arrival"
                             prop="arrival_time"
                             min-width="120px"
                             sortable>
              </el-table-column>
              <el-table-column label="Duration"
                             prop="flight_time"
                             min-width="100px">
              </el-table-column>
              <el-table-column label="Days Of Ope"
                             prop="operation_days"
                             min-width="120px">
              </el-table-column>
              <el-table-column label="Type"
                             prop="type"
                             min-width="100px">
                <div slot-scope="{row}">
                  <span class="text-primary" v-if="row.type == 'REGULAR'">REGULAR</span>
                  <span class="text-warning" v-else>CHARTER</span>
                </div>
              </el-table-column>
              <!-- <el-table-column prop="status" label="Status" min-width="100px">
                <div slot-scope="{row}">
                  <badge class="" v-if="row.status == 1" type="success">
                    <span>Active</span>
                  </badge>
                  <badge class="" v-else type="warning">
                    <span>Deactive</span>
                  </badge>
                </div>
              </el-table-column> -->
              <el-table-column min-width="120px" align="right" label="Actions">
                <div slot-scope="{$index, row}" class="d-flex justify-content-center">
                  <base-button
                    @click.native="handleEdit(row)"
                    class="edit"
                    type="info"
                    size="sm"
                    icon
                  >
                    <i class="text-white ni ni-ruler-pencil"></i>
                  </base-button>
                  <base-button
                    @click.native="handleDelete($index, row)"
                    class="remove btn-link"
                    type="danger"
                    size="sm"
                    icon
                  >
                    <i class="text-white ni ni-fat-remove"></i>
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
    title: "Flights",
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
      tableColumns: [
      ],
      tableData: [],
      selectedRows: []
    };
  },
  watch: {
    flights: function () {
      this.tableData = this.flights;
    },
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
      'deleteFlight',
    ]),

    paginationChanged(page) {
      this.pagination.currentPage = page
    },
    handleEdit(row) {
      this.$router.push({ name: 'FlightEdit', params: { flightId: row.id }})
    },
    handleDelete(index, row) {
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
          this.deleteFlight(row.id);
          this.$notify({
            message: 'Successfully Deleted',
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
