import './style.css';
import Button from '../Button/index';
import Input from '../FormInput/index';

import { registerUser, loginUser } from '../../store/actions/usersActions';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Form() {
  const dispatch = useDispatch();
  const formRef = useRef();
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const [isRegistering, setIsRegistering] = useState(false);
  const [shouldShowSuccessMessage, setShouldShowSuccessMessage] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(true);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    lastname: '',
    picture: '',
    country: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistering) {
      dispatch(registerUser(formData))
        .then(() => {
          setShouldShowSuccessMessage(true);
          setIsFormOpen(false);
        })
        .catch(() => {
          setShouldShowSuccessMessage(false);
        });
    } else {
      const { email, password } = formData;

      dispatch(loginUser({ email, password }))
        .then(() => {
          setShouldShowSuccessMessage(true);
          setIsFormOpen(false);
        })
        .catch(() => {
          setShouldShowSuccessMessage(false);
        });
    }
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section className={`form-container ${isFormOpen ? '' : 'toggle-view'}`} ref={formRef}>
      {isFormOpen ? (
        <>
          <h2>{isRegistering ? 'Register' : 'Login'}</h2>
          {shouldShowSuccessMessage ? (
            <div>
              {isRegistering
                ? 'Successfully signed In!'
                : 'Successfully logedn In!'}
              <button id='a' onClick={handleCloseForm}>Close Form</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className='form'>
              {isRegistering && (
                <>
                  <Input htmlForLabel="name" labelText={"Name:"} inputType={"text"} value={formData.name} inputOnChange={handleInputChange} />

                  <Input htmlForLabel="lastname" labelText={"Last Name:"} inputType={"text"} value={formData.lastname} inputOnChange={handleInputChange} />

                  <Input htmlForLabel="picture" labelText={"Picture:"} inputType={"text"} value={formData.picture} inputOnChange={handleInputChange} />

                  <Input htmlForLabel="country" labelText={"Country:"} inputType={"select"} value={formData.country} inputOnChange={handleInputChange} />
                </>
              )}
              <Input htmlForLabel="email" labelText={"Email:"} inputType={"email"} value={formData.email} inputOnChange={handleInputChange} />

              <Input htmlForLabel="password" labelText={"Password:"} inputType={"password"} value={formData.password} inputOnChange={handleInputChange} />

              <Button type="submit" text={isRegistering ? 'Sign In' : 'Login'} />
            </form>
          )}
        </>
      ) : (
        <p className="closed-message">{isLoggedIn ? 'Successfully Loged.' : 'Error login in.'}</p>
      )}

      <p>
        {isRegistering
          ? "Do you have an account?"
          : "Don't have an account?"}
        <Button onClick={() => setIsRegistering(!isRegistering)} text={isRegistering ? 'Login' : 'Sing In'} />
      </p>
    </section>
  );
}

export default Form;
