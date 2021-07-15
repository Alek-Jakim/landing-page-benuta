import React from 'react'
import './index.css'

//Components
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TextSection from './components/TextSection'
import ImageGrid from './components/ImageGrid'

/*
- please take the static layout and develop a design grid, does not have to be pixel perfect, but as near as possible
- Have the width of the landingpage same as benuta website
- Please use Google Fonts: Montserrat medium & Montserrat light https://fonts.google.com/specimen/Montserrat
- the four image tiles should have a slight zoom effect, when hovering above them
- the four image tiles should be treated as links (target="#")
- please pick the colors yourself from PNG
- layout should be fully responsive and look good on all devices, especially mobiles
*/

function App() {

  // console.log(document.documentElement.clientWidth);

  return (
    <>
      <Navbar />
      <Banner />
      <TextSection />
      <ImageGrid />
    </>
  );
}

export default App;
