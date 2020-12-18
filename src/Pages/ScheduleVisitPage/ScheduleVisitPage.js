import React from 'react'
import Footer from '../../Component/Footer/Footer'
import NavBar from '../../Component/NavBar/NavBar'
import ScheduleVisit from '../../Component/ScheduleVisit/ScheduleVisit'
import './ScheduleVisitPage.scss';

export default function ScheduleVisitPage() {
    return (
        <div className='ScheduleVisitPage-container'>
            <NavBar/>
            <ScheduleVisit/>
            <Footer/>
        </div>
    )
}
