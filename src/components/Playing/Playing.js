import React, { Component } from 'react'
import play from './Playing.module.css';
import Navigation from '../Navigation/Navigation.js';

const Playing = () => {





    return (
        <div>
            <div className={play.backgroundHome}></div>
            

            <Navigation />
            <div className={play.absoluteContainer}>
                <div className={play.middleSquareContainer}>
                    <div className={play.middleSquare}>


                        <form>
                            <input className={play.bars}></input> <button className={play.randomButton}>RANDOM</button>
                            <input className={play.bars}></input>
                            <input className={play.bars}></input>
                            <input className={play.bars}></input>
                            <input className={play.bars}></input>
                            <input className={play.bars}></input>
                            {/* add more bars to trigger overflow, FIX MARGINS */}


                        </form>
                    </div>
                </div>

            </div>


        </div>





    );
}


export default Playing;