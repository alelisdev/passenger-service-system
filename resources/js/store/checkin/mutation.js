import type from './type'

const mutations = {
  [type.SET_ALL_INFO] (state, data) {
    state.passengerInfo = data.passengerInfo;
  },
};
export default mutations;