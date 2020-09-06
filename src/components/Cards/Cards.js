import React from 'react';
import cards from './Cards.module.css';
import { Link } from 'react-router-dom';

const Cards = () => {

    return (
        <div>
            <Link to="/playing">
                <div className={cards.whiteSquareContainer}>

                    <button className={cards.whiteSquare}>
                        CARD NUMBER 1
                    </button>

                    <button className={cards.whiteSquare}>
                        woooooooookershnooooo
                     </button>

                     
                    <button className={cards.whiteSquare}>
                        CARD NUMBER 3
                     </button>

                     <button className={cards.whiteSquare}>
                        CARD NUMBER NUMBER 4
                     </button>
                     <button className={cards.whiteSquare}>
                        CARD NUMBER 1
                    </button>

                    <button className={cards.whiteSquare}>
                        woooooooookershnooooo
                     </button>

                     
                    <button className={cards.whiteSquare}>
                        CARD NUMBER 3
                     </button>

                     <button className={cards.whiteSquare}>
                        CARD NUMBER NUMBER 4
                     </button>
                     <button className={cards.whiteSquare}>
                        CARD NUMBER 1
                    </button>

                    <button className={cards.whiteSquare}>
                        woooooooookershnooooo
                     </button>

                     
                    <button className={cards.whiteSquare}>
                        CARD NUMBER 3
                     </button>

                     <button className={cards.whiteSquare}>
                        CARD NUMBER NUMBER 4
                     </button>
                     
                     

                     

                     

                </div>

            </Link>

        </div>


    );

};

export default Cards;



















