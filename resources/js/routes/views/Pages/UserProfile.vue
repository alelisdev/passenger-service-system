<template>
  <div>
    <div class="header pb-6 d-flex align-items-center profile-header">
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8"></span>
      <!-- Header container -->
      <b-container fluid class="d-flex align-items-center">
        <b-row >
          <b-col lg="7" md="10">
            <h1 class="display-2 text-white">Hello Jesse</h1>
            <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your
              work and manage your projects or assigned tasks</p>
            <a href="#!" class="btn btn-neutral">Edit profile</a>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="4" class="order-xl-2">
          <user-card></user-card>

          <!-- Progress track -->
          <card>
            <h5 slot="header" class="h3 mb-0">Progress track</h5>
            <progress-track-list></progress-track-list>
          </card>
        </b-col>
        <b-col xl="8" class="order-xl-1">
          <b-row>
            <b-col lg="6">

              <card gradient="info" class="border-0">
                <b-row >
                  <b-col>
                    <h5 class="card-title text-uppercase text-muted mb-0 text-white">Total traffic</h5>
                    <span class="h2 font-weight-bold mb-0 text-white">350,897</span>
                  </b-col>
                  <b-col md="auto">
                    <div class="icon icon-shape bg-white text-dark rounded-circle shadow">
                      <i class="ni ni-active-40"></i>
                    </div>
                  </b-col>
                </b-row>
                <p class="mt-3 mb-0 text-sm">
                  <span class="text-white mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                  <span class="text-nowrap text-light">Since last month</span>
                </p>
              </card>

            </b-col>
            <b-col lg="6" >

              <card gradient="danger" class="border-0">
                <b-row >
                  <b-col>
                    <h5 class="card-title text-uppercase text-muted mb-0 text-white">Performance</h5>
                    <span class="h2 font-weight-bold mb-0 text-white">49,65%</span>
                  </b-col>
                  <b-col md="auto" >
                    <div class="icon icon-shape bg-white text-dark rounded-circle shadow">
                      <i class="ni ni-spaceship"></i>
                    </div>
                  </b-col>
                </b-row>
                <p class="mt-3 mb-0 text-sm">
                  <span class="text-white mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
                  <span class="text-nowrap text-light">Since last month</span>
                </p>
              </card>

            </b-col>
          </b-row>
          <edit-profile-form></edit-profile-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue';
  import UserCard from './UserProfile/UserCard.vue';
  import ProgressTrackList from '@/views/Dashboard/ProgressTrackList';

  export default {
    components: {
      EditProfileForm,
      UserCard,
      ProgressTrackList
    }
  };
</script>
<style>
  .profile-header {
    background-image: url(/img/theme/profile-cover.jpg);
    background-size: cover;
    background-position: center top;
    min-height: 500px;
  }
</style>
