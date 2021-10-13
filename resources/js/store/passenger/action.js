import ApiService from "@/api/api.service";
import type from './type';

const actions = {
    initPassengers(context) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/passengers")
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_ALL_PASSENGERS, data)
                })
                .catch(({ response }) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    getPassengerById(context, passengerId) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/passenger/" + passengerId)
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_PASSENGER, data)
                })
                .catch(({ response }) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    getFlightPassengerById(context, data) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/passenger/" + data.passengerId + "/flight/" + data.flightId)
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_FLIGHT_PASSENGER, data)
                })
                .catch(({ response }) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    createPassenger(context, passengerInfo) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.post("api/v1/admin/passenger/create", passengerInfo)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    updatePassenger(context, passengerInfo) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.put("api/v1/admin/passenger/update", passengerInfo)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    deletePassenger(context, passengerId) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.delete("api/v1/admin/passenger/delete/" + passengerId)
                .then(({data}) => {
                    context.commit(type.SET_ALL_PASSENGERS, data)
                })
                .catch(({ response }) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    getPassengerFlights(context, passengerId) {
        ApiService.setHeader();
        return new Promise((resolve) =>{
            ApiService.get("api/v1/admin/passenger/" + passengerId + "/flights")
                .then(({data}) => {
                    console.log(data);
                    context.commit(type.SET_PASSENGER_FLIGHTS, data)
                })
                .catch(({ response }) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
    passengerSeatSave(context, data) {
        ApiService.setHeader();
        return new Promise((resolve, reject) => {
            ApiService.put("api/v1/admin/passenger/seat/save", data)
                .then((data) => {
                    resolve(data);
                })
                .catch(({response, status}) => {
                    console.log(response);
                    reject(response);
                });
        });
    },
};

export default actions;