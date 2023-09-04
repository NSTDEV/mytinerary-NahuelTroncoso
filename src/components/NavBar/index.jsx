import './style.css'
import Button from '../Button/index'
import { Link } from 'react-router-dom'
import { useRef } from 'react';

export default function NavBar() {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("toggle-menu");
  }

  let data = [
    { to: "/", className: "nav-button", title: "Home" },
    { to: "/cities", className: "nav-button", iconClassName: "fa fa-mountain-city fa-lg", title: " Cities" }
  ];

  return (
    <>
      <header>
        <div id='nav-container'>
          <img id='nav-logo' src="../public/assets/MyTineraryIcon.png" alt="MyTinerary Logo" />

          <nav id="nav-list" ref={navRef}>
            {data.map(({ to, title, className, iconClassName }) =>
              <Link key={title} to={to} className={className}>
                <i className={iconClassName} /> {title}
              </Link>)}

            <Button className={'nav-button'} iconClassName={'fa fa-user'} id={'login'} text={'Login'} />

            <Button className={'toggle-button'} iconClassName={'fa-solid fa-x'} id={'close-nav'} onClick={showNavbar} />
          </nav>

          <Button className={'toggle-button'} iconClassName={'fa-solid fa-bars'} onClick={showNavbar} />
        </div>
      </header>
    </>
  );
};