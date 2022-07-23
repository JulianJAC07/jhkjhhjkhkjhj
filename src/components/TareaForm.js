import React, { useState } from 'react'

function TareaForm({addTarea}) {
    const [userInput,setuserInput]= useState();
    
    const handleOnChange= (e)=>{
        console.log(e);
        setuserInput(e.currentTarget.value);
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        if(userInput.trim()!==''){
            addTarea(userInput);//enviamos este texto como un props (recordar que los props son elementos para manejar entre componentes)
            setuserInput('');
        }
    }


  return (
    <div style={{margin:20}} className='my-2 row'>
        
        <form onSubmit={handleSubmit}/**creamos el evento handle submit para asi poder tomar el valor que escribe el usuario y coambiarlo con el on change */ className='my-2 row'>
           <div className='col-9'> 
             <input type="text" value={userInput || ''} /* el user input es para el valor que que agregue los usuarios*/ onChange={handleOnChange} /*  utilizamos el evento on change y cvreamos una variable para asi manipular el estado lo que escriba el usuario*/ className='form-control' />
            </div>
            
            <div className='col-3'>
             <button className='btn btn-primary btn-sm'>Añadir Tarea</button>
            </div>
            
        </form>
        
          
    </div>
  )
}

export default TareaForm;