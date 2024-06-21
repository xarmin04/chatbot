
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

const App = () => {
  return (

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* Add more routes as needed */}
      </Routes>
  );
};

export default App;
