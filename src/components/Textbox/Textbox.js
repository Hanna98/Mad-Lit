// NAVIGATION BEFORE HOOKS

class Navigation extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showProfile: false,
            showLogSigns: true
        }
    }

    componentDidMount() {
        console.log(this.props)

        this.loggedIn2()
    }
    loggedIn2 = () => {
        let storage = localStorage.getItem('logged_in')
        if (storage === 'true') {
            this.setState({ showProfile: true })
            this.setState({ showLogSigns: false })



        }
    }

    render() {
        return (

            <div>

                <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
                <div className={nav.topWhiteBar}>

                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1 className={nav.madLit}>MAD LIT</h1>
                    </Link>
                    <form className={nav.searchForm}>
                        <input className={nav.searchBar} type="text" placeholder="Search">
                        </input>

                    </form>


                    <div className={nav.logSignButtons}>
                        {this.state.showProfile &&
                            <Link to={"/profile"}>
                                <button className={nav.circle}></button>
                            </Link>
                        }

                        {this.state.showLogSigns &&
                            <div>
                                <Link to="/login">
                                    <button className={nav.button}>

                                        Log In
                                    </button>
                                </Link>

                                <Link to="/signup">
                                    <button className={nav.button}>
                                        Sign Up
                                    </button>
                                </Link>
                            </div>
                        }
                    </div>


                </div>







            </div>
        );
    }
};

export default Navigation;

// HOMEPAGE BEFORE IT BECAME A FUNCTIONAL COMPONENT


class Homepage extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount() {

        this.loggedIn()
    }

    loggedIn = () => {
        let storage = localStorage.getItem('logged_in')
        if (storage === 'true') {
            return "logged in right now!"

        }
        else if (storage === 'false') {
            return "not logged in right now!"
        }
    }
    //userData={this.props.user}
    //this.props.userData
    render() {
        return (
            <div>
                <Navigation userData={this.state.user} />
                <div className={home.absoluteContainer}>

                    <div className={home.leftSidebar}>
                        Status: {this.loggedIn()}
                    </div>

                    <div className={home.container}>


                        <header className={home.header}>{this.props.userData}</header>


                        <div className={home.outerGridContainer}>
                            <div className={home.gridContainer}>
                                <Cards />

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
};




export default Homepage;

//APP BEFORE HOOKS
let [user, setUser] = useState({
    id: '',
    username: '',
    name: '',
    email: '',


})


import React, { useState } from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage.js';
import SignUp from './components/SignUp/SignUp.js';
import Login from './components/Login/Login.js';
import Profile from './components/Profile/Profile.js';
import Playing from './components/Playing/Playing.js';
import Writing from './components/Writing/Writing.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {
                id: '',
                username: '',
                name: '',
                email: '',

            }

        }

    }

    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                username: data.username,
                email: data.email,
            }
        })
    }



    render() {

        return (
            <Router>

                <div>
                    <Switch>

                        <Route path="/" exact component={Homepage} coco={"it is being passed!"} />
                        <Route path="/signup" exact component={SignUp} loadUser={this.loadUser} />
                        <Route path="/login" exact component={Login} loadUser={this.loadUser} />
                        <Route path="/profile/:id" exact component={Profile} />
                        <Route path="/playing" exact component={Playing} /> {/* fix this later, currently hardcoded */}
                        <Route path="/writing" exact component={Writing} /> {/* fix this later, currently hardcoded */}
                    </Switch>
                </div>
            </Router>

        );
    }
}

export default App;

/// SIGN UP COMPONENT BEFORE HOOKS

import React, { Component } from 'react'
import signup from './SignUp.module.css';


class SignUp extends React.Component {
    constructor(props) {
        super();
        this.state = {
            signUpUsername: '',
            signUpEmail: '',
            signUpPassword: ''
        }
    }

    onUsernameChange = (event) => {
        this.setState({ signUpUsername: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ signUpEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signUpPassword: event.target.value })
    }

