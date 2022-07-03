import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="navbar">
        <div className="navbar-left">
          <img src="logo.png" alt="logo" width="42" height="34" />
          <div className="navbar-text">Veículos</div>
        </div>

        {location.pathname !== "/register" && (
          <div className="navbar-right">
            <Link to="/register" className="register-link  button-primary">
              <FontAwesomeIcon icon={faPlus} />
              Novo Veículo
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
