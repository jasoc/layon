const Express = require('express');
const exec = require('child_process').execFile;
const router = Express.Router();
const Executables = require('./local/executables');
const Storage = require('./local/storage');
const Json = require('./jsonwriter');

/**
 * Global request query params:
 *  - name: name of the game.
 */

router.get('/', (req, res) => {

    if (req.query.name === undefined) {
        res.json({
            success: false,
            message: "Game's name not present in url."
        });
    }

    next();

});

router.get('/start', (req, res) => {
    
    const game = req.query.name;
    let storage = new Storage();

    exec(game, (err) => { });

    res.json({
        success: true
    });
});

router.get('/icon', async (req, res) => {
    
    const game = req.query.name;

    let storage = new Storage();
    let iconPath = storage.getIcon(game);
    
    if (!iconPath) {
        
        let json = new Json(storage.fullPath, "/games.json")
            .readData();

        let exePath = json.find(g => g.name == game).path;
        let ex = new Executables(exePath);
        
        ex.writeFileIcon(async (data) => {
            await storage.addIcon(game, data);
            res.sendFile(storage.getIcon(game));
        });
        
    } else {
        res.sendFile(iconPath);
    }

});

module.exports = router;