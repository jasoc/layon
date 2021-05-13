const Express = require('express');
let router = Express.Router();


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

router.post('/fetchtoken', (req, res) => {

    const token = `https://accounts.spotify.com/api/token
                            &code=${req.body.code}
                            &redirect_uri=${encodeURI("http://localhost:4200/spotify")}
                            &client_id=${clientId}
                            &client_secret=${clientSecret}`;

    console.log(token.split(' ').join(''));

    res.json({
        success: true,
        data: token.split(' ').join('')
    });
});


module.exports = router;