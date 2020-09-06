import React from 'react';
import profile from './Profile.module.css';
import Cards from '../Cards/Cards.js';
import { Link } from 'react-router-dom';



const User = () => {

    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
            <div className={profile.absoluteContainer}>
                <div className={profile.leftBoxContainer}>
                


                    <div className={profile.leftBox}>
                        
                        <h1 className={profile.madLit}> MADLIT</h1>
                        <div className={profile.circle}>

                        </div>
                        <p>Change Photo</p>
                        <div className={profile.buttonContainer}>
                            <button className={profile.button}>
                                Create New Story
                        </button>

                            <button className={profile.button}>
                                My Stories
                        </button>

                            <button className={profile.button}>
                                Liked Stories
                        </button>

                            <button className={profile.button}>
                                Settings
                        </button>
                        </div>

                    </div>
                    

                </div>


                <div className={profile.container}>
                    <header className={profile.fullTabHeader}>
                        <div className={profile.navTab}>dksdjfn</div>
                    </header>
                    <div className={profile.outerGridContainer}>
                   

                        <div className={profile.gridContainer}>
                            <Cards />

                        </div>
                    </div>
                </div>
            </div>

        </div>



    )


}

export default User;