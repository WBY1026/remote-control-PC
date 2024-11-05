import ReactDOM from "react-dom/client";

import store from "@/store"
import { Provider } from "react-redux";

// 导入页面
import MainWindowPage from "@/pages/mianWindowPages/mainWindowPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <MainWindowPage />
    </Provider>
)