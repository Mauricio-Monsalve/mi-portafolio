import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import PokeApi from "../pages/projects/PokeApi.jsx";
import PokeCard from "./PokeCard.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Skills from "../pages/Skills.jsx";
import Training from "../pages/Training.jsx";
import Projects from "../pages/Projects.jsx";
import "../styles/App.css";
import AnimationProvider from "../contexts/AnimationContext.jsx";

function App() {
  return (
    <BrowserRouter basename="/mi-portafolio/">
      <AnimationProvider>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/training" element={<Training/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/projects/pokeapi" element={<PokeApi/>}/>
          <Route path="/projects/pokeapi/:id" element={<PokeCard/>}/>
        </Routes>
      </AnimationProvider>
    </BrowserRouter>
  )
}

export default App