import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LazyLoader from "../utils/LazyLoader";




const AdminLayout = React.lazy(() => import("../layouts/Admin"))
const UserLayout = React.lazy(() => import("../layouts/User"))
const Home = React.lazy(() => import("../pages/Home"))
const NotFound = React.lazy(() => import("../pages/NotFound"))
const Report = React.lazy(() => import("../pages/Report"))
const DashBoard = React.lazy(() => import("../pages/DashBoard"))


const routers = createBrowserRouter([
    {
        index: true,
        element: <Home/>
    },
    {
        path: "/admin",
        element: <LazyLoader children = {<AdminLayout/>}/>,
        children:[
            {
                index: true,
                element: <DashBoard/>
            },
            {
                path: "reports",
                element: <Report/>
            }
        ]
    },
    {
        path: "/auth",
        children: [
            {
                path: "login",
                element: <Home/>
            },
            {
                path: "logout",
                element: <Home/>
            }
        ]
    },
    {
        path: "/user",
        element: <UserLayout/>,
        children: [

        ]
    },
    {
        path: "*",
        element: <NotFound/>
    },
])

export default routers;