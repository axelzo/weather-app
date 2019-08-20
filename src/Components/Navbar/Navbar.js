import React from 'react';

import profile from '../../img/profile.jpg';
import chat from '../../img/speech-bubble.png';
import email from '../../img/email.png';
import notification from '../../img/notification.png';
import './Navbar.css';


function Navbar() {

  return (

    <nav className="navbar">

      <div className="navbar__items">
        <button class="btn-menu"><i class="fa fa-bars"></i></button>
      <div className="navbar__item"></div>
      </div>

      <div className="navbar__items navbar__items--center">
      <div className="navbar__item">
          <img src={chat} alt="Profile" className="profile" />
        </div>
        <div className="navbar__item">
          <img src={notification} alt="Profile" className="profile" />
        </div>
        <div className="navbar__item">
          <img src={email} alt="Profile" className="profile" />
        </div>
      </div>

      <div className="navbar__items navbar__items--right">
        <h3 className="navbar__item" >Hi, Axel </h3><i className="fa   fa-sort-down"></i>
        <div className="navbar__item">
          <img src={profile} alt="Profile" className="profile" />
        </div>
      </div>

    </nav>

  );
}

export default Navbar;