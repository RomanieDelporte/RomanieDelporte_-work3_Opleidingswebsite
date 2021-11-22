import React, { Fragment } from 'react';

import { Header, ThemedExample } from '../components/general';
import Footer from '../components/general/footer';


// inhoud elke pagina
// footer moet er nog bij
const BaseLayout = ({children}) => (
  <div id="page-container">
    <div id="content-wrap">
      <Header />
      <main className="app-main py-5">
        {children}      
      </main>
    </div>
    {(localStorage.token) ?
    <ThemedExample />
    :
    ''
    }
    <Footer />
  </div>
);
export default BaseLayout;