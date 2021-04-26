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
    public class OpenExecutable : Controller
    {
        // Cercare i giochi partendo da quelli di steam
        [HttpGet]
        public int OpenFile() {

            Process.Start(@"C:\Users\frday_\Desktop\BambooMT2\Beekeeper.exe", "admin");
            return 0;
        }

        [HttpGet]
        public dynamic SearchForGames() {
            // Folders that should be found: Steam[DONE], Origin Games[TO BE DONE]

            // Drives name
            DriveInfo[] Drives = DriveInfo.GetDrives();
            // All the Games directories each drive will have
            // ListDictionary Games = new ListDictionary();
            Dictionary<string, string> Games = new Dictionary<string, string>();

            // List<Dictionary<string, string>> Games = new List<Dictionary<string, string>>();

            // List that contains all the folders that SHOULD contain games
            List<string> LauncherList = new List<string>() {
                "Steam",
                "Steam Library",
                "Origin Games",
                "Epic Games",
                "Rockstar Games",
                "Games"
            };

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
                            for(int l = 0; l < LauncherList.Count(); l++) {
                                if(_[k].Contains(LauncherList[l])) {
                                    Console.WriteLine($"----------------> E' STATA TROVATA LA CARTELLA {_[k]}");
                                    path = _[k].ToString() + @"\steamapps\common";
                                    return Games;
                                    Directory.GetDirectories(path);
                                    Games.Add("path", path);
                                }
                            }
                        }
                    }
                    catch(Exception e) {
                        Console.WriteLine($"In catch 71 {e}");
                    }
                }
            }

            Console.WriteLine("----------------><-----------------");

            foreach(var path in Games) {
                Console.WriteLine($"THE PATH IN GAMES IS -----------> {path}");
            }
            return Games;

            // int t_index = 0;
            // DirectoryInfo d = new DirectoryInfo(Launcher.Steam[0]);
            // FileInfo[] Files = d.GetFiles("*.exe");
            // foreach(var exe in Files) {
            //     Console.WriteLine(Files[t_index]);
            //     t_index++;
            // }
            // return Files;
            // return null;

            // Note per domani
            // DEVO TORNARE UNA LISTA DI STRINGHE, OGNUNA CORRISPONDENTE AL GIOCO DA AVVIARE
            // QUANDO DAL FRONTEND AVVIERO` L'APP L'INDEX DELL'ARRAY SARA` IL PATH DEL GIOCO
            // DA MANDARE AL METODO PROCESS.START CHE AVVIERA` IL GIOCO.

        }
    }
}