const Express = require('express');

let router = Express.Router();

const os = require('os');

const jw = require('./jsonwriter');

const sp = require('child_process');

const path = require('path');

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
        "Games"
    ];

    let launcherPath =  [];

    console.log(`I drives sono ${drives}`);

    let masterDirectories = [];

    drives = ["C:"];

    drives.forEach( (drive) => {
        drive = drive + "/";

        masterDirectories = fs.readdirSync(drive);

        masterDirectories.forEach( (subMaster) => {
            subMaster = path.resolve(drive, subMaster);
            launcherList.forEach( (launcher) => {
                if(subMaster.includes(launcher)) {
                    launcherPath.push(subMaster);
                }
            });

            // console.log(subMaster);
            let subSubMaster = fs.readdirSync(subMaster);

            subSubMaster.forEach( (fn) => {
                

                console.log(fn);
                // subSubMaster.forEach( (finalFolder) => {
                //     // finalFolder = path.resolve()
                //     console.log(finalFolder);
                // });
            });
        });
    });

    // console.log(launcherPath);
});


module.exports = router;