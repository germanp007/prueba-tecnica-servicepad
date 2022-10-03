import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Datos } from "./contexto/Contexto";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Datos>
      <App />
    </Datos>
  </BrowserRouter>
  //</React.StrictMode>
);
