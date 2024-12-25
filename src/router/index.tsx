import MainWindowPage from "@/pages/mianWindowPages/mainWindowPage";
import SettingPage from "@/pages/mianWindowPages/settingPage";
import RoutePage from "@/pages/routePage/routePage";

import { createBrowserRouter, createHashRouter } from "react-router-dom";

const router = createHashRouter([
    {
        path: '/',
        element: <RoutePage></RoutePage>
    },
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