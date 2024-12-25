// global.d.ts

declare global {
    interface Window {
        windowControl: {
            openRegisterWindow: () => void;
            windowManager: (id: string, action: string) => void;
            /** 
             * 调用windowManager操作当前窗口
             * 传入操作动作
             */
            windowManagerSelf: (action: string) => void;
            /** 
             * 获取当前窗口的id
             * 该值是windowCreater传给preload的
             */
            getSelfWindowId: () => string;
            /** 
             * 获取当前窗口的初始路由
             * 该值是windowCreater传给preload的
             */
            getSelfWindowStartRoute: () => string;
        };
    }
}

export { };