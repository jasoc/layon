using System;
using System.Collections.Generic;
using System.IO;
using System.Collections;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.Extensions.Configuration;
using System.Linq;

using System.Diagnostics;

using Launcher.Models;



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
        public FileInfo[] SearchForGames() {
            // Folders that should be found: Steam[DONE], Origin Games[TO BE DONE]
            Launchers Launcher = new Launchers();


            // Drives name
            DriveInfo[] Drives = DriveInfo.GetDrives();
            // All the Games directories each drive will have
            List<string> Games = new List<string>();

            int index = 0;
            foreach(DriveInfo i in Drives) {
                // Check the first drive
                string[] temp = Directory.GetDirectories(i.ToString());
                string path = "";

                // All the MAIN directories on each drive contained by temp
                for(int j = 0; j < temp.Length; j++) {
                    try {
                        string[] _ = Directory.GetDirectories(temp[j]);
                        for(int k = 0; k < _.Length; k++) {
                            Console.WriteLine(_[k]);
                            if(_[k].Contains("Steam")) {
                                path = _[k].ToString() + @"\steamapps\common";
                                Launcher.Steam = Directory.GetDirectories(path);
                            }
                        }
                    }
                    catch(Exception e) {
                        Console.WriteLine($"In catch 54 {e}");
                    }
                }
                index++;
            }

            Console.WriteLine("----------------><-----------------");

            DirectoryInfo d = new DirectoryInfo(Launcher.Steam[0]);
            FileInfo[] Files = d.GetFiles("*.exe");
            Console.WriteLine(Files[0]);
            return Files;

            // Note per domani
            // DEVO TORNARE UNA LISTA DI STRINGHE, OGNUNA CORRISPONDENTE AL GIOCO DA AVVIARE
            // QUANDO DAL FRONTEND AVVIERO` L'APP L'INDEX DELL'ARRAY SARA` IL PATH DEL GIOCO
            // DA MANDARE AL METODO PROCESS.START CHE AVVIERA` IL GIOCO.

        }
    }
}