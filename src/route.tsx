import { createBrowserRouter, type RouteObject} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

// type AppRoute ={
//     path:string,
//     errorElement?: JSX.Element
//     element:JSX.Element,
//     children?:AppRoute[]
// }
 const routes:RouteObject[] = [
    {
        path:'/',
        errorElement:<NotFound/>,
        element:<Home/>
    },
     {
        path:'/about',
        element:<About/>
    }
]
export const router = createBrowserRouter(routes)