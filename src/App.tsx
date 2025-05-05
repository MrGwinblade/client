import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Form from './Form';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contact" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;