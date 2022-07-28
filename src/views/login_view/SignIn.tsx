import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './login_style/login.css'

import UserStore from '../../viewmodels/auth/UserStore';

//image =>
import logoTask from '../../util/task_image.svg'

import PopUp from '../pop_up_view/PopUp';

import { observer } from 'mobx-react-lite';

const userStore = UserStore.getUserStore()

const SignIn = () => {
  // console.log(userStore.getAuth)
   const containerPopUp = document.getElementById('modal_container')
   const navigate = useNavigate()

   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')

  async function handleLogin(){
      if(email === '' || password === ''){
         alert('Must fill fields')
            
      }else{
         await userStore.userLogin(email, password)
         containerPopUp?.classList.add('show')

         setTimeout(() => {
            containerPopUp?.classList.remove('show')
         }, 3000)
      }
   }

   return (
      <>
         <div id="container_login">
            <img src={logoTask} alt='asdf'></img>
            <div id="container_content">
               <h2>Sign in</h2>
               <p>Manage your proyect with task manager</p>
               <div id="container_input">
                  <input type='text' placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                  <input type='password' placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                  <button id="button_signin" onClick={handleLogin}>Sign in</button>
                  <button id="button_signup" onClick={() => navigate('/SignUp')}>Sign up</button>
               </div>
            </div>
            </div>
         {
            userStore.getError ? <PopUp message='User did not logged'/> : <PopUp message='User logged'/>
         }
      </>
   )
}
export default observer(SignIn)