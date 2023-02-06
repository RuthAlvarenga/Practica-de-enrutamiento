import React from "react";
import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Pagina2 from "../pages/Pagina2";
import Pagina from "../pages/Pagina";
import Pagina3 from "../pages/Pagina3";
import App from '../App';

export const router = createBrowserRouter([
    {
        path:"/home",
        element:<Home/>
    },
    {
        path:`/Pagina/:palabra`,
        element:<Pagina/>
    },
    {
        path:`/Pagina2/:number`,
        element:<Pagina2/>
    },
    {
        path:`/Pagina3/:palabra/:color2/:color1`,
        element:<Pagina3/>
    }
])