import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import EstatesDetail from "../Pages/EstatesDetail";
import Gallery from "../Pages/Gallery";

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
          element: <EstatesDetail></EstatesDetail>,
          loader: () => fetch('/luxuryEstates.json')
        },
        {
          path: "/gallery",
          element: <Gallery></Gallery>
        }
      ],
    },
  ]);

export default Router;