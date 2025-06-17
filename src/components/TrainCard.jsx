import "../styles/TrainCard.css"

function TrainCard({institucion, titulo, inicio, finalizacion}) {
  return (
    <div className="TrainCard">
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

export default TrainCard