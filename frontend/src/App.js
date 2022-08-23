import './App.css';
import React, {useState} from "react";
import Create from "./components/empleados/crear"
import List from "./components/empleados/listado"
import CrearVehi from "./components/vehiculos/crear"
import ListarVehi from "./components/vehiculos/listado"

function App() {

  const [inicio, setInicio] = useState(true);
  const [listEmpleado, setListEmpleado] = useState(false);
  const [listVehiculo, setListVehiculo] = useState(false);
  const [crearEmpleado, setCrearEmpleado] = useState(false);
  const [crearVehiculo, setCrearVehiculo] = useState(false);

  const verInicio = async(evt) => {
    setInicio(true);
    setListEmpleado(false);
    setListVehiculo(false);
    setCrearEmpleado(false);
    setCrearVehiculo(false);
  }
  const verEmpleado = async(evt) => {
    setListEmpleado(true);
    setListVehiculo(false);
    setCrearEmpleado(false);
    setCrearVehiculo(false);
    setInicio(false);
  }
  const registrarEmpleado = async(evt) => {
    setCrearEmpleado(true);
    setListVehiculo(false);
    setListEmpleado(false);
    setCrearVehiculo(false);
    setInicio(false);
  }
  const verVehiculo = async(evt) => {
    setListVehiculo(true);
    setCrearEmpleado(false);
    setListEmpleado(false);
    setCrearVehiculo(false);
    setInicio(false);
  }
  const registrarVehiculo = async(evt) => {
    setCrearVehiculo(true);
    setListVehiculo(false);
    setCrearEmpleado(false);
    setListEmpleado(false);
    setInicio(false);
  }
  return (
    <div>
      <div class="container">
      <navbar class="navbar" role="navigation">
        <div class="navbar-menu">
            <div class="navbar-start" >
            <a class="navbar-item" onClick={verInicio}>Inicio</a>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Empleados
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item" onClick={verEmpleado}>Listado</a>
                
                  <a class="navbar-item" onClick={registrarEmpleado}>Crear</a>
                  </div>
              </div>
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                  Vehiculos
                </a>
                <div class="navbar-dropdown">
                  <a class="navbar-item" onClick={verVehiculo}>Listado</a>
                
                  <a class="navbar-item" onClick={registrarVehiculo}>Crear</a>
                </div>
              </div>
            </div>
          </div>
      </navbar>
        {inicio ? <h1 class="title">Mi Camioncito</h1> : null}
        {listEmpleado ?  <List />: null}
        {listVehiculo ? <ListarVehi/> : null}
        {crearEmpleado ? <Create /> : null}
        {crearVehiculo ? <CrearVehi /> : null}
      </div>
      

    </div>
    
  );
}

export default App;
