import React from 'react'
import { Switch, Route, } from "react-router-dom";
import CarouselShow2 from '../Component/Carousel_show2/CarouselShow2';
import About from '../Pages/About/About';
import Buzz from '../Pages/Buzz/Buzz';
import Experience from '../Pages/Experience/Experience';
import Expert from '../Pages/Expert/Expert';
import Home from '../Pages/Home/Home';
import OurExpert from '../Pages/OurExpert/OurExpert';
import Services from '../Pages/servicesPage/services';
import Visit from '../Pages/Visit/Visit';

export default function Routes() {
    return (
        <div>
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/about'><About /></Route>
                <Route exact path='/buzz'><Buzz /></Route>
                <Route exact path='/experience'><Experience /></Route>
                <Route exact path='/expert'><Expert /></Route>
                <Route exact path='/services'><Services /></Route>
                <Route exact path='/visit'><Visit /></Route>
                <Route exact path='/testing'><CarouselShow2 /></Route>
                <Route exact path='/ourexpert'><OurExpert /></Route>
            </Switch>
        </div>
    )
}
