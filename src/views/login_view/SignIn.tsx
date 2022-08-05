import React, { MouseEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css'
import UserStore from '../../viewmodels/auth/UserStore';
import InvitedStore from '../../viewmodels/auth/InvitedStore'
import logoTask from '../../util/task_image.svg'
import { observer } from 'mobx-react-lite';

const userStore = UserStore.getUserStore()
const invitedStore = InvitedStore.getInvitedStore()

const SignIn = () => {
   // console.log(userStore.getAuth)
   const containerPopUp = document.getElementById('modal_container')
   const navigate = useNavigate()

   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')

   async function handleLogin() {
      await userStore.userLogin(email, password)
      if (!userStore.getError) {
         navigate('/')
        
      }
   }
   function handleInvited(){
      invitedStore.setIsInvited(true)

      console.log(invitedStore.getInvited)
     navigate('/') 
      //window.location.reload()
   }

   return (
      <>
         <div className="flex flex-row">
         <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={handleInvited}>Invited</button>
         </div>
         <div className='flex flex-row flex-wrap justify-center items-center h-screen'>
            <img className='w-96' src={logoTask} alt='asdf'></img>
            <div className='border bg-white h-85 p-5 ml-5 drop-shadow-2xl shadow-cyan-500/50'>
               <h2 className='font-bold text-lg'>Sign in</h2>
               <p className='mt-7'>Manage your proyect with task manager</p>
               <div className='flex flex-col gap-5 my-6'>
                  <input className=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                     type='text' placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                  <input className=' form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                     type='password' placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                     <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={handleLogin}>Sign In</button>   
                     <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={() => navigate('/SignUp')}>Register</button>                     
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