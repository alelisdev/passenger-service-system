<template>
    <b-card no-body class="bg-gradient-primary">
        <!-- Card body -->
        <b-card-body>
            <b-row align-v="center" class="justify-content-between ">
                <b-col>
                    <img src="img/icons/cards/visa.png" alt="Image placeholder">
                </b-col>
                <b-col md="auto">
                    <b-badge size="lg" :class="`badge-${creditCard.statusType}`">{{creditCard.status}}</b-badge>
                </b-col>
            </b-row>
            <div class="my-4">
                <span class="h6 surtitle text-light">
                  Card number
                </span>
                <div class="card-serial-number h1 text-white">
                    <div v-for="(part, index) in creditCard.number.split(' ')" :key="index">
                      {{part}}
                    </div>
                </div>
            </div>
            <b-row >
                <b-col>
                    <span class="h6 surtitle text-light">Name</span>
                    <span class="d-block h3 text-white">{{creditCard.name}}</span>
                </b-col>
                <b-col>
                    <span class="h6 surtitle text-light">Expiry date</span>
                    <span class="d-block h3 text-white">{{creditCard.expire}}</span>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>
<script>
  export default {
    name: 'visa-card',
    data() {
      return {
        creditCard: {
          number: '4358 7421 9256 6682',
          status: 'Active',
          statusType: 'success',
          name: 'John Snow',
          expire: '11/23',
        }
      }
    }
  }
</script>
