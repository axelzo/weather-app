import React from 'react';

import profile from '../../img/profile.jpg';
import menu from '../../img/menu.svg';
import chat from '../../img/speech-bubble.svg';
import mail from '../../img/message.svg';
import notification from '../../img/notifications-bell-button.svg';
import './Navbar.css';


function Navbar() {

  return (

    <nav className="navbar">

      <div className="navbar__items">
        <div className=" navbar__menu">☰</div>
        <div className="navbar__item"></div>
      </div>

      <div className="navbar__items navbar__items--center">
        <div className="navbar__item">
          <img src={profile} alt="Profile" className="profile" />
        </div>
        <div className="navbar__item">
          <img src={profile} alt="Profile" className="profile" />
        </div>
        <div className="navbar__item">
          <img src={profile} alt="Profile" className="profile" />
        </div>
      </div>

      <div className="navbar__items navbar__items--right">
        <h1 className="navbar__item" >HOLA AXEL </h1>
        <div className="navbar__item"> 
          <img src={profile} alt="Profile" className="profile" />
        </div>
      </div>

    </nav>

  );
}

export default Navbar;