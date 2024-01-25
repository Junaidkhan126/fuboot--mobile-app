import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aboutext from "./components/Aboutext.jsx";
import Features from "./components/Features.jsx";

import Faq from "./components/Faq.jsx";
import DownloadSection from "./components/DownloadSection.jsx";
import CardSection from "./components/CardSection.jsx";
import NavBar from "./components/NavBar.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {
        path: "",
        element: <App />,
      },
      {
        path: "about",
        element: <Aboutext />,
      },
      {
        path: "features",
        element: <Features />,
      },
      {
        path: "video",
        element: <CardSection />,
      },
      {
        path: "faqs",
        element: <Faq />,
      },
      {
        path: "learn",
        element: <DownloadSection />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
