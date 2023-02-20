import React from "react";
import {auth, provider, providers} from "../firebase-config";
import  {signInWithPopup} from "firebase/auth";


function Login({setIsAuth}) {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then(() => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true)
        });
    };

    return (
        <div className="loginPage">
        <p>Sign In With Google to Continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}>
            Sign In with Google
        </button>
    </div>);
}

export default Login;