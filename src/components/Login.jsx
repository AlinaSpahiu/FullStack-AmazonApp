import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import {Link, useHistory} from "react-router-dom";
import logo from "../../src/components/images/logo1.jpg";
import {auth} from "../firebase";
import "./styles/Login.css";


function Login() {
    const history = useHistory() //allows programaticly change the url
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    // signin Function
    const signIn = e =>{
          e.preventDefault();

          auth.signInWithEmailAndPassword(email, password)
          .then(auth =>{ history.push("/") })
          .catch(error => alert(error.message))
          
    }
    
    // register Function
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //it successfully created a new user
            console.log(auth);
            if(auth){
                history.push("/");
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">

            <Link to="/">
                <img className="login-logo"
                     src={logo}
                     alt=""
                />
            </Link>  

            <div className="login-container">
                <h1> Sign-in </h1>
                <form>
                   <h5> E-mail </h5>
                   <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                   <h5> Password</h5>
                   <input type="password" value={password} onChange={e=> setPassword(e.target.value)} />

                   <button className="login-signinButton"
                           type="submit" 
                           onClick={signIn} 
                           > Sign In
                   </button>
                </form>    
                <p>
                    Vy signing-in you agree to the Amazone Fake Clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login-registerButton"
                        onClick={register}
                        > Create your Amazon Account
                </button>
            </div>   

        </div>
    )
}

export default Login
