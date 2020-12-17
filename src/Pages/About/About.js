import React from 'react'
import NavBar from '../../Component/NavBar/NavBar';
import Header from '../servicesPage/header/header';
import Expert from '../../assets/expert1.png';
import './About.scss'
import CarouselShow3 from '../../Component/Carousel_show3/CarouselShow3';

export default function About() {
    return (
        <div>
            <Header />
            <div className="navbar_about">
                <NavBar />
            </div>
            <div className="about_heading">
                <h1 style={{ fontFamily: 'Si-ui-bold', color: '#3AA9A9' }}>About</h1>
            </div>
            <div className="about_image">
                <div className="about_patch"></div>
                <div className="about_doctor_image">
                    <img src={Expert} />
                </div>
            </div>
            <div className="about_longtext">
                <h1>The Story of<br /> Shwetha Dentistry</h1>
                <p>Shwetha Dentistry in Kalaburagi city is proving itself to be a trendsetter in bringing the latest world-class treatment facilities at an affordable cost to the doorsteps of needy patients in Karnataka. Be it establishing a super speciality dental hospital or introducing altogether a new concept of one-visit dentistry, Shwetha Dentistry has many firsts not only in Hyderabad-Karnataka region but also in the whole of Karnataka.</p>
                <br />
                <h1>The Man, The Myth, The Legend.</h1>
                <p>The man behind the awe-inspiring success story of Shwetha Dentistry is Dr Prashant A Patil whose unmatched pioneering efforts in introducing modern treatment facilities in dentistry has set a new standard in providing painless and cosmetic treatment procedures and brightening the smiles on the faces of the patients. A post-graduate in Orthodontics from the prestigious Raja Muthaiah Institute of Dental Sciences, Annamalai University at Chidambaram in Tamil Nadu, Dr Prashant Patil obtained a specialisation in Lingual Orthodontics (Invisible Braces) course offered by Tel Aviv University through European Lingual Orthodontic Society in London. Incidentally, Dr Patil was the only Asian in 2010 to obtain the specialisation in Lingual Orthodontics from Tel Aviv University. The never-say-die attitude of Dr Patil and his unswerving resolve to achieve only the best in the trade has moulded him as one of the finest professionals and a trailblazer.</p>
                <br />
                <h1>A Team of Titans</h1>
                <p>Besides the self-confidence and sheer hard work of Dr Patil, another force which stands tall like a rock behind him in his phenomenal success in the profession is his wife Dr Rashmi Patil who herself is a specialist endodontist. Apart from Dr Patil and his wife Dr Reshmi Patil, seven other specialists work as consultants in the hospital.</p>
                <h1>Laurels upon laurels.</h1>
                <p>Shwetha Dentistry is one of the very few centres in the state to get ISO 2015-18 from the prestigious TUV Nord Sud Certification from Germany. Now the hospital has applied for the accreditation from the NABH, which has been made mandatory for all the hospitals. The hospital has received many awards and recognition from different certification organisations and prominent among them was the FAMDENT excellence in Dentistry award which declared the Shwetha Dentistry has the clinic of the year Multiple Chairs 2013. Dr Patil says that the main motto of the Shwetha Dentistry is to provide world-class quality and precision service to the patients.</p>
            </div>
            <div className="about_image_2">
                <div className="about_patch_2"></div>
                <div className="about_doctor_image_2">
                    <img src={Expert} />
                </div>
            </div>
            <div className="about_longtext_2">
                <h1>Inspired by Technology, Powered by Innovation.</h1>
                <p>Dr Patil and his hospital have many firsts to their credit. The state of art Digital Dentistry Complete Ceramic Reconstruction (CEREC) CADCAM System, which has revolutionised the cosmic dental treatment procedures was first established in entire South India in Kalaburagi. Shwetha Dentistry was the 13th hospital in the entire country to have this facility.<br /><br /> This innovative facility has enabled the hospital to introduce an altogether new concept of “One Visit Dentistry” using the CEREC system. The teeth which require the crown after the Root Canal Treatment and filling is digitally scanned for a digital impression of the teeth. The impression is transferred to the robotic milling machine which designs the crown from the pre-fixed Lithium Disilicate material imported from Germany to the size required within 15 minutes. After following a few technical procedures, like hardening the designed crown to the required level, the crown is placed in the mouth of the patient within three hours on the same day. <br /><br />Shwetha Dentistry is the first to include the most modern Microscope-assisted Root Canal Treatment facility which helps in bringing down the loss of tooth material to zero during the root canal treatment and also accurately treat the affected root.<br /><br /> The Hospital offers nine specialised treatments for dental ailments including Orthodontics, Endodontic, Oral Surgery, Periodontics, Dental Implants, Implantology, Prosthodontics, Laser Gum Treatment, Oral Medicine, and Oral Radiology.<br /><br /> Besides all these specialisations offered in the hospital, one of the rare specialisations offered is Lingual Orthodontics. Shwetha Dentistry is the exclusive hospital to offer the lingual orthodontics specialisation in the entire North Karnataka. Dr Patil has a rich experience of nearly a decade in offering specialised lingual orthodontics (invisible) treatment.<br /><br /> The patients suffering from irregular teeth alignment are offered permanent treatment solutions through Invisalign treatment using the latest kind of invisible braces. Shwetha Dentistry is an exclusive Invisalign provider for the entire North Karnataka.<br /><br /> The hospital also provides laser dental surgeries which are painless and bloodless surgeries are also provided for different gum diseases and the healing process was faster in the patients who undergo laser-based dental surgeries. The hospital also offers instant teeth whitening in one single sitting using the imported Zoom Teeth whitening technology. Advanced 3D radiology facility is also available in the hospital.</p>
                <br />
                <h1>Laurels upon laurels.</h1>
                <p>Shwetha Dentistry is one of the very few centres in the state to get ISO 2015-18 from the prestigious TUV Nord Sud Certification from Germany. Now the hospital has applied for the accreditation from the NABH, which has been made mandatory for all the hospitals. The hospital has received many awards and recognition from different certification organisations and prominent among them was the FAMDENT excellence in Dentistry award which declared the Shwetha Dentistry has the clinic of the year Multiple Chairs 2013. <br /><br />Dr Patil says that the main motto of the Shwetha Dentistry is to provide world-class quality and precision service to the patients.</p>
            </div>
            <div className="about_heading_2 text-center">
                <h1 style={{ fontFamily: 'Si-ui-bold' }}>Meet our Experts</h1>
            </div>
            <CarouselShow3 />
        </div>
    )
}
