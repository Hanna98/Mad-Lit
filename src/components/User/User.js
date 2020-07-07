import React from 'react';
import user from './User.module.css';
import Cards from '../Cards/Cards.js';
import { Link } from 'react-router-dom';



const User = () => {

    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
            <div className={user.absoluteContainer}>
                <div className={user.leftBoxContainer}>
                


                    <div className={user.leftBox}>
                        
                        <h1 className={user.madLit}> MADLIT</h1>
                        <div className={user.circle}>

                        </div>
                        <p>Change Photo</p>
                        <div className={user.buttonContainer}>
                            <button className={user.button}>
                                Create New Story
                        </button>

                            <button className={user.button}>
                                My Stories
                        </button>

                            <button className={user.button}>
                                Liked Stories
                        </button>

                            <button className={user.button}>
                                Settings
                        </button>
                        </div>

                    </div>
                    

                </div>


                <div className={user.container}>
                    <header className={user.fullTabHeader}>
                        <div className={user.navTab}>dksdjfn</div>
                    </header>
                    <div className={user.outerGridContainer}>
                   

                        <div className={user.gridContainer}>
                            <Cards />

                        </div>
                    </div>
                </div>
            </div>

        </div>



    )


}

export default User;