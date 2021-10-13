<template>
  <div>
    <!-- Header -->
    <div class="header py-6">
      <div>
        <div class="header-body">
          <b-row class="justify-content-center">
            <b-col lg="8" md="9" sm="10" cols="10">
              <span>Step 3</span><br>
              <h1>Covid Declaration</h1>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <div class="pb-5">
      <b-row class="justify-content-center mx-0">
          <b-col lg="8" md="9" sm="10" cols="10" class="px-0">
            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                ></v-divider>

                <v-list-item
                  v-else
                  :key="item.title"
                > 
                  <b-form-checkbox style="color: yellow">
                    <span class="text-muted"></span>
                  </b-form-checkbox>
                 
                  <v-list-item-content>
                    <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </b-col>
        </b-row>
        <b-row class="justify-content-center mx-0">
          <router-link to="/booking" class="btn base-button btn-secondary btn-md">GO BACK</router-link>
          <base-button size="md" type="warning" class="bg-yellow" @click="continuePage()">
              Confirm
          </base-button>
        </b-row>
    </div>
  </div>
</template>

<script>
  import BaseButton from '@/components/BaseButton.vue';
  export default {
    page: {
        title: "Declaration",
        meta: [{ name: "description", content: "" }]
      },
    data: () => ({
      ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
      items: [
        { header: 'Covid' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: 'I have not presented with any symptoms of covid-19 such as feve,caught, some threat, shortness of breath in the past 14 days.',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: 'I am not currently surpected(being tested) or have been confirmed as a COVID-19 case in the past 14 days?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: 'I have not been in contact with someone thate is a surpected(being tested) or confirmed as a COVID-19 in the past 14 days',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: 'I am aware of current Australian Government regulations to wear a msk within airports and on board the aircraft and am willing to follow this directive',
        },
      ],
    }),
    componenets: {
      BaseButton,
    },
    methods: {
      continuePage() {
        this.$router.push({name: "Dangerous"});
      },
    }
  }
</script>