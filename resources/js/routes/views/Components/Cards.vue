<template>
  <div>
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7" class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">{{$route.name}}</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-breadcrumb/>
          </nav>
        </b-col>
        <b-col lg="6" cols="5" class="text-right">
          <base-button size="sm" type="neutral">New</base-button>
          <base-button size="sm" type="neutral">Filters</base-button>
        </b-col>
      </b-row>

      <!-- Card stats -->
      <b-row >
        <b-col xl="3" md="6">
          <stats-card title="Total traffic"
                      type="gradient-red"
                      sub-title="350,897"
                      icon="ni ni-active-40">

            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 3.48%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Total traffic"
                      type="gradient-orange"
                      sub-title="2,356"
                      icon="ni ni-chart-pie-35">

            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 12.18%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Sales"
                      type="gradient-green"
                      sub-title="924"
                      icon="ni ni-money-coins">

            <template slot="footer">
              <span class="text-danger mr-2"><i class="fa fa-arrow-down"></i> 5.72%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>

        </b-col>
        <b-col xl="3" md="6">
          <stats-card title="Performance"
                      type="gradient-info"
                      sub-title="49,65%"
                      icon="ni ni-chart-bar-32">
            <template slot="footer">
              <span class="text-success mr-2"><i class="fa fa-arrow-up"></i> 54.8%</span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </b-col>
      </b-row>
    </base-header>

    <b-container fluid class="mt--6">
      <b-row class="card-wrapper">
        <b-col lg="4">
          <!-- Basic with list group -->
          <b-card no-body img-src="img/theme/img-1-1000x600.jpg" img-top alt="Image placeholder">
            <!-- Card image -->
            <!-- List group -->
            <b-list-group flush>
              <b-list-group-item>Cras justo odio</b-list-group-item>
              <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
              <b-list-group-item>Vestibulum at eros</b-list-group-item>
            </b-list-group>
            <!-- Card body -->
            <b-card-body  >
              <b-card-title title-tag="h3" class="mb-3">Card title</b-card-title>
              <b-card-text class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est
                fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut reiciendis voluptates enim
                impedit veritatis officiis.</b-card-text>
              <base-button type="primary">Go somewhere</base-button>
            </b-card-body>
          </b-card>
          <!-- Basic with card title -->
          <card>
            <!-- Card body -->
            <b-card-title title-tag="h3" class="mb-3">Card title</b-card-title>
            <b-card-text class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est
                fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut reiciendis voluptates enim
                impedit veritatis officiis.</b-card-text>
            <base-button type="primary">Go somewhere</base-button>
          </card>

          <!--Profile card-->
          <b-card no-body img-src="img/theme/img-1-1000x600.jpg" alt="Image placeholder" img-top class="card-profile">
            <b-row class="justify-content-center">
              <b-col lg="3"  class="order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <b-img src="img/theme/team-4.jpg" rounded="circle" />
                  </a>
                </div>
              </b-col>
            </b-row>
            <b-card-header class="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              <div class="d-flex justify-content-between">
                <base-button type="info" size="sm" class="mr-4">Connect</base-button>
                <base-button type="default" size="sm" class="float-right">Message</base-button>
              </div>
            </b-card-header>
            <b-card-body class="pt-0">
              <b-row>
                <b-col>
                  <div class="card-profile-stats d-flex justify-content-center">
                    <div>
                      <span class="heading">22</span>
                      <span class="description">Friends</span>
                    </div>
                    <div>
                      <span class="heading">10</span>
                      <span class="description">Photos</span>
                    </div>
                    <div>
                      <span class="heading">89</span>
                      <span class="description">Comments</span>
                    </div>
                  </div>
                </b-col>
              </b-row>
              <div class="text-center">
                <h5 class="h3">
                  Jessica Jones<span class="font-weight-light">, 27</span>
                </h5>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i>Bucharest, Romania
                </div>
              </div>
            </b-card-body>
          </b-card>
        </b-col>

        <b-col lg="4">
          <!-- Basic with card header -->
          <card>
            <!-- Card header -->
            <h5 slot="header" class="h3 mb-0">Card title</h5>
            <!-- Card body -->
            <b-card-text class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est
              fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut reiciendis voluptates enim
              impedit veritatis officiis.</b-card-text>
            <base-button type="primary" class="btn btn-primary">Go somewhere</base-button>
          </card>

          <!-- Contact card -->
          <card>
            <!-- Card body -->
            <b-row align-v="center">
              <b-col md="auto">
                <!-- Avatar -->
                <a href="#" class="avatar avatar-xl rounded-circle">
                  <img alt="Image placeholder" src="img/theme/team-2.jpg">
                </a>
              </b-col>
              <b-col class="ml--2">
                <h4 class="mb-0">
                  <a href="#!">John Snow</a>
                </h4>
                <p class="text-sm text-muted mb-0">Working remoteley</p>
                <span class="text-success">● </span>
                <small>Active</small>
              </b-col>
              <b-col md="auto">
                <base-button type="primary" size="sm">Add</base-button>
              </b-col>
            </b-row>
          </card>

          <!-- Team member card -->
          <card>
            <!-- Card body -->
            <a href="#!">
              <b-img src="img/theme/team-1.jpg"
                fluid
                rounded="circle"
                class="img-center shadow shadow-lg--hover" style="width: 140px;" />
            </a>
            <div class="pt-4 text-center">
              <h5 class="h3 title">
                <span class="d-block mb-1">Ryan Tompson</span>
                <small class="h4 font-weight-light text-muted">Web Developer</small>
              </h5>
              <div class="mt-3">
                <a href="#" class="btn btn-twitter btn-icon-only rounded-circle">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="btn btn-facebook btn-icon-only rounded-circle">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="btn btn-dribbble btn-icon-only rounded-circle">
                  <i class="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </card>
          <!-- Image-Text card -->
            <!-- Card image -->
          <b-card no-body img-src="img/theme/img-1-1000x900.jpg" alt="Image placeholder" img-top>
            <!-- Card body -->
            <b-card-body >
              <b-card-title title-tag="h5" class="h2 mb-0">Get started with Argon</b-card-title>
              <small class="text-muted">by John Snow on Oct 29th at 10:23 AM</small>
              <b-card-text class="mt-4">Argon is a great free UI package based on Bootstrap 4 that includes the most
                important components and features.</b-card-text>
              <a href="#!" class="btn btn-link px-0">View article</a>
            </b-card-body>
          </b-card>

          <!-- Basic with blockquote -->
          <card gradient="default">
            <b-card-title title-tag="h3" class="text-white">Testimonial</b-card-title>
            <blockquote class="blockquote text-white mb-0">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer class="blockquote-footer text-danger">Someone famous in <cite title="Source Title">Source
                Title</cite></footer>
            </blockquote>
          </card>


        </b-col>
        <b-col lg="4">
          <!-- Pricing -->
          <card gradient="success"
                header-classes="bg-transparent"
                footer-classes="bg-transparent"
                body-classes="px-lg-7"
                class="card-pricing border-0 text-center mb-4">
            <!--Header-->
            <h4 slot="header" class="text-uppercase ls-1 text-white py-3 mb-0">Bravo pack</h4>
            <!--Card Body-->
            <div class="display-2 text-white">$49</div>
            <span class=" text-white">per application</span>
            <ul class="list-unstyled my-4">
              <li>
                <div class="d-flex align-items-center">
                  <div>
                    <div class="icon icon-xs icon-shape bg-white shadow rounded-circle">
                      <i class="fas fa-terminal"></i>
                    </div>
                  </div>
                  <div>
                    <span class="pl-2 text-sm text-white">Complete documentation</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex align-items-center">
                  <div>
                    <div class="icon icon-xs icon-shape bg-white shadow rounded-circle">
                      <i class="fas fa-pen-fancy"></i>
                    </div>
                  </div>
                  <div>
                    <span class="pl-2 text-sm text-white">Working materials in Sketch</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex align-items-center">
                  <div>
                    <div class="icon icon-xs icon-shape bg-white shadow rounded-circle">
                      <i class="fas fa-hdd"></i>
                    </div>
                  </div>
                  <div>
                    <span class="pl-2 text-sm text-white">2GB cloud storage</span>
                  </div>
                </div>
              </li>
            </ul>
            <base-button type="primary" class="mb-3">Start free trial</base-button>
            <!--Footer-->
            <a slot="footer" href="#!" class=" text-white">Request a demo</a>
          </card>
          <!-- Basic with action button -->
          <card>
            <!-- Card header -->
            <b-row align-v="center" slot="header" >
              <b-col cols="8">
                <!-- Title -->
                <h5 class="h3 mb-0">Card title</h5>
              </b-col>
              <b-col cols="4" class="text-right">
                <a href="#!" class="btn btn-sm btn-neutral">Action</a>
              </b-col>
            </b-row>
            <!-- Card body -->
            <b-card-text class="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est
              fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut reiciendis voluptates enim
              impedit veritatis officiis.</b-card-text>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </card>
          <!-- Image overlay -->
          <b-card no-body img-src="img/theme/img-1-1000x600.jpg" alt="Card image" class="bg-dark text-white border-0">
            <div class="card-img-overlay d-flex align-items-center">
              <div>
                <b-card-title title-tag="h5" class="h2 text-white mb-2">Card title</b-card-title>
                <b-card-text >This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.</b-card-text>
                <b-card-text class="text-sm font-weight-bold">Last updated 3 mins ago</b-card-text>
              </div>
            </div>
          </b-card>
          <!-- Pricing card -->
          <card
            header-classes="bg-transparent"
            body-classes="px-lg-7"
            class="card-pricing border-0 text-center mb-4">

            <!--Header-->
            <h4 slot="header" class="text-uppercase ls-1 text-primary py-3 mb-0">Bravo pack</h4>

            <!--Body-->
            <div class="display-2">$49</div>
            <span class=" text-muted">per application</span>
            <ul class="list-unstyled my-4">
              <li>
                <div class="d-flex align-items-center">
                  <div>
                    <div class="icon icon-xs icon-shape bg-gradient-primary text-white shadow rounded-circle">
                      <i class="fas fa-terminal"></i>
                    </div>
                  </div>
                  <div>
                    <span class="pl-2 text-sm">Complete documentation</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex align-items-center">
                  <div>
                    <div class="icon icon-xs icon-shape bg-gradient-primary text-white shadow rounded-circle">
                      <i class="fas fa-pen-fancy"></i>
                    </div>
                  </div>
                  <div>
                    <span class="pl-2 text-sm">Working materials in Sketch</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="d-flex align-items-center">
                  <div>
                    <div class="icon icon-xs icon-shape bg-gradient-primary text-white shadow rounded-circle">
                      <i class="fas fa-hdd"></i>
                    </div>
                  </div>
                  <div>
                    <span class="pl-2 text-sm">2GB cloud storage</span>
                  </div>
                </div>
              </li>
            </ul>
            <base-button type="primary" class="mb-3">Start free trial</base-button>
            <!--Footer-->
            <a slot="footer" href="#!" class=" text-muted">Request a demo</a>
          </card>

        </b-col>
      </b-row>
    </b-container>


  </div>
</template>
<script>
  import RouteBreadcrumb from '@/components/Breadcrumb/RouteBreadcrumb';
  import BaseHeader from '@/components/BaseHeader';
  import StatsCard from '@/components/Cards/StatsCard';

  export default {
    components: {
      BaseHeader,
      RouteBreadcrumb,
      StatsCard
    }
  };
</script>
<style>
</style>
