import React, { Component } from 'react'
import writing from './Writing.module.css';
import Navigation from '../Navigation/Navigation.js';


class Writing extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showButtons: false,
            loading: true,
            showTextBox: true
        }
    }

    clickedIndex = null;
    wordArray = [];

    componentDidMount() {
      // this.theProcess();
    }

    onNounClick = () => {
        console.log(this.clickedIndex)
        if (this.clickedIndex === null) { return; }
        this.wordArray[this.clickedIndex].partOfSpeech = 'noun';
        console.log(this.wordArray);
        this.setState({ showButtons: false })

    }

    onAdjectiveClick = () => {
        console.log(this.clickedIndex)
        if (this.clickedIndex === null) { return; }
        this.wordArray[this.clickedIndex].partOfSpeech = 'adjective';
        console.log(this.wordArray);
        this.setState({ showButtons: false })

    }

    onVerbClick = () => {
        console.log(this.clickedIndex)
        if (this.clickedIndex === null) { return; }
        this.wordArray[this.clickedIndex].partOfSpeech = 'Verb';
        console.log(this.wordArray);
        this.setState({ showButtons: false })

    }

   
    // theProcess is run after user writes the story and submits it 
    // theProcess splits the words up into usable variables
    theProcess = (event) => {
       // event.preventDefault();
        let story = document.getElementById('myTextArea').value;


        console.log('the process was called');
        let words = story.trim().split(/[;,.!?\s]+/); // BUG!!! extra value at the end ?? ("") 

        this.wordArray = words.map((word) => {
            return {
                word: word,
                partOfSpeech: null
            };
        });
        console.log(this.wordArray);
        this.setState({ loading: false })
        this.setState({ showTextBox: false })

    }

    handleClick = (index) => {
        this.setState({ showButtons: true })
        this.clickedIndex = index;
    };

    render() {

        return (
            <div>
                <div className={writing.backgroundHome}></div>


                <Navigation />
                <div className={writing.absoluteContainer}>
                    <div className={writing.middleSquareContainer}>
                        <div className={writing.middleSquare}>
                            {this.state.showTextBox &&
                            <form>
                                <textarea id="myTextArea" rows="20" cols="80"> Write a fire ass story bith </textarea>
                                <button onClick ={()=> {this.theProcess()}}> Submit!! </button>
                            </form>
                            }
                            <p>
                                {this.wordArray.map((wordObject, i) => (<span onClick={() => { this.handleClick(i) }}>{wordObject.word} </span>))}
                            </p>

                            {this.state.showButtons && <div>
                                <button
                                    onClick={this.onNounClick}>
                                    NOUN
                                </button>

                                <button
                                    onClick={this.onAdjectiveClick}>
                                    ADJECTIVE
                                </button>
                                <button
                                    onClick={this.onVerbClick}>
                                    VERB
                                </button>
                            </div>}
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}
export default Writing;