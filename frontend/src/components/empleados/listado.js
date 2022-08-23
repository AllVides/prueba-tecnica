import React, {useState} from "react";
import axios from "axios";
import Detail from "./detalles";

function List(){

    const [data, setData] = useState([
        {   id_empleado: null,
            nombre: null,
            apellido: null,
            no_licencia: null,
            telefono: null,
            id_dir: null,
            id_rol: null
        }]
    );

    const [show, setShow] = useState(false);

    const [id, setId] = useState("");
    

    const rowIndex = async (evt)  => {
       // console.log( evt.target.innerText );
        setId(evt.target.innerText)
      }

      const getData =async (evt) => {
        let res = axios.get("https://localhost:7087/api/empleados")
        .then(resp => {
            console.log(resp)
            setData(resp.data);})
        .catch(function(error) {alert(error)});

        //setData(res);

        evt.preventDefault();
        
    }

            
    
    return(
        <>
            
        <div class="buttons">
            <a class="button" onClick={getData}>Obtener Datos</a>
        </div>
        
        <h1 class="title">Empleado Actuales</h1>
        <p>Presiona sobre la fila que desees modificar, los botones de modificar y eliminar se mostraran.</p><br/>
            <div class="table-container">
                <table class="table is-bordered is-striped is-hoverable is-fullwidth is-warning">
                    <thead>
                        <th>  <div class="notification is-warning">ID </div></th>
                        <th>  <div class="notification is-warning">NOMBRE </div></th>
                        <th><div class="notification is-warning">APELLIDO</div></th>
                        <th ><div class="notification is-warning">LICENCIA </div></th>
                        
                    </thead>
                    <tbody>
                        <Cuerpo data={data} />
                    </tbody>
                </table>
          
            </div>
            
      </>
    );
}

function Cuerpo ({ data = [] }) {
    
        
    return (
        <>
            {data.map((nodo) => (
               <Row node={nodo} />
            
               ))}
        
      </>
    );
  };

const Row = ({node = {}}) => {
    const [hijoVisible, sethijoVisible] = useState(false);

    return (
        <>
            
                        
                        <tr onClick={e => sethijoVisible((v) => !v)}>
                            <td> {node.id_empleado}</td>   
                            <td>{node.nombre}</td>     
                            <td>{node.apellido}</td>
                            <td>{node.no_licencia}</td>     
                        </tr>
                        { hijoVisible && (
                            <tr><th COLSPAN="4"><Detail node={node} /></th></tr>
                    )}

            
        </>
    );
}

export default List;