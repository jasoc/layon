const Express = require('express');
let router = Express.Router();
const FetchData = require('./fetchdata');
const btoa = require('btoa');


const clientId = '586cac5e206c44f89b11d31bde479f46';
const clientSecret = 'e6a1daa9a3fa4b849676c116c3b9aaf2';
const redirectUri = 'http://localhost:4200/spotify';


router.get('/authorize', (req, res) => {

    const scope = 'playlist-read-private user-read-private user-read-email user-read-private user-read-email user-read-currently-playing user-read-playback-state';

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
        data: data.access_token
    });

});

module.exports = router;