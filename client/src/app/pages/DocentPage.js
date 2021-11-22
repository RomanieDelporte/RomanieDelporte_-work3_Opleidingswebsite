import React, { } from 'react';

import {GetDocent} from '../components/docenten';

const DocentPage = ({children}) => {
  return (
    <>
    {(localStorage.token) ?
    <div className="container mb-5"> 
      <div className="row">
        <div className=" col-12 mt-4 docent_info">     
            <h2>Onze docenten</h2>
        </div>
      </div>
        <GetDocent/>
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

export default DocentPage;
