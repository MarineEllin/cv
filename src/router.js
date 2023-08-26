import App from "App";
import Blog from "Pages/Blog/Blog";
import Contact from "Pages/Contact/Contact";
import Homepage from "Pages/Homepage/Homepage";
import Portfolio from "Pages/Portfolio/Portfolio";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
