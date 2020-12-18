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
import './CarouselShow4.scss';
import AOS from "aos";
import "aos/dist/aos.css";


export default function CarouselShow4() {
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
            <div className="">
                <div className="carouselShow4_onevisit col-12">
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

            </div>
        </div>
    )
}
