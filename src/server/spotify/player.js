const Express = require('express');
let router = Express.Router();
const FetchData = require('./fetchdata');

router.post('/play', async (req, res) => {

    console.log("IN PUT!");

    const data = await FetchData.callApi(`https://api.spotify.com/v1/me/player/play`, 'PUT', { 
            'Accept' : 'application/json',
            'Content-Type' : 'application/json', 
            'Authorization' : 'Bearer ' + req.body.TOKEN 
        }, JSON.stringify({
            "context_uri": "spotify:playlist" + req.body.playlistID,
            "offset": {
              "position": req.body.index
            },
            "position_ms": 0
        })
    );
    
    console.log('Fine');
    console.log(data);

    res.json({
        success: true,
        data: null
    });
});


module.exports = router;