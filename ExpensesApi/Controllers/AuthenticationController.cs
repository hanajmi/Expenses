using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Cache;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Web.Http;
using System.Web.Http.Cors;
using ExpensesApi.Data;
using ExpensesApi.Models;
using Microsoft.IdentityModel.Tokens;

namespace ExpensesApi.Controllers
{
    [EnableCors("http://localhost:4200","*","*")]
    [RoutePrefix("auth")]

    public class AuthenticationController : ApiController
    {
        [Route("login")]
        [HttpPost]
        public IHttpActionResult login([FromBody] User request)
        {
            return null;
        }

        [Route("register")]
        [HttpPost]
        public IHttpActionResult register([FromBody] User request)
        {
            try
            {
                using (var context = new AppDbContext())
                {
                    var exists = context.users.Any(dbItems => dbItems.userName == request.userName);
                    if(exists) return BadRequest("User Already Exists");
                    context.users.Add(request);
                    context.SaveChanges();
                    return Ok(createToken(request));
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return null;
        }

        public JwtPackage createToken(User request)
        {
            var tokenHandler = new JwtSecurityTokenHandler();

            var claims = new ClaimsIdentity(new[] {
                new Claim(ClaimTypes.Email, request.userName)
            });

            const string secretKey = "Your Secret Key Goes Here";

            var securityKey = new SymmetricSecurityKey(Encoding.Default.GetBytes(secretKey));

            var signinCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature);

            var token = (JwtSecurityToken) tokenHandler.CreateJwtSecurityToken(
                subject: claims,
                signingCredentials: signinCredentials
             );

            var tokenString = tokenHandler.WriteToken(token);

            return new JwtPackage()
            {
                token = tokenString,
                userName = request.userName
            };
        }
    }
}

public class JwtPackage
{
    public string token { get; set; }
    public string userName { get; set; }
}
