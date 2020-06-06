import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
  return <div>
          Hello from App.js updated {name} 
          <br />
          Age={age-13}
          <br />
          <Hello firstName={name} ></Hello>
         </div>
}
/*
  This is another method of above functions to show in the webpage
  function App(props) {
  return <div>
          Hello from App.js updated {props.name} 
          <br />
          Age={props.age-12}
         </div>
}*/

export default App;
