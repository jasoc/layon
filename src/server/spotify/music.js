const Express = require('express');
let router = Express.Router();
const fetch = require('node-fetch');

router.post('/getgenres', async (req, res) => {

    console.log(req.body);

    console.log("I'm in... ------>");

    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + req.body.TOKEN }
    });

    const data = await result.json();

    console.log("---------->", data);
    
    res.json({
        success: true,
        data: data
    });

});

router.post('/getplaylists', async (req, res) => {

    const result = await fetch(`https://api.spotify.com/v1/me/playlists`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + req.body.TOKEN }
    });

    const data = await result.json();

    res.json({
        success: true,
        data: data
    });
});



module.exports = router;