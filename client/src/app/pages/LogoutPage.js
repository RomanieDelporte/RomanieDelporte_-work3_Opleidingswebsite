import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import * as Routes from '../routes';

const LogoutPage = () => {
  useEffect(() => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userId');
    window.localStorage.removeItem('admin');
  }, []);

  return(
    <Redirect to={Routes.LOGIN} />
  );
};

export default LogoutPage;