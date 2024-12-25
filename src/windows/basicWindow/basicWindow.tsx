import ReactDOM from "react-dom/client";
// store
import store from "@/store"
import { Provider } from "react-redux";

// 路由
import router from "@/router";
import { RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
    </Provider>
)