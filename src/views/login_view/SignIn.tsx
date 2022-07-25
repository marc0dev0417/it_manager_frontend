import React from 'react';
import { useNavigate } from 'react-router-dom';

import './login_style/login.css'

//image =>
 import logoTask from '../../util/task_image.svg'

const SignIn = () => {

   const navigate = useNavigate()

   return (
      <div id="container_login">
         <img src={logoTask} alt='asdf'></img>
         <div id="container_content">
            <h2>Sign in</h2>
            <p>Manage your proyect with task manager</p>
            <div id="container_input">
               <input placeholder="Email"/>
                  <input type='password' placeholder="Password"/>
                     <button id="button_signin">Sign in</button>
                     <button id="button_signup" onClick={() => navigate('/SignUp')}>Sign up</button>
                  </div>
            </div>
         </div>
         )
}
         export default SignIn