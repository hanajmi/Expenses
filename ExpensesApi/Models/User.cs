using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ExpensesApi.Models
{
    public class User
    {
        [Key] public int id { get; set; }
        public string userName { get; set; }
        public string password { get; set; } 
    }
}