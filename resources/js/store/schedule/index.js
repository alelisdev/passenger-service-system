import mutations from './mutation'
import actions from './action'
import getters from './getter'
import JwtService from "@/common/jwt.service"

const defaultState = {
  aircraft_flights: [],
  flight_passengers: [],
  aircraft_flight: {},
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
