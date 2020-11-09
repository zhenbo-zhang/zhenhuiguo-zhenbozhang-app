import React from 'react';
import Navbar from './mainComponent/navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameComponent from './mainComponent/game';
import HomeComponent from './mainComponent/home';
import RuleComponent from './mainComponent/rules';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/base/default.css';
import './css/components/navbar.css';
import './css/components/button.css';
import './css/components/blocks.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Route path="/" exact component={HomeComponent}></Route>
                <Route path="/home" component={HomeComponent} />
                <Route path="/game" component={GameComponent} />
                <Route path="/rule" component={RuleComponent}></Route>
            </Router>
        </div>
    );
}

export default App;
