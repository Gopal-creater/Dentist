import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import Scaling from '../../assets/Scaling.png';
import Root_Canal from '../../assets/root canal.png';
import Paediatric_Dentistry from '../../assets/Paediatric Dentistry.png';
import Oral_Maxillofacial_Surgery from '../../assets/Oral.png';
import Laser_curetage from '../../assets/Laser curetage.png';
import Gum_infection from '../../assets/Gum infection.png';
import Flap_surgery from '../../assets/Flap surgery.png';
import dental_implants from '../../assets/dental implants.png';
import Dental_Bridges from '../../assets/Dental Bridges.png';
import Crowns from '../../assets/Crowns.png';
import Complete_Denture from '../../assets/Complete Denture.png';
import ceramic_brames from '../../assets/ceramic brames.png';
import Bleeding_gums from '../../assets/Bleeding gums.png';
import X_rays from '../../assets/X rays 1.png';
import Veneer from '../../assets/Veneer.png';
import Tooth_removal from '../../assets/Tooth removal.png';
import Tooth_Jewellery from '../../assets/Tooth Jewellery.png';
import Self_ligating_braces from '../../assets/Self-ligating braces.png';
import './Visit.scss';
import Parallax from 'react-rellax';
import Testimonials from './testimonials/testimonial';
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';


