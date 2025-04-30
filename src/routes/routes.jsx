import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import App from './../App';
import Home from './../pages/Home/Home';
import ErrorPage from './../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/find-tutors",
        element: <Home />,
      },
      {
        path: "/add-tutorials",
        element: <Register />,
      },
      {
        path: "/my-tutorials",
        element: <Register />,
      },

      
    ],
  },
]);

export default router;