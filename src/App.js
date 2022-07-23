//import logo from './logo.svg';
import {useState, useEffect}from 'react';
//import ejemploTareas from './ejemploTareas.json';
import TareasList from './components/TareasList';
import TareaForm from './components/TareaForm';
import './App.css';

function App() {
  
  const [tareas,setTareas]= useState(/*ejemploTareas*/[]);
  console.log(tareas);
  
  const onComplete=(id)=>{
    console.log ('tarea',id);//codigo des prueba


    setTareas(tareas.map((tarea)=>{
      return tarea.id===Number(id)?{...tarea,completado:!tarea.completado/*aca decimos que cada vez que toquemos se va a actualizar al contrario del valor que estaba*/ }:{...tarea};
    }))

  } 
  const onDeleteItem=(id)=>{
      console.log('delete',id);
      setTareas([...tareas].filter(tarea=>tarea.id !== id))/*primero creamos una copia con el [...tareas] con el filter iteramos a la lista que tenemos y si los id coinciden estos se eliminan y se actualiza*/
   }

   const addTarea =(newTarea)=>{
     console.log ('newTarea',newTarea);
     let newItem={id: + new Date(),task : newTarea, completado:false};
     setTareas([...tareas,newItem]);

    }/**aca recibimos la nueva tarea  creamos un una variable con un objeto y con el set tareas acualizamos el objeto */

    useEffect(()=>{
      console.log('cargo');
      let data = localStorage.getItem('tarea');
      if (data){
        setTareas( JSON.parse(data));
      }

    },[])
   

    //prueba de use effect
    useEffect(()=>{
      console.log("cambio");
      localStorage.setItem('tarea',JSON.stringify(tareas));// esta es una funciuon para que guarde los datos dentro de la web


    },[tareas]);


  
   /* tareas.map((tarea)=>{
    return tarea.id===Number(id) ? {...tarea,completado:true}
   })
   estamos analizando el id que se recibe desde el componente hijo (tareaslist)y si el id es igual a algunos de las tareas en el estado se crea uyna copia del objeto (tarea acutal ) y cambiarle el estado de la propiedad completado*/



  return (
    <div className="bg-dark p-4 vh-100 text-white">
      <div className='container p-6 col-md-4 offset-md-4'>
       <TareaForm addTarea={addTarea}/>
       <TareasList tareas= {tareas} onComplete={onComplete} onDeleteItem={onDeleteItem} />
      

      </div>
      
    </div>
  );
}

export default App;
