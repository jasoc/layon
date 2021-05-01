const Express = require('express');

let router = Express.Router();

const os = require('os');

const jw = require('./jsonwriter');


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

module.exports = router;