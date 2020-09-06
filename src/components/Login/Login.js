import React, { Component } from 'react'
import login from './Login.module.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logInEmail: '',
            logInPassword: ''
        }
    }
    
    onEmailChange = (event) => {
        this.setState({logInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({logInPassword: event.target.value})
    }

    onSubmitLogIn = () => {
        fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.logInEmail,
                password:this.state.logInPassword
            })
        
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                   this.props.history.push('/');
                   
                }
            })
        
    }

render(){
    
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