import { AxiosError } from 'axios';
import { useState } from 'react';
import { useAuthUser } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/form/Form';
import { BookRequest, ErrorPayload, UserI } from '../../services/interfaces';
import requestApi from '../../services/request';
import './Book.css';

interface BookProps {}

const Book = (props: BookProps): JSX.Element => {

    const [errors, setErrors] = useState<ErrorPayload>();
    const [book, setBook] = useState<BookRequest>({
        booked_for: undefined,
        booked_seats: 0,
    });
    const navigate = useNavigate();
    const auth = useAuthUser();
    
    const user = auth() as UserI;

    const fieldHandler = (e: any) => {
        const o: any = {};
        o[e.target.name] = (e.target.value as string).trim();
        setBook({...book, ...o});
    };

    const bookHandler = async () => {
        try {
            const res = await requestApi('booking/book', "POST", book);
            navigate('/bookings');
        } catch (error) {
            const res = (error as AxiosError).response;
            setErrors(res?.data);
        }
        
    };

    return (
        <div id='book' className='block center'>
            <Form 
                title="Book a table"
                preventDefault={true}
                onSubmit={bookHandler}
                errors={errors}
                >
                <label htmlFor="booked_for">To book for:</label>
                <input type="datetime-local" name="booked_for" onChange={fieldHandler}/>
                <label htmlFor="booked_seats">Number of seats to book:</label>
                <input type="number" name="booked_seats" onChange={fieldHandler}/>
            </Form>
        </div>
    );
};

export default Book;