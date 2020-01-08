import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CollectedConsents from './pages/CollectedConsents';
import GiveConsent from './pages/GiveConsent';
import NotFoundPage from './pages/NotFoundPage';
import SideBarMenu from './components/SideBarMenu';

function App() {
  return (
    <div className="App">
      <SideBarMenu />
      <Switch>
        <Route component={CollectedConsents} path='/consents' />
        <Route component={GiveConsent} path='/give-consent' />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
