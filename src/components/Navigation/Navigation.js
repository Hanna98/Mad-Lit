import React, { useState, useEffect, useContext } from 'react';
import nav from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { UserContext } from "../UserContext";





const Navigation = (props) => {
    let { userValue, userLoginValue } = useContext(UserContext)
    let [user, setUser] = userValue
    let [userLogin, setUserLogin] = userLoginValue

    let [showProfile, setShowProfile] = useState(false)
    let [showLogSigns, setShowLogSigns] = useState(true)


    useEffect(() => {
        loggedIn()

    }, []);

    // useEffect [] makes it only render mount and unmount (?)
    let loggedIn = () => {
        let storage = localStorage.getItem('logged_in')
        if (storage === 'true') {
            setShowProfile(true)
            setShowLogSigns(false)



        }
    }

    let loggedOut = () => {
        localStorage.setItem('logged_in', 'false');
        setShowProfile(!showProfile)
        setShowLogSigns(!showLogSigns)

    }

    // fix this fucntion its supposed to toggle  the nav menu profile
    let myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    // <Link to={"/profile"}>
    //     <button className={nav.circle}></button>
    // </Link>

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
                    {showProfile &&
                        <div>
                            <Link to={`/profile/id/${user.id}`}>
                                <button onClick={() => myFunction()} className={nav.circle}></button>
                            </Link>
                            <div id="myDropdown" className={nav.dropdownContent}>
                                <button>{user.id}</button>
                                <button onClick={() => loggedOut()}>log out</button>
                                <button>Contact</button>
                            </div>
                        </div>

                    }

                    {showLogSigns &&
                        <div>
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
                    }
                </div>


            </div>







        </div>
    );

};

export default Navigation;