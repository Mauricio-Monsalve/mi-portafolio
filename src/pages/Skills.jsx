import "../styles/Skills.css"
import { datos } from "../../datos.js"

function Skills() {
  return (
    <section className="Skills">
      <div className="wrapper">
        <h2>Habilidades</h2>
        <div className="tecnologias">
          {datos.skills.habilidades.map((skill,index)=>{
            return (
              <div className="skill-container" key={index}>
                <img src={skill.icono} alt={skill.nombre} style={{filter: skill.nombre == "Express JS" ? "invert()" : "none"}}/>
                <span>{skill.nombre}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills