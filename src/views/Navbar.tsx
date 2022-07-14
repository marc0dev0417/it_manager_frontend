import React from "react";
import { Link } from "react-router-dom"

import "../styles/Navbar.css"
const Navbar = () => {
    return (
            <nav>
                    <li id="home_li"><Link to="#">IT Manager</Link></li>
                <ul className="grid_navbar">
                    <li><Link className="item_link" to="#">Mis proyectos</Link></li>
                    <li><Link className="item_link" to="#">Descubrir proyectos</Link></li>
                    <li><Link className="item_link" to="#">Añadir proyectos</Link></li>
                    <li><Link className="item_link" to="#">Gestor de proyectos</Link></li>
                    <li><Link className="item_link" to="#">Sobre mi</Link></li>
                </ul>
            </nav>
    )
}

export default Navbar
