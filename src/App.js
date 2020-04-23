import React from 'react';
import './App.scss';
import './Variables.scss'
import Header from "./Components/Hero/Header"
import Hero from './Components/Hero/Hero'
import Movies from "./Components/Movies/Movies"
import Footer from "./Components/Footer/Footer"


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Movies/>
      <Footer/>
    </div>
  );
}

export default App;
