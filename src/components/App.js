import PropTypes from 'prop-types';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import HomePage from './Home';

export const LightContext = React.createContext();

function App() {
  const [status, toggleLight] = React.useState(false);

  return (
    <LightContext.Provider value={{
      status,
      toggleFn: () => toggleLight(!status)
    }}>
      <div className={
        "md-main" +
        `${status ? '' : ' md--dark'} `
      }>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </LightContext.Provider>
  );
}

App.propTypes = {
  children: PropTypes.element,
};

export default hot(module)(App);
