<template>
  <div>
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 text-white d-inline-block mb-0">Widgets</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </b-col>
        <b-col lg="6" cols="5"  class="text-right">
          <base-button size="sm" type="neutral">New</base-button>
          <base-button size="sm" type="neutral">Filters</base-button>
        </b-col>
      </b-row>
      <!-- Card stats -->
      <b-row>
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
      <b-row>
        <b-col lg="4">
          <!-- Image-Text card -->
          <b-card no-body>
            <!-- Card image -->
            <img class="card-img-top" src="img/theme/img-1-1000x900.jpg" alt="Image placeholder">
            <!-- Card body -->
            <b-card-body>
              <b-card-title class="h2 mb-0">Get started with Argon</b-card-title>
              <small class="text-muted">by John Snow on Oct 29th at 10:23 AM</small>
              <b-card-text class="mt-4">Argon is a great free UI package based on BootstrapVue that includes the most important components and features.</b-card-text>
              <a href="#!" class="btn btn-link px-0">View article</a>
            </b-card-body>
          </b-card>

          <!-- Members list group card -->
          <members-card/>

          <!-- Messages -->
          <b-card no-body>
            <!-- Card header -->
            <template v-slot:header>
              <!-- Title -->
              <h5 class="h3 mb-0">Latest messages</h5>
            </template>
            <!-- Card body -->
            <b-card-body class="p-0">
              <!-- List group -->
              <b-list-group flush>
                <b-list-group-item href="#" class=" flex-column align-items-start py-4 px-4">
                  <div class="d-flex w-100 justify-content-between">
                    <div>
                      <div class="d-flex w-100 align-items-center">
                        <img src="img/theme/team-1.jpg" alt="Image placeholder" class="avatar avatar-xs mr-2">
                        <h5 class="mb-1">Tim</h5>
                      </div>
                    </div>
                    <small>2 hrs ago</small>
                  </div>
                  <h4 class="mt-3 mb-1"> New order for Argon Dashboard</h4>
                  <p class="text-sm mb-0">Doasdnec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </b-list-group-item>
                <b-list-group-item  href="#" class="flex-column align-items-start py-4 px-4">
                  <div class="d-flex w-100 justify-content-between">
                    <div>
                      <div class="d-flex w-100 align-items-center">
                        <img src="img/theme/team-2.jpg" alt="Image placeholder" class="avatar avatar-xs mr-2">
                        <h5 class="mb-1">Mike</h5>
                      </div>
                    </div>
                    <small>1 day ago</small>
                  </div>
                  <h4 class="mt-3 mb-1"><span class="text-info">●</span> Your theme has been updated</h4>
                  <p class="text-sm mb-0">Doasdnec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                </b-list-group-item>
              </b-list-group>
            </b-card-body>
          </b-card>

          <!-- Master card -->

          <credit-card/>
        </b-col>

        <b-col lg="4">
          <!-- Calendar widget -->
          <!--* Card header *-->
          <!--* Card body *-->
          <!--* Card init *-->
          <calendar-widget></calendar-widget>

          <!-- Timeline card -->
          <timeline-card></timeline-card>

          <!-- Progress track -->
          <progress-track-list/>

          <!-- Paypal card -->
          <paypal-card/>
        </b-col>

        <b-col lg="4">
          <!-- Vector map -->
          <vector-map-card/>

          <visa-card/>
          <!-- Stats cards-->
          <stats-cards></stats-cards>

          <!-- Checklist -->
          <task-list></task-list>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import StatsCard from '@/components/Cards/StatsCard'
  import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb'
  import CalendarWidget from './Widgets/CalendarWidget'
  import TimelineCard from './Widgets/TimelineCard'
  import MembersCard from "@/views/Widgets/MembersCard";
  import CreditCard from "@/views/Widgets/CreditCard";
  import ProgressTrackList from "@/views/Widgets/ProgressTrackList";
  import PaypalCard from "@/views/Widgets/PaypalCard";
  import VectorMapCard from "@/views/Widgets/VectorMapCard";
  import VisaCard from "@/views/Widgets/VisaCard";
  import StatsCards from "@/views/Widgets/StatsCards";
  import TaskList from "@/views/Widgets/TaskList";

  export default {
  components: {
    VisaCard,
    VectorMapCard,
    PaypalCard,
    StatsCards,
    ProgressTrackList,
    CreditCard,
    MembersCard,
    StatsCard,
    RouteBreadCrumb,
    CalendarWidget,
    TimelineCard,
    TaskList
  }
};
</script>
