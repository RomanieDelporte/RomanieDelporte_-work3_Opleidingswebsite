import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './ContactPage.scss';

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9tYW5pZWRlbHAiLCJhIjoiY2tpa2FkdjRhMDYzZTJ5bGI3NTJvOHlmMSJ9.JaG0cn3yEguqhzZd6ApT_A';


const ContactPage = ({children}) => {
  const mapContainerRef = useRef(null);
  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/romaniedelp/ckikg1lnk0wxt17uj4llderd1',
      center: [4.900221, 50.966715],
      zoom: 7.5,
    });

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    // clean up on unmount
    return () => map.remove();

    
  }, []); 

  

  
  return (
    <>
    {(localStorage.token) ?
      <div> 
        <div className="container p-5">
          <div className="row">
            <div className="col-12">
              <h1>Contact</h1>
            </div>
          </div>
         
         <div className="row">
           <div className="col-12 col-lg-7">
            <form className="container__form">
                  <input type="text" id="fname" name="firstname" placeholder="Voornaam"></input>
                  <input type="text" id="email" name="email" placeholder="Email"></input>
                  <textarea id="message" name="message" placeholder="Bericht"></textarea>
                  <div className="container__button flex items-center justify-between">
                  <button type="submit">Verstuur</button>
                  </div>
              </form>
           </div>
           <div className="col-12 col-lg-5">
            <div className="container__box">
                <div className="container__contact">
                    <h2>Contact</h2>
                    <p>Industrieweg 236</p>
                    <p>9000 GENT</p>
                    <p>luk.bouters@arteveldehs.be</p>
                    <p>T 09 234 86 00</p>
                </div>
              </div> 
           </div>
         </div>
        </div>

        <div className="container-fluid">
          
        </div>

        <div className="map-container" ref={mapContainerRef} />
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

export default ContactPage;

