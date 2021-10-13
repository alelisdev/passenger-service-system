<template>
    <b-card no-body class="widget-calendar">
        <b-card-header >
            <b-row align-v="center">
                <b-col cols="8">
                    <!-- Title -->
                    <h5 class="h3 mb-0">Real time</h5>
                </b-col>
                <b-col cols="4" class="text-right">
                    <a href="#!" class="btn btn-sm btn-neutral">Action</a>
                </b-col>
            </b-row>
        </b-card-header>

      <b-card-body >
        <world-map class="vector-map vector-map-sm"
                         :map-data="mapData"
                         :points="points">
        </world-map>

        <b-list-group flush class="list my--3">
          <b-list-group-item class="px-0">
            <b-row align-v="center" >
              <b-col md="auto">
                <!-- Country flag -->
                <img src="img/icons/flags/US.png" alt="Country flag">
              </b-col>
              <b-col>
                <small>Country:</small>
                <h5 class="mb-0">United States</h5>
              </b-col>
              <b-col>
                <small>Visits:</small>
                <h5 class="mb-0">2500</h5>
              </b-col>
              <b-col>
                <small>Bounce:</small>
                <h5 class="mb-0">30%</h5>
              </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-row align-v="center">
              <b-col md="auto">
                <!-- Country flag -->
                <img src="img/icons/flags/DE.png" alt="Country flag">
              </b-col>
              <b-col>
                <small>Country:</small>
                <h5 class="mb-0">Germany</h5>
              </b-col>
              <b-col>
                <small>Visits:</small>
                <h5 class="mb-0">2500</h5>
              </b-col>
              <b-col>
                <small>Bounce:</small>
                <h5 class="mb-0">30%</h5>
              </b-col>
            </b-row>
          </b-list-group-item>
          <b-list-group-item class="px-0">
            <b-row align-v="center">
              <b-col md="auto">
                <!-- Country flag -->
                <img src="img/icons/flags/GB.png" alt="Country flag">
              </b-col>
              <b-col>
                <small>Country:</small>
                <h5 class="mb-0">Great Britain</h5>
              </b-col>
              <b-col>
                <small>Visits:</small>
                <h5 class="mb-0">2500</h5>
              </b-col>
              <b-col>
                <small>Bounce:</small>
                <h5 class="mb-0">30%</h5>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>

      </b-card-body>

    </b-card>
</template>
<script>
  import WorldMap from '@/components/WorldMap/WorldMap.vue';
  export default {
    name: 'map-card',
    components: {
      WorldMap
    },
    data() {
      return {
        mapData: {
          AUS: 760,
          BRA: 900,
          CAN: 120,
          DEU: 1300,
          FRA: 540,
          GBR: 690,
          GEO: 200,
          IND: 200,
          ROU: 600,
          RUS: 757,
          USA: 1800
        },
        points: [
          {
            name: 'Brazil',
            centered: 'BRA',
          },
          {
            name: 'France',
            centered: 'FRA',
          },
          {
            name: 'Italy',
            centered: 'ITA',
          },
          {
            name: 'Oman',
            centered: 'OMN',
          },
          {
            name: 'Indonesia',
            centered: 'IDN',
          },
          {
            name: 'Romania',
            centered: 'ROU',
          }
        ]
      }
    }
  }
</script>
