import React, { useState, useEffect, useContext } from 'react';
import home from './Homepage.module.css';
import Navigation from '../Navigation/Navigation.js';
import Cards from '../Cards/Cards.js'
import { Link } from 'react-router-dom';
import { UserContext } from "../UserContext";


const Homepage = (props) => {
    let { userValue, userLoginValue } = useContext(UserContext)
    let [user, setUser] = userValue
    let [userLogin, setUserLogin] = userLoginValue

    let [story, setStory] = useState([]);

    // .gridContainer { /* box */
    //     display: flex;        
    //     overflow-x: hidden; /* Hide horizontal scrollbar */
    //     overflow-y: scroll;

    //     /* 
    //     overflow: scroll;
    //   */
    //   }



    useEffect(() => {
        fetch(`http://localhost:3001/`, {
            method: 'get',
        })
            .then(response => response.json())
            .then(data => {
                setStory(data)
                console.log(data)
                //[{}{}] array of story objects
            })
        loggedIn()
    }, []);

    let loggedIn = () => {
        let storage = localStorage.getItem('logged_in')
        if (storage === 'true') {
            return "logged in right now!"

        }
        else if (storage === 'false') {
            return "not logged in right now!"
        }
    }


    return (
        <div>
            <Navigation />
            <div className={home.absoluteContainer}>

                <div className={home.leftSidebar}>
                    Status: {loggedIn()}
                    <p>Welcome To MadLit!</p>

                    <p>How To Play</p>
                </div>

                <div className={home.container}>

                    {story.map(i => {
                        console.log(i)
                        return <Cards story={i.story} storyName={i.story_name} partOfSpeech={i.partofspeech} />
                    })}


                </div>

            </div>

        </div>
    );

};




export default Homepage;