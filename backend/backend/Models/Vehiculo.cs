using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Vehiculo
    {
        [Key]
        public int id_vehiculo { get; set; }
        public int id_tipovehiculo { get; set; }
        public string placa { get; set; }
        public float volumen { get; set; }
        public int id_dir { get; set; }
        public float combustibleconsumido { get; set; }
        public float depreciacion { get; set; }
        public float kilometraje { get; set; }

    }
}
