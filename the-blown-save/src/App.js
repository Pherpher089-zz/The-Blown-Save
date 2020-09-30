import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import Footer from './components/Footer.js';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js'
import ContactPage from './components/ContactPage.js'

function App() {
  return (
    <Router>
      <Navbar/>
      <Route exact path="/" render={HomePage}/>
      <Route path='/about' render={AboutPage} />
      <Route path="/contact" render={ContactPage} />
      <Footer/>
    </Router>
  );
}

export default App;