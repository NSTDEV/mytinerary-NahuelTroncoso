import './style.css'

export default function index({ className, iconClassName, id, text }) {
  return (
    <button className={className} id={id}>{<i className={iconClassName}></i>} {text}</button>
  )
}
