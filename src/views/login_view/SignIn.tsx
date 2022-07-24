import React from 'react';

import './login_style/login.css'
import { User } from '../../models/User'

const SignIn = () => {

   const user: User = {
      id: 1,
      name: "dasf"
   }

   return (
      <div id="container_login">
         <div id="container_content">
            <h2>Sign in</h2>
            <p>Manage your proyect with task manager</p>
            <div id="container_input">
               <input placeholder="Email"/>
                  <input placeholder="Password"/>
                     <button id="button_signin">Sign in</button>
                     <button id="button_signup">Sign up</button>
                  </div>
            </div>
         </div>
         )
}
         export default SignIn