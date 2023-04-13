import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Layout from "../components/Layout/header_footer";
import About from "../components/Aboutus";
import Contact from "../components/Contact";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
