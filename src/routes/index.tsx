import React from "react";
import { createBrowserRouter } from "react-router-dom";
import LazyLoader from "../services/utils/LazyLoader";
import ClassRoom from "../pages/room/index.tsx";



const LoginPage = React.lazy(() => import("../pages/login/index.tsx"))
const Profile = React.lazy(() => import("../pages/profile/index.tsx"))
const AdminLayout = React.lazy(() => import("../layouts/admin/index.tsx"))
const UserLayout = React.lazy(() => import("../layouts/user/index.tsx"))
const NotFound = React.lazy(() => import("../pages/error/index.tsx"))
const Report = React.lazy(() => import("../pages/report/index.tsx"))


const routers = createBrowserRouter([
    {
        index: true,
        element: <LazyLoader children = {<LoginPage/>} />
    },
    {
        path: "/admin",
        element: <LazyLoader children = {<AdminLayout/>}/>,
        children:[
            {
                index: true,
                element: <LazyLoader children = {<ClassRoom/>} />
            }
        ]
    },
    {
        path: "/user",
        element: <LazyLoader children = {<UserLayout/>} />,
        children: [
            {
                index: true,
                element: <LazyLoader children = {<ClassRoom/>} />
            },
            {
                path: "room",
                element:<LazyLoader children = {<ClassRoom/>} />
            },
            {
                path: "report",
                element:<LazyLoader children = {<Report/>} />
            },
            {
                path: "profile",
                element:<LazyLoader children = {<Profile/>} />
            }  
        ]
    },
    {
        path: "*",
        element: <LazyLoader children = {<NotFound/>} />
    },
])

export default routers;