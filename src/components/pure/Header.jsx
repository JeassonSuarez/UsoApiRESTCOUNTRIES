import React, { useState } from 'react'
import dark from '../../imagenes/dark.svg'
import light from '../../imagenes/light.svg'
import '../../styles/header.css'

const Header = () => {
    
    const mode = {
        darkMode : {
            icon: dark,
            title: 'Dark Mode'
        },
        lightMode: {
            icon: light,
            title: 'Light Mode'
        }
    }
    
    const [modeBackground, setModeBackground] = useState(mode.lightMode);


    const handleclickMode = () => {
        modeBackground.icon === light 
        ?setModeBackground(mode.darkMode)
        :setModeBackground(mode.lightMode)
    }

  return (
    <header className='header'>
        <h1 className='header-title'>
            ¿Donde en el mundo?
        </h1>
        <div className='mode' onClick={handleclickMode}>
            <img src={modeBackground.icon} alt={modeBackground.title} />
            <button>{modeBackground.title}</button>
        </div>
    </header>
  )
}

export default Header