import React, { useState } from "react";
import buscar from "../../imagenes/buscar.svg";
import outlineSelect from "../../imagenes/outline.svg";
import "../../styles/contenido.css";

const Banderas = () => {
  const [continente, setContinente] = useState([
    "Africa",
    "America",
    "Asia",
    "Europe",
    "Oseania",
  ]);

  const [activeSelectContinente, setActiveSelectContinente] = useState('');

  const handleSelectActiveContinente = () => {
    activeSelectContinente === '' ? setActiveSelectContinente('select-continente-active') : setActiveSelectContinente('');
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
            <p>Filtrar por continente</p>
        </div>
        <div className={`select-continente ${activeSelectContinente}`}>
        {continente.map((con) => {
            return <p key={con}>{con}</p>;
          })}
        </div>
      </div>
    </main>
  );
};

export default Banderas;
