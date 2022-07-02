import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import estados from "./estados.json";

export default function Register() {
  const handleSave = (event) => {
    event.preventDefault();
    const chassi = document.getElementById("chassi").value;
    const renavam = document.getElementById("#renavam").value;
    const uf = document.getElementById("uf").value;
    const productionYear = document.getElementById("production-year");
    const modelYear = document.getElementById("model-year");
  };

  return (
    <>
      <div className="register-header">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        <h1 className="container-title">Novo Veículo</h1>
      </div>

      <div className="form">
        <form action="">
          <div className="form-item">
            <label htmlFor="chassi">Chassi</label>
            <input
              className="default-input"
              type="text"
              name="chassi"
              id="chassi"
              placeholder="Informe"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="Renavam">Renavam</label>
            <input
              className="default-input"
              type="text"
              name="renavam"
              id="renavam"
              placeholder="Informe"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="uf">UF</label>
            <select className="default-input" name="uf" id="uf">
              <option disabled>---</option>
              {estados.UF.map((uf) => (
                <option key={uf.sigla} value={uf.sigla}>
                  {uf.nome}
                </option>
              ))}
            </select>
          </div>

          <div className="form-item">
            <label htmlFor="ano-fabricacao">Ano Fabricação</label>
            <input
              className="default-input"
              type="text"
              name="made-year"
              id="production-year"
              placeholder="Informe"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="ano-modelo">Ano Modelo</label>
            <input
              className="default-input"
              type="text"
              name="model-year"
              id="model-year"
              placeholder="Informe"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="Cor">Cor</label>
            <input
              className="default-input"
              type="text"
              name="cor"
              id="cor"
              placeholder="Informe"
              required
            />
          </div>

          <div className="button-wrapper">
            <button onClick={handleSave} className="form-button button-primary">
              Cadastrar
            </button>
            <button className="form-button">Cancelar</button>
          </div>
        </form>
      </div>
    </>
  );
}
