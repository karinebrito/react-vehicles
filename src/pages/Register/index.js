import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import estados from "./estados.json";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const location = useLocation();
  const navigate = useNavigate();
  const [chassi, setChassi] = useState(location.state?.vehicle?.chassi);
  const [renavam, setRenavam] = useState(location.state?.vehicle?.renavam);
  const [UF, setUF] = useState(location.state?.vehicle?.UF);
  const [plate, setPlate] = useState(location.state?.vehicle?.plate);
  const [productionYear, setProductionYear] = useState(
    location.state?.vehicle?.productionYear
  );
  const [modelYear, setModelYear] = useState(
    location.state?.vehicle?.modelYear
  );
  const [color, setColor] = useState(location.state?.vehicle?.color);

  const handleSave = (event) => {
    const isFormValid = event.target.form.checkValidity();
    if (!isFormValid) {
      return;
    }
    event.preventDefault();

    const vehicle = {
      id: location.state?.vehicle?.id ?? Date.now(),
      chassi: chassi,
      renavam: renavam,
      UF: UF,
      plate: plate,
      productionYear: productionYear,
      modelYear: modelYear,
      color: color,
    };

    const vehicles = JSON.parse(localStorage.getItem("vehicles")) ?? [];
    let newVehicles;
    let toastMessage;

    if (location.state?.vehicle?.id) {
      const index = vehicles.findIndex(
        (item) => item.id === location.state.vehicle.id
      );
      newVehicles = [
        ...vehicles.slice(0, index),
        vehicle,
        ...vehicles.slice(index + 1, vehicles.length),
      ];
      toastMessage = "Veículo editado com sucesso!";
    } else {
      newVehicles = [...vehicles, vehicle];
      toastMessage = "Veículo cadastrado com sucesso!";
    }

    localStorage.setItem("vehicles", JSON.stringify(newVehicles));

    toast.success(toastMessage);

    setChassi("");
    setRenavam("");
    setUF("");
    setPlate("");
    setProductionYear("");
    setModelYear("");
    setColor("");
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
            <h3 className="form-title">Preencha todos os campos abaixo:</h3>

            <label htmlFor="chassi">Chassi</label>
            <input
              className="default-input"
              type="text"
              name="chassi"
              id="chassi"
              placeholder="Informe"
              value={chassi}
              onChange={(e) => setChassi(e.target.value)}
              maxlength="17"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="Renavam">Renavam</label>
            <input
              className="default-input"
              type="number"
              name="renavam"
              id="renavam"
              placeholder="Informe"
              value={renavam}
              onChange={(e) => setRenavam(e.target.value)}
              maxlength="11"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="uf">UF </label>
            <select
              className="default-input"
              name="uf"
              id="uf"
              defaultValue={UF ?? ""}
              value={UF}
              onChange={(e) => setUF(e.target.value)}
            >
              <option value="" disabled>
                ---
              </option>
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
              value={plate}
              onChange={(e) => setPlate(e.target.value)}
              maxlength="7"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="production-year">Ano Fabricação</label>
            <input
              className="default-input"
              type="number"
              name="production-year"
              id="production-year"
              placeholder="Informe"
              value={productionYear}
              onChange={(e) => setProductionYear(e.target.value)}
              maxlength="4"
              required
            />
          </div>

          <div className="form-item">
            <label htmlFor="model-year">Ano Modelo</label>
            <input
              className="default-input"
              type="number"
              name="model-year"
              id="model-year"
              placeholder="Informe"
              value={modelYear}
              onChange={(e) => setModelYear(e.target.value)}
              maxlength="4"
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
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
            />
          </div>

          <div className="button-wrapper">
            <button className="form-button button-primary" onClick={handleSave}>
              Cadastrar
            </button>
            <button className="form-button button-secundary" onClick={goBack}>
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
