import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function CarList() {
  const [cars, setCars] = useState(() => {
    const carsList = localStorage.getItem("cars");

    if (carsList) {
      return JSON.parse(carsList);
    } else {
      return [];
    }
  });

  return (
    <>
      <h1 className="container-title">Veículos Cadastrados</h1>

      <div className="search-wrapper">
        <input
          className="default-input search-input"
          type="text"
          name="search"
          id="search"
          placeholder="Pesquise"
        />

        <button className="search-button button-primary">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <table className="carlist-table">
        <thead>
          <tr>
            <th>Chassi</th>
            <th>Renavam</th>
            <th>UF</th>
            <th>Placa</th>
            <th>Ano de Fabricação</th>
            <th>Ano de Modelo</th>
            <th>Cor</th>
          </tr>
        </thead>

        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <td>{car.chassi}</td>
              <td>{car.renavam}</td>
              <td>{car.UF}</td>
              <td>{car.placa}</td>
              <td>{car.productionYear}</td>
              <td>{car.modelYear}</td>
              <td>{car.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
