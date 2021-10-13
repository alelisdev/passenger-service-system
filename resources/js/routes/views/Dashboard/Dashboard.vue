<template>
  <div>    

    <base-header class="pb-6">
      <b-row aling-v="center" class="py-4">
        <b-col cols="7" lg="6">
          <h6 class="h2 text-white d-inline-block mb-0">Default</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </b-col>
        <b-col cols="5" lg="6" class="text-right">
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

    <!--Charts-->
    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="8">
          <card type="default" header-classes="bg-transparent">
            <b-row align-v="center" slot="header">
              <b-col>
                <h6 class="text-light text-uppercase ls-1 mb-1">Overview</h6>
                <h5 class="h3 text-white mb-0">Sales value</h5>
              </b-col>
              <b-col>
                <b-nav class="nav-pills justify-content-end">
                  <b-nav-item
                       class="mr-2 mr-md-0"
                       :active="bigLineChart.activeIndex === 0"
                       link-classes="py-2 px-3"
                       @click.prevent="initBigChart(0)">
                      <span class="d-none d-md-block">Month</span>
                      <span class="d-md-none">M</span>
                  </b-nav-item>
                  <b-nav-item
                    link-classes="py-2 px-3"
                    :active="bigLineChart.activeIndex === 1"
                    @click.prevent="initBigChart(1)"
                  >
                    <span class="d-none d-md-block">Week</span>
                    <span class="d-md-none">W</span>
                  </b-nav-item>
                </b-nav>
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
        </b-col>

        <b-col xl="4">
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
        </b-col>
      </b-row>
      <!-- End charts-->

      <!--Lists-->
      <b-row >
        <b-col xl="4">
          <card>
            <h5 class="h3 mb-0" slot="header">Team members</h5>

            <user-list></user-list>
          </card>
        </b-col>

        <b-col xl="4">
          <card>
            <h5 class="h3 mb-0" slot="header">To do list</h5>

            <task-list></task-list>
          </card>
        </b-col>

        <b-col xl="4">
          <card>
            <h5 class="h3 mb-0" slot="header">Progress track</h5>

            <progress-track-list></progress-track-list>
          </card>
        </b-col>
      </b-row>
      <!--End lists-->

      <!--Widgets-->
      <b-row>
        <b-col xl="5">
          <activity-feed></activity-feed>
        </b-col>
        <b-col xl="7">
          <light-table></light-table>
          <b-card-group deck>
            <card gradient="default" no-body="">
              <b-card-body>
                <div class="mb-2">
                  <sup class="text-white">$</sup> <span class="h2 text-white">3,300</span>
                  <div class="text-light mt-2 text-sm">Your current balance</div>
                  <div>
                    <span class="text-success font-weight-600">+ 15%</span> <span class="text-light">($250)</span>
                  </div>
                </div>
                <b-button size="sm" variant="neutral" block>Add credit</b-button>
              </b-card-body>

              <b-card-body>
                <b-row>
                  <b-col>
                    <small class="text-light">Orders: 60%</small>
                    <base-progress :value="60"
                                   size="xs"
                                   progress-classes="my-2"
                                   type="success"/>
                  </b-col>
                  <b-col>
                    <small class="text-light">Sales: 40%</small>
                    <base-progress :value="40"
                                   size="xs"
                                   progress-classes="my-2"
                                   type="warning"/>
                  </b-col>
                </b-row>
              </b-card-body>

            </card>

            <card gradient="danger">
              <b-row align-v="center"  class="justify-content-between">
                <b-col>
                  <img src="img/icons/cards/bitcoin.png" alt="Image placeholder">
                </b-col>
                <b-col md="auto" >
                  <b-badge size="lg" variant="success">Active</b-badge>
                </b-col>
              </b-row>
              <div class="my-4">
                <span class="h6 surtitle text-light">
                  Username
                </span>
                <div class="h1 text-white">@johnsnow</div>
              </div>
              <b-row >
                <b-col>
                  <span class="h6 surtitle text-light">Name</span>
                  <span class="d-block h3 text-white">John Snow</span>
                </b-col>
              </b-row>

            </card>
          </b-card-group>
        </b-col>
      </b-row>
      <!--End Widgets-->

      <!--Tables-->
      <b-row>
        <b-col xl="8">
          <page-visits-table></page-visits-table>
        </b-col>
        <b-col xl="4">
          <social-traffic-table></social-traffic-table>
        </b-col>
      </b-row>
      <!--End tables-->
    </b-container>

  </div>
</template>
<script>
  // Charts
  import * as chartConfigs from '@/components/Charts/config';
  import LineChart from '@/components/Charts/LineChart';
  import BarChart from '@/components/Charts/BarChart';

  // Components
  import BaseProgress from '@/components/BaseProgress';
  import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb';
  import StatsCard from '@/components/Cards/StatsCard';

  // Lists
  import ActivityFeed from './ActivityFeed';
  import TaskList from './TaskList';
  import UserList from './UserList';
  import ProgressTrackList from './ProgressTrackList';

  // Tables
  import LightTable from './LightTable';
  import SocialTrafficTable from './SocialTrafficTable';
  import PageVisitsTable from './PageVisitsTable';

  export default {
    components: {
      ActivityFeed,
      LineChart,
      BarChart,
      BaseProgress,
      RouteBreadCrumb,
      StatsCard,
      TaskList,
      PageVisitsTable,
      SocialTrafficTable,
      LightTable,
      UserList,
      ProgressTrackList
    },
    data() {
      return {
        bigLineChart: {
          allData: [
            [0, 20, 10, 30, 15, 40, 20, 60, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
          ],
          activeIndex: 0,
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
          },
          extraOptions: chartConfigs.blueChartOptions
        }
      };
    },
    methods: {
      initBigChart(index) {
        let chartData = {
          datasets: [
            {
              label: 'Performance',
              data: this.bigLineChart.allData[index]
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        };
        this.bigLineChart.chartData = chartData;
        this.bigLineChart.activeIndex = index;
      }
    },
    mounted() {
      this.initBigChart(0);
    }
  };
</script>
<style></style>
