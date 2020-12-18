import React, { useEffect } from 'react';
import './Expert.scss';
import expertimg from '../../assets/experts.png';
import ScheduleVisit from '../../Component/ScheduleVisit/ScheduleVisit';
import Footer from '../../Component/Footer/Footer';
import Header from '../servicesPage/header/header';
import NavBar from '../../Component/NavBar/NavBar';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Expert() {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
            <div className='expert-header' data-aos="fade-right" data-aos-duration="3000">
                <Header />
            </div>
            <div className='expert-navbar' data-aos="fade-right" data-aos-duration="3000">
                <NavBar/>
            </div>
            <div className='expert-container'>
                <div className='row expert-prashantpatil'>
                    <div className='col-md-5 expert-prashantpatil-left' data-aos="fade-up" data-aos-duration="3000" data-aos-delay='1200'>
                        <h1 className='expert-name'>Meet</h1>
                        <h1 className='expert-name'>Dr. Prashant Patil</h1><br /><br />
                        <p className='expert-description'>Combine your paid vacation with your dental<br />
                     procedure<br />
                      schedule to save money or to get more value out of<br />
                       investment.
                    </p><br /><br />
                        <div className='expert-counter'>
                            <div className='expert-countre-number text-center'>
                                <h1>21</h1>
                                <p>Years of experience</p>
                            </div>
                            <div className='expert-counter-patient text-center'>
                                <h1>311+</h1>
                                <p>Happy Patient</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-7 expert-prashantpatil-right' data-aos="fade-left" data-aos-duration="3000" data-aos-delay='600'>
                        <div className='expert-image-container'>
                            <img src={expertimg} alt='expert image' className='expert-image'></img>
                        </div>
                    </div>
                </div>

                <div className='expert-content' data-aos="fade-up" data-aos-duration="3000" >
                    <p>Inflamed or infected pulp (pulpitis) often causes a toothache. To relieve the pain and prevent<br />
                 further complications, the tooth may be extracted or it may be saved by a root canal<br />
                  treatment. Once root canal treatment is performed, the patient must usually have a crown<br />
                   placed over the tooth to protect it and enhance its aesthetics.<br />
                    Root canal treatment, also known as endodontic treatment, is a dental procedure in which<br />
                     the diseased or damaged pulp (core) of a tooth is removed and root canals are filled and<br />
                      sealed.<br /><br />
                      Dental crowns are fabricated in the dental laboratory using the impression your dentist has<br />
                       made of your tooth after having prepared it. Because dental crowns encase the visible<br />
                        portion of a tooth, any porcelain crown (all-ceramic or porcelain-fused-to-metal ones) can<br />
                         be used to enhance the cosmetic appearance of a tooth.
                </p>
                </div>

                <div className='row expert-prashantpatil expert-prashantpatil-inverted'>
                    <div className='col-md-7 expert-prashantpatil-right expert-prashantpatil-inverted-right' data-aos="fade-right" data-aos-duration="3000">
                        <div className='expert-image-container'>
                            <img src={expertimg} alt='expert image' className='expert-image'></img>
                        </div>
                    </div>
                    <div className='col-md-5  expert-prashantpatil-left expert-prashantpatil-inverted-left' data-aos="fade-up" data-aos-duration="3000" data-aos-delay='600'>
                        <h1 className='expert-name'>Meet</h1>
                        <h1 className='expert-name'>Dr. Prashant Patil</h1><br /><br />
                        <p className='expert-description'>Combine your paid vacation with your dental<br />
                     procedure<br />
                      schedule to save money or to get more value out of<br />
                       investment.
                    </p><br /><br />
                        <div className='expert-counter'>
                            <div className='expert-countre-number text-center'>
                                <h1>21</h1>
                                <p>Years of experience</p>
                            </div>
                            <div className='expert-counter-patient text-center'>
                                <h1>311+</h1>
                                <p>Happy Patient</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='expert-content expert-inverted-content' data-aos="fade-left" data-aos-duration="3000">
                    <p>Inflamed or infected pulp (pulpitis) often causes a toothache. To relieve the pain and prevent<br />
                 further complications, the tooth may be extracted or it may be saved by a root canal<br />
                  treatment. Once root canal treatment is performed, the patient must usually have a crown<br />
                   placed over the tooth to protect it and enhance its aesthetics.<br />
                    Root canal treatment, also known as endodontic treatment, is a dental procedure in which<br />
                     the diseased or damaged pulp (core) of a tooth is removed and root canals are filled and<br />
                      sealed.<br /><br />
                      Dental crowns are fabricated in the dental laboratory using the impression your dentist has<br />
                       made of your tooth after having prepared it. Because dental crowns encase the visible<br />
                        portion of a tooth, any porcelain crown (all-ceramic or porcelain-fused-to-metal ones) can<br />
                         be used to enhance the cosmetic appearance of a tooth.
                </p>
                </div>
                <div className='expert-schedulevisit'>
                    <ScheduleVisit />
                </div>
                <Footer />
            </div>
        </div>
    )
}
