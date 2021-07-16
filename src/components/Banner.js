import React from 'react'

//External resources
import banner from '../assets/banner-bw-cs.jpg'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Banner = () => {

    /* const handleClick = (e) => {
         e.preventDefault();
 
         const targetElement = document.querySelector(".text-section")
         const location = targetElement.offsetTop
 
         window.scrollTo({
             left: 0,
             top: location,
             behavior: 'smooth'
         })
     }
 */
    return (
        <div className="banner-container">
            <img src={banner} alt="banner" className="banner-image" />
            <Link className="banner-btn-icon" to="text-area" smooth={true} duration={1000}>
                <IoIosArrowDropdownCircle />
            </Link>
        </div>
    )
}

export default Banner
