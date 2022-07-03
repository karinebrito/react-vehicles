import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function VehiclesList() {
  const [vehicles, setVehicles] = useState(() => {
    const vehiclesList = localStorage.getItem("vehicles");

    if (vehiclesList) {
      return JSON.parse(vehiclesList);
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

      <table className="vehiclelist-table">
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
          {vehicles.map((vehicle) => (
            <tr key={vehicle.id}>
              <td>{vehicle.chassi}</td>
              <td>{vehicle.renavam}</td>
              <td>{vehicle.UF}</td>
              <td>{vehicle.plate}</td>
              <td>{vehicle.productionYear}</td>
              <td>{vehicle.modelYear}</td>
              <td>{vehicle.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
