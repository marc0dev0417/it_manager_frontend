import React from "react";
import { useNavigate } from 'react-router-dom'

import './sign_up_style/sign_up.css'

//image =>
import logoSignUp from '../../util/sign_up.svg'

const SignUp = () => {

    const navigate = useNavigate()
    return (
        <div id="container_sign_up">
            <img src={logoSignUp} alt='asdf'></img>
            <div id="container_content">
                <h2>Sign Up</h2>
                <p>Manage your proyect with task manager</p>
                <div id="container_input">
                    <input type='text' placeholder="Email" />
                    <input type='text' placeholder="Username" />
                    <input type='password' placeholder="Password" />
                    <button id="button_signin">Sign Up</button>
                    <button id="button_signup" onClick={() => navigate('/')}>Back</button>
                </div>
            </div>
        </div>
    )
}
export default SignUp