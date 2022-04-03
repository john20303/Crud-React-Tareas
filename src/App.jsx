import React from 'react';
import { nanoid } from 'nanoid'//Esta libreria nos genera id's automaticos.


function App() {

  const [inputTarea,setInputTarea] = React.useState('');//éste state Esta asociado al input Ingrese Tarea.
  const [listaTareas,setListaTareas] = React.useState([]);//useSate asociado a la lista de tareas
  const [cambiarModoEditar, setCambiarModoEditar] = React.useState(false);


// Función formulario crear tareas
  const formCrearTarea = (e) => {
    e.preventDefault();
    if(!inputTarea.trim()){
      console.log('El campo, Ingrese Tarea, está vácio.');
      return;
    }
    console.log(inputTarea);
    setListaTareas([// dentro de la función llamamos nuestro setListaTareas.
      ...listaTareas,{id: nanoid(),tarea: inputTarea }//listaTareas es donde se alamcenarán las tareas que vienen de = inputTarea
    ]);

    setInputTarea('');//Se llama para limpiar el cámpo inputTarea
  }
  // Función formulario crear tareas



  // Función Eliminar tarea
  const eliminarTarea = (id) => {//solo se guardan en arrFiltrado, los res.id que sean diferentes, al id que viene como parámetro.
    const arrFiltrado = listaTareas.filter(res => (res.id !== id));
    setListaTareas(arrFiltrado);//actualizamos el contenido con arrFiltrado, x q se guardó la nueva lista de items.
  }
  // Función Eliminar tarea


  // Función Editar tarea
  const editarTarea = (id) => {
    setCambiarModoEditar(true);
  }
  // Función Editar tarea


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
              listaTareas.map(res => (
                <li className="list-group-item" key={res.id}>
                  <span className="lead">{res.tarea}</span>
                  <button className="btn btn-danger btn-sm float-end" onClick={() => eliminarTarea(res.id)}>Eliminar</button>
                  <button className="btn btn-warning btn-sm float-end mx-1" onClick={() => editarTarea(res.id)}>Editar</button>
              </li>
              ))
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
          <form onSubmit={formCrearTarea}>
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
