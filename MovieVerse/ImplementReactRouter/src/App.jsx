import React from "react";
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Movie from "./pages/Movie";
import { Boilerplate } from "./layout/Boilerplate";
import { Error } from "./pages/Error";
import "./App.css";
import { getAllMovieApiData } from "./ApiData/getAllMovieApiData";
import { MovieDetail } from "./pages/MovieDetail";
import { getSingleMovieApiData } from "./ApiData/getSingleMovieApiData";
import { contactFormData } from "./ApiData/contactFormData";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Boilerplate/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
           path: "/about",
          element: <About/>,
        },
        {
          path: "/movie",
          element: <Movie/>,
          loader:getAllMovieApiData,
        },
        {
          path:"/movie/:id",
          element:<MovieDetail/>,
          loader:getSingleMovieApiData,
        },
        {
          path: "/contact",
          element: <Contact/>,
          action:contactFormData,
        },
      ]
    },
  ]);
  return <RouterProvider router={router} />;
}
export default App;

