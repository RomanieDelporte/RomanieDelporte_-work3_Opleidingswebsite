import React, { Fragment } from 'react';
import Admin from '../admin';

import './ContactPage.scss';

import students from '../images/register/students.jpg'

const RegisterPage = ({children}) => {
  return (
    <Fragment>
      <div className="container p-5 register">
        <div className="row">
          <div className="col-12">
            <h1 className="text-3xl mb-2">Registreren</h1>
            <p className="text-base">Om alle info uit dit platform te kunnen bekijken heb je een account nodig! Vul dit formulier hieronder in om er eentje aan te maken.</p>
          </div>
          <div className="col-12 col-lg-7 d-flex">
            <Admin />
          </div>
          <div className="col-12 col-lg-5 d-flex">
            <div className="info_section__image align-self-center">
              <img src={students} alt="Sfeerfoto" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default RegisterPage;