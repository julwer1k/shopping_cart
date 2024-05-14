import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Cart from "./Cart";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Cart />
  </StrictMode>,
  rootElement
);
