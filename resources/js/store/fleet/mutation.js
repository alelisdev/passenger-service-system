import type from './type'

const mutations = {
  [type.SET_ALL_AIRCRAFTS] (state, data) {
    state.aircrafts = data.aircrafts;
  },
  [type.SET_AIRCRAFT] (state, data) {
    state.aircraft = data.aircraft;
  },
  [type.SET_AIRCRAFT_OPTIONS] (state, data) {
    state.aircraft_options = data.aircraftOptions;
  },
};
export default mutations;