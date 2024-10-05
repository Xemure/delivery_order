using Microsoft.EntityFrameworkCore;
using Versta_test_project.Server.Models;

namespace Versta_test_project.Server.Data
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Order> Orders { get; set; } = null!;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
    }
}
