import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";

const router = createBrowserRouter([{ path: "/home", element: <Home /> }]);

export default router;
