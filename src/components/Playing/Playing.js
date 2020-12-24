import React, { useState, useEffect } from 'react'
import play from './Playing.module.css';
import Navigation from '../Navigation/Navigation.js';
import { Link, useLocation } from 'react-router-dom';





const Playing = (props) => {
    let [showInputs, setShowInputs] = useState(true);
    let [showStory, setShowStory] = useState(false);
    let [story22, setStory22] = useState([])
    let location = useLocation();
    console.log(location)
    console.log(story22)

    useEffect(() => {
        formatStoryArray();
        convertToPlay();
    }, []);

    let formatStoryArray = () => {

        let words = location.state.story
        let trimmy = words.trim().split(/[;,.!?\s]+/);

        console.log(trimmy) //[there once was....]

        let parts = location.state.partOfSpeech
        let trimmyParts = parts.trim().split(/[;,.!?\s]+/);

        // console.log(trimmyParts) //[null,null, noun]

        story22.push({
            word: null,
            partOfSpeech: null
        })
        let index = 0;

        for (let i = 0; i < trimmy.length; i++) {

            story22.push({
                word: story22[i].word = trimmy[index],
                partOfSpeech: story22[i].partOfSpeech = trimmyParts[index]
            })
            index++;

        }
        console.log(story22)
    }





    let convertToPlay = () => {
        let b = story22.map((story, i) => {
            let speech = Object.values(story);
            let yes = speech[1];
            if (speech[1] != 'null') {
                let thing = document.createElement("SPAN");
                let node = document.createElement("INPUT");
                let textnode = document.createTextNode(yes);
                thing.appendChild(textnode);
                node.setAttribute("id", "userInput")
                document.getElementById("myList").appendChild(node);
                document.getElementById("myList").appendChild(thing);
            }


        })

        return b;
    }

    let onSubmitMadlit = (event) => {

        let inputArray = Array.from(document.querySelectorAll("#userInput"));
        //console.log(inputArray)
        let inputWords = inputArray.map((item) => item.value);
        //console.log(inputWords);
        let inputIndex = 0;
        for (let i = 0; i < story22.length; i++) {
            if (story22[i].partOfSpeech !== 'null') {

                story22[i].word = inputWords[inputIndex];
                inputIndex++;

            }
        }
        console.log(story22)


        setShowInputs(false)
        setShowStory(true)

    }

    return (
        <div>
            <div className={play.backgroundHome}></div>


            <Navigation />
            <div className={play.absoluteContainer}>
                <div className={play.middleSquareContainer}>
                    <div className={play.middleSquare}>

                        {showInputs &&

                            <form >
                                <ul id="myList">

                                </ul>
                                <button onClick={onSubmitMadlit} >
                                    Submit
                                </button>

                            </form>
                        }

                        {showStory &&
                            <div>
                                <form>
                                    <p>{story22.map((wordObject, i) => (<span>{wordObject.word} </span>))}</p>
                                    { /*<input className={play.bars}></input> <button className={play.randomButton}>RANDOM</button> */}

                                    {/* create an error: if all inputs are not filled, throw an error to prevent submit */}


                                </form>
                                
                                <button>Play Again?</button>
                                {/* To play again, maybe store story data in the localstorage/session storage? */}
                                
                                <button>Back to Browse!</button>
                                <button>Insert Like and save button</button>
                            </div>
                        }
                    </div>
                </div>

            </div>


        </div>





    );

}


export default Playing;