export default function Visit() {
    useEffect(() => {
        AOS.init();
      }, []);
      
    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrows next_button" onClick={onClick} style={{ marginTop: '-300px', marginLeft: '10px' }}>
                <button style={{ outline: 'none' }} type="submit" className="previous2 round2">
                    &#8250;
              </button>
                {/* <h1>Next</h1> */}
            </div>
        );
    };

    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrows prev_button" onClick={onClick} style={{ marginTop: '-300px', marginLeft: '10px' }}>
                <button style={{ outline: 'none' }} type="submit" className="previous1 round1">
                    &#8249;
              </button>
                {/* <h1>Prev</h1> */}
            </div>
        );
    };
    const images1 = [{ pics: Scaling, heading: 'Scaling' },
    { pics: Root_Canal, heading: 'Root Canal' },
    { pics: Paediatric_Dentistry, heading: 'Paediatric Dentistry' },
    { pics: Laser_curetage, heading: 'Laser Curetage' },
    { pics: Gum_infection, heading: 'Gum Infection' },
    { pics: Flap_surgery, heading: 'Flap Surgery' },
    { pics: dental_implants, heading: 'Dental Implants' },
    ]

    const images = [{ pics: Scaling, heading: 'Scaling' }, { pics: Root_Canal, heading: 'Root Canal' }, Paediatric_Dentistry,
        Laser_curetage,
        Gum_infection,
        Flap_surgery,
        dental_implants,
        Dental_Bridges,
        Crowns,
        Complete_Denture,
        ceramic_brames,
        Bleeding_gums,
        X_rays,
        Veneer,
        Tooth_removal,
        Tooth_Jewellery,
        Self_ligating_braces,
        Oral_Maxillofacial_Surgery,];
    const data = [{ heading: 'Scaling' },
    { heading: 'Root Canal' },
    { heading: 'Paediatric Dentistry' },
    { heading: 'Laser Curetage' },
    { heading: 'Gum Infection' },
    { heading: 'Flap Surgery' },
    { heading: 'Dental Implants' },
    { heading: 'Dental Bridges' },
    { heading: 'Crowns' },
    { heading: 'Complete Denture' },
    { heading: 'Ceramic Brames' },
    { heading: 'Bleeding Gums' },
    { heading: 'X rays' },
    { heading: 'Veneer' },
    { heading: 'Tooth Removal' },
    { heading: 'Tooth Jewellery' },
    { heading: 'Self-ligating Braces' },
    { heading: 'Oral & Maxillofacial Surgery' }]
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 4,
        centerMode: false,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };
    return (
        <div>
            <div className="onevisit">
                <div className="row">
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

                <div className="carousel_onevisit col-12">
                    <Slider {...settings}>
                        {images1.map((img, idx) => (
                            <div className={idx === imageIndex ? "slides activeSlides" : "slides"}>
                                <div className="patch">
                                    <h1>{img.heading}</h1>
                                    <p>from traditional braces to invisible alignes get the best alignment</p>
                                    <button className="btn btn-primary" style={{ fontFamily: 'si-ui-light', letterSpacing: '2px' }}>Explore</button>
                                </div>
                                <img className="pics" src={img.pics} />
                            </div>
                        ))}
                    </Slider>

                </div>
                <div class="three-dots">
                    <span class="second"></span>
                    <span class="second"></span>
                    <span class="first"></span>
                    <span class="first"></span>
                    <span class="first"></span>
                    <span class="first"></span>
                    <span class="first"></span>
                    <span class="first"></span>

                </div>
                <Parallax speed={4}>
                    <div className="treatment">
                        <h1 className="treatments text-center" style={{ fontFamily: 'si-ui-bold' }}>TREATMENTS</h1>
                    </div>
                </Parallax>
                <div className="row">
                    <div className="col-md-6 col-12 ">
                        <div className="background_2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="100"></div>
                        <div className="image_2" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600">
                        </div>
                    </div>
                    <div className="col-md-6 col-12 text2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
                        <h1>Meet<br /> Dr. Prashant Patil</h1>
                        <p>Read about the story of the one-of a kind, world-class dentistry in Karnataka and the man behind it.</p>
                        <button className="btn btn-primary" style={{ fontFamily: 'si-ui-light', letterSpacing: '2px' }}>Explore</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-12 text3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
                        <h1>Dental Tourism.</h1>
                        <h3>A paid vacation + your dental procedure</h3><br></br>
                        <p>Combine your paid vacation with your dental procedure schedule to save money or to get more value out of investment..</p>
                        <button className="btn btn-primary" style={{ fontFamily: 'si-ui-light', letterSpacing: '2px' }}>Explore</button>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="image_3" data-aos="fade-left" data-aos-duration="1000"></div>
                    </div>
                </div>
                <div className="counter_desktop" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000" >
                    <div className="row text-center" >
                        <div className="col">
                            <h1 style={{ fontFamily: 'Si-ui-bold' }}>
                                <CountUp start={1} end={21} redraw={true} duration={5}>
                                    {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                    )}
                                </CountUp>
                            </h1>
                            <p>Years of Experience</p>
                        </div>
                        <div className="col">
                            <h1>311+</h1>
                            <p>Happy patients</p>
                        </div>
                        <div className="col">
                            <h1>10</h1>
                            <p>Advanced Dental Operatories</p>
                        </div>
                        <div className="col">
                            <h1>4</h1>
                            <p>Winning Awards</p>
                        </div>
                        <div className="col">
                            <h1>0</h1>
                            <p>Medical Specialist</p>
                        </div>

                    </div>
                </div>
                <div className="counter_mobile" data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="1000" >
                    <div className="row text-center" >
                        <div className="col-6">
                            <div className="">
                                <h1 style={{ fontFamily: 'Si-ui-bold' }}>
                                    <CountUp start={1} end={21} redraw={true} duration={5}>
                                        {({ countUpRef, start }) => (
                                            <VisibilitySensor onChange={start} delayedCall>
                                                <span ref={countUpRef} />
                                            </VisibilitySensor>
                                        )}
                                    </CountUp>
                                </h1>
                                <p>Years of Experience</p>
                            </div>
                            <div className="">
                                <h1>311+</h1>
                                <p>Happy patients</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="">
                                <h1>10</h1>
                                <p>Advanced Dental Operatories</p>
                            </div>
                            <div className="">
                                <h1>4</h1>
                                <p>Winning Awards</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="">
                                <h1>0</h1>
                                <p>Medical Specialist</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="testimonials"> */}
                <Testimonials />
                {/* </div> */}
            </div>
        </div>
    )
}
