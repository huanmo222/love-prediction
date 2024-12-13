import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Analysis from './pages/analysis';
import Result from './pages/result';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App; 