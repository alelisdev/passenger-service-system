import Vue from 'vue';
import Vuex from 'vuex';
import authModule from './auth';
import userModule from './user';
import passengerModule from './passenger';
import aircraftModule from './fleet';
import flightModule from './flight';
import scheduleModule from './schedule';
import checkinModule from './checkin';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authModule,
    user: userModule,
    passenger: passengerModule,
    aircraft: aircraftModule,
    flight: flightModule,
    schedule: scheduleModule,
    checkin: checkinModule,
  },
});