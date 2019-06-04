using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ExpensesApi.Models
{
    public class Entry
    {
        public string descriotion  { get; set; }
        public bool is_expense { get; set; }
        public double value { get; set; }
    }
}