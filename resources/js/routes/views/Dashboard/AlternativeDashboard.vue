<template>
  <div>
    <base-header class="pb-6" type="">
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 d-inline-block mb-0">Alternative</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <b-breadcrumb class="breadcrumb-links">
              <b-breadcrumb-item><router-link to="/"><i class="fas fa-home"></i></router-link></b-breadcrumb-item>
              <b-breadcrumb-item><a href="#">Dashboards</a></b-breadcrumb-item>
              <b-breadcrumb-item active aria-current="page">Alternative</b-breadcrumb-item>
            </b-breadcrumb>
          </nav>
        </b-col>
        <b-col lg="6" cols="5" class="text-right">
          <base-button size="sm" type="neutral">New</base-button>
          <base-button size="sm" type="neutral">Filters</base-button>
        </b-col>
      </b-row>
      <!-- Card stats -->
      <b-row>
        <b-col xl="3" md="6">
          <b-card no-body class="bg-gradient-primary border-0">
            <!-- Card body -->
            <b-card-body>
              <b-row>
                <b-col>
                  <b-card-title title-tag="h5" class="text-uppercase text-muted mb-0 text-white">Tasks completed</b-card-title>
                  <span class="h2 font-weight-bold mb-0 text-white">8/24</span>
                  <base-progress class="progress-xs mt-3 mb-0" type="success" :value="30"></base-progress>
                </b-col>
                <b-col md="auto">
                  <b-dropdown 
                    no-caret right
                    toggle-class="btn btn-sm btn-neutral mr-0"
                  >
                    <template v-slot:button-content>
                      <i class="fas fa-ellipsis-h"></i>
                    </template>

                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here</b-dropdown-item>
                  </b-dropdown>
                </b-col>
              </b-row>
              <p class="mt-3 mb-0 text-sm">
                <a href="#!" class="text-nowrap text-white font-weight-600">See details</a>
              </p>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <b-card no-body class="bg-gradient-info border-0">
            <!-- Card body -->
            <b-card-body>
              <b-row>
                <b-col>
                  <b-card-title title-tag="h5" class="text-uppercase text-muted mb-0 text-white">Contacts</b-card-title>
                  <span class="h2 font-weight-bold mb-0 text-white">123/267</span>
                  <base-progress class="progress-xs mt-3 mb-0" type="success" :value="50"></base-progress>
                </b-col>
                <b-col md="auto">
                  <b-dropdown 
                    no-caret right
                    toggle-class="btn btn-sm btn-neutral mr-0"
                  >
                    <template v-slot:button-content>
                      <i class="fas fa-ellipsis-h"></i>
                    </template>

                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here</b-dropdown-item>
                  </b-dropdown>
                </b-col>
              </b-row>
              <p class="mt-3 mb-0 text-sm">
                <a href="#!" class="text-nowrap text-white font-weight-600">See details</a>
              </p>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <b-card no-body class="bg-gradient-danger border-0">
            <!-- Card body -->
            <b-card-body>
              <b-row>
                <b-col>
                  <b-card-title title-tag="h5" class="text-uppercase text-muted mb-0 text-white">Items sold</b-card-title>
                  <span class="h2 font-weight-bold mb-0 text-white">200/300</span>
                  <base-progress class="progress-xs mt-3 mb-0" type="success" :value="80"></base-progress>
                </b-col>
                <b-col md="auto">
                  <b-dropdown 
                    no-caret right
                    toggle-class="btn btn-sm btn-neutral mr-0"
                  >
                    <template v-slot:button-content>
                      <i class="fas fa-ellipsis-h"></i>
                    </template>

                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here</b-dropdown-item>
                  </b-dropdown>
                </b-col>
              </b-row>
              <p class="mt-3 mb-0 text-sm">
                <a href="#!" class="text-nowrap text-white font-weight-600">See details</a>
              </p>
            </b-card-body>
          </b-card>
        </b-col>
        <b-col xl="3" md="6">
          <b-card no-body class="bg-gradient-default border-0">
            <!-- Card body -->
            <b-card-body>
              <b-row>
                <b-col>
                  <b-card-title title-tag="h5" class="text-uppercase text-muted mb-0 text-white">Notifications</b-card-title>
                  <span class="h2 font-weight-bold mb-0 text-white">50/62</span>
                  <base-progress class="progress-xs mt-3 mb-0" type="success" :value="90"></base-progress>
                </b-col>
                <b-col md="auto">
                  <b-dropdown 
                    no-caret right
                    toggle-class="btn btn-sm btn-neutral mr-0"
                  >
                    <template v-slot:button-content>
                      <i class="fas fa-ellipsis-h"></i>
                    </template>

                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here</b-dropdown-item>
                  </b-dropdown>
                </b-col>
              </b-row>
              <p class="mt-3 mb-0 text-sm">
                <a href="#!" class="text-nowrap text-white font-weight-600">See details</a>
              </p>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>

    </base-header>

    <!--Charts-->
    <b-container fluid class="mt--6">
      <b-card-group deck class="flex-column flex-xl-row">
        <card>
          <b-row align-v="center" slot="header">
            <b-col>
              <h6 class="text-uppercase text-muted ls-1 mb-1">Overview</h6>
              <h5 class="h3 mb-0">Sales value</h5>
            </b-col>
          </b-row>
          <line-chart
            :height="350"
            ref="bigChart"
            :chart-data="bigLineChart.chartData"
            :extra-options="bigLineChart.extraOptions"
          >
          </line-chart>

        </card>

        <card header-classes="bg-transparent">
          <b-row align-v="center" slot="header">
            <b-col>
              <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
              <h5 class="h3 mb-0">Total orders</h5>
            </b-col>
          </b-row>

          <bar-chart
            :height="350"
            ref="barChart"
            :chart-data="redBarChart.chartData"
          >
          </bar-chart>
        </card>
        <!-- Progress track list-->
        <card>
          <!-- Card header -->
          <template v-slot:header>
            <b-row align-v="center">
              <b-col cols="8">
                <!-- Surtitle -->
                <h6 class="surtitle">5/23 projects</h6>
                <!-- Title -->
                <h5 class="h3 mb-0">Progress track</h5>
              </b-col>
              <b-col cols="4" class="text-right">
                <a href="#!" class="btn btn-sm btn-neutral">Action</a>
              </b-col>
            </b-row>
          </template>
          <!-- Card body -->
          <progress-track-list :item-limit="5"></progress-track-list>
        </card>
      </b-card-group>
      <!-- End charts-->

      <!--Tables & Widgets-->
      <b-row>
        <b-col xl="8">
          <light-table :item-limit="5"></light-table>
        </b-col>
        <b-col xl="4">
          <vector-map-card></vector-map-card>
        </b-col>
      </b-row>
      <!--End Tables & Widgets-->

      <!--Lists-->
      <b-card-group deck class="flex-column flex-xl-row">
        <!-- Members list group card -->
        <members-card :show-search="false"></members-card>
        <!-- Checklist -->
        <task-list></task-list>
        <!-- Progress track -->
        <card>
          <!-- Card header -->
          <h5 slot="header" class="h3 mb-0">Progress track</h5>
          <!-- Card body -->
          <progress-track-list :item-limit="5"></progress-track-list>
        </card>
      </b-card-group>
      <!--End lists-->
    </b-container>

  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseHeader from '@/components/BaseHeader';
  import BaseProgress from '@/components/BaseProgress';
  import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb';
  import StatsCard from '@/components/Cards/StatsCard';

  // Lists
  import ProgressTrackList from './ProgressTrackList';
  import MembersCard from '@/views/Widgets/MembersCard';
  import TaskList from '@/views/Widgets/TaskList';

  // Tables
  import LightTable from './LightTable';
  import VectorMapCard from '@/views/Widgets/VectorMapCard'

  export default {
    components: {
      LineChart,
      BarChart,
      BaseHeader,
      BaseProgress,
      RouteBreadCrumb,
      StatsCard,
      TaskList,
      VectorMapCard,
      LightTable,
      ProgressTrackList,
      MembersCard
    },
    data() {
      return {
        bigLineChart: {
          chartData: {
            datasets: [
              {
                label: 'Performance',
                data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
              }
            ],
            labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          },
          extraOptions: chartConfigs.blueChartOptions,
        },
        redBarChart: {
          chartData: {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29]
            }]
          }
        }
      };
    }
  };
</script>
<style></style>
