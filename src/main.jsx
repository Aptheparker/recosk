import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages
import StartPage from "./pages/StartPage.jsx";
import ChoosePage from "./pages/ChoosePage.jsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage />,
    children: [
      {
        path: "/choose",
        element: <ChoosePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
