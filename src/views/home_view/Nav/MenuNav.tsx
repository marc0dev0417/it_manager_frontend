import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom"

//Styles =>
import "../../../styles/Navbar.css"
import "../../../styles/SideNav.css"

import CounterStore from "../../../viewmodels/CounterStore";

const MenuNav = () => {

    const counterStore = CounterStore.getCounterStore()

    function openNav(){
        document.getElementById("mySidenav")!!.style.width = "250px"
    }
    function closeNav(){
        document.getElementById("mySidenav")!!.style.width = "0";
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
                    <li><Link className="item_link" to="#">Add Project</Link></li>
                    <li><Link className="item_link" to="#">View Projects</Link></li>
                    <li><Link className="item_link" to="/toDo">Task Manager</Link></li>
                </ul>
            </nav>
            <h1>{`hello i am here ${counterStore.getValueCount}`}</h1>
        </>
    )
}

export default observer(MenuNav)
