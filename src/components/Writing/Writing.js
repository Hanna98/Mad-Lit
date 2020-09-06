import React, { Component } from 'react'
import writing from './Writing.module.css';
import Navigation from '../Navigation/Navigation.js';
import Word from '../Writing/Word.js';


class Writing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showButtons: false,
            loading: true
        }
    }

    clickedIndex = null;
    wordArray = [];

    componentDidMount() {
        this.theProcess();
    }

    onNounClick = () => {
        console.log(this.clickedIndex)
        if(this.clickedIndex === null) { return; }
        this.wordArray[this.clickedIndex].partOfSpeech = 'noun';
        console.log(this.wordArray);
    }


    // theProcess is run after user writes the story and submits it 
    // theProcess splits the words up into usable variables
   theProcess = () => {
        let story2 = `There once was a beautiful cat. My-oh-my what a beautiful cat! It was so beautiful that everyone died the end.`

        console.log('the process was called');
        let words = story2.trim().split(/[;,.!?\s]+/); // BUG!!! extra value at the end ?? ("") 

        this.wordArray = words.map((word) => {
            return {
                word: word,
                partOfSpeech: null
            };
        });

        this.setState({loading: false})
    }

    handleClick = (index) => {
        this.setState({showButtons: true})
        this.clickedIndex = index;
    };

    render() {
        let story3 = `hello this is a test. do dashes-count? it looks like punctuation doesn't; at all!!!!`

        return (
            <div>
                <div className={writing.backgroundHome}></div>


                <Navigation />
                <div className={writing.absoluteContainer}>
                    <div className={writing.middleSquareContainer}>
                        <div className={writing.middleSquare}>

                            <p>
                                {this.wordArray.map((wordObject, i) => (<span onClick={() => {this.handleClick(i)}}>{wordObject.word} </span>))}
                            </p>

                            {this.state.showButtons && <div>
                                <button
                                    onClick={this.onNounClick}>
                                    NOUN
                                    </button>
                                <button>ADJECTIVE</button>
                                <button>VERB</button>
                            </div>}
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}
export default Writing;