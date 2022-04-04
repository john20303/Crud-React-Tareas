import React from 'react';
import { nanoid } from 'nanoid'//Esta libreria nos genera id's automaticos.


function App() {

  const [inputTarea,setInputTarea] = React.useState('');//éste state Esta asociado al input Ingrese Tarea.
  const [listaTareas,setListaTareas] = React.useState([]);//useSate asociado a la lista de tareas
  const [cambiarModoEditar, setCambiarModoEditar] = React.useState(false);
  const [id,setId] = React.useState('');//Este se asocia al id de inputTarea al editar.
  const [error,setError] = React.useState(null);



  // Función formulario crear tareas
  const formCrearTarea = (e) => {
      e.preventDefault();
      if(!inputTarea.trim()){
        console.log('El campo, Ingrese Tarea, está vácio.');
        setError('El campo esta vácio.');
        return;
      }
      console.log(inputTarea);
      setListaTareas([// dentro de la función llamamos nuestro setListaTareas.
        ...listaTareas,{id: nanoid(),tarea: inputTarea }//listaTareas es donde se alamcenarán las tareas que vienen de = inputTarea
      ]);
      setInputTarea('');//Se llama para limpiar el cámpo inputTarea
      setError(null);//Eliminamos el texto de error.
  }// Función formulario Crear tareas






  // Función formulario Editar tareas
  const formEditarTarea = (e) => {
    e.preventDefault();
    if(!inputTarea.trim()){
      console.log('El campo esta vacio!');
      setError('El campo esta vácio.');
      return;
    }
    const arrEditarTarea = listaTareas.map(item => item.id === id ? {id:id,tarea: inputTarea} : item)
    setListaTareas(arrEditarTarea);
    setCambiarModoEditar(false);//Lo pasamos a false
    setInputTarea('');//Limpiamos el campo
    setId('');
    
    setError(null);//Eliminamos el texto de error.
    setInputTarea('');//Se llama para limpiar el cámpo inputTarea
  }// Función formulario Editar tareas




  // Función Editar tarea
  const editarTarea = (item) => {//Ésta función esta asociada al botón editar
    setCambiarModoEditar(true);
    setInputTarea(item.tarea);
    setId(item.id);
    console.log(item);
  }// Función Editar tarea





  // Función Eliminar tarea
  const eliminarTarea = (id) => {//solo se guardan en arrFiltrado, los res.id que sean diferentes, al id que viene como parámetro.
    const arrFiltrado = listaTareas.filter(res => (res.id !== id));
    setListaTareas(arrFiltrado);//actualizamos el contenido con arrFiltrado, x q se guardó la nueva lista de items.
  }// Función Eliminar tarea


 


  return (
    <div className='container mt-4'>
      <h1 className='text-center'>CRUD Simple</h1>
      <hr />

      <div className="row">

        {/*Listar tareas */}
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
            {
              listaTareas.length === 0 ? (
                  <div className="alert alert-danger" role="alert">
                     No hay tares disponibles!
                  </div>
              ) : (
                listaTareas.map(res => (
                  <li className="list-group-item" key={res.id}>
                    <span className="lead">{res.tarea}</span>
                    <button className="btn btn-danger btn-sm float-end" onClick={() => eliminarTarea(res.id)}>Eliminar</button>
                    <button className="btn btn-warning btn-sm float-end mx-1" onClick={() => editarTarea(res)}>Editar</button>
                </li>
                ))
              )
            }
          </ul>
        </div>
        {/*Listar tareas */}

        {/*Crear tareas */}
        <div className="col-4">
          <h4 className="text-center">
            {
              cambiarModoEditar ? 'Editar Tarea' : 'Crear Tarea'
            }
          </h4>

        {/* Formulario crear tarea*/}
          <form onSubmit={cambiarModoEditar ? formEditarTarea : formCrearTarea}>
            {
              error ? (
                <spam className='text-danger'>
                    {error}
                  </spam>
              ) : null
            }
            <input 
              type="text" 
              className="form-control mb-2" 
              placeholder='Ingrese Tarea'
              onChange={(e) => setInputTarea(e.target.value)}
              value={inputTarea}//Nombre del campo
              />
              {
                cambiarModoEditar ? (<button className="btn btn-warning w-100" type='submit'>Editar</button>) : (<button className="btn btn-dark w-100" type='submit'>Agregar</button>)
              }
          </form>
        {/* Formulario crear tarea*/}


        </div>
        {/*Crear tareas */}

      </div>
    </div>
  );
}

export default App;
