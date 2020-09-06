import React, { Component } from 'react'
import signup from'./SignUp.module.css';


class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signUpUsername: '',
            signUpEmail: '',
            signUpPassword: ''
        }
    }

    onUsernameChange = (event) => {
        this.setState({signUpUsername: event.target.value})
    }

    onEmailChange = (event) => {
        this.setState({signUpEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signUpPassword: event.target.value})
    }

    onSubmitSignUp = () => {
        fetch('http://localhost:3001/signup', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: this.state.signUpUsername,
                email: this.state.signUpEmail,
                password:this.state.signUpPassword
            })
        
        })
            .then(response => response.json())
            .then(user => {
                if (user) {
                    
                    this.props.history.push('/');
                   
                }
            })
        
    }




render(){
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