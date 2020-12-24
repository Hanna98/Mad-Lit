import React, { useState, useEffect, useContext } from 'react'
import writing from './Writing.module.css';
import Navigation from '../Navigation/Navigation.js';
import { Link, useLocation } from 'react-router-dom';
import { UserContext } from "../UserContext";




const Writing = () => {
    let { userValue, userLoginValue } = useContext(UserContext)
    let [user, setUser] = userValue
    let [userLogin, setUserLogin] = userLoginValue

    let [showButtons, setShowButtons] = useState(false);
    let [loading, setLoading] = useState(true);
    let [showTextBox, setShowTextBox] = useState(true);
    let [wordArray, setWordArray] = useState([])

    let location = useLocation();

    // note: null and 'null' are different, check database
    // saving story, post to database

    let clickedIndex = 'null';
    let words = [];
    let parts = [];

    let onNounClick = () => {
        console.log(clickedIndex)
        if (clickedIndex === 'null') { return; }
        wordArray[clickedIndex].partOfSpeech = 'noun';
        console.log(wordArray);
        setShowButtons(false)

        let highlight = (text) => {
            let obj = document.getElementsByTagName('span')[clickedIndex].style.backgroundColor = 'YELLOW';
            console.log(obj)
            return obj
        }
        highlight(wordArray[clickedIndex].word)

        // <p id="inputText"> <span></span> <span></span> </p>
    }

    let onAdjectiveClick = () => {
        console.log(clickedIndex)
        if (clickedIndex === 'null') { return; }
        wordArray[clickedIndex].partOfSpeech = 'adjective';
        console.log(wordArray);
        setShowButtons(false)

        let highlight = (text) => {
            let obj = document.getElementsByTagName('span')[clickedIndex].style.backgroundColor = 'ORANGE';
            console.log(obj)
            return obj
        }
        highlight(wordArray[clickedIndex].word)

    }

    let onVerbClick = () => {
        console.log(clickedIndex)
        if (clickedIndex === 'null') { return; }
        wordArray[clickedIndex].partOfSpeech = 'verb';
        console.log(wordArray);
        setShowButtons(false)

        let highlight = (text) => {
            let obj = document.getElementsByTagName('span')[clickedIndex].style.backgroundColor = 'PURPLE';
            console.log(obj)
            return obj
        }
        highlight(wordArray[clickedIndex].word)


    }

    let convertWordArray = () => {
        words = wordArray.map((wordObject, i) => {
            return wordObject.word

        })
        let finalWords =words.join()
        console.log(finalWords)

        parts = wordArray.map((wordObject, i) => {
            return wordObject.partOfSpeech

        })
        let finalParts = parts.join()
        console.log(finalParts)
    }
    console.log(words)
    console.log(parts)
    // {word: "Write", partOfSpeech: "noun"}
    // 1: {word: "a", partOfSpeech: null}
    // 2: {word: "fire", partOfSpeech: null}
    // 3: {word: "ass", partOfSpeech: "verb"}
    // 4: {word: "story", partOfSpeech: null}
    // 5: {word: "bith", partOfSpeech: null}
    //BELOW ISNT DONE
    //id, story_name, story, partofspeech
    // post created story to
    let saveStory = () => {
        words = wordArray.map((wordObject, i) => {
            return wordObject.word

        })
        let finalWords = words.join()
        console.log(finalWords)

        parts = wordArray.map((wordObject, i) => {
            return wordObject.partOfSpeech

        })
        let finalParts = parts.join()
        console.log(finalParts)
        
        fetch('http://localhost:3001/writing', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: user.id,
               // story_name: location.state.storyName,
                story: finalWords,
                partofspeech: finalParts
            })

        })
            .then(response => response.json())
            .then(data => {

                console.log(data)

            })

    }

    // theProcess is run after user writes the story and submits it 
    // theProcess splits the words up into usable variables
    let theProcess = (event) => {
        // event.preventDefault();
        let story = document.getElementById('myTextArea').value;


        console.log('the process was called');
        let words = story.trim().split(/[;,.!?\s]+/); // BUG!!! extra value at the end ?? ("") 

        setWordArray(words.map((word) => {
            return {
                word: word,
                partOfSpeech: 'null'
            };
        }),
        );
        console.log(wordArray);
        setLoading(false)
        setShowTextBox(false)

    }

    let handleClick = (index) => {
        setShowButtons(true)
        clickedIndex = index;
    };



    return (
        <div>
            <div className={writing.backgroundHome}></div>


            <Navigation />
            <div className={writing.absoluteContainer}>
                <div className={writing.middleSquareContainer}>
                    <div className={writing.middleSquare}>
                        {showTextBox &&
                            <form>
                                <textarea id="myTextArea" rows="20" cols="80"> Write a fire ass story bith </textarea>
                                <button onClick={() => { theProcess() }}> Submit!! </button>
                            </form>
                        }
                        <p id="inputText">
                            {wordArray.map((wordObject, i) => (<span onClick={() => handleClick(i)}>{wordObject.word}  </span>))}
                        </p>
                        {console.log(wordArray)}
                        {showButtons && <div>
                            <button
                                onClick={onNounClick}>
                                NOUN
                                </button>

                            <button
                                onClick={onAdjectiveClick}>
                                ADJECTIVE
                                </button>
                            <button
                                onClick={onVerbClick}>
                                VERB
                                </button>
                        </div>}
                        <button onClick={saveStory}> submit</button>
                    </div>
                </div>

            </div>

        </div>

    );

}
export default Writing;