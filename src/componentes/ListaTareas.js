import React, { useState } from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import "../styles/ListaTareas.css";

function ListaTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTareas = (tarea) => {
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();

      const tareaActualizadas = [tarea, ...tareas];
      setTareas(tareaActualizadas);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }

  return (
    <>
      <Formulario onSubmit={agregarTareas} />
      <div className="tarea-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  );
}

export default ListaTareas;
