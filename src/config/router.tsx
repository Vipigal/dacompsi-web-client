import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/Home.tsx";
import Login from "../pages/Login.tsx";
import Cadastro from "../pages/Cadastro.tsx";
import Help from "../pages/Help.tsx";
import Tickets from "../pages/Tickets.tsx";
import Produto from "../pages/Produto.tsx";
import Meusprodutos from "../pages/Meusprodutos.tsx";


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
      {
        path: "/produto",
        element: <Produto />
      },
      {
        path: "/meusprodutos",
        element: <Meusprodutos />
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
