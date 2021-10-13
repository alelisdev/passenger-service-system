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
    </base-header>

    <b-container fluid class="mt--6">
      <b-row class="justify-content-center">
        <b-col lg="8" class="card-wrapper">
          <!-- Grid system -->
          <card class="card">
            <h3 slot="header" class="mb-0">Grid system</h3>

            <b-row class="row-example">
              <b-col sm >
                <span>One of three columns</span>
              </b-col>
              <b-col sm>
                <span>One of three columns</span>
              </b-col>
              <b-col sm>
                <span>One of three columns</span>
              </b-col>
            </b-row>
          </card>
          <!-- Equal-width -->
          <card>
            <h3 slot="header" class="mb-0">Equal-width</h3>

            <b-row class="row-example">
              <b-col>
                <span>1 of 2</span>
              </b-col>
              <b-col>
                <span>2 of 2</span>
              </b-col>
            </b-row>
            <b-row class="row-example">
              <b-col>
                <span>1 of 3</span>
              </b-col>
              <b-col>
                <span>2 of 3</span>
              </b-col>
              <b-col>
                <span>3 of 3</span>
              </b-col>
            </b-row>
          </card>
          <!-- Setting one column width -->
          <card>
            <h3 slot="header" class="mb-0">Setting one column width</h3>

            <b-row class="row-example">
              <b-col>
                <span>1 of 3</span>
              </b-col>
              <b-col cols="6">
                <span>2 of 3 (wider)</span>
              </b-col>
              <b-col>
                <span>3 of 3</span>
              </b-col>
            </b-row>
            <b-row class="row-example">
              <b-col>
                <span>1 of 3</span>
              </b-col>
              <b-col cols="5">
                <span>2 of 3 (wider)</span>
              </b-col>
              <b-col>
                <span>3 of 3</span>
              </b-col>
            </b-row>
          </card>
          <!-- Variable width content -->
          <b-card no-body >
            <b-card-header>
              <h3 class="mb-0">Variable width content</h3>
            </b-card-header>
            <b-card-body>
              <b-row class="row-example justify-content-md-center">
                <b-col lg="2">
                  <span>1 of 3</span>
                </b-col>
                <b-col md="auto" >
                  <span>Variable width content</span>
                </b-col>
                <b-col lg="2">
                  <span>3 of 3</span>
                </b-col>
              </b-row>
              <b-row  class="row-example">
                <b-col>
                  <span>1 of 3</span>
                </b-col>
                <b-col md="auto">
                  <span>Variable width content</span>
                </b-col>
                <b-col lg="2">
                  <span>3 of 3</span>
                </b-col>
              </b-row>
            </b-card-body>
          </b-card>
          <!-- Equal-width multi-row -->
          <card>
            <h3 slot="header" class="mb-0">Equal-width multi-row</h3>

            <b-row class="row-example">
              <b-col><span>col</span></b-col>
              <b-col><span>col</span></b-col>
              <div class="w-100"></div>
              <b-col><span>col</span></b-col>
              <b-col><span>col</span></b-col>
            </b-row>
          </card>
          <!-- Mix and match -->
          <card>
            <h3 slot="header" class="mb-0">Mix and match</h3>

            <!-- Stack the columns on mobile by making one full-width and the other half-width -->
            <b-row class="row-example">
              <b-col cols="12" md="8"><span>.col-12 .col-md-8</span></b-col>
              <b-col cols="6" md="4"><span>.col-6 .col-md-4</span></b-col>
            </b-row>
            <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
            <b-row class="row-example">
              <b-col cols="6" md="4"><span>.col-6 .col-md-4</span></b-col>
              <b-col cols="6" md="4"><span>.col-6 .col-md-4</span></b-col>
              <b-col cols="6" md="4"><span>.col-6 .col-md-4</span></b-col>
            </b-row>
            <!-- Columns are always 50% wide, on mobile and desktop -->
            <b-row class="row-example">
              <b-col cols="6"><span>.col-6</span></b-col>
              <b-col cols="6"><span>.col-6</span></b-col>
            </b-row>
          </card>
      </b-col>
    </b-row>
  </b-container>
  </div>
</template>
<script>
  import RouteBreadcrumb from '@/components/Breadcrumb/RouteBreadcrumb';
  import BaseHeader from '@/components/BaseHeader';

  export default {
    name: 'grid-system',
    components: {
      BaseHeader,
      RouteBreadcrumb
    }
  };
</script>
<style></style>
