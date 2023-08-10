import './style.css'
import { Link as Anchor } from 'react-router-dom'

export default function Footer() {

  //Anchor list
  let socialMedia = [
    { to: "www.facebook.com", className: "nav-button", iconClassName: "fa-brands fa-facebook-f", target: "_blank", title: "" },
    { to: "www.instagram.com", className: "nav-button", iconClassName: "fa-brands fa-instagram", target: "_blank", title: "" },
    { to: "www.linkedin.com", className: "nav-button", iconClassName: "fa-brands fa-linkedin-in", target: "_blank", title: "" }
  ];

  let navBar = [
    { to: "/", className: "nav-button", title: "Home" },
    { to: "/cities", className: "nav-button", title: "Cities" },
    { to: "#Login", className: "nav-button", title: "Login" }
  ];

  let contact = [
    { to: "#Contact", className: "nav-button form", iconClassName: "fa-solid fa-envelope", target: "_blank", title: "" },
    { to: "#Contact", className: "nav-button form", iconClassName: "fa-solid fa-phone", target: "_blank", title: "" }
  ];

  return (
    <>
      <footer id='footer-container'>
        <section id='footer'>
          <div className='sector'>
            <h4>Social</h4>
            <nav id='footer-links'>
              {socialMedia.map(({ to, className, iconClassName, target, title }) =>
                <Anchor key={title} to={to} className={className} target={target}>
                  <i className={iconClassName} /> {title}
                </Anchor>)}
            </nav>
          </div>

          <div className='sector'>
            <h4>Contact</h4>
            {contact.map(({ to, className, iconClassName, target, title }) =>
              <Anchor key={title} to={to} className={className} target={target}>
                <i className={iconClassName} /> {title}
              </Anchor>)}
          </div>

          <div className='sector'>
            <h4>Menu</h4>
            {navBar.map(({ to, className, title }) =>
              <Anchor key={title} to={to} className={className}>{title}</Anchor>)}
          </div>

        </section>
      </footer>
    </>
  )
}
