import SocialItem from "../components/SocialItem.jsx"
import linkedin from "/icons/linkedin.svg";
import github from "/icons/github.svg";
import instagram from "/icons/instagram.svg";
import "/src/styles/Home.css";
import { datos } from "../../datos.js"; 

function Home() {
  return (
    <section className="Home">
      <div className="card">
        <div className="info">
          <div className="text">
            <span>{datos.home.saludo}</span>
            <h2>{datos.home.nombre}</h2>
            <span className="desc">{datos.home.profesion}</span>
            <p>{datos.home.resumen}</p>
            <div className="btn-separator">
              <button type="button">Descargar HdV</button>
              <button type="button">Contacto</button>
            </div>
          </div>
          <div className="image">
            <img src={datos.home.foto} alt="Profile" />
          </div>
        </div>
        <div className="social">
          <ul>
            {datos.home.redes.map((red,index)=>{
              return <SocialItem href={red.enlace} src={red.icono} alt={red.nombre} key={index}/>
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home