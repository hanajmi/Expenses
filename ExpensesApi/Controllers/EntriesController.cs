using System;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;
using ExpensesApi.Data;
using ExpensesApi.Models;

namespace ExpensesApi.Controllers
{
    // Enable Cors For CorsOrigin Error
    [EnableCors("http://localhost:4200", "*", "*")]
    public class EntriesController : ApiController
    {
        /**
         * Get All Data
         */
        [HttpGet]
        public IHttpActionResult index()
        {
            try
            {
                using (var context = new Data.AppDbContext())
                {
                    var entries = context.Entries.ToList(); // modelName::all();
                    return Ok(entries);
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /**
         * Insert Data
         */
        [HttpPost]
        public IHttpActionResult store([FromBody] Entry entryItem) // $request
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }

                using (var context = new AppDbContext()) // Context == Db
                {
                    context.Entries.Add(entryItem);
                    context.SaveChanges(); // modelName->create($request)
                    return Ok("Entry Was Created");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        /**
         * Update Data
         */
        [HttpPut]
        public IHttpActionResult update(int id, [FromBody] Entry entryItem)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            if (entryItem.id != id) return BadRequest(ModelState);

            try
            {
                using (var context = new AppDbContext())
                {
                    var oldEntryItem =
                        context.Entries.FirstOrDefault(items => items.id == id); // Select Entry With Imported Id
                    if (oldEntryItem == null) return NotFound();

                    oldEntryItem.description = entryItem.description;
                    oldEntryItem.is_expense = entryItem.is_expense;
                    oldEntryItem.value = entryItem.value;

                    context.SaveChanges();
                    return Ok("Entry Update!");
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}