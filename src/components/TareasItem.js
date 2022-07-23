import React from 'react'
 function TareasItem({tarea,onComplete,onDeleteItem}) {
    const getStyle=()=>{
        return {
            textDecoration: tarea.completado ? 'line-through':'none',
            margin:'20px',
            border: '2px solid #fff',
            backgroundColor:'rgb(0,0, rgb(16, 41, 124))',
            paddibg: '10px'
        }
    }
  return (
    <div style={getStyle()} className='d-flex justify-content-between'>
      <input type ='checkbox' checked={tarea.completado}/*el checked lo usamos para ver si algo es verdady si lo es tildarlo*/  onChange={()=>onComplete(tarea.id)}/*dicha funcion va a mandar el numero de id para asi marcarlo si esta completado o no*//>
      {tarea.task}
      <button  className='add-btn btn btn-secondary btn-sm' onClick={()=>onDeleteItem(tarea.id)}/*aca hacemos una funcion onDeleteItem para segun el id poder borrrar la tarea*/ > X </button> 
    </div>
  )
}
export default TareasItem;