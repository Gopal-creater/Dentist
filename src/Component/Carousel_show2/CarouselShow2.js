import React, { useState } from 'react';
import './CarouselShow2.scss';
import Slider from "react-slick";
import sliderpic3 from '../../assets/Group 494.png';
import sliderpic4 from '../../assets/Group 495.png';

export default function CarouselShow2() {

    const NextArrow = ({ onClick }) => {
        return (
            <div className="arrows next_button_2" onClick={onClick}>
                {/* <button style={{outline:'none'}} type="submit" className="previous2 round2">
                    &#8250;
              </button> */}
                <h1>Next</h1>
            </div>
        );
    };
    const PrevArrow = ({ onClick }) => {
        return (
            <div className="arrows prev_button" onClick={onClick} style={{marginTop:'-300px', marginLeft:'10px'}}>
                <button style={{ outline: 'none' }} type="submit" className="previous1 round1">
                    &#8249;
              </button>
            </div>
        );
    };
    const images = [sliderpic3, sliderpic4];
    const [imageIndex, setImageIndex] = useState(0);
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 2000,
        slidesToShow: 2,
        nextArrow: <NextArrow />,
        beforeChange: (current, next) => setImageIndex(next),
    };
    return (
        <div>
            <div className="carouselshow2">
                <div className="pacth_carouselshow2"></div>
                <Slider {...settings}>
                    {images.map((img, idx) => (
                        <div className={idx === imageIndex ? "slidess activeSlidess" : "slidess"}>
                            {/* <div className="images_carouselshow2"> */}
                                <img src={img} />
                            {/* </div> */}
                        </div>
                    ))}
                </Slider>


            </div>

        </div>
    );
}