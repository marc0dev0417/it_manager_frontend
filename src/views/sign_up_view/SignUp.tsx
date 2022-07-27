import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'

import './sign_up_style/sign_up.css'

import PopUp from '../pop_up_view/PopUp';
//image =>
import logoSignUp from '../../util/sign_up.svg'

import UserStore from '../../viewmodels/auth/UserStore';
import { observer } from "mobx-react-lite";

const userStore = UserStore.getUserStore()

const SignUp = () => {

    const containerPopUp = document.getElementById('modal_container')
    const navigate = useNavigate()

    const [email, setEmail] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    async function handleSignUp() {
        if (email === '' || username === '' || password === '') {
            alert('Must fill fields')
            containerPopUp?.classList.remove('show')
        } else {
            await userStore.userRegister(email, username, password)
            containerPopUp?.classList.add('show')

            setTimeout(() => {
                containerPopUp?.classList.remove('show')
            }, 3000);
        }
    }

    return (
        <>
            <div id="container_sign_up">
                <img src={logoSignUp} alt='asdf'></img>
                <div id="container_content">
                    <h2>Sign Up</h2>
                    <p>Manage your proyect with task manager</p>
                    <div id="container_input">
                        <input type='text' placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                        <input type='text' placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
                        <input type='password' placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                        <button id="button_signin" onClick={handleSignUp}>Sign Up</button>
                        <button id="button_signup" onClick={() => navigate('/')}>Back</button>
                    </div>
                </div>
            </div>
            {
                userStore.getError ? <PopUp message="User already exists" /> : userStore.getError === false
                    ? <PopUp message="User Registered" /> : !navigator.onLine ?
                        <PopUp message="Not conection" /> : <></>
            }
        </>
    )
}
export default observer(SignUp)