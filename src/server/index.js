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

appl.listen(PORT, () => {
    console.log("onesto");
});