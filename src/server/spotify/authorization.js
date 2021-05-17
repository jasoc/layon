const Express = require('express');
let router = Express.Router();
const fetch = require('node-fetch');
const btoa = require('btoa');


const clientId = '586cac5e206c44f89b11d31bde479f46';
const clientSecret = 'e6a1daa9a3fa4b849676c116c3b9aaf2';


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

router.post('/fetchtoken', async (req, res) => {

    const body = `grant_type=authorization_code
                            &code=${req.body.code}
                            &redirect_uri=${encodeURI("http://localhost:4200/spotify")}
                            &client_id=${clientId}
                            &client_secret=${clientSecret}`;


    const result = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: body.replace(/(\r\n|\n|\r)/gm, "").split(' ').join('')
        
    });

    /* Se ritorna STATUS CODE 200, allora ha funzionato
     * https://developer.spotify.com/documentation/web-api/
     * per sapere gli altri status codes
     */
    
    const data = await result.json();

    console.log(data);

    res.json({
        success: true,
        data: data.access_token
    });

});

module.exports = router;