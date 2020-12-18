import React, { useEffect, useState } from 'react';
import './CarouselShow3.scss';
import Slider from "react-slick";
import astronaut from "../../assets/Group 693.png";
import celebrating from "../../assets/Group 691.png";
import education from "../../assets/Group 690.png";
import AOS from "aos";
import "aos/dist/aos.css";


export default function CarouselShow3() {

    useEffect(() => {
        AOS.init();
      }, []);

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrows next_button_services" onClick={onClick}>
                <button style={{outline:'none'}} type="submit" className="previous2 round2">
                    &#8250;
              </button>
                {/* <h1>Next</h1> */}
            </div>
        );
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrows prev_button_services" onClick={onClick} style={{ marginTop: '-300px', marginLeft: '10px' }}>
                <button style={{ outline: 'none' }} type="submit" className="previous1 round1">
                    &#8249;
              </button>
              {/* <h1>Prev</h1> */}
            </div>
        );
    };
    const images = [astronaut, celebrating, education, celebrating];
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };
    return (
        <div>
            <div className="carasouel_services" data-aos="fade-right" data-aos-duration="3000">
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div className={idx === imageIndex ? "slide_services activeSlide_services" : "slide_services"}>
                            <img src={img} alt={img} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>

    );
}