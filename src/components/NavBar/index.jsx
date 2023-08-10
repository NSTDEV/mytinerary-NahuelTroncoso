import './style.css'
import Button from '../Button/index'
import { Link as Anchor } from 'react-router-dom'

export default function NavBar() {

  let data = [
    { to: "/", className: "nav-button", title: "Home"},
    { to: "/cities", className: "nav-button", iconClassName: "fa fa-mountain-city fa-lg", title: " Cities"}
  ]

  return (
    <>
      <header>
        <div id='menu'>
          <img id='nav-icon' src="./assets/MyTineraryIcon.png" alt="MyTinerary Icon" />

          <nav id="nav-list">
            {data.map(({to, title, className, iconClassName}) =>
            <Anchor key={title} to={to} className={className}>
             <i className={iconClassName} /> {title}
           </Anchor>)}
            
            <Button className={'nav-button'} iconClassName={'fa fa-user'} id={'login'} text={'Login'} />
          </nav>
        </div>
      </header>
    </>
  )
}
