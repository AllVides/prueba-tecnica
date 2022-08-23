using Microsoft.EntityFrameworkCore;

namespace backend.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
        : base(options) { }

        public DbSet<Empleado> Empleado { get; set; } = null!;
        public DbSet<Vehiculo> Vehiculo { get; set; } = null!;


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }


    }
}
