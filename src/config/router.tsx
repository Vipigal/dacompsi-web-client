import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
