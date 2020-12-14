import React from 'react';
import '../NavBar/NavBar.scss';
import logo from '../../assets/logo_main.png';
import {NavLink} from 'react-router-dom';

export default function NavBar() {
    return (
        <div className='NavBar-container'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src ={logo} className='NavBar-logo'></img></a>
                    <button class="navbar-toggler navbar-toggler-left order-first" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                        aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa fa-search" aria-hidden="true"></i>
                        <i class="fa fa-envelope-o me-auto" aria-hidden="true"></i>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-5 mb-2 mb-lg-0 ms-auto">
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
                        <ul class="navbar-nav  nav-flex-icons me-5">
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light">
                                    <i class="fa fa-search" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link waves-effect waves-light">
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link waves-effect waves-light">
                                    <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
