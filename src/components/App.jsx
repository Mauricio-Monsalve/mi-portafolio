import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import PokeApi from "../pages/projects/PokeApi.jsx";
import PokeCard from "./PokeCard.jsx";

function App() {
  return (
    <BrowserRouter basename="/mi-portafolio/">
      <Routes>
        <Route path="/projects/pokeapi" element={<PokeApi/>}/>
        <Route path="/projects/pokeapi/:id" element={<PokeCard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App