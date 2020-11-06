import React, { useState, useContext } from 'react'
import login from './Login.module.css';
import { UserContext } from "../UserContext";


const Login = (props) => {
    let {userValue, userLoginValue} = useContext(UserContext)
    let [ user, setUser ] = userValue
    let [userLogin, setUserLogin] = userLoginValue

    let [logInUsername, setLogInUsername] = useState('')
    let [logInEmail, setLogInEmail] = useState('')
    let [logInPassword, setLogInPassword] = useState('')

    

    let onSubmitLogIn = () => {
        fetch('http://localhost:3001/login', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: logInEmail,
                password: logInPassword
            })
        })

            .then(response => response.json())
            .then(data => {
                console.log(data)
                // {id: 20, email: "test000@gmail.com", username: "test000"}
                // assign these to user state in app.js
                if (data.id) {
                    setUser({
                        // ...user,
                        id: data.id,
                        username: data.username,
                        email: data.email,

                    })
                    localStorage.setItem('logged_in', 'true');
                    setUserLogin(true);

                    props.history.push('/');

                }
            })

    }



    return (
        <div>
            <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"></link>
            <div className={login.loginBackground}>

            </div>

            <div className={login.middleSquareContainer}>
                <div className={login.middleSquare}>
                    <h1 className={login.title}>WELCOME BACK</h1>
                    
                    <form>
                        <input className={login.bar}
                            onChange={event => setLogInEmail(event.target.value)}
                            type="username"
                            placeholder="username or email">

                        </input>

                        <input className={login.bar}
                            onChange={event => setLogInPassword(event.target.value)}
                            type="password"
                            placeholder="password">

                        </input>

                        <div className={login.grayLine}>

                        </div>


                        <div className={login.btnContainer}>
                            <input className={login.btn}
                                onClick={() => onSubmitLogIn()}
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
export default Login;