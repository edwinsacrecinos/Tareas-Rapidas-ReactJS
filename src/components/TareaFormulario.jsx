import React from "react";
import '../css/TareaFormulario.css';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

function Tareaformulario (props){

    const [input, setInput] = useState('');

    const manejarCambio = e =>{
        setInput(e.target.value);
    }

    const estadoEnvio = e => {

        e.preventDefault();

        const tareaNueva =  {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    }

    return (
        <form 
        className="tarea-formulario" 
        onSubmit={estadoEnvio}>
            <input 
            className="tarea-input"
            type="text"
            placeholder="Escribe una tarea"
            name="texto"
            onChange={manejarCambio}
            />
            <button className="tarea-boton">Agregar Tarea</button>
        </form>
    );


}

export default Tareaformulario;