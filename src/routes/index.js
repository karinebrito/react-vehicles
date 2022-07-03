import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import VehiclesList from "../pages/VehiclesList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<VehiclesList />} />
      <Route path="/register" exact element={<Register />} />
    </Routes>
  );
}
