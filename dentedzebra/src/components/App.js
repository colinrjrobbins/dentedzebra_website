import React from 'react';
import { BrowserRouter as Router, 
         Route, 
         Link } from 'react-router-dom';

import './App.css';
import './Pages/Animations.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Process from './Pages/Process';
import Repair from './Pages/Repair';
import Gallery from './Pages/Gallery';
import About from './Pages/About';

const fadeIn = "animate__fadeIn";

function App(props) {
  return (
    <div className="app-container animate__fadeInPage">
      <Header />
      <Router>
        <div className="nav">
          <ul className={fadeIn}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/process">PROCESS</Link></li>
            <li><Link to="/repair">REPAIRS</Link></li>
            <li><Link to="/gallery">GALLERY</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
        <div className="content">
          <Route exact path='/' component={Home} />
          <Route exact path="/process" component={Process} />
          <Route exact path="/repair" component={Repair} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/about" component={About} />
          <Route exact path='/contact' component={Contact} />
        </div>
      </Router>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
