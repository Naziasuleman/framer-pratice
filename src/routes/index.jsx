import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Landingpages } from "../pages/Landingpages";

function Routers() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landingpages />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routers;
