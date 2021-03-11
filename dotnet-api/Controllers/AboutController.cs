using Microsoft.AspNetCore.Mvc;

namespace dotnet_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AboutController : ControllerBase
    {
    [HttpGet]
    public About Get()
    {
      return new About
      {
        Name = "inmotionnow dotnet api",
        Version = "0.0.0"
      };
    }
  }
}
