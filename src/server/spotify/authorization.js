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
    
    const profileData = await FetchData.callApi(`https://api.spotify.com/v1/me`, 'GET', {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : 'Bearer ' + data.access_token
        }, 
        null
    );
    
    /* Se ritorna STATUS CODE 200, allora ha funzionato
     * https://developer.spotify.com/documentation/web-api/
     * per sapere gli altri status codes
     */
    
    // console.log(profileData);

    res.json({
        success: true,
        data: {
            access_token: data.access_token,
            refresh_token: data.refresh_token,
            profile: profileData
        }
    });

});

router.post('/istokenvalid', async (req, res) => {

    // console.log(req.body.refreshToken);

    const body = `grant_type=refresh_token
                            &refresh_token=${req.body.refreshToken}
                            &client_id=${clientId}`;

    const data = await FetchData.callApi(`https://accounts.spotify.com/api/token`, 'POST', {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        }, 
        body.replace(/(\r\n|\n|\r)/gm, "").split(' ').join('')
    );

    // console.log("Is token valid?");
    // console.log(data);

    res.json({
        success: true,
        data: data.access_token
    });

});

module.exports = router;