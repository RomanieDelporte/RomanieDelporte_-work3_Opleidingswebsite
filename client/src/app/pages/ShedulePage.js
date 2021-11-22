import React, { } from 'react';

import {GetShedule} from '../components/shedule';

import './SchedulePage.scss';

import startweek from '../images/schedule/startweek.jpg';
import graduaat from '../images/schedule/graduaat.jpg';

const ShedulePage = ({children}) => {
  return (
    <>
  {(localStorage.token) ?
  <div className="container mb-5 schedule"> 
    <div className="row">
      <div className="col-12 mt-4 schedule__info">
          <h2>De opleiding die u hart sneller doet slaan</h2>
          <p>Zin om onze 2 jarige graduaat opleiding te leren kennen? in deze richting ligt de focus vooral op Front-end development, Full-stack development, Webdesign en CMS theming. Na deze opleiding kan je aan de slag als front-end developer, CMS Themer of full-stack Javascript developer.</p>
      </div>
          <div className=" col-12 col-lg-6 schedule__firstyear">
              <h2>1PGM</h2>
              <p>In het eerste jaar wordt de nadruk vooral gelegd op front-end development. Per kwartaal worden telkens 3 vakken gegeven in kleine groepen van max 25 personen. Werkplekleren wordt in deze tweejarige opleiding ook ondersteund zo zal je bijvoorbeeld in het eerste jaar vooral met gastcolleges, workshops,.. temaken hebben.</p>
          </div>
              <div className="col-12 col-lg-6 schedule__picture">
                  <img src={startweek} alt="programmeren"/>
              </div>
                  <div className=" col-12 row schedule__about">
                  <div class="col-12 col-lg-6 schedule__secondyear">
                      <h2>2PGM</h2>
                      <p>In het tweede jaar wordt de nadruk vooral gelegd op full-stack development en CMS Theming. Werkplekleren in het tweede jaar? In het tweede semester krijgen onze studenten de kans om zich klaartestomen voor het echte werkveld van begin februari tot half mei kunnen ze hun passie en specialiteiten tonen in een digital agency.  </p>
                  </div>
                  <div class="col-12 col-lg-6 schedule__picture">
                  <img src={graduaat} alt="programmeren"/>
                  </div>
              </div>
                  <div className="col-12 mt-4 schedule__lessons">     
                  <h2>Voorbeeldlessenrooster</h2>
                </div>
              </div>  
          <GetShedule/>
      </div>
    :
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Je bent niet ingelogd!</h1>
        </div>
      </div>
    </div>}
    </>
  );
};

export default ShedulePage;