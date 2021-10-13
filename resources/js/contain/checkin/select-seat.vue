p<template>
  <div>
      <b-row>
        <b-col xl="6" lg="6" md="6" class="py-6">
            <b-container>
                <b-row class="d-flex jsutify-content-end">
                    <b-col xl="4" lg="4" md="4">
                    </b-col>
                    <b-col xl="8" lg="8" md="8">
                        <span>Step 5</span>
                        <h1>Select your seat</h1>
                        <div class="">
                            <span><i class="far fa-dot-circle" style="font-size: 8px;margin-right: 8px;"></i> Select passenger and click on the map below for the preferred seat</span>
                        </div>
                        <div class="">
                            <span><i class="far fa-dot-circle" style="font-size: 8px;margin-right: 8px;"></i> To finish, click continue to accept seating</span>
                        </div>
                        <div class="mt-5 mb-5">
                            <ul class="seat-config d-flex flex-column">
                                <li style="padding-bottom: 10px; padding-top: 10px; border-bottom: solid 1px #dfdfdf">
                                    <span class="seat available-seat"></span>
                                    <span class="description">Seat Available</span>
                                </li>
                                <li style="padding-bottom: 10px; padding-top: 10px; border-bottom: solid 1px #dfdfdf">
                                    <span class="seat disabled-seat"></span>
                                    <span class="description">Not Available</span>
                                </li>
                                <li style="padding-bottom: 10px; padding-top: 10px; border-bottom: solid 1px #dfdfdf">
                                    <span class="seat reserved-seat"></span>
                                    <span class="description">Your Seat</span>
                                </li>
                            </ul>
                        </div>
                    </b-col>
                </b-row>
            </b-container>

        </b-col>
        <b-col xl="6" lg="6" md="6">
            <b-card-group>
                <card body-classes="px-md-4 px-lg-5"
                      class="border-0">
                  <div class="plane">
                    <div class="cockpit">
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
                </card>
              </b-card-group>
        </b-col>

      </b-row>
      <b-container>
        <div class="text-center">
          <router-link to="/declaration" class="btn base-button btn-secondary btn-md">GO BACK</router-link>
          <base-button size="md" type="warning" class="bg-yellow" @click="continuePage()">CONFIRM</base-button>
        </div>
      </b-container>
  </div>
</template>
<script>
  import BaseTable from '@/components/BaseTable';
  import BaseButton from '@/components/BaseButton.vue';

  import {mapActions, mapGetters} from 'vuex'

  export default {
    page: {
      title: "Select Seat",
      meta: [{ name: "description", content: "" }]
    },
    components: {
      BaseTable,
      BaseButton,
    },
    data() {
      return {
        flightTableData: [],
        seats: [],
      }
    },
    watch: {
      passengerInfo: function() {
        this.flightTableData.push(this.passengerInfo);
        this.getFlightPassengers(this.passengerInfo.aircraft_flight_id);
      },
      flightPassengers: function() {
        this.seats = [];
        var that = this;
        this.flightPassengers.forEach(function(item, index) {
          if ((item.seat != null) && (item.seat != '')) {
            if (item.id == that.passengerInfo.id) {
              that.seats[item.seat] = true
            } else {
              document.getElementById(item.seat).disabled = true
            }
          }
        });
      },
    },
    computed: {
      ...mapGetters([
        'passengerInfo',
        'currentPassenger',
        'flightPassengers',
      ]),
    },
    mounted() {
      this.initCheckin(this.currentPassenger.book_reference);
    },
    methods: {
      ...mapActions([
        'initCheckin',
        'getFlightPassengers',
        'passengerSeatSave',
      ]),

      continuePage() {
        let passenger_seats = [];
        for (const [key, value] of Object.entries(this.seats)) {
          if (value == true) {
            passenger_seats.push(key)
          }
        }
        if (passenger_seats.length == 1) {
          this.passengerSeatSave({
              passengerId: this.passengerInfo.passenger_id,
              flightId: this.passengerInfo.aircraft_flight_id,
              seat: passenger_seats[0],
              statusFlag: true,
            })
            .then((res) => {
              // this.$notify({
              //     message: 'Successfully Saved',
              //     timeout: 5000,
              //     icon: 'ni ni-bell-55',
              //     type: 'success'
              //   });
              this.$router.push({name: "Confirm"});
            })
            .catch((error) => {
            })
        } else {
          // console.log(passenger_seats)
          this.$notify({
              message: 'You can select only one seat.',
              timeout: 5000,
              icon: 'ni ni-bell-55',
              type: 'warning'
            });
        }
      },
    },
  };
</script>
<style lang="scss">
  .seat-config {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .seat-config li {
    display: flex;
    align-items: center;
  }
  .seat-config .seat {
    display: block;
    position: relative;
    width: 30px;
    height: 30px;
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
    padding-right: 15px;
  }
</style>
