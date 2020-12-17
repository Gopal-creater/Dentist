import React from 'react';
import ourexpertimg from '../../assets/CER-Press-image-CEREC-Ortho-SW-2.0-1@2x.png';
import Footer from '../../Component/Footer/Footer';
import NavBar from '../../Component/NavBar/NavBar';
import ScheduleVisit from '../../Component/ScheduleVisit/ScheduleVisit';
import Header from '../servicesPage/header/header';
import './OurExpert.scss';

export default function OurExpert() {
    return (
        <div>
            <div className='ourexpert-header'>
                <Header />
            </div>
            <div className='ourexpert-navbar'>
                <NavBar/>
            </div>
            <div className='ourexpert-container'>
                <div className='ourexpert-front-back'>
                    <div className='ourexpert-image-container'>
                        <img src={ourexpertimg} alt='Experts Image' className='ourexpert-image'></img>
                    </div>
                </div>
                <div className='ourexpert-text-container'>
                    <h1 className='ourexpert-text-heading'>Get a ceramic restoration in a<br /> single visit.</h1><br />
                    <p className='ourexpert-text-description'>Long gone are the days where you needed to make multiple visits to the dentist to restore your teeth.<br />
                 Cerec 3D is here to simplify all of your dental problems.<br /><br />
                 CEREC or Cerec (Chairside Economical Restoration of Esthetic Ceramics, or CEramic REConstruction) is a method of<br />
                 CAD/CAM dentistry developed by W. Mörmann and M. Brandestini at the University of Zurich in 1980 for creating dental<br />
                 restorations. Using CAD/CAM (computer-aided design and computer-aided manufacturing), CEREC aids dentists to<br />
                 design, produce, and insert individual metal-free ceramic restorations directly at the point of treatment (chairside) in a<br />
                 single appointment.<br /><br />
                 The dentist designs a virtual restoration (onlay, inlay, crown, or bridge) without taking impressions and combined with a<br />
                 milling unit, is able to build the actual restoration while you are still in the chair.<br /><br />
                 While it might sound like a fancy ‘gadget’, CEREC is actually much more. And in the hands of a skilled and experienced<br />
                 CEREC® dentist, it is a powerful tool that propels us into a new way of experiencing modern dentistry which can be<br />
                 efficient, aesthetically beautiful and in many cases cost effective compared to other dental treatments.
                 </p>
                </div>
                <ScheduleVisit />
                <Footer />
            </div>
        </div>
    )
}
