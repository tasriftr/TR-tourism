import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout.jsx/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddSpot from "../Pages/AddSpot";
import SpotDetails from "../Pages/SpotDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5300/spot"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/addspot",
        element: <AddSpot></AddSpot>,
      },
      {
        path: "/spotdetails/:id",
        element: <SpotDetails></SpotDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5300/spot/${params.id}`),
      },
    ],
  },
]);
export default router;
