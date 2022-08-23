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
        axios.put("https://localhost:7087/api/vehiculos/"+data.id_vehiculo, data)
        .then(function(response) {console.log(response)})
        .catch(function(error) {alert(error)});
    }

    const borrar = async (evt) => {
        evt.preventDefault();
        axios.delete("https://localhost:7087/api/vehiculos/"+data.id_vehiculo)
        .then(function(response) {console.log(response)})
        .catch(function(error) {console.log(error); alert(error)});
    }

    return(
        <>
        <form id="create">
        <label class="label">Id vehiculo <input class="input" value={data.id_vehiculo} name="id_vehiculo" type="number" onChange={handleChange}></input></label>
        <label class="label">Tipo Vehiculo <input class="input" value={data.id_tipovehiculo} name="id_tipovehiculo" type="string" onChange={handleChange}></input></label>
            <label class="label">Placa <input class="input" value={data.placa} name="placa" type="string" onChange={handleChange}></input></label>
            <label class="label">Volumen <input class="input" value={data.volumen} name="volumen" type="number" onChange={handleChange}></input></label>
            <label class="label">Ubicacion <input class="input" value={data.id_dir} name="id_dir" type="number" onChange={handleChange}></input></label>
            <label class="label">Combustible Consumido <input class="input" value={data.combustibleconsumido} name="combustibleconsumido" type="number" onChange={handleChange}></input></label>
            <label class="label">Depreciacion <input class="input" value={data.depreciacion} name="depreciacion" type="number" onChange={handleChange}></input></label>
            <label class="label">Kilometraje <input class="input" value={data.kilometraje} name="kilometraje" type="number" onChange={handleChange}></input></label>

            <div class="buttons"> 
            <input class="button is-primary" type="submit"value="submit" onClick={enviar}></input>
            <input class="button is-primary" type="submit"value="delete" onClick={borrar}></input>
            </div>
           
        </form>
        </>
    )
}

export default Detail;