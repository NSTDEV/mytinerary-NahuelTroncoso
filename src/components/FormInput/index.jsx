import './style.css';

export default function InputLabel({ labelText, htmlForLabel, inputValue, inputType, inputOnChange }) {
    return (
        <div className="form-section">
            <label className="form-label" htmlFor={htmlForLabel}>{labelText}</label>
            <input className="form-input" type={inputType} id={htmlForLabel} value={inputValue} name={htmlForLabel} onChange={inputOnChange} required />
        </div>
    );
};
