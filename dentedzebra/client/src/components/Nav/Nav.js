import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';

import './Nav.css';
import '../Pages/Animations.css';
import '../Pages/StyleGeneral.css';
import HamburgerMenu from '../../images/logo/hamburger.png';

const fadeIn = "animate__fadeIn";

const Nav = () => {
  let currentShow;
  if (window.matchMedia('(max-width: 889px)').matches){
    currentShow = false;
    $('#navi').css({
      display: "none"
    })
  }
  else{
    currentShow = true;
    $('#navi').css({
      display:"flex"
    })
  }

  function showMenu (){
    if (currentShow === true){
      currentShow = false;
      $('#navi').css({
        display: "none"
      })
    }
    else if(currentShow === false){
      currentShow = true;
      $('#navi').css({
        display:"flex"
      })
    }
  }


  return (
        <div className="nav">
          <img className="hamburger animate__fadeIn" alt="hamburger" src={HamburgerMenu} onClick={showMenu}/>
          <ul id="navi" className={fadeIn}>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/process">PROCESS</Link></li>
            <li><Link to="/repair">REPAIRS</Link></li>
            <li><Link to="/gallery">GALLERY</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/contact">CONTACT</Link></li>
          </ul>
        </div>
    );
};

export default Nav;