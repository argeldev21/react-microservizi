import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css'

function App() {
  

  return (
    <Routes>


      <Route title="Home" path="/" element={<Home />} />



      
      

    </Routes>
  )
}

export default App
