import React from 'react';
import './header.scss'
import logo from '../../../assets/logo_main.png';

function Header() {
  return (
    <div className="header_image">
      <img src={logo} />
    </div>
  );
}

export default Header;
