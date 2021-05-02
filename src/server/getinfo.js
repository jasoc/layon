const Express = require('express');

let router = Express.Router();

const os = require('os');

const jw = require('./jsonwriter');

const sp = require('child_process');

const { readdirSync } = require('fs')

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

    const disks = nodeDiskInfo.getDiskInfoSync();

    let drives = [];
    
    for (let disk of disks) {
        drives.push(disk.mounted);
    }


    const getDirectories = source =>
        readdirSync(source, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name)

    drives.forEach( (drive) => {
        
        let test = getDirectories(drive);

        console.log(test);


    })

});


module.exports = router;