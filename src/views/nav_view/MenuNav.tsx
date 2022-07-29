import { observer } from "mobx-react-lite";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"

//Styles =>
import "./nav_style/navbar.css"
import "./nav_style/sideNav.css"

import CounterStore from "../../viewmodels/CounterStore";
import UserStore from "../../viewmodels/auth/UserStore";

const userStore = UserStore.getUserStore()

const MenuNav = () => {
    
    const counterStore = CounterStore.getCounterStore()
    const navigate = useNavigate()

    function openNav(){
        document.getElementById("mySidenav")!!.style.width = "250px"
    }
    function closeNav(){
        document.getElementById("mySidenav")!!.style.width = "0";
    }
    function handleLogOut(){
        userStore.removeUserData()
        navigate('/')
        window.location.reload()
    }

    return (
        <>
            <div id="mySidenav" className="sidenav">
                <Link onClick={closeNav} to="#" className="closebtn">&times;</Link>
                <Link className="sideLink" to="#">Add Project</Link>
                <Link className="sideLink" to="#">View Projects</Link>
                <Link className="sideLink" to="/toDo">Task Manager</Link>
            </div>
            <span onClick={openNav}>Open</span>
            <nav>
                <li id="home_li"><Link to="#">IT Manager</Link></li>
                <ul className="grid_navbar">
                    <li><button onClick={handleLogOut}>Log Out</button></li>
                    <li><Link className="item_link" to="#">Add Project</Link></li>
                    <li><Link className="item_link" to="#">View Projects</Link></li>
                    <li><Link className="item_link" to="/toDo">Task Manager</Link></li>
                </ul>
            </nav>
            <h1>{`hello i am here ${counterStore.getValueCount}`}</h1>
            {userStore.getAuth.token}
            <br></br>
            {userStore.getAuth.expired_date}
        </>
    )
}

export default observer(MenuNav)
