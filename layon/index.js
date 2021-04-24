const { app, BrowserWindow } = require('electron');
const url = require("url");
const path = require("path");
// const { electron } = require('node:process');
require('electron-reload')(__dirname);

let win;


let mainWindow = () => {

    win = new BrowserWindow({
        width: 1920,
        height: 1080,
        webPreferences: {
            nodeIntegration: true
        }
    });


    // win.loadURL(
    //     url.format({
    //         pathname: path.join(__dirname, `/dist/index.html`),
    //         protocol: "file:",
    //         slashes: true
    //     })
    // );

    win.loadURL('http://localhost:4200');

    // DevTools
    // win.webContents.openDevTools()

    win.on('closed', () => {
        win = null;
    });
}

// Create window on electron initialization
app.on('ready', mainWindow)

// Quit when all windows are closed
app.on('window-all-closed', () => {

    if(process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {

    if(win === null) {
        mainWindow();
    }
});

// electron_reload()