import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout.jsx/MainLayout";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddSpot from "../Pages/AddSpot";
import SpotDetails from "../Pages/SpotDetails";
import CountryList from "../Pages/CountryList";
import MyList from "../Pages/MyList";
import AllSpot from "../Pages/AllSpot";
import PrivateRoute from "./PrivateRoutes";
import UpdateSpot from "../Pages/UpdateSpot";

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
        path: "/allspot",
        element: <AllSpot></AllSpot>,
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
        element: (
          <PrivateRoute>
            <AddSpot></AddSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/spotdetails/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5300/spot/${params.id}`),
      },
      {
        path: "/country/:country_name",
        element: <CountryList></CountryList>,
        loader: ({ params }) =>
          fetch(`http://localhost:5300/country/${params.country_name}`),
      },
      {
        path: "/mylist/:userId",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5300/mylist/${params.userId}`),
      },
      {
        path: "/mylist/:userId/spotdetails/:id",
        element: (
          <PrivateRoute>
            <SpotDetails></SpotDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5300/spot/${params.id}`),
      },
      {
        path: "/mylist/:userId/updatespot/:id",
        element: (
          <PrivateRoute>
            <UpdateSpot></UpdateSpot>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5300/spot/${params.id}`),
      },
    ],
  },
]);
export default router;
