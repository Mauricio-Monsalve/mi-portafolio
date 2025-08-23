import "../styles/ProjectCard.css"

function ProjectCard({nombre, descripcion, foto, deploy, codigo}) {
  return (
    <div className="ProjectCard">
      <img src={foto} alt="Formacion" />
      <strong>{nombre}</strong>
      <p>
        {descripcion}
      </p>
      <div className="btn-separator">
        <button type="button">
          <a href={deploy} target="_blank">DEMO</a>
        </button>
        <button type="button">
          <a href={codigo} target="_blank">REPO</a>
        </button>
      </div>
    </div>
  )
}

export default ProjectCard