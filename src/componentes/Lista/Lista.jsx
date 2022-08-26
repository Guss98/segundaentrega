import React, {useState} from 'react'
import { BotonEliminar } from '../botonEliminar/BotonEliminar'
import { GlobalStyles } from '../estilos/globalStyles'
import { Form } from '../Form/Form'
import { NavBar } from '../NavBar/NavBar'
import { Tarea } from '../Tareas/Tareas'



 const Lista = () => {

    const [Tareas, setTareas] = useState([])

    const agregarTarea = Tarea => {
        if (!Tarea.text  || /^\s*$/.test(Tarea.text)){
            return;
          }

        const nuevaTarea = [Tarea, ...Tareas];
        setTareas(nuevaTarea);
    }

    const removeTarea = id => {
      const removeArr = [...Tareas].filter(Tarea => Tarea.id !== id)

      setTareas(removeArr)
    }


    const borrarTodo = ()=> {
    
        setTareas([])
      
      
    }

    

  return (
    <div className='Lista'>
      <NavBar/>
        <h1>Tareas para hoy</h1>
        <Form onSubmit={agregarTarea}></Form>
        <Tarea Tareas={Tareas} removeTarea={removeTarea}></Tarea>
        <BotonEliminar Tareas={Tareas} borrarTodo={borrarTodo}></BotonEliminar>
      <GlobalStyles></GlobalStyles>
    </div>
  )
}

export default Lista