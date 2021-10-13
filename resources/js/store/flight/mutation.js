import type from './type'

const mutations = {
  [type.SET_ALL_FLIGHTS] (state, data) {
    state.flights = data.flights;
  },
  [type.SET_FLIGHT] (state, data) {
    state.flight = data.flight;
  },
};
export default mutations;