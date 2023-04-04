import React from 'react'
// import img from '../../assets/react.svg'
import '../../styles/pais.css'


const Pais = ({ data }) => {
  // console.log(data, 'dddddddddd');
  return (
    <div className='pais'>
        <img src={data.flag} alt='bandera' />
        <div className='pais-data'>
          <h2>{data.demonym}</h2>
          <p><span>Poblacion: </span>{data.population}</p>
          <p><span>Region: </span>{data.region}</p>
          <p><span>Capital: </span>{data.capital}</p>
        </div>
    </div>
  )
}

export default Pais