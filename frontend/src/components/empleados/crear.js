import React, {useState} from "react";
import axios from "axios";

function Create(){

    const [data, setData] = useState(
        {
            nombre: null,
            apellido: null,
            no_licencia: null,
            telefono: null,
            id_dir: null,
            id_rol: null
        }
    );

    

    

    const handleChange = (evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        setData({...data, [name]: value});
    }

    const enviar =async (evt) => {
        axios.post("https://localhost:7087/api/empleados", data)
        .then(function(response) {console.log(response)})
        .catch(function(error) {alert(error)});

        evt.preventDefault();

        
    }

    return(
        <>
        <form id="create">
            <label class="label">Nombre <input class="input" name="nombre" type="string" onChange={handleChange}></input></label>
            <label class="label">Apellido <input class="input" name="apellido" type="sting" onChange={handleChange}></input></label>
            <label class="label">Licencia <input class="input" name="no_licencia" type="string" onChange={handleChange}></input></label>
            <label class="label">Telefono <input class="input" name="telefono" type="string" onChange={handleChange}></input></label>
            <label class="label">Direccion <input class="input" name="id_dir" type="number" onChange={handleChange}></input></label>
            <label class="label">id_rol <input class="input" name="id_rol" type="number" onChange={handleChange}></input></label>
            
           
            <input class="button is-primary" type="submit"value="submit" onClick={enviar}></input>
        </form>
        </>
    )
}

export default Create;