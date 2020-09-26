import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from "./components/Navbar.js";
import Footer from './components/Footer.js';

function App() {
  return (
    <Router>
      <Navbar/>
      <Route
      <Footer/>
    </Router>
  );
}

export default App;