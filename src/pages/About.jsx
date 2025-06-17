import { datos } from "../../datos.js"
import "../styles/About.css"

function About() {
  return (
    <section className="About">
      <h2>Sobre mí</h2>
      <div className="separador">
        <img src={datos.about.foto} alt="Profile" />
        <div className="info">
          <strong>{datos.home.nombre}</strong>
          {datos.about.parrafos.map((p,index)=>{
            return <p key={index}>{p}</p>
          })}
        </div>
      </div>
    </section>
  )
}

export default About