import mutations from './mutation'
import actions from './action'
import getters from './getter'
import JwtService from "@/common/jwt.service"

const defaultState = {
    token: null,
    errors: {
        login: [],
        register: []
    },
    userId: null,
    userRole: JwtService.getRole() ? JwtService.getRole() : null,
    isAuthenticated: JwtService.getToken() ? true : false,
    user: JwtService.getUser() ? JSON.parse(JwtService.getUser()) : null,
};

export default {
    state: defaultState,
    getters,
    actions,
    mutations,
};