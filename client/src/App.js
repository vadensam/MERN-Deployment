import React from 'react';
import './App.css';
import Dash from './components/Dash';
import {Router} from '@reach/router'
import Form from './components/Form';
import Display from './components/Display';

function App() {
  return (
    <div className="Container">
      <Router>
        <Dash path="/pirates" default/>
        <Form path="/pirates/new"/>
        <Display path="/pirate/:id"/>
      </Router>
    </div>
  );
}

export default App;
