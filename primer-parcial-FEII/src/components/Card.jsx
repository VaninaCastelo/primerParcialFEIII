// import React from "react";
import React, { useState } from 'react'

const Card = () => {
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const [participante, setParticipante] = useState({
        nombre: '',
        cancion: '',
    })

  const handleSubmit = (event) => {

    event.preventDefault()
        if (participante.nombre.length >= 3 && participante.cancion.length >= 6)
    { setShow(true)
    setError(false)
    } else 
    setError (true)
  }

  const handleChange = (event) => setParticipante({...participante, nombre: event.target.value})
  console.log(participante)
  return (
    <form className="form-container">
        <label htmlFor="Nombre">Dinos tu Nombre</label>
        <br />
        {/* <input type="text" onChange={(event)=> setParticipante({...participante, nombre: event.target.value})}/> */}
        <input type="text" onChange={handleChange}/>
        <br />
        <label htmlFor="Cancion">Ingresa tu cancion favorita con su disco correspondiente</label>
        <br />
        <input type="text" onChange={(event)=> setParticipante({...participante, cancion: event.target.value})}/>
        <br />
        <br />
        <button onClick= {handleSubmit} > ESTA NO ME PUEDE FALTAR ! </button>
  {error && <h6 style={{ color: 'red' }}>Por favor chequea que la información sea correcta</h6> }
  {show ? <> <h3 style={{ color: 'magenta' }}> Gracias {participante.nombre} </h3>
            <h6 style={{ color: 'violet' }}> Agregaremos ¨ {participante.cancion} ¨ a nuestra playlist </h6> </>
            : null }

    </form>
  )
};


export default Card;