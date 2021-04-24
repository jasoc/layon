using System;
using System.Collections.Generic;
using System.IO;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.Configuration;

using System.Diagnostics;



namespace aspnetcoreapp.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class OpenExecutable : Controller
    {
        [HttpGet]
        public int OpenFile() {

            Process.Start(@"C:\Users\frday_\Desktop\BambooMT2\Beekeeper.exe", "admin");
            return 0;
        }
    }
}