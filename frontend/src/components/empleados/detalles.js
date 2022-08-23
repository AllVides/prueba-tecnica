import React, {useState} from "react";
import axios from "axios";

function Detail({node = {}}){

    const [data, setData] = useState(node);

    

    

    const handleChange = (evt) => {
        evt.preventDefault();
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        setData({...data, [name]: value});
    }

    const enviar =async (evt) => {
        evt.preventDefault();
        axios.put("https://localhost:7087/api/empleados/"+data.id_empleado, data)
        .then(function(response) {console.log(response)})
        .catch(function(error) {alert(error)});
    }

    const borrar = async (evt) => {
        evt.preventDefault();
        axios.delete("https://localhost:7087/api/empleados/"+data.id_empleado)
        .then(function(response) {console.log(response)})
        .catch(function(error) {alert(error)});
    }

    return(
        <>
        <form id="create">
            <label class="label">id <input class="input" value={data.id_empleado} name="nombre" type="string" onChange={handleChange}></input></label>
            <label class="label">Nombre <input class="input" value={data.nombre} name="nombre" type="string" onChange={handleChange}></input></label>
            <label class="label">Apellido <input class="input" value={data.apellido} name="apellido" type="sting" onChange={handleChange}></input></label>
            <label class="label">Licencia <input class="input" value={data.no_licencia} name="no_licencia" type="string" onChange={handleChange}></input></label>
            <label class="label">Telefono <input class="input" value={data.telefono} name="telefono" type="string" onChange={handleChange}></input></label>
            <label class="label">Direccion <input class="input" value={data.id_dir} name="id_dir" type="number" onChange={handleChange}></input></label>
            <label class="label">id_rol <input class="input" value={data.id_rol} name="id_rol" type="number" onChange={handleChange}></input></label>
            
            <div class="buttons"> 
            <input class="button is-primary" type="submit"value="submit" onClick={enviar}></input>
            <input class="button is-primary" type="submit"value="delete" onClick={borrar}></input>
            </div>
           
        </form>
        </>
    )
}

export default Detail;