    onSubmitSignUp = () => {
        fetch('http://localhost:3001/signup', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: this.state.signUpUsername,
                email: this.state.signUpEmail,
                password: this.state.signUpPassword
            })

        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    console.log(user) //*************** */
                    this.props.loadUser(user)
                    this.props.history.push('/');

                }
            })

    }






    render() {
        return (
            <div>
                <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>

                <div className={signup.leftBox}>
                </div>
                <div className={signup.rightBox}>
                    <h1 className={signup.title}>JOIN THE MADNESS</h1>
                    <form id="formContent">
                        <input className={signup.bar}
                            onChange={this.onUsernameChange}
                            type="username"
                            placeholder="username">
                        </input>

                        <input className={signup.bar}
                            onChange={this.onEmailChange}
                            type="email"
                            placeholder="email">

                        </input>

                        <input className={signup.bar}
                            onChange={this.onPasswordChange}
                            type="password"
                            placeholder="password">
                        </input>

                        <input className={signup.button}
                            onClick={this.onSubmitSignUp}
                            placeholder="Submit">
                        </input>

                        <button className={signup.bar}>Sign Up with Google</button>




                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;


/// LOGIN BEFORE HOOKS

import React, { Component } from 'react'
import login from './Login.module.css';

class Login extends React.Component {
    constructor(props) {
        super();
        this.state = {
            logInEmail: '',
            logInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ logInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ logInPassword: event.target.value })
    }

    onSubmitLogIn = () => {
        fetch('http://localhost:3001/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.logInEmail,
                password: this.state.logInPassword
            })

        })

            .then(response => response.json())
            .then(user => {
                console.log(user)
                // {id: 20, email: "test000@gmail.com", username: "test000"}
                // assign these to user state in app.js
                if (user.id) {

                    localStorage.setItem('logged_in', 'true');

                    this.props.history.push('/');

                }
            })

    }

    render() {

        return (
            <div>
                <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
                <div className={login.loginBackground}>

                </div>

                <div className={login.middleSquareContainer}>
                    <div className={login.middleSquare}>
                        <h1 className={login.title}>WELCOME BACK</h1>
                        <h2> Status: {this.props.loggedInStatus}</h2>
                        <form>
                            <input className={login.bar}
                                onChange={this.onEmailChange}
                                type="username"
                                placeholder="username or email">

                            </input>

                            <input className={login.bar}
                                onChange={this.onPasswordChange}
                                type="password"
                                placeholder="password">

                            </input>

                            <div className={login.grayLine}>

                            </div>


                            <div className={login.btnContainer}>
                                <input className={login.btn}
                                    onClick={this.onSubmitLogIn}
                                    placeholder="Log In"
                                >
                                </input>
                            </div>


                            <button className={login.bar}>Log in with Google</button>

                        </form>


                    </div>
                </div>
            </div>

        );
    }
}
export default Login;

///PROFILE BEFORE HOOKS

import React, { Component } from 'react';
import profile from './Profile.module.css';
import Writing from '../Writing/Writing.js';
import Cards from '../Cards/Cards.js';
import { Link } from 'react-router-dom';



class Profile extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    componentDidMount(){
        console.log(this.props)
        let id=this.props.match.params.id;
    }

    // onSubmitLikedStories = () => {
    //     fetch('http://localhost:3001/Profile', {
    //         method: 'post',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             email: this.state.logInEmail,
    //             password: this.state.logInPassword
    //         })

    //     })

    // }
    render() {
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

                                <Link to="/writing" style={{ textDecoration: 'none' }}>
                                    <button className={profile.button}>
                                        Create New Story
                                    </button>
                                </Link>
                                <button className={profile.button}>
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
                                <Cards />

                            </div>
                        </div>
                    </div>
                </div>

            </div>



        )
    }

}

export default Profile;

//PLYAING BEFORE HOOKS

import React, { Component } from 'react'
import play from './Playing.module.css';
import Navigation from '../Navigation/Navigation.js';





class Playing extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showInputs: true,
            showStory: false
        }
    }
    story22 = [
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

    componentDidMount() {
        this.convertToPlay();

    }


    convertToPlay = () => {
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

    onSubmitMadlit = (event) => {

        event.preventDefault();

        let inputArray = Array.from(document.querySelectorAll("#userInput"));
        console.log(inputArray)
        let inputWords = inputArray.map((item) => item.value);
        console.log(inputWords);

        let inputIndex = 0;
        for (let i = 0; i < this.story22.length; i++) {
            if (this.story22[i].partOfSpeech !== null) {

                this.story22[i].word = inputWords[inputIndex];
                inputIndex++;
            }
        }
        console.log(this.story22)

        this.setState({ showInputs: false })
        this.setState({ showStory: true })

    }

    render() {


        return (
            <div>
                <div className={play.backgroundHome}></div>


                <Navigation />
                <div className={play.absoluteContainer}>
                    <div className={play.middleSquareContainer}>
                        <div className={play.middleSquare}>

                            {this.state.showInputs &&

                                <form>

                                    <ul id="myList">
                                    </ul>
                                    <button onClick={this.onSubmitMadlit}>
                                        Submit
                                </button>

                                </form>
                            }
                            {this.state.showStory &&
                                <form>
                                    <p>{this.story22.map((wordObject, i) => (<span>{wordObject.word} </span>))}</p>
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
}


export default Playing;