<template>
  <div>
    <base-header class="pb-6">
      <b-row class="align-items-center py-4">
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
      <b-row>
        <b-col>
          <div class="card-wrapper">
            <custom-styles-validation></custom-styles-validation>

            <browser-defaults-validation></browser-defaults-validation>

            <server-side-validation></server-side-validation>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import CustomStylesValidation from './FormValidation/CustomStylesValidation'
  import BrowserDefaultsValidation from './FormValidation/BrowserDefaultsValidation'
  import ServerSideValidation from './FormValidation/ServerSideValidation'
  export default {
    name: 'form-components',
    components: {
      CustomStylesValidation,
      BrowserDefaultsValidation,
      ServerSideValidation
    },
    data() {
      return {

      }
    }
  }
</script>
