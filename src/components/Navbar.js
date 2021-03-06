import React, { useEffect, useState } from 'react'


//External resources
import logo from '../assets/benuta-logo.png'
import { tepichList } from '../assets/tepichList'
import { AiOutlineHeart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'
import BurgerMenu from './BurgerMenu'

const Navbar = () => {


    return (
        <div className="main-container">

            <header className="header">

                <div className="logo-container">
                    <img src={logo} alt="benuta-logo" className="logo" />
                </div>
                <div className="search-bar">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Artikel, Kategorie oder Marke suchen" />
                </div>

                <div className="header-icons">
                    <AiOutlineHeart className="header-icon" />
                    <AiOutlineUser className="header-icon" />
                    <GiShoppingCart className="header-icon" />
                </div>

            </header>

            <nav className="navbar">
                <ul className="tepich-list">
                    {tepichList.map((item, index) => (
                        <li className="list-item" key={index}>{item.toUpperCase()}</li>
                    ))}
                </ul>
            </nav>


            <BurgerMenu />

        </div>
    )
}

export default Navbar
