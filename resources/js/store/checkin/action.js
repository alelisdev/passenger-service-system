import ApiService from "@/api/api.service";
import type from './type';

const actions = {
    initCheckin(context, reference) {
        ApiService.setHeader();
        return new Promise((resolve, reject) =>{
            ApiService.get("api/v1/passenger/checkin/init/" + reference)
                .then(({ data }) => {
                    context.commit(type.SET_ALL_INFO, data)
                })
                .catch(({ response }) => {
                    reject(response)
                });
        });
    },
    passengerTypeSave(context, data) {
        ApiService.setHeader();
        return new Promise((resolve, reject) =>{
            ApiService.put("api/v1/passenger/type/save", data)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch(({ response }) => {
                    reject(response)
                });
        });
    },
    emailBoardingPass(context, data) {
        ApiService.setHeader();
        return new Promise((resolve, reject) =>{
            ApiService.post("api/v1/passenger/email", data)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch(({ response }) => {
                    reject(response)
                });
        });
    },
    getQrCode(context, id) {
        ApiService.setHeader();
        return new Promise((resolve, reject) =>{
            ApiService.get("api/v1/passenger/qrcode/" + id)
                .then(({ data }) => {
                    resolve(data)
                })
                .catch(({ response }) => {
                    reject(response)
                });
        });
    }
};

export default actions;