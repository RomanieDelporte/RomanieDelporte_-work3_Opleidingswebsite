import React, { Fragment } from 'react';
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import * as Routes from '../routes';
import './HomePage.scss';

import zetel from '../images/home/zetel.jpg';
import dieter from '../images/home/dieter.jpg';

const HomePage = ({children}) => {
  return (
      <Fragment>
        <div className="hero d-flex my-5">
          <div className="container-fluid h-100">
            <div className="row h-100">
              <div className="col-5 h-100 px-0 d-flex justify-content-end align-items-center">
                <span className="hero__title">Graduaat Prog</span>
              </div>
              <div className="col-7 h-100 px-0">
                <div className="hero__right h-100 d-flex align-items-center">
                  <span className="hero__title">rammeren</span>
                </div>
              </div>
            </div>
          </div> 
        </div>

        <section className="container mb-5">
          <div className="row info_section">
            <div className="col-12 col-lg-7 pr-lg-5 info_section__text d-flex flex-column justify-content-center">
              <h2 className="pb-1">Welkom bij PGM!</h2>
              <p>Graduaat Programmeren is dit iets voor u? tuurlijk wel! Bij graduaat programmeren leer je de nieuwste technieken, programmeertalen, frameworks,.. bent u nog niet 100% zeker over je keuze voor deze richting? neem dan zeker een kijkje op onze site. 
              En de vonk zal overslaan! </p>
            </div>
            <div className="col-12 col-lg-5 info_section__image pt-3 pt-lg-0">
              <img src={zetel} alt="Sfeerfoto" />
            </div>
          </div>
        </section>

        <section className="container mb-5">
          <div className="row info_section">
            <div className="col-12 col-lg-7 order-1 order-lg-2 pl-lg-5 info_section__text d-flex flex-column justify-content-center">
              <h2 className="pb-1">Waarom deze website?</h2>
              <p>Deze website is ontworpen door 2 studenten uit het tweede jaar graduaat programmeren om toekomstige studenten uitleg en ondersteuning te bieden in hun keuze voor deze richting. Je kan hier alle uitleg vinden of vragen stellen aan onze chatbot. Is er iets niet duidelijk? twijfel niet om contact op te nemen!</p>
            </div>
            <div className="col-12 col-lg-5 order-2 order-lg-1 info_section__image pt-3 pt-lg-0">
              <img src={dieter} alt="Sfeerfoto" />
            </div>
          </div>
        </section>

        <section className="covid_info d-flex align-items-center mt-5">
          <div className="container d-flex flex-column align-items-center justify-content-center flex-lg-row justify-content-lg-between align-items-lg-center">
            <h2 className="text-5xl mb-5 mb-lg-0">Covid-19</h2>
            <div className="covid_info_button">
            <NavLink to={Routes.COVID} className="covid_info_guide px-8 py-3" activeClassName="active">Bekijk de richtlijnen</NavLink>                
              <FaArrowRight/> 
            </div>
          </div>
        </section>
      </Fragment>
  );
};

export default HomePage;
