const Express = require('express');
let router = Express.Router();
const fetch = require('node-fetch');

router.get('/getgenres', async (req, res) => {

    const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
        method: 'GET',
        headers: { 'Authorization' : 'Bearer ' + TOKEN }
    })

    const data = await result.json();

    console.log("---------->", data);
    
    res.json({
        success: true,
        data: data
    });

});

module.exports = router;