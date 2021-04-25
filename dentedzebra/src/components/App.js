import React from 'react';
import { BrowserRouter as Router, 
         Route, 
         Link } from 'react-router-dom';

import './App.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="nav">
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
        <div className="content">
          <Route exact path='/' component={Home} />
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
