const Express = require('express');
let router = Express.Router();
const fetch = require('node-fetch');
const btoa = require('btoa');


const clientId = '3dd07fa581fb42c09cda795fb0fd2af6';
const clientSecret = '7c5f6f524a684787bc7e6cda44aebf08';


router.get('/authorize', (req, res) => {

    const authorization = `https://accounts.spotify.com/authorize
                            ?client_id=${clientId}
                            &response_type=code
                            &redirect_uri=${encodeURI("http://localhost:4200/spotify")}
                            &show_dialog=true`;

    res.json({
        success: true,
        data: authorization.split(' ').join('')
    });

});

router.get('/fetchtoken', async (req, res) => {

    // const token = `https://accounts.spotify.com/api/token
    //                         &code=${req.body.code}
    //                         &redirect_uri=${encodeURI("http://localhost:4200/spotify")}
    //                         &client_id=${clientId}
    //                         &client_secret=${clientSecret}`;

    // console.log(token.split(' ').join(''));

    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    /* Se ritorna STATUS CODE 200, allora ha funzionato
     * https://developer.spotify.com/documentation/web-api/
     * per sapere gli altri status codes
     */
    
    const data = await result.json();

    res.json({
        success: true,
        data: data.access_token
    });

});

module.exports = router;