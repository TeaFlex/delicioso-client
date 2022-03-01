import { useAuthUser, useSignOut } from 'react-auth-kit';
import { UserI } from '../../services/interfaces';
import './Profile.css';

interface ProfileProps {}

const Profile = (props: ProfileProps): JSX.Element => {

    const auth = useAuthUser();
    const disconnect = useSignOut();
    
    const user = auth() as UserI;

    console.log(user);
    
    return (
        <>
            <div className='block'>
                <div>
                    <h2>{user.username}'s profile</h2>
                    <ul>
                        <li>Last login: {user.last_login ?? "no data"}</li>
                        <li>Staff member: {(user.is_staff)? "Yes": "No"}</li>
                        <li>User id: {user.id}</li>
                    </ul>
                </div>
                <button onClick={disconnect}>Disconnect</button>
            </div>
        </>
    );
}

export default Profile;