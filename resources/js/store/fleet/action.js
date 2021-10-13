import ApiService from "@/api/api.service";
import type from './type';

const actions = {
    initAircrafts(context) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/aircrafts")
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_ALL_AIRCRAFTS, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
    getAircraftById(context, aircraftId) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/aircraft/" + aircraftId)
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_AIRCRAFT, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
    createAircraft(context, aircraftInfo) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.post("api/v1/admin/aircraft/create", aircraftInfo)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    updateAircraft(context, aircraftInfo) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.put("api/v1/admin/aircraft/update", aircraftInfo)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    deleteAircraft(context, aircraftId) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.delete("api/v1/admin/aircraft/delete/" + aircraftId)
                .then(({data}) => {
                    context.commit(type.SET_ALL_AIRCRAFTS, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
    getAircraftOptions(context) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/aircraft/options")
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_AIRCRAFT_OPTIONS, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
};

export default actions;