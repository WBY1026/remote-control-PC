import { ipcMain } from "electron";
// 窗口管理实例
import Window_Manager from '@/mainProcess/windowManager/window_manager';

function setUpWindowManagerHandlers() {
    // 窗口管理监听
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
}

export { setUpWindowManagerHandlers }