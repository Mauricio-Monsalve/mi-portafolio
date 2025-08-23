import { useForm } from "react-hook-form";
import "../styles/Contact.css";

function Contact() {

  // const enviarCorreo = (nombre, correo, asunto, mensaje) => {
  //   // mailto:micorreo@gmail.com?subject=Asunto&body=Cuerpo

  //   let url = "";
  //   url += "mailto:";
  //   url += correo;
  //   url += "?subject=";
  //   url += asunto;
  //   url += "&body=";
  //   url += mensaje;
  //   url += `Mensaje enviado por: ${nombre}`;

  //   url = url.replaceAll(" ","%20");

  //   // para espacios se usa %20, por ejemplo, "hola wenas" es "hola%20wenas"
  //   // console.log(url);
  //   window.location.href = url;

  // };

  const { handleSubmit, register, formState: { errors }, setValue, getValues } = useForm();

  const manejadorSubmit = handleSubmit(async (datos) => {
    console.log(datos)

    try {
      const response = await fetch("http://localhost:3000/api/send",
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            nombre: datos.nombre,
            correo: datos.correo,
            asunto: datos.asunto
          })
        }
      );

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      alert(error.message);
    }

    // enviarCorreo(datos.nombre,datos.correo,datos.asunto,datos.mensaje);

  });

  const filtrarLetras = (cual) => {
    let valores = "";
    valores = getValues(cual);
    setValue(cual, valores.replace(/[^a-zA-ZñÑ]/g, ""));
  }

  // const filtrarNumeros = (cual)=>{
  //   let valores = "";
  //   valores = getValues(cual);
  //   setValue(cual,valores.replace(/[^0-9]/g,""));
  // }

  return (
    <section className="Contact">
      <h2>Contacto</h2>
      <div className="card">
        <p>Completa el sigueinte formulario para ponerte en contacto conmigo.</p>
        <form onSubmit={manejadorSubmit}>
          <input type="text" placeholder="Nombre" style={errors.nombre && { outline: "1px solid red" }}
            {
            ...register("nombre",
              {
                required: {
                  value: true,
                  message: "Debes llenar este campo"
                },
                minLength: {
                  value: 2,
                  message: "Debes tener minimo 2 caracteres"
                },
                maxLength: {
                  value: 20,
                  message: "Debes tener maximo 20 caracteres"
                },
                onChange: () => filtrarLetras("nombre"),
              }
            )
            }
          />
          {/* {errors.nombre?.type == "required" && <span style={{color: "red"}}>Error: Debes llenar este campo</span>}
          {errors.nombre?.type == "minLength" && <span style={{color: "red"}}>Error: Debe tener minimo 5 caracteres</span>}
          {errors.nombre?.type == "maxLength" && <span style={{color: "red"}}>Error: Debe tener maximo 10 caracteres</span>} */}

          {errors.nombre && <span style={{ color: "red" }}>Error: {errors.nombre?.message}</span>}

          <input type="email" placeholder="Correo" style={errors.correo && { outline: "1px solid red" }}
            {
            ...register("correo", {
              required: {
                value: true,
                message: "Debes llenar este campo"
              },
              validate: (valor) => {

                const evaluacion = (/[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/).test(valor);
                if (!evaluacion) {
                  return "El correo ingresado no es valido"
                }
              }
            })

            } />

          {errors.correo && <span style={{ color: "red" }}>Error: {errors.correo?.message}</span>}

          <input type="text" placeholder="Asunto" style={errors.nombre && { outline: "1px solid red" }}  {...register("asunto", {
            required: {
              value: true,
              message: "Debes llenar este campo"
            },
            minLength: {
              value: 2,
              message: "Debes tener minimo 2 caracteres"
            },
            maxLength: {
              value: 40,
              message: "Debes tener maximo 40 caracteres"
            },
          })} />

          {errors.asunto && <span style={{ color: "red" }}>Error: {errors.asunto?.message}</span>}
          {/* <input type="text" placeholder="1234 5678 9101 2345"
          {
            ...register("creditCard",
              {
                onChange: () => {
                  let valor = "";
                  valor = getValues("creditCard");
                  //borrar lo que no sea numero
                  valor = valor.replace(/[^0-9]/g,'');
                  //separar cada 4 numeros con espacios
                  valor = valor.replace(/(.{3})(.{3})(.{4})/g,'$1 $2 $3');
                  valor = valor.replace(/(.{4})/g,'$1 ');
                  //borrar los ultimos espacios
                  valor = valor.trim();
                  //no escribir mas de 19 caracteres, 16 numeros + 3 espacios
                  valor = valor.slice(0,12);
                  valor = valor.slice(0,19);

                  setValue("creditCard",valor);
                }
              }
            )
          }/> */}
          <textarea placeholder="Mensaje" style={errors.mensaje && { outline: "1px solid red" }} {...register("mensaje",{
            required: {
              value: true,
              message: "Debes llenar este campo"
            },
            minLength: {
              value: 2,
              message: "Debes tener minimo 2 caracteres"
            },
            maxLength: {
              value: 400,
              message: "Debes tener maximo 400 caracteres"
            },
          }
        )}></textarea>
        {errors.mensaje && <span style={{ color: "red" }}>Error: {errors.mensaje?.message}</span>}
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact



// app.post("/sendCorreo",(req,res)=>{
//   await api.send({
//     subject: req.body.subject,
//     body: req.body.body,
//     links: req.body.links,
//   })
// })