import ApiService from "@/api/api.service";
import type from './type';

const actions = {
    initFlights(context) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/flights")
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_ALL_FLIGHTS, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
    
    initRoutines(context) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/passenger/routines")
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_ALL_FLIGHTS, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
    getFlightById(context, flightId) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/flight/" + flightId)
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_FLIGHT, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
    createFlight(context, flightInfo) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.post("api/v1/admin/flight/create", flightInfo)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    updateFlight(context, flightInfo) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.put("api/v1/admin/flight/update", flightInfo)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    deleteFlight(context, flightId) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.delete("api/v1/admin/flight/delete/" + flightId)
                .then(({data}) => {
                    context.commit(type.SET_ALL_FLIGHTS, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
};

export default actions;