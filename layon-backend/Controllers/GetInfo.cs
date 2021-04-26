using System;
using System.Collections.Generic;
using System.IO;
using System.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.Configuration;
using System.Linq;
using System.Diagnostics;



namespace aspnetcoreapp.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class GetInfo : Controller
    {
        // Cercare i giochi partendo da quelli di steam
        [HttpGet]
        public string GetUserInfo() {
            Console.WriteLine("INFO");
            string WinName = Environment.UserName;
            return WinName;
        }
    }
}