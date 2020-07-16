import React from 'react';
// import logo from './logo.svg';
import './App.css';
import  Vin  from './vin'
import  Vin3  from './vin3'
import { MProvider } from './context/context'

function App(props) {
  return (
    <MProvider>
      <div className="App">
          {/* <h1>Hello World</h1> */}
          <Vin />
          <Vin3 />
      </div>
    </MProvider>
  );
}

export default App;
