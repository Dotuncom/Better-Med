import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";

// type AppRoute ={
//     path:string,
//     errorElement?: JSX.Element
//     element:JSX.Element,
//     children?:AppRoute[]
// }
const routes: RouteObject[] = [
  {
    path: "/",
    errorElement: <NotFound />,
    element: <RootLayout />,
    children: [
      { index: true, 
        element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
];
export const router = createBrowserRouter(routes);
