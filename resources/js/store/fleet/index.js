import mutations from './mutation'
import actions from './action'
import getters from './getter'
import JwtService from "@/common/jwt.service"

const defaultState = {
  aircrafts: [],
  aircraft: {},
  aircraft_options: [],
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
