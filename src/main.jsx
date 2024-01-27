import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error404 from "./pages/Error404/Error404";
import Ekit from './pages/Ekit/Ekit'
import OurProducts from "./pages/Products/OurProducts";
import OurContact from "./pages/Contact/OurContact";
import Solutions from "./pages/Solutions/Solutions";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <OurContact />,
  },
  {
    path: "/solutions",
    element: <Solutions />,
  },
  {
    path: "/products",
    element: <OurProducts />,
  },
  {
    path: "/huwaei-ekit",
    element: <Ekit />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
