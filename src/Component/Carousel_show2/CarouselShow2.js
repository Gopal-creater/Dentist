import React, { useState } from 'react';
import './CarouselShow2.scss';
import Slider from "react-slick";
import sliderpic3 from '../../assets/Group 494.png';
import sliderpic4 from '../../assets/Group 495.png';
export default function CarouselShow2() {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrow_test next_button_test" onClick={onClick}>
                <button style={{outline:'none'}} type="submit" className="previous2_test round2_test">
                    &#8250;
              </button>
                {/* <h1>Next</h1> */}
            </div>
        );
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrow_test prev_button_test" onClick={onClick} style={{ marginTop: '-300px', marginLeft: '10px' }}>
                <button style={{ outline: 'none' }} type="submit" className="previous1_test round1_test">
                    &#8249;
              </button>
                {/* <h1>Prev</h1> */}
            </div>
        );
    };
    const images = [sliderpic3, sliderpic3, sliderpic4];
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 300,
        slidesToShow: 2,
        centerMode: true,
        centerPadding: 47,
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
              centerMode: true,
              centerPadding: 0,
            }}
        ]
    };
    return (
        <div className="row">
            <div className="col-md-6 col-12" >
                <div className="patch_test">
                    <div className="App_test" data-aos="fade-right" data-aos-duration="3000">
                        <Slider {...settings}>
                            {images.map((img, idx) => (
                                <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                                    <img src={img} alt={img} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    
                </div>
                <div class="three-dots_test">
                        <span class="first"></span>
                        <span class="first"></span>
                        <span class="first"></span>
                        <span class="first"></span>
                        <span class="first"></span>
                        <span class="first"></span>
                        <span class="second"></span>
                        <span class="second"></span>

                    </div>
            </div>
            <div className="col-md-6 col-12" id="text_test" data-aos="fade-up" data-aos-duration="3000" data-aos-delay='600'>
                <h1>How is<br /> it done?</h1>
                <p>Dental crowns are fabricated in the dental laboratory using the impression your dentist has made of your tooth after having prepared it. Because dental crowns encase the visible portion of a tooth, any porcelain crown (all-ceramic or porcelain-fused-to-metal ones) can be used to enhance the cosmetic appearance of a tooth.</p>
            </div>

        </div>

    );
}