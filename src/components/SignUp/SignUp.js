import React, { Component } from 'react'
import './SignUp.css';


const SignUp = () => {

    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>

            <div className="leftBox" >
            </div>
            <div className="rightBox">
                <h1 className="signUpTitle">JOIN THE MADNESS</h1>
                <form id="formContent">
                    <input className="bar" type="username" placeholder="username"></input>
                    <input className="bar" type="password" placeholder="password"></input>
                    <input className="bar" type="email" placeholder="email"></input>
                    <button className="signUpButton">Sign Up</button>
                    <button className="bar">Sign Up with Google</button>




                </form>
            </div>
        </div>
    );

}

export default SignUp;