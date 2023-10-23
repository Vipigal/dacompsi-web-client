import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./config/router";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if (import.meta.env.PROD) {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
