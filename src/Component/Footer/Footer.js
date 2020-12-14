import React from 'react';
import './Footer.scss';
import whatsapp from "../../assets/whatsapp.png"
import instagram from "../../assets/instagram.png"
import twitter from "../../assets/twitter.png"
import facebook from "../../assets/facebook.png"
import youtube from "../../assets/youtube.png"

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className="row">
                <div className="col-md-4 our-locations">
                    <div className="footer-heading" >Our locations</div>
                    <div className="footer-text" >
                        <p>Trust Pharmacy, 1st Floor, Beside GOLD HUB MALL, Main Rd, opp. K
                        B N Hospital, Gulbarga, Karnataka 585102</p>
                    </div>
                    <button className="footer-button">Show on Maps</button>
                    <div className="footer-text">
                        <p>92, New Jewargi Rd, Bhagyavanti Nagar, Santosh Colony, Gulbarga,
                        Karnataka 585102</p>
                </div>
                    <button className="footer-button">Show on Maps</button>
                </div>

                <div className="col-md-3 our-timings">
                    <div className="footer-heading" >Our timings</div>
                    <div className="footer-text" >
                        <p>Mon. Wed, Thu: 9am to 5pm <br />Tue: 11am to 7pm <br />Fri: 9am to 1pm <br />By Appointment Only<br /><br /><br /><br /></p>
                    </div>
                </div>

                <div className="col-md-5 social-media-tags">
                    <img className='social-media-tag' src={whatsapp} alt='whatsapp-logo' />
                    <img className='social-media-tag' src={youtube} alt='expert' />
                    <img className='social-media-tag' src={twitter} alt='expert' />
                    <img className='social-media-tag' src={facebook} alt='expert' />
                    <img className='social-media-tag' src={instagram} alt='expert' />
                </div>
            </div>
        </div>
    )
}
