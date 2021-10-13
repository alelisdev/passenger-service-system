import mutations from './mutation'
import actions from './action'
import getters from './getter'

const defaultState = {
  passengerInfo: {},
};

export default {
  state: defaultState,
  getters,
  actions,
  mutations,
};
