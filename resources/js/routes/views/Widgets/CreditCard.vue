<template>
    <card type="gradient-primary">
        <b-row align-v="center" class="justify-content-between">
            <b-col>
                <img src="img/icons/cards/mastercard.png" alt="Image placeholder">
            </b-col>
            <b-col md="auto">
                <div class="d-flex align-items-center">
                    <small class="text-white font-weight-bold mr-3">Make default</small>
                    <div>
                        <base-switch type="white" v-model="creditCard.default"></base-switch>
                    </div>
                </div>
            </b-col>
        </b-row>
        <div class="mt-4">
            <b-form role="form" class="form-primary">
                <base-input prepend-icon="ni ni-single-02"
                            class="input-group-alternative mb-3"
                            placeholder="Name on card"
                            v-model="creditCard.name">
                </base-input>

                <base-input prepend-icon="ni ni-credit-card"
                            class="input-group-alternative mb-3"
                            placeholder="Card number"
                            v-model="creditCard.cardNumber">
                </base-input>
                <b-row>
                    <b-col cols="6" >

                        <base-input prepend-icon="ni ni-calendar-grid-58"
                                    class="input-group-alternative mb-3"
                                    placeholder="MM/YY"
                                    v-model="creditCard.expire">
                        </base-input>
                    </b-col>
                    <b-col cols="6">
                        <base-input prepend-icon="ni ni-lock-circle-open"
                                    class="input-group-alternative mb-3"
                                    placeholder="CCV"
                                    v-model="creditCard.ccv">
                        </base-input>
                    </b-col>
                </b-row>
                <base-button type="info" block>Save new card</base-button>
            </b-form>
        </div>
    </card>
</template>
<script>
  export default {
    name: 'master-card',
    data() {
      return {
        creditCard: {
          default: true,
          name: '',
          cardNumber: '',
          expire: '',
          ccv: ''
        }
      }
    }
  }
</script>
