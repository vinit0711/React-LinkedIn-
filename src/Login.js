import firebase, { auth } from 'firebase';

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import login_image from './Linkedin-login.png'; // Tell Webpack this JS file uses this image
// import { selectUser, logout, login } from './features/userSlice';

import "./Login.css"

function Login() {
    const [name, SetName] = useState("");
    const [profile, SetProfile] = useState("");
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    const dispatch = useDispatch();
    // const userAuth = firebase.auth().currentUser;

    const resgister = () => {
        if (!name) {
            return window.alert('Please enter a Full Name')
        }

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCred) => {
                userCred.user.updateProfile({
                    displayName: name,
                    photoURL: profile,
                })
            })
            .then(() => {
                const currentUser = auth().currentUser;
                console.log(currentUser)
                dispatch(login({
                    email: currentUser.email,
                    uid: currentUser.uid,
                    displayName: name,
                    photoURL: profile

                }))
            }).catch(e => alert(e.message))
    };
    const loginToAPP = (e) => {
        console.log("logging function is called")
        e.preventDefault(); //
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                const currentUser = auth().currentUser;
                console.log("loggred in photoURL", currentUser.photoURL)
                dispatch(login({
                    email: currentUser.email,
                    uid: currentUser.uid,
                    name: currentUser.displayName,
                    profilePhotoUrl: currentUser.photoURL,
                    ttte: "bb"

                }))
            }).catch(e => alert(e))
    };

    return (
        <div className="login">
            <img src={login_image} alt="" />
            <form >
                <input type="text" value={name} onChange={e => SetName(e.target.value)} placeholder="Full Name required if registering" />
                <input type="text" value={profile} onChange={e => SetProfile(e.target.value)} placeholder="Profile Pic URL" />
                <input type="text" value={email} onChange={e => SetEmail(e.target.value)} placeholder="Email" />
                <input placeholder="Password" onChange={e => SetPassword(e.target.value)} value={password} type="password" />
                <button onClick={loginToAPP} >Sign In</button>

            </form>
            <p>Not a member   <span className="login__register" onClick={resgister}>Regiter Now</span></p>
        </div>
    )
}

export default Login