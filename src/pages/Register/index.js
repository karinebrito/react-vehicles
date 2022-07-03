import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import estados from "./estados.json";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();

  const handleSave = (event) => {
    const isFormValid = event.target.form.checkValidity();
    if (!isFormValid) {
      return;
    }
    event.preventDefault();
    const chassi = document.getElementById("chassi");
    const renavam = document.getElementById("renavam");
    const UF = document.getElementById("uf");
    const plate = document.getElementById("plate");
    const productionYear = document.getElementById("production-year");
    const modelYear = document.getElementById("model-year");
    const color = document.getElementById("color");

    const vehicle = {
      id: Date.now(),
      chassi: chassi.value,
      renavam: renavam.value,
      UF: UF.value,
      plate: plate.value,
      productionYear: productionYear.value,
      modelYear: modelYear.value,
      color: color.value,
    };

    const vehicles = JSON.parse(localStorage.getItem("vehicles")) ?? [];
    localStorage.setItem("vehicles", JSON.stringify([...vehicles, vehicle]));
    toast.success("Veículo cadastrado com sucesso!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      progress: undefined,
    });

    chassi.value = "";
    renavam.value = "";
    UF.value = "";
    plate.value = "";
    productionYear.value = "";
    modelYear.value = "";
    color.value = "";
  };

  const goBack = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="register-header">
        <div className="arrow-header">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" onClick={goBack} />
        </div>
        <h1 className="container-title">Novo Veículo</h1>
      </div>

      <div className="form">
        <form id="register-form" action="">
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
            <label htmlFor="plate">Placa</label>
            <input
              className="default-input"
              type="text"
              name="plate"
              id="plate"
              placeholder="Informe"
              required
            />
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
            <label htmlFor="color">Cor</label>
            <input
              className="default-input"
              type="text"
              name="color"
              id="color"
              placeholder="Informe"
              required
            />
          </div>

          <div className="button-wrapper">
            <button className="form-button button-primary" onClick={handleSave}>
              Cadastrar
            </button>
            <button className="form-button" onClick={goBack}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
