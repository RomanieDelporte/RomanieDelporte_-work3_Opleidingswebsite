import './footer.scss';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import * as Routes from '../../routes';

const Footer = () => {
    
    return (
        <footer id="footer">
           <div className="container p-5">
               <div className="row">
                    <div className="col-12 col-lg-4 footer_info mb-3">
                            <h2>PGM Promotion</h2>
                            <p className="p-0 m-0">Industrieweg 236</p>
                            <p className="p-0 m-0">9000 Gent - België</p>
                        </div>
                        <div className="col-12 col-lg-4 footer_navigatie mb-3">
                            <h2>Navigatie</h2>
                            <nav>
                                <ul className="footer_menu">
                                    <li className="nav-item">
                                        <NavLink to={Routes.SHEDULE} className="nav-link text-black hover:text-black p-0">Over ons</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={Routes.DOCENT} className="nav-link text-black hover:text-black p-0">Docenten</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={Routes.REVIEW} className="nav-link text-black hover:text-black p-0">Reviews</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to={Routes.CONTACT} className="nav-link text-black hover:text-black p-0">Contact</NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-4 footer_optin mb-3">
                        <h2>Social Media</h2>
                        <div className="footer_links">
                        <a href="https://www.facebook.com/GraduaatProgrammeren.Arteveldehogeschool/" target="blank"><p>Facebook <FaArrowRight/></p></a>
                            <a href="https://www.linkedin.com/company/graduaat-programmeren/" target="blank"><p>linkedln <FaArrowRight/></p></a>
                        </div>
                    </div>
                </div>
                <div className="footer_made">
                    <p>© Schoolproject made by Romanie and Mathieu. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;