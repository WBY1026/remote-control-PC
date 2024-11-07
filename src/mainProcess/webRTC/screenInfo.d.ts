// 预加载脚本的逻辑方法


declare global {
    interface Window {
        screenInfo: {
            /** 
             * 获取所有屏幕信息
             * 
             */
            getScreenData: () => any;
        };
    }
}

export { };