import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Overview from './pages/Overview';
import Customers from './pages/Customers';
import Administration from './pages/Administration';



const App = () => {

  return (

    <BrowserRouter>
    <Routes>
    <Route index element= {<Overview />} /> 
      <Route path = "/Overview" element= {<Overview />} /> 
      <Route path = "/Customers" element= {<Customers />} /> 
      <Route path = "/Administration" element= {<Administration />} /> 
    </Routes>
    </BrowserRouter>

  );
};

export default App;

