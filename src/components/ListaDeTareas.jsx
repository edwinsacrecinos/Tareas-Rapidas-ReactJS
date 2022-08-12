import React from "react";
import Tareaformulario from "./TareaFormulario";
import '../css/Tarea.css'
import { useState , useEffect } from 'react';
 import Tarea from "./Tareas";


function ListaDeTareas (){
    
    const [tareas,setTareas]=useState([]);
  

    const agregarTarea = (tarea)=> {
        if (tarea.texto.trim()){
            tarea.texto = tarea.texto.trim()
            const tareaActualizadas = [tarea, ...tareas];
            setTareas (tareaActualizadas);
        } else {
            alert("Tarea vacía")
        }
    }

    const eliminarTarea = id =>{
        const tareasActualizadas = tareas.filter(tarea =>  tarea.id !== id);
        setTareas(tareasActualizadas);
    }

    const completarTarea = id => {
        const tareasActualizadas =  tareas.map(tarea =>{
            if (tarea.id === id){
                tarea.completada =  !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }
        //obtener tareas guardadas
        useEffect(()=>{
            const obtenerTareas=JSON.parse(window.localStorage.getItem('misTareas'));
            if(obtenerTareas){
                setTareas(obtenerTareas)
            }
        },()=>{})

        //Obtener tareas para guardar
        useEffect(()=>{
            window.localStorage.setItem('misTareas',JSON.stringify(tareas))
        },[tareas])
    





    return (
        <>
            <Tareaformulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea)=>
                     <Tarea 
                     key={tarea.id}
                     id = {tarea.id}
                     texto={tarea.texto}
                     completada={tarea.completada} 
                     eliminarTarea={eliminarTarea}
                     completarTarea={completarTarea} />
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;