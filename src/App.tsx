import React from "react";
import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Customer from "./pages/Customer";
import ShippingRates from "./pages/ShippingRates";
import Alamat from "./pages/Alamat";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/customer" element={<Customer />} />
      <Route path="/shipping" element={<ShippingRates />} />
      <Route path="/alamat" element={<Alamat />} />
    </Routes>
  );
}

export default App;
