using System;
using System.Collections.Generic;
using System.IO;
using System.Collections;
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
        // Cercare i giochi partendo da quelli di steam
        [HttpGet]
        public int OpenFile() {

            Process.Start(@"C:\Users\frday_\Desktop\BambooMT2\Beekeeper.exe", "admin");
            return 0;
        }

        [HttpGet]
        public string[] SearchForGames() {
            List<string> Games = new List<string>();
            string[] Directories = Directory.GetDirectories(@"C:\", "p*", SearchOption.TopDirectoryOnly);
            string PathToApps = "";

            foreach(string dir in Directories) {
                if(dir.Contains("x86")) {
                    PathToApps = dir;
                    break;
                }
            }

            if(System.IO.Directory.Exists($@"{PathToApps}\Steam\steamapps\common"))
            {
                PathToApps = $@"{PathToApps}\Steam\steamapps\common";
                Directories = Directory.GetDirectories(PathToApps);
                
                foreach(string dir in Directories) {
                    Console.WriteLine(dir);
                }

                return new string[] {"Directory found"};
            }
            else {
                throw new Exception("Steam folder not found");
            }
        }
    }
}