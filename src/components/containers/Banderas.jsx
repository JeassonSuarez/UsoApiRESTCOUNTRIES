import React, { useState } from "react";
import buscar from "../../imagenes/buscar.svg";
import outlineSelect from "../../imagenes/outline.svg";
import "../../styles/contenido.css";
import Pais from "../pure/Pais";
import data from '../../models/data.json'


const Banderas = () => {
  const [continente, setContinente] = useState([
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oseania",
  ]);

  const [activeSelectContinente, setActiveSelectContinente] = useState('');
  const [continenteSeleccionado, setContinenteSeleccionado] = useState('');

  const handleClickContineneteSeleccionado = (e) => {
    setContinenteSeleccionado(e.target.textContent)
  }

  const handleSelectActiveContinente = () => {
    activeSelectContinente === '' ? setActiveSelectContinente('select-continente-active') : setActiveSelectContinente('');
  }

  const handleOnmouseOverCont = (e) => {
    // console.log(e.target.textContent);
    (e.target.classList.add('select-continente-over-active'));
    // activeMouseOverContinente === '' && setActiveMouseOverContinente('select-continente-over-active');
  }
  
  const handleOnmouseOutCont = (e) => {
    (e.target.classList.remove('select-continente-over-active'));
    // activeMouseOverContinente === 'select-continente-over-active' && setActiveMouseOverContinente('');
  }

  return (
    <main className="main-content">
      <div className="main-buscador">
        <img src={buscar} alt="buscar" className="img-control" />
        <input type="text" placeholder="Buscar Pais" />
      </div>
      <div className="main-select">
        <div className="select-filter" onClick={handleSelectActiveContinente}>
            <img src={outlineSelect} alt="select" className="img-control" />
            <button>{continenteSeleccionado === '' ? 'Filtrar por continente' : continenteSeleccionado}</button>
        </div>
        <div className={`select-continente ${activeSelectContinente}`}>
        {continente.map((con) => {
            return <button key={con} onMouseOver={handleOnmouseOverCont} onMouseOut={handleOnmouseOutCont} onClick={handleClickContineneteSeleccionado}>{con}</button>;
          })}
        </div>
      </div>
      <div className="div-list-paises">
  {data.map((e, i) => {
    return <Pais key={i} data={e} />
  })}
</div>

    </main>
  );
};

export default Banderas;
