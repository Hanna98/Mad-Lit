import React, { Component } from 'react'
import './Login.css';


const Login = () => {

    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
            <div className="loginBackground">

            </div>

            <div className="middleSquareContainerLog">
                <div className="middleSquareLog">
                    <h1 className="logInTitle">WELCOME BACK</h1>
                    <form>
                        <input className="bar" type="username" placeholder="username or email"></input>
                        <input className="bar" type="password" placeholder="password"></input>
                        <div className="grayLine">
                        
                        </div>
                        <div className="logInBtnContainer">
                        <button className="logInBtn">Log in </button>
                        </div>
                        <button className="bar">Log in with Google</button>
                        
                    </form>
                    
                   
                </div>
            </div>
        </div>

    );

}

export default Login;