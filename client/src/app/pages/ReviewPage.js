import React, { } from 'react';

import {GetReview} from '../components/reviews';


import './ReviewPage.scss';
const ReviewPage = ({children}) => {
  return (
    <>
  {(localStorage.token) ?
  <div className="container mb-5 review">         
  <div className="row review__column">

        <div className="col-12 mt-5 review__students">
            <h2>Over onze boeiende richting</h2>
        </div>
            <div className="col-12 col-lg-6 review__video">
                <iframe className="mt-5 col-12" width="560" height="315" src="https://www.youtube.com/embed/oZE6MQnM0cQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="col-12 col-lg-6 review__text">
                <p>In dit filmpje zal je onze tweedejaarsstudent Jaimy Van Gyseghem horen praten over onze opleiding. Hij zal toekomstige studenten een beeld geven over onze opleiding</p>
            </div>
        </div> 
        <h2>Enkele reviews over onze studenten</h2> 
          <GetReview/>
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

export default ReviewPage;