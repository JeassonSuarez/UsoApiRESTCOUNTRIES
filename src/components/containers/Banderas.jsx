import React, { useState, useEffect } from "react";
import buscar from "../../imagenes/buscar.svg";
import outlineSelect from "../../imagenes/outline.svg";
import volver from "../../imagenes/volver.svg";
import "../../styles/contenido.css";
import Pais from "../pure/Pais";
// import data from '../../models/data.json'
import useFetch from "../../hooks/useFetch";
import useRegiones from "../../hooks/useRegiones";

const Banderas = () => {
  const [activeSelectContinente, setActiveSelectContinente] = useState("");
  const [continenteSeleccionado, setContinenteSeleccionado] = useState("Todas");
  const [busquedaNombre, setBusquedaNombre] = useState("");
  const [mostrarPaisCompleto, setMostrarPaisCompleto] = useState(false);
  const [dataPaisCompleto, setDataPaisCompleto] = useState(null);

  const apiUrl =
    continenteSeleccionado === "Todas" && busquedaNombre === ""
      ? "https://restcountries.com/v3.1/all"
      : continenteSeleccionado !== "Todas"
      ? `https://restcountries.com/v3.1/region/${continenteSeleccionado}`
      : `https://restcountries.com/v3.1/translation/${busquedaNombre}`;

  const { unicasRegiones } = useRegiones();
  const { data, loadingData, error } = useFetch(apiUrl);

  const handleClickContineneteSeleccionado = (e) => {
    setContinenteSeleccionado(e.target.textContent);
  };

  const handleSelectActiveContinente = () => {
    activeSelectContinente === ""
      ? setActiveSelectContinente("select-continente-active")
      : setActiveSelectContinente("");
  };

  const handleOnmouseOverCont = (e) => {
    // console.log(e.target.textContent);
    e.target.classList.add("select-continente-over-active");
    // activeMouseOverContinente === '' && setActiveMouseOverContinente('select-continente-over-active');
  };

  const handleOnmouseOutCont = (e) => {
    e.target.classList.remove("select-continente-over-active");
    // activeMouseOverContinente === 'select-continente-over-active' && setActiveMouseOverContinente('');
  };

  const handleBuscar = (e) => {
    if (e.code === "Enter") {
      console.log(busquedaNombre);
    }
  };

  const handleChangeBuscar = (e) => {
    // console.log(e.target.value);
    setBusquedaNombre(e.target.value);
  };

  const abrirPais = (b, d) => {
    setMostrarPaisCompleto(b);
    setDataPaisCompleto(d);
  };

  return (
    <main className="main-content">
      {mostrarPaisCompleto === false ? (
        <>
          <div className="main-buscador">
            <img src={buscar} alt="buscar" className="img-control" />
            <input
              type="text"
              placeholder="Buscar Pais"
              onKeyDown={handleBuscar}
              onChange={handleChangeBuscar}
            />
          </div>
          <div className="main-select">
            <div
              className="select-filter"
              onClick={handleSelectActiveContinente}
            >
              <img src={outlineSelect} alt="select" className="img-control" />
              <button>
                {continenteSeleccionado === "Todas"
                  ? "Filtrar por region"
                  : continenteSeleccionado}
              </button>
            </div>
            <div className={`select-continente ${activeSelectContinente}`}>
              {unicasRegiones.map((con) => {
                return (
                  <button
                    key={con}
                    onMouseOver={handleOnmouseOverCont}
                    onMouseOut={handleOnmouseOutCont}
                    onClick={handleClickContineneteSeleccionado}
                  >
                    {con}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="div-list-paises">
            {error && <h2>{error}</h2>}
            {loadingData && <h2>Cargando informacion de paises...</h2>}
            {data && data.status !== 404 ? (
              data.map((e, i) => {
                return (
                  <Pais
                    key={i}
                    data={e}
                    abrirPais={abrirPais}
                    mostrarPaisCompleto={mostrarPaisCompleto}
                  />
                );
              })
            ) : (
              <span></span>
            )}
          </div>
        </>
      ) : (
        <>
          <div
            className="main-volver"
            onClick={() => setMostrarPaisCompleto(!mostrarPaisCompleto)}
          >
            <img src={volver} alt="volver" className="img-control" />
            <span>Volver</span>
          </div>
          <div className="main-pais-completo">
            <img
              src={dataPaisCompleto.flags.svg}
              alt={dataPaisCompleto.flags.alt}
            />
            <div className="pais-data pais-data-completo">
              <h2>{dataPaisCompleto.name.common}</h2>
              <p>
                <span>Nombre nativo: </span>
                {dataPaisCompleto.name.official}
              </p>
              <p>
                <span>Poblacion: </span>
                {dataPaisCompleto.population}
              </p>
              <p>
                <span>Region: </span>
                {dataPaisCompleto.region}
              </p>
              <p>
                <span>Region: </span>
                {dataPaisCompleto.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {dataPaisCompleto.capital}
              </p>
              <p>
                <span>Dominio: </span>
                {dataPaisCompleto.tld.map((e, i) => e + (i === dataPaisCompleto.tld.length-1 ? "" : ", "))}
              </p>
              <p>
                <span>Moneda: </span>
                {Object.keys(dataPaisCompleto.currencies).map((currency) => 
                  dataPaisCompleto.currencies[currency].name)}
              </p>
              <p>
                <span>Lenguajes: </span>
                {Object.keys(dataPaisCompleto.languages).map((language, i) => 
                  dataPaisCompleto.languages[language] + (i===Object.keys(dataPaisCompleto.languages).length-1 ? '' : ', '))}
                  {/* {Object.keys(dataPaisCompleto.languages).map(l=>l)} */}
              </p>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default Banderas;
