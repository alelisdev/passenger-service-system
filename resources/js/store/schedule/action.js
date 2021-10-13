import ApiService from "@/api/api.service";
import type from './type';

const actions = {
    getAircraftFlightsByDate(context, data) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.post("api/v1/admin/schedule/aircraft_flights", data)
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_ALL_AIRCRAFT_FLIGHTS, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
    saveAircraftFlight(context, data) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.post("api/v1/admin/schedule/save", data)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    getFlightPassengers(context, flightId) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/schedule/flight_seat_map/" + flightId)
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_FLIGHT_PASSENGERS, data)
                })
                .catch(({ response }) => {
                    // context.commit(type.AUTH_LOGOUT);
                });
        });
    },
    indivisualTicketing(context, data) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.post("api/v1/admin/schedule/indivisual-ticketing", data)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    bulkTicketing(context, data) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.post("api/v1/admin/schedule/bulk-ticketing", data)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    assignPassengerToFlight(context, data) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.post("api/v1/admin/schedule/flight/assign-passenger", data)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    removePassengerFromFlight(context, flightPassengerId) {
        ApiService.setHeader();
        return new Promise((resolve, reject) =>{
            ApiService.delete("api/v1/admin/schedule/flight/remove-passenger/" + flightPassengerId)
                .then(({data}) => {
                    context.commit(type.SET_FLIGHT_PASSENGERS, data)
                })
                .catch(({ response }) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
};

export default actions;