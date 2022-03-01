import { useEffect, useState } from "react";
import { useAuthUser } from "react-auth-kit";
import BookingsInfos from "../../services/BookingsInfos";
import { BookingsPayload, UserI } from "../../services/interfaces";
import './Bookings.css';

interface BookingsProps {}

const Bookings = (props: BookingsProps): JSX.Element => {

    const auth = useAuthUser();
    const user = auth() as UserI;

    const [bookings, setBookings] = useState<BookingsPayload[]>([]);
    const [oldBookings, setOldBookings] = useState<BookingsPayload[]>([]);

    useEffect(() => {
        (async () => {
            const v = await BookingsInfos.getActiveBookings();
            setBookings(v);
            const o = await BookingsInfos.getAllBookings();
            setOldBookings(o);
        })();
    }, []);

    return (
        <>
            <div className='block'>
                <h2>Your active booking</h2>
                {bookings.map((v, i) => {                
                    return (
                        <div key={i} className="flex-col">
                            <span>Booking n°{v.id}</span>
                            <ul>
                                <li>Seats booked: {v.booked_seats}</li>
                                <li>Booked for: {new Date(v.booked_for!).toLocaleString()}</li>
                                <li>Booked at: {new Date(v.booked_at!).toLocaleString()}</li>
                                <li>{v.booked_table?.length} table(s) used.</li>
                            </ul>
                            <button>Cancel</button>
                        </div>
                    )
                })}
                {bookings.length == 0 &&
                    <div>No active booking.</div>
                }
            </div>
            <div className="block">
                <h2>All of your bookings</h2>
                <div className="flex-col">
                {oldBookings.map((v, i) => {                
                    return (
                        <div key={i} className="section">
                            <span>Booking n°{v.id}</span>
                            <ul>
                                <li>Seats booked: {v.booked_seats}</li>
                                <li>Booked for: {new Date(v.booked_for!).toLocaleString()}</li>
                                <li>Booked at: {new Date(v.booked_at!).toLocaleString()}</li>
                                <li>{v.booked_table?.length} table(s) used.</li>
                            </ul>
                        </div>
                    )
                })}
                {oldBookings.length == 0 &&
                    <div>No booking.</div>
                }
                </div>
            </div>
        </>
    );
};

export default Bookings;