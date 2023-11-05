import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import { MantineProvider} from "@mantine/core";
import {Notifications} from '@mantine/notifications'
import "@mantine/core/styles.css";
import '@mantine/carousel/styles.css';
import '@mantine/notifications/styles.css';
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { AuthProvider } from "./contexts/AuthContext";

if (import.meta.env.PROD) {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <AuthProvider>
				<Notifications/>
        <RouterProvider router={router} />
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);
