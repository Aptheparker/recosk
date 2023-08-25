import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import pages
import RootLayout from "./RootLayout.jsx";
import StartPage from "./pages/StartPage.jsx";
import ChoosePage from "./pages/ChoosePage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <StartPage />,
      },
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
