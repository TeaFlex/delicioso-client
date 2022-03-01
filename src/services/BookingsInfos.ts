import { BookingsPayload } from "./interfaces";
import requestApi from "./request";

export default class BookingsInfos {
    static async getActiveBookings() {
        return (await requestApi('booking/active')).data as BookingsPayload[];
    }

    static async getAllBookings() {
        return (await requestApi('booking')).data as BookingsPayload[];
    }
}