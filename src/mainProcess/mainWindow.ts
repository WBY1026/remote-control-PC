import { BrowserWindow, ipcMain } from 'electron';

import Window_Manager from '@/mainProcess/windowManager/window_manager';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const createMainWindow = (): void => {

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    frame: false,
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.webContents.on('did-finish-load',()=>{
    mainWindow.webContents.send('window-id', mainWindow.id);
  })

  // 窗口好后将窗口登记到Window_Manager上
  mainWindow.on('ready-to-show', () => {
    Window_Manager.setWindowById(mainWindow)
  })

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();

};

export default createMainWindow