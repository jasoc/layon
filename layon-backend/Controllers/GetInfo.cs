using System;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

using layon.Models;

namespace layon.Controllers
{
    [ApiController]
    [EnableCors("defaultLayonPolicy")]
    [Route("[controller]/[action]")]
    public class GetInfo : Controller
    {
        [HttpGet]
        public ApiResult GetUserInfo() {
            return new ApiResult {
                Success = true,
                Data = Environment.UserName
            };
        }
    }
}