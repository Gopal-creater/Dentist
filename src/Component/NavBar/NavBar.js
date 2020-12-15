import React from 'react';
import '../NavBar/NavBar.scss';
import logo from '../../assets/logo_main.png';
import mobilelogo from '../../assets/sinewave-content.png';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='NavBar-container'>
            <nav class="navbar-dark navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src ={logo} className='NavBar-logo'></img>
                        <img src ={mobilelogo} className='NavBar-mobile-logo'></img>
                    </a>
                    <button style={{color:'white'}} class="navbar-toggler order-first" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon" style={{color:'white'}}></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="me-5 navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink exact to="/experience" className="nav-link">EXPERIENCE DENTISTRY</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to='/expert' className='nav-link'>OUR EXPERTS</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to='/treatment' className='nav-link'>TREATMENTS</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to='/buzz' className='nav-link'>BUZZ</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to='/about' className='nav-link'>ABOUT</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink exact to='/visit' className='nav-link'>SCHEDULE A VISIT</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='Nav-icons'>
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <i class="fa fa-envelope-o" aria-hidden="true"></i>
                        <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                    </div>
                </div>
            </nav>
        </div>
    )
}
