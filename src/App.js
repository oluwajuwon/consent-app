import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CollectedConsents from './pages/CollectedConsents';
import GiveConsent from './pages/GiveConsent';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={CollectedConsents} path='/consents' />
        <Route component={GiveConsent} path='/give-consent' />
      </Switch>
    </div>
  );
}

export default App;
