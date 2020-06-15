import React from 'react';
import "./Content.css";
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Settings from '../components/Settings/Settings';

export default function Content() {
    return (
        <div className="conatiner content">
            <Switch>
                <Route exact path="/"> <Home /> </Route>
                <Route path="/settings"> <Settings /> </Route>
            </Switch>
        </div>
    );
}