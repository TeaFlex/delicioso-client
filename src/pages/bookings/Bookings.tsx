import { useAuthUser } from "react-auth-kit";
import { UserI } from "../../services/interfaces";
import './Bookings.css';

interface BookingsProps {}

const Bookings = (props: BookingsProps): JSX.Element => {

    const auth = useAuthUser();
    const user = auth() as UserI;

    return (
        <div className='block'>
            <h2>Your bookings</h2>
        </div>
    );
};

export default Bookings;