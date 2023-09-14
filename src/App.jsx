import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import { useDispatch } from 'react-redux';
import usersActions from './store/actions/usersActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.authenticateUser())
  });

  return (
    <RouterProvider router={router} />
  );
};

export default App;