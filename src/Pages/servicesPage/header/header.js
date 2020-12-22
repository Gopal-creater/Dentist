import React, { useState, useEffect } from 'react';
import './header.scss'
import logo from '../../../assets/logo_main.png';
import ToggleBar from './ToggleBar/ToggleBar'

function Header() {
  return (
    <div>
      <div className="header_image">
        <img src={logo} />
      </div>
      <ToggleBar />
    </div>
  );
}

export default Header;
