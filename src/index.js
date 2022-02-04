import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App type={"QR"} onResult={(res) => alert(res)} />
    <App type={"BR"} onResult={(res) => alert(res)} />
  </StrictMode>,
  rootElement
);
