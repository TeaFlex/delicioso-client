import urljoin from "url-join";
import { BookingsPayload } from "./interfaces";
import requestApi from "./request";

export default class BookingsInfos {
    static async getActiveBookings() {
        return (await requestApi('booking/active')).data as BookingsPayload[];
    }

    static async getAllBookings() {
        return (await requestApi('booking')).data as BookingsPayload[];
    }

    static async cancelBooking(id: number) {
        return (await requestApi(urljoin('booking', id.toString() ,'cancel'), "DELETE")).data as any;
    }
}