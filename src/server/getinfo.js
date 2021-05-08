const Express = require('express');

let router = Express.Router();

const os = require('os');
const jw = require('./jsonwriter');
const fs = require('fs')
const nodeDiskInfo = require('node-disk-info');

router.get('/getuserinfo', (req, res) => {
    res.json({
        success: true,
        data: os.userInfo().username
    });
});

router.get('/returngames', (req, res) => {
    let documents = `C:/Users/${os.userInfo().username}/Documents/Layon`;

    let JS = new jw(documents, "/games.json");

    console.log(JS.readData());

    res.json({
        success: true,
        data: JS.readData()
    });

});

router.get('/bruteforce', (req, res) => {

    console.log("In function");

    const disks = nodeDiskInfo.getDiskInfoSync();

    let drives = [];
        
    for (let disk of disks) {
        drives.push(disk.mounted);
    }

    let launcherList = [
        "Steam",
        "SteamLibrary",
        "Steam Library",
        "Games"
    ];

    let launcherPath =  [];

    console.log(`I drives sono ${drives}`);

    let masterDirectories = [];

    drives.forEach( (drive) => {
        drive = drive + "/";

        masterDirectories = fs.readdirSync(drive);

        masterDirectories.forEach( (subDirectories) => {

            for(var i = 0; i < launcherList.length; i++) {
                if(subDirectories.includes(launcherList[i])) {
                    launcherPath.push(subDirectories);
                }
            }

            let subSubDirectories = fs.readdirSync(subDirectories);
        })
    });

});

module.exports = router;