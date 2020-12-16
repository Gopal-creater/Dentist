import React, { useEffect } from 'react';
import '../NavBar/NavBar.scss';
import logo from '../../assets/logo_main.png';
import mobilelogo from '../../assets/sinewave-content.png';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
        function openNav() {
            document.getElementById("mySidepanel").style.width = "250px";
          }
    return (
        <div className='NavBar-container'>
            <nav className="navbar-light navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src ={logo} className='NavBar-logo'></img>
                        <img src ={mobilelogo} className='NavBar-mobile-logo'></img>
                    </a>
                    <button className="navbar-toggler order-first" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="me-5 navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact to="/experience" className="nav-link">EXPERIENCE DENTISTRY</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/expert' className='nav-link'>OUR EXPERTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/treatment' className='nav-link'>TREATMENTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/buzz' className='nav-link'>BUZZ</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/about' className='nav-link'>ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/visit' className='nav-link'>SCHEDULE A VISIT</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='Nav-icons'>
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                </div>
            </nav>
        </div>
    )
}
