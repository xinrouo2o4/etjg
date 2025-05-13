// src/App.js
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/home';
import CalculatorPage from './pages/CalculatorPage';
import Login from './pages/Login';
import Register from './pages/Register';
import News from './pages/News';
import CarbonCheck from './pages/CarbonCheck';
import ServiceInfo from './pages/ServiceInfo';

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/carbon-check" element={<CarbonCheck />} />
        <Route path="/services" element={<ServiceInfo />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AppLayout>
  );
}
