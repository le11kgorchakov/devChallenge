using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System;

namespace dotnet_api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class UsersController : ControllerBase
  {
    [HttpGet]
    public IEnumerable<User> Get()
    {
      try 
      { 
        SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder("Data Source=localhost;UID=sa;Password=inmotionnow123!;Initial Catalog=DevChallengeDB");
  
        var users = new List<User>();

        using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
        {
          connection.Open();       

          var sql = "SELECT userId, firstName, lastName from users";

          var command = new SqlCommand(sql, connection);
          var reader = command.ExecuteReader();
        
          while (reader.Read())
          {
            var user = new User
            {
              UserId = reader.GetInt32(0),
              FirstName = reader.GetString(1),
              LastName = reader.GetString(2)
            };
            users.Add(user);
          }
        }
        return users;
      }
      catch (SqlException e)
      {
        Console.WriteLine(e.ToString());
        return new List<User>();
      }
    }
  }
}
