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
        <div className="user-profile">
            <img className='user-avatar' src={userData?.picture || './public/assets/user-avatar.png'} alt="User Profile" onClick={toggleLoginForm} />
            <p>{userData?.name}</p>
            <p>{userData?.email}</p>
            <p>{userData?.country}</p>
            <p>{userData?.roll}</p>
            <Button text={"Edit profile"} />
            <Button onClick={handleLogout} text={"Logout"} />
        </div>
    );
};

export default UserProfile;
