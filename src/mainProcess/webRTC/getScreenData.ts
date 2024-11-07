import { desktopCapturer } from "electron";

async function getScreenData() {
    const sources = await desktopCapturer.getSources({ types: ['screen'] });
    return sources;  // 返回获取到的屏幕源数据(数组)
}

export { getScreenData }

