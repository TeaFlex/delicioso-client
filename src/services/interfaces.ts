export interface UserI {
    id: number;
    username: string;
    last_login: string;
    is_staff: boolean;
    [key: string]: any;
}

export interface TableI {
    id: number;
    seats: number;
}

export type ErrorPayload = {[key: string]: string[]};

export interface LoginRequest {
    username?: string;
    password?: string;
}

export interface BookRequest {
    booked_for?: string;
    booked_seats?: number;
}

export interface BookingsPayload {
    id?: number;
    booked_at?: string;
    booked_for?: string;
    booked_by?: UserI;
    booked_seats?: number;
    booked_table?: TableI[];
}