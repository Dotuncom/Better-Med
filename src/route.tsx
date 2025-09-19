import { createBrowserRouter, type RouteObject } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import RootLayout from "./layout/RootLayout";
import DynamicLayout from "./layout/DynamicLayout";
import Service from "./pages/Service";


const routes:RouteObject[] = [
  {
    path: "/",
    errorElement: <NotFound />,
    element: <RootLayout />,
    children: [
      { index: true, 
        element: <Home /> },
        
      
      {
        element:<DynamicLayout/>,
        children:[
          {path:'/about',
            element:<About/>
          },
          {path:'/services',
           element:<Service/>
          }

        ]
      },
    ],
  },
];
export const router = createBrowserRouter(routes);

