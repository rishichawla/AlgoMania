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
            <Route exact path="/AlgoMania/" component={Home} />
            <Route exact path="/AlgoMania/leaderboard" component={Leaderboard} />
        </Router>
       </>
    );

}
