import React from 'react';
import cards from './Cards.module.css';
import { Link, useLocation } from 'react-router-dom';

const Cards = (props) => {

    console.log(useLocation())
    // .whiteSquareContainer {
    //     display: grid;
    //     justify-items: center;
    //     align-items: center;
    //     grid-template-columns: (1fr,1fr 1fr);
    //     column-gap: 4rem;
    //     row-gap: 2rem;
    //     margin-top: 50px; /* avoid pixel unit, change this, nav and header. */
    // }
    return (
        <div>
            <Link to={{

                pathname: "/playing",
                state: {
                    'story': props.story,
                    'storyName': props.storyName,
                    'partOfSpeech': props.partOfSpeech
                }
            }}>
                <div className={cards.whiteSquareContainer}>

                    <button className={cards.whiteSquare}>
                        {props.storyName}
                        {props.story}
                    </button>



                </div>

            </Link>

        </div>


    );

};

export default Cards;



















