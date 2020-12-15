import React from 'react';
import Footer from '../../Component/Footer/Footer';
import ScheduleVisit from '../../Component/ScheduleVisit/ScheduleVisit';
import './Visit.scss';

export default function Visit() {
    return (
        <div>
            <div className="onevisit">
            <div className="row" style={{overflow:'hidden'}}>
                <div className="col-md-6 text1 col-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
                    <h1>The first in Karnataka to implement One-Visit Dentistry</h1>
                    <p>We are one of the first in the nation to adopt one-day dentistry through CEREC (Chairside Economical Restoration of Esthetic Ceramics, the ultimate in digital dentistry technology.</p>

                </div>
                <div className="col-md-6 col-12">
                    <div className="background" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="100"></div>
                    <div className="image_1" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="600">
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
