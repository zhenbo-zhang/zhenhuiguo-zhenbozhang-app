import React, { Component } from 'react';
import StartSimulation from '../component/goToHomePage';
import SetRows from '../container/SetRows';
import SetColumns from '../container/SetColumns';
import SetFrequency from '../container/SetFrequency';

class HomeComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="option-container">
                    <h1 className="title">Let&apos;s play!</h1>
                </div>
                <SetRows></SetRows>
                <SetColumns></SetColumns>
                <SetFrequency></SetFrequency>
                <StartSimulation></StartSimulation>
            </div>
        );
    }
}

export default HomeComponent;
