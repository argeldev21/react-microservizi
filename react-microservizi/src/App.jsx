
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Bikes from './pages/Bikes/Bikes';
import Cars from './pages/Cars/Cars';
import Garages from './pages/Garages/Garages';
import './App.css'

function App() {
  

  return (
    <>
      
      <Routes>

        <Route title="Home" path="/" element={<Home />} />
        <Route title="Bikes" path="/bikes" element={<Bikes />} />
        <Route title="Cars" path="/cars" element={<Cars />} />
        <Route title="Garages" path="/garages" element={<Garages />} />

      </Routes>
    </>

  )
}

export default App
