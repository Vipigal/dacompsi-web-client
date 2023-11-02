import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import Cadastro from "../pages/Cadastro.tsx";
import Help from "../pages/Help.tsx";
import Tickets from "../pages/Tickets.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/tickets",
        element: <Tickets />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);

export default router;
