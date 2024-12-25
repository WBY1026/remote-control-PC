console.log('基本窗口预加载脚本');

import { contextBridge, ipcRenderer } from "electron/renderer";

contextBridge.exposeInMainWorld('windowControl', {
    windowManagerSelf: (action: string) => ipcRenderer.send('ipc-window-manager-by-id', window_id, action),
    getSelfWindowId: () => window_id,
    getSelfWindowStartRoute: () =>  window_start_route
})

contextBridge.exposeInMainWorld('screenInfo', {
    getScreenData: () => ipcRenderer.invoke('get-screen-data')
})

// 接收当前窗口id信息,保证不串窗口)
let window_id: string
ipcRenderer.on('window-id', (event, windowId) => {
    window_id = windowId
})

// 接收当前窗口路由信息
let window_start_route: string
ipcRenderer.on('window-start-route', (event, windowStartRoute) => {
    window_start_route = windowStartRoute
})