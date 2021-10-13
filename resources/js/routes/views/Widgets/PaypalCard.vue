<template>
    <b-card no-body>
        <!-- Card body -->
        <b-card-body>
            <b-row align-v="center" class="justify-content-between">
                <b-col>
                    <img src="img/icons/cards/paypal.png" alt="Image placeholder">
                </b-col>
                <b-col md="auto">
                    <b-badge size="lg"
                          :class="`badge-${card.statusType}`">
                      {{card.status}}
                    </b-badge>
                </b-col>
            </b-row>
            <div class="my-4">
                <span class="h6 surtitle text-muted">
                  PayPal E-mail
                </span>
                <div class="h1">{{card.title}}</div>
            </div>
            <b-row>
                <b-col>
                    <span class="h6 surtitle text-muted">Name</span>
                    <span class="d-block h3">{{card.name}}</span>
                </b-col>
            </b-row>
        </b-card-body>
    </b-card>
</template>
<script>
  export default {
    name: 'paypal-card',
    data() {
      return {
        card: {
          status: 'Active',
          statusType: 'success',
          title: 'john.snow@gmail.com',
          name: 'John Snow'
        }
      }
    }
  }
</script>
