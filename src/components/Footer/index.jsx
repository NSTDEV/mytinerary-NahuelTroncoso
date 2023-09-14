import './style.css'
import { Link as Anchor } from 'react-router-dom'

export default function Footer() {

  let socialMedia = [
    { to: "www.facebook.com", className: "nav-button", iconClassName: "fa-brands fa-facebook-f", target: "_blank", title: "" },
    { to: "www.instagram.com", className: "nav-button", iconClassName: "fa-brands fa-instagram", target: "_blank", title: "" },
    { to: "www.linkedin.com", className: "nav-button", iconClassName: "fa-brands fa-linkedin-in", target: "_blank", title: "" }
  ];

  let contact = [
    { to: "#Contact", className: "nav-button form", iconClassName: "fa-solid fa-envelope", target: "_blank", title: "" },
    { to: "#Contact", className: "nav-button form", iconClassName: "fa-solid fa-phone", target: "_blank", title: "" }
  ];

  return (
    <>
      <footer id='footer'>
        <section id='footer-container'>

          <div className='footer-sector'>
            <h4>Social Media</h4>
            <nav id='footer-links'>
              {socialMedia.map(({ to, className, iconClassName, target, title }, index) =>
                <Anchor key={index} to={to} className={className} target={target}>
                  <i className={iconClassName} /> {title}
                </Anchor>)}
            </nav>
          </div>

          <div className='footer-sector'>
            <h4>Contact us!</h4>
            {contact.map(({ to, className, iconClassName, target, title }, index) =>
              <Anchor key={index} to={to} className={className} target={target}>
                <i className={iconClassName} /> {title}
              </Anchor>)}
          </div>

        </section>
      </footer>
    </>
  )
}