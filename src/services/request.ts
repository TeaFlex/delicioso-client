import axios, { Method } from "axios";
import urljoin from "url-join";
import { api_url } from "../config";

export default async function requestApi(uri: string, method: Method = 'GET', data?: any) {
    return axios.request({
        method,
        url: urljoin(api_url, uri),
        data,
        headers: {
            "Authorization": "Bearer "+(localStorage.getItem("_auth") ?? ""),
        },
    });
}

export async function requestApiWithoutToken(uri: string, method: Method = 'GET', data?: any) {
    return axios.request({
        method,
        url: urljoin(api_url, uri),
        data,
    });
}