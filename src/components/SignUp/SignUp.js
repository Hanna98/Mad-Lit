import React, { useState, useContext } from 'react'
import signup from './SignUp.module.css';
import { UserContext } from "../UserContext";



const SignUp = (props) => {
    let {userValue, userLoginValue} = useContext(UserContext)
    let [ user, setUser ] = userValue
    let [userLogin, setUserLogin] = userLoginValue


    let [signUpUsername, setSignUpUsername] = useState('')
    let [signUpEmail, setSignUpEmail] = useState('')
    let [signUpPassword, setSignUpPassword] = useState('')


    let onSubmitSignUp = () => {
        console.log(signUpUsername)
        fetch('http://localhost:3001/signup', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: signUpUsername,
                email: signUpEmail,
                password: signUpPassword
            })

        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log(data) //************3*** */
                    setUser({
                       // ...user,
                        id: data.id,
                        username: data.username,
                        email: data.email,

                    })
                    props.history.push('/');

                }
            })

    }

    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>

            <div className={signup.leftBox}>
            </div>
            <div className={signup.rightBox}>
                <h1 className={signup.title}>JOIN THE MADNESS</h1>
                <form id="formContent">
                    <input className={signup.bar}
                        onChange={event => setSignUpUsername(event.target.value)}
                        type="username"
                        placeholder="username">
                    </input>

                    <input className={signup.bar}
                        onChange={event => setSignUpEmail(event.target.value)}
                        type="email"
                        placeholder="email">

                    </input>

                    <input className={signup.bar}
                        onChange={event => setSignUpPassword(event.target.value)}
                        type="password"
                        placeholder="password">
                    </input>

                    <input className={signup.button}
                        onClick={() => onSubmitSignUp()}
                        placeholder="Submit">
                    </input>

                    <button className={signup.bar}>Sign Up with Google</button>




                </form>
            </div>
        </div>
    );

}

export default SignUp;