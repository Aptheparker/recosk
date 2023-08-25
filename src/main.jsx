import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import RootLayout from "./pages/RootLayout.jsx";
import StartPage from "./pages/StartPage.jsx";
import ChoosePage from "./pages/ChoosePage.jsx";
import Normal from './pages/NormalPage.jsx';
import RecommendPage from './pages/RecommendPage.jsx';

// styles
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
      {
        path: "/normal",
        element: <Normal />,
      },
      {
        path: "/recommend",
        element: <RecommendPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
