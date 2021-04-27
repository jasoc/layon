using System;
using System.Runtime.Versioning;
using System.DirectoryServices.AccountManagement;

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
        [SupportedOSPlatform("windows")]
        public ApiResult GetUserInfo() {
            return new ApiResult {
                Success = true,
                Data = UserPrincipal.Current.DisplayName
            };
        }
    }
}