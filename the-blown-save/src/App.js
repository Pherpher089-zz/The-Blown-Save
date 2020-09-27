import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route path="/" render={HomePage}/>
      <Footer/>
    </Router>
  );
}

export default App;