const Express = require('express');

let router = Express.Router();

router.post('/dio', (req, res) => {
    console.log(req.body);
    res.json({
        ciao: "dsdsds",
        csaukhd: "dsdsds"
    });
});

module.exports = router;