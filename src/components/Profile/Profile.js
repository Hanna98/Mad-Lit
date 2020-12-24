import React, { useState, useEffect, useContext } from 'react';
import profile from './Profile.module.css';
import Writing from '../Writing/Writing.js';
import Cards from '../Cards/Cards.js';
import { Link } from 'react-router-dom';
import { UserContext } from "../UserContext";



const Profile = (props) => {
    let { userValue, userLoginValue } = useContext(UserContext);
    let [user, setUser] = userValue;
    let [userLogin, setUserLogin] = userLoginValue;
    
    let [showCards, setShowCards] = useState(false);
    let [story, setStory] = useState([]);



    let onClickedMyStories = () => {
        fetch(`http://localhost:3001/profile/id/${user.id}`, {
            method: 'get',
        })
            .then(response => response.json())
            .then(data => {
                setStory(data)
                console.log(data)
                //[{}{}] array of story objects
            })
    }

    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
            <div className={profile.absoluteContainer}>
                <div className={profile.leftBoxContainer}>



                    <div className={profile.leftBox}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <h1 className={profile.madLit}> MADLIT</h1>
                        </Link>
                        <div className={profile.circle}>

                        </div>
                        <p>Change Photo</p>
                        <div className={profile.buttonContainer}>

                            <Link to={{

                                pathname: "/writing",
                                state: {
                                    'story': story.story,
                                    'storyName': story.storyName,
                                    'partOfSpeech': story.partOfSpeech
                                }
                            }} style={{ textDecoration: 'none' }}>
                                <button className={profile.button}>
                                    Create New Story
                                    </button>
                            </Link>
                            <button onClick={() => onClickedMyStories()} className={profile.button}>
                                My Stories
                                </button>

                            <button className={profile.button}>
                                Liked Stories
                                </button>

                            <button className={profile.button}>
                                Saved Stories
                                </button>

                            <button className={profile.button}>
                                Drafts
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
                            {console.log(story)}

                            {story.map(i => {
                                console.log(i)
                                // also pass partOfSpeech
                                return <Cards story={i.story} storyName={i.story_name} partOfSpeech={i.partofspeech} />
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )


}

export default Profile;