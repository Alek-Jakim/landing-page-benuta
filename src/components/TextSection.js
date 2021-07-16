import React from 'react'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { IoIosArrowDropdownCircle } from 'react-icons/io'


const TextSection = () => {
    return (
        <section className="text-section" id="text-area">
            <div className="text-container">
                <h2 className="text-title">Bereit für den Sale des Jahres?</h2>
                <p className="text-body">Am 27. November 2020 ist Black Friday. Doch einen Tag voller Schnäppchen kann jeder. Wir setzen noch einen drauf und machen aus dem Black Friday Sale eine ganze BLACK WEEK!
                    Das heißt: Eine Woche lang von unglaublichen Rabatten profitieren und Shoppen bis zum Umfallen - und das ganz bequem vom Sofa aus.
                </p>
                <p className="text-body"><span className="text-announcement">Am Dienstag, 24. November 2020 um 12 Uhr geht's los.</span></p>
                <p className="text-body">Entdecken Sie schon jetzt Teppiche & Accessoires und merken Sie sich Ihre Favoriten für die
                </p>
                <h3>Jetzt schon stöbern</h3>
                <div className="scroll-down-btn">
                    <Link className="banner-btn-icon2" to="grid-area" smooth={true} duration={1000}>
                        <IoIosArrowDropdownCircle />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default TextSection
