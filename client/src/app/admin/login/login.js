import React, { useState, useEffect, Fragment } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { Redirect } from 'react-router-dom';

import * as Routes from '../../routes';

const LOGIN = gql `

    query login($email: String!, $password: String!) {
        login(student: {email: $email, password: $password}) {
            studentId
            token
            isStudent
            firstname
        }
    }
`;


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword ] = useState('');
    const [login, { data }] = useLazyQuery(LOGIN);
    const [redirect, setRedirect] = useState('');

    useEffect(() => {
        console.log(data)
        if(data) {
            window.localStorage.setItem('token', data.login.token);
            window.localStorage.setItem('studentId', data.login.studentId);
            window.localStorage.setItem('isStudent', data.login.isStudent);
            window.localStorage.setItem('firstname', data.login.firstname);
            setRedirect(!redirect)
        }
    }, [data, redirect])

      if(redirect) {
          return <Redirect to={Routes.HOME}/>
      } else {
        return (
            <Fragment>
                <form className="container__form flex-column w-100 align-self-center" onSubmit={e => { e.preventDefault(); login({ variables: { email: email, password: password }}); }}>      
                    <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Wachtwoord" onChange={e => setPassword(e.target.value)} />
                    <button className="button_registers" type="submit">Login</button>
                </form>
            </Fragment>
        )
      }
}

export default Login;