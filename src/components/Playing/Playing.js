import React, { Component } from 'react'
import './Playing.css';
import Navigation from '../Navigation/Navigation.js';

const Playing = () => {





    return (
        <div>
            <div className="backgroundContainer">
                <Navigation />
                <div className="backgroundHomePlaying">

                    <div className="middleSquareContainer">
                        <div className="middleSquare">
                            
                            
                            <form>
                                <input className="barsPlaying"></input>
                                <input className="barsPlaying"></input>
                                <input className="barsPlaying"></input>
                                <input className="barsPlaying"></input>
                                <input className="barsPlaying"></input>
                                <input className="barsPlaying"></input>


                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>





    );
}


export default Playing;