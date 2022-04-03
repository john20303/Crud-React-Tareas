import React from 'react';
// import { nanoid } from 'nanoid'//Esta libreria nos genera id's automaticos.


function App() {

  return (
    <div className='container mt-4'>
      <h1 className='text-center'>CRUD Simple</h1>
      <hr />

      <div className="row">

        {/*Listar tareas */}
        <div className="col-8">
          <h4 className="text-center">Lista de Tareas</h4>
          <ul className="list-group">
              <li className="list-group-item">
                <span className="lead">Nombre Tarea</span>
                <button className="btn btn-danger btn-sm float-end">Eliminar</button>
                <button className="btn btn-warning btn-sm float-end mx-1">Editar</button>
              </li>
          </ul>
        </div>
        {/*Listar tareas */}

        {/*Crear tareas */}
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form>
            <input 
              type="text" 
              className="form-control mb-2" 
              placeholder='Ingrese Tarea'
              />
            <button className="btn btn-dark w-100" type='submit'>Agregar</button>
          </form>
        </div>
        {/*Crear tareas */}

      </div>
    </div>
  );
}

export default App;
