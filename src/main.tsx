import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "nouislider/distribute/nouislider.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CheckOut, Home, Product, Store } from "./views";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "checkout",
          element: <CheckOut />,
        },
        {
          path: "product",
          element: <Product />,
        },
        {
          path: "store",
          element: <Store />,
        },
      ],
    },
  ],
  { basename: "/web" }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
