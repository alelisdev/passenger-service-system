import type from './type'

const mutations = {
  [type.SET_ALL_AIRCRAFT_FLIGHTS] (state, data) {
    state.aircraft_flights = data.aircraft_flights;
  },
  [type.SET_FLIGHT_PASSENGERS] (state, data) {
    state.flight_passengers = data.flight_passengers;
    state.aircraft_flight = data.aircraft_flight;
  },
};
export default mutations;