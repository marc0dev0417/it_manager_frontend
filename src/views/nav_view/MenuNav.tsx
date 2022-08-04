import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

//Styles =>
import 'tailwindcss/tailwind.css'


import CounterStore from "../../viewmodels/CounterStore";
import UserStore from "../../viewmodels/auth/UserStore";

const userStore = UserStore.getUserStore()

const MenuNav = () => {
    
    const navItemList: string[] = ['Home', 'Task Manager', 'About me']

    const counterStore = CounterStore.getCounterStore()
    const navigate = useNavigate()

    function openNav() {
        document.getElementById("mySidenav")!!.style.width = "250px"
    }
    function closeNav() {
        document.getElementById("mySidenav")!!.style.width = "0";
    }
    function handleLogOut() {
        userStore.removeUserData()
        navigate('/')
        window.location.reload()
    }

    return (
        <div className="mb-40">
            <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
                <div className="px-6 w-full flex flex-wrap items-center justify-between">
                    <div className="flex items-center">
                        <a className="navbar-brand text-blue-600" href="#!">
                            <svg className="w-5 h-5 ml-2 lg:ml-0 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"></path>
                            </svg>
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
                        <button type="button" className="inline-block px-6 py-2.5 mr-2 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
                        <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up for free</button>
                    </div>
                </div>
            </nav>
           
        </div>
    )
}

export default observer(MenuNav)
