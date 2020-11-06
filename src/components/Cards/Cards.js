import React from 'react';
import cards from './Cards.module.css';
import { Link, useLocation } from 'react-router-dom';

const Cards = (props) => {

    console.log(useLocation())

    return (
        <div>
            <Link to={{

                pathname: "/playing",
                state: {
                    'story': props.story,
                    'storyName': props.storyName
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



















