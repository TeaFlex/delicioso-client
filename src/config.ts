import urljoin from "url-join";

export const api_url = "http://localhost:8000/api/v1/";

export const api_auth = urljoin(api_url, "token/");

export const api_refresh = urljoin(api_auth, "refresh/");

export const token_expiration = 10; // in minutes

export const refresh_token_expiration = 40; // in minutes