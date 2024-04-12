import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import EstatesDetail from "../Pages/EstatesDetail";
import Gallery from "../Pages/Gallery";
import Blogs from "../Pages/Blogs";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";
// import EditProfile from "../Pages/EditProfile";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          loader: () => fetch('/luxuryEstates.json')
        },
        {
          path: "/luxuryEstates/:id",
          element: <PrivateRoutes><EstatesDetail></EstatesDetail></PrivateRoutes>,
          loader: () => fetch('/luxuryEstates.json')
        },
        {
          path: "/gallery",
          element: <PrivateRoutes><Gallery></Gallery></PrivateRoutes>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/registration",
          element: <Registration></Registration>
        },
        // {
        //   path: "/editProfile",
        //   element: <PrivateRoutes><EditProfile></EditProfile></PrivateRoutes>
        // }
      ],
    },
  ]);

export default Router;