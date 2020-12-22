import React, { useEffect } from "react";
import "../NavBar/NavBar.scss";
import logo from "../../assets/logo_main.png";
import mobilelogo from "../../assets/sinewave-content.png";
import { NavLink } from "react-router-dom";
import $ from "jquery";

export default function NavBar() {
  useEffect(() => {
    $(document).ready(function () {
      $(".navbar-toggler,.overlay").on("click", function () {
        $(".mobile-menu,.overlay").toggleClass("open");
      });
    });
  });

  function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }

  //   document.querySelector(".mobile-menu").toggleAttribute("open");
  //   toggleButton.addEventListener("click", function (e) {
  //     alert("Toggle button clicked");
  //   });

  //   const clickHandler = () => {
  //     document.querySelector(".mobile-menu").classList.toggle("open");
  //   };

  //   document.querySelector(".overlay").classList("open");

  //   const closeSidenavHandler = () => {
  //     document.querySelector(".overlay").classList.toggle("open");
  //   };

  return (
    <div className="NavBar-container">
      {/* <nav className="navbar-light navbar navbar-expand-lg fixed-top navar-top"> */}
      <nav className="navbar-light navbar navbar-expand-lg sticky-top navar-top">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            // className="navbar-brand"
            href="#"
          >
            <img src={logo} className="NavBar-logo"></img>
            <img src={mobilelogo} className="NavBar-mobile-logo"></img>
          </a>
          <button
            // onClick={clickHandler}
            className="navbar-toggler mt-4 mt-lg-0 order-first"
            type="button"
            // data-toggle="collapse"
            // aria-expanded="false"
            // data-bs-toggle="collapse"
            // data-bs-target="#navbarTogglerDemo02"
            // aria-controls="navbarTogglerDemo02"
            // aria-expanded="false"
            // aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className="collapse navbar-collapse d-flex flex-column flex-lg-row
             flex-xl-row justify-content-lg-end  mobile-menu"
            // className="collapse navbar-collapse   mobile-menu"
            id="navbarTogglerDemo02"
          >
            <ul className="me-5 navbar-nav mb-2 mb-lg-0">
              <li className="nav-item p-5 p-lg-0">
                <NavLink exact to="/experience" className="nav-link">
                  EXPERIENCE DENTISTRY
                </NavLink>
              </li>
              <li className="nav-item p-5 p-lg-0">
                <NavLink exact to="/expert" className="nav-link">
                  OUR EXPERTS
                </NavLink>
              </li>
              <li className="nav-item p-5 p-lg-0">
                <NavLink exact to="/treatment" className="nav-link">
                  TREATMENTS
                </NavLink>
              </li>
              <li className="nav-item p-5 p-lg-0">
                <NavLink exact to="/buzz" className="nav-link">
                  BUZZ
                </NavLink>
              </li>
              <li className="nav-item p-5 p-lg-0">
                <NavLink exact to="/about" className="nav-link">
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item p-5 p-lg-0">
                <NavLink exact to="/visit" className="nav-link">
                  SCHEDULE A VISIT
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="Nav-icons">
            <i className="fa fa-search" aria-hidden="true"></i>
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          </div>
        </div>
        <div class="overlay"></div>
      </nav>
    </div>
  );
}
