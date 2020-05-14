import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import Leaderboard from './Leaderboard';
import Home from './Home';
import MenuAppBar from './MenuAppBar'

export default function MainComponent() {
    return (
        <>
            <Router>
                <MenuAppBar/>
                <Route exact path="/AlgoMania/" component={Home}/>
                <Route exact path="/AlgoMania/leaderboard" component={Leaderboard}/>
            </Router>
        </>
    );

}
