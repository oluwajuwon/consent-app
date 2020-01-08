import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Grid from '@material-ui/core/Grid';
import CollectedConsents from './pages/CollectedConsents';
import GiveConsent from './pages/GiveConsent';
import NotFoundPage from './pages/NotFoundPage';
import SideBarMenu from './components/SideBarMenu';

function App() {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={12} sm={2}>
          <SideBarMenu />
        </Grid>
        <Grid item xs={12} sm={10}>
          <Switch>
            <Route component={CollectedConsents} path='/consents' />
            <Route component={GiveConsent} path='/give-consent' />
            <Route component={NotFoundPage} />
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
