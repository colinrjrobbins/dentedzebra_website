import React from 'react';
import { BrowserRouter as Router, 
         Route } from 'react-router-dom';

import './App.css';
import './Pages/Animations.css';

import Header from './Header/Header';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Process from './Pages/Process';
import Repair from './Pages/Repair';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import WhatAreWe from './Pages/WhatAreWe';
import Team from './Team/Team';
import AustinCraven from './Team/AustinCraven';
import AshleyDennison from './Team/AshleyDennison';

function App() {
  return (
    <div className="app-container animate__fadeInPage">
      <Header />
      <Router>
        <Nav />
        <div className="content">
          <Route exact path='/' component={Home} />
          <Route path="/whatarewe" component={WhatAreWe} />
          <Route path="/process" component={Process} />
          <Route path="/repair" component={Repair} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/team' component={Team} />
          <Route path='/austincraven' component={AustinCraven} />
          <Route path='/ashleydennison' component={AshleyDennison} />
        </div>
      </Router>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
