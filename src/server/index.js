// import Express from "express";
const cors = require('cors');
const Express = require('express');

const appl = Express();
const PORT = 3000;

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
}

appl.use(Express.json());

appl.use('/tests', cors(corsOptions), require('./test'));
appl.use('/exec', cors(corsOptions), require('./exec'));
appl.use('/exe', cors(corsOptions), require('./exe'));
appl.use('/getinfo', cors(corsOptions), require('./getinfo'));
appl.use('/games', cors(corsOptions), require('./games'));

// Spotify section
appl.use('/spotify', cors(corsOptions), require('./spotify/authorization'));
appl.use('/spotify', cors(corsOptions), require('./spotify/music'));
appl.use('/spotify', cors(corsOptions), require('./spotify/player'));

appl.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});