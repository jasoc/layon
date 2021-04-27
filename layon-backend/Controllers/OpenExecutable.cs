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
        [HttpPost]
        public int OpenFile([FromBody] string path) {
            // This one works, already tested using Postman
            Process.Start(path, "admin");
            return 0;
        }

        [HttpGet]
        public dynamic SearchForGames() {
            // Riguardo le complicazioni con questo codice, quest'ultimo deve restare commentato in lingua ITALIANA.

            
            // Ogni singolo Drive, quindi C, D, E
            DriveInfo[] Drives = DriveInfo.GetDrives();

            // La lista dei giochi deve essere tornata in path
            List<string> Games = new List<string>();

            // La lista dei launcher che deve essere controllata
            Dictionary<string, string> LauncherList = new Dictionary<string, string>()
            {
                {"Steam", @"\steamapps\common"},
                {"Steam Library", @"\steamapps\common"},
                {"Games", ""}
            };

            foreach(DriveInfo DriveLetter in Drives) {

                try {      
                    /*
                     * Questo array di stringhe non sarà altro che sovrascritto ogni volta.
                     * Ad ogni iterazione di un nuovo HardDisk o SSD questo array conterrà
                     * tutte le directory principali del singolo Drive(Per ogni iterazione)
                     */
                    string[] DriveDirectories = Directory.GetDirectories(DriveLetter.ToString());

                    foreach (string SingleDirectory in DriveDirectories) {
                        /*
                         * Come da nome, SingleDirectory è una stringa che conterra una 
                         * SINGOLA cartella per volta di ogni drive, quindi alla prima
                         * iterazione si tratterà delle singole cartelle del drive C
                         */
                        
                        /* 
                         * Dentro questo array ci saranno le SubDirectories delle SingleDirectory
                         * ciò significa che se nella sua iterazione si trova nel DriveLetter C:\
                         * DriveDirectories avrà tutte le cartelle di questo Drive, e di conseguenza
                         * DriveDirectories__SubDirectories dato che siamo in un foreach avrà tutte le
                         * cartelle di di ogni singola cartella contenuta su SingleDirectory.
                         * ESEMPIO: C:\Program Files (x86) Avrà tutte le cartelle di questo path.
                         */
                        // Console.WriteLine(SingleDirectory);
                        try {
                            string[] DriveDirectories__SubDirectories = Directory.GetDirectories(SingleDirectory);

                            // Mi scuso per i nomi lunghi ma devono essere rappresentativi.
                            foreach(string SingleDirectory__SubDirectories in DriveDirectories__SubDirectories) {

                                foreach(var Launcher in LauncherList) {

                                    if(SingleDirectory__SubDirectories.Contains(Launcher.Key)) {
                                        Games.Add(SingleDirectory__SubDirectories + Launcher.Value);
                                    }
                                }

                            }
                        } catch(Exception) { }
                    }
                } catch(Exception) { }
            }

            return Games;
        }
    }
}