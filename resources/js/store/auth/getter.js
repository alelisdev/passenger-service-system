const getters = {
    getLoginErrors(state) {
        return state.errors.login;
    },
    getRegistrationErrors(state) {
        return state.errors.register;
    },
    getErrors(state) {
        return state.errors;
    },
    currentUser(state) {
        return state.userId;
    },
    currentRole(state) {
        return state.userRole;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    },
    currentPassenger(state) {
        return state.user;
    },
};

export default getters;