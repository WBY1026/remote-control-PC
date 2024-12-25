import { BrowserWindow, ipcMain } from 'electron';

import Window_Manager from '@/mainProcess/windowManager/window_manager';

declare const BASIC_WINDOW_WEBPACK_ENTRY: string;
declare const BASIC_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

const createBasicWindow = (route: string): void => {

  // Create the browser window.
  const basicWindow = new BrowserWindow({
    frame: false,
    height: 600,
    width: 800,
    webPreferences: {
      preload: BASIC_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  basicWindow.webContents.on('did-finish-load',()=>{
    // 传递当前窗口的id
    basicWindow.webContents.send('window-id', basicWindow.id);
    // 传递给页面当前窗口所需展示的路由信息
    basicWindow.webContents.send('window-start-route', route);
  })

  // 窗口好后将窗口登记到Window_Manager上
  basicWindow.on('ready-to-show', () => {
    Window_Manager.setWindowById(basicWindow)
  })

  basicWindow.loadURL(BASIC_WINDOW_WEBPACK_ENTRY);

  basicWindow.webContents.openDevTools();

};

export default createBasicWindow