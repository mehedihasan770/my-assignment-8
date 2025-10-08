import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import Installation from "../Pages/Installation/Installation";
import AppsDetails from "../Pages/AppsDetails/AppsDetails";
import AppsNotFound from "../Pages/Apps/AppsNotFound/AppsNotFound";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Loading from "../Components/Loading/Loading";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        hydrateFallbackElement: <Loading/>,
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
            },
            {
                path: 'appsdetails/:ids',
                Component: AppsDetails,
                children: [
                    {
                        path: '*',
                        Component: AppsNotFound
                    }
                ]
            },
            {
                path: '*',
                Component: PageNotFound
            }
        ],
    }
])