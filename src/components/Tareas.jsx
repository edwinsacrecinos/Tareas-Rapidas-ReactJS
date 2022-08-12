import React from "react";
import '../css/Tarea.css'
import { AiFillDelete } from "react-icons/ai";


function Tarea ({ id, texto,  completada, completarTarea, eliminarTarea }){
    return (
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="tarea-texto" onClick={()=> completarTarea(id)}>
                {texto}
            </div>
            <div className="contenedor-iconos"
            onClick={() => eliminarTarea(id)}>
                <AiFillDelete className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Tarea;