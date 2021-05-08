const Express = require('express');
const Executables = require('./local/executables');
const Storage = require('./local/storage');

const router = Express.Router();

router.post('/logopath', (req, res) => {
    let execs = new Executables(req.body.data);
    let ls = new Storage();

    execs.getFileIcon((data) => {
        ls.addIcon(req.query.name, data.Base64ImageData);
    });

    res.json({
        success: true,
        data: ls.getIcon(req.params.name)
    });
});

module.exports = router;