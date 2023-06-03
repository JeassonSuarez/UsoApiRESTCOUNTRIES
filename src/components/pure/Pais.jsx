import React from 'react'
// import img from '../../assets/react.svg'
import '../../styles/pais.css'
import { mode } from '../../models/mode.model'


const Pais = ({ data, abrirPais, mostrarPaisCompleto, modeBg }) => {

  const handleClick = () =>{ 
    abrirPais(!mostrarPaisCompleto, data)
  }


  // console.log(data, 'dddddddddd');
  return (
    <div className={`pais ${modeBg.title===mode.darkMode.title ? 'pais-dark' : 'pais-light' } `} onClick={handleClick}>
        <img src={data.flags.svg} alt={data.flags.alt} />
        <div className='pais-data'>
          <h2>{data.name.common}</h2>
          <p><span>Poblacion: </span>{data.population}</p>
          <p><span>Region: </span>{data.region}</p>
          <p><span>Capital: </span>{data.capital}</p>
        </div>
    </div>
  )
}

export default Pais