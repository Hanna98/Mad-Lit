import React, { Component } from 'react'
import play from './Playing.module.css';
import Navigation from '../Navigation/Navigation.js';

class Playing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        let timeOfDay = "";
        let adjective1 = "";
        let noun1 = "";
        let noun2 = "";
        let verbEndingInS1 = "";
        let verb1= "";
        let noun3 ="";
        let noun4 ="";
        let verbEndingInS2 = "";
        let bodyPartPlural1 ="";
        let verbEndingInEd1 ="";
        let adjective2 ="";
        let animal1="";
        let verb2="";
        let verbEndingInIng="";
        let noun5="";
    
    
        const story = (`It's close to ${timeOfDay} and something ${adjective1}'s lurkin' in the ${noun1}
        Under the ${noun2} you see a sight that almost ${verbEndingInS1} your heart
        You try to ${verb1} but ${noun3} takes the ${noun4} before you make it
        You start to freeze as horror ${verbEndingInS2} you right between the ${bodyPartPlural1},
        You're ${verbEndingInEd1}
        
        'Cause this is ${adjective2}, ${adjective2} night
        And no one's gonna save you from the ${animal1} about to ${verb2}
        You know it's ${adjective2}, ${adjective2} night
        You're ${verbEndingInIng} for your ${noun5} inside a killer, ${adjective2} tonight" `)


     

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
}


export default Playing;