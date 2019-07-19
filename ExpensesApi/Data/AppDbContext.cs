using ExpensesApi.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ExpensesApi.Data
{
    public class AppDbContext : DbContext
    {
        // For WebConfig
        public AppDbContext() : base("name=ExpensesDb")
        {

        }
        public DbSet<Entry> Entries { get; set; } // Property. Register Model To DbContext

        public DbSet<User> users { get; set; }
    }
}