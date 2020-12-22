import React, { useState, useEffect } from "react";
import "./ToothMouseover.scss";
import Tooth from "../../assets/6.png";
import Blue_Tooth from "../../assets/5.png";
import Ring from "../../assets/Group 679.png";
import Parallax from "react-rellax";

export default function ToothMouseover() {
  useEffect(() => {
    tooth();
  });
  function tooth() {
    // tslint:disable-next-line:no-unused-expression
    // tslint:disable-next-line:prefer-const

    const svgElement = document.getElementById("tooth");
    const maskedElement = document.querySelector("#mask-circle");
    const circleFeedback = document.querySelector("#circle-shadow");
    const svgPoint = svgElement.createSVGPoint();
    // tslint:disable-next-line:typedef
    function cursorPoint(e, svg) {
      svgPoint.x = e.clientX;
      svgPoint.y = e.clientY;
      return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
    }
    // tslint:disable-next-line:typedef
    function update(svgCoords) {
      maskedElement.setAttribute("cx", svgCoords.x);
      maskedElement.setAttribute("cy", svgCoords.y);
      circleFeedback.setAttribute("cx", svgCoords.x);
      circleFeedback.setAttribute("cy", svgCoords.y);
    }
    // tslint:disable-next-line:typedef
    // tslint:disable-next-line:only-arrow-functions
    window.addEventListener(
      "mousemove",
      (e) => {
        const scro = window.pageYOffset + e.clientY;
        const scroX = window.pageYOffset + e.clientX;
        // console.log(scroX);

        if (scro > 500) {
          update(cursorPoint(e, svgElement));
          document.getElementById("circle-shadow").style.display = "block";
          document.getElementById("mask-circle").style.display = "block";
        } else {
          document.getElementById("circle-shadow").style.display = "none";
          document.getElementById("mask-circle").style.display = "none";
        }
      },
      false
    );
    document.addEventListener(
      "touchmove",
      (e) => {
        e.preventDefault();
        const touch = e.targetTouches[0];
        if (touch) {
          update(cursorPoint(touch, svgElement));
        }
      },
      false
    );
  }

  return (
    <div>
      <Parallax speed={4}>
        <svg id="tooth">
          {/* <rect width="100%" height="100%" fill="pink" 
                        fillOpacity="0"
                         /> */}
          {/* <image x="400" xlinkHref={Tooth} width="600" height="600" /> */}
          <image x="10%" y="4%" xlinkHref={Tooth} width="85%" height="85%" />
        </svg>

        <svg id="tooth">
          <defs>
            <clipPath id="mask">
              <circle
                id="mask-circle"
                cx="50%"
                cy="50%"
                r="12%"
                style={{ fill: "#ffffff" }}
              />
            </clipPath>
            <filter id="this_image" x="0%" y="0%" width="100%" height="100%">
              <feImage cx="50%" cy="50%" r="14%" xlinkHref={Ring} />
            </filter>
          </defs>
          <g clipPath="url(#mask)">
            {/* <rect width="100%" height="100%" fill="#272730" /> */}
            {/* <image x="400" xlinkHref={Blue_Tooth} width="600" height="600" /> */}
            <image
              x="10%"
              y="4%"
              xlinkHref={Blue_Tooth}
              width="85%"
              height="85%"
            />
          </g>

          <circle
            id="circle-shadow"
            cx="50%"
            cy="50%"
            r="14%"
            filter="url(#this_image)"
            style={{ stroke: "#fff", strokeWidth: "5" }}
          />
        </svg>
      </Parallax>
    </div>
  );
}
