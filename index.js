const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

function createWindow () {
  // Create the browser window.
    mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/icon.ico',
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

const isMac = process.platform === 'darwin'

const template = [

  {
    label:"Menu",
    submenu:[
       {
         label:"Nouvelle fenêtre",
         click: () => {
             let nouvfenetre = new BrowserWindow({
               width: 800,
               height: 600,
             });
             nouvfenetre.loadFile(path.join(__dirname, "index.html"));
         }
       },
       
       {
         label:"Rafraîchir",
         click: () => {
         mainWindow.loadFile(path.join(__dirname, 'index.html'));
         } 
       },

       {
         label:"Aide",
         click: () => {
           let aide = new BrowserWindow({
             width: 905,
             height: 600,
           });
           aide.loadFile(path.join(__dirname, "aide.html"));
         }
     },
     {
       label:"A propos",
       click: () => {
         let apropos = new BrowserWindow({
           width: 600,
           height: 300,
         });
         apropos.loadFile(path.join(__dirname, 'apropos.html'));
       }
     },
     {
       label:"Quitter",
       click: () => {
         app.quit()
       }
     }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)