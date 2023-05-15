import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Main.jsx/Main";
import Home from "../Pages/Home";
import RegisterAsAVulonter from "../Pages/RegisterAsAVulonter";
import Blog from "../Pages/Blog";
import Login from "../Login/Login";
import Events from "../Pages/Events";

let router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },

                {
                    path: "worker",
                    element: <RegisterAsAVulonter></RegisterAsAVulonter>
                },
                {
                    path: "Blog",
                    element: <Blog></Blog>
                },
                {
                    path: "/",
                    element: <></>
                },
                {
                    path: "Login",
                    element: <Login></Login>
                },
                {
                    path: "Event",
                    element: <Events></Events>
                },

            ]
        }
    ]
)


export default router
