// rfc es un snippets para crear mas rapido el componente r=react f =functional c= component
import React from 'react'
import TareasItem from './TareasItem';

 function TareasList({tareas, onComplete,onDeleteItem}) {
  return (
    <div className='table table-dark table-striped table-bordered border-secondary'>
        {
            tareas.map((tarea,index)=>(
                <TareasItem key={`tarea-${index} `} tarea={tarea}  onComplete={onComplete} onDeleteItem={onDeleteItem}  /> //el tarea entre llaves es para poder pasarle la informacion al componente
            ))
        }
    </div>
  )
}
export default TareasList;