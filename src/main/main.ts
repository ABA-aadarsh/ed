import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    fullscreenable: true,
    roundedCorners: false,
    frame: false,
    maximizable: true,
    icon: path.join(__dirname, "assets","icon.ico"),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      spellcheck: false
    },
    autoHideMenuBar: true,
  });
  const args = process.argv
  console.log(args)
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`));
  }

  ipcMain.on("closeWindow", ()=>{
    mainWindow.close()
  })
  ipcMain.on("minimizeWindow", ()=>{
    mainWindow.minimize()
  })
  ipcMain.on("toggleMaximizeWindow",()=>{
    console.log("Toggle event handled")
    if(mainWindow.isMaximized()) mainWindow.unmaximize();
    else mainWindow.maximize()
  })
};
app.on('ready', createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
