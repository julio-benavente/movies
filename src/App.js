import React from 'react';
import './App.scss';
import './Variables.scss'
import Header from "./Components/Header"
import Hero from './Components/Hero'
import Movies from "./Components/Movies"


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Movies/>

    </div>
  );
}

export default App;
