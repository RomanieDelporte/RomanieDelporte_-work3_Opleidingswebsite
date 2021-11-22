import React, { useState, useEffect, Fragment } from 'react';
import { gql, useMutation } from '@apollo/client';
import {Redirect} from 'react-router-dom';

import * as Routes from '../routes';


const REGISTER = gql`
  mutation register($email: String!, $password: String!, $firstname: String!, $lastname: String!) {
    register(student: { email: $email, password: $password, firstname: $firstname, lastname: $lastname }) {
      id
    }
  }
`;

const Register =()  =>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [register, { data }] = useMutation(REGISTER);
  const [redirect, setRedirect] = useState('');

  useEffect(() => {
    if(data) { console.log(data);
        setRedirect(!redirect);
      }

  }, [data, redirect]);

  if(redirect) {
        return <Redirect to={Routes.LOGIN}/>
      } else {
      
  return (
    <Fragment>
      <form className="container__form flex-column w-100 align-self-center" onSubmit={e => { e.preventDefault(); register({ variables: { email: email, password: password, firstname: firstname, lastname: lastname }}); }}>      
          <input type="text" placeholder="Voornaam" onChange={e => setFirstname(e.target.value)} />
          <input type="text" placeholder="Achternaam" onChange={e => setLastname(e.target.value)} />
          <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Wachtwoord" onChange={e => setPassword(e.target.value)} />
          <button className="button_registers" type="submit">Registreer</button>
      </form>
    </Fragment>
  )
      }
};
export default Register;