const Express = require('express');
let router = Express.Router();
const fetch = require('node-fetch');

router.post('/getgenres', async (req, res) => {

    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + req.body.TOKEN }
    });

    const data = await result.json();

    
    res.json({
        success: true,
        data: data
    });

});

router.post('/getplaylists', async (req, res) => {

    const result = await fetch(`https://api.spotify.com/v1/me/playlists`, {
        method: 'GET',
        headers: { 
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + req.body.TOKEN
         }
    });

    const data = await result.json();

    res.json({
        success: true,
        data: data
    });
});

// function callApi(method, url, body, callback){
//     let xhr = new XMLHttpRequest();
//     xhr.open(method, url, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');
//     xhr.setRequestHeader('Authorization', 'Bearer ' + access_token);
//     xhr.send(body);
//     xhr.onload = callback;
// }

// function currentlyPlaying(){
//     callApi( "GET", PLAYER + "?market=US", null, handleCurrentlyPlayingResponse );
// }

router.post('/currentplaying', async (req, res) => {
    
    const result = await fetch('https://api.spotify.com/v1/me/player?market=IT', {
        method: 'GET',
        headers: { 
            'Accept': 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + req.body.TOKEN
        }
    });

    const data = await result.json();

    res.json({
        success: true,
        data: data
    });
});



module.exports = router;