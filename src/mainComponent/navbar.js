import React, { Component } from 'react';
import '../css/components/navbar.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSimulationStatus } from '../actions/action';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <div className="header">
                <Navbar expand="xl">
                    <NavLink to="/home" className="brand">
                        Conway&apos;s Game of Life
                    </NavLink>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <NavLink to="/home" className="navlink">
                                Start
                            </NavLink>
                            <NavLink
                                to="/game"
                                className="navlink"
                                onClick={this.handleClick}>
                                Game
                            </NavLink>
                            <NavLink to="/rule" className="navlink">
                                Rule
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }

    handleClick() {
        this.props.stopSimulation();
    }
}

NavBar.propTypes = {
    stopSimulation: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    stopSimulation: () => {
        dispatch(setSimulationStatus(false));
    },
});

export default connect(null, mapDispatchToProps)(NavBar);
