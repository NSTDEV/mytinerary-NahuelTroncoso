import './style.css'

export default function Anchor({ href, className, id, iconClassName, title, target }) {
  return (
    <a href={href} className={className} id={id} target={target}>{<i className={iconClassName}></i>} {title}</a>
  )
}
