const Express = require('express');

let router = Express.Router();

const os = require('os');


router.get('/getuserinfo', (req, res) => {
    res.json({
        success: true,
        data: os.userInfo().username
    });
});

module.exports = router;