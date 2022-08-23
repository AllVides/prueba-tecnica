import React, {useState} from "react";
import axios from "axios";
import Detail from "./detalles";

function List(){

    const [data, setData] = useState([
        {   id_vehiculo: null,
            id_tipovehiculo: null,
            placa: null,
            volumen: null,
            id_dir: null,
            combustibleconsumido: null,
            depreciacion: null,
            kilometraje: null
        }]
    );
    

    

      const getData =async (evt) => {
        let res = axios.get("https://localhost:7087/api/vehiculos")
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
        
        <h1 class="title">Vehiculos Actuales</h1>
        <p>Presiona sobre la fila que desees modificar, los botones de modificar y eliminar se mostraran.</p><br/>
            <div class="table-container">
                <table class="table is-bordered is-striped is-hoverable is-fullwidth is-warning">
                    <thead>
                        <th>  <div class="notification is-warning">ID </div></th>
                        <th>  <div class="notification is-warning">Tipo Vehiculo </div></th>
                        <th><div class="notification is-warning">Placa</div></th>
                    
                        
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
                            <td> {node.id_vehiculo}</td>   
                            <td>{node.id_tipovehiculo}</td>     
                            <td>{node.placa}</td>
                        </tr>
                        { hijoVisible && (
                            <tr><th COLSPAN="3"><Detail node={node} /></th></tr>
                    )}

            
        </>
    );
}

export default List;