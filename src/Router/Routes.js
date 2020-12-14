import React from 'react'
import {BrowserRouter,Switch,Route,} from "react-router-dom";
import About from '../Pages/About/About';
import Buzz from '../Pages/Buzz/Buzz';
import Experience from '../Pages/Experience/Experience';
import Expert from '../Pages/Expert/Expert';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';
import Visit from '../Pages/Visit/Visit';

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'><Home/></Route>
                    <Route exact path='/about'><About/></Route>
                    <Route exact path='/buzz'><Buzz/></Route>
                    <Route exact path='/experience'><Experience/></Route>
                    <Route exact path='/expert'><Expert/></Route>
                    <Route exact path='/services'><Services/></Route>
                    <Route exact path='/visit'><Visit/></Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
