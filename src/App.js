import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';

function App() {
  return (
    <div className="App"> 
     <ClickCounter  name = "Arif"/> 
     <HoverCounter name ="Arif"/>  </div>
  );
}

export default App;
