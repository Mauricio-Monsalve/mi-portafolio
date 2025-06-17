import { useRef, useState } from "react";
import { datos } from "../../datos.js";
import TrainCard from "../components/TrainCard";
import "../styles/Training.css";

function Training() {

  const [view, setView] = useState(0);
  const refMov = useRef();

  const leftHandler = () => {
    //si ya llegue a limite izquierdo
    if(view % datos.training.formacion.length == 0
      || view == 0
    ) {
      const moverMas = view + datos.training.formacion.length;

      refMov.current.style.left = `${moverMas * -12}rem`
    }
    setView(view + 1);
  }
  
  const rightHandler = () => {
    //si ya llegue a limite derecho
    //voy hasta el inicio
    if(view % datos.training.formacion.length == 0) {
      refMov.current.style.left = `${view * -12}rem`
    }
    setView(view - 1);
  }

  return (
    <section className="Training">
      <h2>Formación</h2>
      <div className="slider-container">
        <div className="mov-container" ref={refMov} style={
          {
            transform: `translateX(${view*12}rem)`,
            width: `${(datos.training.formacion.length + 3) * 12}rem`,
            left: "0rem"
          }}>
          {datos.training.formacion.map((formacion, index)=>{
            return <TrainCard
              institucion={formacion.foto}
              titulo={formacion.nombre}
              inicio={formacion.inicio}
              finalizacion={formacion.termino}
              key={index}/>
          })}
          {datos.training.formacion.map((formacion, index)=>{
            if(index < 3) return <TrainCard
              institucion={formacion.foto}
              titulo={formacion.nombre}
              inicio={formacion.inicio}
              finalizacion={formacion.termino}
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

export default Training