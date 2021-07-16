import React from 'react'

//External resources
import banner from '../assets/banner-bw-cs.jpg'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Banner = () => {

    return (
        <div className="banner-container">
            <input className="mobile-input" placeholder="Artikel, Kategorie oder Marke suchen" />
            <img src={banner} alt="banner" className="banner-image" />
            <Link className="banner-btn-icon" to="text-area" smooth={true} duration={1000}>
                <IoIosArrowDropdownCircle />
            </Link>
        </div>
    )
}

export default Banner
