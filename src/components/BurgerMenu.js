import React from 'react'

//External Resources
import { tepichList } from '../assets/tepichList'


const BurgerMenu = () => {

    console.log(tepichList)

    return (
        <div className="menu-wrap burger-menu">
            <input type="checkbox" className="toggler" />
            <div className="hamburger"><div></div></div>
            <div className="menu">
                <div>
                    <div>
                        <ul>
                            {tepichList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu
