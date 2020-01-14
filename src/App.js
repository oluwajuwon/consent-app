import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import CollectedConsents from './pages/CollectedConsents';
import GiveConsent from './pages/GiveConsent';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import SideBarMenu from './components/SideBarMenu';
import LandingPage from './pages/LandingPage';

import store from './store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Header />
        <Grid container spacing={1}>
          <Grid item xs>
            <SideBarMenu />
          </Grid>
          <Grid item xs={10}>
            <Switch>
              <Route exact component={LandingPage} path='/' />
              <Route component={CollectedConsents} path='/consents' />
              <Route component={GiveConsent} path='/give-consent' />
              <Route component={NotFoundPage} />
            </Switch>
          </Grid>
        </Grid>
      </div>
    </Provider>
  );
}

export default App;
