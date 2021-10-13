<template>
  <b-card no-body>
    <!-- Card header -->
    <b-card-header >
      <!-- Title -->
      <h5 class="h3 mb-0">Progress track</h5>
    </b-card-header>
    <!-- Card body -->
    <b-card-body >
      <!-- List group -->
      <b-list-group flush class="list my--3">
        <b-list-group-item v-for="(item, index) in list"
            :key="index"
            class="px-0">
          <b-row align-v="center">
            <b-col md="auto" >
              <!-- Avatar -->
              <a href="#" class="avatar rounded-circle">
                <img alt="Image placeholder" :src="item.image">
              </a>
            </b-col>
            <b-col >
              <h5>{{item.name}}</h5>
              <base-progress class="progress-xs mb-0"
                             :type="item.color"
                             :value="item.progress">

              </base-progress>
            </b-col>
          </b-row>
        </b-list-group-item>
      </b-list-group>
    </b-card-body>
  </b-card>
</template>
<script>
  export default {
    name: 'progress-track-list',
    data() {
      return {
        list: [
          {
            name: 'Argon Design System',
            image: 'img/theme/bootstrap.jpg',
            color: 'orange',
            progress: 60,
          },
          {
            name: 'Angular Now UI Kit PRO',
            image: 'img/theme/angular.jpg',
            color: 'green',
            progress: 100,
          },
          {
            name: 'Black Dashboard',
            image: 'img/theme/sketch.jpg',
            color: 'red',
            progress: 72
          },
          {
            name: 'React Material Dashboard',
            image: 'img/theme/react.jpg',
            color: 'teal',
            progress: 90
          },
          {
            name: 'Vue Paper UI Kit PRO',
            image: 'img/theme/vue.jpg',
            color: 'green',
            progress: 100
          },
        ]
      }
    }
  }
</script>
