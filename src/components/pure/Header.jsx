import React, { useState } from 'react'
import '../../styles/header.css'
import {mode} from '../../models/mode.model.js'

const Header = ({modeBg}) => {
    
    const [modeBackground, setModeBackground] = useState(mode.lightMode);


    const handleclickMode = () => {
        modeBackground.icon === mode.lightMode.icon 
        ?setModeBackground(mode.darkMode)
        :setModeBackground(mode.lightMode);
    }

    modeBg(modeBackground);

    console.log(modeBackground.title===mode.darkMode.title, 'aca');

  return (
    <header className={`header ${modeBackground.title===mode.darkMode.title ? 'header-dark' : 'header-light' }`}>
        <h1 className='header-title'>
            ¿Donde en el mundo?
        </h1>
        <div className='mode' onClick={handleclickMode}>
            <img src={modeBackground.icon} alt={modeBackground.title} className={`${modeBackground.title===mode.darkMode.title ? 'img-dark' : 'img-light' }`}/>
            <button>{modeBackground.title}</button>
        </div>
    </header>
  )
}

export default Header