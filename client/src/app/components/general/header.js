import './header.scss';
import React, {Fragment} from 'react';
import { NavLink } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";

import * as Routes from '../../routes';

const Header = () => {

    return (
        <header className="p-3">
           <nav className="navbar navbar-expand-lg navbar-light">
               <div className="container">
                    <span className="navbar-brand"><NavLink to={Routes.HOME} className="nav-link">PGM Promotion</NavLink></span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-100 d-flex justify-content-end">
                            {(!localStorage.token) ? 
                                <Fragment> 
                                <li className="nav-item">
                                    <NavLink to={Routes.LOGIN} className="nav-link">Login</NavLink>
                                </li> 
                                <li className="nav-item">
                                    <NavLink to={Routes.REGISTER} className="nav-link">Registreren</NavLink>
                                </li>
                                </Fragment>
                            : 
                                <Fragment> 
                                <li className="nav-item">
                                    <span className="nav-link greeting">{`Hey, ${localStorage.getItem('firstname')}`}</span>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={Routes.SHEDULE} className="nav-link">Over ons</NavLink>
                                </li> 
                                <li className="nav-item">
                                    <NavLink to={Routes.DOCENT} className="nav-link">Docenten</NavLink>
                                </li> 
                                <li className="nav-item">
                                    <NavLink to={Routes.REVIEW} className="nav-link">Reviews</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={Routes.DISCORD} className="nav-link">Discordbot</NavLink>
                                </li>
                                <li className="nav-item">  
                                    <NavLink to={Routes.CONTACT} className="nav-link">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={Routes.LOGOUT} className="nav-link"><FiLogOut color={'#7E58C5'} /></NavLink>
                                </li>
                                </Fragment>
                            }
                        </ul>
                    </div>
               </div>
            </nav>
        </header>
    )
}

export default Header;