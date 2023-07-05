import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import App from "../App";

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
    }
]);

export default routes;
