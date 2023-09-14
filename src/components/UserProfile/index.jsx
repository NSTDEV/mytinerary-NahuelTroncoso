import './style.css';
import Button from '../Button';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../store/actions/usersActions';

function UserProfile({ userData, toggleLoginForm }) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <section className="user-profile">
            <img className='user-avatar' src={userData?.picture || './public/assets/user-avatar.png'} alt="User Profile" onClick={toggleLoginForm} />

            <div className='user-info'>
                <p>{userData?.name}</p>
                <p>{userData?.email}</p>
                <p>{userData?.country}</p>
                <p>{userData?.roll}</p>
            </div>

            <div className='user-buttons'>
                <Button text={"Edit profile"} />
                <Button onClick={handleLogout} text={"Logout"} />
            </div>
        </section>
    );
};

export default UserProfile;
