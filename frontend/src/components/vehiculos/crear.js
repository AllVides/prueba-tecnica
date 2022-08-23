

import React, {useState} from "react";
import axios from "axios";

function Create(){

    const [data, setData] = useState(
        {
            id_tipovehiculo: null,
            placa: null,
            volumen: null,
            id_dir: null,
            combustibleconsumido: null,
            depreciacion: null,
            kilometraje: null
        }
    );

    

    

    const handleChange = (evt) => {
        const target = evt.target;
        const value = target.value;
        const name = target.name;

        setData({...data, [name]: value});
    }

    const enviar =async (evt) => {
        axios.post("https://localhost:7087/api/vehiculos", data)
        .then(function(response) {console.log(response)})
        .catch(function(error) {alert(error)});

        evt.preventDefault();

        
    }

    return(
        <>
        <form id="create">
            <label class="label">Tipo Vehiculo <input class="input" name="id_tipovehiculo" type="string" onChange={handleChange}></input></label>
            <label class="label">Placa <input class="input" name="placa" type="string" onChange={handleChange}></input></label>
            <label class="label">Volumen <input class="input" name="volumen" type="number" onChange={handleChange}></input></label>
            <label class="label">Ubicacion <input class="input" name="id_dir" type="number" onChange={handleChange}></input></label>
            <label class="label">Combustible Consumido <input class="input" name="combustibleconsumido" type="number" onChange={handleChange}></input></label>
            <label class="label">Depreciacion <input class="input" name="depreciacion" type="number" onChange={handleChange}></input></label>
            <label class="label">Kilometraje <input class="input" name="kilometraje" type="number" onChange={handleChange}></input></label>

           
            <input class="button is-primary" type="submit"value="submit" onClick={enviar}></input>
        </form>
        </>
    )
}

export default Create;