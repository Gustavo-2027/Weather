import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import WeatherProvider from "./context/WeatherContext.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>, // obs: criar pag erro
    children: [
      {
        path: "",
        element: <Home/>
      }
    ]

  }
]) 

createRoot(document.getElementById("root")).render(
  <WeatherProvider>
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>
  </WeatherProvider>
);
