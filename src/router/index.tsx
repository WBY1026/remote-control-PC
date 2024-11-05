import MainWindowPage from "@/pages/mianWindowPages/mainWindowPage";
import SettingPage from "@/pages/mianWindowPages/settingPage";

import { createBrowserRouter, createHashRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/main_window',
        element: <MainWindowPage></MainWindowPage>
    },
    {
        path: '/setting',
        element: <SettingPage></SettingPage>
    }
])

export default router