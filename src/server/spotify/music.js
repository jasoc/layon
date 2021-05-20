const Express = require('express');
let router = Express.Router();
const FetchData = require('./fetchdata');


router.post('/getgenres', async (req, res) => {

    const data = await FetchData.callApi(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, 'GET', 
        { 'Authorization' : 'Bearer ' + req.body.TOKEN }, null
    );
    
    res.json({
        success: true,
        data: data
    });

});

router.post('/getplaylists', async (req, res) => {


    const data = await FetchData.callApi(`https://api.spotify.com/v1/me/playlists?offset=0&limit=20`, 'GET', 
        { 'Content-Type' : 'application/json', 'Authorization' : 'Bearer ' + req.body.TOKEN }, null
    );

    res.json({
        success: true,
        data: data
    });
});


router.post('/currentplaying', async (req, res) => {
    
    
    const data = await FetchData.callApi(`https://api.spotify.com/v1/me/player`, 'GET', { 
        'Accept' : 'application/json',
        'Content-Type' : 'application/json', 
        'Authorization' : 'Bearer ' + req.body.TOKEN 
    }, null);


    res.json({
        success: true,
        data: data
    });
});



module.exports = router;