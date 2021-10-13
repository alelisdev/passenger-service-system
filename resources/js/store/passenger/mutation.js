import type from './type'

const mutations = {
  [type.SET_ALL_PASSENGERS] (state, data) {
    state.passengers = data.passengers;
  },
  [type.SET_PASSENGER] (state, data) {
    state.passenger = data.passenger;
  },
  [type.SET_FLIGHT_PASSENGER] (state, data) {
    state.flight_passenger = data.flight_passenger;
  },
  [type.SET_PASSENGER_FLIGHTS] (state, data) {
    state.previous_flights = data.previous_flights;
    state.upcoming_flights = data.upcoming_flights;
  },
};
export default mutations;