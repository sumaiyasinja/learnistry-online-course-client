import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import App from "./../App";
import Home from "./../pages/Home/Home";
import ErrorPage from "./../pages/ErrorPage/ErrorPage";
import AddTutorial from "../pages/AddTutorial/AddTutorial";
import UpdateTutorial from "../pages/UpdateTutorial/UpdateTutorial";
import FindTutor from "../pages/FindTutor/FindTutor";
import PrivateRoutes from './PrivateRoutes';
import TuitorDetails from "../pages/TuitorDetails/TuitorDetails";

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
        element: <FindTutor />,
        loader: () => fetch("http://localhost:5000/tutorials"),
      },
      {
        path: "/add-tutorials",
        element: <PrivateRoutes><AddTutorial /></PrivateRoutes>, 
      },
      {
        path: `/update-tutorials/:id`,
        element: <UpdateTutorial />,
        loader: ({ params }) => fetch(`http://localhost:5000/tutorials/${params.id}`),
      },
      {
        path: `/tutor-details/:id`,
        element: <TuitorDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/tutorials/${params.id}`),
      },
      {
        path: "/my-tutorials",
        element: <Register />,
      },
    ],
  },
]);

export default router;
