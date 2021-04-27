using System;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;
using System.Collections.Generic;
using System.DirectoryServices.AccountManagement;

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

            Dictionary<string, string> Info = new Dictionary<string, string>() {
                {"name", Environment.UserName},
                {"email", UserPrincipal.Current.EmailAddress}
            };            
            // UserPrincipal.Current.EmailAddress;
            // Environment.UserName
            return new ApiResult {
                Success = true,
                Data = Info
            };
        }
    }
}