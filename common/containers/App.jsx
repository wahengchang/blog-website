import React from 'react';
import { Button } from 'material-ui';
import logo from '../assets/logo.svg';
import '../assets/App.css';

const App = () =>
  (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <Button variant="raised" color="primary">
        Primary
      </Button>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );

export default App;
