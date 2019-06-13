using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace ExpensesApi.Controllers
{
    // Enable Cors For Cros Orgin Error
    [EnableCors("http://localhost:4200", "*", "*")]


    public class EntriesController : ApiController
    {
        public IHttpActionResult getEntries()
        {
            try
            {
                using (var context = new Data.AppDbContext())
                {
                    var entries = context.Entries.ToList();
                    return Ok(entries);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
                //throw;
            }
        }
    }
}
