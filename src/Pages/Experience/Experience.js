import React,{ useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import secondImg from '../../assets/2big.png';
import 'swiper/swiper.scss';
import './Experience.scss';
import Footer from '../../Component/Footer/Footer';
import ScheduleVisit from '../../Component/ScheduleVisit/ScheduleVisit';

export default function Experience() {

    useEffect(() => {
        var elem = document.getElementById("swiper-show");
        var top = 0;
        var left = 200;
        elem.style.top = top + 'px';
        elem.style.left = left + 'px';
        var id = setInterval(frame, 5);
        var secondid = null;
        function frame() {
            if (top === 330 && left === 500) {
                elem.textContent = '<  >';
                elem.style.backgroundColor = '#277E82';
                setTimeout(() => {
                    elem.textContent = 'Click & Drag';
                    elem.style.backgroundColor = '#277E82';
                    clearInterval(id);
                    secondid = setInterval(secondframe, 5);
                }, 700);

            }
            else {
                top += 1.5;
                left += 1.5;

                if (top > 50 && left > 50) {
                    elem.textContent = 'Click & drag';
                    elem.style.backgroundColor = '#277E82';
                    elem.style.color = 'white';

                }
                if (top === 330 || left === 500) {
                    top = 330;
                    left = 500;
                }
                elem.style.top = top + 'px';
                elem.style.left = left + 'px';
            }
        }


        function secondframe() {
            if (left === 100) {
                clearInterval(secondid);
                elem.textContent = 'Click & Drag';
            }
            else {

                left -= 1;
                elem.style.top = top + 'px';
                elem.style.left = left + 'px';
            }
        }
    }, [])

    const params = {
        slidesPerView: 'auto',
        spaceBetween: 30,
    }
    return (
        <div className='experience-container'>
            <div className="experience-animation">
                <div className='swiper-container'>
                    <span className='swiper-show' id='swiper-show'></span>
                    <Swiper {...params}>
                        <SwiperSlide><img src={secondImg} alt='firstimage' className='swiperimg' ></img></SwiperSlide>
                        <SwiperSlide><img src={secondImg} alt='secondimage' className='swiperimg'></img></SwiperSlide>
                        <SwiperSlide><img src={secondImg} alt='thirdimage' className='swiperimg'></img></SwiperSlide>
                        <SwiperSlide><img src={secondImg} alt='fourthimage' className='swiperimg'></img></SwiperSlide>
                    </Swiper>
                </div>
                <ScheduleVisit/>
            </div>
            <Footer/>
        </div>
    )
}
