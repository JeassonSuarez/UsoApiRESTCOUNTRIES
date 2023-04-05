import React from 'react'
import useFetch from './useFetch'

const useRegiones = () => {

    const { data, loadingData, error } = useFetch("https://restcountries.com/v3.1/all");
    loadingData && console.log('cargando');
    error && console.log('error');
    const dataSetRegiones = ["Todas"];
    data?.map(p=>{
        dataSetRegiones.push(p.region);
    })

    const unicasRegiones = [...new Set(dataSetRegiones)];

  return {unicasRegiones};
}

export default useRegiones