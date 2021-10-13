<template>
  <div>
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
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
    </base-header>

    <b-container fluid class="mt--6">
      <b-row >
        <b-col>
          <b-card no-body>
            <b-card-body class="pt-0">
              <async-world-map class="map map-big"
                               :map-data="mapData"
                               :points="points">
              </async-world-map>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>
<script>
import AsyncWorldMap from '@/components/WorldMap/AsyncWorldMap.vue';

export default {
  components: {
    AsyncWorldMap
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
    };
  }
};
</script>
<style>
#worldMap {
  width: 100%;
}
</style>
