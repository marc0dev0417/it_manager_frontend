import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'tailwindcss/tailwind.css'
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
   
         await userStore.userLogin(email, password)
         containerPopUp?.classList.add('show')

         if(userStore.getIsLogged){
            navigate('/home')
            window.location.reload()
         }else{
            navigate('/')
         }
     
         setTimeout(() => {
            containerPopUp?.classList.remove('show')
         }, 3000)
      }

   const getMessagePopUp = () => {
      let message = ''

      if(email === '' || password === ''){
        return message = 'Must fill all fields'
      }
      if(userStore.getError){
        return message = 'User did not logged'
      }else{
        return message = 'User logged'
      }
   } 

   return (
      <>
         <div className='flex flex-row flex-wrap justify-center items-center h-screen'>
            <img className='w-96' src={logoTask} alt='asdf'></img>
            <div className='border bg-white h-85 p-5 ml-5 drop-shadow-2xl shadow-cyan-500/50'>
               <h2 className='font-bold text-lg'>Sign in</h2>
               <p className='mt-7'>Manage your proyect with task manager</p>
               <div className='flex flex-col gap-5 my-6'>
                  <input className=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' 
                  type='text' placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
                  <input className=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' 
                  type='password' placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                  <button className='rounded-3xl bg-blue-500 hover:bg-blue-700 text-white' ><p className='p-2'>Sign in</p></button>
                  <button className='rounded-3xl bg-blue-500 hover:bg-blue-700 text-white' onClick={() => navigate('/SignUp')}><p className='p-2'>Sign up</p></button>
               </div>
            </div>
            </div>
         {
            //userStore.getError ? <PopUp message='User did not logged'/> : <PopUp message='User logged'/>
            //<PopUp message={getMessagePopUp()}/>
         }
      </>
   )
}
export default observer(SignIn)