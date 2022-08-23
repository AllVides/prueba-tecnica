using System.ComponentModel.DataAnnotations;


namespace backend.Models
{
    public class Empleado
    {
        [Key]
        public int id_empleado { get; set; }
        public string nombre { get; set; }
        public string apellido { get; set; }
        public string no_licencia { get; set; }
        public string telefono { get; set; }
        public int id_dir { get; set; }
        public int id_rol { get; set; }
    }
}
