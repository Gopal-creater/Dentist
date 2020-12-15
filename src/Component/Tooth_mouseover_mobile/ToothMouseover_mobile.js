import React, { useState, useEffect } from 'react';
import './ToothMouseover_mobile.scss';
import Tooth from '../../assets/6.png';
import Blue_Tooth from '../../assets/5.png';
import Ring from '../../assets/Group 679.png';
import Parallax from 'react-rellax';

export default function ToothMouseoverMobile() {
    useEffect(() => {
        tooth();
    })
    function tooth() {
        // tslint:disable-next-line:no-unused-expression
        // tslint:disable-next-line:prefer-const

        const svgElement = document.getElementById('tooth_mobile');
        const maskedElement = document.querySelector('#mask-circle_mobile');
        const circleFeedback = document.querySelector('#circle-shadow_mobile');
        const svgPoint = svgElement.createSVGPoint();
        // tslint:disable-next-line:typedef
        function cursorPoint(e, svg) {
            svgPoint.x = e.clientX;
            svgPoint.y = e.clientY;
            return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
        }
        // tslint:disable-next-line:typedef
        function update(svgCoords) {
            maskedElement.setAttribute('cx', svgCoords.x);
            maskedElement.setAttribute('cy', svgCoords.y);
            circleFeedback.setAttribute('cx', svgCoords.x);
            circleFeedback.setAttribute('cy', svgCoords.y);
        }
        // tslint:disable-next-line:typedef
        // tslint:disable-next-line:only-arrow-functions
        window.addEventListener('mousemove', (e) => {
            const scro = window.pageYOffset + e.clientY;
            console.log(scro);

            if (scro > 280 && scro < 730) {
                update(cursorPoint(e, svgElement));
                document.getElementById('circle-shadow_mobile').style.display = 'block';
                document.getElementById('mask-circle_mobile').style.display = 'block';
            } else {
                document.getElementById('circle-shadow_mobile').style.display = 'none';
                document.getElementById('mask-circle_mobile').style.display = 'none';
            }

        }, false);
        document.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.targetTouches[0];
            if (touch) {
                update(cursorPoint(touch, svgElement));
            }
        }, false);
    }

    return (
        <div style={{ alignContent: 'center' }} >
            <Parallax speed={4}>
                <svg id="tooth_mobile">
                    {/* <rect width="100%" height="100%" fill="pink" 
                        fillOpacity="0"
                         /> */}
                    <image x='10' xlinkHref={Tooth} width="340" height="340" />
                </svg>

                <svg id="tooth_mobile">
                    <defs>
                        <clipPath id="mask_mobile">
                            <circle id="mask-circle_mobile" cx="50%" cy="50%" r="12%" style={{ fill: '#ffffff' }} />
                        </clipPath>
                        <filter id="this_image_mobile" x="0%" y="0%" width="100%" height="100%">
                            <feImage cx="50%" cy="50%" r="14%" xlinkHref={Ring} />
                        </filter>
                    </defs>
                    <g clipPath="url(#mask_mobile)">
                        {/* <rect width="100%" height="100%" fill="#272730" /> */}
                        <image xlinkHref={Blue_Tooth} width="340" height="340" />
                    </g>

                    <circle id="circle-shadow_mobile" cx="50%" cy="50%" r="14%" filter='url(#this_image_mobile)' style={{ stroke: '#fff', strokeWidth: '5' }} />
                </svg>
            </Parallax>
        </div>
    );
}