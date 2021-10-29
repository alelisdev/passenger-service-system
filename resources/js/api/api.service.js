import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
    init() {
        // Vue.use(VueAxios, axios);
        axios.defaults.baseURL = API_URL;
    },
    setHeader() {
        axios.defaults.headers.common = {
            'X-Requested-With': 'XMLHttpRequest',
            "Authorization": `Bearer ${JwtService.getToken()}`,
            // 'content-type': 'multipart/form-data',
            // 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
        };
    },
    get(resource, slug = "") {
        return axios.get(`${API_URL}/${resource}/${slug}`).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },
    post(resource, params) {
        return axios.post(`${API_URL}/${resource}`, params);
    },

    put(resource, params) {
        return axios.put(`${API_URL}/${resource}`, params);
    },

    delete(resource, slug = "") {
        return axios.delete(`${API_URL}/${resource}/${slug}`).catch(error => {
            throw new Error(`[RWV] ApiService ${error}`);
        });
    },
};

export default ApiService;