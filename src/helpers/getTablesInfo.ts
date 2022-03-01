import { TableI } from "../services/interfaces";
import requestApi from "../services/request";

export default class TablesInfos {
    static async getAvailable() {
        return (await requestApi('table/available', 'GET')).data as TableI[];
    }

    static async getTotalSeats() {
        return (await requestApi('table/seats', 'GET')).data as {count: number};
    }

    static async getCount() {
        return (await requestApi('table/count', 'GET')).data as {count: number};
    }

    static async getUnavailable() {
        return (await requestApi('table/unavailable', 'GET')).data as TableI[];
    }
}