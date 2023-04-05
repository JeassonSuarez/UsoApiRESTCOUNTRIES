import React from 'react'
// import img from '../../assets/react.svg'
import '../../styles/pais.css'


const Pais = ({ data, abrirPais, mostrarPaisCompleto }) => {

  const handleClick = () =>{ 
    abrirPais(!mostrarPaisCompleto, data)
  }


  // console.log(data, 'dddddddddd');
  return (
    <div className='pais' onClick={handleClick}>
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