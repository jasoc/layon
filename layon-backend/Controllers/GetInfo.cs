using System;
using System.IO;
using System.Runtime.Versioning;
using System.DirectoryServices.AccountManagement;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

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

            string DisplayName;

            if(UserPrincipal.Current.DisplayName == "") {
                DisplayName = UserPrincipal.Current.DisplayName;
            }
            else {
                DisplayName = Environment.UserName;
            }

            return new ApiResult {
                Success = true,
                Data = DisplayName
            };
        }

        [HttpGet]
        public ApiResult ReturnGames() {

            string Documents = $@"C:\Users\{Environment.UserName}\Documents\Layon";

            if(Directory.Exists(Documents)) {
                
                string JsonFile = System.IO.File.ReadAllText(Documents + @"\games.json");

                List<Dictionary<string, string>> List = JsonConvert.DeserializeObject<List<Dictionary<string, string>>>(JsonFile);

                return new ApiResult {
                    Success = true,
                    Data = List
                };
            }
            else {
                return new ApiResult {
                    Success = false,
                    Data = "No games was found, did you add any game?"
                };
            }
        }


        [HttpPost] 
        public int InsertPath([FromBody] string GameName, string GamePath) {
            // [FromBody] string GameName, string GamePath
            // This is the global path to Documents
            string Documents = $@"C:\Users\{Environment.UserName}\Documents\Layon";

            Console.WriteLine($"-------------->{GameName}");
            Console.WriteLine($"-------------->{GamePath}");

            try {

                // Verifies if the folder is there and if the games.json exists
                if(!Directory.Exists(Documents)) 
                    Directory.CreateDirectory(Documents);

                /* If the file doesn't exists then it will be created with [ ] inside it
                 * in order to make it ready for JSON serialization and overwrite
                 */
                if(!System.IO.File.Exists(Documents + @"\games.json")) {
                    System.IO.File.WriteAllText(Documents + @"\games.json", "[ ]");
                }

                Dictionary<string, string> Game = new Dictionary<string, string>(){
                    {"GameName", GameName},
                    {"GamePath", GamePath}
                };

                string JsonFile = System.IO.File.ReadAllText(Documents + @"\games.json");

                // DESERIALIZE ----> DA STRINGA JSON A OGGETTO C#
                List<Dictionary<string, string>> List = JsonConvert.DeserializeObject<List<Dictionary<string, string>>>(JsonFile);

                List.Add(Game);

                // SERIALIZE ----> CONVERTE OGGETTI IN STRINGHE JSON
                string Converted = JsonConvert.SerializeObject(List, Formatting.Indented);

                System.IO.File.WriteAllText(Documents + @"\games.json", Converted);

            } catch(Exception) { }
            return 0;
        }
    }
}