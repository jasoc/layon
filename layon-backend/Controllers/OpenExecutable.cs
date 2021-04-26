using System;
using System.IO;
using System.Linq;
using System.Diagnostics;
using System.Collections.Generic;

using Microsoft.AspNetCore.Mvc;

namespace layon.Controllers
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

            /*
             * All the Games directories each drive will have
             * ListDictionary Games = new ListDictionary();
             */
            //Dictionary<string, string> Games = new Dictionary<string, string>();
            List<string> Games = new List<string>();

            // List that contains all the folders that SHOULD contain games
            Dictionary<string, Func<string, bool>> LauncherList = new Dictionary<string, Func<string, bool>>();

            LauncherList.Add("Steam", (string path) => { return path == @"\steamapps\common"; });
            LauncherList.Add("Steam Library", (string path) => { return path == @"\steamapps\common"; });
            LauncherList.Add("Epic Games", (string path) => { return (path != "DirectXRedist" && path != "Launcher"); });
            LauncherList.Add("Origin Games", null);
            LauncherList.Add("Rockstar Games", null);
            LauncherList.Add("Games", null);

            foreach(DriveInfo i in Drives) {
                // Check the first drive
                string[] temp = Directory.GetDirectories(i.ToString());
                string path = "";

                // All the MAIN directories on each drive contained by temp
                for(int j = 0; j < temp.Length; j++) {
                    try {
                        string[] _ = Directory.GetDirectories(temp[j]);
                        for(int k = 0; k < _.Length; k++)
                            foreach (var launcher in LauncherList)
                                if(_[k].Contains(launcher.Key))
                                    if (launcher.Value is not null)
                                        foreach (var p in Directory.GetFiles(_[k], "*.exe").Where(launcher.Value))
                                            Games.Add(p);
                                    else
                                        foreach (var p in Directory.GetFiles(_[k], "*.exe"))
                                            Games.Add(p);
                    }
                    catch(Exception) { }
                }
            }

            foreach(var path in Games)
                Console.WriteLine($"THE PATH IN GAMES IS -----------> {path}");

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