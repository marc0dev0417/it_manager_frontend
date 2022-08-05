import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
import letterLogo from "../../util/letter_m.svg"
//Styles =>
import 'tailwindcss/tailwind.css'

import CounterStore from "../../viewmodels/CounterStore";
import UserStore from "../../viewmodels/auth/UserStore";
import { JsxElement } from "typescript";
import InvitedStore from "../../viewmodels/auth/InvitedStore";


const userStore = UserStore.getUserStore()
const invitedStore = InvitedStore.getInvitedStore()



const MenuNav = () => {
    console.log(userStore.getIsLogged)
    
    //console.log(invitedStore.getInvited.toString())
    const navItemList: string[] = ['Home', 'Task Manager', 'About Me']
    const navigate = useNavigate()

    function handleLogOut() {
        userStore.removeUserData()
        navigate('/login')
        window.location.reload()
    }
    function renderButtonNav() {

        if(invitedStore.getInvited){
           return  <button className='inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out' onClick={() => {navigate('/signUp');invitedStore.setIsInvited(false)}} name='Sign Up'>Sign Up</button>      
        }
        if(userStore.getIsLogged){
           return <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={handleLogOut}>Sign out</button>
        }
       
        /*
       if(userStore.getIsInvited){
        
        return renderButton = <Button functionHandle={() => { navigate('/signUp')}} name='Sign Up'/>
       }
       */
      

        /*
        return !userStore.getIsLogged || userStore.isInvited ? <> <button type="button" className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up</button>
        </> : <>
            <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" onClick={handleLogOut}>Sign out</button>
        </>
        */
    }

    return (
        <div className="mb-40">
            <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                <div className="px-6 w-full flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <a className="navbar-brand text-blue-600" href="#!">
                            <img src={letterLogo}></img>
                        </a>
                    </div>
                    <div>
                        <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
                            {
                                navItemList.map((item, index) =>
                                    <li key={index} className="nav-item">
                                        <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">{item}</a>
                                    </li>)
                            }
                        </ul>
                    </div>
                    <div className="flex items-center lg:ml-auto">
                        {
                            renderButtonNav()
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default observer(MenuNav)
