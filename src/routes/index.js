import React from "react";
import { Routes, Route } from "react-router-dom";

import Register from "../pages/Register";
import CarList from "../pages/CarList";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CarList />} />
      <Route path="/register" exact element={<Register />} />
    </Routes>
  );
}
