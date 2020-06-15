import React from "react";
import ReactDOM from "react-dom";
import { StylesProvider } from "@material-ui/core/styles";
import "./index.css";
import AppRoutes from "./AppRoutes";
import * as serviceWorker from "./serviceWorker";
import "typeface-roboto";

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <AppRoutes />
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
