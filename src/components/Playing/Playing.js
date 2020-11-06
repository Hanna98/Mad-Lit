import React, { useState,  useEffect } from 'react'
import play from './Playing.module.css';
import Navigation from '../Navigation/Navigation.js';
import { Link, useLocation } from 'react-router-dom';





const Playing = (props) => {
    let [showInputs, setShowInputs] = useState(true);
    let [showStory, setShowStory] = useState(false);
    let[newStory, setNewStory]=useState([])
    console.log(newStory)

   let location = useLocation();
    console.log(location)

    let story22 = [
        { word: "There", partOfSpeech: null },
        { word: "once", partOfSpeech: null },
        { word: "was", partOfSpeech: null },
        { word: "a", partOfSpeech: null },
        { word: "beautiful", partOfSpeech: "adjective" },
        { word: "cat", partOfSpeech: "noun" },
        { word: "My-oh-my", partOfSpeech: null },
        { word: "what", partOfSpeech: null },
        { word: "a", partOfSpeech: null },
        { word: "beautiful", partOfSpeech: "adjective" },
        { word: "cat", partOfSpeech: "noun" },
        { word: "It", partOfSpeech: null },
        { word: "was", partOfSpeech: null },
        { word: "so", partOfSpeech: null },
        { word: "beautiful", partOfSpeech: "adjective" },
        { word: "that", partOfSpeech: null },
        { word: "everyone", partOfSpeech: null },
        { word: "died", partOfSpeech: null },
        { word: "the", partOfSpeech: null },
        { word: "end", partOfSpeech: null },
    ]

    useEffect(() => {
        convertToPlay();
    },[]);

    // componentDidMount() {
    //     this.convertToPlay();

    // }


    let convertToPlay = () => {
        let story22 = [
            { word: "There", partOfSpeech: null },
            { word: "once", partOfSpeech: null },
            { word: "was", partOfSpeech: null },
            { word: "a", partOfSpeech: null },
            { word: "beautiful", partOfSpeech: "adjective" },
            { word: "cat", partOfSpeech: "noun" },
            { word: "My-oh-my", partOfSpeech: null },
            { word: "what", partOfSpeech: null },
            { word: "a", partOfSpeech: null },
            { word: "beautiful", partOfSpeech: "adjective" },
            { word: "cat", partOfSpeech: "noun" },
            { word: "It", partOfSpeech: null },
            { word: "was", partOfSpeech: null },
            { word: "so", partOfSpeech: null },
            { word: "beautiful", partOfSpeech: "adjective" },
            { word: "that", partOfSpeech: null },
            { word: "everyone", partOfSpeech: null },
            { word: "died", partOfSpeech: null },
            { word: "the", partOfSpeech: null },
            { word: "end", partOfSpeech: null },
            { word: "", partOfSpeech: null }
        ]
        let b = story22.map((story, i) => {
            let speech = Object.values(story);
            let yes = speech[1];
            if (speech[1] != null) {
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
            if (story22[i].partOfSpeech !== null) {

                story22[i].word = inputWords[inputIndex];
                inputIndex++;
            }
        }
       // console.log(story22)

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

                            <form>

                                <ul id="myList">
                                </ul>
                                <button onClick={onSubmitMadlit()}>
                                    Submit
                                </button>

                            </form>
                        }
                        {showStory &&
                            <form>
                                <p>{story22.map((wordObject, i) => (<span>{wordObject.word} </span>))}</p>
                                { /*<input className={play.bars}></input> <button className={play.randomButton}>RANDOM</button> */}

                                {/* create an error: if all inputs are not filled, throw an error to prevent submit */}


                            </form>
                        }
                    </div>
                </div>

            </div>


        </div>





    );

}


export default Playing;