import React, { useEffect } from "react";
import Header from "./header/header";
import "./services.scss";
import RootCanal from "../../assets/root_canal.png";
import NavBar from "../../Component/NavBar/NavBar";
import Banner from "../../assets/Group 633.png";
import CarouselShow2 from "../../Component/Carousel_show2/CarouselShow2";
import CarouselShow3 from "../../Component/Carousel_show3/CarouselShow3";
import AOS from "aos";
import astronaut from "../../assets/Group 693.png";
import celebrating from "../../assets/Group 691.png";
import education from "../../assets/Group 690.png";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div data-aos="fade-right" data-aos-duration="3000">
        <Header />
      </div>
      <div
        className="navbar_services"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <NavBar />
      </div>

      <div className="endodontics">
        <div className="row">
          <div
            className="endo_text col-md-6 col-12"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="1200"
          >
            <h1 style={{ color: "#3AA9A9" }}>Endodontics</h1>
            <h3>
              Root Canals and <br />
              Crowns
            </h3>
          </div>
          <div
            className="endo_image col-md-6 col-12"
            data-aos="fade-left"
            data-aos-duration="3000"
            data-aos-delay="600"
          >
            <div className="services_patch"></div>
            <div className="services_image">
              <img src={RootCanal} />
            </div>
          </div>
        </div>
        <div
          className="endo_longtext"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-delay="1200"
        >
          <h1>Saving the teeth</h1>
          <p>
            Inflamed or infected pulp (pulpitis) often causes a toothache. To
            relieve the pain and prevent further complications, the tooth may be
            extracted or it may be saved by a root canal treatment. Once root
            canal treatment is performed, the patient must usually have a crown
            placed over the tooth to protect it and enhance its aesthetics.
          </p>
          <br />
          <h1>Root canals</h1>
          <p>
            Root canal treatment, also known as endodontic treatment, is a
            dental procedure in which the diseased or damaged pulp (core) of a
            tooth is removed and root canals are filled and sealed.
          </p>
          <br />
          <h1>Crowns</h1>
          <p>
            Dental crowns are fabricated in the dental laboratory using the
            impression your dentist has made of your tooth after having prepared
            it. Because dental crowns encase the visible portion of a tooth, any
            porcelain crown (all-ceramic or porcelain-fused-to-metal ones) can
            be used to enhance the cosmetic appearance of a tooth.
          </p>
        </div>
        <div className="carousel_services">
          <CarouselShow2 />
        </div>
        <div id="emi-container" data-aos="fade-left" data-aos-duration="3000">
          <img src={Banner} width="100%" height="auto" />
        </div>
        <div className="services_heading text-center">
          <h1 style={{ fontFamily: "Si-ui-bold" }}>Other services</h1>
        </div>
        <CarouselShow3
          slider1={astronaut}
          slider2={celebrating}
          slider3={education}
        />
      </div>
    </div>
  );
}

export default Services;
