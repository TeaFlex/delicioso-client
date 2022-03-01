export interface UserI {
    id: number;
    username: string;
    last_login: Date;
    is_staff: boolean;
    [key: string]: any;
}

export type ErrorPayload = {[key: string]: string[]};

export interface LoginRequest {
    username?: string;
    password?: string;
}
