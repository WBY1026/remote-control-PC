
/** 
 * 窗口类型
 */
export declare type EWindow = Electron.CrossProcessExports.BrowserWindow;

// 定义 WindowDict 类型
/** 
 * WindowDict类型
 * 键是窗口id，值是窗口对象
 */
export declare type WindowDict = {
  [key: string]: EWindow;
};