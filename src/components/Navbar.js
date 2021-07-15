import React from 'react'

//External resources
import logo from '../assets/benuta-logo.png'
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="benuta-logo" className="logo" />
            </div>
            <div className="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Artikel, Kategorie oder Marke suchen" />
            </div>

            <div className="navbar-icons">
                <AiOutlineHeart className="nav-icon" />
                <AiOutlineUser className="nav-icon" />
                <GiShoppingCart className="nav-icon" />
            </div>

        </nav>
    )
}

export default Navbar
