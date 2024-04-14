import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Events from "../pages/Events/events.jsx";
import Test from "../pages/test.jsx";
import About from "../pages/about.jsx";
import Navbar from "../components/navbar.jsx";
import Footer from "../components/footer.jsx";
import Home from "../pages/Home/home.jsx";

const router = createBrowserRouter([
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/about",
    element: <About />,
  },
  // TODO : remove after test
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/test",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
