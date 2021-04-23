import React from 'react';
import { BrowserRouter as Router,
         Switch, 
         Route, 
         Link } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

function App(props) {
  return (
    <div className="App">
      <Header />
      <div>
        <Router>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />

          <Switch>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
