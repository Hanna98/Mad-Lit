import React, { Component } from 'react';
import './Homepage.css';
import Navigation from '../Navigation/Navigation.js';
import Cards from '../Cards/Cards.js'
import { Link } from 'react-router-dom';

class Homepage extends Component {

    render() {
        return (
            <div>
                <Cards />
                <div className="homeContainer">
                    <Navigation />

                    <div className="backgroundHome"></div>

                    <p className="left-sidebar"> broom broom</p>
                </div>
            </div>
        );
    }
};




export default Homepage;