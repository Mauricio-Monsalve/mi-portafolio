import { useRef, useState } from "react";
import { datos } from "../../datos.js";
import ProjectCard from "../components/ProjectCard";
import "../styles/Projects.css";

function Projects() {

  const [view, setView] = useState(0);
  const refMov = useRef();

  const leftHandler = () => {
    //si ya llegue a limite izquierdo
    if(view % datos.projects.length == 0
      || view == 0
    ) {
      const moverMas = view + datos.projects.length;

      refMov.current.style.left = `${moverMas * -12}rem`
    }
    setView(view + 1);
  }
  
  const rightHandler = () => {
    //si ya llegue a limite derecho
    //voy hasta el inicio
    if(view % datos.projects.length == 0) {
      refMov.current.style.left = `${view * -12}rem`
    }
    setView(view - 1);
  }

  return (
    <section className="Projects">
      <h2>Proyectos</h2>
      <div className="slider-container">
        <div className="mov-container" ref={refMov} style={
          {
            transform: `translateX(${view*12}rem)`,
            width: `${(datos.projects.length + 3) * 12}rem`,
            left: "0rem"
          }}>
          {datos.projects.map((proyecto, index)=>{
            return <ProjectCard
              nombre={proyecto.nombre}
              descripcion={proyecto.descripcion}
              foto={proyecto.foto}
              deploy={proyecto.linkDeploy}
              codigo={proyecto.linkCodigo}
              key={index}/>
          })}
          {datos.projects.map((proyecto, index)=>{
            if(index < 3) return <ProjectCard
              nombre={proyecto.nombre}
              descripcion={proyecto.descripcion}
              foto={proyecto.foto}
              deploy={proyecto.linkDeploy}
              codigo={proyecto.linkCodigo}
              key={index}/>
          })}
        </div>
      </div>
      <div className="btn-container">
        <button style={{transform: "scaleX(-1)"}} onClick={leftHandler}>
          &#10148;
        </button>
        <button onClick={rightHandler}>
          &#10148;
        </button>
      </div>
    </section>
  )
}

export default Projects