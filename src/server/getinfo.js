const Express = require('express');

let router = Express.Router();

const os = require('os');
const jw = require('./jsonwriter');
const fs = require('fs')
const path = require('path');
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

    res.json({
        success: true,
        data: JS.readData()
    });

});

router.get('/bruteforce', (req, res) => {

    const disks = nodeDiskInfo.getDiskInfoSync();

    let drives = [];
        
    for (let disk of disks) {
        drives.push(disk.mounted);
    }

    let launcherList = [
        "Steam", //      /steamapps/common
        "Games"
    ];

    let launcherPath =  [];

    console.log(`I drives sono ${drives}`);

    let masterDirectories = [];

    let games = [];

    // drives = ["C:"];

    drives.forEach( (drive) => {
        drive = drive + "/";

        let InitialDriveDirectories = fs.readdirSync(drive);

        InitialDriveDirectories.forEach( (folderOfInitialDriveDirectories) => {

            // Torna il path
            folderOfInitialDriveDirectories = path.resolve(drive, folderOfInitialDriveDirectories);

            console.log(`SI TROVA SU --------> ${folderOfInitialDriveDirectories}`);
            try {
                let subDirectories = fs.readdirSync(folderOfInitialDriveDirectories);

                subDirectories.forEach( (finalFolder) => {

                    finalFolder = path.resolve(folderOfInitialDriveDirectories, finalFolder);

                    launcherList.forEach( (launcher) => {
                        if(finalFolder.includes(launcher)) {
                            launcherPath.push(finalFolder);
                        }
                    });
                });
            } catch { }
        });
    });

    var walk = function(dir, done) {
        var results = [];
        fs.readdir(dir, function(err, list) {
          if (err) return done(err);
          var pending = list.length;
          if (!pending) return done(null, results);
          list.forEach(function(file) {
            file = path.resolve(dir, file);
            fs.stat(file, function(err, stat) {
              if (stat && stat.isDirectory()) {
                walk(file, function(err, res) {
                  results = results.concat(res);
                  if (!--pending) done(null, results);
                });
              } else {
                results.push(file);
                if (!--pending) done(null, results);
              }
            });
          });
        });
    };

    console.log(launcherPath);

    launcherPath.forEach( (launcher) => {
        walk(launcher, (err, results) => {
            try {
                results.forEach( (exe) => {
                    let _ = exe.split(".")[exe.split(".").length-1];
                    if(_ == "exe") {
                        games.push(exe);
                        console.log(games);
                    }
                });
            } catch { }
        });
    });
    // console.log(games);
});

module.exports = router;