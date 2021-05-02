const Express = require('express');

let router = Express.Router();

const os = require('os');

const jw = require('./jsonwriter');

const sp = require('child_process');


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

    let drives = '';
    let list = sp.spawn("cmd");

    list.stdout.on('wmic logicaldisk get caption', (data) => {
        drives += data;
    });

    console.log(drives);

    // console.log(list.stdin.write('wmic logicaldisk get caption'));
    // console.log("finito");
});



module.exports = router;