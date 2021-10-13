import mutations from './mutation'
import actions from './action'
import getters from './getter'
import JwtService from "@/common/jwt.service"

const defaultState = {
  passengers: [],
  passenger: {},
  flight_passenger: {},
  previous_flights: [],
  upcoming_flights: [],
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
