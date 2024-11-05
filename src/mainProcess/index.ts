import { app, BrowserWindow, ipcMain } from 'electron';

import Window_Manager from '@/mainProcess/window_manager';
import createMainWindow from '@/mainProcess/mainWindow';

if (require('electron-squirrel-startup')) {
  app.quit();
}

app.on('ready', createMainWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

ipcMain.on("ipc-window-manager-by-id", (event, id, action) => {
  switch (action) {
    case "hide":
      Window_Manager.hideWindowById(id);
      break;
    case "show":
      Window_Manager.showWindowById(id);
      break;
    case "maximize":
      Window_Manager.maximizeWindowById(id);
      break;
    case "minimize":
      Window_Manager.minimizeWindowById(id);
      break;
    case "restore":
      Window_Manager.restoreWindowById(id);
      break;
     // 从渲染进程关闭最终在主进程实现关闭
    case "close":     
      // 调用该方法，能够删除进程池中的记录
      Window_Manager.closeWindowById(id);
      break;
  }
});
