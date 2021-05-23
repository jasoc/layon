const Express = require('express');
let router = Express.Router();
const FetchData = require('./fetchdata');
const btoa = require('btoa');


const clientId = '586cac5e206c44f89b11d31bde479f46';
const clientSecret = 'e6a1daa9a3fa4b849676c116c3b9aaf2';
const redirectUri = 'http://localhost:4200/spotify';


router.get('/authorize', (req, res) => {

    let scope = '';
    scope += 'playlist-read-private ';
    scope += 'user-read-private ';
    scope += 'user-read-private ';
    scope += 'user-read-email ';
    scope += 'user-read-currently-playing ';
    scope += 'user-read-playback-state ';
    scope += 'user-modify-playback-state ';
    scope += 'streaming ';


    const authorization = `https://accounts.spotify.com/authorize
                            ?client_id=${clientId}
                            &scope=${encodeURI(scope)}
                            &response_type=code
                            &redirect_uri=${encodeURI(redirectUri)}
                            &show_dialog=true`;

    res.json({
        success: true,
        data: authorization.split(' ').join('')
    });

});

router.post('/fetchtoken', async (req, res) => {

    const body = `grant_type=authorization_code
                            &code=${req.body.code}
                            &redirect_uri=${encodeURI(redirectUri)}
                            &client_id=${clientId}
                            &client_secret=${clientSecret}`;

    const data = await FetchData.callApi(`https://accounts.spotify.com/api/token`, 'POST', {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        }, 
        body.replace(/(\r\n|\n|\r)/gm, "").split(' ').join('')
    );
    
    /* Se ritorna STATUS CODE 200, allora ha funzionato
     * https://developer.spotify.com/documentation/web-api/
     * per sapere gli altri status codes
     */

    res.json({
        success: true,
        data: {
            access_token: data.access_token,
            refresh_token: data.refresh_token
        }
    });

});

router.post('/userprofile', async (req, res) => {


    const profileData = await FetchData.callApi(`https://api.spotify.com/v1/me`, 'GET', {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer ' + req.body.TOKEN
    }, 
    null);
    

    res.json({
        success: true,
        data: profileData
    });
});

router.post('/istokenvalid', async (req, res) => {


    const body = `grant_type=refresh_token
                            &refresh_token=${req.body.refresh_token}
                            &client_id=${clientId}`;

    const data = await FetchData.callApi(`https://accounts.spotify.com/api/token`, 'POST', {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        }, 
        body.replace(/(\r\n|\n|\r)/gm, "").split(' ').join('')
    );

    res.json({
        success: true,
        data: data.access_token
    });

});

module.exports = router;