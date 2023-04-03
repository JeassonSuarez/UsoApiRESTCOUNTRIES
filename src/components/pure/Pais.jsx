import React from 'react'
// import img from '../../assets/react.svg'
import data from '../../models/data.json'
import '../../styles/pais.css'


const Pais = () => {
  console.log(data[0]);
  return (
    <div className='pais'>
        <img src={data[35].flag} alt='bandera' />
        <div className='pais-data'>
          <h2>{data[35].demonym}</h2>
          <p><span>Poblacion: </span>{data[35].population}</p>
          <p><span>Region: </span>{data[35].region}</p>
          <p><span>Capital: </span>{data[35].capital}</p>
        </div>
    </div>
  )
}

export default Pais