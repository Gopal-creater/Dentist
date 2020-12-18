import React from 'react';
import './Treatment.scss';
import NavBar from '../../Component/NavBar/NavBar';
import CarouselShow3 from '../../Component/Carousel_show3/CarouselShow3';
import CarouselShow4 from '../../Component/Carousel_show4/CarouselShow4';
import Footer from '../../Component/Footer/Footer'
import ScheduleVisit from '../../Component/ScheduleVisit/ScheduleVisit'

export default function Treatment(){
    return(
        <div>
            <div className="treament_navbar">
                <NavBar style={{ color: 'black' }} />
            </div>
            <div className="treatment_treatments">
                    <h1 className="treatments text-center" style={{ fontFamily: 'si-ui-bold' }}>TREATMENTS</h1>
                </div>
            <div className="treament_carousel">
               <CarouselShow4 />
            </div>
            <div className='treatment_schedule'>
            <ScheduleVisit/>
            <Footer/>
        </div>
        </div>
    );
}