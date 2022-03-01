import axios, { Method } from "axios";
import { api_url } from "../config";

export default async function requestApi(uri: string, method: Method = 'GET', data?: any) {
    return axios.request({
        method,
        url: [api_url, uri].join('/'),
        data,
        headers: {
            "Authorization": "Bearer "+(localStorage.getItem("_auth") ?? ""),
        },
    });
}

export async function requestApiWithoutToken(uri: string, method: Method = 'GET', data?: any) {
    return axios.request({
        method,
        url: [api_url, uri].join('/'),
        data,
    });
}