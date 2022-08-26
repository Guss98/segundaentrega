import React, { useState } from "react";
import { BotonEliminar } from "../botonEliminar/BotonEliminar";
import { GlobalStyles } from "../estilos/globalStyles";
import { Form } from "../Form/Form";
import { NavBar } from "../NavBar/NavBar";
import { Tarea } from "../Tareas/Tareas";

const Lista = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    if (!tarea.text || /^\s*$/.test(tarea.text)) {
      return;
    }

    const nuevaTarea = [tarea, ...tareas];
    setTareas(nuevaTarea);
  };

  const removeTarea = (id) => {
    const removeArr = [...tareas].filter((tarea) => tarea.id !== id);

    setTareas(removeArr);
  };

  const borrarTodo = () => {
    setTareas([]);
  };

  return (
    <div className="Lista">
      <NavBar allIsDone={tareas.length === 0} />
      <h1>Tareas para hoy</h1>
      <Form onSubmit={agregarTarea}></Form>
      <Tarea Tareas={tareas} removeTarea={removeTarea}></Tarea>
      <BotonEliminar Tareas={tareas} borrarTodo={borrarTodo}></BotonEliminar>
      <GlobalStyles></GlobalStyles>
    </div>
  );
};

export default Lista;
