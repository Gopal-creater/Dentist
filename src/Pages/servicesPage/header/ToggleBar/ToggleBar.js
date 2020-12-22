import React, { useState, useEffect } from 'react';
import './ToggleBar.scss';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import $ from 'jquery'


export default function ToggleBar() {
    useEffect(() => {
        $(document).ready(function () {
            $(".toggle").click(function () {
                $("aside").toggleClass("close")
            });
        });

        // click outside
        $(document).mouseup(function (e) {
            var container = $("aside");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $("aside").removeClass("close")
            }
        });

    })
    return (
        <div className="togglebar">
            <div class="container">

                <aside>
                    <button className="toggle">|||</button>
                    <h1>Menu</h1>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/">Experience Dentistry</a>
                        <a href="/">Our Experts</a>
                        <a href="/">Treatments</a>
                        <a href="/">Buzz</a>
                        <a href="/">About</a>
                        <a href="/">Schedule A Visit</a>
                    </nav>
                </aside>

            </div>
        </div>
    )
}
