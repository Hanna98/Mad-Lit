import React, { Component } from 'react'
import nav from'./Navigation.module.css';
import { Link } from 'react-router-dom';




const Navigation = () => {

    return (

        <div>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
            <div className={nav.topWhiteBar}>

                <Link to="/" style={{ textDecoration: 'none' }}>
                    <h1 className={nav.madLit}>MAD LIT</h1>
                </Link>
                <form className={nav.searchForm}>
                    <input className={nav.searchBar} type="text" placeholder="Search">
                    </input>

                </form>

                <div className={nav.logSignButtons}>
                    <Link to="/login">
                        <button className={nav.button}>
                            Log In
                    </button>
                    </Link>

                    <Link to="/signup">
                        <button className={nav.button}>
                            Sign Up
                    </button>
                    </Link>

                </div>


            </div>







        </div>
    );

}

export default Navigation;