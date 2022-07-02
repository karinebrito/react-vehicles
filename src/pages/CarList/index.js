import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function CarList() {
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
        <tr>
          <th>Chassi</th>
          <th>Renavam</th>
          <th>UF</th>
          <th>Placa</th>
          <th>Ano de Fabricação</th>
          <th>Ano de Modelo</th>
          <th>Cor</th>
        </tr>

        <tr>
          <td>123abc</td>
          <td>1234</td>
          <td>teste</td>
          <td>1234</td>
          <td>1234</td>
          <td>1234</td>
          <td>teste</td>
        </tr>

        <tr>
          <td>123abc</td>
          <td>1234</td>
          <td>teste</td>
          <td>1234</td>
          <td>1234</td>
          <td>1234</td>
          <td>teste</td>
        </tr>
      </table>
    </>
  );
}
