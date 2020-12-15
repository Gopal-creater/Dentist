import React, { useState, useEffect } from 'react';
import './HeadingMouseover_mobile.scss';
import heading1 from '../../assets/mobile_text.png';
import heading2 from '../../assets/mobile_text_2.png';
import Ring from '../../assets/Group 679.png';
import Parallax from 'react-rellax';

export default function HeadingMouseoverMobile() {
    useEffect(() => {
        heading();
    })


    function heading() {
        // tslint:disable-next-line:no-unused-expression
        // tslint:disable-next-line:prefer-const
        const svgElement1 = document.getElementById('animation_heading_mobile');
        const maskedElement1 = document.querySelector('#mask-circle_heading_mobile');
        const circleFeedback1 = document.querySelector('#circle-shadow_heading_mobile');
        const svgPoint = svgElement1.createSVGPoint();
        // tslint:disable-next-line:typedef
        function cursorPoint(e, svg) {
            svgPoint.x = e.clientX;
            svgPoint.y = e.clientY;
            return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
        }
        // tslint:disable-next-line:typedef
        function update(svgCoords) {
            maskedElement1.setAttribute('cx', svgCoords.x);
            maskedElement1.setAttribute('cy', svgCoords.y);
            circleFeedback1.setAttribute('cx', svgCoords.x);
            circleFeedback1.setAttribute('cy', svgCoords.y);
        }
        // tslint:disable-next-line:typedef
        // tslint:disable-next-line:only-arrow-functions
        window.addEventListener('mousemove', (e) => {
            const scrol = window.pageYOffset + e.clientY;
            if (scrol > 130 && scrol < 200) {
                update(cursorPoint(e, svgElement1));
                document.getElementById('circle-shadow_heading_mobile').style.display = 'block';
                document.getElementById('mask-circle_heading_mobile').style.display = 'block';
            } else {
                document.getElementById('circle-shadow_heading_mobile').style.display = 'none';
                document.getElementById('mask-circle_heading_mobile').style.display = 'none';
            }


        }, false);
        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.targetTouches[0];
            if (touch) {
                update(cursorPoint(touch, svgElement1));
            }
        }, false);
    }

    return (
        <div>
            <Parallax speed={-4}>
                <svg className="heading_image_mobile" id="animation_heading_mobile">
                    <rect width="100%" height="100%" fill="yellow"
                        fillOpacity="0"
                    />
                    <image xlinkHref={heading1} width="380" height="380" />
                </svg>
                <svg className="heading_image_mobile" id="animation_heading_mobile">
                    <defs>
                        <clipPath id="mask1_mobile">
                            <circle id="mask-circle_heading_mobile" cx="50%" cy="50%" r="5%" style={{ fill: '#ffffff' }} />
                        </clipPath>
                        <filter id="this_image_heading_mobile" x="0%" y="0%" width="100%" height="100%">
                            <feImage cx="50%" cy="50%" r="6%" xlinkHref={Ring} />
                        </filter>
                    </defs>
                    <g clipPath="url(#mask1_mobile)">
                        <rect width="100%" height="100%" fill="#175C64" />
                        <image xlinkHref={heading2} width="380" height="380" />
                    </g>
                    <circle id="circle-shadow_heading_mobile" cx="50%" cy="50%" r="6%" filter="url(#this_image_heading_mobile)" />
                </svg>
            </Parallax>
        </div>
    );
}