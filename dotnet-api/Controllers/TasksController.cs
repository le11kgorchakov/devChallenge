using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System;

namespace dotnet_api.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class TasksController : ControllerBase
  {
    [HttpGet]
    public IEnumerable<Task> Get()
    {
      try 
      { 
        SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder("Data Source=localhost;UID=sa;Password=inmotionnow123!;Initial Catalog=DevChallengeDB");

        var tasks = new List<Task>();

        using (SqlConnection connection = new SqlConnection(builder.ConnectionString))
        {
          connection.Open();       

          var sql = "SELECT taskId, title, description from tasks";

          var command = new SqlCommand(sql, connection);
          var reader = command.ExecuteReader();

          while (reader.Read())
          {
            var task = new Task
            {
              TaskId = reader.GetInt32(0),
              Title = reader.GetString(1),
              Description = reader.GetString(2)
            };
            tasks.Add(task);
          }
        }
        return tasks;
      }
      catch (SqlException e)
      {
        Console.WriteLine(e.ToString());
        return new List<Task>();
      }
    }
  }
}
