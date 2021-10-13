<template>
  <div>
    <!-- Header -->
    <div class="header py-6">
        <div class="header-body">
          <b-row class="justify-content-center">
            <b-col lg="8" md="9" sm="10" cols="8" class="justify-content-center">
              <span>Step 4</span>
              <h1>Dangerous goods not to be taken on board</h1>

              <span style="text-align:justify">It is aganinst the law to bring restricted items - as defined by the civil Aviation Safety Authoruty - onto an aricraft in carry - on baggage or checked baggage. Company, airport or government officials may inspect and/or search your baggage with or without your presence.</span>
            </b-col>
          </b-row>
        </div>
    </div>
    <div class="pb-5">
      <b-row class="justify-content-center mx-0">
        <b-col lg="8" md="9" sm="10" cols="10" class="px-0">
          <table>
            <tr>
              <th>
                <img src="img/icons/dangerous/exp.png" style="font-size:30px 30px;"/>
                <h2>Explosives</h2>
                <span>Fireworks, flares, toy gun caps</span>
              </th>
              <th><img src="img/icons/dangerous/poison.png" />
                <h2>Poisons</h2>
                <span>Arsenic, cyanide, weedkillers</span></th>
              <th><img src="img/icons/dangerous/compress.png" />
                <h2>Compressed Substances</h2>
                <span>Gas cylinders, aerosois(other than medicines/toiletries)</span></th>
            </tr>
            <tr>
              <td><img src="img/icons/dangerous/irritating.png" />
                <h2>Irritating Substances</h2>
                <span>Tear gas devices such as mace, pepeer sprays.</span></td>
              <td><img src="img/icons/dangerous/flame.png" />
                <h2>Flameable Substances</h2>
                <span>Flighter fuel, paints, thinners, firelighters, cigarateee lighters containing unabsorbed lighter fuel</span>/td>
              <td><img src="img/icons/dangerous/infectious.png" />
                <h2>Infecticous Substances</h2>
                <span>Biological products and/or diagnostic specimens containing pathoens.</span></td>
            </tr>
            <tr>
              <td><img src="img/icons/dangerous/oxidizer.png" />
                <h2>Oxidizers</h2>
                <span>Some bleaching powders, acids, chemicals.</span></td>
              <td><img src="img/icons/dangerous/corrosives.png" />
                <h2>Corrosives</h2>
                <span>Acides, alkalis, wet cell batteries, caustic soda, mercury.</span></td>
              <td><img src="img/icons/dangerous/organ.png" />
                <h2>Organic peroxides</h2>
                <span>Hair or textile dues, fibreglass repair kits, certain adhesives.</span></td>
            </tr>
            <tr>
              <td><img src="img/icons/dangerous/radicact.png" />
                <h2>Radioactic Materials</h2>
                <span>Medical or research samples which contain radioactive sources</span></td>
              <td><img src="img/icons/dangerous/magnet.png" />
                <h2>Magnetised Materials</h2>
                <span>Magnetrons and anything containing strong magne</span></td>
            </tr>
          </table>
        </b-col>
      </b-row>
      <b-row class="justify-content-center mx-0">
        <b-col lg="8" md="9" sm="10" cols="10" class="px-0">
          <span>
            <p>If you have any doubt what may be carried onboard the aircraft, please request more information from the company before travel.
            </p>
            <p>The guest is not permitted to carry sharp objects such as nail files, scissors, letter openers, pocket knives, etc in his.her carry-on baggage or on his.her person. such items must be pleace in checked baggage only. The company may destroy, abandon and/or retain as evidence any such goods.
            </p>
          </span>
        </b-col>
      </b-row>
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
      <b-container>
        <div class="text-center">
          <router-link to="/declaration" class="btn base-button btn-secondary btn-md">GO BACK</router-link>
          <base-button size="md" type="warning" class="bg-yellow" @click="continuePage()">CONFIRM</base-button>
        </div>
      </b-container>
    </div>
  </div>
</template>
<script>
  import BaseButton from '@/components/BaseButton.vue';
  export default {
    page: {
      title: "Dangerous goods",
      meta: [{ name: "description", content: "" }]
    },
    data: () => ({
      ex4: ['red', 'indigo', 'orange', 'primary', 'secondary', 'success', 'info', 'warning', 'error', 'red darken-3', 'indigo darken-3', 'orange darken-3'],
      items: [
        { header: '-' },
        {
          title: 'Brunch this weekend?',
          subtitle: 'I confirm that i am not carrying any dangerous goods onboard.',
        },
        { divider: true, inset: true },
        {
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: 'I confrim that i will not have any sharp objects, firearms and weapons on my person/s or in my/our carry-on baggage while in the aircraft.',
        },
        { divider: true, inset: true },
        {
          title: 'Oui oui',
          subtitle: 'I confirm that i have read and understood the Conditions of Carriage for my/our ticket/s',
        },
        { divider: true, inset: true },
        {
          title: 'Birthday gift',
          subtitle: 'I confirm that the itinerry and seating arrangement are correnct for check-in',
        },
      ],
    }),
    componenets: {
      BaseButton,
    },
    methods: {
      continuePage() {
        this.$router.push({name: "SelectSeat"});
      },
    }
  }
</script>
<style>

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  width:1000px;
  height:150px;
  padding:10px;
}

</style>