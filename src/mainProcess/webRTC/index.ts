
import { ipcMain } from "electron";
import { getScreenData } from "./getScreenData";

function setUpWebRTCHandlers() {
    ipcMain.handle('get-screen-data', async () => {
        try {
            const screenData = await getScreenData();
            return screenData;
        } catch (error) {
            console.error('Error getting screen data:', error);
            throw new Error('Failed to get screen data');
        }
    });
}

export { setUpWebRTCHandlers }