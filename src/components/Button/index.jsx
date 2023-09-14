import './style.css'

export default function Button({ className, iconClassName, id, text, onClick }) {
  return (
    <button className={className} id={id} onClick={onClick}>{<i className={iconClassName}></i>} {text}</button>
  );
};