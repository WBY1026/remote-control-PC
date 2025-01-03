import { app, BrowserWindow } from 'electron';

// 创建主窗口方法
import createBasicWindow from '@/mainProcess/windowCreater/basicWindow';
// 窗口管理器监听
import { setUpWindowManagerHandlers } from '@/mainProcess/windowManager'
// webRTC监听
import { setUpWebRTCHandlers } from '@/mainProcess/webRTC';

if (require('electron-squirrel-startup')) {
  app.quit();
}

app.on('ready', ()=>{
  setUpWindowManagerHandlers()
  setUpWebRTCHandlers()
  createBasicWindow('/main_window')
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createBasicWindow('/main_window');
  }
});

