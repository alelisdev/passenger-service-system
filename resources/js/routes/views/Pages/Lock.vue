<template>
  <div>
    <!-- Header -->
    <div class="header bg-gradient-success py-7 py-lg-8 pt-lg-9">
      <b-container >
        <div class="header-body text-center mb-7">
          <b-row class="justify-content-center">
            <b-col xl="5" lg="6" md="8" class="px-5">
              <h1 class="text-white">Lock screen</h1>
              <p class="text-lead text-white">Better to be safe than sorry.</p>
            </b-col>
          </b-row>
        </div>
      </b-container>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <b-row class="justify-content-center">
        <b-col lg="5" md="7">
          <b-card no-body class="ard-profile bg-secondary mt-5">
            <b-row class="justify-content-center">
              <b-col lg="3" class="order-lg-2">
                <div class="card-profile-image">
                  <b-img src="img/theme/team-4.jpg" rounded="circle" class="border-secondary" />
                </div>
              </b-col>
            </b-row>
            <b-card-body class="pt-7 px-5">
              <div class="text-center mb-4">
                <h3>Jessica Jones</h3>
              </div>
              <b-form role="form">
                <base-input alternative
                            prepend-icon="ni ni-lock-circle-open"
                            type="password"
                            placeholder="Password"
                            v-model="model.password"
                >

                </base-input>
                <div class="text-center">
                  <base-button type="primary" class="mt-2">Unlock</base-button>
                </div>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>
<script>
export default {
  name: 'lock',
  data() {
    return {
      model: {
        password: ''
      }
    }
  }
};
</script>
<style></style>
