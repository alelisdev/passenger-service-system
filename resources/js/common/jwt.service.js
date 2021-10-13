const ID_API_TOKEN = 'id_api_token';
const ROLE = 'role';
const USER = 'user';

const JwtService = {
    getToken() {
        return window.localStorage.getItem(ID_API_TOKEN)
    },
    setToken(token) {
        window.localStorage.setItem(ID_API_TOKEN, token);
    },
    unsetToken() {
        window.localStorage.removeItem(ID_API_TOKEN);
    },

    getRole() {
        return window.localStorage.getItem(ROLE)
    },
    setRole(role) {
        window.localStorage.setItem(ROLE, role);
    },
    unsetRole() {
        window.localStorage.removeItem(ROLE);
    },

    getUser() {
        return window.localStorage.getItem(USER)
    },
    setUser(user) {
        window.localStorage.setItem(USER, user);
    },
    unsetUser() {
        window.localStorage.removeItem(USER);
    },
}

export default JwtService