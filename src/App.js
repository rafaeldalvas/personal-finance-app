import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AssetClassPage from './pages/AssetClassPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/asset-class" element={<AssetClassPage />} />
      </Routes>
    </Router>
  );
}

export default App;