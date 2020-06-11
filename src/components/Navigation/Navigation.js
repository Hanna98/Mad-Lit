import React, { Component } from 'react'
import './Navigation.css';
import { Link } from 'react-router-dom';




const Navigation = () => {

    return (

        <div>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>

            <div className="topWhiteBar">

            <Link to="/">
                    <h1 className="madLit">MAD LIT</h1>
                </Link>
                <form className="searchForm">
                    <input className="searchBar" type="text" placeholder="Search">
                    </input>

                </form>

                <div className="logSignButtons">
                    <Link to="/login">
                        <button className="button">
                            Log In
                    </button>
                    </Link>

                    <Link to="/signup">
                        <button className="button">
                            Sign Up
                    </button>
                    </Link>

                </div>


            </div>







        </div>
    );

}

export default Navigation;