// global.d.ts

declare global {
    interface Window {
      windowControl: {
        openRegisterWindow: () => void;
        windowManager: (id:string, action:string) => void;
        /** 
         * 调用windowManager操作当前窗口
         * 传入操作动作
         */
        windowManagerSelf: (action:string) => void;
        getSelfWindowId: () => string;
      };
    }
  }
  
  export {};