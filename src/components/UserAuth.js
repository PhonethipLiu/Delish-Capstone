import React, { Component } from 'react';
import './main.css';
import LoginForm from './forms/LoginForm';
import { Link } from 'react-router-dom';

export default class Authentication extends Component {
    state = {
        authed: false,
        user: {},
        fieldErrors: false
    }

    componentDidMount() {

    }

    // method to authenticate user
    authenticateUser = (email, password) => {
        console.log(email, password);
        fetch('https://delish-d7b99.firebaseio.com/user?email=${userEmail}&&password=${userPassword}`)
        .then((data)=>{
            return data.json();
        }).then((userArray)=>{
            console.log("USER ARRAY", userArray);
            if(userArray.length===0){
                console.log("USER DOES NOT EXIST")
            } else {
                this.setState({
                    user: userArray[0],
                    authed: true
                })
                const userObj = JSON.stringify(userArray[0]);
                // Need to set function
                // xxxxxx.setItem('user', userObj);
            }
        })
    }

    isUserAuthed = () => {
        if (this.state.authed){
            return (
                <Xxxxxx 
            )
        }
    }


}