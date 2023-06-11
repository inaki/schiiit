const { app, BrowserWindow, screen } = require("electron");

const path = require("path");

const createWindow = () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;
    const windowWidth = Math.round(width * 0.8);
    const windowHeight = Math.round(height * 0.8);

    const win = new BrowserWindow({
        width: windowWidth,
        height: windowHeight,
        transparent: true, // Set the window to be transparent
        frame: true, // Remove the window frame
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    win.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
