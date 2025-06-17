import "../styles/ProjectCard.css"

function ProjectCard({institucion, titulo, inicio, finalizacion}) {
  return (
    <div className="ProjectCard">
      <img src={institucion} alt="Formacion" />
      <strong>{titulo}</strong>
      <p>
        <span>{inicio} </span>
        -
        <span> {finalizacion}</span>
      </p>
    </div>
  )
}

export default ProjectCard