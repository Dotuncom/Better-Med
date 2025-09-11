import type { JSX } from "react";
import { createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

type AppRoute ={
    path:string,
    errorElement: JSX.Element
    element:JSX.Element,
}
export const router = createBrowserRouter([
    {
        path:'/',
        errorElement:<NotFound/>,
        element:<Home/>
    },
     {
        path:'/about',
        element:<About/>
    }
])