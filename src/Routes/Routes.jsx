// import { createBrowserRouter } from "react-router-dom";
// import MainLayout from "../Layout.jsx/MainLayout";
// import Home from "../Pages/Home";
// import Register from "../Pages/Register";
// import Login from "../Pages/Login";
// import AddSpot from "../Pages/AddSpot";
// import SpotDetails from "../Pages/SpotDetails";
// import CountryList from "../Pages/CountryList";
// import MyList from "../Pages/MyList";
// import AllSpot from "../Pages/AllSpot";
// import PrivateRoute from "./PrivateRoutes";
// import UpdateSpot from "../Pages/UpdateSpot";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout></MainLayout>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//         loader: () => fetch("https://tr-tourism.vercel.app/spot"),
//       },
//       {
//         path: "/allspot",
//         element: <AllSpot></AllSpot>,
//         loader: () => fetch("https://tr-tourism.vercel.app/spot"),
//       },
//       {
//         path: "/register",
//         element: <Register></Register>,
//       },
//       {
//         path: "/login",
//         element: <Login></Login>,
//       },
//       {
//         path: "/addspot",
//         element: (
//           <PrivateRoute>
//             <AddSpot></AddSpot>
//           </PrivateRoute>
//         ),
//       },
//       {
//         path: "/spotdetails/:id",
//         element: (
//           <PrivateRoute>
//             <SpotDetails></SpotDetails>
//           </PrivateRoute>
//         ),
//         loader: ({ params }) => fetch(`https://tr-tourism.vercel.app/${params.id}`),
//       },
//       {
//         path: "/country/:country_name",
//         element: <CountryList></CountryList>,
//         loader: async ({ params }) =>
//           await fetch(`https://tr-tourism.vercel.app/country/${params.country_name}`),
//       },
//       {
//         path: "/country/:country_name/spotdetails/:id",
//         element: (
//           <PrivateRoute>
//             <SpotDetails></SpotDetails>
//           </PrivateRoute>
//         ),
//         loader: async ({ params }) => {
//           await fetch(`https://tr-tourism.vercel.app/spot/${params.id}`, {
//             mode: "no-cors",
//           });
//         },
//       },
//       {
//         path: "/mylist/:userId",
//         element: (
//           <PrivateRoute>
//             <MyList></MyList>
//           </PrivateRoute>
//         ),
//         loader: ({ params }) =>
//           fetch(`https://tr-tourism.vercel.app/mylist/${params.userId}`),
//       },
//       {
//         path: "/mylist/:userId/spotdetails/:id",
//         element: (
//           <PrivateRoute>
//             <SpotDetails></SpotDetails>
//           </PrivateRoute>
//         ),
//         loader: ({ params }) => fetch(`https://tr-tourism.vercel.app/${params.id}`),
//       },
//       {
//         path: "/mylist/:userId/updatespot/:id",
//         element: (
//           <PrivateRoute>
//             <UpdateSpot></UpdateSpot>
//           </PrivateRoute>
//         ),
//         loader: ({ params }) => fetch(`https://tr-tourism.vercel.app/${params.id}`),
//       },
//     ],
//   },
// ]);
// export default router;
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
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const response = await fetch("https://tr-tourism.vercel.app/spot");
          return response.json(); // Ensure the fetched data is returned
        },
      },
      {
        path: "/allspot",
        element: <AllSpot />,
        loader: async () => {
          const response = await fetch("https://tr-tourism.vercel.app/spot");
          return response.json(); // Ensure the fetched data is returned
          // https://tr-tourism.vercel.app/
        },
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/addspot",
        element: (
          <PrivateRoute>
            <AddSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/spotdetails/:id",
        element: (
          <PrivateRoute>
            <SpotDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `https://tr-tourism.vercel.app/spot/${params.id}`
          );
          return response.json(); // Ensure the fetched data is returned
        },
      },
      {
        path: "/country/:country_name",
        element: <CountryList />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://tr-tourism.vercel.app/country/${params.country_name}`
          );
          return response.json(); // Ensure the fetched data is returned
        },
      },
      {
        path: "/season/:name",
        element: <CountryList />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://tr-tourism.vercel.app/season/${params.name}`
          );
          return response.json(); // Ensure the fetched data is returned
        },
      },
      {
        path: "/country/:country_name/spotdetails/:id",
        element: (
          <PrivateRoute>
            <SpotDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `https://tr-tourism.vercel.app/spot/${params.id}`
          );
          return response.json(); // Ensure the fetched data is returned
        },
      },
      {
        path: "/mylist/:userId",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `https://tr-tourism.vercel.app/mylist/${params.userId}`
          );
          return response.json(); // Ensure the fetched data is returned
        },
      },
      {
        path: "/mylist/:userId/spotdetails/:id",
        element: (
          <PrivateRoute>
            <SpotDetails />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `https://tr-tourism.vercel.app/spot/${params.id}`
          );
          return response.json(); // Ensure the fetched data is returned
        },
      },
      {
        path: "/mylist/:userId/updatespot/:id",
        element: (
          <PrivateRoute>
            <UpdateSpot />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const response = await fetch(
            `https://tr-tourism.vercel.app/spot/${params.id}`
          );
          return response.json(); // Ensure the fetched data is returned
        },
      },
    ],
  },
]);

export default router;
