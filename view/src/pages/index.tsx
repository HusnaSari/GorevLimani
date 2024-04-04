import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Authentication from "./Authentication";
import _404 from "./_404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Authentication />,
  },
  {
    path: "/*",
    element: <_404 />,
  },
]);
