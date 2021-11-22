import React from 'react';
import { RouteWithLayout } from './utilities';
import { BaseLayout } from './layouts';

import './App.scss';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomePage, ContactPage, RegisterPage, CovidPage, DocentPage, LoginPage, LogoutPage, ShedulePage, ReviewPage, DiscordPage} from './pages';

import * as Routes from './routes';



function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <RouteWithLayout exact path={Routes.LANDING} layout={ BaseLayout } component={ HomePage }/>
              <RouteWithLayout exact path={Routes.COVID} layout={BaseLayout} component={ CovidPage } />
              <RouteWithLayout exact path={Routes.CONTACT} layout={ BaseLayout } component={ ContactPage }/>
              <RouteWithLayout exact path={Routes.REGISTER} layout={ BaseLayout } component={ RegisterPage }/>
              <RouteWithLayout exact path={Routes.LOGIN} layout={ BaseLayout } component={ LoginPage }/>
              <RouteWithLayout exact path={Routes.DOCENT} layout={ BaseLayout } component={ DocentPage }/>
              <RouteWithLayout exact path={Routes.SHEDULE} layout={ BaseLayout } component={ ShedulePage }/>
              <RouteWithLayout exact path={Routes.REVIEW} layout={ BaseLayout } component={ ReviewPage }/>
              <RouteWithLayout exact path={Routes.DISCORD} layout={ BaseLayout } component={ DiscordPage }/>
              <RouteWithLayout exact path={Routes.LOGOUT} layout={ BaseLayout } component={ LogoutPage }/>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
