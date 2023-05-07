import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Calculator from './Components/calculator';
import Navigation from './Components/navigation';
import Home from './Components/home';
import Quote from './Components/Quote';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
