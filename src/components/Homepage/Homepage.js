import React, { useState, useEffect, useContext } from 'react';
import home from './Homepage.module.css';
import Navigation from '../Navigation/Navigation.js';
import Cards from '../Cards/Cards.js'
import { Link } from 'react-router-dom';
import { UserContext } from "../UserContext";


const Homepage = (props) => {
    let {userValue, userLoginValue} = useContext(UserContext)
    let [ user, setUser ] = userValue
    let [userLogin, setUserLogin] = userLoginValue



    useEffect(() => {
        loggedIn()
    }, []);

    let loggedIn = () => {
        let storage = localStorage.getItem('logged_in')
        if (storage === 'true') {
            return "logged in right now!"

        }
        else if (storage === 'false') {
            return "not logged in right now!"
        }
    }
    //userData={this.props.user}
    //this.props.userData
    return (
        <div>
            <Navigation />
            <div className={home.absoluteContainer}>

                <div className={home.leftSidebar}>
                    Status: {loggedIn()}
                </div>

                <div className={home.container}>


                    <header className={home.header}>asfjksdfjnsd</header>


                    <div className={home.outerGridContainer}>
                        <div className={home.gridContainer}>
                            <Cards />

                        </div>
                    </div>
                </div>

            </div>

        </div>
    );

};




export default Homepage;