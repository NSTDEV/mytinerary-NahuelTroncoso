import './style.css';
import Button from '../Button/index';
import Form from '../Form/index';
import UserProfile from '../UserProfile/index';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/usersActions';

export default function NavBar() {
  const navRef = useRef();
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const userData = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  const showNavbar = () => {
    navRef.current.classList.toggle("toggle-menu");
  };

  const toggleLoginForm = () => {
    setIsLoginFormVisible(!isLoginFormVisible);
  };

  const handleLogin = async (email, password) => {
    try {
      localStorage.removeItem('token');
      await dispatch(loginUser({ email, password }));
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  let data = [
    { to: "/", className: "nav-button", title: "Home" },
    { to: "/cities", className: "nav-button", iconClassName: "fa fa-mountain-city fa-lg", title: "Cities" }
  ];

  return (
    <>
      <header className='header-container'>
        <div id='nav-container'>
          <img id='nav-logo' src="../public/assets/MyTineraryIcon.png" alt="MyTinerary Logo" />

          <nav id="nav-list" ref={navRef}>
            {data.map(({ to, title, className, iconClassName }) =>
              <Link key={title} to={to} className={className}>
                <i className={iconClassName} /> {title}
              </Link>)}

            {isLoggedIn ?
              (<UserProfile userData={userData} />) :
              (<Button className={'nav-button'} iconClassName={'fa fa-user'} id={'login'} text={'Login'} onClick={toggleLoginForm} />)
            }

            <Button className={'toggle-button'} iconClassName={'fa-solid fa-x'} id={'close-nav'} onClick={showNavbar} />
          </nav>

          <Button className={'toggle-button'} iconClassName={'fa-solid fa-bars'} onClick={showNavbar} />
        </div>
      </header>

      {isLoginFormVisible && <Form onLogin={handleLogin} />}
    </>
  );
};