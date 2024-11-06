console.log('主窗口预加载脚本');

import { contextBridge, ipcRenderer } from "electron/renderer";

contextBridge.exposeInMainWorld('windowControl', {
    windowManagerSelf: (action: string) => ipcRenderer.send('ipc-window-manager-by-id', window_id, action),
    getSelfWindowId: () => window_id
})

let window_id: string
ipcRenderer.on('window-id', (event, windowId) => {
    window_id = windowId
})