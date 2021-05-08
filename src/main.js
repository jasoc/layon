const { app, BrowserWindow } = require('electron')
const url = require("url");
const path = require("path");

require('dotenv').config();
require('./server/index');

const development = process.env.IS_DEV === 'true';

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.maximize();
    
    if (development) {
        mainWindow.loadURL('http://localhost:4200');
        //mainWindow.webContents.openDevTools();
        
    } else {
        mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, 'client/dist/layon/index.html'),
            protocol: "file:",
            slashes: true
        }));
    }

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});