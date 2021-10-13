<template>
  <div>
    <!-- Header -->
    <div class="header py-6 py-lg-7 pt-lg-8">
      <div>
        <div class="header-body mb-6">
          <b-row class="justify-content-center">
            <b-col lg="8" md="9" sm="10" cols="10">
              <h2 class="text-white">Select Flight for Check-in</h2>
            </b-col>
          </b-row>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
             xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="mt--8 pb-5">
      <b-row class="justify-content-center mx-0">
        <b-col lg="8" md="9" sm="10" cols="10" class="px-0">
          <b-card-group>
            <card body-classes="px-md-4 px-lg-5"
                  class="border-0">
              <div class="table-responsive mt-2 mb-4">
                <base-table class="table thead-light"
                            :data="flightTableData">
                  <template slot="columns">
                    <th class="text-center" scope="col">Flight No.</th>
                    <th class="text-center" scope="col">Date</th>
                    <th class="text-center" scope="col">Dep</th>
                    <th class="text-center" scope="col">Arr</th>
                    <th class="text-center" scope="col">Status</th>
                  </template>
                  <template slot-scope="{row}">
                    <td class="text-center">{{row.aircraft_flight.flight.airline_code+' '+row.aircraft_flight.flight.flight_number}}</td>
                    <td class="text-center">{{row.aircraft_flight.date}}</td>
                    <td class="text-center">
                      {{row.aircraft_flight.flight.origin_airport_code}}<br/>
                      {{row.aircraft_flight.departure_time}}
                    </td>
                    <td class="text-center">
                      {{row.aircraft_flight.flight.destination_airport_code}}<br/>
                      {{row.aircraft_flight.arrival_time}}
                    </td>
                    <td class="text-center">{{row.aircraft_flight.status}}</td>
                  </template>
                </base-table>
              </div>
              <div class="mb-4">
                <div class="" style="font-size: 0.8rem;font-weight: 500;color: black;">
                  <span><i class="far fa-dot-circle" style="font-size: 8px;margin-right: 8px;"></i> You must complete all details of passengers that are checking in to the selected flight before proceeding to change or confirm your seat.</span>
                </div>
              </div>
              <div class="table-responsive mb-4">
                <base-table class="table thead-light"
                            :data="passengerTableData">
                  <template slot="columns">
                    <th class="text-center" scope="col">Passenger Name</th>
                    <th class="text-center" scope="col">Adult / Child</th>
                  </template>
                  <template slot-scope="{row}">
                    <td class="text-center">{{row.first_name+' '+row.last_name}}</td>
                    <td class="text-center">
                      <el-select
                        class="select-primary"
                        v-model="adultChild.value"
                      >
                        <el-option
                          class="select-primary"
                          v-for="option in adultChild.options"
                          :key="option.value"
                          :label="option.label"
                          :value="option.value"
                        >
                        </el-option>
                      </el-select>
                    </td>
                  </template>
                </base-table>
              </div>
              <div class="text-right">
                <router-link to="/login" class="btn base-button btn-secondary btn-sm">GO BACK</router-link>
                <base-button size="sm" type="warning" @click="continuePage()">CONTINUE</base-button>
              </div>
            </card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
  import BaseTable from '@/components/BaseTable';
  import BaseButton from '@/components/BaseButton.vue';
  import { Select, Option } from 'element-ui';

  import {mapActions, mapGetters} from 'vuex'

  export default {
    page: {
      title: "Your Flight",
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
        adultChild: {
          value: '',
          options: [
            {
              label: "MALE ADULT",
              value: "MALE ADULT",
            },
            {
              label: "FEMALE ADULT",
              value: "FEMALE ADULT",
            },
            {
              label: "CHILD",
              value: "CHILD",
            },
          ],
        },
      }
    },
    watch: {
      passengerInfo: function() {
        this.flightTableData.push(this.passengerInfo);
        this.passengerTableData.push(this.currentPassenger);
        this.adultChild.value = this.passengerInfo.passenger_type;
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
        'passengerTypeSave',
      ]),

      continuePage() {
        this.passengerTypeSave({
            id: this.passengerInfo.id,
            passenger_type: this.adultChild.value,
          })
          .then((res) => {
            this.$router.push({name: "SelectSeat"});
          })
          .catch((error) => {
          })
      },
    },
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
