<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-6 py-lg-7 pt-lg-8">
      <div>
        <div class="header-body mb-6">
          <b-row class="justify-content-center">
            <b-col lg="8" md="9" sm="10" cols="10">
              <h2 class="text-white">Thank you</h2>
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
              <div class="mb-4">
                <div style="font-size: 0.8rem;font-weight: 500;color: black;">
                  <p>Your Web Check-In request and seat allocation is confirmed and the boarding pass has been generated for the following passengers.</p>
                  <p class="mb-0">You must print your boarding pass(es) and ensure that all passengers have an acceptable form of photo identification when boarding. Boarding may be denied if such identification is not available.</p>
                </div>
              </div>
              <div id="boarding_pass" class="mx-auto pb-3">
                <div class="text-center mb-3" style="color: black;font-size: 24px;background: #e29d01;">
                  {{passengerInfo.passenger.first_name+' '+passengerInfo.passenger.last_name}}
                </div>
                <div class="mb-5 text-center">
                  <inline-svg src="img/icons/qrcode.svg" />
                </div>
                <div class="text-center mb-2" style="color: grey;font-size: 20px;">
                  <span style="padding-right: 24px;">{{formatDate(passengerInfo.aircraft_flight.date)}}</span>
                  <span>{{passengerInfo.aircraft_flight.flight.airline_code+' '+passengerInfo.aircraft_flight.flight.flight_number}}</span>
                </div>
                <div class="row align-items-center px-2 mb-3">
                  <div class="text-center col-5">
                    <span>{{passengerInfo.aircraft_flight.flight.origin_airport_name}}</span><br/>
                    <span style="font-size: 28px;">{{passengerInfo.aircraft_flight.flight.origin_airport_code}}</span>
                  </div>
                  <div class="text-center col-2" style="font-size: 34px;">
                    <i class="fas fa-plane"></i>
                  </div>
                  <div class="text-center col-5">
                    <span>{{passengerInfo.aircraft_flight.flight.destination_airport_name}}</span><br/>
                    <span style="font-size: 28px;">{{passengerInfo.aircraft_flight.flight.destination_airport_code}}</span>
                  </div>
                </div>
                <div class="row align-items-center px-2">
                  <div class="text-center col-5">
                    <span>Boarding</span><br/>
                    <span style="font-size: 28px;">{{passengerInfo.aircraft_flight.departure_time}}</span>
                  </div>
                  <div class="text-center col-3">
                    <span>Gate</span><br/>
                    <span style="font-size: 28px;"></span>
                  </div>
                  <div class="text-center col-4">
                    <span>Seat</span><br/>
                    <span style="font-size: 28px;">{{passengerInfo.seat}}</span>
                  </div>
                </div>
                <div></div>
              </div>
              <div class="text-right mt-4">
                <base-button size="sm" type="primary" @click="printBoardingPass()">PRINT BOARDING PASS</base-button>
                <div class="text-left mt-2">
                  <p class="mb-0" style="font-size: 0.8rem;font-weight: 500;color: black;">Please Note : Checked baggage acceptance closes 30 minutes prior to departure</p>
                </div>
              </div>
              <div class="my-5">
                <p style="font-weight: 500;color: black;">Please enter an email address to email Boarding Pass(es) : </p>
                <div>
                  <base-alert v-if="isError" dismissible type="danger">
                    <strong>Failed!</strong> {{error}}
                  </base-alert>
                  <validation-observer v-slot="{handleSubmit}" ref="formValidator">
                    <b-form role="form" class="row" @submit.prevent="handleSubmit(onSubmit)">
                      <div class="col-6">
                        <base-input alternative
                                    name="Email"
                                    :rules="{required: true, email: true}"
                                    v-model="email">
                        </base-input>
                      </div>
                      <div class="col-6 text-right">
                        <b-button type="submit" size="sm" variant="primary" :disabled="isSubmitting">
                          <i class="fa fa-spinner fa-spin" v-if="isSubmitting"></i> EMAIL BOARDING PASS
                        </b-button>
                      </div>
                    </b-form>
                  </validation-observer>
                </div>
              </div>
              <div class="text-right">
                <router-link to="/confirm" class="btn base-button btn-secondary btn-sm">GO BACK</router-link>
                <router-link to="/your-flight" class="btn base-button btn-warning btn-sm">CHECK IN AGAIN</router-link>
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
  import InlineSvg from 'vue-inline-svg';
  import { Select, Option } from 'element-ui';
  import jsPDF from 'jspdf'

  import {mapActions, mapGetters} from 'vuex'

  export default {
    page: {
      title: "Your Flight",
      meta: [{ name: "description", content: "" }]
    },
    components: {
      BaseTable,
      BaseButton,
      InlineSvg,
      [Select.name]: Select,
      [Option.name]: Option,
    },
    data() {
      return {
        email: "",
        error: null,
        isError: false,
        isSubmitting: false,
        qrcode: null,
      }
    },
    watch: {
      passengerInfo: function() {
        this.getQrCode(this.passengerInfo.id)
        .then((res) => {
          // console.log(res)
          this.qrcode = res;
        });
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
        'emailBoardingPass',
        'getQrCode',
      ]),

      formatDate(d) {
        var date = new Date(d);
        var monthNames = [
          "Jan", "Feb", "Mar",
          "Apr", "May", "Jun", "Jul",
          "Aug", "Sep", "Oct",
          "Nov", "Dec"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        return day + ' ' + monthNames[monthIndex] + ' ' + year;
      },
      printBoardingPass() {
        var pdf = new jsPDF('p', 'mm', 'a4');
        var element = document.getElementById('boarding_pass');
        const e_width = element.offsetWidth;
        const pdfWidth = pdf.internal.pageSize.getWidth();
        pdf.html(element, {
          html2canvas: {
            scale: (pdfWidth-100)/e_width,
          },
          x: 50,
          y: 8,
          callback: function (pdf) {
            window.open(pdf.output('bloburl'));
          }
        });
      },
      onSubmit() {
        // this will be called only after form is valid. You can do an api call here to register passengers
        // Reset the error if it existed.
        this.error = null;
        this.isSubmitting = true;
        
        return (
          this.emailBoardingPass({
              id: this.passengerInfo.id,
              email: this.email,
            })
            .then((res) => {
              this.isError = false;
              this.isSubmitting = false;
              this.$notify({
                message: 'Successfully Emailed',
                timeout: 5000,
                icon: 'ni ni-bell-55',
                type: 'success'
              });
            })
            .catch((error) => {
              this.error = error ? error.data : "";
              this.isError = true;
              this.isSubmitting = false;
            })
        );
      }
    },
  };
</script>
<style lang="scss">
  .form-group {
    margin-bottom: 0px;
  }
  // .form-control :not(.is-invalid) {
  .form-control {
    color: black;
    padding-bottom: 0;
    padding-top: 0;
    height: 32px;
    border: 1px solid #5e72e4 !important;
  }
  #boarding_pass {
    color: #31364e;
    font-weight: 600;
    width: 350px;
    background: #eeeeee;
  }
</style>
