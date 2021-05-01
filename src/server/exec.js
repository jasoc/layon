const Express = require('express');

const exec = require('child_process').execFile;

const fs = require('fs');

const os = require('os');

const jw = require('./jsonwriter');

let router = Express.Router();


router.post('/openexecutable', (req, res) => {
    exec(req.body.data, (err) => { });
});

router.post('/writejson', (req, res) => {
    let documents = `C:/Users/${os.userInfo().username}/Documents/Layon`;

    let JS = new jw(documents, "/games.json");

    let game = {
        name : req.body.data.name,
        path : req.body.data.path
    }
    
    JS.pushToJson(game);
});

module.exports = router;