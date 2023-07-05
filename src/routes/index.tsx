import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/notFound/NotFound";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";

const routes = createBrowserRouter([
    
    {
        path:'/',
        element:<App/>
    },
    {
        path:'/home',
        element:<Home/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'*',
        element:<NotFound/>
    }
]);

export default routes;
