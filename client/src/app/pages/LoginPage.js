import React, { Fragment } from 'react';
import LoginAdmin from '../admin/login';

import './ContactPage.scss';

import zetel from '../images/home/zetel.jpg';

const RegisterPage = ({children}) => {
  return (
    <Fragment>
      <div className="container p-5 register">
        <div className="row">
          <div className="col-12">
            <h1 className="text-3xl mb-2">Login</h1>
            <p className="text-base">Om alle info uit dit platform te kunnen bekijken moet je inloggen! Vul dit formulier hieronder in om u in te loggen.</p>
          </div>
          <div className="col-12 col-lg-7 d-flex">
            <LoginAdmin />
          </div>
          <div className="col-12 col-lg-5">
            <div className="info_section__image mt-3">
              <img src={zetel} alt="Sfeerfoto" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterPage;