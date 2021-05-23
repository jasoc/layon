const Express = require('express');
let router = Express.Router();
const FetchData = require('./fetchdata');

router.post('/play', async (req, res) => {


    FetchData.callApi(`https://api.spotify.com/v1/me/player/play?device_id=${req.body.device_id}`, 'PUT', { 
            'Accept' : 'application/json',
            'Content-Type' : 'application/json', 
            'Authorization' : 'Bearer ' + req.body.TOKEN 
        }, JSON.stringify({
            'uris': ["spotify:track:" + req.body.trackID]
        })
    );

    res.json({
        success: true
    });
});

router.post('/pause', (req, res) => {

    
    FetchData.callApi(`https://api.spotify.com/v1/me/player/pause?device_id=${req.body.device_id}`, 'PUT', {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json', 
        'Authorization' : 'Bearer ' + req.body.TOKEN
    }, null);

    res.json({
        success: true
    });
});


module.exports = router;