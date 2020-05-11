import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Leaderboard from './Leaderboard';
import Home from './Home';
import MenuAppBar from './MenuAppBar'

export default function MainComponent() {
    return (
       <>
        
        <Router>
        <MenuAppBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/leaderboard" component={Leaderboard} />
        </Router>
       </>
    );

}
