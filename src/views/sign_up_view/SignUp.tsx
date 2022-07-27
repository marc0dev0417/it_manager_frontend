import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'

import './sign_up_style/sign_up.css'

//image =>
import logoSignUp from '../../util/sign_up.svg'

import UserStore from '../../viewmodels/auth/UserStore';

const userStore = UserStore.getUserStore()

const SignUp = () => {

const navigate = useNavigate()

const [email, setEmail] = useState<string>('')
const [username, setUsername] = useState<string>('')
const [password, setPassword] = useState<string>('')

function handleSignUp(){
    email === '' || username === '' || password === '' ? alert('Must fill fields') 
    :
     userStore.userRegister(email, username, password)
}

    return (
        <div id="container_sign_up">
            <img src={logoSignUp} alt='asdf'></img>
            <div id="container_content">
                <h2>Sign Up</h2>
                <p>Manage your proyect with task manager</p>
                <div id="container_input">
                    <input type='text' placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} />
                    <input type='text' placeholder="Username" onChange={(e) => {setUsername(e.target.value)}}/>
                    <input type='password' placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                    <button id="button_signin" onClick={handleSignUp}>Sign Up</button>
                    <button id="button_signup" onClick={() => navigate('/')}>Back</button>
                </div>
            </div>
        </div>
    )
}
export default SignUp