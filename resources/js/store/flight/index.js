import mutations from './mutation'
import actions from './action'
import getters from './getter'
import JwtService from "@/common/jwt.service"

const defaultState = {
  flights: [],
  flight: {},
  status: {date: [], number: null, fromTime: null, toTime: null, flight_time: null},
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
