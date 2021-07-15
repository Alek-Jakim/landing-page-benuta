import React from 'react'

//External resources
import banner from '../assets/banner-bw-cs.jpg'
import { IoIosArrowDropdownCircle } from 'react-icons/io'

const Banner = () => {

    const handleClick = (e) => {
        e.preventDefault();

        const targetElement = document.querySelector(".text-section")
        const location = targetElement.offsetTop

        window.scrollTo({
            left: 0,
            top: location,
            behavior: 'smooth'
        })
    }

    return (
        <div className="banner-container">
            <img src={banner} alt="banner" className="banner-image" />
            <IoIosArrowDropdownCircle onClick={handleClick} className="banner-btn-icon" />
        </div>
    )
}

export default Banner
