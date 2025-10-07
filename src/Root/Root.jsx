import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "apps",
                Component: Apps
            },
            {
                path: "installation",
                Component: Installation
            }
        ]
    }
])